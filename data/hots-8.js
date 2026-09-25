/* Soal HOTS batch 8 — menaikkan porsi C4 ke atas di seluruh unit,
   dengan bobot lebih besar pada rta-dasar dan rta-plan yang paling tipis.
   Gaya: soal memakai register formal seperti ujian, pembahasan memakai
   bahasa sehari-hari. */
TD.register([
/* ===== rta-dasar ===== */
{id:"rta-dasar-h19",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham selama tiga tahun bergerak nyaris seiring indeks dengan korelasi 0,93. Analis menyusun analisis teknikal khusus untuk saham itu tanpa melihat indeksnya sama sekali. Kelemahan paling mendasar dari pendekatan ini adalah...",
 options:["Korelasi tinggi membuat analisis teknikal tidak berlaku pada saham tersebut","Saham berkorelasi tinggi hanya boleh dianalisis dengan pendekatan fundamental","Analisis per saham selalu lebih akurat daripada analisis yang menyertakan indeks","Sebagian besar pergerakannya ditentukan pasar, sehingga analisis tanpa konteks indeks kehilangan penggerak utamanya"],
 answer:3,
 explain:"Korelasi 0,93 artinya hampir semua gerak saham itu sebenernya gerak PASAR, bukan gerak dia sendiri. Lo bisa analisis chart-nya sedetail apa pun, tapi kalau indeksnya ambruk, saham itu ikut ambruk — analisis lo kalah sama penggerak yang lebih besar. Makanya pendekatan top down ada: indeks dulu, sektor, baru saham. Lewatin langkah pertama, dan lo lagi baca gerbong sambil ngabaikan lokomotifnya."},

{id:"rta-dasar-h20",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Dua analis menganalisis saham yang sama. Yang pertama memakai data lima tahun dan menyimpulkan tren naik; yang kedua memakai data enam bulan dan menyimpulkan tren turun. Keduanya menarik garis dengan benar. Kesimpulan yang paling tepat adalah...",
 options:["Keduanya bisa benar pada horizonnya masing-masing, sehingga horizon wajib dinyatakan","Yang memakai data lebih panjang pasti lebih benar karena sampelnya lebih besar","Salah satu pasti melakukan kesalahan teknis dalam menarik garis","Perbedaan itu membuktikan analisis teknikal tidak dapat diandalkan"],
 answer:0,
 explain:"Ini bukan pertanda salah satunya bego. Tren itu BERJENJANG: tren turun enam bulan bisa jadi cuma koreksi sekunder di dalam tren naik lima tahun. Dua-duanya bener di horizonnya masing-masing. Makanya horizon WAJIB disebut di tiap rekomendasi — tanpa itu, pembaca pasang stop di tempat yang sama sekali nggak masuk akal buat jangka waktunya."},

{id:"rta-dasar-h21",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Seorang analis mengklaim metodenya memiliki tingkat akurasi 92 persen selama setahun terakhir. Pertanyaan paling penting yang harus diajukan sebelum mempercayai klaim itu adalah...",
 options:["Pada saham apa saja metode itu diterapkan selama setahun","Berapa rata-rata besarnya untung dan rugi per sinyal, bukan hanya berapa persen yang benar","Indikator apa saja yang dipakai untuk menghasilkan sinyalnya","Berapa lama analis tersebut sudah berpengalaman di pasar"],
 answer:1,
 explain:"Akurasi 92 persen kedengeran mustahil dikalahin, sampai lo tanya: untungnya berapa, ruginya berapa? Sistem yang bener 92 kali dengan untung 1 poin dan salah 8 kali dengan rugi 20 poin itu RUGI bersih. Win rate tanpa besaran itu setengah cerita, dan justru setengah yang nggak penting. Yang harus ditanya: expectancy-nya berapa. Klaim akurasi tinggi tanpa angka itu hampir selalu jualan."},

{id:"rta-dasar-h22",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Premis harga mendiskontokan segalanya sering dibantah dengan contoh saham yang melonjak tajam setelah berita mendadak. Bantahan paling tepat terhadap keberatan itu adalah...",
 options:["Berita mendadak selalu sudah bocor sebelumnya sehingga tetap tercermin di harga","Premis itu hanya berlaku pada indeks, tidak pernah pada saham individual","Premis itu berlaku untuk informasi yang dapat diketahui, dan Dow sendiri mengecualikan peristiwa mendadak","Lonjakan setelah berita membuktikan premis tersebut keliru sepenuhnya"],
 answer:2,
 explain:"Dow sendiri udah ngaku ada celahnya: act of God, kejadian yang nggak ada satu orang pun tau. Premisnya soal informasi yang BISA diketahui — dan itu emang kecermin lewat transaksi orang yang tau duluan. Nah, jawaban yang bilang berita selalu bocor itu jebakan: kedengeran mbelain teknikal, padahal itu ngaku-ngaku sesuatu yang nggak bisa dibuktiin. Pengakuan jujur soal batas justru bikin kerangkanya lebih kuat."},

{id:"rta-dasar-h23",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham bergerak dalam rentang sempit selama delapan bulan. Analis memaksakan analisis tren dan berulang kali mengalami kerugian kecil. Perbaikan yang paling mendasar adalah...",
 options:["Memperbesar periode indikator tren sampai sinyal palsunya berkurang","Menambah indikator tren lain sebagai konfirmasi tambahan","Menurunkan ukuran posisi agar kerugian kecilnya tidak terasa","Mengenali dulu kondisi pasarnya, lalu memilih perangkat yang sesuai dengan kondisi itu"],
 answer:3,
 explain:"Akar masalahnya bukan setelan indikator, tapi SALAH ALAT. Pasar cuma bertren sekitar sepertiga waktunya; sisanya nyamping. Alat pengikut tren di pasar nyamping itu ngasih sinyal bolak-balik yang semuanya rugi, dan nggak ada setelan yang bisa nyelametin. Urutan yang bener: kenali dulu kondisi pasarnya (pakai ADX misalnya), BARU pilih alatnya. Kebanyakan orang punya satu set indikator favorit dan dipakai di semua kondisi."},

{id:"rta-dasar-h24",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Prinsip Dow menyatakan tren dianggap berlanjut sampai ada sinyal pembalikan definitif. Konsekuensi paling tidak nyaman dari prinsip ini bagi analis adalah...",
 options:["Analis akan selalu menyerahkan sebagian keuntungan di puncak dan sebagian kerugian di dasar","Analis tidak boleh pernah menutup posisi sebelum tren primer berakhir","Analis harus memeriksa ulang seluruh analisisnya setiap hari","Analis tidak dapat memakai indikator apa pun selain struktur harga"],
 answer:0,
 explain:"Ini bagian yang jarang disebut di buku motivasi. Nunggu bukti tegas artinya lo nggak akan pernah keluar di puncak — selalu ada jarak antara pucuk dan saat strukturnya beneran patah. Sama di sisi bawah. Lo bayar itu tiap kali. Imbalannya: lo juga nggak pernah kelempar dari tren besar kecepetan. Dan kelempar dari tren sepuluh tahun itu jauh lebih mahal daripada nyerahin 10 persen di ujung."},

/* ===== rta-plan ===== */
{id:"rta-plan-h19",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Modal 400 juta rupiah dengan aturan risiko 1,5 persen per transaksi. Analis membuka posisi senilai 120 juta dengan stop 8 persen di bawah harga masuk. Penilaian yang paling tepat terhadap ukuran posisi itu adalah...",
 options:["Tidak dapat dinilai tanpa mengetahui volatilitas sahamnya","Terlalu besar, karena risikonya 9,6 juta atau 2,4 persen, melampaui batas yang ditetapkan","Sudah sesuai, karena nilai posisi hanya 30 persen dari modal","Terlalu kecil, karena batas 1,5 persen memungkinkan posisi yang lebih besar"],
 answer:1,
 explain:"Itung: stop 8 persen dari posisi 120 juta = rugi 9,6 juta. Batas lo 1,5 persen x 400 juta = 6 juta. Jadi lo kelebihan 60 persen dari batas sendiri. Posisi maksimal yang boleh: 6 juta dibagi 0,08 = 75 juta, bukan 120 juta. Jebakannya ada di opsi kedua — orang sering ngukur dari persentase MODAL yang dibelanjakan, padahal yang dibatasi itu RUGINYA."},

{id:"rta-plan-h20",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Seorang analis menetapkan risiko 1 persen per transaksi dan memegang delapan posisi terbuka sekaligus di sektor yang berbeda-beda. Pernyataan yang paling tepat mengenai risiko portofolionya adalah...",
 options:["Risikonya pasti 8 persen karena kedelapan stop akan tersentuh bersamaan","Jumlah posisi tidak berpengaruh selama semuanya berada di sektor berbeda","Total heat 8 persen adalah batas atas, dan risiko sesungguhnya bergantung pada korelasi antarposisi","Risikonya tetap 1 persen karena setiap posisi memiliki stop sendiri"],
 answer:2,
 explain:"Dua jawaban ekstrem sama-sama salah. Bilang risikonya tetap 1 persen itu ngabaikan kenyataan bahwa delapan posisi bisa merah bareng. Bilang pasti 8 persen itu nganggep semuanya kena stop di hari yang sama, dan itu jarang terjadi kalau sektornya beda. Yang bener: 8 persen itu BATAS ATAS, dan yang nentuin di mana lo berada dalam rentang itu adalah korelasinya. Sektor beda bukan jaminan — pas krisis, korelasi semua aset melonjak barengan."},

{id:"rta-plan-h21",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Sebuah jurnal mencatat bahwa transaksi yang dibuka pada dua jam pertama sesi memiliki hasil rata-rata jauh lebih buruk daripada yang dibuka setelahnya, dengan sampel 180 transaksi. Tindakan paling tepat adalah...",
 options:["Mengabaikannya karena waktu pembukaan posisi tidak memiliki dasar teoretis","Segera berhenti bertransaksi sepenuhnya pada pagi hari tanpa pengujian lanjutan","Memperbesar ukuran posisi pada pagi hari untuk menutup kerugiannya","Menjadikannya aturan tertulis untuk menunda entry, lalu memantau apakah polanya bertahan"],
 answer:3,
 explain:"180 transaksi itu sampel yang lumayan, jadi polanya layak ditanggapi serius — bukan diabaikan. Dan dasarnya ada: dua jam pertama itu paling bergejolak, spread lebar, dan banyak gerakan yang cuma nyerap order semalaman. Tapi jangan langsung dijadiin dogma permanen. Yang bener: jadiin aturan TERTULIS supaya bisa dijalanin konsisten, terus pantau apakah polanya bertahan. Temuan dari jurnal sendiri itu jauh lebih berharga daripada tips dari mana pun."},

{id:"rta-plan-h22",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Analis A menempatkan stop berdasarkan batas kerugian rupiah yang ia sanggupi. Analis B menempatkan stop pada level teknikal lalu menyesuaikan jumlah lembarnya. Perbedaan paling penting dari kedua pendekatan itu adalah...",
 options:["Stop A dapat berada di tempat yang tidak bermakna bagi pasar sehingga rawan tersentuh fluktuasi biasa","Pendekatan A lebih aman karena batas kerugiannya ditetapkan lebih dulu","Keduanya menghasilkan posisi yang persis sama besarnya","Pendekatan B melanggar prinsip pengendalian risiko karena ukurannya berubah-ubah"],
 answer:0,
 explain:"Dua-duanya ngaku ngendaliin risiko, tapi cuma satu yang nyambung sama pasar. Stop-nya A ditaruh di harga yang cuma berarti buat DOMPET-nya — pasar nggak tau dan nggak peduli, jadi harga sering nyentuh situ cuma karena goyangan biasa. Stop-nya B ditaruh di titik yang kalau kesentuh, ide-nya emang kebukti salah. Risiko rupiahnya tetep dijaga, tapi lewat jumlah lembar. Urutannya: stop dari chart duluan, ukuran ngikut."},

{id:"rta-plan-h23",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Sebuah sistem memiliki expectancy 0,3R. Setelah menjalankannya 60 transaksi, hasil nyatanya minus 4R. Penilaian yang paling tepat adalah...",
 options:["Sampel 60 transaksi sudah cukup besar untuk membuktikan sistem itu gagal","Masih mungkin dalam sebaran wajar, dan yang perlu diperiksa lebih dulu adalah kesesuaian eksekusi dengan rencana","Sistemnya pasti rusak karena hasilnya berlawanan dengan expectancy","Expectancy tidak pernah berlaku pada praktik nyata, hanya pada perhitungan"],
 answer:1,
 explain:"Expectancy 0,3R itu rata-rata JANGKA PANJANG, bukan janji per 60 transaksi. Dengan sebaran hasil yang lebar, minus 4R setelah 60 transaksi masih bisa masuk akal secara statistik — apalagi kalau win rate-nya rendah. Tapi jangan cuma pasrah: cek dulu yang paling sering jadi biang keroknya, yaitu EKSEKUSI. Rata-rata rugi lo lebih besar dari 1R? Berarti stop digeser. Rata-rata untung lebih kecil dari rencana? Berarti TP kecepetan. Biasanya masalahnya di tangan, bukan di sistem."},

{id:"rta-plan-h24",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Seorang analis memindahkan stop ke titik impas setiap kali posisi untung 1R, dan mencatat bahwa banyak posisi tersentuh impas lalu harganya melanjutkan tren tanpa dirinya. Perbaikan yang paling masuk akal adalah...",
 options:["Berhenti memakai stop sama sekali agar tidak pernah tersentuh","Memperbesar target agar rasio imbal hasilnya menutupi posisi yang tersentuh impas","Menyesuaikan jarak stop dengan volatilitas instrumen, bukan dengan angka R yang seragam","Memindahkan stop ke titik impas lebih cepat, yaitu saat untung 0,5R"],
 answer:2,
 explain:"Masalahnya bukan di kapan mindahinnya, tapi di pakai ANGKA SERAGAM buat instrumen yang volatilitasnya beda-beda. Untung 1R di saham kalem itu udah jauh, di saham liar itu baru goyangan pagi. Stop di titik impas jadi kesentuh sama napas normal harga. Perbaikannya: ukur jaraknya pakai ATR instrumen itu sendiri. Dan pertimbangin realisasi sebagian daripada mindahin semua ke impas — lo dapet kepastian tanpa matiin potensi."},

{id:"rta-plan-h25",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Modal 250 juta rupiah. Setelah rentetan kerugian, ekuitas turun menjadi 190 juta. Analis ingin kembali ke modal awal dalam waktu dekat dan menaikkan risiko per transaksi dari 1 persen menjadi 3 persen. Penilaian yang paling tepat adalah...",
 options:["Wajar, karena diperlukan risiko lebih besar untuk memulihkan kerugian lebih cepat","Netral, karena persentase risiko tidak berpengaruh pada peluang pemulihan","Terlalu konservatif, karena pemulihan 32 persen menuntut risiko di atas 5 persen","Berbahaya, karena memperbesar taruhan saat ekuitas menyusut mempercepat kemungkinan kehancuran"],
 answer:3,
 explain:"Naluri bilang: rugi banyak, taruhan digedein biar cepet balik. Dan itu cara paling umum akun jadi nol. Dari 190 juta lo butuh naik 32 persen buat impas. Dengan risiko 3 persen, kalah 10 kali beruntun bikin ekuitas lo tinggal sekitar 140 juta — dan sekarang lo butuh naik 79 persen. Makin dalem lubangnya, makin curam tangganya. Pendekatan yang bener gerak KEBALIKANNYA: kecilin ukuran pas ekuitas turun, biar sistemnya ngerem sendiri."},

/* ===== rta-trend ===== */
{id:"rta-trend-h16",module:"rta-pola",level:"RTA",difficulty:"sulit",
 q:"Sebuah pola segitiga menaik terbentuk selama empat bulan, tetapi menembus ke BAWAH disertai volume besar. Sikap yang paling tepat adalah...",
 options:["Menerima penembusan itu, karena arah penembusan yang nyata mengalahkan kecenderungan pola","Menganggap penembusan itu palsu karena segitiga menaik selalu berakhir bullish","Menunggu harga kembali ke dalam segitiga sebelum mengambil keputusan apa pun","Membatalkan seluruh analisis karena polanya terbukti keliru sejak awal"],
 answer:0,
 explain:"Segitiga menaik itu CONDONG bullish, bukan dijamin bullish. Kata condong itu penting. Kalau tembusnya ke bawah dengan volume besar, itu informasi nyata yang ngalahin kecenderungan statistik. Yang salah itu ngotot nunggu harga balik naik karena polanya 'harusnya' bullish — itu namanya maksa pasar ngikutin buku. Bonusnya: penembusan yang berlawanan dari yang diharapkan sering justru tajam, karena banyak yang kejebak di sisi yang salah."},

{id:"rta-trend-h17",module:"rta-pola",level:"RTA",difficulty:"sulit",
 q:"Harga menembus resistance dengan volume dua kali rata-rata. Keesokan harinya harga turun kembali ke bawah level itu, tetapi volumenya hanya sepertiga rata-rata. Pembacaan yang paling tepat adalah...",
 options:["Polanya berubah menjadi bearish dan layak dijadikan sinyal jual","Kemungkinan besar throwback biasa, karena penarikan turun tidak didukung partisipasi","Penembusan terbukti palsu dan posisi harus ditutup seluruhnya","Volume pada hari penembusan tidak bermakna karena sudah dibatalkan"],
 answer:1,
 explain:"Bandingin volumenya, di situ kuncinya. Naiknya didukung volume DUA KALI rata-rata — ada partisipasi serius. Turunnya cuma SEPERTIGA rata-rata — nggak ada yang beneran mau jual, itu cuma ambil untung tipis dan kurangnya pembeli. Ketimpangan ini ciri khas throwback, yang wajar dan malah sering ngasih entry kedua dengan stop lebih rapat. Kalau turunnya dengan volume gede, ceritanya beda total."},

{id:"rta-trend-h18",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham membentuk higher high dan higher low pada grafik harian selama tiga bulan, tetapi pada grafik mingguan masih membentuk lower high. Pembacaan yang paling tepat adalah...",
 options:["Grafik harian lebih mutakhir sehingga tren mingguan sudah tidak berlaku","Tren mingguan pasti akan segera berbalik naik mengikuti grafik harian","Tren naik harian sedang berlangsung di dalam tren turun mingguan yang belum berbalik","Kedua pembacaan bertentangan sehingga keduanya harus diabaikan"],
 answer:2,
 explain:"Nggak ada yang bertentangan di sini — ini tren berjenjang yang normal. Kenaikan tiga bulan di harian bisa jadi cuma pantulan di dalam tren turun mingguan yang masih hidup, selama dia belum ngelewatin lower high terakhir. Praktisnya penting: posisi beli di sini masih ngelawan arus yang lebih besar, jadi ukurannya dikecilin dan targetnya jangan kejauhan. Tren mingguan baru dinyatakan berbalik kalau lower high-nya ditembus."},

{id:"rta-trend-h19",module:"rta-pola",level:"RTA",difficulty:"sulit",
 q:"Analis mengamati bahwa sebuah pola head and shoulders telah terbentuk sempurna, tetapi harga tidak pernah menembus neckline dan justru naik melewati puncak head. Pelajaran metodologis yang paling penting dari kejadian ini adalah...",
 options:["Pola head and shoulders memang tidak dapat diandalkan pada saham individual","Analisisnya keliru karena yang terbentuk pasti bukan head and shoulders","Pola tersebut tetap sah dan harga pasti akan kembali turun ke neckline","Pola belum sah sebelum penembusan terjadi, sehingga bentuk saja tidak pernah cukup jadi dasar posisi"],
 answer:3,
 explain:"Ini pelajaran yang mahal kalau dipelajari pakai uang. Pola pembalikan cuma jadi SAH setelah level konfirmasinya ditembus — sebelum itu, yang lo punya cuma bentuk yang menarik. Banyak orang masuk posisi jual pas bahu kanan kebentuk karena udah yakin, dan kejebak pas harga malah naik. Bentuk itu hipotesis, penembusan itu buktinya. Dan pola yang gagal kayak gini sering diikuti gerakan tajam ke arah sebaliknya."},

/* ===== rta-level ===== */
{id:"rta-level-h12",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Sebuah level resistance di 3.000 terbentuk dari puncak tiga tahun lalu dengan volume transaksi yang sangat besar saat itu. Level lain di 2.950 terbentuk dari puncak bulan lalu dengan volume tipis. Penilaian yang paling tepat adalah...",
 options:["Level 3.000 berpotensi lebih kuat karena banyak pemodal memiliki harga perolehan di sana","Level 2.950 pasti lebih kuat karena terbentuk paling baru","Keduanya setara karena keduanya sama-sama merupakan puncak sebelumnya","Level dari tiga tahun lalu sudah pasti tidak relevan lagi"],
 answer:0,
 explain:"Dua faktor ketemu di sini dan harus ditimbang. Kebaruan emang bikin level lebih relevan — itu bener. Tapi VOLUME yang dulu diperdagangin itu nentuin berapa banyak orang yang nyangkut di situ, dan mereka yang bakal jual buat impas. Puncak tiga tahun lalu dengan volume besar nyimpen jauh lebih banyak barang nyangkut daripada puncak bulan lalu yang sepi. Yang jangan dilakuin: langsung mukul rata 'yang lebih baru pasti lebih kuat'."},

{id:"rta-level-h13",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Harga sebuah saham berhenti tepat di area yang bertepatan dengan retracement Fibonacci 61,8 persen, tetapi analis menarik Fibonacci tersebut dari ayunan yang berbeda dari yang dipakai rekannya, dan level mereka berselisih 90 poin. Yang paling menentukan dalam menyelesaikan perbedaan ini adalah...",
 options:["Rata-rata dari kedua level tersebut, karena keduanya sama-sama sah","Apakah ayunan yang dijangkarkan merupakan pergerakan yang jelas terlihat pada timeframe yang dianalisis","Siapa di antara keduanya yang lebih dulu menarik garis Fibonacci tersebut","Level mana yang lebih dekat dengan harga berjalan saat ini"],
 answer:1,
 explain:"Kelemahan terbesar Fibonacci itu kebebasan milih titik jangkar, dan di situlah bias nyelinap. Yang nentuin: ayunannya JELAS keliatan nggak di timeframe yang lagi dianalisis? Ayunan besar yang semua orang lihat itu yang order-nya beneran numpuk. Dua jawaban yang menggoda tapi salah: ambil yang paling deket harga sekarang (itu namanya nyocokin setelah kejadian), dan rata-ratain (itu ngarang level baru yang nggak ada dasarnya)."},

{id:"rta-level-h14",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Sebuah support diuji empat kali dalam tiga bulan. Pada pengujian pertama harga memantul 12 persen, pada pengujian keempat hanya 3 persen. Pembacaan yang paling tepat dari pola pantulan ini adalah...",
 options:["Besarnya pantulan tidak berkaitan dengan kekuatan support","Harga akan memantul lebih tinggi pada pengujian kelima sebagai kompensasi","Permintaan di level itu menipis, sehingga peluang support jebol pada pengujian berikutnya meningkat","Support semakin kuat karena berhasil bertahan sebanyak empat kali"],
 answer:2,
 explain:"Besarnya pantulan itu petunjuk yang sering kelewat. Pantulan 12 persen artinya antrean order beli di situ tebel banget. Pantulan 3 persen artinya antrean itu udah hampir abis — tiap pengujian nyerap sebagian order tanpa selalu ada yang gantiin. Jadi bertahan empat kali itu BUKAN tanda makin kuat, justru sebaliknya. Perhatiin polanya: pantulan yang makin pendek dan makin cepet balik diuji lagi itu ciri support yang lagi sekarat."},

/* ===== rta-indikator ===== */
{id:"rta-ind-h12",module:"rta-kekuatan",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham yang biasanya bergerak 1 persen per hari tiba-tiba bergerak 6 persen dalam sehari. Bollinger Bands seketika melebar. Analis menyimpulkan volatilitas sedang tinggi sehingga menunda entry. Kelemahan penalaran ini adalah...",
 options:["Bollinger Bands tidak pernah dapat dipakai untuk menilai volatilitas","Volatilitas tinggi justru selalu merupakan kondisi terbaik untuk masuk","Pelebaran pita hanya bermakna bila terjadi bersamaan dengan sinyal RSI","Pelebaran pita adalah akibat dari pergerakan itu sendiri, jadi belum tentu menandakan volatilitas akan berlanjut"],
 answer:3,
 explain:"Bollinger Bands itu ngitung standar deviasi dari data yang BARU AJA kejadian. Jadi begitu ada satu hari gila, pitanya otomatis melebar — dia lagi ngelaporin masa lalu, bukan ngeramal masa depan. Kesimpulannya jadi muter: harga gerak besar, makanya pita melebar, makanya gue bilang volatil. Yang lebih jujur buat nebak volatilitas ke depan itu volatility clustering (hari gila cenderung ngumpul) atau implied volatility dari harga opsi."},

{id:"rta-ind-h13",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Dua analis memakai MACD pada saham yang sama. Yang pertama memakai grafik harian, yang kedua grafik empat jam, dan sinyal keduanya berlawanan. Cara paling tepat menyelesaikan perbedaan ini adalah...",
 options:["Memberi prioritas pada timeframe yang sesuai dengan horizon posisi, dan memakai yang lebih kecil untuk penentuan waktu","Memakai rata-rata dari kedua sinyal sebagai kesimpulan akhir, karena keduanya sama-sama sah secara perhitungan","Memakai sinyal dari grafik empat jam karena datanya paling mutakhir sehingga paling menggambarkan keadaan sekarang","Mengganti MACD dengan indikator lain yang perhitungannya tidak bergantung pada pilihan timeframe sama sekali"],
 answer:0,
 explain:"Sinyal yang berlawanan antar timeframe itu bukan kegagalan indikator — itu emang informasi. Yang nentuin siapa yang menang: HORIZON POSISI lo. Mau nahan tiga minggu? Harian yang jadi acuan arah, dan yang empat jam dipakai nyari titik masuk yang presisi. Mau trading dua hari? Kebalikannya. Nggak ada indikator yang bebas timeframe — semuanya diitung dari periode tertentu, jadi pertanyaan 'timeframe mana' itu selalu harus dijawab duluan."},

{id:"rta-ind-h14",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Analis menemukan bahwa mengubah periode RSI dari 14 menjadi 9 meningkatkan hasil pengujian secara mencolok pada satu saham. Langkah paling tepat sebelum menerapkannya adalah...",
 options:["Mengganti seluruh indikator lain dengan periode yang juga dipersingkat","Memeriksa apakah periode di sekitarnya juga membaik, dan mengujinya pada instrumen lain","Segera menerapkannya karena hasil pengujian sudah membuktikan keunggulannya","Menurunkan periode lebih jauh lagi untuk mencari hasil yang lebih baik"],
 answer:1,
 explain:"Satu angka yang melejit sendirian itu tanda bahaya, bukan temuan. Cek tetangganya: kalau 8 dan 10 juga lumayan, berarti lo nemu DATARAN yang nyata. Kalau cuma 9 yang bersinar sementara 8 dan 10 jeblok, itu parameternya nempel di noise saham itu di periode itu. Uji kedua yang wajib: coba di instrumen lain. Logika pasar yang sungguh berlaku mestinya jalan di beberapa tempat, meski mutunya beda."},

/* ===== rta-riset ===== */
{id:"rta-riset-h09",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Sebuah laporan riset menampilkan grafik dengan rentang waktu enam bulan yang memperlihatkan tren naik meyakinkan, sementara grafik lima tahun instrumen yang sama menunjukkan tren turun. Laporan hanya menampilkan yang enam bulan. Persoalan yang muncul adalah...",
 options:["Grafik lima tahun memang tidak pernah relevan untuk rekomendasi jangka pendek","Persoalannya hanya pada estetika penyajian, bukan pada isi analisisnya","Pemilihan rentang waktu yang menguntungkan kesimpulan, sehingga pembaca kehilangan konteks penting","Tidak ada persoalan selama grafik enam bulan digambar dengan benar"],
 answer:2,
 explain:"Ini cherry picking versi grafik, dan lebih halus daripada cherry picking rekomendasi. Nggak ada yang bohong — grafiknya bener, garisnya bener. Yang disembunyiin: konteks bahwa kenaikan enam bulan itu terjadi DI DALAM tren turun lima tahun. Pembaca yang cuma lihat satu grafik dapet gambaran yang beda total. Penyajian yang jujur: tampilkan dua-duanya, atau minimal sebutin posisi harga dalam struktur jangka panjangnya."},

{id:"rta-riset-h10",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Seorang analis diminta menulis ulasan atas saham yang sedang diperdagangkan sangat tipis, dengan pembaca laporan berjumlah puluhan ribu orang. Pertimbangan tambahan yang paling penting adalah...",
 options:["Saham tipis tidak boleh diulas dalam bentuk laporan apa pun","Jumlah pembaca tidak berpengaruh terhadap isi maupun cara penyajian laporan","Analisis teknikal pada saham tipis selalu lebih akurat karena polanya bersih","Rekomendasi pada saham tipis dapat menggerakkan harganya sendiri, sehingga risiko bagi pembaca perlu dinyatakan"],
 answer:3,
 explain:"Ini soal yang sering nggak kepikiran. Kalau puluhan ribu orang baca rekomendasi beli di saham yang volume hariannya kecil, laporan itu sendiri yang bakal gerakin harganya. Yang masuk duluan untung, yang telat masuk di harga yang udah kedorong, dan pas mau keluar nggak ada yang beli. Kewajiban analis: nyatain risiko likuiditasnya secara terbuka. Dan kalau lo atau perusahaan lo punya posisi di situ, itu bukan cuma disclosure biasa — itu wilayah yang gampang banget dinilai manipulasi."},

/* ===== cta-teori ===== */
{id:"cta-teori-h21",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Adaptive Market Hypothesis dan Efficient Market Hypothesis sama-sama menjelaskan mengapa keunggulan sulit dipertahankan. Perbedaan paling mendasar keduanya adalah...",
 options:["EMH menyatakan keunggulan tidak pernah ada, AMH menyatakan keunggulan ada tetapi bersifat sementara","AMH menyatakan pasar selalu efisien, EMH menyatakan sebaliknya","Keduanya identik dan hanya berbeda pada istilah yang dipakai","EMH berlaku pada saham, AMH hanya berlaku pada komoditas"],
 answer:0,
 explain:"Bedanya mendasar banget meski kesimpulan praktisnya mirip. EMH bilang keunggulan itu NGGAK PERNAH ada — kalau lo untung, itu hoki atau lo nanggung risiko lebih besar. AMH bilang keunggulan ADA dan nyata, tapi kekikis seiring makin banyak yang pakai, seperti spesies yang rebutan makanan terbatas. Konsekuensinya beda: kalau EMH bener, nyari strategi itu sia-sia. Kalau AMH bener, nyari itu ada gunanya — tapi kerjanya nggak pernah selesai."},

{id:"cta-teori-h22",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Dalam metode Wyckoff, sebuah saham menembus ke atas area trading range dengan volume besar, tetapi keesokan harinya kembali masuk ke dalam range. Pembacaan Wyckoff yang paling tepat atas urutan ini adalah...",
 options:["Selling climax yang menandakan pasokan telah habis terserap","Upthrust, yaitu pengujian ke atas yang gagal dan sering menandakan distribusi","Spring, yaitu pengujian ke bawah yang berhasil dan menandakan akumulasi","Sign of strength yang menegaskan fase markup sedang dimulai"],
 answer:1,
 explain:"Upthrust itu cerminan atas dari spring. Spring nembus ke BAWAH support terus balik naik — nakut-nakutin yang lemah biar jual murah, cirinya akumulasi. Upthrust nembus ke ATAS resistance terus balik turun — mancing yang ketinggalan biar beli di pucuk, cirinya distribusi. Dua-duanya penembusan yang gagal, dan dua-duanya sengaja. Yang mbedain cuma arahnya. Volume besar pas nembus itu bagian dari umpannya, bukan bukti keasliannya."},

{id:"cta-teori-h23",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Seorang peneliti menemukan sebuah pola teknikal menghasilkan imbal hasil abnormal signifikan pada data 1970 sampai 1990, tetapi hilang pada data setelahnya. Penjelasan yang paling konsisten dengan kerangka teori modern adalah...",
 options:["Pola tersebut akan kembali bekerja bila ditunggu cukup lama","Data setelah 1990 tidak dapat dipercaya karena perdagangan elektronik","Keunggulan terkikis setelah pola dipublikasikan dan struktur pasar berubah, sesuai kerangka adaptif","Penelitian awal pasti mengandung kesalahan metodologis yang belum ditemukan"],
 answer:2,
 explain:"Pola ini persis yang diramalin Adaptive Market Hypothesis. Begitu sebuah keunggulan dipublikasi, makin banyak yang makan di kolam yang sama sampai jatahnya abis. Ditambah struktur pasarnya sendiri berubah: desimalisasi harga, eksekusi kecepatan tinggi, algoritma yang ngeburu pola yang sama. Dua jawaban yang menggoda tapi keliru: nyalahin metodologi penelitian awal (padahal hasilnya bisa aja emang bener DULU), dan nungguin polanya balik lagi."},

/* ===== cta-elliott ===== */
{id:"cta-elliott-h11",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Seorang analis Elliott merevisi penghitungan gelombangnya setiap kali harga bergerak berlawanan dengan perkiraan, sehingga penghitungannya selalu terlihat benar. Persoalan metodologis paling serius dari praktik ini adalah...",
 options:["Revisi penghitungan gelombang memang dilarang dalam kerangka Elliott Wave","Persoalannya hanya pada waktu yang terbuang untuk menghitung ulang","Tidak ada persoalan selama penghitungan barunya tidak melanggar aturan mutlak","Analisis yang tidak pernah dapat dinyatakan salah juga tidak pernah dapat diuji kebenarannya"],
 answer:3,
 explain:"Ini kritik paling tajam terhadap Elliott, dan sayangnya sering valid. Analisis yang bisa direvisi terus-menerus setelah fakta itu NGGAK PERNAH salah — dan justru itu masalahnya. Sesuatu yang nggak bisa dibuktiin salah juga nggak bisa dibuktiin bener; dia cuma cerita yang nyesuain diri. Revisi itu sendiri sah kok, asal level PEMBATALAN-nya ditetapin DI DEPAN. Bedanya tipis tapi menentukan: revisi karena level batal kesentuh itu disiplin, revisi karena harga nggak nurut itu pembenaran."},

{id:"cta-elliott-h12",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Gelombang 1 berlangsung selama 20 hari, gelombang 2 selama 30 hari, dan gelombang 3 baru berjalan 12 hari tetapi sudah melampaui 161,8 persen gelombang 1. Pembacaan yang paling tepat adalah...",
 options:["Kecepatan dan besaran gelombang 3 konsisten dengan wataknya sebagai gelombang paling bertenaga","Penghitungan pasti keliru karena gelombang 3 tidak boleh lebih cepat dari gelombang 1","Gelombang 3 akan segera berbalik karena bergerak terlalu cepat","Durasi gelombang lebih menentukan keabsahan daripada besaran pergerakannya"],
 answer:0,
 explain:"Gelombang 3 emang begitu wataknya: cepat, jauh, dan bervolume paling besar. Itu momen pasar akhirnya sadar trennya nyata, jadi semua masuk barengan. Naik 161,8 persen dalam waktu yang lebih singkat dari gelombang 1 itu konsisten, bukan anomali. Yang keliru: nganggep gerakan cepat berarti bakal segera balik. Nggak ada aturan Elliott yang bilang durasi harus proporsional — yang ada cuma tiga aturan soal LEVEL HARGA, bukan soal waktu."},

/* ===== cta-siklus ===== */
{id:"cta-siklus-h08",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Sebuah siklus 18 bulan terdeteksi pada data 30 tahun. Analis menghitung bahwa dalam rentang itu terdapat 20 lembah siklus, dan 13 di antaranya bertepatan dengan titik balik harga yang nyata. Penilaian yang paling tepat adalah...",
 options:["Jumlah 20 lembah terlalu sedikit untuk dinilai dalam bentuk apa pun","Tingkat ketepatan 65 persen berguna sebagai penyaring waktu, tetapi tidak cukup sebagai dasar tunggal","Tingkat ketepatan itu membuktikan siklus 18 bulan tidak nyata","Ketepatan 65 persen sudah cukup untuk dijadikan sinyal masuk otomatis"],
 answer:1,
 explain:"Angka 65 persen itu posisinya menarik: terlalu bagus buat dibuang, terlalu tipis buat dipercaya sendirian. Artinya siklusnya kemungkinan nyata, tapi 7 dari 20 kali dia meleset. Pemakaian yang masuk akal: jadiin PENYARING WAKTU — pas masuk zona lembah siklus, naikin kewaspadaan dan mulai cari konfirmasi dari harga. Yang bahaya: entry otomatis tiap lembah, karena 35 persen kesempatan lo lagi nangkep pisau jatuh."},

{id:"cta-siklus-h09",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Analis menemukan bahwa sebuah siklus yang dulu berperiode 20 hari kini lebih cocok dijelaskan dengan periode 26 hari. Sebelum mengganti parameternya, pertanyaan paling penting yang harus dijawab adalah...",
 options:["Apakah periode baru itu menghasilkan lebih banyak sinyal transaksi","Apakah rekan analis lain juga memakai periode yang sama","Apakah ada perubahan nyata pada pasar yang menjelaskannya, atau ini sekadar mencocokkan ke data terbaru","Apakah periode 26 hari lebih dekat dengan bilangan Fibonacci"],
 answer:2,
 explain:"Nyetel ulang periode biar cocok sama data terbaru itu nyocokin kurva ke noise, dan biasanya langsung ambruk begitu diuji ke depan. Yang harus dijawab duluan: ADA PERUBAHAN NYATA NGGAK di pasarnya? Pelakunya ganti, likuiditasnya beda, aturan mainnya berubah? Kalau ada penjelasannya, penyesuaian itu masuk akal. Kalau nggak ada dan lo cuma ngepasin angka, lo lagi ngajarin sistem lo ngapalin masa lalu."},

/* ===== cta-breadth ===== */
{id:"cta-breadth-h07",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Selama enam bulan, persentase saham di atas MA200 turun dari 72 menjadi 38 persen, sementara indeks hanya turun 4 persen. Pembacaan yang paling tepat adalah...",
 options:["Indeks yang hanya turun 4 persen membuktikan pasarnya masih sehat, sehingga eksposur tidak perlu diubah","Indikator breadth sedang rusak perhitungannya, karena hasilnya bertentangan dengan pergerakan indeksnya","Penurunan persentase sebesar itu normal pada pasar mana pun dan tidak membawa informasi tambahan","Kerusakan internal jauh lebih luas daripada yang tampak pada indeks, sehingga risikonya lebih besar dari kesannya"],
 answer:3,
 explain:"Ini kesenjangan yang serius dan sering kelewat. Indeks cuma turun 4 persen, kelihatannya adem. Tapi persentase saham di atas MA200 anjlok dari 72 ke 38 — artinya SEPARO LEBIH saham yang dulu sehat sekarang di bawah tren panjangnya. Kerusakannya menyeluruh, cuma ketutupan beberapa raksasa yang nahan indeks. Kalau lo pegang portofolio saham lapis dua, enam bulan itu jauh lebih sakit daripada yang diberitain."},

{id:"cta-breadth-h08",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Analis memakai divergensi breadth sebagai alasan untuk menutup seluruh posisi, tetapi indeks terus naik 14 persen selama lima bulan berikutnya sebelum akhirnya berbalik. Pelajaran yang paling tepat dari pengalaman ini adalah...",
 options:["Breadth mengukur kerapuhan, bukan waktu, sehingga lebih cocok mengatur ukuran daripada memicu keluar","Divergensi breadth terbukti tidak memiliki nilai analitis sama sekali","Analis seharusnya menunggu divergensi yang lebih ekstrem lagi sebelum bertindak","Indeks yang naik 14 persen membuktikan divergensi itu adalah sinyal palsu"],
 answer:0,
 explain:"Perhatiin: divergensinya nggak salah, akhirnya emang berbalik. Yang salah cara makainya. Breadth ngukur KERAPUHAN struktur, bukan KAPAN struktur itu runtuh — dan jeda antara keduanya bisa berbulan-bulan. Dipakai sebagai pemicu keluar, lo bakal kehilangan 14 persen kenaikan sambil ngerasa benar. Dipakai buat ngatur ukuran (kurangi bertahap, kencengin stop), lo tetep ikut naik tapi dengan risiko yang udah dikecilin."},

/* ===== cta-sistem ===== */
{id:"cta-sis-h15",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem diuji pada 2015 sampai 2023 dan menghasilkan profit factor 2,3. Setelah data 2024 ditambahkan, profit factor turun menjadi 1,4. Pembacaan yang paling tepat adalah...",
 options:["Penurunan sebesar itu normal pada pengujian mana pun dan tidak memerlukan penyelidikan lebih lanjut","Data 2024 berfungsi sebagai uji luar sampel, dan penurunan sebesar itu menandakan sebagian keunggulannya tidak kokoh","Sistem tetap layak sepenuhnya karena profit factor di atas 1 sudah berarti menguntungkan secara keseluruhan","Data 2024 sebaiknya dikeluarkan dari pengujian karena merusak hasil yang sudah stabil sebelumnya"],
 answer:1,
 explain:"Data 2024 di sini fungsinya jadi uji luar sampel gratis, dan hasilnya jujur: 2,3 jatuh ke 1,4. Itu penurunan 40 persen, terlalu besar buat dibilang fluktuasi biasa. Kemungkinan besar sebagian keunggulan di 2015–2023 itu hasil nyocokin ke data itu. Masih di atas 1 sih, tapi pertanyaannya bukan 'masih untung nggak' melainkan 'berapa yang tersisa setelah biaya dan setelah kekikis lagi'. Yang HARAM: ngeluarin data 2024 karena bikin angkanya jelek."},

{id:"cta-sis-h16",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Dua sistem memiliki expectancy yang persis sama. Sistem A menghasilkan 400 transaksi per tahun, sistem B menghasilkan 25 transaksi per tahun. Pertimbangan yang paling menentukan dalam memilih di antara keduanya adalah...",
 options:["Sistem B pasti lebih baik karena lebih sedikit keputusan yang harus diambil","Frekuensi transaksi tidak berpengaruh selama expectancy keduanya sama","Sensitivitas terhadap biaya dan slippage, yang jauh lebih menggerus sistem berfrekuensi tinggi","Sistem A pasti lebih baik karena menghasilkan lebih banyak peluang"],
 answer:2,
 explain:"Expectancy sama itu diitung SEBELUM biaya, dan di situ jebakannya. Dengan 400 transaksi setahun, biaya 0,25 persen sekali jalan udah nggak wajar lagi gigitannya; dengan 25 transaksi, hampir nggak kerasa. Ada sisi baiknya juga buat A: sampelnya cepat besar, jadi lo cepet tau sistemnya rusak atau enggak. Tapi yang paling nentuin tetep ongkos. Sistem frekuensi tinggi itu hidup matinya di biaya, bukan di sinyalnya."},

/* ===== cta-portfolio ===== */
{id:"cta-pf-h11",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Sebuah portofolio berisi 25 saham dengan bobot merata. Analis ingin menaikkan imbal hasil dan mempertimbangkan memangkasnya menjadi 12 saham terbaik. Pertimbangan paling penting sebelum melakukannya adalah...",
 options:["Portofolio dengan 12 saham selalu lebih baik karena diversifikasi 25 saham berlebihan","Jumlah saham tidak berpengaruh terhadap imbal hasil maupun risiko portofolio","Pemangkasan itu pasti menurunkan imbal hasil karena pilihan menjadi lebih sedikit","Keunggulan memang menjadi lebih pekat, tetapi dampak satu kesalahan analisis juga menjadi dua kali lebih besar"],
 answer:3,
 explain:"Pemangkasan ini ada untung ruginya, dan dua-duanya nyata. Untungnya: 25 posisi itu sering ngencerin keunggulan sampai hasilnya mirip indeks, dan lo nggak sanggup mantau semuanya dengan bener. Ruginya: dengan 12 posisi, satu analisis yang meleset dampaknya dua kali lipat. Yang nentuin jawabannya bukan angkanya, tapi seberapa yakin lo sama proses seleksi lo — dan itu cuma bisa dijawab dari catatan kinerja, bukan dari perasaan."},

{id:"cta-pf-h12",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Sebuah posisi lindung nilai dengan kontrak berjangka indeks berhasil meredam penurunan portofolio, tetapi pasar kemudian naik tajam dan lindung nilai itu menggerus sebagian besar kenaikannya. Penilaian yang paling tepat adalah...",
 options:["Hasil itu adalah konsekuensi yang melekat pada lindung nilai, dan yang perlu dievaluasi adalah dasar keputusannya","Lindung nilai terbukti merugikan sehingga sebaiknya tidak pernah dipakai","Analis seharusnya membuka lindung nilai lebih cepat agar tidak menggerus kenaikan","Lindung nilai gagal karena seharusnya melindungi tanpa mengurangi potensi kenaikan"],
 answer:0,
 explain:"Hedging itu tukar-menukar, bukan sihir: lo bayar dengan potensi kenaikan buat dapet perlindungan penurunan. Kalau pasarnya naik, lo emang rugi — dan itu BUKAN tanda hedging-nya gagal, itu cara kerjanya. Opsi yang bilang 'harusnya melindungi tanpa ngurangin kenaikan' itu minta sesuatu yang nggak ada. Yang layak dievaluasi: dasar keputusannya waktu itu masuk akal nggak berdasarkan informasi yang ADA saat itu. Nilai keputusan dari prosesnya, bukan dari hasil akhirnya."},

/* ===== cta-aset ===== */
{id:"cta-as-h13",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Harga minyak naik 30 persen dalam tiga bulan, tetapi saham sebuah produsen minyak justru turun 12 persen pada periode yang sama. Langkah pertama yang paling tepat bagi analis adalah...",
 options:["Menyimpulkan bahwa hubungan antara saham tambang dan komoditas tidak pernah ada","Menelusuri penyebab spesifik emiten seperti beban utang, aksi korporasi, atau masalah produksi","Menyimpulkan saham itu salah harga dan segera membelinya","Mengabaikan divergensinya karena harga komoditas lebih menentukan"],
 answer:1,
 explain:"Divergensi sebesar ini itu PERTANYAAN, bukan jawaban. Saham produsen biasanya ngikutin komoditas dasarnya, jadi kalau nyimpang 42 persen, ada sesuatu yang spesifik di emitennya: beban utang yang mencekik, rights issue yang ngencerin, tambangnya bermasalah, atau kontrak jual yang dikunci di harga lama. Langsung beli karena ngerasa 'salah harga' itu cara mahal buat nemuin alasannya. Telusuri dulu, baru nilai apakah divergensinya bakal nutup atau melebar."},

{id:"cta-as-h14",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Seorang analis menerapkan sistem yang teruji baik pada saham ke pasar valas tanpa penyesuaian apa pun, dan hasilnya jauh lebih buruk. Penjelasan yang paling mungkin adalah...",
 options:["Sistem itu sebenarnya tidak pernah bekerja, termasuk pada saham","Pasar valas terlalu likuid sehingga tidak memiliki pola sama sekali","Struktur pasar berbeda, termasuk ketiadaan gap antarsesi dan karakter volatilitas yang lain","Analisis teknikal memang tidak berlaku pada pasar valuta asing"],
 answer:2,
 explain:"Prinsipnya emang universal, tapi PARAMETERNYA nggak. Valas jalan 24 jam terdesentralisasi, jadi gap antarsesi nyaris nggak ada — dan sistem yang diam-diam ngandelin gap pembukaan langsung kehilangan sebagian sinyalnya. Tambah lagi nggak ada volume terpusat, jadi indikator berbasis volume ngaco. Dan karakter volatilitasnya beda, jadi jarak stop yang pas di saham bisa kesempitan atau kelonggaran di sini. Metodenya pinjem boleh, setelannya wajib dikalibrasi ulang."},

/* ===== cta-statistik ===== */
{id:"cta-statistik-h12",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sebuah strategi menghasilkan rata-rata 1,2 persen per bulan dengan standar deviasi bulanan 0,4 persen selama 36 bulan. Aspek yang paling patut dicurigai dari profil ini adalah...",
 options:["Rata-rata 1,2 persen per bulan terlalu kecil untuk strategi aktif yang menanggung risiko sebesar itu","Standar deviasi 0,4 persen menandakan datanya tidak cukup panjang untuk mewakili berbagai kondisi pasar","Periode 36 bulan sudah pasti cukup untuk menyimpulkan keandalan strategi ini dalam jangka panjang","Hasil yang sangat stabil pada strategi pasar patut diperiksa terhadap kemungkinan risiko ekor yang belum muncul"],
 answer:3,
 explain:"Untung 1,2 persen tiap bulan dengan goyangan cuma 0,4 persen selama tiga tahun itu kelewat mulus buat ukuran pasar. Profil kayak gini khas strategi berskewness negatif: banyak untung kecil yang konsisten, terus sesekali rugi besar yang ngapus semuanya. Jual opsi, carry trade, dan mean reversion tanpa stop semuanya keliatan begini — sampai satu bulan yang nggak keliatan di data 36 bulan itu. Curigai kemulusan, jangan kagumi."},

{id:"cta-statistik-h13",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Korelasi antara dua strategi diukur 0,2 pada data lima tahun. Analis menyimpulkan keduanya aman dijalankan bersamaan dengan bobot besar. Kewaspadaan paling penting yang perlu ditambahkan adalah...",
 options:["Memeriksa korelasinya khusus pada periode penurunan pasar, bukan hanya rata-rata lima tahun","Korelasi di bawah 0,5 selalu berarti kedua strategi sepenuhnya independen","Korelasi tidak relevan selama kedua strategi memiliki expectancy positif","Data lima tahun terlalu pendek sehingga angka korelasinya tidak dapat dipakai"],
 answer:0,
 explain:"Angka 0,2 itu rata-rata SELURUH periode, dan di dalamnya kecampur masa tenang sama masa panik. Yang nentuin nasib lo bukan rata-ratanya, tapi korelasi pas KRISIS — dan di situ korelasi hampir semua hal melonjak mendekati satu karena orang jual apa aja yang bisa dijual. Cara ngeceknya gampang: itung ulang korelasinya khusus di bulan-bulan terburuk. Kalau di situ dia naik ke 0,8, diversifikasi lo ilang tepat pas paling dibutuhin."},

/* ===== cta-candle ===== */
{id:"cta-cs-h05",module:"cta-candle",level:"CTA",difficulty:"sulit",
 q:"Sebuah bullish engulfing muncul di area support dengan volume tiga kali rata-rata, tetapi candle berikutnya adalah doji dengan volume sangat tipis. Sikap yang paling tepat adalah...",
 options:["Mengabaikan doji sepenuhnya karena volumenya terlalu tipis untuk bermakna","Menunggu, karena doji bervolume tipis belum membatalkan tetapi juga belum mengonfirmasi sinyalnya","Segera menambah posisi karena engulfing sudah dikonfirmasi volume besar","Membatalkan skenario bullish karena doji menandakan pembalikan"],
 answer:1,
 explain:"Dua bukti yang isinya beda, dan nggak boleh dipilih salah satu semaunya. Engulfing di support dengan volume tiga kali rata-rata itu sinyal kuat — pembeli beneran masuk. Tapi doji berikutnya artinya dorongan itu BERHENTI, nggak ada lanjutan. Untungnya volumenya tipis, jadi berhentinya bukan karena penjual balik nyerang, cuma karena sepi. Belum batal, belum konfirmasi juga. Sikap yang pas: tunggu candle berikutnya. Kalau volume balik naik dan harga lanjut, baru masuk."},

{id:"cta-cs-h06",module:"cta-candle",level:"CTA",difficulty:"sulit",
 q:"Seorang analis menyaring seluruh saham di bursa dan menemukan 340 pola hammer dalam satu pekan. Kesimpulan yang paling tepat mengenai temuan sebanyak itu adalah...",
 options:["Jumlah sebanyak itu membuktikan pola hammer tidak pernah memiliki nilai","Seluruh 340 pola tersebut layak ditindaklanjuti dengan ukuran posisi kecil","Sebagian besar tidak bermakna, dan penyaringan lokasi terhadap level kunci akan memangkasnya drastis","Bursa sedang berada di titik dasar karena begitu banyak sinyal bullish muncul"],
 answer:2,
 explain:"340 hammer dalam sepekan itu bukan berkah, itu tanda saringannya kelonggaran. Bentuk hammer gampang banget muncul secara kebetulan — sumbu bawah panjang itu hal biasa. Yang bikin hammer BERARTI bukan bentuknya, tapi LOKASINYA: muncul setelah tren turun, di area support penting, dengan volume yang mendukung. Tambahin tiga syarat itu dan 340 bakal nyusut jadi belasan. Sedikit tapi berisi, jauh lebih berguna daripada banyak tapi acak."}
]);
