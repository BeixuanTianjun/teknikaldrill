#!/usr/bin/env node
/* Menambal teks soal (q) dan/atau pembahasan (explain) di tempat, berdasarkan
   peta JSON {id: {q?, explain?}}.

   Menambal di tempat jauh lebih aman daripada menulis ulang seluruh berkas:
   indeks kunci jawaban, id, modul, dan tingkat kesulitan tidak pernah
   tersentuh, sehingga mustahil jawaban benar bergeser tanpa disadari. */
const fs = require('fs');
const path = require('path');

const mapFile = process.argv[2];
if (!mapFile) { console.error('pakai: node tools/apply-text.js <peta.json>'); process.exit(1); }
const peta = JSON.parse(fs.readFileSync(mapFile, 'utf8'));

/* Mengganti satu literal string berkutip ganda yang dimulai pada posisi buka.
   String pada berkas data tidak memakai escape, jadi kutip berikutnya adalah
   penutupnya. Nilai baru diperiksa agar tidak menyelipkan kutip. */
function gantiString(src, posBuka, nilai) {
  if (nilai.includes('"')) throw new Error('nilai mengandung kutip ganda: ' + nilai.slice(0, 60));
  const tutup = src.indexOf('"', posBuka + 1);
  if (tutup < 0) throw new Error('kutip penutup tidak ditemukan');
  return src.slice(0, posBuka + 1) + nilai + src.slice(tutup);
}

const dir = path.join(__dirname, '..', 'data');
let diganti = 0;
const terpakai = new Set();

fs.readdirSync(dir).filter(f => f.endsWith('.js')).forEach(nama => {
  const jalur = path.join(dir, nama);
  let src = fs.readFileSync(jalur, 'utf8');
  const awal = src;

  Object.entries(peta).forEach(([id, isi]) => {
    const tanda = 'id:"' + id + '"';
    const i = src.indexOf(tanda);
    if (i < 0) return;
    terpakai.add(id);
    // batas entri: sampai id berikutnya, atau akhir berkas
    const batas = src.indexOf('id:"', i + tanda.length);
    const akhir = batas < 0 ? src.length : batas;

    ['q', 'explain'].forEach(kunci => {
      if (!isi[kunci]) return;
      const cari = new RegExp('\\b' + kunci + ':"');
      const m = cari.exec(src.slice(i, akhir));
      if (!m) throw new Error(id + ': field ' + kunci + ' tidak ditemukan');
      src = gantiString(src, i + m.index + m[0].length - 1, isi[kunci]);
      diganti++;
    });
  });

  if (src !== awal) fs.writeFileSync(jalur, src);
});

const hilang = Object.keys(peta).filter(id => !terpakai.has(id));
if (hilang.length) {
  console.error('id tidak ditemukan: ' + hilang.join(', '));
  process.exit(1);
}
console.log('bidang diganti: ' + diganti + ' pada ' + terpakai.size + ' soal');
