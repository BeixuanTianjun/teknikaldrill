#!/usr/bin/env bash
# Menarik pembaruan TeknikalDrill dari GitHub lalu memuat ulang nginx.
# Dipasang install.sh sebagai /usr/local/bin/teknikaldrill-update dan
# dijalankan timer harian.
set -euo pipefail

ROOT="${TEKNIKALDRILL_ROOT:-/var/www/teknikaldrill}"
cd "$ROOT"

LAMA=$(git rev-parse HEAD)
git fetch --quiet origin
BARU=$(git rev-parse origin/HEAD 2>/dev/null || git rev-parse origin/main)

if [ "$LAMA" = "$BARU" ]; then
    echo "sudah versi terbaru ($(git rev-parse --short HEAD))"
    exit 0
fi

echo "memperbarui $(git rev-parse --short "$LAMA") -> $(git rev-parse --short "$BARU")"
git merge --ff-only "$BARU"
chown -R www-data:www-data "$ROOT"

# Periksa isi kalau node tersedia. Kegagalan di sini tidak membatalkan
# pembaruan yang sudah terjadi, tetapi wajib terlihat di log supaya
# ketahuan ada yang salah pada rilis itu.
if command -v node >/dev/null 2>&1 && [ -f tools/validate.js ]; then
    if node tools/validate.js >/tmp/teknikaldrill-validate.log 2>&1; then
        echo "validasi bank soal lolos"
    else
        echo "PERINGATAN: validasi bank soal gagal, periksa /tmp/teknikaldrill-validate.log" >&2
        tail -20 /tmp/teknikaldrill-validate.log >&2
    fi
fi

# sw.js yang usang membuat pembaruan tidak pernah sampai ke perangkat
# yang sudah memasang aplikasinya, jadi ini diperiksa terpisah.
if command -v node >/dev/null 2>&1 && [ -f tools/gen-sw.js ]; then
    if node tools/validate.js 2>&1 | grep -q 'sw.js sudah usang'; then
        echo "PERINGATAN: sw.js usang terhadap isi repositori. Perbaiki di sisi pengembangan" >&2
        echo "dengan 'node tools/gen-sw.js' lalu dorong ulang, jangan disusun ulang di server" >&2
        echo "supaya isi server tetap sama persis dengan isi repositori." >&2
    fi
fi

nginx -t && systemctl reload nginx
echo "selesai, kini pada $(git rev-parse --short HEAD)"
