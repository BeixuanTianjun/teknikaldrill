/* Soal C3 menerapkan — memasukkan angka ke rumus baku.

   Porsi C3 sebelumnya cuma 2,5 persen, padahal ujian sertifikasi banyak
   menguji kemampuan memakai rumus, bukan cuma memahami konsepnya. Tiap
   pembahasan menuliskan langkah hitungnya, bukan langsung jawabannya. */
TD.register([
/* ===== position sizing & manajemen risiko ===== */
{id:"hit-001",module:"rta-plan",level:"RTA",difficulty:"sedang",
 q:"Modal Rp800.000.000 dengan risiko 1 persen per transaksi. Harga masuk Rp3.400 dan stop loss Rp3.200. Berapa jumlah lembar maksimum yang boleh dibeli?",
 options:["40.000 lembar","25.000 lembar","80.000 lembar","16.000 lembar"],
 answer:0,
 explain:"Langkahnya dua. Satu: risiko rupiah = 1% x 800 juta = Rp8.000.000. Dua: risiko per lembar = 3.400 dikurangi 3.200 = Rp200. Jumlah lembar = 8.000.000 dibagi 200 = 40.000 lembar (400 lot). Cek balik: 40.000 x 200 = 8 juta. Pas. Kalau jawabannya kegedean, biasanya lo lupa bagi sama jarak stop-nya."},

{id:"hit-002",module:"rta-plan",level:"RTA",difficulty:"sedang",
 q:"Modal Rp150.000.000 dengan risiko 2 persen per transaksi. Analis ingin memasang stop 6 persen di bawah harga masuk. Berapa nilai posisi maksimalnya?",
 options:["Rp9.000.000","Rp50.000.000","Rp3.000.000","Rp18.000.000"],
 answer:1,
 explain:"Risiko rupiah = 2% x 150 juta = Rp3.000.000. Stop-nya 6 persen dari NILAI POSISI, jadi: 6% x nilai posisi = 3 juta, berarti nilai posisi = 3.000.000 dibagi 0,06 = Rp50.000.000. Jebakannya ada di opsi Rp3 juta — itu risiko rupiahnya, bukan nilai posisinya. Yang dibatasi 2 persen itu RUGINYA, bukan belanjanya."},

{id:"hit-003",module:"rta-plan",level:"RTA",difficulty:"sedang",
 q:"Sebuah sistem memiliki win rate 45 persen dengan rata-rata untung 2,5R dan rata-rata rugi 1R. Berapa expectancy per transaksinya?",
 options:["0,45R","1,575R","0,575R","1,125R"],
 answer:2,
 explain:"Rumusnya: (peluang menang x rata-rata untung) dikurangi (peluang kalah x rata-rata rugi). Masukin: (0,45 x 2,5R) dikurangi (0,55 x 1R) = 1,125R dikurangi 0,55R = 0,575R. Jebakan paling umum ada di opsi 1,125R — itu baru sisi untungnya doang, sisi ruginya belum dikurangin."},

{id:"hit-004",module:"rta-plan",level:"RTA",difficulty:"sedang",
 q:"Portofolio turun dari puncak Rp500.000.000 menjadi Rp375.000.000. Berapa persen kenaikan yang dibutuhkan untuk kembali ke puncak semula?",
 options:["25 persen","Sekitar 133 persen","Sekitar 40 persen","Sekitar 33 persen"],
 answer:3,
 explain:"Drawdown-nya (500 dikurangi 375) dibagi 500 = 25 persen. Tapi buat pulih, yang dihitung dari nilai SEKARANG: (500 dikurangi 375) dibagi 375 = 125 dibagi 375 = 33,3 persen. Jebakannya opsi 25 persen — itu besar drawdown-nya, bukan kenaikan yang dibutuhkan. Makin dalam, makin timpang: rugi 50 persen butuh naik 100 persen."},

{id:"hit-005",module:"rta-plan",level:"RTA",difficulty:"sedang",
 q:"Analis membeli di Rp2.400 dengan stop Rp2.280 dan target Rp2.760. Berapa rasio risiko terhadap imbal hasilnya?",
 options:["1 banding 3","1 banding 2","1 banding 1,5","1 banding 4"],
 answer:0,
 explain:"Risiko = 2.400 dikurangi 2.280 = 120 poin. Potensi untung = 2.760 dikurangi 2.400 = 360 poin. Rasio = 120 banding 360 = 1 banding 3. Tapi ingat, rasio doang belum cukup: 1 banding 3 dengan win rate 20 persen itu tetap rugi. Selalu kaliin sama peluang keberhasilannya buat dapet expectancy."},

{id:"hit-006",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Seorang analis memegang enam posisi terbuka, masing-masing berisiko 1,2 persen ekuitas hingga level stop. Berapa total heat portofolionya?",
 options:["0,2 persen","7,2 persen","1,2 persen","6 persen"],
 answer:1,
 explain:"Total heat = jumlah risiko SEMUA posisi terbuka kalau kena stop barengan: 6 x 1,2% = 7,2 persen ekuitas. Angka ini masih di dalam batas lazim 6 sampai 10 persen, tapi sudah mendekati ujungnya. Yang sering kejadian: orang disiplin banget di risiko per transaksi tapi nggak pernah ngitung totalnya, terus kaget pas semua merah barengan."},

/* ===== level & Fibonacci ===== */
{id:"hit-007",module:"rta-level",level:"RTA",difficulty:"sedang",
 q:"Sebuah saham naik dari Rp1.200 ke Rp2.400 lalu terkoreksi. Pada harga berapa level retracement Fibonacci 38,2 persen berada?",
 options:["Rp2.058","Rp1.458","Rp1.942","Rp1.800"],
 answer:2,
 explain:"Besar pergerakannya = 2.400 dikurangi 1.200 = 1.200 poin. Retracement 38,2 persen = 0,382 x 1.200 = 458 poin. Diukur dari PUNCAK ke bawah: 2.400 dikurangi 458 = Rp1.942. Jebakannya opsi Rp1.458 — itu hasil ngitung dari bawah ke atas (1.200 ditambah 458), arah yang kebalik."},

{id:"hit-008",module:"rta-level",level:"RTA",difficulty:"sedang",
 q:"Pergerakan naik dari Rp800 ke Rp1.600. Pada harga berapa level retracement Fibonacci 61,8 persen berada?",
 options:["Rp1.294","Rp1.200","Rp1.494","Rp1.106"],
 answer:3,
 explain:"Besar pergerakan = 1.600 dikurangi 800 = 800 poin. Retracement 61,8 persen = 0,618 x 800 = 494 poin. Dari puncak: 1.600 dikurangi 494 = Rp1.106. Opsi Rp1.294 itu level 38,2 persen, dan Rp1.200 itu level 50 persen — dua-duanya level yang nyata, cuma bukan yang ditanya."},

{id:"hit-009",module:"rta-level",level:"RTA",difficulty:"sedang",
 q:"Sesi kemarin mencatat high Rp5.400, low Rp5.100, dan close Rp5.250. Berapa pivot point klasik untuk sesi hari ini?",
 options:["Rp5.250","Rp5.300","Rp5.175","Rp5.325"],
 answer:0,
 explain:"Pivot klasik = (High + Low + Close) dibagi 3 = (5.400 + 5.100 + 5.250) dibagi 3 = 15.750 dibagi 3 = Rp5.250. Kebetulan hasilnya sama persis sama close-nya, dan itu wajar kalau close-nya pas di tengah rentang. Kekuatan pivot ada di rumusnya yang BAKU: semua trader harian ngitung angka yang sama, jadi levelnya beneran diawasi."},

{id:"hit-010",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Harga bergerak dari Rp2.000 ke Rp2.500 lalu terkoreksi ke Rp2.300. Bila analis memproyeksikan Fibonacci extension 161,8 persen dari kaki pertama, di harga berapa targetnya?",
 options:["Rp2.618","Rp3.109","Rp2.809","Rp3.309"],
 answer:1,
 explain:"Kaki pertama = 2.500 dikurangi 2.000 = 500 poin. Extension 161,8 persen = 1,618 x 500 = 809 poin. Diproyeksiin dari titik AKHIR KOREKSI, bukan dari puncak: 2.300 ditambah 809 = Rp3.109. Titik awal proyeksi ini yang paling sering salah — kalau lo proyeksiin dari 2.000, hasilnya Rp2.809 dan itu meleset 300 poin."},

/* ===== statistik & volatilitas ===== */
{id:"hit-011",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Sebuah saham memiliki volatilitas harian 1,5 persen. Dengan asumsi 252 hari perdagangan, berapa kira-kira volatilitas tahunannya?",
 options:["Sekitar 5,2 persen","Sekitar 18 persen","Sekitar 23,8 persen","Sekitar 378 persen"],
 answer:2,
 explain:"Penyetahunan pakai AKAR waktu: 1,5% x akar 252 = 1,5 x 15,87 = 23,8 persen. Jebakan terbesarnya opsi 378 persen, yaitu 1,5 dikali 252 langsung. Kenapa akar? Karena risiko nggak numpuk rapi — sebagian hari naik, sebagian turun, saling makan. Makanya 252 hari nggak bikin risikonya 252 kali lipat."},

{id:"hit-012",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sebuah strategi menghasilkan imbal hasil plus 40 persen pada tahun pertama dan minus 30 persen pada tahun kedua. Berapa nilai akhir modal Rp100.000.000 setelah dua tahun?",
 options:["Rp110.000.000","Rp100.000.000","Rp105.000.000","Rp98.000.000"],
 answer:3,
 explain:"Hitung berurutan, jangan dirata-rata: 100 juta x 1,40 = 140 juta, lalu 140 juta x 0,70 = Rp98.000.000. Jadi lo RUGI 2 juta. Padahal rata-rata aritmatiknya (plus 40 ditambah minus 30, dibagi 2) = plus 5 persen, yang bikin seolah untung. Ini kenapa laporan kinerja yang jujur pakai CAGR atau nilai ekuitas akhir, bukan rata-rata return."},

{id:"hit-013",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Sebuah instrumen memiliki rata-rata imbal hasil harian 0,08 persen dengan standar deviasi harian 1,2 persen. Berapa Z score untuk hari yang imbal hasilnya minus 3 persen?",
 options:["Sekitar minus 2,57","Sekitar minus 2,50","Sekitar minus 3,08","Sekitar minus 0,38"],
 answer:0,
 explain:"Z score = (nilai dikurangi rata-rata) dibagi standar deviasi = (minus 3 dikurangi 0,08) dibagi 1,2 = minus 3,08 dibagi 1,2 = minus 2,57. Artinya hari itu menyimpang 2,57 standar deviasi di bawah rata-rata. Jebakannya opsi minus 2,50 (lupa ngurangin rata-ratanya) dan minus 3,08 (lupa bagi standar deviasinya)."},

{id:"hit-014",module:"cta-sistem",level:"CTA",difficulty:"sedang",
 q:"Sebuah sistem membukukan total laba kotor Rp84.000.000 dan total rugi kotor Rp35.000.000 selama pengujian. Berapa profit factor-nya?",
 options:["49","2,4","0,42","1,4"],
 answer:1,
 explain:"Profit factor = laba kotor dibagi rugi kotor = 84 juta dibagi 35 juta = 2,4. Patokan kasarnya: di atas 1 berarti untung, 1,5 sampai 2 dipandang baik, dan 2,4 tergolong bagus. Tapi kalau angkanya di atas 3, justru curigai ada kesalahan uji. Jebakannya opsi 49, yaitu selisihnya (84 dikurangi 35), bukan hasil baginya."},

{id:"hit-015",module:"cta-sistem",level:"CTA",difficulty:"sedang",
 q:"Sebuah sistem menghasilkan imbal hasil tahunan 28 persen dengan maximum drawdown 14 persen. Berapa Calmar ratio-nya?",
 options:["14","42","2,0","0,5"],
 answer:2,
 explain:"Calmar ratio = imbal hasil tahunan dibagi maximum drawdown = 28 dibagi 14 = 2,0. Artinya buat tiap satu persen sakit yang harus lo tanggung, lo dapet dua persen. Rasio ini sering lebih berguna buat trader ritel daripada Sharpe, karena yang beneran kerasa tiap hari itu drawdown-nya, bukan standar deviasi."},

{id:"hit-016",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem menghasilkan rata-rata laba kotor 0,6 persen per transaksi sebelum biaya. Biaya sekali jalan 0,2 persen. Berapa laba bersih per transaksinya?",
 options:["0,4 persen","0,58 persen","0,3 persen","0,2 persen"],
 answer:3,
 explain:"Biaya dikenakan DUA KALI: sekali beli, sekali jual. Jadi biaya pulang pergi = 2 x 0,2% = 0,4 persen. Laba bersih = 0,6 dikurangi 0,4 = 0,2 persen. Keunggulan lo kemakan dua pertiga sama ongkos. Jebakannya opsi 0,4 persen, yang cuma ngurangin biaya sekali jalan. Ini kesalahan yang bikin banyak sistem frekuensi tinggi keliatan untung di kertas."},

/* ===== indikator ===== */
{id:"hit-017",module:"rta-indikator",level:"RTA",difficulty:"sedang",
 q:"Lima harga penutupan terakhir adalah 1.020, 1.040, 1.010, 1.060, dan 1.070. Berapa nilai SMA 5 harinya?",
 options:["1.040","1.050","1.030","1.045"],
 answer:0,
 explain:"SMA 5 = jumlahin lima close terakhir, bagi lima. Jumlahnya: 1.020 + 1.040 + 1.010 + 1.060 + 1.070 = 5.200. Dibagi 5 = 1.040. Sederhana banget, dan justru di situ kelemahannya: harga lima hari lalu dianggap sepenting harga kemarin. Itu yang bikin SMA lambat, dan itu yang mau diperbaiki EMA."},

{id:"hit-018",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham memiliki ATR(14) sebesar Rp180. Analis memakai stop 2 kali ATR dari harga masuk Rp6.000, dengan risiko rupiah Rp5.400.000. Berapa jumlah lembar yang boleh dibeli?",
 options:["7.500 lembar","15.000 lembar","30.000 lembar","900 lembar"],
 answer:1,
 explain:"Dua langkah. Satu: jarak stop = 2 x ATR = 2 x 180 = Rp360 per lembar. Dua: jumlah lembar = risiko rupiah dibagi jarak stop = 5.400.000 dibagi 360 = 15.000 lembar. Perhatikan keunggulan cara ini: di saham yang lebih liar, ATR-nya lebih besar, stop otomatis melebar, dan jumlah lembarnya otomatis mengecil. Risiko rupiahnya tetap sama."},

{id:"hit-019",module:"rta-indikator",level:"RTA",difficulty:"sedang",
 q:"Harga saat ini Rp4.500 dan harga 10 periode lalu Rp4.000. Berapa nilai Rate of Change 10 periode?",
 options:["11,1 persen","1,125 persen","12,5 persen","500 poin"],
 answer:2,
 explain:"ROC = (harga sekarang dikurangi harga n periode lalu) dibagi harga n periode lalu, dikali 100 = (4.500 dikurangi 4.000) dibagi 4.000 x 100 = 500 dibagi 4.000 x 100 = 12,5 persen. Jebakannya opsi 500 poin — itu momentum sederhana, versi poin. ROC pakai persen supaya bisa dibandingin antar instrumen yang harganya beda jauh."},

{id:"hit-020",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Selama 14 periode, rata-rata kenaikan adalah 12 poin dan rata-rata penurunan 8 poin. Berapa nilai RSI-nya?",
 options:["40","66,7","150","60"],
 answer:3,
 explain:"Dua langkah. Satu: RS = rata-rata kenaikan dibagi rata-rata penurunan = 12 dibagi 8 = 1,5. Dua: RSI = 100 dikurangi (100 dibagi (1 ditambah RS)) = 100 dikurangi (100 dibagi 2,5) = 100 dikurangi 40 = 60. Jebakannya opsi 150 — itu RS-nya dikali 100, lupa dimasukin ke rumus normalisasinya. RSI selalu di rentang 0 sampai 100."},

/* ===== chart & pola ===== */
{id:"hit-021",module:"rta-chart",level:"RTA",difficulty:"sedang",
 q:"Pada grafik point and figure dengan box size 25 dan reversal 3 box, berapa besar pembalikan harga yang dibutuhkan untuk membentuk kolom baru?",
 options:["75 poin","25 poin","3 poin","28 poin"],
 answer:0,
 explain:"Kolom baru butuh pembalikan sebesar box size DIKALI reversal = 25 x 3 = 75 poin. Gerakan di bawah 75 poin nggak ninggalin jejak sama sekali di chart. Inilah cara point and figure nyaring noise: dia sengaja BUTA sama gerakan kecil. Enak buat ngelihat level, tapi konsekuensinya lo juga telat tau kalau ada pembalikan beneran."},

{id:"hit-022",module:"rta-trend",level:"RTA",difficulty:"sedang",
 q:"Sebuah pola head and shoulders memiliki puncak head di Rp8.600 dan neckline di Rp7.400. Berapa target proyeksi minimum setelah neckline ditembus?",
 options:["Rp6.800","Rp6.200","Rp8.600","Rp7.400"],
 answer:1,
 explain:"Dua langkah. Satu: tinggi pola = head dikurangi neckline = 8.600 dikurangi 7.400 = 1.200 poin. Dua: target = titik breakout dikurangi tinggi pola = 7.400 dikurangi 1.200 = Rp6.200. Perhatikan kata MINIMUM: ini proyeksi paling sedikit, bukan batas. Dan wajib dicek ke level support historis di jalurnya, karena level yang punya alasan pasar lebih menentukan daripada hasil ngukur."},

{id:"hit-023",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Sebuah bendera terbentuk setelah kenaikan dari Rp1.500 ke Rp2.100, lalu harga terkoreksi ke Rp1.950 sebelum menembus ke atas. Berapa target measured move-nya?",
 options:["Rp2.250","Rp3.150","Rp2.550","Rp2.700"],
 answer:2,
 explain:"Dua langkah. Satu: tiang bendera = 2.100 dikurangi 1.500 = 600 poin. Dua: proyeksiin dari titik BREAKOUT, yaitu ujung benderanya di 1.950: 1.950 ditambah 600 = Rp2.550. Jebakannya opsi Rp2.700, hasil proyeksi dari puncak 2.100. Titik awal proyeksi itu yang paling sering salah, dan selisihnya bisa ratusan poin."},

/* ===== Elliott & aset ===== */
{id:"hit-024",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Gelombang 1 bergerak dari Rp2.000 ke Rp2.600. Gelombang 2 melakukan retracement 50 persen. Bila gelombang 3 diperkirakan 161,8 persen dari gelombang 1, di harga berapa targetnya?",
 options:["Rp3.571","Rp2.971","Rp3.871","Rp3.271"],
 answer:3,
 explain:"Tiga langkah. Satu: gelombang 1 = 2.600 dikurangi 2.000 = 600 poin. Dua: gelombang 2 retrace 50 persen = 300 poin, jadi berakhir di 2.600 dikurangi 300 = 2.300. Tiga: gelombang 3 = 1,618 x 600 = 971 poin, diproyeksiin dari AKHIR gelombang 2: 2.300 ditambah 971 = Rp3.271. Kesalahan paling umum: proyeksiin dari puncak gelombang 1 (2.600), yang ngasih Rp3.571."},

{id:"hit-025",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Kontrak berjangka bulan berjalan dihargai USD 76,50 sementara kontrak bulan berikutnya USD 78,90. Berapa biaya rollover per kontrak bagi pemegang posisi beli?",
 options:["USD 2,40","USD 155,40","USD 0","USD 1,20"],
 answer:0,
 explain:"Strukturnya contango, karena kontrak berikutnya lebih mahal. Pemegang posisi beli harus jual yang murah (76,50) dan beli yang mahal (78,90), jadi selisihnya USD 2,40 per kontrak jadi BIAYA. Rugi kecil yang berulang tiap kali gulir. Ini alasan banyak ETF komoditas kinerjanya jauh di bawah harga komoditasnya sendiri."},

{id:"hit-026",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Portofolio senilai Rp5.000.000.000 memiliki beta 1,25 terhadap indeks. Berapa nilai nosional kontrak berjangka indeks yang perlu dijual untuk melakukan lindung nilai penuh?",
 options:["Rp1.250.000.000","Rp6.250.000.000","Rp5.000.000.000","Rp4.000.000.000"],
 answer:1,
 explain:"Nilai lindung nilai = nilai portofolio DIKALI beta = 5 miliar x 1,25 = Rp6.250.000.000. Kenapa lebih besar dari portofolionya? Karena beta 1,25 artinya portofolio lo gerak 1,25 kali lebih kencang dari indeks, jadi lindung nilainya harus sebanding. Jebakannya opsi Rp5 miliar, yang ngabaikan beta dan bikin lindung nilai lo kurang 20 persen."}
]);
