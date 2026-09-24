#!/usr/bin/env bash
# Menyusun vhost nginx dari templat: mengisi nama domain dan memilih bentuk
# direktif http2 yang sesuai dengan versi nginx yang terpasang.
#
#   pakai: render-conf.sh <domain> [berkas-templat]
set -euo pipefail

DOMAIN="${1:?pakai: render-conf.sh <domain> [templat]}"
TEMPLATE="${2:-$(dirname "$0")/teknikaldrill.nginx.conf}"

ver=$(nginx -v 2>&1 | sed -n 's#.*nginx/\([0-9.]*\).*#\1#p')
[ -n "$ver" ] || { echo "tidak bisa membaca versi nginx" >&2; exit 1; }

# Sebagian VPS mematikan IPv6. Kalau baris listen [::] tetap ditulis di sana,
# nginx gagal start dengan "Address family not supported by protocol".
if [ -f /proc/net/if_inet6 ] && [ "$(cat /proc/sys/net/ipv6/conf/all/disable_ipv6 2>/dev/null || echo 1)" = "0" ]; then
    HAS_V6=1
else
    HAS_V6=0
fi

# bandingkan versi: 1.25.1 ke atas memakai "http2 on;" sebagai direktif sendiri
if [ "$(printf '%s\n1.25.1\n' "$ver" | sort -V | head -1)" = "1.25.1" ]; then
    listen4='listen 443 ssl;'
    listen6='listen [::]:443 ssl;'
    http2='http2 on;'
else
    listen4='listen 443 ssl http2;'
    listen6='listen [::]:443 ssl http2;'
    http2='# http2 diaktifkan lewat direktif listen di atas (nginx < 1.25.1)'
fi

if [ "$HAS_V6" = "0" ]; then
    listen6='# IPv6 tidak tersedia di mesin ini, baris listen [::] dilewati'
    V6_80='# IPv6 tidak tersedia di mesin ini, baris listen [::] dilewati'
else
    V6_80='listen [::]:80;'
fi

sed -e "s|LISTEN443_PLACEHOLDER|$listen4|" \
    -e "s|LISTEN443_V6_PLACEHOLDER|$listen6|" \
    -e "s|HTTP2_PLACEHOLDER|$http2|" \
    -e "s|^    listen \[::\]:80;|    $V6_80|" \
    -e "s|DOMAIN_PLACEHOLDER|$DOMAIN|g" \
    "$TEMPLATE"
