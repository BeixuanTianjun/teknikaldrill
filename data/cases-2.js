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
 explain:"Resistance yang bertahan delapan bulan menyimpan banyak pasokan, sehingga penembusannya menuntut lonjakan volume yang jelas, bukan sekadar sedikit di atas rata-rata. Volume 1,2 kali rata-rata menandakan belum ada aliran dana baru yang serius, sehingga risiko penembusan palsu meningkat. Penembusan menjelang rilis laporan tidak selalu palsu, tetapi memang belum teruji."},

{id:"case-07-q2",caseId:"case-07",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Volatilitas tersirat opsi melonjak dari 28% ke 47%. Bagi analis yang memegang saham, informasi ini paling berguna untuk...",
 options:["Memastikan bahwa penembusan resistance tersebut akan bertahan","Memperkirakan besarnya pergerakan yang sudah diperhitungkan pasar pada rilis nanti","Menentukan arah pergerakan harga setelah laporan keuangan diumumkan","Menghitung nilai wajar saham berdasarkan ekspektasi laba kuartalan"],
 answer:1,
 explain:"Volatilitas tersirat mencerminkan besarnya pergerakan yang sedang dihargai pasar, bukan arahnya. Lonjakan dari 28% ke 47% berarti pasar bersiap menghadapi ayunan besar dua arah. Bagi pemegang saham, itu alasan menyesuaikan ukuran posisi dan jarak stop, karena stop yang dihitung dari ATR normal menjadi terlalu rapat untuk kondisi tersebut."},

{id:"case-07-q3",caseId:"case-07",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Stop pada rencana awal berada Rp150 di bawah harga masuk, yaitu sekitar 1,6 kali ATR. Mengingat rilis laporan dua sesi lagi, risiko terbesar dari mempertahankan stop tersebut adalah...",
 options:["Stop kehilangan relevansi karena level teknikal tidak berlaku pada hari rilis","Stop menjadi terlalu longgar sehingga kerugiannya melebihi batas per transaksi","Harga dapat dibuka melewati stop sehingga kerugiannya lebih besar dari rencana","Stop akan otomatis batal karena bursa menghentikan perdagangan saat rilis"],
 answer:2,
 explain:"Stop loss hanya dieksekusi pada harga pasar yang tersedia, sehingga gap pembukaan setelah rilis laporan dapat membuat realisasi kerugian jauh melebihi rencana. Inilah gap risk. Pengendaliannya bukan dengan melebarkan stop, melainkan dengan memperkecil ukuran posisi atau menunda masuk sampai rilis berlalu."},

{id:"case-07-q4",caseId:"case-07",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Keputusan yang paling konsisten dengan seluruh bukti pada kasus ini adalah...",
 options:["Membatalkan rencana sepenuhnya karena penembusannya tidak didukung volume","Menaikkan target ke 3.500 untuk mengimbangi risiko rilis yang lebih besar","Masuk dengan ukuran penuh sesuai rencana, karena level penembusan sudah tercapai","Masuk dengan ukuran diperkecil, atau menunggu sampai rilis laporan berlalu"],
 answer:3,
 explain:"Buktinya bercampur: level teknikalnya tercapai tetapi konfirmasi volumenya lemah dan ada peristiwa berisiko dalam dua sesi. Memperkecil ukuran posisi menurunkan kerugian bila gap terjadi tanpa membuang peluang seluruhnya, dan menunggu rilis berlalu menukar sedikit harga masuk dengan hilangnya gap risk. Menaikkan target tidak mengurangi risiko apa pun."},

/* case-08 */
{id:"case-08-q1",caseId:"case-08",module:"rta-indikator",level:"RTA",difficulty:"sulit",
 q:"Harga menempel pita atas Bollinger selama sembilan sesi. Pembacaan yang paling tepat adalah...",
 options:["Fenomena walking the bands yang justru menandakan tren sedang sangat kuat","Tanda pita Bollinger perlu disetel ulang karena parameternya tidak sesuai","Indikasi bahwa volatilitas sedang menurun sehingga pita akan segera menyempit","Sinyal jual, karena harga berada di luar batas wajar dua standar deviasi"],
 answer:0,
 explain:"John Bollinger menegaskan sentuhan pita hanya menunjukkan posisi harga relatif terhadap volatilitasnya, bukan sinyal transaksi. Pada tren yang sangat kuat harga dapat berjalan menempel pita atas selama berpekan-pekan, fenomena yang disebut walking the bands. Menjual hanya karena harga menyentuh pita berarti melawan tren yang sedang bekerja."},

{id:"case-08-q2",caseId:"case-08",module:"rta-plan",level:"RTA",difficulty:"sulit",
 q:"Lembah ayunan terakhir berada 12% di bawah harga berjalan, sementara keuntungan berjalan 52%. Menempatkan trailing stop di bawah lembah itu berarti...",
 options:["Membatalkan seluruh manfaat trailing stop karena jaraknya terlalu longgar","Bersedia mengembalikan sekitar seperempat keuntungan demi membiarkan tren berlanjut","Mengunci hampir seluruh keuntungan karena stop sudah jauh di atas harga masuk","Mengambil risiko yang sama besarnya dengan risiko awal saat posisi dibuka"],
 answer:1,
 explain:"Jarak 12% dari harga berjalan setara sekitar seperempat dari keuntungan 52% yang sudah terbentuk. Itulah pertukaran khas trailing stop yang mengikuti struktur harga: memberi ruang agar tren dapat berlanjut, dengan konsekuensi sebagian keuntungan dikembalikan bila tren berakhir. Stop yang lebih rapat mengunci lebih banyak tetapi jauh lebih mudah tersentuh."},

{id:"case-08-q3",caseId:"case-08",module:"rta-trend",level:"RTA",difficulty:"sulit",
 q:"Mengingat struktur harga masih utuh, unsur mana yang paling tepat dijadikan pemicu untuk mulai mengurangi posisi?",
 options:["RSI yang bertahan di atas 75 selama dua pekan berturut-turut","Jarak terhadap MA20 yang mencapai level terjauh sejak posisi dibuka","Terbentuknya lower high atau penembusan lembah ayunan terakhir","Keuntungan berjalan yang sudah melampaui angka 50%"],
 answer:2,
 explain:"RSI tinggi, jarak terhadap MA20, dan besarnya keuntungan adalah kondisi, bukan sinyal: ketiganya dapat bertahan lama tanpa harga berbalik. Yang benar-benar mengubah keadaan adalah kerusakan struktur, yaitu gagalnya harga mencetak puncak baru atau tertembusnya lembah terakhir. Menunggu pemicu itu membuat keputusan bersandar pada aksi harga, bukan pada rasa tidak nyaman."},

{id:"case-08-q4",caseId:"case-08",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Risiko awal posisi ini 1,5% ekuitas dan kini sudah untung 52%. Mengenai risiko yang sebenarnya sedang ditanggung sekarang, pernyataan yang tepat adalah...",
 options:["Menjadi lebih kecil secara proporsional karena ekuitas portofolio ikut bertumbuh","Tetap 1,5% ekuitas, karena risiko dihitung dari harga masuk dan stop awalnya","Menjadi nol karena keuntungan yang ada sudah jauh melampaui risiko awalnya","Bergantung pada posisi stop berjalan, dan keuntungan yang belum direalisasikan adalah modal yang juga dapat hilang"],
 answer:3,
 explain:"Keuntungan yang belum direalisasikan sudah menjadi bagian dari ekuitas dan dapat hilang sama seperti modal awal. Risiko yang sedang ditanggung adalah jarak antara harga berjalan dan stop berjalan, bukan angka 1,5% yang dihitung saat posisi dibuka. Cara memandang ini mencegah kekeliruan umum berupa membiarkan posisi besar tanpa stop karena merasa sedang bermain dengan uang pasar."},

/* case-09 */
{id:"case-09-q1",caseId:"case-09",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Dengan risiko 1% dari Rp8 miliar dan stop 10% di bawah harga, berapa kira-kira nilai posisi yang harus dibeli?",
 options:["Rp800.000.000","Rp80.000.000","Rp190.000.000","Rp400.000.000"],
 answer:0,
 explain:"Risiko rupiah yang diizinkan adalah 1% dari Rp8 miliar, yaitu Rp80 juta. Karena stop berada 10% di bawah harga masuk, posisi yang kehilangan 10% nilainya harus setara Rp80 juta, sehingga nilai posisinya adalah Rp80 juta dibagi 10% yaitu Rp800 juta. Jumlah lembarnya sekitar 1,9 juta lembar pada harga Rp420."},

{id:"case-09-q2",caseId:"case-09",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Posisi senilai Rp800 juta setara sekitar 1,9 juta lembar, sementara rata-rata volume harian 180 ribu lembar. Konsekuensi paling serius dari ketimpangan ini adalah...",
 options:["Posisi melanggar batas kepemilikan yang ditetapkan bursa untuk saham kecil","Posisi setara lebih dari sepuluh hari volume, sehingga stop loss tidak dapat dieksekusi tanpa merusak harga","Biaya transaksi membengkak karena order harus dipecah ke banyak sesi perdagangan","Analisis teknikalnya menjadi tidak berlaku karena polanya terbentuk pada volume tipis"],
 answer:1,
 explain:"Posisi sebesar itu setara lebih dari sepuluh kali volume harian, sehingga melikuidasinya menuntut berhari-hari dan pasti menggerakkan harga melawan diri sendiri. Dalam kondisi begitu stop loss kehilangan maknanya: kerugian sebenarnya jauh melampaui yang direncanakan. Batas praktisnya biasanya beberapa persen dari volume harian."},

{id:"case-09-q3",caseId:"case-09",module:"rta-dasar",level:"RTA",difficulty:"sulit",
 q:"Adanya empat sesi tanpa transaksi dalam dua puluh sesi terakhir berdampak pada analisis teknikalnya berupa...",
 options:["Level support dan resistance menjadi lebih kuat karena harga jarang bergerak","Grafiknya harus digambar ulang dengan skala logaritmik agar polanya terbaca","Pola yang terbentuk kurang mewakili konsensus pasar karena sedikit transaksi menggerakkan harga","Indikator teknikal tidak dapat dihitung sama sekali pada deret yang terputus"],
 answer:2,
 explain:"Pada saham tipis, satu order berukuran sedang dapat membentuk candle ekstrem atau menembus level penting tanpa ada perubahan sentimen yang sesungguhnya. Pola yang terbentuk mencerminkan aksi segelintir pihak, bukan konsensus pasar, sehingga sinyalnya rawan menyesatkan meskipun tampak rapi secara visual."},

{id:"case-09-q4",caseId:"case-09",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Keputusan yang paling tepat bagi analis dengan mandat sebesar ini adalah...",
 options:["Memperlebar stop menjadi 20% agar tidak mudah tersentuh oleh spread yang lebar","Memecah pembelian ke sepuluh sesi tanpa mengubah ukuran posisi yang direncanakan","Menjalankan rencana dengan ukuran penuh karena polanya terbentuk selama tujuh bulan","Melewatkan peluang ini, karena instrumennya tidak sesuai dengan ukuran mandat yang dikelola"],
 answer:3,
 explain:"Kualitas pola tidak dapat menutupi ketidakcocokan antara ukuran mandat dan likuiditas instrumen. Memperlebar stop justru memperbesar kerugian saat skenario gagal, dan memecah pembelian tidak menyelesaikan masalah keluar posisi yang sama beratnya. Peluang yang tidak dapat dikelola risikonya bukanlah peluang bagi pengelola dana sebesar ini."},

/* case-10 */
{id:"case-10-q1",caseId:"case-10",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Sistem A menang 74% dengan rata-rata untung 1R dan rata-rata rugi 2,1R. Berapa expectancy-nya per transaksi?",
 options:["Sekitar 0,19R","Sekitar 0,48R","Sekitar 0,74R","Sekitar minus 0,26R"],
 answer:0,
 explain:"Expectancy sama dengan peluang menang dikali rata-rata untung dikurangi peluang kalah dikali rata-rata rugi, yaitu 0,74 dikali 1R dikurangi 0,26 dikali 2,1R. Hasilnya 0,74R dikurangi 0,546R sama dengan sekitar 0,19R. Angka ini menunjukkan win rate 74% yang terdengar mengesankan hanya menghasilkan keunggulan tipis ketika rata-rata kerugiannya dua kali lipat rata-rata keuntungan."},

{id:"case-10-q2",caseId:"case-10",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Tantangan psikologis terbesar dalam menjalankan Sistem B dibanding Sistem A adalah...",
 options:["Keuntungan yang datang terlalu sering sehingga sulit menahan diri menambah posisi","Rangkaian kerugian beruntun yang panjang sebelum satu keuntungan besar datang","Jumlah transaksi yang jauh lebih banyak sehingga menuntut pemantauan terus-menerus","Drawdown yang jauh lebih dalam dibanding sistem mana pun yang lazim dipakai"],
 answer:1,
 explain:"Dengan win rate 38%, rangkaian enam sampai delapan kerugian beruntun adalah hal yang wajar secara statistik. Menjalankan sistem seperti itu menuntut keyakinan bahwa keunggulannya nyata, karena hasilnya baru terlihat setelah banyak transaksi. Selisih drawdown keduanya sendiri tidak terlalu jauh, 24% berbanding 19%."},

{id:"case-10-q3",caseId:"case-10",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Korelasi imbal hasil bulanan kedua sistem hanya 0,15. Implikasi paling penting dari angka itu adalah...",
 options:["Kedua sistem sebenarnya menangkap keunggulan yang sama pada instrumen berbeda","Korelasi serendah itu menandakan salah satu pengujiannya mengandung kekeliruan","Menjalankan keduanya bersamaan berpotensi menghaluskan kurva ekuitas gabungan","Salah satu sistem pasti berhenti bekerja karena keduanya saling meniadakan"],
 answer:2,
 explain:"Korelasi rendah berarti periode sulit kedua sistem tidak berbarengan, sehingga kerugian yang satu sering tertutup keuntungan yang lain. Inilah bentuk diversifikasi sistem yang sesungguhnya: sumber keunggulannya berbeda, bukan sekadar parameter yang berbeda. Gabungannya umumnya memberi drawdown lebih dangkal daripada menjalankan salah satunya sendirian."},

{id:"case-10-q4",caseId:"case-10",module:"cta-sistem",level:"CTA",difficulty:"sulit",
 q:"Jika pengelola hanya boleh memilih satu sistem, dasar pertimbangan yang paling tepat adalah...",
 options:["Win rate tertinggi, karena sistem yang sering menang lebih mudah dipertahankan","Maximum drawdown terkecil, karena itu satu-satunya ukuran risiko yang relevan","Imbal hasil tahunan tertinggi, karena itu tujuan akhir pengelolaan dana","Kesesuaian karakter sistem dengan kemampuan pengelola menjalaninya secara konsisten"],
 answer:3,
 explain:"Sistem terbaik di atas kertas tidak bernilai apa pun bila penggunanya berhenti di tengah drawdown. Karena keduanya sudah lolos pengujian di luar sampel dan metriknya sama-sama layak, penentunya adalah apakah pengelola sanggup menjalankan karakter sistem itu secara konsisten. Imbal hasil, win rate, dan drawdown adalah masukan bagi penilaian itu, bukan penggantinya."},

/* case-11 */
{id:"case-11-q1",caseId:"case-11",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Hanya 41% saham berada di atas MA200 sementara indeks mencetak tertinggi baru. Kondisi ini menandakan...",
 options:["Mayoritas saham sebenarnya belum berada dalam tren naik jangka panjang","Perhitungan indikator breadth tertinggal beberapa pekan dari indeksnya","Rata-rata bergerak 200 hari tidak relevan untuk menilai kondisi pasar luas","Indeks sedang diperbarui komposisinya sehingga angkanya tidak sebanding"],
 answer:0,
 explain:"Persentase saham di atas MA200 mengukur keluasan tren naik. Angka 41% berarti mayoritas saham justru belum berada dalam tren naik jangka panjang, padahal indeksnya mencetak rekor. Kesenjangan itu menunjukkan kenaikan indeks ditopang segelintir emiten, bukan pemulihan yang merata."},

{id:"case-11-q2",caseId:"case-11",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Lima emiten terbesar menyumbang sekitar 70% kenaikan indeks. Hal ini terjadi terutama karena...",
 options:["Bursa membatasi bobot emiten kecil agar indeksnya tidak terlalu bergejolak","Indeks dihitung berbobot kapitalisasi sehingga emiten raksasa menyetir pergerakannya","Emiten besar selalu bergerak lebih dulu sebelum diikuti emiten yang lebih kecil","Investor asing hanya diizinkan bertransaksi pada emiten berkapitalisasi besar"],
 answer:1,
 explain:"Pada indeks berbobot kapitalisasi, pergerakan emiten raksasa berdampak jauh lebih besar terhadap angka indeks daripada emiten kecil. Karena itu indeks dapat mencetak rekor meski mayoritas saham melemah. Indikator breadth diperlukan justru untuk mengungkap keadaan yang tidak terlihat dari angka indeksnya."},

{id:"case-11-q3",caseId:"case-11",module:"cta-breadth",level:"CTA",difficulty:"sulit",
 q:"Survei sentimen menunjukkan optimisme tertinggi dalam dua tahun. Bagi analis, informasi ini paling tepat dipakai untuk...",
 options:["Mengabaikannya, karena survei sentimen tidak memiliki nilai prediktif apa pun","Menjual seluruh posisi, karena optimisme ekstrem selalu diikuti penurunan","Menakar bahwa sebagian besar daya beli sudah terpakai, sehingga eksposur perlu dikurangi","Menambah posisi, karena optimisme tinggi menandakan tren naik masih berlanjut"],
 answer:2,
 explain:"Logika contrarian menyatakan bila hampir semua pihak sudah membeli, tidak tersisa banyak pembeli baru untuk mendorong harga. Namun sentimen ekstrem dapat bertahan lama, sehingga tidak layak dipakai sebagai pemicu waktu keluar. Penggunaannya yang tepat adalah menyesuaikan besar eksposur, bukan menutup seluruh posisi sekaligus."},

{id:"case-11-q4",caseId:"case-11",module:"cta-portfolio",level:"CTA",difficulty:"sulit",
 q:"Tindakan paling tepat bagi pengelola portofolio menghadapi kombinasi kondisi pada kasus ini adalah...",
 options:["Menambah posisi pada lima emiten terbesar yang sedang menggerakkan indeks","Memindahkan seluruh portofolio ke saham berkapitalisasi kecil yang tertinggal","Menutup seluruh posisi dan menunggu sampai breadth kembali membaik","Mengurangi eksposur secara bertahap dan memperketat stop, sambil tetap mengikuti sinyal harga"],
 answer:3,
 explain:"Breadth yang menyempit bersamaan dengan sentimen ekstrem adalah peringatan tentang kerapuhan struktur pasar, bukan sinyal jual dengan waktu yang pasti. Karena kondisi seperti ini dapat berlanjut berbulan-bulan, responsnya adalah menurunkan risiko secara bertahap dan memperketat pengendalian, sementara keputusan masuk keluar tetap mengikuti aksi harga masing-masing posisi."},

/* case-12 */
{id:"case-12-q1",caseId:"case-12",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Struktur contango dengan kontrak berikutnya USD 84,10 terhadap kontrak berjalan USD 82,40 berarti penggulirannya...",
 options:["Menimbulkan biaya, karena posisi beli harus dibuka kembali pada harga lebih tinggi","Menghasilkan keuntungan, karena kontrak berikutnya dihargai lebih mahal oleh pasar","Bersifat netral, karena selisih harga kontrak selalu terkoreksi menjelang jatuh tempo","Tidak berpengaruh, karena penggulingan hanya mengganti tanggal jatuh tempo posisi"],
 answer:0,
 explain:"Pada contango, pemegang posisi beli menjual kontrak berjalan di harga lebih rendah lalu membeli kontrak berikutnya di harga lebih tinggi, sehingga setiap penggulingan menggerus hasil. Selisih USD 1,70 itu adalah biaya nyata yang berulang setiap rollover, dan pada posisi jangka panjang akumulasinya bisa melampaui keuntungan dari pergerakan harga itu sendiri."},

{id:"case-12-q2",caseId:"case-12",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Open interest kontrak berjalan menyusut tajam sementara kontrak berikutnya meningkat tajam. Pembacaan yang tepat adalah...",
 options:["Likuiditas pasar secara keseluruhan sedang mengering menjelang jatuh tempo","Pelaku pasar sedang memindahkan posisinya ke kontrak bulan berikutnya","Minat terhadap komoditas ini sedang menurun sehingga tren naiknya melemah","Dana baru sedang masuk ke sisi jual pada kontrak yang akan jatuh tempo"],
 answer:1,
 explain:"Pola ini adalah gambaran khas proses rollover menjelang jatuh tempo: posisi berpindah dari kontrak berjalan ke kontrak berikutnya. Yang perlu dicatat, likuiditas ikut berpindah, sehingga analisis teknikal sebaiknya juga beralih mengikuti kontrak yang aktif agar level dan polanya mewakili transaksi yang sesungguhnya."},

{id:"case-12-q3",caseId:"case-12",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Setelah rollover, hal yang perlu diperhatikan analis pada grafik kontrak berkelanjutan adalah...",
 options:["Level support resistance lama menjadi tidak berlaku sepenuhnya","Volume historis tidak dapat dibandingkan antar kontrak yang berbeda","Metode penyambungan kontrak mempengaruhi level historis yang tergambar","Grafiknya harus dimulai ulang dari nol karena kontraknya berbeda"],
 answer:2,
 explain:"Deret kontrak berkelanjutan dibentuk dengan menyambung kontrak yang jatuh tempo, dan metode penyambungannya, misalnya penyesuaian selisih harga saat rollover, menggeser seluruh level historis. Karena itu analis perlu mengetahui metode yang dipakai penyedia data dan menyebutkannya dalam laporan, agar level yang dikutip dapat diverifikasi pembaca."},

{id:"case-12-q4",caseId:"case-12",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Mengingat kondisi teknikalnya masih menunjukkan tren naik utuh, keputusan yang paling tepat adalah...",
 options:["Menahan kontrak berjalan sampai jatuh tempo agar terhindar dari biaya penggulingan","Menambah posisi pada kontrak berjalan karena harganya lebih murah dari kontrak berikutnya","Menutup posisi karena biaya contango akan menghapus seluruh keuntungan","Menggulirkan posisi sambil memperhitungkan biaya rollover dalam target imbal hasilnya"],
 answer:3,
 explain:"Tren naik yang utuh adalah alasan sah mempertahankan posisi, sementara biaya contango adalah faktor yang harus dimasukkan ke perhitungan, bukan alasan otomatis menutup posisi. Menahan sampai jatuh tempo berisiko penyerahan fisik bagi kontrak komoditas, dan menambah posisi pada kontrak yang likuiditasnya sedang mengering justru memperburuk kemampuan keluar."}
]);
