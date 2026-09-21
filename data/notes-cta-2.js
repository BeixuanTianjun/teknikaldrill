/* Study notes + mind map — CTA bagian 2 */
TD.registerNotes([
{module:"cta-siklus", tagline:"Dimensi waktu: periodisitas, seasonality, dan proyeksi titik balik.",
 sections:[
  {h:"Anatomi siklus", mm:["Amplitudo","Periode","Fase","Harmonik"], points:[
   "Empat ciri siklus: AMPLITUDO (seberapa tinggi ayunannya), PERIODE (berapa lama satu putaran), FASE (lagi di bagian mana sekarang), HARMONIK (hubungan sama siklus lain). Kayak ombak.",
   "Phasing: nentuin TITIK AWAL siklus. Sering disepelekan padahal menentukan — tau periodenya 40 hari nggak ada gunanya kalau lo nggak tau hari ini lagi di hari ke berapa."]},
  {h:"Prinsip siklus", mm:["Summation","Harmonicity","Proportionality","Nominality","Translation"], points:[
   "Summation: pergerakan harga = PENJUMLAHAN beberapa siklus yang panjangnya beda. Makanya chart keliatan berantakan. Kalau beberapa lembah kebetulan barengan, tekanan turunnya jauh lebih besar.",
   "Harmonicity: siklus berdekatan berhubungan kelipatan bilangan bulat kecil, paling sering DUA KALI lipat. Jadi kalau lo nemu siklus 20 hari, wajar ada juga yang 40 dan 10.",
   "Proportionality: siklus berperiode lebih panjang cenderung beramplitudo lebih besar. Gunanya buat ngukur ekspektasi — jangan berharap siklus pendek ngasih gerakan sebesar siklus panjang.",
   "Nominality: ada sekumpulan panjang siklus BAKU yang berulang di banyak pasar (sekitar 20 hari, 40 hari, 20 minggu, 40 bulan). Mulai nyari dari angka-angka ini, jangan dari nol.",
   "Translation: right translation (puncak di paruh AKHIR) = tren besarnya kuat. Left translation (puncak di paruh AWAL) = lemah. Pergeserannya sering muncul MENDAHULUI perubahan tren."]},
  {h:"Siklus ekonomi", mm:["Kitchin 40 bln","Juglar 7-11 th","Kondratieff 50-60 th","Presidential"], points:[
   "Kitchin sekitar 40 bulan (3–4 tahun), dasarnya siklus persediaan: perusahaan numpuk stok pas optimis, ngurangin pas pesimis. Paling sering ketemu di data saham.",
   "Juglar sekitar 7–11 tahun (siklus investasi). Kondratieff sekitar 50–60 tahun (gelombang teknologi). Urutan dari pendek ke panjang: Kitchin, Juglar, Kondratieff.",
   "Presidential cycle AS: tahun KETIGA historis paling kuat (pemerintah ndorong ekonomi menjelang pemilu). Tapi sampelnya cuma belasan siklus, jadi perlakuin sebagai konteks, bukan hukum."]},
  {h:"Seasonality", mm:["January effect","Sell in May","Komoditas"], points:[
   "January effect: saham kecil cenderung unggul di awal tahun (penjualan buat pajak akhir tahun + penataan portofolio). Catatan penting: sejak anomali ini terkenal, efeknya banyak kekikis.",
   "Sell in May: November–April historis lebih tinggi dari Mei–Oktober. Datanya lumayan konsisten lintas pasar, TAPI penjelasan fundamentalnya lemah — kenapa harus Mei?",
   "Seasonality komoditas pertanian paling kokoh karena penyebabnya FISIK dan nyata: pola tanam dan panen. Beda kelas dari anomali musiman saham yang sering cuma kebetulan statistik."]},
  {h:"Teknik & keterbatasan", mm:["Detrending","Analisis spektral","Toleransi waktu"], points:[
   "Detrending (misal harga dikurangi MA-nya) misahin komponen tren biar siklusnya keliatan. TAPI hati-hati: penghalusan sendiri bisa MENCIPTAKAN gelombang semu (efek Slutzky-Yule).",
   "Analisis spektral/Fourier ngurai deret jadi komponen frekuensi, kayak ngurai suara jadi nada penyusunnya. Kendalanya: data pasar itu NGGAK stasioner, jadi siklusnya bisa ilang di periode lain.",
   "Risiko terbesar: panjang siklus bisa BERGESER, karena dia lahir dari kelakuan kolektif yang berubah. Toleransi waktunya sekitar 10–15 persen panjang siklus, plus wajib konfirmasi harga.",
   "Cara pakai yang sehat: siklus ngasih ZONA WAKTU rawan berbalik, eksekusi TETAP nunggu konfirmasi aksi harga. Siklus jawab kapan harus merhatiin, harga jawab kapan harus masuk."]}],
 jebakan:[
  "JEBAKAN: seasonality rawan banget data mining. Uji 12 bulan x ratusan saham, pasti ada yang keliatan signifikan. Syarat layak pakai: ada penjelasan ekonominya DAN bertahan di luar sampel.",
  "Siklus nekanin dimensi WAKTU, Elliott nekanin STRUKTUR BENTUK. Saling nutup kelemahan: Elliott lemah soal waktu, siklus lemah soal arah dan besaran."]},

{module:"cta-breadth", tagline:"Kesehatan internal pasar, sentimen, dan hubungan antar pasar.",
 sections:[
  {h:"Market breadth", mm:["AD Line","% di atas MA200","New high-low","McClellan","TRIN"], points:[
   "AD Line: selisih KUMULATIF jumlah saham naik dan turun. Ngitung tiap saham SETARA, nggak peduli kapitalisasinya — jadi dia mbongkar apa yang disembunyiin indeks.",
   "Divergensi bearish: indeks cetak puncak baru tapi AD Line nggak ikut = kenaikannya ditopang makin sedikit saham. Pondasinya keropos. Tapi jedanya bisa berbulan-bulan.",
   "Persentase saham di atas MA200: ngukur seberapa LUAS tren naiknya. Di atas 60–70 persen = sehat merata. Di bawah 30 persen = tren panjang banyak saham beneran patah.",
   "New high–new low index: makin banyak saham cetak titik terendah BARU sementara indeks masih naik = kerusakan di dalam sementara permukaannya tenang. Jarang berakhir tanpa penyesuaian harga.",
   "McClellan Oscillator: selisih dua EMA dari data advance-decline — semacam MACD-nya breadth. TRIN/Arms: rasio jumlah saham dibanding rasio volumenya. Catatan TRIN: angkanya KEBALIK dari intuisi, di bawah 1 itu bullish.",
   "Hindenburg Omen: banyak saham di KEDUA ekstrem barengan = pasar terbelah, sebagian terbang sebagian hancur. Jujur aja, sinyal ini sering salah — jangan dijadiin alasan tunggal."]},
  {h:"Sentimen", mm:["Put/call ratio","VIX","Survei bull-bear","Contrarian"], points:[
   "Put/call ratio sangat tinggi = ketakutan ekstrem, dan secara contrarian sering muncul deket dasar. TAPI ekstrem bisa makin ekstrem berminggu-minggu — ini indikator KONDISI, bukan pemicu.",
   "VIX: ekspektasi volatilitas yang TERSIRAT dari harga opsi indeks (sekitar 30 hari). Melonjak pas pasar jatuh karena orang rebutan proteksi. Dia ngukur BESARNYA gerakan, bukan ARAHNYA.",
   "Logika contrarian itu mekanis, bukan gaya-gayaan ngelawan kerumunan: kalau semua udah beli, duit mereka UDAH di pasar. Siapa lagi yang mau ndorong naik? Dan kalau ada berita buruk dikit, banyak yang harus jual.",
   "Indikator sentimen cuma informatif di posisi EKSTREM. Di level moderat nyaris nggak ada gunanya. Alat ini cuma ngomong beberapa kali setahun, sisanya diem — jangan dipelototin tiap hari."]},
  {h:"Intermarket (Murphy)", mm:["Saham","Obligasi","Komoditas","Valas"], points:[
   "Empat kelas aset (saham, obligasi, komoditas, valas) saling ngaruh lewat inflasi, suku bunga, dan siklus ekonomi. Sinyal dari satu pasar sering muncul DULUAN sebelum keliatan di pasar yang lo pantau.",
   "Rantai lingkungan inflasioner: komoditas naik → ekspektasi inflasi naik → yield naik → harga obligasi turun → valuasi saham kejepit, terutama saham pertumbuhan.",
   "Hubungan ini bisa BERUBAH di rezim deflasi atau krisis (obligasi jadi tempat ngungsi). Wajib diuji ulang berkala, jangan dianggap hukum permanen.",
   "Emas nguat barengan saham melemah = risk off, dana pindah ke aset aman. Berguna sebagai konfirmasi: kalau saham turun TAPI emas juga turun, itu cuma likuidasi biasa.",
   "Yield curve terbalik = salah satu penanda resesi paling terkenal, rekornya bagus. TAPI jedanya 6–24 bulan, dan selama jeda itu saham sering masih naik kenceng. Bener tapi telat itu tetep rugi."]},
  {h:"Rotasi & kekuatan relatif", mm:["Siklikal vs defensif","RRG","Small vs large cap"], points:[
   "Awal pemulihan: sektor siklikal (industri, material) mimpin, karena pasar ngeharga EKSPEKTASI bukan data sekarang. Akhir ekspansi: pindah ke defensif (konsumsi primer, kesehatan).",
   "Relative Rotation Graph: metain kekuatan relatif (sumbu datar) plus MOMENTUM-nya (sumbu tegak). Muter searah jarum jam lewat empat kuadran, jadi rotasi keliatan sebagai gerakan bukan cuma daftar peringkat.",
   "Small cap unggul = selera risiko lagi tinggi. Kepemimpinan pindah ke large cap defensif = orang mulai hati-hati. Ini ukuran selera risiko yang cukup jujur, dan sering bergeser sebelum indeksnya sendiri berubah.",
   "Di indeks berbobot kapitalisasi, segelintir raksasa bisa nyetir seluruh indeks. Ini relevan banget buat IHSG yang terkonsentrasi di beberapa bank dan konglomerasi — makanya breadth makin PENTING, bukan makin bisa diabaikan."]}],
 jebakan:[
  "KETERBATASAN UTAMA: peringatannya muncul JAUH sebelum titik balik, kadang berbulan-bulan. Cocok buat pengelola portofolio yang ngatur eksposur bertahap, bikin frustrasi buat trader jangka pendek.",
  "ATURAN PAKAI: breadth, sentimen, dan intermarket itu lapisan KONTEKS buat ngatur BESAR EKSPOSUR. Eksekusi tetep ngikut sinyal HARGA. Konteks ngatur ukuran, harga ngatur waktu."]},

{module:"cta-sistem", tagline:"Merancang, menguji, dan menjaga sistem tetap jujur.",
 sections:[
  {h:"Komponen sistem", mm:["Entry","Exit","Sizing","Semesta instrumen"], points:[
   "Sistem mekanis harus bisa dijalanin tanpa penilaian subjektif: aturan entry, exit, ukuran posisi, dan semesta instrumen. Yang paling sering dilupain dua yang terakhir.",
   "Sistem diskresioner ngasih keleluasaan baca konteks, tapi susah diuji dan gantung ke disiplin. Bukan berarti lebih jelek — banyak trader hebat itu diskresioner. Tapi jurnal yang rapi jadi pengganti backtest."]},
  {h:"Bias dalam backtest", mm:["Look ahead","Survivorship","Curve fitting","Data snooping"], points:[
   "Look ahead bias: pakai informasi yang BELUM ADA pas keputusan diambil. Contoh klasik: close hari itu jadi sinyal SEKALIGUS harga eksekusi — di dunia nyata lo butuh mesin waktu.",
   "Survivorship bias: ngabaikan emiten yang delisting, jadi lo cuma nguji saham yang kebetulan SELAMAT. Hasilnya bagus otomatis padahal strategi lo nggak ngapa-ngapain.",
   "Curve fitting: parameter disesuaiin terlalu rinci ke data historis sampai sistemnya ngapalin sejarah. Tandanya: parameter banyak, kinerja luar biasa, dan ambruk begitu digeser sedikit.",
   "Kualitas data (adjusted split dan dividen) itu PRASYARAT, dan sering disepelekan karena ngebosenin. Data keliru bikin sistem lo ngasih sinyal berdasarkan kejadian yang nggak pernah ada."]},
  {h:"Validasi", mm:["Out of sample","Walk forward","Monte Carlo","Sampel memadai"], points:[
   "Out of sample: uji di data yang NGGAK dipakai pas pengembangan. Kuncinya data itu harus disisihkan SEJAK AWAL — kalau disisihin belakangan setelah ngintip, udah nggak murni.",
   "Walk forward: optimasi di satu periode, uji di periode BERIKUTNYA, jendelanya digulirin maju. Lebih jujur karena niru cara lo beneran kerja — lo cuma punya data masa lalu pas nyetel parameter.",
   "Monte Carlo: ngacak ULANG urutan transaksi ribuan kali. Transaksinya sama, urutannya diubah. Sering bikin bangun — drawdown yang lo alami ternyata cuma hasil urutan yang kebetulan enak.",
   "Butuh ratusan transaksi lintas kondisi pasar biar kesimpulannya bermakna. Di bawah 100, angka lo masih dongeng.",
   "Parameter robust = kinerjanya tetep bagus di RENTANG nilai sekitarnya. Yang dicari DATARAN, bukan puncak sendirian di tengah lembah — puncak sendirian itu hampir selalu fatamorgana.",
   "Uji lintas instrumen dan pasar: logika yang sungguh berlaku mestinya jalan di mana-mana, meski mutunya beda. Kalau cuma bersinar di satu saham, kemungkinan besar dia ngapalin sejarah saham itu."]},
  {h:"Metrik kinerja", mm:["Profit factor","Sharpe","Sortino","Calmar","Max drawdown"], points:[
   "Profit factor = laba kotor dibagi rugi kotor. Di atas 1 untung, 1,5–2 bagus. Di atas 3? Curigai ada kesalahan uji. Kelebihannya dibanding win rate: dia ngitung BESARAN, bukan cuma jumlah.",
   "Sharpe: return berlebih per unit volatilitas TOTAL — masalahnya dia ngehukum lonjakan UNTUNG juga. Sortino cuma ngehukum sisi bawah, jadi lebih adil buat sistem trend following.",
   "Calmar: return tahunan dibagi maximum drawdown. Jawab pertanyaan paling praktis: buat tiap satu persen sakit, gue dapet berapa? Sering lebih berguna daripada Sharpe buat ritel.",
   "Max drawdown nguji apakah strategi sanggup DIJALANI, bukan cuma apakah dia untung. Perhatiin juga LAMA pemulihannya — drawdown 20 persen selama tiga tahun itu lebih nyiksa daripada 30 persen selama tiga bulan."]},
  {h:"Dari uji ke nyata", mm:["Slippage & komisi","Paper trading","Kill switch","Diversifikasi sistem"], points:[
   "Slippage dan komisi WAJIB dimasukin sejak baris pertama. Sistem frekuensi tinggi paling rentan — 800 transaksi setahun bisa berubah dari untung 34 persen jadi rugi 6 persen.",
   "Paper trading nguji aspek OPERASIONAL tanpa risiko modal: data feed telat, order ketolak, sinyal muncul pas lo rapat. Kelemahannya jujur: tanpa uang nyata, tekanan psikologisnya nol.",
   "Kill switch (batas drawdown atau kerugian beruntun) ditetapin SEBELUM sistem jalan. Kenapa sebelum? Karena pas drawdown-nya kejadian, lo bakal nawar sama diri sendiri.",
   "Degradasi kinerja setelah live itu NORMAL, dan biasanya gabungan tiga: overfitting, perubahan rezim pasar, dan biaya yang diremehkan. Kinerja live 20–30 persen di bawah backtest itu wajar.",
   "Kurva ekuitas backtest yang lurus nyaris tanpa drawdown = TANDA BAHAYA, bukan prestasi. Pasar nyata itu berantakan. Curigai kesempurnaan.",
   "Diversifikasi sistem: gabungin SUMBER KEUNGGULAN yang beda (trend following + mean reversion), bukan sekadar beda parameter. Ukurannya gampang: cek korelasi kurva ekuitasnya. Di atas 0,8 berarti lo cuma punya satu sistem."]}],
 jebakan:[
  "Trend following: win rate RENDAH (30–40 persen) tapi rasio untung/rugi tinggi. Mean reversion: banyak untung kecil, sesekali rugi SANGAT besar pas rezim berubah — skewness negatif yang risikonya sembunyi.",
  "Optimasi BOLEH secukupnya, asal divalidasi di luar sampel dan diuji ketahanannya. Yang ekstrem dua-duanya salah: yang bilang optimasi itu haram, dan yang nyoba ribuan kombinasi."]},

{module:"cta-portfolio", tagline:"Mengelola risiko di level portofolio, bukan cuma per transaksi.",
 sections:[
  {h:"Metode sizing", mm:["Fixed fractional","Kelly","Volatility based","Heat"], points:[
   "Fixed fractional: persentase TETAP dari ekuitas tiap transaksi. Efeknya otomatis dan elegan — pas ekuitas nyusut, posisi ikut ngecil sendiri. Ada rem alami buat rentetan rugi.",
   "Kelly criterion: proporsi optimal dari peluang menang dan rasio bayarannya. Tapi praktiknya orang pakai SETENGAH Kelly atau kurang — estimasi lo nggak pernah pasti, dan goyangan Kelly penuh itu ekstrem.",
   "Volatility based (pakai ATR): instrumen yang bergejolak dapet porsi lebih KECIL, biar sumbangan risikonya setara. Tanpa ini, satu posisi paling liar bakal nentuin hasil akhir seluruh portofolio.",
   "Total heat = jumlah risiko SEMUA posisi terbuka kalau kena stop barengan. Umumnya dibatasi 6–10 persen ekuitas. Banyak orang disiplin per transaksi tapi lupa ngitung totalnya."]},
  {h:"Ukuran risiko", mm:["VaR","Expected shortfall","Max drawdown","Stress test"], points:[
   "VaR 95%: rugi diperkirakan nggak lebih dari sekian di 95 persen kasus. Perhatiin yang DIA NGGAK BILANG: gimana di 5 persen sisanya? Bisa 10 persen, bisa 60 persen — dan di situ modal orang abis.",
   "Conditional VaR atau expected shortfall nutupin kelemahan itu — dia ngitung rata-rata rugi DI DALAM ekor terburuknya.",
   "Stress testing: kalau krisis 2008 atau guncangan pandemi terulang persis hari ini, portofolio gue jadi berapa? Bukan nebak masa depan, tapi ngukur ketahanan pakai skenario yang BENERAN pernah kejadian.",
   "Drawdown control: kurangi eksposur BERTAHAP pas drawdown nyentuh ambang tertentu. Kelemahannya jujur: kalau pasar berbalik cepat, pemulihan lo jadi lebih lambat karena posisi lagi kecil."]},
  {h:"Diversifikasi", mm:["Korelasi","Risk parity","Sektor","Jumlah posisi","Time diversification"], points:[
   "Korelasi cenderung NAIK mendekati satu pas krisis, jadi diversifikasi ilang tepat pas lo paling butuh. Penyebab mekanisnya jualan paksa dan margin call — orang jual apa aja yang bisa dijual.",
   "Risk parity: setarain KONTRIBUSI RISIKO, bukan nilai nominal. Portofolio 50:50 saham-obligasi itu sebenernya 90 persen risikonya dari saham — obligasinya cuma numpang nama.",
   "Concentration risk: 10 saham satu sektor = SATU taruhan besar yang dipecah sepuluh biar keliatan tersebar. Jebakan yang halus, karena di layar lo keliatan punya sepuluh nama beda.",
   "Manfaat diversifikasi nurun tajam setelah belasan posisi yang bener-bener beda karakter. Posisi ke-30 hampir nggak nambah perlindungan, tapi ongkosnya nyata: keunggulan lo jadi encer dan nggak kepantau.",
   "Time diversification: jalanin strategi di beberapa horizon biar nggak gantung ke satu rezim. Yang pendek panen pas pasar nyamping, yang menengah panen pas tren panjang."]},
  {h:"Pengelolaan posisi & eksposur", mm:["Pyramiding","Rebalancing","Beta","Hedging"], points:[
   "Pyramiding yang BENER: nambah posisi pas tren udah terbukti untung, ukuran tambahan MENGECIL tiap lapis, stop terus dinaikin. Yang SALAH: nambah pas lagi rugi, itu namanya averaging down.",
   "Rebalancing berkala ngembaliin bobot ke target biar profil risikonya terkendali. Catatan: di pasar yang lagi bertren kuat, rebalancing berkala justru motong pemenang terus — alternatifnya berbasis ambang.",
   "Beta portofolio = seberapa peka lo ke gerakan pasar. Yang menarik: beta bisa dikelola AKTIF pakai sinyal teknikal. Jadi lo nggak harus milih antara all-in atau cash, ada gradasi di tengah.",
   "Hedging (jual futures indeks atau beli put) ngeredam koreksi TANPA jual posisi utama. Kenapa nggak jual aja? Pajak, biaya transaksi, dan posisi yang susah dibangun ulang. Tapi ada ongkos premi."]},
  {h:"Prinsip bertahan", mm:["Ergodicity","Asimetri","Likuiditas","Dokumentasi"], points:[
   "Ergodicity: rata-rata seratus orang main TIDAK SAMA dengan hasil satu orang sepanjang waktu. Kalau LO yang habis, permainan lo BERAKHIR — lo nggak ikut nikmatin rata-ratanya. Bertahan dulu, baru optimal.",
   "Leverage berlebihan NURUNIN pertumbuhan majemuk, meski rata-rata return-nya naik. Sebabnya volatilitas ngegerus rata-rata geometris. Ada titik di mana lebih banyak leverage = lebih sedikit duit.",
   "Profil asimetris: potensi untung jauh ngelewatin risiko per ide. Ini lebih nentuin daripada win rate — sistem tetep untung meski lebih sering salah, asal yang bener untungnya gede banget.",
   "Risiko likuiditas: posisi kegedean dibanding volume harian bikin stop loss kehilangan makna — pas mau keluar, order lo sendiri yang ndorong harga jatuh. Batasannya 1–5 persen volume harian.",
   "Kebijakan risiko TERTULIS jadi pengikat disiplin pas pasar bergejolak. Pas panik, otak lo nggak bisa dipercaya — yang dipercaya dokumen yang lo tulis pas masih waras."]}],
 jebakan:[
  "HAFALIN: pulih dari drawdown 50 persen butuh kenaikan 100 persen. Rugi 40 butuh 67, rugi 70 butuh 233.",
  "JEBAKAN: batas risiko harus ditetapin di level PORTOFOLIO, bukan cuma per transaksi. Sepuluh posisi risiko 1 persen itu total heat 10 persen."]},

{module:"cta-aset", tagline:"Menyesuaikan metode teknikal ke karakter tiap kelas aset.",
 sections:[
  {h:"Obligasi & suku bunga", mm:["Harga vs yield","Kurva imbal hasil","Seri benchmark"], points:[
   "Harga obligasi dan yield BERBANDING TERBALIK, kayak jungkat-jungkit. Wajib jelas yang digrafikkan harga atau yield — dua-duanya ngasih chart yang persis kebalik, dan salah baca bikin bullish jadi bearish.",
   "Analisis kurva: grafikkan SELISIH antar tenor (misal 10 tahun dikurangi 2 tahun) sebagai deret sendiri. Selisih ini punya tren, support resistance, dan pola — dan dia yang bawa informasi soal ekspektasi pertumbuhan.",
   "Di Indonesia, yang umum dianalisis itu YIELD seri acuan yang likuid, misalnya tenor 10 tahun. Support resistance di yield sering jadi rujukan penting, termasuk buat pelaku pasar saham.",
   "Kurva CURAM bagus buat bank: mereka minjem pendek (tabungan) dan minjemin panjang (KPR), jadi marginnya melebar. Kurva datar atau terbalik bikin margin kejepit."]},
  {h:"Valuta asing", mm:["Base/quote","24 jam","Tick volume","Carry trade"], points:[
   "EURUSD naik = EURO yang nguat. Aturan cepetnya: angka naik berarti mata uang yang di DEPAN (base) yang menguat. Sering ketuker, dan salahnya fatal karena lo buka posisi kebalik.",
   "Valas 24 jam dan terdesentralisasi, jadi gap antar sesi JARANG. Konsekuensi lain yang sering dilupain: nggak ada volume terpusat, jadi analis pakai tick volume — yang sebenernya ngitung jumlah perubahan harga, bukan lot.",
   "Carry trade: pinjem mata uang bunga rendah, taruh di bunga tinggi. Untung kecil tapi rutin — sampai suatu hari semua orang nutup posisi BARENGAN dan kurs gerak super cepat ngelawan lo. Istilahnya ngutip receh di depan mesin giling.",
   "Buat investor asing di saham rupiah: kurs ngaruh ke hasil dalam mata uang asal mereka. IHSG naik 12 persen tapi rupiah anjlok 20 persen = mereka RUGI. Dan arus dana asing ngikutin chart dolar, bukan chart lokal."]},
  {h:"Komoditas & berjangka", mm:["Contango","Backwardation","Open interest","Continuous contract"], points:[
   "Contango: harga berjangka LEBIH MAHAL dari spot (ongkos gudang, asuransi, bunga). Efeknya buat posisi beli: tiap rollover lo jual murah beli mahal. Ini alesan banyak ETF komoditas kinerjanya kalah jauh dari komoditasnya.",
   "Backwardation: spot LEBIH MAHAL dari berjangka, artinya orang rebutan barang fisik sekarang juga. Buat posisi beli, tiap rollover malah untung — kebalikan dari contango.",
   "Open interest = kontrak yang masih dipegang orang (beda dari volume yang ngitung aktivitas harian). Harga naik + volume naik + OI naik = paket lengkap, tren kuat yang ditopang duit BARU.",
   "Harga naik tapi OI TURUN = itu short covering, yang jual lagi kabur. Naiknya bisa tajem tapi tenaganya cepet abis — begitu yang nyangkut keluar semua, nggak ada lagi yang beli.",
   "Continuous contract nyambung kontrak yang jatuh tempo. METODE penyambungannya ngaruh ke level historis — support yang lo lihat di 2019 bisa jadi angka hasil hitungan, bukan harga yang pernah diperdagangin.",
   "Likuiditas ngumpul di kontrak bulan TERDEKAT yang aktif. Analisis di kontrak sepi ngasih chart penuh celah dengan level yang nggak mewakili kesepakatan siapa pun.",
   "COT report: commercial (produsen dan pengguna barang fisik, mereka hedging) versus large speculator. Posisi spekulan yang EKSTREM = indikasi contrarian. Tapi datanya telat seminggu, jadi buat kerangka bukan pemicu.",
   "Spread trading: grafikkan SELISIH dua kontrak sebagai instrumen sendiri. Volatilitasnya jauh lebih rendah karena risiko arah pasar di dua kaki saling meniadakan."]},
  {h:"Derivatif & opsi", mm:["Time decay","Implied volatility","Horizon pendek"], points:[
   "Nilai opsi dipengaruhi WAKTU (theta) dan VOLATILITAS TERSIRAT (vega), bukan cuma arah. Makanya di opsi, bener arah doang nggak cukup — lo harus bener arah, bener BESARNYA, dan bener WAKTUNYA.",
   "IV sangat tinggi menjelang peristiwa = premi MAHAL, jadi lo butuh gerakan lebih besar dari ekspektasi buat untung. Habis peristiwanya lewat, IV anjlok dan nilai opsi kegerus meski arahnya bener. Namanya volatility crush.",
   "Horizon derivatif terbatas (ada tanggal mati), jadi ketepatan WAKTU sangat menentukan. Justru di situ teknikal makin relevan, bukan makin nggak berguna."]},
  {h:"Emas, kripto & reksa dana", mm:["Emas vs USD","Kripto 24/7","ETF vs reksa dana"], points:[
   "Emas berlawanan arah sama dolar dan suku bunga riil. Logikanya: emas nggak ngasih bunga, jadi kalau obligasi ngasih 5 persen riil, buat apa nyimpen batu kuning? Tapi hubungan ini bisa putus pas krisis geopolitik.",
   "Kripto jalan 24/7 termasuk akhir pekan, jadi konsep gap hampir nggak berlaku dan batas hari itu relatif. Volatilitas tinggi = stop harus lebih LEBAR, dan supaya rugi rupiahnya sama, ukuran posisi dikecilin.",
   "Volume kripto nyebar lintas bursa dan sebagian pernah ketahuan DIGELEMBUNGIN. Volume palsu itu lebih bahaya daripada nggak ada volume sama sekali — indikator lo ngasih sinyal dari data karangan.",
   "ETF punya OHLC lengkap plus volume, jadi bisa dianalisis persis kayak saham. Reksa dana konvensional cuma punya satu NAB per hari — nggak ada high, low, apalagi volume. Setengah kotak peralatan lo nggak kepakai.",
   "Saham komoditas biasanya ngikutin harga komoditas dasarnya. Jadi kalau nyimpang, itu INFORMASI: bisa ekspektasi laba berubah, restrukturisasi utang, atau aksi korporasi. Divergensi itu pertanyaan, bukan jawaban."]}],
 jebakan:[
  "PRINSIP teknikal berlaku universal, tapi PARAMETER-nya (periode, jarak stop, sizing) WAJIB dikalibrasi ulang per kelas aset. Pakai setelan saham di kripto itu resep kena stop terus."]},

{module:"cta-statistik", tagline:"Mengukur dan menguji, bukan sekadar merasa.",
 sections:[
  {h:"Volatilitas", mm:["Standar deviasi","Akar waktu","Clustering"], points:[
   "Volatilitas historis = standar deviasi RETURN (biasanya log return) yang disetahunkan. Kenapa pakai return bukan harga? Karena goyang 100 perak di saham 500 itu gila, di saham 50.000 nggak kerasa.",
   "Penyetahunan pakai AKAR waktu: volatilitas harian dikali akar 252. Volatilitas harian 1 persen jadi sekitar 15,9 persen setahun. Kenapa akar? Karena risiko nggak numpuk rapi — naik turun saling makan.",
   "Volatility clustering: periode bergejolak cenderung diikuti bergejolak lagi, kayak cuaca. Dasar model ARCH/GARCH. Manfaat praktisnya: pas volatilitas naik, kecilin posisi dan lebarin stop."]},
  {h:"Bentuk distribusi", mm:["Skewness","Kurtosis","Fat tails"], points:[
   "Skewness negatif: ekor KIRI lebih panjang, rugi ekstrem lebih sering. Ciri khas pasar saham — naiknya nyicil, turunnya ngebut.",
   "Kurtosis tinggi (leptokurtosis) alias fat tails: kejadian ekstrem jauh lebih sering daripada tebakan kurva normal. Yang katanya mustahil itu di pasar terjadi tiap beberapa tahun.",
   "Efeknya: model risiko berbasis asumsi normal MEREMEHKAN potensi kerugian besar, dan salahnya persis di bagian yang paling nentuin kelangsungan portofolio. Ini yang bikin LTCM kolaps."]},
  {h:"Hubungan antar deret", mm:["Korelasi","Beta","Spurious","Autokorelasi"], points:[
   "Korelasi rentangnya -1 sampai +1. Dua catatan: dia cuma nangkep hubungan LURUS (buta sama yang melengkung), dan dia BUKAN sebab akibat.",
   "Beta = KEMIRINGAN regresi return aset terhadap return pasar (bukan korelasinya). Jawab: kalau pasar gerak 1 persen, saham ini biasanya gerak berapa? Dan beta itu berubah-ubah, jangan pakai angka tiga tahun lalu.",
   "Spurious correlation: dua deret yang sama-sama bertren bakal keliatan berkorelasi padahal nggak nyambung. Obatnya: analisis di RETURN, bukan level harga. Trennya hilang, korelasi bodongnya ikut hilang.",
   "Autokorelasi POSITIF = efek momentum (hari ini naik, besok condong naik) — bukti statistik buat premis tren. NEGATIF = mean reversion. Cek dulu instrumennya masuk kubu mana, baru pilih strateginya."]},
  {h:"Alat analisis", mm:["Regresi & R²","Z score","Rolling window","Hurst"], points:[
   "Regresi linear = garis tren berbasis kuadrat terkecil. Ngilangin debat soal narik garis — hasilnya pasti sama siapa pun yang ngitung. Dasar dari linear regression channel.",
   "R kuadrat = nilai rapor buat garis tren lo, rentang 0 sampai 1. Mendekati 1 artinya harga nurut banget. Gunanya praktis: kalau R kuadrat rendah, jangan pakai strategi ngikut tren di situ.",
   "Z score: berapa standar deviasi sebuah nilai menyimpang dari rata-rata. Bikin hal yang beda skala jadi bisa dibandingin. Dan ini rahasia Bollinger Bands — pita atas bawahnya sebenernya cuma Z score plus minus 2.",
   "Rolling window: itung statistik di jendela yang geser terus. Ngitung korelasi sekali buat sepuluh tahun itu kayak ngitung rata-rata suhu Jakarta sama Puncak — angkanya bener tapi nggak ngegambarin apa pun.",
   "Hurst exponent: di atas 0,5 trending (keras kepala), tepat 0,5 acak, di bawah 0,5 mean reverting (plin-plan). Semacam tes kepribadian instrumen — tes dulu sebelum milih senjata.",
   "Stasioner artinya aturan mainnya nggak berubah. Harga jelas NGGAK stasioner (rata-rata 2010 dan 2025 beda jauh), tapi RETURN-nya jauh lebih stasioner. Makanya analisis kuantitatif dikerjain di return."]},
  {h:"Pengujian yang jujur", mm:["Signifikansi","Benchmark","Geometris vs aritmatik","Median"], points:[
   "Uji signifikansi nilai apakah hasilnya mungkin muncul karena kebetulan. WAJIB dikoreksi sesuai jumlah strategi yang diuji — uji 400 kombinasi, pasti ada yang keliatan dewa.",
   "SELALU bandingin sama tolok ukur sederhana (beli lalu tahan, atau sinyal acak). Indikator lo ngasih 22 persen — bagus nggak? Nggak ada yang tau sampai lo tau IHSG tahun itu ngasih berapa.",
   "Rata-rata GEOMETRIS buat return majemuk. Aritmatik SELALU ngelebih-lebihin pas ada fluktuasi: +50 persen terus -50 persen itu rata-rata aritmatiknya 0, padahal lo rugi 25 persen.",
   "Median lebih tahan outlier — laporin BARENG rata-rata. Sembilan orang rugi satu orang jackpot, rata-ratanya bisa keliatan untung padahal 90 persen buntung."]}],
 jebakan:[
  "HAFALIN: volatilitas disetahunkan pakai AKAR 252, bukan dikali 252. Sering jadi soal hitungan.",
  "Statistik bisa ngasih rasa pasti yang nyesatin kalau asumsinya dilanggar. Dia ngasih jawaban berdasarkan asumsi yang LO kasih — asumsinya ngaco, jawabannya ikut ngaco, bedanya sekarang lo salah dengan penuh keyakinan."]}
]);
