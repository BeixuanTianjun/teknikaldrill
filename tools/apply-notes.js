#!/usr/bin/env node
/* Menambal baris materi ringkas di tempat berdasarkan peta JSON
   {"teks lama": "teks baru"}.

   Materi tidak punya id per baris seperti soal, jadi pencocokan memakai teks
   lamanya sendiri. Baris yang teks lamanya tidak unik ditolak, supaya tidak
   ada penggantian yang mengenai baris lain tanpa disadari. */
const fs = require('fs');
const path = require('path');

const peta = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const dir = path.join(__dirname, '..', 'data');
const berkas = fs.readdirSync(dir).filter(f => f.startsWith('notes-') && f.endsWith('.js'));

let diganti = 0;
const gagal = [];

Object.entries(peta).forEach(([lama, baru]) => {
  if (baru.includes('"')) { gagal.push('mengandung kutip ganda: ' + baru.slice(0, 50)); return; }
  let jumlah = 0, target = null;
  berkas.forEach(nama => {
    const isi = fs.readFileSync(path.join(dir, nama), 'utf8');
    const n = isi.split(lama).length - 1;
    if (n) { jumlah += n; target = nama; }
  });
  if (jumlah !== 1) { gagal.push('kecocokan ' + jumlah + ': ' + lama.slice(0, 60)); return; }
  const jalur = path.join(dir, target);
  fs.writeFileSync(jalur, fs.readFileSync(jalur, 'utf8').replace(lama, baru));
  diganti++;
});

console.log('baris materi diganti: ' + diganti);
if (gagal.length) { console.error('GAGAL:\n  ' + gagal.join('\n  ')); process.exit(1); }
