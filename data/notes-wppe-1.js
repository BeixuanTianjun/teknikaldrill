/* Study notes + mind map — WPPE bagian 1.
   sections[].mm = "Label :: keterangan" untuk cabang mind map. */
TD.registerNotes([
{module:"wppe-dasar", tagline:"Siapa punya kewenangan apa di pasar modal, dan kenapa urutannya penting.",
 sections:[
  {h:"Peta kelembagaan", mm:["OJK :: Regulator negara. Kasih izin, bikin aturan, jatuhin sanksi administratif. BUKAN SRO.","BEI :: Penyelenggara perdagangan. Aturannya mengikat anggota bursa, bukan mengikat publik umum.","KPEI :: Kliring dan penjaminan penyelesaian. Masuk ke tengah lewat novasi.","KSEI :: Penyimpanan dan penyelesaian efek. Penitipan kolektif, distribusi dividen dan bunga.","Tiga SRO :: BEI, KPEI, KSEI. Cuma tiga, hafalin persis."], points:[
   "OJK menggantikan Bapepam-LK sejak 2012 dan mengawasi seluruh sektor jasa keuangan, bukan cuma pasar modal.",
   "Aturan SRO derajatnya di bawah peraturan OJK. Kalau bentrok, yang dipakai aturan OJK.",
   "Pertanyaan favorit: 'yang termasuk SRO adalah' — jawabannya tidak pernah OJK."]},
  {h:"Perusahaan efek dan izinnya", mm:["Tiga kegiatan :: Penjamin emisi (PEE), perantara pedagang (PPE), manajer investasi (MI).","WPPE :: Izin ORANG untuk mewakili PPE. Bukan izin perusahaan.","WPEE :: Wakil penjamin emisi. Ranahnya pasar perdana.","WMI :: Wakil manajer investasi. Ranahnya pengelolaan portofolio.","Izin perusahaan vs izin orang :: Perusahaan dapat izin usaha, orangnya dapat izin wakil. Dua-duanya wajib."], points:[
   "Satu perusahaan efek boleh punya lebih dari satu izin kegiatan sekaligus, misalnya PEE dan PPE.",
   "Orang tanpa izin wakil dilarang melakukan kegiatan yang membutuhkan izin itu, walau perusahaannya berizin lengkap.",
   "Izin wakil melekat pada orangnya dan bisa dicabut secara pribadi, terlepas dari nasib perusahaannya."]},
  {h:"Pasar perdana vs sekunder", mm:["Perdana :: Dana masuk ke EMITEN. Ini yang bikin perusahaan dapat modal baru.","Sekunder :: Dana pindah ANTAR INVESTOR. Emiten tidak dapat sepeser pun.","Harga perdana :: Hasil penjatahan dan bookbuilding, bukan lelang terbuka.","Prospektus :: Dokumen keterbukaan pasar perdana. Wajib memuat risiko, bukan cuma janji manis.","Pernyataan efektif :: Izin OJK agar penawaran umum boleh dilakukan, bukan persetujuan atas kualitas efeknya."], points:[
   "Pernyataan efektif TIDAK berarti OJK menjamin atau merekomendasikan efeknya. Ini jebakan klasik.",
   "Harga saham naik sepuluh kali lipat di pasar sekunder tidak menambah modal emiten sama sekali.",
   "Emiten hanya dapat dana tambahan lewat aksi korporasi baru seperti rights issue, bukan dari perdagangan harian."]},
  {h:"Keterbukaan informasi", mm:["Informasi material :: Yang bisa mempengaruhi keputusan investor atau harga efek.","Wajib segera :: Peristiwa material dilaporkan dalam batas waktu singkat, bukan menunggu laporan tahunan.","Laporan berkala :: Tahunan diaudit, tengah tahunan, dan laporan lain sesuai ketentuan.","Orang dalam :: Dilarang bertransaksi atas informasi material yang belum publik.","Tipping :: Membocorkan informasi ke orang lain sama melanggarnya dengan memakainya sendiri."], points:[
   "Prinsip keterbukaan ada supaya semua investor punya pijakan informasi yang setara, bukan supaya emiten terlihat bagus.",
   "Yang dilarang bukan memiliki informasinya, tapi bertransaksi atau membocorkannya sebelum informasi itu jadi milik publik.",
   "Sekali informasi diumumkan secara luas, siapa pun bebas bertransaksi atas dasar itu."]}],
 jebakan:[
  "JEBAKAN: OJK bukan SRO. SRO hanya BEI, KPEI, dan KSEI.",
  "JEBAKAN: pernyataan efektif bukan jaminan kualitas atau rekomendasi membeli.",
  "JEBAKAN: di pasar sekunder emiten tidak menerima dana apa pun dari transaksi.",
  "JEBAKAN: KPEI menjamin penyelesaian, KSEI menyimpan efek — jangan terbalik."]},

{module:"wppe-produk", tagline:"Kenali urutan klaim dan hak yang melekat sebelum bicara soal untung.",
 sections:[
  {h:"Saham dan turunannya", mm:["Saham biasa :: Hak suara, hak dividen, klaim paling belakang saat likuidasi.","Saham preferen :: Dividen didahulukan, tapi hak suaranya biasanya terbatas atau tidak ada.","Waran :: HAK beli saham di harga tertentu sampai tanggal tertentu. Bukan kewajiban.","HMETD :: Hak beli saham baru lebih dulu agar porsi kepemilikan tidak tergerus.","Urutan klaim :: Kreditur dulu, lalu preferen, saham biasa paling buncit."], points:[
   "Pemegang waran belum jadi pemegang saham, jadi tidak dapat dividen dan tidak punya hak suara.",
   "HMETD yang tidak dipakai sebaiknya dijual, bukan dibiarkan hangus, karena haknya punya nilai.",
   "Saham preferen secara ekonomi berada di antara utang dan ekuitas, makanya sering disebut instrumen hibrida."]},
  {h:"Obligasi dan sukuk", mm:["Obligasi :: Surat utang. Pemegangnya kreditur, bukan pemilik.","Kupon :: Bunga berkala. Tetap, mengambang, atau nol kupon.","Harga vs imbal hasil :: Bergerak berlawanan. Bunga pasar naik, harga obligasi turun.","Sukuk :: Berbasis akad syariah, imbalannya dari aset atau kegiatan yang mendasarinya, bukan bunga.","Peringkat :: Pendapat lembaga pemeringkat soal kemampuan bayar, bukan jaminan."], points:[
   "Obligasi pemerintah dianggap bebas risiko gagal bayar dalam mata uang sendiri, tetapi tetap punya risiko harga saat bunga naik.",
   "Peringkat AAA bukan berarti harganya tidak bisa turun — risiko bunga tetap ada berapa pun peringkatnya.",
   "Obligasi tanpa kupon dijual di bawah nilai nominal dan untungnya datang dari selisih harga saat jatuh tempo."]},
  {h:"Reksa dana dan produk kolektif", mm:["Reksa dana :: Wadah kumpul dana, dikelola MI, disimpan bank kustodian.","Jenis :: Pasar uang, pendapatan tetap, saham, campuran, terproteksi, indeks.","NAB :: Nilai aktiva bersih. Dihitung kustodian tiap hari bursa, bukan oleh MI.","ETF :: Reksa dana yang unitnya diperdagangkan di bursa sepanjang jam bursa.","KIK :: Bentuk hukum reksa dana. Kontrak antara MI dan bank kustodian."], points:[
   "Reksa dana bukan produk bank dan tidak dijamin lembaga penjamin simpanan, walau dijual lewat bank.",
   "Reksa dana terproteksi memproteksi pokok hanya jika dipegang sampai jatuh tempo, bukan kapan saja.",
   "Beda utama ETF dan reksa dana biasa ada di cara membelinya: ETF di harga pasar saat itu, reksa dana di NAB akhir hari."]},
  {h:"Derivatif dan produk lain", mm:["Kontrak berjangka :: Kewajiban beli atau jual di harga dan tanggal tertentu.","Opsi :: Hak, bukan kewajiban. Pembelinya bayar premi.","Daya ungkit :: Modal kecil menguasai nilai besar. Untung dan rugi sama-sama membesar.","EBA :: Efek beragun aset, arus kasnya berasal dari kumpulan piutang.","DIRE :: Dana investasi real estat, pendapatannya dari properti dan sewanya."], points:[
   "Derivatif bisa dipakai untuk lindung nilai maupun spekulasi — alatnya netral, niatnya yang membedakan.",
   "Kerugian pada posisi berjangka bisa melampaui setoran awal, beda dengan membeli saham tunai.",
   "Pembeli opsi kerugiannya terbatas pada premi, sedangkan penjual opsi kerugiannya bisa jauh lebih besar."]}],
 jebakan:[
  "JEBAKAN: pemegang waran belum punya hak suara dan hak dividen.",
  "JEBAKAN: harga obligasi dan imbal hasil bergerak berlawanan arah.",
  "JEBAKAN: reksa dana dijual lewat bank tetapi bukan simpanan dan tidak dijamin LPS.",
  "JEBAKAN: peringkat kredit itu pendapat, bukan jaminan pembayaran."]},

{module:"wppe-transaksi", tagline:"Dari order masuk sampai efek berpindah tangan — hafalkan urutannya, bukan cuma istilahnya.",
 sections:[
  {h:"Jenis pasar di bursa", mm:["Reguler :: Lelang berkelanjutan, penyelesaian T+2, harga terbentuk otomatis.","Tunai :: Penyelesaian T+0, dipakai antara lain saat penjual harus menyerahkan segera.","Negosiasi :: Harga hasil tawar-menawar langsung, penyelesaian sesuai kesepakatan.","Lot :: 1 lot = 100 lembar sejak 2014. Angka 500 itu aturan lama.","Fraksi harga :: Bertingkat sesuai rentang harga sahamnya."], points:[
   "Harga di Pasar Negosiasi bisa jauh dari harga wajar dan tidak layak dipakai sebagai acuan valuasi.",
   "Pasar Tunai sering dipakai untuk menyelesaikan kewajiban serah yang gagal di Pasar Reguler.",
   "Penyelesaian T+2 berarti efek dan dana berpindah dua hari bursa setelah transaksi terjadi."]},
  {h:"Prioritas dan pelaksanaan order", mm:["Price priority :: Harga beli tertinggi dan harga jual terendah dilayani lebih dulu.","Time priority :: Kalau harganya sama, yang lebih dulu masuk menang.","Ukuran order :: TIDAK menentukan prioritas. Ini pengecoh favorit.","Auto rejection :: Batas gerak harga harian. Rem, bukan asuransi.","Pre-opening :: Pembentukan harga pembukaan sebelum sesi reguler dimulai."], points:[
   "Order besar tidak mendapat keistimewaan apa pun dalam antrean — hanya harga lalu waktu yang berlaku.",
   "Auto rejection membatasi gerak per hari, tetapi harga tetap bisa turun berhari-hari menempel batas bawah.",
   "Suspensi berbeda dari auto rejection: suspensi menghentikan perdagangan, auto rejection cuma membatasi rentang harganya."]},
  {h:"Kliring, penjaminan, penyelesaian", mm:["Kliring :: Menentukan hak dan kewajiban tiap anggota setelah transaksi.","Novasi :: KPEI jadi lawan transaksi kedua belah pihak.","Netting :: Kewajiban disaling-hapuskan sehingga yang berpindah tinggal selisihnya.","Penyelesaian :: Serah efek dan bayar dana, dilakukan lewat KSEI.","Gagal serah :: Ditangani lewat mekanisme yang sudah diatur, bukan dibatalkan begitu saja."], points:[
   "Berkat novasi, anggota bursa tidak perlu mengenal atau mempercayai lawan transaksinya.",
   "Netting menekan jumlah dana dan efek yang benar-benar harus berpindah secara signifikan.",
   "Kegagalan penyelesaian punya konsekuensi biaya dan sanksi bagi anggota bursa yang bersangkutan."]},
  {h:"Aksi korporasi dan tanggal penting", mm:["Cum date :: Hari terakhir membeli agar masih berhak atas aksi korporasi.","Ex date :: Mulai hari ini pembeli TIDAK lagi berhak.","Recording date :: Tanggal pencatatan pemegang yang berhak.","Payment date :: Tanggal hak benar-benar dibayarkan atau didistribusikan.","Stock split :: Jumlah lembar bertambah, harga menyesuaikan, nilai kepemilikan tidak berubah."], points:[
   "Beli pada tanggal ex date sudah terlambat untuk mendapat dividen — ini soal yang hampir selalu keluar.",
   "Harga saham biasanya turun sekitar besar dividen pada tanggal ex, jadi bukan keuntungan gratis.",
   "Stock split tidak menambah kekayaan pemegang saham, hanya memecah kepemilikan jadi lebih banyak lembar."]}],
 jebakan:[
  "JEBAKAN: prioritas order adalah harga lalu waktu, ukuran order tidak berpengaruh.",
  "JEBAKAN: 1 lot = 100 lembar, bukan 500.",
  "JEBAKAN: membeli pada ex date tidak lagi berhak atas dividen.",
  "JEBAKAN: auto rejection bukan jaminan investor tidak merugi."]},

{module:"wppe-nasabah", tagline:"Kenali nasabahmu bukan formalitas — itu pertahanan pertama melawan uang kotor.",
 sections:[
  {h:"Pembukaan rekening", mm:["Dua rekening :: Rekening efek dan rekening dana nasabah (RDN) atas nama nasabah.","RDN :: Dana nasabah dipisah dari kas perusahaan efek. Ini inti perlindungannya.","SID :: Nomor identitas tunggal investor yang diterbitkan KSEI.","Profil risiko :: Wajib digali sebelum merekomendasikan produk.","Dokumen :: Identitas, data penghasilan, sumber dana, dan tujuan investasi."], points:[
   "Pemisahan dana nasabah memastikan uang nasabah tidak ikut tersangkut bila perusahaan efek bermasalah.",
   "Rekening tidak boleh dibuka atas nama orang lain atau tanpa kehadiran data pemilik sebenarnya.",
   "Profil risiko yang diisi asal-asalan membuat seluruh rekomendasi setelahnya jadi rapuh."]},
  {h:"Prinsip mengenal nasabah", mm:["Identifikasi :: Siapa nasabahnya dan siapa pemilik manfaat sebenarnya.","Verifikasi :: Cocokkan dengan dokumen yang sah, jangan percaya pernyataan saja.","Pemantauan :: Terus-menerus, bukan sekali saat pembukaan rekening.","Pemilik manfaat :: Orang yang sesungguhnya menikmati atau mengendalikan dana.","Uji tuntas lanjutan :: Untuk nasabah berisiko tinggi, termasuk PEP."], points:[
   "Uji tuntas bukan kegiatan sekali jalan — profil nasabah bisa berubah dan wajib dipantau terus.",
   "Nasabah yang menolak mengungkap pemilik manfaat sebenarnya adalah tanda bahaya yang jelas.",
   "PEP atau orang yang punya posisi publik penting masuk kategori berisiko tinggi dan butuh pemeriksaan lebih dalam."]},
  {h:"APU-PPT dan transaksi mencurigakan", mm:["Tiga tahap :: Penempatan, pelapisan, penggabungan.","LTKM :: Laporan transaksi keuangan mencurigakan, dikirim lewat jalur resmi.","Tipping off :: Memberi tahu nasabah bahwa ia dilaporkan — DILARANG.","Pemicu :: Transaksi tidak sesuai profil, sumber dana tidak jelas, pola memecah nilai.","Nilai bukan patokan tunggal :: Transaksi kecil pun bisa mencurigakan kalau polanya janggal."], points:[
   "Kecurigaan didasarkan pada kejanggalan pola dan ketidaksesuaian dengan profil, bukan semata besarnya nilai.",
   "Memberi tahu nasabah bahwa ia dilaporkan adalah pelanggaran tersendiri yang berdiri sendiri.",
   "Kewajiban melapor tetap berlaku walau transaksinya akhirnya dibatalkan atau tidak jadi dilakukan."]},
  {h:"Kesesuaian dan rekomendasi", mm:["Suitability :: Produk harus cocok dengan tujuan, jangka waktu, dan toleransi risiko nasabah.","Jangka waktu :: Dana yang dipakai dua tahun lagi tidak cocok ditaruh di saham.","Pengungkapan risiko :: Wajib, bukan opsional, dan harus dipahami nasabah.","Larangan janji :: Tidak boleh menjanjikan imbal hasil tertentu.","Dokumentasi :: Rekomendasi dan dasarnya sebaiknya tercatat."], points:[
   "Produk berkinerja terbaik belum tentu produk yang paling sesuai untuk nasabah tertentu.",
   "Menuruti permintaan nasabah yang jelas tidak sesuai profilnya tetap salah tanpa penjelasan risiko lebih dulu.",
   "Menjanjikan imbal hasil adalah pelanggaran, sekalipun nasabah yang meminta jaminan itu."]}],
 jebakan:[
  "JEBAKAN: dana nasabah wajib di RDN atas nama nasabah, bukan rekening perusahaan efek.",
  "JEBAKAN: memberi tahu nasabah bahwa ia dilaporkan (tipping off) dilarang.",
  "JEBAKAN: transaksi mencurigakan tidak ditentukan oleh besar nilainya saja.",
  "JEBAKAN: uji tuntas nasabah berlangsung terus-menerus, bukan hanya saat pembukaan rekening."]}
]);
