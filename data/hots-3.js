/* Soal HOTS batch 3 — cta-sistem, cta-breadth, cta-aset, rta-plan */
TD.register([
/* ===== cta-sistem ===== */
{id:"cta-sis-h01",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem menghasilkan profit factor 1,8 pada data 2018 sampai 2022, lalu 1,75 pada data 2023 sampai 2024 yang disisihkan sejak awal. Bagaimana hasil ini sebaiknya dinilai?",
 options:["Belum bermakna, karena dua tahun terlalu pendek untuk pengujian di luar sampel","Mencurigakan, karena hasil yang terlalu mirip menandakan datanya bocor antar periode","Menggembirakan, karena kinerja di luar sampel nyaris setara menandakan keunggulannya kokoh","Mengkhawatirkan, karena penurunan profit factor menandakan sistemnya mulai rusak"],
 answer:2,
 explain:"Ini hasil yang lo pengenin. Profit factor 1,8 di data yang dipakai bikin sistem, terus 1,75 di data 2023-2024 yang DISISIHKAN SEJAK AWAL dan belum pernah disentuh. Nyaris setara. Artinya keunggulannya kemungkinan besar nyata, bukan hasil ngapalin sejarah. Bandingin sama pola yang mencurigakan: 2,4 di dalam sampel tapi 0,9 di luar sampel. Itu tanda overfit. Kuncinya data uji harus disisihkan DARI AWAL, bukan dipilih belakangan."},

{id:"cta-sis-h02",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem menghasilkan sinyal dari penutupan harian dan mengeksekusi pada penutupan hari yang sama. Cacat apa yang terkandung, dan seberapa serius dampaknya?",
 options:["Slippage yang diremehkan, karena eksekusi pada penutupan biasanya memperoleh harga lebih buruk","Survivorship bias, karena hanya emiten yang bertahan sampai akhir periode ikut terhitung","Data snooping, karena penutupan harian dipakai berulang untuk banyak pengujian","Look ahead bias, karena harga penutupan baru diketahui setelah sesi berakhir sehingga eksekusinya mustahil"],
 answer:3,
 explain:"Look ahead bias, dan dampaknya brutal. Harga close baru ketahuan SETELAH sesi berakhir, jadi eksekusi di harga itu mustahil di dunia nyata — lo butuh mesin waktu. Yang bikin bahaya: kesalahan sekecil ini bisa ngubah sistem rugi jadi keliatan luar biasa, dan lo nggak akan sadar sampai duit nyata keluar. Perbaikannya: eksekusi di bar BERIKUTNYA, atau di harga pembukaan besok. Plus tambahin slippage yang realistis."},

{id:"cta-sis-h03",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Hasil optimasi menunjukkan periode 23 memberi imbal hasil jauh tertinggi, sementara periode 20 sampai 26 lainnya menghasilkan kinerja biasa saja. Bagaimana temuan ini dibaca?",
 options:["Puncak tunggal yang terisolasi menandakan hasilnya kebetulan, bukan keunggulan yang kokoh","Periode 23 adalah parameter optimal yang layak dipakai karena hasilnya paling tinggi","Rentang 20 sampai 26 perlu diuji ulang dengan data yang lebih panjang","Perbedaan sebesar itu menandakan periode di sekitarnya salah dihitung"],
 answer:0,
 explain:"Puncak tunggal yang nyempil sendirian itu hampir selalu fatamorgana. Kalau periode 23 melejit sementara 20 sampai 26 biasa aja, artinya angka 23 nempel di noise periode uji, bukan nemu sesuatu yang nyata. Di data baru, dia bakal jadi biasa aja juga. Yang dicari itu DATARAN: sekelompok nilai berdekatan yang semuanya lumayan. Ambil yang di tengah dataran, meskipun bukan yang tertinggi. Lebih membosankan, jauh lebih tahan banting."},

{id:"cta-sis-h04",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Simulasi Monte Carlo atas 300 transaksi sebuah sistem menunjukkan maximum drawdown historis 12 persen, tetapi persentil ke-95 dari hasil acakannya mencapai 27 persen. Apa makna praktis temuan itu?",
 options:["Drawdown historis lebih dapat dipercaya karena berasal dari data pasar yang nyata","Drawdown 12 persen kebetulan berasal dari urutan yang menguntungkan; siapkan diri untuk sekitar 27 persen","Sistem itu cacat karena drawdown simulasinya jauh melampaui yang pernah terjadi","Simulasi tersebut tidak valid karena mengacak urutan transaksi yang sebenarnya berurutan"],
 answer:1,
 explain:"Monte Carlo itu ngacak ulang URUTAN transaksi lo ribuan kali. Transaksinya sama persis, cuma urutannya diubah. Hasilnya bikin bangun: drawdown 12% yang lo alami itu ternyata hasil urutan yang KEBETULAN enak. Di 95% skenario lain, drawdown-nya bisa nyampe 27%. Artinya 12% itu bukan gambaran risiko lo, cuma nasib baik. Siapin mental dan modal buat 27%, karena urutan transaksi ke depan nggak ada yang jamin."},

{id:"cta-sis-h05",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem mean reversion menghasilkan 47 keuntungan kecil berturut-turut lalu satu kerugian yang menghapus seluruhnya. Karakter risiko seperti ini paling tepat digambarkan sebagai...",
 options:["Overfitting, karena rangkaian kemenangan panjang menandakan parameter terlalu dicocokkan","Risk of ruin rendah, karena tingkat keberhasilannya mendekati sempurna","Skewness negatif, dengan risiko sesungguhnya tersembunyi di ekor kiri distribusinya","Volatilitas tinggi, karena hasil satu transaksi jauh melampaui rata-ratanya"],
 answer:2,
 explain:"47 untung kecil berturut-turut terus satu rugi yang ngapus semuanya. Itu skewness negatif dalam bentuk paling telanjang. Masalahnya, selama 47 transaksi itu semua statistik lo keliatan cantik: win rate 98%, kurva ekuitas mulus. Risiko aslinya sembunyi di ekor kiri dan nggak kelihatan di laporan mana pun. Makanya sistem kayak gini WAJIB dinilai pakai kerugian terbesar tunggalnya, bukan pakai win rate."},

{id:"cta-sis-h06",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem menunjukkan Sharpe ratio 2,1 sementara sistem lain 1,4, tetapi sistem kedua memiliki Sortino ratio jauh lebih tinggi. Apa yang paling mungkin membedakan keduanya?",
 options:["Sistem kedua memiliki drawdown lebih dangkal sehingga rasionya ikut membaik","Sistem pertama menghasilkan lebih banyak transaksi sehingga volatilitasnya terdilusi","Kedua rasio itu tidak dapat dibandingkan karena memakai satuan yang berbeda","Sistem kedua volatilitasnya terkonsentrasi pada pergerakan naik, yang tidak dihukum Sortino"],
 answer:3,
 explain:"Sharpe ngehukum semua goyangan, naik maupun turun. Sortino cuma ngehukum goyangan ke BAWAH. Jadi kalau sistem kedua Sharpe-nya lebih rendah tapi Sortino-nya jauh lebih tinggi, artinya goyangannya banyak di sisi NAIK — dan itu hal yang lo pengenin, bukan risiko. Sharpe ngehukum dia secara nggak adil. Ini khas sistem trend following yang sesekali dapet untung gila. Baca dua rasio ini bareng, jangan Sharpe doang."},

{id:"cta-sis-h07",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem berfrekuensi tinggi menghasilkan rata-rata keuntungan 0,4 persen per transaksi sebelum biaya, dengan 600 transaksi per tahun. Biaya sekali jalan 0,15 persen. Apa kesimpulan paling tepat?",
 options:["Biaya pulang pergi 0,3 persen menyisakan 0,1 persen, sehingga keunggulannya nyaris habis","Keuntungan bersih 0,25 persen per transaksi masih memadai untuk 600 transaksi setahun","Biaya tidak relevan karena dihitung dari nilai transaksi, bukan dari keuntungannya","Frekuensi tinggi justru menguntungkan karena biaya per transaksi menjadi lebih kecil"],
 answer:0,
 explain:"Itung: untung kotor 0,4% per transaksi. Biaya sekali jalan 0,15%, artinya pulang pergi 0,3%. Sisa untung bersih = 0,1% per transaksi. Keunggulan lo kemakan 75% sama biaya. Dengan 600 transaksi setahun, sisa 0,1% itu masih bisa jadi 60% kotor, tapi marginnya tipis banget — sedikit slippage aja langsung minus. Sistem frekuensi tinggi itu hidup matinya di biaya, bukan di sinyalnya."},

{id:"cta-sis-h08",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem mulai dijalankan dengan dana nyata dan langsung mengalami delapan kerugian berturut-turut, padahal pada pengujian rangkaian terburuknya hanya lima. Apa langkah paling tepat?",
 options:["Mengoptimalkan ulang parameternya memakai data terbaru agar kembali sesuai kondisi pasar","Memeriksa apakah delapan kerugian masih berada dalam sebaran wajar sistemnya sebelum menyimpulkan","Menghentikan sistem segera karena kinerjanya sudah melampaui rangkaian terburuk historis","Menggandakan ukuran posisi karena kerugian beruntun biasanya diikuti kemenangan"],
 answer:1,
 explain:"Delapan kerugian beruntun padahal backtest terburuknya lima. Tenang dulu, jangan langsung matiin sistemnya. Rangkaian terburuk di backtest itu cuma yang KEBETULAN kejadian di data itu, bukan batas maksimal. Lewat dikit itu masih dalam sebaran wajar, apalagi kalau win rate sistemnya rendah. Cek dulu secara statistik: dengan win rate segitu, berapa peluang 8 kalah beruntun? Kalau masuk akal, lanjut dengan ukuran dikecilin. Kalau jauh di luar sebaran, baru selidiki."},

/* ===== cta-breadth ===== */
{id:"cta-br-h01",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Indeks turun 3 persen tetapi jumlah saham yang naik melebihi yang turun pada sesi itu. Apa yang paling mungkin sedang terjadi?",
 options:["Mayoritas saham naik tipis sementara sisanya turun sangat dalam secara merata","Indeks sedang mengalami penyesuaian komposisi sehingga angkanya tidak sebanding","Penurunan indeks didorong beberapa emiten berbobot besar, sementara pasar luas justru menguat","Data breadth tertinggal satu sesi dari perhitungan indeks komposit"],
 answer:2,
 explain:"Indeks turun tapi lebih banyak saham yang naik daripada turun. Kedengeran aneh, padahal biasa: indeks itu ditimbang KAPITALISASI. Beberapa emiten raksasa jatuh bisa narik indeks turun 3% meskipun ratusan saham lain naik. Jadi yang lo lihat di angka indeks itu nasib segelintir nama, bukan nasib pasar. Dan buat pemegang portofolio saham lapis dua, hari itu sebenernya hari yang bagus meski headline bilang pasar merah."},

{id:"cta-br-h02",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Put call ratio berada pada level tertinggi dalam tiga tahun. Seorang analis langsung membeli besar-besaran dengan alasan contrarian. Kelemahan utama keputusan itu adalah...",
 options:["Put call ratio tinggi sebenarnya menandakan optimisme, bukan kepanikan pelaku pasar","Data opsi tidak mewakili pasar saham sehingga tidak relevan bagi keputusan itu","Contrarian hanya berlaku pada indikator breadth, tidak pada indikator sentimen","Sentimen ekstrem dapat bertahan lama, sehingga tidak dapat dipakai menentukan waktu masuk"],
 answer:3,
 explain:"Sentimen ekstrem itu ngasih tau KONDISI, bukan WAKTU. Put call ratio tertinggi tiga tahun emang artinya orang lagi takut banget, dan secara historis itu sering deket dasar. Tapi 'deket' itu bisa berarti dua bulan lagi dan turun 15% dulu. Sentimen bisa makin ekstrem terus. Makanya indikator sentimen dipakai buat nyiapin diri dan naikin kewaspadaan, bukan buat mencet tombol beli. Konfirmasinya tetep dari harga."},

{id:"cta-br-h03",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Harga komoditas energi menguat tajam, imbal hasil obligasi naik, dan sektor perbankan tertinggal. Seorang analis menyimpulkan lingkungan inflasioner. Bukti tambahan apa yang paling menguatkan kesimpulan itu?",
 options:["Melemahnya mata uang domestik terhadap dolar pada periode yang sama","Meningkatnya volume perdagangan pada bursa saham secara keseluruhan","Menyempitnya spread imbal hasil antara tenor 10 tahun dan tenor 2 tahun","Naiknya rasio harga terhadap laba rata-rata emiten di indeks komposit"],
 answer:0,
 explain:"Tiga bukti yang udah ada semuanya ngarah ke inflasi: energi naik, yield naik, bank ketinggalan. Bukti tambahan yang paling nguatin: mata uang domestik melemah terhadap dolar. Kenapa? Karena pelemahan mata uang bikin harga impor naik, dan itu nyuntikin inflasi langsung ke dalam negeri. Buat Indonesia ini penting banget, soalnya banyak bahan baku dan energi diimpor. Rupiah melemah = inflasi impor, hampir selalu."},

{id:"cta-br-h04",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Selama enam bulan, sektor energi konsisten mengungguli indeks sementara sektor konsumsi primer tertinggal. Apa yang paling mungkin ditunjukkan rotasi ini tentang fase siklusnya?",
 options:["Rotasi sektor tidak membawa informasi apa pun tentang fase siklus ekonomi","Pasar memperkirakan tekanan inflasi berlanjut, sehingga sektor berbasis komoditas dicari","Pasar memasuki fase akhir ekspansi, ketika sektor defensif biasanya memimpin","Pasar berada di awal pemulihan, ketika sektor siklikal keuangan biasanya memimpin"],
 answer:1,
 explain:"Energi ungguli indeks sementara konsumsi primer ketinggalan selama enam bulan. Itu pasar lagi ngeharga tekanan inflasi yang berlanjut: sektor berbasis komoditas dicari karena pendapatannya ikut naik sama harga. Dalam urutan rotasi sektor, energi dan bahan dasar mimpin biasanya menjelang PUNCAK siklus, bukan awal. Jadi selain baca inflasinya, ini juga sinyal halus bahwa siklusnya udah lumayan tua."},

{id:"cta-br-h05",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Advance decline line mencetak tertinggi baru sementara indeks komposit masih tertinggal di bawah puncak sebelumnya. Bagaimana kondisi ini dibaca?",
 options:["Kesalahan perhitungan, karena AD Line tidak mungkin melampaui indeksnya","Indeks akan tetap tertinggal karena emiten besarnya sedang mengalami tekanan","Pasar luas sedang menguat lebih dulu, yang umumnya merupakan tanda positif bagi indeks","Divergensi bearish, karena breadth seharusnya mengikuti indeks bukan mendahuluinya"],
 answer:2,
 explain:"Ini divergensi POSITIF, kebalikan dari yang biasa dikhawatirkan. Advance-decline line cetak tertinggi baru artinya mayoritas saham udah pulih duluan, sementara indeks masih ketahan karena beberapa nama berbobot besar belum ikut. Secara historis ini tanda bagus: pasar luas mimpin, indeksnya biasanya nyusul. Kebalikan dari indeks cetak rekor tapi A-D line turun, yang justru peringatan."},

{id:"cta-br-h06",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Mengapa divergensi breadth lebih berguna bagi pengelola portofolio daripada bagi trader jangka pendek?",
 options:["Perhitungannya hanya tersedia pada data mingguan sehingga tidak relevan untuk jangka pendek","Divergensi breadth hanya berlaku pada portofolio yang terdiversifikasi luas","Trader jangka pendek tidak memiliki akses terhadap data advance decline harian","Peringatannya muncul jauh sebelum titik balik, cocok untuk mengatur eksposur bertahap"],
 answer:3,
 explain:"Divergensi breadth itu peringatannya muncul JAUH sebelum titik baliknya, kadang berbulan-bulan. Buat trader jangka pendek itu bikin frustrasi: lo dapet sinyal hati-hati terus pasar naik dua bulan lagi. Tapi buat pengelola portofolio, jeda panjang itu justru pas — dia bisa ngurangin eksposur BERTAHAP tanpa harus jual panik dalam sehari. Alat yang sama, berguna buat satu orang, bikin sakit hati buat yang lain."},

/* ===== cta-aset ===== */
{id:"cta-as-h01",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Seorang pemegang posisi beli komoditas mengalami kerugian selama setahun meski harga spot komoditas itu naik 5 persen. Penjelasan paling mungkin adalah...",
 options:["Struktur contango membuat setiap rollover kontrak menggerus hasil posisinya","Harga spot dan harga kontrak berjangka bergerak berlawanan arah sepanjang tahun","Biaya penyimpanan komoditas dibebankan langsung kepada pemegang kontrak berjangka","Kontrak berjangka tidak mengikuti harga spot sehingga keduanya tidak sebanding"],
 answer:0,
 explain:"Harga spot naik 5% tapi posisinya rugi. Penyebabnya contango: kontrak masa depan lebih mahal dari spot, jadi tiap kali rollover ke bulan berikutnya, lo jual yang murah beli yang mahal. Rugi kecil yang berulang selusin kali setahun bisa ngalahin kenaikan 5%. Ini alesan banyak ETF komoditas kinerjanya jauh di bawah komoditasnya sendiri. Kalau mau ekspos ke komoditas jangka panjang lewat futures, cek dulu struktur kurvanya."},

{id:"cta-as-h02",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Imbal hasil obligasi tenor 2 tahun naik lebih cepat daripada tenor 10 tahun, sehingga selisihnya menyempit mendekati nol. Apa yang sedang dikatakan pasar obligasi?",
 options:["Pemerintah sedang memperbanyak penerbitan obligasi bertenor panjang","Pasar memperkirakan pengetatan moneter jangka pendek yang berujung perlambatan pertumbuhan","Pasar memperkirakan inflasi jangka panjang melonjak jauh melampaui jangka pendek","Likuiditas pasar obligasi sedang mengering sehingga harganya tidak mencerminkan ekspektasi"],
 answer:1,
 explain:"Yield 2 tahun naik lebih cepet dari 10 tahun, spread-nya nyempit mendekati nol. Terjemahannya: pasar ngeharga pengetatan moneter jangka pendek (makanya ujung pendek melonjak), tapi nggak percaya pertumbuhan jangka panjangnya bakal kuat (makanya ujung panjang nggak ikut naik). Kalau spread-nya sampai MINUS alias kurva terbalik, itu salah satu penanda resesi paling terkenal di sejarah, meski jedanya bisa 6-18 bulan."},

{id:"cta-as-h03",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Seorang analis membeli opsi call menjelang pengumuman laba karena yakin harga akan naik. Harga memang naik 6 persen, tetapi nilai opsinya justru turun. Penyebab paling mungkin adalah...",
 options:["Opsi call tidak diuntungkan oleh kenaikan harga bila kenaikannya terjadi mendadak","Bursa membekukan perdagangan opsi selama periode pengumuman laba berlangsung","Volatilitas tersirat anjlok setelah pengumuman, menggerus premi meski arahnya benar","Harga aset dasar belum melampaui strike sehingga opsinya tidak memiliki nilai"],
 answer:2,
 explain:"Ini pengalaman yang bikin banyak orang kapok main opsi. Arahnya bener, harga naik 6%, tapi opsinya malah turun. Penyebabnya volatility crush: menjelang pengumuman, IV tinggi banget jadi premi opsinya mahal. Begitu pengumumannya lewat, ketidakpastian ilang, IV anjlok, dan premi ikut anjlok. Kenaikan 6% nggak cukup nutupin jatuhnya IV. Pelajarannya: beli opsi menjelang berita besar itu sering kalah walaupun tebakan lo tepat."},

{id:"cta-as-h04",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Indeks saham sebuah negara berkembang naik 12 persen dalam setahun, tetapi investor asing yang memegangnya justru merugi. Apa yang paling mungkin terjadi?",
 options:["Dividen yang diterima dipotong pajak sehingga imbal hasil totalnya menjadi negatif","Biaya kustodian dan transaksi lintas negara melampaui kenaikan indeksnya","Indeks tersebut tidak mencakup seluruh saham sehingga tidak mewakili portofolio investor","Mata uang negara itu melemah lebih dari 12 persen terhadap mata uang asal investor"],
 answer:3,
 explain:"Indeks naik 12% tapi investor asing rugi. Jawabannya cuma satu: mata uang negara itu melemah LEBIH dari 12% terhadap mata uang asal investor. Naik 12% dalam rupiah, tapi rupiah anjlok 20%, ya hasilnya minus. Ini bukan kasus langka, ini kejadian rutin di negara berkembang. Makanya analis global selalu ngecek chart indeks dalam denominasi dolar dulu — dan arus dana asing ngikutin chart itu, bukan chart lokal."},

{id:"cta-as-h05",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Data Commitment of Traders menunjukkan large speculator berada pada posisi beli bersih terbesar dalam lima tahun. Bagaimana informasi ini sebaiknya ditafsirkan?",
 options:["Sebagai peringatan contrarian, karena posisi ekstrem menyisakan sedikit pembeli baru","Sebagai konfirmasi tren naik, karena spekulan besar biasanya lebih tepat membaca arah","Sebagai indikasi bahwa commercial hedger sedang mengurangi aktivitas lindung nilainya","Sebagai tanda likuiditas pasar berjangka sedang berada pada level tertinggi"],
 answer:0,
 explain:"Large speculator posisi beli bersih terbesar dalam lima tahun. Kedengeran bullish kan? Justru kebalikannya. Logika contrarian-nya: kalau hampir semua spekulan udah beli, siapa lagi yang tersisa buat beli dan ndorong harga naik? Bahan bakarnya udah abis. Sebaliknya, kalau ada berita buruk dikit aja, banyak banget yang harus jual. TAPI ini indikator kondisi, bukan pemicu. Posisi ekstrem bisa makin ekstrem berbulan-bulan."},

{id:"cta-as-h06",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Sebuah aset kripto menunjukkan pola teknikal yang sama rapinya dengan saham, tetapi stop loss dengan jarak identik jauh lebih sering tersentuh. Apa akar penyebabnya?",
 options:["Likuiditas kripto lebih besar sehingga harga bergerak lebih cepat menembus level","Volatilitasnya jauh lebih tinggi, sehingga jarak yang sama mewakili pergerakan yang jauh lebih kecil","Pola teknikal tidak berlaku pada aset kripto sehingga sinyalnya acak","Perdagangan 24 jam membuat order stop loss tidak dapat dieksekusi dengan benar"],
 answer:1,
 explain:"Stop 3% di saham itu jarak yang lumayan lega, di kripto itu jarak yang kesentuh tiap hari Selasa. Akar penyebabnya volatilitas yang jauh lebih tinggi: jarak persen yang sama mewakili pergerakan yang jauh lebih kecil relatif terhadap goyangan normalnya. Solusinya bukan mepetin stop, tapi lebarin stop sesuai ATR asetnya, terus kecilin ukuran posisi biar rugi rupiahnya tetep sama. Stop harus nyesuain aset, bukan sebaliknya."},

/* ===== rta-plan ===== */
{id:"rta-plan-h01",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Modal Rp500 juta dengan risiko 2 persen per transaksi. Harga masuk Rp1.250, stop Rp1.150. Berapa jumlah lembar maksimum yang boleh dibeli?",
 options:["125.000 lembar","50.000 lembar","100.000 lembar","80.000 lembar"],
 answer:2,
 explain:"Risiko rupiah = 2% x 500 juta = 10 juta. Risiko per lembar = 1.250 - 1.150 = 100 rupiah. Jumlah lembar = 10 juta / 100 = 100.000 lembar, alias 1.000 lot. Cek ulang: 100.000 lembar x rugi 100 per lembar = 10 juta. Pas. Perhatiin urutannya: stop ditentuin duluan dari struktur chart, BARU ukuran posisi ngikut. Bukan nentuin mau beli berapa lot dulu terus nyari-nyari stop yang enak."},

{id:"rta-plan-h02",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Sebuah sistem memiliki win rate 35 persen dengan rata-rata untung 3R dan rata-rata rugi 1R. Berapa expectancy-nya, dan apa artinya bagi 100 transaksi berikutnya?",
 options:["1,05R, sehingga 100 transaksi diharapkan menghasilkan sekitar 105R","0,35R, sehingga 100 transaksi diharapkan menghasilkan sekitar 35R","Negatif, karena tingkat keberhasilannya berada di bawah 50 persen","0,40R, sehingga 100 transaksi diharapkan menghasilkan sekitar 40R"],
 answer:3,
 explain:"Rumusnya: (peluang menang x rata-rata untung) dikurangi (peluang kalah x rata-rata rugi). Masukin angkanya: (0,35 x 3R) - (0,65 x 1R) = 1,05R - 0,65R = 0,40R per transaksi. Jadi 100 transaksi diharapkan ngasih sekitar 40R. Dua jebakan di sini. Pertama, banyak yang lupa ngurangin sisi ruginya dan langsung jawab 1,05R. Kedua, win rate 35 persen bikin orang mikir pasti rugi, padahal sistem yang lebih sering salah tetep untung asal yang bener dibiarin lari jauh. Tapi siap-siap: di win rate segitu, kalah 8 kali beruntun itu bakal kejadian."},

{id:"rta-plan-h03",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Seorang trader memegang lima posisi, masing-masing berisiko 2 persen ekuitas, pada lima saham properti. Mengapa total risikonya tidak tepat dinyatakan 10 persen yang tersebar?",
 options:["Korelasi tinggi antar saham sesektor membuat kelimanya berpeluang menyentuh stop bersamaan","Total risiko seharusnya dijumlahkan secara kuadrat, bukan secara langsung","Risiko per posisi berkurang seiring bertambahnya jumlah posisi dalam portofolio","Stop loss pada lima posisi tidak mungkin tereksekusi seluruhnya pada hari yang sama"],
 answer:0,
 explain:"Lima posisi risiko 2% di lima saham properti itu BUKAN 10% yang tersebar, itu 10% yang numpuk di satu taruhan. Korelasi antar saham sesektor tinggi banget: satu kebijakan suku bunga atau aturan properti, kelimanya nyentuh stop di hari yang sama. Diversifikasi yang cuma ganti nama tapi sektornya sama itu ilusi yang mahal. Batesin total risiko PER SEKTOR, misal 3%, berapa pun jumlah namanya."},

{id:"rta-plan-h04",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Portofolio turun 40 persen dari puncaknya. Berapa kenaikan yang dibutuhkan untuk kembali ke titik semula, dan apa implikasinya bagi pengaturan risiko?",
 options:["Sekitar 80 persen, sehingga portofolio praktis tidak mungkin pulih kembali","Sekitar 67 persen, sehingga mencegah drawdown dalam jauh lebih bernilai daripada mengejar imbal hasil","Sekitar 40 persen, sehingga pemulihannya sebanding dengan besarnya penurunan","Sekitar 50 persen, sehingga pemulihannya masih tergolong wajar bagi strategi aktif"],
 answer:1,
 explain:"Ini matematika yang harus lo hafal. Turun 40% dari 100 juta jadi 60 juta. Buat balik ke 100, 60 harus naik 40 juta, dan 40 dibagi 60 = 67%. Jadi rugi 40% butuh untung 67% cuma buat impas. Makin dalem, makin timpang: rugi 50% butuh untung 100%, rugi 70% butuh 233%. Pelajarannya keras: NYEGAH drawdown dalam itu jauh lebih bernilai daripada ngejar return tinggi. Bertahan dulu, untung belakangan."},

{id:"rta-plan-h05",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Seorang trader memperlebar stop loss saat harga mendekatinya, dengan alasan level teknikalnya ternyata sedikit lebih jauh. Mengapa kebiasaan ini berbahaya meski kadang terbukti benar?",
 options:["Level teknikal tidak boleh diubah setelah posisi dibuka karena melanggar aturan bursa","Memperlebar stop membuat rasio risiko imbal hasilnya otomatis menjadi negatif","Batas kerugian menjadi tidak pernah pasti, sehingga ukuran posisi kehilangan dasar perhitungannya","Stop yang diperlebar selalu tersentuh juga pada akhirnya sehingga kerugiannya lebih besar"],
 answer:2,
 explain:"Kadang emang bener sih, levelnya ternyata sedikit lebih jauh. Itu yang bikin kebiasaan ini bahaya — dia sesekali dikasih hadiah. Tapi masalahnya fundamental: kalau stop bisa digeser, batas kerugian lo jadi NGGAK PERNAH PASTI. Dan kalau batas kerugian nggak pasti, seluruh hitungan ukuran posisi lo kehilangan dasarnya. Angka 2% risiko itu cuma jadi angan-angan. Kalau emang levelnya salah, akuin di jurnal dan perbaiki NEXT time, bukan di tengah posisi."},

{id:"rta-plan-h06",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Harga masuk Rp2.000 dengan stop Rp1.900. Setelah harga mencapai Rp2.300, trader memindahkan stop ke Rp2.100. Bagaimana profil risiko posisi itu berubah?",
 options:["Risiko tetap sama karena dihitung dari harga masuk dan stop awal","Risiko bertambah karena jarak stop terhadap harga berjalan menjadi lebih jauh","Risiko tidak dapat dihitung lagi karena stop sudah tidak berada di level teknikal","Risiko menjadi negatif karena stop sudah berada di atas harga masuk, sehingga keuntungan minimum terkunci"],
 answer:3,
 explain:"Masuk 2.000, stop awal 1.900 (risiko 100 per lembar). Setelah harga 2.300, stop dipindah ke 2.100 — di ATAS harga masuk. Artinya skenario terburuk lo sekarang UNTUNG 100 per lembar, bukan rugi. Risikonya jadi negatif, alias keuntungan minimum udah terkunci. Ini bedanya sama breakeven stop yang cuma ngunci nol. Tapi inget ongkosnya: makin ketat stop-nya, makin gampang kelempar sama goyangan normal sebelum tren gedenya jalan."}
]);
