/* TeknikalDrill — penggambar grafik harga untuk soal baca chart.
   Menggambar SVG langsung dari deret OHLC yang menempel di soal:
   tidak ada berkas gambar, tajam di layar apa pun, dan seluruh warna
   diambil dari token tema sehingga ikut mode gelap maupun terang.

   Arah candle dikodekan lewat BENTUK (naik = badan berongga,
   turun = badan padat), bukan warna saja, supaya tetap terbaca oleh
   pembaca dengan buta warna dan saat dicetak hitam putih. */
(function () {
'use strict';
window.TD = window.TD || {};

const NS = 'http://www.w3.org/2000/svg';
const W = 720;                      // lebar viewBox; tinggi mengikuti panel
const PAD = { l: 8, r: 54, t: 14, b: 20 };

function el(name, attrs, text) {
  const n = document.createElementNS(NS, name);
  for (const k in attrs) if (attrs[k] !== undefined && attrs[k] !== null) n.setAttribute(k, attrs[k]);
  if (text !== undefined) n.textContent = text;
  return n;
}

/* ---- indikator yang dihitung di sisi klien ---- */
function sma(closes, period) {
  const out = [];
  for (let i = 0; i < closes.length; i++) {
    if (i < period - 1) { out.push(null); continue; }
    let s = 0;
    for (let j = i - period + 1; j <= i; j++) s += closes[j];
    out.push(s / period);
  }
  return out;
}

function ema(vals, period) {
  const k = 2 / (period + 1), out = [];
  let prev = null;
  vals.forEach((v, i) => {
    if (v === null || v === undefined) { out.push(null); return; }
    prev = prev === null ? v : v * k + prev * (1 - k);
    out.push(i < period - 1 ? null : prev);
  });
  return out;
}

function macd(closes, fast, slow, sig) {
  const ef = ema(closes, fast), es = ema(closes, slow);
  const line = closes.map((_, i) => (ef[i] === null || es[i] === null) ? null : ef[i] - es[i]);
  const valid = line.map(v => v === null ? null : v);
  const signal = ema(valid.filter(v => v !== null), sig);
  const firstIdx = line.findIndex(v => v !== null);
  const sigFull = line.map(() => null);
  signal.forEach((v, i) => { if (v !== null) sigFull[firstIdx + i] = v; });
  const hist = line.map((v, i) => (v === null || sigFull[i] === null) ? null : v - sigFull[i]);
  return { line, signal: sigFull, hist };
}

/* Ichimoku: hanya Tenkan, Kijun, dan awan (Senkou A & B) yang digambar,
   karena ketiganya yang dipakai membaca posisi harga terhadap kumo. */
function ichimoku(data, p1, p2, p3) {
  const hl = (i, n) => {
    if (i < n - 1) return null;
    let hi = -Infinity, lo = Infinity;
    for (let j = i - n + 1; j <= i; j++) { hi = Math.max(hi, data[j][1]); lo = Math.min(lo, data[j][2]); }
    return (hi + lo) / 2;
  };
  const tenkan = data.map((_, i) => hl(i, p1));
  const kijun = data.map((_, i) => hl(i, p2));
  const spanB = data.map((_, i) => hl(i, p3));
  const spanA = data.map((_, i) => (tenkan[i] === null || kijun[i] === null) ? null : (tenkan[i] + kijun[i]) / 2);
  // awan digeser maju p2 periode, sesuai konstruksi aslinya
  const shift = arr => arr.map((_, i) => (i - p2 >= 0 ? arr[i - p2] : null));
  return { tenkan, kijun, spanA: shift(spanA), spanB: shift(spanB) };
}

function bollinger(closes, period, mult) {
  const mid = sma(closes, period);
  const up = [], lo = [];
  for (let i = 0; i < closes.length; i++) {
    if (mid[i] === null) { up.push(null); lo.push(null); continue; }
    let sq = 0;
    for (let j = i - period + 1; j <= i; j++) sq += Math.pow(closes[j] - mid[i], 2);
    const sd = Math.sqrt(sq / period);
    up.push(mid[i] + mult * sd);
    lo.push(mid[i] - mult * sd);
  }
  return { mid, up, lo };
}

function rsi(closes, period) {
  const out = new Array(closes.length).fill(null);
  if (closes.length <= period) return out;
  let gain = 0, loss = 0;
  for (let i = 1; i <= period; i++) {
    const d = closes[i] - closes[i - 1];
    if (d >= 0) gain += d; else loss -= d;
  }
  let ag = gain / period, al = loss / period;
  out[period] = al === 0 ? 100 : 100 - 100 / (1 + ag / al);
  for (let i = period + 1; i < closes.length; i++) {
    const d = closes[i] - closes[i - 1];
    ag = (ag * (period - 1) + Math.max(d, 0)) / period;
    al = (al * (period - 1) + Math.max(-d, 0)) / period;
    out[i] = al === 0 ? 100 : 100 - 100 / (1 + ag / al);
  }
  return out;
}

/* ---- pemberi label sumbu harga: hanya nilai yang benar-benar dicapai grafik ---- */
function priceTicks(lo, hi, want) {
  const span = hi - lo;
  if (span <= 0) return [lo];
  const raw = span / want;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const step = [1, 2, 2.5, 5, 10].map(m => m * mag).find(s => s >= raw) || 10 * mag;
  const ticks = [];
  for (let v = Math.ceil(lo / step) * step; v <= hi + 1e-9; v += step) ticks.push(Math.round(v * 1000) / 1000);
  return ticks;
}

function fmtPrice(v) {
  if (Math.abs(v) >= 1000) return v.toLocaleString('id-ID', { maximumFractionDigits: 0 });
  if (Math.abs(v) >= 10) return v.toFixed(0);
  return v.toFixed(2);
}

/* Menyusun kolom point and figure dari deret penutupan.

   Aturannya: selama harga bergerak searah kolom berjalan sebesar minimal satu
   box, kotak baru ditambahkan pada kolom itu. Kolom baru berlawanan arah hanya
   dibuka bila harga berbalik sejauh reversal kali box. Karena syarat itulah
   pergerakan kecil tidak meninggalkan jejak sama sekali, dan sumbu waktu
   menjadi tidak seragam. */
function pfColumns(closes, box, reversal) {
  const kotak = p => Math.floor(p / box);           // indeks kotak untuk sebuah harga
  const kolom = [];
  let arah = 0, atas = 0, bawah = 0;

  closes.forEach(p => {
    const k = kotak(p);
    if (arah === 0) {                                // kolom pertama belum berarah
      if (!kolom.length) { kolom.push({ dir: 1, from: k, to: k }); atas = bawah = k; return; }
      if (k >= atas + 1) { arah = 1; atas = k; kolom[0] = { dir: 1, from: bawah, to: atas }; }
      else if (k <= bawah - 1) { arah = -1; bawah = k; kolom[0] = { dir: -1, from: atas, to: bawah }; }
      return;
    }
    const kini = kolom[kolom.length - 1];
    if (arah === 1) {
      if (k > atas) { atas = k; kini.to = k; }
      else if (k <= atas - reversal) {               // pembalikan cukup jauh: buka kolom O
        bawah = k; arah = -1;
        kolom.push({ dir: -1, from: atas - 1, to: k });
      }
    } else {
      if (k < bawah) { bawah = k; kini.to = k; }
      else if (k >= bawah + reversal) {              // pembalikan cukup jauh: buka kolom X
        atas = k; arah = 1;
        kolom.push({ dir: 1, from: bawah + 1, to: k });
      }
    }
  });
  return kolom;
}

/* ---- penggambar point and figure ---- */
function renderPF(spec) {
  const closes = (spec.data || []).map(d => Array.isArray(d) ? d[3] : d);
  if (!closes.length) return null;
  const box = spec.box || 10;
  const reversal = spec.reversal || 3;
  const kolom = pfColumns(closes, box, reversal);
  if (!kolom.length) return null;

  let kMin = Infinity, kMax = -Infinity;
  kolom.forEach(c => {
    kMin = Math.min(kMin, c.from, c.to);
    kMax = Math.max(kMax, c.from, c.to);
  });
  kMin -= 1; kMax += 1;

  const nBaris = kMax - kMin + 1;
  const nKolom = kolom.length;
  const cell = Math.max(9, Math.min(34, (W - PAD.l - PAD.r) / Math.max(nKolom, 4)));
  const H_PRICE = spec.height || Math.min(300, Math.max(150, nBaris * cell));
  const sel = H_PRICE / nBaris;                      // tinggi satu kotak harga
  const H = PAD.t + H_PRICE + PAD.b + 16;      // ruang tambahan untuk keterangan box

  const cx = i => PAD.l + cell * (i + 0.5);
  const cy = k => PAD.t + H_PRICE - (k - kMin + 0.5) * sel;

  const svg = el('svg', {
    viewBox: '0 0 ' + W + ' ' + H, class: 'tdc tdc-pf', role: 'img',
    preserveAspectRatio: 'xMidYMid meet',
    'aria-label': spec.alt || 'Grafik point and figure berisi kolom X dan O'
  });

  // kisi harga: satu garis per beberapa kotak supaya tidak terlalu padat
  const lompat = Math.max(1, Math.round(nBaris / 6));
  for (let k = kMin; k <= kMax; k++) {
    if ((k - kMin) % lompat) continue;
    const yy = cy(k) + sel / 2;
    svg.appendChild(el('line', { x1: PAD.l, y1: yy, x2: PAD.l + cell * nKolom, y2: yy, class: 'tdc-grid' }));
    svg.appendChild(el('text', { x: PAD.l + cell * nKolom + 7, y: yy + 3.5, class: 'tdc-axis' }, fmtPrice(k * box)));
  }

  kolom.forEach((c, i) => {
    const naik = c.dir === 1;
    const a = Math.min(c.from, c.to), b = Math.max(c.from, c.to);
    for (let k = a; k <= b; k++) {
      const X = cx(i), Y = cy(k), r = Math.min(cell, sel) * 0.34;
      if (naik) {
        svg.appendChild(el('line', { x1: X - r, y1: Y - r, x2: X + r, y2: Y + r, class: 'tdc-pf-x' }));
        svg.appendChild(el('line', { x1: X - r, y1: Y + r, x2: X + r, y2: Y - r, class: 'tdc-pf-x' }));
      } else {
        svg.appendChild(el('circle', { cx: X, cy: Y, r: r, class: 'tdc-pf-o' }));
      }
    }
  });

  (spec.overlays || []).filter(o => o.type === 'hline').forEach(o => {
    const yy = cy(Math.floor(o.price / box)) + sel / 2;
    svg.appendChild(el('line', { x1: PAD.l, y1: yy, x2: PAD.l + cell * nKolom, y2: yy, class: 'tdc-hline' }));
    if (o.label) svg.appendChild(el('text', { x: PAD.l + 4, y: yy - 4, class: 'tdc-label' }, o.label));
  });

  svg.appendChild(el('text', { x: PAD.l, y: PAD.t + H_PRICE + 30, class: 'tdc-panel-title' },
    'Box ' + box + ' · reversal ' + reversal + ' box (butuh ' + (box * reversal) + ' poin untuk kolom baru)'));
  return svg;
}

/* ---- penggambar utama ---- */
TD.renderChart = function (spec) {
  if (spec.kind === 'pf') return renderPF(spec);
  const data = spec.data || [];
  if (!data.length) return null;

  const closes = data.map(d => d[3]);
  const overlays = spec.overlays || [];
  const panels = spec.panels || [];
  const hasVol = panels.includes('volume') && data[0].length > 4;
  const hasRsi = panels.includes('rsi');

  const H_PRICE = spec.height || 260;
  const H_SUB = 68;
  const subCount = (hasVol ? 1 : 0) + (hasRsi ? 1 : 0) + (panels.includes('macd') ? 1 : 0);
  const H = PAD.t + H_PRICE + subCount * (H_SUB + 14) + PAD.b;

  // skala harga: rentang data ditambah setiap garis/zona overlay, diberi ruang 6%
  let lo = Math.min.apply(null, data.map(d => d[2]));
  let hi = Math.max.apply(null, data.map(d => d[1]));
  overlays.forEach(o => {
    [o.price, o.from, o.to].forEach(v => {
      if (typeof v === 'number') { lo = Math.min(lo, v); hi = Math.max(hi, v); }
    });
    [o.a, o.b].forEach(p => { if (Array.isArray(p)) { lo = Math.min(lo, p[1]); hi = Math.max(hi, p[1]); } });
  });
  const bbo = overlays.find(o => o.type === 'bb');
  if (bbo) {
    const bb = bollinger(closes, bbo.period || 20, bbo.mult || 2);
    bb.up.forEach(v => { if (v !== null) hi = Math.max(hi, v); });
    bb.lo.forEach(v => { if (v !== null) lo = Math.min(lo, v); });
  }
  const icho = overlays.find(o => o.type === 'ichimoku');
  if (icho) {
    const ic = ichimoku(data, icho.p1 || 9, icho.p2 || 26, icho.p3 || 52);
    [ic.spanA, ic.spanB, ic.tenkan, ic.kijun].forEach(arr =>
      arr.forEach(v => { if (v !== null) { hi = Math.max(hi, v); lo = Math.min(lo, v); } }));
  }
  const padY = (hi - lo) * 0.06 || 1;
  lo -= padY; hi += padY;

  const plotW = W - PAD.l - PAD.r;
  const step = plotW / data.length;
  const bw = Math.max(3, Math.min(14, step * 0.62));
  const x = i => PAD.l + step * (i + 0.5);
  const y = p => PAD.t + H_PRICE - ((p - lo) / (hi - lo)) * H_PRICE;

  const svg = el('svg', {
    viewBox: `0 0 ${W} ${H}`, class: 'tdc', role: 'img',
    preserveAspectRatio: 'xMidYMid meet',
    'aria-label': spec.alt || 'Grafik harga untuk soal ini'
  });

  // kisi + label harga (recessive, di belakang data)
  priceTicks(lo, hi, 5).forEach(v => {
    const yy = y(v);
    if (yy < PAD.t - 1 || yy > PAD.t + H_PRICE + 1) return;
    svg.appendChild(el('line', { x1: PAD.l, y1: yy, x2: W - PAD.r, y2: yy, class: 'tdc-grid' }));
    svg.appendChild(el('text', { x: W - PAD.r + 7, y: yy + 3.5, class: 'tdc-axis' }, fmtPrice(v)));
  });

  // Volume profile: histogram mendatar di sisi kanan, volume per LEVEL HARGA.
  // Berbeda dari panel volume biasa yang menghitung volume per satuan WAKTU.
  // Volume tiap batang disebar rata ke seluruh rentang high-low batang itu,
  // sehingga batang berentang lebar tidak menumpuk seluruh bobotnya di satu level.
  overlays.filter(o => o.type === 'vprofile').forEach(o => {
    const nB = o.buckets || 24;
    const lebar = plotW * (o.width || 0.26);
    const ember = new Array(nB).fill(0);
    const kotak = harga => Math.min(nB - 1, Math.max(0, Math.floor((harga - lo) / (hi - lo) * nB)));

    data.forEach(d => {
      const v = d[4] || 0;
      const a = kotak(d[2]), b = kotak(d[1]);
      const n = b - a + 1;
      for (let k = a; k <= b; k++) ember[k] += v / n;
    });

    const vmax = Math.max.apply(null, ember) || 1;
    const poc = ember.indexOf(vmax);                 // point of control: level tersibuk
    const tinggi = H_PRICE / nB;
    const x0 = W - PAD.r;                            // batang tumbuh ke KIRI dari tepi kanan

    ember.forEach((v, k) => {
      const w = (v / vmax) * lebar;
      if (w < 0.5) return;
      svg.appendChild(el('rect', {
        x: x0 - w, y: PAD.t + H_PRICE - (k + 1) * tinggi,
        width: w, height: Math.max(1, tinggi - 1),
        class: 'tdc-vp' + (k === poc ? ' is-poc' : '')
      }));
    });

    if (o.showPoc !== false) {
      const yy = PAD.t + H_PRICE - (poc + 0.5) * tinggi;
      svg.appendChild(el('line', { x1: PAD.l, y1: yy, x2: x0, y2: yy, class: 'tdc-poc' }));
      // Label diberi latar karena garis POC bisa jatuh tepat di atas candle,
      // dan tanpa latar teksnya menyatu dengan badan candle.
      const teks = o.label || 'POC';
      svg.appendChild(el('rect', {
        x: PAD.l + 1, y: yy - 14, width: teks.length * 7.2 + 8, height: 13,
        rx: 3, class: 'tdc-label-bg'
      }));
      svg.appendChild(el('text', { x: PAD.l + 5, y: yy - 4, class: 'tdc-label' }, teks));
    }
  });

  // zona (di belakang candle)
  overlays.filter(o => o.type === 'zone').forEach(o => {
    const y1 = y(Math.max(o.from, o.to)), y2 = y(Math.min(o.from, o.to));
    svg.appendChild(el('rect', { x: PAD.l, y: y1, width: plotW, height: Math.max(2, y2 - y1), class: 'tdc-zone' }));
    if (o.label) svg.appendChild(el('text', { x: PAD.l + 6, y: y1 - 4, class: 'tdc-label' }, o.label));
  });

  // Awan Ichimoku (digambar paling belakang)
  overlays.filter(o => o.type === 'ichimoku').forEach(o => {
    const ic = ichimoku(data, o.p1 || 9, o.p2 || 26, o.p3 || 52);
    const idx = [];
    ic.spanA.forEach((v, i) => { if (v !== null && ic.spanB[i] !== null) idx.push(i); });
    if (idx.length) {
      // awan dipecah per segmen agar warnanya mengikuti posisi span A terhadap span B
      let seg = [idx[0]];
      const flush = () => {
        if (seg.length < 2) { seg = []; return; }
        const up = ic.spanA[seg[0]] >= ic.spanB[seg[0]];
        let d = seg.map(i => 'L' + x(i) + ',' + y(ic.spanA[i])).join('').replace('L', 'M');
        d += seg.slice().reverse().map(i => 'L' + x(i) + ',' + y(ic.spanB[i])).join('') + 'Z';
        svg.appendChild(el('path', { d: d, class: 'tdc-kumo ' + (up ? 'is-up' : 'is-down') }));
        seg = [];
      };
      for (let k = 1; k < idx.length; k++) {
        const prevUp = ic.spanA[idx[k - 1]] >= ic.spanB[idx[k - 1]];
        const curUp = ic.spanA[idx[k]] >= ic.spanB[idx[k]];
        seg.push(idx[k]);
        if (prevUp !== curUp) { flush(); seg = [idx[k]]; }
      }
      flush();
      [['tenkan', 'tdc-tenkan'], ['kijun', 'tdc-kijun']].forEach(([key, cls]) => {
        let d = '';
        ic[key].forEach((v, i) => { if (v !== null) d += (d ? 'L' : 'M') + x(i) + ',' + y(v); });
        if (d) svg.appendChild(el('path', { d: d, class: cls }));
      });
    }
  });

  // Bollinger Bands (digambar sebelum candle agar tidak menutupi data)
  overlays.filter(o => o.type === 'bb').forEach(o => {
    const bb = bollinger(closes, o.period || 20, o.mult || 2);
    let area = '', top = '', bot = '';
    const idx = [];
    bb.up.forEach((v, i) => { if (v !== null) idx.push(i); });
    idx.forEach((i, k) => {
      top += (k ? 'L' : 'M') + x(i) + ',' + y(bb.up[i]);
      bot += (k ? 'L' : 'M') + x(i) + ',' + y(bb.lo[i]);
    });
    if (idx.length) {
      area = top + idx.slice().reverse().map(i => 'L' + x(i) + ',' + y(bb.lo[i])).join('') + 'Z';
      svg.appendChild(el('path', { d: area, class: 'tdc-bb-area' }));
      svg.appendChild(el('path', { d: top, class: 'tdc-bb' }));
      svg.appendChild(el('path', { d: bot, class: 'tdc-bb' }));
      let midP = '';
      idx.forEach((i, k) => { midP += (k ? 'L' : 'M') + x(i) + ',' + y(bb.mid[i]); });
      svg.appendChild(el('path', { d: midP, class: 'tdc-bb-mid' }));
      const first = idx[0];
      svg.appendChild(el('text', { x: x(first) + 4, y: y(bb.up[first]) - 6, class: 'tdc-label tdc-label-ma' },
        o.label || ('BB' + (o.period || 20))));
    }
  });

  // moving average
  overlays.filter(o => o.type === 'ma').forEach((o, idx) => {
    const vals = sma(closes, o.period);
    let d = '';
    vals.forEach((v, i) => { if (v !== null) d += (d ? 'L' : 'M') + x(i) + ',' + y(v); });
    if (d) {
      svg.appendChild(el('path', { d: d, class: 'tdc-ma tdc-ma-' + (idx % 2) }));
      const last = vals.length - 1;
      if (vals[last] !== null)
        // ditempatkan di dalam area plot agar tidak bertabrakan dengan label sumbu harga
        svg.appendChild(el('text', { x: x(last) - 6, y: y(vals[last]) - 6, class: 'tdc-label tdc-label-ma',
          'text-anchor': 'end' }, o.label || ('MA' + o.period)));
    }
  });

  // candle: naik = badan berongga, turun = badan padat
  data.forEach((d, i) => {
    const [o, h, l, c] = d;
    const up = c >= o;
    const cx = x(i);
    svg.appendChild(el('line', { x1: cx, y1: y(h), x2: cx, y2: y(l), class: 'tdc-wick ' + (up ? 'is-up' : 'is-down') }));
    const yTop = y(Math.max(o, c));
    svg.appendChild(el('rect', {
      x: cx - bw / 2, y: yTop, width: bw,
      height: Math.max(1.4, Math.abs(y(o) - y(c))),
      class: 'tdc-body ' + (up ? 'is-up' : 'is-down')
    }));
  });

  // garis horizontal (support / resistance)
  overlays.filter(o => o.type === 'hline').forEach(o => {
    const yy = y(o.price);
    svg.appendChild(el('line', { x1: PAD.l, y1: yy, x2: W - PAD.r, y2: yy, class: 'tdc-hline' }));
    if (o.label) svg.appendChild(el('text', { x: PAD.l + 6, y: yy - 5, class: 'tdc-label' }, o.label));
  });

  // garis miring (garis tren / neckline / channel)
  overlays.filter(o => o.type === 'line').forEach(o => {
    const x1 = x(o.a[0]), y1 = y(o.a[1]), x2 = x(o.b[0]), y2 = y(o.b[1]);
    svg.appendChild(el('line', { x1: x1, y1: y1, x2: x2, y2: y2, class: 'tdc-trend' }));
    if (o.label) {
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      svg.appendChild(el('text', { x: mx, y: my - 7, class: 'tdc-label', 'text-anchor': 'middle' }, o.label));
    }
  });

  // penanda huruf pada candle tertentu
  overlays.filter(o => o.type === 'marker').forEach(o => {
    const d = data[o.i];
    if (!d) return;
    const above = o.pos !== 'below';
    const yy = above ? y(d[1]) - 13 : y(d[2]) + 15;
    svg.appendChild(el('circle', { cx: x(o.i), cy: yy - 3.5, r: 8.5, class: 'tdc-mark-bg' }));
    svg.appendChild(el('text', { x: x(o.i), y: yy, class: 'tdc-mark', 'text-anchor': 'middle' }, o.text));
  });

  let yCur = PAD.t + H_PRICE + 14;

  // panel volume
  if (hasVol) {
    const vols = data.map(d => d[4] || 0);
    const vmax = Math.max.apply(null, vols) || 1;
    svg.appendChild(el('text', { x: PAD.l, y: yCur - 3, class: 'tdc-panel-title' }, 'Volume'));
    data.forEach((d, i) => {
      const hgt = (d[4] || 0) / vmax * H_SUB;
      svg.appendChild(el('rect', {
        x: x(i) - bw / 2, y: yCur + H_SUB - hgt, width: bw, height: Math.max(1, hgt),
        class: 'tdc-vol ' + (d[3] >= d[0] ? 'is-up' : 'is-down')
      }));
    });
    yCur += H_SUB + 14;
  }

  // panel MACD
  if (panels.includes('macd')) {
    const mc = macd(closes, 12, 26, 9);
    const all = mc.line.concat(mc.signal, mc.hist).filter(v => v !== null && isFinite(v));
    const mx = Math.max.apply(null, all.map(Math.abs)) || 1;
    const my = v => yCur + H_SUB / 2 - (v / mx) * (H_SUB / 2 - 4);
    svg.appendChild(el('text', { x: PAD.l, y: yCur - 3, class: 'tdc-panel-title' }, 'MACD (12, 26, 9)'));
    // garis nol dibuat tegas: posisi persilangan terhadap nol adalah
    // informasi yang dibaca dari panel ini, bukan sekadar latar
    svg.appendChild(el('line', { x1: PAD.l, y1: my(0), x2: W - PAD.r, y2: my(0), class: 'tdc-zero' }));
    svg.appendChild(el('text', { x: W - PAD.r + 7, y: my(0) + 3.5, class: 'tdc-axis' }, '0'));
    mc.hist.forEach((v, i) => {
      if (v === null) return;
      const y0 = my(0), y1 = my(v);
      svg.appendChild(el('rect', {
        x: x(i) - bw / 2, y: Math.min(y0, y1), width: bw, height: Math.max(1, Math.abs(y1 - y0)),
        class: 'tdc-macd-hist ' + (v >= 0 ? 'is-up' : 'is-down')
      }));
    });
    [['line', 'tdc-macd-line'], ['signal', 'tdc-macd-signal']].forEach(([key, cls]) => {
      let d = '';
      mc[key].forEach((v, i) => { if (v !== null) d += (d ? 'L' : 'M') + x(i) + ',' + my(v); });
      if (d) svg.appendChild(el('path', { d: d, class: cls }));
    });
    yCur += H_SUB + 14;
  }

  // panel RSI
  if (hasRsi) {
    const vals = rsi(closes, 14);
    const ry = v => yCur + H_SUB - (v / 100) * H_SUB;
    svg.appendChild(el('text', { x: PAD.l, y: yCur - 3, class: 'tdc-panel-title' }, 'RSI (14)'));
    [70, 30].forEach(lv => {
      svg.appendChild(el('line', { x1: PAD.l, y1: ry(lv), x2: W - PAD.r, y2: ry(lv), class: 'tdc-grid tdc-grid-dash' }));
      svg.appendChild(el('text', { x: W - PAD.r + 7, y: ry(lv) + 3.5, class: 'tdc-axis' }, String(lv)));
    });
    let d = '';
    vals.forEach((v, i) => { if (v !== null) d += (d ? 'L' : 'M') + x(i) + ',' + ry(v); });
    if (d) svg.appendChild(el('path', { d: d, class: 'tdc-rsi' }));
    (spec.rsiMarks || []).forEach(m => {
      const v = vals[m.i];
      if (v === null || v === undefined) return;
      svg.appendChild(el('circle', { cx: x(m.i), cy: ry(v), r: 4, class: 'tdc-rsi-dot' }));
    });
    yCur += H_SUB + 14;
  }

  return svg;
};

/* Menyisipkan grafik ke sebuah wadah, lengkap dengan judul dan teks alternatif. */
TD.mountChart = function (container, spec) {
  container.innerHTML = '';
  if (!spec) { container.hidden = true; return; }
  container.hidden = false;
  if (spec.title) {
    const cap = document.createElement('p');
    cap.className = 'tdc-title';
    cap.textContent = spec.title;
    container.appendChild(cap);
  }
  const svg = TD.renderChart(spec);
  if (svg) container.appendChild(svg);
};
})();
