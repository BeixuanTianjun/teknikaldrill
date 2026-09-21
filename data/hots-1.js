/* Soal HOTS batch 1 — unit dengan porsi analisis paling tipis.
   Seluruhnya C4 ke atas: menuntut analisis, evaluasi, atau perancangan. */
TD.register([
/* ===== cta-siklus ===== */
{id:"cta-sik-h01",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Sebuah siklus 40 bulan mencapai lembah pada Maret 2021 dan Juli 2024. Analis memproyeksikan lembah berikutnya dengan menambahkan 40 bulan dari Juli 2024. Kelemahan paling serius dari cara ini adalah...",
 options:["Siklus 40 bulan hanya berlaku pada data bulanan, bukan pada data harian maupun mingguan","Proyeksi waktu tidak boleh dipakai sebelum dikonfirmasi oleh indikator momentum","Jarak kedua lembah sebenarnya 40 bulan, sehingga panjang siklusnya belum terverifikasi dari dua titik saja","Proyeksi seharusnya dihitung dari lembah pertama, bukan dari lembah yang terakhir terjadi"],
 answer:2,
 explain:"Maret 2021 ke Juli 2024 itu 40 bulan. Satu jarak. Dari SATU jarak lo nggak bisa nyimpulin ada siklus 40 bulan, sama kayak lihat dua orang tinggi terus nyimpulin semua orang tinggi. Dua titik itu selalu bisa dihubungin garis, itu matematika dasar, bukan temuan. Minimal butuh tiga sampai empat lembah berturut-turut dengan jarak yang mirip baru boleh disebut siklus. Kalau nggak, lo cuma lagi narik garis di antara dua titik acak."},

{id:"cta-sik-h02",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Pada sebuah siklus, puncak konsisten muncul jauh setelah titik tengah periodenya selama tiga siklus berturut-turut. Apa yang paling tepat disimpulkan dari pola right translation ini?",
 options:["Panjang siklusnya sedang memendek sehingga puncaknya bergeser ke belakang","Amplitudo siklus akan mengecil pada periode berikutnya","Siklus tersebut sedang bergeser fase dan titik awalnya perlu dihitung ulang","Tren yang lebih besar sedang mendorong ke atas, sehingga fase naik memakan porsi waktu lebih panjang"],
 answer:3,
 explain:"Right translation artinya puncaknya nongol di paruh AKHIR siklus, jadi waktu naiknya lebih panjang daripada turunnya. Ini bukan kebetulan: tren besar yang lagi ndorong ke atas bikin fase naiknya makan porsi waktu lebih banyak. Kalau kejadiannya konsisten tiga siklus berturut-turut, itu konfirmasi kuat trennya masih sehat. Kebalikannya (left translation) itu peringatan awal, sering muncul sebelum harga sendiri nunjukin masalah."},

{id:"cta-sik-h03",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Analis menguji 12 bulan kalender pada 30 saham dan menemukan satu kombinasi bulan dan saham dengan imbal hasil rata-rata sangat tinggi, signifikan pada tingkat 5 persen. Mengapa temuan itu belum layak dipakai?",
 options:["Menguji 360 kombinasi membuat sekitar 18 di antaranya tampak signifikan hanya karena kebetulan","Tingkat signifikansi 5 persen terlalu longgar untuk data pasar yang berekor gemuk","Pola musiman hanya sah bila diuji pada indeks, bukan pada saham individual","Imbal hasil rata-rata bukan ukuran yang tepat karena distribusinya tidak simetris"],
 answer:0,
 explain:"Itung dulu: 12 bulan x 30 saham = 360 kombinasi. Di tingkat 5%, secara statistik sekitar 18 kombinasi bakal keliatan signifikan MURNI karena kebetulan. Jadi nemu satu yang signifikan itu bukan temuan, itu yang diharapkan terjadi. Ini namanya multiple testing problem. Obatnya: koreksi ambang signifikansinya (misal Bonferroni), atau uji ulang di periode yang belum disentuh. Kalau lolos dua-duanya, baru ngomong."},

{id:"cta-sik-h04",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Dua siklus, satu berperiode 20 minggu dan satu 40 minggu, diperkirakan mencapai lembah pada pekan yang sama. Implikasi paling tepat bagi analis adalah...",
 options:["Proyeksi keduanya harus dibatalkan karena siklus tidak boleh bertumpuk pada titik sama","Tekanan turun menjelang pekan itu berpotensi lebih besar, dan pembalikan sesudahnya berpotensi lebih kuat","Kedua siklus akan saling meniadakan sehingga harga cenderung bergerak mendatar","Siklus 20 minggu menjadi tidak relevan karena tertelan oleh siklus yang lebih panjang"],
 answer:1,
 explain:"20 dan 40 minggu itu kelipatan, jadi mereka rutin nyatu. Pas dua-duanya nyentuh lembah di pekan yang sama, gelombangnya saling nguatin: tekanan turun menjelang pekan itu lebih berat, dan pembalikan sesudahnya berpotensi lebih bertenaga. Tapi inget, ini tetep soal PELUANG dan ZONA WAKTU, bukan tanggal pasti. Jangan all-in cuma karena kalender. Tunggu harga yang ngasih konfirmasi di zona itu."},

{id:"cta-sik-h05",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Analisis spektral pada data harga sepuluh tahun menemukan frekuensi dominan yang kuat, tetapi pengujian pada lima tahun terakhir saja tidak menemukannya. Penjelasan paling masuk akal adalah...",
 options:["Frekuensi dominan hanya dapat dideteksi pada data bulanan, bukan data harian","Hasil pertama pasti salah karena siklus sejati tidak pernah menghilang","Deret harga tidak stasioner, sehingga siklus yang dominan dapat berubah seiring rezim pasar","Sampel lima tahun terlalu pendek sehingga perhitungan spektralnya pasti keliru"],
 answer:2,
 explain:"Deret harga itu nggak stasioner, artinya aturan mainnya berubah seiring waktu. Siklus yang dominan sepuluh tahun bisa ilang di lima tahun terakhir karena rezim pasarnya berubah: pelakunya ganti, likuiditasnya beda, strukturnya beda. Ini bukan bug di analisisnya, ini sifat pasarnya. Makanya siklus apa pun yang lo temuin harus terus dipantau, dan siap dibuang begitu berhenti muncul. Jangan dipaksain karena dulu pernah jalan."},

{id:"cta-sik-h06",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Seorang analis memakai proyeksi siklus untuk menentukan tanggal masuk, dan membuka posisi tepat pada tanggal proyeksi tanpa melihat aksi harga. Kelemahan mendasar dari pendekatan ini adalah...",
 options:["Proyeksi siklus hanya berlaku untuk keluar posisi, tidak pernah untuk masuk posisi","Tanggal proyeksi selalu meleset karena panjang siklus tidak pernah bilangan bulat","Siklus tidak dapat dipakai bersama analisis harga karena keduanya saling bertentangan","Proyeksi siklus menandai zona waktu berpeluang berbalik, bukan memastikan pembalikan terjadi"],
 answer:3,
 explain:"Proyeksi siklus itu nandain ZONA WAKTU yang berpeluang balik arah, bukan mastiin pembalikannya kejadian. Bedanya jauh. Entry buta di tanggal proyeksi tanpa lihat harga itu sama aja judi pakai kalender. Yang bener: pas masuk zona waktunya, baru lo cari konfirmasi dari harga — pola pembalikan, volume, level yang direbut balik. Siklus ngasih tau KAPAN harus merhatiin, harga yang ngasih tau KAPAN harus masuk."},

/* ===== cta-statistik ===== */
{id:"cta-st-h01",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sebuah saham memiliki volatilitas harian 2 persen. Berapa kira-kira volatilitas tahunannya, dengan asumsi 252 hari perdagangan?",
 options:["Sekitar 32 persen","Sekitar 24 persen","Sekitar 100 persen","Sekitar 504 persen"],
 answer:0,
 explain:"Rumusnya: volatilitas harian x akar 252. Jadi 2% x 15,87 = sekitar 32%. Kenapa akar lagi? Karena risiko nggak numpuk rapi, sebagian naik sebagian turun, saling makan. Angka 32% ini praktis banget buat lo: artinya dalam setahun, gerak 32% dari harga sekarang itu masih dalam rentang wajar satu standar deviasi. Jadi jangan kaget kalau saham dengan volatilitas harian 2% tiba-tiba udah naik atau turun sepertiga."},

{id:"cta-st-h02",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Dua strategi menghasilkan rata-rata imbal hasil bulanan yang sama. Strategi A memiliki skewness positif, strategi B negatif. Apa konsekuensi praktis paling penting dari perbedaan itu?",
 options:["B lebih aman karena distribusi imbal hasilnya terkumpul rapat di sekitar rata-rata","B menghasilkan banyak keuntungan kecil tetapi sesekali kerugian sangat besar yang mengancam kelangsungannya","A lebih berisiko karena keuntungan besarnya jarang muncul sehingga hasilnya tidak dapat diandalkan","Keduanya setara karena rata-rata imbal hasilnya sama besar"],
 answer:1,
 explain:"Rata-rata sama, nasib beda jauh. Skewness NEGATIF artinya banyak untung kecil, terus sesekali rugi gede banget. Kelihatan mulus bertahun-tahun, sampai satu bulan yang ngapus semuanya. Ini profil jual opsi, carry trade, dan mean reversion tanpa stop. Skewness POSITIF kebalikannya: sering rugi kecil, sesekali untung gede. Nyebelin dijalanin tapi nggak bikin bangkrut. Yang bikin orang kehabisan modal hampir selalu yang pertama."},

{id:"cta-st-h03",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Korelasi antara harga saham A dan harga saham B selama lima tahun terukur 0,92. Keduanya sama-sama memiliki tren naik yang kuat. Mengapa angka itu berpotensi menyesatkan?",
 options:["Korelasi hanya sah dihitung antara saham yang berada pada sektor yang sama","Nilai 0,92 terlalu tinggi sehingga pasti ada kekeliruan dalam perhitungannya","Dua deret yang sama-sama bertren akan berkorelasi tinggi meski pergerakan hariannya tidak berhubungan","Korelasi lima tahun terlalu panjang sehingga angkanya tidak mencerminkan kondisi terkini"],
 answer:2,
 explain:"Dua deret yang sama-sama naik terus bakal berkorelasi tinggi meskipun gerak HARIANNYA nggak nyambung sama sekali. Yang keukur itu trennya, bukan hubungannya. Ini jebakan spurious correlation versi klasik. Obatnya gampang dan wajib: itung korelasi di RETURN harian, bukan di level harga. Trennya hilang, dan yang tersisa hubungan yang sebenernya. Sering angkanya jatuh dari 0,92 ke 0,15, dan itu yang bener."},

{id:"cta-st-h04",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sebuah strategi menghasilkan rata-rata aritmatik imbal hasil bulanan 3 persen selama dua belas bulan, tetapi ekuitas akhirnya justru lebih rendah dari rata-rata itu. Penjelasan paling tepat adalah...",
 options:["Terdapat kekeliruan penghitungan karena rata-rata aritmatik selalu mencerminkan hasil akhir","Biaya transaksi belum dikurangkan dari imbal hasil bulanan yang dilaporkan","Dua belas bulan terlalu pendek untuk menilai pertumbuhan majemuk sebuah strategi","Pertumbuhan majemuk mengikuti rata-rata geometris, yang selalu lebih kecil bila imbal hasilnya berfluktuasi"],
 answer:3,
 explain:"Pertumbuhan majemuk itu ngikutin rata-rata GEOMETRIS, bukan aritmatik, dan geometris selalu lebih kecil kalau hasilnya naik turun. Makin liar fluktuasinya, makin jauh jaraknya. Contoh ekstremnya: +50% terus -50% itu rata-rata aritmatiknya 0%, tapi aslinya lo rugi 25%. Makanya hati-hati baca laporan kinerja yang nyantumin 'rata-rata return bulanan'. Yang jujur itu CAGR atau nilai ekuitas akhirnya."},

{id:"cta-st-h05",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Model risiko sebuah portofolio mengasumsikan imbal hasil berdistribusi normal. Dalam praktik, kekeliruan yang paling berbahaya dari asumsi itu adalah...",
 options:["Potensi kerugian ekstrem diremehkan, tepat pada bagian distribusi yang menentukan kelangsungan portofolio","Volatilitas harian dihitung terlalu tinggi sehingga ukuran posisinya menjadi terlalu kecil","Korelasi antar aset dianggap tetap padahal berubah mengikuti kondisi pasar","Imbal hasil rata-rata dihitung terlalu rendah sehingga strateginya tampak kurang menarik"],
 answer:0,
 explain:"Kurva normal ngeremehin kejadian ekstrem, dan celakanya justru di situ modal orang abis. Kesalahannya bukan di tengah distribusi yang sehari-hari, tapi persis di EKOR yang nentuin lo bertahan atau nggak. Model bilang 'rugi 20% itu sekali seribu tahun', kenyataannya kejadian tiap lima tahun. Ini yang bikin LTCM kolaps padahal isinya peraih Nobel. Asumsi normalitas itu nyaman dipakai tapi bohong di bagian yang paling penting."},

{id:"cta-st-h06",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Nilai Hurst exponent sebuah instrumen terukur 0,38. Strategi yang paling sesuai dengan karakter tersebut adalah...",
 options:["Arbitrase antar instrumen, karena nilai itu menandakan tidak ada keunggulan arah","Mean reversion, karena nilai di bawah 0,5 menandakan kecenderungan berbalik arah","Mengikuti tren, karena nilai di bawah 0,5 menandakan pergerakan yang persisten","Membeli dan menahan, karena nilai itu menandakan pergerakan sepenuhnya acak"],
 answer:1,
 explain:"Hurst 0,38 itu di bawah 0,5, artinya deretnya cenderung BALIK ARAH alias mean reverting. Habis naik condong turun, habis turun condong naik. Strategi yang cocok: beli pas lagi jatuh, jual pas lagi naik, di dalam range. Yang bakal nyiksa lo di instrumen kayak gini: strategi breakout dan trend following, karena tiap kali nembus malah balik lagi. Tes karakternya dulu, baru pilih senjatanya."},

/* ===== cta-elliott ===== */
{id:"cta-ew-h01",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Sebuah penghitungan menempatkan gelombang 4 berakhir di 1.180, sementara puncak gelombang 1 berada di 1.210. Apa yang harus dilakukan analis?",
 options:["Menggeser label gelombang 4 ke titik terendah berikutnya agar aturannya terpenuhi","Mengubah derajat gelombangnya agar tumpang tindih tersebut menjadi tidak relevan","Membatalkan penghitungan itu, karena gelombang 4 memasuki wilayah harga gelombang 1","Mempertahankannya, karena tumpang tindih sebesar itu masih dalam toleransi wajar"],
 answer:2,
 explain:"Aturan mutlak Elliott: gelombang 4 NGGAK BOLEH masuk wilayah harga gelombang 1. Gelombang 4 berakhir di 1.180 sementara puncak gelombang 1 di 1.210? Berarti dia nerobos masuk. Hitungan ini batal, titik. Bukan pengecualian, bukan 'toleransi dikit'. Yang biasanya kejadian: itu sebenernya pola diagonal (yang emang boleh tumpang tindih), atau struktur korektif yang kebaca sebagai impuls. Ulang hitungannya dari awal."},

{id:"cta-ew-h02",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Gelombang 1 naik 300 poin, gelombang 2 retrace 60 persen, dan gelombang 3 diperkirakan 161,8 persen dari gelombang 1. Bila gelombang 1 bermula dari 1.000, di mana kira-kira target gelombang 3 berakhir?",
 options:["Sekitar 1.485","Sekitar 1.785","Sekitar 1.300","Sekitar 1.605"],
 answer:3,
 explain:"Itung pelan-pelan. Gelombang 1: 1.000 naik 300 poin, berakhir di 1.300. Gelombang 2 retrace 60% dari 300 = 180 poin, jadi turun ke 1.120. Gelombang 3 = 161,8% x 300 = 485 poin, dihitung dari AWAL gelombang 3 yaitu 1.120. Jadi 1.120 + 485 = sekitar 1.605. Yang paling sering salah: ngitung gelombang 3 dari puncak gelombang 1, bukan dari akhir gelombang 2. Ingat, gelombang 3 mulainya dari lembah gelombang 2."},

{id:"cta-ew-h03",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Analis mengamati gelombang 2 berbentuk zigzag tajam. Berdasarkan pedoman alternation, bentuk apa yang paling mungkin diambil gelombang 4, dan mengapa itu berguna?",
 options:["Mendatar atau segitiga, sehingga analis dapat mengantisipasi koreksi yang lebih lama namun lebih dangkal","Zigzag tajam juga, sehingga kedalaman koreksinya dapat diperkirakan setara gelombang 2","Impulse lima gelombang, sehingga strukturnya dapat dihitung sebagai derajat lebih kecil","Segitiga melebar, sehingga volatilitasnya dapat diperkirakan meningkat tajam"],
 answer:0,
 explain:"Pedoman alternation: dua koreksi dalam satu impuls biasanya beda watak. Gelombang 2 tajam dan dalem (zigzag) biasanya diikutin gelombang 4 yang mendatar atau segitiga — lebih lama tapi lebih dangkal. Gunanya konkret banget: lo bisa siap-siap mental, karena gelombang 4 bakal ngebosenin berminggu-minggu. Yang nggak tau ini biasanya keluar pas bosen, tepat sebelum gelombang 5 mulai."},

{id:"cta-ew-h04",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Harga mencetak puncak baru pada gelombang 5, tetapi volumenya jauh lebih kecil daripada gelombang 3 dan momentumnya melemah. Bagaimana analis sebaiknya menyikapi kombinasi ini?",
 options:["Mengabaikannya, karena volume tidak relevan dalam kerangka Elliott Wave","Memperlakukannya sebagai tanda siklus mendekati akhir, dan mengencangkan pengendalian risiko","Menambah posisi, karena puncak baru mengonfirmasi tren yang masih berlangsung","Membalik posisi menjadi jual, karena divergensi volume memastikan pembalikan"],
 answer:1,
 explain:"Puncak baru tapi volumenya jauh lebih kecil dari gelombang 3 plus momentum melemah? Itu paket lengkap ciri gelombang 5 yang kehabisan napas. Logikanya: gelombang 3 didorong pengakuan luas, gelombang 5 cuma didorong sisa optimis. Sikapnya bukan langsung jual semua, tapi ngencengin pengendalian risiko: naikin trailing stop, kurangin ukuran, jangan nambah posisi. Biarin harga yang mutusin, tapi jangan sampai lo kaget."},

{id:"cta-ew-h05",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Dua analis menghasilkan penghitungan gelombang yang berbeda pada grafik yang sama, dan keduanya tidak melanggar aturan mutlak. Cara paling profesional menyikapi situasi ini adalah...",
 options:["Menunggu sampai struktur selesai terbentuk sebelum menerbitkan analisis apa pun","Menggabungkan kedua penghitungan menjadi satu skenario kompromi di tengah keduanya","Menyajikan keduanya sebagai skenario utama dan alternatif, masing-masing dengan level pembatalannya","Memilih penghitungan yang paling sesuai dengan pandangan fundamental atas instrumen itu"],
 answer:2,
 explain:"Hitungan alternatif itu bawaan metodenya, bukan tanda salah satu analis bego. Cara paling profesional: sajiin DUA-DUANYA sebagai skenario utama dan alternatif, masing-masing lengkap sama level pembatalannya. Jadi pembaca tau kapan skenario A mati dan skenario B yang jalan. Yang nggak profesional: maksa satu hitungan tanpa nyebut kapan dia salah, atau diem-diem ganti hitungan setelah harga gerak. Dua-duanya bikin lo nggak bisa dinilai."},

{id:"cta-ew-h06",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Gelombang B pada sebuah koreksi melampaui titik awal gelombang A, lalu gelombang C turun lebih dalam daripada akhir gelombang A. Mengapa struktur ini sering menjebak pelaku pasar?",
 options:["Gelombang C yang lebih dalam tampak seperti tren turun baru, padahal hanya bagian dari koreksi","Struktur ini melanggar aturan mutlak sehingga penghitungannya pasti keliru sejak awal","Gelombang A dan B memiliki panjang sama sehingga arah selanjutnya tidak dapat ditentukan","Gelombang B yang mencetak puncak baru tampak seperti kelanjutan tren naik, padahal koreksi belum selesai"],
 answer:3,
 explain:"Ini pola flat yang expanded, dan jebakannya kejam. Gelombang B naik ngelewatin titik awal gelombang A, bikin puncak BARU. Semua orang ngira tren naik lanjut, rame masuk. Padahal itu masih bagian dari koreksi. Terus gelombang C turun lebih dalem dari akhir gelombang A, dan yang baru masuk tadi nyangkut di pucuk. Pelajarannya: puncak baru nggak otomatis berarti tren berlanjut. Cek strukturnya dulu."}
]);
