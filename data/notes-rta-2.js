/* Study notes + mind map — RTA unit 004, 005, 006, 007.
   sections[].mm = "Label :: keterangan" untuk cabang mind map. */
TD.registerNotes([
{module:"rta-level", tagline:"Menentukan di harga berapa keputusan diambil.",
 sections:[
  {h:"Support & resistance", mm:["Definisi :: Support = order beli numpuk yang nahan penurunan. Bukan garis ajaib, cuma tempat numpuknya order.","Role reversal :: Support jebol jadi resistance. Penyebabnya yang nyangkut pengen keluar impas begitu harga balik.","Kekuatan level :: Naik seiring lamanya bertahan dan volume di sekitarnya. Tapi tiap pengujian juga NGEHABISIN sebagian order.","Zona :: Perlakuin sebagai rentang, bukan satu angka. Pasar nggak pernah presisi, order tersebar."], points:[
   "Support: ada order beli numpuk yang nahan penurunan. Resistance: kebalikannya, pasokan jual yang nahan kenaikan. Dua-duanya bukan garis ajaib, cuma tempat numpuknya order.",
   "Role reversal: support jebol → jadi resistance, dan sebaliknya. Penyebabnya yang nyangkut pengen keluar impas begitu harga balik ke harga beli mereka.",
   "Level makin kuat seiring lamanya bertahan dan besarnya volume di sekitarnya. Level yang juga keliatan di timeframe besar lebih dihormati. Catatan: soal jumlah sentuhan ada perdebatan — tiap pengujian juga ngehabisin sebagian order.",
   "Perlakuin sebagai ZONA, bukan satu angka. Pasar nggak pernah presisi — order tersebar di rentang, bukan numpuk di satu harga.",
   "Relevansi level MEMUDAR seiring waktu, karena yang nyangkut udah nyerah atau lupa. Pengecualiannya level ekstrem historis yang terus dikutip media."]},
  {h:"Fibonacci", mm:["Retracement :: 23,6 / 38,2 / 50 / 61,8 / 78,6 persen. Catat: 50 persen BUKAN rasio Fibonacci, itu warisan Dow.","Extension :: Buat target DI LUAR pergerakan: 127,2 / 161,8 / 261,8 persen. Beda dari retracement yang ngukur di dalam.","Cara menarik :: Jangkarkan di ayunan yang JELAS keliatan, dan tandai SEBELUM posisi dibuka. Di situ bias nyelinap."], points:[
   "Retracement utama: 23,6% / 38,2% / 50% / 61,8% / 78,6%. Catatan yang sering ditanyain: 50% BUKAN rasio Fibonacci, itu warisan Dow Theory yang nyelip masuk.",
   "Koreksi dangkal (38,2%) = tren kuat, tiap turun langsung dicaplok. Koreksi lewat 61,8% = tekanan jualnya serius, peluang pembalikan naik.",
   "Extension buat target DI LUAR pergerakan: 127,2% / 161,8% / 261,8%. Beda sama retracement yang ngukur di dalam.",
   "Kesalahan paling umum: narik dari ayunan yang nggak signifikan. Tiap ayunan kecil ngasih set level sendiri — gambar semuanya, dan pasti ada yang kena di mana pun harga berhenti."]},
  {h:"Pivot point", mm:["Rumus PP :: (High + Low + Close) dibagi 3. Kekuatannya di rumus baku — semua orang ngitung angka yang sama.","R1-R3 / S1-S3 :: Diturunin dari PP. Banyak dipakai trader harian karena levelnya udah ada sebelum pasar buka."], points:[
   "Pivot klasik = (High + Low + Close) periode sebelumnya dibagi 3. Kekuatannya di rumus yang BAKU — semua orang ngitung angka yang sama.",
   "Dari PP diturunin R1 R2 R3 dan S1 S2 S3. Banyak dipakai trader harian karena levelnya udah ada SEBELUM pasar buka."]},
  {h:"Gap sebagai level", mm:["Breakaway :: Keluar dari konsolidasi, volume besar, nandain AWAL tren. Jarang ketutup cepat.","Runaway :: Di TENGAH tren, sering pas titik tengah pergerakan. Makanya bisa dipakai proyeksiin target.","Exhaustion :: Di UJUNG tren, volume ekstrem, habis itu nggak ada lanjutan. Biasanya cepat ketutup.","Common :: Di saham sepi, cuma ketimpangan order sesaat tanpa makna. Cenderung keisi lagi."], points:[
   "Breakaway gap: keluar dari konsolidasi, volume besar, nandain AWAL tren. Jarang ketutup cepat karena dia nandain perubahan rezim yang nyata.",
   "Runaway/measuring gap: di TENGAH tren, sering pas di titik tengah pergerakan. Makanya bisa dipakai proyeksiin target: ukur kaki pertama, proyeksiin lagi dari area gap.",
   "Exhaustion gap: di UJUNG tren, volume ekstrem, tapi habis itu nggak ada lanjutan. Biasanya cepat ketutup. Bedain dari measuring gap itu baru gampang sesudah kejadian.",
   "Common gap di saham sepi cenderung keisi lagi — dia cuma ketimpangan order sesaat tanpa makna."]},
  {h:"Level lain & konfluensi", mm:["Angka bulat :: Manusia suka membulatkan, jadi order numpuk di 5.000 bukan 4.987. Bukan numerologi, bisa dilihat di order book.","MA dinamis :: MA50 dan MA200 jadi support yang levelnya gerak. Jalan karena jutaan mata mantau garis yang sama.","52-week :: High dan low 52 minggu rame dipublikasi media dan dipakai screener institusi. Banyak mata, banyak order.","Confluence :: Beberapa metode ketemu di area sama. Kuat karena kelompok pelaku beda ngawasin alasan beda di titik yang sama."], points:[
   "Angka bulat (1.000, 5.000) jadi level psikologis karena manusia suka MEMBULATKAN — order beneran numpuk di situ, bisa dilihat di order book. Bukan numerologi.",
   "MA50 dan MA200 = support/resistance DINAMIS, karena levelnya gerak ngikutin harga. Jalan bukan karena matematikanya sakti, tapi karena jutaan mata mantau garis yang sama.",
   "High/low 52 minggu jadi acuan psikologis karena rame dipublikasi media dan dipakai screener institusi. Banyak mata, banyak order.",
   "Confluence: beberapa metode ketemu di area yang sama. Kuat karena kelompok pelaku yang BEDA ngawasin alasan yang BEDA, tapi order mereka numpuk di titik yang SAMA.",
   "Stop hunting kejadian karena stop numpuk persis di luar level populer, dan tumpukan itu jadi kantong likuiditas. Bukan konspirasi, ini mekanika. Kasih jarak sebesar fraksi ATR."]}],
 jebakan:[
  "HITUNGAN: naik 1.000 ke 2.000 (range 1.000). Retrace 61,8% = 618 poin dari PUNCAK: 2.000 - 618 = 1.382. Diukur dari puncak ke bawah, bukan dari bawah ke atas.",
  "HITUNGAN pivot: (1.200 + 1.100 + 1.150) dibagi 3 = 1.150. Close di atas pivot artinya bias intraday cenderung positif.",
  "JEBAKAN: di tren naik kuat, jual di resistance itu ngelawan arus. Yang bener beli pas pullback ke support — searah tren, stop lebih rapat."]},

{module:"rta-kekuatan", tagline:"Seberapa kuat tenaganya dan seberapa lebar geraknya — dua hal yang menentukan ukuran posisi.",
 sections:[
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
   "Ichimoku lima komponen: Tenkan, Kijun, Senkou A dan B (kumo alias awan), Chikou. Harga di atas awan = bullish, dan awannya jadi ZONA support — tebal artinya kuat, tipis artinya gampang jebol."]},
  {h:"Kekuatan tren", mm:["ADX :: Ngukur KEKUATAN tren, bukan arahnya. Naik = trennya kuat, entah naik atau turun.","ADX < 20 :: Pasar nggak bertren. Sistem pengikut tren paling banyak rugi di sini.","Momentum/ROC :: Laju perubahan harga. Melambat duluan sebelum harganya balik arah.","Divergensi :: Harga bikin puncak baru, momentum nggak. Tenaga lagi habis."], points:[
   "ATR tinggi BUKAN berarti trennya kuat. Saham yang naik-turun 5% gantian tiap hari juga ATR-nya tinggi, padahal nggak ke mana-mana.",
   "Kekuatan tren diukur ADX atau struktur harganya; lebar gerak diukur ATR. Dua pertanyaan yang beda.",
   "Momentum melemah bukan sinyal jual. Dia peringatan buat ngerapetin risiko, bukan alasan langsung balik badan."]}],
 jebakan:[
  "JEBAKAN: ideal 2–4 indikator dari kategori BEDA (tren, momentum, volatilitas, volume). Dan catat: RSI BUKAN bagian Ichimoku.",
  "JEBAKAN: ADX ngukur kekuatan, BUKAN arah. Nilai ADX tinggi bisa terjadi di tren turun.",
  "JEBAKAN: penyempitan Bollinger meramal BESARNYA gerakan, bukan arahnya.",
  "JEBAKAN: harga nempel pita atas Bollinger bukan sinyal jual — di tren kuat itu justru normal."]},

{module:"rta-pola", tagline:"Pola itu jejak perpindahan barang — yang menentukan bukan bentuknya, tapi volume dan penembusannya.",
 sections:[
  {h:"Pola pembalikan", mm:["Head & shoulders :: Tiga puncak, yang tengah tertinggi. Sah cuma setelah CLOSE nembus neckline, bukan pas bahu kanan jadi.","Double/triple top :: Gagal nembus level sama berulang kali. Sah setelah lembah di antaranya ditembus.","Rounding :: Perpindahan barang yang pelan banget. Ngebosenin berbulan-bulan, makanya paling sering kelewat.","Island :: Gap naik, beberapa sesi terisolasi, gap turun. Semua yang beli di pulau itu langsung nyangkut.","V :: Pembalikan tanpa fase basis. Susah ditradingin karena konfirmasinya baru dateng pas harga udah jauh."], points:[
   "Head and shoulders: bahu kiri – head – bahu kanan + neckline. Sah cuma setelah CLOSE nembus neckline, bukan pas bahu kanan kebentuk. Target = tinggi head ke neckline, diproyeksiin dari titik breakout.",
   "Volume ideal H&S: MENURUN dari bahu kiri ke head ke bahu kanan, terus MELONJAK pas neckline jebol. Kalau volumenya nggak gitu, ceritanya nggak nyambung — curigai polanya.",
   "Double/triple top-bottom: gagal nembus level yang sama berulang kali. Sah SETELAH level di antaranya ditembus. Triple dianggap lebih kuat karena basisnya lebih matang.",
   "Rounding/saucer: perpindahan barang yang pelan banget. Volume ngering di dasar (penjual kehabisan barang) terus membesar seiring naik. Ngebosenin, makanya sering kelewat.",
   "Island reversal: gap searah tren → beberapa sesi terisolasi kayak pulau → gap berlawanan. Semua yang beli di pulau itu langsung nyangkut. V bottom susah ditradingin karena nggak ada fase basis buat masuk.",
   "Prasyarat SEMUA pola pembalikan: harus ADA tren sebelumnya buat dibalik. Bullish engulfing di tengah range mendatar itu mau ngebalik apa?"]},
  {h:"Pola penerusan", mm:["Segitiga :: Simetris = netral, menaik = condong bullish, menurun = condong bearish. Breakout andal di 1/2 sampai 3/4 panjang pola.","Flag/pennant :: Konsolidasi PENDEK setelah gerakan tajam. Kalau berlarut-larut, itu bukan bendera lagi.","Rectangle :: Selesai pas CLOSE di luar batas dengan volume mendukung. Sentuhan intraday nggak cukup.","Cup & handle :: Bentuk U + koreksi dangkal. Handle idealnya sepertiga kedalaman cup atau kurang."], points:[
   "Segitiga simetris: dua sisi nyempit, arahnya netral. Menaik: resistance datar + lembah naik = pembeli makin agresif, condong bullish. Menurun: kebalikannya.",
   "Breakout segitiga paling andal di 1/2 sampai 3/4 panjang pola. Kalau harga merayap sampai apex, tenaganya udah kelepas bertahap dan breakout-nya lemah.",
   "Flag: konsolidasi PENDEK yang miring melawan tren, setelah kenaikan tajam (tiang bendera). Target sepanjang tiangnya. Kalau berlarut-larut, itu bukan bendera lagi.",
   "Rectangle: selesai pas CLOSE di luar batas dengan volume mendukung. Sentuhan intraday nggak cukup — itu sering cuma liquidity sweep.",
   "Cup and handle: akumulasi bentuk U + koreksi DANGKAL (patokannya sepertiga kedalaman cup atau kurang). Kalau handle-nya kedalaman, artinya masih banyak yang mau keluar."]},
  {h:"Wedge & broadening", mm:["Rising wedge :: Dua garis naik menyempit = tiap dorongan makin pendek = BEARISH, meski bentuknya naik.","Falling wedge :: Dua garis turun menyempit = tekanan jual melemah = BULLISH. Wedge melawan arah kemiringannya.","Megaphone :: Puncak makin tinggi DAN lembah makin rendah. Pasar makin nggak stabil, sering muncul di puncak.","Diamond :: Melebar lalu menyempit. Jarang muncul, tapi kalau di puncak besar maknanya serius."], points:[
   "Rising wedge (dua garis naik menyempit) = tiap dorongan makin pendek = BEARISH. Falling wedge = BULLISH. Aturannya: wedge itu polanya melawan arah kemiringannya.",
   "Broadening/megaphone: puncak makin tinggi DAN lembah makin rendah — pasar makin nggak stabil. Sering muncul di puncak pas emosi lagi tinggi. Susah ditradingin, stop-nya harus lebar banget.",
   "Diamond top: melebar dulu terus menyempit, jadi bentuknya kayak berlian. Tembus sisi kanan bawah = bearish. Jarang muncul, tapi kalau muncul di puncak besar maknanya serius."]},
  {h:"Breakout & jebakan", mm:["Throwback :: Harga balik nguji level breakout dari sisi seberang. WAJAR, dan malah ngasih entry kedua dengan stop lebih rapat.","False breakout :: Penembusan bervolume tipis yang cepat ditarik balik. Yang kejebak jadi bahan bakar gerakan sebaliknya.","Filter :: Wajib close di luar level, ambang persen, atau tunggu retest. Ongkosnya: masuk lebih telat dengan harga lebih jelek."], points:[
   "Throwback: harga balik nguji level breakout dari sisi seberang (role reversal). Ini WAJAR, bukan tanda gagal — dan justru ngasih entry kedua dengan stop jauh lebih rapat.",
   "False breakout/bull trap: penembusan bervolume tipis yang cepat ditarik balik. Yang kejebak sekarang nyangkut, dan jualan mereka ndorong harga ke arah sebaliknya — makanya sinyal ini bertenaga.",
   "Penyaring anti-jebakan: wajib CLOSE di luar level, ambang persentase (2-3 persen), syarat volume, atau tunggu retest. Ongkosnya sama: lo masuk lebih telat dengan harga lebih jelek.",
   "Divergensi: harga higher high tapi momentum lower high. Ini ngukur TENAGA, bukan ARAH — peringatan dini buat ngencengin stop, BUKAN sinyal jual."]}],
 jebakan:[
  "JEBAKAN: garis tren ditembus = perubahan LAJU, belum tentu tren berbalik. Butuh konfirmasi struktur harga (lihat fan principle).",
  "JEBAKAN: pola konsolidasi lebih SERING berakhir dengan tren berlanjut, bukan berbalik. Ini turunan dari prinsip Dow."]},

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
   "Divergensi bullish: harga bikin lower low, oscillator bikin higher low. Artinya masih turun tapi tenaganya abis — kayak bola yang mantul makin pendek."]}],
 jebakan:[
  "JEBAKAN FAVORIT PENGUJI: RSI di atas 70 pada tren kuat BUKAN sinyal jual otomatis. Overbought artinya kuat, bukan mahal.",
  "JEBAKAN: RSI + stochastic + Williams %R itu tiga versi dari hal yang SAMA. Mereka hampir selalu sepakat, jadi rasa yakinnya PALSU — satu bukti diulang tiga kali."]}
]);
