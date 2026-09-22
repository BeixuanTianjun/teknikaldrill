/* TeknikalDrill — registry bank soal & metadata unit kompetensi.
   Bank soal sengaja dipaket sebagai file .js (bukan .json yang di-fetch)
   supaya aplikasi tetap jalan saat index.html dibuka langsung via file://. */

window.TD = window.TD || {};

/* Daftar skema sertifikasi yang ditampung aplikasi.

   Nama skema tidak lagi tertanam di kode: seluruh tombol pemilih, penyaring,
   dan penyusun paket simulasi dibangun dari daftar ini. Menambah skema baru
   cukup menambah satu baris di sini, lalu unit kompetensi dan bank soalnya.
   Urutannya menentukan urutan tampil, dan skema pertama dipakai sebagai
   nilai bawaan ketika sebuah soal tidak menyebutkan skemanya.

   Catatan kejujuran: rincian unit di bawah disusun dari ruang lingkup yang
   dipublikasikan masing-masing skema, BUKAN salinan silabus resmi. Yang
   dijamin di sini cuma cakupan materinya masuk akal dan merata. */
TD.SCHEMES = [
  { id:'RTA', nama:'Regular Technical Analyst',   bidang:'Analisis Teknikal',
    lembaga:'BNSP · AATI', warna:'a' },
  { id:'CTA', nama:'Certified Technical Analyst', bidang:'Analisis Teknikal',
    lembaga:'BNSP · AATI', warna:'b' },
  { id:'RSA', nama:'Registered Securities Analyst', bidang:'Analisis Efek',
    lembaga:'AAEI', warna:'c' },
  { id:'CSA', nama:'Certified Securities Analyst',  bidang:'Analisis Efek',
    lembaga:'AAEI', warna:'d' }
];
TD.SCHEME_MAP = TD.SCHEMES.reduce((m, x) => (m[x.id] = x, m), {});
TD.schemeIds = function () { return TD.SCHEMES.map(s => s.id); };
TD.defaultScheme = function () { return TD.SCHEMES[0].id; };

/* Unit kompetensi tiap skema.
   RTA = Pelaksanaan Analisis Teknikal, CTA = Pengelolaan Analisis Teknikal,
   RSA = Pelaksanaan Analisis Efek,     CSA = Pengelolaan Analisis Efek. */
TD.MODULES = [
  { id:'rta-dasar',     level:'RTA', name:'Pengertian & Penggunaan Analisis Teknikal', emoji:'🧭',
    desc:'Asumsi dasar, Dow Theory, tipe pasar, teknikal vs fundamental.' },
  { id:'rta-chart',     level:'RTA', name:'Mengkonstruksi Grafik (Chart)', emoji:'📊',
    desc:'Line, bar, candlestick, point & figure, skala, timeframe, volume.' },
  { id:'rta-trend',     level:'RTA', name:'Trend, Reversal & Consolidation', emoji:'📈',
    desc:'Garis tren, channel, pola pembalikan dan penerusan.' },
  { id:'rta-level',     level:'RTA', name:'Menentukan Level Kunci Harga', emoji:'🎚️',
    desc:'Support, resistance, Fibonacci, pivot point, gap.' },
  { id:'rta-indikator', level:'RTA', name:'Menerapkan Indikator Teknikal', emoji:'🧮',
    desc:'Moving average, MACD, RSI, stochastic, Bollinger, indikator volume.' },
  { id:'rta-plan',      level:'RTA', name:'Rencana Trading & Manajemen Risiko', emoji:'🛡️',
    desc:'Entry–exit, stop loss, target, risk/reward, jurnal trading.' },
  { id:'rta-riset',     level:'RTA', name:'Menyusun & Mempublikasikan Riset Teknikal', emoji:'📝',
    desc:'Struktur laporan, disclaimer, etika, komunikasi rekomendasi.' },

  { id:'cta-teori',     level:'CTA', name:'Teori & Filosofi Lanjutan', emoji:'🏛️',
    desc:'Dow lanjutan, efficient market, behavioral finance, random walk.' },
  { id:'cta-elliott',   level:'CTA', name:'Elliott Wave & Rasio Fibonacci', emoji:'🌊',
    desc:'Struktur impulse–koreksi, aturan wave, proyeksi rasio.' },
  { id:'cta-candle',    level:'CTA', name:'Candlestick & Price Action Lanjutan', emoji:'🕯️',
    desc:'Pola candle kompleks, konfirmasi, konteks lokasi pola.' },
  { id:'cta-siklus',    level:'CTA', name:'Siklus, Seasonality & Analisis Waktu', emoji:'🔁',
    desc:'Periodisitas, seasonality, prinsip siklus, time projection.' },
  { id:'cta-breadth',   level:'CTA', name:'Market Breadth, Sentimen & Intermarket', emoji:'🌐',
    desc:'Advance-decline, put/call, VIX, relasi antar kelas aset.' },
  { id:'cta-sistem',    level:'CTA', name:'Sistem Trading, Backtesting & Optimasi', emoji:'⚙️',
    desc:'Desain sistem, metrik kinerja, overfitting, walk-forward.' },
  { id:'cta-portfolio', level:'CTA', name:'Manajemen Portofolio & Position Sizing', emoji:'💼',
    desc:'Alokasi, drawdown, expectancy, money management.' },
  { id:'cta-aset',      level:'CTA', name:'Analisis Multi-Aset', emoji:'🪙',
    desc:'Obligasi, valas, komoditas, derivatif, dan aset kripto.' },
  { id:'cta-statistik', level:'CTA', name:'Statistik & Kuantitatif untuk Analis', emoji:'📐',
    desc:'Volatilitas, korelasi, distribusi return, uji signifikansi.' },

  { id:'rsa-pasar',     level:'RSA', name:'Struktur & Mekanisme Pasar Modal', emoji:'🏦',
    desc:'OJK, BEI, KSEI, KPEI, jenis efek, IPO, mekanisme perdagangan, indeks.' },
  { id:'rsa-makro',     level:'RSA', name:'Ekonomi Makro & Analisis Industri', emoji:'🌏',
    desc:'PDB, inflasi, suku bunga, kurs, siklus industri, analisis top-down.' },
  { id:'rsa-laporan',   level:'RSA', name:'Membaca Laporan Keuangan', emoji:'📑',
    desc:'Neraca, laba rugi, arus kas, ekuitas, catatan atas laporan keuangan.' },
  { id:'rsa-rasio',     level:'RSA', name:'Analisis Rasio & Kinerja Keuangan', emoji:'🧾',
    desc:'Likuiditas, solvabilitas, profitabilitas, aktivitas, DuPont, common size.' },
  { id:'rsa-valuasi',   level:'RSA', name:'Valuasi Dasar Saham', emoji:'⚖️',
    desc:'PER, PBV, EV/EBITDA, PEG, dividend discount model, dividend yield.' },
  { id:'rsa-obligasi',  level:'RSA', name:'Efek Utang & Instrumen Pasar Uang', emoji:'📜',
    desc:'Kupon, harga dan imbal hasil, YTM, peringkat, sukuk, pasar uang.' },
  { id:'rsa-etika',     level:'RSA', name:'Regulasi, Etika & Laporan Riset', emoji:'⚖️',
    desc:'UU Pasar Modal, POJK, benturan kepentingan, insider trading, struktur riset.' },

  { id:'csa-akuntansi', level:'CSA', name:'Kualitas Laba & Akuntansi Lanjutan', emoji:'🔍',
    desc:'Akrual, pengakuan pendapatan, konsolidasi, sewa, segmen, sinyal bahaya.' },
  { id:'csa-dcf',       level:'CSA', name:'Valuasi Arus Kas Terdiskonto', emoji:'💧',
    desc:'FCFF, FCFE, WACC, biaya ekuitas, nilai terminal, analisis sensitivitas.' },
  { id:'csa-relatif',   level:'CSA', name:'Valuasi Relatif & Valuasi Khusus', emoji:'🔗',
    desc:'Pemilihan pembanding, SOTP, valuasi bank dan properti, residual income.' },
  { id:'csa-model',     level:'CSA', name:'Pemodelan Keuangan & Proyeksi', emoji:'🧱',
    desc:'Pendorong asumsi, model tiga laporan, skenario, uji kewajaran proyeksi.' },
  { id:'csa-obligasi',  level:'CSA', name:'Efek Pendapatan Tetap Lanjutan', emoji:'📉',
    desc:'Durasi, konveksitas, kurva imbal hasil, spread kredit, obligasi opsional.' },
  { id:'csa-portofolio',level:'CSA', name:'Teori Portofolio & Manajemen Investasi', emoji:'🧺',
    desc:'Diversifikasi, CAPM, garis pasar modal, Sharpe, alokasi aset, atribusi.' },
  { id:'csa-derivatif', level:'CSA', name:'Derivatif & Manajemen Risiko', emoji:'🎛️',
    desc:'Opsi, kontrak berjangka, paritas put-call, lindung nilai, value at risk.' },
  { id:'csa-korporasi', level:'CSA', name:'Aksi Korporasi & Situasi Khusus', emoji:'🏗️',
    desc:'Rights issue, dilusi, pemecahan saham, pembelian kembali, merger, IPO.' },
  { id:'csa-tatakelola',level:'CSA', name:'Tata Kelola, ESG & Standar Riset', emoji:'🏛️',
    desc:'GCG, hak pemegang saham minoritas, ESG, independensi dan standar riset.' }
];

TD.MODULE_MAP = TD.MODULES.reduce((m, x) => (m[x.id] = x, m), {});

TD.BANK = [];

/* Dipanggil tiap file bank soal. Menormalkan field & menolak entri cacat. */
TD.register = function (list) {
  if (!Array.isArray(list)) return 0;
  let added = 0;
  list.forEach(function (q, i) {
    if (!q || typeof q.q !== 'string' || !Array.isArray(q.options)) return;
    if (q.options.length < 2) return;
    if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) return;
    const mod = TD.MODULE_MAP[q.module];
    TD.BANK.push({
      id: q.id || (q.module || 'soal') + '-' + (TD.BANK.length + 1),
      level: q.level || (mod ? mod.level : TD.defaultScheme()),
      module: q.module || TD.MODULES[0].id,
      difficulty: q.difficulty || 'sedang',
      q: q.q,
      options: q.options.slice(),
      answer: q.answer,
      explain: q.explain || 'Belum ada pembahasan untuk soal ini.',
      chart: q.chart || null,
      caseId: q.caseId || null,
      source: q.source || 'bawaan'
    });
    added++;
  });
  return added;
};

TD.NOTES = {};

/* Dipanggil tiap file catatan materi. Mind map diturunkan dari sections[].mm
   supaya isinya tidak perlu ditulis dua kali. */
/* Menyeragamkan daun mind map.

   Bentuk lama berupa string saja masih diterima, supaya materi yang belum
   diberi keterangan tidak perlu diubah sekaligus. Bentuk baru memakai
   "Label :: keterangan" agar labelnya tetap pendek dan mudah dipindai,
   sementara keterangannya muncul saat daun itu dibuka. */
function normalMm(mm) {
  if (!Array.isArray(mm)) return [];
  return mm.map(function (item) {
    if (item && typeof item === 'object') return { k: item.k || '', d: item.d || '' };
    var teks = String(item == null ? '' : item);
    var pisah = teks.indexOf(' :: ');
    return pisah < 0
      ? { k: teks.trim(), d: '' }
      : { k: teks.slice(0, pisah).trim(), d: teks.slice(pisah + 4).trim() };
  });
}

TD.registerNotes = function (list) {
  if (!Array.isArray(list)) return 0;
  let n = 0;
  list.forEach(function (note) {
    if (!note || !note.module || !Array.isArray(note.sections)) return;
    TD.NOTES[note.module] = {
      module: note.module,
      tagline: note.tagline || '',
      sections: note.sections.map(function (sec) {
        return { h: sec.h || '', mm: normalMm(sec.mm), points: sec.points || [] };
      }),
      jebakan: note.jebakan || []
    };
    n++;
  });
  return n;
};

TD.CASES = {};

/* Studi kasus: satu skenario dipakai oleh beberapa soal sekaligus,
   seperti format vignette pada ujian sertifikasi. */
TD.registerCases = function (list) {
  if (!Array.isArray(list)) return 0;
  let n = 0;
  list.forEach(function (c) {
    if (!c || !c.id || !c.brief) return;
    TD.CASES[c.id] = {
      id: c.id,
      title: c.title || 'Studi kasus',
      brief: c.brief,
      facts: c.facts || [],
      chart: c.chart || null
    };
    n++;
  });
  return n;
};
