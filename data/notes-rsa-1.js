/* Study notes + mind map — RSA bagian 1.
   sections[].mm = "Label :: keterangan" untuk cabang mind map. */
TD.registerNotes([
{module:"rsa-pasar", tagline:"Siapa mengatur apa, dan bagaimana satu order berubah jadi kepemilikan.",
 sections:[
  {h:"Pemain dan perannya", mm:["OJK :: Regulator negara. Bikin aturan, kasih izin, jatuhin sanksi. Berdiri di atas semua SRO.","BEI :: Penyelenggara perdagangan. Bikin aturan buat anggota bursanya sendiri, bukan buat negara.","KPEI :: Kliring dan penjaminan. Masuk ke tengah transaksi lewat novasi, jadi lo nggak perlu kenal lawan transaksi.","KSEI :: Lemari besi elektronik. Nyimpen efek lewat penitipan kolektif, plus distribusi dividen dan bunga."], points:[
   "Tiga SRO cuma BEI, KPEI, KSEI. OJK BUKAN SRO — dia regulator negara, gantiin Bapepam-LK sejak 2012.",
   "Cara nginget bedanya: KPEI ngurusin JANJI (penyelesaian dijamin), KSEI ngurusin BARANG (efeknya disimpan). Dua ini paling sering ketuker di soal.",
   "Novasi artinya KPEI jadi lawan transaksi buat kedua pihak. Efek praktisnya: lo nggak pernah gagal terima saham cuma gara-gara lawan transaksi lo bangkrut."]},
  {h:"Mekanisme perdagangan", mm:["1 lot = 100 lembar :: Turun dari 500 sejak 2014 supaya saham mahal tetap kejangkau ritel.","T+2 :: Pasar Reguler beres dua hari bursa. Ini yang nentuin lo dapet dividen atau nggak.","Price then time :: Harga terbaik dilayani duluan; kalau harga sama, yang antre duluan menang. Ukuran order nggak ngaruh.","Auto rejection :: Rem harga harian, BUKAN asuransi. Harga tetap bisa turun berhari-hari nempel batas bawah.","Fraksi bertingkat :: Saham murah gerak per Rp1, saham mahal per puluhan rupiah. Biar arti persentase satu tick mirip."], points:[
   "Tiga pasar: Reguler (lelang, T+2), Tunai (T+0), Negosiasi (harga hasil tawar-menawar langsung).",
   "Harga di Pasar Negosiasi bisa jauh melenceng dari harga wajar — jangan dipakai jadi acuan valuasi.",
   "Buat dapet dividen, lo harus beli PALING LAMBAT satu hari bursa sebelum ex-date. Beli PAS ex-date udah telat."]},
  {h:"Produk dan papan", mm:["Saham :: Bukti kepemilikan. Antreannya paling belakang kalau perusahaan bubar.","Waran :: HAK beli saham di harga tertentu. Belum bikin lo pemegang saham, jadi nggak ada dividen dan hak suara.","HMETD :: Hak beli saham baru duluan supaya porsi lo nggak tergerus. Boleh ditolak, tapi jangan dibiarin hangus.","Reksa dana vs ETF :: Sama-sama dikelola MI. ETF bisa dibeli kapan aja selama jam bursa, reksa dana di NAB akhir hari.","Papan pencatatan :: Utama, Pengembangan, dan lainnya dibedain dari ukuran serta rekam jejak, bukan sektor."], points:[
   "Papan Pemantauan Khusus itu lampu kuning: ada kondisi tertentu pada emiten. Artinya risiko naik DAN barangnya makin susah dijual.",
   "Delisting nggak ngehapus kepemilikan lo — cuma ngehapus pasarnya. Praktis nilainya mandek di tangan.",
   "Status syariah ditetapkan OJK lewat Daftar Efek Syariah, bukan klaim sepihak emiten dan bukan keputusan bursa."]},
  {h:"Indeks dan free float", mm:["IHSG :: Ditimbang kapitalisasi FREE FLOAT sejak 2021. Saham yang dikunci pengendali nggak ikut nyetir bobot.","LQ45 :: 45 saham paling likuid, dievaluasi tiap 6 bulan. Kriterianya LIKUIDITAS, bukan laba.","Free float tipis :: Barang beredar sedikit, order gede aja bisa nggerakin harga jauh. Volatil dan bobot indeksnya kecil.","Breadth :: IHSG naik 2% belum tentu mayoritas saham naik — segelintir raksasa bisa ngangkat sendirian."], points:[
   "Perusahaan rugi bisa masuk LQ45 asal ramai diperdagangkan. Ini jebakan klasik.",
   "Kalau mau tau pasar beneran naik atau cuma indeksnya, cek berapa saham naik versus turun, bukan angka indeksnya."]}],
 jebakan:[
  "JEBAKAN: 1 lot = 100 lembar. Angka 500 itu aturan lama dan sering dipakai jadi pengecoh.",
  "JEBAKAN: KPEI menjamin penyelesaian, KSEI menyimpan efek. Jangan kebalik.",
  "JEBAKAN: auto rejection meredam pergerakan harian, bukan menjamin investor tidak rugi.",
  "JEBAKAN: di pasar perdana dana masuk ke EMITEN; di pasar sekunder dana cuma pindah antar investor."]},

{module:"rsa-makro", tagline:"Baca arah ekonomi dulu, baru pilih industrinya, baru pilih emitennya.",
 sections:[
  {h:"Kerangka top-down", mm:["Urutannya :: Makro dulu, lalu industri, baru emiten. Biar lo nggak nyangkut di perusahaan bagus yang industrinya tenggelam.","Bottom-up :: Mulai dari emitennya. Jago nemuin perusahaan bagus, tapi buta sama siklus dan risiko sektor.","Leading vs lagging :: Keyakinan konsumen dan izin bangun gerak duluan; pengangguran dan PDB nyeritain masa lalu.","PDB :: Barang dan jasa AKHIR di suatu WILAYAH. Kalau yang dihitung warga negaranya, itu PNB."], points:[
   "Pertumbuhan riil = pertumbuhan nominal dikurangi inflasi. Jangan dijumlahin.",
   "PDB tumbuh 5% nggak berarti laba tiap emiten tumbuh 5% — struktur biaya dan pengungkit tiap perusahaan beda-beda."]},
  {h:"Suku bunga, inflasi, kurs", mm:["Bunga naik :: Tingkat diskonto naik, nilai kini arus kas masa depan mengecil. Saham bertumbuh paling kena.","Inflasi inti :: Buang harga bergejolak dan yang diatur pemerintah. Ini yang diliatin bank sentral.","Rupiah melemah :: Untung buat yang pendapatannya dolar tapi ongkosnya rupiah. Rugi buat yang berutang dolar.","Imbal hasil riil :: Bunga nominal dikurangi inflasi. Bunga deposito 8% pas inflasi 6% cuma nambah daya beli 2%.","Kurva terbalik :: Imbal hasil pendek di atas panjang — sering mendahului perlambatan, tapi jedanya panjang."], points:[
   "Kebijakan FISKAL itu APBN (belanja dan pajak). Kebijakan MONETER itu bank sentral (bunga dan likuiditas). Sering ketuker.",
   "Defisit transaksi berjalan = duit ke luar negeri lebih deres dari yang masuk, harus ditambal aliran modal asing. Beda dari defisit anggaran."]},
  {h:"Analisis industri", mm:["Siklikal vs defensif :: Pas dompet seret orang nunda beli mobil, tapi tetap beli beras dan tetap ke dokter.","Lima kekuatan Porter :: Pemasok kuat kalau sedikit dan mahal pindah. Di situ margin lo kepotong.","Tahap siklus :: Dewasa artinya pertumbuhan melambat, perang harga, tapi arus kas stabil dan dividen rajin.","Hambatan masuk :: Pagar yang jaga margin dari serbuan pemain baru. Tapi pagar nggak menjamin pertumbuhan.","Konsentrasi :: Pasar yang dikuasai dua tiga nama biasanya marginnya lebih awet."], points:[
   "Emiten tumbuh 25% di industri yang tumbuh 5% artinya dia ngambil pangsa orang lain — cek apakah itu awet atau hasil bakar duit promo.",
   "Kebijakan pemerintah bikin pemenang dan pecundang di industri yang sama. Larangan ekspor bahan mentah nekan yang tanpa smelter, nguntungin yang punya."]}],
 jebakan:[
  "JEBAKAN: pertumbuhan riil = nominal DIKURANGI inflasi, bukan ditambah.",
  "JEBAKAN: neraca perdagangan cuma barang; transaksi berjalan lebih luas (termasuk jasa dan pendapatan).",
  "JEBAKAN: kenaikan harga komoditas ekspor punya dua sisi — penerimaan naik, tapi biaya energi domestik bisa ikut naik."]},

{module:"rsa-laporan", tagline:"Angka di muka laporan itu ringkasan; ceritanya ada di catatan.",
 sections:[
  {h:"Lima laporan dan dasar akrual", mm:["Persamaan dasar :: Aset = liabilitas + ekuitas. Semua yang dimiliki dibiayai duit orang lain atau duit pemilik.","Akrual :: Pendapatan diakui saat barang atau jasa diserahkan, BUKAN saat kas masuk.","Tiga arus kas :: Operasi (bisnis inti), investasi (aset jangka panjang), pendanaan (utang dan modal).","Catatan atas laporan :: Kebijakan akuntansi, rincian utang, pihak berelasi, perkara hukum. Wajib dibaca."], points:[
   "Akrual itu alasan kenapa laba bisa gede sementara kas seret. Laba dan arus kas HARUS dibaca berdampingan.",
   "Dividen yang DIBAYAR masuk pendanaan. Dividen yang DITERIMA lazimnya operasi atau investasi.",
   "Penyusutan itu beban NON-KAS: duitnya udah keluar pas beli asetnya. Makanya ditambahin balik di arus kas metode tidak langsung."]},
  {h:"Pos yang gampang dimainkan", mm:["Masa manfaat :: Diperpanjang, beban turun, laba naik. Mesinnya sama, kasnya sama.","Kapitalisasi biaya :: Biaya pindah dari laba rugi ke neraca. Laba naik, aset naik, kas nggak berubah.","CKPN :: Cadangan piutang macet itu ESTIMASI. Dikecilin sedikit, laba langsung kelihatan cantik.","Persentase penyelesaian :: Kemajuan proyek ditaksir manajemen sendiri. Naikin taksirannya, pendapatan ikut naik.","Untung jual aset :: Sekali terjadi. Jangan dipakai buat ngitung PER atau proyeksi tahun depan."], points:[
   "Perubahan ESTIMASI berlaku ke depan; laporan lama nggak disajikan ulang. Penyajian kembali justru nandain ada kesalahan material.",
   "Cara cepat ngetes kualitas laba: bandingin arus kas operasi sama laba bersih beberapa tahun. Kalau konsisten jauh di bawah, laba banyak yang masih berupa janji."]},
  {h:"Konsolidasi dan opini auditor", mm:["Kepentingan non-pengendali :: Bagian anak usaha yang bukan milik induk. Harus dipotong sebelum ngitung EPS.","Goodwill :: Premi di atas nilai wajar aset bersih. Nggak disusutkan, tapi diuji penurunan nilai.","Opini wajar :: Penyajian sesuai standar. BUKAN jaminan perusahaan sehat dan BUKAN jaminan bebas fraud.","Going concern :: Peringatan terkeras tanpa ngubah opini. Cek jatuh tempo utang, kas, dan rencana manajemen."], points:[
   "Metode persediaan yang DILARANG di Indonesia: LIFO. Yang boleh FIFO, rata-rata tertimbang, identifikasi khusus.",
   "Sewa jangka panjang kini masuk neraca penyewa, jadi rasio utang kelihatan lebih tinggi. Perbandingan dengan data lama nggak apple to apple."]}],
 jebakan:[
  "JEBAKAN: aset lancar NAIK mengurangi kas; kewajiban lancar NAIK menambah kas. Arah tandanya sering kebalik.",
  "JEBAKAN: opini wajar tanpa modifikasi bukan berarti bebas kecurangan — auditnya berbasis sampel.",
  "JEBAKAN: EPS memakai laba bagian INDUK, bukan laba konsolidasian total."]},

{module:"rsa-rasio", tagline:"Rasio itu pertanyaan, bukan jawaban. Selalu tanya kenapa angkanya begitu.",
 sections:[
  {h:"Likuiditas dan solvabilitas", mm:["Rasio lancar :: Aset lancar dibagi kewajiban jangka pendek. Tapi persediaan macet juga ikut kehitung.","Rasio cepat :: Buang persediaan dulu. Di ritel bedanya bisa jauh banget.","DER :: Siapa yang lebih banyak nalangin, kreditur atau pemilik. Batas wajarnya beda tiap industri.","Interest coverage :: Laba usaha dibagi beban bunga. Mepet ke 1 artinya satu kuartal buruk bisa bikin gagal bayar.","Utang/EBITDA :: Kira-kira berapa tahun buat lunas. Banyak kreditur naruh batas di 3 sampai 4 kali."], points:[
   "Rasio lancar 0,8 bisa SEHAT di bisnis yang dibayar tunai tiap hari. Yang bahaya itu rasio lancar rendah plus arus kas operasi negatif.",
   "Rasio lancar naik tajam sementara perputaran persediaan anjlok = kenaikannya dari barang numpuk, bukan dari likuiditas beneran."]},
  {h:"Profitabilitas dan DuPont", mm:["DuPont :: ROE = marjin x perputaran aset x pengganda ekuitas. Tiga mesin yang bikin ROE.","ROE tinggi + ROA rendah :: Bedanya diisi utang. Cantik pas ekonomi bagus, rapuh pas bunga naik.","ROIC :: Imbal hasil seluruh modal operasi, nggak terdistorsi utang. Lebih jujur dari ROE.","Marjin kotor turun :: Harga jual tertekan atau bahan baku naik. Bunga dan pajak belum nyentuh lapisan ini."], points:[
   "Marjin bersih naik tapi marjin usaha stagnan = tambahannya dari luar usaha (selisih kurs, jual aset, berkah pajak). Jangan diproyeksikan.",
   "Pertumbuhan berkelanjutan = ROE x rasio laba ditahan. Ini laju tumbuh maksimal tanpa nambah utang atau nerbitin saham."]},
  {h:"Aktivitas dan modal kerja", mm:["Siklus konversi kas :: Umur persediaan + umur piutang - umur utang usaha. Makin pendek makin enak.","Perputaran persediaan melambat :: Barang lebih lama di gudang. Kas nyangkut, risiko usang naik.","Umur piutang melar :: Duit makin lama nyampe. Bandingin sama syarat kredit resminya.","Perputaran aset tinggi :: Aset rajin dipakai bikin omzet. Tapi belum tentu untung — baca bareng marginnya."], points:[
   "Nahan bayar pemasok mendekin siklus kas, tapi hubungan dan syarat harga bisa memburuk, dan rasio lancar malah bisa turun.",
   "Jual piutang menjelang tutup buku bikin umur piutang cakep dan kas mendadak tebal. Kalau polanya berulang tiap akhir tahun, itu kosmetik."]}],
 jebakan:[
  "JEBAKAN: rasio cepat MENGELUARKAN persediaan. Lupa buang persediaan itu kesalahan paling sering.",
  "JEBAKAN: rasio antar industri nggak bisa diadu langsung. DER 2 kali di bank normal, di teknologi lampu merah.",
  "JEBAKAN: EBITDA bukan kas — dia belum motong belanja modal dan perubahan modal kerja."]}
]);
