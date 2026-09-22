/* Study notes + mind map — CSA bagian 1. */
TD.registerNotes([
{module:"csa-akuntansi", tagline:"Laba bisa dibentuk dari estimasi. Kas jauh lebih susah dikarang.",
 sections:[
  {h:"Apa itu laba berkualitas", mm:["Cirinya :: Didukung arus kas dan berasal dari aktivitas berulang. Bukan yang paling cepat tumbuh.","Rasio akrual :: Selisih laba dan kas yang terus melebar artinya laba makin banyak berdiri di atas taksiran.","OCF/laba bersih :: Idealnya sekitar 1 atau lebih. Konsisten di bawah itu, kualitas labanya patut dipertanyakan.","Terlalu rapi :: Laba yang selalu pas melampaui perkiraan analis tiap kuartal justru mencurigakan."], points:[
   "Kombinasi yang paling perlu diwaspadai: laba naik, arus kas operasi turun, piutang dan persediaan melonjak, auditor berganti. Baca sinyalnya bareng, bukan satu-satu.",
   "Beban restrukturisasi yang muncul lima tahun berturut-turut itu BIAYA OPERASIONAL NORMAL, bukan pos sekali terjadi."]},
  {h:"Tuas yang sering dipakai", mm:["Channel stuffing :: Penjualan meledak di akhir kuartal, piutang membengkak, kuartal berikutnya lesu dan retur naik.","Kapitalisasi biaya :: Biaya pindah ke neraca. Laba naik, aset naik, dan arus kas OPERASI ikut kelihatan naik.","Cookie jar :: Cadangan digedein pas untung, dilepas pas seret. Grafik laba jadi mulus tapi palsu.","Geser klasifikasi kas :: Pengeluaran dipindah dari operasi ke investasi. Total kas sama, tapi OCF kelihatan gagah.","Asumsi imbalan pascakerja :: Diskonto dinaikin, nilai kini kewajiban turun, ekuitas keangkat."], points:[
   "Menunda penurunan nilai aset bikin aset dan ekuitas kegedean, ROA dan ROE kelihatan lebih bagus dari kenyataan — lalu kerugiannya datang sekaligus.",
   "Laba disesuaikan versi manajemen itu definisinya dibuat sendiri. Selalu rekonsiliasi balik ke laba bersih menurut standar."]},
  {h:"Struktur grup dan konsolidasi", mm:["Metode ekuitas :: Pengaruh signifikan tanpa kendali, umumnya 20 sampai 50 persen. Cuma satu baris di neraca.","Utang tersembunyi :: Utang entitas asosiasi nggak nongol di neraca induk. Cek komitmen dan jaminan di catatan.","Entitas bertujuan khusus :: Piutang keluar dari neraca, tapi risikonya bisa tetap nempel lewat jaminan atau kewajiban beli balik.","Kas terperangkap :: Kas di anak usaha belum tentu bisa naik ke induk buat bayar utang dan dividen.","Segmen digabung :: Lini yang berdarah jadi nggak kelihatan. Total labanya nggak berubah, daya pandang analis yang hilang."], points:[
   "Laba per saham memakai laba bagian INDUK. Ngalikan laba konsolidasian dengan persentase kepemilikan itu jalan pintas yang keliru karena strukturnya bisa bertingkat.",
   "Goodwill nggak diamortisasi tapi diuji penurunan nilai — dan ujiannya pakai proyeksi buatan manajemen sendiri."]}],
 jebakan:[
  "JEBAKAN: kapitalisasi biaya justru MENAIKKAN arus kas operasi karena pengeluarannya pindah ke arus kas investasi.",
  "JEBAKAN: penyajian kembali (restatement) menandakan KESALAHAN MATERIAL; perubahan estimasi berlaku ke depan tanpa menyentuh laporan lama.",
  "JEBAKAN: akuisisi dibayar saham tetap ada harganya — ukurannya laba PER SAHAM setelah dilusi, bukan tambahan laba total."]},

{module:"csa-dcf", tagline:"Arus kas dan tingkat diskonto harus sepasang. Salah pasangan, semuanya ngaco.",
 sections:[
  {h:"Aturan pasangan", mm:["FCFF :: Jatah SEMUA penyedia modal, sebelum bunga. Didiskonto pakai WACC, hasilnya nilai perusahaan.","FCFE :: Jatah pemegang saham, setelah bunga dan pergerakan pokok utang. Didiskonto pakai biaya ekuitas.","Rumus FCFF :: NOPAT + penyusutan - belanja modal - kenaikan modal kerja.","Jembatan :: Nilai perusahaan - utang berbunga + kas - kepentingan non-pengendali = nilai ekuitas."], points:[
   "FCFE bisa kelihatan besar di perusahaan yang lagi rajin narik utang baru — sebagian besarnya duit pinjaman, bukan hasil operasi.",
   "Kas nganggur dan aset non-operasional nggak masuk proyeksi, tapi DITAMBAHKAN di tahap jembatan."]},
  {h:"Biaya modal", mm:["CAPM :: Bunga bebas risiko + beta x premi risiko pasar. Risiko khas perusahaan nggak masuk hitungan.","WACC :: Bobot pakai NILAI PASAR, bukan nilai buku. Biaya utang dikali (1 - tarif pajak).","Beta :: Historis dan bisa berubah. Kalau ngambil dari pembanding, lepas dulu dari utang pembanding lalu pasang ulang.","Premi risiko negara :: Tambahan buat risiko politik dan ekonomi di pasar berkembang."], points:[
   "Utang memperbesar naik turunnya laba bersih, dan itu kecermin di beta ekuitas yang lebih tinggi.",
   "Perusahaan menciptakan nilai kalau imbal hasil modal yang diinvestasikan di atas WACC. Kalau kebalik, ekspansi justru ngerusak nilai."]},
  {h:"Nilai terminal dan uji kewajaran", mm:["Porsinya besar :: Sering 60 sampai 80 persen dari total nilai. Asumsinya lebih menentukan dari detail lima tahun pertama.","Batas pertumbuhan :: Nggak boleh di atas pertumbuhan ekonomi jangka panjang. Kalau di atas, perusahaannya jadi seluruh ekonomi.","Tahun terminal :: Belanja modal sebanding penyusutan, marjin di level yang bisa dipertahankan.","Kelipatan keluar :: Praktis, tapi nyeret penilaian pasar hari ini ke belasan tahun ke depan.","Rem kewajaran :: Pertumbuhan = tingkat investasi ulang x imbal hasil modal. Tumbuh itu nggak gratis."], points:[
   "Nilai terminal 90% dari total nilai artinya periode proyeksinya kependekan — perpanjang sampai bisnisnya mencapai kondisi stabil.",
   "Marjin loncat dari 12% ke 25% dalam lima tahun itu klaim besar. Harus jelas datangnya dari mana dan kenapa pesaing nggak bisa ngikutin.",
   "Selisih 60% antara dua analis pada emiten sama itu biasa: DCF adalah penguat asumsi. Yang dibandingin asumsinya, bukan angka akhirnya."]}],
 jebakan:[
  "JEBAKAN: kalau arus kas yang diberikan sudah untuk TAHUN DEPAN, jangan ditumbuhkan lagi sebelum dibagi.",
  "JEBAKAN: bobot WACC pakai nilai PASAR. Nilai buku bikin bobot utangnya kegedean dan WACC terlalu rendah.",
  "JEBAKAN: menyetel tingkat diskonto sampai hasilnya pas harga pasar itu pembenaran, bukan analisis."]},

{module:"csa-relatif", tagline:"Kelipatan itu ringkasan dari pertumbuhan, risiko, dan imbal hasil modal.",
 sections:[
  {h:"Memilih kelipatan yang tepat", mm:["EV/EBIT :: Lebih adil dari EV/EBITDA kalau intensitas aset pembandingnya beda jauh.","Bank :: Jangan pakai EV — utang itu bahan baku usahanya. Pakai PBV disandingkan ROE, atau diskonto dividen.","PBV wajar bank :: (ROE - pertumbuhan) dibagi (biaya ekuitas - pertumbuhan).","Asuransi :: Nilai buku disesuaikan, rasio gabungan, dan imbal hasil portofolio investasi.","Sektor khusus :: Tambang pakai cadangan atau kapasitas, sawit per hektar tertanam, telekomunikasi per pelanggan."], points:[
   "Emiten rugi dengan EBITDA positif: naik satu lapis ke EV/EBITDA atau langsung ke arus kas terdiskonto. PER-nya nggak bermakna.",
   "Kelipatan dari laba PUNCAK siklus selalu kelihatan murah. Normalkan dulu sepanjang siklus penuh."]},
  {h:"Kelompok pembanding", mm:["Syaratnya :: Model bisnis, risiko, dan prospek pertumbuhan yang mirip. Bukan sekadar sesama emiten bursa.","Pencilan :: Pakai median, atau jelaskan alasan mengeluarkan emiten tertentu. Jangan dibuang diam-diam.","Lintas negara :: Kelipatan lebih rendah di pasar berkembang sering kompensasi biaya modal dan likuiditas, bukan tanda murah.","Ganti pembanding :: Sah kalau bisnisnya berubah. Nggak sah kalau alasannya hasilnya lebih enak."], points:[
   "Kalau DCF dan valuasi relatif beda jauh, itu informasi: biasanya asumsi pertumbuhan lo di atas yang dihargai pasar. Telusuri, jangan dirata-rata diam-diam.",
   "PEG memperlakukan pertumbuhan 10% dan 30% seolah setara per satuan, dan buta terhadap risiko serta kualitas pertumbuhan."]},
  {h:"Valuasi khusus", mm:["SOTP :: Nilai tiap segmen dengan pendekatan yang pas, jumlahkan, lalu kurangi utang bersih induk.","Diskon induk :: Biaya struktur, pajak berlapis, dan kas anak usaha yang susah ditarik ke atas.","RNAV :: Aset properti dinilai ulang ke harga pasar lalu dikurangi utang bersih.","Laba residual :: Nilai buku + nilai kini laba di atas biaya ekuitas. Cocok buat emiten tanpa dividen.","EVA :: NOPAT dikurangi biaya SELURUH modal. Banyak emiten untung tapi EVA-nya minus."], points:[
   "Kepemilikan silang antar anak usaha bikin nilai gampang kehitung ganda kalau eliminasinya nggak rapi.",
   "Premi pengendalian dibayar karena dapat kendali; diskon minoritas dan diskon likuiditas arahnya kebalikan. Sesuaikan dengan pertanyaannya."]}],
 jebakan:[
  "JEBAKAN: di SOTP, jangan lupa mengurangi UTANG BERSIH di akhir kalau yang diminta nilai EKUITAS.",
  "JEBAKAN: EV butuh menambahkan utang dan mengurangi kas. Pakai kapitalisasi pasar saja bikin emiten berutang kelihatan murah.",
  "JEBAKAN: untuk anak usaha yang sahamnya tercatat, titik awal terbaik adalah NILAI PASAR dikali porsi kepemilikan, bukan nilai buku."]},

{module:"csa-model", tagline:"Model paling canggih pun mengeluarkan sampah kalau masukannya sampah.",
 sections:[
  {h:"Struktur model", mm:["Berbasis pendorong :: Volume, harga, kapasitas, jumlah pelanggan. Tiap asumsi bisa diuji satu-satu.","Tiga laporan terhubung :: Uji paling dasar, neraca harus seimbang di TIAP tahun proyeksi.","Pos penyeimbang :: Fasilitas bergulir nyerap kelebihan atau kekurangan kas. Kalau saldonya meledak, proyeksinya nggak realistis.","Referensi melingkar :: Bunga tergantung utang, utang tergantung kas setelah bunga. Sadari, kendalikan.","Lembar asumsi terpisah :: Angka masukan jangan dicampur ke dalam rumus."], points:[
   "Saldo kas negatif di tahun proyeksi berarti ada kebutuhan pendanaan yang belum dimodelkan — dan cara menambalnya ngaruh ke bunga dan dilusi.",
   "Jadwal utang wajib ada supaya beban bunga konsisten dan kepatuhan covenant bisa dicek per tahun."]},
  {h:"Asumsi dan uji kewajaran", mm:["Kalibrasi :: Pasang model ke 3-5 tahun ke belakang. Kalau nggak bisa nirun masa lalu, jangan percaya proyeksinya.","Tongkat hoki :: Datar dua tahun lalu melonjak. Boleh, asal ada pemicu yang bisa disebut.","Pangsa pasar :: Tiap poin diambil dari pesaing yang punya duit dan pabrik buat melawan.","ROIC terminal :: 45% saat industrinya 14%? Persaingan bakal nyeret turun kecuali ada benteng yang jelas.","Belanja modal pemeliharaan :: Minimal sebanding penyusutan, atau perusahaannya lagi makan asetnya sendiri."], points:[
   "Modal kerja diturunkan dari hari piutang, hari persediaan, dan hari utang usaha — bukan persentase tetap terhadap aset.",
   "Panduan manajemen itu masukan berharga tapi penyusunnya punya kepentingan. Jadikan batas atas, lalu urai syarat supaya tercapai."]},
  {h:"Skenario dan pertanggungjawaban", mm:["Sensitivitas :: Satu tuas digoyang, sisanya ditahan. Gampang dibaca.","Skenario :: Beberapa asumsi digeser sekaligus jadi satu cerita utuh. Lebih realistis.","Monte Carlo :: Ngasih sebaran hasil dan probabilitasnya. Sebaik distribusi yang lo masukin.","Titik impas :: Dibalik jadi pertanyaan: pertumbuhan serendah apa yang masih bikin harga sekarang masuk akal.","Riwayat versi :: Kalau target harga berubah, pembaca berhak tau asumsi mana yang digeser."], points:[
   "Model berisi ratusan baris nggak otomatis lebih akurat — nilai wajar digerakkan segelintir asumsi kunci.",
   "Presisi bukan akurasi. Nilai wajar Rp6.847 sama tidak pastinya dengan rentang Rp5.500 sampai Rp8.000, cuma kelihatan lebih meyakinkan."]}],
 jebakan:[
  "JEBAKAN: titik impas = biaya tetap DIBAGI marjin kontribusi, bukan dikali.",
  "JEBAKAN: belanja modal terus-menerus di bawah penyusutan bikin arus kas bebas kelihatan besar sementara kapasitasnya menyusut.",
  "JEBAKAN: pertumbuhan menuntut tambahan modal kerja dan belanja modal. Proyeksi tanpa itu melebih-lebihkan arus kas bebas."]}
]);
