# TeknikalDrill — Mock Test RTA & CTA

Aplikasi web latihan soal bergaya Quizizz untuk persiapan sertifikasi analis teknikal
**RTA® (Regular/Registered Technical Analyst)** dan **CTA® (Certified Technical Analyst)**.
Setiap soal punya **pembahasan**, jadi yang salah langsung ketahuan salahnya di mana.

Statis sepenuhnya — tanpa build, tanpa server, tanpa dependency. Buka `index.html`, langsung jalan.

## Isi bank soal

**537 soal orisinal** yang disusun mengikuti unit kompetensi skema sertifikasi analis teknikal BNSP,
**61 di antaranya soal baca chart** yang menampilkan grafik harga:

| Level | Unit kompetensi | Soal |
|---|---|---|
| RTA | Pengertian & Penggunaan Analisis Teknikal | 35 |
| RTA | Mengkonstruksi Grafik (Chart) | 31 |
| RTA | Trend, Reversal & Consolidation | 35 |
| RTA | Menentukan Level Kunci Harga | 30 |
| RTA | Menerapkan Indikator Teknikal | 45 |
| RTA | Rencana Trading & Manajemen Risiko | 28 |
| RTA | Menyusun & Mempublikasikan Riset Teknikal | 20 |
| CTA | Teori & Filosofi Lanjutan | 22 |
| CTA | Elliott Wave & Rasio Fibonacci | 25 |
| CTA | Candlestick & Price Action Lanjutan | 25 |
| CTA | Siklus, Seasonality & Analisis Waktu | 18 |
| CTA | Market Breadth, Sentimen & Intermarket | 22 |
| CTA | Sistem Trading, Backtesting & Optimasi | 25 |
| CTA | Manajemen Portofolio & Position Sizing | 22 |
| CTA | Analisis Multi-Aset | 25 |
| CTA | Statistik & Kuantitatif untuk Analis | 20 |

Soal dan materi ditulis sendiri berdasarkan literatur standar analisis teknikal (Murphy, Wilder,
Dow Theory, Elliott, Wyckoff, Pring, Bollinger, dll), **bukan hasil menyalin bank soal berbayar
milik pihak lain** dan bukan soal ujian resmi BNSP/LSP.

## Mode latihan

| Mode | Cara kerja |
|---|---|
| 🎯 **Latihan per Unit** | Pilih unit kompetensi, tanpa batas waktu, pembahasan langsung muncul tiap soal |
| ⏱️ **Simulasi Ujian** | 50/75/100 soal, timer 120 menit, pembahasan baru dibuka di akhir, passing grade 70% |
| ⚡ **Rapid Fire** | 20 detik per soal, poin bonus untuk kecepatan dan streak |
| 🩹 **Drill Soal Salah** | Hanya soal yang pernah dijawab salah atau ditandai |
| 🧩 **Studi Kasus** | Skenario panjang bertabel data, lalu beberapa soal turunan — format vignette |
| 🕯️ **Drill Baca Chart** | Khusus soal bergrafik: kenali pola, level, dan formasi candle dari chart |
| 🃏 **Flashcard** | Kartu bolak-balik soal ↔ jawaban + pembahasan, tanpa skor |
| 📚 **Materi & Mind Map** | Ringkasan per unit, peta konsep interaktif, daftar jebakan ujian |
| 📊 **Progress & Rapor** | Akurasi per unit, topik terlemah, riwayat sesi |

Fitur lain: poin & streak, tandai soal, review lengkap di akhir sesi (filter semua/salah/ditandai),
tema mengikuti sistem dengan tombol ganti manual, pintasan keyboard (`1`–`4` untuk menjawab, `Enter` untuk lanjut,
`←`/`→`/`Space` di flashcard), dan progress tersimpan otomatis di browser (localStorage).

## Studi kasus

Dua belas skenario bergaya vignette, masing-masing dengan empat soal turunan, total 48 soal
tingkat sulit. Tiap kasus menyajikan narasi situasi plus tabel data, lalu soal-soalnya menuntut hitungan
berlapis atau penimbangan bukti yang saling bertentangan — bukan sekadar mengenali istilah.

Topiknya: penentuan ukuran posisi berlapis, sinyal yang bertentangan antar timeframe, risiko
tersembunyi pada portofolio berkorelasi tinggi, membaca hasil backtest yang mencurigakan,
pergeseran antar pasar, benturan kepentingan pada penerbitan riset, penembusan menjelang rilis
laporan keuangan, mengelola posisi yang sudah jauh menguntungkan, instrumen yang likuiditasnya
tidak sepadan dengan ukuran mandat, memilih antara dua sistem berbeda karakter, pasar yang
indeksnya naik tetapi breadth-nya menyempit, dan rollover kontrak berjangka pada pasar contango.

## Mutu pengecoh

Bank soal ini diaudit dengan `tools/audit-quality.js`, yang mendeteksi tiga celah yang membuat
kunci jawaban bocor tanpa perlu menguasai materi:

1. Kunci jawaban jauh lebih panjang daripada seluruh pengecohnya
2. Pengecoh berisi frasa buangan yang tidak pernah mungkin benar
3. Kunci jawaban menumpuk di posisi tertentu

Urutan opsi jawaban **selalu diacak** saat sesi dimulai, terlepas dari pilihan acak urutan soal,
sehingga posisi kunci pada berkas data tidak pernah terbaca pengguna.

## Soal baca chart

61 soal menampilkan grafik harga yang **digambar sebagai SVG dari deret OHLC yang menempel di
soal** — bukan berkas gambar. Konsekuensinya: tajam di resolusi apa pun, ikut tema gelap maupun
terang, dan tidak menambah satu pun permintaan jaringan.

Arah candle dikodekan lewat **bentuk** (naik = badan berongga, turun = badan padat), bukan warna
saja, sehingga tetap terbaca oleh pembaca dengan buta warna dan saat dicetak hitam putih.
Renderer mendukung panel volume, panel RSI dan panel MACD yang dihitung di sisi klien, Bollinger
Bands, awan Ichimoku, garis support resistance, garis tren, zona harga, moving average, dan
penanda huruf pada candle tertentu.

Polanya mencakup head and shoulders biasa dan terbalik, double dan triple bottom, double top,
segitiga menaik, menurun, dan simetris, bull flag, rising dan falling wedge, channel, cup and
handle, rounding bottom, island reversal, struktur higher high–higher low, support resistance dan
role reversal, breakaway, measuring, dan exhaustion gap, retracement Fibonacci, selling climax,
divergensi volume, golden dan death cross, divergensi RSI dua arah, Bollinger squeeze, moving
average sebagai support dinamis, bear flag, pennant, broadening formation, diamond top, V bottom,
channel turun, penembusan awan Ichimoku, persilangan MACD di bawah nol, hitungan lima gelombang
Elliott, serta 18 formasi candlestick.

Beberapa soal candlestick sengaja dibuat berpasangan sebagai jebakan lokasi: hammer melawan
hanging man, dan inverted hammer melawan shooting star. Bentuk candle-nya identik, yang
membedakan hanya posisinya dalam tren — persis seperti yang diuji di sertifikasi.

Deret OHLC-nya disintesis oleh `tools/gen-chart-questions.js` memakai PRNG ber-seed, sehingga
menjalankan ulang menghasilkan berkas yang identik:

```bash
node tools/gen-chart-questions.js    # menulis ulang data/chart-questions.js
```

Berkas `data/chart-questions.js` dibangkitkan otomatis — sunting generatornya, bukan berkas itu.

## Materi ringkas & mind map

Selain bank soal, tiap unit kompetensi punya halaman materi dengan tiga tab:

- **📖 Ringkasan** — 78 topik berisi **334 poin kunci** (definisi, rumus, angka yang sering ditanya)
- **🧠 Mind Map** — peta konsep interaktif dengan **302 node**, cabang bisa dibuka-tutup,
  konektor digambar otomatis sebagai kurva SVG mengikuti posisi elemen
- **⚠️ Jebakan Ujian** — **38 catatan** kesalahan yang sering terjadi (mis. RSI di atas 70 pada
  tren kuat bukan sinyal jual; volatilitas disetahunkan pakai √252, bukan ×252)

Dari halaman materi ada tombol langsung ke **latihan soal unit itu** atau **flashcard unit itu**.
Isi mind map diturunkan otomatis dari label `mm` tiap section, jadi materi tidak perlu ditulis dua kali.

## Menjalankan

```bash
# paling gampang — buka langsung
xdg-open index.html      # Linux
open index.html          # macOS

# atau lewat server lokal
python3 -m http.server 8000
# lalu buka http://localhost:8000
```

### Hosting

Tidak ada langkah build untuk versi biasa — cukup taruh folder ini di GitHub Pages, Netlify,
atau Vercel dan langsung jalan.

**GitHub Pages untuk repo ini** — di halaman repo: **Settings → Pages → Source: Deploy from a
branch**, pilih branch `main`, folder `/ (root)`, lalu **Save**. Setelah deploy selesai
(1–2 menit), alamatnya:

```
https://beixuantianjun.github.io/teknikaldrill/
```

Berkas `.nojekyll` di root repo membuat Pages menyajikan berkas apa adanya tanpa build Jekyll,
supaya folder proyek lain di repo ini tidak bisa menggagalkan deploy.

Aplikasi berada di root repo ini sehingga terbit langsung di root situs, dan semua path bersifat
relatif sehingga tetap berjalan bila suatu saat dipindah ke subfolder.

### Publikasi sebagai Artifact

`index.html` di sini adalah dokumen HTML utuh supaya bisa dibuka langsung lewat `file://`.
Artifact membungkus berkasnya dengan skeleton dokumen sendiri, jadi versi untuk publikasi
dibuat dengan melepas wrapper `<html>/<head>/<body>`:

```bash
node tools/build-artifact.js    # menghasilkan dist/index.html
```

Lalu publikasikan `dist/index.html` beserta `assets/**` dan `data/**` sebagai berkas pendukung.
Folder `dist/` sengaja tidak di-commit karena hasil build.

## Menambah soal sendiri

### Cara cepat: import dari UI
Di halaman utama ada kotak **Bank soal sendiri**. Pilih file `.json` atau `.csv`, soal langsung
gabung ke bank dan ikut dipakai di semua mode. Tombol **Unduh template CSV** menyediakan contoh format.

Format CSV (kolom `answer` diisi `A`/`B`/`C`/`D`):

```csv
level,module,difficulty,question,a,b,c,d,answer,explanation
RTA,rta-indikator,sedang,"Periode default RSI menurut Wilder?","7","9","14","21",C,"Wilder memakai periode 14."
```

Format JSON:

```json
[{ "level":"CTA", "module":"cta-elliott", "difficulty":"sulit",
   "q":"Pertanyaan...", "options":["A","B","C","D"], "answer":2,
   "explain":"Pembahasan..." }]
```

`answer` pada JSON adalah **indeks** (0 = opsi pertama). `module` harus salah satu id di
`assets/js/data.js`; kalau tidak dikenal, soal otomatis dimasukkan ke unit default sesuai levelnya.

### Cara permanen: tambah file bank
1. Buat `data/nama-file.js` yang memanggil `TD.register([...])` (tiru file yang sudah ada).
2. Daftarkan `<script src="data/nama-file.js"></script>` di `index.html`.
3. Jalankan validator.

## Validator

```bash
node tools/validate.js
```

Mengecek id ganda, indeks kunci jawaban, modul tak dikenal, opsi duplikat/kosong, pembahasan
terlalu pendek, soal kembar, integritas tiap batang OHLC pada soal bergrafik (high tidak boleh di
bawah badan, low tidak boleh di atasnya, tidak ada harga nol atau negatif), plus kelengkapan materi
tiap unit dan ringkasan sebaran soal per unit maupun tingkat kesulitan.

## Struktur

```
RTA_CTA_Quiz/
├── index.html              # kerangka semua halaman
├── assets/css/style.css    # tema, komponen, responsif
├── assets/js/data.js       # metadata unit kompetensi + registry bank soal
├── assets/js/app.js        # mesin kuis (sesi, skor, timer, review, import)
├── data/rta-*.js           # bank soal RTA per unit kompetensi
├── data/cta-*.js           # bank soal CTA per unit kompetensi
├── data/notes-*.js         # materi ringkas + label mind map + jebakan ujian
├── data/chart-questions.js # soal baca chart (dibangkitkan otomatis)
├── assets/js/chart.js      # penggambar grafik SVG dari deret OHLC
└── tools/validate.js       # validator bank soal
```

## Catatan

Aplikasi ini alat latihan mandiri, bukan produk resmi dan tidak berafiliasi dengan
BNSP, LSP, AATI, maupun IFTA. Materi ujian sebenarnya dapat berbeda — gunakan ini sebagai
pelengkap materi resmi dari lembaga pelatihan, bukan pengganti.
