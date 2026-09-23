/* Study notes + mind map — WPPE bagian 2.
   sections[].mm = "Label :: keterangan" untuk cabang mind map. */
TD.registerNotes([
{module:"wppe-operasional", tagline:"Kalau dapur perusahaan efek berantakan, nasabah yang duluan kena getahnya.",
 sections:[
  {h:"Struktur dan fungsi internal", mm:["Front office :: Berhadapan dengan nasabah dan melaksanakan order.","Middle office :: Manajemen risiko dan kepatuhan.","Back office :: Penyelesaian, pembukuan, dan pelaporan.","Pemisahan tugas :: Yang melakukan transaksi tidak boleh sekaligus mencatat dan menyelesaikannya.","Kepatuhan :: Jalur pelaporannya harus independen dari unit yang diawasi."], points:[
   "Satu orang yang menguasai seluruh rangkaian transaksi adalah resep penyimpangan yang sulit terdeteksi.",
   "Fungsi kepatuhan yang melapor ke kepala unit bisnis kehilangan taringnya sejak hari pertama.",
   "Pemisahan tugas itu prinsip pengendalian internal paling dasar dan paling sering ditanyakan."]},
  {h:"Permodalan dan kesehatan keuangan", mm:["MKBD :: Modal kerja bersih disesuaikan, dihitung dan dilaporkan setiap hari.","Fungsi :: Memastikan perusahaan sanggup menutup kewajibannya.","Di bawah batas :: Kegiatan usaha dibatasi sampai dipulihkan.","Laporan :: Berkala ke OJK dan bursa, bukan hanya tahunan.","Audit :: Laporan keuangan tahunan wajib diperiksa akuntan publik terdaftar."], points:[
   "MKBD dihitung harian karena kondisi keuangan perusahaan efek bisa berubah cepat mengikuti pasar.",
   "Perusahaan efek yang MKBD-nya jatuh di bawah batas dilarang menambah eksposur baru sampai pulih.",
   "Persyaratan permodalan melindungi nasabah secara tidak langsung, dengan menjaga perusahaannya tetap sehat."]},
  {h:"Pengendalian aset nasabah", mm:["Pemisahan aset :: Efek dan dana nasabah tidak boleh bercampur dengan milik perusahaan.","Sub rekening efek :: Kepemilikan tiap nasabah tercatat terpisah di KSEI.","Larangan pemakaian :: Aset nasabah tidak boleh dipakai untuk kepentingan perusahaan.","Rekonsiliasi :: Catatan internal dicocokkan dengan catatan KSEI dan bank secara rutin.","AKSes :: Nasabah bisa memeriksa sendiri kepemilikannya lewat fasilitas KSEI."], points:[
   "Fasilitas pemeriksaan mandiri membuat nasabah tidak sepenuhnya bergantung pada laporan perusahaan efek.",
   "Memakai efek nasabah tanpa izin, misalnya untuk jaminan, adalah pelanggaran berat.",
   "Selisih hasil rekonsiliasi wajib ditelusuri sampai ketemu sebabnya, bukan disamakan begitu saja."]},
  {h:"Teknologi dan kelangsungan usaha", mm:["Sistem perdagangan :: Wajib andal dan punya jejak audit.","Jejak audit :: Setiap order tercatat lengkap dengan waktu dan pihaknya.","BCP :: Rencana kelangsungan usaha untuk keadaan darurat.","Pusat data cadangan :: Agar kegiatan tetap jalan saat pusat utama gagal.","Keamanan akses :: Kewenangan sistem dibatasi sesuai peran masing-masing."], points:[
   "Jejak audit yang lengkap adalah alat utama menyelesaikan sengketa order dengan nasabah.",
   "Rencana kelangsungan usaha yang tidak pernah diuji praktis sama dengan tidak punya rencana.",
   "Satu akun sistem yang bisa melakukan segalanya adalah kelemahan pengendalian, bukan kemudahan."]}],
 jebakan:[
  "JEBAKAN: MKBD dilaporkan harian, bukan bulanan atau tahunan.",
  "JEBAKAN: aset nasabah tidak boleh dipakai untuk kepentingan perusahaan efek dalam bentuk apa pun.",
  "JEBAKAN: kepatuhan harus independen, tidak boleh di bawah unit bisnis yang diawasinya.",
  "JEBAKAN: selisih rekonsiliasi harus ditelusuri sebabnya, bukan langsung disamakan."]},

{module:"wppe-etika", tagline:"Yang bikin izin dicabut biasanya bukan salah hitung, tapi salah niat.",
 sections:[
  {h:"Perilaku yang dilarang", mm:["Manipulasi pasar :: Menciptakan harga atau aktivitas semu.","Wash sale :: Transaksi tanpa perubahan kepemilikan sesungguhnya.","Marking the close :: Mendorong harga di menit akhir perdagangan.","Cornering :: Menguasai pasokan agar harga bisa dikendalikan.","Penipuan :: Pernyataan tidak benar atau menyembunyikan fakta material."], points:[
   "Jumlah atau ukuran transaksi tidak mengubah sifat pelanggaran — kecil pun tetap manipulasi.",
   "Niat menciptakan gambaran palsu adalah inti dari manipulasi, bukan besarnya keuntungan yang diperoleh.",
   "Menerima perintah nasabah bukan pembelaan: melaksanakan order manipulatif tetap melanggar."]},
  {h:"Perdagangan orang dalam", mm:["Informasi material :: Bisa mempengaruhi harga atau keputusan investor.","Belum publik :: Belum diumumkan lewat saluran resmi secara luas.","Orang dalam :: Bisa juga pihak yang menerima informasi dari orang dalam.","Larangan :: Bertransaksi maupun membocorkan sama-sama dilarang.","Setelah diumumkan :: Bebas bertransaksi, karena informasinya sudah setara."], points:[
   "Menyampaikan informasi ke nasabah agar nasabah yang bertransaksi tetap termasuk pelanggaran.",
   "Alasan 'demi kepentingan nasabah' tidak menghalalkan pemakaian informasi orang dalam.",
   "Kalau terlanjur menerima informasi semacam itu, langkahnya adalah tidak bertransaksi dan melapor ke kepatuhan."]},
  {h:"Kewajiban terhadap nasabah", mm:["Mendahulukan nasabah :: Order nasabah dilaksanakan sebelum order pribadi.","Front running :: Mendahului order nasabah — dilarang keras.","Churning :: Memperbanyak transaksi demi komisi, merugikan nasabah.","Kerahasiaan :: Data nasabah tertutup kecuali ada perintah berwenang.","Benturan kepentingan :: Wajib diungkapkan dan dikelola, bukan dipendam."], points:[
   "Churning dikenali dari perputaran tinggi yang tidak punya alasan investasi yang masuk akal.",
   "Front running merugikan nasabah lewat harga yang memburuk akibat order pribadi mendahului.",
   "Kerahasiaan nasabah juga berlaku terhadap sesama pegawai yang tidak berkepentingan."]},
  {h:"Sanksi dan penegakan", mm:["Administratif :: Peringatan, denda, pembatasan, pembekuan, pencabutan izin.","Perdata :: Gugatan ganti rugi dari pihak yang dirugikan.","Pidana :: Untuk pelanggaran berat seperti manipulasi dan penipuan.","Bertingkat :: Beratnya sanksi mengikuti beratnya pelanggaran.","Berlapis :: Satu perbuatan bisa kena administratif dan pidana sekaligus."], points:[
   "Sanksi administratif tidak menghapus kemungkinan tuntutan pidana atas perbuatan yang sama.",
   "Izin wakil bisa dicabut secara pribadi, terpisah dari sanksi terhadap perusahaannya.",
   "Mengembalikan kerugian nasabah tidak otomatis menghapus pelanggaran yang sudah terjadi."]}],
 jebakan:[
  "JEBAKAN: perintah nasabah bukan pembelaan untuk melaksanakan transaksi manipulatif.",
  "JEBAKAN: membocorkan informasi orang dalam sama dilarangnya dengan memakainya sendiri.",
  "JEBAKAN: order nasabah selalu didahulukan dari order pribadi wakil perusahaan efek.",
  "JEBAKAN: sanksi administratif dan pidana bisa dikenakan bersamaan atas satu perbuatan."]},

{module:"wppe-layanan", tagline:"Melayani nasabah itu menjelaskan risiko, bukan menjual mimpi.",
 sections:[
  {h:"Komunikasi dengan nasabah", mm:["Berimbang :: Sampaikan potensi hasil bersama risikonya.","Bahasa :: Sesuaikan dengan pemahaman nasabah, jangan sembunyi di balik istilah.","Larangan :: Tidak boleh menjanjikan imbal hasil atau menjamin tidak rugi.","Dokumentasi :: Rekomendasi dan dasarnya sebaiknya tercatat rapi.","Keluhan :: Ditangani lewat prosedur resmi, bukan diselesaikan diam-diam."], points:[
   "Menonjolkan periode kinerja terbaik saja adalah bentuk penyesatan yang halus tapi tetap melanggar.",
   "Nasabah yang tidak paham risikonya akan menyalahkan perusahaan saat rugi, dan biasanya ia memang benar.",
   "Keluhan yang diselesaikan di luar prosedur menghilangkan jejak perbaikan sistem."]},
  {h:"Dasar analisis fundamental", mm:["Laporan keuangan :: Neraca, laba rugi, arus kas — tiga-tiganya dibaca bersama.","PER :: Harga dibagi laba per saham. Murah belum tentu bagus.","PBV :: Harga dibagi nilai buku per saham.","ROE :: Laba bersih dibagi ekuitas. Ukuran efisiensi modal pemilik.","DER :: Utang dibanding ekuitas. Makin tinggi makin rapuh saat bunga naik."], points:[
   "PER rendah bisa berarti murah, bisa juga berarti pasar meragukan kelangsungan labanya.",
   "Laba bisa naik sementara arus kas operasi negatif — itu tanda bahaya yang sering terlewat.",
   "Rasio harus dibandingkan dengan emiten sejenis dan dengan sejarahnya sendiri, bukan dinilai sendirian."]},
  {h:"Dasar analisis teknikal", mm:["Asumsi :: Harga mencerminkan semua informasi, bergerak dalam tren, pola berulang.","Tren :: Naik berarti puncak dan lembah makin tinggi.","Support-resistance :: Area tempat tekanan beli atau jual biasanya muncul.","Volume :: Pengesah pergerakan harga. Naik tanpa volume itu rapuh.","Indikator :: Alat bantu, bukan ramalan pasti."], points:[
   "Teknikal menjawab kapan, fundamental menjawab apa — keduanya saling melengkapi, bukan saling meniadakan.",
   "Tidak ada indikator yang benar terus, dan mencari yang sempurna itu jalan buntu.",
   "Sinyal tanpa dukungan volume lebih sering gagal daripada yang disertai lonjakan volume."]},
  {h:"Perlindungan investor", mm:["Dana perlindungan :: Melindungi aset nasabah dari penyalahgunaan, bukan dari rugi pasar.","Bukan penjamin hasil :: Kerugian karena harga turun tidak diganti siapa pun.","Sengketa :: Ada jalur penyelesaian alternatif di sektor jasa keuangan.","Edukasi :: Bagian dari tugas perusahaan efek, bukan sekadar pemasaran.","Keterbukaan biaya :: Semua biaya wajib dijelaskan di depan."], points:[
   "Batas pemahaman paling penting: dana perlindungan pemodal menutup penyalahgunaan aset, bukan kerugian investasi.",
   "Nasabah berhak tahu seluruh biaya sebelum bertransaksi, termasuk yang kecil-kecil.",
   "Sengketa yang tidak selesai di tingkat perusahaan bisa dibawa ke lembaga penyelesaian sengketa sektor jasa keuangan."]}],
 jebakan:[
  "JEBAKAN: dana perlindungan pemodal tidak mengganti kerugian akibat harga turun.",
  "JEBAKAN: PER rendah tidak otomatis berarti sahamnya murah.",
  "JEBAKAN: menjanjikan imbal hasil dilarang, walau nasabah sendiri yang memintanya.",
  "JEBAKAN: laba naik belum tentu arus kas operasinya sehat."]}
]);
