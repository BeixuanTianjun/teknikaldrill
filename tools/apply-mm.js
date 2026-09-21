#!/usr/bin/env node
/* Menambal daun mind map dari peta JSON {"modul|judul bagian": ["Label :: ket", ...]}.

   Array mm ditulis ulang seluruhnya per bagian, karena mengganti label satu
   per satu rawan salah sasaran: label pendek seperti Volume atau Doji muncul
   di banyak unit. Bagian yang jumlah daunnya berubah akan ditolak, supaya
   tidak ada daun yang hilang tanpa disadari. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const sb = { window: {}, console }; sb.window = sb; vm.createContext(sb);
const run = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), sb, { filename: f });
run('assets/js/data.js');
fs.readdirSync(path.join(root, 'data')).filter(f => f.endsWith('.js')).sort()
  .forEach(f => run(path.join('data', f)));

const peta = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const dir = path.join(root, 'data');
const berkas = fs.readdirSync(dir).filter(f => f.startsWith('notes-') && f.endsWith('.js'));

let ok = 0;
const gagal = [];

Object.entries(peta).forEach(([kunci, baru]) => {
  const [modul, judul] = kunci.split('|');
  const note = sb.TD.NOTES[modul];
  const sec = note && note.sections.find(s => s.h === judul);
  if (!sec) { gagal.push(kunci + ' (bagian tidak ditemukan)'); return; }
  if (sec.mm.length !== baru.length) {
    gagal.push(kunci + ' (jumlah daun berubah: ' + sec.mm.length + ' -> ' + baru.length + ')');
    return;
  }
  // literal lama disusun ulang dari label aslinya, persis seperti di berkas
  const lama = 'mm:[' + sec.mm.map(n => JSON.stringify(n.d ? n.k + ' :: ' + n.d : n.k)).join(',') + ']';
  const ganti = 'mm:[' + baru.map(t => JSON.stringify(t)).join(',') + ']';

  let ketemu = 0, target = null;
  berkas.forEach(nama => {
    const isi = fs.readFileSync(path.join(dir, nama), 'utf8');
    const n = isi.split(lama).length - 1;
    if (n) { ketemu += n; target = nama; }
  });
  if (ketemu !== 1) { gagal.push(kunci + ' (kecocokan literal: ' + ketemu + ')'); return; }

  const jalur = path.join(dir, target);
  fs.writeFileSync(jalur, fs.readFileSync(jalur, 'utf8').replace(lama, ganti));
  ok++;
});

console.log('bagian mind map diperbarui: ' + ok);
if (gagal.length) { console.error('GAGAL:\n  ' + gagal.join('\n  ')); process.exit(1); }
