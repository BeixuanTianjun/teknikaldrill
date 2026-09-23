/* Study notes + mind map — WMI bagian 1.
   sections[].mm = "Label :: keterangan" untuk cabang mind map. */
TD.registerNotes([
{module:"wmi-lembaga", tagline:"Mengelola uang orang lain itu hak istimewa yang dijaga aturan berlapis.",
 sections:[
  {h:"Pihak dan perannya", mm:["Manajer investasi :: Memutuskan isi portofolio. Tidak pernah memegang asetnya.","Bank kustodian :: Menyimpan aset dan menghitung NAB. Pengawas kedua.","OJK :: Memberi izin, mengawasi, dan menjatuhkan sanksi.","Agen penjual :: Memasarkan reksa dana, wajib berizin dan bersertifikat.","Akuntan publik :: Memeriksa laporan keuangan tahunan produk."], points:[
   "Pemisahan pengelola dan penyimpan aset adalah pengaman utama industri ini — jangan sampai tertukar perannya.",
   "NAB dihitung bank kustodian, bukan manajer investasi, supaya angkanya tidak bisa dipoles pengelolanya.",
   "Manajer investasi yang mendelegasikan pekerjaan tetap bertanggung jawab atas hasil dan kepatuhan penerima delegasi."]},
  {h:"Izin dan persyaratan", mm:["Izin usaha MI :: Untuk perusahaannya.","Izin WMI :: Untuk orangnya, melekat pribadi dan bisa dicabut sendiri.","MKBD :: Persyaratan permodalan yang wajib dipenuhi terus-menerus.","Kepatuhan :: Fungsi wajib dengan jalur pelaporan independen.","Laporan berkala :: Ke OJK, rutin, bukan hanya saat diminta."], points:[
   "Izin perusahaan dan izin orang itu dua hal berbeda, dan keduanya wajib ada.",
   "Persyaratan permodalan menjaga perusahaan tetap sehat sehingga tidak tergoda mengambil jalan pintas.",
   "Pengawasan berkala membuat masalah ketahuan lebih awal, sebelum membesar jadi kerugian nasabah."]},
  {h:"Bentuk pengelolaan", mm:["Reksa dana :: Kumpulan dana banyak pihak dalam satu portofolio bersama.","KIK :: Kontrak antara MI dan bank kustodian, mengikat pemegang unit.","Pengelolaan individual :: Portofolio khusus satu nasabah dengan mandat sendiri.","RDPT :: Penyertaan terbatas, khusus pemodal profesional.","DIRE dan EBA :: Produk kolektif dengan aset dasar khusus."], points:[
   "Pemegang unit terikat kontrak investasi kolektif sejak ia membeli unit, tanpa menandatangani sendiri.",
   "Pengelolaan individual memberi mandat yang disesuaikan, tetapi biayanya dan minimum dananya lebih besar.",
   "Reksa dana penyertaan terbatas aturan penawarannya lebih longgar, tetapi penyimpanan asetnya tetap lewat kustodian."]},
  {h:"Perlindungan pemegang unit", mm:["Pemisahan aset :: Atas nama reksa dana, bukan atas nama MI.","Batasan investasi :: Membatasi pemusatan pada satu penerbit atau pihak.","Keterbukaan :: Prospektus, laporan bulanan, laporan tahunan diaudit.","Pengumuman NAB :: Setiap hari bursa.","Pembubaran :: Antara lain bila dana kelolaan di bawah batas minimum."], points:[
   "Kalau manajer investasi bermasalah, aset reksa dana tidak ikut tersangkut karena namanya bukan nama MI.",
   "Batasan investasi memaksa penyebaran walau pengelola sangat yakin pada satu nama.",
   "Kinerja yang tertinggal bukan alasan pembubaran, walau biasanya jadi penyebab dananya menyusut."]}],
 jebakan:[
  "JEBAKAN: NAB dihitung bank kustodian, bukan manajer investasi.",
  "JEBAKAN: rekening efek reksa dana atas nama reksa dana, bukan atas nama MI.",
  "JEBAKAN: pendelegasian pengelolaan tidak memindahkan tanggung jawab MI.",
  "JEBAKAN: izin perusahaan dan izin wakil adalah dua hal terpisah yang sama-sama wajib."]},

{module:"wmi-produk", tagline:"Pilih wadahnya dulu sesuai kebutuhan, baru bicara isi portofolionya.",
 sections:[
  {h:"Jenis reksa dana", mm:["Pasar uang :: Efek utang jatuh tempo di bawah setahun. Paling stabil, hasil paling kecil.","Pendapatan tetap :: Mayoritas obligasi. Peka terhadap gerakan bunga.","Saham :: Mayoritas ekuitas. Gejolak besar, untuk jangka panjang.","Campuran :: Kombinasi, bobotnya lebih lentur.","Terproteksi :: Pokok terlindungi bila dipegang sampai jatuh tempo."], points:[
   "Reksa dana pasar uang bukan berarti bebas risiko — risiko kredit penerbitnya tetap ada.",
   "Reksa dana terproteksi melindungi pokok hanya sampai jatuh tempo, bukan kapan pun ditebus.",
   "Menyamakan reksa dana pasar uang dengan deposito itu keliru: yang satu produk investasi, yang satu simpanan berjamin."]},
  {h:"Produk berbasis bursa", mm:["ETF :: Unitnya diperdagangkan di bursa sepanjang jam bursa.","Creation-redemption :: Mekanisme yang menjaga harga ETF dekat dengan NAB-nya.","Dealer partisipan :: Pihak yang menjaga likuiditas ETF di pasar.","Reksa dana indeks :: Mengikuti indeks, galat penjejakannya ditekan sekecil mungkin.","Biaya :: Produk indeks dan ETF umumnya jauh lebih murah dari produk aktif."], points:[
   "ETF dibeli di harga pasar saat itu, reksa dana biasa di NAB akhir hari — ini beda paling praktis.",
   "Harga ETF bisa menyimpang tipis dari NAB, dan mekanisme creation-redemption yang menariknya kembali.",
   "Produk indeks yang membebankan tarif aktif adalah tanda bahaya bagi investor."]},
  {h:"Produk kolektif lain", mm:["RDPT :: Pemodal profesional, tidak lewat penawaran umum.","DIRE :: Aset dasarnya properti dan pendapatan sewanya.","EBA :: Arus kasnya dari kumpulan piutang yang disekuritisasi.","Reksa dana syariah :: Isi portofolionya mengikuti Daftar Efek Syariah.","Dewan pengawas syariah :: Mengawasi kesesuaian produk syariah."], points:[
   "Status syariah ditetapkan lewat Daftar Efek Syariah yang diterbitkan OJK, bukan klaim sepihak pengelola.",
   "Produk dengan aset dasar kurang likuid biasanya punya batasan penebusan yang lebih ketat.",
   "Longgarnya aturan penawaran RDPT bukan berarti longgar dalam penyimpanan aset dan pelaporan."]},
  {h:"Biaya dan mekanisme transaksi", mm:["Biaya pembelian :: Memotong dana di depan sebelum unit dihitung.","Biaya penjualan kembali :: Dihitung dari nilai saat ditebus.","Biaya pengelolaan :: Dipotong harian lewat NAB, terasa tidak terasa.","Cut-off :: Batas waktu order agar dapat NAB hari itu.","Pembayaran penebusan :: Paling lambat tujuh hari bursa."], points:[
   "Biaya pengelolaan dua persen memangkas hampir seperlima hasil kotor sebesar sebelas persen.",
   "Order yang masuk setelah batas waktu akan mendapat NAB hari bursa berikutnya.",
   "NAB yang diumumkan hari ini adalah hasil perhitungan penutupan hari itu, bukan harga yang bisa diketahui di muka."]}],
 jebakan:[
  "JEBAKAN: reksa dana pasar uang bukan deposito dan tidak dijamin LPS.",
  "JEBAKAN: proteksi pokok hanya berlaku bila dipegang sampai jatuh tempo.",
  "JEBAKAN: pembelian mendapat NAB akhir hari yang sama, bukan NAB kemarin.",
  "JEBAKAN: status syariah ditetapkan OJK lewat DES, bukan klaim pengelola."]},

{module:"wmi-ekonomi", tagline:"Arah bunga dan pertumbuhan menentukan kelas aset mana yang dapat giliran.",
 sections:[
  {h:"Indikator makro", mm:["PDB :: Barang dan jasa akhir di suatu wilayah. Kalau warga negara, itu PNB.","Inflasi inti :: Buang harga bergejolak dan yang diatur pemerintah.","Leading vs lagging :: Keyakinan konsumen duluan; pengangguran belakangan.","Imbal hasil riil :: Bunga nominal dikurangi inflasi.","Transaksi berjalan :: Lebih luas dari neraca perdagangan."], points:[
   "Pertumbuhan riil adalah nominal dikurangi inflasi, bukan ditambah.",
   "Bank sentral memperhatikan inflasi inti karena harga pangan dan energi terlalu berisik untuk jadi dasar kebijakan.",
   "Bunga deposito delapan persen saat inflasi enam persen hanya menambah daya beli dua persen."]},
  {h:"Kebijakan dan dampaknya", mm:["Fiskal :: APBN, belanja dan pajak. Milik pemerintah.","Moneter :: Bunga dan likuiditas. Milik bank sentral.","Bunga naik :: Harga obligasi turun, saham bertumbuh paling terpukul.","Pelonggaran :: Likuiditas melimpah, aset berisiko biasanya terangkat.","Kurs :: Rupiah melemah menguntungkan eksportir, memberatkan yang berutang dolar."], points:[
   "Fiskal dan moneter sering tertukar di soal — ingat pemiliknya siapa.",
   "Kenaikan bunga menaikkan tingkat diskonto, sehingga nilai kini arus kas jauh di masa depan menyusut lebih dalam.",
   "Defisit transaksi berjalan berbeda dari defisit anggaran, dan keduanya punya implikasi yang berbeda pula."]},
  {h:"Siklus dan alokasi aset", mm:["Pemulihan :: Saham siklikal dan sektor yang peka bunga biasanya duluan bergerak.","Puncak :: Inflasi naik, bank sentral mengetat, obligasi panjang tertekan.","Perlambatan :: Sektor defensif dan obligasi pemerintah jadi tempat berteduh.","Kurva terbalik :: Sering mendahului perlambatan, tapi jedanya panjang.","Rotasi sektor :: Berpindah mengikuti tahap siklus, bukan mengikuti berita harian."], points:[
   "Menebak titik balik siklus itu sulit, jadi alokasi taktis sebaiknya dibatasi di sekitar alokasi strategis.",
   "Kurva imbal hasil terbalik sinyal yang sering benar arah tapi jauh meleset waktunya.",
   "Sektor defensif tetap bisa turun saat pasar jatuh — sifatnya turun lebih sedikit, bukan tidak turun."]},
  {h:"Pasar keuangan global", mm:["Bunga global :: Arah kebijakan bank sentral besar ikut menyetir aliran modal.","Aliran modal asing :: Masuk keluar cepat, bikin pasar berkembang bergejolak.","Harga komoditas :: Penting bagi ekonomi berbasis sumber daya alam.","Risiko negara :: Politik, pembatasan modal, dan ketidakpastian hukum.","Korelasi :: Naik mendekati satu justru saat krisis."], points:[
   "Manfaat penyebaran menyusut persis saat paling dibutuhkan, karena semua aset jatuh bersamaan saat panik.",
   "Aset di luar negeri bisa untung tapi uangnya tertahan kalau ada pembatasan aliran modal.",
   "Penyangga likuiditas lebih menolong saat krisis daripada asumsi korelasi di atas kertas."]}],
 jebakan:[
  "JEBAKAN: pertumbuhan riil = nominal dikurangi inflasi.",
  "JEBAKAN: kebijakan fiskal milik pemerintah, moneter milik bank sentral.",
  "JEBAKAN: neraca perdagangan hanya barang; transaksi berjalan lebih luas.",
  "JEBAKAN: saat krisis korelasi antar aset naik, bukan turun."]},

{module:"wmi-efek", tagline:"Nilai datang dari arus kas masa depan yang didiskonto, bukan dari harga kemarin.",
 sections:[
  {h:"Valuasi ekuitas", mm:["DDM :: Nilai = dividen dibagi selisih tingkat diskonto dan pertumbuhan.","FCFE :: Arus kas bebas untuk pemegang saham.","PER :: Harga dibagi laba per saham. Relatif, butuh pembanding.","PBV :: Cocok untuk perusahaan padat aset seperti bank.","EV/EBITDA :: Netral terhadap struktur modal, berguna lintas perusahaan."], points:[
   "Model pertumbuhan konstan runtuh kalau pertumbuhan diasumsikan melebihi tingkat diskonto.",
   "PER rendah bisa berarti murah, bisa juga berarti pasar meragukan kelangsungan labanya.",
   "Valuasi relatif cepat tapi ikut tertular kalau seluruh sektornya sedang kemahalan."]},
  {h:"Biaya modal dan pertumbuhan", mm:["CAPM :: Bebas risiko ditambah beta dikali premi risiko pasar.","Beta :: Kepekaan terhadap pasar. Historis dan tidak stabil.","WACC :: Rata-rata tertimbang biaya utang dan ekuitas.","Pertumbuhan berkelanjutan :: ROE dikali laba ditahan.","Nilai akhir :: Sering menyumbang mayoritas nilai, jadi asumsinya rawan."], points:[
   "Beta yang ditaksir dari periode berbeda bisa memberi hasil valuasi yang jauh berbeda.",
   "Biaya utang dihitung setelah pajak karena bunganya mengurangi beban pajak perusahaan.",
   "Kalau nilai akhir menyumbang sebagian besar hasil, uji sensitivitas asumsinya wajib dilakukan."]},
  {h:"Analisis pendapatan tetap", mm:["Harga vs imbal hasil :: Berlawanan arah, selalu.","Durasi :: Kepekaan harga terhadap perubahan bunga.","Durasi modifikasi :: Perkiraan persentase perubahan harga per satu persen bunga.","Konveksitas :: Koreksi karena hubungan harga dan imbal hasil melengkung.","Risiko reinvestasi :: Berlawanan arah dengan risiko harga."], points:[
   "Obligasi tanpa kupon durasinya sama dengan jatuh temponya, yang berkupon selalu lebih pendek.",
   "Durasi modifikasi memberi taksiran cepat, tetapi meleset untuk perubahan bunga yang besar.",
   "Imunisasi memanfaatkan sifat saling meniadakan antara risiko harga dan risiko reinvestasi."]},
  {h:"Mutu kredit dan analisis laporan", mm:["Peringkat :: Pendapat, bukan jaminan pembayaran.","Selisih imbal hasil :: Melebar saat kekhawatiran kredit meningkat.","Arus kas operasi :: Lebih sulit dipoles daripada laba akuntansi.","Rasio utang :: DER dan cakupan bunga menakar ketahanan.","Kualitas laba :: Laba naik dengan arus kas turun adalah tanda bahaya."], points:[
   "Laba bisa dinaikkan dengan pilihan akuntansi, arus kas jauh lebih sulit dimanipulasi.",
   "Peringkat AAA tetap tidak melindungi dari risiko harga saat bunga pasar naik.",
   "Melebarnya selisih imbal hasil sering jadi peringatan dini sebelum peringkatnya benar-benar diturunkan."]}],
 jebakan:[
  "JEBAKAN: model pertumbuhan konstan tidak berlaku bila g lebih besar dari r.",
  "JEBAKAN: durasi obligasi berkupon selalu lebih pendek dari jatuh temponya.",
  "JEBAKAN: PER rendah tidak otomatis berarti murah.",
  "JEBAKAN: peringkat tinggi tidak menghapus risiko bunga."]},

{module:"wmi-portofolio", tagline:"Penyebaran itu satu-satunya makan siang gratis, tapi porsinya terbatas.",
 sections:[
  {h:"Risiko dan penyebaran", mm:["Sistematis :: Risiko pasar, tidak bisa dihilangkan dengan menyebar.","Spesifik :: Risiko emiten, hilang kalau portofolionya tersebar.","Korelasi :: Makin rendah makin besar manfaat penyebarannya.","Yang dibayar pasar :: Hanya risiko sistematis, karena hanya itu yang tak terhindarkan.","Titik jenuh :: Menambah saham ke-50 manfaatnya jauh lebih kecil dari ke-5."], points:[
   "Imbal hasil harapan portofolio adalah rata-rata tertimbang, tetapi risikonya tidak.",
   "Dua aset berkorelasi nol dengan simpangan baku sama bisa menurunkan risiko tanpa mengurangi imbal hasil harapan.",
   "Memegang dua puluh saham dari satu sektor bukan penyebaran yang sesungguhnya."]},
  {h:"Perbatasan efisien dan CAPM", mm:["Perbatasan efisien :: Imbal hasil tertinggi untuk tiap tingkat risiko.","Garis pasar modal :: Kombinasi aset bebas risiko dan portofolio pasar.","CAPM :: Imbal hasil disyaratkan = bebas risiko + beta x premi risiko pasar.","Beta :: Kepekaan terhadap gerakan pasar.","Kritik :: Beta tidak stabil, portofolio pasar sejati tak teramati."], points:[
   "Portofolio di bawah perbatasan efisien selalu kalah dari kombinasi lain dengan risiko sama.",
   "Bentuk perbatasan efisien bergantung pada estimasi imbal hasil dan korelasi yang bisa meleset jauh.",
   "CAPM tetap dipakai luas karena memberi kerangka berpikir jelas soal hubungan risiko dan imbal hasil."]},
  {h:"Alokasi aset", mm:["Strategis :: Bobot jangka panjang sesuai tujuan dan toleransi risiko.","Taktis :: Penyimpangan sementara dari bobot strategis.","Penentu utama :: Alokasi aset menjelaskan sebagian besar keragaman hasil.","Penyeimbangan :: Mengembalikan bobot ke sasaran secara berkala.","Kebijakan tertulis :: Tempat semua batasan itu dituangkan."], points:[
   "Penyeimbangan memaksa menjual yang sudah mahal dan membeli yang murah, walau terasa tidak nyaman.",
   "Tanpa penyeimbangan, bobot saham membengkak saat pasar naik dan risiko portofolio diam-diam ikut naik.",
   "Alokasi taktis yang terlalu agresif mengubah profil risiko portofolio melampaui mandatnya."]},
  {h:"Menyusun portofolio nasabah", mm:["Tujuan :: Untuk apa dan kapan dananya dipakai.","Jangka waktu :: Penentu utama porsi aset berisiko.","Toleransi risiko :: Kemampuan dan kesediaan menanggung kerugian.","Batasan :: Likuiditas, pajak, ketentuan hukum, keadaan khusus nasabah.","IPS :: Dokumen yang mengikat semuanya jadi satu."], points:[
   "Kemampuan dan kesediaan menanggung risiko bisa berbeda, dan yang lebih rendah yang dipakai.",
   "Dana yang dipakai dua tahun lagi tidak punya waktu pulih kalau pasar saham jatuh.",
   "Mandat memaksimalkan imbal hasil tanpa batasan risiko tidak bisa dijalankan secara bertanggung jawab."]}],
 jebakan:[
  "JEBAKAN: imbal hasil harapan portofolio rata-rata tertimbang, risikonya tidak.",
  "JEBAKAN: risiko sistematis tidak hilang dengan penyebaran.",
  "JEBAKAN: banyak saham dari satu sektor bukan penyebaran yang sesungguhnya.",
  "JEBAKAN: toleransi risiko dinilai dari kemampuan DAN kesediaan, ambil yang lebih rendah."]}
]);
