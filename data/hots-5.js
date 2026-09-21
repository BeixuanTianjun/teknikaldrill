/* Soal HOTS batch 5 — cta-statistik, cta-elliott, cta-siklus, cta-breadth,
   rta-dasar, rta-plan, cta-teori */
TD.register([
/* ===== cta-statistik ===== */
{id:"cta-statistik-h01",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem diuji pada 12 tahun data dan menghasilkan 640 transaksi dengan rasio kemenangan 58 persen. Sistem kedua diuji pada 9 bulan data dan menghasilkan 31 transaksi dengan rasio kemenangan 74 persen. Mana yang lebih layak dipercaya?",
 options:["Keduanya setara, karena rasio kemenangan adalah ukuran yang tidak bergantung pada jumlah sampel","Sistem kedua, karena data yang lebih baru lebih mencerminkan keadaan pasar sekarang","Sistem pertama, karena 640 transaksi membuat hasilnya jauh lebih sulit terjadi karena kebetulan","Sistem kedua, karena rasio kemenangannya lebih tinggi sehingga harapan keuntungannya lebih besar"],
 answer:2,
 explain:"74% dari 31 transaksi itu angka yang gampang goyang. Balikin 4 transaksi aja dari menang jadi kalah, langsung jatoh ke 61%. Sementara 58% dari 640 transaksi, mau lo utak-atik 4 transaksi pun nyaris nggak gerak. Itu bedanya. Data baru emang ada nilainya, tapi nggak nutupin sampel yang kekecilan buat dibedain dari hoki. Aturan kasarnya: di bawah 100 transaksi, angka win rate lo masih dongeng."},

{id:"cta-statistik-h02",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Seorang analis mencoba 400 kombinasi parameter pada satu strategi, lalu melaporkan kombinasi terbaik dengan hasil uji yang sangat mengesankan. Apa kelemahan paling serius dari cara kerja ini?",
 options:["Jumlah kombinasi yang diuji tidak berpengaruh apa pun selama hasil akhirnya terbukti menguntungkan","Kelemahannya hanya pada lamanya waktu komputasi yang dibutuhkan untuk menguji sebanyak itu","Masalahnya terletak pada pemilihan strategi awal, bukan pada banyaknya kombinasi yang diuji","Dari 400 percobaan, hasil terbaik hampir pasti sebagian besar merupakan kebetulan yang tidak terulang"],
 answer:3,
 explain:"Namanya data mining bias. Uji 400 kombinasi di data yang sama, pasti ada beberapa yang kelihatan dewa — bukan karena jago, tapi karena kebetulan pas sama naik-turun acak di periode itu. Ibaratnya lempar koin 400 kali sepuluh lemparan, pasti ada yang dapet sepuluh angka beruntun. Obatnya dua: sisihin data yang belum pernah disentuh sama sekali buat nguji si pemenang, dan curigain parameter yang hasilnya ambruk begitu digeser dikit."},

{id:"cta-statistik-h03",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Dua sistem sama-sama menghasilkan keuntungan tahunan 24 persen. Sistem A pernah mengalami penurunan modal terdalam 12 persen, sistem B sebesar 38 persen. Bagaimana menilai keduanya?",
 options:["Sistem A unggul karena memberi imbal hasil yang sama dengan risiko penurunan sepertiga lebih kecil","Keduanya setara karena keuntungan tahunannya persis sama besar","Sistem B unggul karena penurunan yang dalam menandakan berani mengambil peluang besar","Tidak dapat dinilai tanpa mengetahui jumlah transaksi masing-masing sistem"],
 answer:0,
 explain:"Return doang itu setengah cerita. Drawdown 38% artinya modal 100 juta pernah jadi 62 juta. Pertanyaannya bukan 'secara matematis oke nggak', tapi 'lo kuat nggak ngeliatnya tiap hari selama berbulan-bulan'. Kebanyakan orang nggak kuat, dan nyerah tepat di titik terdalam, persis sebelum pulih. Sistem A ngasih untung yang sama dengan sakit sepertiganya. Itu bukan sedikit lebih baik, itu jauh lebih baik."},

{id:"cta-statistik-h04",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Hasil uji balik menunjukkan sistem membeli tepat pada harga penutupan hari sinyal muncul. Mengapa hasil seperti ini patut dicurigai?",
 options:["Masalahnya hanya pada biaya transaksi yang belum diperhitungkan dalam simulasi","Sinyal baru diketahui setelah penutupan, sehingga eksekusi pada harga itu memakai informasi yang belum tersedia","Harga penutupan selalu lebih tinggi dari harga pembukaan sehingga hasilnya menjadi terlalu optimistis","Uji balik memang tidak boleh memakai harga penutupan dalam bentuk apa pun"],
 answer:1,
 explain:"Ini namanya look-ahead bias, dan efeknya brutal. Sinyalnya baru ketahuan SETELAH pasar tutup, tapi simulasinya beli di harga close hari itu juga. Di dunia nyata lo nggak bisa, mesin waktu belum dijual. Salah satu bar doang udah cukup buat ngubah sistem rugi jadi kelihatan jenius. Backtest yang jujur masukin order di bar BERIKUTNYA, plus tambahin spread sama biaya transaksi yang masuk akal."},

{id:"cta-statistik-h05",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sebuah sistem menang 35 persen dari 500 transaksi, dengan rata-rata kemenangan 3,2R dan rata-rata kerugian 1R. Bagaimana menilai sistem ini?",
 options:["Tidak dapat dinilai, karena rasio kemenangan dan besar kemenangan tidak boleh digabungkan","Layak, tetapi hanya bila rasio kemenangannya dapat dinaikkan sampai di atas 50 persen","Layak, karena harapan keuntungannya positif meski lebih sering kalah daripada menang","Tidak layak, karena sistem dengan rasio kemenangan di bawah separuh selalu merugi dalam jangka panjang"],
 answer:2,
 explain:"Itung dulu baru nilai: 0,35 x 3,2R = 1,12R, dikurangi 0,65 x 1R = 0,65R. Sisa 0,47R per transaksi. Positif, jadi layak. Salah lebih sering daripada bener itu nggak masalah, asal yang bener dibiarin lari jauh. Tapi tantangan aslinya bukan di matematika: di win rate 35%, rentetan kalah 8-10 kali beruntun itu PASTI muncul, bukan kemungkinan. Yang bikin orang gagal di sistem kayak gini selalu nyalinya, bukan itungannya."},

{id:"cta-statistik-h06",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Sistem yang selama tiga tahun berjalan baik kini mengalami penurunan modal 15 persen, sementara penurunan terdalam pada uji baliknya adalah 14 persen. Apa langkah paling tepat?",
 options:["Segera menghentikan sistem karena penurunan aktual sudah melampaui rekor uji balik","Menambah ukuran posisi karena setelah penurunan biasanya datang pemulihan","Mengubah parameter sistem sampai penurunan pada uji balik terbaru menjadi lebih kecil","Mengurangi ukuran posisi dan menyelidiki apakah perilaku pasar berubah, tanpa langsung menghentikannya"],
 answer:3,
 explain:"Drawdown terdalam di backtest itu bukan batas atas, cuma yang kebetulan kejadian di data itu. Lewat dikit ya wajar. Tapi tetep lampu kuning. Respons yang proporsional: kecilin ukuran posisi sambil ngecek apakah asumsi dasarnya masih berlaku. Yang HARAM: ngutak-atik parameter sampai backtest-nya cakep lagi. Itu bukan benerin sistem, itu ngerusak satu-satunya alat ukur yang lo punya. Habis itu lo terbang tanpa instrumen."},

{id:"cta-statistik-h07",module:"cta-statistik",level:"CTA",difficulty:"sulit",
 q:"Dua strategi digabungkan dalam satu portofolio. Keduanya menguntungkan, tetapi korelasi kurva ekuitasnya 0,92. Apa implikasi bagi portofolio itu?",
 options:["Manfaat penyebaran risikonya kecil karena keduanya cenderung merugi pada periode yang sama","Korelasi tinggi menguntungkan karena keduanya akan menghasilkan laba secara bersamaan","Portofolio menjadi lebih aman karena dua sistem selalu lebih baik daripada satu sistem","Korelasi kurva ekuitas tidak berkaitan dengan risiko selama kedua sistem menguntungkan"],
 answer:0,
 explain:"Gabungin dua sistem cuma ngehalusin kurva kalau jatuhnya nggak barengan. Di korelasi 0,92, dua-duanya ambruk di bulan yang sama, jadi drawdown portofolio lo hampir sedalem masing-masing. Lo nggak dapet apa-apa selain kerjaan dobel. Yang dicari itu bukan JUMLAH sistem, tapi keragaman sumber untungnya: satu ngikut tren, satu main mean reversion. Yang begini baru bener-bener saling nutup."},

/* ===== cta-elliott ===== */
{id:"cta-elliott-h01",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Seorang analis menghitung gelombang naik dan menemukan gelombang 4 turun sampai masuk ke wilayah harga gelombang 1. Apa yang seharusnya dilakukan?",
 options:["Menyatakan tren berakhir karena tumpang tindih menandakan gelombang impuls telah selesai","Mengulang penghitungan, karena tumpang tindih itu melanggar aturan dasar gelombang impuls","Menerimanya sebagai pengecualian karena tumpang tindih ringan umum terjadi di pasar nyata","Mengabaikan gelombang 4 dan melanjutkan penghitungan langsung ke gelombang 5"],
 answer:1,
 explain:"Elliott punya tiga aturan yang nggak bisa ditawar: gelombang 2 nggak boleh nembus awal gelombang 1, gelombang 3 nggak boleh paling pendek, dan gelombang 4 nggak boleh masuk wilayah gelombang 1. Kalau kelanggar, itu BUKAN pengecualian, itu bukti hitungan lo salah. Titik. Biasanya yang kejadian: itu sebenernya pola diagonal, atau struktur korektif yang kebaca sebagai impuls. Ngotot maksain hitungan yang melanggar aturan itu awal dari semua kekacauan berikutnya."},

{id:"cta-elliott-h02",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Gelombang 1 naik 100 poin dan gelombang 3 naik 95 poin. Mengapa penghitungan ini bermasalah?",
 options:["Selisih 5 poin menandakan datanya tidak akurat sehingga harus diperiksa ulang","Gelombang 1 tidak boleh lebih panjang dari gelombang 3 dalam keadaan apa pun","Gelombang 3 tidak boleh menjadi yang terpendek di antara gelombang 1, 3, dan 5","Gelombang 3 wajib berukuran tepat 1,618 kali gelombang 1 tanpa penyimpangan"],
 answer:2,
 explain:"Perhatiin baik-baik, aturannya BUKAN gelombang 3 harus terpanjang, tapi nggak boleh TERPENDEK. Jadi selama gelombang 5 nanti lebih pendek dari 95 poin, hitungan ini masih sah. Tapi tetep mencurigakan, karena gelombang 3 itu biasanya yang paling bertenaga — dia gelombang yang semua orang akhirnya sadar trennya nyata. Kalau gelombang 3 lemes kayak gini, sering yang kejadian sebenernya struktur korektif, bukan impuls."},

{id:"cta-elliott-h03",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Dua analis Elliott berpengalaman memberi penghitungan berbeda pada grafik yang sama, dan keduanya tidak melanggar satu pun aturan dasar. Apa kesimpulan yang paling masuk akal?",
 options:["Salah satu analis pasti melakukan kesalahan teknis yang belum ditemukan","Elliott Wave terbukti tidak memiliki nilai analitis sama sekali","Yang benar adalah penghitungan dari analis yang lebih lama pengalamannya","Penghitungan gelombang bersifat menafsirkan, sehingga harus dipakai bersama alat lain, bukan sendirian"],
 answer:3,
 explain:"Hitungan alternatif itu bawaan lahir metodenya, bukan tanda pemakainya bego. Nilai Elliott bukan di ramalan tunggal, tapi di kerangka mikir soal struktur dan skenario berjenjang. Praktik yang sehat: siapin hitungan utama DAN alternatif, tentuin level pembatalan di depan sebelum harga gerak, terus biarin pasar yang milih. Yang bahaya itu analis yang cuma punya satu hitungan dan nggak pernah nyebut kapan dia salah."},

{id:"cta-elliott-h04",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Gelombang 2 mengoreksi dalam sampai 78,6 persen dari gelombang 1 dan berbentuk zigzag tajam. Menurut aturan alternasi, apa yang diperkirakan terjadi pada gelombang 4?",
 options:["Koreksi mendatar yang lebih dangkal dan lebih lama, berbeda watak dari gelombang 2","Koreksi tajam serupa dengan kedalaman sekitar 78,6 persen dari gelombang 3","Gelombang 4 tidak akan terbentuk karena gelombang 2 sudah terlalu dalam","Koreksi yang jauh lebih dalam dari gelombang 2 sebagai kelanjutan polanya"],
 answer:0,
 explain:"Aturan alternasi: dua koreksi dalam satu impuls biasanya beda watak. Gelombang 2 yang tajam dan dalem biasanya diikutin gelombang 4 yang mendatar, dangkal, dan lama banget. Gunanya praktis banget: habis lihat gelombang 2 yang tajam, lo nggak panik pas gelombang 4 jalan nyamping berminggu-minggu ngebosenin. Karena emang gitu yang diharapkan. Yang nggak tau aturan ini biasanya keluar duluan pas lagi bosen, tepat sebelum gelombang 5."},

{id:"cta-elliott-h05",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Harga sudah menyelesaikan lima gelombang naik pada grafik harian, tetapi pada grafik bulanan struktur itu hanyalah gelombang 3 dari derajat yang lebih besar. Apa implikasinya?",
 options:["Kedua penghitungan saling bertentangan sehingga keduanya harus dibatalkan","Koreksi yang datang adalah gelombang 4 derajat besar, sehingga tren utama belum berakhir","Tren naik telah berakhir karena lima gelombang selalu berarti siklus selesai","Grafik bulanan harus diabaikan karena sinyal harian lebih aktual"],
 answer:1,
 explain:"Ini inti Elliott yang paling sering bikin kacau: setiap gelombang tersusun dari gelombang berderajat lebih kecil. Lima gelombang di harian selesai, oke, itu emang akhir satu babak. Tapi kalau dia cuma gelombang 3 di bulanan, yang dateng berikutnya adalah koreksi gelombang 4, terus gelombang 5 yang bawa harga ke puncak BARU. Salah nilai derajat itu sumber kesalahan terbesar pemakai Elliott: ngira siklus selesai padahal baru setengah jalan."},

{id:"cta-elliott-h06",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Gelombang 5 membentuk puncak baru tetapi tidak melampaui ujung garis tren saluran, sementara momentum jauh lebih lemah dibanding gelombang 3. Bagaimana menafsirkannya?",
 options:["Momentum yang melemah menandakan gelombang 5 akan berkembang menjadi gelombang perpanjangan","Harga akan kembali ke puncak gelombang 3 sebelum melanjutkan kenaikannya","Ciri khas gelombang 5 yang kehabisan tenaga, memperkuat dugaan siklus akan segera berakhir","Gelombang 5 yang gagal menembus saluran berarti penghitungannya salah sejak awal"],
 answer:2,
 explain:"Momentum lemes di gelombang 5 itu normal, bukan anomali. Logikanya: gelombang 3 didorong pengakuan luas, semua orang akhirnya sadar. Gelombang 5 didorong sisa-sisa optimis yang makin tipis. Nah, kalau barengan sama itu harga nggak sanggup nyentuh batas atas channel, dua pembacaan itu sejalan dan saling nguatin. Di titik ini analis mulai nyiapin skenario koreksi tiga gelombang, bukan nambah posisi."},

{id:"cta-elliott-h07",module:"cta-elliott",level:"CTA",difficulty:"sulit",
 q:"Analis memperkirakan koreksi gelombang 4 akan berhenti di 61,8 persen dari gelombang 3, sama seperti gelombang 2 terhadap gelombang 1. Mengapa perkiraan ini lemah?",
 options:["Rasio Fibonacci tidak pernah berlaku untuk gelombang korektif mana pun","Gelombang 4 justru cenderung lebih dalam daripada gelombang 2 pada umumnya","Kedalaman gelombang 4 hanya boleh diukur terhadap gelombang 1, bukan gelombang 3","Gelombang 4 biasanya jauh lebih dangkal, umumnya 23,6 sampai 38,2 persen dari gelombang 3"],
 answer:3,
 explain:"Gelombang 2 dan 4 itu beda kepribadian. Gelombang 2 dalem karena orang masih ragu, banyak yang ngira kenaikan awal cuma pantulan doang, jadi dijual abis-abisan. Gelombang 4 dangkal karena trennya udah diakui, tiap turun langsung dicaplok pembeli. Makanya gelombang 4 biasanya cuma 23,6% sampai 38,2% dari gelombang 3. Masang order beli di 61,8% buat gelombang 4 itu cara klasik nungguin harga yang nggak pernah dateng."},

/* ===== cta-siklus ===== */
{id:"cta-siklus-h01",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Sebuah siklus 40 hari terdeteksi konsisten selama dua tahun, lalu selama enam bulan terakhir titik dasarnya bergeser jauh dari jadwal. Apa sikap yang paling tepat?",
 options:["Menurunkan bobot siklus itu dan mencari penyebab perubahannya, karena siklus pasar tidak permanen","Tetap memakainya karena siklus yang pernah terbukti akan selalu kembali ke jadwalnya","Memperpendek periode siklus menjadi 20 hari agar cocok dengan data terbaru","Menyimpulkan analisis siklus tidak berguna dan meninggalkannya sepenuhnya"],
 answer:0,
 explain:"Siklus pasar itu bukan hukum fisika, dia lahir dari kelakuan rame-rame yang bisa berubah seiring pelakunya ganti. Siklus yang ilang itu INFORMASI, bukan gangguan: ada yang berubah di pasarnya. Yang paling sering dilakuin orang dan paling salah: setel ulang periodenya biar cocok sama enam bulan terakhir. Itu namanya nyocokin kurva ke noise, dan biasanya langsung ambruk begitu diuji ke depan."},

{id:"cta-siklus-h02",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Tiga siklus dengan periode 10, 20, dan 40 hari diperkirakan mencapai titik dasar pada pekan yang sama. Apa implikasinya bagi analis?",
 options:["Kebetulan ini tidak bermakna karena siklus dengan periode berbeda tidak dapat dibandingkan","Peluang titik balik yang berarti meningkat, karena penguatan beberapa siklus memperbesar amplitudonya","Ketiga siklus saling meniadakan sehingga pergerakan harga justru akan mendatar","Hanya siklus 40 hari yang perlu diperhatikan karena periodenya paling panjang"],
 answer:1,
 explain:"Prinsip harmonik: siklus yang periodenya kelipatan cenderung nyatu berkala. Pas 10, 20, dan 40 hari sama-sama nyentuh dasar, gelombangnya saling nguatin dan titik baliknya jadi jauh lebih tegas. Kebalikannya juga berlaku dan sering dilupain: kalau satu lagi di dasar sementara yang lain di puncak, mereka saling meredam dan harga jalan mendatar nggak jelas. Jadi periode 'nggak ada apa-apa' itu sering bukan pasar lagi bingung, tapi siklusnya lagi saling makan."},

{id:"cta-siklus-h03",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Dalam siklus 30 hari, puncak-puncaknya semakin bergeser mendekati awal siklus dari waktu ke waktu. Apa yang ditunjukkan gejala ini?",
 options:["Amplitudo siklus membesar sehingga pergerakan harga akan semakin liar","Datanya mengandung kesalahan karena puncak siklus seharusnya tidak bergeser","Right translation berubah menjadi left translation, menandakan tren besar melemah","Periode siklus memendek sehingga harus dihitung ulang menjadi lebih singkat"],
 answer:2,
 explain:"Letak puncak di dalam siklus itu petunjuk halus soal tren besarnya. Di tren naik, puncak muncul di paruh AKHIR siklus, jadi bagian naiknya lebih panjang daripada turunnya. Namanya right translation. Pas puncaknya mulai geser ke depan jadi left translation, artinya waktu yang dipakai buat turun makin panjang. Ini sering muncul MENDAHULUI perubahan tren besar, jauh sebelum kelihatan di harga. Sinyal halus yang jarang diperhatiin."},

{id:"cta-siklus-h04",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Siklus 60 hari memberi sinyal beli, tetapi tren pada grafik mingguan jelas menurun. Apa keputusan yang paling bijak?",
 options:["Segera membeli karena analisis siklus lebih presisi daripada analisis tren","Membeli dengan ukuran ganda untuk memanfaatkan harga yang sudah jatuh dalam","Mengabaikan siklus sepenuhnya selama tren mingguan masih menurun","Menunggu konfirmasi harga, karena siklus menunjukkan waktu sedangkan arah ditentukan tren yang lebih besar"],
 answer:3,
 explain:"Siklus jawab pertanyaan KAPAN, bukan KE MANA. Dasar siklus di tengah tren turun biasanya cuma ngasih pantulan yang cepet padam, bukan pembalikan. Pemakaian yang bener: siklus dipakai sebagai penyaring waktu DI DALAM arah yang udah ditentuin tren besar. Kalau mau lawan tren mingguan, minimal tunggu bukti dari harga dulu. Beli cuma karena kalender bilang waktunya dasar itu cara cepat kena pisau jatuh."},

{id:"cta-siklus-h05",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Seorang analis menerapkan siklus musiman yang secara historis kuat pada bulan tertentu, tetapi tahun ini harga bergerak berlawanan. Apa penjelasan paling masuk akal?",
 options:["Kecenderungan musiman bersifat rata-rata statistik, sehingga tahun tertentu bisa menyimpang jauh","Pola musiman tersebut pasti sudah tidak berlaku lagi dan harus dibuang dari analisis","Data historis yang dipakai mengandung kesalahan sehingga polanya semu","Pola musiman hanya berlaku pada komoditas dan tidak pernah berlaku pada saham"],
 answer:0,
 explain:"Pola musiman itu gambaran rata-rata puluhan tahun, dan di dalem rata-rata itu selalu ada tahun yang gerak berlawanan. Satu tahun meleset bukan bukti polanya mati, sama kayak sekali hujan di musim kemarau nggak bikin musimnya berubah. Cara makainya: jadiin bobot TAMBAHAN buat sinyal teknikal lain, jangan pernah jadi alasan tunggal masuk pasar. Yang entry cuma modal 'katanya bulan ini biasanya naik' itu lagi judi pakai data."},

{id:"cta-siklus-h06",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Analis menghaluskan data dengan rata-rata bergerak untuk memperjelas siklus, lalu menemukan siklus yang sangat rapi. Apa risiko terbesar dari pendekatan ini?",
 options:["Risikonya hanya pada keterlambatan sinyal, bukan pada keabsahan siklus yang ditemukan","Penghalusan itu sendiri dapat menciptakan gelombang semu yang tidak ada pada data aslinya","Rata-rata bergerak tidak pernah boleh dipakai bersama analisis siklus dalam bentuk apa pun","Siklus yang terlihat rapi selalu berarti periodenya terlalu pendek untuk berguna"],
 answer:1,
 explain:"Ini efek Slutzky-Yule, dan serem: ngehalusin data ACAK doang bisa MEMUNCULKAN gelombang berkala yang kelihatan meyakinkan, padahal di data mentahnya nggak ada. Jadi siklus yang lo temuin lewat penghalusan itu bisa jadi ciptaan rata-rata bergeraknya sendiri, bukan temuan. Wajib diuji balik ke data asli: titik baliknya beneran barengan sama titik balik harga yang nyata, atau cuma cantik di garis yang udah dihalusin?"},

{id:"cta-siklus-h07",module:"cta-siklus",level:"CTA",difficulty:"sulit",
 q:"Siklus 20 hari diperkirakan mencapai dasar hari ini, tetapi harga justru terus melemah selama lima hari berikutnya. Apa tindakan yang paling tepat?",
 options:["Menggandakan posisi beli karena harga menjadi lebih murah dari perkiraan","Menggeser periode siklus menjadi 25 hari agar cocok dengan kejadian terakhir","Memberi toleransi waktu beberapa hari, karena titik balik siklus selalu berupa jendela, bukan tanggal pasti","Membatalkan seluruh analisis siklus karena perkiraan tanggalnya meleset"],
 answer:2,
 explain:"Patokan bakunya toleransi sekitar 10-15% dari panjang siklus. Siklus 20 hari berarti jendelanya 2-3 hari di kiri kanan, bukan tanggal pasti. Lima hari udah di luar jendela, jadi catet sebagai peringatan, tapi belum ngebatalin kerangkanya. Yang nentuin tetep HARGA. Tanggal siklus itu cuma hipotesis sampai ada bukti pembalikan beneran. Beli cuma karena hari ini tanggalnya itu sama aja percaya ramalan bintang."},

/* ===== cta-breadth ===== */
{id:"cta-breadth-h01",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Indeks mencetak rekor tertinggi baru, tetapi garis advance-decline telah menurun selama tiga bulan. Apa makna yang paling tepat?",
 options:["Garis advance-decline sedang rusak karena seharusnya selalu searah dengan indeks","Indeks akan segera jatuh dalam hitungan hari karena divergensi sudah berlangsung lama","Divergensi ini tidak bermakna karena indeks adalah ukuran yang paling dapat dipercaya","Kenaikan indeks ditopang segelintir saham besar, sehingga dasar kenaikannya rapuh"],
 answer:3,
 explain:"Indeks itu ditimbang kapitalisasi, jadi dia bisa naik meskipun mayoritas sahamnya turun, asal beberapa raksasa narik. Garis advance-decline ngitung tiap saham SETARA, jadi dia mbongkar apa yang disembunyiin indeks. Divergensi kayak gini sering dateng sebelum puncak besar. Tapi hati-hati, jedanya bisa berbulan-bulan. Jadi ini peringatan buat ngencengin risiko, bukan aba-aba jual besok pagi."},

{id:"cta-breadth-h02",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Jumlah saham yang mencetak titik terendah 52 minggu melonjak tajam pada hari indeks jatuh, sementara pada dua penurunan sebelumnya jumlahnya jauh lebih sedikit. Apa implikasinya?",
 options:["Tekanan jual meluas ke seluruh pasar, memperbesar kemungkinan ini penurunan yang lebih serius","Lonjakan titik terendah baru selalu menandai dasar pasar sehingga saat ini waktu membeli","Data itu tidak bermakna karena titik terendah 52 minggu hanya mencerminkan masa lalu","Indeks akan pulih cepat karena penurunan yang meluas biasanya berumur pendek"],
 answer:0,
 explain:"Kuncinya bandingin antar kejadian. Penurunan dengan sedikit new low artinya rusaknya kebatas di beberapa sektor doang. Pas jumlahnya melonjak, rusaknya nyeluruh. Ini penurunan yang beda kelas. Emang sih lonjakan ekstrem kadang nandain kepanikan yang bikin dasar, tapi itu cuma bisa dinilai SETELAH harga nunjukin pembalikan, bukan di hari lonjakannya. Nangkep pisau jatuh pakai alasan 'udah kepanikan maksimal' itu cara mahal buat belajar."},

{id:"cta-breadth-h03",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Dalam satu sesi, volume saham yang naik mencapai sembilan kali volume saham yang turun. Bagaimana analis sebaiknya menafsirkannya?",
 options:["Tanda bahwa perdagangan hari itu didominasi satu saham berkapitalisasi sangat besar","Tanda dorongan pembelian yang kuat dan meluas, sering muncul pada awal tren naik baru","Tanda pasar sudah terlalu panas sehingga penurunan akan datang keesokan harinya","Data tidak bermakna karena rasio volume tidak mencerminkan jumlah saham yang bergerak"],
 answer:1,
 explain:"Hari dengan rasio sembilan banding satu, yang dipopulerin Martin Zweig, itu jarang banget kejadian. Artinya ada pembelian serentak di banyak saham sekaligus, bukan cuma satu dua nama. Kekuatannya nambah kalau muncul BERPASANGAN dalam beberapa pekan setelah penurunan besar. Sinyal kayak gini ngomongin perubahan sikap pasar secara keseluruhan, bukan soal satu saham. Makanya dipakai buat naikin eksposur total, bukan buat milih saham."},

{id:"cta-breadth-h04",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Indeks turun 8 persen tetapi persentase saham yang berada di atas rata-rata bergerak 200 hari hanya turun dari 68 menjadi 62 persen. Apa yang ditunjukkan data ini?",
 options:["Pasar turun sudah dimulai karena penurunan indeks 8 persen adalah ambang batas bakunya","Rata-rata bergerak 200 hari terlalu lambat untuk dipakai menilai keadaan pasar","Kerusakan struktural terbatas, sehingga penurunan lebih menyerupai koreksi daripada awal pasar turun","Data tersebut bertentangan sehingga salah satunya pasti mengandung kesalahan"],
 answer:2,
 explain:"Persentase saham di atas MA200 itu ngukur kesehatan jangka panjang pasar. Di penurunan yang bener-bener bahaya, angka ini runtuh ke bawah 30% karena tren panjang banyak saham beneran patah. Turun cuma enam poin (68 ke 62) sementara indeks kehilangan 8%? Artinya mayoritas saham masih di atas tren panjangnya. Itu ciri khas KOREKSI di dalam tren naik, bukan awal bear market. Panik di titik ini biasanya bikin nyesel."},

{id:"cta-breadth-h05",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Sebuah bursa didominasi lima saham yang mencakup 45 persen kapitalisasi pasar. Mengapa hal ini mengubah cara membaca indikator keluasan pasar?",
 options:["Indikator keluasan pasar menjadi tidak berlaku sama sekali pada bursa dengan konsentrasi tinggi","Indeks menjadi lebih akurat karena hanya perlu memantau lima saham utama saja","Konsentrasi kapitalisasi tidak berpengaruh apa pun terhadap pembacaan keluasan pasar","Perbedaan antara indeks dan keluasan pasar menjadi lebih sering, sehingga keluasan lebih penting diperiksa"],
 answer:3,
 explain:"Makin terkonsentrasi sebuah bursa, makin gampang indeksnya ngebohong soal nasib mayoritas sahamnya. Lima saham 45% kapitalisasi artinya indeks naik bisa berarti lima saham itu naik dan ratusan lainnya berdarah. Nah, justru di bursa kayak gini indikator breadth jadi PALING berguna, bukan paling bisa diabaikan. Ini relevan banget buat IHSG, yang konsentrasinya juga tinggi di segelintir bank sama konglomerasi."},

{id:"cta-breadth-h06",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"McClellan Oscillator menunjukkan bacaan di bawah minus 100 selama dua pekan, sementara indeks hanya turun tipis. Bagaimana menilai keadaan ini?",
 options:["Pelemahan internal lebih dalam daripada yang tampak pada indeks, sehingga risikonya lebih besar","Osilator pasti salah baca karena indeks yang hanya turun tipis membuktikan pasar sehat","Bacaan di bawah minus 100 adalah sinyal beli yang berdiri sendiri tanpa perlu konfirmasi","Osilator ini hanya berlaku untuk perdagangan harian dan tidak relevan untuk dua pekan"],
 answer:0,
 explain:"McClellan Oscillator dibangun dari selisih saham naik dan turun, jadi dia ngukur apa yang kejadian DI DALAM pasar, bukan di permukaan indeks. Bertahan di bawah minus 100 selama dua pekan artinya jualan jalan terus dan merata, sementara indeks kelihatan adem berkat beberapa saham gede. Ketimpangan kayak gini jarang berakhir tanpa penyesuaian harga. Biasanya indeksnya yang akhirnya nyusul ke bawah, bukan sebaliknya."},

/* ===== rta-dasar ===== */
{id:"rta-dasar-h09",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Seorang klien bertanya mengapa analisis teknikal dapat berfungsi padahal tidak melihat laporan keuangan sama sekali. Jawaban mana yang paling tepat?",
 options:["Analisis teknikal hanya berfungsi pada saham kecil yang laporan keuangannya tidak diperhatikan","Harga sudah mencerminkan semua informasi yang diketahui pelaku pasar, termasuk laporan keuangan","Analisis teknikal berfungsi karena laporan keuangan pada dasarnya tidak dapat dipercaya","Analisis teknikal tidak memerlukan alasan karena pola harga terbukti berulang dengan sendirinya"],
 answer:1,
 explain:"Landasan pertama Dow: harga mendiskon segalanya. Tiap laporan, rumor, dan harapan udah kecermin di harga yang kebentuk dari transaksi nyata. Makanya analis teknikal mempelajari hasil akhirnya, bukan bahan bakunya. Satu peringatan penting buat jawab pertanyaan kayak gini: JANGAN jelek-jelekin analisis fundamental. Itu bukan bagian dari argumennya, dan malah bikin lo kelihatan nggak paham. Dua metode ini beda sudut pandang, bukan musuhan."},

{id:"rta-dasar-h10",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Bila hipotesis pasar efisien bentuk lemah benar sepenuhnya, apa konsekuensinya bagi analisis teknikal?",
 options:["Analisis fundamental juga menjadi tidak berguna sehingga tidak ada metode yang tersisa","Hipotesis tersebut justru membuktikan kebenaran seluruh prinsip analisis teknikal","Pola harga masa lalu tidak akan memberi keunggulan, sehingga klaim teknikal harus diuji secara empiris","Analisis teknikal tetap berfungsi karena hipotesis itu hanya berlaku pada data fundamental"],
 answer:2,
 explain:"Bentuk lemah bilang harga masa lalu nggak bisa dipakai nebak harga berikutnya, dan itu nabrak analisis teknikal telak-telakan. Sikap profesional bukan ngambek nolak, tapi ngejawab pakai bukti: uji sistem di data yang belum pernah disentuh, laporin hasilnya apa adanya, termasuk setelah dipotong biaya transaksi. Catet bedanya: bentuk SEDANG dan KUAT yang nyasar analisis fundamental, bukan teknikal. Sering ketuker di ujian."},

{id:"rta-dasar-h11",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Sebuah pola teknikal memberi hasil sangat baik pada data 1990 sampai 2005, tetapi kinerjanya memudar setelah 2010. Apa penjelasan paling masuk akal?",
 options:["Data setelah 2010 pasti mengandung kesalahan karena pola teknikal bersifat universal dan abadi","Pola tersebut akan kembali berfungsi dengan sendirinya bila ditunggu cukup lama","Periode 1990 sampai 2005 terlalu pendek untuk menghasilkan kesimpulan apa pun","Struktur pasar berubah oleh perdagangan elektronik dan algoritma, sehingga pola lama kehilangan keunggulannya"],
 answer:3,
 explain:"Pasar itu bukan sistem yang diem. Desimalisasi harga, eksekusi order kecepatan tinggi, dan algoritma yang ngeburu pola yang sama pelan-pelan ngikis keunggulan yang dulu nyata. Sikap profesional: pantau kinerja terus-menerus, dan siap MENSIUNIN pola yang keunggulannya udah abis. Yang salah: nyalahin datanya, atau nunggu-nunggu 'nanti juga balik lagi'. Pola yang udah diketahui semua orang itu bukan keunggulan lagi, itu cuma pengetahuan umum."},

{id:"rta-dasar-h12",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Dua saham sama-sama membentuk pola penembusan yang identik. Saham pertama bernilai transaksi harian 200 miliar rupiah, saham kedua 300 juta rupiah. Mengapa keduanya tidak boleh diperlakukan sama?",
 options:["Pada saham yang sangat tipis, harga mudah digerakkan sedikit pihak sehingga polanya kurang bermakna","Pola teknikal secara teori hanya berlaku pada saham yang masuk indeks utama","Saham tipis selalu memberi keuntungan lebih besar sehingga justru lebih layak dibeli","Perbedaan nilai transaksi hanya memengaruhi biaya, bukan keabsahan polanya"],
 answer:0,
 explain:"Pola teknikal bermakna karena dia nyerminin tarik-ulur BANYAK pelaku. Di saham yang transaksinya cuma 300 juta sehari, satu orang aja sanggup bikin bentuk yang mirip pola sempurna. Itu bukan pola, itu lukisan. Tambah lagi spread-nya lebar dan susah keluar pas panik. Saham setipis itu nuntut ukuran posisi jauh lebih kecil, atau dilewatin aja. Pola cakep di saham gorengan itu biasanya umpan, bukan sinyal."},

{id:"rta-dasar-h13",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Seorang analis menyusun laporan yang menyimpulkan sebuah saham layak dibeli, padahal perusahaan tempatnya bekerja sedang memegang posisi besar di saham itu. Apa yang dituntut oleh etika profesi?",
 options:["Meminta pihak lain menandatangani laporan agar kepentingan itu tidak lagi menjadi masalah","Mengungkapkan kepentingan tersebut di dalam laporan sehingga pembaca dapat menilai sendiri","Membatalkan laporan karena analis dilarang menulis tentang saham yang dimiliki perusahaannya","Melanjutkan tanpa keterangan apa pun selama isi analisisnya memang benar secara teknikal"],
 answer:1,
 explain:"Kode etik analis teknikal itu tumpuannya KETERBUKAAN benturan kepentingan, bukan larangan punya. Boleh kok perusahaan lo pegang saham itu, asal ditulis di laporannya biar pembaca bisa nimbang sendiri. Nyembunyiin itu pelanggaran berat. Dan mindahin tanda tangan ke orang lain justru NAMBAH pelanggaran baru, yaitu nyesatin soal siapa penulis sebenernya. Satu baris disclosure itu murah, reputasi yang ilang nggak bisa dibeli."},

{id:"rta-dasar-h14",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Prinsip Dow menyatakan tren memiliki tiga fase. Pada fase mana partisipasi publik biasanya mencapai puncaknya, dan apa implikasinya bagi analis?",
 options:["Fase partisipasi publik, ketika tren baru saja dikenali dan risikonya masih paling kecil","Ketiga fase memiliki tingkat partisipasi publik yang kurang lebih sama besarnya","Fase distribusi, ketika berita positif melimpah tetapi pihak berpengalaman justru mengurangi posisi","Fase akumulasi, ketika harga masih murah sehingga publik berlomba masuk lebih awal"],
 answer:2,
 explain:"Urutannya: akumulasi (pihak yang tau duluan beli pas berita masih suram), partisipasi publik (tren mulai keliatan, rame ikutan), distribusi (berita paling cemerlang, minat publik memuncak). Ironinya di sini: pas semua alasan buat beli kedengeran PALING meyakinkan, yang beli duluan justru lagi jualan ke lo. Cara ngenalinnya bukan dari berita, tapi dari volume sama breadth yang mulai nggak nyambung sama harga."},

/* ===== rta-plan ===== */
{id:"rta-plan-h07",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Modal 500 juta rupiah dengan risiko maksimal 1 persen per transaksi. Harga masuk 2.500 dan stop di 2.350. Berapa jumlah lembar maksimal yang boleh dibeli?",
 options:["50.000 lembar","20.000 lembar","200.000 lembar","33.333 lembar"],
 answer:3,
 explain:"Risiko rupiah = 1% x 500 juta = 5 juta. Risiko per lembar = 2.500 - 2.350 = 150 rupiah. Jumlah lembar = 5 juta / 150 = 33.333 lembar, sekitar 333 lot. Yang penting diperhatiin itu URUTANNYA: stop ditentuin DULUAN oleh struktur grafik (di bawah support, di bawah swing low), baru ukuran posisi ngikut. Bukan kebalik. Yang nentuin ukuran dulu terus nyari-nyari stop yang pas itu udah salah dari langkah pertama."},

{id:"rta-plan-h08",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Seorang analis mengalami empat kerugian beruntun, lalu menggandakan ukuran posisi pada transaksi kelima untuk menutup kerugian sekaligus. Apa kelemahan paling serius dari keputusan ini?",
 options:["Ukuran posisi menjadi bergantung pada hasil masa lalu, padahal setiap transaksi berdiri sendiri","Kelemahannya hanya pada beban psikologis, sementara secara matematis pendekatan ini benar","Pendekatan ini baik asalkan rasio kemenangan sistemnya berada di atas 50 persen","Tidak ada kelemahan selama stop loss tetap dipasang pada transaksi kelima tersebut"],
 answer:0,
 explain:"Ini kekeliruan penjudi versi pengelolaan uang. Pasar nggak inget lo baru rugi empat kali, jadi peluang transaksi kelima nggak membaik seuprit pun. Yang berubah cuma satu: duit yang lo pertaruhkan malah digedein persis pas modal lagi nyusut. Pendekatan yang bener gerak KEBALIKANNYA: kecilin ukuran pas ekuitas turun, gedein pas ekuitas tumbuh. Martingale kelihatan masuk akal di atas kertas sampai lo ketemu rentetan kalah ketujuh."},

{id:"rta-plan-h09",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Sebuah rencana dagang memuat aturan masuk dan keluar yang rinci, tetapi tidak memuat aturan tentang apa yang harus dilakukan ketika pasar dibuka melompati level stop. Mengapa kekosongan ini berbahaya?",
 options:["Masalahnya hanya administratif dan dapat diselesaikan dengan mencatatnya setelah kejadian","Keputusan akan diambil dalam tekanan saat kerugian sudah melampaui rencana, dan itu paling rawan keliru","Lompatan pembukaan sangat jarang terjadi sehingga sebenarnya tidak perlu diatur","Kekosongan itu tidak berbahaya karena stop akan tetap tereksekusi pada harga yang ditetapkan"],
 answer:1,
 explain:"Guna utama rencana itu mindahin keputusan ke waktu pas kepala masih adem. Gap pembukaan justru keadaan paling tegang: rugi lo langsung lebih gede dari rencana, dan otak otomatis ngarep harga balik. Rencana yang matang udah nentuin DULUAN, misal: keluar semua di pembukaan, atau tunggu 30 menit pertama dengan batas rugi tambahan yang udah ditetapin. Yang belum nentuin bakal mutusin pakai panik, dan itu hampir selalu salah."},

{id:"rta-plan-h10",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Posisi bergerak menguntungkan sebesar 2R. Analis memindahkan stop ke titik impas agar transaksi menjadi bebas risiko. Apa konsekuensi yang perlu disadari?",
 options:["Harapan keuntungan sistem meningkat karena risikonya menjadi nol pada transaksi itu","Stop di titik impas menjamin transaksi tidak akan pernah berakhir rugi dalam keadaan apa pun","Peluang terkena stop oleh fluktuasi normal meningkat, sehingga sebagian tren besar bisa terlewat","Tidak ada konsekuensi apa pun karena memindahkan stop ke titik impas selalu menguntungkan"],
 answer:2,
 explain:"Breakeven itu berasa aman tapi ada harganya. Harga sering balik nguji area entry dulu sebelum lanjut tren, dan stop yang terlalu ketat ngubah calon transaksi 10R jadi NOL. Alternatif yang lebih seimbang: realisasiin sebagian di 2R, sisanya pakai stop berbasis struktur atau ATR. Jadi ada perlindungan tanpa matiin potensinya. Yang mindahin semua ke breakeven tiap kali untung dikit biasanya ngeluh 'kenapa gue nggak pernah dapet transaksi gede'."},

{id:"rta-plan-h11",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Analis memegang enam posisi beli, seluruhnya pada saham sektor perbankan, masing-masing dengan risiko 1 persen. Berapa risiko sesungguhnya dan mengapa?",
 options:["Tetap 1 persen, karena stop loss masing-masing posisi sudah dipasang secara terpisah","Sekitar 2 persen, karena penyebaran ke enam saham berbeda meredam sebagian besar risikonya","Tidak dapat dihitung karena risiko portofolio hanya berlaku untuk posisi lintas sektor","Mendekati 6 persen, karena saham satu sektor cenderung bergerak bersama saat sektornya tertekan"],
 answer:3,
 explain:"Risiko per transaksi cuma berarti kalau transaksinya saling bebas. Enam saham perbankan itu pada dasarnya SATU taruhan yang dipecah enam: satu kebijakan suku bunga bisa jatuhin semuanya di hari yang sama. Jadi risiko lo mendekati 6%, bukan 1%. Praktik yang umum dipakai: batasin total risiko per sektor, misal 2-3%, berapa pun jumlah posisi di dalem sektor itu. Diversifikasi yang cuma ganti nama tapi sektornya sama itu ilusi."},

{id:"rta-plan-h12",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Catatan transaksi menunjukkan kerugian terbesar selalu terjadi pada transaksi yang tidak tercantum dalam rencana harian. Apa langkah perbaikan yang paling tepat?",
 options:["Menetapkan aturan bahwa hanya transaksi yang direncanakan sebelum sesi dibuka yang boleh dieksekusi","Memperbesar stop loss pada transaksi spontan agar tidak mudah terkena fluktuasi","Berhenti mencatat transaksi spontan agar statistik sistem terlihat lebih baik","Memperbanyak transaksi spontan sampai jumlahnya cukup untuk dinilai secara statistik"],
 answer:0,
 explain:"Nilai jurnal itu di pola yang dia bongkar, dan pola ini udah terang banget. Transaksi spontan biasanya lahir dari takut ketinggalan, bukan dari sinyal, jadi ukuran sama stop-nya asal-asalan. Perbaikannya bersifat PROSEDURAL, bukan motivasi: tetapin daftar kandidat sebelum sesi buka, dan perlakuin apa pun di luar daftar itu sebagai PELANGGARAN, bukan peluang. Sugesti 'lain kali lebih disiplin' nggak pernah jalan tanpa aturan yang konkret."},

/* ===== cta-teori ===== */
{id:"cta-teori-h13",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Teori Dow menuntut konfirmasi antara indeks industri dan indeks transportasi. Apa gagasan ekonomi di balik tuntutan itu?",
 options:["Konfirmasi itu hanya aturan teknis tanpa dasar ekonomi apa pun di belakangnya","Barang yang diproduksi harus benar-benar dikirim, sehingga kedua sektor menegaskan aktivitas ekonomi nyata","Kedua indeks dipilih semata karena keduanya paling tua dan datanya paling panjang","Indeks transportasi selalu bergerak mendahului indeks industri dalam setiap siklus"],
 answer:1,
 explain:"Dow mikirin rantai ekonomi yang nyata: pabrik yang makin sibuk mestinya ngirim makin banyak barang, jadi perusahaan pengangkut ikut untung. Kalau industri naik tapi transportasi nggak, kenaikannya belum kebukti sama aktivitas fisik. Kritik modernnya valid: ekonomi jasa dan digital bikin kaitan ini melemah, soalnya software nggak perlu dikirim pakai kereta. Tapi logika nyari konfirmasi antar sektor tetep hidup sampai sekarang."},

{id:"cta-teori-h14",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Seorang analis berpendapat analisis teknikal berfungsi karena keuangan perilaku, bukan karena pasar irasional. Mana pernyataan yang paling mendukung pendapat itu?",
 options:["Pasar sepenuhnya dikendalikan lembaga besar sehingga pelaku kecil tidak berpengaruh","Pola teknikal berfungsi karena cukup banyak orang memakainya sehingga menjadi ramalan yang mewujudkan diri","Kecenderungan manusia seperti menghindari kerugian dan mengikuti kerumunan menghasilkan pola harga yang berulang","Pelaku pasar mengambil keputusan secara acak sehingga harga tidak mungkin diramalkan"],
 answer:2,
 explain:"Behavioral finance jelasin KENAPA pola bertahan. Loss aversion bikin orang nahan posisi rugi kelamaan, dan tumpukan order nyangkut itu yang bikin level support kebentuk. Herding bikin tren jadi berlebihan. Dua-duanya kelakuan manusia yang nggak berubah-berubah. Argumen 'pola jalan karena banyak yang pakai' itu jauh lebih lemah, soalnya nggak bisa jelasin kenapa pola yang sama udah keliatan di data jauh sebelum analisis teknikal populer."},

{id:"cta-teori-h15",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Hipotesis pasar adaptif dari Andrew Lo berbeda dari hipotesis pasar efisien. Apa implikasi utamanya bagi praktisi analisis teknikal?",
 options:["Pasar tidak pernah efisien sehingga strategi apa pun akan selalu berfungsi tanpa batas waktu","Hipotesis itu membuktikan analisis teknikal tidak memiliki dasar ilmiah sama sekali","Strategi yang berfungsi pada satu pasar dijamin berfungsi sama baiknya pada pasar lain","Keunggulan sebuah strategi bersifat sementara dan menyusut ketika makin banyak pelaku memakainya"],
 answer:3,
 explain:"Andrew Lo mandang pasar kayak ekosistem yang berevolusi: strategi itu spesies yang rebutan sumber untung yang jumlahnya terbatas. Begitu sebuah pola dipublikasi dan rame dipakai, untungnya kekikis sampai abis. Konsekuensi praktisnya keras: pemantauan kinerja itu nggak pernah selesai, dan sistem yang dulu jago harus siap dipensiunin tanpa baper. Ini beda sama EMH yang bilang nggak akan pernah ada keunggulan sama sekali."},

{id:"cta-teori-h16",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Menurut teori Dow, tren sekunder umumnya mengoreksi sepertiga sampai dua pertiga tren primer. Bagaimana analis sebaiknya memakai rentang ini?",
 options:["Sebagai wilayah pengamatan untuk mencari bukti pembalikan, bukan sebagai titik beli otomatis","Sebagai perintah membeli tepat pada koreksi 50 persen dari tren primer sebelumnya","Sebagai batas mutlak, sehingga koreksi melebihi dua pertiga membuktikan tren primer berakhir","Sebagai alat untuk menghitung waktu berakhirnya koreksi, bukan levelnya"],
 answer:0,
 explain:"Rentang sepertiga sampai dua pertiga itu pengamatan statistik, BUKAN tombol beli. Gunanya nyempitin wilayah perhatian doang. Bukti aslinya dicari DI DALAM wilayah itu: volume yang ngering pas turun, pola pembalikan, atau harga yang ngerebut balik level penting. Beli cuma karena angka koreksinya kesentuh itu namanya nebak dasar tanpa konfirmasi, dan level 50% itu cuma jadi tempat mampir sebentar sebelum lanjut turun."},

{id:"cta-teori-h17",module:"cta-teori",level:"CTA",difficulty:"sulit",
 q:"Analisis teknikal dan analisis kuantitatif sama-sama memakai data harga. Apa perbedaan mendasar keduanya dalam cara menguji gagasan?",
 options:["Analisis teknikal lebih akurat karena mata manusia menangkap hal yang tidak tertangkap rumus","Pendekatan kuantitatif menuntut perumusan yang dapat diuji ulang secara statistik, teknikal klasik banyak bersandar pada penafsiran visual","Pendekatan kuantitatif tidak pernah memakai harga masa lalu sedangkan teknikal sepenuhnya bergantung padanya","Keduanya identik sehingga perbedaannya hanya pada istilah yang dipakai masing-masing"],
 answer:1,
 explain:"Titik pisahnya ada di BISA DIUJI atau nggak. Kalimat 'pola ini kelihatan kayak kepala dan bahu' itu susah diuji ulang, soalnya tergantung mata pembacanya. Ubah jadi aturan berisi angka (puncak tengah minimal 3% lebih tinggi, neckline ditembus dengan volume 1,5x rata-rata) dan tiba-tiba bisa diuji ribuan kali. Kecenderungan modern: gabungin keduanya. Pakai mata buat ngelahirin ide, terus untai jadi aturan tegas buat diuji."}
]);
