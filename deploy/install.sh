#!/usr/bin/env bash
# Pemasangan TeknikalDrill di VPS Ubuntu/Debian, sekali jalan.
#
#   sudo bash install.sh <domain> <email>
#
# contoh:
#   sudo bash install.sh teknikaldrill.duckdns.org saya@contoh.com
#
# Yang dikerjakan:
#   1. memasang nginx, certbot, dan git
#   2. mengambil kode dari GitHub ke /var/www/teknikaldrill
#   3. menyalakan nginx dengan vhost http dulu (supaya certbot bisa verifikasi)
#   4. mengambil sertifikat Let's Encrypt
#   5. mengganti vhost menjadi https penuh lalu memuat ulang nginx
#   6. memasang timer pembaruan harian
#
# Langkah 3 sampai 5 sengaja dipisah. Vhost https menunjuk ke berkas
# sertifikat yang belum ada, jadi kalau langsung dipasang, nginx gagal start,
# dan certbot tidak punya tempat menaruh berkas pembuktiannya.
set -euo pipefail

REPO="https://github.com/BeixuanTianjun/teknikaldrill.git"
ROOT="/var/www/teknikaldrill"
SITE="teknikaldrill"

merah()  { printf '\033[31m%s\033[0m\n' "$*"; }
hijau()  { printf '\033[32m%s\033[0m\n' "$*"; }
info()   { printf '\033[36m==>\033[0m %s\n' "$*"; }

DOMAIN="${1:-}"
EMAIL="${2:-}"
if [ -z "$DOMAIN" ] || [ -z "$EMAIL" ]; then
    merah "pakai: sudo bash install.sh <domain> <email>"
    merah "contoh: sudo bash install.sh teknikaldrill.duckdns.org saya@contoh.com"
    exit 1
fi
[ "$(id -u)" = "0" ] || { merah "jalankan dengan sudo"; exit 1; }

# --- 0. periksa domain sudah mengarah ke mesin ini ---------------------------
# certbot akan gagal kalau DNS-nya belum benar, dan kegagalan itu ikut
# menghabiskan jatah percobaan Let's Encrypt. Lebih baik berhenti di sini.
info "memeriksa arah domain $DOMAIN"
apt-get update -qq
apt-get install -y -qq dnsutils curl >/dev/null
IP_MESIN=""
for sumber in https://api.ipify.org https://ifconfig.me/ip https://icanhazip.com; do
    IP_MESIN=$(curl -fsS --max-time 10 "$sumber" 2>/dev/null | tr -d '[:space:]') && [ -n "$IP_MESIN" ] && break
done
# Sebuah domain bisa punya lebih dari satu A record, jadi yang diperiksa
# adalah apakah IP mesin ini ADA DI ANTARA daftarnya, bukan sama dengan
# salah satu baris yang kebetulan terambil.
IP_DOMAIN=$(dig +short "$DOMAIN" A | grep -E '^[0-9.]+$' || true)
if [ -z "$IP_DOMAIN" ]; then
    merah "domain $DOMAIN belum mengarah ke alamat IP mana pun."
    merah "daftarkan dulu di https://www.duckdns.org lalu isikan IP VPS ini: ${IP_MESIN:-<ip vps>}"
    exit 1
fi
if [ -z "$IP_MESIN" ]; then
    info "alamat IP mesin ini tidak bisa dipastikan, pemeriksaan kecocokan dilewati"
    info "domain mengarah ke: $(echo "$IP_DOMAIN" | tr '\n' ' ')"
elif ! printf '%s\n' "$IP_DOMAIN" | grep -qx "$IP_MESIN"; then
    merah "domain $DOMAIN mengarah ke $(echo "$IP_DOMAIN" | tr '\n' ' '), sedangkan mesin ini $IP_MESIN."
    merah "perbaiki dulu arah domainnya, kalau tidak pengambilan sertifikat pasti gagal"
    merah "dan kegagalannya ikut memotong jatah percobaan Let's Encrypt."
    exit 1
else
    hijau "domain sudah mengarah ke mesin ini ($IP_MESIN)"
fi

# --- 1. paket ---------------------------------------------------------------
info "memasang nginx, certbot, dan git"
apt-get install -y -qq nginx certbot git >/dev/null

# --- 2. kode ----------------------------------------------------------------
if [ -d "$ROOT/.git" ]; then
    info "kode sudah ada, mengambil pembaruan"
    git -C "$ROOT" pull --ff-only
else
    info "mengambil kode ke $ROOT"
    rm -rf "$ROOT"
    git clone --depth 1 "$REPO" "$ROOT"
fi
chown -R www-data:www-data "$ROOT"

# --- 3. vhost sementara khusus http -----------------------------------------
info "menyalakan nginx dengan vhost sementara"
mkdir -p /var/www/html/.well-known/acme-challenge
cat > "/etc/nginx/sites-available/$SITE" <<EOF
server {
    listen 80;
    server_name $DOMAIN;
    location /.well-known/acme-challenge/ { root /var/www/html; }
    root $ROOT;
    index index.html;
    location / { try_files \$uri \$uri/ /index.html; }
}
EOF
ln -sf "/etc/nginx/sites-available/$SITE" "/etc/nginx/sites-enabled/$SITE"
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable --now nginx >/dev/null 2>&1 || true
systemctl reload nginx

# --- 4. sertifikat ----------------------------------------------------------
if [ -f "/etc/letsencrypt/live/$DOMAIN/fullchain.pem" ]; then
    info "sertifikat untuk $DOMAIN sudah ada, tahap ini dilewati"
else
    info "mengambil sertifikat Let's Encrypt"
    certbot certonly --webroot -w /var/www/html \
        -d "$DOMAIN" --email "$EMAIL" \
        --agree-tos --no-eff-email --non-interactive
fi

# --- 5. vhost https penuh ---------------------------------------------------
info "memasang vhost https"
bash "$ROOT/deploy/render-conf.sh" "$DOMAIN" > "/etc/nginx/sites-available/$SITE"
nginx -t
systemctl reload nginx

# --- 6. pembaruan otomatis --------------------------------------------------
info "memasang timer pembaruan harian"
install -m 755 "$ROOT/deploy/update.sh" /usr/local/bin/teknikaldrill-update
cat > /etc/systemd/system/teknikaldrill-update.service <<EOF
[Unit]
Description=Memperbarui TeknikalDrill dari GitHub
After=network-online.target

[Service]
Type=oneshot
ExecStart=/usr/local/bin/teknikaldrill-update
EOF
cat > /etc/systemd/system/teknikaldrill-update.timer <<EOF
[Unit]
Description=Pembaruan harian TeknikalDrill

[Timer]
OnCalendar=daily
RandomizedDelaySec=2h
Persistent=true

[Install]
WantedBy=timers.target
EOF
systemctl daemon-reload
systemctl enable --now teknikaldrill-update.timer >/dev/null

# certbot sudah memasang timer pembaruan sertifikatnya sendiri saat dipasang
systemctl list-timers --all 2>/dev/null | grep -q certbot \
    || info "catatan: timer pembaruan sertifikat certbot tidak terlihat, periksa 'systemctl list-timers'"

hijau ""
hijau "selesai. buka https://$DOMAIN"
hijau ""
echo "pembaruan berikutnya berjalan sendiri tiap hari, atau paksa dengan:"
echo "    sudo teknikaldrill-update"
