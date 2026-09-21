/* Study notes + mind map — RTA bagian 2 */
TD.registerNotes([
{module:"rta-indikator", tagline:"Alat turunan harga: tren, momentum, volatilitas, volume.",
 sections:[
  {h:"Moving average", mm:["SMA vs EMA :: SMA anggap semua hari sama penting, EMA kasih bobot lebih ke data terbaru. Trader EMA, investor SMA.","Periode :: Makin panjang makin halus tapi makin telat. Nggak ada yang cepat sekaligus akurat.","Golden/death cross :: MA pendek motong MA panjang. TELAT by design — pas muncul, harga sering udah gerak jauh.","Whipsaw :: Sinyal bolak-balik di pasar sideways. Bukan indikatornya rusak, cuma dipakai di tempat yang salah."], points:[
   "SMA: semua hari dianggap sama pentingnya. EMA: data terbaru dikasih bobot lebih gede, jadi lebih cepet nanggepin. Trader cenderung EMA, investor cenderung SMA.",
   "Makin panjang periodenya: makin halus, sinyal palsu berkurang, tapi makin telat. Nggak ada yang cepet sekaligus akurat — yang nentuin pilihan lo itu horizon posisi.",
   "Golden cross: MA pendek motong ke ATAS MA panjang (mis. MA50 x MA200). Death cross kebalikannya. Dua-duanya TELAT by design — pas muncul, harga sering udah gerak jauh.",
   "MA200 kira-kira satu tahun bursa, jadi garis pemisah kasar bullish vs bearish. Yang bikin dia nyata bukan matematikanya, tapi jutaan mata yang mantau angka yang sama.",
   "Kelemahan crossover: whipsaw di pasar sideways — sinyal bolak-balik yang semuanya rugi. Bukan indikatornya rusak, cuma salah tempat. Obatnya penyaring kayak ADX di bawah 20 berarti abaikan."]},
  {h:"MACD & momentum", mm:["MACD 12-26-9 :: Garis MACD = EMA12 dikurangi EMA26, sinyal = EMA9 dari MACD. Yang diukur momentum, bukan harga.","Histogram :: Jarak MACD ke garis sinyal. Memendek artinya masih positif tapi percepatannya berkurang.","Momentum/ROC :: Momentum dalam poin, ROC dalam persen. Persen bikin bisa dibandingin antar instrumen.","Divergensi :: Ngukur TENAGA, bukan ARAH. Bisa bertahan berbulan-bulan di tren kuat, jadi peringatan bukan sinyal jual."], points:[
   "MACD line = EMA12 dikurangi EMA26; signal line = EMA9 dari MACD; histogram = selisih keduanya. Intinya dia ngukur JARAK dua EMA, jadi yang diukur momentum bukan harga.",
   "Sinyal beli: MACD motong ke atas signal line. Posisi terhadap garis NOL penting: di atas nol = searah tren (lebih bertahan), di bawah nol = lebih dini tapi lebih sering gagal.",
   "Histogram memendek = momentum masih positif tapi PERCEPATANNYA berkurang. Kayak mobil yang masih maju tapi pedal gasnya mulai dilepas. Peringatan dini, bukan sinyal jual.",
   "Momentum = harga sekarang dikurangi harga n periode lalu (dalam poin). ROC = versi persen, jadi bisa dibandingin antar instrumen dan antar periode.",
   "Hidden divergence (harga higher low, indikator lower low) itu sinyal TERUSAN, bukan pembalikan — struktur harga masih kuat, cuma momentumnya sempet dalem. Dipakai nyari entry searah tren."]},
  {h:"Oscillator", mm:["RSI 14 :: Rentang 0-100, periode default Wilder. Overbought artinya lagi KUAT, bukan kemahalan.","Stochastic :: Close hari ini ada di posisi mana dalam rentang high-low? Persen D = rata-rata persen K.","Williams %R :: Skala -100 sampai 0, pada dasarnya stochastic dibalik. Ngukur hal yang sama.","CCI :: Simpangan harga dari rata-rata statistiknya. Rentangnya nggak kebatas, ekstrem di sekitar plus minus 100."], points:[
   "RSI: rentang 0–100, periode default Wilder = 14 (dari bukunya tahun 1978). Ambang klasik 70 (overbought) dan 30 (oversold).",
   "PENTING: overbought artinya lagi KUAT, bukan kemahalan. Di tren bertenaga RSI bisa nempel di atas 70 berminggu-minggu sambil harga terus naik. Wilder sendiri pakai 70 sebagai peringatan, bukan pemicu.",
   "Stochastic jawab: close hari ini ada di posisi mana dalam rentang high-low beberapa hari terakhir? %D = rata-rata %K (lebih halus). Slow stochastic = versi yang dihaluskan lagi.",
   "Williams %R: skala -100 sampai 0, pada dasarnya stochastic dibalik. CCI: simpangan harga dari rata-rata statistiknya, rentangnya nggak kebatas, ekstrem di sekitar plus minus 100.",
   "Divergensi bullish: harga bikin lower low, oscillator bikin higher low. Artinya masih turun tapi tenaganya abis — kayak bola yang mantul makin pendek."]},
  {h:"Volatilitas", mm:["ATR :: Rata-rata true range, dan dia MASUKIN gap. Dipakai nentuin jarak stop yang nyesuain volatilitas.","Bollinger :: SMA20 plus minus 2 standar deviasi. Lebar pitanya otomatis nyesuain volatilitas.","Keltner :: Pakai ATR, bukan standar deviasi, jadi lebih halus. Pita Bollinger yang masuk ke dalamnya = squeeze ekstrem.","Squeeze :: Volatilitas rendah dan bakal meledak. Tapi NOL petunjuk soal arah — alarm siap-siap, bukan panah."], points:[
   "ATR: rata-rata true range, dan keunggulannya dia MASUKIN gap antar periode. Dipakai buat jarak stop dan ukuran posisi yang nyesuain volatilitas — jauh lebih masuk akal daripada stop 5 persen buat semua saham.",
   "Bollinger Bands: SMA20 plus minus 2 standar deviasi. Yang bikin pinter: lebar pitanya OTOMATIS nyesuain volatilitas — melebar pas liar, nyempit pas tenang.",
   "Nyentuh pita atas = harga relatif tinggi dibanding kebiasaannya sendiri. BUKAN sinyal jual. Di tren kuat harga bisa jalan nempel pita atas berminggu-minggu, namanya walking the bands.",
   "Squeeze (pita nyempit) = volatilitas lagi rendah dan bakal meledak. Tapi dia NOL petunjuk soal ARAH. Squeeze itu alarm siap-siap, bukan panah penunjuk.",
   "Keltner Channel pakai ATR (bukan standar deviasi), jadi lebih halus. Trik lanjutan: pita Bollinger yang masuk ke DALAM Keltner = squeeze ekstrem."]},
  {h:"Volume & tren", mm:["OBV :: Volume ditambah pas naik, dikurangi pas turun, kumulatif. OBV naik sementara harga datar = ada yang ngumpulin.","A/D Line :: Posisi close dalam rentang dikali volume. Lebih peka dari OBV yang cuma peduli naik atau turun.","MFI :: RSI yang dikasih bobot volume. Divergensinya lebih dipercaya karena udah masukin bukti partisipasi.","VWAP :: Harga rata-rata dibobot volume. Jadi tolok ukur eksekusi institusi, makanya order beneran numpuk di situ.","ADX :: Ngukur KEKUATAN tren tanpa arah. Di bawah 20 = nggak trending. Gunanya sebagai penyaring, bukan sinyal.","SAR :: Titik trailing stop yang makin rapat. Bagus di tren jelas, bencana di sideways.","Ichimoku :: Lima komponen, sistem lengkap dalam satu tampilan. Support-nya berupa ZONA, dan digambar 26 periode ke depan."], points:[
   "OBV (Granville): volume DITAMBAH pas harga naik, DIKURANGI pas turun, kumulatif. Idenya volume mendahului harga — OBV naik sementara harga datar artinya ada yang ngumpulin diam-diam.",
   "A/D Line: posisi close di dalam rentang dikali volume — lebih peka daripada OBV yang cuma peduli naik atau turun. MFI: RSI yang dikasih bobot volume, pakai typical price.",
   "VWAP: harga rata-rata dibobot volume. Jadi TOLOK UKUR kualitas eksekusi institusi, makanya banyak algoritma diprogram transaksi di sekitar situ — level ini beneran ada order-nya.",
   "ADX ngukur KEKUATAN tren tanpa peduli arahnya. Di bawah 20 = nggak trending, di atas 25 = tren layak diikuti. Arahnya dari DI+ dan DI-. Gunanya sebagai penyaring: alat mana yang boleh dipakai.",
   "Parabolic SAR: titik trailing stop yang makin lama makin rapat. Bagus di tren jelas, bencana di sideways — titiknya bolak-balik dan lo kena stop berkali-kali.",
   "Ichimoku lima komponen: Tenkan, Kijun, Senkou A dan B (kumo alias awan), Chikou. Harga di atas awan = bullish, dan awannya jadi ZONA support — tebal artinya kuat, tipis artinya gampang jebol."]}],
 jebakan:[
  "JEBAKAN FAVORIT PENGUJI: RSI di atas 70 pada tren kuat BUKAN sinyal jual otomatis. Overbought artinya kuat, bukan mahal.",
  "JEBAKAN: RSI + stochastic + Williams %R itu tiga versi dari hal yang SAMA. Mereka hampir selalu sepakat, jadi rasa yakinnya PALSU — satu bukti diulang tiga kali.",
  "JEBAKAN: ideal 2–4 indikator dari kategori BEDA (tren, momentum, volatilitas, volume). Dan catat: RSI BUKAN bagian Ichimoku."]},

{module:"rta-plan", tagline:"Mengubah analisis jadi keputusan yang risikonya terukur.",
 sections:[
  {h:"Anatomi rencana", mm:["Entry :: Di harga berapa masuk, dan atas dasar apa. Bukan karena takut ketinggalan.","Stop loss :: Titik di mana analisis lo kebukti SALAH. Ditetapin sebelum posisi dibuka, pas kepala masih adem.","Target :: Di harga berapa keluar untung. Diuji dulu ke level historis di jalurnya, jangan cuma hasil ngukur.","Ukuran posisi :: Komponen yang paling sering dilupain. Padahal ini yang nentuin satu kesalahan jadi wajar atau fatal."], points:[
   "Empat komponen minimum: entry, stop loss, target, ukuran posisi. Kurang satu aja itu bukan rencana, itu harapan. Yang paling sering dilupain: ukuran posisi.",
   "Stop loss = titik di mana analisis lo kebukti SALAH, ditetapin SEBELUM posisi dibuka. Gunanya mindahin keputusan ke waktu pas kepala masih adem.",
   "Stop ditaruh di level teknikal yang mbatalin skenario. Penyesuaian ke batas risiko lewat UKURAN POSISI, bukan dengan mepetin stop. Urutannya: stop dari chart duluan, ukuran ngikut.",
   "Time stop: keluar kalau dalam kurun tertentu harga nggak gerak sesuai skenario. Rugi nol, tapi modal lo nganggur — dan itu tetep ongkos."]},
  {h:"Position sizing", mm:["Risiko 1-2% :: Dengan 2 persen, kalah 10 kali beruntun cuma gerus 18 persen. Dengan 10 persen, modal tinggal 35 persen.","Rumus lot :: Jumlah lembar = (modal x persen risiko) dibagi (harga beli dikurangi stop). Wajib hafal, sering jadi soal.","Volatilitas :: Saham liar butuh stop lebih lebar, jadi lembarnya lebih sedikit. Diukur pakai ATR, bukan persen seragam.","Heat :: Total risiko SEMUA posisi kalau kena stop barengan. Umumnya dibatasi 6-10 persen ekuitas."], points:[
   "Risiko per transaksi yang umum: 1–2% modal. Dengan 2%, kalah 10 kali beruntun cuma ngegerus sekitar 18% — masih bisa bangkit. Dengan 10%, modal lo tinggal 35%.",
   "Rumus wajib hafal: jumlah lembar = (modal x persen risiko) dibagi (harga beli dikurangi stop loss).",
   "Contoh: modal 100 juta, risiko 1% = 1 juta. Beli 2.000 stop 1.900 (risiko 100 per lembar) = 1 juta dibagi 100 = 10.000 lembar alias 100 lot.",
   "Total heat (jumlah risiko SEMUA posisi terbuka) umumnya dibatasi 6–10% ekuitas. Banyak orang disiplin di risiko per transaksi tapi lupa ngitung totalnya."]},
  {h:"Rasio & expectancy", mm:["Risk/reward :: Beli 1.000 stop 950 target 1.150 = 1:3. Tapi rasio doang nggak cukup, harus dikali peluangnya.","Expectancy :: (peluang menang x rata-rata untung) dikurangi (peluang kalah x rata-rata rugi). Angka paling penting.","Win rate :: Sering bener nggak sama dengan untung. Win rate 92 persen bisa rugi kalau kalahnya jauh lebih besar.","Drawdown :: Rugi 50 persen butuh untung 100 persen buat pulih. Ketimpangan ini alasan nyegah lebih berharga dari ngejar."], points:[
   "Risk/reward: beli 1.000, stop 950, target 1.150 = risiko 50, potensi 150, jadi 1:3. Tapi rasio doang nggak cukup — harus dikali peluang keberhasilannya.",
   "Expectancy = (peluang menang x rata-rata untung) dikurangi (peluang kalah x rata-rata rugi). Harus positif. Ini angka paling penting dan paling jarang diitung orang.",
   "Contoh: win 40%, untung 3R, rugi 1R = (0,4 x 3) dikurangi (0,6 x 1) = 0,6R per transaksi. Tetep untung meskipun 6 dari 10 transaksi RUGI.",
   "Win rate 40% butuh minimal rasio 1:2 biar expectancy positif. Buktiin: (0,4 x 2) dikurangi (0,6 x 1) = 0,2R. Tipis, dan itu belum ngitung biaya transaksi.",
   "Drawdown 50% butuh naik 100% buat pulih. Rugi 40% butuh 67%, rugi 70% butuh 233%. Ketimpangan ini alasan kenapa NYEGAH drawdown dalam jauh lebih bernilai daripada ngejar return tinggi."]},
  {h:"Pengelolaan posisi", mm:["Trailing stop :: Ngunci untung sambil ngasih RUANG tren lanjut. Terlalu rapat kelempar, terlalu longgar nyerahin untung.","Scaling out :: Realisasi bertahap di beberapa target. Nyelesain dilema antara ambil untung cepat versus biarin lari.","Pyramiding :: Nambah posisi pas tren UDAH untung, ukuran tambahan mengecil, stop dinaikin.","Averaging down :: Nambah duit ke ide yang udah kebukti salah. Beda dari scaling in yang direncanain dari awal."], points:[
   "Trailing stop ngunci untung sambil ngasih RUANG buat tren lanjut. Pakai lembah terakhir atau kelipatan ATR. Terlalu rapat = kelempar duluan, terlalu longgar = nyerahin balik untung.",
   "Stop cuma digeser SEARAH keuntungan, NGGAK PERNAH diperlebar. Kalau stop bisa diperlebar, batas rugi lo jadi nggak pasti, dan seluruh hitungan ukuran posisi kehilangan dasarnya.",
   "Scaling out: realisasi bertahap di beberapa target, sisanya jalan pakai trailing stop. Nyelesain dilema antara ambil untung cepat versus biarin lari.",
   "Averaging down tanpa rencana itu bahaya: lo nambah duit ke ide yang udah KEBUKTI salah. Bedain dari scaling in yang direncanakan dari awal dengan level dan batas jelas.",
   "Gap risk: harga bisa BUKA ngelewatin stop lo. Stop nggak jamin harga eksekusi, dia cuma jamin order-nya jalan. Makanya ukuran posisi jadi lapis pertahanan kedua."]},
  {h:"Disiplin & evaluasi", mm:["Jurnal :: Misahin kualitas KEPUTUSAN dari kualitas HASIL. Untung karena hoki itu keputusan buruk yang dikasih hadiah.","Checklist :: Maksa lo lewatin daftar yang sama tiap kali. Ketahuan kalau lagi entry cuma karena takut ketinggalan.","Batas rugi :: Mutusin rantai revenge trading secara paksa, pas lo paling nggak sadar kalau lagi ngaco.","Bias :: Disposition effect bikin rugi ditahan dan untung dipotong. Akarnya rugi terasa dua kali lebih sakit."], points:[
   "Jurnal misahin kualitas KEPUTUSAN dari kualitas HASIL. Transaksi bisa untung karena hoki padahal keputusannya buruk — kalau lo cuma nilai dari hasil, lo belajar hal yang salah.",
   "Checklist pra transaksi maksa lo lewatin daftar yang sama tiap kali, jadi ketahuan kalau lagi mau entry cuma karena takut ketinggalan.",
   "Batas kerugian harian/mingguan mutusin rantai revenge trading secara paksa, tepat pas lo paling nggak sadar kalau lagi ngaco.",
   "Disposition effect: nahan rugi kelamaan, realisasi untung kecepetan. Persis kebalikan dari cut loss short let profit run. Akarnya loss aversion — rugi terasa dua kali lebih sakit daripada untung yang sama.",
   "Evaluasi sistem butuh ratusan transaksi biar signifikan. Di bawah 100, angka lo masih dongeng. Ini yang bikin orang gonta-ganti sistem terus.",
   "Korelasi antar posisi: 5 saham bank masing-masing risiko 1% itu berperilaku kayak SATU posisi 5%. Diversifikasi yang cuma ganti nama tapi sektornya sama itu ilusi."]}],
 jebakan:[
  "WAJIB HAFAL: rumus jumlah lot dan expectancy. Hampir selalu keluar dalam bentuk soal hitungan.",
  "JEBAKAN: leverage berlebihan NURUNIN pertumbuhan majemuk jangka panjang, meskipun rata-rata return-nya naik. Sebabnya volatilitas ngegerus rata-rata geometris.",
  "Risk of ruin dipengaruhi tiga hal: besar risiko per transaksi, win rate, dan rasio untung/rugi. Yang paling bisa lo kendaliin: yang pertama."]},

{module:"rta-riset", tagline:"Menyampaikan analisis secara profesional dan beretika.",
 sections:[
  {h:"Struktur laporan", mm:["Ringkasan dulu :: Piramida terbalik — kesimpulan di depan, uraian di belakang. Banyak pembaca cuma baca paragraf pertama.","Level kunci :: Entry, stop, target. Tanpa level pembatalan, pembaca nggak bisa ngelola risikonya sama sekali.","Horizon :: Wajib eksplisit. Saham bisa bearish harian tapi bullish mingguan, dan dua-duanya bener.","Grafik beranotasi :: Cantumin instrumen, periode, skala. Tiap garis harus nyambung ke kesimpulan, kalau nggak hapus."], points:[
   "Komponen wajib: identitas instrumen, periode data, kesimpulan, level kunci, disclaimer. Periode data penting — kesimpulan dari chart 6 bulan beda total dari chart 5 tahun.",
   "Rekomendasi wajib ada entry, stop loss atau level pembatalan, dan target. Tes cepat buat nilai riset siapa pun: ada nggak kalimat kalau tembus sekian skenario ini batal? Kalau nggak ada, itu jualan.",
   "Susunannya piramida terbalik: ringkasan pandangan dan rekomendasi DULUAN, baru uraian pendukung. Pembaca riset itu sibuk, banyak yang cuma baca paragraf pertama.",
   "Horizon waktu WAJIB eksplisit — saham bisa bearish harian tapi bullish mingguan, dan dua-duanya bener. Tanpa keterangan horizon, pembaca pasang stop di tempat yang ngawur.",
   "Grafik wajib nyantumin instrumen, periode, skala, dan anotasi level yang dibahas. Aturannya: tiap garis yang lo gambar harus ada hubungannya sama kesimpulan. Kalau nggak, hapus."]},
  {h:"Bahasa & probabilitas", mm:["Bersyarat :: Selama di atas X skenario Y berlaku, di bawah itu batal. Jujur sekaligus bisa ditindaklanjuti.","Bukan kepastian :: Teknikal kerja di ranah peluang. Ngejanjiin hasil itu pelanggaran etika, lisan maupun tertulis.","Jelaskan istilah :: Pembaca beragam. Nulis buat mengesankan itu yang bikin amatir, bukan nulis buat dipahami."], points:[
   "Rumuskan secara BERSYARAT: selama bertahan di atas level X, skenario Y berlaku; di bawah itu batal. Pembaca jadi tau apa yang harus dipantau.",
   "Analisis teknikal kerja di ranah PELUANG, bukan kepastian. Ngejanjiin hasil itu pelanggaran etika, dan jaminan lisan sama beratnya sama yang tertulis.",
   "Istilah teknis yang spesifik dijelasin singkat. Nulis buat mengesankan itu yang bikin amatir, bukan nulis buat dipahami."]},
  {h:"Etika & benturan kepentingan", mm:["Disclosure :: Ungkapin kepemilikan posisi dan hubungan bisnis. Intinya keterbukaan, bukan larangan punya.","Front running :: Rekomendasi beli sambil diam-diam jual. Pelanggaran berat yang bisa bikin izin dicabut.","Manipulasi :: Nyebarin rekomendasi buat gerakin harga demi posisi sendiri. Bedanya sama pelanggaran etika ada di NIAT.","Churning :: Ndorong transaksi berlebihan demi komisi. Kepentingan nasabah dikorbanin buat pendapatan broker."], points:[
   "WAJIB ungkapin kepemilikan posisi dan hubungan bisnis sama emiten. Inti kode etiknya KETERBUKAAN, bukan larangan punya — boleh pegang, asal ditulis di risetnya.",
   "Rekomendasi beli sambil diam-diam JUAL = front running. Ini bukan cuma nggak etis, ini pelanggaran berat yang bisa bikin izin dicabut.",
   "Nyebarin rekomendasi buat GERAKIN HARGA demi posisi sendiri = indikasi manipulasi pasar, bisa berujung pidana. Bedanya sama pelanggaran etika biasa ada di NIAT.",
   "Ndorong transaksi berlebihan demi komisi = churning. Kepentingan nasabah dikorbanin buat komisi broker."]},
  {h:"Akuntabilitas", mm:["Update terbuka :: Skenario batal? Terbitin pembaruan ke penerima yang SAMA. Hapus jejak diam-diam itu paling ngerusak.","Kinerja jujur :: Cherry picking bikin 10 rekomendasi cakep dari 200 keliatan prestasi. Sajikan totalnya.","Sumber data :: Cantumin sumber DAN patuhi lisensi. Satu urusan integritas, satu urusan hukum.","Konsistensi :: Format tetap bikin pembaca gampang ngelacak perubahan pandangan antar periode."], points:[
   "Data baru mbatalin skenario? Terbitin pembaruan dan jelasin alasannya, ke penerima yang SAMA. Hapus jejak diam-diam itu yang paling ngerusak, karena orang jadi nggak bisa nilai lo.",
   "Cherry picking (cuma majang yang berhasil) itu nyesatin. Kalau setahun lo terbitin 200 rekomendasi, 10 yang cakep itu bukan prestasi — itu statistik biasa.",
   "Kinerja masa lalu wajib disertai keterangan NGGAK menjamin hasil ke depan. Bukan formalitas kosong — pasar berubah dan keunggulan kekikis seiring makin banyak yang pakai.",
   "Data dan grafik pihak ketiga: cantumin sumber DAN patuhi lisensinya. Dua hal terpisah — satu urusan integritas, satu urusan hukum.",
   "Format yang konsisten bikin pembaca gampang ngelacak perubahan pandangan antar periode. Bonus buat lo: format tetap itu semacam checklist yang maksa semua bagian keisi.",
   "Di media sosial yang ruangnya sempit: TETAP sertain level pembatalan plus tautan ke laporan lengkap. Singkat boleh, nggak lengkap nggak boleh."]}],
 jebakan:[
  "JEBAKAN: disclaimer TIDAK ngehapus kewajiban analis kerja jujur dan kompeten. Dia bukan tameng buat analisis asal-asalan.",
  "Kalau teknikal dan fundamental satu institusi bertentangan: sajikan DUA-DUANYA secara transparan plus jelasin beda asumsinya. Pertentangannya sendiri itu informasi berharga.",
  "Rekomendasi yang gagal dievaluasi TERBUKA. Analis yang bisa bedah kesalahannya sendiri dengan tenang itu justru naik kepercayaannya."]}
]);
