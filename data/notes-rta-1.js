/* Study notes + mind map — RTA bagian 1.
   sections[].mm = label pendek untuk cabang mind map. */
TD.registerNotes([
{module:"rta-dasar", tagline:"Fondasi: kenapa harga layak dianalisis dari grafik.",
 sections:[
  {h:"Tiga premis dasar (Murphy)", mm:["Harga diskon semua","Harga bertren","Sejarah berulang"], points:[
   "Market action discounts everything — semua hal yang bisa ngaruh (laba, politik, sentimen, bahkan rumor) udah kecermin di harga. Jadi lo cukup pelajari harganya, nggak perlu urai satu-satu penyebabnya.",
   "Prices move in trends — tren dianggap masih jalan SAMPAI ada bukti tegas dia berakhir. Beban pembuktian ada di skenario pembalikan, bukan sebaliknya.",
   "History repeats itself — pola berulang bukan karena angka ajaib, tapi karena rakus dan takut manusia nggak berubah-berubah dari dulu."]},
  {h:"Dow Theory", mm:["3 jenis tren","3 fase pasar","Konfirmasi indeks","Volume"], points:[
   "Tiga pergerakan, analoginya laut: primary (1 tahun+) = pasang surut, secondary (3 minggu–3 bulan, koreksi 1/3–2/3) = ombak, minor (di bawah 3 minggu) = riak.",
   "Tiga fase bull: akumulasi → partisipasi publik → distribusi. Ironinya di fase 3: pas berita paling cemerlang, yang beli duluan justru lagi jualan ke publik.",
   "Prinsip konfirmasi: indeks industrial dan transportasi harus searah. Logikanya barang yang diproduksi harus beneran dikirim, jadi dua sektor itu saling membuktikan.",
   "Volume itu saksi, bukan hakim — statusnya konfirmasi SEKUNDER. Yang dicari: membesar searah tren, mengecil pas koreksi.",
   "Satu-satunya pengecualian kata Dow: act of God alias kejadian mendadak yang nggak ada yang tau. Justru pengakuan ini yang bikin stop loss jadi syarat hidup, bukan pelengkap."]},
  {h:"Teknikal vs fundamental", mm:["Akibat vs sebab","Kapan vs apa","Komplementer"], points:[
   "Fundamental pelajari SEBAB (nilai intrinsik), teknikal pelajari AKIBAT (aksi harga). Kayak dokter: satu periksa organ dalam, satu periksa detak jantung.",
   "Fundamental jawab APA yang dibeli, teknikal jawab KAPAN dan di level berapa. Saham bagus yang dibeli di waktu salah bisa nyangkut bertahun-tahun.",
   "Keunggulan teknikal: jalan di instrumen apa pun (saham, obligasi, valas, komoditas, derivatif, kripto) dan di timeframe apa pun, karena sifatnya fraktal."]},
  {h:"Kritik & keterbatasan", mm:["Subjektif","Lag sinyal","Self-fulfilling","Random walk / EMH"], points:[
   "Narik garis dan baca pola itu subjektif — sepuluh orang bisa dapet sepuluh hasil. Dan sinyalnya telat, karena diitung dari harga yang udah kejadian.",
   "Self-fulfilling prophecy: level populer jalan karena rame diawasi — tapi justru itu yang bikin dia jadi sasaran stop hunting.",
   "EMH bentuk LEMAH bilang harga masa lalu nggak bisa dipakai nebak — ini yang nabrak teknikal langsung. Bantahannya: bukti momentum (Jegadeesh-Titman) dan autokorelasi positif.",
   "Behavioral finance ngasih dasar ilmiahnya: herding bikin tren berlebihan, loss aversion bikin support kebentuk, anchoring dan overconfidence bikin orang salah ukur."]},
  {h:"Alur kerja analis", mm:["Baca tren","Tandai level","Konfirmasi","Rencana"], points:[
   "Urutan bakunya: baca tren → tandai level kunci → konfirmasi pakai indikator dan volume → susun rencana entry, stop, target. Jangan mulai dari langkah terakhir.",
   "Top down: indeks pasar → sektor terkuat → saham terbaik di sektor itu. Lebih efisien daripada ngescan 900 saham satu-satu.",
   "Jangan nentuin target duluan terus nyari pembenarannya di chart — itu bias konfirmasi, dan lo bakal ngerasa lagi analisis padahal lagi cari alasan."]}],
 jebakan:[
  "JEBAKAN: fleksibilitas lintas instrumen itu KEUNGGULAN teknikal, bukan kelemahan. Sering dibalik di opsi jawaban.",
  "JEBAKAN: koreksi sekunder Dow itu sepertiga sampai dua pertiga — BUKAN selalu 50 persen. Angka 50 cuma yang paling sering.",
  "JEBAKAN: leading = oscillator (RSI, stochastic). Lagging = MA, MACD, ADX. Hafalin, sering ketuker."]},

{module:"rta-chart", tagline:"Cara menyajikan data harga supaya informasinya kebaca.",
 sections:[
  {h:"Jenis grafik", mm:["Line","Bar OHLC","Candlestick","P&F","Renko"], points:[
   "Line chart: satu data per periode (biasanya close). Paling bersih buat lihat struktur tren besar karena noise-nya kesaring.",
   "Bar chart OHLC: garis tegak = rentang high-low, tick KIRI = open, tick KANAN = close. Ingetnya: waktu jalan ke kanan, jadi yang kanan itu belakangan.",
   "Candlestick: body = open ke close, shadow = high dan low. Datanya sama persis kayak bar, cuma jauh lebih cepet kebaca karena ada warna dan tebal badan.",
   "Point and figure: kolom X (naik) dan O (turun), WAKTU diabaikan. Kolom baru muncul kalau harga balik sebesar box size x reversal amount.",
   "Renko: bata baru cuma pas harga gerak sebesar brick size. Tren jadi bersih banget, tapi koreksi kecil dan harga ekstrem ILANG dari pandangan."]},
  {h:"Skala harga", mm:["Aritmatik","Logaritmik"], points:[
   "Aritmatik: jarak tegak sama buat perubahan NOMINAL yang sama. Naik 100 poin selalu setinggi 100 poin, di harga berapa pun.",
   "Logaritmik: jarak tegak sama buat perubahan PERSENTASE yang sama. Wajib buat data jangka panjang atau harga yang naik berlipat, kalau nggak tahun-tahun awal keliatan datar.",
   "Level Fibonacci di skala log BEDA dari skala aritmatik kalau pergerakannya besar. Makanya skala wajib disebut di laporan."]},
  {h:"Timeframe", mm:["Sesuai horizon","Multiple time frame","Noise"], points:[
   "Pilih timeframe sesuai horizon posisi lo: bulanan/mingguan (investor), harian (swing), intraday (day trader). Salah pasang bikin lo keluar masuk terus.",
   "Multiple time frame: timeframe BESAR nentuin ARAH, timeframe KECIL nentuin TITIK MASUK. Jarak antar timeframe biasanya 4 sampai 6 kali.",
   "Makin pendek periodenya, makin besar porsi noise-nya, dan makin kerasa gigitan biaya transaksi."]},
  {h:"Volume & data", mm:["Histogram","Volume profile","Adjusted data","Gap"], points:[
   "Volume ditampilin sebagai histogram di panel bawah, sejajar sumbu waktu. Yang dibaca bukan angka mutlaknya, tapi relatif ke rata-ratanya sendiri.",
   "Volume profile metain volume per LEVEL HARGA, bukan per waktu. Area padat (point of control) jadi magnet sekaligus zona reaksi.",
   "Data WAJIB adjusted setelah split dan dividen. Kalau nggak, muncul gap semu — chart nunjukin turun 50 persen yang nggak pernah terjadi.",
   "Gap = rentang harga yang nggak ada transaksinya sama sekali. Sering jadi zona support atau resistance pas diuji balik."]},
  {h:"Bentuk candle dasar", mm:["Marubozu","Doji","Heikin Ashi"], points:[
   "Marubozu: body panjang tanpa sumbu — satu sisi dominan DARI BUKA SAMPAI TUTUP, nggak ada perlawanan berarti.",
   "Doji: open dan close hampir sama — pembeli dan penjual imbang. Maknanya sepenuhnya tergantung LOKASI: di tengah range nggak berarti, di pucuk tren baru penting.",
   "Heikin Ashi: pakai harga rata-rata HASIL HITUNGAN, jadi tren keliatan halus. Tapi itu bukan harga transaksi asli — jangan pasang stop atau target di situ."]}],
 jebakan:[
  "JEBAKAN: P&F reversal 3 box dengan box size 10 = harga harus balik 30 poin (3 x 10), bukan 3 atau 10.",
  "JEBAKAN: Renko dan P&F ngehapus dimensi WAKTU, jadi analisis siklus dan pola musiman nggak bisa dikerjain di situ.",
  "JEBAKAN: candle mingguan — open = sesi PERTAMA minggu itu, close = sesi TERAKHIR, high/low = ekstrem sepanjang minggu. Bukan rata-rata."]},

{module:"rta-trend", tagline:"Struktur tren dan pola yang menandai lanjut atau balik arah.",
 sections:[
  {h:"Struktur & garis tren", mm:["HH-HL / LH-LL","Garis tren","Channel","Fan principle"], points:[
   "Uptrend = higher high + higher low (dua-duanya, bukan salah satu). Downtrend kebalikannya. Begitu strukturnya patah, trennya dipertanyakan — dan ini definisi yang OBJEKTIF, nggak bisa didebat.",
   "Garis tren naik nyambungin minimal dua lembah yang meninggi (support dinamis); garis tren turun nyambungin puncak yang menurun (resistance dinamis).",
   "Makin banyak sentuhan dan makin lama bertahan, makin sahih garisnya. Tapi garis yang kelewat curam justru RAPUH — kenaikan curam biasanya didorong euforia yang cepat habis.",
   "Channel: garis sejajar di sisi seberang. Tembus batas atas bisa berarti akselerasi, bisa juga blow off — yang mbedain baru keliatan sesudahnya.",
   "Fan principle: penembusan garis tren itu PROSES, bukan satu peristiwa. Sekali wajar, dua kali curiga, garis KETIGA jebol = tren sebelumnya umumnya dinyatakan berakhir."]},
  {h:"Pola pembalikan", mm:["Head & shoulders","Double/triple top","Rounding","Island","V"], points:[
   "Head and shoulders: bahu kiri – head – bahu kanan + neckline. Sah cuma setelah CLOSE nembus neckline, bukan pas bahu kanan kebentuk. Target = tinggi head ke neckline, diproyeksiin dari titik breakout.",
   "Volume ideal H&S: MENURUN dari bahu kiri ke head ke bahu kanan, terus MELONJAK pas neckline jebol. Kalau volumenya nggak gitu, ceritanya nggak nyambung — curigai polanya.",
   "Double/triple top-bottom: gagal nembus level yang sama berulang kali. Sah SETELAH level di antaranya ditembus. Triple dianggap lebih kuat karena basisnya lebih matang.",
   "Rounding/saucer: perpindahan barang yang pelan banget. Volume ngering di dasar (penjual kehabisan barang) terus membesar seiring naik. Ngebosenin, makanya sering kelewat.",
   "Island reversal: gap searah tren → beberapa sesi terisolasi kayak pulau → gap berlawanan. Semua yang beli di pulau itu langsung nyangkut. V bottom susah ditradingin karena nggak ada fase basis buat masuk.",
   "Prasyarat SEMUA pola pembalikan: harus ADA tren sebelumnya buat dibalik. Bullish engulfing di tengah range mendatar itu mau ngebalik apa?"]},
  {h:"Pola penerusan", mm:["Segitiga","Flag/pennant","Rectangle","Cup & handle"], points:[
   "Segitiga simetris: dua sisi nyempit, arahnya netral. Menaik: resistance datar + lembah naik = pembeli makin agresif, condong bullish. Menurun: kebalikannya.",
   "Breakout segitiga paling andal di 1/2 sampai 3/4 panjang pola. Kalau harga merayap sampai apex, tenaganya udah kelepas bertahap dan breakout-nya lemah.",
   "Flag: konsolidasi PENDEK yang miring melawan tren, setelah kenaikan tajam (tiang bendera). Target sepanjang tiangnya. Kalau berlarut-larut, itu bukan bendera lagi.",
   "Rectangle: selesai pas CLOSE di luar batas dengan volume mendukung. Sentuhan intraday nggak cukup — itu sering cuma liquidity sweep.",
   "Cup and handle: akumulasi bentuk U + koreksi DANGKAL (patokannya sepertiga kedalaman cup atau kurang). Kalau handle-nya kedalaman, artinya masih banyak yang mau keluar."]},
  {h:"Wedge & broadening", mm:["Rising wedge","Falling wedge","Megaphone","Diamond"], points:[
   "Rising wedge (dua garis naik menyempit) = tiap dorongan makin pendek = BEARISH. Falling wedge = BULLISH. Aturannya: wedge itu polanya melawan arah kemiringannya.",
   "Broadening/megaphone: puncak makin tinggi DAN lembah makin rendah — pasar makin nggak stabil. Sering muncul di puncak pas emosi lagi tinggi. Susah ditradingin, stop-nya harus lebar banget.",
   "Diamond top: melebar dulu terus menyempit, jadi bentuknya kayak berlian. Tembus sisi kanan bawah = bearish. Jarang muncul, tapi kalau muncul di puncak besar maknanya serius."]},
  {h:"Breakout & jebakan", mm:["Throwback","False breakout","Filter"], points:[
   "Throwback: harga balik nguji level breakout dari sisi seberang (role reversal). Ini WAJAR, bukan tanda gagal — dan justru ngasih entry kedua dengan stop jauh lebih rapat.",
   "False breakout/bull trap: penembusan bervolume tipis yang cepat ditarik balik. Yang kejebak sekarang nyangkut, dan jualan mereka ndorong harga ke arah sebaliknya — makanya sinyal ini bertenaga.",
   "Penyaring anti-jebakan: wajib CLOSE di luar level, ambang persentase (2-3 persen), syarat volume, atau tunggu retest. Ongkosnya sama: lo masuk lebih telat dengan harga lebih jelek.",
   "Divergensi: harga higher high tapi momentum lower high. Ini ngukur TENAGA, bukan ARAH — peringatan dini buat ngencengin stop, BUKAN sinyal jual."]}],
 jebakan:[
  "JEBAKAN: makin panjang dan lebar polanya, makin besar pergerakan sesudahnya. Rectangle 8 bulan jauh lebih bertenaga daripada bendera 2 pekan.",
  "JEBAKAN: garis tren ditembus = perubahan LAJU, belum tentu tren berbalik. Butuh konfirmasi struktur harga (lihat fan principle).",
  "JEBAKAN: pola konsolidasi lebih SERING berakhir dengan tren berlanjut, bukan berbalik. Ini turunan dari prinsip Dow."]},

{module:"rta-level", tagline:"Menentukan di harga berapa keputusan diambil.",
 sections:[
  {h:"Support & resistance", mm:["Definisi","Role reversal","Kekuatan level","Zona"], points:[
   "Support: ada order beli numpuk yang nahan penurunan. Resistance: kebalikannya, pasokan jual yang nahan kenaikan. Dua-duanya bukan garis ajaib, cuma tempat numpuknya order.",
   "Role reversal: support jebol → jadi resistance, dan sebaliknya. Penyebabnya yang nyangkut pengen keluar impas begitu harga balik ke harga beli mereka.",
   "Level makin kuat seiring lamanya bertahan dan besarnya volume di sekitarnya. Level yang juga keliatan di timeframe besar lebih dihormati. Catatan: soal jumlah sentuhan ada perdebatan — tiap pengujian juga ngehabisin sebagian order.",
   "Perlakuin sebagai ZONA, bukan satu angka. Pasar nggak pernah presisi — order tersebar di rentang, bukan numpuk di satu harga.",
   "Relevansi level MEMUDAR seiring waktu, karena yang nyangkut udah nyerah atau lupa. Pengecualiannya level ekstrem historis yang terus dikutip media."]},
  {h:"Fibonacci", mm:["Retracement","Extension","Cara menarik"], points:[
   "Retracement utama: 23,6% / 38,2% / 50% / 61,8% / 78,6%. Catatan yang sering ditanyain: 50% BUKAN rasio Fibonacci, itu warisan Dow Theory yang nyelip masuk.",
   "Koreksi dangkal (38,2%) = tren kuat, tiap turun langsung dicaplok. Koreksi lewat 61,8% = tekanan jualnya serius, peluang pembalikan naik.",
   "Extension buat target DI LUAR pergerakan: 127,2% / 161,8% / 261,8%. Beda sama retracement yang ngukur di dalam.",
   "Kesalahan paling umum: narik dari ayunan yang nggak signifikan. Tiap ayunan kecil ngasih set level sendiri — gambar semuanya, dan pasti ada yang kena di mana pun harga berhenti."]},
  {h:"Pivot point", mm:["Rumus PP","R1-R3 / S1-S3"], points:[
   "Pivot klasik = (High + Low + Close) periode sebelumnya dibagi 3. Kekuatannya di rumus yang BAKU — semua orang ngitung angka yang sama.",
   "Dari PP diturunin R1 R2 R3 dan S1 S2 S3. Banyak dipakai trader harian karena levelnya udah ada SEBELUM pasar buka."]},
  {h:"Gap sebagai level", mm:["Breakaway","Runaway","Exhaustion","Common"], points:[
   "Breakaway gap: keluar dari konsolidasi, volume besar, nandain AWAL tren. Jarang ketutup cepat karena dia nandain perubahan rezim yang nyata.",
   "Runaway/measuring gap: di TENGAH tren, sering pas di titik tengah pergerakan. Makanya bisa dipakai proyeksiin target: ukur kaki pertama, proyeksiin lagi dari area gap.",
   "Exhaustion gap: di UJUNG tren, volume ekstrem, tapi habis itu nggak ada lanjutan. Biasanya cepat ketutup. Bedain dari measuring gap itu baru gampang sesudah kejadian.",
   "Common gap di saham sepi cenderung keisi lagi — dia cuma ketimpangan order sesaat tanpa makna."]},
  {h:"Level lain & konfluensi", mm:["Angka bulat","MA dinamis","52-week","Confluence"], points:[
   "Angka bulat (1.000, 5.000) jadi level psikologis karena manusia suka MEMBULATKAN — order beneran numpuk di situ, bisa dilihat di order book. Bukan numerologi.",
   "MA50 dan MA200 = support/resistance DINAMIS, karena levelnya gerak ngikutin harga. Jalan bukan karena matematikanya sakti, tapi karena jutaan mata mantau garis yang sama.",
   "High/low 52 minggu jadi acuan psikologis karena rame dipublikasi media dan dipakai screener institusi. Banyak mata, banyak order.",
   "Confluence: beberapa metode ketemu di area yang sama. Kuat karena kelompok pelaku yang BEDA ngawasin alasan yang BEDA, tapi order mereka numpuk di titik yang SAMA.",
   "Stop hunting kejadian karena stop numpuk persis di luar level populer, dan tumpukan itu jadi kantong likuiditas. Bukan konspirasi, ini mekanika. Kasih jarak sebesar fraksi ATR."]}],
 jebakan:[
  "HITUNGAN: naik 1.000 ke 2.000 (range 1.000). Retrace 61,8% = 618 poin dari PUNCAK: 2.000 - 618 = 1.382. Diukur dari puncak ke bawah, bukan dari bawah ke atas.",
  "HITUNGAN pivot: (1.200 + 1.100 + 1.150) dibagi 3 = 1.150. Close di atas pivot artinya bias intraday cenderung positif.",
  "JEBAKAN: di tren naik kuat, jual di resistance itu ngelawan arus. Yang bener beli pas pullback ke support — searah tren, stop lebih rapat."]}
]);
