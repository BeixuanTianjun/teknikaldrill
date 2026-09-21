/* Soal HOTS batch 7 — rta-dasar, rta-plan, rta-riset, rta-trend,
   cta-teori, cta-elliott, cta-statistik */
TD.register([
/* ===== rta-dasar ===== */
{id:"rta-dasar-h15",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Seorang nasabah meminta analis menjamin bahwa rekomendasinya akan menguntungkan. Apa tanggapan yang paling sesuai dengan etika profesi?",
 options:["Menghindari pertanyaan itu dan mengalihkan pembicaraan ke kinerja masa lalu yang gemilang","Menyatakan bahwa analisis teknikal memiliki tingkat keberhasilan yang sudah teruji di atas 90 persen","Menjelaskan bahwa analisis menghasilkan peluang, bukan kepastian, dan menyampaikan risikonya secara terbuka","Memberikan jaminan lisan agar nasabah merasa tenang, selama tidak dituangkan secara tertulis"],
 answer:2,
 explain:"Menjanjikan hasil adalah pelanggaran etika di hampir semua yurisdiksi, dan jaminan lisan tidak lebih ringan daripada yang tertulis. Yang boleh disampaikan adalah kerangka peluang beserta risikonya: berapa yang dipertaruhkan, di titik mana analisis dinyatakan salah, dan berapa besar kerugian yang mungkin terjadi. Keterbukaan seperti ini justru membangun hubungan yang bertahan lama."},

{id:"rta-dasar-h16",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Analisis teknikal sering dikritik karena bersifat ramalan yang mewujudkan diri sendiri. Apa kelemahan utama dari kritik tersebut?",
 options:["Kritik itu tidak dapat dijawab sehingga analisis teknikal memang tidak memiliki dasar","Kritik itu hanya berlaku pada pasar saham dan tidak berlaku pada pasar berjangka","Kritik itu benar sepenuhnya, dan justru menjadi alasan utama analisis teknikal berfungsi","Bila benar demikian, setiap pola akan selalu berhasil, padahal banyak pola terbukti gagal"],
 answer:3,
 explain:"Argumen itu memakan dirinya sendiri: kalau kesepakatan kolektif sudah cukup membuat pola berhasil, tingkat kegagalan pola tidak akan setinggi kenyataannya. Penjelasan yang lebih kokoh datang dari perilaku dan mekanisme pasar, yakni penumpukan pesanan di level tertentu serta kecenderungan menghindari kerugian, yang memang menghasilkan pola berulang tanpa menjamin keberhasilannya."},

{id:"rta-dasar-h17",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Seorang analis menerbitkan rekomendasi beli, lalu keesokan harinya data menunjukkan analisisnya keliru. Apa langkah yang paling profesional?",
 options:["Menerbitkan pembaruan yang menyatakan perubahan pandangan beserta alasannya kepada penerima yang sama","Membiarkan rekomendasi lama berdiri agar kredibilitas analis tidak dipertanyakan","Menghapus rekomendasi lama dari peredaran tanpa memberi penjelasan apa pun","Menunggu sampai kerugiannya terlihat jelas sebelum menyampaikan perubahan pandangan"],
 answer:0,
 explain:"Kredibilitas analis dibangun oleh keterlacakan pandangannya, bukan oleh catatan yang selalu benar. Pembaruan harus menjangkau penerima yang sama dengan rekomendasi awal, karena merekalah yang mungkin sudah bertindak. Menghapus jejak justru lebih merusak daripada mengakui kekeliruan, sebab ia menghilangkan kemungkinan menilai kinerja analis secara jujur."},

{id:"rta-dasar-h18",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Prinsip Dow menyatakan volume harus menegaskan tren. Bagaimana prinsip ini diterapkan pada pasar dengan nilai transaksi yang menyusut menyeluruh selama setahun?",
 options:["Volume harus dibandingkan dengan pasar lain yang nilai transaksinya sedang meningkat","Volume dinilai relatif terhadap rata-ratanya sendiri, bukan terhadap tingkat volume tahun sebelumnya","Prinsip volume tidak berlaku lagi pada pasar yang nilai transaksinya sedang menyusut","Tren apa pun pada pasar bervolume menyusut harus dianggap tidak sah"],
 answer:1,
 explain:"Volume nyaris selalu dibaca secara relatif. Pada pasar yang mengering menyeluruh, yang dicari bukan angka mutlaknya melainkan apakah volume membesar pada hari-hari searah tren dan mengecil pada hari koreksi, dibandingkan rata-rata 20 atau 50 harinya sendiri. Pola relatif inilah yang menegaskan atau meragukan tren, bukan besar kecilnya volume secara mutlak."},

/* ===== rta-plan ===== */
{id:"rta-plan-h13",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Modal 200 juta rupiah, risiko per transaksi 2 persen. Analis ingin membuka posisi dengan stop berjarak 5 persen dari harga masuk. Berapa nilai posisi maksimalnya?",
 options:["100 juta rupiah","10 juta rupiah","80 juta rupiah","40 juta rupiah"],
 answer:2,
 explain:"Risiko rupiah adalah 2 persen dari 200 juta, yaitu 4 juta. Karena stop berjarak 5 persen dari nilai posisi, maka nilai posisi sama dengan 4 juta dibagi 0,05, yakni 80 juta rupiah atau 40 persen dari modal. Yang kerap membingungkan: risiko 2 persen tidak berarti nilai posisinya 2 persen, melainkan kerugiannya yang dibatasi 2 persen."},

{id:"rta-plan-h14",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Rencana menetapkan berhenti berdagang selama sepekan bila kerugian bulanan mencapai 6 persen. Apa fungsi utama aturan semacam ini?",
 options:["Menaikkan harapan keuntungan sistem karena transaksi menjadi lebih sedikit jumlahnya","Memenuhi ketentuan regulator yang mewajibkan penghentian setelah kerugian tertentu","Memberi waktu untuk mengubah parameter sistem agar cocok dengan kondisi terbaru","Memutus rantai keputusan buruk yang lahir dari tekanan, sebelum kerugian membesar menjadi bencana"],
 answer:3,
 explain:"Rentetan kerugian mengubah cara berpikir: ukuran membesar untuk balas dendam, stop digeser karena berharap, dan sinyal diambil di luar rencana. Batas kerugian bulanan memotong rantai itu dengan paksa, ketika kesadaran diri paling lemah. Nilainya bukan matematis melainkan perilaku, dan justru di situlah sebagian besar modal biasanya hilang."},

{id:"rta-plan-h15",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Seorang analis memakai stop mental, yaitu tidak memasang pesanan stop di sistem tetapi berniat keluar bila harga mencapai level tertentu. Apa risiko terbesarnya?",
 options:["Saat level tersentuh, keinginan menunggu sebentar lagi sering mengalahkan niat awal","Stop mental tidak diizinkan oleh bursa sehingga penggunaannya melanggar ketentuan","Stop mental selalu tereksekusi pada harga yang lebih buruk daripada stop yang dipasang","Risikonya hanya muncul pada saham dengan likuiditas rendah, bukan pada saham likuid"],
 answer:0,
 explain:"Stop mental memindahkan keputusan ke saat paling buruk untuk mengambilnya: ketika posisi sedang rugi dan harapan paling kuat. Pesanan stop yang terpasang mengikat keputusan pada waktu kepala masih dingin. Stop mental punya tempatnya, misalnya untuk menghindari perburuan stop pada saham tipis, tetapi menuntut disiplin yang jauh di atas rata-rata."},

{id:"rta-plan-h16",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Dua peluang muncul bersamaan: yang pertama berpotensi 3R dengan peluang keberhasilan diperkirakan 40 persen, yang kedua 1,5R dengan peluang 70 persen. Mana yang lebih layak diambil bila hanya satu yang bisa dipilih?",
 options:["Tidak ada yang layak diambil karena keduanya memiliki harapan keuntungan negatif","Yang pertama, karena harapan keuntungannya 0,2R lebih tinggi daripada yang kedua","Yang kedua, karena peluang keberhasilan yang lebih tinggi membuat hasilnya lebih pasti","Keduanya setara sehingga pilihannya dapat ditentukan secara acak"],
 answer:1,
 explain:"Hitungannya: peluang pertama menghasilkan 0,4 x 3R dikurangi 0,6 x 1R sama dengan 0,6R. Peluang kedua menghasilkan 0,7 x 1,5R dikurangi 0,3 x 1R sama dengan 0,75R. Jadi yang kedua justru lebih unggul 0,15R, kebalikan dari dugaan awal yang tergoda angka 3R. Rasio imbalan terhadap risiko tidak pernah boleh dinilai tanpa peluang keberhasilannya."},

{id:"rta-plan-h17",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Jurnal menunjukkan rata-rata kemenangan 1,1R dan rata-rata kerugian 1,4R, padahal rencananya menetapkan stop 1R dan target 2R. Apa yang paling mungkin terjadi?",
 options:["Perhitungan R dalam jurnal keliru karena rata-rata kerugian tidak mungkin melebihi 1R","Pasar sedang tidak cocok dengan sistem sehingga cukup menunggu sampai kondisi berubah","Posisi menang ditutup terlalu dini sementara posisi rugi dibiarkan melewati stop yang direncanakan","Sistemnya memang tidak menguntungkan sehingga rencananya perlu diganti seluruhnya"],
 answer:2,
 explain:"Selisih antara rencana dan hasil adalah potret pelaksanaan, bukan potret sistem. Rata-rata kerugian 1,4R hanya mungkin bila stop digeser atau diabaikan, dan kemenangan 1,1R berarti target 2R jarang ditunggu. Polanya khas: takut kehilangan keuntungan, enggan mengakui kerugian. Perbaikannya ada pada pelaksanaan, dan mengganti sistem justru akan mengulang hal yang sama."},

{id:"rta-plan-h18",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Modal 100 juta rupiah dengan aturan risiko 1 persen. Setelah ekuitas turun menjadi 85 juta, analis tetap menghitung risiko dari 100 juta. Apa masalahnya?",
 options:["Tidak ada masalah karena modal awal adalah acuan yang paling stabil untuk perhitungan","Risikonya menjadi lebih kecil sehingga pendekatan ini justru lebih aman","Masalahnya hanya pada pencatatan, sedangkan risiko sesungguhnya tetap 1 persen","Risiko sesungguhnya menjadi 1,18 persen dari ekuitas terkini, sehingga penurunan modal justru makin cepat"],
 answer:3,
 explain:"Menghitung dari modal awal berarti persentase risiko diam-diam membesar setiap kali ekuitas menyusut, persis kebalikan dari yang seharusnya. Perhitungan berbasis ekuitas terkini bersifat meredam dengan sendirinya: posisi mengecil saat sedang merugi dan membesar saat pulih, sehingga rentetan kerugian tidak mudah berubah menjadi kerusakan yang tidak terpulihkan."},

/* ===== rta-riset ===== */
{id:"rta-riset-h05",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Sebuah laporan riset teknikal menyajikan grafik dengan sumbu harga dipotong sehingga dimulai dari 4.800, bukan dari nol. Apakah ini praktik yang dapat diterima?",
 options:["Dapat diterima dan lazim pada grafik harga, asalkan skalanya tidak dipakai untuk melebih-lebihkan pergerakan","Tidak dapat diterima karena sumbu harga wajib selalu dimulai dari nol","Dapat diterima tanpa syarat apa pun karena pembaca laporan riset sudah terlatih","Tidak dapat diterima karena memotong sumbu selalu bertujuan menyesatkan pembaca"],
 answer:0,
 explain:"Berbeda dengan diagram batang, grafik harga memang hampir selalu memotong sumbu; memulai dari nol akan memampatkan seluruh pergerakan menjadi garis datar yang tidak terbaca. Yang menjadi soal adalah bila pemotongan dipadukan dengan peregangan ekstrem sehingga kenaikan 2 persen tampak seperti lonjakan. Keterbukaan skala dan rentang tanggal menyelesaikan sebagian besar keberatan."},

{id:"rta-riset-h06",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Laporan riset menyimpulkan sebuah saham akan naik, tetapi seluruh bukti yang disajikan hanya berupa pola yang mendukung kesimpulan itu, tanpa menyebut satu pun tanda yang berlawanan. Apa kelemahan metodologisnya?",
 options:["Kelemahannya pada pilihan pola, bukan pada cara bukti disusun dan disajikan","Bias konfirmasi, karena bukti yang melawan kesimpulan tidak diuji sehingga pembaca tidak dapat menilai secara seimbang","Tidak ada kelemahan karena laporan riset memang bertugas mendukung kesimpulannya","Kelemahannya hanya pada panjang laporan yang menjadi terlalu ringkas"],
 answer:1,
 explain:"Riset yang kredibel menyajikan skenario tandingan beserta level yang akan membatalkan tesisnya. Laporan yang hanya mengumpulkan bukti searah tidak dapat dibedakan dari upaya membenarkan posisi yang sudah dipegang. Ujinya sederhana: adakah kalimat yang menyebutkan pada harga berapa penulis akan mengakui dirinya keliru? Bila tidak ada, itu promosi, bukan analisis."},

{id:"rta-riset-h07",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Analis menyusun laporan untuk nasabah ritel pemula dan untuk manajer dana institusi. Bagaimana perbedaan penyajiannya yang paling tepat?",
 options:["Laporan untuk pemula boleh menghilangkan bagian risiko agar tidak membingungkan","Laporan untuk institusi cukup berisi kesimpulan karena mereka sudah berpengalaman","Kesimpulan dan pengelolaan risiko ditonjolkan untuk pemula, sementara asumsi dan metodologi dirinci untuk institusi","Kedua laporan harus identik agar tidak terjadi perbedaan informasi antarpenerima"],
 answer:2,
 explain:"Menyesuaikan penyajian bukan berarti menyampaikan isi yang berbeda; fakta, tesis, dan risikonya wajib sama. Yang berbeda adalah kedalaman teknis dan bahasa. Bagian risiko justru paling penting bagi pemula dan tidak boleh dipangkas. Bagi institusi, asumsi dan metode perlu dirinci karena merekalah yang akan mengujinya dengan kerangka mereka sendiri."},

{id:"rta-riset-h08",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Seorang analis mengutip data harga dari penyedia berbayar dan menyalinnya utuh ke dalam laporan publik tanpa menyebut sumbernya. Apa persoalan yang muncul?",
 options:["Tidak ada persoalan karena data harga adalah informasi publik yang bebas dipakai siapa saja","Persoalannya hanya pada biaya berlangganan yang mungkin terlanggar, bukan pada etika","Persoalannya hanya muncul bila datanya ternyata keliru dan merugikan pembaca","Persoalan hak cipta dan integritas sekaligus, karena sumber data wajib disebut agar pembaca dapat memverifikasi"],
 answer:3,
 explain:"Dua hal bertumpuk di sini. Pertama, perjanjian berlangganan umumnya membatasi penyebaran ulang, sehingga ada persoalan hukum. Kedua, dan lebih mendasar, menyebut sumber adalah syarat agar pembaca dapat menelusuri dan memverifikasi. Analisis yang datanya tidak dapat ditelusuri tidak dapat diuji, dan yang tidak dapat diuji sulit disebut riset."},

/* ===== rta-trend ===== */
{id:"rta-trend-h13",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Pola cup and handle terbentuk, tetapi bagian handle mengoreksi sampai 55 persen dari kedalaman cup. Apa yang perlu diwaspadai?",
 options:["Handle yang terlalu dalam menandakan penjualan masih kuat, sehingga keandalan polanya menurun","Handle yang dalam selalu memperkuat pola karena memberi harga masuk yang lebih baik","Kedalaman handle tidak berkaitan dengan keandalan pola dalam bentuk apa pun","Pola menjadi batal dan berubah menjadi pola double top secara otomatis"],
 answer:0,
 explain:"Handle seharusnya berupa pengambilan untung ringan, bukan gelombang penjualan baru; patokan yang lazim adalah sekitar sepertiga kedalaman cup atau kurang. Koreksi 55 persen berarti pasokan masih menekan dan pemulihan pada cup belum benar-benar menyerapnya. Polanya tidak batal, tetapi menuntut volume penembusan yang jauh lebih meyakinkan sebelum dipercaya."},

{id:"rta-trend-h14",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Harga membentuk rounding bottom selama delapan bulan dengan volume yang mengering di dasar lalu membesar perlahan seiring naiknya harga. Mengapa pola volume ini penting?",
 options:["Volume seharusnya memuncak tepat di dasar agar polanya dianggap sah","Ia menggambarkan peralihan kepemilikan yang bertahap dari penjual lelah ke pembeli sabar, dasar dari pemulihan yang tahan lama","Volume yang mengering di dasar menandakan saham itu sedang kehilangan minat dan sebaiknya dihindari","Pola volume tidak relevan karena rounding bottom hanya dinilai dari bentuk harganya"],
 answer:1,
 explain:"Rounding bottom bercerita tentang waktu, bukan peristiwa. Volume yang mengering di dasar berarti penjual sudah kehabisan barang dan tidak ada lagi yang terdesak melepas; volume yang tumbuh perlahan saat harga naik berarti minat kembali tanpa euforia. Karena tidak ada lonjakan dramatis, pola ini kerap terlewat justru saat paling menarik."},

{id:"rta-trend-h15",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Sebuah saham membentuk tiga puncak pada level yang hampir sama selama lima bulan dengan volume menurun pada setiap puncak. Apa pembacaan yang paling tepat?",
 options:["Konsolidasi netral tanpa arah, karena harga belum menembus ke mana pun","Pola segitiga naik yang akan menembus ke atas karena puncaknya sejajar","Distribusi yang sedang berlangsung, karena minat beli melemah pada setiap upaya menembus resistance","Akumulasi yang sehat, karena harga berhasil kembali ke resistance sebanyak tiga kali"],
 answer:2,
 explain:"Yang menentukan bukan sekadar bentuknya melainkan volumenya. Tiga puncak sejajar dengan volume yang menyusut berarti setiap gelombang pembelian lebih lemah dari sebelumnya, sementara pasokan di resistance tetap kokoh. Bila lembah-lembahnya pun mendatar, bentuknya memang menyerupai segitiga naik, tetapi arus volumenya bercerita sebaliknya dan volume biasanya lebih dipercaya."},

/* ===== cta-teori ===== */
{id:"cta-teori-h18",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Teori Dow menyatakan sinyal berlaku sampai dibatalkan sinyal berlawanan. Apa konsekuensi praktis dari prinsip ini bagi analis?",
 options:["Analis harus keluar setiap kali koreksi sekunder muncul agar keuntungan terlindungi","Prinsip ini berarti posisi tidak boleh ditutup sama sekali dalam keadaan apa pun","Sinyal Dow otomatis kedaluwarsa setelah enam bulan tanpa perlu sinyal berlawanan","Analis tidak boleh keluar dari tren hanya karena harga terasa terlalu tinggi, melainkan menunggu sinyal pembalikan"],
 answer:3,
 explain:"Prinsip ini melawan godaan terbesar dalam tren besar, yaitu keluar karena merasa harga sudah mahal. Dow menuntut bukti struktural, yakni kegagalan membentuk puncak baru diikuti penembusan lembah sebelumnya, dan disahkan kedua indeks. Harganya adalah selalu menyerahkan sebagian keuntungan di puncak; imbalannya adalah tidak pernah keluar dari tren besar terlalu dini."},

{id:"cta-teori-h19",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Kritikus menyebut teori Dow terlambat karena sinyalnya baru muncul setelah sebagian besar pergerakan terjadi. Bagaimana pembelaan yang paling kuat?",
 options:["Teori ini dirancang menangkap bagian tengah tren besar, dan keterlambatan adalah ongkos untuk menyaring sinyal palsu","Kritik itu keliru karena sinyal Dow sesungguhnya muncul sebelum pergerakan dimulai","Keterlambatan tidak ada selama analis memakai grafik dengan periode yang lebih pendek","Kritik itu benar sehingga teori Dow sebaiknya ditinggalkan oleh analis modern"],
 answer:0,
 explain:"Dow tidak pernah berniat menangkap titik terendah dan tertinggi; sasarannya adalah bagian tengah tren primer yang biasanya paling panjang. Setiap metode menghadapi pertukaran yang sama: makin cepat sinyal, makin banyak yang palsu. Yang membedakan analis matang adalah memilih titik pertukaran itu secara sadar, bukan berharap ada metode yang cepat sekaligus akurat."},

{id:"cta-teori-h20",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Charles Dow menyatakan rata-rata mendiskon segalanya, kecuali satu hal. Apa pengecualian itu dan mengapa penting dipahami?",
 options:["Tidak ada pengecualian sama sekali, karena harga sudah mendiskon seluruh informasi yang ada maupun yang belum terjadi","Peristiwa mendadak yang tidak dapat diketahui sebelumnya, seperti bencana, yang menjelaskan mengapa pengendalian risiko tetap mutlak","Data ekonomi makro, karena angka resmi selalu terbit setelah harga terbentuk sehingga pasar tidak dapat mendiskonnya lebih dulu","Keputusan bank sentral, karena isinya dirahasiakan sampai pengumuman sehingga mustahil tercermin pada harga sebelumnya"],
 answer:1,
 explain:"Dow menyebut tindakan Tuhan sebagai pengecualian: kejadian yang tidak dapat diantisipasi siapa pun tidak mungkin tercermin pada harga sebelum terjadi. Justru pengakuan inilah yang membuat kerangkanya jujur, dan sekaligus menjadi alasan mengapa stop loss dan pembatasan ukuran posisi bukan pelengkap melainkan syarat bertahan hidup dalam jangka panjang."},

/* ===== cta-elliott ===== */
{id:"cta-elliott-h08",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Gelombang 3 berkembang menjadi gelombang perpanjangan sepanjang 261,8 persen dari gelombang 1. Apa yang umumnya diharapkan terjadi pada gelombang 5?",
 options:["Gelombang 5 tidak akan terbentuk karena perpanjangan sudah menghabiskan seluruh struktur","Gelombang 5 akan berbalik arah menjadi gelombang korektif berderajat besar","Gelombang 5 cenderung normal dan tidak ikut memanjang, karena biasanya hanya satu gelombang yang mengalami perpanjangan","Gelombang 5 pasti ikut memanjang dengan rasio yang sama besarnya"],
 answer:2,
 explain:"Pedoman perpanjangan menyatakan umumnya hanya satu dari tiga gelombang pendorong yang memanjang, dan pada pasar saham paling sering gelombang 3. Setelah gelombang 3 memanjang sejauh itu, gelombang 5 biasanya sederhana, kerap sepanjang gelombang 1 atau 61,8 persennya. Kegunaannya praktis: menahan analis dari memproyeksikan target gelombang 5 yang terlalu jauh."},

{id:"cta-elliott-h09",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Harga membentuk struktur lima gelombang menurun yang seluruh gelombangnya saling tumpang tindih dan terbungkus dalam dua garis yang menyempit. Struktur apa ini dan apa artinya?",
 options:["Impuls biasa, karena struktur lima gelombang selalu berarti gelombang pendorong","Zigzag korektif, karena gelombangnya saling tumpang tindih satu sama lain","Struktur tidak sah karena gelombang pendorong tidak boleh tumpang tindih sama sekali","Diagonal berakhir, yang biasanya muncul di ujung tren dan diikuti pembalikan cepat ke titik awalnya"],
 answer:3,
 explain:"Diagonal berakhir adalah pengecualian resmi terhadap larangan tumpang tindih, dan bentuk baji yang menyempit itulah cirinya. Ia menandakan tenaga tren hampir habis, karena setiap dorongan makin kehilangan jangkauan. Yang khas dan berguna: setelah diagonal berakhir, harga biasanya kembali dengan cepat ke titik awal diagonal tersebut, sering kali lebih cepat daripada waktu pembentukannya."},

{id:"cta-elliott-h10",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Analis memperkirakan koreksi berupa zigzag sederhana, tetapi harga justru bergerak menyamping berlarut-larut dalam tujuh gelombang. Apa yang paling mungkin terjadi?",
 options:["Koreksi berkembang menjadi struktur gabungan seperti double three, yang memang sering memakan waktu panjang","Penghitungan gelombangnya pasti salah karena koreksi tidak boleh melebihi lima gelombang","Tren utama sudah berbalik sehingga seluruh kerangka analisisnya harus dibuang","Harga sedang membentuk impuls baru yang tersamar sebagai gerakan menyamping"],
 answer:0,
 explain:"Koreksi jauh lebih beragam daripada gelombang pendorong: selain zigzag dan flat, ada kombinasi yang dirangkai penghubung sehingga berjalan tujuh atau sebelas gelombang. Inilah bagian Elliott yang paling menguji kesabaran. Sikap praktisnya: selama level pembatalan belum tersentuh, kerangka tetap hidup, dan gerakan menyamping yang membosankan justru khas gelombang 4."},

/* ===== cta-statistik ===== */
{id:"cta-statistik-h08",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Analis membandingkan dua sistem dengan rasio Sharpe 1,2 dan 0,9, lalu menyimpulkan yang pertama lebih baik. Kapan kesimpulan ini bisa menyesatkan?",
 options:["Bila kedua sistem sama-sama menghasilkan imbal hasil tahunan yang positif","Bila sebaran imbal hasilnya sangat miring, karena Sharpe menghukum gejolak naik dan turun secara sama","Rasio Sharpe tidak pernah menyesatkan karena sudah memperhitungkan risiko secara menyeluruh","Bila kedua sistem diuji pada periode waktu yang sama panjang"],
 answer:1,
 explain:"Sharpe memakai standar deviasi, yang memperlakukan lonjakan keuntungan sebagai risiko setara dengan lonjakan kerugian. Sistem pengikut tren yang sesekali meraih keuntungan sangat besar karena itu dihukum secara tidak adil. Rasio Sortino, yang hanya menghitung gejolak ke bawah, sering lebih sesuai, dan sebaiknya dibaca bersama penurunan modal terdalamnya."},

{id:"cta-statistik-h09",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sebuah uji balik dijalankan pada daftar saham yang masuk indeks utama hari ini, dengan data sepuluh tahun ke belakang. Cacat apa yang paling mungkin terjadi?",
 options:["Cacatnya hanya pada jumlah saham yang terlalu sedikit untuk diuji secara statistik","Cacatnya pada periode sepuluh tahun yang terlalu panjang sehingga datanya usang","Bias bertahan hidup, karena saham yang gagal dan keluar dari indeks tidak ikut diuji","Tidak ada cacat karena indeks utama adalah daftar yang paling mewakili pasar"],
 answer:2,
 explain:"Daftar hari ini sudah tersaring oleh keberhasilan: perusahaan yang bangkrut atau merosot sudah dikeluarkan sehingga tidak pernah muncul dalam pengujian. Hasilnya, kinerja simulasi meningkat sendirinya tanpa ada strategi yang bekerja. Perbaikannya adalah memakai daftar keanggotaan historis pada setiap tanggal, termasuk saham yang kemudian menghilang dari bursa."},

{id:"cta-statistik-h10",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sistem menghasilkan keuntungan tahunan 18 persen, tetapi 80 persen dari seluruh labanya datang dari tiga transaksi di satu tahun tertentu. Bagaimana menilai sistem ini?",
 options:["Sangat baik, karena kemampuan menangkap tiga transaksi besar membuktikan keunggulannya","Netral, karena sumber laba tidak berkaitan dengan kualitas sebuah sistem","Rapuh, dan satu-satunya perbaikan adalah memperbesar ukuran posisi pada semua transaksi","Rapuh, karena kinerjanya bergantung pada sedikit kejadian langka yang belum tentu terulang"],
 answer:3,
 explain:"Konsentrasi laba adalah ukuran kerapuhan yang jarang dilaporkan. Bila tiga transaksi dihapus dan sistemnya berubah merugi, yang sesungguhnya diuji hanyalah keberuntungan berada di pasar saat kejadian langka muncul. Periksa sebaran labanya antartahun dan antarinstrumen; sistem yang kokoh menghasilkan banyak kemenangan sedang, bukan bergantung pada segelintir keajaiban."},

{id:"cta-statistik-h11",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Analis menemukan korelasi 0,78 antara sebuah indikator dan imbal hasil saham bulan berikutnya, lalu membangun sistem di atasnya. Apa kehati-hatian yang paling penting?",
 options:["Korelasi tidak membuktikan sebab akibat, dan hubungan yang kuat bisa muncul kebetulan bila banyak variabel diuji","Korelasi di atas 0,7 selalu membuktikan adanya hubungan sebab akibat yang sahih","Korelasi hanya berlaku pada data harian dan tidak dapat dipakai pada data bulanan","Kehati-hatiannya hanya pada perhitungan matematis, bukan pada penafsiran hasilnya"],
 answer:0,
 explain:"Dua jebakan bertumpuk. Pertama, korelasi tinggi bisa lahir dari faktor ketiga yang menggerakkan keduanya, atau semata dari kebetulan bila ratusan variabel disaring. Kedua, korelasi mengukur hubungan lurus dan buta terhadap hubungan yang melengkung. Syarat minimal sebelum memakainya: ada penjelasan ekonomi yang masuk akal, dan hubungannya bertahan pada data yang belum pernah disentuh."}
]);
