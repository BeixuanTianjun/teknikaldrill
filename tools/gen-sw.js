#!/usr/bin/env node
/* Menyusun service worker beserta daftar berkas yang dipracache.

   Daftarnya dibaca langsung dari index.html, jadi menambah berkas bank soal
   atau materi tidak menuntut penyuntingan service worker. Versi cache
   diturunkan dari isi seluruh berkas: begitu ada satu berkas berubah,
   versinya ikut berubah dan peramban mengunduh ulang yang perlu saja.

   Jalankan: node tools/gen-sw.js */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const akar = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(akar, 'index.html'), 'utf8');

/* kumpulkan seluruh rujukan berkas lokal dari index.html */
const daftar = new Set(['./', 'index.html', 'manifest.webmanifest']);
const pola = /(?:src|href)="([^"]+)"/g;
let m;
while ((m = pola.exec(html)) !== null) {
  const url = m[1];
  if (/^(https?:|data:|#|mailto:)/.test(url)) continue;   // lewati sumber luar
  daftar.add(url.replace(/^\.\//, ''));
}
['assets/icons/icon-192.png', 'assets/icons/icon-512.png',
 'assets/icons/icon-maskable-512.png', 'assets/icons/apple-touch-icon.png',
 'assets/icons/favicon-64.png'].forEach(f => daftar.add(f));

const berkas = Array.from(daftar).sort();
const hilang = berkas.filter(f => f !== './' && !fs.existsSync(path.join(akar, f)));
if (hilang.length) { console.error('berkas tidak ditemukan:', hilang.join(', ')); process.exit(1); }

/* versi cache = ringkasan isi seluruh berkas */
const ringkas = crypto.createHash('sha256');
berkas.filter(f => f !== './').sort().forEach(f => {
  ringkas.update(f);
  ringkas.update(fs.readFileSync(path.join(akar, f)));
});
const versi = ringkas.digest('hex').slice(0, 12);

const isi = `/* Service worker TeknikalDrill — DIBUAT OTOMATIS, jangan disunting tangan.
   Perbarui dengan: node tools/gen-sw.js

   Strategi:
   - berkas aplikasi dipracache saat pemasangan, lalu dilayani dari cache
     sehingga aplikasi tetap jalan tanpa jaringan;
   - berkas dari luar asal (huruf dari Google Fonts) dilayani dari cache
     sambil diperbarui di latar, karena kegagalannya tidak boleh
     menjatuhkan halaman;
   - permintaan navigasi selalu jatuh ke index.html supaya pembukaan
     langsung dari layar utama tetap bekerja saat luring.

   Seluruh jalur ditulis relatif supaya aplikasi bisa dipasang di
   subdirektori (misalnya GitHub Pages) tanpa penyesuaian. */
const VERSI = '${versi}';
const CACHE_APP = 'td-app-' + VERSI;
const CACHE_LUAR = 'td-luar-v1';

const BERKAS = ${JSON.stringify(berkas, null, 2).replace(/\n/g, '\n')};

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE_APP);
    // satu per satu: satu berkas gagal tidak boleh menggagalkan pemasangan
    await Promise.all(BERKAS.map(async (f) => {
      try { await cache.add(new Request(f, { cache: 'reload' })); }
      catch (err) { console.warn('[sw] gagal pracache', f, err); }
    }));
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const nama = await caches.keys();
    await Promise.all(nama.map((n) => {
      if (n === CACHE_APP || n === CACHE_LUAR) return null;
      return caches.delete(n);                       // buang versi lama
    }));
    await self.clients.claim();
  })());
});

/* halaman meminta versi baru segera dipakai */
self.addEventListener('message', (e) => {
  if (e.data && e.data.tipe === 'PAKAI_SEKARANG') self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try { return await fetch(req); }
      catch (err) {
        const cache = await caches.open(CACHE_APP);
        return (await cache.match('index.html')) || (await cache.match('./')) || Response.error();
      }
    })());
    return;
  }

  if (url.origin === self.location.origin) {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE_APP);
      const tersimpan = await cache.match(req, { ignoreSearch: true });
      if (tersimpan) return tersimpan;
      try {
        const jawaban = await fetch(req);
        if (jawaban && jawaban.ok) cache.put(req, jawaban.clone());
        return jawaban;
      } catch (err) {
        return tersimpan || Response.error();
      }
    })());
    return;
  }

  // huruf dan sumber luar: pakai cache dulu, perbarui diam-diam di latar
  e.respondWith((async () => {
    const cache = await caches.open(CACHE_LUAR);
    const tersimpan = await cache.match(req);
    const jaringan = fetch(req).then((jawaban) => {
      if (jawaban && (jawaban.ok || jawaban.type === 'opaque')) cache.put(req, jawaban.clone());
      return jawaban;
    }).catch(() => null);
    return tersimpan || (await jaringan) || Response.error();
  })());
});
`;

fs.writeFileSync(path.join(akar, 'sw.js'), isi);
console.log('sw.js dibuat | versi', versi, '|', berkas.length, 'berkas dipracache');
