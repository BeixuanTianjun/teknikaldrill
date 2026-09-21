/* Soal HOTS batch 6 — rta-chart, rta-trend, rta-level, rta-indikator,
   cta-portfolio, cta-sistem, cta-aset */
TD.register([
/* ===== rta-chart ===== */
{id:"rta-chart-h09",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham melakukan pemecahan nilai nominal empat banding satu. Grafik skala aritmetika menunjukkan penurunan tajam pada hari itu, sedangkan grafik yang disesuaikan tidak. Mana yang benar dan mengapa?",
 options:["Grafik yang disesuaikan, karena pemecahan nominal tidak mengubah nilai kepemilikan pemegang saham","Grafik aritmetika, karena harga per lembar memang benar-benar turun pada hari itu","Keduanya salah karena grafik tidak boleh dipakai pada saham yang pernah memecah nominal","Grafik aritmetika, karena penyesuaian data selalu menghilangkan informasi yang penting"],
 answer:0,
 explain:"Pemecahan nominal membagi harga sekaligus mengalikan jumlah lembar, sehingga nilai kepemilikan tidak berubah. Grafik yang tidak disesuaikan menciptakan celah semu yang bisa dibaca keliru sebagai penembusan support. Kesalahan serupa muncul pada dividen besar; karena itu analis yang teliti selalu memastikan sumber datanya sudah disesuaikan sebelum menarik garis apa pun."},

{id:"rta-chart-h10",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham naik dari 100 ke 200, lalu dari 200 ke 400. Pada skala semi logaritmik, bagaimana kedua kenaikan itu tampak dan apa gunanya?",
 options:["Keduanya tidak dapat dibandingkan karena skala logaritmik tidak mengenal konsep persentase","Sama tingginya, karena keduanya kenaikan 100 persen, sehingga laju perubahan lebih jujur terbaca","Kenaikan kedua tampak dua kali lebih tinggi karena selisih poinnya memang dua kali lipat","Kenaikan kedua tampak lebih rendah karena skala logaritmik memampatkan harga tinggi secara keliru"],
 answer:1,
 explain:"Skala logaritmik memberi jarak vertikal yang sama untuk perubahan persentase yang sama. Pada saham yang naik berkali lipat bertahun-tahun, skala aritmetika membuat tahun-tahun awal tampak datar dan garis tren yang ditarik di sana menjadi menyesatkan. Untuk rentang harga yang sempit atau grafik harian pendek, perbedaan keduanya hampir tidak terasa."},

{id:"rta-chart-h11",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Grafik garis yang hanya memakai harga penutupan tidak menampilkan celah pembukaan maupun ekor bayangan. Dalam situasi apa grafik ini justru lebih berguna daripada candlestick?",
 options:["Saat menghitung pola candlestick, karena garis mempertegas bentuk badan setiap lilin","Grafik garis tidak pernah lebih berguna dan hanya dipakai karena keterbatasan data","Saat menilai tren jangka sangat panjang, karena kebisingan intrahari disaring dan strukturnya lebih jelas","Saat memperdagangkan sesi harian, karena harga penutupan menentukan seluruh keputusan intrahari"],
 answer:2,
 explain:"Harga penutupan dianggap paling bermakna karena di situlah posisi ditutup dan kesepakatan harian terbentuk. Untuk grafik sepuluh tahunan, menyaring ekor bayangan membuat level support dan resistance utama jauh lebih mudah terbaca. Kelemahannya nyata pada jangka pendek: celah dan penolakan harga yang penting hilang dari pandangan."},

{id:"rta-chart-h12",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Seorang analis membandingkan grafik saham dengan grafik indeks pada layar yang sama, tetapi memakai dua sumbu harga berbeda yang skalanya tidak sebanding. Apa risiko terbesarnya?",
 options:["Tidak ada risiko selama kedua grafik memakai rentang waktu yang sama panjang","Risikonya hanya pada tampilan, sedangkan kesimpulan analisisnya tetap akurat","Dua sumbu harga berbeda membuat grafik tidak dapat ditampilkan sama sekali","Kekuatan relatif dapat salah terbaca karena pergerakan yang berbeda besar tampak sama besar"],
 answer:3,
 explain:"Sumbu ganda yang direntangkan berbeda dapat membuat saham yang naik 5 persen tampak sekuat indeks yang naik 20 persen. Cara yang jujur adalah menormalkan keduanya ke 100 pada tanggal awal, atau langsung memakai rasio harga saham terhadap indeks. Rasio itu punya keuntungan tambahan: garis tren dan pola dapat ditarik langsung di atasnya."},

{id:"rta-chart-h13",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Grafik point and figure tidak memiliki sumbu waktu yang seragam. Apa keunggulan sekaligus kelemahan dari sifat ini?",
 options:["Unggul menyaring pergerakan kecil dan memperjelas level, tetapi lemah untuk analisis berbasis waktu seperti siklus","Unggul dalam segala hal karena menghilangkan waktu berarti menghilangkan seluruh kebisingan","Lemah dalam segala hal karena analisis harga mustahil dilakukan tanpa sumbu waktu","Sifat ini tidak berpengaruh karena point and figure sesungguhnya memiliki sumbu waktu tersembunyi"],
 answer:0,
 explain:"Point and figure hanya mencatat kolom baru bila harga bergerak melampaui ambang pembalikan, sehingga hari-hari mendatar tidak meninggalkan jejak sama sekali. Hasilnya level horizontal dan garis tren empat puluh lima derajat terlihat sangat bersih. Harganya: analisis siklus, pola musiman, dan segala sesuatu yang bergantung pada kalender tidak dapat dikerjakan di atasnya."},

{id:"rta-chart-h14",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Data kontrak berjangka disambung menjadi deret berkelanjutan dengan metode penyambungan yang berbeda-beda. Mengapa hal ini penting bagi analis teknikal?",
 options:["Semua penyedia data memakai metode yang sama sehingga perbedaan itu tidak pernah muncul","Level historis dan hasil uji balik dapat berubah nyata hanya karena metode penyambungannya berbeda","Metode penyambungan hanya urusan administratif dan tidak memengaruhi analisis harga","Kontrak berjangka tidak boleh dianalisis secara teknikal dalam keadaan apa pun"],
 answer:1,
 explain:"Setiap kali kontrak digulirkan ke bulan berikutnya, muncul celah harga yang harus diperlakukan entah dengan penyesuaian mundur, rasio, atau dibiarkan apa adanya. Penyesuaian mundur menjaga bentuk pergerakan tetapi dapat menghasilkan harga negatif di masa lalu; membiarkannya apa adanya menjaga harga nyata tetapi menciptakan celah palsu. Analis wajib tahu deret mana yang sedang dipakainya."},

/* ===== rta-trend ===== */
{id:"rta-trend-h07",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Dua analis menarik garis tren pada grafik yang sama: satu memakai harga terendah setiap batang, satu lagi memakai harga penutupan terendah. Garis pertama sudah tertembus, garis kedua belum. Bagaimana menyelesaikannya?",
 options:["Garis berbasis penutupan selalu benar karena harga penutupan adalah satu-satunya yang bermakna","Kedua garis harus dibuang dan diganti dengan rata-rata bergerak yang lebih objektif","Menetapkan aturannya di muka dan menerapkannya konsisten, karena keduanya sah asal tidak dipilih setelah kejadian","Garis berbasis harga terendah selalu benar karena mencakup seluruh rentang pergerakan harga"],
 answer:2,
 explain:"Bahaya sesungguhnya bukan pada pilihan metodenya, melainkan pada kebebasan berpindah metode setelah melihat hasilnya; itulah cara analis membenarkan posisi yang salah. Banyak praktisi memilih basis penutupan karena penembusan sesaat oleh ekor bayangan sering palsu. Apa pun pilihannya, tuliskan di rencana sebelum posisi dibuka."},

{id:"rta-trend-h08",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Harga menembus resistance yang telah diuji empat kali, tetapi volume pada hari penembusan hanya setengah rata-rata 20 hari. Sepekan kemudian harga masih bertahan di atasnya. Bagaimana menilainya?",
 options:["Penembusan itu pasti palsu karena volume rendah membatalkan setiap penembusan tanpa kecuali","Volume tidak relevan sama sekali sehingga penembusan ini setara dengan penembusan bervolume tinggi","Harus menunggu resistance itu diuji untuk kelima kalinya sebelum penilaian apa pun dibuat","Bertahannya harga adalah konfirmasi tersendiri, meski kualitas penembusannya lebih rendah dari ideal"],
 answer:3,
 explain:"Volume adalah bukti pendukung, bukan syarat mutlak. Volume rendah menandakan sedikit keyakinan, sehingga peluang gagalnya lebih besar dan ukuran posisi sepatutnya dikecilkan. Namun waktu juga menguji: harga yang bertahan di atas resistance selama sepekan berarti tidak ada gelombang penjualan yang mendorongnya kembali, dan itu bukti dari jenis yang berbeda."},

{id:"rta-trend-h09",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Grafik mingguan menunjukkan tren naik, grafik harian tren turun, dan grafik jam menunjukkan tren naik. Bagaimana kerangka multi timeframe menyusun ketiganya?",
 options:["Mingguan menentukan arah, harian menandai koreksi yang sedang berjalan, dan jam mencari titik masuknya","Ketiganya bertentangan sehingga tidak ada posisi yang boleh dibuka sampai semuanya searah","Grafik jam yang dipakai karena paling mutakhir dan paling cepat memberi sinyal","Ketiga timeframe harus dirata-rata untuk memperoleh satu arah tunggal yang sahih"],
 answer:0,
 explain:"Susunan ini justru situasi yang dicari, bukan kebingungan. Tren mingguan naik memberi arah, tren harian turun berarti sedang ada koreksi yang menawarkan harga lebih baik, dan tren jam yang berbalik naik menandakan koreksi itu mulai habis. Menunggu ketiganya searah biasanya berarti masuk terlambat dengan stop yang jauh."},

{id:"rta-trend-h10",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham membentuk pola double top dengan dua puncak di 5.000 dan lembah di 4.400, lalu menembus ke bawah. Namun sektornya sedang menguat dan indeks mencetak rekor baru. Apa sikap yang paling tepat?",
 options:["Mengabaikan indeks dan sektor karena analisis saham individu berdiri sendiri sepenuhnya","Tetap mengikuti sinyal polanya dengan ukuran lebih kecil, karena konteks yang berlawanan menurunkan peluang keberhasilan","Membatalkan pola itu sepenuhnya karena kekuatan indeks selalu mengalahkan pola saham individu","Menggandakan posisi jual karena pola yang muncul saat pasar kuat justru lebih bertenaga"],
 answer:1,
 explain:"Pola bekerja lebih baik bila searah arus yang lebih besar. Melawan sektor yang menguat dan indeks yang mencetak rekor bukan berarti mustahil, tetapi menurunkan peluang dan memperbesar kemungkinan tersapu. Penyesuaian yang masuk akal terletak pada ukuran posisi, bukan pada mengabaikan salah satu informasi."},

{id:"rta-trend-h11",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Selama enam bulan harga bergerak dalam rentang sempit tanpa arah. Seorang analis memaksa menarik garis tren naik dari dua titik terendah yang berjauhan. Apa masalah mendasarnya?",
 options:["Garis tren memang boleh ditarik kapan saja karena selalu memberikan informasi berguna","Masalahnya pada pilihan skala grafik, bukan pada keadaan pasar yang mendatar","Pasar mendatar tidak punya tren untuk digambar, sehingga garis itu tidak mencerminkan apa pun","Masalahnya hanya pada jumlah titik sentuh yang kurang, dan garisnya sah bila ditambah satu titik lagi"],
 answer:2,
 explain:"Pasar hanya bertren sekitar sepertiga waktunya; sisanya bergerak mendatar. Memaksakan garis tren pada pasar mendatar adalah cara klasik melihat sesuatu yang tidak ada. Perangkat yang sesuai untuk kondisi ini berbeda: batas atas dan bawah rentang, osilator yang bekerja di kedua ujung, atau sekadar menunggu sampai rentangnya ditembus."},

{id:"rta-trend-h12",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Harga menembus rentang konsolidasi ke atas, lalu dalam dua hari kembali turun ke tengah rentang. Apa pembacaan yang paling tepat?",
 options:["Penembusan itu tetap sah karena harga sudah pernah berada di atas batas rentang","Konsolidasi hanya berlanjut, sehingga batas rentang lama tetap berlaku seperti sebelumnya","Harga akan otomatis kembali menembus ke atas karena arah penembusan pertama menentukan","Penembusan palsu, dan harga sering bergerak jauh ke arah berlawanan karena pembeli baru terjebak"],
 answer:3,
 explain:"Penembusan yang gagal adalah salah satu sinyal paling bertenaga justru karena menciptakan korban. Mereka yang membeli di atas rentang kini menanggung rugi dan penjualannya menambah tekanan, sementara penjual yang semula ragu mendapat keberanian. Karena itu banyak pendekatan sengaja memburu penembusan palsu alih-alih penembusan itu sendiri."},

/* ===== rta-level ===== */
{id:"rta-level-h06",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Support di 3.000 telah diuji lima kali dalam empat bulan dan bertahan setiap kali. Apakah ini membuatnya makin kuat atau makin rapuh?",
 options:["Makin rapuh, karena setiap pengujian menghabiskan sebagian permintaan yang tersedia di level itu","Makin kuat, karena semakin sering bertahan berarti semakin banyak pembeli yang membelanya","Tidak berubah, karena kekuatan support hanya ditentukan volume pada pembentukan awalnya","Tidak dapat dinilai, karena jumlah pengujian tidak berkaitan dengan kekuatan sebuah level"],
 answer:0,
 explain:"Ini salah satu hal yang paling sering dibalik pemahamannya. Support bertahan karena ada pesanan beli di sana; setiap pengujian menyerap sebagian pesanan itu tanpa selalu digantikan. Pengujian kelima menghadapi antrean yang jauh lebih tipis daripada yang pertama. Pola perilakunya pun berubah: pantulan makin pendek dan makin cepat kembali diuji."},

{id:"rta-level-h07",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Harga menembus support 2.800 lalu beberapa pekan kemudian naik kembali dan berhenti tepat di 2.800. Apa yang biasanya terjadi di level itu dan mengapa?",
 options:["Harga akan langsung menembusnya karena level yang pernah ditembus tidak lagi menahan","Level itu berubah menjadi resistance karena pembeli lama yang terjebak menjual saat kembali ke titik impas","Level itu tetap menjadi support karena sifat sebuah level tidak berubah setelah terbentuk","Level itu kehilangan seluruh maknanya setelah sekali ditembus dan dapat diabaikan"],
 answer:1,
 explain:"Pertukaran peran ini berakar pada psikologi kerugian. Mereka yang membeli di 2.800 dan tertahan rugi berbulan-bulan cenderung melepas begitu harga kembali ke harga beli, sekadar untuk lepas dari tekanan. Pasokan mendadak itulah yang membuat level lama menahan dari sisi sebaliknya, dan kekuatannya sebanding dengan volume yang dulu diperdagangkan di sana."},

{id:"rta-level-h08",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Pada grafik, tiga hal bertemu di area 4.500: koreksi Fibonacci 61,8 persen, rata-rata bergerak 200 hari, dan puncak lama. Apa istilah dan makna praktisnya?",
 options:["Divergensi, karena tiga metode berbeda tidak seharusnya menunjuk ke level yang sama","Redundansi, sehingga dua di antara tiga alat itu harus dibuang dari analisis","Konfluensi, yang meningkatkan peluang level itu bertahan dan memberi stop yang lebih ringkas","Kebetulan statistik yang tidak menambah kekuatan level tersebut sama sekali"],
 answer:2,
 explain:"Konfluensi bekerja karena kelompok pelaku pasar yang berbeda mengawasi alasan yang berbeda, tetapi pesanan mereka menumpuk di harga yang sama. Keuntungan praktisnya bukan sekadar peluang lebih tinggi: karena areanya sempit dan jelas, stop dapat ditempatkan tepat di baliknya, sehingga rasio imbalan terhadap risiko membaik tanpa menambah risiko."},

{id:"rta-level-h09",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Analis menarik koreksi Fibonacci dari titik terendah 1.000 ke puncak 2.000, tetapi rekan kerjanya menariknya dari 1.200 ke 2.000 karena memakai awal ayunan yang berbeda. Apa yang menentukan penarikan mana yang sahih?",
 options:["Penarikan dari titik terendah absolut selalu yang paling sahih dalam setiap keadaan","Keduanya sahih sehingga seluruh level dari kedua penarikan dapat dipakai bersamaan","Yang sahih adalah penarikan yang menghasilkan level terdekat dengan harga saat ini","Ayunan yang dipilih harus merupakan pergerakan bermakna yang diakui struktur grafik, bukan titik yang dipilih sesuka hati"],
 answer:3,
 explain:"Kelemahan terbesar Fibonacci adalah kebebasan memilih titik jangkar, dan di situlah bias masuk. Disiplin yang lazim: jangkarkan pada ayunan yang jelas terlihat pada timeframe yang sedang dianalisis, tandai sebelum posisi dibuka, dan jangan pernah menggeser jangkar hanya agar sebuah level jatuh di tempat yang diinginkan."},

{id:"rta-level-h10",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham menembus resistance psikologis di angka bulat 10.000 dengan volume besar. Mengapa angka bulat sering berperilaku seperti level teknikal sungguhan?",
 options:["Banyak pesanan beli dan jual ditempatkan di angka bulat, sehingga di situ benar-benar menumpuk pasokan dan permintaan","Angka bulat memiliki sifat matematis khusus yang memengaruhi pergerakan harga","Bursa secara teknis memperlambat perdagangan setiap kali harga menyentuh angka bulat","Angka bulat hanya berperan pada indeks dan tidak pernah berlaku pada saham individu"],
 answer:0,
 explain:"Level psikologis bersifat memenuhi dirinya sendiri dalam arti yang paling harfiah: manusia membulatkan, sehingga pesanan limit dan stop menumpuk di 10.000, bukan di 9.987. Tumpukan itu nyata ada di buku pesanan. Karena stop juga menumpuk tepat di baliknya, penembusan angka bulat kerap disusul percepatan saat rentetan stop tersentuh."},

{id:"rta-level-h11",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Harga jatuh menembus support penting dalam sehari dengan penurunan 9 persen, tetapi kejadian itu bertepatan dengan pengumuman rights issue. Bagaimana analis teknikal sebaiknya menanganinya?",
 options:["Menunggu sampai rights issue selesai dan menghapus periode itu dari grafik sepenuhnya","Memeriksa apakah penurunan sepadan dengan pengenceran kepemilikan sebelum membacanya sebagai penembusan teknikal","Memperlakukannya sebagai penembusan biasa karena analisis teknikal tidak mempedulikan sebab pergerakan","Mengabaikan seluruh grafik saham itu karena aksi korporasi membuat datanya tidak dapat dipakai"],
 answer:1,
 explain:"Aksi korporasi mengubah nilai dasar per lembar, bukan sikap pasar. Bila penurunan 9 persen kira-kira setara dengan pengenceran teoretisnya, tidak ada penjualan sungguhan yang terjadi dan support itu sebenarnya belum diuji. Bila penurunannya jauh melebihi pengenceran, selisihnya barulah penolakan pasar yang nyata dan layak dibaca secara teknikal."},

/* ===== rta-indikator ===== */
{id:"rta-ind-h06",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"RSI bertahan di atas 70 selama tiga pekan sementara harga terus mencetak puncak baru. Apa tindakan yang paling tepat?",
 options:["Menunggu RSI menyentuh 90 sebelum mempertimbangkan penjualan apa pun","Mengganti RSI dengan periode lebih panjang sampai bacaannya turun di bawah 70","Memperlakukannya sebagai tanda kekuatan tren dan mengikuti harga, bukan sebagai sinyal jual","Menjual seluruh posisi karena RSI di atas 70 selalu berarti harga sudah terlalu tinggi"],
 answer:2,
 explain:"Jenuh beli berarti bergerak kuat, bukan terlalu mahal. Pada tren perawan yang sedang bertenaga, RSI dapat bertahan di zona itu berminggu-minggu sementara penjual dini terus tergilas. Wilder sendiri memakai 70 sebagai peringatan, bukan pemicu. Sinyal yang sesungguhnya biasanya baru datang ketika RSI jatuh kembali ke bawah 70 setelah membentuk divergensi."},

{id:"rta-ind-h07",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham bergerak mendatar selama dua bulan dan sistem persilangan rata-rata bergerak menghasilkan tujuh sinyal, enam di antaranya merugi. Apa akar masalahnya?",
 options:["Periode rata-rata bergerak yang dipakai terlalu panjang sehingga sinyalnya terlambat","Sistem persilangan memang selalu merugi dan tidak layak dipakai pada kondisi apa pun","Jumlah tujuh sinyal terlalu sedikit untuk dinilai sehingga belum ada masalah apa pun","Alat pengikut tren dipakai pada pasar tanpa tren, sehingga menghasilkan sinyal bolak-balik yang merugi"],
 answer:3,
 explain:"Setiap indikator punya lingkungan tempatnya bekerja. Rata-rata bergerak dirancang menangkap tren panjang dan dengan sadar menerima banyak sinyal palsu sebagai ongkosnya. Pada pasar mendatar, ongkos itu datang tanpa imbalannya. Penangkalnya adalah penyaring keadaan pasar, misalnya ADX di bawah 20 berarti sinyal persilangan diabaikan sama sekali."},

{id:"rta-ind-h08",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Analis memasang RSI, stochastic, CCI, dan Williams %R sekaligus, lalu merasa yakin karena keempatnya memberi sinyal beli bersamaan. Apa kekeliruan berpikirnya?",
 options:["Keempatnya mengukur hal yang hampir sama, sehingga kesepakatan itu hanya satu bukti yang diulang empat kali","Tidak ada kekeliruan karena semakin banyak indikator semakin tinggi keandalan sinyalnya","Kekeliruannya hanya pada tampilan layar yang menjadi terlalu penuh dan sulit dibaca","Keempat indikator itu tidak boleh dipakai bersamaan karena rumusnya saling bertentangan"],
 answer:0,
 explain:"Ini disebut redundansi indikator. Semuanya berakar pada perbandingan harga terkini terhadap rentang terakhir, sehingga korelasinya sangat tinggi dan mereka hampir selalu sepakat. Rasa yakin yang timbul palsu. Kombinasi yang benar-benar menambah informasi mengukur dimensi berbeda: satu untuk tren, satu untuk momentum, satu untuk volume, satu untuk volatilitas."},

{id:"rta-ind-h09",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Harga sebuah saham naik 40 persen dalam enam pekan dan ATR-nya berlipat dari 50 menjadi 140 poin. Apa penyesuaian yang paling tepat pada posisi baru?",
 options:["Berhenti memakai ATR dan menggantinya dengan stop persentase tetap yang lebih sederhana","Memperkecil jumlah lembar karena stop berbasis ATR kini jauh lebih lebar untuk risiko rupiah yang sama","Memperbesar jumlah lembar karena kenaikan volatilitas menandakan peluang keuntungan lebih besar","Mempertahankan jumlah lembar yang sama karena ATR tidak berkaitan dengan ukuran posisi"],
 answer:1,
 explain:"Ukuran posisi berbasis volatilitas menjaga risiko rupiah tetap, bukan jumlah lembar. Bila stop dipasang dua kali ATR, jaraknya melebar dari 100 menjadi 280 poin, sehingga jumlah lembar harus turun hampir tiga kali lipat. Melewatkan penyesuaian ini adalah cara paling umum kerugian tiba-tiba menjadi berkali lipat dari yang direncanakan."},

{id:"rta-ind-h10",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"MACD memberi sinyal beli pada persilangan di bawah garis nol, sementara MACD lain memberi sinyal beli pada persilangan di atas garis nol. Apa perbedaan maknanya?",
 options:["Keduanya identik karena posisi terhadap garis nol tidak membawa informasi tambahan","Persilangan di atas nol menandakan sinyal palsu karena harga sudah terlambat untuk dibeli","Persilangan di atas nol terjadi saat momentum jangka menengah sudah positif, sehingga searah tren yang berlaku","Persilangan di bawah nol selalu lebih andal karena harganya masih lebih murah"],
 answer:2,
 explain:"Garis nol menandai apakah EMA cepat berada di atas EMA lambat, yakni arah tren menengah. Persilangan di atas nol adalah sinyal searah tren dengan peluang bertahan lebih baik; persilangan di bawah nol adalah taruhan melawan tren yang masih negatif, lebih dini tetapi lebih sering gagal. Memisahkan keduanya dalam catatan biasanya memperlihatkan selisih kinerja yang mencolok."},

{id:"rta-ind-h11",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Analis mengubah periode rata-rata bergerak dari 20 menjadi 18 hari karena uji balik menunjukkan hasil terbaik pada 18. Mengapa langkah ini patut diwaspadai?",
 options:["Periode rata-rata bergerak memang tidak boleh diubah dari angka baku yang sudah lazim dipakai","Masalahnya hanya pada waktu komputasi tambahan yang dibutuhkan untuk menguji ulang","Angka 18 tidak boleh dipakai karena periode yang sah hanyalah bilangan kelipatan lima","Nilai terbaik yang berdiri sendiri di antara tetangganya biasanya hasil kebisingan, bukan keunggulan nyata"],
 answer:3,
 explain:"Uji kekukuhan lebih penting daripada nilai puncaknya. Bila 17 dan 19 menghasilkan kinerja buruk sementara 18 melejit, itu tanda parameter tersebut menempel pada kebisingan periode uji. Yang dicari adalah dataran tinggi: sekelompok nilai berdekatan yang semuanya berkinerja baik, lalu diambil nilai di tengahnya meski bukan yang tertinggi."},

/* ===== cta-portfolio ===== */
{id:"cta-pf-h05",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Portofolio berisi sepuluh saham dari delapan sektor berbeda, tetapi semuanya saham pertumbuhan berkapitalisasi kecil. Seberapa efektif penyebaran risikonya?",
 options:["Terbatas, karena kesamaan gaya dan ukuran membuat semuanya jatuh bersama saat selera risiko pasar berbalik","Sangat efektif, karena delapan sektor berbeda sudah menghapus hampir seluruh risiko tidak sistematis","Tidak efektif sama sekali, karena penyebaran hanya bermakna bila melibatkan kelas aset berbeda","Tidak dapat dinilai tanpa mengetahui bobot masing-masing saham dalam portofolio"],
 answer:0,
 explain:"Penyebaran sektor hanya satu dimensi. Faktor gaya dan ukuran sering lebih menentukan: saat selera risiko pasar berbalik, saham kecil berbasis pertumbuhan dijual serentak lintas sektor. Portofolio yang benar-benar tersebar memperhatikan sektor, ukuran, gaya, dan kepekaan terhadap pasar, bukan sekadar menghitung berapa nama yang dimiliki."},

{id:"cta-pf-h06",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Analis memberi bobot sama pada dua posisi, tetapi saham pertama punya ATR 2 persen dan saham kedua 8 persen. Apa akibatnya bagi portofolio?",
 options:["Volatilitas masing-masing saham tidak berkaitan dengan risiko portofolio secara keseluruhan","Saham kedua menyumbang sekitar empat kali lebih besar terhadap gejolak portofolio meski nilainya sama","Kontribusi keduanya sama besar karena nilai rupiah yang diinvestasikan juga sama","Saham pertama lebih berisiko karena volatilitasnya yang rendah membuatnya sulit dijual"],
 answer:1,
 explain:"Bobot rupiah yang sama tidak berarti risiko yang sama. Posisi dengan volatilitas empat kali lipat mendominasi naik turunnya portofolio dan praktis menentukan hasil akhirnya. Pendekatan paritas risiko membalik urutannya: tentukan kontribusi risiko yang diinginkan dari tiap posisi, lalu turunkan nilai rupiahnya dengan membagi terhadap volatilitas masing-masing."},

{id:"cta-pf-h07",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Selama krisis pasar, korelasi antaraset dalam portofolio yang semula 0,3 melonjak menjadi 0,85. Apa implikasi paling penting dari gejala ini?",
 options:["Gejala ini hanya terjadi pada data harian dan tidak berpengaruh pada portofolio jangka panjang","Portofolio menjadi lebih aman karena pergerakan yang seragam lebih mudah diperkirakan","Penyebaran risiko justru menghilang tepat pada saat paling dibutuhkan, sehingga perlu lapis perlindungan lain","Korelasi yang meningkat menguntungkan karena seluruh aset akan pulih bersamaan"],
 answer:2,
 explain:"Inilah kelemahan paling menyakitkan dari penyebaran risiko: korelasi dihitung dari masa tenang, lalu runtuh menjadi satu saat kepanikan. Penyebab mekanisnya adalah penjualan paksa dan permintaan jaminan, yang memaksa pelaku melepas apa pun yang bisa dijual. Karena itu manajer berpengalaman menambahkan aturan pengurangan posisi dan lindung nilai, bukan bersandar pada korelasi semata."},

{id:"cta-pf-h08",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Sebuah posisi tumbuh dari bobot awal 5 persen menjadi 22 persen portofolio karena kenaikan harganya. Apa pertimbangan utama dalam menyikapinya?",
 options:["Selalu memangkasnya kembali ke 5 persen karena bobot awal adalah aturan yang tidak boleh dilanggar","Selalu membiarkannya karena memangkas pemenang adalah kesalahan terbesar dalam berinvestasi","Menambah posisi itu lagi karena kenaikannya membuktikan pilihan awalnya tepat","Menimbang antara membiarkan pemenang berjalan dan risiko satu posisi yang kini menentukan nasib portofolio"],
 answer:3,
 explain:"Kedua sisinya sama-sama punya dasar. Membiarkan pemenang berjalan adalah sumber sebagian besar keuntungan jangka panjang, tetapi konsentrasi 22 persen berarti satu berita buruk sanggup menghapus kinerja setahun. Jalan tengah yang lazim adalah memangkas sebagian pada ambang tertentu sambil menyisakan inti posisi, sehingga potensi tidak dimatikan tetapi risiko bencana dibatasi."},

{id:"cta-pf-h09",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Portofolio memiliki beta 1,4 terhadap indeks. Bila analis memperkirakan pasar akan turun tetapi tidak ingin menjual posisinya, apa pilihan yang paling relevan?",
 options:["Melakukan lindung nilai dengan menjual kontrak berjangka indeks sebesar eksposur beta yang ingin dinetralkan","Membeli lebih banyak saham berbeta tinggi agar rata-rata betanya turun dengan sendirinya","Mengabaikan beta karena ukuran ini hanya berlaku pada pasar yang sedang naik","Menjual seluruh portofolio karena lindung nilai selalu lebih mahal daripada menjual langsung"],
 answer:0,
 explain:"Beta 1,4 berarti portofolio diperkirakan bergerak 1,4 kali indeks, sehingga nilai lindung nilainya adalah nilai portofolio dikalikan 1,4, bukan nilai portofolio itu sendiri. Cara ini mempertahankan posisi saham beserta keunggulan pemilihannya sambil menumpulkan risiko pasar. Biayanya nyata: potensi keuntungan ikut terpotong bila perkiraan penurunan ternyata meleset."},

{id:"cta-pf-h10",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Aturan portofolio menetapkan penyeimbangan ulang setiap kuartal. Pada pasar yang sedang bertren kuat, apa kelemahan aturan ini?",
 options:["Aturan ini membuat portofolio menjadi terlalu terkonsentrasi pada posisi yang menang","Penyeimbangan berkala memangkas posisi yang sedang menang dan menambah yang kalah, berlawanan dengan arah tren","Penyeimbangan berkala tidak memiliki kelemahan apa pun karena selalu mengembalikan risiko ke rencana","Kelemahannya hanya pada biaya transaksi yang timbul setiap kuartal"],
 answer:1,
 explain:"Penyeimbangan berkala pada dasarnya adalah strategi kembali ke rata-rata, dan itu bertabrakan dengan pasar yang bertren. Pada tren panjang, ia berulang kali memotong posisi terbaik untuk menambah yang terburuk. Alternatifnya adalah penyeimbangan berbasis ambang atau berbasis risiko, yang hanya bertindak ketika bobot risiko benar-benar melewati batas, bukan sekadar karena kalender berganti."},

/* ===== cta-sistem ===== */
{id:"cta-sis-h09",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem yang diuji tanpa biaya transaksi menghasilkan 34 persen setahun dengan rata-rata 800 transaksi. Setelah biaya dan selisih harga beli jual dimasukkan, hasilnya menjadi minus 6 persen. Apa pelajarannya?",
 options:["Sistem itu tetap layak dipakai karena hasil sebelum biaya membuktikan logikanya benar","Masalahnya pada besaran biaya yang dikenakan pialang, bukan pada rancangan sistemnya","Sistem dengan frekuensi tinggi sangat rapuh terhadap biaya, sehingga biaya harus dihitung sejak awal perancangan","Biaya transaksi merupakan faktor kecil yang dapat diabaikan pada tahap perancangan sistem"],
 answer:2,
 explain:"Dengan 800 transaksi setahun, biaya 0,25 persen sekali jalan saja sudah menghapus 40 persen keuntungan kotor. Dua hal mengikuti dari sini: masukkan biaya realistis ke dalam simulasi sejak baris pertama ditulis, dan waspadai bahwa makin tinggi frekuensi, makin besar porsi keuntungan yang sebenarnya milik pialang dan penyedia likuiditas."},

{id:"cta-sis-h10",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem mekanis memberi sinyal jual, tetapi analis merasa keadaan pasar hari itu tidak biasa dan memilih mengabaikannya. Apa risiko terbesar dari keputusan ini?",
 options:["Tidak ada risiko selama penilaian manusia dilakukan oleh analis yang berpengalaman","Risikonya hanya pada satu transaksi itu saja dan tidak berpengaruh pada jangka panjang","Sistem mekanis memang seharusnya selalu disaring lebih dulu oleh penilaian manusia","Statistik sistem menjadi tidak berarti karena yang dijalankan bukan lagi sistem yang diuji"],
 answer:3,
 explain:"Nilai sebuah sistem mekanis sepenuhnya bertumpu pada dijalankannya secara utuh. Begitu sinyal disaring berdasarkan perasaan, harapan keuntungan hasil uji tidak lagi menggambarkan apa yang dijalankan, dan tidak ada cara mengetahui apakah penyaringan itu menambah atau mengurangi nilai. Bila memang ada keadaan yang perlu dikecualikan, jadikan ia aturan tertulis yang bisa diuji, bukan kebijaksanaan sesaat."},

{id:"cta-sis-h11",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem pengikut tren memiliki rasio kemenangan 38 persen tetapi menguntungkan. Mengapa sistem semacam ini sulit dijalankan secara psikologis?",
 options:["Rentetan kekalahan panjang terjadi wajar, sehingga keyakinan sering runtuh justru menjelang transaksi besar datang","Sistem dengan rasio kemenangan di bawah 50 persen secara matematis tidak mungkin menguntungkan","Kesulitannya hanya pada rumitnya perhitungan yang harus dilakukan setiap hari","Sistem pengikut tren sebenarnya mudah dijalankan karena sinyalnya jarang muncul"],
 answer:0,
 explain:"Pada rasio kemenangan 38 persen, rentetan delapan sampai sepuluh kekalahan beruntun adalah kejadian yang secara statistik pasti muncul, bukan tanda sistem rusak. Masalahnya, sebagian besar keuntungan tahunan datang dari beberapa tren besar, dan orang cenderung menyerah tepat sebelumnya. Karena itu mengetahui panjang rentetan kekalahan terburuk pada uji balik sama pentingnya dengan mengetahui keuntungannya."},

{id:"cta-sis-h12",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem memakai aturan keluar dengan target tetap 2R dan stop 1R. Analis ingin meningkatkan hasilnya. Mana perubahan yang paling mungkin berpengaruh besar?",
 options:["Menambah indikator penyaring sampai jumlah sinyalnya berkurang setengah","Mengganti target tetap dengan trailing stop agar tren besar tidak terpotong di 2R","Memperketat stop menjadi 0,5R agar setiap kerugian menjadi lebih kecil","Menaikkan rasio kemenangan dengan memperkecil target menjadi 1R"],
 answer:1,
 explain:"Target tetap menetapkan batas atas pada hasil setiap transaksi, dan justru transaksi luar biasalah yang biasanya menopang seluruh kinerja tahunan. Trailing stop membiarkan langit terbuka dengan ongkos mengembalikan sebagian keuntungan. Memperketat stop menjadi 0,5R sering kontraproduktif karena posisi terlempar oleh fluktuasi normal sebelum idenya sempat terbukti."},

{id:"cta-sis-h13",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem diuji pada satu saham dan hasilnya sangat baik. Sebelum dijalankan dengan uang nyata, uji tambahan mana yang paling penting dilakukan?",
 options:["Menguji dengan modal yang lebih besar untuk memastikan hasilnya berskala","Menguji ulang dengan parameter yang dioptimalkan sekali lagi pada data terbaru","Menguji pada banyak saham dan pasar lain, karena hasil yang hanya berlaku pada satu instrumen patut dicurigai","Menguji ulang pada saham yang sama dengan periode data yang lebih panjang lagi"],
 answer:2,
 explain:"Logika pasar yang sungguh berlaku semestinya bekerja lintas instrumen, meski dengan mutu berbeda. Bila sebuah sistem hanya bersinar pada satu saham dan runtuh di tempat lain, kemungkinan besar ia menghafal sejarah saham itu. Menambah panjang data pada instrumen yang sama tidak menjawab pertanyaan ini, dan mengoptimalkan ulang justru memperburuknya."},

{id:"cta-sis-h14",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Uji balik mencatat kemampuan membeli 500.000 lembar tepat pada harga sinyal, padahal volume harian rata-rata saham itu hanya 900.000 lembar. Apa masalahnya?",
 options:["Tidak ada masalah selama volume hariannya masih lebih besar daripada jumlah yang dibeli","Masalahnya hanya pada waktu eksekusi yang lebih lama, bukan pada harga yang diperoleh","Uji balik memang tidak perlu memperhatikan volume karena hanya menyimulasikan harga","Dampak pasar diabaikan, padahal pesanan sebesar itu akan menggerakkan harga melawan pelakunya sendiri"],
 answer:3,
 explain:"Membeli 500.000 dari volume harian 900.000 lembar berarti menjadi lebih dari separuh pasar hari itu. Pesanan sebesar ini menyapu buku pesanan dan menaikkan harga saat membeli serta menekannya saat menjual, dan kerugian tersembunyi itu bisa menelan seluruh keunggulan sistem. Batasan yang lazim: maksimal satu sampai lima persen volume harian rata-rata."},

/* ===== cta-aset ===== */
{id:"cta-as-h07",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Rasio harga emas terhadap indeks saham telah menembus ke atas setelah tiga tahun menurun. Apa makna paling tepat bagi alokasi aset?",
 options:["Kepemimpinan relatif berpindah ke emas, sehingga bobot aset lindung nilai layak ditinjau ulang","Emas pasti akan naik dalam harga mutlak karena rasionya menembus ke atas","Indeks saham pasti akan jatuh karena rasio hanya dapat naik bila penyebutnya turun","Rasio antaraset tidak dapat dianalisis secara teknikal karena bukan harga sesungguhnya"],
 answer:0,
 explain:"Analisis rasio berbicara tentang kekuatan relatif, bukan arah mutlak. Rasio bisa naik karena emas naik lebih cepat, karena emas turun lebih lambat, atau karena saham jatuh. Yang disampaikannya adalah pergeseran kepemimpinan, dan itu cukup untuk memicu peninjauan bobot, bukan untuk menyimpulkan salah satunya pasti naik atau turun."},

{id:"cta-as-h08",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Imbal hasil obligasi pemerintah naik tajam sementara indeks saham mencetak rekor. Apa hubungan antarpasar yang perlu diperhatikan?",
 options:["Hubungan antarpasar hanya berlaku antara komoditas dan mata uang, bukan obligasi dan saham","Biaya modal yang meningkat pada akhirnya menekan penilaian saham, terutama saham pertumbuhan","Kedua pasar sepenuhnya terpisah sehingga pergerakannya tidak saling memberi informasi","Imbal hasil obligasi yang naik selalu berarti saham akan segera naik lebih tinggi lagi"],
 answer:1,
 explain:"Imbal hasil yang naik berarti tingkat diskonto naik, dan arus kas jauh di masa depan paling terpukul; itulah sebabnya saham pertumbuhan biasanya yang pertama goyah. Jeda waktunya bisa panjang sehingga keduanya sempat naik bersama beberapa lama. Analis antarpasar mengamati kecepatan kenaikan imbal hasil dan rotasi sektor sebagai tanda kapan tekanan itu mulai digigit pasar."},

{id:"cta-as-h09",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Dolar Amerika menguat tajam. Bagi analis komoditas, apa implikasi yang paling umum dan mengapa?",
 options:["Penguatan dolar tidak memiliki hubungan apa pun dengan harga komoditas global","Hanya harga emas yang terpengaruh sedangkan komoditas lain sepenuhnya kebal","Harga komoditas berdenominasi dolar cenderung tertekan karena menjadi lebih mahal bagi pembeli mata uang lain","Harga komoditas selalu naik bersama dolar karena keduanya sama-sama aset lindung nilai"],
 answer:2,
 explain:"Karena sebagian besar komoditas global dihargai dalam dolar, penguatan dolar membuat barang yang sama menjadi lebih mahal bagi pembeli di luar Amerika dan permintaan cenderung mengendur. Hubungan terbalik ini kuat secara historis tetapi bukan hukum: guncangan pasokan seperti gagal panen atau konflik dapat mendorong harga naik meski dolar sedang perkasa."},

{id:"cta-as-h10",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Analis membandingkan grafik kekuatan relatif sektor terhadap indeks untuk sembilan sektor. Bagaimana rotasi sektor membantu membaca tahapan siklus ekonomi?",
 options:["Seluruh sektor bergerak bersamaan sehingga kekuatan relatif tidak membawa informasi","Sektor dengan kekuatan relatif terlemah selalu yang paling layak dibeli lebih dulu","Rotasi sektor hanya mencerminkan arus dana jangka pendek tanpa kaitan dengan ekonomi","Sektor yang unggul bergeser mengikuti tahapan siklus, sehingga kepemimpinan memberi petunjuk posisi ekonomi saat ini"],
 answer:3,
 explain:"Urutan umumnya: sektor keuangan dan konsumsi sekunder memimpin pemulihan awal, teknologi dan industri pada fase pertumbuhan, energi dan bahan dasar menjelang puncak, lalu kesehatan dan konsumsi primer saat pelemahan. Kepemimpinan sering bergeser sebelum data ekonomi terbit, sehingga rotasi berfungsi sebagai penunjuk awal, meski urutannya tidak pernah serapi teorinya."},

{id:"cta-as-h11",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Dua indeks saham negara berbeda tampak bergerak serupa, tetapi salah satunya diukur dalam mata uang lokal yang sedang melemah 18 persen. Apa yang perlu dilakukan sebelum membandingkannya?",
 options:["Menyamakan mata uang keduanya, karena imbal hasil bagi investor asing sangat berbeda dari yang tampak","Membandingkan langsung saja karena pergerakan indeks lokal adalah ukuran yang paling jujur","Mengabaikan indeks yang mata uangnya melemah karena datanya tidak dapat dipercaya","Menambahkan 18 persen pada indeks yang melemah agar keduanya menjadi setara"],
 answer:0,
 explain:"Indeks yang naik 10 persen dalam mata uang yang melemah 18 persen sebenarnya merugikan investor asing. Membandingkan keduanya dalam satuan yang sama, biasanya dolar, memperlihatkan gambaran yang bertolak belakang dari grafik lokalnya. Inilah sebabnya analis global membaca grafik berdenominasi dolar lebih dulu, baru grafik lokal untuk menilai keadaan domestiknya."},

{id:"cta-as-h12",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Sebuah aset yang selama sepuluh tahun berkorelasi negatif dengan saham kini bergerak searah selama enam bulan. Bagaimana sebaiknya analis menyikapinya?",
 options:["Menambah kepemilikan aset itu karena pergerakan searah menandakan keduanya sama-sama akan naik","Meninjau kembali asumsi lindung nilainya, karena korelasi historis tidak menjamin perilaku masa depan","Mengabaikannya karena korelasi sepuluh tahun jauh lebih kuat daripada enam bulan terakhir","Menghentikan kepemilikan aset itu seketika karena korelasi negatifnya terbukti hilang"],
 answer:1,
 explain:"Korelasi adalah ukuran yang berubah-ubah, bukan sifat bawaan sebuah aset; ia bergeser bersama rezim suku bunga, likuiditas, dan siapa yang memegangnya. Enam bulan belum tentu permanen, tetapi cukup untuk memicu peninjauan. Sikap yang seimbang adalah memantau korelasi bergulir sebagai besaran yang hidup, bukan sebagai angka tetap dalam dokumen kebijakan."}
]);
