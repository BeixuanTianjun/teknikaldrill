#!/usr/bin/env node
/* Menyusun berkas tambalan untuk tools/apply-options.js dari perubahan sebagian.

   Masukan: berkas JSON berisi { "<id soal>": { "<indeks opsi>": "teks baru" } }.
   Opsi yang tidak disebut diambil apa adanya dari bank soal, dan indeks kunci
   tidak berubah. Dipakai saat yang perlu diperbaiki hanya panjang pengecoh,
   supaya tidak perlu menulis ulang seluruh opsi satu per satu.

   Jalankan: node tools/extend-distractor.js <masukan.json> <keluaran.json> */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const sb = { window: {}, console }; sb.window = sb; vm.createContext(sb);
const run = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), sb, { filename: f });
run('assets/js/data.js');
fs.readdirSync(path.join(root, 'data')).filter(f => f.endsWith('.js')).sort()
  .forEach(f => run(path.join('data', f)));
const byId = {};
sb.TD.BANK.forEach(q => { byId[q.id] = q; });

const masukan = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const keluaran = {};
let gagal = 0;
Object.keys(masukan).forEach(id => {
  const q = byId[id];
  if (!q) { console.error('  tidak ditemukan:', id); gagal++; return; }
  const opts = q.options.slice();
  Object.keys(masukan[id]).forEach(i => {
    const idx = Number(i);
    if (idx === q.answer) { console.error('  MENGUBAH KUNCI, dilewati:', id); gagal++; return; }
    opts[idx] = masukan[id][i];
  });
  keluaran[id] = { options: opts, answer: q.answer };
});
fs.writeFileSync(process.argv[3], JSON.stringify(keluaran, null, 0));
console.log('siap ditambalkan:', Object.keys(keluaran).length, 'soal | gagal:', gagal);
