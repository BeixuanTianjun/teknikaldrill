/* Study notes + mind map — RSA bagian 2. */
TD.registerNotes([
{module:"rsa-valuasi", tagline:"Angka nilai wajar itu hasil asumsi. Yang dinilai analisnya, bukan angkanya.",
 sections:[
  {h:"Kelipatan laba dan nilai buku", mm:["PER :: Berapa rupiah dibayar buat tiap satu rupiah laba tahunan. Tinggi belum tentu mahal kalau tumbuh kencang.","Trailing vs forward :: Trailing pakai 12 bulan terakhir (pasti tapi basi), forward pakai proyeksi (relevan tapi bisa meleset).","Earnings yield :: 1 dibagi PER. Enak dibandingin langsung sama imbal hasil obligasi negara.","PBV :: Cocok buat bank dan properti yang asetnya nyata. Buat perusahaan bermerek, nilai bukunya kekecilan.","PER wajar :: Rasio pembayaran dibagi (imbal hasil disyaratkan kurang pertumbuhan). Nunjukin PER yang PANTAS."], points:[
   "PBV wajar naik kalau ROE di atas biaya modal. Kalau ROE di bawah biaya modal, PBV di bawah 1 itu masuk akal — bukan otomatis murah.",
   "PER melonjak gara-gara beban sekali terjadi? Normalkan dulu labanya sebelum ngitung, atau lo bakal nolak saham bagus karena satu tahun yang nggak mewakili."]},
  {h:"Nilai perusahaan dan EV", mm:["EV :: Kapitalisasi pasar + utang berbunga - kas. Harga beli seluruh bisnisnya.","EV/EBITDA :: Adil buat ngebandingin emiten dengan struktur utang dan penyusutan berbeda.","Batasnya :: EBITDA nggak motong belanja modal. Perusahaan padat modal bisa EBITDA tebal tapi kasnya habis.","EV/Sales :: Buat emiten rugi. Tapi penjualan tanpa margin nilainya nol — harus punya pandangan soal margin masa depan."], points:[
   "Pakai kapitalisasi pasar doang tanpa nambahin utang bikin emiten berutang kelihatan lebih murah dari sebenarnya. Ini kesalahan paling umum di valuasi relatif.",
   "Kelipatan transaksi akuisisi lebih tinggi dari kelipatan pasar karena udah mengandung premi pengendalian dan harapan sinergi."]},
  {h:"Model dividen dan margin of safety", mm:["Gordon :: Dividen tahun depan dibagi (imbal hasil disyaratkan kurang pertumbuhan). Jangan lupa numbuhin dividennya dulu.","Sensitif :: Penyebutnya selisih dua taksiran. Geser pertumbuhan 2%, nilainya bisa melonjak puluhan persen.","Nggak cocok :: Emiten yang nahan seluruh laba buat ekspansi. Pakai arus kas bebas atau valuasi relatif.","Margin of safety :: Beli jauh di bawah nilai wajar hasil hitungan lo, karena asumsi selalu bisa meleset."], points:[
   "Emiten siklikal: PER rendah sering muncul pas laba di PUNCAK dan justru nandain harga udah mahal. Logikanya kebalik dari kebiasaan.",
   "Sajikan rentang dari beberapa metode plus asumsinya. Milih metode karena hasilnya paling enak dibaca itu jualan, bukan analisis."]}],
 jebakan:[
  "JEBAKAN: di model Gordon, dividen harus DITUMBUHKAN satu tahun dulu sebelum dibagi.",
  "JEBAKAN: dividend yield membagi dengan HARGA; payout ratio membagi dengan LABA. Beda urusan.",
  "JEBAKAN: PER murah itu pertanyaan, bukan kesimpulan. Perangkap nilai murah lahir dari analis yang berhenti di angka."]},

{module:"rsa-obligasi", tagline:"Kupon dikunci, bunga pasar bergerak. Dari situ semuanya bermula.",
 sections:[
  {h:"Harga, imbal hasil, dan kupon", mm:["Terbalik :: Imbal hasil naik, harga turun. Karena kuponnya dikunci, penyesuaiannya lewat harga.","Premium vs diskon :: Kupon di atas pasar dijual premium; kupon di bawah pasar dijual diskon.","Current yield :: Kupon dibagi harga. Cuma potret setahun, nggak ngitung selisih harga.","YTM :: Termasuk untung rugi dari selisih harga sampai jatuh tempo. Beli diskon bikin YTM di atas kupon.","Clean vs dirty :: Harga bersih tambah bunga berjalan sama dengan total yang dibayar pembeli."], points:[
   "Zero coupon: seluruh untungnya dari selisih harga. Risiko reinvestasi nol, tapi paling sensitif sama perubahan bunga.",
   "Makin panjang tenor, makin sensitif harganya. Ini inti konsep durasi — dan dasar strategi manjangin atau mendekin durasi."]},
  {h:"Risiko yang dihadapi", mm:["Risiko bunga :: Harga turun pas bunga naik. Mengenai semua obligasi, termasuk obligasi negara.","Risiko kredit :: Penerbit gagal bayar. Diukur peringkat, dibayar lewat credit spread.","Risiko reinvestasi :: Kupon yang masuk cuma dapet tempat parkir lebih murah pas bunga turun.","Risiko pembiayaan ulang :: Emiten lazim ganti utang lama pakai utang baru. Kalau pasar seret pas jatuh tempo, bisa gawat."], points:[
   "Obligasi callable: hak tebus di tangan PENERBIT, dipakai pas bunga turun. Makanya imbal hasilnya harus lebih tinggi.",
   "Obligasi mengambang melindungi dari risiko BUNGA, bukan dari risiko kredit.",
   "Urutan pembayaran saat bangkrut: kreditur berjaminan, obligasi tanpa jaminan, saham preferen, saham biasa paling buncit."]},
  {h:"Instrumen lain dan pasar uang", mm:["Sukuk :: Imbalan dari aset yang mendasari, bukan bunga pinjaman. Arus kasnya sering mirip obligasi.","Obligasi konversi :: Obligasi plus opsi beli saham. Kuponnya lebih rendah, ada risiko dilusi.","Pasar uang :: Tenor maksimal setahun. Buat parkir dana, bukan buat ngejar imbal hasil.","Repo :: Pinjaman jangka pendek berjaminan efek. Selisih harga jual dan beli kembali itu bunganya.","Wali amanat :: Wakil pemegang obligasi terhadap penerbit. Wakil, bukan penjamin."], points:[
   "Covenant itu pagar. Cek dua hal: seberapa ketat pagarnya, dan seberapa dekat rasio sekarang ke batasnya.",
   "Obligasi pemerintah dalam rupiah dianggap bebas gagal bayar karena negara punya pajak dan mata uangnya sendiri — tapi tetap kena risiko harga dan inflasi."]}],
 jebakan:[
  "JEBAKAN: kupon semesteran artinya sekali bayar cuma SETENGAH kupon tahunan.",
  "JEBAKAN: peringatan peringkat mengukur risiko GAGAL BAYAR, bukan potensi kenaikan harga atau likuiditas.",
  "JEBAKAN: beli obligasi diskon bikin current yield DAN YTM di atas tingkat kuponnya."]},

{module:"rsa-etika", tagline:"Benturan kepentingan diselesaikan dengan keterbukaan, bukan dengan pura-pura nggak ada.",
 sections:[
  {h:"Informasi material dan orang dalam", mm:["Material :: Bisa mengubah harga atau keputusan investor. Ukurannya dampak, bukan siapa yang tau.","Insider trading :: Material DAN belum publik. Dua syarat harus ketemu.","Tippee :: Yang nerima bocoran juga kena, walau bukan orang dalam dan walau informasinya datang tanpa diminta.","Riset mosaik :: Ngumpulin banyak serpihan non-material dari berbagai sumber itu SAH dan justru inti pekerjaan analis."], points:[
   "Begitu informasinya diumumkan resmi, semua orang start bareng dan transaksinya sah.",
   "Suspensi menjelang pengumuman besar itu buat mastiin semua orang start dari garis yang sama — bukan buat nyetel harga."]},
  {h:"Manipulasi pasar", mm:["Wash trade :: Jual beli pura-pura, kepemilikan nggak pindah. Tujuannya bikin volume kelihatan ramai.","Marking the close :: Nyetel harga penutupan di menit terakhir. Harga penutupan dipakai banyak hal penting.","Pompa lalu buang :: Naikin harga rame-rame lalu jual ke ritel yang tertarik. Investor terakhir yang nanggung.","Front running :: Masuk duluan sebelum rekomendasi atau order nasabah dieksekusi."], points:[
   "Pesanan NASABAH selalu didahulukan di atas rekening perusahaan. Dilaporin belakangan nggak nyembuhin pelanggarannya.",
   "Manipulasi intinya menciptakan gambaran pasar yang palsu — itu yang bikin dia pidana, bukan besar kecilnya untung."]},
  {h:"Standar laporan riset", mm:["Isi wajib :: Dasar analisis, asumsi utama, risiko, dan penafian. Tanpa itu bukan riset, tapi ajakan.","Target harga :: Sertakan metode, asumsi, dan jangka waktunya. Angka tanpa cara nyampenya cuma tebakan rapi.","Pengungkapan :: Kepemilikan pribadi, hubungan penjaminan emisi, afiliasi grup — diungkap, bukan disembunyiin.","Perlakuan setara :: Klien satu kelas nerima rekomendasi di waktu yang setara. Nggak ada keunggulan waktu.","Koreksi :: Salah material di laporan terbit? Terbitkan koreksi ke SELURUH penerima laporan awal."], points:[
   "Kewajiban analis itu ke pembaca dan klien, bukan ke emiten. Nurunin kesimpulan demi menjaga hubungan berarti nyesatin ribuan orang.",
   "Beda dari konsensus itu boleh — yang nggak boleh masang asumsi ekstrem tanpa dasar yang memadai dan wajar.",
   "Chinese wall misahin divisi penjaminan emisi dari riset dan perdagangan, supaya informasi rahasia nggak bocor lintas divisi."]}],
 jebakan:[
  "JEBAKAN: penafian TIDAK membebaskan analis dari kewajiban bekerja cermat dan jujur.",
  "JEBAKAN: punya saham emiten yang diliput bukan pelanggaran; MENYEMBUNYIKANNYA yang pelanggaran.",
  "JEBAKAN: menyampaikan pandangan negatif diam-diam ke klien terpilih justru menambah pelanggaran perlakuan setara."]}
]);
