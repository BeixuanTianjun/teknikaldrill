/* Unit CTA: Statistik & Kuantitatif untuk Analis Teknikal
   Gaya: soal pakai bahasa Indonesia yang wajar plus istilah yang memang
   dipakai trader (return, volatilitas, backtest). Pembahasan sengaja
   dibikin santai biar konsepnya nempel, bukan cuma dihafal. */
TD.register([
{id:"cta-st-001",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Volatilitas historis suatu aset umumnya dihitung sebagai...",
 options:["Rata-rata simpangan harga terhadap moving average-nya","Rata-rata range harian selama periode tertentu","Standar deviasi return harian yang disetahunkan","Selisih harga tertinggi dan terendah dibagi harga penutupan"],
 answer:2,
 explain:"Volatilitas itu intinya ngukur: harga ini biasanya goyang seberapa jauh? Caranya ambil return harian (naik turun berapa persen tiap hari), hitung standar deviasinya, terus disetahunkan. Kenapa pakai return bukan harga? Karena goyang 100 perak di saham 500 itu gila, tapi di saham 50.000 mah nggak kerasa. Persen bikin semuanya bisa dibandingin."},

{id:"cta-st-002",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Untuk menyetahunkan volatilitas harian dengan asumsi 252 hari perdagangan, volatilitas harian dikalikan dengan...",
 options:["12, karena volatilitas dihitung bulanan terlebih dahulu","Akar dari 12, yaitu sekitar 3,46","252, sesuai jumlah hari perdagangan dalam setahun","Akar dari 252, yaitu sekitar 15,87"],
 answer:3,
 explain:"Kenapa akar, bukan dikali 252 langsung? Gini: risiko itu nggak numpuk rapi kayak nabung di celengan. Hari ini naik 1%, besok turun 1% — saling makan. Jadi 252 hari TIDAK bikin risikonya 252 kali lipat. Yang dipakai akarnya. Volatilitas harian 1% x akar 252 = sekitar 15,9% setahun. Tapi hati-hati: rumus ini nganggep tiap hari berdiri sendiri, padahal aslinya pasar suka ngumpulin hari-hari gila di satu periode. Jadi angkanya perkiraan, bukan kitab suci."},

{id:"cta-st-003",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Koefisien korelasi bernilai minus satu berarti dua aset...",
 options:["Bergerak berlawanan arah secara sempurna","Tidak memiliki hubungan linear satu sama lain","Memiliki tingkat volatilitas yang sama besarnya","Bergerak searah secara sempurna tanpa penyimpangan"],
 answer:0,
 explain:"Bayangin jungkat-jungkit: satu naik, satu pasti turun. Itu korelasi minus satu. Angkanya main di rentang -1 sampai +1, nol artinya nggak nyambung. Dua catatan penting. Pertama, korelasi cuma nangkep hubungan yang LURUS — kalau hubungannya melengkung, angkanya bisa nol padahal aslinya nyambung. Kedua, korelasi bukan sebab-akibat. Penjualan es krim naik bareng angka tenggelam di pantai, tapi bukan es krimnya yang bikin tenggelam. Sama-sama gara-gara musim panas."},

{id:"cta-st-004",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Distribusi return pasar yang memiliki skewness negatif berarti...",
 options:["Ekor kanan lebih panjang sehingga keuntungan ekstrem lebih sering","Ekor kiri lebih panjang sehingga kerugian ekstrem lebih sering","Distribusinya simetris di sekitar nilai rata-ratanya","Nilai ekstrem hampir tidak pernah muncul pada kedua sisi"],
 answer:1,
 explain:"Pasar saham naiknya nyicil, turunnya ngebut. Naik 30% butuh setahun, turun 30% bisa tiga minggu. Itulah skewness negatif: ekor kirinya (bagian rugi) lebih panjang dan lebih gendut. Efeknya buat lo: model risiko yang nganggep distribusinya normal bakal meremehkan seberapa parah jatuhnya bisa terjadi. Makanya stop loss dan batas ukuran posisi itu wajib, bukan pelengkap."},

{id:"cta-st-005",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Kurtosis yang tinggi pada distribusi return menandakan...",
 options:["Return positif dan negatif muncul dengan frekuensi seimbang","Volatilitasnya rendah sehingga return terkumpul rapat","Peristiwa ekstrem lebih sering daripada prediksi distribusi normal","Distribusinya mendekati normal sempurna pada sampel besar"],
 answer:2,
 explain:"Istilahnya fat tails alias ekor gendut. Kalau ngikutin kurva normal, crash sebesar 1987 itu harusnya kejadian sekali dalam miliaran tahun. Faktanya udah kejadian berkali-kali dalam satu abad. Artinya kurva normal salah bacanya, dan salahnya persis di bagian yang paling bahaya. Pelajarannya sederhana: kejadian yang katanya mustahil itu di pasar terjadi tiap beberapa tahun. Siapin modal lo buat itu."},

{id:"cta-st-006",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Regresi linear sederhana pada deret harga digunakan untuk...",
 options:["Menguji apakah deret harga bersifat stasioner atau tidak","Menghitung korelasi antara harga dan volume transaksi","Menghaluskan deret harga agar noise hariannya berkurang","Mengestimasi garis tren terbaik menurut kriteria kuadrat terkecil"],
 answer:3,
 explain:"Masalah garis tren manual: sepuluh orang narik, jadi sepuluh garis beda. Regresi ngilangin debat itu — dia nyari satu garis yang jaraknya ke semua titik harga paling kecil, dan hasilnya pasti sama siapa pun yang ngitung. Indikator linear regression channel tinggal nambahin pita standar deviasi di atas dan bawah garis itu."},

{id:"cta-st-007",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Koefisien determinasi atau R kuadrat pada regresi tren mengukur...",
 options:["Proporsi variasi harga yang dapat dijelaskan garis tren","Besarnya simpangan rata-rata harga terhadap garis tren","Tingkat signifikansi statistik dari koefisien regresinya","Kemiringan garis tren yang terbentuk dari data harga"],
 answer:0,
 explain:"R kuadrat itu nilai rapor buat garis tren lo, rentangnya 0 sampai 1. Mendekati 1 artinya harga nurut banget sama garisnya — trennya rapi. Mendekati 0 artinya harga zig-zag semaunya dan garis tren lo cuma hiasan. Gunanya praktis: kalau R kuadrat rendah, jangan pakai strategi ngikut tren di situ. Indikator kekuatan tren bikinan Chande dibangun dari ukuran ini."},

{id:"cta-st-008",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Autokorelasi positif pada deret return mengindikasikan...",
 options:["Pergerakan acak sempurna tanpa ketergantungan antar periode","Adanya efek momentum karena return cenderung berlanjut searah","Kecenderungan return berbalik arah pada periode berikutnya","Volatilitas yang berkelompok pada periode-periode tertentu"],
 answer:1,
 explain:"Autokorelasi positif artinya hari ini naik, besok agak condong naik lagi. Ini bukti statistik buat premis paling dasar analisis teknikal: tren itu nyata, bukan cuma ilusi mata. Kebalikannya, autokorelasi negatif artinya habis naik cenderung turun — itu dunianya mean reversion. Kegunaan praktisnya: cek dulu instrumennya masuk kubu mana, baru pilih strateginya. Salah kubu, strategi sebagus apa pun bakal kena terus."},

{id:"cta-st-009",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Z score dalam analisis teknikal digunakan untuk mengukur...",
 options:["Selisih antara nilai tertinggi dan terendah dalam satu sampel","Rasio return terhadap risiko pada suatu periode","Jumlah standar deviasi penyimpangan suatu nilai dari rata-ratanya","Probabilitas suatu nilai muncul pada distribusi normal"],
 answer:2,
 explain:"Z score jawab pertanyaan: ini nyeleneh-nya seberapa? Bukan dalam rupiah, tapi dalam satuan standar deviasi. Gunanya biar hal yang beda skala bisa dibandingin — saham gocapan sama saham jutaan jadi setara. Ini juga rahasia di balik Bollinger Bands: pita atas dan bawahnya sebenarnya cuma Z score +2 dan -2 yang digambar di chart."},

{id:"cta-st-010",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Suatu deret waktu disebut stasioner apabila...",
 options:["Datanya tidak mengandung nilai ekstrem yang menyimpang jauh","Deretnya dapat diprediksi dari nilai-nilai sebelumnya","Nilainya bergerak dalam rentang yang tetap sepanjang waktu","Sifat statistiknya seperti rata-rata dan varians relatif stabil"],
 answer:3,
 explain:"Stasioner artinya aturan mainnya nggak berubah-ubah. Harga saham jelas nggak stasioner: rata-rata harga tahun 2010 sama 2025 beda jauh, jadi ngitung rata-rata seluruh periode itu nggak ada artinya. Tapi RETURN-nya jauh lebih stasioner — naik turun harian 1-2% itu kurang lebih sama dari dulu sampai sekarang. Makanya analisis kuantitatif hampir selalu dikerjain di return, bukan di harga mentah."},

{id:"cta-st-011",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Uji signifikansi statistik terhadap kinerja strategi bertujuan untuk...",
 options:["Menilai apakah hasil yang diamati mungkin muncul karena kebetulan","Menentukan parameter optimal bagi strategi yang sedang diuji","Membandingkan kinerja strategi terhadap strategi lain sejenis","Mengukur seberapa besar return yang dihasilkan strategi"],
 answer:0,
 explain:"Suruh seribu orang lempar koin sepuluh kali. Pasti ada satu yang dapet sepuluh angka beruntun. Dia jenius? Enggak, dia cuma satu dari seribu. Strategi yang untung setahun itu sama persis posisinya — pertanyaannya bukan untung berapa, tapi seberapa susah hasil segitu muncul secara kebetulan. Dan kalau lo udah nyoba 400 kombinasi parameter, standar buktinya harus jauh lebih ketat. Istilahnya data snooping."},

{id:"cta-st-012",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Rata-rata geometris lebih tepat digunakan daripada rata-rata aritmatik untuk menghitung...",
 options:["Rata-rata volume harian selama beberapa periode","Return majemuk selama beberapa periode berturut-turut","Volatilitas return pada satu periode tunggal","Perbandingan return antar instrumen pada periode yang sama"],
 answer:1,
 explain:"Ini jebakan yang bikin banyak orang salah baca prospektus. Modal 100 juta, tahun pertama +50%, tahun kedua -50%. Rata-rata biasa bilang 0%, impas. Cek aslinya: 100 jadi 150, terus 150 turun separo jadi 75 juta. Lo RUGI 25 juta. Rata-rata geometris yang jujur ngasih tau ini, rata-rata biasa selalu ngelebih-lebihin. Makin gede naik turunnya, makin jauh bohongnya."},

{id:"cta-st-013",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Volatility clustering yang teramati di pasar berarti...",
 options:["Volatilitas tinggi selalu diikuti penurunan harga yang tajam","Volatilitas bergerak acak tanpa pola dari periode ke periode","Periode bergejolak cenderung diikuti periode bergejolak pula","Volatilitas selalu kembali ke rata-rata jangka panjangnya"],
 answer:2,
 explain:"Pasar itu kayak cuaca: kalau hari ini badai, besok kemungkinan besar masih berangin. Nggak langsung cerah. Hari gila ngumpul bareng hari gila, hari adem ngumpul bareng hari adem. Ini dasar model ARCH dan GARCH, tapi manfaat praktisnya buat lo simpel: pas volatilitas lagi naik, kecilin ukuran posisi dan lebarin stop — karena kondisi itu kemungkinan besar masih lanjut beberapa hari ke depan."},

{id:"cta-st-014",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Beta dalam model pasar diperoleh dari...",
 options:["Selisih return aset dan return pasar pada periode yang sama","Rasio volatilitas aset terhadap volatilitas pasar keseluruhan","Korelasi return aset terhadap return pasar","Kemiringan regresi return aset terhadap return pasar"],
 answer:3,
 explain:"Beta jawab satu pertanyaan: kalau pasar gerak 1%, saham ini biasanya gerak berapa? Beta 1,4 artinya sekitar 1,4% — lebih liar dari pasar. Beta 0,6 artinya lebih kalem. Angkanya didapat dari kemiringan garis regresi, bukan dari korelasi (korelasi cuma bilang seberapa nyambung, bukan seberapa besar). Satu hal yang sering dilupain: beta itu berubah-ubah, jadi jangan pakai angka hasil hitungan tiga tahun lalu."},

{id:"cta-st-015",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Rolling window analysis digunakan untuk...",
 options:["Menghitung statistik pada jendela bergerak agar perubahannya terlihat","Membuang data terlama agar sampelnya tetap berukuran sama","Membagi data menjadi beberapa bagian untuk diuji secara terpisah","Menghitung statistik pada seluruh data sekaligus agar lebih akurat"],
 answer:0,
 explain:"Ngitung korelasi sekali buat sepuluh tahun itu kayak ngitung rata-rata suhu Jakarta sama Puncak terus bilang cuacanya sedang. Angkanya bener, tapi nggak ngegambarin apa pun. Rolling window ngitung ulang tiap jendela 60 hari yang geser terus, jadi lo bisa lihat korelasinya naik turun kapan. Ini cara paling gampang nangkep perubahan rezim pasar sebelum kebakaran."},

{id:"cta-st-016",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Spurious correlation terjadi ketika...",
 options:["Korelasi terukur nol padahal kedua deret sebenarnya berhubungan","Dua deret tampak berkorelasi kuat padahal hubungannya kebetulan","Korelasi berubah tanda ketika periode pengukurannya diperpanjang","Korelasi terlalu tinggi karena sampelnya terlalu sedikit"],
 answer:1,
 explain:"Ada data terkenal: jumlah film Nicolas Cage per tahun berkorelasi 0,66 sama angka orang tenggelam di kolam renang. Beneran, angkanya nyata. Tapi ya masa iya. Ini kejadian karena dua hal yang sama-sama naik terus bakal keliatan nyambung, padahal cuma sama-sama punya tren. Obatnya: analisis di RETURN, bukan di level harga. Trennya hilang, korelasi bodongnya ikut hilang."},

{id:"cta-st-017",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Median lebih tahan terhadap nilai ekstrem dibanding rata-rata, sehingga paling berguna untuk...",
 options:["Mengukur korelasi dua deret yang tidak berdistribusi normal","Menghitung volatilitas pada sampel yang mengandung nilai ekstrem","Meringkas distribusi hasil transaksi yang memiliki beberapa outlier","Menentukan tingkat signifikansi pada pengujian hipotesis statistik"],
 answer:2,
 explain:"Sembilan trader rugi, satu orang jackpot gede. Rata-ratanya bisa keliatan untung — padahal 90% orangnya buntung. Median (nilai tengah) jujur bilang hasil khasnya rugi. Buat jurnal trading lo, laporin dua-duanya: rata-rata nunjukin total, median nunjukin pengalaman sehari-hari lo. Kalau jaraknya jauh banget, berarti hasil lo gantung di segelintir transaksi doang — dan itu rapuh."},

{id:"cta-st-018",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Dalam mengevaluasi indikator baru secara kuantitatif, langkah yang paling penting adalah...",
 options:["Menguji apakah perhitungannya konsisten di berbagai perangkat lunak","Mencari periode parameter yang memberi hasil historis terbaik","Memastikan tampilannya mudah dibaca pada berbagai timeframe","Membandingkan kinerjanya terhadap tolok ukur sederhana seperti beli dan tahan"],
 answer:3,
 explain:"Indikator lo ngasih 22% setahun — bagus nggak? Nggak ada yang tau sampai lo tau pasarnya sendiri ngasih berapa. Kalau IHSG tahun itu naik 28%, indikator lo sebenarnya bikin lo RUGI 6% dibanding tidur-tiduran doang. Aturannya keras: kalau setelah dipotong biaya transaksi indikator lo nggak bisa ngalahin beli-lalu-tahan, buang aja. Ribet tapi nggak nambah hasil itu cuma bikin capek."},

{id:"cta-st-019",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Hurst exponent digunakan untuk mengukur...",
 options:["Kecenderungan deret bersifat trending, acak, atau mean reverting","Panjang siklus dominan yang terkandung dalam suatu deret","Proporsi pergerakan harga yang dapat dijelaskan oleh tren","Tingkat volatilitas rata-rata suatu deret waktu"],
 answer:0,
 explain:"Anggap aja alat tes kepribadian buat instrumen. Di atas 0,5 artinya keras kepala alias suka ngelanjutin arah — cocok buat strategi ngikut tren. Tepat 0,5 artinya acak, nggak ada pola buat dikejar. Di bawah 0,5 artinya plin-plan alias suka balik arah — cocok buat strategi mean reversion. Tes dulu sebelum milih senjata, jangan kebalik. Salah senjata itu penyebab rugi yang paling sering dan paling nggak kerasa."},

{id:"cta-st-020",module:"cta-statistik",level:"CTA",difficulty:"sedang",
 q:"Prinsip yang harus dipegang analis dalam menggunakan alat statistik adalah...",
 options:["Statistik memberi kepastian selama perhitungannya dilakukan dengan benar","Statistik memperkuat disiplin, tetapi asumsinya harus dipahami dan diuji","Statistik hanya berguna bagi peneliti akademis, bukan praktisi pasar","Statistik menggantikan kebutuhan akan manajemen risiko yang ketat"],
 answer:1,
 explain:"Angka statistik bikin orang kelewat pede, dan itu bahaya. Contoh nyata: LTCM isinya dua peraih Nobel, modelnya canggih banget, dan kolaps tahun 1998 karena modelnya nganggep distribusinya normal padahal ekornya gendut. Statistik itu alat bantu yang bagus, tapi dia ngasih jawaban berdasarkan asumsi yang lo kasih. Asumsinya ngaco, jawabannya ikut ngaco — bedanya sekarang lo salah dengan penuh keyakinan. Validasi di data yang belum pernah disentuh dan manajemen risiko tetap pengaman terakhir."}
]);
