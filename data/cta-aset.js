/* Unit CTA: Analisis Multi-Aset (obligasi, valas, komoditas, derivatif, kripto)
   Opsi disusun setara panjang dan seluruhnya masuk akal, sehingga kunci tidak
   dapat ditebak dari bentuk opsinya. */
TD.register([
{id:"cta-as-001",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Imbal hasil obligasi pemerintah naik tajam. Yang terjadi pada harga obligasi yang sudah beredar adalah...",
 options:["Turun, karena kupon tetapnya kalah menarik dibanding imbal hasil pasar","Tetap, karena kuponnya sudah dikunci sampai tanggal jatuh tempo","Bergerak searah, karena harga dan imbal hasil sama-sama mengikuti suku bunga","Naik, karena kuponnya menjadi lebih menarik dibanding penerbitan baru"],
 answer:0,
 explain:"Obligasi bayar kupon TETAP. Lo pegang obligasi kupon 6%, terus pemerintah nerbitin yang baru kupon 8%. Siapa yang mau beli punya lo di harga awal? Nggak ada. Jadi harganya turun sampai hasil efektifnya setara 8%. Harga dan yield SELALU berlawanan, kayak jungkat-jungkit. Efek praktisnya buat analis: kalau lo bikin chart obligasi, WAJIB nyebutin itu harga atau yield, karena dua-duanya ngasih chart yang persis kebalik. Salah baca ini, bullish jadi bearish."},

{id:"cta-as-002",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Analisis teknikal pada kurva imbal hasil umumnya dilakukan dengan menggrafikkan...",
 options:["Imbal hasil tenor terpanjang, karena paling mencerminkan ekspektasi jangka panjang","Selisih imbal hasil antar tenor, misalnya 10 tahun dikurangi 2 tahun","Rata-rata imbal hasil seluruh tenor yang diperdagangkan di pasar","Volume perdagangan tiap seri, karena kurva dibentuk oleh likuiditasnya"],
 answer:1,
 explain:"Yield satu tenor doang nggak nunjukin bentuk kurvanya. Yang informatif itu SELISIHNYA, misal 10 tahun dikurangi 2 tahun. Nah, selisih ini bisa diperlakukan kayak instrumen sendiri: ada trennya, ada support resistance-nya, ada polanya. Yang dibawa spread ini: ekspektasi pertumbuhan dan arah kebijakan moneter. Spread yang nyempit sampai minus itu kurva terbalik, dan secara historis itu salah satu penanda resesi paling terkenal."},

{id:"cta-as-003",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Pada pasangan EURUSD, kuotasi yang naik dari 1,08 ke 1,12 berarti...",
 options:["Euro melemah, karena nilainya diukur dalam satuan dolar","Dolar menguat, karena angkanya bertambah besar","Euro menguat, karena dibutuhkan lebih banyak dolar per satu euro","Keduanya menguat terhadap mata uang lain di luar pasangan itu"],
 answer:2,
 explain:"Di pasangan mata uang, yang disebut DULUAN itu base currency, yang kedua quote currency. Angka kuotasi = berapa banyak quote yang dibutuhin buat beli SATU base. EURUSD 1,08 ke 1,12 artinya sekarang butuh lebih banyak dolar buat beli satu euro. Berarti euro-nya yang naik kelas. Aturan cepetnya: angka naik = yang di DEPAN menguat. Ini sering ketuker, dan salahnya fatal karena lo jadi buka posisi kebalik."},

{id:"cta-as-004",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Dibanding pasar saham, karakteristik pasar valuta asing yang paling mempengaruhi analisis teknikal adalah...",
 options:["Jam perdagangannya lebih pendek sehingga tiap sesi membentuk gap pembukaan","Adanya satu bursa terpusat yang menerbitkan data volume resmi harian","Pergerakannya lebih lambat sehingga pola teknikal butuh waktu lebih lama","Perdagangan 24 jam terdesentralisasi sehingga gap antar sesi relatif jarang"],
 answer:3,
 explain:"Valas jalan hampir tanpa henti lewat jaringan antar bank, jadi harganya gerak nyambung terus dan gap antar sesi jarang banget. Beda sama saham yang tiap pagi bisa buka jauh dari close kemarin. Tapi ada konsekuensi lain yang sering dilupain: nggak ada volume terpusat kayak di bursa saham, karena transaksinya nyebar di ribuan bank. Makanya analis valas pakai tick volume, yang sebenernya ngitung JUMLAH perubahan harga, bukan lot yang ditransaksiin."},

{id:"cta-as-005",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Carry trade pada pasar valas berarti mengambil posisi yang...",
 options:["Memanen selisih suku bunga, dengan risiko utama pembalikan tajam nilai tukar","Memanen selisih harga bid dan ask, dengan risiko utama pelebaran spread","Memanfaatkan perbedaan harga antar bank, dengan risiko utama keterlambatan eksekusi","Mengunci kurs untuk kebutuhan impor, dengan risiko utama gagal bayar lawan transaksi"],
 answer:0,
 explain:"Carry trade itu pinjem mata uang bunga rendah (dulu yen), terus taruh di mata uang bunga tinggi. Untungnya dari selisih bunga, ngalir pelan tapi rutin. Masalahnya: strategi ini untung kecil-kecil terus-terusan, sampai suatu hari rugi gede sekaligus. Pas selera risiko memburuk, semua orang nutup posisi ini BARENGAN, dan nilai tukar gerak super cepat ngelawan lo. Istilahnya ngutip receh di depan mesin giling."},

{id:"cta-as-006",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Contango pada pasar berjangka komoditas adalah kondisi ketika...",
 options:["Harga kontrak bulan dekat lebih tinggi dari bulan jauh","Harga kontrak berjangka lebih tinggi dari harga spot","Harga spot lebih tinggi dari harga kontrak berjangka","Harga spot dan harga berjangka berada pada level yang sama"],
 answer:1,
 explain:"Contango = harga kontrak masa depan lebih mahal dari spot. Masuk akal sih, karena nyimpen barang fisik itu ada biayanya: gudang, asuransi, bunga uang yang nganggur. Tapi ini jebakan buat yang pegang posisi beli jangka panjang lewat futures: tiap kali kontrak digulirin ke bulan berikutnya, lo jual murah beli mahal. Rugi kecil yang berulang tiap bulan. Ini alesan banyak ETF komoditas kinerjanya kalah jauh dari harga komoditasnya sendiri."},

{id:"cta-as-007",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Backwardation pada komoditas paling sering menandakan...",
 options:["Biaya penyimpanan yang sangat tinggi untuk komoditas bersangkutan","Permintaan jangka panjang yang diperkirakan jauh melampaui pasokan","Kelangkaan pasokan jangka pendek sehingga barang fisik dihargai premium","Kelebihan pasokan jangka pendek sehingga harga spot tertekan ke bawah"],
 answer:2,
 explain:"Backwardation itu kebalikan contango: spot lebih mahal dari kontrak masa depan. Artinya orang lagi rebutan barang FISIK sekarang juga, nggak mau nunggu. Biasanya tanda kelangkaan pasokan jangka pendek. Buat pemegang posisi beli, struktur ini malah ngasih keuntungan rollover: tiap gulir lo jual mahal beli murah. Kebalikan persis dari contango yang tiap bulan nyicil rugi."},

{id:"cta-as-008",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Continuous contract pada grafik komoditas berjangka dibuat untuk...",
 options:["Menggabungkan beberapa komoditas sejenis menjadi satu indeks harga","Menyamakan satuan harga antar bursa berjangka yang berbeda","Menghapus pengaruh biaya rollover dari perhitungan imbal hasil","Menyambung kontrak yang jatuh tempo agar deret historis panjang dapat dianalisis"],
 answer:3,
 explain:"Tiap kontrak berjangka ada tanggal matinya, jadi analisis jangka panjang butuh deret gabungan dari kontrak berurutan. Nah, CARA nyambungnya ini yang sering diabaikan padahal penting: metode penyesuaian selisih harga saat rollover bikin level historis di chart geser. Support yang lo lihat di 2018 bisa jadi angka yang nggak pernah diperdagangin beneran. Makanya di laporan wajib disebutin deret mana yang dipakai."},

{id:"cta-as-009",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Open interest pada pasar derivatif menunjukkan jumlah...",
 options:["Kontrak yang masih terbuka dan belum diselesaikan","Pelaku pasar yang terdaftar aktif di bursa berjangka","Kontrak yang jatuh tempo pada bulan berjalan","Transaksi yang terjadi pada sesi perdagangan hari itu"],
 answer:0,
 explain:"Gampangnya: volume itu berapa TIKET yang berpindah tangan hari ini, open interest itu berapa tiket yang masih dipegang orang. Beda. Volume bisa gede karena satu orang jual beli bolak-balik. Open interest naik artinya beneran ada kontrak BARU kebentuk, alias duit baru masuk. Turun artinya posisi lama lagi ditutup. Dua angka ini dibaca bareng buat tau tren lagi ditopang duit baru atau cuma sisa-sisa orang keluar."},

{id:"cta-as-010",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Pada pasar berjangka, kombinasi harga naik, volume naik, dan open interest naik menandakan...",
 options:["Kenaikan yang rapuh karena tidak disertai penambahan peserta pasar","Tren naik yang kuat karena didukung masuknya dana baru ke sisi beli","Penutupan posisi jual lama yang mendorong harga naik sementara","Perpindahan posisi dari kontrak bulan dekat ke bulan yang lebih jauh"],
 answer:1,
 explain:"Kombinasi harga naik + volume naik + OI naik itu paket lengkap. OI naik artinya kontrak baru kebentuk, bukan cuma posisi lama yang ditutup, jadi ada peserta BARU masuk ke sisi beli. Duit segar. Bandingin sama harga naik tapi OI TURUN: itu kenaikannya didorong short covering, alias yang jual lagi kabur. Naiknya bisa tajem tapi tenaganya cepet abis, soalnya begitu yang nyangkut udah keluar semua, nggak ada lagi yang beli."},

{id:"cta-as-011",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Commitment of Traders report berguna bagi analis teknikal terutama karena menunjukkan...",
 options:["Volume transaksi harian yang dipecah menurut bursa tempat terjadinya","Jumlah kontrak yang akan jatuh tempo pada bulan penyerahan berikutnya","Posisi kelompok pelaku seperti commercial dan large speculator sebagai ukuran sentimen","Perkiraan harga wajar komoditas menurut konsensus pelaku pasar berjangka"],
 answer:2,
 explain:"COT report mbongkar siapa megang apa. Commercial itu produsen dan pengguna barang fisik, mereka hedging, jadi posisinya sering berlawanan sama spekulan besar. Logikanya: commercial paling ngerti barangnya, spekulan paling gampang kebawa arus. Pas posisi spekulan nyentuh ekstrem historis, itu sering dipakai sebagai sinyal contrarian menjelang titik balik. TAPI ini indikator lambat dan datanya telat seminggu, jadi buat kerangka, bukan pemicu entry."},

{id:"cta-as-012",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Karakteristik pasar aset kripto yang paling mempengaruhi penerapan analisis teknikal adalah...",
 options:["Jam perdagangan terbatas sehingga gap akhir pekan menjadi sangat sering","Volatilitas yang rendah sehingga sinyal teknikal jarang memberi peluang","Adanya otoritas tunggal yang menetapkan harga acuan harian tiap aset","Perdagangan 24 jam sepanjang pekan dengan volatilitas yang umumnya tinggi"],
 answer:3,
 explain:"Kripto jalan 24/7, jadi konsep gap antar sesi hampir nggak berlaku dan batas 'hari' itu relatif banget tergantung zona waktu bursa yang lo pakai. Candle harian Binance sama Indodax bisa beda bentuk padahal aset sama. Terus volatilitasnya: gerak 10% sehari itu biasa. Konsekuensinya stop harus lebih lebar, dan supaya rugi rupiahnya tetep sama, ukuran posisi harus dikecilin. Bukan stop-nya yang dipepetin."},

{id:"cta-as-013",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Tantangan khusus dalam menganalisis volume pada aset kripto adalah...",
 options:["Volume terfragmentasi lintas bursa dan sebagiannya dapat dilaporkan tidak akurat","Volume hanya dipublikasikan sekali sehari sehingga tidak bisa dianalisis intraday","Volume tidak pernah dipublikasikan oleh bursa kripto mana pun","Volume selalu dinyatakan dalam satuan dolar sehingga sulit dibandingkan"],
 answer:0,
 explain:"Nggak ada pelaporan volume terpusat kayak di bursa saham, dan beberapa bursa kripto pernah ketahuan ngegelembungin angka volumenya biar keliatan rame. Jadi indikator berbasis volume bisa ngasih sinyal dari data yang emang dikarang. Praktik amannya: batesin diri ke bursa besar yang reputasinya jelas, atau pakai data agregat dari penyedia yang udah nyaring bursa bermasalah. Volume palsu itu lebih bahaya daripada nggak ada volume sama sekali."},

{id:"cta-as-014",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Bagi investor asing yang memegang saham berdenominasi rupiah, faktor tambahan yang wajib diperhitungkan adalah...",
 options:["Batas kepemilikan asing yang membuat posisi tidak dapat dilikuidasi penuh","Pergerakan nilai tukar yang mempengaruhi imbal hasil dalam mata uang asalnya","Perbedaan jam perdagangan yang membuat harga penutupan sulit dibandingkan","Biaya kustodian lokal yang berubah mengikuti pergerakan indeks komposit"],
 answer:1,
 explain:"IHSG naik 12% kedengeran mantap, sampai lo inget rupiah melemah 15% di periode yang sama. Buat investor asing, itu RUGI. Chart lokal ijo, dompet dolar merah. Makanya sebagian analis bikin chart indeks dalam denominasi dolar buat nilai kinerjanya dari sudut pandang global. Dan ini bukan urusan bule doang: arus dana asing ngikutin chart dolar itu, dan arus dana asing yang gerakin IHSG."},

{id:"cta-as-015",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Analisis arah yang benar pada aset dasar tetap dapat berakhir rugi pada posisi opsi, terutama karena...",
 options:["Harga opsi ditetapkan penerbit sehingga tidak mengikuti pergerakan aset dasar","Posisi opsi selalu menuntut penyetoran margin tambahan saat harga bergerak","Nilai opsi juga ditentukan peluruhan waktu dan perubahan volatilitas tersirat","Opsi hanya dapat dieksekusi pada tanggal jatuh temponya, bukan sebelum itu"],
 answer:2,
 explain:"Ini yang bikin banyak pemula opsi bingung: arahnya bener, tapi tetep rugi. Penyebabnya dua. Pertama theta alias peluruhan waktu: opsi punya tanggal mati, nilainya kegerus tiap hari meski harga diem di tempat. Kedua vega: volatilitas tersirat berubah bisa nggeser premi tanpa peduli arah harga. Jadi di opsi, bener arah doang nggak cukup. Lo harus bener arah, bener BESARNYA, dan bener WAKTUNYA. Tiga-tiganya."},

{id:"cta-as-016",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Volatilitas tersirat yang sangat tinggi menjelang peristiwa penting berarti...",
 options:["Premi opsi menjadi murah, sehingga membeli opsi menjadi strategi yang menarik","Arah pergerakan setelah peristiwa sudah dapat diperkirakan dari harga opsinya","Volatilitas nyata setelah peristiwa dipastikan akan setinggi yang tersirat itu","Premi opsi menjadi mahal, sehingga pembeli butuh pergerakan lebih besar agar untung"],
 answer:3,
 explain:"IV tinggi artinya pasar UDAH ngeharga kemungkinan gerakan besar. Jadi premi opsinya mahal, dan lo sebagai pembeli butuh gerakan yang LEBIH BESAR dari ekspektasi itu buat untung. Yang paling nyakitin namanya volatility crush: habis peristiwanya lewat, IV anjlok drastis, dan nilai opsi lo kegerus meski arah harganya tepat. Beli opsi menjelang berita gede itu sering kalah walaupun tebakan lo bener."},

{id:"cta-as-017",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Harga emas secara tradisional dianalisis dengan memperhatikan hubungannya terhadap...",
 options:["Dolar dan suku bunga riil, yang keduanya cenderung berlawanan arah dengan emas","Indeks saham global, yang pergerakannya cenderung searah dengan harga emas","Harga minyak mentah, karena keduanya sama-sama tergolong komoditas energi","Volume perdagangan bursa berjangka, yang menentukan arah harga jangka panjang"],
 answer:0,
 explain:"Emas nggak ngasih bunga atau dividen. Jadi kalau suku bunga riil naik, biaya kesempatan megang emas ikut naik — kenapa nyimpen batu kuning kalau obligasi ngasih 5% riil? Itu nekan emas. Dolar yang nguat juga nekan, karena emas jadi lebih mahal buat pemegang mata uang lain. Dua hubungan ini kuat secara historis, tapi bisa putus sementara pas ada krisis geopolitik, di mana orang beli emas nggak peduli hitungannya."},

{id:"cta-as-018",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Perbedaan mendasar antara menganalisis ETF dan reksa dana konvensional adalah...",
 options:["ETF tidak dapat dianalisis secara teknikal karena harganya mengikuti indeks acuan","ETF punya harga intraday lengkap dengan volume, reksa dana hanya punya NAB harian","ETF hanya punya NAB harian, sementara reksa dana diperdagangkan sepanjang sesi","Keduanya sama, karena keduanya sama-sama mengacu pada nilai aset bersihnya"],
 answer:1,
 explain:"ETF diperdagangin di bursa, jadi dia punya data OHLC lengkap plus volume, dan bisa dianalisis persis kayak saham. Reksa dana konvensional cuma nerbitin SATU nilai NAB per hari. Artinya lo nggak punya high, low, apalagi volume. Analisisnya kebatas di chart garis harian atau lebih panjang. Nggak ada candlestick, nggak ada pola intraday, nggak ada konfirmasi volume. Setengah kotak peralatan lo nggak kepakai."},

{id:"cta-as-019",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Spread trading antar kontrak komoditas dianalisis dengan cara...",
 options:["Membandingkan volume kedua kontrak untuk menentukan mana yang memimpin","Menghitung rata-rata harga kedua kontrak lalu mencari penyimpangannya","Menggrafikkan selisih harga dua kontrak sebagai deret tersendiri","Menganalisis kontrak yang paling likuid lalu menerapkannya pada kontrak lain"],
 answer:2,
 explain:"Selisih harga antar bulan kontrak atau antar komoditas terkait diperlakukan sebagai INSTRUMEN SENDIRI yang punya tren dan level. Kenapa orang ngelakuin ini? Karena sebagian risiko arah pasar di dua kaki posisi saling meniadakan. Kalau semua komoditas jatuh gara-gara resesi, dua-duanya jatuh, selisihnya relatif aman. Volatilitasnya jadi jauh lebih rendah, cocok buat yang nyari untung stabil daripada untung gede."},

{id:"cta-as-020",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Pada analisis indeks sektor perbankan, faktor makro yang paling relevan diperhatikan adalah...",
 options:["Pergerakan harga komoditas energi yang menentukan biaya operasional perbankan","Tingkat inflasi pangan yang mempengaruhi daya beli nasabah ritel bank","Nilai tukar mata uang kripto yang kini menjadi pesaing produk simpanan","Arah suku bunga dan bentuk kurva imbal hasil yang mempengaruhi margin bunga bersih"],
 answer:3,
 explain:"Bank dapet duit utamanya dari selisih bunga simpanan sama pinjaman. Mereka minjem pendek (tabungan nasabah), minjemin panjang (KPR, kredit usaha). Jadi bentuk kurva yield langsung nentuin untungnya. Kurva CURAM = minjem murah di ujung pendek, minjemin mahal di ujung panjang, margin gede. Kurva DATAR atau TERBALIK = marginnya kejepit. Makanya saham bank sering gerak duluan begitu bentuk kurva berubah, sebelum laporan keuangannya keluar."},

{id:"cta-as-021",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Likuiditas kontrak berjangka umumnya terkonsentrasi pada kontrak...",
 options:["Bulan terdekat yang masih aktif diperdagangkan","Bulan terjauh, karena horizon waktunya paling panjang","Yang baru diterbitkan bursa pada periode berjalan","Dengan nilai kontrak terkecil sehingga terjangkau banyak pelaku"],
 answer:0,
 explain:"Kontrak bulan terdekat biasanya nyerep sebagian besar volume dan open interest. Yang bulan jauh sepi. Kalau lo analisis kontrak yang sepi, chart-nya penuh celah dan level-levelnya nggak mewakili kesepakatan pasar mana pun — itu cuma jejak beberapa transaksi nyasar. Sinyal dari chart kayak gitu rawan banget nyesatin. Aturannya gampang: analisis di kontrak yang rame, eksekusi juga di situ."},

{id:"cta-as-022",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Perbedaan penting dalam menerapkan stop loss pada aset kripto dibanding saham adalah...",
 options:["Risiko gap akhir pekan membuat stop harus selalu dicabut menjelang Jumat","Volatilitas ekstrem menuntut jarak stop lebih lebar dan ukuran posisi lebih kecil","Stop loss tidak tersedia pada bursa kripto sehingga harus dijalankan manual","Volatilitasnya lebih rendah sehingga stop dapat dipasang jauh lebih rapat"],
 answer:1,
 explain:"Gerak dua digit persen sehari itu normal di kripto. Maksain stop ala saham (2-3%) di situ artinya lo bakal kena stop sama goyangan yang biasa aja, bukan sama pembalikan beneran. Solusinya BUKAN mepetin stop, tapi mindahin pengendalian risiko ke UKURAN POSISI. Stop-nya lebarin sesuai karakter asetnya, terus kecilin jumlah lembarnya biar rugi rupiahnya tetep sama. Prinsip yang sama berlaku di saham gorengan."},

{id:"cta-as-023",module:"cta-aset",level:"CTA",difficulty:"sedang",
 q:"Analisis teknikal pada surat utang negara Indonesia paling lazim dilakukan terhadap...",
 options:["Jumlah seri baru yang diterbitkan pemerintah tiap kuartal","Peringkat kredit yang diberikan lembaga pemeringkat internasional","Deret imbal hasil seri acuan, misalnya tenor 10 tahun","Harga rata-rata seluruh seri yang beredar di pasar sekunder"],
 answer:2,
 explain:"Yang dianalisis biasanya YIELD seri acuan, misal tenor 10 tahun, bukan harganya. Alasannya praktis: yield seri acuan itu deret yang likuid dan nyambung terus, cocok dianalisis teknikal. Support resistance di yield sering jadi rujukan penting, dan bukan cuma buat pelaku pasar obligasi. Pelaku pasar saham juga mantau, soalnya yield naik biasanya nekan saham, terutama yang valuasinya tinggi."},

{id:"cta-as-024",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Saham tambang batu bara bergerak naik tajam sementara harga batu bara mendatar. Pembacaan yang paling tepat adalah...",
 options:["Tanda bahwa saham itu sedang dipakai sebagai lindung nilai oleh produsen","Konfirmasi bahwa harga batu bara akan segera menyusul naik mengikuti sahamnya","Hal biasa, karena harga saham tambang bergerak bebas dari komoditasnya","Divergensi yang perlu ditelusuri, mungkin dari ekspektasi laba, utang, atau aksi korporasi"],
 answer:3,
 explain:"Saham tambang biasanya ngikutin harga komoditas dasarnya. Jadi kalau nyimpang, itu INFORMASI, bukan gangguan. Penyebabnya bisa macem-macem: ekspektasi laba berubah, restrukturisasi utang, aksi korporasi, atau efisiensi yang membaik. Dan penelusuran ini yang nentuin divergensinya bakal lanjut atau balik nyatu. Yang salah itu langsung nyimpulin 'sahamnya kemahalan' atau 'pasti ada berita' tanpa dicek. Divergensi itu pertanyaan, bukan jawaban."},

{id:"cta-as-025",module:"cta-aset",level:"CTA",difficulty:"sulit",
 q:"Prinsip yang berlaku saat menerapkan metode teknikal lintas kelas aset adalah...",
 options:["Metodenya berlaku umum, tetapi parameternya wajib dikalibrasi per kelas aset","Metodenya berlaku umum, dan parameternya dapat dipakai sama persis di semua aset","Metodenya hanya berlaku pada saham, sedangkan aset lain butuh pendekatan berbeda","Metodenya berbeda tiap aset, sehingga tidak ada prinsip yang dapat dipindahkan"],
 answer:0,
 explain:"Prinsip tren, support resistance, dan momentum itu berakar di KELAKUAN pelaku pasar, jadi berlaku di semua instrumen yang diperdagangin bebas. Sampai sini metodenya universal. Tapi PARAMETERNYA nggak: periode indikator, jarak stop, dan ukuran posisi wajib disesuaikan sama likuiditas, volatilitas, dan struktur pasar masing-masing. Pakai setelan saham di kripto itu resep kena stop terus. Metodenya pinjem boleh, setelannya harus dikalibrasi ulang."}
]);
