/* Soal HOTS batch 4 — rta-trend, rta-level, rta-indikator, rta-riset, cta-portfolio, cta-candle */
TD.register([
/* ===== rta-trend ===== */
{id:"rta-trend-h01",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Harga menembus neckline head and shoulders dengan volume dua kali rata-rata, lalu tiga sesi kemudian kembali naik menutup di atas neckline. Bagaimana analis sebaiknya menyikapinya?",
 options:["Memperlakukan pola itu gagal dan keluar, karena penembusan yang dibatalkan sering berbalik tajam","Menahan posisi jual karena volume penembusan sudah mengonfirmasi polanya","Menambah posisi jual karena harga kembali ke level yang lebih menguntungkan","Mengabaikannya karena tiga sesi terlalu singkat untuk membatalkan sebuah pola"],
 answer:0,
 explain:"Pola yang gagal itu INFORMASI, bukan gangguan. Breakdown yang keliatan meyakinkan terus dibatalin artinya banyak yang masuk searah breakdown sekarang kejebak dan harus nutup posisi. Mereka harus BELI buat keluar, dan itu ndorong harga naik lebih cepet lagi. Aturan praktisnya yang sering bikin orang kaget: breakout yang DIBATALIN itu lebih dipercaya daripada breakout-nya sendiri. Jadi begitu harga balik nutup di atas neckline, keluar, jangan diajak debat."},

{id:"rta-trend-h02",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Sebuah segitiga simetris terbentuk selama enam bulan, dan harga merayap sampai hampir menyentuh apex sebelum akhirnya menembus. Mengapa penembusan itu kurang dapat diandalkan?",
 options:["Volume pada apex terlalu tinggi sehingga sinyalnya menjadi tidak sah","Energi pola sudah habis terpakai oleh konsolidasi yang terlalu panjang","Segitiga simetris memang tidak pernah menghasilkan penembusan yang bertahan","Penembusan di apex selalu berarah berlawanan dari yang ditunjukkan pola"],
 answer:1,
 explain:"Segitiga jalan karena kompresi nyiptain ketegangan yang akhirnya dilepas sekaligus. Kalau harga merayap pelan sampai apex, pelepasannya udah kejadian BERTAHAP sepanjang pola, jadi nggak ada tenaga tersisa buat gerakan besar. Ibaratnya per yang ditekan pelan-pelan terus dilepas pelan-pelan juga. Makanya breakout paling andal kejadian di setengah sampai tiga perempat panjang pola, bukan di ujung runcingnya."},

{id:"rta-trend-h03",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Puncak head and shoulders berada di 2.400 dan neckline di 2.100. Harga menembus neckline lalu berhenti di 1.950, tepat di atas support historis kuat di 1.930. Apa yang paling tepat dilakukan?",
 options:["Menambah posisi jual karena target pola belum tercapai sehingga penurunan berlanjut","Membatalkan skenario karena harga berhenti sebelum mencapai target proyeksinya","Merealisasikan sebagian, karena support historis sering lebih menentukan daripada target pola","Menahan seluruh posisi sampai target proyeksi 1.800 tercapai sepenuhnya"],
 answer:2,
 explain:"Target pola itu PROYEKSI minimum, bukan janji, dan harus selalu diuji sama level historis di jalurnya. Support 1.930 nyimpen permintaan NYATA, ada order beneran di situ. Sementara 1.800 cuma hasil ngukur pakai penggaris. Analis berpengalaman realisasiin sebagian di level yang punya alasan pasar, terus biarin sisanya jalan pakai trailing stop. Ngotot nunggu 1.800 sambil ngeliatin harga mantul dari 1.930 itu nyerahin untung yang udah di tangan."},

{id:"rta-trend-h04",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Selama tren naik, garis tren pertama ditembus, lalu garis kedua yang lebih landai juga ditembus, dan kini garis ketiga sedang diuji. Menurut fan principle, apa maknanya?",
 options:["Setiap penembusan garis tren adalah sinyal jual yang berdiri sendiri","Garis ketiga akan bertahan karena kemiringannya paling landai di antara ketiganya","Penarikan tiga garis tren menandakan analisisnya keliru sejak garis pertama","Penembusan garis ketiga umumnya menegaskan tren naik sebelumnya telah berakhir"],
 answer:3,
 explain:"Fan principle mandang penembusan garis tren sebagai PROSES, bukan satu peristiwa. Tiap kali garis ditembus, artinya laju kenaikannya melambat, dan analis narik garis baru yang lebih landai. Sekali itu wajar. Dua kali mulai mencurigakan. Pas garis KETIGA ikut tertembus, pelambatan itu udah kejadian berulang kali dan trennya umumnya dinyatakan berakhir. Tiga itu angka pentingnya, bukan satu atau dua."},

{id:"rta-trend-h05",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Dua pola terbentuk pada saham yang sama: bendera berdurasi dua pekan dan rectangle berdurasi delapan bulan. Keduanya menembus ke atas. Pergerakan mana yang secara umum berimplikasi lebih besar?",
 options:["Rectangle, karena basis yang lebih luas dan lama menyimpan energi yang lebih besar","Bendera, karena polanya terbentuk setelah pergerakan tajam yang bertenaga","Keduanya setara, karena besarnya pergerakan hanya ditentukan volume penembusan","Tidak dapat dibandingkan karena keduanya termasuk jenis pola yang berbeda"],
 answer:0,
 explain:"Dimensi pola nyerminin lamanya tarik-ulur antara pembeli dan penjual. Rectangle delapan bulan artinya pasokan dan permintaan tuker posisi berulang kali di rentang harga yang sama — banyak banget barang pindah tangan. Begitu satu sisi nyerah, gerakannya gede. Bendera dua pekan cuma jeda pendek, dan targetnya pun sebatas panjang tiang benderanya. Aturan kasarnya: makin lama dan makin lebar basisnya, makin jauh lompatannya."},

{id:"rta-trend-h06",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Harga membentuk higher high tetapi indikator momentum membentuk lower high, dan struktur harga masih utuh. Apa tindakan yang paling tepat?",
 options:["Mengabaikannya sepenuhnya karena struktur harga masih menunjukkan tren naik","Memperketat pengendalian risiko tanpa membalik posisi, karena divergensi bukan sinyal jual","Menutup seluruh posisi karena divergensi memastikan tren akan segera berbalik","Membalik posisi menjadi jual untuk menangkap pembalikan sedini mungkin"],
 answer:1,
 explain:"Divergensi ngukur melemahnya TENAGA, bukan berbaliknya ARAH. Bedanya jauh, dan salah baca ini mahal. Di tren yang kuat, divergensi bisa bertahan berbulan-bulan sementara harga terus naik. Nutup atau ngebalik posisi cuma gara-gara divergensi itu bertaruh ngelawan tren yang secara struktur masih hidup. Respons yang sepadan: kencengin trailing stop, kurangin ukuran, terus tunggu STRUKTUR HARGA yang mutusin. Momentum ngasih peringatan, harga ngasih keputusan."},

/* ===== rta-level ===== */
{id:"rta-level-h01",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham naik dari 800 ke 1.600 lalu terkoreksi. Pada level berapa retracement 38,2 persen dan 61,8 persen berada?",
 options:["1.200 dan 1.400","1.400 dan 1.200","1.294 dan 1.106","1.106 dan 1.294"],
 answer:2,
 explain:"Besar pergerakannya 1.600 - 800 = 800 poin. Retracement 38,2% = 0,382 x 800 = 306 poin, jadi 1.600 - 306 = 1.294. Retracement 61,8% = 0,618 x 800 = 494 poin, jadi 1.600 - 494 = 1.106. Catatan penting: retracement diukur dari PUNCAK ke bawah, bukan dari titik awal ke atas. Yang sering ketuker itu ini. Dan dua level ini cuma wilayah pengamatan, bukan perintah beli."},

{id:"rta-level-h02",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Level 4.500 bertepatan dengan retracement Fibonacci 61,8 persen, moving average 200 hari, dan lembah historis dua tahun lalu. Mengapa kombinasi ini lebih berbobot daripada ketiganya sendiri-sendiri?",
 options:["Tiga metode yang sepakat secara matematis membuktikan level itu pasti bertahan","Confluence menghilangkan subjektivitas sehingga levelnya menjadi objektif","Semakin banyak metode dipakai, semakin kecil kemungkinan analisisnya keliru","Tiga kelompok pelaku pasar berbeda mengawasi area yang sama, sehingga order menumpuk di sana"],
 answer:3,
 explain:"Namanya konfluensi, dan dia jalan karena kelompok pelaku yang BEDA ngawasin alasan yang BEDA, tapi order mereka numpuk di harga yang SAMA. Yang mazhab Fibonacci, yang mazhab MA200, yang cuma inget lembah dua tahun lalu — tiga golongan, satu titik. Untungnya bukan cuma peluang lebih tinggi: karena areanya sempit dan jelas, stop bisa ditaruh persis di baliknya. Jadi risk reward-nya membaik tanpa nambah risiko sepeser pun."},

{id:"rta-level-h03",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Kemarin high 2.400, low 2.200, close 2.350. Berapa pivot point hari ini, dan apa arti posisi close terhadap pivot itu?",
 options:["2.317, dan close di atas pivot menandakan bias intraday cenderung positif","2.300, dan close tepat di pivot menandakan pasar dalam keseimbangan","2.350, dan pivot selalu sama dengan harga penutupan sebelumnya","2.283, dan close di bawah pivot menandakan bias intraday cenderung negatif"],
 answer:0,
 explain:"Pivot point klasik = rata-rata high, low, close. Itung: (2.400 + 2.200 + 2.350) / 3 = 6.950 / 3 = 2.316,7, dibulatin 2.317. Close kemarin 2.350 ada di ATAS pivot, artinya sesi sebelumnya ditutup di paruh atas rentangnya, dan bias intraday hari ini cenderung positif. Pivot berguna banget buat trader harian karena levelnya diitung dari rumus baku, jadi SEMUA orang lihat angka yang sama."},

{id:"rta-level-h04",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Harga menembus support kuat di 1.500, turun ke 1.420, lalu naik kembali menguji 1.500 dari bawah dan tertahan di situ. Apa yang sedang terjadi dan apa peluangnya?",
 options:["Throwback normal: harga akan melanjutkan kenaikan melewati 1.500 dalam waktu dekat","Role reversal: bekas support kini menjadi resistance, memberi peluang jual dengan stop rapat di atasnya","False breakdown: harga akan kembali masuk ke rentang semula sehingga peluangnya membeli","Konsolidasi netral: level 1.500 kehilangan relevansi setelah tertembus sekali"],
 answer:1,
 explain:"Namanya role reversal, dan akarnya di psikologi rugi. Yang beli di 1.500 dan nyangkut sekarang pengen keluar impas begitu harga balik ke situ. Pasokan mendadak itu yang bikin bekas support jadi resistance. Peluang praktisnya bagus banget: lo bisa jual di situ dengan stop RAPAT tepat di atas 1.500. Kalau tembus, lo salah dan rugi kecil. Kalau nggak tembus, lo dapet posisi dengan risk reward yang bagus."},

{id:"rta-level-h05",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Sebuah gap naik terbentuk di tengah tren yang sudah berjalan, dengan volume besar, dan harga bergerak dari 1.000 ke 1.200 sebelum gap tersebut. Bila ini measuring gap, di mana kira-kira target trennya?",
 options:["Sekitar 1.240, yaitu panjang kaki pertama ditambah lebar gap itu sendiri","Tidak dapat diproyeksikan karena gap hanya menandai kelanjutan tren","Sekitar 1.430, yaitu panjang kaki pertama diproyeksikan dari area gap","Sekitar 1.400, yaitu dua kali lipat dari harga awal pergerakan"],
 answer:2,
 explain:"Measuring gap alias runaway gap secara empiris cenderung muncul di sekitar TITIK TENGAH keseluruhan pergerakan. Jadi kaki pertama sepanjang 200 poin (1.000 ke 1.200) diproyeksiin lagi dari area gap yang ada sedikit di atas 1.230, ngasih target sekitar 1.430. Kuncinya ngenalin JENIS gap-nya: breakaway di awal, measuring di tengah, exhaustion di ujung. Salah nebak jenisnya, targetnya ikut ngaco."},

/* ===== rta-indikator ===== */
{id:"rta-ind-h01",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"ADX berada di 15 sementara sistem persilangan moving average memberi sinyal beli. Apa yang sebaiknya dilakukan, dan mengapa?",
 options:["Mengikuti sinyal, karena persilangan MA adalah konfirmasi tren yang berdiri sendiri","Membalik sinyal menjadi jual, karena ADX rendah menandakan tren akan berbalik","Menambah periode moving average sampai ADX naik di atas 25","Menunda mengikuti sinyal, karena ADX rendah menandakan pasar tidak sedang trending"],
 answer:3,
 explain:"ADX 15 itu di bawah 20, artinya pasar lagi NGGAK trending. Dan MA crossover itu alat pengikut tren. Pakai alat pengikut tren di pasar yang nggak bertren itu resep dapet sinyal bolak-balik yang semuanya rugi. Bukan indikatornya rusak, cuma dipakai di tempat yang salah. Ini contoh sempurna penyaring kondisi pasar: sinyal boleh muncul, tapi kalau ADX di bawah 20, abaikan. Nggak semua sinyal harus diambil."},

{id:"rta-ind-h02",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Seorang analis memasang RSI, stochastic, dan Williams Percent R sekaligus, lalu merasa yakin karena ketiganya memberi sinyal sama. Mengapa keyakinan itu semu?",
 options:["Ketiganya mengukur momentum dari data yang sama, jadi kesepakatannya bukan konfirmasi independen","Ketiganya memakai periode berbeda sehingga sinyalnya tidak dapat dibandingkan langsung","Ketiganya hanya berlaku pada pasar sideways sehingga sinyalnya tidak sah saat trending","Ketiganya menghasilkan nilai dalam skala berbeda sehingga tidak dapat dijumlahkan"],
 answer:0,
 explain:"RSI, stochastic, dan Williams %R itu semuanya berakar dari hal yang sama: bandingin harga sekarang sama range terakhir. Korelasinya tinggi banget, jadi mereka hampir SELALU sepakat. Lo nggak dapet tiga konfirmasi, lo dapet SATU bukti yang diulang tiga kali. Rasa yakinnya palsu. Kombinasi yang beneran nambah informasi itu ngukur dimensi beda: satu buat tren (ADX/MA), satu momentum (RSI), satu volume (OBV), satu volatilitas (ATR)."},

{id:"rta-ind-h03",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Pita Bollinger menyempit ke level tersempit dalam setahun. Seorang trader membeli karena menduga akan terjadi penembusan ke atas. Kelemahan mendasar keputusan itu adalah...",
 options:["Penyempitan terjadi karena periode yang dipakai terlalu panjang untuk kondisi itu","Penyempitan hanya berbicara soal volatilitas, sama sekali tidak menunjukkan arah","Penyempitan justru menandakan tren akan berlanjut, bukan berbalik arah","Pita Bollinger tidak dapat dipakai pada pasar yang volatilitasnya rendah"],
 answer:1,
 explain:"Bollinger squeeze cuma ngomong satu hal: volatilitas lagi rendah banget dan kemungkinan besar bakal meledak. Dia NGGAK ngomong ke arah mana. Nol. Beli cuma modal squeeze itu sama aja lempar koin, cuma dengan grafik yang keliatan ilmiah. Yang bener: tunggu ARAH-nya kekonfirmasi — harga nembus batas mana, volume gimana. Squeeze itu alarm 'siap-siap', bukan panah penunjuk arah."},

{id:"rta-ind-h04",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham bergerak rata-rata 3 persen per hari, saham lain 0,8 persen. Mengapa memakai stop 5 persen untuk keduanya adalah kekeliruan?",
 options:["Persentase stop harus selalu sama agar risiko portofolio dapat dibandingkan","Stop 5 persen terlalu longgar untuk kedua saham tersebut tanpa terkecuali","Stop yang sama mewakili ruang gerak yang sangat berbeda relatif terhadap volatilitas masing-masing","Saham bervolatilitas tinggi seharusnya memakai stop lebih rapat agar kerugiannya terbatas"],
 answer:2,
 explain:"Stop 5% di saham yang gerak rata-rata 0,8% sehari itu jarak lega banget, hampir nggak mungkin kesentuh kecuali ada yang beneran salah. Stop 5% yang sama di saham yang gerak 3% sehari itu kesentuh sama goyangan hari Selasa yang biasa aja. Jarak yang sama, makna yang beda total. Makanya stop yang bener diukur dari VOLATILITAS asetnya (biasanya kelipatan ATR), bukan dari angka persen yang sama buat semua."},

{id:"rta-ind-h05",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Histogram MACD masih positif tetapi terus memendek selama tujuh sesi, sementara harga masih mencetak puncak baru. Apa yang sebenarnya sedang diukur oleh pemendekan itu?",
 options:["MACD sudah berada di bawah garis sinyal sehingga tren berbalik menjadi turun","Volume yang menyertai kenaikan harga sedang menyusut selama tujuh sesi itu","Perbedaan antara EMA 12 dan EMA 26 sudah berbalik menjadi negatif","Jarak antara MACD dan garis sinyalnya menyempit, sehingga percepatan momentum berkurang"],
 answer:3,
 explain:"Histogram MACD itu jarak antara garis MACD sama garis sinyalnya. Masih positif artinya momentum masih di sisi naik. Tapi terus MEMENDEK artinya jaraknya nyempit, alias momentumnya masih positif tapi PERCEPATANNYA berkurang. Analoginya mobil: masih maju, tapi pedal gasnya mulai dilepas. Ini peringatan dini, bukan sinyal jual. Harga masih bisa cetak puncak baru beberapa kali sebelum beneran balik arah."},

/* ===== rta-riset ===== */
{id:"rta-riset-h01",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Seorang analis menerbitkan riset dengan target harga dan tanggal, tanpa mencantumkan level pembatalan skenario. Mengapa kelalaian ini serius bagi pembaca?",
 options:["Pembaca tidak tahu kapan analisisnya terbukti keliru sehingga tidak dapat mengelola risikonya","Target harga tanpa level pembatalan melanggar ketentuan penulisan riset otoritas","Pembaca akan menganggap rekomendasinya berlaku selamanya tanpa batas waktu","Analis kehilangan kesempatan menunjukkan kedalaman analisis teknikalnya"],
 answer:0,
 explain:"Target harga tanpa level pembatalan itu setengah riset. Pembaca tau ke mana lo mikir harga bakal pergi, tapi nggak tau kapan lo ngaku salah. Akibatnya mereka nggak bisa ngelola risikonya sama sekali: mau pasang stop di mana? Mau nambah atau keluar pas harga turun? Tes paling cepet buat nilai riset: cari kalimat 'kalau harga tembus sekian, skenario ini batal'. Nggak ada? Itu jualan, bukan riset."},

{id:"rta-riset-h02",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Seorang analis menyusun materi pemasaran yang menampilkan sepuluh rekomendasi terbaiknya sepanjang tahun, seluruhnya menguntungkan, tanpa menyebut total rekomendasi yang diterbitkan. Apa masalahnya?",
 options:["Tidak ada masalah karena materi pemasaran tidak tunduk pada standar riset","Cherry picking yang menciptakan gambaran kinerja menyesatkan bagi pembaca","Tidak ada masalah selama kesepuluh rekomendasi itu benar-benar pernah diterbitkan","Masalahnya hanya pada format, karena rekam jejak sebaiknya disajikan dalam tabel"],
 answer:1,
 explain:"Nampilin sepuluh rekomendasi terbaik tanpa nyebut total yang diterbitin itu cherry picking. Kalau setahun lo nerbitin 200 rekomendasi, sepuluh yang cakep itu bukan prestasi, itu statistik biasa. Pembaca dapet gambaran kinerja yang nyesatin total. Penyajian yang jujur: kasih SEMUA rekomendasi dengan hasilnya, atau minimal sebutin totalnya sama tingkat keberhasilan keseluruhan. Kalau angkanya jelek, ya itu kenyataannya."},

{id:"rta-riset-h03",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Kepala divisi meminta analis mengubah rekomendasi jual menjadi tahan karena emiten tersebut klien perusahaan. Apa langkah paling tepat?",
 options:["Menahan penerbitan sampai hubungan bisnis dengan emiten tersebut berakhir","Mengubah rekomendasinya tetapi menurunkan target harga sebagai penyeimbang","Menolak mengubah kesimpulan, dan mengungkapkan hubungan bisnis itu dalam risetnya","Mengubahnya karena keputusan penerbitan riset merupakan wewenang kepala divisi"],
 answer:2,
 explain:"Kesimpulan analisis nggak boleh diubah karena tekanan bisnis, titik. Itu inti independensi analis dan yang bikin profesi ini ada artinya. Yang bener: tolak ngubah kesimpulannya, TERUS ungkapin hubungan bisnis itu di dalam risetnya biar pembaca bisa nimbang sendiri. Dua langkah, bukan satu. Kalau tekanannya berlanjut, itu urusan kepatuhan. Analis yang kesimpulannya bisa dibeli itu cuma juru bicara yang nyamar jadi analis."},

{id:"rta-riset-h04",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Sebuah riset menyatakan harga akan mencapai 5.000 dalam tiga bulan. Mengapa perumusan ini bermasalah dibanding menyatakan skenario bersyarat?",
 options:["Rentang tiga bulan terlalu pendek untuk proyeksi harga yang dapat dipertanggungjawabkan","Target harus dinyatakan dalam rentang, bukan angka tunggal, agar sesuai kaidah statistik","Penyebutan angka target dilarang dalam riset teknikal yang diterbitkan untuk publik","Analisis teknikal bekerja dalam probabilitas, sehingga kepastian semacam itu menyesatkan pembaca"],
 answer:3,
 explain:"Analisis teknikal kerja di ranah PELUANG, bukan kepastian. Bilang 'harga akan mencapai 5.000 dalam tiga bulan' itu ngejanjiin sesuatu yang nggak bisa dijanjiin siapa pun. Perumusan bersyarat jauh lebih jujur sekaligus lebih berguna: 'selama bertahan di atas 4.200, skenario menuju 5.000 tetap hidup; di bawah itu skenarionya batal'. Pembaca jadi tau apa yang harus dipantau dan kapan harus keluar. Itu yang namanya riset yang bisa dipakai."},

/* ===== cta-portfolio ===== */
{id:"cta-pf-h01",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Portofolio Rp2 miliar dengan delapan posisi, masing-masing berisiko 1 persen. Empat di antaranya berada pada sektor yang sama dengan korelasi 0,9. Berapa kira-kira risiko efektif portofolio itu?",
 options:["Mendekati 5 persen, karena empat posisi berkorelasi berperilaku seperti satu posisi besar","Tetap 8 persen, karena risiko tiap posisi sudah dibatasi sampai level stop masing-masing","Sekitar 2,8 persen, karena risiko berkorelasi dijumlahkan secara kuadrat","Tidak dapat diperkirakan tanpa mengetahui volatilitas masing-masing instrumen"],
 answer:0,
 explain:"Di atas kertas risiko lo 8 x 1% = 8%. Tapi itu cuma bener kalau kedelapan posisi saling bebas. Kenyataannya: empat posisi berkorelasi 0,9 itu praktis SATU taruhan, jadi mereka bakal kena stop barengan dan nyumbang 4% sekaligus. Empat sisanya yang bebas nggak mungkin kena stop semua di hari yang sama, realistisnya paling satu atau dua, jadi nyumbang sekitar 1%. Total skenario yang masuk akal sekitar 5%. Pelajarannya: ngitung risiko dengan ngejumlahin posisi itu nyesatin di dua arah. Kekorelasi bikin lo underestimate, dan nganggep semua kena barengan bikin lo overestimate."},

{id:"cta-pf-h02",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Kelly criterion menghitung proporsi optimal 22 persen untuk sebuah strategi, tetapi pengelola memilih 8 persen. Apa pembenaran paling kuat untuk pilihan itu?",
 options:["Regulator membatasi proporsi modal yang boleh ditempatkan pada satu strategi","Parameter Kelly diestimasi dari data masa lalu, dan kesalahan estimasi membuat Kelly penuh sangat berisiko","Kelly criterion hanya berlaku pada permainan berpeluang tetap, bukan pada pasar keuangan","Proporsi di bawah Kelly selalu menghasilkan pertumbuhan majemuk yang lebih tinggi"],
 answer:1,
 explain:"Kelly bilang 22%, pengelola milih 8%. Pembenaran paling kuat: parameter Kelly diestimasi dari data MASA LALU, dan estimasi itu bisa meleset. Kalau win rate aslinya lebih rendah sedikit aja dari perkiraan, Kelly penuh langsung berubah dari optimal jadi merusak. Tambah lagi goyangan Kelly penuh itu ekstrem — drawdown 50% jadi hal biasa, dan nggak ada manusia yang tahan. Setengah Kelly ngorbanin sedikit pertumbuhan buat margin kesalahan yang besar."},

{id:"cta-pf-h03",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Sebuah portofolio berisi 50 persen saham dan 50 persen obligasi berdasarkan nilai. Mengapa komposisi ini belum tentu seimbang dari sisi risiko?",
 options:["Bobot berdasarkan nilai selalu setara dengan bobot berdasarkan risiko","Imbal hasil obligasi lebih rendah sehingga kontribusinya terhadap risiko dapat diabaikan","Volatilitas saham jauh melampaui obligasi, sehingga risiko portofolio didominasi sisi sahamnya","Obligasi tidak memiliki risiko sehingga seluruh risiko berasal dari porsi sahamnya"],
 answer:2,
 explain:"Bagi duit 50-50 itu seimbang di NOMINAL, bukan di RISIKO. Volatilitas saham bisa 4-5 kali obligasi, jadi hampir semua naik turun portofolio lo ditentuin sisi sahamnya. Obligasinya cuma numpang nama. Kalau lo mau seimbang beneran, porsi obligasi harus jauh lebih besar — dan itu yang dilakuin pendekatan risk parity. Kelihatannya aneh di atas kertas, tapi kontribusi risikonya baru bener-bener imbang."},

{id:"cta-pf-h04",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Dua pengelola memiliki imbal hasil tahunan sama 18 persen, tetapi yang satu mengalami maximum drawdown 12 persen dan satunya 38 persen. Mengapa perbedaan itu penting meski hasil akhirnya sama?",
 options:["Drawdown dalam menandakan perhitungan imbal hasilnya mengandung kekeliruan","Imbal hasil yang sama berarti kedua strategi setara sehingga drawdown tidak relevan","Drawdown hanya penting bagi pengelola institusi, tidak bagi pemodal perorangan","Drawdown dalam menguji apakah strategi dapat dijalani, dan banyak pemodal keluar sebelum pulih"],
 answer:3,
 explain:"Hasil akhirnya sama, tapi PERJALANANNYA beda jauh. Drawdown 38% artinya modal 1 miliar pernah jadi 620 juta. Pertanyaannya bukan 'secara matematis oke nggak', tapi 'lo sanggup ngeliatnya tiap hari selama berbulan-bulan tanpa nyerah?'. Kebanyakan orang nggak sanggup, dan keluar tepat di titik terdalam, persis sebelum pulih. Strategi terbaik itu bukan yang angkanya paling cakep, tapi yang bisa DIJALANIN sampai selesai."},

/* ===== cta-candle ===== */
{id:"cta-cs-h01",module:"cta-candle",level:"CTA",difficulty:"sulit",
 q:"Sebuah hammer muncul setelah tren turun, tetapi volumenya hanya sepertiga rata-rata dan candle berikutnya menutup lebih rendah. Bagaimana pola itu dinilai?",
 options:["Gagal, karena penolakan harga rendah tidak didukung partisipasi maupun konfirmasi berikutnya","Tetap sah, karena bentuk hammer sudah memenuhi syarat proporsi badan dan sumbunya","Berubah menjadi hanging man karena candle berikutnya menutup lebih rendah","Menjadi lebih kuat, karena volume rendah menandakan tekanan jual sudah habis"],
 answer:0,
 explain:"Hammer bercerita soal penolakan harga rendah: ada yang ngeborong di bawah dan ndorong harga balik naik. Tapi ceritanya cuma kepercaya kalau ada PARTISIPASI. Volume cuma sepertiga rata-rata artinya nggak ada yang beneran ngeborong, cuma kebetulan sedikit yang jual. Terus candle berikutnya nutup lebih rendah, jadi nggak ada konfirmasi juga. Dua-duanya gagal, jadi polanya gagal. Hammer tanpa volume itu cuma bentuk, bukan sinyal."},

{id:"cta-cs-h02",module:"cta-candle",level:"CTA",difficulty:"sulit",
 q:"Pola bullish engulfing muncul di tengah rentang mendatar yang sudah berlangsung tiga bulan. Mengapa nilainya jauh lebih kecil dibanding bila muncul di area support?",
 options:["Volume pada rentang mendatar selalu terlalu rendah untuk mengonfirmasi pola","Pola pembalikan membutuhkan sesuatu untuk dibalik, dan di tengah rentang tidak ada tren maupun level","Pola engulfing hanya sah pada grafik harian, tidak pada rentang mendatar yang panjang","Rentang mendatar membuat perhitungan badan candle menjadi tidak akurat"],
 answer:1,
 explain:"Pola PEMBALIKAN butuh sesuatu buat DIBALIK. Itu logika yang sering kelewat. Di tengah range mendatar yang udah tiga bulan, nggak ada tren yang lagi jalan, dan nggak ada level penting di situ. Jadi bullish engulfing di situ mau ngebalik apa? Pola yang sama di area support setelah tren turun itu cerita yang beda total: ada tren yang lagi ditantang, dan ada level yang lagi dipertahanin. Lokasi lebih penting daripada bentuk."},

{id:"cta-cs-h03",module:"cta-candle",level:"CTA",difficulty:"sulit",
 q:"Seorang peneliti menguji pola morning star secara kuantitatif dan memperoleh hasil bertentangan dengan penelitian lain. Sumber perbedaan yang paling mungkin adalah...",
 options:["Pola morning star terlalu jarang muncul untuk diuji secara statistik","Perangkat lunak yang dipakai menghitung candle dengan cara yang berbeda","Ambang numerik untuk badan kecil dan kedalaman penetrasi didefinisikan berbeda","Data harga yang dipakai berasal dari periode pasar yang berlainan"],
 answer:2,
 explain:"Sumber perbedaannya hampir selalu DEFINISI. Morning star itu butuh badan tengah 'kecil' — kecil itu berapa persen? Dan candle ketiga harus nembus 'cukup dalam' ke badan pertama — cukup itu berapa? Tiap peneliti milih ambang sendiri, jadi mereka sebenernya nguji hal yang BEDA pakai nama yang sama. Makanya hasilnya bertentangan. Buat lo: kalau mau nguji pola sendiri, tulis angkanya dulu sampai detail."},

{id:"cta-cs-h04",module:"cta-candle",level:"CTA",difficulty:"sulit",
 q:"Pada grafik lima menit sebuah saham muncul belasan pola pin bar dalam satu sesi. Mengapa sebagian besar di antaranya tidak bermakna?",
 options:["Pin bar secara teori hanya berlaku pada grafik harian ke atas","Volume pada grafik lima menit tidak tersedia sehingga polanya tidak dapat dikonfirmasi","Pola yang muncul berulang dalam satu sesi saling meniadakan maknanya","Pada timeframe sangat pendek banyak pola terbentuk karena fluktuasi acak semata"],
 answer:3,
 explain:"Makin pendek periodenya, makin besar porsi pergerakan yang cuma noise acak. Di chart lima menit, bentuk yang mirip pola muncul terus-terusan tanpa bawa informasi apa pun — itu cuma kebetulan statistik, dan otak lo yang emang dirancang nemuin pola. Penyaring yang umum dipakai dipakai: cuma perhatiin pola yang muncul di LEVEL PENTING dari timeframe lebih besar. Jumlahnya langsung nyusut drastis, tapi kualitasnya melonjak."}
]);
