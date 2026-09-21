#!/usr/bin/env node
/* Menerapkan perbaikan opsi jawaban ke berkas data di tempatnya.
   Masukan: berkas JSON berisi { "<id soal>": { "options": [...], "answer": n } }
   Hanya baris options dan answer milik soal bersangkutan yang diganti;
   pertanyaan dan pembahasannya tidak disentuh.

   Jalankan: node tools/apply-options.js <berkas.json> */
const fs = require('fs');
const path = require('path');

const patchFile = process.argv[2];
if (!patchFile) { console.error('pakai: node tools/apply-options.js <berkas.json>'); process.exit(1); }
const patch = JSON.parse(fs.readFileSync(patchFile, 'utf8'));
const dataDir = path.join(__dirname, '..', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));

let applied = 0;
const notFound = new Set(Object.keys(patch));

files.forEach(fname => {
  const fp = path.join(dataDir, fname);
  let src = fs.readFileSync(fp, 'utf8');
  let changed = false;

  Object.keys(patch).forEach(id => {
    // batas entri soal: dari {id:"<id>" sampai tepat sebelum entri berikutnya atau akhir larik
    const start = src.indexOf('{id:"' + id + '"');
    if (start < 0) return;
    let depth = 0, end = -1;
    for (let i = start; i < src.length; i++) {
      if (src[i] === '{') depth++;
      else if (src[i] === '}') { depth--; if (depth === 0) { end = i + 1; break; } }
    }
    if (end < 0) return;

    const entry = src.slice(start, end);
    const p = patch[id];
    const opts = JSON.stringify(p.options);
    let next = entry.replace(/options:\s*\[[\s\S]*?\],\s*\n?\s*answer:\s*\d+/,
      'options:' + opts + ',\n answer:' + p.answer);
    if (next === entry) { console.error('  ! pola options/answer tidak cocok untuk ' + id); return; }

    src = src.slice(0, start) + next + src.slice(end);
    changed = true; applied++; notFound.delete(id);
  });

  if (changed) fs.writeFileSync(fp, src);
});

console.log('opsi diperbarui:', applied, 'soal');
if (notFound.size) console.error('TIDAK DITEMUKAN:', Array.from(notFound).join(', '));
