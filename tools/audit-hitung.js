#!/usr/bin/env node
/* Menyaring soal yang jawabannya dapat dihitung, lalu mencetaknya agar
   perhitungan pada kunci dan pembahasan dapat diperiksa ulang secara manual.

   Latar belakang: sebuah soal expectancy pernah lolos validasi biasa padahal
   kuncinya salah hitung, karena validator hanya memeriksa struktur data, bukan
   kebenaran aritmetikanya. Soal berhitung jumlahnya sedikit, jadi paling
   murah diperiksa satu per satu daripada dipaksakan otomatis. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const sb = { window: {}, console }; sb.window = sb; vm.createContext(sb);
const root = path.join(__dirname, '..');
const run = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), sb, { filename: f });
run('assets/js/data.js');
fs.readdirSync(path.join(root, 'data')).filter(f => f.endsWith('.js')).sort()
  .forEach(f => run(path.join('data', f)));

const BERHITUNG = /\b(berapa|expectancy|jumlah lembar|nilai posisi|target|retrace \d|dikalikan dengan|volatilitas tahunan)\b/i;
const soal = sb.TD.BANK.filter(q => BERHITUNG.test(q.q) && /\d/.test(q.q));

soal.forEach(q => {
  console.log('[' + q.id + '] ' + q.q);
  console.log('   KUNCI: ' + q.options[q.answer]);
  console.log('   ' + q.explain.replace(/\s+/g, ' ').slice(0, 220) + '\n');
});
console.log('soal berhitung: ' + soal.length + ' dari ' + sb.TD.BANK.length);
