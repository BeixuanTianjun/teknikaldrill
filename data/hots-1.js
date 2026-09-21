/* Soal HOTS batch 1 — unit dengan porsi analisis paling tipis.
   Seluruhnya C4 ke atas: menuntut analisis, evaluasi, atau perancangan. */
TD.register([
/* ===== cta-siklus ===== */
{id:"cta-sik-h01",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Sebuah siklus 40 bulan mencapai lembah pada Maret 2021 dan Juli 2024. Analis memproyeksikan lembah berikutnya dengan menambahkan 40 bulan dari Juli 2024. Kelemahan paling serius dari cara ini adalah...",
 options:["Jarak kedua lembah sebenarnya 40 bulan, sehingga panjang siklusnya belum terverifikasi dari dua titik saja","Proyeksi seharusnya dihitung dari lembah pertama, bukan dari lembah yang terakhir terjadi","Siklus 40 bulan hanya berlaku pada data bulanan, bukan pada data harian maupun mingguan","Proyeksi waktu tidak boleh dipakai sebelum dikonfirmasi oleh indikator momentum"],
 answer:0,
 explain:"Dua titik hanya menghasilkan satu interval, dan satu interval belum membuktikan adanya periodisitas. Siklus baru layak dipercaya setelah terlihat berulang beberapa kali dengan toleransi waktu yang wajar. Jebakan yang sering terjadi: analis menemukan dua lembah berjarak sesuai teori lalu memperlakukannya sebagai jadwal, padahal itu bisa kebetulan. Proyeksi siklus menandai zona waktu rawan, bukan tanggal."},

{id:"cta-sik-h02",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Pada sebuah siklus, puncak konsisten muncul jauh setelah titik tengah periodenya selama tiga siklus berturut-turut. Apa yang paling tepat disimpulkan dari pola right translation ini?",
 options:["Siklus tersebut sedang bergeser fase dan titik awalnya perlu dihitung ulang","Tren yang lebih besar sedang mendorong ke atas, sehingga fase naik memakan porsi waktu lebih panjang","Panjang siklusnya sedang memendek sehingga puncaknya bergeser ke belakang","Amplitudo siklus akan mengecil pada periode berikutnya"],
 answer:1,
 explain:"Translation mengukur pengaruh tren yang lebih besar terhadap bentuk siklus. Right translation berarti harga menghabiskan lebih banyak waktu untuk naik daripada turun, ciri khas tren utama yang kuat. Kebalikannya, left translation menandakan kelemahan. Ini contoh bagus bahwa analisis siklus tidak berdiri sendiri: bentuk siklus justru membocorkan kekuatan tren di atasnya."},

{id:"cta-sik-h03",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Analis menguji 12 bulan kalender pada 30 saham dan menemukan satu kombinasi bulan dan saham dengan imbal hasil rata-rata sangat tinggi, signifikan pada tingkat 5 persen. Mengapa temuan itu belum layak dipakai?",
 options:["Pola musiman hanya sah bila diuji pada indeks, bukan pada saham individual","Imbal hasil rata-rata bukan ukuran yang tepat karena distribusinya tidak simetris","Menguji 360 kombinasi membuat sekitar 18 di antaranya tampak signifikan hanya karena kebetulan","Tingkat signifikansi 5 persen terlalu longgar untuk data pasar yang berekor gemuk"],
 answer:2,
 explain:"Pada tingkat 5 persen, sekitar satu dari dua puluh pengujian akan tampak signifikan meski tidak ada pola sama sekali. Dengan 12 dikali 30 sama dengan 360 kombinasi, sekitar 18 temuan palsu diharapkan muncul. Inilah data snooping. Penawarnya: koreksi tingkat signifikansi terhadap banyaknya percobaan, uji di luar sampel, dan tuntut penjelasan ekonomi mengapa pola itu masuk akal."},

{id:"cta-sik-h04",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Dua siklus, satu berperiode 20 minggu dan satu 40 minggu, diperkirakan mencapai lembah pada pekan yang sama. Implikasi paling tepat bagi analis adalah...",
 options:["Kedua siklus akan saling meniadakan sehingga harga cenderung bergerak mendatar","Siklus 20 minggu menjadi tidak relevan karena tertelan oleh siklus yang lebih panjang","Proyeksi keduanya harus dibatalkan karena siklus tidak boleh bertumpuk pada titik sama","Tekanan turun menjelang pekan itu berpotensi lebih besar, dan pembalikan sesudahnya berpotensi lebih kuat"],
 answer:3,
 explain:"Prinsip summation menyatakan pergerakan harga adalah penjumlahan beberapa siklus. Ketika lembah beberapa siklus bertepatan, dorongan turunnya menumpuk, lalu titik baliknya juga lebih bertenaga karena keduanya berbalik bersamaan. Analis siklus menyebut titik semacam ini sebagai cluster, dan justru di situlah proyeksi waktu paling bernilai."},

{id:"cta-sik-h05",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Analisis spektral pada data harga sepuluh tahun menemukan frekuensi dominan yang kuat, tetapi pengujian pada lima tahun terakhir saja tidak menemukannya. Penjelasan paling masuk akal adalah...",
 options:["Deret harga tidak stasioner, sehingga siklus yang dominan dapat berubah seiring rezim pasar","Sampel lima tahun terlalu pendek sehingga perhitungan spektralnya pasti keliru","Frekuensi dominan hanya dapat dideteksi pada data bulanan, bukan data harian","Hasil pertama pasti salah karena siklus sejati tidak pernah menghilang"],
 answer:0,
 explain:"Data pasar tidak stasioner: rata-rata, varians, dan struktur periodisitasnya berubah seiring perubahan kondisi ekonomi, struktur pasar, dan pelaku di dalamnya. Siklus yang dominan pada satu dekade bisa memudar pada dekade berikutnya. Inilah alasan analisis siklus selalu dipasangkan toleransi waktu dan konfirmasi harga, bukan diperlakukan sebagai jadwal mekanis."},

{id:"cta-sik-h06",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Seorang analis memakai proyeksi siklus untuk menentukan tanggal masuk, dan membuka posisi tepat pada tanggal proyeksi tanpa melihat aksi harga. Kelemahan mendasar dari pendekatan ini adalah...",
 options:["Siklus tidak dapat dipakai bersama analisis harga karena keduanya saling bertentangan","Proyeksi siklus menandai zona waktu berpeluang berbalik, bukan memastikan pembalikan terjadi","Proyeksi siklus hanya berlaku untuk keluar posisi, tidak pernah untuk masuk posisi","Tanggal proyeksi selalu meleset karena panjang siklus tidak pernah bilangan bulat"],
 answer:1,
 explain:"Siklus berbicara tentang kapan pasar rawan berbalik, bukan tentang apakah pembalikan benar-benar terjadi atau ke arah mana. Tanpa konfirmasi harga, analis bertaruh pada jadwal. Praktik yang sehat: siklus menyempitkan perhatian ke rentang waktu tertentu, lalu pemicu eksekusinya tetap berupa aksi harga seperti penembusan struktur atau pola pembalikan."},

/* ===== cta-statistik ===== */
{id:"cta-st-h01",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sebuah saham memiliki volatilitas harian 2 persen. Berapa kira-kira volatilitas tahunannya, dengan asumsi 252 hari perdagangan?",
 options:["Sekitar 100 persen","Sekitar 504 persen","Sekitar 32 persen","Sekitar 24 persen"],
 answer:2,
 explain:"Varians bertambah linear terhadap waktu, sehingga standar deviasi bertambah mengikuti akar waktu. Perhitungannya 2 persen dikali akar 252, yaitu 2 dikali 15,87 sama dengan sekitar 31,7 persen. Kekeliruan yang paling sering terjadi adalah mengalikan langsung dengan 252, yang menghasilkan 504 persen dan jelas tidak masuk akal. Aturan praktisnya: volatilitas harian dikali 16 mendekati volatilitas tahunan."},

{id:"cta-st-h02",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Dua strategi menghasilkan rata-rata imbal hasil bulanan yang sama. Strategi A memiliki skewness positif, strategi B negatif. Apa konsekuensi praktis paling penting dari perbedaan itu?",
 options:["A lebih berisiko karena keuntungan besarnya jarang muncul sehingga hasilnya tidak dapat diandalkan","Keduanya setara karena rata-rata imbal hasilnya sama besar","B lebih aman karena distribusi imbal hasilnya terkumpul rapat di sekitar rata-rata","B menghasilkan banyak keuntungan kecil tetapi sesekali kerugian sangat besar yang mengancam kelangsungannya"],
 answer:3,
 explain:"Skewness negatif berarti ekor kiri panjang: sebagian besar bulan untung tipis, lalu sekali waktu datang kerugian yang menghapus hasil bertahun-tahun. Strategi menjual opsi dan mean reversion berperilaku seperti ini, dan kurva ekuitasnya tampak indah sampai tidak lagi. Skewness positif kebalikannya: sering rugi kecil, sesekali untung besar, seperti trend following. Rata-rata yang sama sama sekali tidak berarti risiko yang sama."},

{id:"cta-st-h03",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Korelasi antara harga saham A dan harga saham B selama lima tahun terukur 0,92. Keduanya sama-sama memiliki tren naik yang kuat. Mengapa angka itu berpotensi menyesatkan?",
 options:["Dua deret yang sama-sama bertren akan berkorelasi tinggi meski pergerakan hariannya tidak berhubungan","Korelasi lima tahun terlalu panjang sehingga angkanya tidak mencerminkan kondisi terkini","Korelasi hanya sah dihitung antara saham yang berada pada sektor yang sama","Nilai 0,92 terlalu tinggi sehingga pasti ada kekeliruan dalam perhitungannya"],
 answer:0,
 explain:"Inilah spurious correlation. Dua deret yang sama-sama menanjak akan tampak bergerak bersama meskipun perubahan hariannya tidak berhubungan sama sekali. Perbaikannya sederhana namun sering dilewatkan: hitung korelasi pada imbal hasil, bukan pada level harga. Banyak klaim hubungan antar aset runtuh begitu koreksi ini diterapkan."},

{id:"cta-st-h04",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sebuah strategi menghasilkan rata-rata aritmatik imbal hasil bulanan 3 persen selama dua belas bulan, tetapi ekuitas akhirnya justru lebih rendah dari rata-rata itu. Penjelasan paling tepat adalah...",
 options:["Dua belas bulan terlalu pendek untuk menilai pertumbuhan majemuk sebuah strategi","Pertumbuhan majemuk mengikuti rata-rata geometris, yang selalu lebih kecil bila imbal hasilnya berfluktuasi","Terdapat kekeliruan penghitungan karena rata-rata aritmatik selalu mencerminkan hasil akhir","Biaya transaksi belum dikurangkan dari imbal hasil bulanan yang dilaporkan"],
 answer:1,
 explain:"Naik 50 persen lalu turun 50 persen memberi rata-rata aritmatik nol, padahal modal tinggal 75 persen. Yang menentukan kekayaan akhir adalah rata-rata geometris, dan selisihnya terhadap rata-rata aritmatik membesar seiring volatilitas. Inilah alasan mendalam mengapa mengurangi volatilitas sering lebih menguntungkan daripada mengejar imbal hasil rata-rata yang lebih tinggi."},

{id:"cta-st-h05",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Model risiko sebuah portofolio mengasumsikan imbal hasil berdistribusi normal. Dalam praktik, kekeliruan yang paling berbahaya dari asumsi itu adalah...",
 options:["Korelasi antar aset dianggap tetap padahal berubah mengikuti kondisi pasar","Imbal hasil rata-rata dihitung terlalu rendah sehingga strateginya tampak kurang menarik","Potensi kerugian ekstrem diremehkan, tepat pada bagian distribusi yang menentukan kelangsungan portofolio","Volatilitas harian dihitung terlalu tinggi sehingga ukuran posisinya menjadi terlalu kecil"],
 answer:2,
 explain:"Data pasar berekor gemuk: peristiwa yang menurut kurva normal mustahil terjadi sekali dalam ribuan tahun ternyata muncul beberapa kali per dekade. Karena model normal meremehkan ekor, ukuran posisi yang tampak aman bisa mematikan saat guncangan datang. Ini bukan soal ketelitian akademis, melainkan soal bertahan hidup, dan itulah inti kritik Taleb terhadap model risiko konvensional."},

{id:"cta-st-h06",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Nilai Hurst exponent sebuah instrumen terukur 0,38. Strategi yang paling sesuai dengan karakter tersebut adalah...",
 options:["Mengikuti tren, karena nilai di bawah 0,5 menandakan pergerakan yang persisten","Membeli dan menahan, karena nilai itu menandakan pergerakan sepenuhnya acak","Arbitrase antar instrumen, karena nilai itu menandakan tidak ada keunggulan arah","Mean reversion, karena nilai di bawah 0,5 menandakan kecenderungan berbalik arah"],
 answer:3,
 explain:"Hurst di atas 0,5 menandakan perilaku persisten atau trending, tepat 0,5 gerak acak, dan di bawah 0,5 anti persisten alias cenderung berbalik. Nilai 0,38 mengarah ke mean reversion. Yang perlu diingat, angka ini dapat berubah antar periode dan antar timeframe, sehingga lebih tepat dipakai memilih jenis strategi daripada dijadikan sinyal transaksi."},

/* ===== cta-elliott ===== */
{id:"cta-ew-h01",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Sebuah penghitungan menempatkan gelombang 4 berakhir di 1.180, sementara puncak gelombang 1 berada di 1.210. Apa yang harus dilakukan analis?",
 options:["Membatalkan penghitungan itu, karena gelombang 4 memasuki wilayah harga gelombang 1","Mempertahankannya, karena tumpang tindih sebesar itu masih dalam toleransi wajar","Menggeser label gelombang 4 ke titik terendah berikutnya agar aturannya terpenuhi","Mengubah derajat gelombangnya agar tumpang tindih tersebut menjadi tidak relevan"],
 answer:0,
 explain:"Pada impulse standar, gelombang 4 tidak boleh memasuki wilayah harga gelombang 1. Ini aturan mutlak, bukan pedoman, sehingga pelanggarannya membatalkan penghitungan, bukan menuntut penyesuaian label. Godaan terbesar analis Elliott adalah memaksakan hitungan agar sesuai keinginan. Pengecualiannya hanya pada diagonal, yang memang mengizinkan tumpang tindih, dan itu pun harus dinyatakan sejak awal."},

{id:"cta-ew-h02",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Gelombang 1 naik 300 poin, gelombang 2 retrace 60 persen, dan gelombang 3 diperkirakan 161,8 persen dari gelombang 1. Bila gelombang 1 bermula dari 1.000, di mana kira-kira target gelombang 3 berakhir?",
 options:["Sekitar 1.300","Sekitar 1.605","Sekitar 1.485","Sekitar 1.785"],
 answer:1,
 explain:"Gelombang 1 berakhir di 1.300. Gelombang 2 retrace 60 persen dari 300 poin, yaitu 180 poin, sehingga berakhir di 1.120. Gelombang 3 diproyeksikan 161,8 persen dari 300 poin, yaitu 485 poin, dihitung dari akhir gelombang 2, sehingga 1.120 ditambah 485 sama dengan 1.605. Kekeliruan yang lazim: memproyeksikan dari akhir gelombang 1, bukan dari akhir gelombang 2."},

{id:"cta-ew-h03",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Analis mengamati gelombang 2 berbentuk zigzag tajam. Berdasarkan pedoman alternation, bentuk apa yang paling mungkin diambil gelombang 4, dan mengapa itu berguna?",
 options:["Impulse lima gelombang, sehingga strukturnya dapat dihitung sebagai derajat lebih kecil","Segitiga melebar, sehingga volatilitasnya dapat diperkirakan meningkat tajam","Mendatar atau segitiga, sehingga analis dapat mengantisipasi koreksi yang lebih lama namun lebih dangkal","Zigzag tajam juga, sehingga kedalaman koreksinya dapat diperkirakan setara gelombang 2"],
 answer:2,
 explain:"Alternation menyatakan gelombang 2 dan 4 cenderung berbeda karakter. Bila gelombang 2 tajam dan dalam, gelombang 4 cenderung mendatar dan memakan waktu. Nilai praktisnya besar: analis yang menunggu koreksi tajam di gelombang 4 sering keluar terlalu dini atau menunggu harga yang tidak pernah datang, padahal yang terjadi adalah konsolidasi menyamping."},

{id:"cta-ew-h04",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Harga mencetak puncak baru pada gelombang 5, tetapi volumenya jauh lebih kecil daripada gelombang 3 dan momentumnya melemah. Bagaimana analis sebaiknya menyikapi kombinasi ini?",
 options:["Menambah posisi, karena puncak baru mengonfirmasi tren yang masih berlangsung","Membalik posisi menjadi jual, karena divergensi volume memastikan pembalikan","Mengabaikannya, karena volume tidak relevan dalam kerangka Elliott Wave","Memperlakukannya sebagai tanda siklus mendekati akhir, dan mengencangkan pengendalian risiko"],
 answer:3,
 explain:"Gelombang 5 lazimnya didorong partisipasi yang lebih sempit dibanding gelombang 3, sehingga volume mengecil dan momentum melemah adalah gambaran normal menjelang akhir siklus. Yang tepat dilakukan bukan menebak titik balik, melainkan mengurangi risiko: kencangkan trailing stop, realisasikan sebagian. Membalik posisi terlalu dini pada gelombang 5 yang mengalami extension adalah cara klasik kehilangan uang."},

{id:"cta-ew-h05",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Dua analis menghasilkan penghitungan gelombang yang berbeda pada grafik yang sama, dan keduanya tidak melanggar aturan mutlak. Cara paling profesional menyikapi situasi ini adalah...",
 options:["Menyajikan keduanya sebagai skenario utama dan alternatif, masing-masing dengan level pembatalannya","Memilih penghitungan yang paling sesuai dengan pandangan fundamental atas instrumen itu","Menunggu sampai struktur selesai terbentuk sebelum menerbitkan analisis apa pun","Menggabungkan kedua penghitungan menjadi satu skenario kompromi di tengah keduanya"],
 answer:0,
 explain:"Kritik terkuat terhadap Elliott Wave adalah sifatnya yang mudah direvisi setelah fakta. Penangkalnya bukan memilih hitungan yang paling disukai, melainkan menyatakan skenario alternatif berikut harga yang membatalkan masing-masing. Dengan begitu teori ini berubah dari narasi menjadi alat yang risikonya dapat dikelola, dan pembaca tahu persis kapan analisisnya terbukti keliru."},

{id:"cta-ew-h06",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Gelombang B pada sebuah koreksi melampaui titik awal gelombang A, lalu gelombang C turun lebih dalam daripada akhir gelombang A. Mengapa struktur ini sering menjebak pelaku pasar?",
 options:["Gelombang A dan B memiliki panjang sama sehingga arah selanjutnya tidak dapat ditentukan","Gelombang B yang mencetak puncak baru tampak seperti kelanjutan tren naik, padahal koreksi belum selesai","Gelombang C yang lebih dalam tampak seperti tren turun baru, padahal hanya bagian dari koreksi","Struktur ini melanggar aturan mutlak sehingga penghitungannya pasti keliru sejak awal"],
 answer:1,
 explain:"Ini expanded flat. Karena gelombang B menembus puncak sebelumnya, banyak pelaku menyimpulkan tren naik berlanjut dan masuk tepat sebelum gelombang C menghantam turun lebih dalam dari akhir gelombang A. Pelajaran pentingnya: puncak baru tidak selalu berarti tren berlanjut, terutama bila struktur di bawahnya adalah tiga gelombang, bukan lima."}
]);
