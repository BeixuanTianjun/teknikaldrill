/* Study notes + mind map — RTA bagian 3 (Pola Candlestick).
   sections[].mm = "Label :: keterangan" untuk cabang mind map. */
TD.registerNotes([
{module:"rta-candle", tagline:"Candle itu rekaman siapa yang menang hari itu — bukan ramalan harga mau ke mana.",
 sections:[
  {h:"Anatomi candle", mm:["Body :: Wilayah open ke close. Ini kesimpulan tarik-menarik hari itu.","Sumbu :: Jejak high dan low — wilayah yang sempat disentuh tapi nggak dipertahankan.","Bullish :: Close DI ATAS open. Dibanding open hari itu sendiri, bukan close kemarin.","Body panjang sumbu pendek :: Satu pihak pegang kendali dari buka sampai tutup.","Body kecil dua sumbu panjang :: Ramai tapi nggak ke mana-mana. Seri."], points:[
   "Ujung sumbu itu high dan low, ujung body itu open dan close. Paling sering ketuker waktu baca grafik cepat.",
   "Bar chart dan candlestick isinya sama persis (OHLC). Candlestick cuma lebih gampang dibaca sekilas karena ada warna dan body.",
   "Di saham tipis, body kecil bukan berarti pembeli dan penjual imbang — bisa jadi memang hampir nggak ada yang transaksi."]},
  {h:"Pola satu candle", mm:["Doji :: Open dan close nyaris ketemu. Keraguan. Baru berarti kalau muncul SETELAH tren jalan jauh.","Hammer :: Sumbu bawah ≥2x body, SETELAH tren turun. Dua syarat, wajib dua-duanya.","Hanging man :: Bentuknya sama kayak hammer, tapi muncul setelah tren NAIK. Letaknya yang bikin beda arti.","Shooting star :: Sumbu atas panjang, body kecil di bawah, setelah tren naik. Penolakan harga tinggi.","Inverted hammer :: Bentuk sama kayak shooting star, tapi setelah tren TURUN. Condong bullish.","Dragonfly doji :: Bentuk huruf T. Turun jauh lalu pulang penuh. Penolakan harga rendah.","Gravestone doji :: Huruf T terbalik. Naik jauh lalu dikembalikan habis.","Spinning top :: Body kecil, sumbu di dua sisi. Ragu."], points:[
   "Empat pola ini bentuknya berpasangan dan yang membedakan CUMA letaknya terhadap tren: hammer/hanging man, dan inverted hammer/shooting star.",
   "Hanging man sendirian itu ambigu — sumbu bawah panjang sebenarnya menunjukkan pembeli masih sanggup dorong balik. Butuh sesi bearish berikutnya buat negasin.",
   "Doji di pasar mendatar cuma negasin yang udah kelihatan. Yang berarti itu doji di pucuk tren."]},
  {h:"Pola dua dan tiga candle", mm:["Engulfing :: BODY hari ini nutupin penuh BODY kemarin. Yang dibanding body, bukan sumbu.","Harami :: Kebalikan engulfing — body kedua ngumpet di dalam body pertama. Tenaga tren kendor.","Dark cloud cover :: Buka lebih TINGGI, tutup di bawah tengah body bullish kemarin.","Piercing line :: Buka lebih RENDAH, tutup di atas tengah body bearish kemarin.","Morning star :: Bearish panjang → body kecil → bullish panjang. Tiga babak pembalikan naik.","Evening star :: Kebalikannya, di pucuk.","3 white soldiers :: Tiga sesi bullish, close makin tinggi. Pembeli konsisten.","3 black crows :: Tiga sesi bearish berturut-turut. Tekanan jual yang bertahan."], points:[
   "Rapikan hafalan dari jumlah candle-nya: 1 candle, 2 candle, 3 candle. Yang 3 candle ceritanya lebih panjang jadi maknanya lebih kokoh.",
   "Pada dark cloud cover dan piercing line, kuncinya menembus SEPARUH body sebelumnya. Belum sampai separuh berarti belum polanya.",
   "Head and shoulders dan double top itu pola CHART, bukan pola candle. Beda bab."]},
  {h:"Aturan pemakaian", mm:["Trend → Area → Entry :: Tren dulu, area kedua, candle terakhir sebagai pemicu.","Tunggu close :: Sebelum tutup, hammer bisa berubah jadi bearish panjang.","Jangan sendirian :: Pola tanpa konteks tren, level, dan volume itu cuma bentuk.","Nggak ada target harga :: Candle bilang siapa menang, bukan seberapa jauh harga pergi.","Volume :: Negasin polanya — banyak barang pindah tangan di level itu atau nggak.","Timeframe besar :: Nentuin arah. Yang kecil dipakai nyari titik masuk di dalam arah itu."], points:[
   "Pola pembalikan butuh tren buat dibalik. Bullish engulfing di tengah rentang mendatar itu mau ngebalik apa?",
   "Target harga diambil dari pola chart, level support resistance, atau proyeksi Fibonacci — bukan dari candle-nya.",
   "Hafal dua puluh pola itu bagian termudah dan paling sedikit gunanya. Yang nentuin hasil: nilai konteksnya, dan siapin batas rugi SEBELUM masuk."]}],
 jebakan:[
  "JEBAKAN: hammer dan hanging man bentuknya sama; yang membedakan letaknya terhadap tren. Begitu juga inverted hammer dan shooting star.",
  "JEBAKAN: pada engulfing yang dibandingkan BODY, bukan sumbu.",
  "JEBAKAN: candle bullish artinya close di atas OPEN HARI ITU, bukan di atas close kemarin.",
  "JEBAKAN: pola candlestick TIDAK memberi target harga — targetnya diambil dari alat lain.",
  "JEBAKAN: pola belum sah sebelum sesinya benar-benar ditutup."]}
]);
