/* Soal HOTS batch 4 — rta-trend, rta-level, rta-indikator, rta-riset, cta-portfolio, cta-candle */
TD.register([
/* ===== rta-trend ===== */
{id:"rta-trend-h01",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Harga menembus neckline head and shoulders dengan volume dua kali rata-rata, lalu tiga sesi kemudian kembali naik menutup di atas neckline. Bagaimana analis sebaiknya menyikapinya?",
 options:["Memperlakukan pola itu gagal dan keluar, karena penembusan yang dibatalkan sering berbalik tajam","Menahan posisi jual karena volume penembusan sudah mengonfirmasi polanya","Menambah posisi jual karena harga kembali ke level yang lebih menguntungkan","Mengabaikannya karena tiga sesi terlalu singkat untuk membatalkan sebuah pola"],
 answer:0,
 explain:"Pola yang gagal adalah informasi, bukan gangguan. Ketika penembusan yang tampak meyakinkan dibatalkan, banyak pelaku yang masuk searah penembusan terjebak dan harus menutup posisi, sehingga pergerakan ke arah berlawanan sering justru lebih cepat. Aturan praktisnya: penembusan yang dibatalkan lebih dipercaya daripada penembusan itu sendiri."},

{id:"rta-trend-h02",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Sebuah segitiga simetris terbentuk selama enam bulan, dan harga merayap sampai hampir menyentuh apex sebelum akhirnya menembus. Mengapa penembusan itu kurang dapat diandalkan?",
 options:["Energi pola sudah habis terpakai oleh konsolidasi yang terlalu panjang","Segitiga simetris memang tidak pernah menghasilkan penembusan yang bertahan","Penembusan di apex selalu berarah berlawanan dari yang ditunjukkan pola","Volume pada apex terlalu tinggi sehingga sinyalnya menjadi tidak sah"],
 answer:0,
 explain:"Segitiga bekerja karena kompresi menciptakan ketegangan yang akhirnya dilepaskan. Bila harga merayap sampai apex, pelepasan itu terjadi bertahap sepanjang pola sehingga tidak tersisa tenaga untuk pergerakan besar. Karena itu penembusan paling andal terjadi di setengah sampai tiga perempat panjang pola, bukan di ujungnya."},

{id:"rta-trend-h03",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Puncak head and shoulders berada di 2.400 dan neckline di 2.100. Harga menembus neckline lalu berhenti di 1.950, tepat di atas support historis kuat di 1.930. Apa yang paling tepat dilakukan?",
 options:["Merealisasikan sebagian, karena support historis sering lebih menentukan daripada target pola","Menahan seluruh posisi sampai target proyeksi 1.800 tercapai sepenuhnya","Menambah posisi jual karena target pola belum tercapai sehingga penurunan berlanjut","Membatalkan skenario karena harga berhenti sebelum mencapai target proyeksinya"],
 answer:0,
 explain:"Target pola adalah proyeksi minimum, bukan janji, dan selalu harus diuji terhadap level historis di jalurnya. Support kuat di 1.930 menyimpan permintaan nyata, sementara 1.800 hanyalah hasil pengukuran geometris. Analis berpengalaman merealisasikan sebagian di level yang punya alasan pasar, lalu membiarkan sisanya berjalan dengan trailing stop."},

{id:"rta-trend-h04",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Selama tren naik, garis tren pertama ditembus, lalu garis kedua yang lebih landai juga ditembus, dan kini garis ketiga sedang diuji. Menurut fan principle, apa maknanya?",
 options:["Penembusan garis ketiga umumnya menegaskan tren naik sebelumnya telah berakhir","Setiap penembusan garis tren adalah sinyal jual yang berdiri sendiri","Garis ketiga akan bertahan karena kemiringannya paling landai di antara ketiganya","Penarikan tiga garis tren menandakan analisisnya keliru sejak garis pertama"],
 answer:0,
 explain:"Fan principle memandang penembusan garis tren sebagai proses, bukan peristiwa tunggal. Setiap penembusan menandakan laju kenaikan melambat, dan analis menarik garis baru yang lebih landai. Ketika garis ketiga pun tertembus, pelambatan itu sudah berlangsung berulang kali dan tren umumnya dinyatakan berakhir."},

{id:"rta-trend-h05",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Dua pola terbentuk pada saham yang sama: bendera berdurasi dua pekan dan rectangle berdurasi delapan bulan. Keduanya menembus ke atas. Pergerakan mana yang secara umum berimplikasi lebih besar?",
 options:["Rectangle, karena basis yang lebih luas dan lama menyimpan energi yang lebih besar","Bendera, karena polanya terbentuk setelah pergerakan tajam yang bertenaga","Keduanya setara, karena besarnya pergerakan hanya ditentukan volume penembusan","Tidak dapat dibandingkan karena keduanya termasuk jenis pola yang berbeda"],
 answer:0,
 explain:"Dimensi pola mencerminkan lamanya tarik ulur antara pembeli dan penjual. Rectangle delapan bulan berarti pasokan dan permintaan bertukar posisi berulang kali pada rentang harga yang sama, sehingga begitu satu sisi menyerah pergerakannya besar. Bendera dua pekan hanyalah jeda pendek, dan targetnya pun sebatas panjang tiang benderanya."},

{id:"rta-trend-h06",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Harga membentuk higher high tetapi indikator momentum membentuk lower high, dan struktur harga masih utuh. Apa tindakan yang paling tepat?",
 options:["Memperketat pengendalian risiko tanpa membalik posisi, karena divergensi bukan sinyal jual","Menutup seluruh posisi karena divergensi memastikan tren akan segera berbalik","Membalik posisi menjadi jual untuk menangkap pembalikan sedini mungkin","Mengabaikannya sepenuhnya karena struktur harga masih menunjukkan tren naik"],
 answer:0,
 explain:"Divergensi mengukur melemahnya tenaga, bukan berbaliknya arah, dan bisa bertahan lama pada tren yang kuat. Menutup atau membalik posisi hanya karenanya berarti bertaruh melawan tren yang secara struktural masih hidup. Respons yang sepadan adalah mengencangkan trailing stop dan mengurangi ukuran, lalu menunggu struktur harga yang memutuskan."},

/* ===== rta-level ===== */
{id:"rta-level-h01",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham naik dari 800 ke 1.600 lalu terkoreksi. Pada level berapa retracement 38,2 persen dan 61,8 persen berada?",
 options:["1.294 dan 1.106","1.106 dan 1.294","1.200 dan 1.400","1.400 dan 1.200"],
 answer:0,
 explain:"Besar pergerakan adalah 800 poin. Retracement 38,2 persen setara 306 poin dari puncak, yaitu 1.600 dikurangi 306 sama dengan 1.294. Retracement 61,8 persen setara 494 poin, yaitu 1.600 dikurangi 494 sama dengan 1.106. Perhatikan bahwa persentase yang lebih besar menghasilkan level yang lebih rendah, hal yang sering tertukar saat mengerjakan cepat."},

{id:"rta-level-h02",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Level 4.500 bertepatan dengan retracement Fibonacci 61,8 persen, moving average 200 hari, dan lembah historis dua tahun lalu. Mengapa kombinasi ini lebih berbobot daripada ketiganya sendiri-sendiri?",
 options:["Tiga kelompok pelaku pasar berbeda mengawasi area yang sama, sehingga order menumpuk di sana","Tiga metode yang sepakat secara matematis membuktikan level itu pasti bertahan","Confluence menghilangkan subjektivitas sehingga levelnya menjadi objektif","Semakin banyak metode dipakai, semakin kecil kemungkinan analisisnya keliru"],
 answer:0,
 explain:"Level bekerja karena order menumpuk di sana, bukan karena kebenaran matematis. Pengguna Fibonacci, pengikut moving average, dan pengamat level historis adalah kelompok berbeda yang kebetulan tiba di harga yang sama, sehingga kedalaman ordernya berlipat. Perlu dicatat, level konfluen yang gagal bertahan justru sering diikuti pergerakan tajam karena banyak stop terkumpul di baliknya."},

{id:"rta-level-h03",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Kemarin high 2.400, low 2.200, close 2.350. Berapa pivot point hari ini, dan apa arti posisi close terhadap pivot itu?",
 options:["2.317, dan close di atas pivot menandakan bias intraday cenderung positif","2.300, dan close tepat di pivot menandakan pasar dalam keseimbangan","2.350, dan pivot selalu sama dengan harga penutupan sebelumnya","2.283, dan close di bawah pivot menandakan bias intraday cenderung negatif"],
 answer:0,
 explain:"Pivot point klasik adalah rata-rata high, low, dan close, yaitu 2.400 ditambah 2.200 ditambah 2.350 sama dengan 6.950, dibagi tiga menghasilkan 2.316,7. Karena penutupan 2.350 berada di atasnya, sesi sebelumnya ditutup dengan bias positif. Trader harian memakai pivot sebagai garis pemisah bias, bukan sebagai sinyal transaksi tersendiri."},

{id:"rta-level-h04",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Harga menembus support kuat di 1.500, turun ke 1.420, lalu naik kembali menguji 1.500 dari bawah dan tertahan di situ. Apa yang sedang terjadi dan apa peluangnya?",
 options:["Role reversal: bekas support kini menjadi resistance, memberi peluang jual dengan stop rapat di atasnya","False breakdown: harga akan kembali masuk ke rentang semula sehingga peluangnya membeli","Konsolidasi netral: level 1.500 kehilangan relevansi setelah tertembus sekali","Throwback normal: harga akan melanjutkan kenaikan melewati 1.500 dalam waktu dekat"],
 answer:0,
 explain:"Pihak yang membeli di 1.500 kini merugi dan cenderung melepas saat harga kembali ke titik impas, sementara yang menjual di sana merasa benar dan menambah. Kedua arus itu mengubah bekas support menjadi resistance. Nilai praktisnya besar: pengujian ulang memberi titik masuk dengan stop yang rapat, tepat di atas level tersebut."},

{id:"rta-level-h05",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Sebuah gap naik terbentuk di tengah tren yang sudah berjalan, dengan volume besar, dan harga bergerak dari 1.000 ke 1.200 sebelum gap tersebut. Bila ini measuring gap, di mana kira-kira target trennya?",
 options:["Sekitar 1.430, yaitu panjang kaki pertama diproyeksikan dari area gap","Sekitar 1.400, yaitu dua kali lipat dari harga awal pergerakan","Sekitar 1.240, yaitu panjang kaki pertama ditambah lebar gap itu sendiri","Tidak dapat diproyeksikan karena gap hanya menandai kelanjutan tren"],
 answer:0,
 explain:"Measuring gap secara empiris cenderung berada di sekitar titik tengah keseluruhan pergerakan. Kaki pertama sepanjang 200 poin diproyeksikan dari area gap yang berada sedikit di atas 1.230, menghasilkan target sekitar 1.430. Ini perkiraan kasar yang tetap perlu diuji terhadap resistance historis, dan menjadi salah kaprah bila gap itu ternyata exhaustion gap."},

/* ===== rta-indikator ===== */
{id:"rta-ind-h01",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"ADX berada di 15 sementara sistem persilangan moving average memberi sinyal beli. Apa yang sebaiknya dilakukan, dan mengapa?",
 options:["Menunda mengikuti sinyal, karena ADX rendah menandakan pasar tidak sedang trending","Mengikuti sinyal, karena persilangan MA adalah konfirmasi tren yang berdiri sendiri","Membalik sinyal menjadi jual, karena ADX rendah menandakan tren akan berbalik","Menambah periode moving average sampai ADX naik di atas 25"],
 answer:0,
 explain:"ADX mengukur kekuatan tren tanpa memandang arahnya, dan nilai di bawah 20 menandakan pasar bergerak menyamping. Justru pada kondisi inilah sistem persilangan MA paling banyak menghasilkan whipsaw, karena harga bolak-balik memotong rata-ratanya. Memakai ADX sebagai penyaring adalah cara klasik menekan kerugian beruntun sistem pengikut tren."},

{id:"rta-ind-h02",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Seorang analis memasang RSI, stochastic, dan Williams Percent R sekaligus, lalu merasa yakin karena ketiganya memberi sinyal sama. Mengapa keyakinan itu semu?",
 options:["Ketiganya mengukur momentum dari data yang sama, jadi kesepakatannya bukan konfirmasi independen","Ketiganya memakai periode berbeda sehingga sinyalnya tidak dapat dibandingkan langsung","Ketiganya hanya berlaku pada pasar sideways sehingga sinyalnya tidak sah saat trending","Ketiganya menghasilkan nilai dalam skala berbeda sehingga tidak dapat dijumlahkan"],
 answer:0,
 explain:"Inilah multicollinearity. Tiga oscillator yang menghitung hal serupa dari harga yang sama akan hampir selalu sepakat, dan kesepakatan itu tidak menambah informasi sedikit pun. Konfirmasi yang bernilai datang dari kategori berbeda: satu penunjuk tren, satu momentum, satu volume. Tiga cermin yang memantulkan wajah yang sama bukanlah tiga saksi."},

{id:"rta-ind-h03",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Pita Bollinger menyempit ke level tersempit dalam setahun. Seorang trader membeli karena menduga akan terjadi penembusan ke atas. Kelemahan mendasar keputusan itu adalah...",
 options:["Penyempitan hanya berbicara soal volatilitas, sama sekali tidak menunjukkan arah","Penyempitan justru menandakan tren akan berlanjut, bukan berbalik arah","Pita Bollinger tidak dapat dipakai pada pasar yang volatilitasnya rendah","Penyempitan terjadi karena periode yang dipakai terlalu panjang untuk kondisi itu"],
 answer:0,
 explain:"Lebar pita mengikuti standar deviasi, sehingga squeeze hanya mengatakan pasar sedang tenang dan biasanya diikuti ekspansi. Ke arah mana ekspansi itu terjadi sama sekali tidak terkandung dalam informasinya. Cara memakainya adalah menyiapkan rencana untuk kedua arah, lalu menunggu penembusan yang sesungguhnya, bukan menebak lebih dulu."},

{id:"rta-ind-h04",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham bergerak rata-rata 3 persen per hari, saham lain 0,8 persen. Mengapa memakai stop 5 persen untuk keduanya adalah kekeliruan?",
 options:["Stop yang sama mewakili ruang gerak yang sangat berbeda relatif terhadap volatilitas masing-masing","Saham bervolatilitas tinggi seharusnya memakai stop lebih rapat agar kerugiannya terbatas","Persentase stop harus selalu sama agar risiko portofolio dapat dibandingkan","Stop 5 persen terlalu longgar untuk kedua saham tersebut tanpa terkecuali"],
 answer:0,
 explain:"Pada saham yang bergerak 3 persen sehari, stop 5 persen hanyalah kebisingan satu setengah hari dan hampir pasti tersentuh. Pada saham yang bergerak 0,8 persen, stop yang sama setara enam hari pergerakan, jauh terlalu longgar. Jarak stop semestinya dinyatakan dalam kelipatan ATR, lalu ukuran posisi disesuaikan agar risiko rupiahnya tetap sama."},

{id:"rta-ind-h05",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Histogram MACD masih positif tetapi terus memendek selama tujuh sesi, sementara harga masih mencetak puncak baru. Apa yang sebenarnya sedang diukur oleh pemendekan itu?",
 options:["Jarak antara MACD dan garis sinyalnya menyempit, sehingga percepatan momentum berkurang","MACD sudah berada di bawah garis sinyal sehingga tren berbalik menjadi turun","Volume yang menyertai kenaikan harga sedang menyusut selama tujuh sesi itu","Perbedaan antara EMA 12 dan EMA 26 sudah berbalik menjadi negatif"],
 answer:0,
 explain:"Histogram adalah selisih MACD terhadap garis sinyalnya, jadi memendek berarti keduanya saling mendekat. Harga masih naik, momentum masih positif, tetapi percepatannya berkurang, seperti mobil yang masih melaju sambil mengurangi gas. Ini peringatan dini, bukan sinyal, dan sering muncul jauh sebelum persilangan yang sesungguhnya terjadi."},

/* ===== rta-riset ===== */
{id:"rta-riset-h01",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Seorang analis menerbitkan riset dengan target harga dan tanggal, tanpa mencantumkan level pembatalan skenario. Mengapa kelalaian ini serius bagi pembaca?",
 options:["Pembaca tidak tahu kapan analisisnya terbukti keliru sehingga tidak dapat mengelola risikonya","Target harga tanpa level pembatalan melanggar ketentuan penulisan riset otoritas","Pembaca akan menganggap rekomendasinya berlaku selamanya tanpa batas waktu","Analis kehilangan kesempatan menunjukkan kedalaman analisis teknikalnya"],
 answer:0,
 explain:"Rekomendasi tanpa level pembatalan hanya separuh informasi: pembaca tahu ke mana diharapkan bergerak, tetapi tidak tahu kapan harus mengakui salah. Tanpa itu, posisi dipegang sampai kerugiannya tak tertahankan. Level pembatalan juga menjaga analisnya sendiri, karena membuat rekam jejak rekomendasi dapat dievaluasi secara objektif."},

{id:"rta-riset-h02",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Seorang analis menyusun materi pemasaran yang menampilkan sepuluh rekomendasi terbaiknya sepanjang tahun, seluruhnya menguntungkan, tanpa menyebut total rekomendasi yang diterbitkan. Apa masalahnya?",
 options:["Cherry picking yang menciptakan gambaran kinerja menyesatkan bagi pembaca","Tidak ada masalah selama kesepuluh rekomendasi itu benar-benar pernah diterbitkan","Masalahnya hanya pada format, karena rekam jejak sebaiknya disajikan dalam tabel","Tidak ada masalah karena materi pemasaran tidak tunduk pada standar riset"],
 answer:0,
 explain:"Setiap analis memiliki sepuluh rekomendasi terbaik, termasuk yang sepanjang tahun merugi. Menampilkan hanya yang berhasil membuat pembaca menilai kemampuan dari sampel yang sudah disaring hasilnya. Penyajian yang jujur mencantumkan seluruh rekomendasi pada periode itu, atau setidaknya menyebut berapa total yang diterbitkan."},

{id:"rta-riset-h03",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Kepala divisi meminta analis mengubah rekomendasi jual menjadi tahan karena emiten tersebut klien perusahaan. Apa langkah paling tepat?",
 options:["Menolak mengubah kesimpulan, dan mengungkapkan hubungan bisnis itu dalam risetnya","Mengubahnya karena keputusan penerbitan riset merupakan wewenang kepala divisi","Menahan penerbitan sampai hubungan bisnis dengan emiten tersebut berakhir","Mengubah rekomendasinya tetapi menurunkan target harga sebagai penyeimbang"],
 answer:0,
 explain:"Kesimpulan analisis adalah wilayah yang tidak dapat dinegosiasikan, sementara hubungan bisnis dengan emiten adalah fakta yang wajib diungkapkan agar pembaca dapat menilai independensinya. Mengubah kesimpulan demi kepentingan klien persis bentuk benturan kepentingan yang hendak dicegah kode etik profesi, dan pembacanya yang menanggung akibatnya."},

{id:"rta-riset-h04",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Sebuah riset menyatakan harga akan mencapai 5.000 dalam tiga bulan. Mengapa perumusan ini bermasalah dibanding menyatakan skenario bersyarat?",
 options:["Analisis teknikal bekerja dalam probabilitas, sehingga kepastian semacam itu menyesatkan pembaca","Rentang tiga bulan terlalu pendek untuk proyeksi harga yang dapat dipertanggungjawabkan","Target harus dinyatakan dalam rentang, bukan angka tunggal, agar sesuai kaidah statistik","Penyebutan angka target dilarang dalam riset teknikal yang diterbitkan untuk publik"],
 answer:0,
 explain:"Perumusan bersyarat seperti selama bertahan di atas 4.200, skenario menuju 5.000 tetap berlaku menyampaikan tiga hal sekaligus: arah, syarat, dan titik pembatalan. Pernyataan berkepastian hanya menyampaikan arah, dan ketika meleset merusak kredibilitas analisnya sendiri. Kejujuran tentang ketidakpastian justru memperkuat, bukan melemahkan, sebuah riset."},

/* ===== cta-portfolio ===== */
{id:"cta-pf-h01",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Portofolio Rp2 miliar dengan delapan posisi, masing-masing berisiko 1 persen. Empat di antaranya berada pada sektor yang sama dengan korelasi 0,9. Berapa kira-kira risiko efektif portofolio itu?",
 options:["Mendekati 5 persen, karena empat posisi berkorelasi berperilaku seperti satu posisi besar","Tetap 8 persen, karena risiko tiap posisi sudah dibatasi sampai level stop masing-masing","Sekitar 2,8 persen, karena risiko berkorelasi dijumlahkan secara kuadrat","Tidak dapat diperkirakan tanpa mengetahui volatilitas masing-masing instrumen"],
 answer:0,
 explain:"Empat posisi berkorelasi 0,9 praktis bergerak sebagai satu taruhan sebesar 4 persen, ditambah empat posisi independen sebesar 1 persen masing-masing, sehingga risiko efektifnya mendekati 5 persen, bukan 8 persen yang tersebar. Yang berbahaya justru arah kekeliruannya: pengelola merasa lebih terdiversifikasi daripada kenyataan, lalu menambah posisi dengan tenang."},

{id:"cta-pf-h02",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Kelly criterion menghitung proporsi optimal 22 persen untuk sebuah strategi, tetapi pengelola memilih 8 persen. Apa pembenaran paling kuat untuk pilihan itu?",
 options:["Parameter Kelly diestimasi dari data masa lalu, dan kesalahan estimasi membuat Kelly penuh sangat berisiko","Kelly criterion hanya berlaku pada permainan berpeluang tetap, bukan pada pasar keuangan","Proporsi di bawah Kelly selalu menghasilkan pertumbuhan majemuk yang lebih tinggi","Regulator membatasi proporsi modal yang boleh ditempatkan pada satu strategi"],
 answer:0,
 explain:"Kelly memaksimalkan pertumbuhan majemuk bila peluang menang dan rasio pembayaran diketahui persis. Di pasar keduanya hanya ditaksir dari sampel terbatas, dan menaksir terlalu tinggi sedikit saja membuat Kelly penuh berubah dari optimal menjadi merusak. Volatilitas Kelly penuh juga brutal, sehingga praktisi lazim memakai setengah Kelly atau kurang."},

{id:"cta-pf-h03",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Sebuah portofolio berisi 50 persen saham dan 50 persen obligasi berdasarkan nilai. Mengapa komposisi ini belum tentu seimbang dari sisi risiko?",
 options:["Volatilitas saham jauh melampaui obligasi, sehingga risiko portofolio didominasi sisi sahamnya","Obligasi tidak memiliki risiko sehingga seluruh risiko berasal dari porsi sahamnya","Bobot berdasarkan nilai selalu setara dengan bobot berdasarkan risiko","Imbal hasil obligasi lebih rendah sehingga kontribusinya terhadap risiko dapat diabaikan"],
 answer:0,
 explain:"Saham lazim bervolatilitas tiga sampai empat kali obligasi, sehingga portofolio 50 banding 50 berdasarkan nilai sebenarnya menanggung sekitar 90 persen risikonya dari sisi saham. Inilah yang hendak diperbaiki pendekatan risk parity: bobot ditetapkan agar kontribusi risiko setara, umumnya dengan memperbesar porsi aset bervolatilitas rendah."},

{id:"cta-pf-h04",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Dua pengelola memiliki imbal hasil tahunan sama 18 persen, tetapi yang satu mengalami maximum drawdown 12 persen dan satunya 38 persen. Mengapa perbedaan itu penting meski hasil akhirnya sama?",
 options:["Drawdown dalam menguji apakah strategi dapat dijalani, dan banyak pemodal keluar sebelum pulih","Drawdown dalam menandakan perhitungan imbal hasilnya mengandung kekeliruan","Imbal hasil yang sama berarti kedua strategi setara sehingga drawdown tidak relevan","Drawdown hanya penting bagi pengelola institusi, tidak bagi pemodal perorangan"],
 answer:0,
 explain:"Angka imbal hasil hanya terwujud bila strateginya benar-benar dijalani sampai akhir. Drawdown 38 persen mendorong banyak pemodal menarik dana tepat di titik terburuk, sehingga mereka menanggung kerugiannya tanpa ikut menikmati pemulihannya. Itulah sebabnya Calmar ratio dan ukuran sejenis menilai imbal hasil relatif terhadap penderitaan yang harus ditanggung."},

/* ===== cta-candle ===== */
{id:"cta-cs-h01",module:"cta-candle",level:"CTA",difficulty:"sulit",
 q:"Sebuah hammer muncul setelah tren turun, tetapi volumenya hanya sepertiga rata-rata dan candle berikutnya menutup lebih rendah. Bagaimana pola itu dinilai?",
 options:["Gagal, karena penolakan harga rendah tidak didukung partisipasi maupun konfirmasi berikutnya","Tetap sah, karena bentuk hammer sudah memenuhi syarat proporsi badan dan sumbunya","Berubah menjadi hanging man karena candle berikutnya menutup lebih rendah","Menjadi lebih kuat, karena volume rendah menandakan tekanan jual sudah habis"],
 answer:0,
 explain:"Hammer bercerita tentang penolakan: harga ditekan jauh lalu dibeli kembali. Bila hanya sedikit pihak yang terlibat, cerita itu lemah. Ditambah candle berikutnya yang menutup lebih rendah, penolakannya jelas tidak bertahan. Pola candlestick adalah hipotesis yang menunggu konfirmasi, bukan kesimpulan yang berdiri sendiri."},

{id:"cta-cs-h02",module:"cta-candle",level:"CTA",difficulty:"sulit",
 q:"Pola bullish engulfing muncul di tengah rentang mendatar yang sudah berlangsung tiga bulan. Mengapa nilainya jauh lebih kecil dibanding bila muncul di area support?",
 options:["Pola pembalikan membutuhkan sesuatu untuk dibalik, dan di tengah rentang tidak ada tren maupun level","Pola engulfing hanya sah pada grafik harian, tidak pada rentang mendatar yang panjang","Rentang mendatar membuat perhitungan badan candle menjadi tidak akurat","Volume pada rentang mendatar selalu terlalu rendah untuk mengonfirmasi pola"],
 answer:0,
 explain:"Pola pembalikan bekerja dengan menandai perpindahan kendali pada titik yang penting: ujung tren atau batas level. Di tengah rentang, dominasi berganti setiap beberapa sesi dan engulfing hanyalah salah satu ayunan biasa. Inilah alasan konteks lokasi selalu lebih menentukan daripada kesempurnaan bentuk polanya."},

{id:"cta-cs-h03",module:"cta-candle",level:"CTA",difficulty:"sulit",
 q:"Seorang peneliti menguji pola morning star secara kuantitatif dan memperoleh hasil bertentangan dengan penelitian lain. Sumber perbedaan yang paling mungkin adalah...",
 options:["Ambang numerik untuk badan kecil dan kedalaman penetrasi didefinisikan berbeda","Data harga yang dipakai berasal dari periode pasar yang berlainan","Pola morning star terlalu jarang muncul untuk diuji secara statistik","Perangkat lunak yang dipakai menghitung candle dengan cara yang berbeda"],
 answer:0,
 explain:"Seberapa kecil badan candle tengah, seberapa dalam candle ketiga harus menembus badan pertama, apakah gap diwajibkan: setiap pilihan ambang menghasilkan pola yang berbeda. Dua peneliti yang memilih ambang berlainan sebenarnya menguji dua hal berbeda lalu sama-sama menerbitkan kesimpulan. Menyatakan definisi numerik secara eksplisit adalah syarat agar temuan dapat direplikasi."},

{id:"cta-cs-h04",module:"cta-candle",level:"CTA",difficulty:"sulit",
 q:"Pada grafik lima menit sebuah saham muncul belasan pola pin bar dalam satu sesi. Mengapa sebagian besar di antaranya tidak bermakna?",
 options:["Pada timeframe sangat pendek banyak pola terbentuk karena fluktuasi acak semata","Pin bar secara teori hanya berlaku pada grafik harian ke atas","Volume pada grafik lima menit tidak tersedia sehingga polanya tidak dapat dikonfirmasi","Pola yang muncul berulang dalam satu sesi saling meniadakan maknanya"],
 answer:0,
 explain:"Makin pendek periode, makin besar porsi pergerakan yang berupa kebisingan, sehingga bentuk yang menyerupai pola muncul terus-menerus tanpa membawa informasi. Penyaring yang lazim dipakai: hanya perhatikan pola yang muncul pada level penting dari timeframe lebih besar, sehingga jumlahnya menyusut drastis tetapi kualitasnya melonjak."}
]);
