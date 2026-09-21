#!/usr/bin/env node
/* Audit kualitas soal: mendeteksi pengecoh yang terlalu mudah dibuang.

   Soal pilihan ganda yang baik menuntut pemahaman, bukan naluri mengerjakan tes.
   Tiga celah yang paling sering membocorkan kunci jawaban:
   1. Kunci jawaban jauh lebih panjang daripada pengecohnya
   2. Pengecoh berisi frasa buangan yang tidak pernah mungkin benar
   3. Kunci menumpuk di posisi tertentu */
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

/* frasa yang membuat sebuah opsi hampir pasti bukan jawaban */
const BUANGAN = [
  'data tidak valid', 'data salah', 'kesalahan data', 'tidak dapat dibaca', 'tidak bisa dibaca',
  'tidak punya arti', 'tidak punya makna', 'tanpa makna', 'tidak ada artinya',
  'tidak dapat ditafsirkan', 'tidak berpengaruh sama sekali', 'tidak perlu diperhatikan',
  'menghindari semua transaksi', 'tidak perlu ditetapkan', 'diwajibkan oleh bursa',
  'diwajibkan bursa', 'dilarang oleh regulator', 'dilarang regulator', 'ditentukan oleh bursa secara acak',
  'menghemat ruang layar', 'menambah panjang laporan', 'mempercepat komputer', 'menghemat biaya cetak',
  'merek komputer', 'jumlah jam kerja', 'kapasitas memori', 'selera warna'
];

const stats = { panjang: [], buangan: [], absolut: [] };
const keyPos = [0, 0, 0, 0];

bank.forEach(q => {
  keyPos[q.answer]++;
  const lens = q.options.map(o => o.length);
  const benar = lens[q.answer];
  const lainMax = Math.max.apply(null, lens.filter((_, i) => i !== q.answer));
  const lainAvg = lens.filter((_, i) => i !== q.answer).reduce((a, b) => a + b, 0) / (lens.length - 1);

  // kunci jauh lebih panjang = pembaca bisa menebak tanpa tahu materinya
  if (benar > lainMax * 1.6 && benar - lainMax > 24)
    stats.panjang.push({ id: q.id, kunci: benar, pengecohTerpanjang: lainMax, rasio: (benar / lainAvg).toFixed(2) });

  q.options.forEach((o, i) => {
    if (i === q.answer) return;
    const low = o.toLowerCase();
    const hit = BUANGAN.find(b => low.includes(b));
    if (hit) stats.buangan.push({ id: q.id, opsi: String.fromCharCode(65 + i), frasa: hit });
  });

  // pengecoh absolut ("selalu", "pasti", "tidak pernah") mudah dicoret
  const abs = q.options.filter((o, i) => i !== q.answer && /\b(selalu|pasti|tidak pernah|semua|hanya)\b/i.test(o)).length;
  if (abs >= 3) stats.absolut.push({ id: q.id, jumlah: abs });
});

const pct = n => (n / bank.length * 100).toFixed(1) + '%';
console.log('=== Audit kualitas pengecoh ===');
console.log('Total soal :', bank.length);
console.log('');
console.log('1. Kunci jawaban jauh lebih panjang dari semua pengecoh :', stats.panjang.length, '(' + pct(stats.panjang.length) + ')');
console.log('2. Pengecoh berisi frasa buangan                        :', stats.buangan.length, 'opsi pada',
            new Set(stats.buangan.map(x => x.id)).size, 'soal');
console.log('3. Tiga pengecoh atau lebih memakai kata absolut        :', stats.absolut.length);
console.log('');
console.log('Sebaran posisi kunci A/B/C/D:', keyPos.join(' / '),
            '| ideal ~' + Math.round(bank.length / 4) + ' per posisi');

if (process.argv.includes('--list')) {
  console.log('\n-- soal dengan kunci terlalu panjang --');
  stats.panjang.forEach(x => console.log('  ' + x.id.padEnd(22), 'kunci ' + x.kunci + ' vs pengecoh ' + x.pengecohTerpanjang));
  console.log('\n-- opsi dengan frasa buangan --');
  stats.buangan.forEach(x => console.log('  ' + x.id.padEnd(22), x.opsi, '"' + x.frasa + '"'));
}
