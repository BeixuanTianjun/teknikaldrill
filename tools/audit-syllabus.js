#!/usr/bin/env node
/* Audit cakupan silabus dan tingkat kognitif soal.

   Dua hal yang diukur:
   1. Sebaran soal terhadap 16 unit kompetensi — agar tidak ada unit yang tipis
   2. Tingkat kognitif menurut taksonomi Bloom, dari mengingat sampai mencipta

   Soal HOTS adalah C4 ke atas: menuntut analisis, evaluasi, atau perancangan,
   bukan sekadar mengenali istilah. Penggolongan memakai pola kalimat soal dan
   bersifat perkiraan, tetapi cukup untuk menunjukkan ketimpangan. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const sb = { window: {}, console }; sb.window = sb; vm.createContext(sb);
const run = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), sb, { filename: f });
run('assets/js/data.js');
fs.readdirSync(path.join(root, 'data')).filter(f => f.endsWith('.js')).sort()
  .forEach(f => run(path.join('data', f)));
const bank = sb.TD.BANK;

/* Penggolongan berbasis STRUKTUR soal, bukan sekadar kata kunci.

   Soal hafalan (C1–C2) berciri pendek dan definitif: langsung menanyakan
   istilah atau rumus tanpa situasi apa pun. Soal HOTS (C4 ke atas) selalu
   menghadirkan sesuatu untuk diolah lebih dulu — skenario, angka, atau dua
   hal yang harus ditimbang — baru menanyakan penilaian atasnya.

   Pencocokan kata kunci saja terbukti keliru: banyak soal berbasis kasus
   yang menuntut analisis justru tidak memakai kata "mengapa" maupun
   "paling tepat", sehingga tergolong hafalan padahal bukan. */
const DEFINITIF = /^(apa\s+(yang\s+)?(dimaksud|disebut)|pola\s+\w+\s+(adalah|merupakan)|rentang nilai|periode default|singkatan)/i;
const PUTUSAN = /\b(paling tepat|paling sesuai|paling konsisten|paling serius|paling kuat|paling relevan|paling berguna|paling bijak|paling masuk akal|paling profesional|keputusan|tindakan|sikap|langkah|menyikapi|sebaiknya|menilai|dinilai|mengapa|kelemahan|risiko terbesar|konsekuensi|implikasi|penjelasan|apa yang harus)\b/i;
const HITUNG = /\b(berapa|hitung|target proyeksi|jumlah lembar|nilai posisi|expectancy)\b/i;

function classify(q) {
  const t = q.q.trim();
  const panjang = t.length;
  const adaAngka = /\d/.test(t);
  // situasi = ada klausa pernyataan sebelum bagian yang ditanyakan
  const adaSituasi = /[.]\s+[A-Z]/.test(t) || /^(sebuah|seorang|analis|harga|pada grafik|setelah|bila|ketika|dua |sebagian)/i.test(t);
  const berkasus = !!q.caseId;
  const bergrafik = !!q.chart;

  if (HITUNG.test(t) && adaAngka) return 'C3 menerapkan';

  let skor = 0;
  if (panjang > 110) skor++;
  if (adaAngka) skor++;
  if (adaSituasi) skor++;
  if (PUTUSAN.test(t)) skor++;
  if (berkasus || bergrafik) skor++;
  if (DEFINITIF.test(t) && panjang < 90) skor -= 2;

  if (skor >= 4) return 'C5 mengevaluasi';
  if (skor >= 2) return 'C4 menganalisis';
  if (skor === 1) return 'C2 memahami';
  return 'C1 mengingat';
}

const byMod = {}, byLvl = {};
bank.forEach(q => {
  const lvl = classify(q);
  byLvl[lvl] = (byLvl[lvl] || 0) + 1;
  const m = byMod[q.module] = byMod[q.module] || { total: 0, hots: 0, chart: 0, kasus: 0 };
  m.total++;
  if (/^C[456]/.test(lvl)) m.hots++;
  if (q.chart) m.chart++;
  if (q.caseId) m.kasus++;
});

console.log('=== Cakupan silabus per unit kompetensi ===');
console.log('unit'.padEnd(17) + 'soal  HOTS   %HOTS  chart  kasus');
let tot = 0, hots = 0;
TD_MODULES().forEach(m => {
  const s = byMod[m.id] || { total: 0, hots: 0, chart: 0, kasus: 0 };
  tot += s.total; hots += s.hots;
  const pct = s.total ? Math.round(s.hots / s.total * 100) : 0;
  const warn = s.total < 25 ? '  << tipis' : (pct < 40 ? '  << HOTS kurang' : '');
  console.log(('[' + m.level + '] ' + m.id).padEnd(17) +
    String(s.total).padStart(4) + String(s.hots).padStart(6) + String(pct + '%').padStart(7) +
    String(s.chart).padStart(7) + String(s.kasus).padStart(7) + warn);
});
function TD_MODULES() { return sb.TD.MODULES; }

console.log('\n=== Tingkat kognitif ===');
Object.keys(byLvl).sort().forEach(k =>
  console.log('  ' + k.padEnd(18) + String(byLvl[k]).padStart(4) +
    '  (' + (byLvl[k] / bank.length * 100).toFixed(1) + '%)  ' + '█'.repeat(Math.round(byLvl[k] / 8))));
console.log('\nTotal soal:', tot, '| HOTS (C4 ke atas):', hots, '=', (hots / tot * 100).toFixed(1) + '%');

/* pembahasan: seberapa kaya isinya */
const pendek = bank.filter(q => q.explain.length < 160).length;
const avg = Math.round(bank.reduce((a, q) => a + q.explain.length, 0) / bank.length);
console.log('Pembahasan: rata-rata', avg, 'karakter |', pendek, 'soal berpembahasan di bawah 160 karakter');
