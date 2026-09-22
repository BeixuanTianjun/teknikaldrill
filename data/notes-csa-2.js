/* Study notes + mind map — CSA bagian 2. */
TD.registerNotes([
{module:"csa-obligasi", tagline:"Durasi buat gerakan kecil, konveksitas buat gerakan besar.",
 sections:[
  {h:"Durasi dan konveksitas", mm:["Macaulay :: Rata-rata tertimbang waktu penerimaan arus kas. Satuannya tahun.","Modifikasi :: Persentase perubahan harga per 1% perubahan imbal hasil. Ini yang dipakai sehari-hari.","PVBP :: Perubahan harga dalam RUPIAH untuk 1 basis poin. Alat ukur risiko harian pengelola portofolio.","Konveksitas :: Lengkungannya. Positif berarti untung lebih besar saat bunga turun daripada rugi saat bunga naik.","Durasi portofolio :: Rata-rata tertimbang NILAI PASAR, bukan rata-rata sederhana."], points:[
   "Obligasi berkupon durasinya lebih pendek dari jatuh temponya. Zero coupon durasinya persis sama dengan jatuh temponya.",
   "Callable punya konveksitas NEGATIF di imbal hasil rendah: harganya mentok di harga tebus, tapi ruginya pas bunga naik tetap penuh.",
   "Durasi efektif dipakai buat obligasi beropsi, karena arus kasnya berubah kalau bunga bergerak."]},
  {h:"Kurva imbal hasil", mm:["Teori ekspektasi :: Imbal hasil panjang itu rata-rata perkiraan bunga pendek di masa depan.","Mendatar :: Ujung pendek naik lebih cepat — pengetatan sekarang, perlambatan nanti.","Curam :: Ujung panjang naik lebih cepat. Posisikan ke tenor pendek karena kerugian terbesar di tenor panjang.","Forward :: Diturunkan dari spot. Spot 1 tahun 6% dan 2 tahun 7% menyiratkan forward tahun kedua sekitar 8%.","Riding the curve :: Di kurva menanjak, obligasi yang tenornya memendek dihargai pada imbal hasil lebih rendah."], points:[
   "Imunisasi: samakan durasi portofolio dengan horizon kewajiban, supaya risiko harga dan risiko reinvestasi saling meniadakan.",
   "Barbell punya konveksitas lebih tinggi dari bullet berdurasi sama — lebih untung kalau bunga bergerak besar ke arah mana pun."]},
  {h:"Analisis kredit", mm:["Spread :: Selisih terhadap obligasi negara. Bayaran buat risiko gagal bayar plus likuiditas.","Kerugian diharapkan :: Peluang gagal bayar x (1 - tingkat pemulihan). Spread di bawah itu belum menutup risikonya.","Migrasi peringkat :: Turun satu kelas bikin spread melebar dan harga jatuh, walau nggak ada yang bangkrut.","OAS :: Buang nilai opsi melekat supaya spread kredit antar obligasi bisa dibandingkan setara.","Subordinasi struktural :: Utang di induk, aset di anak usaha. Kreditur induk antre di belakang."], points:[
   "Spread melebar tanpa perubahan bunga acuan artinya pasar menilai risiko penerbit naik — sering mendahului penurunan peringkat resmi.",
   "Covenant yang tinggal berjarak 0,1 kali dari batas itu bahaya: penurunan EBITDA kecil saja bisa memicu percepatan jatuh tempo.",
   "Kelayakan kredit dinilai dari KAS setelah belanja modal pemeliharaan versus kewajiban jatuh tempo, bukan dari laba akuntansi."]}],
 jebakan:[
  "JEBAKAN: durasi portofolio ditimbang NILAI, bukan jumlah surat berharga.",
  "JEBAKAN: koreksi konveksitas selalu menambah (mengurangi kerugian atau menambah keuntungan).",
  "JEBAKAN: yield to worst mengambil skenario TERBURUK bagi investor, karena hak tebus ada di tangan penerbit."]},

{module:"csa-portofolio", tagline:"Yang dibayar pasar cuma risiko yang nggak bisa didiversifikasi.",
 sections:[
  {h:"Risiko dan diversifikasi", mm:["Sistematis :: Resesi, krisis, lonjakan bunga. Nggak bisa dihapus, diukur lewat beta, dan inilah yang dibayar pasar.","Spesifik :: Risiko khas perusahaan. Bisa dihapus dengan menyebar kepemilikan.","Korelasi :: Manfaat diversifikasi datang dari korelasi rendah, bukan dari banyaknya saham.","Manfaat melandai :: 30 ke 100 saham nambah sedikit sekali, karena risiko sistematisnya tetap tersisa.","Saat krisis :: Korelasi melonjak ke arah satu — diversifikasi menguap justru pas paling dibutuhkan."], points:[
   "Imbal hasil harapan portofolio itu rata-rata tertimbang sederhana. Risikonya TIDAK, karena dipengaruhi korelasi.",
   "Aset bergejolak dengan korelasi rendah bisa MENURUNKAN risiko total portofolio. Ini hasil yang paling berlawanan naluri."]},
  {h:"Ukuran kinerja", mm:["Sharpe :: Kelebihan imbal hasil dibagi simpangan baku (risiko total).","Treynor :: Dibagi beta (risiko sistematis). Pas kalau portofolio ini cuma satu bagian dari kumpulan yang lebih besar.","Alfa Jensen :: Imbal hasil aktual dikurangi imbal hasil yang seharusnya menurut CAPM.","Rasio informasi :: Imbal hasil aktif dibagi kesalahan penjejakan. Ukuran efisiensi pengelolaan aktif.","Atribusi :: Memisahkan kontribusi alokasi sektor dari pemilihan efek."], points:[
   "Alfa positif dengan kesalahan penjejakan sangat tinggi artinya hasilnya dari taruhan besar — konsistensinya perlu diuji.",
   "Simpangan baku memperlakukan naik dan turun sama, padahal investor cuma keberatan pada yang ke bawah. Karena itu ada semideviasi dan Sortino.",
   "VaR 95% bicara soal hari NORMAL. Di 5% hari sisanya, kerugian bisa jauh lebih besar dan VaR diam soal itu."]},
  {h:"Pengelolaan portofolio", mm:["Alokasi strategis :: Bobot jangka panjang sesuai tujuan dan toleransi risiko. Penentu terbesar hasil.","Alokasi taktis :: Penyimpangan sementara buat ngambil peluang jangka pendek.","Penyeimbangan ulang :: Jual yang udah naik, beli yang tertinggal. Disiplin yang ngelawan naluri.","Pernyataan kebijakan investasi :: Tujuan, toleransi risiko, horizon, batasan, acuan. Jadi rem saat pasar panik.","Acuan yang tepat :: Harus mencerminkan alam semesta investasi dan gaya yang benar-benar dijalankan."], points:[
   "Target imbal hasil 18% dengan toleransi risiko rendah itu nggak konsisten. Tugas profesional: selaraskan harapan di AWAL, bukan diam-diam ambil risiko besar.",
   "Pasif dipilih karena biaya rendah dan sulitnya mengungguli indeks setelah biaya — tapi risiko pasarnya tetap ditanggung penuh.",
   "Kritik CAPM: beta historis nggak stabil dan portofolio pasar sesungguhnya nggak bisa diamati."]}],
 jebakan:[
  "JEBAKAN: saat penyeimbangan ulang, bobot sasaran dihitung dari total portofolio BARU, bukan dari nilai awal.",
  "JEBAKAN: Sharpe pakai simpangan baku, Treynor pakai beta. Sering ketuker.",
  "JEBAKAN: beta 0,6 berarti bergerak LEBIH LUNAK dari pasar, bukan berlawanan arah."]},

{module:"csa-derivatif", tagline:"Lindung nilai menyeimbangkan risiko yang sudah ada. Selebihnya itu spekulasi.",
 sections:[
  {h:"Kontrak berjangka", mm:["Futures vs forward :: Futures distandardisasi, dikliringkan, dihitung harian. Forward kesepakatan pribadi, ada risiko lawan transaksi.","Margin :: Uang JAMINAN, bukan harga barang. Daya ungkitnya besar, untung rugi berlipat.","Contango :: Harga berjangka di atas spot karena biaya simpan dan bunga. Menggerus penggulir posisi.","Basis :: Selisih harga spot aset yang dilindungi dengan kontrak yang dipakai. Sumber lindung nilai tidak sempurna.","Kliring :: Novasi bikin lo nggak perlu ngecek kelayakan kredit lawan transaksi."], points:[
   "Lindung nilai portofolio saham pakai kontrak indeks: nilai yang dijual = nilai portofolio x beta.",
   "Harga berjangka teoretis = harga spot + biaya menahan. Kalau melenceng jauh, ada peluang arbitrase yang ngunci keduanya."]},
  {h:"Opsi", mm:["Pembeli :: Punya HAK, rugi maksimal sebesar premi. Penjual punya KEWAJIBAN, ruginya bisa jauh lebih besar.","Nilai waktu :: Meluruh makin cepat mendekati jatuh tempo. Pembeli berpacu dengan waktu.","Volatilitas naik :: Menaikkan premi opsi beli MAUPUN opsi jual. Opsi itu taruhan atas pergerakan.","Paritas put-call :: Harga opsi beli + nilai kini harga pelaksanaan = harga opsi jual + harga aset dasar.","Yunani :: Delta = kecepatan, gamma = percepatan, theta = peluruhan waktu, vega = sensitivitas volatilitas."], points:[
   "Covered call: terima premi tapi jual hak naiknya. Cocok kalau perkiraan harga mendatar, bukan kalau lo yakin bakal melonjak.",
   "Protective put itu asuransi portofolio — preminya ongkos asuransinya.",
   "Straddle bertaruh pada BESARNYA gerakan, bukan arahnya. Musuhnya pasar yang diam.",
   "Menjual opsi beli telanjang: kerugian secara teori tidak terbatas, keuntungan dikunci sebesar premi."]},
  {h:"Lindung nilai dan manajemen risiko", mm:["Arah yang benar :: Pendapatan dolar, biaya rupiah, takut rupiah menguat? JUAL dolar berjangka.","Lindung nilai alami :: Selaraskan mata uang pendapatan dengan biaya dan utang. Paling murah dan paling awet.","Swap bunga :: Tukar arus bunga mengambang jadi tetap. Pokok utangnya nggak berpindah.","CDS :: Perlindungan gagal bayar dengan premi berkala. Harganya bergerak lebih cepat dari peringkat resmi.","Uji tekanan :: Melengkapi VaR dengan skenario ekstrem di luar rentang normal."], points:[
   "Nilai nosional derivatif jauh melebihi eksposur usaha = sebagian posisinya SPEKULASI, bukan lindung nilai. Banyak kerugian korporasi berawal dari sini.",
   "Nilai wajar derivatif di neraca sering kecil, padahal eksposurnya raksasa. Yang ngasih gambaran sebenarnya itu nilai nosional di catatan."]}],
 jebakan:[
  "JEBAKAN: margin itu jaminan, BUKAN pembayaran harga kontrak.",
  "JEBAKAN: kenaikan volatilitas menaikkan harga KEDUA jenis opsi, bukan cuma opsi beli.",
  "JEBAKAN: opsi Eropa dibedakan dari Amerika oleh KAPAN boleh dilaksanakan, bukan oleh lokasi bursanya."]},

{module:"csa-korporasi", tagline:"Semua aksi korporasi dinilai per saham, bukan per total.",
 sections:[
  {h:"Menambah dan mengurangi saham", mm:["Rights issue :: Cari dana sambil ngasih pemegang saham lama kesempatan pertama. Nambah jumlah saham.","Harga teoretis :: Total nilai saham lama plus saham baru, dibagi jumlah saham seluruhnya.","Nggak ikut, nggak jual :: Porsi tergerus DAN nilainya hilang. Minimal haknya dijual di pasar.","Private placement :: Tanpa hak memesan duluan. Pemegang saham lama langsung terdilusi.","Buyback :: Nambah nilai cuma kalau dibeli DI BAWAH nilai wajar. EPS naik karena pembaginya berkurang."], points:[
   "Stock split dan reverse split nggak menciptakan maupun menghancurkan nilai — kapitalisasi pasarnya persis sama.",
   "Waran, opsi karyawan, dan obligasi konversi semuanya klaim atas saham masa depan. Pakai jumlah saham TERDILUSI."]},
  {h:"Penggabungan dan situasi khusus", mm:["Akretif :: EPS penggabung naik setelah memperhitungkan pembiayaan dan saham baru. Bukan bukti penciptaan nilai.","Sinergi :: Urai sumbernya, waktu realisasinya, dan biaya integrasinya. Sinergi biaya lebih sering terwujud dari sinergi pendapatan.","Tender wajib :: Pengendali berganti, pemegang saham publik berhak keluar di harga wajar.","Spin off :: Lini usaha dipisah supaya nilainya dikenali pasar sendiri. Sering mengecilkan diskon induk.","Backdoor listing :: Masuk bursa lewat cangkang, tanpa penyaringan selengkap IPO."], points:[
   "Akuisisi dibiayai utang penuh: pemegang saham nggak terdilusi, tapi neraca berat dan bunganya tetap harus dibayar kalau sinergi meleset.",
   "Konversi utang jadi saham menyelamatkan perusahaan dari beban bunga, tapi pemegang saham lama terdilusi dalam.",
   "Kuasi reorganisasi menghapus defisit dengan menilai ulang aset — angka sebelum dan sesudahnya nggak bisa dibandingkan langsung."]},
  {h:"Tanggal dan penyesuaian data", mm:["Recording date :: Nama yang tercatat di tanggal ini yang berhak. Karena T+2, beli sebelum ex-date.","Masa penguncian :: Berakhirnya sering diikuti tekanan jual karena pasokan yang terkunci mendadak bebas.","Underpricing IPO :: Harga melesat di hari pertama, tapi dana yang masuk ke emiten lebih kecil dari potensinya.","Penyesuaian historis :: Harga dan EPS lama harus disetarakan ke basis saham sekarang setelah split dan penerbitan."], points:[
   "Transaksi dengan pihak terafiliasi pengendali butuh penilai independen dan persetujuan pemegang saham independen. Cek laporan penilainya.",
   "Emiten dalam PKPU: alat valuasi biasa nggak berlaku. Yang dianalisis urutan klaim kreditur dan potensi dilusi, bukan kelipatan laba."]}],
 jebakan:[
  "JEBAKAN: harga turun setelah rights issue itu WAJAR secara teori, bukan tanda perusahaan memburuk.",
  "JEBAKAN: laba total naik belum tentu laba PER SAHAM naik. Aksi korporasi selalu diukur per saham.",
  "JEBAKAN: buyback mengurangi kas dan ekuitas. EPS naik bukan karena perusahaan makin untung."]},

{module:"csa-tatakelola", tagline:"Kualitas tata kelola sering lebih menentukan nasib investasi daripada proyeksi laba.",
 sections:[
  {h:"Struktur dan pengawasan", mm:["Lima prinsip :: Transparansi, akuntabilitas, tanggung jawab, independensi, kewajaran.","Komisaris independen :: Mewakili seluruh pemegang saham termasuk minoritas. Ukurannya keberanian, bukan jumlah.","Komite audit :: Mengawasi pelaporan dan hubungan dengan auditor. Penyusun laporan tetap manajemen.","Piramida kepemilikan :: Hak suara besar, hak arus kas kecil. Godaan mengalirkan nilai keluar jadi kuat.","Saham dua kelas :: Kendali tetap di pendiri walau porsi ekonominya menyusut."], points:[
   "Fungsi pelaksana dan pengawas yang berasal dari lingkaran yang sama bikin pengawasannya cuma formalitas.",
   "Gugatan derivatif: pemegang saham minoritas bertindak atas nama perusahaan terhadap pengurus yang lalai.",
   "Sinyal yang perlu digabung: direktur keuangan berganti berulang kali, auditor berganti mendadak, akrual tinggi."]},
  {h:"ESG yang bisa dipakai", mm:["E-S-G :: Lingkungan, sosial, tata kelola. G paling sering punya kaitan langsung dan terukur dengan kinerja saham.","Bukan pengganti :: Skor ESG mengukur pengelolaan risiko keberlanjutan, bukan kemampuan menghasilkan laba.","Risiko transisi :: Harga karbon, permintaan menyusut, aset terdampar. Modelkan sebagai SKENARIO, bukan catatan kaki.","Greenwashing :: Klaim tanpa angka terukur, tanpa tenggat, tanpa verifikasi pihak ketiga.","Green bond :: Yang penting kejelasan penggunaan dana, pelaporan dampak, dan verifikasi independen."], points:[
   "Risiko sosial di emiten padat karya itu risiko OPERASI: mogok kerja dan kecelakaan bisa menutup pabrik.",
   "Di tambang batu bara, tiga jalur yang benar-benar masuk ke angka: kewajiban reklamasi, regulasi emisi, dan akses pendanaan yang menyempit."]},
  {h:"Integritas laporan riset", mm:["Isi wajib :: Metodologi, asumsi utama, risiko, dan pengungkapan benturan kepentingan.","Independensi :: Hubungan bisnis diungkap, bukan dipakai melunakkan kesimpulan.","Informasi terbatas :: Catat keterbatasannya dan cerminkan di penilaian risiko. Jangan berbaik sangka, jangan berspekulasi.","Diskon tata kelola :: Sebutkan dasar dan besarannya, jangan potong diam-diam.","Tekanan atasan :: Tolak dan tempuh jalur pelaporan internal. Kompromi separuh tetap berarti kesimpulan disetel."], points:[
   "Kesimpulan berubah antar laporan itu wajar — yang nggak wajar adalah perubahan tanpa penjelasan asumsi mana yang bergeser.",
   "Ukuran keberhasilan riset menurut standar profesi: kejelasan dasar dan kejujuran penyajian risiko, bukan ketepatan target harga jangka pendek."]}],
 jebakan:[
  "JEBAKAN: skor ESG tinggi tidak menjamin kinerja saham. ESG itu lensa risiko, bukan pengganti analisis fundamental.",
  "JEBAKAN: perlindungan minoritas paling diuji saat TRANSAKSI AFILIASI, bukan saat pembagian dividen rutin.",
  "JEBAKAN: menunda penerbitan rekomendasi sampai mandat penjaminan emisi selesai tetap merupakan penyesuaian analisis demi kepentingan lain."]}
]);
