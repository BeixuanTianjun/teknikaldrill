/* Studi kasus — format vignette: satu skenario, beberapa soal.
   Opsi sengaja disusun sepanjang kunci jawabannya dan semuanya masuk akal,
   sehingga tidak bisa ditebak dari bentuk opsi. */
TD.registerCases([
{id:"case-01", title:"Menyusun ukuran posisi pada saham yang mendekati support",
 brief:"Seorang analis memegang mandat kelolaan dan menemukan PT Sentosa Baja (SEBA) menguji kembali area support yang sudah tiga kali bertahan. Ia ingin masuk di harga berjalan dengan stop di bawah support, lalu menargetkan resistance mayor di atasnya. Volatilitas saham ini sedang meningkat menjelang rilis laporan keuangan kuartalan.",
 facts:[["Modal kelolaan","Rp250.000.000"],["Batas risiko per transaksi","1,5% dari modal"],
        ["Harga berjalan","Rp4.250"],["Support (3x diuji)","Rp4.000"],
        ["Resistance mayor","Rp4.800"],["ATR(14)","Rp120"],
        ["Rata-rata volume harian","2,4 juta lembar"]]},

{id:"case-02", title:"Sinyal yang saling bertentangan antar timeframe",
 brief:"PT Arta Niaga (ARTN) berada dalam tren naik mingguan yang sudah berjalan sebelas bulan dan harganya kini menyentuh kembali puncak tertinggi dua tahun lalu. Pada grafik harian, oscillator berada di area jenuh beli dan kenaikan enam sesi terakhir berlangsung dengan volume yang terus menyusut. MA50 harian masih menanjak dan harga belum pernah menutup di bawahnya sejak empat bulan terakhir.",
 facts:[["Tren mingguan","Naik, higher high dan higher low utuh"],["RSI(14) harian","78"],
        ["Posisi harga","Menyentuh resistance historis 2 tahun"],
        ["Volume 6 sesi terakhir","Menyusut rata-rata 22% per sesi"],
        ["MA50 harian","Menanjak, harga 7% di atasnya"],
        ["Posisi terkini","Sudah untung 34%, belum direalisasikan"]]},

{id:"case-03", title:"Risiko tersembunyi pada portofolio yang tampak terdiversifikasi",
 brief:"Sebuah portofolio berisi lima posisi terbuka, masing-masing dibatasi risiko 1,2% dari ekuitas hingga level stop. Di atas kertas total risikonya 6%. Namun kelima saham berasal dari sektor perbankan dan korelasi imbal hasil harian antar keduanya rata-rata 0,85 selama setahun terakhir. Portofolio sedang mengalami penurunan dari puncak ekuitasnya.",
 facts:[["Ekuitas awal","Rp1.000.000.000"],["Jumlah posisi","5, seluruhnya sektor perbankan"],
        ["Risiko per posisi","1,2% ekuitas"],["Total heat di atas kertas","6,0%"],
        ["Korelasi rata-rata antar posisi","0,85"],
        ["Drawdown berjalan","28% dari puncak ekuitas"]]},

{id:"case-04", title:"Membaca hasil backtest sebuah sistem",
 brief:"Seorang pengembang sistem menyodorkan hasil pengujian strategi mengikuti tren pada satu saham berkapitalisasi besar. Ia mengoptimalkan enam parameter pada data 2019 sampai 2023 dan melaporkan kombinasi terbaik. Kurva ekuitasnya nyaris lurus menanjak, dan ia meminta dana dikelola dengan sistem tersebut mulai bulan depan.",
 facts:[["Periode uji","Januari 2019 – Desember 2023"],["Jumlah transaksi","41"],
        ["Win rate","71%"],["Profit factor","4,6"],["Maximum drawdown","4,1%"],
        ["Jumlah parameter dioptimalkan","6"],["Pengujian di luar sampel","Belum dilakukan"],
        ["Biaya dan slippage","Belum diperhitungkan"]]},

{id:"case-05", title:"Pergeseran antar pasar dan dampaknya ke sektor",
 brief:"Dalam empat bulan terakhir imbal hasil obligasi pemerintah tenor 10 tahun naik tajam, rupiah melemah terhadap dolar, dan indeks harga komoditas energi menguat. Di pasar saham, indeks sektor perbankan tertinggal dari indeks komposit sementara sektor energi memimpin. Advance decline line indeks komposit mendatar meski indeksnya sendiri mencetak level tertinggi baru.",
 facts:[["Imbal hasil SUN 10 tahun","6,2% → 7,4%"],["Kurs rupiah","Melemah 8% terhadap dolar"],
        ["Indeks energi","+19% dalam 4 bulan"],["Indeks perbankan","−6% dalam 4 bulan"],
        ["Indeks komposit","Mencetak tertinggi baru"],
        ["Advance decline line","Mendatar, tidak ikut mencetak tertinggi baru"]]},

{id:"case-06", title:"Benturan kepentingan menjelang penerbitan riset",
 brief:"Seorang analis teknikal di perusahaan sekuritas menyiapkan riset dengan rekomendasi beli atas sebuah saham. Ia sudah memegang saham tersebut di rekening pribadinya sejak dua bulan lalu. Kepala divisi memintanya mempercepat penerbitan karena divisi perantara sedang mendorong saham itu ke nasabah ritel, dan meminta bagian risiko penurunan dihapus agar risetnya terbaca lebih meyakinkan.",
 facts:[["Posisi pribadi analis","Ada, dibeli 2 bulan lalu"],
        ["Permintaan atasan","Percepat terbit, hapus bagian risiko"],
        ["Kepentingan divisi lain","Mendorong saham ke nasabah ritel"],
        ["Status pengungkapan","Belum ada dalam draf riset"],
        ["Skenario pembatalan","Sudah dirumuskan analis, ada di draf"]]}
]);

TD.register([
/* ===== case-01: hitungan berlapis ===== */
{id:"case-01-q1",caseId:"case-01",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Analis menempatkan stop di Rp3.950, tepat di bawah support. Berapa jumlah lembar maksimum yang boleh dibeli agar batas risiko per transaksi tidak terlampaui?",
 options:["12.500 lembar","15.625 lembar","18.750 lembar","10.000 lembar"],
 answer:0,
 explain:"Batas risiko rupiah adalah 1,5% dari Rp250.000.000, yaitu Rp3.750.000. Risiko per lembar adalah harga masuk dikurangi stop, yaitu Rp4.250 dikurangi Rp3.950 sama dengan Rp300. Rp3.750.000 dibagi Rp300 menghasilkan 12.500 lembar. Pilihan 15.625 lembar adalah hasil bila stop dipasang 2 kali ATR, dan 18.750 lembar muncul bila risiko per lembar keliru dihitung Rp200."},

{id:"case-01-q2",caseId:"case-01",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Dengan entry Rp4.250, stop Rp3.950, dan target di resistance mayor, berapa rasio risiko terhadap imbal hasil transaksi ini?",
 options:["Sekitar 1 banding 1,4","Sekitar 1 banding 1,8","Sekitar 1 banding 2,3","Sekitar 1 banding 2,7"],
 answer:1,
 explain:"Risiko adalah Rp4.250 dikurangi Rp3.950 sama dengan Rp300 per lembar. Potensi imbal hasil adalah Rp4.800 dikurangi Rp4.250 sama dengan Rp550 per lembar. Rp550 dibagi Rp300 menghasilkan 1,83, jadi sekitar 1 banding 1,8. Angka 1 banding 2,3 muncul bila stop dihitung dari 2 kali ATR, bukan dari level support."},

{id:"case-01-q3",caseId:"case-01",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Analis mempertimbangkan memakai stop 2 kali ATR dari harga masuk menggantikan stop di bawah support. Konsekuensi paling tepat dari pergantian itu adalah...",
 options:["Stop menjadi Rp3.890, ukuran posisi naik menjadi 15.625 lembar, dan rasio imbal hasil tetap di 1 banding 1,8","Stop menjadi Rp4.010, ukuran posisi tetap 12.500 lembar, dan rasio imbal hasil tidak berubah","Stop menjadi Rp4.010, ukuran posisi naik menjadi 15.625 lembar, dan rasio imbal hasil membaik menjadi sekitar 1 banding 2,3","Stop menjadi Rp4.010, ukuran posisi turun menjadi 10.000 lembar, dan rasio imbal hasil memburuk menjadi sekitar 1 banding 1,5"],
 answer:2,
 explain:"Dua kali ATR sama dengan Rp240, sehingga stop berada di Rp4.250 dikurangi Rp240 yaitu Rp4.010. Risiko per lembar mengecil menjadi Rp240, sehingga Rp3.750.000 dibagi Rp240 menghasilkan 15.625 lembar, dan rasio menjadi Rp550 dibagi Rp240 yaitu 2,29. Perlu dicatat, stop yang lebih rapat ini berada di atas support sehingga lebih mudah tersentuh oleh fluktuasi normal."},

{id:"case-01-q4",caseId:"case-01",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Ukuran posisi 12.500 lembar setara sekitar Rp53 juta nilai transaksi. Terhadap rata-rata volume harian saham ini, pertimbangan yang paling relevan adalah...",
 options:["Volume harian tidak relevan selama stop loss sudah ditetapkan","Posisi perlu dipecah karena melebihi 10% volume harian saham","Nilai posisi terlalu besar sehingga eksekusinya pasti menggerakkan harga","Posisi setara sekitar 0,5% volume harian sehingga likuiditasnya memadai"],
 answer:3,
 explain:"12.500 lembar dibandingkan rata-rata 2,4 juta lembar per hari setara sekitar 0,52% volume harian, jauh di bawah ambang kehati-hatian yang lazim dipakai yaitu sekitar 5 sampai 10%. Likuiditas pada level ini memadai, artinya stop loss masih bisa dieksekusi tanpa merusak harga sendiri. Justru pada posisi yang mendekati atau melebihi ambang itulah stop loss kehilangan maknanya."},

/* ===== case-02: menimbang sinyal yang bertentangan ===== */
{id:"case-02-q1",caseId:"case-02",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"RSI harian berada di 78. Pembacaan yang paling tepat dalam konteks kasus ini adalah...",
 options:["Tanda kekuatan tren, karena pada tren kuat RSI memang dapat bertahan di zona jenuh beli","Sinyal netral, karena RSI tidak berlaku pada saham yang sedang menyentuh resistance","Sinyal beli tambahan, karena momentum sedang berada di titik terkuatnya","Sinyal jual, karena RSI di atas 70 menandakan harga sudah terlalu mahal"],
 answer:0,
 explain:"Pada tren naik yang kuat, oscillator dapat bertahan di zona jenuh beli dalam waktu lama, sehingga menjual semata-mata karena RSI melewati 70 berarti melawan tren utama yang masih utuh. Yang lebih layak dijadikan pemicu adalah divergensi atau kerusakan struktur harga. Namun RSI 78 tetap menandakan posisi harga sudah jauh terentang, yang relevan untuk menakar ukuran posisi."},

{id:"case-02-q2",caseId:"case-02",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Unsur mana dari kasus ini yang paling layak diperlakukan sebagai peringatan, bukan sekadar catatan?",
 options:["Tren mingguan sudah berjalan sebelas bulan tanpa jeda berarti","Volume terus menyusut selama enam sesi kenaikan terakhir","Posisi sudah untung 34% dan belum direalisasikan sama sekali","Harga berada 7% di atas MA50 harian yang masih menanjak"],
 answer:1,
 explain:"Pada tren naik yang sehat, volume membesar searah tren. Kenaikan yang berlangsung dengan volume terus menipis menandakan partisipasi berkurang, sehingga kenaikan ditopang makin sedikit pembeli. Jarak terhadap MA50 dan usia tren adalah konteks yang berguna tetapi bukan sinyal, sedangkan besarnya keuntungan yang belum direalisasikan adalah fakta tentang posisi, bukan tentang pasar."},

{id:"case-02-q3",caseId:"case-02",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Tindakan yang paling konsisten dengan seluruh bukti pada kasus ini adalah...",
 options:["Menutup seluruh posisi sekarang karena harga menyentuh resistance dua tahun","Menambah posisi karena tren mingguan masih utuh dan MA50 masih menanjak","Mengunci sebagian keuntungan dan menaikkan trailing stop, sambil membiarkan sisanya mengikuti tren","Menahan seluruh posisi tanpa perubahan sampai tren mingguan benar-benar berbalik"],
 answer:2,
 explain:"Buktinya bercampur: tren utama masih utuh, tetapi ada resistance historis dan partisipasi yang menipis. Menutup semuanya mengabaikan tren yang masih berlaku, sedangkan menambah posisi mengabaikan peringatan volume. Merealisasikan sebagian dan mengencangkan trailing stop menyesuaikan besar risiko terhadap kondisi tanpa harus menebak titik balik."},

{id:"case-02-q4",caseId:"case-02",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Bila pada sesi berikutnya harga menembus resistance dua tahun itu dan menutup di atasnya dengan volume dua kali rata-rata, pembacaan yang paling tepat adalah...",
 options:["Sinyal untuk menutup posisi, karena harga sudah mencapai target historisnya","Tidak bermakna sampai harga bertahan di atas level itu selama satu bulan penuh","Penembusan palsu, karena volume besar di resistance biasanya menandakan distribusi","Penembusan yang sah, dan bekas resistance itu menjadi kandidat support pada pengujian ulang"],
 answer:3,
 explain:"Penutupan di atas level disertai volume dua kali rata-rata justru menjawab kekhawatiran utama pada kasus ini, yaitu menipisnya partisipasi. Sesuai prinsip role reversal, bekas resistance berpeluang berperan sebagai support saat diuji ulang, dan level itu menjadi acuan pembatalan skenario yang logis. Menunggu satu bulan penuh bukan syarat baku dan membuang sebagian besar pergerakan."},

/* ===== case-03: risiko portofolio ===== */
{id:"case-03-q1",caseId:"case-03",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Dengan korelasi antar posisi 0,85, pernyataan paling tepat mengenai total heat 6% pada portofolio ini adalah...",
 options:["Meremehkan risiko sebenarnya, karena posisi berkorelasi tinggi berperilaku mendekati satu taruhan besar","Melebih-lebihkan risiko, karena lima posisi tetap lebih aman daripada satu posisi tunggal","Tidak dapat dinilai tanpa mengetahui volatilitas masing-masing saham terlebih dahulu","Tetap 6%, karena batas risiko sudah dihitung per posisi hingga level stop"],
 answer:0,
 explain:"Batas risiko per posisi hanya berlaku bila posisi bergerak independen. Pada korelasi 0,85, guncangan sektor perbankan akan menyentuh kelima stop hampir bersamaan, sehingga portofolio secara efektif menanggung satu taruhan besar mendekati 6% sekaligus, bukan lima risiko kecil yang tersebar. Karena itu batas risiko perlu ditetapkan di level portofolio, bukan hanya per transaksi."},

{id:"case-03-q2",caseId:"case-03",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Portofolio sedang turun 28% dari puncak ekuitasnya. Berapa kenaikan yang dibutuhkan dari posisi sekarang untuk kembali ke puncak semula?",
 options:["Sekitar 33%","Sekitar 39%","Sekitar 45%","Sekitar 28%"],
 answer:1,
 explain:"Ekuitas 100 yang turun 28% menjadi 72. Untuk kembali ke 100 dibutuhkan kenaikan 28 poin dari basis 72, yaitu 28 dibagi 72 sama dengan 38,9%, jadi sekitar 39%. Asimetri inilah alasan pengendalian drawdown lebih menentukan kelangsungan portofolio daripada mengejar imbal hasil tinggi."},

{id:"case-03-q3",caseId:"case-03",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Langkah perbaikan struktural yang paling tepat untuk portofolio ini adalah...",
 options:["Mengganti seluruh posisi perbankan dengan saham sektor yang sedang memimpin pasar","Menambah jumlah posisi menjadi sepuluh saham agar risikonya lebih tersebar","Menetapkan batas eksposur per sektor dan mengisi sisanya dengan aset berkorelasi rendah","Memperkecil risiko per posisi menjadi 0,6% sambil mempertahankan komposisi sektornya"],
 answer:2,
 explain:"Masalahnya bukan jumlah posisi melainkan kesamaan sumber risikonya, sehingga menambah saham dari sektor yang sama tidak menolong. Memperkecil risiko per posisi memang menurunkan besaran kerugian tetapi tidak menghapus konsentrasinya. Batas eksposur per sektor menyerang akar masalahnya, dan diversifikasi baru bermakna bila aset penggantinya benar-benar punya korelasi rendah."},

{id:"case-03-q4",caseId:"case-03",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Mengenai korelasi 0,85 yang terukur selama setahun terakhir, kewaspadaan tambahan yang perlu disadari adalah...",
 options:["Korelasi historis bersifat tetap sehingga angkanya dapat dipakai tanpa peninjauan ulang","Korelasi hanya relevan bagi portofolio lintas kelas aset, bukan antar saham satu sektor","Korelasi cenderung turun saat pasar jatuh sehingga risikonya akan mengecil sendiri","Korelasi cenderung naik mendekati satu saat krisis, tepat ketika diversifikasi paling dibutuhkan"],
 answer:3,
 explain:"Pada fase panik, pelaku pasar menjual apa saja yang bisa dijual sehingga hampir seluruh aset berisiko turun bersamaan dan korelasi bergerak mendekati satu. Manfaat diversifikasi justru menyusut ketika paling dibutuhkan. Karena itu perencanaan risiko perlu memakai skenario korelasi ekstrem, bukan korelasi rata-rata, dan angkanya ditinjau berkala dengan jendela bergulir."},

/* ===== case-04: membaca backtest ===== */
{id:"case-04-q1",caseId:"case-04",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Dari seluruh angka yang dilaporkan, kombinasi yang paling kuat menandakan hasilnya belum dapat dipercaya adalah...",
 options:["Enam parameter dioptimalkan, hanya 41 transaksi, dan tanpa pengujian di luar sampel","Maximum drawdown 4,1% yang terlalu kecil untuk periode uji selama lima tahun","Periode uji 2019 sampai 2023 yang terlalu pendek untuk menilai sebuah sistem","Win rate 71% dan profit factor 4,6 yang terlalu tinggi untuk strategi mengikuti tren"],
 answer:0,
 explain:"Banyaknya parameter yang disetel pada sampel kecil membuat sistem sangat mudah dicocokkan pada kebetulan dalam data, dan 41 transaksi jauh dari cukup untuk menyimpulkan apa pun secara statistik. Tanpa pengujian di luar sampel, tidak ada bukti sistem bekerja pada data yang belum pernah dilihatnya. Angka win rate, profit factor, dan drawdown memang mencurigakan, tetapi ketiganya adalah gejala dari sebab yang disebut pada pilihan ini."},

{id:"case-04-q2",caseId:"case-04",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Pengujian tambahan yang paling tepat diminta sebelum sistem ini dijalankan dengan dana nyata adalah...",
 options:["Menjalankan ulang optimasi pada rentang parameter yang lebih lebar","Walk forward pada data yang disisihkan, ditambah uji sensitivitas parameter","Menambah indikator konfirmasi agar sinyal palsunya berkurang","Memperpanjang periode uji ke belakang sampai sepuluh tahun penuh"],
 answer:1,
 explain:"Walk forward mensimulasikan cara sistem benar-benar dijalankan: dioptimalkan pada data masa lalu lalu diuji pada data yang belum dikenal. Uji sensitivitas memastikan kinerjanya bertahan pada rentang nilai parameter di sekitarnya, bukan hanya pada satu titik optimal. Mengulang optimasi justru memperparah pencocokan, dan menambah indikator menambah parameter sehingga memperbesar masalah yang sama."},

{id:"case-04-q3",caseId:"case-04",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Kurva ekuitas yang nyaris lurus menanjak pada hasil uji ini paling tepat dinilai sebagai...",
 options:["Konsekuensi normal dari periode uji yang kebetulan berada dalam pasar naik","Bukti kualitas sistem, karena drawdown-nya berhasil ditekan sangat kecil","Tanda bahaya, karena strategi nyata selalu melewati periode sulit yang terlihat di kurvanya","Hal wajar pada strategi mengikuti tren yang dijalankan pada satu saham saja"],
 answer:2,
 explain:"Setiap strategi nyata melewati periode ketika pasar tidak cocok dengan logikanya, dan itu tampak sebagai drawdown pada kurva ekuitas. Kurva yang terlalu mulus umumnya berasal dari kebocoran data, asumsi eksekusi yang mustahil, atau pencocokan parameter yang berlebihan. Pemeriksaan ulang biasanya menemukan salah satu dari ketiganya sebelum menemukan sistem yang benar-benar unggul."},

{id:"case-04-q4",caseId:"case-04",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Biaya dan slippage belum diperhitungkan dalam pengujian. Dampak paling mungkin setelah keduanya dimasukkan adalah...",
 options:["Tidak berpengaruh, karena strategi mengikuti tren hanya menghasilkan sedikit transaksi","Hasilnya justru membaik, karena slippage dapat bekerja ke arah yang menguntungkan","Profit factor turun sedikit tetapi peringkat sistem terhadap tolok ukur tidak berubah","Kinerja tergerus, dan besarnya gerusan bergantung pada frekuensi transaksi serta likuiditas instrumen"],
 answer:3,
 explain:"Biaya menggerus setiap transaksi, sehingga dampaknya berbanding lurus dengan frekuensi transaksi dan dengan seberapa jauh harga eksekusi menyimpang dari harga sinyal. Sistem berfrekuensi tinggi pada instrumen tipis paling rentan. Dengan hanya 41 transaksi dampaknya mungkin tidak menghancurkan, tetapi hal itu baru bisa dinyatakan setelah dihitung, bukan diasumsikan."},

/* ===== case-05: intermarket ===== */
{id:"case-05-q1",caseId:"case-05",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Indeks komposit mencetak tertinggi baru sementara advance decline line mendatar. Pembacaan yang paling tepat adalah...",
 options:["Kenaikan indeks ditopang makin sedikit saham, sehingga fondasinya menyempit","Advance decline line memang tertinggal dan biasanya menyusul dalam beberapa sesi","Indeks sedang mengalami penembusan sehat yang khas pada awal tren naik baru","Perbedaan itu hanya menandakan data breadth belum diperbarui bursa"],
 answer:0,
 explain:"Advance decline line mengukur keluasan partisipasi, bukan besarnya pergerakan. Ketika indeks mencetak rekor tanpa dukungan breadth, kenaikan itu ditopang segelintir saham, biasanya yang berkapitalisasi besar. Divergensi semacam ini sering muncul berbulan-bulan sebelum puncak pasar, sehingga berguna untuk menakar eksposur, bukan untuk menentukan waktu keluar."},

{id:"case-05-q2",caseId:"case-05",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Imbal hasil SUN 10 tahun naik dari 6,2% ke 7,4%. Yang terjadi pada harga obligasi tersebut dan pada indeks perbankan berturut-turut adalah...",
 options:["Harga obligasi naik, dan perbankan tertekan karena biaya dananya ikut naik","Harga obligasi turun, dan perbankan tertekan antara lain karena portofolio suratnya merugi","Harga obligasi turun, dan perbankan justru diuntungkan karena marginnya otomatis melebar","Harga obligasi tetap, karena kupon obligasi pemerintah bersifat tetap sampai jatuh tempo"],
 answer:1,
 explain:"Harga obligasi dan imbal hasilnya berbanding terbalik, sehingga imbal hasil yang naik berarti harga turun. Bank memegang surat berharga dalam jumlah besar sehingga nilainya tergerus, ditambah biaya dana yang meningkat dan risiko kredit yang naik. Kurva yang curam memang dapat melebarkan margin bunga bersih, tetapi itu tidak otomatis dan tidak berlaku saat kenaikan imbal hasil didorong tekanan inflasi dan pelemahan mata uang."},

{id:"case-05-q3",caseId:"case-05",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Pola lintas pasar pada kasus ini paling konsisten dengan lingkungan...",
 options:["Akhir resesi, ketika sektor defensif biasanya memimpin pergerakan pasar","Deflasi dengan pertumbuhan melambat, yang biasanya menguntungkan obligasi","Inflasioner dengan tekanan pada mata uang, yang menguntungkan sektor berbasis komoditas","Pemulihan awal siklus, yang biasanya dipimpin sektor siklikal dan perbankan"],
 answer:2,
 explain:"Kombinasi imbal hasil yang naik, mata uang yang melemah, dan harga energi yang menguat adalah ciri khas tekanan inflasi. Dalam kerangka intermarket, kenaikan komoditas mendorong ekspektasi inflasi yang menaikkan imbal hasil dan menekan harga obligasi. Kepemimpinan sektor energi di atas perbankan konsisten dengan pembacaan itu, sedangkan pemulihan awal siklus biasanya justru mengangkat perbankan."},

{id:"case-05-q4",caseId:"case-05",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Bagi pengelola portofolio saham, penggunaan informasi lintas pasar ini yang paling tepat adalah...",
 options:["Membeli obligasi pemerintah tenor panjang karena imbal hasilnya kini jauh lebih menarik","Mengabaikannya karena analisis teknikal saham tidak berurusan dengan pasar obligasi","Menjual seluruh saham dan berpindah ke kas sampai imbal hasil obligasi berhenti naik","Mengatur bobot sektor dan besar eksposur, sementara waktu masuk keluar tetap mengikuti sinyal harga"],
 answer:3,
 explain:"Breadth, sentimen, dan hubungan antar pasar menjawab pertanyaan seberapa besar risiko yang pantas diambil dan di sektor mana, bukan kapan persisnya masuk atau keluar. Jeda antara sinyal makro dan dampaknya pada harga bisa sangat panjang, sehingga memakainya sebagai pemicu waktu justru merugikan. Titik masuk dan level pembatalan tetap ditentukan struktur harga instrumen yang ditransaksikan."},

/* ===== case-06: etika ===== */
{id:"case-06-q1",caseId:"case-06",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Mengenai kepemilikan pribadi analis atas saham yang direkomendasikan, ketentuan yang berlaku adalah...",
 options:["Wajib diungkapkan dalam riset, karena pembaca berhak menilai independensi analisisnya","Dilarang sepenuhnya, sehingga analis harus menjual posisinya sebelum riset diterbitkan","Cukup dilaporkan kepada atasan, tanpa perlu dicantumkan dalam dokumen risetnya","Diperbolehkan tanpa syarat selama analis tidak menjual saat riset terbit"],
 answer:0,
 explain:"Standar kode etik profesi mensyaratkan pengungkapan kepemilikan posisi dan hubungan bisnis yang dapat mempengaruhi objektivitas. Pengungkapan itu ditujukan kepada pembaca, bukan hanya kepada atasan, karena pembacalah yang memakai riset tersebut untuk mengambil keputusan. Memiliki posisi tidak otomatis dilarang, yang dilarang adalah menyembunyikannya."},

{id:"case-06-q2",caseId:"case-06",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Permintaan atasan untuk menghapus bagian risiko penurunan paling tepat disikapi dengan...",
 options:["Menurutinya karena keputusan penerbitan riset berada di tangan kepala divisi","Menolak menghapusnya, karena riset tanpa level pembatalan skenario tidak dapat ditindaklanjuti pembaca","Menghapusnya dari riset ritel tetapi mempertahankannya pada versi untuk nasabah institusi","Menggantinya dengan disclaimer umum yang menyatakan semua investasi mengandung risiko"],
 answer:1,
 explain:"Tanpa level pembatalan skenario, pembaca tidak tahu kapan analisis dinyatakan keliru dan kapan harus keluar, sehingga rekomendasinya tidak dapat dieksekusi secara terukur. Disclaimer umum tidak menggantikan informasi spesifik itu. Menyajikan versi berbeda kepada kelompok pembaca berbeda justru menambah pelanggaran baru berupa perlakuan yang tidak setara."},

{id:"case-06-q3",caseId:"case-06",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Unsur mana dari kasus ini yang paling berpotensi dinilai sebagai indikasi manipulasi pasar, bukan sekadar pelanggaran etika internal?",
 options:["Analis memiliki posisi pribadi pada saham yang ia analisis","Riset dipercepat penerbitannya untuk mengejar tenggat divisi lain","Rekomendasi diterbitkan untuk mendorong harga demi kepentingan posisi pihak sendiri","Bagian risiko penurunan dihapus sehingga riset terbaca lebih meyakinkan"],
 answer:2,
 explain:"Menyebarkan rekomendasi yang dirancang untuk menggerakkan harga demi keuntungan posisi sendiri atau pihak terafiliasi termasuk kategori manipulasi pasar yang dilarang peraturan pasar modal, dengan ancaman sanksi administratif hingga pidana. Kepemilikan posisi yang diungkapkan, percepatan tenggat, dan penghapusan bagian risiko adalah pelanggaran serius pada tataran etika dan kualitas riset, tetapi tidak dengan sendirinya berarti manipulasi."},

{id:"case-06-q4",caseId:"case-06",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Bila analis tetap berkeyakinan rekomendasi belinya benar, langkah yang paling tepat adalah...",
 options:["Menunda penerbitan sampai ia menjual seluruh posisi pribadinya terlebih dahulu","Menerbitkan riset tanpa nama agar benturan kepentingannya menjadi tidak relevan","Menyerahkan penulisan kepada analis lain agar risetnya terbebas dari benturan kepentingan","Menerbitkan riset lengkap dengan pengungkapan posisi, level pembatalan, dan horizon waktunya"],
 answer:3,
 explain:"Keyakinan analis tidak perlu dikorbankan, yang wajib adalah transparansinya. Riset yang memuat pengungkapan posisi, level pembatalan skenario, dan horizon waktu memenuhi standar profesi sekaligus menjaga independensi kesimpulan. Menerbitkan tanpa nama tidak menghapus benturan kepentingan, dan mengalihkan penulisan tidak mengatasi masalah bila kepentingan divisinya tetap sama."}
]);
