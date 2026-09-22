#!/usr/bin/env node
/* Membuat berkas ikon PNG aplikasi tanpa bergantung pada pustaka gambar.

   Ikon digambar secara terprogram pada koordinat ternormalisasi, dirender
   empat kali lipat lalu diperkecil, sehingga tepinya halus pada ukuran
   berapa pun. Berkas PNG disusun manual: tanda tangan, IHDR, IDAT hasil
   deflate, lalu IEND.

   Jalankan: node tools/gen-icons.js */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

/* ---------- penulis PNG ---------- */
const tabelCrc = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = tabelCrc[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}
function chunk(jenis, data) {
  const panjang = Buffer.alloc(4); panjang.writeUInt32BE(data.length, 0);
  const isi = Buffer.concat([Buffer.from(jenis, 'ascii'), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(isi), 0);
  return Buffer.concat([panjang, isi, crc]);
}
function tulisPng(lebar, tinggi, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(lebar, 0); ihdr.writeUInt32BE(tinggi, 4);
  ihdr[8] = 8;      // kedalaman bit
  ihdr[9] = 6;      // jenis warna: RGBA
  // baris diawali byte penyaring 0 (none)
  const baris = Buffer.alloc((lebar * 4 + 1) * tinggi);
  for (let y = 0; y < tinggi; y++) {
    baris[y * (lebar * 4 + 1)] = 0;
    rgba.copy(baris, y * (lebar * 4 + 1) + 1, y * lebar * 4, (y + 1) * lebar * 4);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(baris, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

/* ---------- kanvas sederhana ---------- */
function kanvas(ukuran) {
  const px = Buffer.alloc(ukuran * ukuran * 4);
  return {
    ukuran, px,
    titik(x, y, [r, g, b, a]) {
      if (x < 0 || y < 0 || x >= ukuran || y >= ukuran) return;
      const i = (y * ukuran + x) * 4;
      if (a >= 255) { px[i] = r; px[i + 1] = g; px[i + 2] = b; px[i + 3] = 255; return; }
      const al = a / 255, lama = px[i + 3] / 255, baru = al + lama * (1 - al);
      if (baru === 0) return;
      px[i]     = (r * al + px[i]     * lama * (1 - al)) / baru;
      px[i + 1] = (g * al + px[i + 1] * lama * (1 - al)) / baru;
      px[i + 2] = (b * al + px[i + 2] * lama * (1 - al)) / baru;
      px[i + 3] = baru * 255;
    }
  };
}
/* memperkecil dengan rata-rata, menghasilkan tepi yang halus */
function perkecil(sumber, faktor) {
  const ukuran = sumber.ukuran / faktor;
  const keluar = kanvas(ukuran);
  for (let y = 0; y < ukuran; y++) for (let x = 0; x < ukuran; x++) {
    let r = 0, g = 0, b = 0, a = 0;
    for (let dy = 0; dy < faktor; dy++) for (let dx = 0; dx < faktor; dx++) {
      const i = ((y * faktor + dy) * sumber.ukuran + x * faktor + dx) * 4;
      const al = sumber.px[i + 3] / 255;
      r += sumber.px[i] * al; g += sumber.px[i + 1] * al; b += sumber.px[i + 2] * al; a += al;
    }
    const n = faktor * faktor;
    const i = (y * ukuran + x) * 4;
    if (a > 0) { keluar.px[i] = r / a; keluar.px[i + 1] = g / a; keluar.px[i + 2] = b / a; }
    keluar.px[i + 3] = Math.round(a / n * 255);
  }
  return keluar;
}

const UNGU = [109, 60, 245], UNGU2 = [168, 85, 247], JINGGA = [255, 181, 69], PUTIH = [255, 255, 255];
const campur = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));

/* Menggambar ikon. bulat = sudut membulat (ikon biasa);
   kalau false, latar penuh sampai tepi untuk ikon maskable. */
function gambar(ukuranAkhir, { bulat = true, isiRelatif = 1 } = {}) {
  const F = 4, S = ukuranAkhir * F, c = kanvas(S);
  const radius = bulat ? S * 0.23 : 0;
  const dalamKotak = (x, y) => {
    if (!bulat) return true;
    const cx = Math.min(Math.max(x, radius), S - radius);
    const cy = Math.min(Math.max(y, radius), S - radius);
    return (x - cx) ** 2 + (y - cy) ** 2 <= radius ** 2;
  };
  for (let y = 0; y < S; y++) for (let x = 0; x < S; x++) {
    if (!dalamKotak(x + 0.5, y + 0.5)) continue;
    // gradien diagonal dari ungu tua ke ungu terang
    const t = (x / S * 0.45 + y / S * 0.55);
    c.titik(x, y, [...campur(UNGU, UNGU2, t), 255]);
  }
  // satu batang lilin: x tengah, lebar, ujung atas dan bawah sumbu, badan
  const batang = (xc, lebar, atas, bawah, badanAtas, badanBawah, warna) => {
    const k = (v) => S / 2 + (v - 0.5) * S * isiRelatif;   // skala ke area aman
    const px = (v) => S / 2 + (v - 0.5) * S * isiRelatif;
    const x0 = px(xc - lebar / 2), x1 = px(xc + lebar / 2);
    const wLebar = Math.max(2, (x1 - x0) * 0.22);
    const xs = (x0 + x1) / 2 - wLebar / 2;
    for (let y = Math.round(k(atas)); y < Math.round(k(bawah)); y++)
      for (let x = Math.round(xs); x < Math.round(xs + wLebar); x++) c.titik(x, y, [...warna, 255]);
    for (let y = Math.round(k(badanAtas)); y < Math.round(k(badanBawah)); y++)
      for (let x = Math.round(x0); x < Math.round(x1); x++) c.titik(x, y, [...warna, 255]);
  };
  batang(0.255, 0.135, 0.505, 0.815, 0.575, 0.755, PUTIH);
  batang(0.500, 0.135, 0.285, 0.690, 0.360, 0.615, JINGGA);
  batang(0.745, 0.135, 0.185, 0.560, 0.240, 0.480, PUTIH);
  return perkecil(c, F);
}

const akar = path.join(__dirname, '..', 'assets', 'icons');
fs.mkdirSync(akar, { recursive: true });
const berkas = [
  ['icon-192.png',          gambar(192)],
  ['icon-512.png',          gambar(512)],
  // ikon maskable: latar penuh, isi dikecilkan ke zona aman 80%
  ['icon-maskable-512.png', gambar(512, { bulat: false, isiRelatif: 0.72 })],
  ['apple-touch-icon.png',  gambar(180, { bulat: false })],
  ['favicon-64.png',        gambar(64)]
];
berkas.forEach(([nama, c]) => {
  const buf = tulisPng(c.ukuran, c.ukuran, c.px);
  fs.writeFileSync(path.join(akar, nama), buf);
  console.log('  ' + nama.padEnd(24), c.ukuran + 'x' + c.ukuran, (buf.length / 1024).toFixed(1) + ' KB');
});
console.log('ikon selesai di assets/icons/');
