#!/usr/bin/env node
/* Validator bank soal TeknikalDrill.
   Jalankan: node tools/validate.js
   Cek: id unik, indeks jawaban valid, modul dikenal, duplikasi soal, kelengkapan pembahasan. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const sandbox = { window: {}, console };
sandbox.window = sandbox;
vm.createContext(sandbox);

function run(file) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });
}

run('assets/js/data.js');
const dataFiles = fs.readdirSync(path.join(root, 'data')).filter(f => f.endsWith('.js')).sort();
dataFiles.forEach(f => run(path.join('data', f)));

const TD = sandbox.TD;
const bank = TD.BANK;
const errors = [];
const warns = [];
const seenId = new Map();
const seenQ = new Map();

bank.forEach(q => {
  if (seenId.has(q.id)) errors.push('id ganda: ' + q.id);
  seenId.set(q.id, q);

  const key = q.q.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 90);
  if (seenQ.has(key)) warns.push('soal mirip: ' + q.id + ' vs ' + seenQ.get(key));
  seenQ.set(key, q.id);

  if (!TD.MODULE_MAP[q.module]) errors.push(q.id + ': modul tidak dikenal (' + q.module + ')');
  else if (TD.MODULE_MAP[q.module].level !== q.level)
    errors.push(q.id + ': level ' + q.level + ' tidak cocok dengan modul ' + q.module);

  if (q.options.length !== 4) warns.push(q.id + ': jumlah opsi ' + q.options.length);
  if (q.answer < 0 || q.answer >= q.options.length) errors.push(q.id + ': indeks jawaban di luar jangkauan');
  if (new Set(q.options.map(o => o.trim().toLowerCase())).size !== q.options.length)
    errors.push(q.id + ': ada opsi jawaban yang duplikat');
  if (q.options.some(o => !o || !o.trim())) errors.push(q.id + ': ada opsi kosong');
  if (!q.explain || q.explain.length < 40) errors.push(q.id + ': pembahasan terlalu pendek');
  if (!['mudah', 'sedang', 'sulit'].includes(q.difficulty)) warns.push(q.id + ': difficulty ' + q.difficulty);

  // integritas data grafik: tiap batang harus punya OHLC yang konsisten
  if (q.chart) {
    const d = q.chart.data;
    if (!Array.isArray(d) || d.length < 5) errors.push(q.id + ': data grafik kurang dari 5 batang');
    else d.forEach((bar, bi) => {
      if (!Array.isArray(bar) || bar.length < 4) { errors.push(q.id + ' batang ' + bi + ': bukan OHLC'); return; }
      const [o, h, l, c] = bar;
      if ([o, h, l, c].some(v => typeof v !== 'number' || !isFinite(v)))
        errors.push(q.id + ' batang ' + bi + ': ada nilai bukan angka');
      else {
        if (h < Math.max(o, c) - 1e-9) errors.push(q.id + ' batang ' + bi + ': high di bawah badan');
        if (l > Math.min(o, c) + 1e-9) errors.push(q.id + ' batang ' + bi + ': low di atas badan');
        if (l > h) errors.push(q.id + ' batang ' + bi + ': low di atas high');
        if (o <= 0 || l <= 0) errors.push(q.id + ' batang ' + bi + ': harga nol atau negatif');
      }
    });
    if (!q.chart.alt) warns.push(q.id + ': grafik tanpa teks alternatif');
  }
  if (!/[?.]$|\.\.\.$/.test(q.q.trim())) warns.push(q.id + ': pertanyaan tidak diakhiri tanda baca');
});

// sebaran per modul
const byMod = {};
bank.forEach(q => { byMod[q.module] = (byMod[q.module] || 0) + 1; });

console.log('=== TeknikalDrill — validasi bank soal ===');
console.log('File data   :', dataFiles.length);
console.log('Total soal  :', bank.length);
// daftar skema dibaca dari registry, jadi skema baru langsung ikut terhitung
sandbox.TD.SCHEMES.forEach(sk =>
  console.log('  ' + sk.id.padEnd(10) + ':', bank.filter(q => q.level === sk.id).length));
console.log('\nSebaran per unit kompetensi:');
TD.MODULES.forEach(m => {
  const n = byMod[m.id] || 0;
  console.log('  ' + (m.level + '  ' + m.id).padEnd(24) + String(n).padStart(4) + ' soal' + (n === 0 ? '   << KOSONG' : ''));
});
const diff = {};
bank.forEach(q => { diff[q.difficulty] = (diff[q.difficulty] || 0) + 1; });
const withChart = bank.filter(q => q.chart);
console.log('\nSoal dengan grafik:', withChart.length,
            '| total batang OHLC:', withChart.reduce((a, q) => a + q.chart.data.length, 0));
console.log('Sebaran kesulitan:', JSON.stringify(diff));

// sebaran posisi kunci jawaban (deteksi bias)
const keyPos = [0, 0, 0, 0];
bank.forEach(q => { keyPos[q.answer]++; });
console.log('Posisi kunci A/B/C/D:', keyPos.join(' / '));

// --- materi ringkas & mind map ---
const notes = TD.NOTES || {};
let totalSec = 0, totalPoin = 0, totalKw = 0, totalTrap = 0;
TD.MODULES.forEach(m => {
  const n = notes[m.id];
  if (!n) { errors.push('materi hilang untuk unit ' + m.id); return; }
  if (!n.tagline) warns.push(m.id + ': materi tanpa tagline');
  if (!n.sections.length) errors.push(m.id + ': materi tanpa section');
  if (!n.jebakan.length) warns.push(m.id + ': materi tanpa catatan jebakan');
  n.sections.forEach((sec, i) => {
    if (!sec.h) errors.push(m.id + ' section ' + i + ': tanpa judul');
    if (!sec.mm.length) errors.push(m.id + ' section "' + sec.h + '": tanpa label mind map');
    if (!sec.points.length) errors.push(m.id + ' section "' + sec.h + '": tanpa poin');
    totalKw += sec.mm.length; totalPoin += sec.points.length;
  });
  totalSec += n.sections.length;
  totalTrap += n.jebakan.length;
});
console.log('\nMateri ringkas & mind map:');
console.log('  Unit bermateri :', Object.keys(notes).length + '/' + TD.MODULES.length);
console.log('  Topik/cabang   :', totalSec);
console.log('  Poin kunci     :', totalPoin);
console.log('  Node mind map  :', totalKw);
console.log('  Catatan jebakan:', totalTrap);

// --- mutu pengecoh: kunci yang jauh lebih panjang membocorkan jawaban ---
let tell = 0;
bank.forEach(q => {
  const lens = q.options.map(o => o.length);
  const benar = lens[q.answer];
  const lainMax = Math.max.apply(null, lens.filter((_, i) => i !== q.answer));
  if (benar > lainMax * 1.6 && benar - lainMax > 24) tell++;
});
console.log('\nMutu pengecoh:');
console.log('  Kunci jauh lebih panjang dari semua pengecoh:', tell,
            '(' + (tell / bank.length * 100).toFixed(1) + '%) — jalankan tools/audit-quality.js --list');

if (warns.length) { console.log('\nPeringatan (' + warns.length + '):'); warns.forEach(w => console.log('  ! ' + w)); }
if (errors.length) { console.log('\nERROR (' + errors.length + '):'); errors.forEach(e => console.log('  x ' + e)); process.exit(1); }
console.log('\nSemua soal lolos validasi.');
