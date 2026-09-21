/* Soal HOTS batch 5 — cta-statistik, cta-elliott, cta-siklus, cta-breadth,
   rta-dasar, rta-plan, cta-teori */
TD.register([
/* ===== cta-statistik ===== */
{id:"cta-statistik-h01",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem diuji pada 12 tahun data dan menghasilkan 640 transaksi dengan rasio kemenangan 58 persen. Sistem kedua diuji pada 9 bulan data dan menghasilkan 31 transaksi dengan rasio kemenangan 74 persen. Mana yang lebih layak dipercaya?",
 options:["Sistem pertama, karena 640 transaksi membuat hasilnya jauh lebih sulit terjadi karena kebetulan","Sistem kedua, karena rasio kemenangannya lebih tinggi sehingga harapan keuntungannya lebih besar","Keduanya setara, karena rasio kemenangan adalah ukuran yang tidak bergantung pada jumlah sampel","Sistem kedua, karena data yang lebih baru lebih mencerminkan keadaan pasar sekarang"],
 answer:0,
 explain:"Angka 74 persen dari 31 transaksi punya rentang ketidakpastian yang sangat lebar; membalik beberapa transaksi saja sudah mengubah kesimpulannya. Dengan 640 transaksi, rentang itu menyempit drastis sehingga 58 persen menjadi klaim yang jauh lebih kokoh. Kesegaran data memang berguna, tetapi tidak menutupi sampel yang terlalu kecil untuk dibedakan dari keberuntungan."},

{id:"cta-statistik-h02",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Seorang analis mencoba 400 kombinasi parameter pada satu strategi, lalu melaporkan kombinasi terbaik dengan hasil uji yang sangat mengesankan. Apa kelemahan paling serius dari cara kerja ini?",
 options:["Masalahnya terletak pada pemilihan strategi awal, bukan pada banyaknya kombinasi yang diuji","Dari 400 percobaan, hasil terbaik hampir pasti sebagian besar merupakan kebetulan yang tidak terulang","Jumlah kombinasi yang diuji tidak berpengaruh apa pun selama hasil akhirnya terbukti menguntungkan","Kelemahannya hanya pada lamanya waktu komputasi yang dibutuhkan untuk menguji sebanyak itu"],
 answer:1,
 explain:"Ini disebut data mining bias. Bila 400 kombinasi diuji pada data yang sama, sebagian akan tampak hebat semata karena cocok dengan kebisingan tertentu di periode itu. Penangkalnya: sisihkan data yang belum pernah disentuh sama sekali, uji kombinasi terpilih di sana, dan curigai parameter yang hasilnya jatuh drastis begitu digeser sedikit."},

{id:"cta-statistik-h03",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Dua sistem sama-sama menghasilkan keuntungan tahunan 24 persen. Sistem A pernah mengalami penurunan modal terdalam 12 persen, sistem B sebesar 38 persen. Bagaimana menilai keduanya?",
 options:["Sistem B unggul karena penurunan yang dalam menandakan berani mengambil peluang besar","Tidak dapat dinilai tanpa mengetahui jumlah transaksi masing-masing sistem","Sistem A unggul karena memberi imbal hasil yang sama dengan risiko penurunan sepertiga lebih kecil","Keduanya setara karena keuntungan tahunannya persis sama besar"],
 answer:2,
 explain:"Imbal hasil tanpa konteks risiko adalah setengah cerita. Penurunan modal menentukan berapa besar posisi yang sanggup dipakai dan, yang lebih menentukan, apakah penggunanya bertahan sampai sistem pulih. Banyak sistem yang secara matematis menguntungkan ditinggalkan di dasar penurunan karena penggunanya tidak siap menanggungnya."},

{id:"cta-statistik-h04",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Hasil uji balik menunjukkan sistem membeli tepat pada harga penutupan hari sinyal muncul. Mengapa hasil seperti ini patut dicurigai?",
 options:["Harga penutupan selalu lebih tinggi dari harga pembukaan sehingga hasilnya menjadi terlalu optimistis","Uji balik memang tidak boleh memakai harga penutupan dalam bentuk apa pun","Masalahnya hanya pada biaya transaksi yang belum diperhitungkan dalam simulasi","Sinyal baru diketahui setelah penutupan, sehingga eksekusi pada harga itu memakai informasi yang belum tersedia"],
 answer:3,
 explain:"Ini look-ahead bias: simulasi mengambil keputusan dengan data yang di dunia nyata baru ada sesudahnya. Kesalahan sekecil satu bar mampu mengubah sistem merugi menjadi tampak luar biasa. Uji balik yang jujur memasukkan pesanan pada bar berikutnya, dan menambahkan selisih harga serta biaya transaksi yang realistis."},

{id:"cta-statistik-h05",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem menang 35 persen dari 500 transaksi, dengan rata-rata kemenangan 3,2R dan rata-rata kerugian 1R. Bagaimana menilai sistem ini?",
 options:["Layak, karena harapan keuntungannya positif meski lebih sering kalah daripada menang","Tidak layak, karena sistem dengan rasio kemenangan di bawah separuh selalu merugi dalam jangka panjang","Tidak dapat dinilai, karena rasio kemenangan dan besar kemenangan tidak boleh digabungkan","Layak, tetapi hanya bila rasio kemenangannya dapat dinaikkan sampai di atas 50 persen"],
 answer:0,
 explain:"Hitungannya: 0,35 x 3,2R dikurangi 0,65 x 1R sama dengan 1,12R dikurangi 0,65R, yakni 0,47R per transaksi. Sistem yang lebih sering salah tetap menguntungkan selama yang benar dibiarkan berjalan jauh. Tantangan nyatanya bukan matematika melainkan menanggung rentetan kekalahan panjang yang secara statistik pasti muncul pada rasio kemenangan serendah ini."},

{id:"cta-statistik-h06",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sistem yang selama tiga tahun berjalan baik kini mengalami penurunan modal 15 persen, sementara penurunan terdalam pada uji baliknya adalah 14 persen. Apa langkah paling tepat?",
 options:["Mengubah parameter sistem sampai penurunan pada uji balik terbaru menjadi lebih kecil","Mengurangi ukuran posisi dan menyelidiki apakah perilaku pasar berubah, tanpa langsung menghentikannya","Segera menghentikan sistem karena penurunan aktual sudah melampaui rekor uji balik","Menambah ukuran posisi karena setelah penurunan biasanya datang pemulihan"],
 answer:1,
 explain:"Penurunan terdalam pada uji balik bukan batas atas, melainkan yang kebetulan terjadi pada data itu; melampauinya sedikit adalah hal yang wajar. Namun itu tetap lampu kuning. Respons yang proporsional adalah memperkecil ukuran sambil memeriksa apakah asumsi dasarnya masih berlaku. Mengubah parameter agar uji balik terlihat bagus justru melenyapkan satu-satunya alat ukur yang tersisa."},

{id:"cta-statistik-h07",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Dua strategi digabungkan dalam satu portofolio. Keduanya menguntungkan, tetapi korelasi kurva ekuitasnya 0,92. Apa implikasi bagi portofolio itu?",
 options:["Portofolio menjadi lebih aman karena dua sistem selalu lebih baik daripada satu sistem","Korelasi kurva ekuitas tidak berkaitan dengan risiko selama kedua sistem menguntungkan","Manfaat penyebaran risikonya kecil karena keduanya cenderung merugi pada periode yang sama","Korelasi tinggi menguntungkan karena keduanya akan menghasilkan laba secara bersamaan"],
 answer:2,
 explain:"Gabungan dua sistem hanya memperhalus kurva bila keduanya jatuh pada waktu yang berbeda. Pada korelasi 0,92, penurunan keduanya datang bersamaan sehingga penurunan portofolio hampir sedalam masing-masing. Yang dicari bukan jumlah sistem melainkan keragaman sumber keuntungannya, misalnya satu mengikuti tren dan satu lagi memanfaatkan pembalikan ke rata-rata."},

/* ===== cta-elliott ===== */
{id:"cta-elliott-h01",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Seorang analis menghitung gelombang naik dan menemukan gelombang 4 turun sampai masuk ke wilayah harga gelombang 1. Apa yang seharusnya dilakukan?",
 options:["Menerimanya sebagai pengecualian karena tumpang tindih ringan umum terjadi di pasar nyata","Mengabaikan gelombang 4 dan melanjutkan penghitungan langsung ke gelombang 5","Menyatakan tren berakhir karena tumpang tindih menandakan gelombang impuls telah selesai","Mengulang penghitungan, karena tumpang tindih itu melanggar aturan dasar gelombang impuls"],
 answer:3,
 explain:"Elliott punya tiga aturan yang tidak boleh dilanggar: gelombang 2 tidak menembus awal gelombang 1, gelombang 3 bukan yang terpendek, dan gelombang 4 tidak memasuki wilayah gelombang 1. Pelanggaran bukan pengecualian melainkan bukti penghitungannya salah. Kemungkinan besar yang terjadi adalah pola diagonal atau struktur korektif yang keliru dibaca sebagai impuls."},

{id:"cta-elliott-h02",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Gelombang 1 naik 100 poin dan gelombang 3 naik 95 poin. Mengapa penghitungan ini bermasalah?",
 options:["Gelombang 3 tidak boleh menjadi yang terpendek di antara gelombang 1, 3, dan 5","Gelombang 3 wajib berukuran tepat 1,618 kali gelombang 1 tanpa penyimpangan","Selisih 5 poin menandakan datanya tidak akurat sehingga harus diperiksa ulang","Gelombang 1 tidak boleh lebih panjang dari gelombang 3 dalam keadaan apa pun"],
 answer:0,
 explain:"Aturannya bukan gelombang 3 harus terpanjang, melainkan tidak boleh terpendek. Selama gelombang 5 nanti lebih pendek dari 95 poin, penghitungan ini masih sah. Yang membuatnya mencurigakan adalah gelombang 3 biasanya merupakan gelombang paling bertenaga; bila ia justru loyo, sering kali yang sedang berlangsung adalah struktur korektif, bukan impuls."},

{id:"cta-elliott-h03",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Dua analis Elliott berpengalaman memberi penghitungan berbeda pada grafik yang sama, dan keduanya tidak melanggar satu pun aturan dasar. Apa kesimpulan yang paling masuk akal?",
 options:["Yang benar adalah penghitungan dari analis yang lebih lama pengalamannya","Penghitungan gelombang bersifat menafsirkan, sehingga harus dipakai bersama alat lain, bukan sendirian","Salah satu analis pasti melakukan kesalahan teknis yang belum ditemukan","Elliott Wave terbukti tidak memiliki nilai analitis sama sekali"],
 answer:1,
 explain:"Penghitungan alternatif adalah ciri bawaan metode ini, bukan cacat pemakainya. Nilai Elliott terletak pada kerangka berpikir tentang struktur dan skenario berjenjang, bukan pada ramalan tunggal. Praktik yang sehat: siapkan penghitungan utama dan alternatif, tetapkan lebih dulu level harga yang akan membatalkan yang utama, lalu biarkan pasar memilih."},

{id:"cta-elliott-h04",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Gelombang 2 mengoreksi dalam sampai 78,6 persen dari gelombang 1 dan berbentuk zigzag tajam. Menurut aturan alternasi, apa yang diperkirakan terjadi pada gelombang 4?",
 options:["Gelombang 4 tidak akan terbentuk karena gelombang 2 sudah terlalu dalam","Koreksi yang jauh lebih dalam dari gelombang 2 sebagai kelanjutan polanya","Koreksi mendatar yang lebih dangkal dan lebih lama, berbeda watak dari gelombang 2","Koreksi tajam serupa dengan kedalaman sekitar 78,6 persen dari gelombang 3"],
 answer:2,
 explain:"Aturan alternasi menyatakan dua koreksi dalam satu impuls cenderung berbeda watak. Gelombang 2 yang tajam dan dalam biasanya diikuti gelombang 4 yang mendatar, dangkal, dan memakan waktu. Kegunaan praktisnya besar: setelah melihat gelombang 2 yang tajam, analis tidak panik saat gelombang 4 berlarut-larut membosankan, karena memang begitulah yang diharapkan."},

{id:"cta-elliott-h05",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Harga sudah menyelesaikan lima gelombang naik pada grafik harian, tetapi pada grafik bulanan struktur itu hanyalah gelombang 3 dari derajat yang lebih besar. Apa implikasinya?",
 options:["Tren naik telah berakhir karena lima gelombang selalu berarti siklus selesai","Grafik bulanan harus diabaikan karena sinyal harian lebih aktual","Kedua penghitungan saling bertentangan sehingga keduanya harus dibatalkan","Koreksi yang datang adalah gelombang 4 derajat besar, sehingga tren utama belum berakhir"],
 answer:3,
 explain:"Prinsip derajat adalah inti Elliott: setiap gelombang tersusun dari gelombang berderajat lebih kecil. Lima gelombang harian yang selesai memang menandai akhir satu babak, tetapi bila ia hanya gelombang 3 di derajat bulanan, yang menyusul adalah koreksi gelombang 4, lalu gelombang 5 yang membawa harga ke puncak baru. Kesalahan menilai derajat adalah sumber kekeliruan terbesar pemakai metode ini."},

{id:"cta-elliott-h06",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Gelombang 5 membentuk puncak baru tetapi tidak melampaui ujung garis tren saluran, sementara momentum jauh lebih lemah dibanding gelombang 3. Bagaimana menafsirkannya?",
 options:["Ciri khas gelombang 5 yang kehabisan tenaga, memperkuat dugaan siklus akan segera berakhir","Gelombang 5 yang gagal menembus saluran berarti penghitungannya salah sejak awal","Momentum yang melemah menandakan gelombang 5 akan berkembang menjadi gelombang perpanjangan","Harga akan kembali ke puncak gelombang 3 sebelum melanjutkan kenaikannya"],
 answer:0,
 explain:"Momentum yang melemah pada gelombang 5 adalah hal yang normal, bukan anomali: gelombang 3 digerakkan pengakuan luas, sedangkan gelombang 5 digerakkan sisa optimisme yang makin menipis. Bila pada saat yang sama harga tak mampu menyentuh batas atas saluran, dua pembacaan itu sejalan, dan analis mulai menyiapkan skenario koreksi tiga gelombang."},

{id:"cta-elliott-h07",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Analis memperkirakan koreksi gelombang 4 akan berhenti di 61,8 persen dari gelombang 3, sama seperti gelombang 2 terhadap gelombang 1. Mengapa perkiraan ini lemah?",
 options:["Kedalaman gelombang 4 hanya boleh diukur terhadap gelombang 1, bukan gelombang 3","Gelombang 4 biasanya jauh lebih dangkal, umumnya 23,6 sampai 38,2 persen dari gelombang 3","Rasio Fibonacci tidak pernah berlaku untuk gelombang korektif mana pun","Gelombang 4 justru cenderung lebih dalam daripada gelombang 2 pada umumnya"],
 answer:1,
 explain:"Gelombang 2 dan 4 punya kepribadian berbeda. Gelombang 2 dalam karena keraguan masih besar dan banyak yang menganggap kenaikan awal hanya pantulan sesaat. Gelombang 4 dangkal karena tren sudah diakui dan setiap penurunan cepat diserap pembeli. Memakai 61,8 persen untuk gelombang 4 kerap membuat analis menunggu di harga yang tidak pernah datang."},

/* ===== cta-siklus ===== */
{id:"cta-siklus-h01",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Sebuah siklus 40 hari terdeteksi konsisten selama dua tahun, lalu selama enam bulan terakhir titik dasarnya bergeser jauh dari jadwal. Apa sikap yang paling tepat?",
 options:["Memperpendek periode siklus menjadi 20 hari agar cocok dengan data terbaru","Menyimpulkan analisis siklus tidak berguna dan meninggalkannya sepenuhnya","Menurunkan bobot siklus itu dan mencari penyebab perubahannya, karena siklus pasar tidak permanen","Tetap memakainya karena siklus yang pernah terbukti akan selalu kembali ke jadwalnya"],
 answer:2,
 explain:"Siklus pasar bukan hukum fisika; ia muncul dari perilaku kolektif yang bisa berubah bersama struktur pelaku dan kondisi likuiditas. Siklus yang menghilang adalah informasi tentang perubahan itu. Menyetel ulang periode agar cocok dengan enam bulan terakhir adalah mencocokkan kurva pada kebisingan, dan biasanya hancur begitu diuji ke depan."},

{id:"cta-siklus-h02",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Tiga siklus dengan periode 10, 20, dan 40 hari diperkirakan mencapai titik dasar pada pekan yang sama. Apa implikasinya bagi analis?",
 options:["Ketiga siklus saling meniadakan sehingga pergerakan harga justru akan mendatar","Hanya siklus 40 hari yang perlu diperhatikan karena periodenya paling panjang","Kebetulan ini tidak bermakna karena siklus dengan periode berbeda tidak dapat dibandingkan","Peluang titik balik yang berarti meningkat, karena penguatan beberapa siklus memperbesar amplitudonya"],
 answer:3,
 explain:"Prinsip harmonik menyatakan siklus yang periodenya berkelipatan cenderung menyatu berkala. Ketika beberapa siklus mencapai dasar bersamaan, gelombangnya saling menguatkan dan titik baliknya lebih tegas. Sebaliknya, ketika satu siklus mencapai dasar sementara yang lain mencapai puncak, keduanya saling meredam dan harga cenderung bergerak mendatar tanpa arah."},

{id:"cta-siklus-h03",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Dalam siklus 30 hari, puncak-puncaknya semakin bergeser mendekati awal siklus dari waktu ke waktu. Apa yang ditunjukkan gejala ini?",
 options:["Right translation berubah menjadi left translation, menandakan tren besar melemah","Periode siklus memendek sehingga harus dihitung ulang menjadi lebih singkat","Amplitudo siklus membesar sehingga pergerakan harga akan semakin liar","Datanya mengandung kesalahan karena puncak siklus seharusnya tidak bergeser"],
 answer:0,
 explain:"Letak puncak di dalam siklus adalah petunjuk halus tentang tren yang lebih besar. Pada tren naik, puncak muncul di paruh akhir siklus sehingga bagian naiknya lebih panjang dari bagian turunnya. Ketika puncak mulai bergeser ke depan, waktu yang dihabiskan untuk turun menjadi lebih panjang, dan itu sering mendahului perubahan tren besar sebelum terlihat pada harga."},

{id:"cta-siklus-h04",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Siklus 60 hari memberi sinyal beli, tetapi tren pada grafik mingguan jelas menurun. Apa keputusan yang paling bijak?",
 options:["Mengabaikan siklus sepenuhnya selama tren mingguan masih menurun","Menunggu konfirmasi harga, karena siklus menunjukkan waktu sedangkan arah ditentukan tren yang lebih besar","Segera membeli karena analisis siklus lebih presisi daripada analisis tren","Membeli dengan ukuran ganda untuk memanfaatkan harga yang sudah jatuh dalam"],
 answer:1,
 explain:"Siklus menjawab pertanyaan kapan, bukan ke arah mana. Dasar siklus dalam tren turun sering hanya menghasilkan pantulan yang cepat padam, bukan pembalikan. Pemakaian yang benar adalah menjadikan siklus sebagai penyaring waktu di dalam arah yang sudah ditentukan tren besar, dan menuntut bukti dari harga sebelum melawan tren tersebut."},

{id:"cta-siklus-h05",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Seorang analis menerapkan siklus musiman yang secara historis kuat pada bulan tertentu, tetapi tahun ini harga bergerak berlawanan. Apa penjelasan paling masuk akal?",
 options:["Data historis yang dipakai mengandung kesalahan sehingga polanya semu","Pola musiman hanya berlaku pada komoditas dan tidak pernah berlaku pada saham","Kecenderungan musiman bersifat rata-rata statistik, sehingga tahun tertentu bisa menyimpang jauh","Pola musiman tersebut pasti sudah tidak berlaku lagi dan harus dibuang dari analisis"],
 answer:2,
 explain:"Pola musiman menggambarkan kecenderungan rata-rata puluhan tahun, dan di dalamnya selalu ada tahun yang bergerak berlawanan. Satu tahun menyimpang bukan bukti polanya mati, sama seperti satu hari hujan di musim kemarau. Cara memakainya: jadikan bobot tambahan pada sinyal teknikal lain, jangan pernah sebagai alasan tunggal untuk masuk pasar."},

{id:"cta-siklus-h06",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Analis menghaluskan data dengan rata-rata bergerak untuk memperjelas siklus, lalu menemukan siklus yang sangat rapi. Apa risiko terbesar dari pendekatan ini?",
 options:["Rata-rata bergerak tidak pernah boleh dipakai bersama analisis siklus dalam bentuk apa pun","Siklus yang terlihat rapi selalu berarti periodenya terlalu pendek untuk berguna","Risikonya hanya pada keterlambatan sinyal, bukan pada keabsahan siklus yang ditemukan","Penghalusan itu sendiri dapat menciptakan gelombang semu yang tidak ada pada data aslinya"],
 answer:3,
 explain:"Gejala ini dikenal sebagai efek Slutzky-Yule: menghaluskan deret acak dapat memunculkan gelombang berkala yang tampak meyakinkan padahal tidak ada di data mentah. Karena itu siklus yang ditemukan lewat penghalusan harus diuji balik ke data asli, dan diperiksa apakah titik baliknya benar-benar bertepatan dengan titik balik harga yang nyata."},

{id:"cta-siklus-h07",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Siklus 20 hari diperkirakan mencapai dasar hari ini, tetapi harga justru terus melemah selama lima hari berikutnya. Apa tindakan yang paling tepat?",
 options:["Memberi toleransi waktu beberapa hari, karena titik balik siklus selalu berupa jendela, bukan tanggal pasti","Membatalkan seluruh analisis siklus karena perkiraan tanggalnya meleset","Menggandakan posisi beli karena harga menjadi lebih murah dari perkiraan","Menggeser periode siklus menjadi 25 hari agar cocok dengan kejadian terakhir"],
 answer:0,
 explain:"Praktik baku memakai toleransi sekitar 10 sampai 15 persen dari panjang siklus, jadi siklus 20 hari punya jendela dua sampai tiga hari di kedua sisi. Lima hari sudah di luar jendela dan patut dicatat sebagai peringatan, tetapi belum membatalkan kerangkanya. Yang menentukan tetap harga: tanpa bukti pembalikan, tanggal siklus hanyalah hipotesis yang belum terbukti."},

/* ===== cta-breadth ===== */
{id:"cta-breadth-h01",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Indeks mencetak rekor tertinggi baru, tetapi garis advance-decline telah menurun selama tiga bulan. Apa makna yang paling tepat?",
 options:["Divergensi ini tidak bermakna karena indeks adalah ukuran yang paling dapat dipercaya","Kenaikan indeks ditopang segelintir saham besar, sehingga dasar kenaikannya rapuh","Garis advance-decline sedang rusak karena seharusnya selalu searah dengan indeks","Indeks akan segera jatuh dalam hitungan hari karena divergensi sudah berlangsung lama"],
 answer:1,
 explain:"Indeks tertimbang kapitalisasi bisa naik meski mayoritas sahamnya turun, asalkan beberapa raksasa menariknya. Garis advance-decline menghitung setiap saham setara, sehingga ia memperlihatkan apa yang disembunyikan indeks. Divergensi seperti ini kerap mendahului puncak besar, tetapi jeda waktunya bisa berbulan-bulan sehingga ia peringatan, bukan pemicu penjualan."},

{id:"cta-breadth-h02",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Jumlah saham yang mencetak titik terendah 52 minggu melonjak tajam pada hari indeks jatuh, sementara pada dua penurunan sebelumnya jumlahnya jauh lebih sedikit. Apa implikasinya?",
 options:["Data itu tidak bermakna karena titik terendah 52 minggu hanya mencerminkan masa lalu","Indeks akan pulih cepat karena penurunan yang meluas biasanya berumur pendek","Tekanan jual meluas ke seluruh pasar, memperbesar kemungkinan ini penurunan yang lebih serius","Lonjakan titik terendah baru selalu menandai dasar pasar sehingga saat ini waktu membeli"],
 answer:2,
 explain:"Perbandingan antarkejadian penurunan adalah kuncinya. Penurunan dengan sedikit titik terendah baru berarti kerusakan terbatas pada beberapa sektor; ketika jumlahnya melonjak, kerusakannya menyeluruh. Lonjakan ekstrem memang kadang menandai kepanikan yang membentuk dasar, tetapi itu baru dapat dinilai setelah harga menunjukkan pembalikan, bukan pada hari lonjakan itu sendiri."},

{id:"cta-breadth-h03",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Dalam satu sesi, volume saham yang naik mencapai sembilan kali volume saham yang turun. Bagaimana analis sebaiknya menafsirkannya?",
 options:["Tanda pasar sudah terlalu panas sehingga penurunan akan datang keesokan harinya","Data tidak bermakna karena rasio volume tidak mencerminkan jumlah saham yang bergerak","Tanda bahwa perdagangan hari itu didominasi satu saham berkapitalisasi sangat besar","Tanda dorongan pembelian yang kuat dan meluas, sering muncul pada awal tren naik baru"],
 answer:3,
 explain:"Hari dengan rasio sembilan banding satu, yang dipopulerkan Martin Zweig, jarang terjadi dan menandakan pembelian yang serentak di banyak saham sekaligus. Kekuatannya bertambah bila muncul berpasangan dalam beberapa pekan setelah penurunan besar. Sinyal semacam ini berbicara tentang perubahan sikap pasar secara keseluruhan, bukan tentang satu saham."},

{id:"cta-breadth-h04",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Indeks turun 8 persen tetapi persentase saham yang berada di atas rata-rata bergerak 200 hari hanya turun dari 68 menjadi 62 persen. Apa yang ditunjukkan data ini?",
 options:["Kerusakan struktural terbatas, sehingga penurunan lebih menyerupai koreksi daripada awal pasar turun","Data tersebut bertentangan sehingga salah satunya pasti mengandung kesalahan","Pasar turun sudah dimulai karena penurunan indeks 8 persen adalah ambang batas bakunya","Rata-rata bergerak 200 hari terlalu lambat untuk dipakai menilai keadaan pasar"],
 answer:0,
 explain:"Persentase saham di atas rata-rata 200 hari mengukur kesehatan jangka panjang pasar. Pada penurunan yang sungguh berbahaya, angka ini runtuh ke bawah 30 persen karena tren panjang banyak saham patah. Turun enam poin saja sementara indeks kehilangan 8 persen berarti mayoritas saham masih berada di atas tren panjangnya, ciri khas koreksi di dalam tren naik."},

{id:"cta-breadth-h05",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Sebuah bursa didominasi lima saham yang mencakup 45 persen kapitalisasi pasar. Mengapa hal ini mengubah cara membaca indikator keluasan pasar?",
 options:["Konsentrasi kapitalisasi tidak berpengaruh apa pun terhadap pembacaan keluasan pasar","Perbedaan antara indeks dan keluasan pasar menjadi lebih sering, sehingga keluasan lebih penting diperiksa","Indikator keluasan pasar menjadi tidak berlaku sama sekali pada bursa dengan konsentrasi tinggi","Indeks menjadi lebih akurat karena hanya perlu memantau lima saham utama saja"],
 answer:1,
 explain:"Makin terkonsentrasi sebuah bursa, makin mudah indeksnya menyimpang dari nasib mayoritas sahamnya. Di bursa seperti ini, indeks yang naik bisa berarti lima saham naik dan ratusan lainnya turun. Justru di sinilah garis advance-decline dan persentase saham di atas rata-rata bergeraknya menjadi alat yang paling berguna, bukan yang paling bisa diabaikan."},

{id:"cta-breadth-h06",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"McClellan Oscillator menunjukkan bacaan di bawah minus 100 selama dua pekan, sementara indeks hanya turun tipis. Bagaimana menilai keadaan ini?",
 options:["Bacaan di bawah minus 100 adalah sinyal beli yang berdiri sendiri tanpa perlu konfirmasi","Osilator ini hanya berlaku untuk perdagangan harian dan tidak relevan untuk dua pekan","Pelemahan internal lebih dalam daripada yang tampak pada indeks, sehingga risikonya lebih besar","Osilator pasti salah baca karena indeks yang hanya turun tipis membuktikan pasar sehat"],
 answer:2,
 explain:"McClellan Oscillator dibangun dari selisih saham naik dan turun, jadi ia mengukur apa yang terjadi di dalam pasar, bukan di permukaan indeks. Bertahan di bawah minus 100 selama dua pekan berarti penjualan berlangsung terus-menerus dan merata, sementara indeks tetap tenang berkat beberapa saham besar. Ketimpangan semacam ini jarang berakhir tanpa penyesuaian harga."},

/* ===== rta-dasar ===== */
{id:"rta-dasar-h09",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Seorang klien bertanya mengapa analisis teknikal dapat berfungsi padahal tidak melihat laporan keuangan sama sekali. Jawaban mana yang paling tepat?",
 options:["Analisis teknikal berfungsi karena laporan keuangan pada dasarnya tidak dapat dipercaya","Analisis teknikal tidak memerlukan alasan karena pola harga terbukti berulang dengan sendirinya","Analisis teknikal hanya berfungsi pada saham kecil yang laporan keuangannya tidak diperhatikan","Harga sudah mencerminkan semua informasi yang diketahui pelaku pasar, termasuk laporan keuangan"],
 answer:3,
 explain:"Landasan pertama Dow adalah harga mendiskon segalanya: setiap laporan, rumor, dan harapan sudah tercermin pada harga yang terbentuk dari transaksi nyata. Karena itu analis teknikal mempelajari hasil akhirnya, bukan bahan bakunya. Menjelek-jelekkan analisis fundamental bukan bagian dari argumen ini, dan justru melemahkan kredibilitas penjelasannya."},

{id:"rta-dasar-h10",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Bila hipotesis pasar efisien bentuk lemah benar sepenuhnya, apa konsekuensinya bagi analisis teknikal?",
 options:["Pola harga masa lalu tidak akan memberi keunggulan, sehingga klaim teknikal harus diuji secara empiris","Analisis teknikal tetap berfungsi karena hipotesis itu hanya berlaku pada data fundamental","Analisis fundamental juga menjadi tidak berguna sehingga tidak ada metode yang tersisa","Hipotesis tersebut justru membuktikan kebenaran seluruh prinsip analisis teknikal"],
 answer:0,
 explain:"Bentuk lemah menyatakan harga masa lalu tidak dapat dipakai meramal harga berikutnya, dan itu persis bertabrakan dengan analisis teknikal. Sikap profesional bukan menolak tantangan itu melainkan menjawabnya dengan bukti: menguji sistem pada data yang belum disentuh dan melaporkan hasilnya apa adanya, termasuk biaya transaksi. Bentuk sedang dan kuatlah yang menyasar analisis fundamental."},

{id:"rta-dasar-h11",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Sebuah pola teknikal memberi hasil sangat baik pada data 1990 sampai 2005, tetapi kinerjanya memudar setelah 2010. Apa penjelasan paling masuk akal?",
 options:["Periode 1990 sampai 2005 terlalu pendek untuk menghasilkan kesimpulan apa pun","Struktur pasar berubah oleh perdagangan elektronik dan algoritma, sehingga pola lama kehilangan keunggulannya","Data setelah 2010 pasti mengandung kesalahan karena pola teknikal bersifat universal dan abadi","Pola tersebut akan kembali berfungsi dengan sendirinya bila ditunggu cukup lama"],
 answer:1,
 explain:"Pasar bukan sistem tetap. Desimalisasi harga, pelaksanaan pesanan berkecepatan tinggi, dan algoritma yang memburu pola yang sama mengikis keunggulan yang dulu nyata. Sikap profesional adalah memantau kinerja secara berkelanjutan dan bersedia memensiunkan pola yang keunggulannya habis, alih-alih menyalahkan datanya."},

{id:"rta-dasar-h12",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Dua saham sama-sama membentuk pola penembusan yang identik. Saham pertama bernilai transaksi harian 200 miliar rupiah, saham kedua 300 juta rupiah. Mengapa keduanya tidak boleh diperlakukan sama?",
 options:["Saham tipis selalu memberi keuntungan lebih besar sehingga justru lebih layak dibeli","Perbedaan nilai transaksi hanya memengaruhi biaya, bukan keabsahan polanya","Pada saham yang sangat tipis, harga mudah digerakkan sedikit pihak sehingga polanya kurang bermakna","Pola teknikal secara teori hanya berlaku pada saham yang masuk indeks utama"],
 answer:2,
 explain:"Pola teknikal bermakna karena mencerminkan tarik ulur banyak pelaku. Pada saham dengan transaksi 300 juta sehari, satu pihak saja sanggup menciptakan bentuk yang menyerupai pola sempurna. Ditambah selisih harga beli dan jual yang lebar serta kesulitan keluar saat panik, saham setipis itu menuntut ukuran posisi jauh lebih kecil, atau dilewatkan sama sekali."},

{id:"rta-dasar-h13",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Seorang analis menyusun laporan yang menyimpulkan sebuah saham layak dibeli, padahal perusahaan tempatnya bekerja sedang memegang posisi besar di saham itu. Apa yang dituntut oleh etika profesi?",
 options:["Membatalkan laporan karena analis dilarang menulis tentang saham yang dimiliki perusahaannya","Melanjutkan tanpa keterangan apa pun selama isi analisisnya memang benar secara teknikal","Meminta pihak lain menandatangani laporan agar kepentingan itu tidak lagi menjadi masalah","Mengungkapkan kepentingan tersebut di dalam laporan sehingga pembaca dapat menilai sendiri"],
 answer:3,
 explain:"Kode etik analis teknikal bertumpu pada keterbukaan benturan kepentingan, bukan pada larangan memilikinya. Pembaca berhak mengetahui posisi penulis agar dapat menimbang sendiri. Menyembunyikannya adalah pelanggaran berat, dan memindahkan tanda tangan ke orang lain justru menambah pelanggaran baru berupa penyesatan tentang siapa penulis sebenarnya."},

{id:"rta-dasar-h14",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Prinsip Dow menyatakan tren memiliki tiga fase. Pada fase mana partisipasi publik biasanya mencapai puncaknya, dan apa implikasinya bagi analis?",
 options:["Fase distribusi, ketika berita positif melimpah tetapi pihak berpengalaman justru mengurangi posisi","Fase akumulasi, ketika harga masih murah sehingga publik berlomba masuk lebih awal","Fase partisipasi publik, ketika tren baru saja dikenali dan risikonya masih paling kecil","Ketiga fase memiliki tingkat partisipasi publik yang kurang lebih sama besarnya"],
 answer:0,
 explain:"Urutannya: akumulasi oleh pihak berpengetahuan saat berita masih suram, partisipasi publik saat tren mulai terlihat, lalu distribusi saat berita paling cemerlang dan minat publik memuncak. Ironinya justru di sini: saat semua alasan untuk membeli terdengar paling meyakinkan, pihak yang membeli pertama sedang menjual. Analis membaca volume dan keluasan pasar untuk mengenali pergeseran ini."},

/* ===== rta-plan ===== */
{id:"rta-plan-h07",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Modal 500 juta rupiah dengan risiko maksimal 1 persen per transaksi. Harga masuk 2.500 dan stop di 2.350. Berapa jumlah lembar maksimal yang boleh dibeli?",
 options:["200.000 lembar","33.333 lembar","50.000 lembar","20.000 lembar"],
 answer:1,
 explain:"Risiko rupiah adalah 1 persen dari 500 juta, yaitu 5 juta. Risiko per lembar adalah selisih 2.500 dan 2.350, yaitu 150 rupiah. Jumlah lembar sama dengan 5 juta dibagi 150, yakni 33.333 lembar, atau sekitar 333 lot. Perhatikan urutannya: stop ditentukan lebih dulu oleh struktur grafik, baru ukuran posisi mengikuti, bukan sebaliknya."},

{id:"rta-plan-h08",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Seorang analis mengalami empat kerugian beruntun, lalu menggandakan ukuran posisi pada transaksi kelima untuk menutup kerugian sekaligus. Apa kelemahan paling serius dari keputusan ini?",
 options:["Pendekatan ini baik asalkan rasio kemenangan sistemnya berada di atas 50 persen","Tidak ada kelemahan selama stop loss tetap dipasang pada transaksi kelima tersebut","Ukuran posisi menjadi bergantung pada hasil masa lalu, padahal setiap transaksi berdiri sendiri","Kelemahannya hanya pada beban psikologis, sementara secara matematis pendekatan ini benar"],
 answer:2,
 explain:"Ini kekeliruan penjudi dalam bentuk pengelolaan uang. Pasar tidak mengingat empat kerugian sebelumnya, sehingga peluang transaksi kelima tidak membaik sedikit pun. Yang berubah hanyalah modal yang dipertaruhkan justru diperbesar saat modal sedang menyusut. Pendekatan yang benar bergerak berlawanan: perkecil ukuran ketika ekuitas turun, besarkan ketika ekuitas tumbuh."},

{id:"rta-plan-h09",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Sebuah rencana dagang memuat aturan masuk dan keluar yang rinci, tetapi tidak memuat aturan tentang apa yang harus dilakukan ketika pasar dibuka melompati level stop. Mengapa kekosongan ini berbahaya?",
 options:["Lompatan pembukaan sangat jarang terjadi sehingga sebenarnya tidak perlu diatur","Kekosongan itu tidak berbahaya karena stop akan tetap tereksekusi pada harga yang ditetapkan","Masalahnya hanya administratif dan dapat diselesaikan dengan mencatatnya setelah kejadian","Keputusan akan diambil dalam tekanan saat kerugian sudah melampaui rencana, dan itu paling rawan keliru"],
 answer:3,
 explain:"Guna utama rencana adalah memindahkan keputusan ke waktu ketika pikiran masih jernih. Lompatan pembukaan justru keadaan paling menegangkan: kerugian langsung lebih besar dari rencana dan otak cenderung berharap harga kembali. Rencana yang matang menetapkan lebih dulu, misalnya keluar seluruhnya pada pembukaan, atau menunggu tiga puluh menit pertama dengan batas kerugian tambahan yang sudah ditentukan."},

{id:"rta-plan-h10",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Posisi bergerak menguntungkan sebesar 2R. Analis memindahkan stop ke titik impas agar transaksi menjadi bebas risiko. Apa konsekuensi yang perlu disadari?",
 options:["Peluang terkena stop oleh fluktuasi normal meningkat, sehingga sebagian tren besar bisa terlewat","Tidak ada konsekuensi apa pun karena memindahkan stop ke titik impas selalu menguntungkan","Harapan keuntungan sistem meningkat karena risikonya menjadi nol pada transaksi itu","Stop di titik impas menjamin transaksi tidak akan pernah berakhir rugi dalam keadaan apa pun"],
 answer:0,
 explain:"Titik impas terasa aman tetapi ada harganya. Harga sering kembali menguji area masuk sebelum melanjutkan tren, dan stop yang ketat mengubah calon transaksi 10R menjadi nol. Alternatif yang lebih seimbang adalah merealisasikan sebagian di 2R sambil membiarkan sisanya memakai stop berbasis struktur atau ATR, sehingga ada perlindungan tanpa mematikan potensinya."},

{id:"rta-plan-h11",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Analis memegang enam posisi beli, seluruhnya pada saham sektor perbankan, masing-masing dengan risiko 1 persen. Berapa risiko sesungguhnya dan mengapa?",
 options:["Tidak dapat dihitung karena risiko portofolio hanya berlaku untuk posisi lintas sektor","Mendekati 6 persen, karena saham satu sektor cenderung bergerak bersama saat sektornya tertekan","Tetap 1 persen, karena stop loss masing-masing posisi sudah dipasang secara terpisah","Sekitar 2 persen, karena penyebaran ke enam saham berbeda meredam sebagian besar risikonya"],
 answer:1,
 explain:"Risiko per transaksi hanya berarti bila transaksinya saling bebas. Enam saham perbankan pada dasarnya satu taruhan yang dipecah enam: satu kebijakan suku bunga dapat menjatuhkan semuanya pada hari yang sama. Praktik yang lazim adalah membatasi total risiko per sektor, misalnya 2 sampai 3 persen, berapa pun jumlah posisinya di dalam sektor itu."},

{id:"rta-plan-h12",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Catatan transaksi menunjukkan kerugian terbesar selalu terjadi pada transaksi yang tidak tercantum dalam rencana harian. Apa langkah perbaikan yang paling tepat?",
 options:["Berhenti mencatat transaksi spontan agar statistik sistem terlihat lebih baik","Memperbanyak transaksi spontan sampai jumlahnya cukup untuk dinilai secara statistik","Menetapkan aturan bahwa hanya transaksi yang direncanakan sebelum sesi dibuka yang boleh dieksekusi","Memperbesar stop loss pada transaksi spontan agar tidak mudah terkena fluktuasi"],
 answer:2,
 explain:"Nilai sebuah jurnal terletak pada pola yang diungkapnya, dan pola ini sudah sangat jelas. Transaksi spontan biasanya lahir dari rasa takut tertinggal, bukan dari sinyal, sehingga ukuran dan stopnya pun asal-asalan. Perbaikannya bersifat prosedural: tetapkan daftar kandidat sebelum sesi dibuka, dan perlakukan apa pun di luar daftar itu sebagai pelanggaran, bukan peluang."},

/* ===== cta-teori ===== */
{id:"cta-teori-h13",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Teori Dow menuntut konfirmasi antara indeks industri dan indeks transportasi. Apa gagasan ekonomi di balik tuntutan itu?",
 options:["Kedua indeks dipilih semata karena keduanya paling tua dan datanya paling panjang","Indeks transportasi selalu bergerak mendahului indeks industri dalam setiap siklus","Konfirmasi itu hanya aturan teknis tanpa dasar ekonomi apa pun di belakangnya","Barang yang diproduksi harus benar-benar dikirim, sehingga kedua sektor menegaskan aktivitas ekonomi nyata"],
 answer:3,
 explain:"Dow berpikir tentang rantai ekonomi yang nyata: pabrik yang makin sibuk mestinya mengirim makin banyak barang, sehingga perusahaan pengangkut ikut untung. Bila industri naik tetapi transportasi tidak, kenaikan itu belum terbukti oleh aktivitas fisik. Kritik modern menyoroti bahwa ekonomi jasa dan digital melemahkan kaitan ini, tetapi logika mencari konfirmasi antarsektor tetap hidup."},

{id:"cta-teori-h14",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Seorang analis berpendapat analisis teknikal berfungsi karena keuangan perilaku, bukan karena pasar irasional. Mana pernyataan yang paling mendukung pendapat itu?",
 options:["Kecenderungan manusia seperti menghindari kerugian dan mengikuti kerumunan menghasilkan pola harga yang berulang","Pelaku pasar mengambil keputusan secara acak sehingga harga tidak mungkin diramalkan","Pasar sepenuhnya dikendalikan lembaga besar sehingga pelaku kecil tidak berpengaruh","Pola teknikal berfungsi karena cukup banyak orang memakainya sehingga menjadi ramalan yang mewujudkan diri"],
 answer:0,
 explain:"Keuangan perilaku menjelaskan mengapa pola bertahan: penghindaran kerugian membuat orang menahan posisi rugi terlalu lama sehingga level support terbentuk, sementara perilaku mengikuti kerumunan menghasilkan tren yang berlebihan. Argumen ramalan yang mewujudkan diri memang ada tetapi lebih lemah, karena tidak menjelaskan pola yang sudah terlihat jauh sebelum analisis teknikal populer."},

{id:"cta-teori-h15",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Hipotesis pasar adaptif dari Andrew Lo berbeda dari hipotesis pasar efisien. Apa implikasi utamanya bagi praktisi analisis teknikal?",
 options:["Strategi yang berfungsi pada satu pasar dijamin berfungsi sama baiknya pada pasar lain","Keunggulan sebuah strategi bersifat sementara dan menyusut ketika makin banyak pelaku memakainya","Pasar tidak pernah efisien sehingga strategi apa pun akan selalu berfungsi tanpa batas waktu","Hipotesis itu membuktikan analisis teknikal tidak memiliki dasar ilmiah sama sekali"],
 answer:1,
 explain:"Lo memandang pasar sebagai ekosistem yang berevolusi: strategi adalah spesies yang bersaing memperebutkan sumber keuntungan terbatas. Ketika sebuah pola dipublikasikan dan ramai dipakai, keuntungannya terkikis sampai habis. Konsekuensi praktisnya keras: pemantauan kinerja tidak pernah selesai, dan sistem yang dulu unggul harus siap dipensiunkan tanpa sentimen."},

{id:"cta-teori-h16",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Menurut teori Dow, tren sekunder umumnya mengoreksi sepertiga sampai dua pertiga tren primer. Bagaimana analis sebaiknya memakai rentang ini?",
 options:["Sebagai batas mutlak, sehingga koreksi melebihi dua pertiga membuktikan tren primer berakhir","Sebagai alat untuk menghitung waktu berakhirnya koreksi, bukan levelnya","Sebagai wilayah pengamatan untuk mencari bukti pembalikan, bukan sebagai titik beli otomatis","Sebagai perintah membeli tepat pada koreksi 50 persen dari tren primer sebelumnya"],
 answer:2,
 explain:"Rentang sepertiga sampai dua pertiga adalah pengamatan statistik, bukan mekanisme pemicu. Kegunaannya menyempitkan wilayah perhatian, lalu bukti sesungguhnya dicari di dalam wilayah itu: volume yang mengering saat turun, pola pembalikan, atau harga yang merebut kembali level penting. Membeli semata karena angka koreksi tersentuh berarti menebak dasar tanpa konfirmasi."},

{id:"cta-teori-h17",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Analisis teknikal dan analisis kuantitatif sama-sama memakai data harga. Apa perbedaan mendasar keduanya dalam cara menguji gagasan?",
 options:["Pendekatan kuantitatif tidak pernah memakai harga masa lalu sedangkan teknikal sepenuhnya bergantung padanya","Keduanya identik sehingga perbedaannya hanya pada istilah yang dipakai masing-masing","Analisis teknikal lebih akurat karena mata manusia menangkap hal yang tidak tertangkap rumus","Pendekatan kuantitatif menuntut perumusan yang dapat diuji ulang secara statistik, teknikal klasik banyak bersandar pada penafsiran visual"],
 answer:3,
 explain:"Titik pisahnya ada pada kemampuan diuji. Kalimat seperti pola ini terlihat seperti kepala dan bahu sulit diuji ulang karena bergantung pada mata pembacanya; ubah menjadi aturan berisi angka dan ia bisa diuji ribuan kali. Kecenderungan modern adalah menggabungkan keduanya: memakai intuisi visual untuk melahirkan gagasan, lalu menguntainya menjadi aturan tegas untuk diuji."}
]);
