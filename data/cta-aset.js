/* Unit CTA: Analisis Multi-Aset (obligasi, valas, komoditas, derivatif, kripto)
   Opsi disusun setara panjang dan seluruhnya masuk akal, sehingga kunci tidak
   dapat ditebak dari bentuk opsinya. */
TD.register([
{id:"cta-as-001",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Imbal hasil obligasi pemerintah naik tajam. Yang terjadi pada harga obligasi yang sudah beredar adalah...",
 options:["Turun, karena kupon tetapnya kalah menarik dibanding imbal hasil pasar","Tetap, karena kuponnya sudah dikunci sampai tanggal jatuh tempo","Bergerak searah, karena harga dan imbal hasil sama-sama mengikuti suku bunga","Naik, karena kuponnya menjadi lebih menarik dibanding penerbitan baru"],
 answer:0,
 explain:"Obligasi membayar kupon tetap, sehingga naiknya imbal hasil pasar membuat obligasi lama kurang menarik dan harganya turun sampai imbal hasil efektifnya setara penerbitan baru. Hubungan harga dan imbal hasil selalu berlawanan arah. Analis yang menggrafikkan obligasi wajib menyatakan apakah yang dianalisis harga atau imbal hasilnya, karena keduanya menghasilkan grafik yang berkebalikan."},

{id:"cta-as-002",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Analisis teknikal pada kurva imbal hasil umumnya dilakukan dengan menggrafikkan...",
 options:["Imbal hasil tenor terpanjang, karena paling mencerminkan ekspektasi jangka panjang","Selisih imbal hasil antar tenor, misalnya 10 tahun dikurangi 2 tahun","Rata-rata imbal hasil seluruh tenor yang diperdagangkan di pasar","Volume perdagangan tiap seri, karena kurva dibentuk oleh likuiditasnya"],
 answer:1,
 explain:"Selisih antar tenor dapat diperlakukan sebagai deret waktu tersendiri yang punya tren, level support resistance, dan pola. Pergerakan spread inilah yang membawa informasi tentang ekspektasi pertumbuhan dan arah kebijakan moneter, sedangkan imbal hasil satu tenor saja tidak menunjukkan bentuk kurvanya."},

{id:"cta-as-003",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Pada pasangan EURUSD, kuotasi yang naik dari 1,08 ke 1,12 berarti...",
 options:["Euro melemah, karena nilainya diukur dalam satuan dolar","Dolar menguat, karena angkanya bertambah besar","Euro menguat, karena dibutuhkan lebih banyak dolar per satu euro","Keduanya menguat terhadap mata uang lain di luar pasangan itu"],
 answer:2,
 explain:"Pada sebuah pasangan mata uang, yang disebut pertama adalah base currency dan yang kedua quote currency. Angka kuotasi menunjukkan berapa banyak quote currency yang dibutuhkan untuk membeli satu unit base currency, sehingga kuotasi yang naik berarti base currency-nya menguat."},

{id:"cta-as-004",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Dibanding pasar saham, karakteristik pasar valuta asing yang paling mempengaruhi analisis teknikal adalah...",
 options:["Jam perdagangannya lebih pendek sehingga tiap sesi membentuk gap pembukaan","Adanya satu bursa terpusat yang menerbitkan data volume resmi harian","Pergerakannya lebih lambat sehingga pola teknikal butuh waktu lebih lama","Perdagangan 24 jam terdesentralisasi sehingga gap antar sesi relatif jarang"],
 answer:3,
 explain:"Pasar valas berjalan hampir tanpa henti sepanjang hari kerja lewat jaringan antar bank, sehingga harga bergerak kontinu dan gap antar sesi jarang terjadi. Konsekuensi lain, tidak ada volume terpusat seperti di bursa saham, sehingga analis memakai tick volume sebagai pendekatan."},

{id:"cta-as-005",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Carry trade pada pasar valas berarti mengambil posisi yang...",
 options:["Memanen selisih suku bunga, dengan risiko utama pembalikan tajam nilai tukar","Memanen selisih harga bid dan ask, dengan risiko utama pelebaran spread","Memanfaatkan perbedaan harga antar bank, dengan risiko utama keterlambatan eksekusi","Mengunci kurs untuk kebutuhan impor, dengan risiko utama gagal bayar lawan transaksi"],
 answer:0,
 explain:"Carry trade meminjam mata uang berbunga rendah untuk ditempatkan pada mata uang berbunga tinggi, sehingga penghasilannya berasal dari selisih bunga. Risikonya, ketika selera risiko memburuk posisi ini ditutup serentak oleh banyak pelaku sehingga nilai tukar bergerak sangat cepat melawan posisi."},

{id:"cta-as-006",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Contango pada pasar berjangka komoditas adalah kondisi ketika...",
 options:["Harga kontrak bulan dekat lebih tinggi dari bulan jauh","Harga kontrak berjangka lebih tinggi dari harga spot","Harga spot lebih tinggi dari harga kontrak berjangka","Harga spot dan harga berjangka berada pada level yang sama"],
 answer:1,
 explain:"Contango umumnya mencerminkan biaya penyimpanan, asuransi, dan pendanaan sampai jatuh tempo, sehingga kontrak yang lebih jauh dihargai lebih mahal. Bagi pemegang posisi beli jangka panjang, struktur ini menimbulkan biaya rollover setiap kali kontrak digulirkan ke bulan berikutnya."},

{id:"cta-as-007",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Backwardation pada komoditas paling sering menandakan...",
 options:["Biaya penyimpanan yang sangat tinggi untuk komoditas bersangkutan","Permintaan jangka panjang yang diperkirakan jauh melampaui pasokan","Kelangkaan pasokan jangka pendek sehingga barang fisik dihargai premium","Kelebihan pasokan jangka pendek sehingga harga spot tertekan ke bawah"],
 answer:2,
 explain:"Ketika pasar kesulitan memperoleh barang fisik saat ini, harga spot naik melampaui harga kontrak mendatang. Struktur ini memberi imbal hasil rollover positif bagi pemegang posisi beli, kebalikan dari contango yang justru membebani."},

{id:"cta-as-008",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Continuous contract pada grafik komoditas berjangka dibuat untuk...",
 options:["Menggabungkan beberapa komoditas sejenis menjadi satu indeks harga","Menyamakan satuan harga antar bursa berjangka yang berbeda","Menghapus pengaruh biaya rollover dari perhitungan imbal hasil","Menyambung kontrak yang jatuh tempo agar deret historis panjang dapat dianalisis"],
 answer:3,
 explain:"Setiap kontrak berjangka punya masa berlaku, sehingga analisis jangka panjang memerlukan deret gabungan dari kontrak yang berurutan. Metode penyambungannya, misalnya penyesuaian selisih harga saat rollover, mempengaruhi level historis pada grafik sehingga perlu disebutkan dalam laporan."},

{id:"cta-as-009",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Open interest pada pasar derivatif menunjukkan jumlah...",
 options:["Kontrak yang masih terbuka dan belum diselesaikan","Pelaku pasar yang terdaftar aktif di bursa berjangka","Kontrak yang jatuh tempo pada bulan berjalan","Transaksi yang terjadi pada sesi perdagangan hari itu"],
 answer:0,
 explain:"Open interest menghitung kontrak yang posisinya masih hidup, berbeda dari volume yang menghitung aktivitas transaksi harian. Perubahannya menunjukkan apakah dana baru masuk ke pasar atau posisi lama sedang ditutup."},

{id:"cta-as-010",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Pada pasar berjangka, kombinasi harga naik, volume naik, dan open interest naik menandakan...",
 options:["Kenaikan yang rapuh karena tidak disertai penambahan peserta pasar","Tren naik yang kuat karena didukung masuknya dana baru ke sisi beli","Penutupan posisi jual lama yang mendorong harga naik sementara","Perpindahan posisi dari kontrak bulan dekat ke bulan yang lebih jauh"],
 answer:1,
 explain:"Open interest yang naik berarti kontrak baru terbentuk, bukan sekadar posisi lama yang ditutup, sehingga ada partisipan baru yang masuk. Sebaliknya, harga naik dengan open interest turun menandakan kenaikan didorong penutupan posisi jual, yang tenaganya cenderung habis lebih cepat."},

{id:"cta-as-011",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Commitment of Traders report berguna bagi analis teknikal terutama karena menunjukkan...",
 options:["Jumlah kontrak yang akan jatuh tempo pada bulan penyerahan berikutnya","Posisi kelompok pelaku seperti commercial dan large speculator sebagai ukuran sentimen","Perkiraan harga wajar komoditas menurut konsensus pelaku pasar berjangka","Volume transaksi harian yang dipecah menurut bursa tempat terjadinya"],
 answer:1,
 explain:"Posisi commercial umumnya bersifat lindung nilai dan bergerak berlawanan dengan spekulan besar. Ketika posisi spekulan mencapai level ekstrem secara historis, kondisi itu sering dipakai sebagai indikasi contrarian menjelang titik balik, bukan sebagai pemicu transaksi langsung."},

{id:"cta-as-012",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Karakteristik pasar aset kripto yang paling mempengaruhi penerapan analisis teknikal adalah...",
 options:["Jam perdagangan terbatas sehingga gap akhir pekan menjadi sangat sering","Volatilitas yang rendah sehingga sinyal teknikal jarang memberi peluang","Adanya otoritas tunggal yang menetapkan harga acuan harian tiap aset","Perdagangan 24 jam sepanjang pekan dengan volatilitas yang umumnya tinggi"],
 answer:3,
 explain:"Karena tidak ada penutupan pasar, konsep gap antar sesi hampir tidak berlaku dan batas hari menjadi relatif arbitrer tergantung zona waktu yang dipakai. Volatilitas yang tinggi menuntut jarak stop yang lebih lebar, yang harus dikompensasi dengan ukuran posisi lebih kecil."},

{id:"cta-as-013",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Tantangan khusus dalam menganalisis volume pada aset kripto adalah...",
 options:["Volume terfragmentasi lintas bursa dan sebagiannya dapat dilaporkan tidak akurat","Volume hanya dipublikasikan sekali sehari sehingga tidak bisa dianalisis intraday","Volume tidak pernah dipublikasikan oleh bursa kripto mana pun","Volume selalu dinyatakan dalam satuan dolar sehingga sulit dibandingkan"],
 answer:0,
 explain:"Tidak ada pelaporan volume terpusat seperti pada bursa saham, dan sejumlah bursa pernah dituduh menggelembungkan angka volumenya. Analis umumnya membatasi diri pada bursa besar bereputasi atau memakai data agregat dari penyedia yang menyaring bursa bermasalah."},

{id:"cta-as-014",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Bagi investor asing yang memegang saham berdenominasi rupiah, faktor tambahan yang wajib diperhitungkan adalah...",
 options:["Batas kepemilikan asing yang membuat posisi tidak dapat dilikuidasi penuh","Pergerakan nilai tukar yang mempengaruhi imbal hasil dalam mata uang asalnya","Perbedaan jam perdagangan yang membuat harga penutupan sulit dibandingkan","Biaya kustodian lokal yang berubah mengikuti pergerakan indeks komposit"],
 answer:1,
 explain:"Kenaikan indeks dalam rupiah dapat berubah menjadi kerugian setelah dikonversi bila rupiah melemah tajam pada periode yang sama. Karena itu sebagian analis menggrafikkan indeks dalam denominasi dolar untuk menilai kinerjanya dari sudut pandang investor global."},

{id:"cta-as-015",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Analisis arah yang benar pada aset dasar tetap dapat berakhir rugi pada posisi opsi, terutama karena...",
 options:["Harga opsi ditetapkan penerbit sehingga tidak mengikuti pergerakan aset dasar","Posisi opsi selalu menuntut penyetoran margin tambahan saat harga bergerak","Nilai opsi juga ditentukan peluruhan waktu dan perubahan volatilitas tersirat","Opsi hanya dapat dieksekusi pada tanggal jatuh temponya, bukan sebelum itu"],
 answer:2,
 explain:"Opsi punya masa berlaku, sehingga nilainya terus tergerus seiring waktu meski harga aset dasar bergerak sesuai perkiraan. Perubahan volatilitas tersirat juga menggeser premi secara independen dari arah harga, sehingga ketepatan waktu menjadi sama pentingnya dengan ketepatan arah."},

{id:"cta-as-016",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Volatilitas tersirat yang sangat tinggi menjelang peristiwa penting berarti...",
 options:["Premi opsi menjadi murah, sehingga membeli opsi menjadi strategi yang menarik","Arah pergerakan setelah peristiwa sudah dapat diperkirakan dari harga opsinya","Volatilitas nyata setelah peristiwa dipastikan akan setinggi yang tersirat itu","Premi opsi menjadi mahal, sehingga pembeli butuh pergerakan lebih besar agar untung"],
 answer:3,
 explain:"Pasar sudah menetapkan harga untuk kemungkinan pergerakan besar, sehingga pembeli opsi perlu pergerakan yang melampaui ekspektasi itu agar untung. Setelah peristiwa berlalu, volatilitas tersirat biasanya anjlok dan menggerus nilai opsi meski arah harganya tepat, fenomena yang dikenal sebagai volatility crush."},

{id:"cta-as-017",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Harga emas secara tradisional dianalisis dengan memperhatikan hubungannya terhadap...",
 options:["Dolar dan suku bunga riil, yang keduanya cenderung berlawanan arah dengan emas","Indeks saham global, yang pergerakannya cenderung searah dengan harga emas","Harga minyak mentah, karena keduanya sama-sama tergolong komoditas energi","Volume perdagangan bursa berjangka, yang menentukan arah harga jangka panjang"],
 answer:0,
 explain:"Emas tidak memberi imbal hasil, sehingga naiknya suku bunga riil meningkatkan biaya kesempatan memegangnya. Dolar yang menguat juga membuat emas lebih mahal bagi pemegang mata uang lain sehingga menekan permintaan."},

{id:"cta-as-018",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Perbedaan mendasar antara menganalisis ETF dan reksa dana konvensional adalah...",
 options:["ETF tidak dapat dianalisis secara teknikal karena harganya mengikuti indeks acuan","ETF punya harga intraday lengkap dengan volume, reksa dana hanya punya NAB harian","ETF hanya punya NAB harian, sementara reksa dana diperdagangkan sepanjang sesi","Keduanya sama, karena keduanya sama-sama mengacu pada nilai aset bersihnya"],
 answer:1,
 explain:"ETF diperdagangkan di bursa sehingga memiliki data open, high, low, close, dan volume yang lengkap dan bisa dianalisis seperti saham. Reksa dana konvensional hanya menerbitkan satu nilai aktiva bersih per hari, sehingga analisisnya terbatas pada grafik garis harian atau yang lebih panjang."},

{id:"cta-as-019",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Spread trading antar kontrak komoditas dianalisis dengan cara...",
 options:["Membandingkan volume kedua kontrak untuk menentukan mana yang memimpin","Menghitung rata-rata harga kedua kontrak lalu mencari penyimpangannya","Menggrafikkan selisih harga dua kontrak sebagai deret tersendiri","Menganalisis kontrak yang paling likuid lalu menerapkannya pada kontrak lain"],
 answer:2,
 explain:"Selisih harga antar bulan kontrak atau antar komoditas terkait diperlakukan sebagai instrumen tersendiri yang punya tren dan level. Strategi ini umumnya berdampak volatilitas lebih rendah karena sebagian risiko arah pasar pada kedua kaki posisi saling meniadakan."},

{id:"cta-as-020",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Pada analisis indeks sektor perbankan, faktor makro yang paling relevan diperhatikan adalah...",
 options:["Pergerakan harga komoditas energi yang menentukan biaya operasional perbankan","Tingkat inflasi pangan yang mempengaruhi daya beli nasabah ritel bank","Nilai tukar mata uang kripto yang kini menjadi pesaing produk simpanan","Arah suku bunga dan bentuk kurva imbal hasil yang mempengaruhi margin bunga bersih"],
 answer:3,
 explain:"Bank memperoleh pendapatan utama dari selisih bunga simpanan dan pinjaman, sehingga bentuk kurva imbal hasil langsung mempengaruhi profitabilitasnya. Kurva yang curam umumnya mendukung margin bunga bersih, sedangkan kurva yang datar atau terbalik menekannya."},

{id:"cta-as-021",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Likuiditas kontrak berjangka umumnya terkonsentrasi pada kontrak...",
 options:["Bulan terdekat yang masih aktif diperdagangkan","Bulan terjauh, karena horizon waktunya paling panjang","Yang baru diterbitkan bursa pada periode berjalan","Dengan nilai kontrak terkecil sehingga terjangkau banyak pelaku"],
 answer:0,
 explain:"Kontrak bulan depan umumnya menyerap sebagian besar volume dan open interest. Menganalisis kontrak yang sepi menghasilkan grafik penuh celah dengan level yang tidak mewakili konsensus pasar, sehingga sinyalnya rawan menyesatkan."},

{id:"cta-as-022",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Perbedaan penting dalam menerapkan stop loss pada aset kripto dibanding saham adalah...",
 options:["Risiko gap akhir pekan membuat stop harus selalu dicabut menjelang Jumat","Volatilitas ekstrem menuntut jarak stop lebih lebar dan ukuran posisi lebih kecil","Stop loss tidak tersedia pada bursa kripto sehingga harus dijalankan manual","Volatilitasnya lebih rendah sehingga stop dapat dipasang jauh lebih rapat"],
 answer:1,
 explain:"Ayunan harga dua digit persen dalam sehari bukan hal aneh di pasar kripto, sehingga memaksakan jarak stop ala saham membuatnya tersentuh oleh fluktuasi normal. Pengendalian risiko dialihkan ke ukuran posisi, bukan dengan merapatkan stop."},

{id:"cta-as-023",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Analisis teknikal pada surat utang negara Indonesia paling lazim dilakukan terhadap...",
 options:["Jumlah seri baru yang diterbitkan pemerintah tiap kuartal","Peringkat kredit yang diberikan lembaga pemeringkat internasional","Deret imbal hasil seri acuan, misalnya tenor 10 tahun","Harga rata-rata seluruh seri yang beredar di pasar sekunder"],
 answer:2,
 explain:"Imbal hasil seri acuan merupakan deret waktu yang likuid dan berkesinambungan sehingga cocok dianalisis secara teknikal. Level support resistance pada imbal hasil kerap menjadi rujukan penting bagi pelaku pasar surat utang maupun pelaku pasar saham yang memantaunya."},

{id:"cta-as-024",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Saham tambang batu bara bergerak naik tajam sementara harga batu bara mendatar. Pembacaan yang paling tepat adalah...",
 options:["Konfirmasi bahwa harga batu bara akan segera menyusul naik mengikuti sahamnya","Hal biasa, karena harga saham tambang bergerak bebas dari komoditasnya","Divergensi yang perlu ditelusuri, mungkin dari ekspektasi laba, utang, atau aksi korporasi","Tanda bahwa saham itu sedang dipakai sebagai lindung nilai oleh produsen"],
 answer:2,
 explain:"Saham komoditas umumnya mengikuti harga komoditas dasarnya, sehingga penyimpangan dari hubungan itu adalah informasi, bukan gangguan. Penyebabnya bisa perubahan ekspektasi laba, restrukturisasi utang, aksi korporasi, atau perbaikan efisiensi, dan penelusuran itu yang menentukan apakah divergensinya berkelanjutan."},

{id:"cta-as-025",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Prinsip yang berlaku saat menerapkan metode teknikal lintas kelas aset adalah...",
 options:["Metodenya berlaku umum, tetapi parameternya wajib dikalibrasi per kelas aset","Metodenya berlaku umum, dan parameternya dapat dipakai sama persis di semua aset","Metodenya hanya berlaku pada saham, sedangkan aset lain butuh pendekatan berbeda","Metodenya berbeda tiap aset, sehingga tidak ada prinsip yang dapat dipindahkan"],
 answer:0,
 explain:"Prinsip tren, support resistance, dan momentum berakar pada perilaku pelaku pasar sehingga berlaku di semua instrumen yang diperdagangkan secara bebas. Namun periode indikator, jarak stop, dan ukuran posisi harus disesuaikan dengan likuiditas, volatilitas, dan struktur pasar masing-masing kelas aset."}
]);
