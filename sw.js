/* Service worker TeknikalDrill — DIBUAT OTOMATIS, jangan disunting tangan.
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
const VERSI = '0a66d7eab225';
const CACHE_APP = 'td-app-' + VERSI;
const CACHE_LUAR = 'td-luar-v1';

const BERKAS = [
  "./",
  "assets/css/style.css",
  "assets/icons/apple-touch-icon.png",
  "assets/icons/favicon-64.png",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/icons/icon-maskable-512.png",
  "assets/js/app.js",
  "assets/js/chart.js",
  "assets/js/data.js",
  "data/cases-2.js",
  "data/cases-3.js",
  "data/cases-wmi.js",
  "data/cases-wppe.js",
  "data/cases.js",
  "data/chart-questions.js",
  "data/csa-akuntansi.js",
  "data/csa-dcf.js",
  "data/csa-derivatif.js",
  "data/csa-korporasi.js",
  "data/csa-model.js",
  "data/csa-obligasi.js",
  "data/csa-portofolio.js",
  "data/csa-relatif.js",
  "data/csa-tatakelola.js",
  "data/cta-aset.js",
  "data/cta-breadth.js",
  "data/cta-candle.js",
  "data/cta-elliott.js",
  "data/cta-portfolio.js",
  "data/cta-siklus.js",
  "data/cta-sistem.js",
  "data/cta-statistik.js",
  "data/cta-teori.js",
  "data/hitung.js",
  "data/hots-1.js",
  "data/hots-2.js",
  "data/hots-3.js",
  "data/hots-4.js",
  "data/hots-5.js",
  "data/hots-6.js",
  "data/hots-7.js",
  "data/hots-8.js",
  "data/hots-csa-1.js",
  "data/hots-csa-2.js",
  "data/hots-csa-3.js",
  "data/hots-rsa-1.js",
  "data/hots-rsa-2.js",
  "data/hots-rta-1.js",
  "data/hots-rta-2.js",
  "data/hots-wmi-1.js",
  "data/hots-wmi-2.js",
  "data/hots-wppe-1.js",
  "data/notes-csa-1.js",
  "data/notes-csa-2.js",
  "data/notes-cta-1.js",
  "data/notes-cta-2.js",
  "data/notes-rsa-1.js",
  "data/notes-rsa-2.js",
  "data/notes-rta-1.js",
  "data/notes-rta-2.js",
  "data/notes-rta-3.js",
  "data/notes-wmi-1.js",
  "data/notes-wmi-2.js",
  "data/notes-wppe-1.js",
  "data/notes-wppe-2.js",
  "data/rsa-etika.js",
  "data/rsa-laporan.js",
  "data/rsa-makro.js",
  "data/rsa-obligasi.js",
  "data/rsa-pasar.js",
  "data/rsa-rasio.js",
  "data/rsa-valuasi.js",
  "data/rta-candle.js",
  "data/rta-chart.js",
  "data/rta-dasar.js",
  "data/rta-indikator-1.js",
  "data/rta-indikator-2.js",
  "data/rta-kekuatan.js",
  "data/rta-kurikulum.js",
  "data/rta-level.js",
  "data/rta-plan.js",
  "data/rta-riset.js",
  "data/rta-trend.js",
  "data/wmi-efek.js",
  "data/wmi-ekonomi.js",
  "data/wmi-etika.js",
  "data/wmi-kinerja.js",
  "data/wmi-lembaga.js",
  "data/wmi-operasional.js",
  "data/wmi-portofolio.js",
  "data/wmi-produk.js",
  "data/wmi-risiko.js",
  "data/wppe-dasar.js",
  "data/wppe-etika.js",
  "data/wppe-layanan.js",
  "data/wppe-nasabah.js",
  "data/wppe-operasional.js",
  "data/wppe-produk.js",
  "data/wppe-transaksi.js",
  "index.html",
  "manifest.webmanifest"
];

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
