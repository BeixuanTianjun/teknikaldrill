/* Studi kasus batch 2 — format vignette, opsi setara panjang dan seluruhnya masuk akal. */
TD.registerCases([
{id:"case-07", title:"Menakar penembusan yang terjadi menjelang rilis laporan keuangan",
 brief:"PT Graha Kencana (GRKC) menembus resistance yang sudah bertahan delapan bulan, tetapi penembusan terjadi dua sesi sebelum rilis laporan keuangan kuartalan. Volume penembusan hanya sedikit di atas rata-rata, sementara volatilitas tersirat pada opsinya melonjak. Analis harus memutuskan apakah mengeksekusi rencananya sekarang atau menunda.",
 facts:[["Resistance ditembus","Rp2.850, bertahan 8 bulan"],["Harga penutupan","Rp2.910"],
        ["Volume penembusan","1,2x rata-rata 20 hari"],["ATR(14)","Rp95"],
        ["Rilis laporan keuangan","2 sesi lagi"],["Volatilitas tersirat opsi","Naik dari 28% ke 47%"],
        ["Rencana awal","Beli di atas 2.850, stop 2.760, target 3.200"]]},

{id:"case-08", title:"Mengelola posisi yang sudah jauh menguntungkan",
 brief:"Sebuah posisi dibuka delapan pekan lalu dan kini sudah untung 52%. Harga bergerak menempel pita atas Bollinger selama sembilan sesi terakhir, jarak terhadap MA20 melebar ke level terjauh sejak posisi dibuka, dan RSI harian bertahan di atas 75 selama dua pekan. Tidak ada tanda kerusakan struktur harga: belum ada lower high maupun penembusan lembah terakhir.",
 facts:[["Keuntungan berjalan","52%"],["Risiko awal","1,5% ekuitas"],
        ["Posisi terhadap pita Bollinger","Menempel pita atas, 9 sesi"],
        ["Jarak terhadap MA20","+18%, terjauh sejak posisi dibuka"],
        ["RSI(14) harian","Di atas 75 selama 2 pekan"],
        ["Struktur harga","Higher high dan higher low masih utuh"],
        ["Lembah ayunan terakhir","12% di bawah harga berjalan"]]},

{id:"case-09", title:"Menilai instrumen yang likuiditasnya menipis",
 brief:"Seorang analis menemukan pola dasar yang rapi pada saham berkapitalisasi kecil. Polanya terbentuk selama tujuh bulan dan penembusannya meyakinkan secara visual. Namun rata-rata volume hariannya tipis, spread bid ask lebar, dan beberapa sesi dalam sebulan terakhir tidak ada transaksi sama sekali. Mandat kelolaannya bernilai besar.",
 facts:[["Ekuitas kelolaan","Rp8.000.000.000"],["Risiko per transaksi","1% ekuitas"],
        ["Harga saham","Rp420"],["Rata-rata volume harian","180.000 lembar"],
        ["Spread bid ask","Rp5, sekitar 1,2% harga"],
        ["Sesi tanpa transaksi","4 dari 20 sesi terakhir"],
        ["Stop yang direncanakan","Rp378, yaitu 10% di bawah harga"]]},

{id:"case-10", title:"Dua sistem dengan kurva ekuitas yang berbeda karakter",
 brief:"Dua sistem diuji pada semesta dan periode yang sama, keduanya sudah melewati pengujian di luar sampel. Sistem A menghasilkan banyak keuntungan kecil dengan tingkat keberhasilan tinggi. Sistem B jarang menang tetapi sesekali menangkap pergerakan besar. Pengelola harus memilih satu, atau menjalankan keduanya.",
 facts:[["Sistem A — win rate","74%"],["Sistem A — rata-rata untung : rugi","1 : 2,1"],
        ["Sistem A — maximum drawdown","19%"],["Sistem A — imbal hasil tahunan","16%"],
        ["Sistem B — win rate","38%"],["Sistem B — rata-rata untung : rugi","3,4 : 1"],
        ["Sistem B — maximum drawdown","24%"],["Sistem B — imbal hasil tahunan","21%"],
        ["Korelasi imbal hasil bulanan A dan B","0,15"]]},

{id:"case-11", title:"Membaca pasar yang indeksnya naik tetapi terasa rapuh",
 brief:"Indeks komposit naik 9% dalam tiga bulan dan mencetak level tertinggi baru. Namun hanya 41% saham yang berada di atas rata-rata bergerak 200 harinya, jumlah saham yang mencetak titik terendah baru meningkat, dan kenaikan indeks terutama disumbang lima emiten berkapitalisasi terbesar. Survei sentimen menunjukkan tingkat optimisme tertinggi dalam dua tahun.",
 facts:[["Indeks komposit","+9% dalam 3 bulan, tertinggi baru"],
        ["Saham di atas MA200","41%"],["Advance decline line","Tidak mencetak tertinggi baru"],
        ["Kontribusi 5 emiten terbesar","Sekitar 70% kenaikan indeks"],
        ["Saham mencetak terendah baru","Meningkat 3 pekan berturut-turut"],
        ["Survei bull bear","Optimisme tertinggi dalam 2 tahun"]]},

{id:"case-12", title:"Menyusun rencana pada instrumen berjangka menjelang rollover",
 brief:"Seorang analis memegang posisi beli pada kontrak berjangka komoditas yang akan jatuh tempo dua pekan lagi. Struktur pasarnya contango, dan ia berniat menggulirkan posisi ke kontrak bulan berikutnya. Open interest pada kontrak berjalan mulai menyusut sementara pada kontrak berikutnya meningkat. Analisis teknikalnya masih menunjukkan tren naik yang utuh.",
 facts:[["Kontrak berjalan","Jatuh tempo 2 pekan lagi"],["Harga kontrak berjalan","USD 82,40"],
        ["Harga kontrak bulan berikutnya","USD 84,10"],["Struktur pasar","Contango"],
        ["Open interest kontrak berjalan","Menyusut tajam"],
        ["Open interest kontrak berikutnya","Meningkat tajam"],
        ["Kondisi teknikal","Tren naik utuh, harga di atas MA50"]]}
]);

TD.register([
/* case-07 */
{id:"case-07-q1",caseId:"case-07",module:"rta-level",level:"RTA",difficulty:"sulit",
 q:"Mengenai kualitas penembusan resistance pada kasus ini, penilaian yang paling tepat adalah...",
 options:["Lemah, karena volume 1,2 kali rata-rata tergolong tipis untuk level sepenting itu","Tidak dapat dinilai, karena penembusan baru sah setelah diuji ulang dari atas","Palsu, karena penembusan menjelang rilis laporan keuangan selalu tidak bertahan","Meyakinkan, karena resistance delapan bulan sudah ditembus dengan penutupan di atasnya"],
 answer:0,
 explain:"Volume 1,2 kali rata-rata itu TIPIS buat level sepenting resistance yang bertahan delapan bulan. Logikanya: resistance yang bertahan selama itu nyimpen banyak barang nyangkut, jadi nembusnya nuntut lonjakan volume yang jelas — bukan sekadar sedikit di atas rata-rata. Volume 1,2x artinya belum ada aliran dana baru yang serius, dan risiko penembusan palsunya tinggi."},

{id:"case-07-q2",caseId:"case-07",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Volatilitas tersirat opsi melonjak dari 28% ke 47%. Bagi analis yang memegang saham, informasi ini paling berguna untuk...",
 options:["Memastikan bahwa penembusan resistance tersebut akan bertahan","Memperkirakan besarnya pergerakan yang sudah diperhitungkan pasar pada rilis nanti","Menentukan arah pergerakan harga setelah laporan keuangan diumumkan","Menghitung nilai wajar saham berdasarkan ekspektasi laba kuartalan"],
 answer:1,
 explain:"IV melonjak dari 28 ke 47 persen itu paling berguna buat MEMPERKIRAKAN BESARNYA pergerakan yang udah diperhitungkan pasar pada rilis nanti. Dari IV lo bisa turunin kisaran gerakan yang diharapkan. Gunanya buat pemegang saham: lo bisa nilai apakah stop lo cukup lebar buat nampung gerakan itu. IV nggak ngasih tau ARAH, cuma BESARNYA — dan itu tetep informasi yang berharga."},

{id:"case-07-q3",caseId:"case-07",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Stop pada rencana awal berada Rp150 di bawah harga masuk, yaitu sekitar 1,6 kali ATR. Mengingat rilis laporan dua sesi lagi, risiko terbesar dari mempertahankan stop tersebut adalah...",
 options:["Stop kehilangan relevansi karena level teknikal tidak berlaku pada hari rilis","Stop menjadi terlalu longgar sehingga kerugiannya melebihi batas per transaksi","Harga dapat dibuka melewati stop sehingga kerugiannya lebih besar dari rencana","Stop akan otomatis batal karena bursa menghentikan perdagangan saat rilis"],
 answer:2,
 explain:"Stop Rp150 di bawah entry, sekitar 1,6 kali ATR. Risiko terbesar kalau dipertahanin menjelang rilis: harga bisa DIBUKA MELEWATI stop, jadi kerugiannya lebih besar dari rencana. Stop nggak jamin harga eksekusi, dia cuma jamin order-nya jalan. Dan rilis laporan itu persis pemicu gap. Stop 1,6 ATR yang biasanya cukup jadi nggak berarti apa-apa di hadapan gap."},

{id:"case-07-q4",caseId:"case-07",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Keputusan yang paling konsisten dengan seluruh bukti pada kasus ini adalah...",
 options:["Membatalkan rencana sepenuhnya karena penembusannya tidak didukung volume","Menaikkan target ke 3.500 untuk mengimbangi risiko rilis yang lebih besar","Masuk dengan ukuran penuh sesuai rencana, karena level penembusan sudah tercapai","Masuk dengan ukuran diperkecil, atau menunggu sampai rilis laporan berlalu"],
 answer:3,
 explain:"Dua bukti negatif numpuk: volume breakout tipis DAN ada rilis laporan dua sesi lagi yang bikin risiko gap. Keputusan yang konsisten: masuk dengan ukuran DIPERKECIL, atau tunggu sampai rilisnya lewat. Perhatiin polanya — di situasi yang bukti-buktinya campuran, jawaban profesional hampir selalu nyesuaiin UKURAN RISIKO, bukan milih ekstrem antara all-in atau nggak sama sekali."},

/* case-08 */
{id:"case-08-q1",caseId:"case-08",module:"rta-kekuatan",level:"RTA",difficulty:"sulit",
 q:"Harga menempel pita atas Bollinger selama sembilan sesi. Pembacaan yang paling tepat adalah...",
 options:["Fenomena walking the bands yang justru menandakan tren sedang sangat kuat","Tanda pita Bollinger perlu disetel ulang karena parameternya tidak sesuai","Indikasi bahwa volatilitas sedang menurun sehingga pita akan segera menyempit","Sinyal jual, karena harga berada di luar batas wajar dua standar deviasi"],
 answer:0,
 explain:"Harga nempel pita atas Bollinger sembilan sesi itu namanya WALKING THE BANDS, dan itu justru nandain tren lagi SANGAT KUAT. Bollinger sendiri nekanin ini. Nyentuh pita atas artinya harga relatif tinggi dibanding volatilitas terkininya — itu doang, bukan sinyal jual. Yang jual tiap kali harga nyentuh pita atas bakal ketinggalan semua tren besar sambil ngerasa lagi disiplin."},

{id:"case-08-q2",caseId:"case-08",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Lembah ayunan terakhir berada 12% di bawah harga berjalan, sementara keuntungan berjalan 52%. Menempatkan trailing stop di bawah lembah itu berarti...",
 options:["Membatalkan seluruh manfaat trailing stop karena jaraknya terlalu longgar","Bersedia mengembalikan sekitar seperempat keuntungan demi membiarkan tren berlanjut","Mengunci hampir seluruh keuntungan karena stop sudah jauh di atas harga masuk","Mengambil risiko yang sama besarnya dengan risiko awal saat posisi dibuka"],
 answer:1,
 explain:"Lembah ayunan terakhir 12 persen di bawah harga, untung berjalan 52 persen. Naruh trailing stop di bawah lembah itu artinya lo bersedia ngembaliin sekitar SEPEREMPAT untung (12 dari 52) demi ngebiarin tren lanjut. Ini trade-off yang harus disadari, bukan dihindari. Stop lebih rapat = untung lebih terjaga tapi lebih gampang kelempar. Nggak ada jawaban benar mutlak, yang ada pilihan sadar."},

{id:"case-08-q3",caseId:"case-08",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Mengingat struktur harga masih utuh, unsur mana yang paling tepat dijadikan pemicu untuk mulai mengurangi posisi?",
 options:["RSI yang bertahan di atas 75 selama dua pekan berturut-turut","Jarak terhadap MA20 yang mencapai level terjauh sejak posisi dibuka","Terbentuknya lower high atau penembusan lembah ayunan terakhir","Keuntungan berjalan yang sudah melampaui angka 50%"],
 answer:2,
 explain:"Karena struktur harganya masih utuh, pemicu yang paling tepat buat mulai ngurangin posisi: kebentuknya LOWER HIGH atau penembusan LEMBAH AYUNAN terakhir. Dua-duanya bukti STRUKTURAL bahwa trennya berubah, bukan sekadar perasaan atau angka indikator. Ini bedanya keluar karena bukti versus keluar karena 'udah untung banyak, takut ilang'. Yang pertama bisa diulang, yang kedua enggak."},

{id:"case-08-q4",caseId:"case-08",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Risiko awal posisi ini 1,5% ekuitas dan kini sudah untung 52%. Mengenai risiko yang sebenarnya sedang ditanggung sekarang, pernyataan yang tepat adalah...",
 options:["Menjadi lebih kecil secara proporsional karena ekuitas portofolio ikut bertumbuh","Tetap 1,5% ekuitas, karena risiko dihitung dari harga masuk dan stop awalnya","Menjadi nol karena keuntungan yang ada sudah jauh melampaui risiko awalnya","Bergantung pada posisi stop berjalan, dan keuntungan yang belum direalisasikan adalah modal yang juga dapat hilang"],
 answer:3,
 explain:"Ini pertanyaan yang jujur dan sering bikin orang mikir ulang. Risiko awal 1,5 persen itu udah nggak relevan lagi — risiko yang lo tanggung SEKARANG tergantung posisi STOP BERJALAN. Dan yang penting disadari: keuntungan 52 persen yang belum direalisasikan itu MODAL YANG JUGA BISA HILANG. Banyak orang ngerasa untung yang belum dicairkan itu 'duit gratis' dan jadi ceroboh. Padahal itu duit lo."},

/* case-09 */
{id:"case-09-q1",caseId:"case-09",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Dengan risiko 1% dari Rp8 miliar dan stop 10% di bawah harga, berapa kira-kira nilai posisi yang harus dibeli?",
 options:["Rp800.000.000","Rp80.000.000","Rp190.000.000","Rp400.000.000"],
 answer:0,
 explain:"Risiko rupiah = 1% x 8 miliar = 80 juta. Stop-nya 10 persen di bawah harga, artinya kalau kena stop lo kehilangan 10 persen nilai posisi. Jadi: 10% x nilai posisi = 80 juta, berarti nilai posisi = 80 juta / 0,1 = Rp800 juta. Perhatiin: risiko 1 persen BUKAN berarti belanja 1 persen. Yang dibatasi 1 persen itu RUGINYA, bukan nilai posisinya."},

{id:"case-09-q2",caseId:"case-09",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Posisi senilai Rp800 juta setara sekitar 1,9 juta lembar, sementara rata-rata volume harian 180 ribu lembar. Konsekuensi paling serius dari ketimpangan ini adalah...",
 options:["Posisi melanggar batas kepemilikan yang ditetapkan bursa untuk saham kecil","Posisi setara lebih dari sepuluh hari volume, sehingga stop loss tidak dapat dieksekusi tanpa merusak harga","Biaya transaksi membengkak karena order harus dipecah ke banyak sesi perdagangan","Analisis teknikalnya menjadi tidak berlaku karena polanya terbentuk pada volume tipis"],
 answer:1,
 explain:"Posisi Rp800 juta setara 1,9 juta lembar, sementara volume harian cuma 180 ribu lembar. Artinya posisi lo setara LEBIH DARI SEPULUH HARI volume. Konsekuensi paling serius: stop loss lo NGGAK BISA DIEKSEKUSI tanpa ngerusak harga sendiri. Lo pasang stop di suatu level, tapi pas mau keluar order lo sendiri yang ndorong harga jatuh jauh di bawahnya. Stop-nya cuma angka di layar."},

{id:"case-09-q3",caseId:"case-09",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Adanya empat sesi tanpa transaksi dalam dua puluh sesi terakhir berdampak pada analisis teknikalnya berupa...",
 options:["Level support dan resistance menjadi lebih kuat karena harga jarang bergerak","Grafiknya harus digambar ulang dengan skala logaritmik agar polanya terbaca","Pola yang terbentuk kurang mewakili konsensus pasar karena sedikit transaksi menggerakkan harga","Indikator teknikal tidak dapat dihitung sama sekali pada deret yang terputus"],
 answer:2,
 explain:"Empat sesi tanpa transaksi dari dua puluh sesi terakhir artinya pola yang kebentuk KURANG MEWAKILI konsensus pasar. Dengan transaksi sesedikit itu, harga bisa digerakin beberapa order nyasar. Yang lo lihat di chart bukan tarik-ulur banyak pelaku, tapi jejak segelintir orang. Tambahan masalah teknis: indikator yang lo pasang bakal ngitung hari-hari kosong itu sebagai data valid, jadi hasilnya ikut ngaco."},

{id:"case-09-q4",caseId:"case-09",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Keputusan yang paling tepat bagi analis dengan mandat sebesar ini adalah...",
 options:["Memperlebar stop menjadi 20% agar tidak mudah tersentuh oleh spread yang lebar","Memecah pembelian ke sepuluh sesi tanpa mengubah ukuran posisi yang direncanakan","Menjalankan rencana dengan ukuran penuh karena polanya terbentuk selama tujuh bulan","Melewatkan peluang ini, karena instrumennya tidak sesuai dengan ukuran mandat yang dikelola"],
 answer:3,
 explain:"Keputusan yang paling tepat: LEWATKAN peluang ini, karena instrumennya nggak sesuai sama ukuran mandat yang dikelola. Ini pelajaran yang penting dan sering nggak enak diterima: mandat besar itu NGEBATASIN semesta instrumen lo. Saham bagus yang terlalu tipis buat ukuran lo itu bukan peluang, itu jebakan. Kemampuan bilang 'lewat' itu bagian dari profesionalisme, bukan tanda nggak becus."},

/* case-10 */
{id:"case-10-q1",caseId:"case-10",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem A menang 74% dengan rata-rata untung 1R dan rata-rata rugi 2,1R. Berapa expectancy-nya per transaksi?",
 options:["Sekitar 0,19R","Sekitar 0,48R","Sekitar 0,74R","Sekitar minus 0,26R"],
 answer:0,
 explain:"Itung: (0,74 x 1R) - (0,26 x 2,1R) = 0,74R - 0,546R = 0,194R, dibulatin sekitar 0,19R. Positif, jadi sistemnya menguntungkan. Yang menarik: win rate 74 persen itu kedengeran hebat banget, tapi expectancy-nya cuma 0,19R karena kalahnya jauh lebih besar dari menangnya. Ini ngingetin: win rate tinggi TIDAK OTOMATIS berarti sistem bagus. Selalu itung expectancy-nya."},

{id:"case-10-q2",caseId:"case-10",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Tantangan psikologis terbesar dalam menjalankan Sistem B dibanding Sistem A adalah...",
 options:["Keuntungan yang datang terlalu sering sehingga sulit menahan diri menambah posisi","Rangkaian kerugian beruntun yang panjang sebelum satu keuntungan besar datang","Jumlah transaksi yang jauh lebih banyak sehingga menuntut pemantauan terus-menerus","Drawdown yang jauh lebih dalam dibanding sistem mana pun yang lazim dipakai"],
 answer:1,
 explain:"Tantangan psikologis terbesar Sistem B: RENTETAN KERUGIAN BERUNTUN yang panjang sebelum satu keuntungan besar dateng. Di sistem win rate rendah, kalah 8-10 kali beruntun itu kejadian yang PASTI muncul, bukan kemungkinan. Masalahnya sebagian besar untung tahunan dateng dari beberapa transaksi besar, dan orang cenderung nyerah tepat sebelumnya. Matematikanya gampang, nyalinya yang susah."},

{id:"case-10-q3",caseId:"case-10",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Korelasi imbal hasil bulanan kedua sistem hanya 0,15. Implikasi paling penting dari angka itu adalah...",
 options:["Kedua sistem sebenarnya menangkap keunggulan yang sama pada instrumen berbeda","Korelasi serendah itu menandakan salah satu pengujiannya mengandung kekeliruan","Menjalankan keduanya bersamaan berpotensi menghaluskan kurva ekuitas gabungan","Salah satu sistem pasti berhenti bekerja karena keduanya saling meniadakan"],
 answer:2,
 explain:"Korelasi cuma 0,15 itu kabar BAGUS banget. Artinya dua sistem ini jarang rugi barengan — pas yang satu lagi susah, yang lain sering lagi panen. Jalanin keduanya bareng bakal ngehalusin kurva ekuitas gabungan dan bikin drawdown-nya lebih dangkal daripada masing-masing. Ini diversifikasi yang BENER: bukan nambah jumlah posisi, tapi nambah SUMBER untung yang beda pemicunya."},

{id:"case-10-q4",caseId:"case-10",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Jika pengelola hanya boleh memilih satu sistem, dasar pertimbangan yang paling tepat adalah...",
 options:["Win rate tertinggi, karena sistem yang sering menang lebih mudah dipertahankan","Maximum drawdown terkecil, karena itu satu-satunya ukuran risiko yang relevan","Imbal hasil tahunan tertinggi, karena itu tujuan akhir pengelolaan dana","Kesesuaian karakter sistem dengan kemampuan pengelola menjalaninya secara konsisten"],
 answer:3,
 explain:"Kalau cuma boleh pilih satu, dasar pertimbangannya: KESESUAIAN karakter sistem sama kemampuan pengelola MENJALANINYA secara konsisten. Bukan mana yang angkanya lebih cakep. Sistem dengan expectancy lebih tinggi tapi drawdown yang bikin lo nggak bisa tidur itu bakal ditinggalin di tengah jalan, dan sistem yang ditinggalin expectancy-nya nol. Yang terbaik itu yang bisa lo jalanin sampai selesai."},

/* case-11 */
{id:"case-11-q1",caseId:"case-11",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Hanya 41% saham berada di atas MA200 sementara indeks mencetak tertinggi baru. Kondisi ini menandakan...",
 options:["Mayoritas saham sebenarnya belum berada dalam tren naik jangka panjang","Perhitungan indikator breadth tertinggal beberapa pekan dari indeksnya","Rata-rata bergerak 200 hari tidak relevan untuk menilai kondisi pasar luas","Indeks sedang diperbarui komposisinya sehingga angkanya tidak sebanding"],
 answer:0,
 explain:"Cuma 41 persen saham di atas MA200 sementara indeks cetak tertinggi baru. Artinya MAYORITAS saham sebenernya BELUM dalam tren naik jangka panjang. Indeksnya naik, tapi enam dari sepuluh saham masih di bawah tren panjangnya. Ini ketimpangan yang serius: kenaikannya cuma di permukaan. Di pasar naik yang sehat, angka ini biasanya di atas 60-70 persen."},

{id:"case-11-q2",caseId:"case-11",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Lima emiten terbesar menyumbang sekitar 70% kenaikan indeks. Hal ini terjadi terutama karena...",
 options:["Bursa membatasi bobot emiten kecil agar indeksnya tidak terlalu bergejolak","Indeks dihitung berbobot kapitalisasi sehingga emiten raksasa menyetir pergerakannya","Emiten besar selalu bergerak lebih dulu sebelum diikuti emiten yang lebih kecil","Investor asing hanya diizinkan bertransaksi pada emiten berkapitalisasi besar"],
 answer:1,
 explain:"Lima emiten nyumbang 70 persen kenaikan indeks karena indeks dihitung BERBOBOT KAPITALISASI — emiten raksasa nyetir pergerakannya. Ini bukan kelainan, ini cara kerja indeksnya. Dan di IHSG yang konsentrasinya tinggi di segelintir bank dan konglomerasi, ini kejadian rutin. Efeknya: makin terkonsentrasi bursanya, makin PENTING lo mantau indikator breadth."},

{id:"case-11-q3",caseId:"case-11",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Survei sentimen menunjukkan optimisme tertinggi dalam dua tahun. Bagi analis, informasi ini paling tepat dipakai untuk...",
 options:["Mengabaikannya, karena survei sentimen tidak memiliki nilai prediktif apa pun","Menjual seluruh posisi, karena optimisme ekstrem selalu diikuti penurunan","Menakar bahwa sebagian besar daya beli sudah terpakai, sehingga eksposur perlu dikurangi","Menambah posisi, karena optimisme tinggi menandakan tren naik masih berlanjut"],
 answer:2,
 explain:"Optimisme tertinggi dalam dua tahun itu dibaca CONTRARIAN: artinya sebagian besar DAYA BELI udah terpakai. Logikanya mekanis, bukan soal gaya-gayaan ngelawan kerumunan — kalau hampir semua orang udah optimis, mereka UDAH BELI. Duitnya udah di pasar. Siapa lagi yang mau ndorong naik? Sebaliknya, ada berita buruk dikit aja, banyak banget yang harus jual. Ketimpangan itu yang bahaya."},

{id:"case-11-q4",caseId:"case-11",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Tindakan paling tepat bagi pengelola portofolio menghadapi kombinasi kondisi pada kasus ini adalah...",
 options:["Menambah posisi pada lima emiten terbesar yang sedang menggerakkan indeks","Memindahkan seluruh portofolio ke saham berkapitalisasi kecil yang tertinggal","Menutup seluruh posisi dan menunggu sampai breadth kembali membaik","Mengurangi eksposur secara bertahap dan memperketat stop, sambil tetap mengikuti sinyal harga"],
 answer:3,
 explain:"Tiga peringatan numpuk: breadth lemah, konsentrasi ekstrem, sentimen euforia. Tindakan yang tepat: kurangi eksposur BERTAHAP dan perketat stop, sambil TETAP ngikutin sinyal harga. Kenapa bertahap dan bukan jual semua? Karena peringatan breadth bisa muncul berbulan-bulan sebelum titik baliknya, dan pasar masih bisa naik lama. Konteks buat ngatur ukuran, harga buat ngatur waktu."},

/* case-12 */
{id:"case-12-q1",caseId:"case-12",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Struktur contango dengan kontrak berikutnya USD 84,10 terhadap kontrak berjalan USD 82,40 berarti penggulirannya...",
 options:["Menimbulkan biaya, karena posisi beli harus dibuka kembali pada harga lebih tinggi","Menghasilkan keuntungan, karena kontrak berikutnya dihargai lebih mahal oleh pasar","Bersifat netral, karena selisih harga kontrak selalu terkoreksi menjelang jatuh tempo","Tidak berpengaruh, karena penggulingan hanya mengganti tanggal jatuh tempo posisi"],
 answer:0,
 explain:"Kontrak berikutnya USD 84,10 lebih mahal dari kontrak berjalan USD 82,40. Itu contango. Efeknya buat posisi beli: pas roll, lo jual yang murah (82,40) dan beli yang mahal (84,10) — selisih USD 1,70 itu BIAYA yang lo bayar tiap kali gulir. Rugi kecil yang berulang tiap bulan bisa ngalahin kenaikan harga aslinya. Ini alesan banyak ETF komoditas kinerjanya jauh di bawah komoditasnya sendiri."},

{id:"case-12-q2",caseId:"case-12",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Open interest kontrak berjalan menyusut tajam sementara kontrak berikutnya meningkat tajam. Pembacaan yang tepat adalah...",
 options:["Likuiditas pasar secara keseluruhan sedang mengering menjelang jatuh tempo","Pelaku pasar sedang memindahkan posisinya ke kontrak bulan berikutnya","Minat terhadap komoditas ini sedang menurun sehingga tren naiknya melemah","Dana baru sedang masuk ke sisi jual pada kontrak yang akan jatuh tempo"],
 answer:1,
 explain:"Open interest kontrak berjalan nyusut tajam sementara kontrak berikutnya melonjak. Pembacaannya lurus: pelaku pasar lagi MINDAHIN posisinya ke bulan berikutnya, alias proses rollover. Ini bukan sinyal arah, ini peristiwa teknis yang rutin terjadi menjelang jatuh tempo. Yang salah baca bisa ngira OI yang anjlok itu tanda orang keluar dari pasar — padahal mereka cuma pindah kamar."},

{id:"case-12-q3",caseId:"case-12",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Setelah rollover, hal yang perlu diperhatikan analis pada grafik kontrak berkelanjutan adalah...",
 options:["Level support resistance lama menjadi tidak berlaku sepenuhnya","Volume historis tidak dapat dibandingkan antar kontrak yang berbeda","Metode penyambungan kontrak mempengaruhi level historis yang tergambar","Grafiknya harus dimulai ulang dari nol karena kontraknya berbeda"],
 answer:2,
 explain:"Setelah rollover, yang wajib diperhatiin di chart kontrak berkelanjutan: METODE PENYAMBUNGAN kontrak ngaruh ke level historis yang tergambar. Back-adjusted jaga bentuk pergerakan tapi bisa ngasilin harga yang nggak pernah diperdagangin. Dibiarin apa adanya jaga harga nyata tapi bikin gap palsu. Support yang lo lihat di 2019 bisa jadi angka hasil perhitungan, bukan harga nyata."},

{id:"case-12-q4",caseId:"case-12",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Mengingat kondisi teknikalnya masih menunjukkan tren naik utuh, keputusan yang paling tepat adalah...",
 options:["Menahan kontrak berjalan sampai jatuh tempo agar terhindar dari biaya penggulingan","Menambah posisi pada kontrak berjalan karena harganya lebih murah dari kontrak berikutnya","Menutup posisi karena biaya contango akan menghapus seluruh keuntungan","Menggulirkan posisi sambil memperhitungkan biaya rollover dalam target imbal hasilnya"],
 answer:3,
 explain:"Kondisi teknikalnya masih tren naik utuh, jadi keputusan yang tepat: GULIRKAN posisi, sambil MEMPERHITUNGKAN biaya rollover dalam target imbal hasilnya. Dua bagian, dan yang kedua sering dilupain. Kalau target lo 10 persen tapi biaya rollover setahun makan 4 persen, target bersih lo cuma 6 persen. Nggak ngitung itu bikin lo ngerasa untung di chart tapi kecewa di rekening."}
]);
