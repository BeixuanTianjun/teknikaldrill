/* Soal HOTS batch 6 — rta-chart, rta-trend, rta-level, rta-indikator,
   cta-portfolio, cta-sistem, cta-aset */
TD.register([
/* ===== rta-chart ===== */
{id:"rta-chart-h09",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham melakukan pemecahan nilai nominal empat banding satu. Grafik skala aritmetika menunjukkan penurunan tajam pada hari itu, sedangkan grafik yang disesuaikan tidak. Mana yang benar dan mengapa?",
 options:["Grafik yang disesuaikan, karena pemecahan nominal tidak mengubah nilai kepemilikan pemegang saham","Grafik aritmetika, karena harga per lembar memang benar-benar turun pada hari itu","Keduanya salah karena grafik tidak boleh dipakai pada saham yang pernah memecah nominal","Grafik aritmetika, karena penyesuaian data selalu menghilangkan informasi yang penting"],
 answer:0,
 explain:"Stock split itu bagi harga sekaligus ngaliin jumlah lembar, jadi nilai kepemilikan lo nggak berubah seuprit pun. Punya 100 lembar di 4.000 jadi 400 lembar di 1.000, sama aja. Chart yang nggak disesuaikan bikin gap bodong yang gampang kebaca sebagai support jebol, padahal nggak ada yang jual. Kesalahan yang sama muncul di dividen gede. Makanya sebelum narik garis apa pun, pastiin dulu data lo udah adjusted."},

{id:"rta-chart-h10",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham naik dari 100 ke 200, lalu dari 200 ke 400. Pada skala semi logaritmik, bagaimana kedua kenaikan itu tampak dan apa gunanya?",
 options:["Keduanya tidak dapat dibandingkan karena skala logaritmik tidak mengenal konsep persentase","Sama tingginya, karena keduanya kenaikan 100 persen, sehingga laju perubahan lebih jujur terbaca","Kenaikan kedua tampak dua kali lebih tinggi karena selisih poinnya memang dua kali lipat","Kenaikan kedua tampak lebih rendah karena skala logaritmik memampatkan harga tinggi secara keliru"],
 answer:1,
 explain:"Skala logaritmik ngasih jarak vertikal yang SAMA buat perubahan persen yang sama. 100 ke 200 dan 200 ke 400 sama-sama naik 100%, jadi tingginya sama. Kenapa penting? Di saham yang naik berkali lipat bertahun-tahun, skala biasa bikin tahun-tahun awal keliatan datar, dan garis tren yang lo tarik di situ jadi nyesatin. Tapi buat chart harian yang rentang harganya sempit, bedanya hampir nggak kerasa. Jadi jangan ribut soal ini di timeframe pendek."},

{id:"rta-chart-h11",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Grafik garis yang hanya memakai harga penutupan tidak menampilkan celah pembukaan maupun ekor bayangan. Dalam situasi apa grafik ini justru lebih berguna daripada candlestick?",
 options:["Saat menghitung pola candlestick, karena garis mempertegas bentuk badan setiap lilin","Grafik garis tidak pernah lebih berguna dan hanya dipakai karena keterbatasan data","Saat menilai tren jangka sangat panjang, karena kebisingan intrahari disaring dan strukturnya lebih jelas","Saat memperdagangkan sesi harian, karena harga penutupan menentukan seluruh keputusan intrahari"],
 answer:2,
 explain:"Harga close dianggap paling bermakna karena di situlah posisi ditutup dan kesepakatan harian kebentuk. Buat chart sepuluh tahunan, nyaring ekor bayangan bikin level support dan resistance utama jauh lebih gampang kebaca — nggak keganggu sama sumbu-sumbu panjang hasil panik lima menit. Tapi kelemahannya nyata di jangka pendek: gap dan penolakan harga yang penting jadi ilang dari pandangan. Pilih alatnya sesuai jaraknya."},

{id:"rta-chart-h12",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Seorang analis membandingkan grafik saham dengan grafik indeks pada layar yang sama, tetapi memakai dua sumbu harga berbeda yang skalanya tidak sebanding. Apa risiko terbesarnya?",
 options:["Tidak ada risiko selama kedua grafik memakai rentang waktu yang sama panjang","Risikonya hanya pada tampilan, sedangkan kesimpulan analisisnya tetap akurat","Dua sumbu harga berbeda membuat grafik tidak dapat ditampilkan sama sekali","Kekuatan relatif dapat salah terbaca karena pergerakan yang berbeda besar tampak sama besar"],
 answer:3,
 explain:"Sumbu ganda yang direntangin beda bisa bikin saham yang naik 5% keliatan sekuat indeks yang naik 20%. Mata lo dibohongin sama skala. Cara yang jujur: normalisasi dua-duanya ke 100 di tanggal awal, atau langsung pakai RASIO harga saham dibagi indeks. Rasio ini ada bonusnya: garis tren dan pola bisa ditarik langsung di atasnya, jadi lo bisa lihat kapan saham mulai kalah dari pasarnya."},

{id:"rta-chart-h13",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Grafik point and figure tidak memiliki sumbu waktu yang seragam. Apa keunggulan sekaligus kelemahan dari sifat ini?",
 options:["Unggul menyaring pergerakan kecil dan memperjelas level, tetapi lemah untuk analisis berbasis waktu seperti siklus","Unggul dalam segala hal karena menghilangkan waktu berarti menghilangkan seluruh kebisingan","Lemah dalam segala hal karena analisis harga mustahil dilakukan tanpa sumbu waktu","Sifat ini tidak berpengaruh karena point and figure sesungguhnya memiliki sumbu waktu tersembunyi"],
 answer:0,
 explain:"Point and figure cuma nyatet kolom baru kalau harga gerak ngelewatin ambang pembalikan. Hari-hari mendatar nggak ninggalin jejak sama sekali. Hasilnya level horizontal dan garis tren 45 derajat keliatan bersih banget, nggak ada noise. Tapi ada harganya: analisis siklus, pola musiman, dan apa pun yang butuh kalender NGGAK BISA dikerjain di atasnya. Alat ini bagus buat nentuin level, payah buat nentuin waktu."},

{id:"rta-chart-h14",module:"rta-chart",level:"RTA",difficulty:"sulit",
 q:"Data kontrak berjangka disambung menjadi deret berkelanjutan dengan metode penyambungan yang berbeda-beda. Mengapa hal ini penting bagi analis teknikal?",
 options:["Semua penyedia data memakai metode yang sama sehingga perbedaan itu tidak pernah muncul","Level historis dan hasil uji balik dapat berubah nyata hanya karena metode penyambungannya berbeda","Metode penyambungan hanya urusan administratif dan tidak memengaruhi analisis harga","Kontrak berjangka tidak boleh dianalisis secara teknikal dalam keadaan apa pun"],
 answer:1,
 explain:"Tiap kali kontrak digulirin ke bulan berikutnya, muncul gap harga yang harus diapa-apain. Back-adjusted jaga bentuk pergerakan tapi bisa ngasilin harga NEGATIF di masa lalu. Dibiarin apa adanya jaga harga nyata tapi bikin gap palsu di chart. Nggak ada yang sempurna. Yang wajib: lo tau deret mana yang lagi lo pakai. Backtest yang jalan di deret yang salah bisa ngasih level support yang nggak pernah ada di dunia nyata."},

/* ===== rta-trend ===== */
{id:"rta-trend-h07",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Dua analis menarik garis tren pada grafik yang sama: satu memakai harga terendah setiap batang, satu lagi memakai harga penutupan terendah. Garis pertama sudah tertembus, garis kedua belum. Bagaimana menyelesaikannya?",
 options:["Garis berbasis penutupan selalu benar karena harga penutupan adalah satu-satunya yang bermakna","Kedua garis harus dibuang dan diganti dengan rata-rata bergerak yang lebih objektif","Menetapkan aturannya di muka dan menerapkannya konsisten, karena keduanya sah asal tidak dipilih setelah kejadian","Garis berbasis harga terendah selalu benar karena mencakup seluruh rentang pergerakan harga"],
 answer:2,
 explain:"Bahaya aslinya bukan di pilihan metodenya, tapi di kebebasan PINDAH metode setelah lihat hasilnya. Itu cara analis ngebenerin posisi yang salah: 'oh ternyata pakai close belum tembus kok'. Banyak praktisi milih basis close karena penembusan sesaat sama ekor bayangan sering palsu. Apa pun pilihan lo, tulis di rencana SEBELUM posisi dibuka. Metode yang ditentuin setelah kejadian itu bukan analisis, itu pembelaan diri."},

{id:"rta-trend-h08",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Harga menembus resistance yang telah diuji empat kali, tetapi volume pada hari penembusan hanya setengah rata-rata 20 hari. Sepekan kemudian harga masih bertahan di atasnya. Bagaimana menilainya?",
 options:["Penembusan itu pasti palsu karena volume rendah membatalkan setiap penembusan tanpa kecuali","Volume tidak relevan sama sekali sehingga penembusan ini setara dengan penembusan bervolume tinggi","Harus menunggu resistance itu diuji untuk kelima kalinya sebelum penilaian apa pun dibuat","Bertahannya harga adalah konfirmasi tersendiri, meski kualitas penembusannya lebih rendah dari ideal"],
 answer:3,
 explain:"Volume itu bukti pendukung, bukan syarat mutlak. Volume rendah artinya sedikit keyakinan, jadi peluang gagalnya lebih gede dan ukuran posisi sepantasnya dikecilin. TAPI waktu juga nguji. Harga yang bertahan di atas resistance selama sepekan artinya nggak ada gelombang jualan yang ngedorong balik, dan itu bukti dari jenis yang lain. Jadi jangan buru-buru bilang breakout gagal cuma gara-gara volume hari H-nya tipis."},

{id:"rta-trend-h09",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Grafik mingguan menunjukkan tren naik, grafik harian tren turun, dan grafik jam menunjukkan tren naik. Bagaimana kerangka multi timeframe menyusun ketiganya?",
 options:["Mingguan menentukan arah, harian menandai koreksi yang sedang berjalan, dan jam mencari titik masuknya","Ketiganya bertentangan sehingga tidak ada posisi yang boleh dibuka sampai semuanya searah","Grafik jam yang dipakai karena paling mutakhir dan paling cepat memberi sinyal","Ketiga timeframe harus dirata-rata untuk memperoleh satu arah tunggal yang sahih"],
 answer:0,
 explain:"Susunan kayak gini justru yang DICARI, bukan bikin bingung. Mingguan naik = arah. Harian turun = lagi ada koreksi, artinya lo dapet harga lebih murah. Jam berbalik naik = koreksinya mulai abis, waktunya masuk. Tiga-tiganya punya tugas beda: arah, diskon, timing. Nungguin ketiganya searah biasanya berarti lo masuk telat pas semua orang udah masuk, dengan stop yang jauh banget di bawah."},

{id:"rta-trend-h10",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham membentuk pola double top dengan dua puncak di 5.000 dan lembah di 4.400, lalu menembus ke bawah. Namun sektornya sedang menguat dan indeks mencetak rekor baru. Apa sikap yang paling tepat?",
 options:["Mengabaikan indeks dan sektor karena analisis saham individu berdiri sendiri sepenuhnya","Tetap mengikuti sinyal polanya dengan ukuran lebih kecil, karena konteks yang berlawanan menurunkan peluang keberhasilan","Membatalkan pola itu sepenuhnya karena kekuatan indeks selalu mengalahkan pola saham individu","Menggandakan posisi jual karena pola yang muncul saat pasar kuat justru lebih bertenaga"],
 answer:1,
 explain:"Pola jalan lebih baik kalau searah arus yang lebih gede. Lawan sektor yang lagi kuat dan indeks yang cetak rekor bukan berarti mustahil, tapi peluangnya turun dan kemungkinan kesapu naik. Yang bener itu nyesuaiin UKURAN POSISI, bukan milih ngabaiin salah satu informasi. Banyak orang milih ekstrem: entah ngotot ikut pola sambil nutup mata, atau batalin total. Dua-duanya males mikir."},

{id:"rta-trend-h11",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Selama enam bulan harga bergerak dalam rentang sempit tanpa arah. Seorang analis memaksa menarik garis tren naik dari dua titik terendah yang berjauhan. Apa masalah mendasarnya?",
 options:["Garis tren memang boleh ditarik kapan saja karena selalu memberikan informasi berguna","Masalahnya pada pilihan skala grafik, bukan pada keadaan pasar yang mendatar","Pasar mendatar tidak punya tren untuk digambar, sehingga garis itu tidak mencerminkan apa pun","Masalahnya hanya pada jumlah titik sentuh yang kurang, dan garisnya sah bila ditambah satu titik lagi"],
 answer:2,
 explain:"Pasar cuma bertren sekitar sepertiga waktunya, sisanya jalan nyamping. Maksain narik garis tren di pasar mendatar itu cara klasik ngeliat sesuatu yang nggak ada — otak manusia emang dirancang nemuin pola, termasuk di tempat yang nggak ada polanya. Alat yang cocok buat kondisi ini beda: batas atas dan bawah range, osilator yang kerja di dua ujung, atau ya udah nunggu aja sampai range-nya jebol. Nggak semua kondisi pasar harus ditradingin."},

{id:"rta-trend-h12",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Harga menembus rentang konsolidasi ke atas, lalu dalam dua hari kembali turun ke tengah rentang. Apa pembacaan yang paling tepat?",
 options:["Penembusan itu tetap sah karena harga sudah pernah berada di atas batas rentang","Konsolidasi hanya berlanjut, sehingga batas rentang lama tetap berlaku seperti sebelumnya","Harga akan otomatis kembali menembus ke atas karena arah penembusan pertama menentukan","Penembusan palsu, dan harga sering bergerak jauh ke arah berlawanan karena pembeli baru terjebak"],
 answer:3,
 explain:"Breakout yang gagal itu salah satu sinyal paling bertenaga, justru KARENA dia bikin korban. Yang beli di atas range sekarang nyangkut, dan jualan mereka nambah tekanan. Sementara penjual yang tadinya ragu jadi berani. Dua-duanya dorong harga ke arah sebaliknya. Makanya banyak pendekatan sengaja ngeburu false breakout daripada breakout-nya sendiri: nunggu orang lain kejebak dulu, baru masuk."},

/* ===== rta-level ===== */
{id:"rta-level-h06",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Support di 3.000 telah diuji lima kali dalam empat bulan dan bertahan setiap kali. Apakah ini membuatnya makin kuat atau makin rapuh?",
 options:["Makin rapuh, karena setiap pengujian menghabiskan sebagian permintaan yang tersedia di level itu","Makin kuat, karena semakin sering bertahan berarti semakin banyak pembeli yang membelanya","Tidak berubah, karena kekuatan support hanya ditentukan volume pada pembentukan awalnya","Tidak dapat dinilai, karena jumlah pengujian tidak berkaitan dengan kekuatan sebuah level"],
 answer:0,
 explain:"Ini salah satu hal yang paling sering kebalik pemahamannya. Support bertahan karena ada ORDER BELI numpuk di situ. Tiap kali diuji, sebagian order itu kemakan dan nggak selalu ada yang gantiin. Jadi pengujian kelima ngadepin antrean yang jauh lebih tipis daripada yang pertama. Makin sering diuji, makin RAPUH, bukan makin kuat. Cirinya keliatan: pantulannya makin pendek dan makin cepet balik diuji lagi."},

{id:"rta-level-h07",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Harga menembus support 2.800 lalu beberapa pekan kemudian naik kembali dan berhenti tepat di 2.800. Apa yang biasanya terjadi di level itu dan mengapa?",
 options:["Harga akan langsung menembusnya karena level yang pernah ditembus tidak lagi menahan","Level itu berubah menjadi resistance karena pembeli lama yang terjebak menjual saat kembali ke titik impas","Level itu tetap menjadi support karena sifat sebuah level tidak berubah setelah terbentuk","Level itu kehilangan seluruh maknanya setelah sekali ditembus dan dapat diabaikan"],
 answer:1,
 explain:"Pertukaran peran ini akarnya di psikologi rugi. Yang beli di 2.800 dan nyangkut berbulan-bulan cenderung ngelepas begitu harga balik ke harga beli, sekadar biar lepas dari tekanan. Pasokan mendadak itu yang bikin level lama nahan dari sisi sebaliknya. Kekuatannya sebanding sama volume yang dulu diperdagangin di situ: makin banyak yang nyangkut, makin keras resistance-nya."},

{id:"rta-level-h08",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Pada grafik, tiga hal bertemu di area 4.500: koreksi Fibonacci 61,8 persen, rata-rata bergerak 200 hari, dan puncak lama. Apa istilah dan makna praktisnya?",
 options:["Divergensi, karena tiga metode berbeda tidak seharusnya menunjuk ke level yang sama","Redundansi, sehingga dua di antara tiga alat itu harus dibuang dari analisis","Konfluensi, yang meningkatkan peluang level itu bertahan dan memberi stop yang lebih ringkas","Kebetulan statistik yang tidak menambah kekuatan level tersebut sama sekali"],
 answer:2,
 explain:"Konfluensi jalan karena kelompok pelaku yang beda ngawasin alasan yang beda, tapi order mereka numpuk di harga yang SAMA. Yang pakai Fibonacci, yang pakai MA200, yang inget puncak lama — beda mazhab, ketemu di 4.500. Keuntungan praktisnya bukan cuma peluang lebih tinggi: karena areanya sempit dan jelas, stop bisa ditaruh persis di baliknya. Jadi risk reward-nya membaik tanpa nambah risiko."},

{id:"rta-level-h09",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Analis menarik koreksi Fibonacci dari titik terendah 1.000 ke puncak 2.000, tetapi rekan kerjanya menariknya dari 1.200 ke 2.000 karena memakai awal ayunan yang berbeda. Apa yang menentukan penarikan mana yang sahih?",
 options:["Penarikan dari titik terendah absolut selalu yang paling sahih dalam setiap keadaan","Keduanya sahih sehingga seluruh level dari kedua penarikan dapat dipakai bersamaan","Yang sahih adalah penarikan yang menghasilkan level terdekat dengan harga saat ini","Ayunan yang dipilih harus merupakan pergerakan bermakna yang diakui struktur grafik, bukan titik yang dipilih sesuka hati"],
 answer:3,
 explain:"Kelemahan terbesar Fibonacci itu kebebasan milih titik jangkar, dan di situlah bias nyelinap. Geser dikit jangkarnya, level 61,8% pindah ke tempat yang lo pengenin. Disiplin yang umum dipakai: jangkarin di ayunan yang JELAS keliatan di timeframe yang lagi dianalisis, tandain SEBELUM posisi dibuka, dan jangan pernah geser jangkar cuma biar sebuah level jatuh di tempat yang nyaman. Fibonacci yang dijangkar setelah kejadian itu sulap, bukan analisis."},

{id:"rta-level-h10",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham menembus resistance psikologis di angka bulat 10.000 dengan volume besar. Mengapa angka bulat sering berperilaku seperti level teknikal sungguhan?",
 options:["Banyak pesanan beli dan jual ditempatkan di angka bulat, sehingga di situ benar-benar menumpuk pasokan dan permintaan","Angka bulat memiliki sifat matematis khusus yang memengaruhi pergerakan harga","Bursa secara teknis memperlambat perdagangan setiap kali harga menyentuh angka bulat","Angka bulat hanya berperan pada indeks dan tidak pernah berlaku pada saham individu"],
 answer:0,
 explain:"Level psikologis itu self-fulfilling dalam arti yang paling harfiah: manusia suka membulatkan. Order limit dan stop numpuk di 10.000, bukan di 9.987. Tumpukan itu BENERAN ada di order book, bisa dilihat. Dan karena stop juga numpuk persis di baliknya, nembus angka bulat sering disusul percepatan pas rentetan stop kesentuh. Jadi ini bukan mistis, ini murni kebiasaan manusia yang ninggalin jejak di buku order."},

{id:"rta-level-h11",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Harga jatuh menembus support penting dalam sehari dengan penurunan 9 persen, tetapi kejadian itu bertepatan dengan pengumuman rights issue. Bagaimana analis teknikal sebaiknya menanganinya?",
 options:["Menunggu sampai rights issue selesai dan menghapus periode itu dari grafik sepenuhnya","Memeriksa apakah penurunan sepadan dengan pengenceran kepemilikan sebelum membacanya sebagai penembusan teknikal","Memperlakukannya sebagai penembusan biasa karena analisis teknikal tidak mempedulikan sebab pergerakan","Mengabaikan seluruh grafik saham itu karena aksi korporasi membuat datanya tidak dapat dipakai"],
 answer:1,
 explain:"Aksi korporasi ngubah NILAI DASAR per lembar, bukan sikap pasar. Kalau turun 9% itu kira-kira setara sama pengenceran teoretis rights issue-nya, berarti nggak ada jualan beneran dan support itu sebenernya BELUM diuji. Tapi kalau turunnya jauh melebihi pengenceran, selisihnya baru penolakan pasar yang nyata dan layak dibaca teknikal. Jadi itung dulu pengencerannya sebelum panik."},

/* ===== rta-indikator ===== */
{id:"rta-ind-h06",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"RSI bertahan di atas 70 selama tiga pekan sementara harga terus mencetak puncak baru. Apa tindakan yang paling tepat?",
 options:["Menunggu RSI menyentuh 90 sebelum mempertimbangkan penjualan apa pun","Mengganti RSI dengan periode lebih panjang sampai bacaannya turun di bawah 70","Memperlakukannya sebagai tanda kekuatan tren dan mengikuti harga, bukan sebagai sinyal jual","Menjual seluruh posisi karena RSI di atas 70 selalu berarti harga sudah terlalu tinggi"],
 answer:2,
 explain:"Overbought itu artinya lagi KUAT, bukan lagi kemahalan. Ini salah kaprah paling mahal di dunia indikator. Di tren perawan yang lagi bertenaga, RSI bisa nempel di atas 70 berminggu-minggu sementara yang jual dini terus tergilas. Wilder sendiri pakai 70 sebagai PERINGATAN, bukan pemicu. Sinyal aslinya biasanya baru dateng pas RSI jatuh balik ke bawah 70 setelah bikin divergensi. Jual cuma karena RSI 72 itu cara rutin ketinggalan tren."},

{id:"rta-ind-h07",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham bergerak mendatar selama dua bulan dan sistem persilangan rata-rata bergerak menghasilkan tujuh sinyal, enam di antaranya merugi. Apa akar masalahnya?",
 options:["Periode rata-rata bergerak yang dipakai terlalu panjang sehingga sinyalnya terlambat","Sistem persilangan memang selalu merugi dan tidak layak dipakai pada kondisi apa pun","Jumlah tujuh sinyal terlalu sedikit untuk dinilai sehingga belum ada masalah apa pun","Alat pengikut tren dipakai pada pasar tanpa tren, sehingga menghasilkan sinyal bolak-balik yang merugi"],
 answer:3,
 explain:"Tiap indikator punya lingkungan tempat dia kerja. MA crossover dirancang nangkep tren panjang, dan dengan sadar nerima banyak sinyal palsu sebagai ongkosnya. Di pasar mendatar, ongkosnya dateng tanpa imbalannya — tujuh sinyal, enam rugi. Bukan indikatornya rusak, cuma dipakai di tempat yang salah. Penangkalnya: penyaring kondisi pasar, misal ADX di bawah 20 berarti sinyal crossover diabaikan total."},

{id:"rta-ind-h08",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Analis memasang RSI, stochastic, CCI, dan Williams %R sekaligus, lalu merasa yakin karena keempatnya memberi sinyal beli bersamaan. Apa kekeliruan berpikirnya?",
 options:["Keempatnya mengukur hal yang hampir sama, sehingga kesepakatan itu hanya satu bukti yang diulang empat kali","Tidak ada kekeliruan karena semakin banyak indikator semakin tinggi keandalan sinyalnya","Kekeliruannya hanya pada tampilan layar yang menjadi terlalu penuh dan sulit dibaca","Keempat indikator itu tidak boleh dipakai bersamaan karena rumusnya saling bertentangan"],
 answer:0,
 explain:"Ini namanya redundansi indikator. RSI, stochastic, CCI, Williams %R itu semuanya berakar dari hal yang sama: bandingin harga sekarang sama range terakhir. Korelasinya tinggi banget, jadi mereka hampir SELALU sepakat. Rasa yakin yang timbul itu palsu — lo cuma dapet satu bukti yang diulang empat kali. Kombinasi yang beneran nambah informasi itu ngukur dimensi beda: satu tren, satu momentum, satu volume, satu volatilitas."},

{id:"rta-ind-h09",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Harga sebuah saham naik 40 persen dalam enam pekan dan ATR-nya berlipat dari 50 menjadi 140 poin. Apa penyesuaian yang paling tepat pada posisi baru?",
 options:["Berhenti memakai ATR dan menggantinya dengan stop persentase tetap yang lebih sederhana","Memperkecil jumlah lembar karena stop berbasis ATR kini jauh lebih lebar untuk risiko rupiah yang sama","Memperbesar jumlah lembar karena kenaikan volatilitas menandakan peluang keuntungan lebih besar","Mempertahankan jumlah lembar yang sama karena ATR tidak berkaitan dengan ukuran posisi"],
 answer:1,
 explain:"Position sizing berbasis volatilitas jaga RISIKO RUPIAH tetap, bukan jumlah lembar. Kalau stop dipasang 2x ATR, jaraknya melebar dari 100 jadi 280 poin. Artinya jumlah lembar harus turun hampir tiga kali lipat biar rugi rupiahnya sama. Ngelewatin penyesuaian ini itu cara paling umum kerugian tiba-tiba jadi berkali lipat dari yang direncanain — lo ngerasa risikonya sama, padahal udah naik 180%."},

{id:"rta-ind-h10",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"MACD memberi sinyal beli pada persilangan di bawah garis nol, sementara MACD lain memberi sinyal beli pada persilangan di atas garis nol. Apa perbedaan maknanya?",
 options:["Keduanya identik karena posisi terhadap garis nol tidak membawa informasi tambahan","Persilangan di atas nol menandakan sinyal palsu karena harga sudah terlambat untuk dibeli","Persilangan di atas nol terjadi saat momentum jangka menengah sudah positif, sehingga searah tren yang berlaku","Persilangan di bawah nol selalu lebih andal karena harganya masih lebih murah"],
 answer:2,
 explain:"Garis nol nandain apakah EMA cepat di atas EMA lambat, alias arah tren menengah. Crossover di ATAS nol itu sinyal searah tren, peluang bertahannya lebih baik. Crossover di BAWAH nol itu taruhan ngelawan tren yang masih negatif — lebih dini, tapi lebih sering gagal. Coba pisahin dua jenis ini di jurnal lo, biasanya selisih kinerjanya mencolok banget dan lo bakal berhenti ambil yang satu."},

{id:"rta-ind-h11",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Analis mengubah periode rata-rata bergerak dari 20 menjadi 18 hari karena uji balik menunjukkan hasil terbaik pada 18. Mengapa langkah ini patut diwaspadai?",
 options:["Periode rata-rata bergerak memang tidak boleh diubah dari angka baku yang sudah lazim dipakai","Masalahnya hanya pada waktu komputasi tambahan yang dibutuhkan untuk menguji ulang","Angka 18 tidak boleh dipakai karena periode yang sah hanyalah bilangan kelipatan lima","Nilai terbaik yang berdiri sendiri di antara tetangganya biasanya hasil kebisingan, bukan keunggulan nyata"],
 answer:3,
 explain:"Uji kekokohan lebih penting daripada nilai puncaknya. Kalau 17 dan 19 hasilnya jelek sementara 18 melejit sendirian, itu tanda parameternya nempel di noise periode uji, bukan nemu sesuatu yang nyata. Yang dicari itu DATARAN: sekelompok nilai berdekatan yang semuanya lumayan, terus ambil yang di tengah meskipun bukan yang tertinggi. Puncak sendirian di tengah lembah itu hampir selalu fatamorgana."},

/* ===== cta-portfolio ===== */
{id:"cta-pf-h05",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Portofolio berisi sepuluh saham dari delapan sektor berbeda, tetapi semuanya saham pertumbuhan berkapitalisasi kecil. Seberapa efektif penyebaran risikonya?",
 options:["Terbatas, karena kesamaan gaya dan ukuran membuat semuanya jatuh bersama saat selera risiko pasar berbalik","Sangat efektif, karena delapan sektor berbeda sudah menghapus hampir seluruh risiko tidak sistematis","Tidak efektif sama sekali, karena penyebaran hanya bermakna bila melibatkan kelas aset berbeda","Tidak dapat dinilai tanpa mengetahui bobot masing-masing saham dalam portofolio"],
 answer:0,
 explain:"Diversifikasi sektor itu cuma satu dimensi. Faktor gaya dan ukuran sering lebih nentuin: pas selera risiko pasar berbalik, saham kecil berbasis pertumbuhan dijual serentak lintas sektor. Nggak peduli dia bank atau teknologi, yang dijual itu kategorinya. Portofolio yang beneran tersebar merhatiin sektor, ukuran, gaya, dan kepekaan ke pasar — bukan sekadar ngitung berapa nama yang dipunya."},

{id:"cta-pf-h06",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Analis memberi bobot sama pada dua posisi, tetapi saham pertama punya ATR 2 persen dan saham kedua 8 persen. Apa akibatnya bagi portofolio?",
 options:["Volatilitas masing-masing saham tidak berkaitan dengan risiko portofolio secara keseluruhan","Saham kedua menyumbang sekitar empat kali lebih besar terhadap gejolak portofolio meski nilainya sama","Kontribusi keduanya sama besar karena nilai rupiah yang diinvestasikan juga sama","Saham pertama lebih berisiko karena volatilitasnya yang rendah membuatnya sulit dijual"],
 answer:1,
 explain:"Bobot rupiah sama bukan berarti risiko sama. Posisi dengan volatilitas empat kali lipat bakal ngedominasi naik turunnya portofolio dan praktis NENTUIN hasil akhirnya. Yang satu lagi cuma numpang nama. Pendekatan risk parity ngebalik urutannya: tentuin dulu kontribusi risiko yang lo mau dari tiap posisi, baru turunin nilai rupiahnya dengan bagi ke volatilitas masing-masing."},

{id:"cta-pf-h07",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Selama krisis pasar, korelasi antaraset dalam portofolio yang semula 0,3 melonjak menjadi 0,85. Apa implikasi paling penting dari gejala ini?",
 options:["Gejala ini hanya terjadi pada data harian dan tidak berpengaruh pada portofolio jangka panjang","Portofolio menjadi lebih aman karena pergerakan yang seragam lebih mudah diperkirakan","Penyebaran risiko justru menghilang tepat pada saat paling dibutuhkan, sehingga perlu lapis perlindungan lain","Korelasi yang meningkat menguntungkan karena seluruh aset akan pulih bersamaan"],
 answer:2,
 explain:"Ini kelemahan diversifikasi yang paling nyakitin: korelasi diitung dari masa tenang, terus runtuh jadi satu pas panik. Penyebab mekanisnya jualan paksa dan margin call, yang maksa orang ngelepas APA PUN yang bisa dijual, bukan yang pengen dijual. Makanya manajer berpengalaman nambahin aturan pengurangan posisi dan hedging, bukan nyandarin nasib ke tabel korelasi yang diitung dari data tahun lalu."},

{id:"cta-pf-h08",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Sebuah posisi tumbuh dari bobot awal 5 persen menjadi 22 persen portofolio karena kenaikan harganya. Apa pertimbangan utama dalam menyikapinya?",
 options:["Selalu memangkasnya kembali ke 5 persen karena bobot awal adalah aturan yang tidak boleh dilanggar","Selalu membiarkannya karena memangkas pemenang adalah kesalahan terbesar dalam berinvestasi","Menambah posisi itu lagi karena kenaikannya membuktikan pilihan awalnya tepat","Menimbang antara membiarkan pemenang berjalan dan risiko satu posisi yang kini menentukan nasib portofolio"],
 answer:3,
 explain:"Dua sisinya sama-sama ada dasarnya, jadi jangan percaya yang jawab mutlak. Ngebiarin pemenang lari itu sumber sebagian besar untung jangka panjang. Tapi konsentrasi 22% artinya SATU berita buruk sanggup ngapus kinerja setahun. Jalan tengah yang umum dipakai: pangkas sebagian di ambang tertentu, sisain inti posisinya. Potensinya nggak dimatiin, tapi risiko bencananya dibatasi."},

{id:"cta-pf-h09",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Portofolio memiliki beta 1,4 terhadap indeks. Bila analis memperkirakan pasar akan turun tetapi tidak ingin menjual posisinya, apa pilihan yang paling relevan?",
 options:["Melakukan lindung nilai dengan menjual kontrak berjangka indeks sebesar eksposur beta yang ingin dinetralkan","Membeli lebih banyak saham berbeta tinggi agar rata-rata betanya turun dengan sendirinya","Mengabaikan beta karena ukuran ini hanya berlaku pada pasar yang sedang naik","Menjual seluruh portofolio karena lindung nilai selalu lebih mahal daripada menjual langsung"],
 answer:0,
 explain:"Beta 1,4 artinya portofolio lo diperkirakan gerak 1,4 kali indeks. Jadi nilai hedge-nya = nilai portofolio x 1,4, BUKAN nilai portofolio doang. Salah itung di sini bikin hedging lo kurang 40%. Cara ini nahan posisi saham lo beserta keunggulan pemilihannya sambil numpulin risiko pasar. Biayanya nyata: kalau perkiraan turunnya meleset, untung lo ikut kepotong."},

{id:"cta-pf-h10",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Aturan portofolio menetapkan penyeimbangan ulang setiap kuartal. Pada pasar yang sedang bertren kuat, apa kelemahan aturan ini?",
 options:["Aturan ini membuat portofolio menjadi terlalu terkonsentrasi pada posisi yang menang","Penyeimbangan berkala memangkas posisi yang sedang menang dan menambah yang kalah, berlawanan dengan arah tren","Penyeimbangan berkala tidak memiliki kelemahan apa pun karena selalu mengembalikan risiko ke rencana","Kelemahannya hanya pada biaya transaksi yang timbul setiap kuartal"],
 answer:1,
 explain:"Rebalancing berkala itu pada dasarnya strategi mean reversion, dan itu nabrak pasar yang lagi bertren. Di tren panjang, dia berulang kali motong posisi TERBAIK lo buat nambahin yang terburuk. Tiap kuartal, tiap kuartal. Alternatifnya rebalancing berbasis ambang atau berbasis risiko, yang cuma tindak kalau bobot risikonya beneran lewat batas, bukan sekadar karena kalender ganti."},

/* ===== cta-sistem ===== */
{id:"cta-sis-h09",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem yang diuji tanpa biaya transaksi menghasilkan 34 persen setahun dengan rata-rata 800 transaksi. Setelah biaya dan selisih harga beli jual dimasukkan, hasilnya menjadi minus 6 persen. Apa pelajarannya?",
 options:["Sistem itu tetap layak dipakai karena hasil sebelum biaya membuktikan logikanya benar","Masalahnya pada besaran biaya yang dikenakan pialang, bukan pada rancangan sistemnya","Sistem dengan frekuensi tinggi sangat rapuh terhadap biaya, sehingga biaya harus dihitung sejak awal perancangan","Biaya transaksi merupakan faktor kecil yang dapat diabaikan pada tahap perancangan sistem"],
 answer:2,
 explain:"Dengan 800 transaksi setahun, biaya 0,25% sekali jalan aja udah ngapus 40% untung kotor. Belum spread-nya. Dua hal yang ngikut dari sini: masukin biaya realistis ke simulasi dari baris pertama ditulis, dan waspada bahwa makin tinggi frekuensi, makin gede porsi untung yang sebenernya punya broker. Sistem 34% jadi minus 6% itu bukan sial, itu emang rancangannya yang nggak ngitung ongkos."},

{id:"cta-sis-h10",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem mekanis memberi sinyal jual, tetapi analis merasa keadaan pasar hari itu tidak biasa dan memilih mengabaikannya. Apa risiko terbesar dari keputusan ini?",
 options:["Tidak ada risiko selama penilaian manusia dilakukan oleh analis yang berpengalaman","Risikonya hanya pada satu transaksi itu saja dan tidak berpengaruh pada jangka panjang","Sistem mekanis memang seharusnya selalu disaring lebih dulu oleh penilaian manusia","Statistik sistem menjadi tidak berarti karena yang dijalankan bukan lagi sistem yang diuji"],
 answer:3,
 explain:"Nilai sistem mekanis itu SEPENUHNYA bergantung ke dijalanin secara utuh. Begitu sinyal disaring pakai perasaan, angka expectancy hasil uji nggak lagi ngegambarin apa yang lo jalanin, dan nggak ada cara tau penyaringan lo nambah atau ngurangin nilai. Kalau emang ada keadaan yang perlu dikecualiin, jadiin ATURAN TERTULIS yang bisa diuji. Kebijaksanaan sesaat itu nggak bisa di-backtest."},

{id:"cta-sis-h11",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem pengikut tren memiliki rasio kemenangan 38 persen tetapi menguntungkan. Mengapa sistem semacam ini sulit dijalankan secara psikologis?",
 options:["Rentetan kekalahan panjang terjadi wajar, sehingga keyakinan sering runtuh justru menjelang transaksi besar datang","Sistem dengan rasio kemenangan di bawah 50 persen secara matematis tidak mungkin menguntungkan","Kesulitannya hanya pada rumitnya perhitungan yang harus dilakukan setiap hari","Sistem pengikut tren sebenarnya mudah dijalankan karena sinyalnya jarang muncul"],
 answer:0,
 explain:"Di win rate 38%, rentetan kalah 8-10 kali beruntun itu kejadian yang secara statistik PASTI muncul, bukan tanda sistemnya rusak. Masalahnya, sebagian besar untung tahunan dateng dari beberapa tren gede, dan orang cenderung nyerah tepat sebelumnya. Makanya ngetahuin panjang rentetan kalah terburuk di backtest itu sama pentingnya sama ngetahuin untungnya. Angka itu yang nentuin lo sanggup jalanin atau nggak."},

{id:"cta-sis-h12",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem memakai aturan keluar dengan target tetap 2R dan stop 1R. Analis ingin meningkatkan hasilnya. Mana perubahan yang paling mungkin berpengaruh besar?",
 options:["Menambah indikator penyaring sampai jumlah sinyalnya berkurang setengah","Mengganti target tetap dengan trailing stop agar tren besar tidak terpotong di 2R","Memperketat stop menjadi 0,5R agar setiap kerugian menjadi lebih kecil","Menaikkan rasio kemenangan dengan memperkecil target menjadi 1R"],
 answer:1,
 explain:"Target tetap itu masang ATAP di hasil tiap transaksi, dan justru transaksi luar biasa yang biasanya nopang seluruh kinerja tahunan. Lo potong sayapnya di 2R terus, ya nggak akan pernah dapet yang 15R. Trailing stop ngebiarin langit kebuka dengan ongkos ngembaliin sebagian untung. Sementara mepetin stop jadi 0,5R sering malah kontraproduktif: posisi kelempar sama goyangan normal sebelum idenya sempet kebukti."},

{id:"cta-sis-h13",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem diuji pada satu saham dan hasilnya sangat baik. Sebelum dijalankan dengan uang nyata, uji tambahan mana yang paling penting dilakukan?",
 options:["Menguji dengan modal yang lebih besar untuk memastikan hasilnya berskala","Menguji ulang dengan parameter yang dioptimalkan sekali lagi pada data terbaru","Menguji pada banyak saham dan pasar lain, karena hasil yang hanya berlaku pada satu instrumen patut dicurigai","Menguji ulang pada saham yang sama dengan periode data yang lebih panjang lagi"],
 answer:2,
 explain:"Logika pasar yang sungguh berlaku semestinya jalan lintas instrumen, meski mutunya beda-beda. Kalau sebuah sistem cuma bersinar di SATU saham dan ambruk di tempat lain, kemungkinan besar dia ngapalin sejarah saham itu, bukan nemu sesuatu. Nambah panjang data di instrumen yang sama nggak ngejawab pertanyaan ini, dan ngoptimalin ulang parameter justru memperburuk."},

{id:"cta-sis-h14",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Uji balik mencatat kemampuan membeli 500.000 lembar tepat pada harga sinyal, padahal volume harian rata-rata saham itu hanya 900.000 lembar. Apa masalahnya?",
 options:["Tidak ada masalah selama volume hariannya masih lebih besar daripada jumlah yang dibeli","Masalahnya hanya pada waktu eksekusi yang lebih lama, bukan pada harga yang diperoleh","Uji balik memang tidak perlu memperhatikan volume karena hanya menyimulasikan harga","Dampak pasar diabaikan, padahal pesanan sebesar itu akan menggerakkan harga melawan pelakunya sendiri"],
 answer:3,
 explain:"Beli 500.000 dari volume harian 900.000 lembar itu artinya lo jadi lebih dari SEPARO pasar hari itu. Order segede ini nyapu order book: harga naik pas lo beli, dan nekan pas lo jual. Kerugian tersembunyi itu bisa nelen seluruh keunggulan sistem lo. Batasan yang umum dipakai: maksimal 1-5% volume harian rata-rata. Backtest yang nggak ngitung dampak pasar itu ngasih angka yang cuma ada di komputer."},

/* ===== cta-aset ===== */
{id:"cta-as-h07",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Rasio harga emas terhadap indeks saham telah menembus ke atas setelah tiga tahun menurun. Apa makna paling tepat bagi alokasi aset?",
 options:["Kepemimpinan relatif berpindah ke emas, sehingga bobot aset lindung nilai layak ditinjau ulang","Emas pasti akan naik dalam harga mutlak karena rasionya menembus ke atas","Indeks saham pasti akan jatuh karena rasio hanya dapat naik bila penyebutnya turun","Rasio antaraset tidak dapat dianalisis secara teknikal karena bukan harga sesungguhnya"],
 answer:0,
 explain:"Analisis rasio ngomongin kekuatan RELATIF, bukan arah mutlak. Rasio emas/saham naik bisa karena emas naik lebih cepet, karena emas turun lebih lambat, atau karena sahamnya yang jatuh. Tiga-tiganya beda cerita. Yang disampein rasio cuma satu: kepemimpinan lagi pindah. Itu cukup buat micu peninjauan bobot, tapi nggak cukup buat nyimpulin salah satunya pasti naik."},

{id:"cta-as-h08",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Imbal hasil obligasi pemerintah naik tajam sementara indeks saham mencetak rekor. Apa hubungan antarpasar yang perlu diperhatikan?",
 options:["Hubungan antarpasar hanya berlaku antara komoditas dan mata uang, bukan obligasi dan saham","Biaya modal yang meningkat pada akhirnya menekan penilaian saham, terutama saham pertumbuhan","Kedua pasar sepenuhnya terpisah sehingga pergerakannya tidak saling memberi informasi","Imbal hasil obligasi yang naik selalu berarti saham akan segera naik lebih tinggi lagi"],
 answer:1,
 explain:"Yield naik artinya tingkat diskonto naik, dan arus kas yang jauh di masa depan paling kepukul. Makanya saham pertumbuhan yang duitnya baru kerasa sepuluh tahun lagi selalu yang pertama goyah. Tapi jedanya bisa panjang, jadi dua-duanya sempet naik bareng beberapa lama. Yang diamatin analis antarpasar: KECEPATAN naiknya yield sama rotasi sektor, buat nebak kapan tekanan itu mulai digigit pasar."},

{id:"cta-as-h09",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Dolar Amerika menguat tajam. Bagi analis komoditas, apa implikasi yang paling umum dan mengapa?",
 options:["Penguatan dolar tidak memiliki hubungan apa pun dengan harga komoditas global","Hanya harga emas yang terpengaruh sedangkan komoditas lain sepenuhnya kebal","Harga komoditas berdenominasi dolar cenderung tertekan karena menjadi lebih mahal bagi pembeli mata uang lain","Harga komoditas selalu naik bersama dolar karena keduanya sama-sama aset lindung nilai"],
 answer:2,
 explain:"Karena mayoritas komoditas global dihargai dalam dolar, dolar yang nguat bikin barang yang sama jadi lebih mahal buat pembeli di luar Amerika, dan permintaan cenderung ngendor. Hubungan terbalik ini kuat secara historis TAPI bukan hukum. Guncangan pasokan kayak gagal panen atau perang bisa ndorong harga naik meski dolar lagi perkasa. Jadi pakai sebagai kecenderungan, bukan kepastian."},

{id:"cta-as-h10",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Analis membandingkan grafik kekuatan relatif sektor terhadap indeks untuk sembilan sektor. Bagaimana rotasi sektor membantu membaca tahapan siklus ekonomi?",
 options:["Seluruh sektor bergerak bersamaan sehingga kekuatan relatif tidak membawa informasi","Sektor dengan kekuatan relatif terlemah selalu yang paling layak dibeli lebih dulu","Rotasi sektor hanya mencerminkan arus dana jangka pendek tanpa kaitan dengan ekonomi","Sektor yang unggul bergeser mengikuti tahapan siklus, sehingga kepemimpinan memberi petunjuk posisi ekonomi saat ini"],
 answer:3,
 explain:"Urutan umumnya: keuangan dan konsumsi sekunder mimpin pemulihan awal, teknologi dan industri pas fase pertumbuhan, energi dan bahan dasar menjelang puncak, terus kesehatan dan konsumsi primer pas pelemahan. Kepemimpinan sering geser SEBELUM data ekonomi terbit, jadi rotasi berfungsi sebagai penunjuk awal. Tapi jangan kaku: urutannya di dunia nyata nggak pernah serapi di diagram."},

{id:"cta-as-h11",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Dua indeks saham negara berbeda tampak bergerak serupa, tetapi salah satunya diukur dalam mata uang lokal yang sedang melemah 18 persen. Apa yang perlu dilakukan sebelum membandingkannya?",
 options:["Menyamakan mata uang keduanya, karena imbal hasil bagi investor asing sangat berbeda dari yang tampak","Membandingkan langsung saja karena pergerakan indeks lokal adalah ukuran yang paling jujur","Mengabaikan indeks yang mata uangnya melemah karena datanya tidak dapat dipercaya","Menambahkan 18 persen pada indeks yang melemah agar keduanya menjadi setara"],
 answer:0,
 explain:"Indeks yang naik 10% dalam mata uang yang melemah 18% itu sebenernya BIKIN RUGI investor asing. Di chart lokal keliatan hijau, di dompet dolar merah. Bandingin dua-duanya dalam satuan yang sama, biasanya dolar, dan gambarnya sering bertolak belakang dari chart lokalnya. Makanya analis global baca chart berdenominasi dolar DULU, baru chart lokal buat nilai keadaan domestiknya."},

{id:"cta-as-h12",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Sebuah aset yang selama sepuluh tahun berkorelasi negatif dengan saham kini bergerak searah selama enam bulan. Bagaimana sebaiknya analis menyikapinya?",
 options:["Menambah kepemilikan aset itu karena pergerakan searah menandakan keduanya sama-sama akan naik","Meninjau kembali asumsi lindung nilainya, karena korelasi historis tidak menjamin perilaku masa depan","Mengabaikannya karena korelasi sepuluh tahun jauh lebih kuat daripada enam bulan terakhir","Menghentikan kepemilikan aset itu seketika karena korelasi negatifnya terbukti hilang"],
 answer:1,
 explain:"Korelasi itu ukuran yang berubah-ubah, bukan sifat bawaan sebuah aset. Dia geser ngikutin rezim suku bunga, likuiditas, dan siapa yang megang. Enam bulan belum tentu permanen, tapi cukup buat micu peninjauan. Sikap yang seimbang: pantau korelasi bergulir sebagai besaran yang HIDUP, bukan angka tetap yang ditulis di dokumen kebijakan tiga tahun lalu terus nggak pernah dibuka lagi."}
]);
