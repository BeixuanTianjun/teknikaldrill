#!/usr/bin/env node
/* Menyebar posisi kunci jawaban secara merata ke A/B/C/D.

   Opsi jawaban memang selalu diacak saat sesi berjalan, tetapi posisi kunci
   pada berkas data tetap perlu tersebar: berkas ini dibaca manusia, dan
   penumpukan kunci di satu posisi membuat soal mudah ditebak saat ditinjau
   maupun bila suatu saat pengacakan dimatikan.

   Rotasi aman karena setiap opsi berdiri sendiri; tidak ada opsi bergaya
   "semua jawaban di atas benar" yang bergantung pada urutan. */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'chart-questions.js');
let seen = 0, moved = 0;

files.forEach(fname => {
  const fp = path.join(dataDir, fname);
  let src = fs.readFileSync(fp, 'utf8');
  let out = '', cursor = 0;
  const re = /options:\s*(\[[\s\S]*?\])\s*,\s*\n?\s*answer:\s*(\d+)/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    let opts;
    try { opts = JSON.parse(m[1].replace(/'/g, '"')); } catch (e) { continue; }
    const ans = Number(m[2]);
    if (!Array.isArray(opts) || opts.length !== 4 || ans < 0 || ans > 3) continue;

    const target = seen % 4;                 // sebar merata A, B, C, D
    seen++;
    if (target !== ans) moved++;
    const shift = (target - ans + 4) % 4;
    const rot = opts.slice(-shift || 4).concat(opts.slice(0, -shift || 4));
    // verifikasi: kunci harus mendarat tepat di posisi target
    if (rot[target] !== opts[ans]) { console.error('rotasi gagal, dilewati'); continue; }

    out += src.slice(cursor, m.index) + 'options:' + JSON.stringify(rot) + ',\n answer:' + target;
    cursor = m.index + m[0].length;
  }
  out += src.slice(cursor);
  fs.writeFileSync(fp, out);
});

console.log('soal diproses:', seen, '| posisi kunci dipindah:', moved);
