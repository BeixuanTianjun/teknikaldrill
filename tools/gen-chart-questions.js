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


/* ---------- pola tambahan batch 3 ---------- */
P.bearFlag = () => {
  const L = legsP(1600, [[1080, 5], [1150, 3], [1120, 2], [1205, 3], [1175, 2], [1255, 3], [860, 7]]);
  const data = fromPath(L.closes, { vol: 1300, volBy: i => i < 6 ? 2.0 : i < 20 ? 0.45 : 2.0, wick: 0.3 });
  const pv = L.pivots;
  return { data, upper: thru(data, pv[2].i, pv[6].i, 'high', pv[6].i),
                 lower: thru(data, pv[1].i, pv[5].i, 'low', pv[6].i) };
};
P.broadening = () => {
  const L = legsP(1100, [[1200, 3], [1030, 3], [1290, 4], [950, 4], [1380, 4], [880, 4], [1450, 5]]);
  const data = fromPath(L.closes, { vol: 1200, volBy: (i, n) => 0.8 + 0.9 * (i / n) });
  const pv = L.pivots;
  return { data, upper: thru(data, pv[1].i, pv[5].i, 'high', pv[7].i),
                 lower: thru(data, pv[2].i, pv[6].i, 'low', pv[7].i) };
};
P.diamondTop = () => {
  const L = legsP(1200, [[1290, 3], [1130, 3], [1370, 4], [1060, 4], [1330, 4], [1140, 3], [1270, 3], [1180, 3], [980, 5]]);
  return { data: fromPath(L.closes, { vol: 1200, volBy: (i, n) => i > n - 6 ? 1.8 : 1.0 }) };
};
P.vBottom = () => {
  const L = legsP(1500, [[900, 9], [1480, 9]]);
  return { data: fromPath(L.closes, { vol: 1200, volBy: (i, n) => Math.abs(i - n / 2) < 2 ? 2.4 : 0.95 }) };
};
P.downChannel = () => {
  const L = legsP(1500, [[1360, 4], [1430, 3], [1240, 4], [1310, 3], [1120, 4], [1190, 3], [1000, 4]]);
  const data = fromPath(L.closes, { vol: 1050 });
  const pv = L.pivots;
  return { data, upper: thru(data, pv[2].i, pv[6].i, 'high', pv[7].i),
                 lower: thru(data, pv[1].i, pv[5].i, 'low', pv[7].i) };
};
P.ichimokuBreak = () => {
  // Senkou B memakai 52 periode lalu digeser maju 26, sehingga awan baru
  // muncul setelah batang ke-78. Deret dibuat jauh lebih panjang agar
  // awannya benar-benar tergambar dan pertanyaannya dapat dijawab.
  // Ayunan di fase basis dibuat cukup lebar agar Senkou B (titik tengah 52
  // periode) terpisah jelas dari Senkou A, sehingga awannya tebal dan terbaca.
  // Kenaikan akhir dibatasi supaya harga berada di atas awan tanpa meninggalkannya
  // jauh di luar jangkauan pandang.
  const c = legs(1300, [[960, 30], [1120, 16], [950, 18], [1130, 16], [960, 16], [1080, 12], [1210, 26]]);
  return { data: fromPath(c, { vol: 1050, wick: 0.26 }) };
};
P.macdCross = () => {
  // Penurunan dibuat cukup dalam dan panjang agar MACD benar-benar berada
  // jauh di bawah nol saat persilangan terjadi, sesuai yang ditanyakan soal.
  // Garis sinyal baru bernilai pada batang ke-33 (26 untuk MACD + 9 untuk sinyal),
  // jadi penurunan harus berlanjut melewati titik itu agar persilangannya
  // benar-benar tergambar, bukan terjadi di masa pemanasan indikator.
  const c = legs(1500, [[1150, 20], [1200, 8], [900, 24], [965, 8], [1250, 28]]);
  return { data: fromPath(c, { vol: 1050, wick: 0.28 }) };
};
P.pennant = () => {
  const L = legsP(900, [[1380, 5], [1290, 3], [1350, 2], [1305, 2], [1335, 2], [1318, 2], [1620, 6]]);
  const data = fromPath(L.closes, { vol: 1300, volBy: i => i < 6 ? 2.0 : i < 18 ? 0.4 : 2.0, wick: 0.28 });
  const pv = L.pivots;
  return { data, upper: thru(data, pv[1].i, pv[5].i, 'high', pv[6].i),
                 lower: thru(data, pv[2].i, pv[6].i, 'low', pv[6].i) };
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
    options:['Head and shoulders top — pembalikan bearish','Cup and handle — penerusan bullish','Segitiga menaik — penerusan bullish','Triple bottom — pembalikan bullish'],
    answer: 0,
    explain: 'Tiga puncak, yang tengah paling tinggi, diapit dua bahu yang lebih rendah. Dua lembah di antaranya disambung jadi neckline. Ceritanya: pembeli masih kuat di bahu kiri, memuncak di head, terus kehabisan tenaga di bahu kanan yang gagal ngelewatin head. Volume juga nyeritain hal yang sama — menipis dari bahu kiri ke head ke bahu kanan, terus melonjak pas neckline jebol. Polanya baru SAH setelah neckline ditembus, bukan pas bahu kanan kebentuk.' });

  add({ id: 'rta-trend-chart-002', module: 'rta-trend', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham ABCD · Harian', data: p.data, panels: [],
      overlays: [{ type: 'line', a: [10, p.neck], b: [26, p.neck], label: 'Neckline' },
                 { type: 'marker', i: 16, text: 'H' }],
      alt: 'Head and shoulders dengan puncak head ditandai H dan neckline mendatar' },
    q: 'Puncak head berada di sekitar 1.300 dan neckline di sekitar 1.088. Berapa target minimum proyeksi pola ini?',
    options: ['Sekitar 1.000', 'Sekitar 876', 'Sekitar 1.194', 'Sekitar 788'],
    answer: 1,
    explain: 'Ukur dulu tinggi polanya: 1.300 (head) dikurangi 1.088 (neckline) = 212 poin. Target = titik breakout dikurangi tinggi pola = 1.088 - 212 = 876. Tapi perhatiin kata MINIMUM. Ini proyeksi paling sedikit, bukan batas maksimum, dan wajib dicek sama level support historis di jalurnya. Support kuat yang kebetulan ada di 900 itu lebih menentukan daripada angka hasil ngukur pakai penggaris.' }); }

  seed(202); { const p = P.doubleTop();
  add({ id: 'rta-trend-chart-003', module: 'rta-trend', level: 'RTA', difficulty: 'mudah',
    chart: { title: 'Saham EFGH · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.neck, label: 'Level konfirmasi' }],
      alt: 'Dua puncak pada ketinggian hampir sama dengan satu lembah di antaranya' },
    q: 'Pola pada grafik ini paling tepat disebut...',
    options: ['Double top', 'Double bottom', 'Bull flag', 'Segitiga simetris'],
    answer: 0,
    explain: 'Harga dua kali gagal nembus area resistance yang sama, bikin dua puncak setara dengan satu lembah di antaranya. Itu double top. Ceritanya: pembeli nyoba dua kali, dua kali ditolak di titik yang sama, dan itu bukti pasokan jual yang kokoh di situ. Yang sering salah: nganggep polanya udah sah pas puncak kedua kebentuk. Belum. Baru sah setelah LEMBAH di antaranya ditembus.' }); }

  seed(303); { const p = P.doubleBottom();
  add({ id: 'rta-trend-chart-004', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham IJKL · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.neck, label: 'Neckline' }],
      alt: 'Dua dasar setara diikuti penembusan ke atas neckline dengan volume membesar' },
    q: 'Berdasarkan grafik, tindakan yang paling sesuai prinsip analisis teknikal adalah...',
    options:['Membeli setelah neckline ditembus dengan volume, stop di bawah dasar terakhir','Menjual karena harga sudah naik cukup jauh dari titik terendahnya','Menunggu harga kembali ke dasar sebelumnya sebelum mengambil posisi','Menahan diri karena pola ini baru sah setelah diuji ulang tiga kali'],
    answer: 0,
    explain: 'Double bottom itu pola pembalikan bullish, dan dia sah setelah neckline ditembus — yang di grafik ini disertai volume yang membesar. Volume itu bukti partisipasi, dan itu yang mbedain breakout beneran dari yang palsu. Soal stop: level pembatalan yang logis ada di bawah DASAR TERAKHIR, karena kalau harga balik ke situ berarti pembeli yang tadi menang udah kalah lagi.' }); }

  seed(404); { const p = P.ascendingTriangle();
  add({ id: 'rta-trend-chart-005', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham MNOP · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.res, label: 'Resistance mendatar' },
                 { type: 'line', a: p.lower.a, b: p.lower.b, label: 'Support menaik' }],
      alt: 'Resistance mendatar dengan rangkaian lembah yang makin tinggi, lalu breakout ke atas' },
    q: 'Pola ini dikenal sebagai segitiga menaik. Apa yang membuatnya condong bullish?',
    options:['Lembah yang makin tinggi menandakan pembeli makin agresif menyerap pasokan','Resistance yang mendatar menandakan penjual kehabisan barang untuk dilepas','Volume yang menyusut menandakan tekanan jual sudah habis terserap','Kemunculannya yang selalu di akhir tren turun menandakan pembalikan'],
    answer: 0,
    explain: 'Resistance mendatar artinya pasokan ngumpul di satu level dan nggak bergerak. Tapi lembahnya terus meninggi, artinya pembeli bersedia bayar makin mahal — mereka makin agresif. Ketimpangan ini nggak bisa bertahan selamanya: satu pihak harus nyerah, dan biasanya yang nyerah pasokannya, jadi harga tembus ke atas. Makanya segitiga menaik condong bullish meskipun atapnya rata.' }); }

  seed(505); { const p = P.symmetricalTriangle();
  add({ id: 'rta-trend-chart-006', module: 'rta-trend', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham QRST · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'line', a: p.upper.a, b: p.upper.b, label: 'Batas atas' },
                 { type: 'line', a: p.lower.a, b: p.lower.b, label: 'Batas bawah' }],
      alt: 'Dua garis konvergen menyempit dengan volume yang terus menipis' },
    q: 'Grafik menunjukkan segitiga simetris dengan volume yang terus menipis. Kesimpulan yang paling tepat adalah...',
    options:['Arah penembusan belum tentu, yang pasti volatilitas sedang terkompresi','Harga akan menembus ke atas karena pola ini berimplikasi bullish','Harga akan menembus ke bawah karena volumenya terus menyusut','Harga akan bertahan dalam rentang sampai apex segitiga tercapai'],
    answer: 0,
    explain: 'Segitiga simetris itu batas atas MENURUN dan batas bawah MENAIK — dua-duanya ngalah, jadi arahnya netral. Nggak ada yang bisa nebak tembusnya ke mana. Yang PASTI cuma satu: volatilitasnya lagi terkompresi, dan kompresi selalu berakhir dengan ekspansi. Volume yang terus menipis mempertegas itu. Sikapnya: siapin rencana buat DUA arah, jangan nebak duluan.' }); }

  seed(606); { const p = P.bullFlag();
  add({ id: 'rta-trend-chart-007', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham UVWX · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'line', a: p.upper.a, b: p.upper.b }, { type: 'line', a: p.lower.a, b: p.lower.b, label: 'Bendera' }],
      alt: 'Kenaikan tajam, konsolidasi miring turun bervolume tipis, lalu kenaikan tajam lagi' },
    q: 'Pola konsolidasi miring turun setelah kenaikan tajam pada grafik ini disebut...',
    options: ['Bull flag, pola penerusan', 'Head and shoulders, pola pembalikan',
              'Rounding bottom, pola pembalikan', 'Broadening formation'],
    answer: 0,
    explain: 'Naik tajam dulu (itu tiang benderanya), terus konsolidasi yang miring TURUN dengan volume tipis (itu benderanya). Namanya bull flag, dan dia pola PENERUSAN, bukan pembalikan. Ceritanya: sebagian ambil untung tipis setelah kenaikan tajam, tapi nggak ada gelombang jualan serius — kelihatan dari volumenya yang tipis. Kuncinya di durasi: bendera itu pendek, beberapa hari sampai dua pekan.' }); }

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
    explain: 'Dua garis yang nyempit dan dua-duanya MENURUN itu falling wedge, dan implikasinya BULLISH meskipun bentuknya turun. Ini sering bikin bingung. Logikanya: garis yang nyempit artinya tiap gelombang turun makin pendek jangkauannya — tekanan jualnya lagi melemah. Penjual kehabisan tenaga. Aturan umumnya: wedge itu polanya MELAWAN arah kemiringannya.' }); }

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
    explain: 'Uptrend didefinisiin dari rangkaian HIGHER HIGH dan HIGHER LOW — dua-duanya, bukan salah satu. Di grafik ini keduanya ada. Kenapa definisi ini bagus? Karena OBJEKTIF: nggak ada subjektivitas narik garis, cuma ngebandingin puncak dan lembah. Dan dia langsung ngasih level pembatalan: begitu lembah terakhir jebol, strukturnya patah dan trennya dipertanyakan.' }); }

  seed(909); { const p = P.cupHandle();
  add({ id: 'rta-trend-chart-010', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham GHIJ · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.lip, label: 'Bibir cangkir' }],
      alt: 'Dasar melengkung menyerupai huruf U diikuti koreksi dangkal lalu breakout' },
    q: 'Pola berbentuk U yang diikuti koreksi dangkal lalu breakout seperti grafik ini disebut...',
    options: ['Cup and handle', 'V bottom', 'Island reversal', 'Diamond top'],
    answer: 0,
    explain: 'Bentuk U yang membulat (cup) diikuti koreksi dangkal (handle) terus breakout. Namanya cup and handle. Cup yang membulat artinya penjual habis pelan-pelan tanpa panik, dan barangnya pindah ke tangan yang sabar. Handle-nya cuma ambil untung ringan — patokannya sekitar sepertiga kedalaman cup atau kurang. Kalau handle-nya lebih dalem dari itu, keandalannya turun drastis.' }); }

  /* --- rta-level --- */
  seed(1010); { const p = P.rangeSR();
  add({ id: 'rta-level-chart-001', module: 'rta-level', level: 'RTA', difficulty: 'mudah',
    chart: { title: 'Saham KLMN · Harian', data: p.data, panels: [],
      overlays: [{ type: 'hline', price: p.res, label: 'Resistance' }, { type: 'hline', price: p.sup, label: 'Support' }],
      alt: 'Harga terpantul berulang antara dua level mendatar' },
    q: 'Berdasarkan grafik, strategi yang paling sesuai selama rentang ini masih berlaku adalah...',
    options:['Beli mendekati support, jual mendekati resistance, stop di luar rentang','Beli saat menyentuh resistance, jual saat menyentuh support','Beli di tengah rentang agar jarak ke kedua batas sama jauhnya','Tunggu rentang ditembus dulu, baru ambil posisi searah penembusan'],
    answer: 0,
    explain: 'Selama rentangnya masih berlaku, strateginya lurus: beli mendekati support, jual mendekati resistance, stop DI LUAR rentang. Bagian terakhir itu yang penting. Stop di luar rentang artinya lo cuma rugi kalau rentangnya beneran jebol — dan itu memang titik di mana ide lo kebukti salah. Yang keliru: pakai alat pengikut tren di sini. Di pasar mendatar, MA crossover bakal ngasih sinyal bolak-balik yang semuanya rugi.' }); }

  seed(1111); { const p = P.breakoutRetest();
  add({ id: 'rta-level-chart-002', module: 'rta-level', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham OPQR · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.lvl, label: 'Level 1.200' }],
      alt: 'Resistance ditembus dengan volume besar lalu diuji ulang dari atas sebelum melanjutkan kenaikan' },
    q: 'Setelah level 1.200 ditembus, harga kembali turun menyentuhnya lalu memantul naik. Fenomena ini disebut...',
    options:['Role reversal — bekas resistance berubah menjadi support','False breakout yang menjebak pembeli terlambat','Throwback yang membatalkan penembusan sebelumnya','Konsolidasi ulang sebelum arah baru terbentuk'],
    answer: 0,
    explain: 'Level 1.200 ditembus, terus harga balik nyentuh dan mantul naik dari situ. Namanya role reversal: bekas resistance berubah jadi support. Akarnya di psikologi — yang dulu jual di 1.200 sekarang nyesel dan mau beli balik, dan yang ketinggalan naik ngeliat ini sebagai kesempatan kedua. Praktisnya berguna banget: ini titik masuk dengan stop yang rapat persis di bawah level itu.' }); }

  seed(1212); { const p = P.breakawayGap();
  add({ id: 'rta-level-chart-003', module: 'rta-level', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham STUV · Harian', data: p.data, panels: ['volume'],
      alt: 'Celah harga kosong setelah konsolidasi mendatar, disertai volume sangat besar' },
    q: 'Celah harga yang muncul setelah konsolidasi mendatar dan disertai lonjakan volume seperti pada grafik ini adalah...',
    options:['Breakaway gap yang menandai awal tren baru','Common gap yang biasanya tertutup dalam beberapa sesi','Exhaustion gap yang menandai berakhirnya tren berjalan','Measuring gap yang menandai titik tengah pergerakan'],
    answer: 0,
    explain: 'Gap yang muncul setelah konsolidasi mendatar DAN disertai lonjakan volume itu breakaway gap — nandain awal tren baru. Dua syaratnya penting: lokasinya (habis konsolidasi, bukan di tengah tren) dan volumenya. Yang mbedain dia dari jenis gap lain: breakaway biasanya NGGAK ketutup dalam waktu dekat, karena dia nandain perubahan rezim yang nyata, bukan ketimpangan order sesaat.' }); }

  /* --- rta-indikator --- */
  seed(1313); { const p = P.goldenCross();
  add({ id: 'rta-ind-chart-001', module: 'rta-indikator', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham WXYZ · Harian', data: p.data, panels: [], height: 250,
      overlays: [{ type: 'ma', period: 20, label: 'MA20' }, { type: 'ma', period: 50, label: 'MA50' }],
      alt: 'Rata-rata bergerak 20 hari memotong ke atas rata-rata 50 hari setelah tren turun berakhir' },
    q: 'Pada bagian kanan grafik, MA20 memotong ke atas MA50. Peristiwa ini disebut...',
    options: ['Death cross', 'Golden cross', 'Divergensi bullish', 'Bollinger squeeze'],
    answer: 1,
    explain: 'MA20 motong ke ATAS MA50 itu golden cross, sinyal bullish klasik. Tapi ada yang wajib lo sadar: sinyal ini TELAT by design, karena MA itu diitung dari harga yang udah terjadi. Pas golden cross muncul, sering harga udah naik lumayan. Gunanya bukan buat entry presisi, tapi buat konfirmasi bahwa rezimnya udah berubah. Keterlambatan itu harga yang dibayar buat nyaring sinyal palsu.' }); }

  seed(1414); { const p = P.rsiDivergence();
  add({ id: 'rta-ind-chart-002', module: 'rta-indikator', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham ABCX · Harian', data: p.data, panels: ['rsi'], height: 220,
      overlays: [{ type: 'marker', i: 17, text: '1' }, { type: 'marker', i: 28, text: '2' }],
      alt: 'Harga membentuk puncak kedua lebih tinggi sementara RSI membentuk puncak kedua lebih rendah' },
    q: 'Harga mencetak puncak 2 lebih tinggi dari puncak 1, tetapi RSI justru mencetak puncak yang lebih rendah. Kondisi ini disebut...',
    options: ['Konfirmasi bullish', 'Divergensi bearish', 'Hidden divergence bullish', 'Golden cross'],
    answer: 1,
    explain: 'Harga bikin puncak lebih TINGGI, tapi RSI bikin puncak lebih RENDAH. Itu divergensi bearish. Artinya harga masih naik tapi tenaganya berkurang — ibaratnya bola yang mantul makin pendek. TAPI ini PERINGATAN, bukan sinyal jual. Divergensi ngukur tenaga, bukan arah, dan bisa bertahan berbulan-bulan di tren kuat. Respons yang sepadan: kencengin trailing stop dan kurangin ukuran, bukan ngebalik posisi.' }); }

  /* --- rta-chart --- */
  seed(1515);
  add({ id: 'rta-chart-chart-001', module: 'rta-chart', level: 'RTA', difficulty: 'mudah',
    chart: { title: 'Saham DEFG · Harian', data: CS.marubozu(), panels: [],
      alt: 'Candle terakhir berbadan panjang nyaris tanpa sumbu di kedua ujung' },
    q: 'Candle terakhir pada grafik memiliki badan panjang nyaris tanpa sumbu. Candle seperti ini disebut dan menandakan...',
    options: ['Doji — keraguan pasar', 'Marubozu — dominasi satu sisi sepanjang periode',
              'Hammer — penolakan harga rendah', 'Harami — momentum melemah'],
    answer: 1,
    explain: 'Badan panjang nyaris tanpa sumbu itu marubozu. Artinya harga dibuka persis di satu ujung rentang dan ditutup di ujung satunya. Ceritanya: satu sisi dominan SEPANJANG periode, nggak pernah ada perlawanan berarti. Ini salah satu candle tunggal yang paling tegas maknanya. Makin besar volumenya, makin berarti — karena artinya dominasi itu terjadi dengan partisipasi yang ramai.' });

  seed(1616);
  add({ id: 'rta-chart-chart-002', module: 'rta-chart', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham HIJK · Harian', data: CS.doji(), panels: ['volume'],
      alt: 'Candle terakhir memiliki badan sangat tipis dengan sumbu di kedua sisi, muncul setelah tren naik' },
    q: 'Candle terakhir memiliki harga pembukaan dan penutupan hampir sama, muncul setelah tren naik dengan volume tinggi. Pembacaan yang paling tepat adalah...',
    options:['Doji — keseimbangan dan potensi titik balik yang masih butuh konfirmasi','Doji — sinyal jual yang sudah pasti karena muncul setelah tren naik','Marubozu — dominasi pembeli yang menandakan tren makin menguat','Spinning top — keraguan yang lazim muncul di tengah tren berjalan'],
    answer: 0,
    explain: 'Open dan close hampir sama, jadi badannya tipis banget. Itu doji, artinya pembeli dan penjual imbang — nggak ada yang menang periode itu. Yang bikin bermakna di sini: dia muncul SETELAH tren naik dengan volume TINGGI. Volume tinggi artinya banyak yang transaksi, tapi hasilnya imbang. Keseimbangan mendadak di puncak tren itu berarti. Tapi tetep BUTUH KONFIRMASI — doji sendirian bukan sinyal jual.' });

  /* --- cta-candle --- */
  const csq = [
    ['hammer', 'sedang', 'Candle terakhir memiliki sumbu bawah panjang dengan badan kecil di bagian atas, muncul setelah tren turun. Pola ini adalah...',
     ['Hammer — sinyal pembalikan bullish', 'Hanging man — sinyal pembalikan bearish', 'Shooting star — sinyal bearish', 'Marubozu — kelanjutan tren'],
     0, 'Sumbu bawah panjang dengan badan kecil di atas, muncul setelah tren turun. Itu hammer. Ceritanya: harga sempet jatuh jauh, tapi ada yang ngeborong dan ndorong balik ke atas sebelum tutup. Itu penolakan harga rendah. Syaratnya dua: harus SETELAH tren turun, dan sumbu bawahnya minimal DUA KALI panjang badannya. Volume yang besar bikin sinyalnya jauh lebih dipercaya.'],
    ['shootingStar', 'sedang', 'Candle terakhir memiliki sumbu atas panjang dengan badan kecil di bawah, muncul setelah tren naik. Pola ini adalah...',
     ['Inverted hammer — bullish', 'Shooting star — bearish', 'Dragonfly doji — bullish', 'Piercing line — bullish'],
     1, 'Sumbu atas panjang dengan badan kecil di bawah, muncul setelah tren naik. Itu shooting star, dan maknanya bearish. Ceritanya: harga sempet naik jauh, tapi ditolak mentah-mentah dan jatuh balik sebelum tutup. Perhatiin yang penting: bentuknya PERSIS SAMA dengan inverted hammer. Yang mbedain cuma LOKASI dalam tren. Ini contoh paling telanjang bahwa konteks lebih nentuin daripada bentuk.'],
    ['bullishEngulf', 'mudah', 'Dua candle terakhir pada grafik membentuk pola...',
     ['Bullish engulfing', 'Bearish engulfing', 'Harami', 'Tweezer bottom'],
     0, 'Badan candle bullish terakhir nutupin SEPENUHNYA badan candle bearish sebelumnya. Itu bullish engulfing. Ceritanya: kemarin penjual menang, hari ini pembeli bukan cuma balikin semua, tapi ngelewatin. Perpindahan kekuatan yang tegas. Kekuatannya nambah karena muncul setelah tren turun dan volumenya jauh lebih besar. Catatan: yang dibandingin BODY-nya, bukan sumbunya.'],
    ['bearishEngulf', 'sedang', 'Dua candle terakhir setelah tren naik pada grafik ini membentuk pola...',
     ['Bullish engulfing', 'Bearish engulfing', 'Rising three methods', 'Morning star'],
     1, 'Badan candle bearish terakhir nelan penuh badan candle bullish sebelumnya. Itu bearish engulfing, dan muncul setelah tren naik artinya pembalikan. Ceritanya: kemarin pembeli menang, hari ini penjual ngambil alih dan ngehapus semua kemajuan kemarin plus lebih. Volume yang membesar nguatin sinyalnya, karena artinya perpindahan kendali itu terjadi dengan partisipasi yang ramai.'],
    ['morningStar', 'sedang', 'Tiga candle terakhir pada grafik membentuk pola...',
     ['Evening star — bearish', 'Morning star — bullish', 'Three black crows — bearish', 'Harami — netral'],
     1, 'Urutannya tiga babak: candle bearish panjang (penjual dominan), candle kecil (pasar ragu, momentumnya berhenti), terus candle bullish panjang yang nembus jauh ke dalam badan candle pertama (pembeli ngambil alih). Itu morning star. Yang bikin dia lebih dipercaya daripada pola satu candle: ceritanya berurutan dan jelas. Makin dalam candle ketiga nembus badan pertama, makin kuat sinyalnya.'],
    ['eveningStar', 'sedang', 'Tiga candle terakhir setelah tren naik pada grafik ini membentuk pola...',
     ['Morning star — bullish', 'Evening star — bearish', 'Piercing line — bullish', 'Inside bar — netral'],
     1, 'Evening star itu cerminan morning star: candle bullish panjang, candle kecil penuh keraguan di puncak, terus candle bearish panjang. Ceritanya pergeseran dominasi dari pembeli ke penjual, tepat di puncak tren. Sama kayak morning star, idealnya candle ketiga nutup di bawah titik tengah candle pertama — makin dalam, makin meyakinkan.'],
    ['harami', 'sulit', 'Dua candle terakhir pada grafik menunjukkan badan candle kedua berada di dalam badan candle pertama. Pola ini adalah...',
     ['Engulfing — pembalikan kuat', 'Harami — momentum melemah dan butuh konfirmasi', 'Marubozu — tren menguat', 'Tweezer — resistance kuat'],
     1, 'Harami: badan candle kedua ada DI DALAM badan candle pertama. Namanya dari bahasa Jepang yang artinya hamil. Ceritanya: setelah candle besar, rentang pergerakan tiba-tiba nyempit — trennya kehilangan tenaga. Tapi perhatiin, ini pola KERAGUAN, bukan pembalikan tegas. Dia lebih mirip peringatan jeda. Makanya harami sendirian tanpa konfirmasi candle berikutnya itu sinyal yang lemah.'],
    ['threeBlackCrows', 'sedang', 'Setelah tren naik, muncul tiga candle bearish berbadan panjang berturut-turut dengan penutupan makin rendah. Pola ini disebut...',
     ['Three white soldiers — bullish', 'Three black crows — bearish', 'Rising three methods — penerusan bullish', 'Tweezer bottom — bullish'],
     1, 'Tiga candle bearish berbadan panjang berturut-turut dengan penutupan yang terus menurun. Itu three black crows. Ceritanya: tekanan jual yang KONSISTEN selama tiga sesi, bukan panik sesaat. Makanya dianggap bearish yang kuat, terutama kalau muncul setelah tren naik atau di area resistance. Catatan praktis: karena butuh tiga sesi buat kebentuk, pas lo ngenalinnya harga udah turun lumayan.'],
    ['tweezerTop', 'sulit', 'Dua candle terakhir memiliki harga tertinggi yang hampir sama persis. Pola ini disebut dan menandakan...',
     ['Tweezer top — resistance menguat karena penjual menahan di level sama','Tweezer bottom — support menguat karena pembeli menahan dua kali','Harami — momentum melemah setelah candle besar sebelumnya','Dark cloud cover — penjual merebut kendali dari pembeli'],
     0, 'Dua candle berurutan punya harga TERTINGGI yang hampir sama persis. Itu tweezer top. Ceritanya: penjual muncul di harga yang sama persis DUA KALI. Itu bukti ada pasokan yang kokoh di level itu, bukan kebetulan. Polanya sederhana tapi berguna karena dia langsung nunjukin level mana yang lagi dipertahanin. Kalau muncul setelah tren naik, jadi indikasi pembalikan.']
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
    explain: 'Di grafik ini gelombang 3 yang paling panjang dan volumenya paling besar — dan itu konsisten sama pedoman Elliott. Logikanya: gelombang 3 itu momen semua orang akhirnya sadar trennya nyata, jadi partisipasinya puncak. Catatan penting soal aturannya: gelombang 3 nggak boleh jadi yang TERPENDEK — itu bukan berarti harus terpanjang. Tapi dalam praktik, paling sering dia emang yang terpanjang.' }); }


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
    explain: 'Support mendatar dengan puncak yang terus menurun. Itu segitiga menurun, dan condong BEARISH. Ceritanya kebalikan segitiga menaik: pembeli bertahan di satu harga, tapi penjual bersedia jual makin murah — mereka makin agresif. Ketimpangan ini biasanya berakhir dengan pembeli kehabisan dana dan support jebol. Bentuknya mirip segitiga menaik, tapi ceritanya berlawanan.' }); }

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
    explain: 'Dua garis yang MENAIK dan MENYEMPIT, dengan volume terus menurun. Itu rising wedge, dan implikasinya BEARISH meskipun bentuknya naik. Logikanya: garis yang nyempit artinya tiap dorongan naik makin pendek jangkauannya — tenaganya lagi habis. Volume yang menyusut mempertegas. Aturan umumnya: wedge itu polanya melawan arah kemiringannya. Jangan ketuker sama channel naik yang garisnya sejajar.' }); }

  seed(4003); { const p = P.inverseHeadShoulders();
  add({ id: 'rta-trend-chart-013', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham DEFG · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'hline', price: p.neck, label: 'Neckline' }],
      alt: 'Tiga dasar dengan dasar tengah paling rendah, di bawah neckline mendatar' },
    q: 'Pola pada grafik ini adalah...',
    options: ['Head and shoulders top — bearish', 'Inverse head and shoulders — bullish',
              'Triple top — bearish', 'Rising wedge — bearish'],
    answer: 1,
    explain: 'Ini kebalikan head and shoulders: tiga LEMBAH dengan lembah tengah paling dalam, diapit dua bahu yang lebih dangkal. Namanya inverse head and shoulders, dan maknanya bullish. Ceritanya: penjual paling ganas di head, terus makin lemah di bahu kanan yang nggak sanggup jatuh sedalem head. Polanya sah setelah neckline ditembus ke atas, idealnya dengan volume yang melonjak.' }); }

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
    explain: 'Support diuji TIGA kali dan bertahan. Dibanding double bottom, ini umumnya dianggap lebih kuat karena pasokan di level itu kebukti beneran keserap — tiga kali diuji, tiga kali nggak jebol. Basisnya lebih matang. Tapi ada nuansa yang jujur harus disebut: sebagian praktisi justru bilang tiap pengujian ngehabisin sebagian order beli. Jadi lebih matang iya, tapi jangan dianggap makin kebal.' }); }

  seed(4005); { const p = P.channelUp();
  add({ id: 'rta-trend-chart-015', module: 'rta-trend', level: 'RTA', difficulty: 'mudah',
    chart: { title: 'Saham FGHI · Harian', data: p.data, panels: [],
      overlays: [{ type: 'line', a: p.upper.a, b: p.upper.b, label: 'Batas atas' },
                 { type: 'line', a: p.lower.a, b: p.lower.b, label: 'Garis tren' }],
      alt: 'Harga bergerak naik di antara dua garis sejajar' },
    q: 'Selama channel naik ini masih berlaku, strategi yang paling masuk akal adalah...',
    options:['Membeli saat harga surut ke batas bawah, ambil untung mendekati batas atas','Membeli saat harga menembus batas atas, jual saat kembali ke batas bawah','Menjual setiap kali harga menyentuh garis tren di batas bawah channel','Menunggu channel ditembus lebih dulu sebelum mengambil posisi apa pun'],
    answer: 0,
    explain: 'Selama channel naik masih berlaku, strateginya: beli pas harga surut ke batas BAWAH, ambil untung mendekati batas ATAS. Kenapa nggak ngejar di atas? Karena di batas atas risk reward-nya paling jelek. Satu hal yang sering kelewat dan berguna: ketidakmampuan harga nyentuh batas atas itu sinyal dini melemahnya tren, sering muncul SEBELUM garis bawahnya jebol.' }); }

  seed(4006); { const p = P.roundingBottom();
  add({ id: 'rta-trend-chart-016', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham GHIJ · Mingguan', data: p.data, panels: ['volume'],
      alt: 'Dasar melengkung landai dengan volume mengering di titik terendah lalu membesar saat naik' },
    q: 'Grafik menunjukkan dasar melengkung landai dengan volume yang mengering di titik terendah lalu membesar. Pola ini disebut...',
    options: ['V bottom', 'Rounding bottom atau saucer bottom', 'Island reversal', 'Bear flag'],
    answer: 1,
    explain: 'Dasar melengkung landai dengan volume yang ngering di titik terendah terus membesar. Itu rounding bottom. Ceritanya soal WAKTU, bukan satu peristiwa: volume kering artinya penjual udah kehabisan barang, nggak ada lagi yang kepepet. Terus volume naik pelan seiring harga naik artinya minat balik tanpa euforia. Justru karena nggak ada momen dramatisnya, pola ini paling sering kelewat.' }); }

  seed(4007); { const p = P.islandReversal();
  add({ id: 'rta-trend-chart-017', module: 'rta-trend', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham HIJK · Harian', data: p.data, panels: ['volume'],
      alt: 'Sekelompok candle terpisah dari sekitarnya oleh gap naik lalu gap turun' },
    q: 'Beberapa candle di puncak grafik terpisah dari sekitarnya oleh gap naik di kiri dan gap turun di kanan. Formasi ini disebut...',
    options: ['Island reversal', 'Breakaway gap', 'Runaway gap', 'Bull flag'],
    answer: 0,
    explain: 'Beberapa candle di puncak kepisah dari sekitarnya oleh gap naik di kiri dan gap turun di kanan — jadi kayak pulau. Namanya island reversal. Ceritanya dramatis: euforia terakhir bikin gap naik, beberapa hari bingung di pucuk, terus panik bikin gap turun. Semua yang beli di pulau itu langsung nyangkut. Polanya jarang, tapi kalau muncul maknanya kuat.' }); }

  /* --- rta-level batch 2 --- */
  seed(4008); { const p = P.measuringGap();
  add({ id: 'rta-level-chart-004', module: 'rta-level', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham IJKL · Harian', data: p.data, panels: ['volume'],
      alt: 'Kenaikan dari 1.000 ke 1.200 lalu gap di tengah tren yang berlanjut naik' },
    q: 'Harga naik dari sekitar 1.000 ke 1.200, lalu terjadi gap di sekitar 1.270 dan tren berlanjut. Bila gap ini adalah measuring gap, target proyeksinya sekitar...',
    options: ['Sekitar 1.300', 'Sekitar 1.470', 'Sekitar 1.200', 'Tidak dapat diproyeksikan'],
    answer: 1,
    explain: 'Kaki pertama naik dari 1.000 ke 1.200 = 200 poin. Gap-nya di sekitar 1.270. Kalau ini measuring gap, dia nandain kira-kira TITIK TENGAH pergerakan, jadi kaki keduanya diperkirakan sepanjang kaki pertama: 1.270 + 200 = sekitar 1.470. Kuncinya ngenalin JENIS gap-nya dengan bener: breakaway di awal, measuring di tengah, exhaustion di ujung. Salah nebak jenisnya, targetnya ikut ngaco.' }); }

  seed(4009); { const p = P.exhaustionGap();
  add({ id: 'rta-level-chart-005', module: 'rta-level', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham JKLM · Harian', data: p.data, panels: ['volume'],
      alt: 'Gap naik dengan volume ekstrem di ujung tren panjang, langsung diikuti pembalikan tajam' },
    q: 'Gap naik pada grafik ini muncul setelah tren naik panjang, disertai volume ekstrem, lalu harga langsung berbalik tajam. Gap jenis ini adalah...',
    options:['Exhaustion gap — tanda klimaks di ujung tren yang sedang berjalan','Breakaway gap — tanda dimulainya tren baru yang didukung volume','Measuring gap — penanda titik tengah dari keseluruhan pergerakan','Common gap — celah biasa pada saham yang perdagangannya tipis'],
    answer: 0,
    explain: 'Gap naik setelah tren naik PANJANG, dengan volume EKSTREM, terus harga langsung berbalik tajam. Itu exhaustion gap — dorongan terakhir dari yang telat masuk. Ciri khasnya: lokasinya di ujung tren, volumenya klimaks, dan habis itu nggak ada lanjutan. Beda dari breakaway yang jarang ketutup, exhaustion gap ini biasanya cepat ketutup karena yang masuk di situ langsung nyangkut.' }); }

  seed(4010); { const p = P.fibRetrace();
  const f = (r) => r2(p.hi - (p.hi - p.lo) * r);
  add({ id: 'rta-level-chart-006', module: 'rta-level', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham KLMN · Harian', data: p.data, panels: [],
      overlays: [{ type: 'hline', price: f(0.382), label: 'A · 38,2%' },
                 { type: 'hline', price: f(0.5), label: 'B · 50%' },
                 { type: 'hline', price: f(0.618), label: 'C · 61,8%' }],
      alt: 'Kenaikan dari 1.000 ke 1.500 lalu koreksi yang berhenti di garis paling bawah dari tiga level Fibonacci' },
    q: 'Harga naik dari 1.000 ke 1.500 lalu terkoreksi. Koreksi berhenti dan memantul di garis C. Berapa level retracement tersebut dan apa maknanya?',
    options:['61,8% — koreksi dalam, tren masih mungkin berlanjut tapi risikonya naik','38,2% — koreksi dangkal yang menandakan tren utamanya sangat kuat','50% — koreksi normal yang tidak mengubah penilaian atas trennya','78,6% — koreksi sangat dalam yang menandakan tren sudah berbalik'],
    answer: 0,
    explain: 'Naik dari 1.000 ke 1.500 = 500 poin. Garis C ada di level retracement 61,8 persen: 0,618 x 500 = 309 poin, jadi 1.500 - 309 = sekitar 1.191. Maknanya: koreksi ini DALAM. Tren masih mungkin lanjut, tapi risikonya naik, karena 61,8 persen itu sering dianggap batas terakhir sebelum tren dianggap batal. Di bawah itu, kenaikan sebelumnya udah kehapus terlalu banyak.' }); }

  seed(4011); { const p = P.sellingClimax();
  add({ id: 'rta-level-chart-007', module: 'rta-level', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham LMNO · Harian', data: p.data, panels: ['volume'],
      alt: 'Batang dengan rentang sangat lebar dan volume ekstrem di akhir tren turun, ditutup jauh di atas titik terendahnya' },
    q: 'Di akhir tren turun panjang muncul satu batang berentang sangat lebar dengan volume ekstrem, yang ditutup jauh di atas titik terendahnya. Pembacaan yang paling tepat adalah...',
    options:['Selling climax — pasokan jual diserap pihak besar, berpotensi area dasar','Kelanjutan tren turun dengan tekanan jual yang justru makin besar','Exhaustion gap yang menandai berakhirnya tren turun berjalan','Distribusi akhir sebelum penurunan lanjutan yang lebih dalam'],
    answer: 0,
    explain: 'Satu batang berentang sangat lebar dengan volume EKSTREM, ditutup jauh DI ATAS titik terendahnya, di ujung tren turun panjang. Itu selling climax. Terjemahannya: banyak banget yang jual panik, TAPI harganya nggak bertahan di bawah — ada yang nyerap semuanya. Itu perpindahan barang dari tangan lemah ke tangan kuat. Sering nandain area dasar, tapi jangan langsung borong: climax bisa diikuti retest.' }); }

  /* --- rta-indikator batch 2 --- */
  seed(4012); { const p = P.deathCross();
  add({ id: 'rta-ind-chart-003', module: 'rta-indikator', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham MNOP · Harian', data: p.data, panels: [], height: 250,
      overlays: [{ type: 'ma', period: 20, label: 'MA20' }, { type: 'ma', period: 50, label: 'MA50' }],
      alt: 'Rata-rata bergerak 20 hari memotong ke bawah rata-rata 50 hari' },
    q: 'MA20 memotong ke bawah MA50 pada grafik ini. Peristiwa dan sifat sinyalnya adalah...',
    options:['Death cross — sinyal lagging, muncul setelah sebagian penurunan terjadi','Golden cross — sinyal lagging yang menandakan tren naik terkonfirmasi','Divergensi bearish — sinyal leading dari melemahnya momentum harga','Bollinger squeeze — sinyal bahwa volatilitas akan segera melebar'],
    answer: 0,
    explain: 'MA20 motong ke BAWAH MA50 itu death cross, sinyal bearish. Tapi yang penting dipahami: ini sinyal LAGGING, muncul setelah sebagian penurunan udah terjadi. MA diitung dari harga yang udah lewat, jadi mustahil dia duluan. Keterlambatan itu bukan cacat yang bisa diperbaiki — itu harga yang dibayar buat nyaring sinyal palsu. Yang mau lebih cepet harus terima lebih banyak sinyal palsu.' }); }

  seed(4013); { const p = P.rsiBullDivergence();
  add({ id: 'rta-ind-chart-004', module: 'rta-indikator', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham NOPQ · Harian', data: p.data, panels: ['rsi'], height: 220,
      overlays: [{ type: 'marker', i: 17, text: '1', pos: 'below' }, { type: 'marker', i: 28, text: '2', pos: 'below' }],
      alt: 'Harga membentuk dasar kedua lebih rendah sementara RSI membentuk dasar kedua lebih tinggi' },
    q: 'Harga mencetak dasar 2 lebih rendah dari dasar 1, tetapi RSI justru mencetak dasar yang lebih tinggi. Kondisi ini adalah...',
    options: ['Divergensi bearish', 'Divergensi bullish', 'Hidden divergence bearish', 'Death cross'],
    answer: 1,
    explain: 'Harga bikin dasar lebih RENDAH, tapi RSI bikin dasar lebih TINGGI. Itu divergensi bullish. Artinya harga masih turun tapi tenaga jualnya berkurang. Ibaratnya bola yang mantul makin pendek — masih turun, tapi udah kehabisan tenaga. TAPI kayak semua divergensi, ini ngukur TENAGA bukan ARAH, dan bisa bertahan lama sebelum harga beneran balik. Tunggu konfirmasi struktur harga.' }); }

  seed(4014); { const p = P.bbSqueeze();
  add({ id: 'rta-ind-chart-005', module: 'rta-indikator', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham OPQR · Harian', data: p.data, panels: [], height: 250,
      overlays: [{ type: 'bb', period: 20, mult: 2, label: 'BB 20' }],
      alt: 'Pita Bollinger menyempit tajam lalu melebar bersamaan dengan pergerakan harga yang besar' },
    q: 'Pita Bollinger menyempit tajam di bagian tengah grafik sebelum harga bergerak besar. Apa yang sebenarnya ditunjukkan penyempitan itu?',
    options:['Volatilitas sedang rendah, ekspansi biasanya menyusul tanpa arah tertentu','Harga akan naik karena penyempitan menandakan akumulasi sedang terjadi','Harga akan turun karena penyempitan menandakan minat pasar mengering','Tren yang berlaku akan berlanjut dengan kecepatan yang sama'],
    answer: 0,
    explain: 'Bollinger squeeze cuma ngomong SATU hal: volatilitas lagi rendah banget dan kemungkinan besar bakal meledak. Dia NGGAK ngomong ke arah mana. Nol petunjuk arah. Beli cuma modal squeeze itu sama aja lempar koin, cuma dengan grafik yang keliatan ilmiah. Yang bener: tunggu arahnya kekonfirmasi lewat penembusan plus volume. Squeeze itu alarm siap-siap, bukan panah penunjuk arah.' }); }

  seed(4015); { const p = P.maBounce();
  add({ id: 'rta-ind-chart-006', module: 'rta-indikator', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham PQRS · Harian', data: p.data, panels: [], height: 250,
      overlays: [{ type: 'ma', period: 20, label: 'MA20' }],
      alt: 'Harga berulang kali surut ke garis rata-rata bergerak lalu memantul naik' },
    q: 'Harga berulang kali surut ke MA20 lalu memantul naik. Peran MA20 di sini paling tepat disebut...',
    options: ['Resistance statis', 'Support dinamis', 'Target keuntungan', 'Indikator volatilitas'],
    answer: 1,
    explain: 'Harga berulang kali surut ke MA20 terus mantul naik. Peran MA20 di sini SUPPORT DINAMIS — dinamis karena levelnya gerak terus ngikutin harga, beda dari support horizontal yang diem. Kenapa bisa jalan? Bukan karena matematikanya sakti, tapi karena banyak pelaku mantau garis yang sama dan naruh order di sekitarnya. Keunggulannya: dia otomatis nyesuain seiring tren jalan.' }); }

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
    explain: 'Harga terus cetak puncak lebih tinggi, tapi volume terus MENYUSUT. Itu ketimpangan yang serius: makin sedikit yang mau beli di harga tinggi, alias pembelinya lagi habis. Di tren naik yang SEHAT, volume mestinya membesar pas harga naik. Kalau polanya kebalik kayak gini, trennya kehilangan dukungan dan rawan berbalik. Volume itu yang mbedain naik yang kokoh dari naik yang keropos.' }); }

  /* --- cta-candle batch 2, termasuk soal jebakan lokasi --- */
  const csq2 = [
    ['hangingMan', 'sulit', 'Candle terakhir memiliki sumbu bawah panjang dengan badan kecil, tetapi muncul setelah tren NAIK. Pola ini adalah...',
     ['Hammer — bullish', 'Hanging man — bearish', 'Dragonfly doji — bullish', 'Inverted hammer — bullish'],
     1, 'Bentuknya persis hammer — sumbu bawah panjang, badan kecil. TAPI muncul setelah tren NAIK, dan itu ngubah artinya jadi bearish. Namanya hanging man. Ceritanya: di tengah tren naik, tiba-tiba ada gelombang jualan yang ndorong harga jatuh jauh, meski akhirnya kepulihin. Munculnya tekanan jual sebesar itu di puncak tren adalah peringatan. Bentuk sama, lokasi beda, makna berlawanan.'],
    ['invertedHammer', 'sulit', 'Candle terakhir memiliki sumbu atas panjang dengan badan kecil, muncul setelah tren TURUN. Pola ini adalah...',
     ['Shooting star — bearish', 'Inverted hammer — bullish', 'Hanging man — bearish', 'Marubozu — penerusan'],
     1, 'Sumbu atas panjang dengan badan kecil, muncul setelah tren TURUN. Itu inverted hammer, dan maknanya bullish. Ceritanya: pembeli sempet ndorong harga naik jauh meski akhirnya ditekan balik — tapi munculnya minat beli sebesar itu di dasar tren adalah tanda. Bentuknya persis sama dengan shooting star; yang mbedain cuma lokasinya dalam tren. Butuh konfirmasi candle berikutnya.'],
    ['piercingLine', 'sedang', 'Dua candle terakhir setelah tren turun membentuk pola...',
     ['Dark cloud cover — bearish', 'Piercing line — bullish', 'Bearish engulfing — bearish', 'Harami — netral'],
     1, 'Candle bullish DIBUKA DI BAWAH close sebelumnya (kelihatan makin parah), tapi DITUTUP DI ATAS titik tengah badan bearish sebelumnya. Itu piercing line. Ceritanya: pagi panik, tapi ada yang ngeborong dan ngebalikin lebih dari separo kerugian. Syarat titik tengah itu yang mbedain sinyal beneran dari pantulan biasa — kalau nutupnya cuma naik dikit, itu bukan piercing line.'],
    ['darkCloudCover', 'sedang', 'Dua candle terakhir setelah tren naik membentuk pola...',
     ['Piercing line — bullish', 'Dark cloud cover — bearish', 'Bullish engulfing — bullish', 'Tweezer bottom — bullish'],
     1, 'Candle bearish DIBUKA DI ATAS close sebelumnya (kelihatan kuat di awal), tapi DITUTUP DI BAWAH titik tengah badan bullish sebelumnya. Itu dark cloud cover. Ceritanya dramatis: pagi optimis, sore ambruk, dan yang beli di pembukaan langsung nyangkut. Ini kebalikan bearish dari piercing line, dan syarat titik tengahnya sama pentingnya.'],
    ['threeWhiteSoldiers', 'sedang', 'Tiga candle terakhir setelah tren turun membentuk pola...',
     ['Three black crows — bearish', 'Three white soldiers — bullish', 'Rising three methods — penerusan', 'Evening star — bearish'],
     1, 'Tiga candle bullish berbadan panjang berturut-turut dengan penutupan yang terus meninggi, setelah tren turun. Itu three white soldiers. Ceritanya: tekanan beli yang KONSISTEN selama tiga sesi, bukan pantulan sesaat. Ini kebalikan dari three black crows. Catatan praktis yang sama: karena butuh tiga sesi buat kebentuk, pas lo ngenalinnya harga udah naik lumayan.'],
    ['tweezerBottom', 'sulit', 'Dua candle terakhir setelah tren turun memiliki harga TERENDAH yang hampir sama persis. Pola ini disebut...',
     ['Tweezer top — resistance menguat', 'Tweezer bottom — support menguat', 'Harami — momentum melemah', 'Doji ganda — keraguan'],
     1, 'Dua candle berurutan punya harga TERENDAH yang hampir sama persis, setelah tren turun. Itu tweezer bottom. Ceritanya: pembeli muncul di harga yang sama persis DUA KALI, jadi ada permintaan yang kokoh di level itu. Sama kayak tweezer top, polanya sederhana tapi berguna karena langsung nunjukin level mana yang lagi dipertahanin dengan jelas.'],
    ['bullishHarami', 'sedang', 'Candle terakhir berbadan kecil dan seluruhnya berada di dalam badan candle bearish sebelumnya, setelah tren turun. Pola ini adalah...',
     ['Bullish engulfing', 'Bullish harami', 'Piercing line', 'Three white soldiers'],
     1, 'Candle terakhir berbadan kecil dan SELURUHNYA ada di dalam badan candle bearish sebelumnya, setelah tren turun. Itu bullish harami. Ceritanya: setelah jualan besar, rentang pergerakan tiba-tiba nyempit — tekanan jualnya kehilangan tenaga. Tapi ini pola KERAGUAN, bukan pembalikan tegas. Butuh konfirmasi candle berikutnya sebelum ditindaklanjuti.'],
    ['dragonflyDoji', 'sulit', 'Candle terakhir memiliki open, high, dan close hampir sama di bagian atas, dengan sumbu bawah panjang, muncul di area support. Pola ini adalah...',
     ['Gravestone doji — bearish', 'Dragonfly doji — bullish', 'Marubozu — penerusan', 'Spinning top — netral'],
     1, 'Open, high, dan close hampir sama di bagian ATAS, dengan sumbu bawah panjang. Itu dragonfly doji, dan di area support maknanya bullish. Ceritanya: harga sempet jatuh jauh, tapi semuanya kepulihin sampai nutup di puncak rentangnya. Penolakan harga rendah yang total. Cara ngingetnya: dragonfly itu capung, badannya di atas, ekornya panjang ke bawah.'],
    ['gravestoneDoji', 'sulit', 'Candle terakhir memiliki open, low, dan close hampir sama di bagian bawah, dengan sumbu atas panjang, muncul di area resistance. Pola ini adalah...',
     ['Dragonfly doji — bullish', 'Gravestone doji — bearish', 'Hammer — bullish', 'Harami — netral'],
     1, 'Open, low, dan close hampir sama di bagian BAWAH, dengan sumbu atas panjang. Itu gravestone doji, dan di area resistance maknanya bearish. Ceritanya: harga sempet naik jauh, tapi semuanya kehapus sampai nutup di dasar rentangnya. Penolakan harga tinggi yang total. Cara ngingetnya: gravestone itu nisan, bentuknya berdiri ke atas, dan maknanya kematian tren naik.']
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


  /* ===== batch 3 ===== */
  seed(6001); { const p = P.bearFlag();
  add({ id: 'rta-trend-chart-018', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham TUVW · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'line', a: p.upper.a, b: p.upper.b }, { type: 'line', a: p.lower.a, b: p.lower.b, label: 'Bendera' }],
      alt: 'Penurunan tajam, konsolidasi miring naik bervolume tipis, lalu penurunan tajam lagi' },
    q: 'Konsolidasi miring naik bervolume tipis setelah penurunan tajam pada grafik ini adalah...',
    options: ['Bear flag — penerusan bearish', 'Bull flag — penerusan bullish',
              'Rising wedge — pembalikan bearish', 'Channel naik — tren berbalik arah'],
    answer: 0,
    explain: 'Turun tajam dulu (tiang benderanya), terus konsolidasi yang miring NAIK dengan volume tipis (benderanya). Itu bear flag, pola PENERUSAN bearish. Ceritanya: sebagian nutup posisi jual setelah penurunan tajam, tapi nggak ada gelombang pembelian serius — kelihatan dari volumenya yang tipis. Ini cerminan bull flag, dan kuncinya sama: benderanya harus pendek.' }); }

  seed(6002); { const p = P.broadening();
  add({ id: 'rta-trend-chart-019', module: 'rta-trend', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham UVWA · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'line', a: p.upper.a, b: p.upper.b, label: 'Puncak makin tinggi' },
                 { type: 'line', a: p.lower.a, b: p.lower.b, label: 'Lembah makin rendah' }],
      alt: 'Puncak makin tinggi dan lembah makin rendah sehingga rentangnya terus melebar' },
    q: 'Pola dengan puncak makin tinggi dan lembah makin rendah seperti grafik ini disebut dan menandakan...',
    options: ['Broadening formation — ketidaksepakatan pelaku pasar meningkat',
              'Segitiga simetris — volatilitas sedang terkompresi',
              'Channel naik — tren naik yang masih terkendali',
              'Cup and handle — akumulasi bertahap sebelum breakout'],
    answer: 0,
    explain: 'Puncak makin TINGGI dan lembah makin RENDAH — rentangnya melebar, bukan nyempit. Itu broadening formation atau megaphone. Ceritanya: ketidaksepakatan pelaku pasar meningkat, dua kubu makin ekstrem, dan nggak ada yang bisa mendominasi. Biasanya muncul di puncak pasar pas emosi lagi tinggi. Susah ditransaksikan karena stop-nya harus lebar banget.' }); }

  seed(6003); { const p = P.diamondTop();
  add({ id: 'rta-trend-chart-020', module: 'rta-trend', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham VWAB · Harian', data: p.data, panels: ['volume'],
      alt: 'Rentang melebar di paruh awal lalu menyempit di paruh akhir sebelum harga jatuh' },
    q: 'Grafik menunjukkan rentang yang melebar di paruh awal lalu menyempit di paruh akhir. Pola ini adalah...',
    options: ['Diamond top — pembalikan bearish', 'Segitiga simetris — netral terhadap arah',
              'Rectangle — konsolidasi dalam rentang mendatar', 'Rounding top — pembalikan bertahap'],
    answer: 0,
    explain: 'Rentangnya MELEBAR di paruh awal terus MENYEMPIT di paruh akhir — jadi bentuknya kayak berlian. Itu diamond top, pola pembalikan bearish. Ceritanya: volatilitas meledak karena pasar makin nggak stabil di pucuk, terus mereda pas kedua kubu kehabisan tenaga, terus jebol ke bawah. Polanya jarang dan susah dikenali pas lagi kebentuk, tapi maknanya serius kalau muncul di puncak besar.' }); }

  seed(6004); { const p = P.vBottom();
  add({ id: 'rta-trend-chart-021', module: 'rta-trend', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham WABC · Harian', data: p.data, panels: ['volume'],
      alt: 'Penurunan tajam yang langsung berbalik naik tanpa fase basis di titik terendah' },
    q: 'Pembalikan pada grafik ini terjadi tanpa fase basis sama sekali. Kesulitan utama menransaksikan pola seperti ini adalah...',
    options: ['Konfirmasinya baru muncul saat harga sudah jauh dari titik terendahnya',
              'Polanya terlalu sering muncul sehingga sulit dibedakan dari noise',
              'Volume pada pola ini tidak dapat dijadikan konfirmasi sama sekali',
              'Targetnya tidak dapat dihitung karena tidak ada neckline yang jelas'],
    answer: 0,
    explain: 'Pembalikannya terjadi tanpa fase basis sama sekali — langsung nukik lalu langsung naik. Itu V bottom, dan kesulitan utamanya: konfirmasinya baru muncul pas harga udah JAUH dari titik terendahnya. Nggak ada pullback buat masuk, nggak ada level jelas buat pasang stop. Pelajarannya yang sering nggak enak diterima: nggak semua pola bisa ditradingin, dan itu nggak apa-apa.' }); }

  seed(6005); { const p = P.downChannel();
  add({ id: 'rta-trend-chart-022', module: 'rta-trend', level: 'RTA', difficulty: 'sedang',
    chart: { title: 'Saham ABCE · Harian', data: p.data, panels: [],
      overlays: [{ type: 'line', a: p.upper.a, b: p.upper.b, label: 'Garis tren turun' },
                 { type: 'line', a: p.lower.a, b: p.lower.b }],
      alt: 'Harga bergerak turun di antara dua garis sejajar yang menurun' },
    q: 'Selama channel turun ini berlaku, peran garis tren atas pada grafik adalah...',
    options: ['Resistance dinamis yang menahan setiap upaya kenaikan harga',
              'Support dinamis yang menahan setiap upaya penurunan harga',
              'Target keuntungan bagi posisi beli yang dibuka di batas bawah',
              'Level pembatalan yang menandakan tren turun sudah berakhir'],
    answer: 0,
    explain: 'Selama channel turun berlaku, garis tren ATAS berfungsi sebagai RESISTANCE DINAMIS yang nahan tiap upaya kenaikan. Dinamis karena levelnya turun terus seiring waktu. Praktisnya: tiap kali harga naik nyentuh garis itu terus ditolak, itu konfirmasi trennya masih hidup, dan sering jadi titik jual dengan stop rapat di atas garisnya.' }); }

  seed(6006); { const p = P.pennant();
  add({ id: 'rta-trend-chart-023', module: 'rta-trend', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham BCEF · Harian', data: p.data, panels: ['volume'],
      overlays: [{ type: 'line', a: p.upper.a, b: p.upper.b }, { type: 'line', a: p.lower.a, b: p.lower.b, label: 'Pennant' }],
      alt: 'Kenaikan tajam diikuti segitiga kecil menyempit bervolume tipis, lalu kenaikan tajam lagi' },
    q: 'Konsolidasi berbentuk segitiga kecil menyempit setelah kenaikan tajam pada grafik ini disebut...',
    options: ['Pennant — penerusan bullish', 'Segitiga simetris — pola netral berdurasi panjang',
              'Diamond — pembalikan bearish', 'Falling wedge — pembalikan bullish'],
    answer: 0,
    explain: 'Konsolidasi berbentuk segitiga KECIL yang nyempit setelah kenaikan tajam. Itu pennant, pola penerusan bullish. Bedanya sama bull flag cuma di bentuk konsolidasinya: bendera itu sejajar (kayak persegi miring), pennant itu nyempit (kayak segitiga mini). Ceritanya sama: jeda sebentar buat ambil untung tipis, terus tren lanjut. Dan sama-sama harus PENDEK durasinya.' }); }

  seed(6007); { const p = P.ichimokuBreak();
  add({ id: 'rta-ind-chart-008', module: 'rta-indikator', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham CEFG · Harian', data: p.data, panels: [], height: 260,
      overlays: [{ type: 'ichimoku', p1: 9, p2: 26, p3: 52 }],
      alt: 'Harga menembus ke atas awan Ichimoku setelah lama bergerak di bawahnya' },
    q: 'Harga pada bagian kanan grafik bergerak di atas awan Ichimoku. Pembacaan yang paling tepat adalah...',
    options: ['Bias bullish, dengan awan berperan sebagai area support di bawahnya',
              'Bias bearish, karena harga sudah terlalu jauh meninggalkan awannya',
              'Pasar tanpa arah, karena posisi harga terhadap awan belum menentukan',
              'Sinyal jual, karena harga akan kembali masuk ke dalam awan'],
    answer: 0,
    explain: 'Harga di ATAS awan Ichimoku itu bias bullish, dan awannya berperan sebagai area SUPPORT di bawahnya. Kelebihan Ichimoku: support-nya berupa ZONA yang tebalnya berubah-ubah, bukan garis tunggal. Awan tebal artinya support kuat, awan tipis artinya gampang ditembus. Dan karena awan digambar 26 periode ke DEPAN, lo bisa lihat di mana support-nya bakal berada bulan depan.' }); }

  seed(6008); { const p = P.macdCross();
  add({ id: 'rta-ind-chart-009', module: 'rta-indikator', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham EFGH · Harian', data: p.data, panels: ['macd'], height: 230,
      alt: 'MACD line memotong ke atas garis sinyal saat keduanya masih berada di bawah nol' },
    q: 'Pada panel MACD, garis MACD memotong ke atas garis sinyal ketika keduanya masih di bawah nol. Sinyal ini dinilai...',
    options: ['Lebih bertenaga, karena pembalikan muncul setelah kondisi jenuh jual',
              'Lebih lemah, karena persilangan di bawah nol biasanya sinyal palsu',
              'Netral, karena posisi terhadap garis nol tidak mempengaruhi maknanya',
              'Tidak sah, karena persilangan hanya berlaku bila terjadi di atas nol'],
    answer: 0,
    explain: 'Garis MACD motong ke atas garis sinyal SEMENTARA keduanya masih di BAWAH nol. Kenapa ini dinilai bertenaga? Karena artinya pembalikan muncul setelah kondisi jenuh jual — harga udah jatuh jauh dan momentumnya baru mulai balik. Potensi ruang naiknya lebih lebar. Tapi ada sisi lainnya yang jujur: crossover di bawah nol itu taruhan melawan tren menengah yang masih negatif, jadi lebih sering gagal daripada yang di atas nol.' }); }

  seed(6009); { const p = P.rsiDivergence();
  add({ id: 'rta-ind-chart-010', module: 'rta-indikator', level: 'RTA', difficulty: 'sulit',
    chart: { title: 'Saham FGHI · Harian', data: p.data, panels: ['macd'], height: 230,
      alt: 'Harga mencetak puncak lebih tinggi sementara histogram MACD memendek' },
    q: 'Harga mencetak puncak yang lebih tinggi, tetapi histogram MACD justru memendek. Apa yang ditunjukkan histogram tersebut?',
    options: ['Jarak MACD terhadap garis sinyal menyempit, jadi laju penguatan berkurang',
              'MACD sudah memotong ke bawah garis sinyal sehingga tren berbalik',
              'Volume transaksi menurun meski harga masih mencetak puncak baru',
              'Perhitungan MACD keliru karena histogram seharusnya ikut membesar'],
    answer: 0,
    explain: 'Histogram MACD itu JARAK antara garis MACD sama garis sinyalnya. Harga cetak puncak lebih tinggi tapi histogramnya MEMENDEK artinya jaraknya nyempit — momentumnya masih positif, tapi laju penguatannya berkurang. Analoginya mobil: masih maju kenceng, tapi pedal gasnya mulai dilepas. Ini peringatan dini buat ngencengin trailing stop, BUKAN sinyal jual.' }); }

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
