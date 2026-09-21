/* Soal HOTS batch 2 — cta-teori, rta-dasar, rta-chart */
TD.register([
/* ===== cta-teori ===== */
{id:"cta-teori-h01",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Sebuah strategi teknikal menghasilkan imbal hasil abnormal selama 2015 sampai 2019, lalu kinerjanya memudar sejak 2020 meski logikanya tidak berubah. Kerangka teori mana yang paling baik menjelaskan hal ini?",
 options:["Efficient Market Hypothesis bentuk kuat, karena informasi privat sudah tercermin di harga","Prospect Theory, karena pelaku pasar menjadi lebih menghindari risiko setelah 2020","Adaptive Market Hypothesis, karena peluang menyusut seiring pelaku pasar beradaptasi","Random Walk Theory, karena kinerja awalnya memang kebetulan semata"],
 answer:2,
 explain:"Adaptive Market Hypothesis dari Andrew Lo mandang pasar kayak ekosistem: strategi itu spesies yang rebutan makanan terbatas. Logika strategi lo nggak berubah, tapi sejak 2020 makin banyak yang makan di kolam yang sama, jadi jatah lo ngecil. Ini beda sama EMH yang bilang keunggulan NGGAK PERNAH ada. AMH bilang ada, tapi sementara. Konsekuensi praktisnya: sistem yang dulu jago harus siap dipensiunin, dan pemantauan kinerja itu nggak pernah selesai."},

{id:"cta-teori-h02",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Seorang peneliti menguji 200 kombinasi indikator, menemukan tiga yang mengalahkan pasar secara signifikan pada tingkat 1 persen, lalu mempublikasikannya. Mengapa temuan itu tetap meragukan?",
 options:["Tingkat 1 persen terlalu ketat sehingga strategi yang benar-benar unggul ikut tersaring","Indikator tidak boleh diuji dalam kombinasi karena sinyalnya saling meniadakan","Pengujian seharusnya memakai data intraday agar jumlah sampelnya mencukupi","Pada 200 pengujian, sekitar dua temuan signifikan diharapkan muncul murni karena kebetulan"],
 answer:3,
 explain:"Itung: 200 pengujian di tingkat signifikansi 1 persen. Artinya sekitar 2 temuan bakal keliatan signifikan MURNI karena kebetulan. Nemu tiga? Itu nyaris persis jumlah yang diharapkan dari keberuntungan doang. Jadi publikasinya nggak ngebuktiin apa-apa. Ini namanya multiple testing problem, dan dia jadi wabah di riset keuangan. Obatnya: koreksi ambang signifikansinya sesuai jumlah uji, dan wajib validasi di data yang belum pernah disentuh."},

{id:"cta-teori-h03",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Harga saham sebuah perusahaan naik tajam, sehingga perusahaan itu mampu menerbitkan saham baru dengan murah, memperkuat neracanya, dan laporannya membaik. Fenomena ini paling tepat dijelaskan oleh...",
 options:["Reflexivity, karena persepsi pelaku pasar ikut mengubah fundamental yang dipersepsikan","Herding, karena pelaku pasar mengikuti arah yang sedang diambil mayoritas","Momentum effect, karena kinerja masa lalu cenderung berlanjut ke periode berikutnya","Survivorship bias, karena hanya perusahaan yang berhasil yang tercatat datanya"],
 answer:0,
 explain:"Ini reflexivity-nya George Soros, dan dia nabrak asumsi paling dasar ekonomi klasik. Biasanya orang mikir fundamental nentuin harga, satu arah. Soros bilang: harga juga bisa NGUBAH fundamentalnya. Harga naik, perusahaan bisa nerbitin saham murah, neraca nguat, laporan membaik, harga naik lagi. Lingkaran yang ngumpan balik ke dirinya sendiri. Dan ini jalan di dua arah, makanya spiral turun juga bisa bikin perusahaan sehat jadi sakit beneran."},

{id:"cta-teori-h04",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Sebuah pengujian strategi pada saham LQ45 periode 2010 sampai 2024 memakai daftar anggota indeks per hari ini. Cacat metodologis apa yang terkandung di dalamnya?",
 options:["Slippage yang diremehkan, karena likuiditas anggota indeks berubah sepanjang waktu","Survivorship bias, karena emiten yang gugur dari indeks tidak ikut terhitung","Look ahead bias, karena data harga dipakai sebelum tanggal ketersediaannya","Data snooping, karena terlalu banyak strategi diuji pada data yang sama"],
 answer:1,
 explain:"Daftar LQ45 hari ini itu udah disaring sama keberhasilan. Emiten yang nyungsep dan keluar dari indeks bertahun-tahun lalu nggak ikut kehitung sama sekali. Jadi lo nguji strategi di kumpulan saham yang KEBETULAN selamat selama 14 tahun. Hasilnya bagus otomatis, padahal strateginya nggak ngapa-ngapain. Namanya survivorship bias. Perbaikannya: pakai daftar keanggotaan historis per tanggal, lengkap sama emiten yang nanti gugur."},

{id:"cta-teori-h05",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Dalam metode Wyckoff, harga menembus support disertai volume besar, tetapi keesokan harinya kembali masuk ke dalam rentang dengan volume kecil. Bagaimana hukum effort versus result membaca urutan ini?",
 options:["Volume kecil pada hari kedua menandakan pembeli belum berani masuk ke pasar","Kedua hari saling meniadakan sehingga tidak ada kesimpulan yang dapat ditarik","Upaya jual besar gagal menghasilkan penurunan lanjutan, menandakan pasokan sudah terserap","Upaya jual besar berhasil menembus support, sehingga tren turun terkonfirmasi"],
 answer:2,
 explain:"Hukum effort versus result Wyckoff: kalau UPAYA-nya gede (volume besar) tapi HASIL-nya kecil (harga nggak lanjut turun), berarti ada yang nyerap di sisi lain. Volume jual besar nembus support, tapi besoknya harga balik masuk range dengan volume kecil? Artinya pasokan tadi udah kemakan habis sama pembeli yang lebih kuat. Ini ciri spring atau shakeout: nakut-nakutin yang lemah keluar dulu, baru naik. Salah satu sinyal paling bertenaga di Wyckoff."},

{id:"cta-teori-h06",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Seorang trader menahan posisi rugi berbulan-bulan tetapi merealisasikan keuntungan hanya dalam hitungan hari. Bias apa yang bekerja, dan apa dampaknya pada expectancy sistemnya?",
 options:["Overconfidence: ukuran posisi membesar sehingga risikonya melampaui batas yang direncanakan","Recency bias: keputusan didominasi kejadian terbaru sehingga arah posisi sering berbalik","Anchoring: keputusan terpaku pada harga perolehan sehingga target menjadi terlalu dekat","Disposition effect: rata-rata rugi membengkak dan rata-rata untung mengecil, menekan expectancy"],
 answer:3,
 explain:"Namanya disposition effect, dan efeknya langsung kelihatan di angka. Nahan rugi berbulan-bulan bikin rata-rata RUGI membengkak jauh di atas rencana. Realisasi untung dalam hitungan hari bikin rata-rata UNTUNG mengecil. Dua-duanya nekan expectancy dari arah yang berlawanan. Sistem yang di atas kertas untung bisa jadi rugi cuma gara-gara ini, tanpa satu pun aturan sistemnya diubah. Yang rusak bukan sistemnya, tapi eksekusinya."},

{id:"cta-teori-h07",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Mengapa pola teknikal cenderung bertahan lebih lama pada saham berkapitalisasi kecil yang jarang diliput analis?",
 options:["Sedikitnya pelaku canggih membuat inefisiensi tidak cepat terarbitrase","Volatilitasnya lebih tinggi sehingga polanya lebih mudah dikenali secara visual","Investor ritel lebih disiplin mengikuti level teknikal daripada institusi","Bursa memberlakukan aturan perdagangan berbeda untuk saham berkapitalisasi kecil"],
 answer:0,
 explain:"Inefisiensi itu ilang kalau ada yang ngarbitrase. Di saham besar yang diliput 20 analis dan diawasi puluhan hedge fund, celah ketutup dalam hitungan menit. Di saham kecil yang nggak ada yang ngeliatin, celahnya bisa nganggur berminggu-minggu. Makanya pola teknikal sering lebih awet di situ. TAPI ada harganya yang sering dilupain: likuiditasnya tipis, spread-nya lebar, dan pas lo mau keluar nggak ada yang beli. Keunggulan ada, ongkos keluarnya juga ada."},

{id:"cta-teori-h08",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Dua analis berdebat: yang satu menyatakan pasar efisien sehingga analisis teknikal sia-sia, yang lain menunjuk keberhasilan strategi momentum. Sintesis paling tepat dari keduanya adalah...",
 options:["Analisis teknikal bekerja hanya karena banyak pelaku memakainya secara serentak","Efisiensi bersifat bertingkat dan berubah, sehingga keunggulan ada tetapi tidak permanen","Salah satu pasti keliru, karena pasar hanya bisa efisien atau tidak efisien","Momentum bukan keunggulan sejati melainkan kompensasi atas risiko yang lebih besar"],
 answer:1,
 explain:"Dua-duanya bener sebagian, dan sintesisnya ada di tengah. Efisiensi itu bukan tombol on-off, dia BERTINGKAT dan BERUBAH: saham besar lebih efisien dari saham kecil, pasar tenang lebih efisien dari pasar panik. Jadi keunggulan itu ADA, tapi nggak permanen dan nggak merata. Yang salah itu dua ekstremnya: yang bilang mustahil untung, dan yang bilang ada sistem yang jalan selamanya. Sikap yang bener: cari celah, pakai, pantau, tinggalin pas abis."},

{id:"cta-teori-h09",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Fractal Market Hypothesis menjelaskan krisis likuiditas sebagai akibat dari...",
 options:["Meningkatnya korelasi antar kelas aset yang sebelumnya bergerak sendiri-sendiri","Kegagalan sistem perdagangan elektronik menangani lonjakan volume transaksi","Menyatunya horizon waktu seluruh pelaku menjadi jangka sangat pendek secara bersamaan","Berkurangnya jumlah pelaku pasar yang aktif bertransaksi di bursa"],
 answer:2,
 explain:"Fractal Market Hypothesis punya penjelasan yang elegan soal krisis likuiditas. Normalnya pasar stabil karena pelakunya punya horizon BEDA-BEDA: yang harian jual, yang tahunan beli, jadi selalu ada lawan transaksi. Pas panik, semua orang tiba-tiba jadi jangka pendek — yang tahunan pun ikut mikirin hari ini. Begitu horizonnya nyatu, nggak ada lagi yang mau jadi pembeli, dan likuiditas ilang dalam hitungan menit. Ini kenapa harga bisa jatuh bebas tanpa alasan fundamental."},

{id:"cta-teori-h10",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Mengapa pengujian pola grafik secara akademis sering menghasilkan kesimpulan yang bertentangan antar peneliti?",
 options:["Data harga yang dipakai peneliti berasal dari bursa yang berlainan","Pola grafik hanya muncul pada periode tertentu sehingga sampelnya terlalu kecil","Metode statistik untuk menguji pola visual belum dikembangkan sampai sekarang","Definisi numerik polanya berbeda-beda, sehingga yang diuji sebenarnya bukan hal yang sama"],
 answer:3,
 explain:"Masalahnya di DEFINISI. Satu peneliti bilang head and shoulders itu puncak tengah minimal 3% lebih tinggi, peneliti lain bilang 1%, yang lain lagi pakai algoritma beda total. Jadi mereka sebenernya nguji hal yang BEDA sambil pakai nama yang sama, terus heran kok hasilnya bertentangan. Pelajarannya buat lo: kalau mau nguji pola sendiri, tulis definisi numeriknya dulu sampai detail. Kalau nggak, lo nggak akan pernah bisa ngebandingin hasil lo sama siapa pun."},

{id:"cta-teori-h11",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Analisis teknikal pada indeks dianggap lebih andal daripada pada saham tunggal. Alasan paling mendasar dari perbedaan itu adalah...",
 options:["Agregasi meredam peristiwa spesifik emiten sehingga yang tersisa adalah perilaku kolektif","Indeks selalu diperdagangkan dengan volume lebih besar daripada saham anggotanya","Perhitungan indeks dilakukan bursa sehingga datanya lebih akurat","Indeks tidak terpengaruh aksi korporasi sehingga grafiknya tidak perlu disesuaikan"],
 answer:0,
 explain:"Indeks itu rata-rata ratusan saham, jadi kejadian spesifik satu emiten (direktur ditangkap, pabrik kebakaran, gagal bayar) kelarut dan hampir nggak kelihatan. Yang tersisa cuma perilaku KOLEKTIF pelaku pasar, dan justru itu yang dipelajari analisis teknikal. Di saham tunggal, satu berita bisa bikin semua pola yang lo gambar nggak ada artinya dalam sedetik. Makanya sinyal di indeks umumnya lebih bersih dan lebih layak dipercaya."},

{id:"cta-teori-h12",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Terjadi guncangan regulasi mendadak yang menjatuhkan harga 20 persen dalam satu sesi. Apa nilai analisis teknikal dalam situasi yang jelas tidak dapat diramalkan ini?",
 options:["Pola volume beberapa sesi sebelumnya dapat mengungkap kebocoran informasi","Level pembatalan dan ukuran posisi yang ditetapkan sebelumnya membatasi kerugiannya","Divergensi pada indikator momentum seharusnya sudah memberi peringatan sebelumnya","Analisis teknikal tidak memberi nilai apa pun pada peristiwa di luar grafik"],
 answer:1,
 explain:"Pertanyaan bagus, dan jawabannya jujur: analisis teknikal NGGAK bisa ngeramal guncangan regulasi. Nggak ada yang bisa. Tapi nilainya bukan di situ. Nilainya ada di apa yang lo TETAPIN SEBELUMNYA: level pembatalan yang jelas dan ukuran posisi yang wajar. Dua hal itu yang nentuin apakah guncangan 20 persen bikin lo rugi terkendali atau bikin akun lo nol. Analisis buat nebak arah, manajemen risiko buat bertahan dari yang nggak ketebak."},

/* ===== rta-dasar ===== */
{id:"rta-dasar-h01",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Seorang investor menolak analisis teknikal dengan alasan harga tidak mungkin mengandung informasi karena laporan keuangan baru terbit kuartalan. Bantahan paling tepat berdasarkan premis dasar analisis teknikal adalah...",
 options:["Analisis teknikal tidak berurusan dengan informasi melainkan dengan probabilitas","Analisis fundamental juga tidak dapat memakai laporan yang terbit kuartalan","Harga mendiskontokan seluruh informasi termasuk yang belum dipublikasikan resmi","Laporan keuangan kuartalan sebenarnya sudah bocor sebelum diterbitkan ke publik"],
 answer:2,
 explain:"Bantahan yang tepat langsung dari premis pertama Dow: harga mendiskon SEGALANYA, termasuk yang belum diumumin resmi. Orang dalam tau duluan, pemasok tau duluan, karyawan tau duluan, dan mereka semua transaksi. Jejaknya kelihatan di harga dan volume jauh sebelum laporan kuartalan terbit. Justru itu argumen paling kuat buat teknikal. Yang salah: ngejawab dengan ngejelek-jelekin analisis fundamental, karena itu nggak ngejawab pertanyaannya sama sekali."},

{id:"rta-dasar-h02",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Indeks industrial mencetak tertinggi baru tetapi indeks transportasi gagal mengikuti dan justru membentuk lower high. Menurut Dow Theory, bagaimana sinyal ini dibaca?",
 options:["Tren naik terkonfirmasi karena indeks industrial adalah acuan utama pasar","Tren turun terkonfirmasi karena indeks transportasi lebih peka terhadap ekonomi","Kedua indeks harus diabaikan sampai keduanya bergerak dalam arah yang sama","Belum ada konfirmasi tren naik, sehingga sinyalnya dianggap meragukan"],
 answer:3,
 explain:"Dow minta KONFIRMASI dua indeks. Industrial cetak tertinggi baru tapi transportasi malah bikin lower high? Belum ada konfirmasi, jadi sinyalnya meragukan. Logika ekonominya: barang yang diproduksi harus beneran DIKIRIM. Kalau pabrik makin sibuk tapi pengangkutnya nggak ikut untung, berarti kenaikan tadi belum kebukti sama aktivitas nyata. Catatan: ini bukan sinyal JUAL, cuma sinyal 'belum dikonfirmasi'. Bedanya penting."},

{id:"rta-dasar-h03",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham terkoreksi 55 persen dari kenaikan primary trend sebelumnya, lalu berbalik naik. Menurut Dow Theory, koreksi sebesar itu paling tepat digolongkan sebagai...",
 options:["Secondary reaction, karena masih berada dalam kisaran sepertiga sampai dua pertiga","Pembalikan primary trend, karena koreksinya sudah melampaui setengah kenaikan","Minor trend, karena kedalamannya tidak menentukan penggolongan suatu pergerakan","Fase distribusi, karena koreksi sedalam itu menandakan pemodal awal melepas posisi"],
 answer:0,
 explain:"Dow ngamatin koreksi sekunder biasanya balikin sepertiga sampai dua pertiga (33% sampai 67%) dari primary trend sebelumnya. Koreksi 55% masih di dalem kisaran itu, jadi digolongkan secondary reaction — primary trend-nya masih hidup. Kalau koreksinya konsisten ngelewatin dua pertiga, baru kemungkinan trennya udah berubah. Tapi inget, angka ini pengamatan statistik, bukan tombol. Yang mastiin tetep struktur harga: puncak dan lembah barunya gimana."},

{id:"rta-dasar-h04",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Dua analis melihat grafik yang sama; satu menarik garis tren menyentuh bayangan candle, satu lagi menyentuh badan candle, sehingga sinyalnya berbeda. Apa yang paling tepat disimpulkan dari situasi ini?",
 options:["Garis tren sebaiknya ditinggalkan dan digantikan sepenuhnya oleh moving average","Subjektivitas penarikan garis adalah kelemahan nyata yang menuntut aturan tertulis","Salah satu analis pasti keliru karena hanya ada satu cara menarik garis yang benar","Perbedaan itu tidak penting karena kedua sinyal pada akhirnya akan bertemu"],
 answer:1,
 explain:"Dua-duanya sah sebenernya, dan itu bukan intinya. Intinya: subjektivitas penarikan garis itu kelemahan NYATA analisis teknikal, bukan yang harus dibela mati-matian. Yang bahaya bukan pilih metodenya, tapi kebebasan PINDAH metode setelah lihat hasilnya — itu cara analis ngebenerin posisi yang salah. Solusinya prosedural: tulis aturannya di rencana sebelum posisi dibuka, terus konsisten. Analis yang jujur ngakuin kelemahan ini, bukan nyangkal."},

{id:"rta-dasar-h05",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham tercatat naik 8 persen dengan volume hanya 40 persen dari rata-rata hariannya, dan hanya terjadi 12 transaksi sepanjang sesi. Mengapa kenaikan ini kurang bermakna secara teknikal?",
 options:["Volume di bawah rata-rata selalu menandakan distribusi sedang berlangsung","Data sesi dengan transaksi sedikit tidak dicatat bursa sebagai harga resmi","Sedikitnya transaksi berarti harga itu tidak mewakili konsensus pelaku pasar","Kenaikan 8 persen terlalu kecil untuk dianggap sebagai sinyal yang berarti"],
 answer:2,
 explain:"Cuma 12 transaksi sepanjang sesi. Harga naik 8% itu bukan kesepakatan pasar, itu hasil beberapa order nyasar ketemu order book yang kosong. Pola teknikal bermakna karena dia nyerminin tarik-ulur BANYAK pelaku. Kalau pelakunya cuma belasan, yang lo lihat itu bukan konsensus, itu kebetulan. Ini relevan banget buat saham lapis tiga di BEI: chart-nya bisa keliatan cantik padahal isinya cuma jejak satu dua orang."},

{id:"rta-dasar-h06",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Level 5.000 pada sebuah indeks berulang kali menahan penurunan meski tidak ada alasan fundamental apa pun pada angka itu. Penjelasan paling tepat adalah...",
 options:["Angka bundar memang memiliki makna matematis khusus dalam pergerakan harga","Bursa menetapkan angka bundar sebagai batas acuan perdagangan harian","Kebetulan semata, karena level psikologis tidak pernah terbukti berfungsi","Banyak pelaku menempatkan order pada angka bundar, sehingga level itu menjadi nyata karena diyakini"],
 answer:3,
 explain:"Level psikologis itu self-fulfilling dalam arti paling harfiah: manusia suka membulatkan. Order limit dan stop numpuk di 5.000, bukan di 4.987. Tumpukan itu BENERAN ada di order book, bisa dilihat. Jadi ini bukan mistis atau numerologi — ini kebiasaan manusia yang ninggalin jejak nyata. Nggak perlu ada alasan fundamental di angka 5.000; yang bikin dia nyata adalah banyak orang yang percaya dan naruh order di situ."},

{id:"rta-dasar-h07",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Seorang manajer investasi memakai analisis fundamental untuk memilih saham dan analisis teknikal untuk menentukan waktu masuk. Mengapa pembagian peran ini masuk akal?",
 options:["Keduanya menjawab pertanyaan berbeda: apa yang layak dibeli, dan kapan membelinya","Analisis fundamental tidak dapat diterapkan pada horizon waktu yang pendek","Analisis teknikal lebih akurat daripada fundamental dalam memperkirakan harga","Regulator mensyaratkan kedua analisis dipakai bersama dalam pengelolaan dana"],
 answer:0,
 explain:"Dua metode ini jawab pertanyaan yang BEDA, jadi nggak perlu dipilih salah satu. Fundamental jawab 'apa yang layak dibeli' — perusahaan mana yang bisnisnya sehat dan harganya masuk akal. Teknikal jawab 'kapan belinya' — di titik mana risiko paling kecil dan strukturnya paling mendukung. Saham bagus yang dibeli di waktu salah bisa nyangkut bertahun-tahun. Makanya banyak manajer institusi pakai dua-duanya, bukan karena nggak punya pendirian."},

{id:"rta-dasar-h08",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Analisis teknikal dikritik karena sinyalnya terlambat, sebab dihitung dari harga yang sudah terjadi. Bagaimana kritik ini paling tepat ditanggapi?",
 options:["Kritik itu tidak relevan karena analisis teknikal tidak bertujuan memprediksi","Keterlambatan adalah harga dari konfirmasi, dan ditukar dengan berkurangnya sinyal palsu","Kritik itu keliru karena indikator leading mampu mendahului pergerakan harga","Keterlambatan dapat dihilangkan sepenuhnya dengan memakai timeframe lebih kecil"],
 answer:1,
 explain:"Kritiknya bener sih, sinyal teknikal emang terlambat karena diitung dari harga yang udah terjadi. Tapi keterlambatan itu HARGA yang dibayar buat konfirmasi. Trade-off-nya universal: makin cepet sinyalnya, makin banyak yang palsu. Nggak ada metode yang cepet sekaligus akurat, itu cuma ada di iklan. Yang bedain analis matang: dia milih titik trade-off itu sadar-sadar dan nerima konsekuensinya, bukan nyari indikator ajaib yang nggak pernah ada."},

/* ===== rta-chart ===== */
{id:"rta-chart-h01",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham naik dari 100 ke 200 lalu dari 200 ke 400. Pada skala aritmatik, bagaimana kedua kenaikan itu tampak, dan mengapa menyesatkan?",
 options:["Kenaikan pertama tampak lebih besar karena dimulai dari basis yang rendah","Keduanya tampak sama karena skala aritmatik menyamakan proporsi perubahan","Kenaikan kedua tampak dua kali lebih besar, padahal persentasenya sama-sama 100 persen","Kedua kenaikan tampak sama besar, padahal yang kedua secara persentase lebih kecil"],
 answer:2,
 explain:"Di skala aritmatik, 200 ke 400 itu jaraknya 200 poin, sementara 100 ke 200 cuma 100 poin. Jadi kenaikan kedua KELIATAN dua kali lebih besar. Padahal persentasenya sama persis: dua-duanya naik 100%. Mata lo dibohongin sama skala. Efek praktisnya serius: di chart jangka panjang, garis tren yang lo tarik di bagian awal jadi nyesatin karena bagian itu keliatan datar. Solusinya skala logaritmik, yang ngasih jarak sama buat persentase sama."},

{id:"rta-chart-h02",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Grafik sebuah saham menunjukkan penurunan tajam 50 persen dalam satu hari, tetapi tidak ada berita apa pun. Sebelum menyimpulkan, apa yang paling dulu harus diperiksa analis?",
 options:["Apakah volume pada hari itu jauh melampaui rata-rata hariannya","Apakah indeks sektor mengalami penurunan serupa pada hari yang sama","Apakah terdapat gap yang belum tertutup pada beberapa sesi sebelumnya","Apakah terjadi aksi korporasi seperti stock split yang belum disesuaikan pada data"],
 answer:3,
 explain:"Sebelum panik dan nyimpulin support jebol, cek dulu: ada aksi korporasi nggak? Stock split 1:2 bikin harga kepotong separo dalam semalam, dan kalau data lo belum adjusted, chart-nya nunjukin 'penurunan' 50% yang nggak pernah terjadi. Nggak ada yang jual, nggak ada yang rugi. Sama juga buat dividen besar dan rights issue. Ini kesalahan sepele tapi memalukan, dan gampang banget dihindarin: pakai data yang udah disesuaikan."},

{id:"rta-chart-h03",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Seorang swing trader dengan horizon dua sampai empat pekan memutuskan menganalisis grafik lima menit untuk menentukan arah tren. Kelemahan utama pendekatan ini adalah...",
 options:["Rasio noise terhadap sinyal pada grafik itu jauh melampaui horizon posisinya","Grafik lima menit tidak menyediakan data yang cukup panjang untuk analisis tren","Indikator pada grafik lima menit menghasilkan nilai yang berbeda dari grafik harian","Grafik lima menit hanya tersedia bagi anggota bursa, bukan bagi pelaku umum"],
 answer:0,
 explain:"Horizon posisi lo 2-4 pekan, tapi lo nentuin arah tren dari chart 5 menit. Nggak nyambung. Makin pendek periodenya, makin besar porsi pergerakan yang cuma noise. Di chart 5 menit, lo bakal lihat puluhan 'pembalikan tren' per hari yang semuanya nggak ada artinya buat posisi 3 minggu. Yang bener: tentuin arah dari chart harian atau mingguan, baru turun ke timeframe lebih kecil cuma buat nyari titik masuk yang presisi."},

{id:"rta-chart-h04",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Sebuah pola tampak sangat rapi pada grafik Heikin Ashi tetapi tidak terlihat pada candlestick biasa. Bagaimana analis sebaiknya menyikapinya?",
 options:["Menggabungkan keduanya dengan merata-ratakan level yang dihasilkan masing-masing","Berhati-hati, karena harga pada Heikin Ashi adalah hasil perhitungan, bukan harga transaksi","Mempercayainya, karena Heikin Ashi menyaring noise sehingga polanya lebih murni","Mengabaikan candlestick biasa, karena Heikin Ashi lebih mutakhir secara metodologis"],
 answer:1,
 explain:"Heikin Ashi itu harga hasil PERHITUNGAN, bukan harga transaksi beneran. Dia rata-ratain open, high, low, close jadi candle yang halus. Makanya pola keliatan rapi banget — karena noise-nya udah dibuang duluan. Tapi hati-hati: level yang lo lihat di Heikin Ashi bisa nggak pernah diperdagangin sama siapa pun. Jangan pasang stop atau target di harga Heikin Ashi. Pakai dia buat baca arah, pakai candlestick biasa buat nentuin level."},

{id:"rta-chart-h05",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Pada point and figure dengan box size 20 dan reversal 3 box, harga bergerak turun 50 poin dari puncak kolom X terakhir. Apa yang terjadi pada grafik?",
 options:["Kolom X diperpanjang ke bawah mengikuti pergerakan harga terbaru","Grafik mencatat satu box O tanpa memulai kolom baru sepenuhnya","Belum ada kolom baru, karena pembalikan menuntut minimal 60 poin","Kolom O baru digambar, karena penurunan sudah melampaui dua box"],
 answer:2,
 explain:"Itung dulu: box size 20, reversal 3 box, berarti butuh 3 x 20 = 60 poin buat bikin kolom baru. Harga baru turun 50 poin, masih kurang 10. Jadi BELUM ada kolom O yang kegambar, chart-nya belum berubah sama sekali. Ini inti point and figure: dia sengaja ngabaikan gerakan yang belum cukup besar, jadi noise kecil nggak ninggalin jejak. Enak buat ngeliat level, tapi artinya lo juga telat tau kalau ada pembalikan."},

{id:"rta-chart-h06",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Analis membandingkan kinerja dua saham, yang satu berharga Rp500 dan satunya Rp25.000, dengan menampilkan keduanya pada satu grafik berskala harga biasa. Masalah utama penyajian ini adalah...",
 options:["Kedua saham tidak dapat ditampilkan bersama karena satuan harganya berbeda","Grafik gabungan selalu memerlukan skala logaritmik agar tren keduanya terbaca","Perbandingan hanya sah bila kedua saham berada pada sektor yang sama","Pergerakan saham berharga rendah tampak nyaris datar meski persentasenya besar"],
 answer:3,
 explain:"Saham Rp500 naik 20% itu cuma gerak 100 rupiah. Di chart yang sumbunya harus nampung saham Rp25.000, gerakan 100 rupiah itu nyaris garis lurus. Mata lo bilang saham murahnya diem, padahal dia naik 20%. Solusinya: normalisasi dua-duanya ke 100 di tanggal awal, jadi yang dibandingin PERSENTASENYA. Atau pakai skala logaritmik. Jangan pernah bandingin dua harga yang skalanya jauh beda di satu sumbu biasa."},

{id:"rta-chart-h07",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Volume profile sebuah saham menunjukkan satu area harga dengan volume jauh lebih padat dari sekitarnya. Mengapa area itu penting bagi analis?",
 options:["Banyak posisi terbentuk di sana, sehingga area itu cenderung menjadi magnet sekaligus zona reaksi","Area itu menandakan harga wajar saham tersebut menurut konsensus pasar","Area itu selalu menjadi titik awal tren berikutnya setelah konsolidasi berakhir","Area itu menunjukkan tempat pelaku institusi menempatkan order stop loss mereka"],
 answer:0,
 explain:"Area dengan volume padat artinya banyak posisi kebentuk di harga itu — banyak orang punya harga beli di situ. Efeknya dua, dan dua-duanya berguna. Pertama, area itu jadi MAGNET: harga cenderung balik ke situ karena banyak transaksi terjadi di level yang dianggap wajar. Kedua, jadi ZONA REAKSI: pas harga balik ke situ, yang nyangkut mau keluar impas dan yang untung mau nambah, jadi rame. Kebalikannya, area volume tipis biasanya dilewatin cepet."},

{id:"rta-chart-h08",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Grafik Renko sebuah saham menunjukkan tren naik bersih tanpa satu pun bata turun selama dua bulan, padahal grafik candlestick memperlihatkan beberapa koreksi tajam. Apa penyebabnya?",
 options:["Renko menyesuaikan brick size secara otomatis mengikuti volatilitas pasar","Renko hanya menggambar bata baru bila harga bergerak sebesar brick size, sehingga koreksi kecil terhapus","Renko memakai harga rata-rata sehingga koreksi tajam ikut terhaluskan","Renko mengabaikan harga penutupan dan hanya memakai harga tertinggi periode"],
 answer:1,
 explain:"Renko cuma gambar bata baru kalau harga gerak sebesar brick size. Koreksi yang lebih kecil dari itu NGGAK KEGAMBAR sama sekali, jadi ilang dari pandangan. Makanya trennya keliatan bersih banget tanpa satu pun bata turun. Ini pedang bermata dua: enak buat ngeliat arah tanpa keganggu noise, tapi lo jadi buta sama koreksi tajam yang sebenernya kejadian — dan koreksi itu yang bakal nyentuh stop lo di dunia nyata."}
]);
