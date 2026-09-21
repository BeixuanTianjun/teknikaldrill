#!/usr/bin/env node
/* Pembangkit soal baca chart.
   Menyintesis deret OHLC untuk tiap pola lalu menulis data/chart-questions.js.
   PRNG diberi seed tetap sehingga menjalankan ulang menghasilkan berkas identik.

   Jalankan: node tools/gen-chart-questions.js */
const fs = require('fs');
const path = require('path');

/* ---------- PRNG ber-seed (mulberry32) ---------- */
let _s = 0;
const seed = n => { _s = n >>> 0; };
const rnd = () => {
  _s |= 0; _s = (_s + 0x6D2B79F5) | 0;
  let t = Math.imul(_s ^ (_s >>> 15), 1 | _s);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
const jit = a => (rnd() - 0.5) * 2 * a;

/* ---------- deret OHLC dari jalur harga penutupan ---------- */
function fromPath(closes, o) {
  o = Object.assign({ wick: 0.35, vol: 1000, volNoise: 0.3, volBy: null }, o);
  const out = [];
  let prev = closes[0];
  for (let i = 0; i < closes.length; i++) {
    const c = closes[i];
    const body = Math.abs(c - prev) || Math.abs(c) * 0.004;
    const open = i === 0 ? c - body * 0.6 : prev + jit(body * 0.18);
    const hi = Math.max(open, c) + Math.abs(body) * (o.wick + rnd() * o.wick);
    const lo = Math.min(open, c) - Math.abs(body) * (o.wick + rnd() * o.wick);
    const vf = o.volBy ? o.volBy(i, closes.length) : 1;
    const v = Math.round(o.vol * vf * (1 + jit(o.volNoise)));
    out.push([r2(open), r2(hi), r2(lo), r2(c), v]);
    prev = c;
  }
  return out;
}
const r2 = v => Math.round(v * 100) / 100;

/* interpolasi linear antar titik belok, dengan derau kecil */
function leg(from, to, n, noise) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    const t = i / n;
    out.push(from + (to - from) * t + jit((Math.abs(to - from) || 1) * (noise === undefined ? 0.08 : noise)));
  }
  return out;
}
const legs = (start, points, noise) => {
  let cur = start, out = [start];
  points.forEach(([to, n]) => { out = out.concat(leg(cur, to, n, noise)); cur = to; });
  return out;
};

/* Versi yang ikut melaporkan indeks tiap titik belok, sehingga garis tren
   dapat ditarik melalui high/low yang benar-benar ada di data, bukan koordinat tebakan. */
const legsP = (start, points, noise) => {
  const closes = [start];
  const pivots = [{ i: 0, price: start }];
  let cur = start;
  points.forEach(([to, n]) => {
    closes.push.apply(closes, leg(cur, to, n, noise));
    cur = to;
    pivots.push({ i: closes.length - 1, price: to });
  });
  return { closes, pivots };
};

/* Garis lurus melalui dua pivot, memakai high (atas) atau low (bawah) sebenarnya,
   lalu diperpanjang sampai indeks akhir yang diminta. */
function thru(data, i1, i2, side, endIdx) {
  const v = (i, s) => s === 'high' ? data[i][1] : data[i][2];
  const y1 = v(i1, side), y2 = v(i2, side);
  const m = (y2 - y1) / (i2 - i1);
  const end = endIdx === undefined ? i2 : endIdx;
  return { a: [i1, y1], b: [end, y1 + m * (end - i1)] };
}

/* ---------- pembangun pola ---------- */
const P = {};

P.headShouldersTop = () => {
  const c = legs(1000, [[1180, 6], [1090, 4], [1300, 6], [1085, 5], [1175, 5], [1060, 5]]);
  return { data: fromPath(c, { vol: 1400, volBy: i => i < 6 ? 1.3 : i < 16 ? 1.0 : i < 26 ? 0.72 : 1.7 }),
           neck: 1088 };
};
P.doubleTop = () => {
  const c = legs(980, [[1240, 8], [1105, 5], [1235, 7], [1030, 6]]);
  return { data: fromPath(c, { vol: 1200, volBy: i => i < 8 ? 1.25 : i < 20 ? 0.8 : 1.5 }), neck: 1105 };
};
P.doubleBottom = () => {
  const c = legs(1250, [[980, 8], [1110, 5], [988, 6], [1230, 7]]);
  return { data: fromPath(c, { vol: 1200, volBy: i => i > 19 ? 1.6 : 0.85 }), neck: 1110 };
};
P.ascendingTriangle = () => {
  const L = legsP(900, [[1200, 5], [1010, 4], [1197, 4], [1075, 4], [1199, 4], [1120, 3], [1290, 4]]);
  const data = fromPath(L.closes, { vol: 1100, volBy: (i, n) => i > n - 5 ? 1.9 : 0.85 });
  const pv = L.pivots;
  return { data, res: 1200, lower: thru(data, pv[2].i, pv[6].i, 'low', pv[6].i) };
};
P.symmetricalTriangle = () => {
  const L = legsP(1000, [[1260, 5], [1020, 4], [1210, 4], [1065, 4], [1170, 4], [1105, 3], [1140, 3]]);
  const data = fromPath(L.closes, { vol: 1100, volBy: (i, n) => 1.4 - 0.8 * (i / n) });
  const pv = L.pivots, last = data.length - 1;
  return { data,
    upper: thru(data, pv[1].i, pv[5].i, 'high', last),
    lower: thru(data, pv[2].i, pv[6].i, 'low', last) };
};
P.bullFlag = () => {
  // tiang: naik tajam dalam sedikit batang; bendera: channel kecil yang jelas miring turun
  const L = legsP(880, [[1400, 5], [1330, 3], [1360, 2], [1285, 3], [1315, 2], [1245, 3], [1640, 7]]);
  const data = fromPath(L.closes, { vol: 1300, volBy: i => i < 6 ? 2.0 : i < 20 ? 0.45 : 2.0, wick: 0.3 });
  const pv = L.pivots;
  return { data,
    upper: thru(data, pv[1].i, pv[5].i, 'high', pv[6].i),
    lower: thru(data, pv[2].i, pv[6].i, 'low', pv[6].i) };
};
P.fallingWedge = () => {
  const L = legsP(1400, [[1180, 4], [1330, 3], [1130, 4], [1265, 3], [1105, 4], [1215, 3], [1095, 3], [1310, 6]]);
  const data = fromPath(L.closes, { vol: 1100, volBy: (i, n) => i > n - 7 ? 1.8 : 0.9 - 0.3 * (i / n) });
  const pv = L.pivots;
  return { data,
    upper: thru(data, pv[0].i, pv[4].i, 'high', pv[7].i),   // puncak menurun
    lower: thru(data, pv[1].i, pv[5].i, 'low', pv[7].i) };  // lembah menurun lebih landai
};
P.uptrendStructure = () => {
  const c = legs(800, [[980, 5], [900, 3], [1150, 5], [1050, 3], [1320, 5], [1215, 3], [1480, 5]]);
  return { data: fromPath(c, { vol: 1100 }) };
};
P.rangeSR = () => {
  const c = legs(1000, [[1200, 4], [1005, 4], [1195, 4], [998, 4], [1203, 4], [1002, 4], [1190, 4]]);
  return { data: fromPath(c, { vol: 950 }), sup: 1000, res: 1198 };
};
P.breakoutRetest = () => {
  const c = legs(950, [[1200, 4], [1010, 4], [1196, 4], [1040, 3], [1350, 5], [1215, 4], [1470, 6]]);
  return { data: fromPath(c, { vol: 1100, volBy: i => (i >= 15 && i <= 19) ? 2.1 : (i > 19 && i < 24) ? 0.6 : 0.95 }), lvl: 1200 };
};
P.goldenCross = () => {
  const c = legs(1560, [[1120, 24], [1180, 10], [1000, 22], [1140, 12], [1120, 8], [1420, 20]]);
  return { data: fromPath(c, { vol: 1000, wick: 0.26 }) };
};
P.rsiDivergence = () => {
  const c = legs(900, [[1300, 9], [1180, 5], [1390, 8], [1300, 4], [1420, 7], [1180, 6]]);
  return { data: fromPath(c, { vol: 1100, wick: 0.3 }) };
};
P.breakawayGap = () => {
  const c = legs(1000, [[1050, 5], [995, 4], [1045, 4], [1005, 4]]);
  const d = fromPath(c, { vol: 900 });
  const last = d[d.length - 1][3];
  // gap naik: seluruh rentang candle berikutnya di atas high sebelumnya
  const gapOpen = last * 1.085;
  d.push([r2(gapOpen), r2(gapOpen * 1.05), r2(gapOpen * 0.998), r2(gapOpen * 1.042), 4200]);
  const after = legs(gapOpen * 1.042, [[gapOpen * 1.16, 5]]);
  fromPath(after, { vol: 2200 }).slice(1).forEach(x => d.push(x));
  return { data: d };
};
P.cupHandle = () => {
  const cup = [];
  for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    cup.push(1200 - 270 * Math.sin(Math.PI * t) + jit(10));
  }
  // setelah bibir cangkir: koreksi dangkal (handle) sekitar 7 persen, lalu breakout
  const c = [1200].concat(cup.slice(1), leg(1195, 1112, 4, 0.04), leg(1112, 1128, 2, 0.04), leg(1128, 1330, 6));
  return { data: fromPath(c, { vol: 1100, volBy: (i, n) => i > n - 7 ? 1.9 : (i > 6 && i < 15 ? 0.5 : (i > n - 14 ? 0.6 : 0.95)) }),
           lip: 1200 };
};
P.elliottImpulse = () => {
  const c = legs(800, [[1050, 4], [930, 3], [1420, 7], [1300, 4], [1540, 5]]);
  return { data: fromPath(c, { vol: 1100, volBy: i => (i >= 8 && i <= 14) ? 1.7 : 0.9 }) };
};

/* ---------- pola candlestick: tren dasar + formasi eksplisit ---------- */
function trendThen(startPrice, dir, n, candles, volBase) {
  const pts = [];
  let p = startPrice;
  for (let i = 0; i < n; i++) { p += dir * (p * 0.018) + jit(p * 0.007); pts.push(p); }
  const base = fromPath(pts, { vol: volBase || 1000 });
  return base.concat(candles(pts[pts.length - 1]));
}
const C = (o, h, l, c, v) => [r2(o), r2(h), r2(l), r2(c), v];

const CS = {
  hammer: () => trendThen(1400, -1, 10, p => [C(p * 0.995, p * 1.002, p * 0.945, p * 0.998, 2600)], 1000),
  shootingStar: () => trendThen(1000, 1, 10, p => [C(p * 1.004, p * 1.058, p * 1.001, p * 1.007, 2500)], 1000),
  bullishEngulf: () => trendThen(1300, -1, 9, p => [
    C(p * 0.999, p * 1.004, p * 0.978, p * 0.981, 900),
    C(p * 0.979, p * 1.028, p * 0.976, p * 1.024, 2900)], 1000),
  bearishEngulf: () => trendThen(1000, 1, 9, p => [
    C(p * 1.001, p * 1.022, p * 0.998, p * 1.019, 900),
    C(p * 1.021, p * 1.024, p * 0.974, p * 0.977, 2900)], 1000),
  morningStar: () => trendThen(1350, -1, 9, p => [
    C(p * 1.0, p * 1.003, p * 0.962, p * 0.965, 1800),
    C(p * 0.958, p * 0.968, p * 0.949, p * 0.962, 700),
    C(p * 0.968, p * 1.012, p * 0.966, p * 1.008, 2700)], 1000),
  eveningStar: () => trendThen(1000, 1, 9, p => [
    C(p * 1.0, p * 1.038, p * 0.998, p * 1.035, 1800),
    C(p * 1.041, p * 1.05, p * 1.036, p * 1.044, 700),
    C(p * 1.036, p * 1.038, p * 0.996, p * 0.999, 2700)], 1000),
  harami: () => trendThen(1000, 1, 9, p => [
    C(p * 1.0, p * 1.032, p * 0.997, p * 1.029, 2200),
    C(p * 1.018, p * 1.024, p * 1.008, p * 1.012, 700)], 1000),
  doji: () => trendThen(1000, 1, 11, p => [C(p * 1.002, p * 1.021, p * 0.984, p * 1.0025, 2400)], 1000),
  threeBlackCrows: () => trendThen(1000, 1, 8, p => [
    C(p * 1.0, p * 1.004, p * 0.972, p * 0.975, 2100),
    C(p * 0.973, p * 0.977, p * 0.947, p * 0.95, 2400),
    C(p * 0.949, p * 0.952, p * 0.922, p * 0.925, 2600)], 1000),
  tweezerTop: () => trendThen(1000, 1, 9, p => [
    C(p * 1.0, p * 1.041, p * 0.997, p * 1.036, 1900),
    C(p * 1.034, p * 1.0412, p * 1.005, p * 1.009, 2300)], 1000),
  marubozu: () => trendThen(1000, 1, 9, p => [C(p * 1.0005, p * 1.046, p * 1.0, p * 1.0455, 3100)], 1000)
};


/* ---------- pola tambahan ---------- */
P.descendingTriangle = () => {
  const L = legsP(1400, [[1000, 5], [1190, 4], [1005, 4], [1120, 4], [1002, 4], [1070, 3], [900, 5]]);
  const data = fromPath(L.closes, { vol: 1100, volBy: (i, n) => i > n - 6 ? 1.9 : 0.85 });
  const pv = L.pivots;
  return { data, sup: 1002, upper: thru(data, pv[2].i, pv[6].i, 'high', pv[6].i) };
};
P.risingWedge = () => {
  const L = legsP(1000, [[1210, 5], [1120, 3], [1290, 4], [1215, 3], [1340, 4], [1285, 3], [1370, 3], [1150, 5]]);
  const data = fromPath(L.closes, { vol: 1100, volBy: (i, n) => i > n - 6 ? 1.8 : 1.15 - 0.5 * (i / n) });
  const pv = L.pivots;
  return { data, upper: thru(data, pv[1].i, pv[5].i, 'high', pv[7].i), lower: thru(data, pv[2].i, pv[6].i, 'low', pv[7].i) };
};
P.inverseHeadShoulders = () => {
  const L = legsP(1400, [[1220, 6], [1310, 4], [1100, 6], [1315, 5], [1225, 5], [1430, 6]]);
  const data = fromPath(L.closes, { vol: 1300, volBy: (i, n) => i > n - 7 ? 1.9 : 0.85 });
  return { data, neck: 1312 };
};
P.tripleBottom = () => {
  const L = legsP(1300, [[1000, 5], [1130, 3], [1005, 4], [1125, 3], [1002, 4], [1260, 6]]);
  const data = fromPath(L.closes, { vol: 1100, volBy: (i, n) => i > n - 7 ? 1.9 : 0.8 });
  return { data, sup: 1002, res: 1128 };
};
P.channelUp = () => {
  const L = legsP(900, [[1080, 4], [1000, 3], [1190, 4], [1110, 3], [1300, 4], [1220, 3], [1400, 4]]);
  const data = fromPath(L.closes, { vol: 1050 });
  const pv = L.pivots;
  return { data, upper: thru(data, pv[1].i, pv[5].i, 'high', pv[7].i), lower: thru(data, pv[2].i, pv[6].i, 'low', pv[7].i) };
};
P.roundingBottom = () => {
  const arr = [];
  for (let i = 0; i <= 26; i++) { const t = i / 26; arr.push(1200 - 300 * Math.sin(Math.PI * t) + jit(8)); }
  const c = [1200].concat(arr.slice(1), leg(arr[26], 1290, 4));
  return { data: fromPath(c, { vol: 1000, volBy: (i, n) => (i > 8 && i < 18) ? 0.42 : (i > n - 6 ? 1.7 : 0.9) }) };
};
P.islandReversal = () => {
  const up = legs(1000, [[1280, 9]]);
  const d = fromPath(up, { vol: 1100 });
  const top = d[d.length - 1][3];
  const g = top * 1.055;                       // gap naik
  [0, 1, 2].forEach(k => {
    const o = g * (1 + k * 0.004), c = g * (1 + k * 0.004 + (k === 1 ? 0.006 : -0.004));
    d.push([r2(o), r2(Math.max(o, c) * 1.012), r2(Math.min(o, c) * 0.994), r2(c), 2600]);
  });
  const lowAfter = top * 0.996;                // gap turun kembali ke bawah level sebelum gap
  const down = legs(lowAfter, [[top * 0.9, 6]]);
  const dd = fromPath(down, { vol: 2300 });
  dd.forEach(x => d.push(x));
  return { data: d };
};
P.measuringGap = () => {
  const c1 = legs(1000, [[1200, 7]]);
  const d = fromPath(c1, { vol: 1200 });
  const last = d[d.length - 1][3];
  const g = last * 1.06;
  d.push([r2(g), r2(g * 1.03), r2(g * 0.997), r2(g * 1.025), 3400]);
  const after = legs(g * 1.025, [[1420, 6]]);
  fromPath(after, { vol: 1800 }).slice(1).forEach(x => d.push(x));
  return { data: d, gapAt: d.length - 8 };
};
P.exhaustionGap = () => {
  const c1 = legs(900, [[1450, 14]]);
  const d = fromPath(c1, { vol: 1200, volBy: (i, n) => 0.7 + 1.1 * (i / n) });
  const last = d[d.length - 1][3];
  const g = last * 1.07;
  d.push([r2(g), r2(g * 1.025), r2(g * 0.995), r2(g * 1.01), 5200]);       // gap + volume ekstrem
  d.push([r2(g * 1.005), r2(g * 1.012), r2(g * 0.93), r2(g * 0.935), 4800]); // langsung berbalik
  const after = legs(g * 0.935, [[last * 0.93, 5]]);
  fromPath(after, { vol: 2600 }).slice(1).forEach(x => d.push(x));
  return { data: d };
};
P.deathCross = () => {
  // MA50 baru punya nilai di batang ke-50, jadi tren naik dibuat cukup panjang
  // agar MA20 sudah berada DI ATAS MA50 sebelum penurunan dimulai — tanpa itu
  // persilangannya terjadi di luar grafik dan soal tidak bisa dijawab.
  const c = legs(900, [[1180, 22], [1120, 10], [1420, 24], [1360, 10], [1180, 16], [1240, 8], [980, 18]]);
  return { data: fromPath(c, { vol: 1000, wick: 0.26 }) };
};
P.rsiBullDivergence = () => {
  const c = legs(1400, [[1080, 9], [1200, 5], [1010, 8], [1090, 4], [985, 7], [1210, 6]]);
  return { data: fromPath(c, { vol: 1100, wick: 0.3 }) };
};
P.bbSqueeze = () => {
  const c = legs(1000, [[1060, 5], [995, 5], [1045, 5], [1012, 6], [1026, 7], [1016, 6], [1022, 6], [1125, 8]]);
  return { data: fromPath(c, { vol: 1000, wick: 0.22, volBy: (i, n) => i > n - 9 ? 2.0 : 0.55 }) };
};
P.maBounce = () => {
  const c = legs(900, [[1150, 10], [1075, 4], [1330, 10], [1245, 4], [1500, 10]]);
  return { data: fromPath(c, { vol: 1050, wick: 0.3 }) };
};
P.fibRetrace = () => {
  // Ayunan harus PERSIS 1.000 -> 1.500, dan koreksi berhenti tepat di 61,8 persen (1.191),
  // karena soalnya menanyakan level retracement yang dibaca dari grafik. Sumbu candle
  // yang menembus melewati anchor akan membuat jawabannya keliru, jadi ekstremnya dikunci.
  const L = legsP(1000, [[1488, 11], [1200, 7], [1460, 8]], 0.04);
  const data = fromPath(L.closes, { vol: 1100, wick: 0.18 });
  const iHi = L.pivots[1].i, iLo = L.pivots[2].i;
  const HI = 1500, LO = 1191;
  data.forEach((b, i) => {
    // tidak ada batang yang boleh melewati puncak ayunan
    b[1] = Math.min(b[1], i === iHi ? HI : HI - 6);
    b[1] = Math.max(b[1], Math.max(b[0], b[3]));
    // selama fase koreksi, tidak ada batang yang boleh menembus di bawah level 61,8 persen
    if (i > iHi && i <= iLo + 1) {
      b[2] = Math.max(b[2], i === iLo ? LO : LO + 5);
      b[2] = Math.min(b[2], Math.min(b[0], b[3]));
    }
  });
  data[iHi][1] = HI;                       // puncak ayunan tepat di 1.500
  data[iLo][2] = LO;                       // dasar koreksi tepat di 61,8 persen
  data[iLo][0] = Math.max(data[iLo][0], LO);
  data[iLo][3] = Math.max(data[iLo][3], LO);
  return { data, lo: 1000, hi: HI, iHi, iLo };
};
P.sellingClimax = () => {
  const c = legs(1400, [[1020, 11], [975, 2]]);
  const d = fromPath(c, { vol: 1100, volBy: (i, n) => 0.7 + 0.5 * (i / n) });
  const last = d[d.length - 1][3];
  // batang klimaks: rentang lebar, volume ekstrem, ditutup jauh di atas titik terendah
  d.push([r2(last), r2(last * 1.012), r2(last * 0.90), r2(last * 1.005), 7200]);
  const after = legs(last * 1.005, [[last * 1.11, 5]]);
  fromPath(after, { vol: 2400 }).slice(1).forEach(x => d.push(x));
  return { data: d };
};
P.volumeDivergence = () => {
  const c = legs(1000, [[1120, 6], [1080, 3], [1220, 6], [1180, 3], [1300, 6]]);
  return { data: fromPath(c, { vol: 2600, volBy: (i, n) => 1.3 - 0.85 * (i / n) }) };
};

CS.hangingMan = () => trendThen(1000, 1, 11, p => [C(p * 1.002, p * 1.006, p * 0.952, p * 1.004, 2500)], 1000);
CS.invertedHammer = () => trendThen(1400, -1, 11, p => [C(p * 0.997, p * 1.052, p * 0.994, p * 1.0, 2500)], 1000);
CS.piercingLine = () => trendThen(1350, -1, 9, p => [
  C(p * 1.0, p * 1.004, p * 0.968, p * 0.971, 1700),
  C(p * 0.962, p * 1.0, p * 0.959, p * 0.996, 2800)], 1000);
CS.darkCloudCover = () => trendThen(1000, 1, 9, p => [
  C(p * 1.0, p * 1.034, p * 0.998, p * 1.031, 1700),
  C(p * 1.042, p * 1.045, p * 1.006, p * 1.009, 2800)], 1000);
CS.threeWhiteSoldiers = () => trendThen(1200, -1, 8, p => [
  C(p * 1.0, p * 1.029, p * 0.997, p * 1.026, 2200),
  C(p * 1.024, p * 1.055, p * 1.021, p * 1.052, 2500),
  C(p * 1.05, p * 1.082, p * 1.047, p * 1.079, 2700)], 1000);
CS.tweezerBottom = () => trendThen(1400, -1, 9, p => [
  C(p * 1.0, p * 1.003, p * 0.962, p * 0.967, 1900),
  C(p * 0.97, p * 1.005, p * 0.9622, p * 1.002, 2400)], 1000);
CS.bullishHarami = () => trendThen(1350, -1, 9, p => [
  C(p * 1.0, p * 1.003, p * 0.966, p * 0.969, 2200),
  C(p * 0.976, p * 0.99, p * 0.973, p * 0.987, 700)], 1000);
CS.dragonflyDoji = () => trendThen(1350, -1, 10, p => [C(p * 1.0, p * 1.004, p * 0.955, p * 1.001, 2600)], 1000);
CS.gravestoneDoji = () => trendThen(1000, 1, 10, p => [C(p * 1.001, p * 1.048, p * 0.999, p * 1.0015, 2600)], 1000);

/* ---------- daftar soal ---------- */
const Q = [];
const add = q => Q.push(q);

function build() {
  let n = 0;
  const id = m => m + '-chart-' + String(++n).padStart(3, '0');

  /* --- rta-trend --- */
  seed(101); { const p = P.headShouldersTop();
  add({ id: 'rta-trend-chart-001', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham ABCD · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'line', a: [10, p.neck], b: [26, p.neck], label: 'Neckline' }],
      alt: 'Tiga puncak dengan puncak tengah tertinggi di atas sebuah neckline mendatar' },
    q: 'Pola apa yang terbentuk pada grafik ini, dan apa implikasinya?',
    options: ['Head and shoulders top — implikasi bearish setelah neckline ditembus',
              'Cup and handle — implikasi bullish', 'Segitiga menaik — implikasi bullish',
              'Double bottom — implikasi bullish'],
    answer: 0,
    explain: 'Terlihat tiga puncak dengan puncak tengah (head) paling tinggi, diapit dua bahu yang lebih rendah, dan kedua lembah di antaranya membentuk neckline. Volume juga menipis dari bahu kiri ke head ke bahu kanan lalu melonjak saat neckline ditembus — konfirmasi klasik pola pembalikan bearish ini.' });

  add({ id: 'rta-trend-chart-002', module: 'rta-trend', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham ABCD · Harian', data: p.data, panels: [],
      overlays: [{ type: 'line', a: [10, p.neck], b: [26, p.neck], label: 'Neckline' },
                 { type: 'marker', i: 16, text: 'H' }],
      alt: 'Head and shoulders dengan puncak head ditandai H dan neckline mendatar' },
    q: 'Puncak head berada di sekitar 1.300 dan neckline di sekitar 1.088. Berapa target minimum proyeksi pola ini?',
    options: ['Sekitar 1.000', 'Sekitar 876', 'Sekitar 1.194', 'Sekitar 788'],
    answer: 1,
    explain: 'Tinggi pola diukur dari puncak head ke neckline: 1.300 dikurangi 1.088 sama dengan 212 poin. Target minimum adalah titik breakout dikurangi tinggi pola, yaitu 1.088 dikurangi 212 sama dengan 876. Ini target minimum, bukan batas maksimum, dan tetap perlu dicek terhadap level support historis.' }); }

  seed(202); { const p = P.doubleTop();
  add({ id: 'rta-trend-chart-003', module: 'rta-trend', level: 'RTA', difficulty: 'mudah',
    chart: { title: 'Saham EFGH · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.neck, label: 'Level konfirmasi' }],
      alt: 'Dua puncak pada ketinggian hampir sama dengan satu lembah di antaranya' },
    q: 'Pola pada grafik ini paling tepat disebut...',
    options: ['Double top', 'Double bottom', 'Bull flag', 'Segitiga simetris'],
    answer: 0,
    explain: 'Harga gagal menembus area resistance yang sama dua kali dan membentuk dua puncak setara, dengan satu lembah di antaranya. Pola baru dianggap sah setelah harga menembus lembah tersebut, yang pada grafik ditandai garis level konfirmasi.' }); }

  seed(303); { const p = P.doubleBottom();
  add({ id: 'rta-trend-chart-004', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham IJKL · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.neck, label: 'Neckline' }],
      alt: 'Dua dasar setara diikuti penembusan ke atas neckline dengan volume membesar' },
    q: 'Berdasarkan grafik, tindakan yang paling sesuai prinsip analisis teknikal adalah...',
    options: ['Menjual karena harga sudah naik dari dasar',
              'Mempertimbangkan posisi beli setelah penembusan neckline yang didukung volume, dengan stop di bawah dasar terakhir',
              'Menunggu harga kembali ke dasar sebelumnya',
              'Mengabaikan pola karena tidak ada tren sebelumnya'],
    answer: 1,
    explain: 'Double bottom adalah pola pembalikan bullish yang sah setelah neckline ditembus, dan pada grafik penembusan itu disertai volume yang membesar. Level pembatalan skenario yang logis berada di bawah dasar terakhir, sehingga stop ditempatkan di sana.' }); }

  seed(404); { const p = P.ascendingTriangle();
  add({ id: 'rta-trend-chart-005', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham MNOP · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.res, label: 'Resistance mendatar' },
                 { type: 'line', a: p.lower.a, b: p.lower.b, label: 'Support menaik' }],
      alt: 'Resistance mendatar dengan rangkaian lembah yang makin tinggi, lalu breakout ke atas' },
    q: 'Pola ini dikenal sebagai segitiga menaik. Apa yang membuatnya condong bullish?',
    options: ['Karena resistance-nya mendatar',
              'Karena lembah makin tinggi, menandakan pembeli makin agresif menyerap pasokan di level yang sama',
              'Karena volumenya selalu menurun',
              'Karena selalu muncul di akhir tren turun'],
    answer: 1,
    explain: 'Resistance mendatar menunjukkan pasokan terkumpul di satu level, sementara lembah yang terus meninggi menunjukkan pembeli bersedia membayar makin mahal. Ketimpangan itu biasanya berakhir dengan pasokan habis dan harga menembus ke atas, seperti terlihat di ujung kanan grafik.' }); }

  seed(505); { const p = P.symmetricalTriangle();
  add({ id: 'rta-trend-chart-006', module: 'rta-trend', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham QRST · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'line', a: p.upper.a, b: p.upper.b, label: 'Batas atas' },
                 { type: 'line', a: p.lower.a, b: p.lower.b, label: 'Batas bawah' }],
      alt: 'Dua garis konvergen menyempit dengan volume yang terus menipis' },
    q: 'Grafik menunjukkan segitiga simetris dengan volume yang terus menipis. Kesimpulan yang paling tepat adalah...',
    options: ['Harga pasti menembus ke atas',
              'Harga pasti menembus ke bawah',
              'Arah penembusan belum dapat dipastikan; yang pasti hanya volatilitas sedang terkompresi dan ekspansi biasanya menyusul',
              'Pola ini tidak punya implikasi apa pun'],
    answer: 2,
    explain: 'Segitiga simetris adalah pola kompresi dari dua sisi tanpa bias arah yang jelas, berbeda dari segitiga menaik atau menurun. Volume yang menipis menegaskan keseimbangan sementara. Analis menyiapkan rencana untuk kedua arah dan menunggu penembusan, yang paling andal terjadi di setengah sampai tiga perempat panjang pola.' }); }

  seed(606); { const p = P.bullFlag();
  add({ id: 'rta-trend-chart-007', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham UVWX · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'line', a: p.upper.a, b: p.upper.b }, { type: 'line', a: p.lower.a, b: p.lower.b, label: 'Bendera' }],
      alt: 'Kenaikan tajam, konsolidasi miring turun bervolume tipis, lalu kenaikan tajam lagi' },
    q: 'Pola konsolidasi miring turun setelah kenaikan tajam pada grafik ini disebut...',
    options: ['Bull flag, pola penerusan', 'Head and shoulders, pola pembalikan',
              'Rounding bottom, pola pembalikan', 'Broadening formation'],
    answer: 0,
    explain: 'Kenaikan tajam membentuk flagpole, lalu harga terkonsolidasi dalam channel kecil yang miring melawan arah tren dengan volume menipis. Setelah jeda itu selesai, tren berlanjut. Targetnya diukur sepanjang tiang bendera yang diproyeksikan dari titik breakout.' }); }

  seed(707); { const p = P.fallingWedge();
  add({ id: 'rta-trend-chart-008', module: 'rta-trend', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham YZAB · Harian', data: p.data, panels: [],
      overlays: [{ type: 'line', a: p.upper.a, b: p.upper.b, label: 'Batas atas' },
                 { type: 'line', a: p.lower.a, b: p.lower.b, label: 'Batas bawah' }],
      alt: 'Dua garis menurun yang menyempit, garis atas lebih curam, lalu penembusan ke atas' },
    q: 'Pola menyempit yang kedua garisnya menurun seperti pada grafik ini umumnya berimplikasi...',
    options: ['Bearish, kelanjutan tren turun', 'Bullish, potensi pembalikan ke atas',
              'Netral tanpa implikasi arah', 'Selalu berakhir sideways'],
    answer: 1,
    explain: 'Ini falling wedge. Garis atas menurun lebih curam daripada garis bawah, artinya laju penurunan melambat dan tekanan jual menipis. Penembusan ke atas garis atas wedge menjadi sinyal pembalikan bullish, seperti yang terjadi di ujung kanan grafik.' }); }

  seed(808); { const p = P.uptrendStructure();
  add({ id: 'rta-trend-chart-009', module: 'rta-trend', level: 'RTA', difficulty: 'mudah',
    chart: { title: 'Saham CDEF · Harian', data: p.data, panels: [],
      alt: 'Rangkaian puncak dan lembah yang keduanya terus meninggi' },
    q: 'Struktur harga pada grafik ini menunjukkan...',
    options: ['Downtrend, karena lower high dan lower low',
              'Uptrend, karena higher high dan higher low',
              'Sideways, karena harga bergerak di rentang tetap',
              'Tidak ada struktur yang bisa dibaca'],
    answer: 1,
    explain: 'Setiap puncak baru lebih tinggi dari puncak sebelumnya dan setiap lembah juga lebih tinggi dari lembah sebelumnya. Itu definisi uptrend. Selama struktur ini terjaga, tren dianggap masih utuh meskipun ada koreksi di tengah jalan.' }); }

  seed(909); { const p = P.cupHandle();
  add({ id: 'rta-trend-chart-010', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham GHIJ · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.lip, label: 'Bibir cangkir' }],
      alt: 'Dasar melengkung menyerupai huruf U diikuti koreksi dangkal lalu breakout' },
    q: 'Pola berbentuk U yang diikuti koreksi dangkal lalu breakout seperti grafik ini disebut...',
    options: ['Cup and handle', 'V bottom', 'Island reversal', 'Diamond top'],
    answer: 0,
    explain: 'Bagian cup yang melengkung landai menunjukkan pergantian kepemilikan bertahap tanpa kepanikan, dan volume mengering di dasarnya. Handle adalah koreksi dangkal yang membersihkan pemegang lemah, lalu breakout di atas bibir cangkir dengan volume besar menjadi pemicu sinyal beli.' }); }

  /* --- rta-level --- */
  seed(1010); { const p = P.rangeSR();
  add({ id: 'rta-level-chart-001', module: 'rta-level', level: 'RTA', difficulty: 'mudah',
    chart: { title: 'Saham KLMN · Harian', data: p.data, panels: [],
      overlays: [{ type: 'hline', price: p.res, label: 'Resistance' }, { type: 'hline', price: p.sup, label: 'Support' }],
      alt: 'Harga terpantul berulang antara dua level mendatar' },
    q: 'Berdasarkan grafik, strategi yang paling sesuai selama rentang ini masih berlaku adalah...',
    options: ['Beli saat menyentuh resistance, jual saat menyentuh support',
              'Beli mendekati support, jual mendekati resistance, dengan stop di luar rentang',
              'Beli di tengah rentang tanpa stop loss',
              'Hindari semua transaksi karena grafik tidak bisa dibaca'],
    answer: 1,
    explain: 'Pada pasar yang bergerak dalam rentang, harga berulang kali tertahan di support dan tertolak di resistance. Strategi yang logis adalah beli dekat support dan jual dekat resistance. Stop ditempatkan di luar rentang karena penembusan berarti rentangnya sudah tidak berlaku lagi.' }); }

  seed(1111); { const p = P.breakoutRetest();
  add({ id: 'rta-level-chart-002', module: 'rta-level', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham OPQR · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.lvl, label: 'Level 1.200' }],
      alt: 'Resistance ditembus dengan volume besar lalu diuji ulang dari atas sebelum melanjutkan kenaikan' },
    q: 'Setelah level 1.200 ditembus, harga kembali turun menyentuhnya lalu memantul naik. Fenomena ini disebut...',
    options: ['False breakout', 'Role reversal — bekas resistance berubah menjadi support',
              'Exhaustion gap', 'Divergensi bearish'],
    answer: 1,
    explain: 'Setelah resistance ditembus, pihak yang sebelumnya menjual di level itu kini ingin masuk kembali, sementara pembeli awal menambah posisi. Tekanan beli tersebut membuat bekas resistance berperan sebagai support. Pengujian ulang seperti ini memberi peluang masuk dengan risiko lebih terukur karena stop bisa ditempatkan tepat di bawah level.' }); }

  seed(1212); { const p = P.breakawayGap();
  add({ id: 'rta-level-chart-003', module: 'rta-level', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham STUV · Harian', data: p.data, panels: ['volume'],
      alt: 'Celah harga kosong setelah konsolidasi mendatar, disertai volume sangat besar' },
    q: 'Celah harga yang muncul setelah konsolidasi mendatar dan disertai lonjakan volume seperti pada grafik ini adalah...',
    options: ['Common gap yang akan segera tertutup', 'Breakaway gap yang menandai awal tren baru',
              'Exhaustion gap yang menandai akhir tren', 'Kesalahan data'],
    answer: 1,
    explain: 'Breakaway gap muncul saat harga keluar dari basis konsolidasi dengan dukungan volume besar, menandakan perubahan sentimen yang nyata. Gap jenis ini jarang tertutup dalam waktu dekat dan sering menjadi titik awal tren yang kuat, berbeda dari exhaustion gap yang muncul di ujung tren.' }); }

  /* --- rta-indikator --- */
  seed(1313); { const p = P.goldenCross();
  add({ id: 'rta-ind-chart-001', module: 'rta-indikator', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham WXYZ · Harian', data: p.data, panels: [], height: 250,
      overlays: [{ type: 'ma', period: 20, label: 'MA20' }, { type: 'ma', period: 50, label: 'MA50' }],
      alt: 'Rata-rata bergerak 20 hari memotong ke atas rata-rata 50 hari setelah tren turun berakhir' },
    q: 'Pada bagian kanan grafik, MA20 memotong ke atas MA50. Peristiwa ini disebut...',
    options: ['Death cross', 'Golden cross', 'Divergensi bullish', 'Bollinger squeeze'],
    answer: 1,
    explain: 'Persilangan rata-rata bergerak periode pendek ke atas periode panjang disebut golden cross dan dibaca sebagai konfirmasi tren naik jangka menengah. Kebalikannya, death cross, terjadi ketika MA pendek memotong ke bawah MA panjang. Sinyal ini bersifat lagging sehingga muncul setelah sebagian pergerakan terjadi.' }); }

  seed(1414); { const p = P.rsiDivergence();
  add({ id: 'rta-ind-chart-002', module: 'rta-indikator', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham ABCX · Harian', data: p.data, panels: ['rsi'], height: 220,
      overlays: [{ type: 'marker', i: 17, text: '1' }, { type: 'marker', i: 28, text: '2' }],
      alt: 'Harga membentuk puncak kedua lebih tinggi sementara RSI membentuk puncak kedua lebih rendah' },
    q: 'Harga mencetak puncak 2 lebih tinggi dari puncak 1, tetapi RSI justru mencetak puncak yang lebih rendah. Kondisi ini disebut...',
    options: ['Konfirmasi bullish', 'Divergensi bearish', 'Hidden divergence bullish', 'Golden cross'],
    answer: 1,
    explain: 'Divergensi bearish terjadi ketika harga masih mencetak puncak baru tetapi momentum yang mendorongnya menurun. Ini peringatan dini bahwa tren kehilangan tenaga, bukan sinyal jual langsung. Umumnya analis menunggu konfirmasi berupa kerusakan struktur harga, misalnya penembusan lembah terakhir.' }); }

  /* --- rta-chart --- */
  seed(1515);
  add({ id: 'rta-chart-chart-001', module: 'rta-chart', level: 'RTA', difficulty: 'mudah',
    chart: { title: 'Saham DEFG · Harian', data: CS.marubozu(), panels: [],
      alt: 'Candle terakhir berbadan panjang nyaris tanpa sumbu di kedua ujung' },
    q: 'Candle terakhir pada grafik memiliki badan panjang nyaris tanpa sumbu. Candle seperti ini disebut dan menandakan...',
    options: ['Doji — keraguan pasar', 'Marubozu — dominasi satu sisi sepanjang periode',
              'Hammer — penolakan harga rendah', 'Harami — momentum melemah'],
    answer: 1,
    explain: 'Marubozu bullish dibuka di titik terendah dan ditutup di titik tertinggi, artinya pembeli menguasai sesi dari awal sampai akhir tanpa perlawanan berarti. Makin panjang badannya relatif terhadap candle di sekitarnya, makin kuat sinyal dominasinya.' });

  seed(1616);
  add({ id: 'rta-chart-chart-002', module: 'rta-chart', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham HIJK · Harian', data: CS.doji(), panels: ['volume'],
      alt: 'Candle terakhir memiliki badan sangat tipis dengan sumbu di kedua sisi, muncul setelah tren naik' },
    q: 'Candle terakhir memiliki harga pembukaan dan penutupan hampir sama, muncul setelah tren naik dengan volume tinggi. Pembacaan yang paling tepat adalah...',
    options: ['Doji yang menandakan keseimbangan dan potensi titik balik, tetapi butuh konfirmasi candle berikutnya',
              'Doji yang merupakan sinyal jual pasti',
              'Marubozu yang menandakan tren menguat',
              'Data tidak valid karena badan candle terlalu tipis'],
    answer: 0,
    explain: 'Doji terbentuk ketika harga kembali ke titik awal pada akhir periode, menandakan pembeli dan penjual seimbang setelah sebelumnya pembeli dominan. Itu indikasi perubahan keseimbangan, tetapi doji sendiri tidak menunjukkan arah sehingga konfirmasi dari candle berikutnya tetap diperlukan.' });

  /* --- cta-candle --- */
  const csq = [
    ['hammer', 'sedang', 'Candle terakhir memiliki sumbu bawah panjang dengan badan kecil di bagian atas, muncul setelah tren turun. Pola ini adalah...',
     ['Hammer — sinyal pembalikan bullish', 'Hanging man — sinyal pembalikan bearish', 'Shooting star — sinyal bearish', 'Marubozu — kelanjutan tren'],
     0, 'Sumbu bawah panjang menunjukkan harga sempat ditekan jauh ke bawah lalu dibeli kembali sampai ditutup dekat puncak rentangnya. Karena muncul setelah tren turun, pola ini dibaca sebagai hammer yang bullish. Bentuk yang sama persis bila muncul di puncak tren naik justru disebut hanging man dan berimplikasi bearish — lokasi yang menentukan, bukan bentuknya.'],
    ['shootingStar', 'sedang', 'Candle terakhir memiliki sumbu atas panjang dengan badan kecil di bawah, muncul setelah tren naik. Pola ini adalah...',
     ['Inverted hammer — bullish', 'Shooting star — bearish', 'Dragonfly doji — bullish', 'Piercing line — bullish'],
     1, 'Sumbu atas panjang menunjukkan pembeli sempat mendorong harga jauh ke atas tetapi dipukul balik penjual hingga ditutup dekat titik pembukaan. Karena muncul setelah tren naik, ini shooting star yang bearish. Bentuk identik setelah tren turun disebut inverted hammer — sekali lagi lokasi yang membedakan.'],
    ['bullishEngulf', 'mudah', 'Dua candle terakhir pada grafik membentuk pola...',
     ['Bullish engulfing', 'Bearish engulfing', 'Harami', 'Tweezer bottom'],
     0, 'Badan candle bullish terakhir menutupi sepenuhnya badan candle bearish sebelumnya, menandakan pembeli mengambil alih dan menghapus seluruh pelemahan periode sebelumnya. Kekuatannya bertambah karena muncul setelah tren turun dan disertai volume yang jauh lebih besar.'],
    ['bearishEngulf', 'sedang', 'Dua candle terakhir setelah tren naik pada grafik ini membentuk pola...',
     ['Bullish engulfing', 'Bearish engulfing', 'Rising three methods', 'Morning star'],
     1, 'Badan candle bearish terakhir menelan penuh badan candle bullish sebelumnya, menandakan penjual merebut kendali. Muncul setelah tren naik, pola ini berimplikasi pembalikan bearish, dan volume yang membesar memperkuat sinyalnya.'],
    ['morningStar', 'sedang', 'Tiga candle terakhir pada grafik membentuk pola...',
     ['Evening star — bearish', 'Morning star — bullish', 'Three black crows — bearish', 'Harami — netral'],
     1, 'Urutannya candle bearish panjang, lalu candle kecil yang menandakan keraguan, lalu candle bullish panjang yang menembus jauh ke dalam badan candle pertama. Struktur ini menggambarkan dominasi penjual yang berubah jadi keraguan lalu berganti jadi dominasi pembeli. Makin dalam candle ketiga menembus badan candle pertama, makin kuat sinyalnya.'],
    ['eveningStar', 'sedang', 'Tiga candle terakhir setelah tren naik pada grafik ini membentuk pola...',
     ['Morning star — bullish', 'Evening star — bearish', 'Piercing line — bullish', 'Inside bar — netral'],
     1, 'Evening star adalah kebalikan morning star: candle bullish panjang, candle kecil penuh keraguan di puncak, lalu candle bearish panjang. Pola ini menggambarkan pergeseran dominasi dari pembeli ke penjual di puncak tren.'],
    ['harami', 'sulit', 'Dua candle terakhir pada grafik menunjukkan badan candle kedua berada di dalam badan candle pertama. Pola ini adalah...',
     ['Engulfing — pembalikan kuat', 'Harami — momentum melemah dan butuh konfirmasi', 'Marubozu — tren menguat', 'Tweezer — resistance kuat'],
     1, 'Harami menggambarkan penyempitan rentang pergerakan setelah candle besar, artinya tren kehilangan tenaga. Pola ini lebih merupakan peringatan jeda dibanding sinyal pembalikan langsung, sehingga umumnya menunggu konfirmasi candle berikutnya sebelum ditindaklanjuti.'],
    ['threeBlackCrows', 'sedang', 'Setelah tren naik, muncul tiga candle bearish berbadan panjang berturut-turut dengan penutupan makin rendah. Pola ini disebut...',
     ['Three white soldiers — bullish', 'Three black crows — bearish', 'Rising three methods — penerusan bullish', 'Tweezer bottom — bullish'],
     1, 'Tiga candle bearish berbadan panjang berturut-turut dengan penutupan yang terus menurun menandakan tekanan jual yang konsisten. Pola ini paling bermakna ketika muncul setelah tren naik atau di area resistance, seperti pada grafik ini.'],
    ['tweezerTop', 'sulit', 'Dua candle terakhir memiliki harga tertinggi yang hampir sama persis. Pola ini disebut dan menandakan...',
     ['Tweezer top — penjual konsisten menahan di level yang sama sehingga resistance menguat', 'Tweezer bottom — support menguat', 'Doji ganda — keraguan', 'Gap kembar — kelanjutan tren'],
     0, 'Kesamaan level tertinggi pada dua candle berurutan menunjukkan penjual muncul di harga yang sama persis dua kali. Pola ini memperkuat validitas level resistance tersebut, dan bila muncul setelah tren naik menjadi indikasi pembalikan.']
  ];
  let cs = 2000;
  csq.forEach(([fn, diff, q, opts, ans, exp], i) => {
    seed(cs += 77);
    add({ id: 'cta-cs-chart-' + String(i + 1).padStart(3, '0'), module: 'cta-candle', level: 'CTA',
      difficulty: diff,
      chart: { title: 'Grafik harian · perbesaran pola', data: CS[fn](), panels: ['volume'], height: 230,
        alt: 'Grafik candlestick dengan formasi pola pada beberapa candle terakhir' },
      q: q, options: opts, answer: ans, explain: exp });
  });

  /* --- cta-elliott --- */
  seed(3030); { const p = P.elliottImpulse();
  add({ id: 'cta-ew-chart-001', module: 'cta-elliott', level: 'CTA', difficulty: 'sulit',
    chart: { title: 'Indeks · Mingguan', data: p.data, panels: ['volume'], height: 250,
      overlays: [{ type: 'marker', i: 4, text: '1' }, { type: 'marker', i: 7, text: '2', pos: 'below' },
                 { type: 'marker', i: 14, text: '3' }, { type: 'marker', i: 18, text: '4', pos: 'below' },
                 { type: 'marker', i: 23, text: '5' }],
      alt: 'Lima gelombang impulse bernomor dengan gelombang ketiga terpanjang' },
    q: 'Pada penghitungan gelombang di grafik ini, pernyataan yang benar adalah...',
    options: ['Gelombang 3 adalah yang terpendek, sehingga penghitungan ini melanggar aturan',
              'Gelombang 3 adalah yang terpanjang dan bervolume terbesar, konsisten dengan pedoman Elliott Wave',
              'Gelombang 2 telah retrace lebih dari 100 persen gelombang 1',
              'Gelombang 4 memasuki wilayah harga gelombang 1'],
    answer: 1,
    explain: 'Aturan mutlak Elliott menyatakan gelombang 3 tidak boleh yang terpendek di antara gelombang 1, 3, dan 5, dan pada pasar saham gelombang 3 justru paling sering menjadi yang terpanjang sekaligus bervolume terbesar karena partisipasinya paling luas. Grafik ini juga memenuhi dua aturan mutlak lain: gelombang 2 tidak melewati titik awal gelombang 1, dan gelombang 4 tidak memasuki wilayah gelombang 1.' }); }


  /* ===== batch 2 ===== */
  seed(4001); { const p = P.descendingTriangle();
  add({ id: 'rta-trend-chart-011', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham BCDE · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.sup, label: 'Support mendatar' },
                 { type: 'line', a: p.upper.a, b: p.upper.b, label: 'Puncak menurun' }],
      alt: 'Support mendatar dengan rangkaian puncak yang makin rendah, lalu penembusan ke bawah' },
    q: 'Pola pada grafik ini dan implikasinya adalah...',
    options: ['Segitiga menaik — bullish', 'Segitiga menurun — bearish',
              'Segitiga simetris — netral', 'Rectangle — netral'],
    answer: 1,
    explain: 'Support mendatar menunjukkan permintaan bertahan di satu level, sementara puncak yang terus menurun menunjukkan penjual makin agresif menurunkan harga jualnya. Ketimpangan itu biasanya berakhir dengan permintaan habis dan harga jebol ke bawah, seperti terlihat di ujung kanan grafik yang disertai lonjakan volume.' }); }

  seed(4002); { const p = P.risingWedge();
  add({ id: 'rta-trend-chart-012', module: 'rta-trend', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham CDEF · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'line', a: p.upper.a, b: p.upper.b, label: 'Batas atas' },
                 { type: 'line', a: p.lower.a, b: p.lower.b, label: 'Batas bawah' }],
      alt: 'Dua garis menaik yang menyempit dengan volume menurun, lalu penembusan ke bawah' },
    q: 'Kedua garis pada pola ini menaik dan menyempit, dengan volume yang terus menurun. Pola ini adalah...',
    options: ['Falling wedge — bullish', 'Rising wedge — bearish',
              'Bull flag — penerusan bullish', 'Channel naik — netral'],
    answer: 1,
    explain: 'Rising wedge menyempit karena garis bawah naik lebih curam daripada garis atas, artinya harga masih naik tetapi ruang geraknya menipis dan momentumnya melemah. Volume yang menyusut menegaskan kenaikan kehilangan dukungan. Karena itu rising wedge umumnya berimplikasi bearish, berbeda dari channel naik yang netral terhadap tren.' }); }

  seed(4003); { const p = P.inverseHeadShoulders();
  add({ id: 'rta-trend-chart-013', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham DEFG · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.neck, label: 'Neckline' }],
      alt: 'Tiga dasar dengan dasar tengah paling rendah, di bawah neckline mendatar' },
    q: 'Pola pada grafik ini adalah...',
    options: ['Head and shoulders top — bearish', 'Inverse head and shoulders — bullish',
              'Triple top — bearish', 'Rising wedge — bearish'],
    answer: 1,
    explain: 'Pola ini adalah kebalikan head and shoulders: tiga dasar dengan dasar tengah (head) paling rendah, diapit dua bahu yang lebih tinggi, dengan neckline di atasnya. Penembusan neckline ke atas disertai volume besar menjadi konfirmasi pembalikan bullish, dan targetnya diukur dari kedalaman head ke neckline.' }); }

  seed(4004); { const p = P.tripleBottom();
  add({ id: 'rta-trend-chart-014', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham EFGH · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.sup, label: 'Support' }, { type: 'hline', price: p.res, label: 'Resistance' }],
      alt: 'Support diuji tiga kali dan bertahan, lalu harga menembus resistance' },
    q: 'Support pada grafik diuji tiga kali dan bertahan. Dibanding double bottom, pola ini umumnya dianggap...',
    options: ['Lebih lemah karena butuh waktu lebih lama',
              'Lebih kuat karena pasokan di level itu terbukti benar-benar terserap',
              'Sama saja, jumlah pengujian tidak berpengaruh',
              'Tidak valid karena pola hanya sah dengan dua sentuhan'],
    answer: 1,
    explain: 'Tiga kali pengujian yang berhasil ditahan menunjukkan pasokan di level tersebut benar-benar habis terserap. Basis yang lebih panjang umumnya menghasilkan penembusan yang lebih meyakinkan, meski menuntut kesabaran lebih lama untuk menunggunya terbentuk.' }); }

  seed(4005); { const p = P.channelUp();
  add({ id: 'rta-trend-chart-015', module: 'rta-trend', level: 'RTA', difficulty: 'mudah',
    chart: { title: 'Saham FGHI · Harian', data: p.data, panels: [],
      overlays: [{ type: 'line', a: p.upper.a, b: p.upper.b, label: 'Batas atas' },
                 { type: 'line', a: p.lower.a, b: p.lower.b, label: 'Garis tren' }],
      alt: 'Harga bergerak naik di antara dua garis sejajar' },
    q: 'Selama channel naik ini masih berlaku, strategi yang paling masuk akal adalah...',
    options: ['Membeli di batas atas channel dan menjual di batas bawah',
              'Mencari peluang beli saat harga surut ke batas bawah, dan mengambil untung mendekati batas atas',
              'Menjual setiap kali harga menyentuh garis tren',
              'Menghindari saham yang bergerak dalam channel'],
    answer: 1,
    explain: 'Pada channel naik, garis tren bawah berperan sebagai support dinamis dan batas atas sebagai area ambil untung. Membeli saat harga surut ke batas bawah searah dengan tren utama dan memberi rasio risiko imbal hasil yang lebih baik, dengan level pembatalan tepat di bawah garis tren.' }); }

  seed(4006); { const p = P.roundingBottom();
  add({ id: 'rta-trend-chart-016', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham GHIJ · Mingguan', data: p.data, panels: ['volume'],
      alt: 'Dasar melengkung landai dengan volume mengering di titik terendah lalu membesar saat naik' },
    q: 'Grafik menunjukkan dasar melengkung landai dengan volume yang mengering di titik terendah lalu membesar. Pola ini disebut...',
    options: ['V bottom', 'Rounding bottom atau saucer bottom', 'Island reversal', 'Bear flag'],
    answer: 1,
    explain: 'Rounding bottom memperlihatkan pergeseran dominasi dari penjual ke pembeli yang berlangsung berangsur-angsur, bukan mendadak. Volume yang mengering di dasar menandakan tekanan jual habis, lalu membesar saat permintaan kembali. Pola ini butuh waktu lama namun implikasinya kuat.' }); }

  seed(4007); { const p = P.islandReversal();
  add({ id: 'rta-trend-chart-017', module: 'rta-trend', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham HIJK · Harian', data: p.data, panels: ['volume'],
      alt: 'Sekelompok candle terpisah dari sekitarnya oleh gap naik lalu gap turun' },
    q: 'Beberapa candle di puncak grafik terpisah dari sekitarnya oleh gap naik di kiri dan gap turun di kanan. Formasi ini disebut...',
    options: ['Island reversal', 'Breakaway gap', 'Runaway gap', 'Bull flag'],
    answer: 0,
    explain: 'Kelompok candle yang terkurung dua gap berlawanan arah tampak seperti pulau yang terpisah dari grafik di sekitarnya. Pola ini menandakan perubahan sentimen yang ekstrem dan mendadak, dan sering muncul di titik balik penting.' }); }

  /* --- rta-level batch 2 --- */
  seed(4008); { const p = P.measuringGap();
  add({ id: 'rta-level-chart-004', module: 'rta-level', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham IJKL · Harian', data: p.data, panels: ['volume'],
      alt: 'Kenaikan dari 1.000 ke 1.200 lalu gap di tengah tren yang berlanjut naik' },
    q: 'Harga naik dari sekitar 1.000 ke 1.200, lalu terjadi gap di sekitar 1.270 dan tren berlanjut. Bila gap ini adalah measuring gap, target proyeksinya sekitar...',
    options: ['Sekitar 1.300', 'Sekitar 1.470', 'Sekitar 1.200', 'Tidak dapat diproyeksikan'],
    answer: 1,
    explain: 'Runaway atau measuring gap secara empiris sering berada di sekitar titik tengah keseluruhan pergerakan. Panjang kaki pertama adalah 1.200 dikurangi 1.000 sama dengan 200 poin, sehingga diproyeksikan dari area gap 1.270 menghasilkan target sekitar 1.470. Ini perkiraan, bukan kepastian, dan tetap perlu dicek terhadap resistance historis.' }); }

  seed(4009); { const p = P.exhaustionGap();
  add({ id: 'rta-level-chart-005', module: 'rta-level', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham JKLM · Harian', data: p.data, panels: ['volume'],
      alt: 'Gap naik dengan volume ekstrem di ujung tren panjang, langsung diikuti pembalikan tajam' },
    q: 'Gap naik pada grafik ini muncul setelah tren naik panjang, disertai volume ekstrem, lalu harga langsung berbalik tajam. Gap jenis ini adalah...',
    options: ['Breakaway gap — awal tren baru', 'Exhaustion gap — tanda klimaks di ujung tren',
              'Common gap — tanpa makna', 'Measuring gap — titik tengah tren'],
    answer: 1,
    explain: 'Exhaustion gap muncul pada fase akhir tren ketika pelaku yang terlambat masuk secara panik, ditandai volume ekstrem. Ciri pembedanya adalah harga cepat berbalik dan gap tersebut segera tertutup, berbeda dari breakaway gap yang lahir dari perubahan sentimen nyata dan biasanya dibiarkan terbuka lama.' }); }

  seed(4010); { const p = P.fibRetrace();
  const f = (r) => r2(p.hi - (p.hi - p.lo) * r);
  add({ id: 'rta-level-chart-006', module: 'rta-level', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham KLMN · Harian', data: p.data, panels: [],
      overlays: [{ type: 'hline', price: f(0.382), label: 'A · 38,2%' },
                 { type: 'hline', price: f(0.5), label: 'B · 50%' },
                 { type: 'hline', price: f(0.618), label: 'C · 61,8%' }],
      alt: 'Kenaikan dari 1.000 ke 1.500 lalu koreksi yang berhenti di garis paling bawah dari tiga level Fibonacci' },
    q: 'Harga naik dari 1.000 ke 1.500 lalu terkoreksi. Koreksi berhenti dan memantul di garis C. Berapa level retracement tersebut dan apa maknanya?',
    options: ['38,2% — koreksi dangkal, tren sangat kuat',
              '50% — koreksi normal',
              '61,8% — koreksi dalam; tren masih mungkin berlanjut tetapi risiko pembalikan meningkat',
              '78,6% — tren hampir pasti berbalik'],
    answer: 2,
    explain: 'Besar pergerakan 500 poin, sehingga koreksi 61,8 persen setara 309 poin dan mendarat di 1.191, yaitu garis C. Koreksi sedalam ini masih dalam batas wajar bagi tren yang sehat, tetapi makin dalam koreksi makin besar peluang yang terjadi sebenarnya pembalikan tren, bukan sekadar jeda.' }); }

  seed(4011); { const p = P.sellingClimax();
  add({ id: 'rta-level-chart-007', module: 'rta-level', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham LMNO · Harian', data: p.data, panels: ['volume'],
      alt: 'Batang dengan rentang sangat lebar dan volume ekstrem di akhir tren turun, ditutup jauh di atas titik terendahnya' },
    q: 'Di akhir tren turun panjang muncul satu batang berentang sangat lebar dengan volume ekstrem, yang ditutup jauh di atas titik terendahnya. Pembacaan yang paling tepat adalah...',
    options: ['Kelanjutan tren turun yang makin kuat',
              'Kemungkinan selling climax — pasokan jual diserap pihak besar, berpotensi menandai area dasar',
              'Data salah karena rentangnya tidak wajar',
              'Exhaustion gap'],
    answer: 1,
    explain: 'Volume ekstrem dengan penutupan jauh di atas titik terendah menandakan ada pihak yang menyerap seluruh pasokan jual saat kepanikan memuncak. Pola ini disebut selling climax atau capitulation dan kerap muncul di area dasar, meskipun tetap memerlukan konfirmasi lanjutan sebelum dianggap pembalikan.' }); }

  /* --- rta-indikator batch 2 --- */
  seed(4012); { const p = P.deathCross();
  add({ id: 'rta-ind-chart-003', module: 'rta-indikator', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham MNOP · Harian', data: p.data, panels: [], height: 250,
      overlays: [{ type: 'ma', period: 20, label: 'MA20' }, { type: 'ma', period: 50, label: 'MA50' }],
      alt: 'Rata-rata bergerak 20 hari memotong ke bawah rata-rata 50 hari' },
    q: 'MA20 memotong ke bawah MA50 pada grafik ini. Peristiwa dan sifat sinyalnya adalah...',
    options: ['Golden cross — sinyal leading', 'Death cross — sinyal lagging yang muncul setelah sebagian penurunan terjadi',
              'Divergensi bearish — sinyal leading', 'Bollinger squeeze — sinyal volatilitas'],
    answer: 1,
    explain: 'Persilangan MA pendek ke bawah MA panjang disebut death cross dan dibaca sebagai konfirmasi tren turun jangka menengah. Karena rata-rata bergerak dihitung dari harga yang sudah terbentuk, sinyalnya bersifat lagging: konfirmasinya baru datang setelah sebagian penurunan terjadi.' }); }

  seed(4013); { const p = P.rsiBullDivergence();
  add({ id: 'rta-ind-chart-004', module: 'rta-indikator', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham NOPQ · Harian', data: p.data, panels: ['rsi'], height: 220,
      overlays: [{ type: 'marker', i: 17, text: '1', pos: 'below' }, { type: 'marker', i: 28, text: '2', pos: 'below' }],
      alt: 'Harga membentuk dasar kedua lebih rendah sementara RSI membentuk dasar kedua lebih tinggi' },
    q: 'Harga mencetak dasar 2 lebih rendah dari dasar 1, tetapi RSI justru mencetak dasar yang lebih tinggi. Kondisi ini adalah...',
    options: ['Divergensi bearish', 'Divergensi bullish', 'Hidden divergence bearish', 'Death cross'],
    answer: 1,
    explain: 'Harga mencetak dasar baru yang lebih rendah sementara momentum menolak ikut turun, menandakan tekanan jual sudah berkurang. Sinyal ini bersifat peringatan dan umumnya baru ditindaklanjuti setelah ada konfirmasi dari aksi harga, misalnya penembusan puncak terdekat.' }); }

  seed(4014); { const p = P.bbSqueeze();
  add({ id: 'rta-ind-chart-005', module: 'rta-indikator', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham OPQR · Harian', data: p.data, panels: [], height: 250,
      overlays: [{ type: 'bb', period: 20, mult: 2, label: 'BB 20' }],
      alt: 'Pita Bollinger menyempit tajam lalu melebar bersamaan dengan pergerakan harga yang besar' },
    q: 'Pita Bollinger menyempit tajam di bagian tengah grafik sebelum harga bergerak besar. Apa yang sebenarnya ditunjukkan penyempitan itu?',
    options: ['Harga pasti akan naik setelah penyempitan',
              'Volatilitas sedang rendah dan ekspansi biasanya menyusul, tanpa memberi tahu arahnya',
              'Harga pasti akan turun setelah penyempitan',
              'Pita menyempit berarti data tidak cukup'],
    answer: 1,
    explain: 'Lebar pita Bollinger mengikuti standar deviasi harga, sehingga penyempitan hanya berbicara tentang kondisi volatilitas, bukan arah. Setelah periode tenang biasanya muncul pergerakan besar, jadi analis menyiapkan rencana untuk kedua arah dan menunggu penembusan yang sebenarnya.' }); }

  seed(4015); { const p = P.maBounce();
  add({ id: 'rta-ind-chart-006', module: 'rta-indikator', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham PQRS · Harian', data: p.data, panels: [], height: 250,
      overlays: [{ type: 'ma', period: 20, label: 'MA20' }],
      alt: 'Harga berulang kali surut ke garis rata-rata bergerak lalu memantul naik' },
    q: 'Harga berulang kali surut ke MA20 lalu memantul naik. Peran MA20 di sini paling tepat disebut...',
    options: ['Resistance statis', 'Support dinamis', 'Target keuntungan', 'Indikator volatilitas'],
    answer: 1,
    explain: 'Rata-rata bergerak sering menjadi titik reaksi harga karena banyak pelaku pasar memakainya sebagai acuan. Perannya disebut dinamis karena nilainya berubah setiap periode mengikuti harga, berbeda dari level horizontal yang tetap di satu angka.' }); }

  seed(4016); { const p = P.volumeDivergence();
  add({ id: 'rta-ind-chart-007', module: 'rta-indikator', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham QRST · Harian', data: p.data, panels: ['volume'],
      alt: 'Harga terus membentuk puncak lebih tinggi sementara volume terus menyusut' },
    q: 'Harga terus mencetak puncak lebih tinggi, tetapi volume justru terus menyusut. Apa maknanya?',
    options: ['Tren naik makin sehat karena tidak butuh volume besar',
              'Partisipasi menipis sehingga tren naik kehilangan dukungan dan rawan berbalik',
              'Volume tidak berkaitan dengan harga',
              'Harga pasti berbalik pada sesi berikutnya'],
    answer: 1,
    explain: 'Pada tren naik yang sehat, volume membesar searah tren dan mengecil saat terkoreksi. Kenaikan yang berlangsung dengan volume terus menipis menandakan minat beli berkurang dan tren ditopang makin sedikit partisipan. Ini peringatan, bukan penentu waktu pembalikan.' }); }

  /* --- cta-candle batch 2, termasuk soal jebakan lokasi --- */
  const csq2 = [
    ['hangingMan', 'sulit', 'Candle terakhir memiliki sumbu bawah panjang dengan badan kecil, tetapi muncul setelah tren NAIK. Pola ini adalah...',
     ['Hammer — bullish', 'Hanging man — bearish', 'Dragonfly doji — bullish', 'Inverted hammer — bullish'],
     1, 'Bentuknya identik dengan hammer, tetapi lokasinya di puncak tren naik sehingga disebut hanging man dan berimplikasi bearish. Sumbu bawah panjang di area puncak menunjukkan penjual sempat menekan harga cukup dalam, pertanda pasokan mulai muncul. Inilah alasan konteks lokasi selalu lebih menentukan daripada bentuk candle itu sendiri.'],
    ['invertedHammer', 'sulit', 'Candle terakhir memiliki sumbu atas panjang dengan badan kecil, muncul setelah tren TURUN. Pola ini adalah...',
     ['Shooting star — bearish', 'Inverted hammer — bullish', 'Hanging man — bearish', 'Marubozu — penerusan'],
     1, 'Bentuknya sama persis dengan shooting star, tetapi karena muncul setelah tren turun namanya inverted hammer dan implikasinya bullish. Sumbu atas panjang menunjukkan pembeli mulai berani mendorong harga naik meski belum berhasil bertahan. Konfirmasi candle berikutnya tetap dibutuhkan.'],
    ['piercingLine', 'sedang', 'Dua candle terakhir setelah tren turun membentuk pola...',
     ['Dark cloud cover — bearish', 'Piercing line — bullish', 'Bearish engulfing — bearish', 'Harami — netral'],
     1, 'Candle kedua dibuka di bawah penutupan sebelumnya lalu ditutup di atas titik tengah badan candle bearish pertama. Pembukaan yang lebih rendah sempat memperkuat kesan bearish sebelum pembeli membalikkan keadaan, sehingga pola ini dibaca sebagai pembalikan bullish.'],
    ['darkCloudCover', 'sedang', 'Dua candle terakhir setelah tren naik membentuk pola...',
     ['Piercing line — bullish', 'Dark cloud cover — bearish', 'Bullish engulfing — bullish', 'Tweezer bottom — bullish'],
     1, 'Candle bearish dibuka di atas penutupan sebelumnya, menunjukkan optimisme awal, lalu ditutup di bawah titik tengah badan candle bullish sebelumnya. Makin dalam penetrasinya ke badan candle pertama, makin kuat implikasi bearish-nya.'],
    ['threeWhiteSoldiers', 'sedang', 'Tiga candle terakhir setelah tren turun membentuk pola...',
     ['Three black crows — bearish', 'Three white soldiers — bullish', 'Rising three methods — penerusan', 'Evening star — bearish'],
     1, 'Tiga candle bullish berbadan panjang berturut-turut dengan penutupan yang terus meninggi menandakan permintaan yang konsisten. Muncul setelah tren turun, pola ini dibaca sebagai pembalikan bullish yang kuat, terutama bila disertai volume yang membesar.'],
    ['tweezerBottom', 'sulit', 'Dua candle terakhir setelah tren turun memiliki harga TERENDAH yang hampir sama persis. Pola ini disebut...',
     ['Tweezer top — resistance menguat', 'Tweezer bottom — support menguat', 'Harami — momentum melemah', 'Doji ganda — keraguan'],
     1, 'Kesamaan level terendah pada dua candle berurutan menunjukkan pembeli muncul di harga yang sama persis dua kali, sehingga level tersebut terbukti menahan. Muncul setelah tren turun, pola ini menjadi indikasi pembalikan bullish.'],
    ['bullishHarami', 'sedang', 'Candle terakhir berbadan kecil dan seluruhnya berada di dalam badan candle bearish sebelumnya, setelah tren turun. Pola ini adalah...',
     ['Bullish engulfing', 'Bullish harami', 'Piercing line', 'Three white soldiers'],
     1, 'Harami menandakan penyempitan rentang setelah candle besar, artinya tekanan jual kehilangan tenaga. Karena muncul setelah tren turun, pola ini dibaca bullish. Sifatnya peringatan jeda, bukan sinyal pembalikan langsung, sehingga umumnya menunggu konfirmasi candle berikutnya.'],
    ['dragonflyDoji', 'sulit', 'Candle terakhir memiliki open, high, dan close hampir sama di bagian atas, dengan sumbu bawah panjang, muncul di area support. Pola ini adalah...',
     ['Gravestone doji — bearish', 'Dragonfly doji — bullish', 'Marubozu — penerusan', 'Spinning top — netral'],
     1, 'Dragonfly doji menunjukkan harga sempat ditekan jauh ke bawah tetapi seluruhnya ditarik kembali hingga ditutup di dekat puncak rentangnya. Itu penolakan tegas terhadap harga rendah, sehingga bila muncul di area support pola ini berimplikasi bullish.'],
    ['gravestoneDoji', 'sulit', 'Candle terakhir memiliki open, low, dan close hampir sama di bagian bawah, dengan sumbu atas panjang, muncul di area resistance. Pola ini adalah...',
     ['Dragonfly doji — bullish', 'Gravestone doji — bearish', 'Hammer — bullish', 'Harami — netral'],
     1, 'Gravestone doji menunjukkan pembeli sempat mendorong harga jauh ke atas tetapi seluruh kenaikan itu dihapus sampai ditutup di dekat titik terendahnya. Itu penolakan tegas terhadap harga tinggi, sehingga bila muncul di area resistance pola ini berimplikasi bearish.']
  ];
  let cs2 = 5000;
  csq2.forEach(([fn, diff, q, opts, ans, exp], i) => {
    seed(cs2 += 91);
    add({ id: 'cta-cs-chart-' + String(i + 10).padStart(3, '0'), module: 'cta-candle', level: 'CTA',
      difficulty: diff,
      chart: { title: 'Grafik harian · perbesaran pola', data: CS[fn](), panels: ['volume'], height: 230,
        alt: 'Grafik candlestick dengan formasi pola pada beberapa candle terakhir' },
      q: q, options: opts, answer: ans, explain: exp });
  });

  return Q;
}

/* ---------- tulis berkas ---------- */
const list = build();
const body = list.map(q => JSON.stringify(q)).join(',\n');
const out = `/* Soal baca chart — DIBANGKITKAN OTOMATIS, jangan disunting manual.
   Sumber: tools/gen-chart-questions.js — jalankan ulang untuk memperbarui.
   Deret OHLC disintesis dari PRNG ber-seed sehingga hasilnya selalu identik. */
TD.register([
${body}
]);
`;
fs.writeFileSync(path.join(__dirname, '..', 'data', 'chart-questions.js'), out);
console.log('data/chart-questions.js ditulis —', list.length, 'soal chart');
const byMod = {};
list.forEach(q => { byMod[q.module] = (byMod[q.module] || 0) + 1; });
Object.keys(byMod).sort().forEach(m => console.log('  ' + m.padEnd(16), byMod[m]));
