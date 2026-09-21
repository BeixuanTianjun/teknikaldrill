/* Soal HOTS batch 3 — cta-sistem, cta-breadth, cta-aset, rta-plan */
TD.register([
/* ===== cta-sistem ===== */
{id:"cta-sis-h01",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem menghasilkan profit factor 1,8 pada data 2018 sampai 2022, lalu 1,75 pada data 2023 sampai 2024 yang disisihkan sejak awal. Bagaimana hasil ini sebaiknya dinilai?",
 options:["Belum bermakna, karena dua tahun terlalu pendek untuk pengujian di luar sampel","Mencurigakan, karena hasil yang terlalu mirip menandakan datanya bocor antar periode","Menggembirakan, karena kinerja di luar sampel nyaris setara menandakan keunggulannya kokoh","Mengkhawatirkan, karena penurunan profit factor menandakan sistemnya mulai rusak"],
 answer:2,
 explain:"Yang dicari dari pengujian di luar sampel bukan angka yang lebih tinggi, melainkan angka yang tidak runtuh. Selisih 1,8 menjadi 1,75 tergolong sangat kecil dan menandakan sistem tidak sekadar menghafal data pengembangannya. Bandingkan dengan pola khas overfitting: profit factor 4 pada data uji lalu jatuh di bawah 1 begitu bertemu data baru."},

{id:"cta-sis-h02",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem menghasilkan sinyal dari penutupan harian dan mengeksekusi pada penutupan hari yang sama. Cacat apa yang terkandung, dan seberapa serius dampaknya?",
 options:["Slippage yang diremehkan, karena eksekusi pada penutupan biasanya memperoleh harga lebih buruk","Survivorship bias, karena hanya emiten yang bertahan sampai akhir periode ikut terhitung","Data snooping, karena penutupan harian dipakai berulang untuk banyak pengujian","Look ahead bias, karena harga penutupan baru diketahui setelah sesi berakhir sehingga eksekusinya mustahil"],
 answer:3,
 explain:"Harga penutupan baru diketahui setelah sesi selesai, sehingga order yang dipicu olehnya paling cepat dieksekusi pada pembukaan berikutnya. Kesalahan ini tampak sepele tetapi dampaknya besar: sistem seolah membeli tepat di titik terendah hari itu. Cara memeriksanya sederhana, geser eksekusi ke pembukaan berikutnya dan lihat berapa banyak keunggulan yang tersisa."},

{id:"cta-sis-h03",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Hasil optimasi menunjukkan periode 23 memberi imbal hasil jauh tertinggi, sementara periode 20 sampai 26 lainnya menghasilkan kinerja biasa saja. Bagaimana temuan ini dibaca?",
 options:["Puncak tunggal yang terisolasi menandakan hasilnya kebetulan, bukan keunggulan yang kokoh","Periode 23 adalah parameter optimal yang layak dipakai karena hasilnya paling tinggi","Rentang 20 sampai 26 perlu diuji ulang dengan data yang lebih panjang","Perbedaan sebesar itu menandakan periode di sekitarnya salah dihitung"],
 answer:0,
 explain:"Parameter yang kokoh membentuk dataran, bukan menara. Bila 23 unggul jauh sementara 22 dan 24 biasa saja, artinya hasilnya bergantung pada kebetulan susunan data, bukan pada logika yang bekerja. Praktik yang sehat justru memilih nilai di tengah dataran yang landai, meski angkanya bukan yang tertinggi pada pengujian."},

{id:"cta-sis-h04",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Simulasi Monte Carlo atas 300 transaksi sebuah sistem menunjukkan maximum drawdown historis 12 persen, tetapi persentil ke-95 dari hasil acakannya mencapai 27 persen. Apa makna praktis temuan itu?",
 options:["Drawdown historis lebih dapat dipercaya karena berasal dari data pasar yang nyata","Drawdown 12 persen kebetulan berasal dari urutan yang menguntungkan; siapkan diri untuk sekitar 27 persen","Sistem itu cacat karena drawdown simulasinya jauh melampaui yang pernah terjadi","Simulasi tersebut tidak valid karena mengacak urutan transaksi yang sebenarnya berurutan"],
 answer:1,
 explain:"Urutan transaksi yang benar-benar terjadi hanyalah satu dari sekian banyak susunan yang mungkin. Bila kerugian kebetulan tersebar, drawdown terlihat dangkal; bila mengelompok, dalam. Monte Carlo menunjukkan seberapa buruk keadaan bisa jadi tanpa mengubah keunggulan sistemnya. Pengelola yang menyiapkan modal dan mental untuk 12 persen akan berhenti tepat saat sistemnya sebenarnya masih bekerja normal."},

{id:"cta-sis-h05",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem mean reversion menghasilkan 47 keuntungan kecil berturut-turut lalu satu kerugian yang menghapus seluruhnya. Karakter risiko seperti ini paling tepat digambarkan sebagai...",
 options:["Overfitting, karena rangkaian kemenangan panjang menandakan parameter terlalu dicocokkan","Risk of ruin rendah, karena tingkat keberhasilannya mendekati sempurna","Skewness negatif, dengan risiko sesungguhnya tersembunyi di ekor kiri distribusinya","Volatilitas tinggi, karena hasil satu transaksi jauh melampaui rata-ratanya"],
 answer:2,
 explain:"Kurva ekuitas yang menanjak mulus dengan tingkat keberhasilan hampir sempurna adalah ciri khas strategi berskewness negatif, seperti menjual opsi atau mean reversion tanpa stop. Risikonya tidak hilang, hanya terkumpul di satu titik yang belum datang. Tingkat keberhasilan tinggi justru berbahaya karena membangun keyakinan berlebih tepat sebelum kerugian besar tiba."},

{id:"cta-sis-h06",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem menunjukkan Sharpe ratio 2,1 sementara sistem lain 1,4, tetapi sistem kedua memiliki Sortino ratio jauh lebih tinggi. Apa yang paling mungkin membedakan keduanya?",
 options:["Sistem kedua memiliki drawdown lebih dangkal sehingga rasionya ikut membaik","Sistem pertama menghasilkan lebih banyak transaksi sehingga volatilitasnya terdilusi","Kedua rasio itu tidak dapat dibandingkan karena memakai satuan yang berbeda","Sistem kedua volatilitasnya terkonsentrasi pada pergerakan naik, yang tidak dihukum Sortino"],
 answer:3,
 explain:"Sharpe menghukum seluruh volatilitas, termasuk lonjakan yang menguntungkan. Sortino hanya menghitung simpangan ke bawah. Sistem yang sesekali melonjak naik tajam akan tampak buruk menurut Sharpe padahal lonjakan itu justru yang diinginkan. Inilah alasan strategi trend following sering tampak lemah pada Sharpe dan jauh lebih baik pada Sortino."},

{id:"cta-sis-h07",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem berfrekuensi tinggi menghasilkan rata-rata keuntungan 0,4 persen per transaksi sebelum biaya, dengan 600 transaksi per tahun. Biaya sekali jalan 0,15 persen. Apa kesimpulan paling tepat?",
 options:["Biaya pulang pergi 0,3 persen menyisakan 0,1 persen, sehingga keunggulannya nyaris habis","Keuntungan bersih 0,25 persen per transaksi masih memadai untuk 600 transaksi setahun","Biaya tidak relevan karena dihitung dari nilai transaksi, bukan dari keuntungannya","Frekuensi tinggi justru menguntungkan karena biaya per transaksi menjadi lebih kecil"],
 answer:0,
 explain:"Biaya dikenakan saat masuk dan saat keluar, sehingga 0,15 persen menjadi 0,3 persen pulang pergi. Dari keunggulan kotor 0,4 persen hanya tersisa 0,1 persen, dan itu belum memperhitungkan slippage. Inilah sebabnya sistem berfrekuensi tinggi paling rentan: keunggulan tipisnya dikalikan ratusan kali biaya, dan banyak sistem yang tampak menguntungkan di atas kertas sebenarnya merugi sejak transaksi pertama."},

{id:"cta-sis-h08",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem mulai dijalankan dengan dana nyata dan langsung mengalami delapan kerugian berturut-turut, padahal pada pengujian rangkaian terburuknya hanya lima. Apa langkah paling tepat?",
 options:["Mengoptimalkan ulang parameternya memakai data terbaru agar kembali sesuai kondisi pasar","Memeriksa apakah delapan kerugian masih berada dalam sebaran wajar sistemnya sebelum menyimpulkan","Menghentikan sistem segera karena kinerjanya sudah melampaui rangkaian terburuk historis","Menggandakan ukuran posisi karena kerugian beruntun biasanya diikuti kemenangan"],
 answer:1,
 explain:"Rangkaian terburuk pada data historis bukanlah batas maksimum, melainkan sekadar yang kebetulan terjadi. Dengan win rate 45 persen, delapan kerugian beruntun bukan hal luar biasa secara statistik dan bisa dihitung peluangnya. Karena itu ambang penghentian sebaiknya ditetapkan dari simulasi sebaran, bukan dari rekor historis, dan ditetapkan sebelum sistem dijalankan."},

/* ===== cta-breadth ===== */
{id:"cta-br-h01",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Indeks turun 3 persen tetapi jumlah saham yang naik melebihi yang turun pada sesi itu. Apa yang paling mungkin sedang terjadi?",
 options:["Mayoritas saham naik tipis sementara sisanya turun sangat dalam secara merata","Indeks sedang mengalami penyesuaian komposisi sehingga angkanya tidak sebanding","Penurunan indeks didorong beberapa emiten berbobot besar, sementara pasar luas justru menguat","Data breadth tertinggal satu sesi dari perhitungan indeks komposit"],
 answer:2,
 explain:"Pada indeks berbobot kapitalisasi, penurunan tajam beberapa emiten raksasa dapat menyeret angka indeks meski mayoritas saham menguat. Sesi seperti ini justru sering menandakan pasar lebih sehat daripada yang terbaca di judul berita. Breadth menjawab pertanyaan yang tidak bisa dijawab indeks: berapa banyak saham yang sebenarnya ikut bergerak."},

{id:"cta-br-h02",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Put call ratio berada pada level tertinggi dalam tiga tahun. Seorang analis langsung membeli besar-besaran dengan alasan contrarian. Kelemahan utama keputusan itu adalah...",
 options:["Put call ratio tinggi sebenarnya menandakan optimisme, bukan kepanikan pelaku pasar","Data opsi tidak mewakili pasar saham sehingga tidak relevan bagi keputusan itu","Contrarian hanya berlaku pada indikator breadth, tidak pada indikator sentimen","Sentimen ekstrem dapat bertahan lama, sehingga tidak dapat dipakai menentukan waktu masuk"],
 answer:3,
 explain:"Indikator sentimen memberi tahu seberapa jauh ayunan emosi sudah berjalan, bukan kapan ayunan itu berbalik. Pasar dapat tetap panik berpekan-pekan sementara harga terus turun. Cara memakainya yang benar adalah menyesuaikan besar eksposur dan kesiapan menambah posisi, sedangkan pemicu masuk tetap menunggu konfirmasi dari aksi harga."},

{id:"cta-br-h03",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Harga komoditas energi menguat tajam, imbal hasil obligasi naik, dan sektor perbankan tertinggal. Seorang analis menyimpulkan lingkungan inflasioner. Bukti tambahan apa yang paling menguatkan kesimpulan itu?",
 options:["Melemahnya mata uang domestik terhadap dolar pada periode yang sama","Meningkatnya volume perdagangan pada bursa saham secara keseluruhan","Menyempitnya spread imbal hasil antara tenor 10 tahun dan tenor 2 tahun","Naiknya rasio harga terhadap laba rata-rata emiten di indeks komposit"],
 answer:0,
 explain:"Pelemahan mata uang menambah tekanan harga lewat biaya impor, sehingga melengkapi gambaran inflasi yang sudah ditunjukkan komoditas dan imbal hasil. Menyempitnya spread antar tenor justru menunjukkan hal sebaliknya, yaitu perlambatan. Inilah nilai analisis intermarket: kesimpulan diuji dengan mencari bukti dari pasar lain, bukan dari satu pasar saja."},

{id:"cta-br-h04",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Selama enam bulan, sektor energi konsisten mengungguli indeks sementara sektor konsumsi primer tertinggal. Apa yang paling mungkin ditunjukkan rotasi ini tentang fase siklusnya?",
 options:["Rotasi sektor tidak membawa informasi apa pun tentang fase siklus ekonomi","Pasar memperkirakan tekanan inflasi berlanjut, sehingga sektor berbasis komoditas dicari","Pasar memasuki fase akhir ekspansi, ketika sektor defensif biasanya memimpin","Pasar berada di awal pemulihan, ketika sektor siklikal keuangan biasanya memimpin"],
 answer:1,
 explain:"Konsumsi primer adalah sektor defensif yang dicari saat pelaku pasar mencari perlindungan; tertinggalnya sektor ini menandakan selera risiko belum padam. Kepemimpinan energi mengarah pada ekspektasi inflasi yang bertahan. Rotasi sektor adalah cara pasar memberi suara tentang fase siklus, jauh sebelum data ekonomi resmi dirilis."},

{id:"cta-br-h05",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Advance decline line mencetak tertinggi baru sementara indeks komposit masih tertinggal di bawah puncak sebelumnya. Bagaimana kondisi ini dibaca?",
 options:["Kesalahan perhitungan, karena AD Line tidak mungkin melampaui indeksnya","Indeks akan tetap tertinggal karena emiten besarnya sedang mengalami tekanan","Pasar luas sedang menguat lebih dulu, yang umumnya merupakan tanda positif bagi indeks","Divergensi bearish, karena breadth seharusnya mengikuti indeks bukan mendahuluinya"],
 answer:2,
 explain:"Ini kebalikan dari divergensi bearish yang lebih sering dibahas. Ketika mayoritas saham sudah menguat sementara indeks tertahan segelintir emiten besar, fondasi pasar sebenarnya sedang membaik. Divergensi positif seperti ini kerap mendahului penembusan indeks, dan mengingatkan bahwa breadth bukan sekadar alat peringatan, tetapi juga alat konfirmasi."},

{id:"cta-br-h06",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Mengapa divergensi breadth lebih berguna bagi pengelola portofolio daripada bagi trader jangka pendek?",
 options:["Perhitungannya hanya tersedia pada data mingguan sehingga tidak relevan untuk jangka pendek","Divergensi breadth hanya berlaku pada portofolio yang terdiversifikasi luas","Trader jangka pendek tidak memiliki akses terhadap data advance decline harian","Peringatannya muncul jauh sebelum titik balik, cocok untuk mengatur eksposur bertahap"],
 answer:3,
 explain:"Divergensi breadth bisa berjalan berbulan-bulan sebelum pasar benar-benar berbalik, sehingga trader yang memakainya sebagai pemicu masuk keluar akan salah waktu berkali-kali. Bagi pengelola portofolio, jeda panjang itu justru berguna: cukup waktu untuk menurunkan eksposur secara bertahap tanpa harus menebak tanggal puncaknya."},

/* ===== cta-aset ===== */
{id:"cta-as-h01",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Seorang pemegang posisi beli komoditas mengalami kerugian selama setahun meski harga spot komoditas itu naik 5 persen. Penjelasan paling mungkin adalah...",
 options:["Struktur contango membuat setiap rollover kontrak menggerus hasil posisinya","Harga spot dan harga kontrak berjangka bergerak berlawanan arah sepanjang tahun","Biaya penyimpanan komoditas dibebankan langsung kepada pemegang kontrak berjangka","Kontrak berjangka tidak mengikuti harga spot sehingga keduanya tidak sebanding"],
 answer:0,
 explain:"Pemegang posisi beli pada pasar contango menjual kontrak murah lalu membeli kontrak yang lebih mahal setiap rollover. Bila selisihnya 2 persen dan rollover terjadi enam kali setahun, 12 persen tergerus, cukup untuk menenggelamkan kenaikan spot 5 persen. Inilah alasan kinerja produk komoditas berbasis kontrak berjangka sering jauh tertinggal dari harga komoditas yang diiklankannya."},

{id:"cta-as-h02",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Imbal hasil obligasi tenor 2 tahun naik lebih cepat daripada tenor 10 tahun, sehingga selisihnya menyempit mendekati nol. Apa yang sedang dikatakan pasar obligasi?",
 options:["Pemerintah sedang memperbanyak penerbitan obligasi bertenor panjang","Pasar memperkirakan pengetatan moneter jangka pendek yang berujung perlambatan pertumbuhan","Pasar memperkirakan inflasi jangka panjang melonjak jauh melampaui jangka pendek","Likuiditas pasar obligasi sedang mengering sehingga harganya tidak mencerminkan ekspektasi"],
 answer:1,
 explain:"Tenor pendek paling peka terhadap kebijakan suku bunga, sedangkan tenor panjang mencerminkan ekspektasi pertumbuhan dan inflasi jangka jauh. Ketika ujung pendek naik lebih cepat, pasar sedang mengatakan bunga akan diketatkan sekarang tetapi ekonomi akan melambat kemudian. Kurva yang datar lalu terbalik secara historis mendahului resesi, meski jedanya bisa lebih dari setahun."},

{id:"cta-as-h03",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Seorang analis membeli opsi call menjelang pengumuman laba karena yakin harga akan naik. Harga memang naik 6 persen, tetapi nilai opsinya justru turun. Penyebab paling mungkin adalah...",
 options:["Opsi call tidak diuntungkan oleh kenaikan harga bila kenaikannya terjadi mendadak","Bursa membekukan perdagangan opsi selama periode pengumuman laba berlangsung","Volatilitas tersirat anjlok setelah pengumuman, menggerus premi meski arahnya benar","Harga aset dasar belum melampaui strike sehingga opsinya tidak memiliki nilai"],
 answer:2,
 explain:"Inilah volatility crush. Sebelum pengumuman, ketidakpastian mendorong volatilitas tersirat tinggi sehingga premi mahal. Begitu pengumuman lewat, ketidakpastian hilang dan volatilitas tersirat anjlok, menekan nilai opsi meski arah harga benar. Pembeli opsi menjelang peristiwa membayar mahal untuk pergerakan yang sudah dihargai pasar, dan harus melampaui ekspektasi itu sekadar untuk impas."},

{id:"cta-as-h04",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Indeks saham sebuah negara berkembang naik 12 persen dalam setahun, tetapi investor asing yang memegangnya justru merugi. Apa yang paling mungkin terjadi?",
 options:["Dividen yang diterima dipotong pajak sehingga imbal hasil totalnya menjadi negatif","Biaya kustodian dan transaksi lintas negara melampaui kenaikan indeksnya","Indeks tersebut tidak mencakup seluruh saham sehingga tidak mewakili portofolio investor","Mata uang negara itu melemah lebih dari 12 persen terhadap mata uang asal investor"],
 answer:3,
 explain:"Imbal hasil investor asing adalah kinerja aset dikurangi pergerakan kurs. Indeks naik 12 persen dalam rupiah menjadi kerugian bila rupiah melemah lebih dari itu terhadap dolar. Inilah alasan sebagian analis menggrafikkan indeks dalam denominasi dolar, yang kerap memperlihatkan gambaran jauh berbeda dari grafik dalam mata uang lokal."},

{id:"cta-as-h05",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Data Commitment of Traders menunjukkan large speculator berada pada posisi beli bersih terbesar dalam lima tahun. Bagaimana informasi ini sebaiknya ditafsirkan?",
 options:["Sebagai peringatan contrarian, karena posisi ekstrem menyisakan sedikit pembeli baru","Sebagai konfirmasi tren naik, karena spekulan besar biasanya lebih tepat membaca arah","Sebagai indikasi bahwa commercial hedger sedang mengurangi aktivitas lindung nilainya","Sebagai tanda likuiditas pasar berjangka sedang berada pada level tertinggi"],
 answer:0,
 explain:"Spekulan besar cenderung mengikuti tren dan posisinya paling berat justru di dekat titik balik, ketika hampir semua yang berniat membeli sudah membeli. Commercial, yang bertransaksi untuk lindung nilai, biasanya berada di sisi berlawanan. Seperti indikator sentimen lain, ini alat menakar kerapuhan, bukan penentu waktu."},

{id:"cta-as-h06",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Sebuah aset kripto menunjukkan pola teknikal yang sama rapinya dengan saham, tetapi stop loss dengan jarak identik jauh lebih sering tersentuh. Apa akar penyebabnya?",
 options:["Likuiditas kripto lebih besar sehingga harga bergerak lebih cepat menembus level","Volatilitasnya jauh lebih tinggi, sehingga jarak yang sama mewakili pergerakan yang jauh lebih kecil","Pola teknikal tidak berlaku pada aset kripto sehingga sinyalnya acak","Perdagangan 24 jam membuat order stop loss tidak dapat dieksekusi dengan benar"],
 answer:1,
 explain:"Stop sebesar 3 persen pada saham yang bergerak rata-rata 1,5 persen sehari adalah ruang yang lapang; pada aset yang bergerak 8 persen sehari, itu sekadar kebisingan. Jarak stop harus dinyatakan relatif terhadap volatilitas, misalnya kelipatan ATR, bukan dalam persentase tetap. Pengendalian risikonya lalu dipindahkan ke ukuran posisi, bukan ke stop yang dirapatkan."},

/* ===== rta-plan ===== */
{id:"rta-plan-h01",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Modal Rp500 juta dengan risiko 2 persen per transaksi. Harga masuk Rp1.250, stop Rp1.150. Berapa jumlah lembar maksimum yang boleh dibeli?",
 options:["125.000 lembar","50.000 lembar","100.000 lembar","80.000 lembar"],
 answer:2,
 explain:"Risiko rupiah yang diizinkan adalah 2 persen dari Rp500 juta, yaitu Rp10 juta. Risiko per lembar adalah Rp1.250 dikurangi Rp1.150 sama dengan Rp100. Rp10 juta dibagi Rp100 menghasilkan 100.000 lembar, bernilai Rp125 juta atau seperempat modal. Perhatikan bahwa nilai posisi bisa jauh lebih besar dari risikonya, dan itu yang sering dikira sama oleh pemula."},

{id:"rta-plan-h02",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Sebuah sistem memiliki win rate 35 persen dengan rata-rata untung 3R dan rata-rata rugi 1R. Berapa expectancy-nya, dan apa artinya bagi 100 transaksi berikutnya?",
 options:["1,05R, sehingga 100 transaksi diharapkan menghasilkan sekitar 105R","0,35R, sehingga 100 transaksi diharapkan menghasilkan sekitar 35R","Negatif, karena tingkat keberhasilannya berada di bawah 50 persen","0,05R, sehingga 100 transaksi hanya diharapkan menghasilkan sekitar 5R"],
 answer:3,
 explain:"Expectancy sama dengan 0,35 dikali 3R dikurangi 0,65 dikali 1R, yaitu 1,05R dikurangi 0,65R sama dengan 0,4R. Perhitungan ini menunjukkan sistem dengan win rate 35 persen tetap menguntungkan. Pelajaran pentingnya: tingkat keberhasilan sendirian tidak pernah cukup menilai sebuah sistem, dan banyak trader membuang sistem yang sebenarnya unggul karena terlalu sering merasa salah."},

{id:"rta-plan-h03",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Seorang trader memegang lima posisi, masing-masing berisiko 2 persen ekuitas, pada lima saham properti. Mengapa total risikonya tidak tepat dinyatakan 10 persen yang tersebar?",
 options:["Korelasi tinggi antar saham sesektor membuat kelimanya berpeluang menyentuh stop bersamaan","Total risiko seharusnya dijumlahkan secara kuadrat, bukan secara langsung","Risiko per posisi berkurang seiring bertambahnya jumlah posisi dalam portofolio","Stop loss pada lima posisi tidak mungkin tereksekusi seluruhnya pada hari yang sama"],
 answer:0,
 explain:"Batas risiko per posisi hanya bermakna bila posisi bergerak independen. Pada satu sektor, guncangan yang sama menyentuh kelimanya hampir bersamaan, sehingga yang sebenarnya ditanggung adalah satu taruhan 10 persen. Itulah alasan batas risiko perlu ditetapkan juga di level portofolio dan per sektor, bukan hanya per transaksi."},

{id:"rta-plan-h04",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Portofolio turun 40 persen dari puncaknya. Berapa kenaikan yang dibutuhkan untuk kembali ke titik semula, dan apa implikasinya bagi pengaturan risiko?",
 options:["Sekitar 80 persen, sehingga portofolio praktis tidak mungkin pulih kembali","Sekitar 67 persen, sehingga mencegah drawdown dalam jauh lebih bernilai daripada mengejar imbal hasil","Sekitar 40 persen, sehingga pemulihannya sebanding dengan besarnya penurunan","Sekitar 50 persen, sehingga pemulihannya masih tergolong wajar bagi strategi aktif"],
 answer:1,
 explain:"Modal 100 yang turun 40 persen menjadi 60, dan untuk kembali ke 100 dibutuhkan kenaikan 40 poin dari basis 60, yaitu 66,7 persen. Asimetri ini makin ganas seiring dalamnya drawdown: turun 50 persen butuh naik 100 persen, turun 70 persen butuh naik 233 persen. Karena itu pengendalian kerugian bukan sikap konservatif, melainkan matematika bertahan hidup."},

{id:"rta-plan-h05",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Seorang trader memperlebar stop loss saat harga mendekatinya, dengan alasan level teknikalnya ternyata sedikit lebih jauh. Mengapa kebiasaan ini berbahaya meski kadang terbukti benar?",
 options:["Level teknikal tidak boleh diubah setelah posisi dibuka karena melanggar aturan bursa","Memperlebar stop membuat rasio risiko imbal hasilnya otomatis menjadi negatif","Batas kerugian menjadi tidak pernah pasti, sehingga ukuran posisi kehilangan dasar perhitungannya","Stop yang diperlebar selalu tersentuh juga pada akhirnya sehingga kerugiannya lebih besar"],
 answer:2,
 explain:"Seluruh perhitungan ukuran posisi bersandar pada asumsi jarak stop tertentu. Begitu stop dapat digeser menjauh, risiko sebenarnya menjadi tidak terbatas dan angka 1 persen yang direncanakan kehilangan makna. Yang lebih merusak adalah efek psikologisnya: sekali aturan dilanggar dan hasilnya kebetulan baik, pelanggaran berikutnya menjadi jauh lebih mudah."},

{id:"rta-plan-h06",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Harga masuk Rp2.000 dengan stop Rp1.900. Setelah harga mencapai Rp2.300, trader memindahkan stop ke Rp2.100. Bagaimana profil risiko posisi itu berubah?",
 options:["Risiko tetap sama karena dihitung dari harga masuk dan stop awal","Risiko bertambah karena jarak stop terhadap harga berjalan menjadi lebih jauh","Risiko tidak dapat dihitung lagi karena stop sudah tidak berada di level teknikal","Risiko menjadi negatif karena stop sudah berada di atas harga masuk, sehingga keuntungan minimum terkunci"],
 answer:3,
 explain:"Dengan stop di Rp2.100 dan harga masuk Rp2.000, skenario terburuk kini berupa keuntungan Rp100 per lembar, bukan kerugian. Posisi seperti ini sering disebut bebas risiko, meski istilah itu mengabaikan gap risk yang dapat melewati stop. Yang perlu ditimbang: stop yang terlalu cepat dinaikkan sering tersentuh oleh koreksi normal sebelum tren melanjutkan perjalanannya."}
]);
