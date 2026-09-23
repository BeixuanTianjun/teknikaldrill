/* Study notes + mind map — WMI bagian 2.
   sections[].mm = "Label :: keterangan" untuk cabang mind map. */
TD.registerNotes([
{module:"wmi-kinerja", tagline:"Angka hasil tanpa pembanding dan tanpa risiko itu cuma cerita.",
 sections:[
  {h:"Dua cara menghitung imbal hasil", mm:["Tertimbang waktu :: Buang pengaruh setoran dan penarikan. Untuk menilai PENGELOLA.","Tertimbang uang :: Sama dengan IRR arus kas. Untuk menilai pengalaman INVESTOR.","Dietz sederhana :: Laba dibagi modal awal ditambah separuh arus kas bersih.","Penyetahunan :: Hanya untuk periode setahun atau lebih.","Majemuk :: Pakai perkalian pertumbuhan, bukan rata-rata sederhana."], points:[
   "Untung 8% lalu rugi 5% menghasilkan rata-rata majemuk sekitar 1,15%, bukan 1,5%.",
   "Setoran yang kebetulan pas sebelum pasar naik membuat angka tertimbang uang bagus walau keahlian pengelolanya biasa.",
   "Menyetahunkan hasil tiga bulan yang kebetulan bagus menghasilkan angka yang menyesatkan."]},
  {h:"Ukuran kinerja terhadap risiko", mm:["Sharpe :: Kelebihan imbal hasil dibagi simpangan baku TOTAL.","Treynor :: Kelebihan imbal hasil dibagi BETA.","Jensen alpha :: Hasil nyata dikurangi hasil yang disyaratkan CAPM.","Rasio informasi :: Kelebihan terhadap acuan dibagi galat penjejakan.","M-kuadrat :: Kinerja setelah risiko disetarakan dengan pasar, dalam satuan persen."], points:[
   "Sharpe dan Treynor memberi peringkat mirip pada portofolio yang sudah tersebar, berbeda pada yang terkonsentrasi.",
   "Imbal hasil mentah yang lebih tinggi tidak berarti apa-apa kalau gejolaknya jauh lebih besar.",
   "Sortino hanya menghitung simpangan ke bawah, karena naik tajam bukan masalah bagi investor."]},
  {h:"Acuan dan atribusi", mm:["Syarat acuan :: Diketahui di muka, dapat diinvestasikan, cocok dengan gaya portofolio.","Galat penjejakan :: Simpangan baku selisih terhadap acuan.","Atribusi :: Memisahkan kontribusi alokasi aset dan pemilihan efek.","Mengganti acuan :: Boleh ke depan, tidak boleh berlaku mundur.","Durasi dan mutu :: Acuan pendapatan tetap harus setara durasi dan peringkatnya."], points:[
   "Imbal hasil positif bukan prestasi kalau acuannya naik lebih kencang.",
   "Galat penjejakan 0,8% dengan tarif aktif berarti investor membayar mahal untuk hasil mirip indeks.",
   "Mengganti acuan setelah hasilnya diketahui sama saja mengganti mistar setelah panjangnya diukur."]},
  {h:"Penyajian yang jujur", mm:["Komposit :: Seluruh portofolio bermandat sejenis, bukan yang terbaik saja.","Bias bertahan hidup :: Produk yang dibubarkan hilang dari data.","Imbal hasil bersih :: Sudah dipotong biaya pengelolaan dan kustodian.","Peringatan wajib :: Kinerja masa lalu bukan jaminan hasil masa depan.","Periode panjang :: Membedakan keahlian dari keberuntungan."], points:[
   "Menyajikan tiga portofolio terbaik dari dua belas adalah penyesatan walau angkanya dihitung benar.",
   "Rata-rata industri terlihat lebih bagus dari kenyataan karena produk yang gagal sudah tidak ada di data.",
   "Satu tahun bagus bisa saja kebetulan; pola yang bertahan melewati beberapa siklus jauh lebih meyakinkan."]}],
 jebakan:[
  "JEBAKAN: rata-rata majemuk bukan rata-rata sederhana imbal hasil tahunan.",
  "JEBAKAN: simpangan baku disetahunkan dengan akar dua belas, imbal hasil dikali dua belas.",
  "JEBAKAN: imbal hasil positif belum tentu unggul bila acuannya naik lebih tinggi.",
  "JEBAKAN: acuan ditetapkan di awal, tidak boleh diganti berlaku mundur."]},

{module:"wmi-risiko", tagline:"Yang dikelola bukan keberadaan risikonya, tapi jenis dan takarannya.",
 sections:[
  {h:"Jenis risiko", mm:["Pasar :: Harga bergerak melawan posisi portofolio.","Kredit :: Penerbit gagal membayar kewajibannya.","Likuiditas :: Efek sulit dijual di harga wajar saat dibutuhkan.","Operasional :: Proses, manusia, sistem, dan kejadian eksternal.","Model :: Asumsi atau rumus yang dipakai ternyata tidak tepat."], points:[
   "Risiko operasional bisa menimbulkan kerugian besar tanpa ada hubungannya dengan pergerakan pasar.",
   "Risiko likuiditas paling terasa saat penebusan besar memaksa penjualan cepat.",
   "Model yang cocok dengan data masa lalu belum tentu bertahan saat keadaan pasar berubah."]},
  {h:"Mengukur risiko", mm:["Simpangan baku :: Ukuran gejolak total.","Beta :: Kepekaan terhadap pasar.","Durasi :: Kepekaan harga obligasi terhadap bunga.","VaR :: Batas kerugian pada tingkat keyakinan tertentu.","Expected shortfall :: Rata-rata kerugian di luar ambang VaR."], points:[
   "VaR tidak menjelaskan seberapa parah kerugian di luar tingkat keyakinannya — itu tugas kerugian ekor harapan.",
   "Efek yang jarang diperdagangkan terlihat rendah gejolaknya karena harganya jarang diperbarui.",
   "Beta portofolio adalah rata-rata tertimbang beta komponennya, sedangkan simpangan bakunya tidak."]},
  {h:"Mengendalikan risiko", mm:["Penyebaran :: Menghapus risiko spesifik, bukan risiko pasar.","Batas :: Per penerbit, per sektor, per kelas aset, dan batas kerugian.","Lindung nilai :: Kontrak berjangka indeks menekan eksposur tanpa menjual efeknya.","Penyangga kas :: Pertahanan paling nyata saat pasar panik.","Uji ketahanan :: Skenario ekstrem, karena model biasa dibangun dari periode normal."], points:[
   "Pelanggaran batas karena harga naik tetap wajib dilaporkan dan diseimbangkan dalam jangka waktu wajar.",
   "Menaikkan batas supaya cocok dengan posisi membuat batas itu kehilangan maknanya.",
   "Daya ungkit memperbesar kerugian sebesar ia memperbesar keuntungan, jadi harus dibatasi di muka."]},
  {h:"Tata kelola risiko", mm:["Unit terpisah :: Pemantau risiko tidak boleh di bawah pengelola yang diawasi.","IPS :: Batasan yang disepakati saat kepala dingin.","Profil nasabah :: Ditinjau berkala karena keadaan bisa berubah.","Pelaporan :: Keterbatasan model wajib diungkapkan, bukan dipendam.","Asimetri kerugian :: Rugi 20% butuh untung 25% untuk balik modal."], points:[
   "Membatasi kerugian besar lebih penting daripada mengejar imbal hasil tinggi, karena pemulihannya tidak simetris.",
   "Hasil bagus dari taruhan terkonsentrasi tetap taruhan terkonsentrasi — jangan menilai keputusan cuma dari hasilnya.",
   "Model yang diketahui cacat lalu dipakai diam-diam adalah risiko berlipat karena semua orang mengira angkanya benar."]}],
 jebakan:[
  "JEBAKAN: VaR tidak mengukur besarnya kerugian di luar tingkat keyakinannya.",
  "JEBAKAN: rugi 20% butuh untung 25% untuk kembali ke nilai semula.",
  "JEBAKAN: gejolak rendah pada efek tidak likuid bisa menipu.",
  "JEBAKAN: pelanggaran batas akibat kenaikan harga tetap harus ditangani."]},

{module:"wmi-etika", tagline:"Semua aturan turunannya berakar dari satu hal: kepentingan nasabah didahulukan.",
 sections:[
  {h:"Kewajiban dasar", mm:["Fidusia :: Kepentingan nasabah di atas kepentingan pribadi dan perusahaan.","Kehati-hatian :: Penelitian memadai dan dasar keputusan yang wajar.","Kesesuaian :: Produk cocok dengan tujuan dan profil risiko nasabah.","Perlakuan adil :: Nasabah bermandat sama diperlakukan setara.","Larangan janji :: Tidak boleh menjanjikan imbal hasil tertentu."], points:[
   "Kehati-hatian dinilai dari prosesnya, bukan dari apakah keputusannya akhirnya untung.",
   "Adil bukan berarti seragam — yang dilarang adalah membedakan nasabah yang mandatnya sama.",
   "Besarnya dana bukan alasan sah memberi harga eksekusi yang lebih baik kepada salah satu nasabah."]},
  {h:"Benturan kepentingan", mm:["Pengungkapan :: Wajib, lalu dikelola supaya nasabah tidak dirugikan.","Urutan order :: Pesanan nasabah selalu didahulukan dari pesanan pribadi.","Perdagangan pribadi :: Perlu izin di muka dan dilaporkan berkala.","Imbalan dari perantara :: Wajib diungkap, pemilihan tetap berdasar mutu eksekusi.","Afiliasi :: Perintah atasan tidak menghapus kewajiban kepada nasabah."], points:[
   "Benturan kepentingan tidak selalu bisa dihindari, tetapi selalu wajib dibuka dan dikelola.",
   "Mencatat keberatan sendiri di laci tidak menolong kalau transaksinya tetap terjadi.",
   "Larangan total perdagangan pribadi malah sulit ditegakkan; izin di muka plus pelaporan lebih efektif."]},
  {h:"Integritas pasar dan informasi", mm:["Orang dalam :: Jangan bertransaksi, jangan membocorkan, laporkan ke kepatuhan.","Manipulasi :: Termasuk mendorong harga menjelang akhir periode.","Kerahasiaan :: Terbuka hanya atas perintah berwenang atau kewajiban peraturan.","Penyajian kinerja :: Komposit, bukan contoh terbaik pilihan sendiri.","Rekomendasi publik :: Kepemilikan sendiri wajib diungkapkan."], points:[
   "Menyampaikan informasi orang dalam ke nasabah memperluas pelanggaran, bukan menyelesaikannya.",
   "Ukuran transaksi tidak mengubah sifat manipulasi — kecil pun tetap melanggar.",
   "Menyembunyikan kepemilikan saat merekomendasikan saham adalah yang salah, bukan kepemilikannya itu sendiri."]},
  {h:"Tanggung jawab dan penegakan", mm:["Pengawasan :: Atasan wajib membangun sistem pencegahan yang wajar.","Pelaporan pelanggaran :: Lewat saluran resmi, jangan diselesaikan berdua.","Kesalahan operasional :: Ditanggung pengelola, bukan dibebankan ke nasabah.","Standar tertinggi :: Kalau aturan dan kode etik berbeda, ambil yang lebih ketat.","Celah aturan :: Tidak dilarang belum tentu boleh."], points:[
   "Atasan bisa ikut bertanggung jawab kalau sistem pencegahannya memang tidak pernah dibangun.",
   "Menunggu kerugian membesar agar laporan punya bukti kuat sama dengan membiarkannya berlanjut.",
   "Strategi yang menang karena celah aturan biasanya cepat mati begitu celahnya ditutup, dan reputasinya rusak duluan."]}],
 jebakan:[
  "JEBAKAN: perintah atasan tidak menghapus kewajiban mendahulukan nasabah.",
  "JEBAKAN: penyajian kinerja wajib komposit, bukan portofolio terbaik pilihan.",
  "JEBAKAN: kerugian akibat kesalahan pelaksanaan bukan risiko pasar nasabah.",
  "JEBAKAN: memindahkan hasil antarportofolio nasabah selalu dilarang."]},

{module:"wmi-operasional", tagline:"NAB itu angka yang dipercaya banyak orang — pastikan cara menghitungnya benar.",
 sections:[
  {h:"Menghitung NAB", mm:["Rumus :: (Aset − kewajiban) dibagi unit beredar.","Harga pasar wajar :: Bukan harga perolehan.","Efek tidak aktif :: Dinilai dengan metode yang diakui dan konsisten.","Bunga berjalan :: Ikut dihitung supaya nilainya tidak melompat saat kupon dibayar.","Siapa yang hitung :: Bank kustodian, diumumkan tiap hari bursa."], points:[
   "Memakai harga perolehan menyembunyikan kerugian yang sebenarnya sudah terjadi.",
   "Kewajiban yang belum dibayar wajib dipotong supaya nilainya tidak terlihat lebih besar dari seharusnya.",
   "Pembagian hasil investasi menurunkan NAB per unit sebesar yang dibagikan, tanpa mengubah kekayaan pemegang unit."]},
  {h:"Transaksi unit penyertaan", mm:["Cut-off :: Order lengkap sebelum batas waktu dapat NAB hari itu.","Biaya pembelian :: Memotong dana sebelum unit dihitung.","Biaya penebusan :: Dihitung dari nilai saat ditebus.","Pembayaran :: Paling lambat tujuh hari bursa.","Unit baru :: Setoran menciptakan unit, penebusan memusnahkannya."], points:[
   "Setoran baru menambah unit beredar tetapi tidak mengubah NAB per unit.",
   "Memakai NAB kemarin membuka celah bagi yang sudah tahu arah pasar hari ini.",
   "Batas tujuh hari bursa memberi ruang menjual efek secara tertib tanpa membanting harga."]},
  {h:"Pengendalian dan rekonsiliasi", mm:["Pemisahan tugas :: Yang memutuskan tidak boleh sekaligus mencatat dan menyelesaikan.","Rekonsiliasi harian :: Catatan MI dicocokkan dengan kustodian.","Selisih :: Ditelusuri sampai ketemu sebabnya sebelum NAB diumumkan.","Kesalahan NAB :: Hitung ulang, pulihkan pemegang unit terdampak, laporkan.","Persetujuan berlapis :: Perubahan data kepemilikan wajib lewat pihak kedua."], points:[
   "Selisih yang ketahuan sehari jauh lebih mudah dilacak daripada yang baru ketahuan sebulan kemudian.",
   "Kerugian akibat kesalahan hitung bukan risiko pasar yang pantas ditanggung investor.",
   "Menunggu sampai ada penyalahgunaan adalah cara paling mahal untuk membuktikan kelemahan kontrol."]},
  {h:"Pelaporan dan perubahan produk", mm:["Laporan bulanan :: Unit dimiliki, NAB per unit, dan mutasi periode itu.","Laporan tahunan :: Diaudit akuntan publik terdaftar.","Prospektus :: Diperbarui bila ada perubahan material.","Ganti pengelola :: Perlu persetujuan otoritas dan pemberitahuan pemegang unit.","Pembubaran :: Antara lain bila dana kelolaan di bawah batas minimum."], points:[
   "Perubahan komposisi efek adalah kegiatan sehari-hari, bukan perubahan material yang mengubah prospektus.",
   "Pemegang unit yang tidak setuju perubahan material berhak keluar sebelum perubahan itu berlaku.",
   "Laporan berbasis harga perolehan tidak boleh disajikan walau nasabah sendiri yang memintanya."]}],
 jebakan:[
  "JEBAKAN: NAB dihitung dengan harga pasar wajar, bukan harga perolehan.",
  "JEBAKAN: setoran baru tidak mengubah NAB per unit, hanya menambah unit beredar.",
  "JEBAKAN: pembayaran penebusan paling lambat tujuh hari bursa.",
  "JEBAKAN: kesalahan perhitungan NAB wajib dipulihkan, bukan dibiarkan terkoreksi sendiri."]}
]);
