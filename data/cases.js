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
 explain:"Itung pelan-pelan. Risiko rupiah = 1,5% x 250 juta = Rp3.750.000. Risiko per lembar = 4.250 (entry) dikurangi 3.950 (stop) = Rp300. Jumlah lembar = 3.750.000 dibagi 300 = 12.500 lembar, alias 125 lot. Cek ulang: 12.500 x 300 = 3,75 juta. Pas. Perhatiin urutannya, karena ini yang paling sering kebalik: stop ditentuin DULUAN dari struktur chart (di bawah support 4.000), baru jumlah lembar ngikut hasil bagi. Bukan nentuin mau beli berapa lot dulu terus nyari stop yang enak."},

{id:"case-01-q2",caseId:"case-01",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Dengan entry Rp4.250, stop Rp3.950, dan target di resistance mayor, berapa rasio risiko terhadap imbal hasil transaksi ini?",
 options:["Sekitar 1 banding 1,4","Sekitar 1 banding 1,8","Sekitar 1 banding 2,3","Sekitar 1 banding 2,7"],
 answer:1,
 explain:"Risiko = 4.250 - 3.950 = 300 poin. Potensi untung ke resistance mayor sekitar 540 poin. Rasio 300 banding 540 = sekitar 1 banding 1,8. Ini di bawah patokan ideal 1 banding 2, jadi transaksinya marginal. Pilihannya: tunggu harga lebih deket support biar risikonya mengecil, atau lewatin. Jangan maksain target lebih jauh cuma biar rasionya keliatan cakep di atas kertas."},

{id:"case-01-q3",caseId:"case-01",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Analis mempertimbangkan memakai stop 2 kali ATR dari harga masuk menggantikan stop di bawah support. Konsekuensi paling tepat dari pergantian itu adalah...",
 options:["Stop menjadi Rp3.890, ukuran posisi naik menjadi 15.625 lembar, dan rasio imbal hasil tetap di 1 banding 1,8","Stop menjadi Rp4.010, ukuran posisi tetap 12.500 lembar, dan rasio imbal hasil tidak berubah","Stop menjadi Rp4.010, ukuran posisi naik menjadi 15.625 lembar, dan rasio imbal hasil membaik menjadi sekitar 1 banding 2,3","Stop menjadi Rp4.010, ukuran posisi turun menjadi 10.000 lembar, dan rasio imbal hasil memburuk menjadi sekitar 1 banding 1,5"],
 answer:2,
 explain:"Stop 2x ATR jadi Rp4.010, lebih RAPAT dari stop support di 3.950. Jarak risiko turun dari 300 ke 240 poin. Efek berantainya: dengan risiko rupiah yang sama, ukuran posisi NAIK jadi 15.625 lembar, dan rasio return membaik jadi sekitar 1 banding 2,3. Kelihatan enak. Tapi ada ongkosnya yang harus lo sadar: stop lebih rapat artinya lebih gampang kesentuh sama goyangan normal."},

{id:"case-01-q4",caseId:"case-01",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Ukuran posisi 12.500 lembar setara sekitar Rp53 juta nilai transaksi. Terhadap rata-rata volume harian saham ini, pertimbangan yang paling relevan adalah...",
 options:["Volume harian tidak relevan selama stop loss sudah ditetapkan","Posisi perlu dipecah karena melebihi 10% volume harian saham","Nilai posisi terlalu besar sehingga eksekusinya pasti menggerakkan harga","Posisi setara sekitar 0,5% volume harian sehingga likuiditasnya memadai"],
 answer:3,
 explain:"Posisi Rp53 juta setara sekitar 0,5 persen volume harian. Itu aman banget. Patokan yang umum dipakai: maksimal 1-5 persen volume harian rata-rata. Kenapa penting? Karena stop loss lo nggak ada artinya kalau pas mau keluar order lo sendiri yang ndorong harga jatuh. Ini yang bikin strategi yang jalan di modal kecil bisa ambruk total di modal besar — bukan strateginya yang berubah, tapi dampak pasarnya."},

/* ===== case-02: menimbang sinyal yang bertentangan ===== */
{id:"case-02-q1",caseId:"case-02",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"RSI harian berada di 78. Pembacaan yang paling tepat dalam konteks kasus ini adalah...",
 options:["Tanda kekuatan tren, karena pada tren kuat RSI memang dapat bertahan di zona jenuh beli","Sinyal netral, karena RSI tidak berlaku pada saham yang sedang menyentuh resistance","Sinyal beli tambahan, karena momentum sedang berada di titik terkuatnya","Sinyal jual, karena RSI di atas 70 menandakan harga sudah terlalu mahal"],
 answer:0,
 explain:"RSI 78 itu overbought, dan naluri pertama orang adalah jual. Salah. Overbought artinya lagi KUAT, bukan kemahalan. Di tren yang bertenaga, RSI bisa nempel di atas 70 berminggu-minggu sambil harga terus naik. Wilder sendiri pakai 70 sebagai peringatan, bukan pemicu. Yang jual cuma karena angka RSI bakal ketinggalan semua tren besar sambil ngerasa disiplin."},

{id:"case-02-q2",caseId:"case-02",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Unsur mana dari kasus ini yang paling layak diperlakukan sebagai peringatan, bukan sekadar catatan?",
 options:["Tren mingguan sudah berjalan sebelas bulan tanpa jeda berarti","Volume terus menyusut selama enam sesi kenaikan terakhir","Posisi sudah untung 34% dan belum direalisasikan sama sekali","Harga berada 7% di atas MA50 harian yang masih menanjak"],
 answer:1,
 explain:"Dari semua unsur di kasus ini, yang paling layak jadi PERINGATAN: volume terus menyusut selama enam sesi kenaikan terakhir. Kenapa ini yang paling serius? Karena di tren naik yang sehat, volume mestinya membesar pas harga naik. Volume yang menyusut artinya makin sedikit yang mau beli di harga tinggi — pembelinya lagi habis. RSI 78 itu cuma catatan; volume yang mengering itu peringatan struktural."},

{id:"case-02-q3",caseId:"case-02",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Tindakan yang paling konsisten dengan seluruh bukti pada kasus ini adalah...",
 options:["Menutup seluruh posisi sekarang karena harga menyentuh resistance dua tahun","Menambah posisi karena tren mingguan masih utuh dan MA50 masih menanjak","Mengunci sebagian keuntungan dan menaikkan trailing stop, sambil membiarkan sisanya mengikuti tren","Menahan seluruh posisi tanpa perubahan sampai tren mingguan benar-benar berbalik"],
 answer:2,
 explain:"Tindakan yang konsisten sama SELURUH bukti: kunci sebagian untung dan naikin trailing stop, sambil biarin sisanya ngikutin tren. Kenapa nggak jual semua? Karena struktur harganya masih utuh dan trennya masih hidup. Kenapa nggak diem aja? Karena volume yang mengering itu peringatan nyata. Jawaban yang bener di situasi ambigu biasanya bukan hitam-putih, tapi nyesuaiin UKURAN RISIKO."},

{id:"case-02-q4",caseId:"case-02",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Bila pada sesi berikutnya harga menembus resistance dua tahun itu dan menutup di atasnya dengan volume dua kali rata-rata, pembacaan yang paling tepat adalah...",
 options:["Sinyal untuk menutup posisi, karena harga sudah mencapai target historisnya","Tidak bermakna sampai harga bertahan di atas level itu selama satu bulan penuh","Penembusan palsu, karena volume besar di resistance biasanya menandakan distribusi","Penembusan yang sah, dan bekas resistance itu menjadi kandidat support pada pengujian ulang"],
 answer:3,
 explain:"Nembus resistance dua tahun dengan volume DUA KALI rata-rata itu penembusan yang sah — volume-nya ngasih bukti partisipasi yang serius, beda dari enam sesi sebelumnya yang volumenya mengering. Dan yang berguna buat langkah berikutnya: bekas resistance itu jadi kandidat SUPPORT pas diuji ulang (role reversal). Itu ngasih lo titik masuk kedua dengan stop yang jelas."},

/* ===== case-03: risiko portofolio ===== */
{id:"case-03-q1",caseId:"case-03",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Dengan korelasi antar posisi 0,85, pernyataan paling tepat mengenai total heat 6% pada portofolio ini adalah...",
 options:["Meremehkan risiko sebenarnya, karena posisi berkorelasi tinggi berperilaku mendekati satu taruhan besar","Melebih-lebihkan risiko, karena lima posisi tetap lebih aman daripada satu posisi tunggal","Tidak dapat dinilai tanpa mengetahui volatilitas masing-masing saham terlebih dahulu","Tetap 6%, karena batas risiko sudah dihitung per posisi hingga level stop"],
 answer:0,
 explain:"Total heat 6 persen itu MEREMEHKAN risiko sebenarnya, karena korelasi 0,85 bikin posisi-posisi itu berperilaku mendekati SATU taruhan besar. Angka 6 persen cuma valid kalau tiap posisi saling bebas. Di korelasi setinggi ini, kemungkinan besar mereka kena stop di hari yang sama. Jadi lo sebenernya lagi bertaruh 6 persen di satu ide, bukan nyebar risiko ke beberapa ide."},

{id:"case-03-q2",caseId:"case-03",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Portofolio sedang turun 28% dari puncak ekuitasnya. Berapa kenaikan yang dibutuhkan dari posisi sekarang untuk kembali ke puncak semula?",
 options:["Sekitar 33%","Sekitar 39%","Sekitar 45%","Sekitar 28%"],
 answer:1,
 explain:"Turun 28 persen artinya dari 100 jadi 72. Buat balik ke 100, yang 72 harus naik 28, dan 28 dibagi 72 = 38,9 persen, dibulatin 39 persen. Perhatiin ketimpangannya: turun 28 butuh naik 39. Dan makin dalem makin timpang — turun 50 butuh naik 100, turun 70 butuh naik 233. Ini matematika yang ngejelasin kenapa nyegah drawdown dalam jauh lebih bernilai daripada ngejar return tinggi."},

{id:"case-03-q3",caseId:"case-03",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Langkah perbaikan struktural yang paling tepat untuk portofolio ini adalah...",
 options:["Mengganti seluruh posisi perbankan dengan saham sektor yang sedang memimpin pasar","Menambah jumlah posisi menjadi sepuluh saham agar risikonya lebih tersebar","Menetapkan batas eksposur per sektor dan mengisi sisanya dengan aset berkorelasi rendah","Memperkecil risiko per posisi menjadi 0,6% sambil mempertahankan komposisi sektornya"],
 answer:2,
 explain:"Perbaikan STRUKTURAL-nya: tetapin batas eksposur PER SEKTOR, terus isi sisanya dengan aset yang korelasinya rendah. Perhatiin kata struktural — ini aturan permanen, bukan tindakan sekali jalan. Sekadar jual beberapa posisi sekarang nggak nyelesain apa-apa kalau bulan depan lo numpuk lagi di sektor yang sama. Yang dibenerin prosedurnya, bukan portofolionya hari ini."},

{id:"case-03-q4",caseId:"case-03",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Mengenai korelasi 0,85 yang terukur selama setahun terakhir, kewaspadaan tambahan yang perlu disadari adalah...",
 options:["Korelasi historis bersifat tetap sehingga angkanya dapat dipakai tanpa peninjauan ulang","Korelasi hanya relevan bagi portofolio lintas kelas aset, bukan antar saham satu sektor","Korelasi cenderung turun saat pasar jatuh sehingga risikonya akan mengecil sendiri","Korelasi cenderung naik mendekati satu saat krisis, tepat ketika diversifikasi paling dibutuhkan"],
 answer:3,
 explain:"Kewaspadaan tambahan yang paling penting: korelasi cenderung NAIK mendekati satu pas krisis, tepat pas diversifikasi paling dibutuhkan. Jadi angka 0,85 yang lo ukur dari setahun tenang itu bisa jadi 0,97 pas panik. Penyebab mekanisnya jualan paksa dan margin call — orang jual apa aja yang bisa dijual, bukan yang pengen dijual. Rencanain pakai skenario korelasi ekstrem, bukan rata-rata."},

/* ===== case-04: membaca backtest ===== */
{id:"case-04-q1",caseId:"case-04",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Dari seluruh angka yang dilaporkan, kombinasi yang paling kuat menandakan hasilnya belum dapat dipercaya adalah...",
 options:["Enam parameter dioptimalkan, hanya 41 transaksi, dan tanpa pengujian di luar sampel","Maximum drawdown 4,1% yang terlalu kecil untuk periode uji selama lima tahun","Periode uji 2019 sampai 2023 yang terlalu pendek untuk menilai sebuah sistem","Win rate 71% dan profit factor 4,6 yang terlalu tinggi untuk strategi mengikuti tren"],
 answer:0,
 explain:"Kombinasi paling mematikan: ENAM parameter dioptimalkan, cuma 41 transaksi, dan TANPA uji di luar sampel. Tiga-tiganya saling nguatin ke arah yang buruk. Enam parameter artinya ruang pencarian luas banget, jadi gampang nemu kombinasi yang cocok sama noise. 41 transaksi terlalu sedikit buat dibedain dari hoki. Dan tanpa uji luar sampel, nggak ada cara tau mana yang mana. Ini resep overfitting yang sempurna."},

{id:"case-04-q2",caseId:"case-04",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Pengujian tambahan yang paling tepat diminta sebelum sistem ini dijalankan dengan dana nyata adalah...",
 options:["Menjalankan ulang optimasi pada rentang parameter yang lebih lebar","Walk forward pada data yang disisihkan, ditambah uji sensitivitas parameter","Menambah indikator konfirmasi agar sinyal palsunya berkurang","Memperpanjang periode uji ke belakang sampai sepuluh tahun penuh"],
 answer:1,
 explain:"Dua uji yang paling tepat diminta: WALK FORWARD pada data yang disisihkan, plus UJI SENSITIVITAS parameter. Walk forward niru cara lo beneran kerja — optimasi di masa lalu, uji di periode berikutnya yang belum disentuh. Uji sensitivitas ngecek apakah kinerjanya masih oke kalau parameter digeser sedikit. Kalau geser dikit langsung ambruk, itu bukti parameternya nempel di noise."},

{id:"case-04-q3",caseId:"case-04",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Kurva ekuitas yang nyaris lurus menanjak pada hasil uji ini paling tepat dinilai sebagai...",
 options:["Konsekuensi normal dari periode uji yang kebetulan berada dalam pasar naik","Bukti kualitas sistem, karena drawdown-nya berhasil ditekan sangat kecil","Tanda bahaya, karena strategi nyata selalu melewati periode sulit yang terlihat di kurvanya","Hal wajar pada strategi mengikuti tren yang dijalankan pada satu saham saja"],
 answer:2,
 explain:"Kurva ekuitas nyaris lurus menanjak itu TANDA BAHAYA, bukan tanda bagus. Pasar nyata itu berantakan, dan strategi yang jujur pasti ngelewatin periode sulit yang kelihatan di kurvanya. Kurva yang terlalu mulus biasanya berarti salah satu dari ini: overfitting, look ahead bias, biaya nggak dihitung, atau sistemnya punya skewness negatif yang risikonya belum muncul. Curigai kesempurnaan."},

{id:"case-04-q4",caseId:"case-04",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Biaya dan slippage belum diperhitungkan dalam pengujian. Dampak paling mungkin setelah keduanya dimasukkan adalah...",
 options:["Tidak berpengaruh, karena strategi mengikuti tren hanya menghasilkan sedikit transaksi","Hasilnya justru membaik, karena slippage dapat bekerja ke arah yang menguntungkan","Profit factor turun sedikit tetapi peringkat sistem terhadap tolok ukur tidak berubah","Kinerja tergerus, dan besarnya gerusan bergantung pada frekuensi transaksi serta likuiditas instrumen"],
 answer:3,
 explain:"Setelah biaya dan slippage dimasukin, kinerja pasti TERGERUS, dan besarnya gerusan tergantung dua hal: FREKUENSI transaksi dan LIKUIDITAS instrumennya. Sistem 20 transaksi setahun hampir nggak kerasa. Sistem 800 transaksi setahun bisa berubah dari untung 34 persen jadi rugi 6 persen. Makanya biaya harus dimasukin ke simulasi dari baris pertama ditulis, bukan diperkirakan belakangan."},

/* ===== case-05: intermarket ===== */
{id:"case-05-q1",caseId:"case-05",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Indeks komposit mencetak tertinggi baru sementara advance decline line mendatar. Pembacaan yang paling tepat adalah...",
 options:["Kenaikan indeks ditopang makin sedikit saham, sehingga fondasinya menyempit","Advance decline line memang tertinggal dan biasanya menyusul dalam beberapa sesi","Indeks sedang mengalami penembusan sehat yang khas pada awal tren naik baru","Perbedaan itu hanya menandakan data breadth belum diperbarui bursa"],
 answer:0,
 explain:"Indeks cetak tertinggi baru tapi AD line mendatar artinya kenaikannya ditopang MAKIN SEDIKIT saham — fondasinya menyempit. Indeks itu ditimbang kapitalisasi, jadi beberapa raksasa bisa narik indeks naik meski mayoritas sahamnya diem atau turun. AD line ngitung tiap saham setara, jadi dia mbongkar apa yang disembunyiin indeks. Ini peringatan struktural, tapi jedanya bisa berbulan-bulan."},

{id:"case-05-q2",caseId:"case-05",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Imbal hasil SUN 10 tahun naik dari 6,2% ke 7,4%. Yang terjadi pada harga obligasi tersebut dan pada indeks perbankan berturut-turut adalah...",
 options:["Harga obligasi naik, dan perbankan tertekan karena biaya dananya ikut naik","Harga obligasi turun, dan perbankan tertekan antara lain karena portofolio suratnya merugi","Harga obligasi turun, dan perbankan justru diuntungkan karena marginnya otomatis melebar","Harga obligasi tetap, karena kupon obligasi pemerintah bersifat tetap sampai jatuh tempo"],
 answer:1,
 explain:"Yield naik dari 6,2 ke 7,4 persen artinya HARGA obligasi TURUN — hubungan keduanya selalu berlawanan. Buat perbankan, ada dua pukulan. Pertama, bank pegang portofolio surat berharga yang nilainya ikut turun. Kedua, biaya dana naik. Yang sering dikira orang: yield naik pasti bagus buat bank karena bunga pinjaman naik. Itu cuma bener kalau kurvanya CURAM, bukan kalau naik merata."},

{id:"case-05-q3",caseId:"case-05",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Pola lintas pasar pada kasus ini paling konsisten dengan lingkungan...",
 options:["Akhir resesi, ketika sektor defensif biasanya memimpin pergerakan pasar","Deflasi dengan pertumbuhan melambat, yang biasanya menguntungkan obligasi","Inflasioner dengan tekanan pada mata uang, yang menguntungkan sektor berbasis komoditas","Pemulihan awal siklus, yang biasanya dipimpin sektor siklikal dan perbankan"],
 answer:2,
 explain:"Polanya konsisten sama lingkungan INFLASIONER dengan tekanan mata uang. Rantainya: komoditas naik, ekspektasi inflasi naik, yield naik, harga obligasi turun, dan mata uang tertekan karena inflasi impor. Yang diuntungkan: sektor berbasis komoditas, karena pendapatan mereka ikut naik sama harga. Yang tertekan: perbankan dan saham pertumbuhan yang valuasinya sensitif ke suku bunga."},

{id:"case-05-q4",caseId:"case-05",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Bagi pengelola portofolio saham, penggunaan informasi lintas pasar ini yang paling tepat adalah...",
 options:["Membeli obligasi pemerintah tenor panjang karena imbal hasilnya kini jauh lebih menarik","Mengabaikannya karena analisis teknikal saham tidak berurusan dengan pasar obligasi","Menjual seluruh saham dan berpindah ke kas sampai imbal hasil obligasi berhenti naik","Mengatur bobot sektor dan besar eksposur, sementara waktu masuk keluar tetap mengikuti sinyal harga"],
 answer:3,
 explain:"Ini prinsip paling penting soal analisis lintas pasar: dipakai buat ngatur BOBOT SEKTOR dan BESAR EKSPOSUR, sementara waktu masuk keluar tetep ngikutin sinyal HARGA. Informasi lintas pasar itu lapisan KONTEKS, bukan pemicu entry. Kesalahan yang umum: langsung jual bank dan borong komoditas hari itu juga. Konteks buat ngatur ukuran, harga buat ngatur waktu."},

/* ===== case-06: etika ===== */
{id:"case-06-q1",caseId:"case-06",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Mengenai kepemilikan pribadi analis atas saham yang direkomendasikan, ketentuan yang berlaku adalah...",
 options:["Wajib diungkapkan dalam riset, karena pembaca berhak menilai independensi analisisnya","Dilarang sepenuhnya, sehingga analis harus menjual posisinya sebelum riset diterbitkan","Cukup dilaporkan kepada atasan, tanpa perlu dicantumkan dalam dokumen risetnya","Diperbolehkan tanpa syarat selama analis tidak menjual saat riset terbit"],
 answer:0,
 explain:"Kepemilikan pribadi analis atas saham yang direkomendasiin itu WAJIB DIUNGKAPKAN di risetnya. Kode etik bergantung penuh ke KETERBUKAAN, bukan larangan punya. Boleh kok lo pegang, asal pembaca tau biar bisa nilai independensinya sendiri. Nyembunyiin itu pelanggaran berat, dan kalau ditambah niat gerakin harga, itu naik kelas jadi pidana. Satu baris disclosure itu murah banget dibanding risikonya."},

{id:"case-06-q2",caseId:"case-06",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Permintaan atasan untuk menghapus bagian risiko penurunan paling tepat disikapi dengan...",
 options:["Menurutinya karena keputusan penerbitan riset berada di tangan kepala divisi","Menolak menghapusnya, karena riset tanpa level pembatalan skenario tidak dapat ditindaklanjuti pembaca","Menghapusnya dari riset ritel tetapi mempertahankannya pada versi untuk nasabah institusi","Menggantinya dengan disclaimer umum yang menyatakan semua investasi mengandung risiko"],
 answer:1,
 explain:"Permintaan ngehapus bagian risiko penurunan harus DITOLAK, karena riset tanpa level pembatalan skenario nggak bisa ditindaklanjuti pembaca. Mereka nggak tau kapan analisisnya kebukti salah, jadi nggak bisa ngelola risikonya sama sekali. Ini bukan soal keras kepala — bagian risiko itu yang bikin sebuah tulisan jadi riset, bukan jualan. Hapus itu, dan yang tersisa cuma promosi."},

{id:"case-06-q3",caseId:"case-06",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Unsur mana dari kasus ini yang paling berpotensi dinilai sebagai indikasi manipulasi pasar, bukan sekadar pelanggaran etika internal?",
 options:["Analis memiliki posisi pribadi pada saham yang ia analisis","Riset dipercepat penerbitannya untuk mengejar tenggat divisi lain","Rekomendasi diterbitkan untuk mendorong harga demi kepentingan posisi pihak sendiri","Bagian risiko penurunan dihapus sehingga riset terbaca lebih meyakinkan"],
 answer:2,
 explain:"Yang paling berpotensi dinilai MANIPULASI PASAR (bukan sekadar pelanggaran etika internal): rekomendasi diterbitin buat NDORONG HARGA demi kepentingan posisi pihak sendiri. Bedanya sama pelanggaran etika biasa ada di NIAT. Nggak ngungkapin kepemilikan itu pelanggaran etika. Sengaja bikin narasi buat narik orang masuk biar lo bisa keluar di harga lebih tinggi — itu pidana pasar modal."},

{id:"case-06-q4",caseId:"case-06",module:"rta-riset",level:"RTA",difficulty:"sulit",
 q:"Bila analis tetap berkeyakinan rekomendasi belinya benar, langkah yang paling tepat adalah...",
 options:["Menunda penerbitan sampai ia menjual seluruh posisi pribadinya terlebih dahulu","Menerbitkan riset tanpa nama agar benturan kepentingannya menjadi tidak relevan","Menyerahkan penulisan kepada analis lain agar risetnya terbebas dari benturan kepentingan","Menerbitkan riset lengkap dengan pengungkapan posisi, level pembatalan, dan horizon waktunya"],
 answer:3,
 explain:"Kalau analis tetep yakin rekomendasinya bener, jalan keluarnya BUKAN mundur atau diem. Terbitin riset LENGKAP: dengan pengungkapan posisi, level pembatalan, dan horizon waktunya. Tiga hal itu yang bikin analisis lo bisa dipertanggungjawabkan. Keyakinan lo boleh tetep, yang nggak boleh itu ngilangin informasi yang pembaca butuhin buat nimbang sendiri."}
]);
