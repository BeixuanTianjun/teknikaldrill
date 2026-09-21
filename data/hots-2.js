/* Soal HOTS batch 2 — cta-teori, rta-dasar, rta-chart */
TD.register([
/* ===== cta-teori ===== */
{id:"cta-teori-h01",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Sebuah strategi teknikal menghasilkan imbal hasil abnormal selama 2015 sampai 2019, lalu kinerjanya memudar sejak 2020 meski logikanya tidak berubah. Kerangka teori mana yang paling baik menjelaskan hal ini?",
 options:["Adaptive Market Hypothesis, karena peluang menyusut seiring pelaku pasar beradaptasi","Random Walk Theory, karena kinerja awalnya memang kebetulan semata","Efficient Market Hypothesis bentuk kuat, karena informasi privat sudah tercermin di harga","Prospect Theory, karena pelaku pasar menjadi lebih menghindari risiko setelah 2020"],
 answer:0,
 explain:"Lo memandang pasar seperti ekosistem: sebuah keunggulan bertahan sampai cukup banyak pelaku menemukannya, lalu arbitrase menghapusnya. Ini menjelaskan pola hidup dan mati strategi yang tidak bisa dijelaskan EMH klasik, yang menyatakan keunggulan itu tidak pernah ada sejak awal. Implikasi praktisnya keras: sistem yang berhenti bekerja belum tentu rusak, bisa jadi hanya kehabisan mangsa."},

{id:"cta-teori-h02",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Seorang peneliti menguji 200 kombinasi indikator, menemukan tiga yang mengalahkan pasar secara signifikan pada tingkat 1 persen, lalu mempublikasikannya. Mengapa temuan itu tetap meragukan?",
 options:["Pada 200 pengujian, sekitar dua temuan signifikan diharapkan muncul murni karena kebetulan","Tingkat 1 persen terlalu ketat sehingga strategi yang benar-benar unggul ikut tersaring","Indikator tidak boleh diuji dalam kombinasi karena sinyalnya saling meniadakan","Pengujian seharusnya memakai data intraday agar jumlah sampelnya mencukupi"],
 answer:0,
 explain:"Pada tingkat 1 persen, satu dari seratus pengujian tampak signifikan meski tidak ada keunggulan apa pun. Dari 200 percobaan, dua temuan palsu adalah hal yang diharapkan, sehingga tiga temuan nyaris tidak dapat dibedakan dari kebisingan. Yang menyelamatkan riset semacam ini bukan menambah data, melainkan mengakui berapa banyak percobaan yang dilakukan dan mengoreksi ambangnya."},

{id:"cta-teori-h03",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Harga saham sebuah perusahaan naik tajam, sehingga perusahaan itu mampu menerbitkan saham baru dengan murah, memperkuat neracanya, dan laporannya membaik. Fenomena ini paling tepat dijelaskan oleh...",
 options:["Reflexivity, karena persepsi pelaku pasar ikut mengubah fundamental yang dipersepsikan","Herding, karena pelaku pasar mengikuti arah yang sedang diambil mayoritas","Momentum effect, karena kinerja masa lalu cenderung berlanjut ke periode berikutnya","Survivorship bias, karena hanya perusahaan yang berhasil yang tercatat datanya"],
 answer:0,
 explain:"Soros menolak anggapan bahwa harga sekadar mencerminkan fundamental. Di sini harga justru mengubah fundamentalnya lewat akses permodalan yang lebih murah, lalu perbaikan itu mengangkat harga lagi. Umpan balik dua arah inilah yang membentuk gelembung, dan juga menjelaskan mengapa gelembung bisa bertahan jauh lebih lama daripada perkiraan analis nilai wajar."},

{id:"cta-teori-h04",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Sebuah pengujian strategi pada saham LQ45 periode 2010 sampai 2024 memakai daftar anggota indeks per hari ini. Cacat metodologis apa yang terkandung di dalamnya?",
 options:["Survivorship bias, karena emiten yang gugur dari indeks tidak ikut terhitung","Look ahead bias, karena data harga dipakai sebelum tanggal ketersediaannya","Data snooping, karena terlalu banyak strategi diuji pada data yang sama","Slippage yang diremehkan, karena likuiditas anggota indeks berubah sepanjang waktu"],
 answer:0,
 explain:"Memakai daftar anggota hari ini berarti diam-diam hanya menguji emiten yang cukup kuat untuk bertahan sampai sekarang. Emiten yang jatuh keluar dari indeks, justru yang kinerjanya terburuk, tidak pernah ikut terhitung. Hasilnya tampak jauh lebih baik dari kenyataan. Perbaikannya menuntut daftar anggota indeks historis per periode, yang datanya sering tidak mudah diperoleh."},

{id:"cta-teori-h05",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Dalam metode Wyckoff, harga menembus support disertai volume besar, tetapi keesokan harinya kembali masuk ke dalam rentang dengan volume kecil. Bagaimana hukum effort versus result membaca urutan ini?",
 options:["Upaya jual besar gagal menghasilkan penurunan lanjutan, menandakan pasokan sudah terserap","Upaya jual besar berhasil menembus support, sehingga tren turun terkonfirmasi","Volume kecil pada hari kedua menandakan pembeli belum berani masuk ke pasar","Kedua hari saling meniadakan sehingga tidak ada kesimpulan yang dapat ditarik"],
 answer:0,
 explain:"Effort adalah volume, result adalah pergerakan harga yang dihasilkannya. Ketika upaya jual besar hanya menghasilkan penembusan sesaat yang langsung dibatalkan, berarti ada pihak yang menyerap seluruh pasokan itu. Wyckoff menyebut susunan ini spring, dan justru di situlah akumulasi diam-diam sering selesai. Ketidaksesuaian antara upaya dan hasil hampir selalu lebih informatif daripada keduanya sendiri-sendiri."},

{id:"cta-teori-h06",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Seorang trader menahan posisi rugi berbulan-bulan tetapi merealisasikan keuntungan hanya dalam hitungan hari. Bias apa yang bekerja, dan apa dampaknya pada expectancy sistemnya?",
 options:["Disposition effect: rata-rata rugi membengkak dan rata-rata untung mengecil, menekan expectancy","Overconfidence: ukuran posisi membesar sehingga risikonya melampaui batas yang direncanakan","Recency bias: keputusan didominasi kejadian terbaru sehingga arah posisi sering berbalik","Anchoring: keputusan terpaku pada harga perolehan sehingga target menjadi terlalu dekat"],
 answer:0,
 explain:"Disposition effect berakar pada loss aversion: rasa sakit kehilangan lebih besar daripada nikmatnya untung, sehingga kerugian ditahan dengan harapan pulih sementara keuntungan cepat diamankan. Akibatnya persis kebalikan dari syarat expectancy positif, yaitu memotong rugi pendek dan membiarkan untung berjalan. Sistem yang di atas kertas menguntungkan bisa merugi hanya karena bias ini saat dijalankan."},

{id:"cta-teori-h07",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Mengapa pola teknikal cenderung bertahan lebih lama pada saham berkapitalisasi kecil yang jarang diliput analis?",
 options:["Sedikitnya pelaku canggih membuat inefisiensi tidak cepat terarbitrase","Volatilitasnya lebih tinggi sehingga polanya lebih mudah dikenali secara visual","Investor ritel lebih disiplin mengikuti level teknikal daripada institusi","Bursa memberlakukan aturan perdagangan berbeda untuk saham berkapitalisasi kecil"],
 answer:0,
 explain:"Keunggulan bertahan selama tidak cukup banyak modal canggih memburunya. Instrumen paling likuid diawasi ribuan pihak sehingga inefisiensi hilang dalam hitungan detik, sedangkan saham kecil luput dari perhatian. Namun ada harga yang harus dibayar: spread lebar, likuiditas tipis, dan risiko tidak dapat keluar posisi, yang sering menelan seluruh keunggulan teoretisnya."},

{id:"cta-teori-h08",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Dua analis berdebat: yang satu menyatakan pasar efisien sehingga analisis teknikal sia-sia, yang lain menunjuk keberhasilan strategi momentum. Sintesis paling tepat dari keduanya adalah...",
 options:["Efisiensi bersifat bertingkat dan berubah, sehingga keunggulan ada tetapi tidak permanen","Salah satu pasti keliru, karena pasar hanya bisa efisien atau tidak efisien","Momentum bukan keunggulan sejati melainkan kompensasi atas risiko yang lebih besar","Analisis teknikal bekerja hanya karena banyak pelaku memakainya secara serentak"],
 answer:0,
 explain:"Perdebatan ini sering berhenti pada pilihan ya atau tidak, padahal buktinya menunjuk ke tengah. EMH benar bahwa keunggulan mudah cepat hilang; pendukung momentum benar bahwa anomali nyata pernah ada dan terdokumentasi. Adaptive Market Hypothesis menyatukan keduanya: efisiensi berubah-ubah menurut jumlah pelaku, ketersediaan modal, dan kondisi pasar. Praktiknya, sebuah keunggulan harus terus diuji ulang, bukan dianggap abadi."},

{id:"cta-teori-h09",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Fractal Market Hypothesis menjelaskan krisis likuiditas sebagai akibat dari...",
 options:["Menyatunya horizon waktu seluruh pelaku menjadi jangka sangat pendek secara bersamaan","Berkurangnya jumlah pelaku pasar yang aktif bertransaksi di bursa","Meningkatnya korelasi antar kelas aset yang sebelumnya bergerak sendiri-sendiri","Kegagalan sistem perdagangan elektronik menangani lonjakan volume transaksi"],
 answer:0,
 explain:"Dalam kerangka Peters, pasar stabil karena pelaku berhorizon panjang bersedia membeli dari pelaku berhorizon pendek. Saat panik, semua orang tiba-tiba punya horizon yang sama, yaitu sekarang juga, sehingga tidak ada lagi pihak yang mengambil sisi lain. Likuiditas bukan menguap karena pelakunya hilang, melainkan karena mereka semua ingin berada di sisi yang sama."},

{id:"cta-teori-h10",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Mengapa pengujian pola grafik secara akademis sering menghasilkan kesimpulan yang bertentangan antar peneliti?",
 options:["Definisi numerik polanya berbeda-beda, sehingga yang diuji sebenarnya bukan hal yang sama","Data harga yang dipakai peneliti berasal dari bursa yang berlainan","Pola grafik hanya muncul pada periode tertentu sehingga sampelnya terlalu kecil","Metode statistik untuk menguji pola visual belum dikembangkan sampai sekarang"],
 answer:0,
 explain:"Istilah seperti sumbu panjang, bahu yang seimbang, atau neckline mendatar harus diterjemahkan ke ambang angka sebelum dapat diuji. Dua peneliti yang memilih ambang berbeda sebenarnya menguji dua pola berbeda, lalu keduanya menerbitkan kesimpulan yang bertolak belakang. Lo, Mamaysky, dan Wang menjawabnya dengan mendefinisikan pola lewat kernel regression agar dapat direplikasi."},

{id:"cta-teori-h11",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Analisis teknikal pada indeks dianggap lebih andal daripada pada saham tunggal. Alasan paling mendasar dari perbedaan itu adalah...",
 options:["Agregasi meredam peristiwa spesifik emiten sehingga yang tersisa adalah perilaku kolektif","Indeks selalu diperdagangkan dengan volume lebih besar daripada saham anggotanya","Perhitungan indeks dilakukan bursa sehingga datanya lebih akurat","Indeks tidak terpengaruh aksi korporasi sehingga grafiknya tidak perlu disesuaikan"],
 answer:0,
 explain:"Premis teknikal bersandar pada psikologi kolektif. Satu emiten bisa melonjak karena akuisisi atau jatuh karena kecurangan akuntansi, peristiwa yang tidak ada hubungannya dengan pola perilaku massa. Indeks merata-ratakan guncangan idiosinkratik itu sehingga yang tersisa lebih murni berupa sentimen pasar, dan jauh lebih sulit digerakkan segelintir pihak."},

{id:"cta-teori-h12",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Terjadi guncangan regulasi mendadak yang menjatuhkan harga 20 persen dalam satu sesi. Apa nilai analisis teknikal dalam situasi yang jelas tidak dapat diramalkan ini?",
 options:["Level pembatalan dan ukuran posisi yang ditetapkan sebelumnya membatasi kerugiannya","Divergensi pada indikator momentum seharusnya sudah memberi peringatan sebelumnya","Analisis teknikal tidak memberi nilai apa pun pada peristiwa di luar grafik","Pola volume beberapa sesi sebelumnya dapat mengungkap kebocoran informasi"],
 answer:0,
 explain:"Tidak ada grafik yang dapat membaca keputusan yang belum diambil. Nilai analisis teknikal di sini bukan meramal, melainkan menyiapkan respons sebelum peristiwanya datang: seberapa besar posisi yang pantas, di mana skenario dinyatakan batal. Dengan ukuran posisi yang benar, penurunan 20 persen menjadi kerugian yang terserap, bukan yang mengakhiri karier."},

/* ===== rta-dasar ===== */
{id:"rta-dasar-h01",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Seorang investor menolak analisis teknikal dengan alasan harga tidak mungkin mengandung informasi karena laporan keuangan baru terbit kuartalan. Bantahan paling tepat berdasarkan premis dasar analisis teknikal adalah...",
 options:["Harga mendiskontokan seluruh informasi termasuk yang belum dipublikasikan resmi","Laporan keuangan kuartalan sebenarnya sudah bocor sebelum diterbitkan ke publik","Analisis teknikal tidak berurusan dengan informasi melainkan dengan probabilitas","Analisis fundamental juga tidak dapat memakai laporan yang terbit kuartalan"],
 answer:0,
 explain:"Premis market action discounts everything menyatakan apa pun yang dapat mempengaruhi harga sudah terserap ke dalamnya, termasuk penilaian, harapan, dan ketakutan yang tidak pernah muncul di laporan mana pun. Pergerakan harga sebelum berita terbit bukan bukti kebocoran, melainkan cerminan ribuan pelaku yang menyesuaikan posisi berdasarkan penilaian masing-masing."},

{id:"rta-dasar-h02",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Indeks industrial mencetak tertinggi baru tetapi indeks transportasi gagal mengikuti dan justru membentuk lower high. Menurut Dow Theory, bagaimana sinyal ini dibaca?",
 options:["Belum ada konfirmasi tren naik, sehingga sinyalnya dianggap meragukan","Tren naik terkonfirmasi karena indeks industrial adalah acuan utama pasar","Tren turun terkonfirmasi karena indeks transportasi lebih peka terhadap ekonomi","Kedua indeks harus diabaikan sampai keduanya bergerak dalam arah yang sama"],
 answer:0,
 explain:"Prinsip konfirmasi Dow menuntut kedua indeks saling menguatkan: barang yang diproduksi harus ikut terangkut. Ketika industrial mencetak rekor tanpa dukungan transportasi, sinyalnya dianggap belum sah, bukan otomatis berbalik menjadi bearish. Perbedaan antara belum terkonfirmasi dan terbantahkan inilah yang sering dikaburkan pembaca Dow Theory."},

{id:"rta-dasar-h03",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham terkoreksi 55 persen dari kenaikan primary trend sebelumnya, lalu berbalik naik. Menurut Dow Theory, koreksi sebesar itu paling tepat digolongkan sebagai...",
 options:["Secondary reaction, karena masih berada dalam kisaran sepertiga sampai dua pertiga","Pembalikan primary trend, karena koreksinya sudah melampaui setengah kenaikan","Minor trend, karena kedalamannya tidak menentukan penggolongan suatu pergerakan","Fase distribusi, karena koreksi sedalam itu menandakan pemodal awal melepas posisi"],
 answer:0,
 explain:"Dow mengamati koreksi sekunder umumnya mengembalikan sepertiga hingga dua pertiga pergerakan sebelumnya, dengan setengah sebagai yang paling lazim. Koreksi 55 persen berada tepat di tengah kisaran itu, sehingga masih tergolong reaksi sekunder. Yang menentukan pembalikan bukan kedalaman koreksinya, melainkan rusaknya struktur higher high dan higher low."},

{id:"rta-dasar-h04",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Dua analis melihat grafik yang sama; satu menarik garis tren menyentuh bayangan candle, satu lagi menyentuh badan candle, sehingga sinyalnya berbeda. Apa yang paling tepat disimpulkan dari situasi ini?",
 options:["Subjektivitas penarikan garis adalah kelemahan nyata yang menuntut aturan tertulis","Salah satu analis pasti keliru karena hanya ada satu cara menarik garis yang benar","Perbedaan itu tidak penting karena kedua sinyal pada akhirnya akan bertemu","Garis tren sebaiknya ditinggalkan dan digantikan sepenuhnya oleh moving average"],
 answer:0,
 explain:"Ini kritik paling jujur terhadap analisis teknikal: dua praktisi kompeten dapat membaca grafik yang sama secara berbeda. Jawabannya bukan berpura-pura masalah itu tidak ada, melainkan menuliskan aturan sejak awal, misalnya selalu memakai penutupan, lalu menerapkannya konsisten. Konsistensi membuat hasil dapat dievaluasi; berganti-ganti aturan membuat evaluasi mustahil."},

{id:"rta-dasar-h05",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham tercatat naik 8 persen dengan volume hanya 40 persen dari rata-rata hariannya, dan hanya terjadi 12 transaksi sepanjang sesi. Mengapa kenaikan ini kurang bermakna secara teknikal?",
 options:["Sedikitnya transaksi berarti harga itu tidak mewakili konsensus pelaku pasar","Kenaikan 8 persen terlalu kecil untuk dianggap sebagai sinyal yang berarti","Volume di bawah rata-rata selalu menandakan distribusi sedang berlangsung","Data sesi dengan transaksi sedikit tidak dicatat bursa sebagai harga resmi"],
 answer:0,
 explain:"Harga adalah kesepakatan, dan kesepakatan dua belas pihak bukanlah konsensus pasar. Pada saham tipis, satu order berukuran sedang dapat menggerakkan harga jauh tanpa mencerminkan perubahan penilaian siapa pun. Inilah alasan likuiditas menjadi syarat kelayakan sebelum sebuah instrumen dianalisis secara teknikal, bukan sekadar pertimbangan eksekusi."},

{id:"rta-dasar-h06",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Level 5.000 pada sebuah indeks berulang kali menahan penurunan meski tidak ada alasan fundamental apa pun pada angka itu. Penjelasan paling tepat adalah...",
 options:["Banyak pelaku menempatkan order pada angka bundar, sehingga level itu menjadi nyata karena diyakini","Angka bundar memang memiliki makna matematis khusus dalam pergerakan harga","Bursa menetapkan angka bundar sebagai batas acuan perdagangan harian","Kebetulan semata, karena level psikologis tidak pernah terbukti berfungsi"],
 answer:0,
 explain:"Inilah self-fulfilling prophecy dalam bentuknya yang paling murni. Angka 5.000 tidak istimewa secara ekonomi, tetapi manusia membulatkan angka saat menentukan target dan batas rugi, sehingga order menumpuk di sana. Keyakinan kolektif itulah yang menciptakan support sungguhan. Sisi buruknya, kantong order yang terkonsentrasi juga menjadi sasaran empuk bagi stop hunting."},

{id:"rta-dasar-h07",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Seorang manajer investasi memakai analisis fundamental untuk memilih saham dan analisis teknikal untuk menentukan waktu masuk. Mengapa pembagian peran ini masuk akal?",
 options:["Keduanya menjawab pertanyaan berbeda: apa yang layak dibeli, dan kapan membelinya","Analisis fundamental tidak dapat diterapkan pada horizon waktu yang pendek","Analisis teknikal lebih akurat daripada fundamental dalam memperkirakan harga","Regulator mensyaratkan kedua analisis dipakai bersama dalam pengelolaan dana"],
 answer:0,
 explain:"Fundamental menilai apakah sebuah aset layak dimiliki, teknikal menilai kapan pasar bersedia membayarnya. Saham murah bisa bertahan murah bertahun-tahun, dan itulah biaya yang tidak terlihat dalam analisis nilai wajar. Pembagian peran ini juga memberi sesuatu yang tidak dimiliki analisis fundamental: level objektif untuk menyatakan bahwa keputusan ini keliru."},

{id:"rta-dasar-h08",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Analisis teknikal dikritik karena sinyalnya terlambat, sebab dihitung dari harga yang sudah terjadi. Bagaimana kritik ini paling tepat ditanggapi?",
 options:["Keterlambatan adalah harga dari konfirmasi, dan ditukar dengan berkurangnya sinyal palsu","Kritik itu keliru karena indikator leading mampu mendahului pergerakan harga","Keterlambatan dapat dihilangkan sepenuhnya dengan memakai timeframe lebih kecil","Kritik itu tidak relevan karena analisis teknikal tidak bertujuan memprediksi"],
 answer:0,
 explain:"Setiap metode berbasis data historis pasti tertinggal, dan itu memang bukan cacat yang bisa dihapus. Yang bisa dipilih adalah letak pertukarannya: sinyal lebih cepat berarti lebih banyak sinyal palsu, sinyal lebih lambat berarti sebagian pergerakan terlewat. Oscillator memperkecil lag dengan mengorbankan keandalan, bukan dengan meniadakannya."},

/* ===== rta-chart ===== */
{id:"rta-chart-h01",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham naik dari 100 ke 200 lalu dari 200 ke 400. Pada skala aritmatik, bagaimana kedua kenaikan itu tampak, dan mengapa menyesatkan?",
 options:["Kenaikan kedua tampak dua kali lebih besar, padahal persentasenya sama-sama 100 persen","Kedua kenaikan tampak sama besar, padahal yang kedua secara persentase lebih kecil","Kenaikan pertama tampak lebih besar karena dimulai dari basis yang rendah","Keduanya tampak sama karena skala aritmatik menyamakan proporsi perubahan"],
 answer:0,
 explain:"Pada skala aritmatik, jarak vertikal mewakili selisih nominal. Kenaikan 100 poin dan 200 poin digambar dengan tinggi berbeda meski keduanya sama-sama melipatgandakan modal. Akibatnya fase awal tren jangka panjang tampak rata seperti tidak terjadi apa-apa. Untuk data multi tahun atau saham yang harganya berubah berlipat, skala logaritmik bukan pilihan gaya melainkan keharusan."},

{id:"rta-chart-h02",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Grafik sebuah saham menunjukkan penurunan tajam 50 persen dalam satu hari, tetapi tidak ada berita apa pun. Sebelum menyimpulkan, apa yang paling dulu harus diperiksa analis?",
 options:["Apakah terjadi aksi korporasi seperti stock split yang belum disesuaikan pada data","Apakah volume pada hari itu jauh melampaui rata-rata hariannya","Apakah indeks sektor mengalami penurunan serupa pada hari yang sama","Apakah terdapat gap yang belum tertutup pada beberapa sesi sebelumnya"],
 answer:0,
 explain:"Penurunan tepat 50 persen tanpa berita adalah tanda khas stock split satu banding dua pada data yang belum disesuaikan. Analis yang melewatkan pemeriksaan ini akan melihat pola pembalikan, gap, dan level yang seluruhnya semu. Memverifikasi kebersihan data selalu mendahului penafsiran, karena tidak ada metode analisis yang dapat menyelamatkan data yang keliru."},

{id:"rta-chart-h03",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Seorang swing trader dengan horizon dua sampai empat pekan memutuskan menganalisis grafik lima menit untuk menentukan arah tren. Kelemahan utama pendekatan ini adalah...",
 options:["Rasio noise terhadap sinyal pada grafik itu jauh melampaui horizon posisinya","Grafik lima menit tidak menyediakan data yang cukup panjang untuk analisis tren","Indikator pada grafik lima menit menghasilkan nilai yang berbeda dari grafik harian","Grafik lima menit hanya tersedia bagi anggota bursa, bukan bagi pelaku umum"],
 answer:0,
 explain:"Timeframe harus sepadan dengan horizon posisi. Fluktuasi yang berarti pada grafik lima menit sepenuhnya tidak relevan bagi posisi berdurasi tiga pekan, dan menganalisisnya hanya menghasilkan kegelisahan serta transaksi berlebihan. Pendekatan multiple time frame memakai arah dari timeframe lebih besar, lalu timeframe kecil hanya untuk menghaluskan eksekusi."},

{id:"rta-chart-h04",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Sebuah pola tampak sangat rapi pada grafik Heikin Ashi tetapi tidak terlihat pada candlestick biasa. Bagaimana analis sebaiknya menyikapinya?",
 options:["Berhati-hati, karena harga pada Heikin Ashi adalah hasil perhitungan, bukan harga transaksi","Mempercayainya, karena Heikin Ashi menyaring noise sehingga polanya lebih murni","Mengabaikan candlestick biasa, karena Heikin Ashi lebih mutakhir secara metodologis","Menggabungkan keduanya dengan merata-ratakan level yang dihasilkan masing-masing"],
 answer:0,
 explain:"Heikin Ashi menghaluskan tren dengan merata-ratakan, sehingga open dan close yang tergambar bukan harga yang pernah ditransaksikan siapa pun. Untuk membaca arah tren itu berguna; untuk menentukan level entry, stop, dan target justru berbahaya, karena order dieksekusi pada harga sungguhan. Pola yang hanya muncul pada grafik hasil perhitungan patut dicurigai sebagai artefak metodenya."},

{id:"rta-chart-h05",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Pada point and figure dengan box size 20 dan reversal 3 box, harga bergerak turun 50 poin dari puncak kolom X terakhir. Apa yang terjadi pada grafik?",
 options:["Belum ada kolom baru, karena pembalikan menuntut minimal 60 poin","Kolom O baru digambar, karena penurunan sudah melampaui dua box","Kolom X diperpanjang ke bawah mengikuti pergerakan harga terbaru","Grafik mencatat satu box O tanpa memulai kolom baru sepenuhnya"],
 answer:0,
 explain:"Reversal 3 box berarti harga harus berbalik sebesar tiga kali box size, yaitu 3 dikali 20 sama dengan 60 poin, sebelum kolom baru digambar. Penurunan 50 poin belum mencukupi sehingga grafik tidak berubah sama sekali. Inilah cara point and figure menyaring kebisingan: pergerakan yang tidak melampaui ambang dianggap tidak pernah terjadi."},

{id:"rta-chart-h06",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Analis membandingkan kinerja dua saham, yang satu berharga Rp500 dan satunya Rp25.000, dengan menampilkan keduanya pada satu grafik berskala harga biasa. Masalah utama penyajian ini adalah...",
 options:["Pergerakan saham berharga rendah tampak nyaris datar meski persentasenya besar","Kedua saham tidak dapat ditampilkan bersama karena satuan harganya berbeda","Grafik gabungan selalu memerlukan skala logaritmik agar tren keduanya terbaca","Perbandingan hanya sah bila kedua saham berada pada sektor yang sama"],
 answer:0,
 explain:"Pada sumbu harga yang sama, kenaikan 50 poin pada saham Rp500 setara 10 persen tetapi nyaris tidak terlihat di sebelah saham Rp25.000. Perbandingan kinerja menuntut basis yang setara: indeks keduanya ke 100 pada tanggal awal, atau gambarkan rasio harga keduanya. Grafik rasio punya keunggulan tambahan karena dapat diberi garis tren dan level seperti grafik harga biasa."},

{id:"rta-chart-h07",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Volume profile sebuah saham menunjukkan satu area harga dengan volume jauh lebih padat dari sekitarnya. Mengapa area itu penting bagi analis?",
 options:["Banyak posisi terbentuk di sana, sehingga area itu cenderung menjadi magnet sekaligus zona reaksi","Area itu menandakan harga wajar saham tersebut menurut konsensus pasar","Area itu selalu menjadi titik awal tren berikutnya setelah konsolidasi berakhir","Area itu menunjukkan tempat pelaku institusi menempatkan order stop loss mereka"],
 answer:0,
 explain:"Volume profile memetakan volume menurut level harga, bukan menurut waktu. Area padat berarti banyak pihak memiliki harga perolehan di situ, sehingga ketika harga kembali ke sana muncul dorongan emosional untuk impas atau menambah posisi. Titik terpadat, atau point of control, sering berperan sebagai magnet harga, sedangkan area bervolume tipis justru dilewati dengan cepat."},

{id:"rta-chart-h08",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Grafik Renko sebuah saham menunjukkan tren naik bersih tanpa satu pun bata turun selama dua bulan, padahal grafik candlestick memperlihatkan beberapa koreksi tajam. Apa penyebabnya?",
 options:["Renko hanya menggambar bata baru bila harga bergerak sebesar brick size, sehingga koreksi kecil terhapus","Renko memakai harga rata-rata sehingga koreksi tajam ikut terhaluskan","Renko mengabaikan harga penutupan dan hanya memakai harga tertinggi periode","Renko menyesuaikan brick size secara otomatis mengikuti volatilitas pasar"],
 answer:0,
 explain:"Renko menyaring pergerakan yang lebih kecil dari brick size, sehingga koreksi sebesar apa pun yang tidak melampaui ambang itu tidak pernah tergambar. Hasilnya tren tampak sangat bersih, dan di situlah bahayanya: koreksi yang terhapus dari grafik tetap nyata pada rekening. Renko berguna untuk membaca arah, tetapi menyesatkan bila dipakai menilai risiko penurunan."}
]);
