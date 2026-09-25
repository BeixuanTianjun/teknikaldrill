# TeknikalDrill — Mock Test Sertifikasi Analis Pasar Modal

Aplikasi web latihan soal bergaya Quizizz untuk persiapan sertifikasi analis pasar modal Indonesia:
**RTA** dan **CTA** (analisis teknikal), **RSA** dan **CSA** (analisis efek),
serta **WPPE** dan **WMI** (izin profesi OJK).
Setiap soal punya **pembahasan**, jadi yang salah langsung ketahuan salahnya di mana.

Statis sepenuhnya — tanpa build, tanpa server, tanpa dependency. Buka `index.html`, langsung jalan.
Bisa juga **dipasang sebagai aplikasi** dan dipakai **tanpa internet** (lihat bagian *Pasang sebagai aplikasi*).

## Isi bank soal

**2.354 soal orisinal** yang disusun mengikuti unit kompetensi enam skema sertifikasi,
**68 di antaranya soal baca chart** yang menampilkan grafik harga.

| Skema | Bidang | Unit | Soal |
|---|---|---|---|
| RTA | Analisis teknikal — pelaksanaan | 8 | 511 |
| CTA | Analisis teknikal — pengelolaan | 9 | 401 |
| RSA | Analisis efek — pelaksanaan | 7 | 282 |
| CSA | Analisis efek — pengelolaan | 9 | 398 |
| WPPE | Izin profesi — perantara pedagang efek | 7 | 316 |
| WMI | Izin profesi — manajer investasi | 9 | 446 |

<details>
<summary>Rincian per unit kompetensi</summary>

| Skema | Unit kompetensi | Soal |
|---|---|---|
| RTA | Pengertian & Penggunaan Analisis Teknikal | 67 |
| RTA | Mengkonstruksi Grafik (Chart) | 56 |
| RTA | Trend, Reversal & Consolidation | 85 |
| RTA | Menentukan Level Kunci Harga | 59 |
| RTA | Pola Candlestick | 61 |
| RTA | Menerapkan Indikator Teknikal | 75 |
| RTA | Rencana Trading & Manajemen Risiko | 74 |
| RTA | Menyusun & Mempublikasikan Riset Teknikal | 34 |
| CTA | Teori & Filosofi Lanjutan | 45 |
| CTA | Elliott Wave & Rasio Fibonacci | 45 |
| CTA | Candlestick & Price Action Lanjutan | 49 |
| CTA | Siklus, Seasonality & Analisis Waktu | 33 |
| CTA | Market Breadth, Sentimen & Intermarket | 41 |
| CTA | Sistem Trading, Backtesting & Optimasi | 55 |
| CTA | Manajemen Portofolio & Position Sizing | 46 |
| CTA | Analisis Multi-Aset | 45 |
| CTA | Statistik & Kuantitatif untuk Analis | 42 |
| RSA | Struktur & Mekanisme Pasar Modal | 42 |
| RSA | Ekonomi Makro & Analisis Industri | 39 |
| RSA | Membaca Laporan Keuangan | 38 |
| RSA | Analisis Rasio & Kinerja Keuangan | 39 |
| RSA | Valuasi Dasar Saham | 42 |
| RSA | Efek Utang & Instrumen Pasar Uang | 42 |
| RSA | Regulasi, Etika & Laporan Riset | 40 |
| CSA | Kualitas Laba & Akuntansi Lanjutan | 34 |
| CSA | Valuasi Arus Kas Terdiskonto | 44 |
| CSA | Valuasi Relatif & Valuasi Khusus | 44 |
| CSA | Pemodelan Keuangan & Proyeksi | 44 |
| CSA | Efek Pendapatan Tetap Lanjutan | 47 |
| CSA | Teori Portofolio & Manajemen Investasi | 50 |
| CSA | Derivatif & Manajemen Risiko | 49 |
| CSA | Aksi Korporasi & Situasi Khusus | 47 |
| CSA | Tata Kelola, ESG & Standar Riset | 39 |
| WPPE | Ketentuan Umum & Kelembagaan Pasar Modal | 47 |
| WPPE | Produk & Instrumen Pasar Modal | 44 |
| WPPE | Mekanisme Perdagangan & Penyelesaian | 48 |
| WPPE | Pembukaan Rekening, KYC & APU-PPT | 45 |
| WPPE | Operasional Perusahaan Efek | 47 |
| WPPE | Etika, Perilaku Pasar & Sanksi | 45 |
| WPPE | Layanan Nasabah & Dasar Analisis Efek | 40 |
| WMI | Kelembagaan & Regulasi Pengelolaan Investasi | 40 |
| WMI | Produk Pengelolaan Investasi | 51 |
| WMI | Analisis Ekonomi & Pasar Keuangan | 40 |
| WMI | Analisis Efek Ekuitas & Pendapatan Tetap | 46 |
| WMI | Teori Portofolio & Alokasi Aset | 53 |
| WMI | Pengukuran & Evaluasi Kinerja | 56 |
| WMI | Manajemen Risiko Investasi | 58 |
| WMI | Kode Etik & Standar Profesi | 45 |
| WMI | Operasional, Kustodian & Pelaporan | 57 |

</details>

**42,9% soal tergolong HOTS** (C4 ke atas menurut taksonomi Bloom): menuntut analisis kasus,
penimbangan bukti yang bertentangan, atau pengambilan keputusan — bukan sekadar mengenali istilah.
Sebarannya diukur oleh `tools/audit-syllabus.js`.

Soal dan materi ditulis sendiri berdasarkan literatur standar, **bukan hasil menyalin bank soal
berbayar milik pihak lain** dan bukan soal ujian resmi dari lembaga sertifikasi mana pun.

Cakupan unit RTA disusun mengikuti pokok bahasan yang muncul pada materi pelatihan RTA yang
beredar — tiga modul: pengantar dan konsep dasar, teori Dow dan pola chart, lalu candlestick dan
indikator. Yang dipakai hanya daftar pokok bahasannya sebagai penanda cakupan; seluruh soal,
pembahasan, dan materi ringkasnya tetap ditulis sendiri.

> **Catatan kejujuran.** Rincian unit kompetensi disusun dari ruang lingkup yang dipublikasikan
> masing-masing skema, **bukan salinan silabus resmi**. Pada Simulasi Sertifikasi, soal dibagi
> **rata** antar unit karena bobot resmi per unit tidak dipublikasikan — keterangan itu juga
> ditampilkan di aplikasinya.

## Mode latihan

| Mode | Cara kerja |
|---|---|
| 🎯 **Latihan per Unit** | Pilih unit kompetensi, tanpa batas waktu, pembahasan langsung muncul tiap soal |
| ⏱️ **Simulasi Ujian** | 50/75/100 soal, timer 120 menit, pembahasan baru dibuka di akhir, passing grade 70% |
| 🎓 **Simulasi Sertifikasi** | Pilih satu skema, soal dibagi rata ke SEMUA unit kompetensi skema itu, timer 1,2 menit per soal |
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

Lima belas skenario bergaya vignette, masing-masing dengan empat soal turunan, total 60 soal
tingkat sulit. Tiga di antaranya **berantai**: jawaban tiap langkah dipakai di langkah berikutnya,
dan angka hasil langkah sebelumnya selalu ditulis ulang supaya satu kekeliruan di awal tidak
menghukum seluruh rangkaian. Tiap kasus menyajikan narasi situasi plus tabel data, lalu soal-soalnya menuntut hitungan
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

68 soal menampilkan grafik harga yang **digambar sebagai SVG dari deret OHLC yang menempel di
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

- **📖 Ringkasan** — 127 topik berisi **447 poin kunci** (definisi, rumus, angka yang sering ditanya)
- **🧠 Mind Map** — peta konsep interaktif dengan **530 node**, cabang bisa dibuka-tutup,
  konektor digambar otomatis sebagai kurva SVG mengikuti posisi elemen
- **⚠️ Jebakan Ujian** — **87 catatan** kesalahan yang sering terjadi (mis. RSI di atas 70 pada
  tren kuat bukan sinyal jual; rasio cepat mengeluarkan persediaan; di model Gordon dividennya
  harus ditumbuhkan satu tahun dulu sebelum dibagi)

Dari halaman materi ada tombol langsung ke **latihan soal unit itu** atau **flashcard unit itu**.
Isi mind map diturunkan otomatis dari label `mm` tiap section, jadi materi tidak perlu ditulis dua kali.

## Pasang sebagai aplikasi

Aplikasi ini sepenuhnya statis, jadi seluruh isinya muat untuk disimpan di perangkat. Setelah
dipasang, aplikasinya dibuka dari layar utama dan **bekerja penuh tanpa internet** — 1.519 soal,
pembahasan, materi, grafik, sampai simulasi berwaktu.

| Perangkat | Cara pasang |
|---|---|
| Android (Chrome/Edge) | Tombol **⤓ Pasang** di kanan atas, atau menu ⋮ → *Install app* |
| Desktop (Chrome/Edge) | Tombol **⤓ Pasang**, atau ikon pasang di bilah alamat |
| iPhone / iPad (Safari) | Tombol **Bagikan** → *Add to Home Screen* (iOS tidak punya tombol pasang otomatis) |

Empat pintasan tersedia dari ikon aplikasi (tekan lama di Android): Simulasi Sertifikasi,
Latihan per Unit, Drill Soal Salah, dan Materi. Pintasan ini memakai parameter `?mode=` yang juga
bisa dipakai sebagai tautan langsung, misalnya `?mode=blueprint`.

Ketika ada versi baru, sebuah palang muncul dan **penggunanya yang memutuskan kapan memuat
ulang** — pembaruan tidak pernah dipaksakan di tengah sesi, karena menukar berkas saat ujian
berwaktu sedang berjalan jelas merugikan.

> Pemasangan menuntut `https` (atau `localhost`). Membuka lewat `file://` tetap bekerja penuh,
> hanya saja tanpa pemasangan dan tanpa cache luring.

### Menyusun ulang aset aplikasi

Dua berkas dibangkitkan otomatis dan **tidak boleh disunting tangan**:

```bash
node tools/gen-icons.js    # menulis assets/icons/*.png
node tools/gen-sw.js       # menulis sw.js (daftar pracache + versi cache)
```

`gen-sw.js` membaca daftar berkasnya langsung dari `index.html`, jadi menambah bank soal tidak
menuntut penyuntingan service worker — cukup jalankan ulang. Versi cache diturunkan dari isi
seluruh berkas, sehingga satu perubahan kecil sudah cukup memicu pembaruan di perangkat pengguna.

**Wajib dijalankan ulang setiap kali isi berubah.** Kalau lupa, pengguna yang sudah memasang
aplikasi akan terus disuguhi versi lama dari cache — karena itu `tools/validate.js` memeriksanya
dan memberi peringatan bila `sw.js` sudah usang.

`gen-icons.js` menggambar ikonnya secara terprogram lalu menulis PNG-nya sendiri (deflate + CRC32),
jadi tidak butuh ImageMagick, Inkscape, maupun pustaka gambar apa pun.

## Menambah skema sertifikasi baru

Nama skema tidak tertanam di kode. `TD.SCHEMES` di `assets/js/data.js` adalah satu-satunya sumber:
tombol pemilih di beranda dan halaman materi, chip pada layar persiapan, judul beranda, penyusun
paket Simulasi Sertifikasi, sampai nilai bawaan soal impor semuanya dibangun dari daftar itu.

```js
// 1. assets/js/data.js — daftarkan skemanya
TD.SCHEMES = [
  ...,
  { id:'CFA3', nama:'CFA Level III', bidang:'Manajemen Investasi',
    lembaga:'CFA Institute', warna:'a' }
];

// 2. assets/js/data.js — tambahkan unit kompetensinya
TD.MODULES = [
  ...,
  { id:'cfa3-perilaku', level:'CFA3', name:'Behavioral Finance', emoji:'🧠',
    desc:'Bias kognitif dan emosional dalam keputusan investasi.' }
];
```

Lalu buat `data/cfa3-perilaku.js` berisi `TD.register([...])`, daftarkan `<script>`-nya di
`index.html`, tambahkan materinya lewat `TD.registerNotes([...])`, dan jalankan:

```bash
node tools/validate.js && node tools/gen-sw.js
```

Tidak ada markup atau logika yang perlu disunting. Skema baru langsung muncul di semua mode,
termasuk mendapat paket Simulasi Sertifikasinya sendiri.

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
relatif sehingga tetap berjalan bila suatu saat dipindah ke subfolder — termasuk service worker,
yang cakupannya mengikuti direktori tempat `sw.js` berada.

### VPS dengan Nginx

Seluruh langkahnya sudah dibungkus dalam `deploy/`, jadi pemasangannya satu perintah.

**1. Siapkan nama host.** PWA hanya dapat dipasang lewat HTTPS, dan HTTPS butuh nama host —
alamat IP telanjang tidak bisa disertifikatkan. Kalau belum punya domain, daftar gratis di
[DuckDNS](https://www.duckdns.org), buat subdomain, lalu isikan alamat IP VPS.

> Hindari `sslip.io` dan `nip.io` untuk keperluan ini. Keduanya tidak terdaftar pada Public
> Suffix List, sehingga seluruh subdomainnya di dunia berbagi satu jatah penerbitan sertifikat
> Let's Encrypt dan penerbitan sering ditolak. `duckdns.org` terdaftar, jadi tiap subdomain
> memperoleh jatahnya sendiri.

**2. Jalankan pemasangnya** di VPS Ubuntu atau Debian:

```bash
git clone https://github.com/BeixuanTianjun/teknikaldrill.git
sudo bash teknikaldrill/deploy/install.sh namamu.duckdns.org email@kamu.com
```

Yang dikerjakan skrip itu: memasang nginx, certbot, dan git; menaruh kode di
`/var/www/teknikaldrill`; menyalakan nginx dengan vhost sementara; mengambil sertifikat
Let's Encrypt; mengganti vhost menjadi HTTPS penuh; lalu memasang timer pembaruan harian.

Setelah itu pembaruan berjalan sendiri. Untuk memaksanya sekarang:

```bash
sudo teknikaldrill-update
```

#### Yang dikerjakan konfigurasinya, dan kenapa

Berkasnya ada di `deploy/teknikaldrill.nginx.conf`, disusun `deploy/render-conf.sh` menyesuaikan
mesin yang dipakai. Beberapa hal di dalamnya bukan pilihan gaya, melainkan syarat agar
aplikasinya benar-benar bekerja sebagai PWA:

| Yang diatur | Alasannya |
|---|---|
| `sw.js` dan `index.html` dikirim `no-cache` | Kalau keduanya di-cache lama, perangkat yang sudah memasang aplikasinya tidak pernah tahu ada versi baru |
| Berkas lain `immutable` 30 hari | Versi cache service worker diturunkan dari isi berkas, jadi perubahan isi otomatis menghasilkan cache baru |
| `expires` sengaja tidak dipakai | Direktif itu menulis `Cache-Control` sendiri, sehingga tanggapannya membawa dua `Cache-Control` sekaligus |
| Blok `deny` ditaruh di atas blok ekstensi berkas | Nginx memakai `location` regex yang pertama cocok; kalau urutannya dibalik, `/tools/validate.js` tetap tersaji |
| `/.well-known/acme-challenge/` tidak ikut dialihkan ke HTTPS | Kalau ikut dialihkan, perpanjangan sertifikat otomatis akan gagal |
| Bentuk direktif `http2` dipilih saat pemasangan | `http2 on;` baru ada pada nginx 1.25.1, sedangkan Ubuntu 22.04 membawa 1.18 dan Debian 12 membawa 1.22 |
| Baris `listen [::]` dilewati bila IPv6 mati | Tanpa ini nginx gagal start di VPS yang IPv6-nya dimatikan |

Tanpa HTTPS aplikasinya tetap terbuka di peramban, tetapi **tidak bisa dipasang** dan **tidak
punya cache luring**, karena service worker hanya hidup di `https` dan `localhost`.

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
teknikaldrill/
├── index.html                  # kerangka semua halaman
├── manifest.webmanifest        # metadata aplikasi terpasang
├── sw.js                       # service worker (DIBANGKITKAN — jangan disunting)
├── assets/css/style.css        # tema, komponen, responsif
├── assets/icons/*.png          # ikon aplikasi (DIBANGKITKAN)
├── assets/js/data.js           # daftar skema + unit kompetensi + registry bank soal
├── assets/js/app.js            # mesin kuis (sesi, skor, timer, review, import, PWA)
├── assets/js/chart.js          # penggambar grafik SVG dari deret OHLC
├── data/rta-*.js  data/cta-*.js   # bank soal analisis teknikal
├── data/rsa-*.js  data/csa-*.js   # bank soal analisis efek
├── data/wppe-*.js data/wmi-*.js   # bank soal izin profesi OJK
├── data/hots-*.js              # soal HOTS berbasis skenario
├── data/notes-*.js             # materi ringkas + label mind map + jebakan ujian
├── data/cases*.js              # studi kasus bergaya vignette
├── data/chart-questions.js     # soal baca chart (DIBANGKITKAN)
├── deploy/
│   ├── install.sh              # pemasangan di VPS, sekali jalan
│   ├── update.sh               # penarik pembaruan, dipanggil timer harian
│   ├── render-conf.sh          # penyusun vhost sesuai versi nginx dan IPv6
│   └── teknikaldrill.nginx.conf  # templat vhost
└── tools/
    ├── validate.js             # validator bank soal + pemeriksa sw.js usang
    ├── audit-quality.js        # audit mutu pengecoh
    ├── audit-syllabus.js       # sebaran taksonomi Bloom per unit
    ├── gen-chart-questions.js  # pembangkit soal bergrafik
    ├── gen-icons.js            # pembangkit ikon PNG
    └── gen-sw.js               # pembangkit service worker
```

## Catatan

Aplikasi ini alat latihan mandiri, bukan produk resmi dan tidak berafiliasi dengan
BNSP, LSP, AATI, AAEI, IFTA, maupun lembaga sertifikasi lainnya. Materi ujian sebenarnya dapat berbeda — gunakan ini sebagai
pelengkap materi resmi dari lembaga pelatihan, bukan pengganti.
