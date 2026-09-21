/* Studi kasus berantai — jawaban tiap soal dipakai di soal berikutnya.

   Supaya satu kekeliruan di awal tidak menghukum seluruh rangkaian, angka
   hasil langkah sebelumnya SELALU dituliskan ulang di soal berikutnya. Jadi
   yang diuji kemampuan melanjutkan hitungan, bukan ketelitian di satu titik.
   Konteksnya tetap kasus analis pasar modal Indonesia. */
TD.registerCases([
{id:"rantai-01", title:"Menyusun satu transaksi utuh dari nol sampai rencana keluar",
 brief:"Seorang analis di sebuah manajer investasi menemukan PT Bumi Sejahtera (BUMS) memantul dari area support yang sudah dua kali bertahan. Ia diminta menyusun rencana transaksi lengkap: dari menentukan ukuran posisi, menilai kelayakan rasio, sampai merencanakan pengelolaan posisi setelah harga bergerak. Seluruh keputusan harus tunduk pada kebijakan risiko yang sudah tertulis.",
 facts:[["Ekuitas kelolaan","Rp600.000.000"],["Batas risiko per transaksi","1,5% dari ekuitas"],
        ["Harga masuk rencana","Rp2.500"],["Support terdekat","Rp2.380"],
        ["Rencana stop loss","Rp2.350"],["Resistance mayor","Rp2.950"],
        ["ATR(14)","Rp85"],["Rata-rata volume harian","8,5 juta lembar"]]},

{id:"rantai-02", title:"Menilai satu sistem dari angka mentah sampai keputusan menjalankan",
 brief:"Tim riset kuantitatif sebuah sekuritas menyerahkan hasil pengujian sistem pengikut tren kepada komite investasi. Komite diminta menilai bukan hanya apakah sistemnya menguntungkan, tetapi juga apakah sanggup dijalani dan berapa modal yang pantas dialokasikan. Seluruh angka di bawah adalah hasil pengujian sebelum biaya transaksi.",
 facts:[["Jumlah transaksi uji","420 transaksi, 2016 sampai 2023"],
        ["Rasio kemenangan","38%"],["Rata-rata untung","2,8R"],["Rata-rata rugi","1R"],
        ["Rentetan kalah terburuk","11 transaksi berturut-turut"],
        ["Maximum drawdown uji","19%"],["Imbal hasil tahunan uji","31%"],
        ["Frekuensi","sekitar 52 transaksi per tahun"],
        ["Biaya sekali jalan","0,15% dari nilai transaksi"]]},

{id:"rantai-03", title:"Membaca satu pola dari pengukuran sampai pengambilan keputusan",
 brief:"PT Cahaya Logam (CHLG) membentuk pola head and shoulders pada grafik harian selama lima bulan. Analis diminta mengukur polanya, memproyeksikan target, menilai kelayakan transaksinya, lalu memutuskan apa yang dilakukan ketika harga berhenti sebelum target tercapai. Seluruh level di bawah dibaca dari grafik yang sama.",
 facts:[["Puncak bahu kiri","Rp1.640"],["Puncak head","Rp1.820"],
        ["Puncak bahu kanan","Rp1.630"],["Neckline (mendatar)","Rp1.460"],
        ["Volume bahu kiri","1,8 juta lembar per sesi"],
        ["Volume head","1,3 juta lembar per sesi"],
        ["Volume bahu kanan","0,9 juta lembar per sesi"],
        ["Support historis kuat","Rp1.180"],["ATR(14)","Rp42"]]}
]);

TD.register([
/* ===== rantai-01: rencana transaksi utuh ===== */
{id:"rantai-01-q1",module:"rta-plan",level:"RTA",difficulty:"sedang",caseId:"rantai-01",
 q:"LANGKAH 1. Berdasarkan batas risiko dan level stop pada kasus ini, berapa jumlah lembar maksimum yang boleh dibeli?",
 options:["60.000 lembar","36.000 lembar","75.000 lembar","90.000 lembar"],
 answer:0,
 explain:"Dua langkah. Satu: risiko rupiah = 1,5% x 600 juta = Rp9.000.000. Dua: risiko per lembar = 2.500 dikurangi 2.350 = Rp150. Jumlah lembar = 9.000.000 dibagi 150 = 60.000 lembar (600 lot). Perhatikan urutannya: stop ditentuin DULU dari struktur grafik (di bawah support 2.380), baru ukuran posisi ngikut hasil bagi. Bukan kebalik."},

{id:"rantai-01-q2",module:"rta-plan",level:"RTA",difficulty:"sedang",caseId:"rantai-01",
 q:"LANGKAH 2. Dengan ukuran posisi 60.000 lembar dari langkah sebelumnya, berapa nilai transaksinya dan bagaimana kedudukannya terhadap likuiditas saham ini?",
 options:["Rp150 juta, tetapi likuiditas tidak perlu dinilai karena stop sudah dipasang","Rp150 juta, sekitar 0,7 persen volume harian sehingga masih aman","Rp150 juta, sekitar 7 persen volume harian sehingga sudah mengkhawatirkan","Rp9 juta, sekitar 0,1 persen volume harian sehingga sangat aman"],
 answer:1,
 explain:"Nilai transaksi = 60.000 lembar x Rp2.500 = Rp150.000.000. Kedudukannya terhadap likuiditas diukur dalam LEMBAR, bukan rupiah: 60.000 dibagi 8.500.000 = 0,7 persen volume harian. Patokan lazimnya maksimal 1 sampai 5 persen, jadi ini aman. Kenapa ini wajib dicek? Karena stop loss kehilangan makna kalau posisi lo kegedean — pas mau keluar, order lo sendiri yang ndorong harga jatuh."},

{id:"rantai-01-q3",module:"rta-plan",level:"RTA",difficulty:"sedang",caseId:"rantai-01",
 q:"LANGKAH 3. Dengan harga masuk Rp2.500, stop Rp2.350, dan target di resistance mayor, berapa rasio risiko terhadap imbal hasilnya?",
 options:["1 banding 1,8","1 banding 4,5","1 banding 3","1 banding 2"],
 answer:2,
 explain:"Risiko = 2.500 dikurangi 2.350 = 150 poin. Potensi untung = 2.950 dikurangi 2.500 = 450 poin. Rasio = 150 banding 450 = 1 banding 3. Ini rasio yang sehat. Tapi ingat, rasio doang belum nentuin kelayakan: 1 banding 3 dengan win rate 20 persen itu tetap rugi. Yang nentuin tetap expectancy, yaitu rasio dikali peluang keberhasilannya."},

{id:"rantai-01-q4",module:"rta-plan",level:"RTA",difficulty:"sulit",caseId:"rantai-01",
 q:"LANGKAH 4. Harga bergerak ke Rp2.650, artinya posisi sudah untung sekitar 1R. Analis mempertimbangkan memindahkan stop ke titik impas. Penilaian yang paling tepat adalah...",
 options:["Sudah tepat, karena memindahkan stop ke titik impas selalu menghilangkan risiko","Sebaiknya stop dipindahkan lebih tinggi lagi ke Rp2.600 agar keuntungan terkunci","Sebaiknya stop dihapus saja karena posisi sudah berada di wilayah untung","Perlu hati-hati, karena Rp2.500 hanya berjarak sekitar 1,8 ATR dari harga berjalan sehingga rawan tersentuh fluktuasi biasa"],
 answer:3,
 explain:"Itung jaraknya dulu: dari 2.650 ke 2.500 itu 150 poin, dan ATR-nya 85, jadi 150 dibagi 85 = 1,8 ATR. Jarak segitu masih di dalam rentang goyangan normal harian — artinya stop di titik impas gampang kesentuh sama napas biasa harga, bukan sama pembalikan beneran. Pilihan yang lebih seimbang: realisasi sebagian di 1R, sisanya pakai trailing stop berbasis ATR atau di bawah swing low terakhir."},

/* ===== rantai-02: menilai sistem ===== */
{id:"rantai-02-q1",module:"cta-sistem",level:"CTA",difficulty:"sedang",caseId:"rantai-02",
 q:"LANGKAH 1. Berdasarkan rasio kemenangan dan besaran untung rugi pada kasus ini, berapa expectancy sistem tersebut per transaksi?",
 options:["0,444R","1,064R","0,38R","1,8R"],
 answer:0,
 explain:"Rumusnya: (peluang menang x rata-rata untung) dikurangi (peluang kalah x rata-rata rugi) = (0,38 x 2,8R) dikurangi (0,62 x 1R) = 1,064R dikurangi 0,62R = 0,444R. Positif, jadi sistemnya menguntungkan meskipun LEBIH SERING SALAH daripada benar. Jebakannya opsi 1,064R — itu baru sisi untungnya, sisi ruginya belum dikurangi."},

{id:"rantai-02-q2",module:"cta-sistem",level:"CTA",difficulty:"sulit",caseId:"rantai-02",
 q:"LANGKAH 2. Dengan expectancy 0,444R dari langkah sebelumnya dan sekitar 52 transaksi per tahun, berapa perkiraan hasil tahunan dalam satuan R sebelum biaya?",
 options:["Sekitar 2,3R","Sekitar 23R","Sekitar 52R","Sekitar 0,44R"],
 answer:1,
 explain:"Hasil tahunan = expectancy dikali jumlah transaksi = 0,444R x 52 = 23,1R. Angka ini berguna banget buat nentuin ukuran posisi: kalau 1R lo tetapin 1 persen ekuitas, harapan hasilnya sekitar 23 persen setahun. Tapi ingat kata PERKIRAAN — 23R itu rata-rata jangka panjang, dan tahun tertentu bisa jauh di bawahnya."},

{id:"rantai-02-q3",module:"cta-sistem",level:"CTA",difficulty:"sulit",caseId:"rantai-02",
 q:"LANGKAH 3. Biaya sekali jalan 0,15 persen. Bila rata-rata satu R setara 2 persen pergerakan harga, seberapa besar biaya menggerus expectancy 0,444R tersebut?",
 options:["Tidak menggerus sama sekali karena biaya sudah termasuk dalam R","Sekitar 0,44R, sehingga keunggulannya habis","Sekitar 0,15R, sehingga tersisa sekitar 0,29R","Sekitar 0,075R, sehingga tersisa sekitar 0,37R"],
 answer:2,
 explain:"Biaya dikenakan DUA kali: sekali beli, sekali jual, jadi pulang pergi = 2 x 0,15% = 0,3 persen. Kalau 1R setara 2 persen pergerakan, maka 0,3 persen itu setara 0,3 dibagi 2 = 0,15R. Expectancy bersih = 0,444R dikurangi 0,15R = 0,29R. Keunggulannya kepotong sepertiga. Ini alasan frekuensi transaksi wajib dihitung sejak awal perancangan, bukan dipikirin belakangan."},

{id:"rantai-02-q4",module:"cta-sistem",level:"CTA",difficulty:"sulit",caseId:"rantai-02",
 q:"LANGKAH 4. Sistem ini tercatat pernah kalah 11 kali berturut-turut. Bila 1R ditetapkan 2 persen ekuitas, apa konsekuensi paling penting yang harus disampaikan kepada komite?",
 options:["Rentetan itu tidak relevan karena expectancy sistemnya sudah positif","Rentetan 11 kali membuktikan sistemnya cacat dan tidak layak dijalankan","Menaikkan 1R menjadi 4 persen akan mempercepat pemulihan setelah rentetan itu","Rentetan itu menggerus sekitar 22 persen ekuitas, dan rentetan serupa hampir pasti terulang"],
 answer:3,
 explain:"Hitung dampaknya: 11 kekalahan x 2 persen = sekitar 22 persen ekuitas tergerus. Dan ini BUKAN skenario terburuk yang dikarang — ini yang sudah kejadian di data uji, jadi rentetan serupa atau lebih panjang hampir pasti terulang. Di win rate 38 persen, kalah beruntun itu hal biasa secara statistik. Yang wajib disampaikan ke komite: apakah mereka sanggup menatap angka itu tanpa menghentikan sistemnya di titik terdalam."},

/* ===== rantai-03: membaca pola sampai keputusan ===== */
{id:"rantai-03-q1",module:"rta-trend",level:"RTA",difficulty:"sedang",caseId:"rantai-03",
 q:"LANGKAH 1. Berapa tinggi pola head and shoulders pada kasus ini, dan di harga berapa target proyeksi minimumnya?",
 options:["Tinggi 360 poin, target Rp1.100","Tinggi 360 poin, target Rp1.820","Tinggi 180 poin, target Rp1.280","Tinggi 640 poin, target Rp820"],
 answer:0,
 explain:"Dua langkah. Satu: tinggi pola = puncak head dikurangi neckline = 1.820 dikurangi 1.460 = 360 poin. Dua: target = titik breakout dikurangi tinggi pola = 1.460 dikurangi 360 = Rp1.100. Perhatikan kata MINIMUM: ini proyeksi paling sedikit, bukan batas maksimum. Dan yang diukur dari head, bukan dari bahu."},

{id:"rantai-03-q2",module:"rta-trend",level:"RTA",difficulty:"sulit",caseId:"rantai-03",
 q:"LANGKAH 2. Bagaimana pola volume pada kasus ini menilai keabsahan formasi tersebut?",
 options:["Mendukung, tetapi hanya karena volume bahu kanan adalah yang terkecil","Mendukung, karena volume menurun dari bahu kiri ke head ke bahu kanan seperti yang diharapkan","Membatalkan, karena volume seharusnya meningkat dari bahu kiri ke bahu kanan","Netral, karena volume tidak pernah berperan dalam menilai pola head and shoulders"],
 answer:1,
 explain:"Volumenya 1,8 juta lalu 1,3 juta lalu 0,9 juta — MENURUN berurutan, dan itu persis pola ideal head and shoulders. Ceritanya nyambung sama harganya: tiap puncak partisipasinya makin sedikit, artinya pembelinya makin habis. Yang bikin polanya kuat itu keselarasan antara bentuk dan volume. Kalau bahu kanan justru bervolume paling besar, ceritanya bertentangan dan polanya patut dicurigai."},

{id:"rantai-03-q3",module:"rta-trend",level:"RTA",difficulty:"sulit",caseId:"rantai-03",
 q:"LANGKAH 3. Analis berencana masuk posisi jual saat neckline Rp1.460 ditembus, dengan stop di atas puncak bahu kanan. Berapa rasio risiko terhadap imbal hasil menuju target Rp1.100?",
 options:["Sekitar 1 banding 1,2","Sekitar 1 banding 4,8","Sekitar 1 banding 2,1","Sekitar 1 banding 3,5"],
 answer:2,
 explain:"Risiko = stop di atas bahu kanan (1.630) dikurangi harga masuk (1.460) = 170 poin. Potensi untung = 1.460 dikurangi target 1.100 = 360 poin. Rasio = 170 banding 360 = 1 banding 2,1. Masih layak, tapi perhatikan: stop di atas bahu kanan itu JAUH. Sebagian analis memilih stop yang lebih rapat dengan konsekuensi lebih rawan tersentuh, dan itu pertukaran yang harus dipilih sadar-sadar."},

{id:"rantai-03-q4",module:"rta-trend",level:"RTA",difficulty:"sulit",caseId:"rantai-03",
 q:"LANGKAH 4. Harga menembus neckline dan turun, tetapi berhenti di Rp1.190 dan mulai memantul. Target proyeksi Rp1.100 belum tercapai. Tindakan yang paling tepat adalah...",
 options:["Menahan seluruh posisi sampai Rp1.100 tercapai karena target pola belum terpenuhi","Menambah posisi jual karena selisih menuju target masih tersisa 90 poin","Membatalkan seluruh analisis karena polanya gagal mencapai target","Merealisasikan sebagian, karena harga berhenti tepat di atas support historis Rp1.180 yang lebih menentukan daripada target pola"],
 answer:3,
 explain:"Target pola itu hasil mengukur pakai penggaris; support historis Rp1.180 itu tempat permintaan NYATA pernah muncul. Kalau keduanya berbenturan, yang punya alasan pasar lebih menentukan. Harga berhenti di 1.190, cuma 10 poin di atas support — itu bukan kebetulan. Yang dilakukan analis berpengalaman: realisasi sebagian di level yang punya alasan, sisanya dibiarkan jalan dengan trailing stop. Nunggu 1.100 sambil nonton harga mantul itu menyerahkan untung yang sudah di tangan."}
]);
