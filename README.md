# Landing Page & CV Digital — Adi Muhamad Muhsidi, S.SI., M.Kom. (`lp-adi`)

Repositori ini berisi kode sumber **Landing Page Profesional, CV Digital, dan Portofolio Akademik × Teknologi** milik **Adi Muhamad Muhsidi, S.SI., M.Kom.** ([adi-muhamad.my.id](https://adi-muhamad.my.id/)).

Selain berfungsi sebagai halaman profil & CV digital yang terindeks penuh oleh Google, proyek ini juga digunakan sebagai layanan port alternatif (**port `8181`**) pada **Cloudflare Tunnel (`HomeServerAdi`)** ketika sistem blog WordPress utama sedang dalam masa perawatan atau pengembangan di balik layar.

---

## 1. Arsitektur Server & Cloudflare Tunnel

Proyek ini berjalan di atas Virtual Machine (VM) Ubuntu (`192.168.1.102`) menggunakan container **Nginx Alpine** yang sangat ringan (hanya menggunakan RAM sekitar **4–5 MB**).

| Komponen | Nilai / Konfigurasi | Keterangan |
| :--- | :--- | :--- |
| **Nama Container** | `lp-adi-web` | Image `nginx:alpine` (`mem_limit: 32m`) |
| **Lokasi Folder Host** | `/home/adi/lp-adi` | Di-mount *read-only* ke `/usr/share/nginx/html:ro` |
| **Port Lokal (Host)** | `http://192.168.1.102:8181` | Dipetakan ke port `80` di dalam container |
| **Domain Utama** | `https://adi-muhamad.my.id` | Diarahkan dari Cloudflare Tunnel (`HomeServerAdi`) ke `:8181` saat LP aktif, atau ke `:8080` saat WordPress aktif |
| **Subdomain Dev WP** | `https://dev-wp.adi-muhamad.my.id` | Tetap mengarah ke `http://192.168.1.102:8080` agar dashboard WordPress selalu dapat diakses |

---

## 2. Struktur File

```text
/home/adi/lp-adi/
├── index.html              # Halaman utama Landing Page & CV Digital (HTML5 + CSS Variables + JS)
├── avatar.jpg              # Foto profil resmi sekaligus ikon Favicon & Open Graph image
├── robots.txt              # Mengizinkan Googlebot & mesin pencari mengindeks penuh halaman
├── PROFIL-LENGKAP-ADI.md   # Dokumentasi memori lengkap data profil, SINTA, Scholar, buku & bisnis
├── docker-compose.yml      # Konfigurasi Docker Compose untuk container nginx:alpine (port 8181)
└── README.md               # Dokumentasi proyek ini
```

---

## 3. Fitur Utama Halaman Landing Page (`index.html`)

1. **Identitas & Statistik Akademik Lengkap:**
   - Menampilkan profil **Adi Muhamad Muhsidi, S.SI., M.Kom.** (Lecture S1 Bisnis Digital Universitas Kuningan & Founder PT Digital Pustaka Karya Indonesia).
   - Bar metrik akademik & teknologi: **SINTA Score (500)**, **Sitasi Google Scholar (75+, h-index 6)**, **36+ Karya Ilmiah**, **7 Buku Referensi/Ajar**, **10 HKI**, dan **103+ Repositori GitHub**.
2. **Seksi Tech Stack (*Lecturer by Day, Coder by Night*):**
   - Merangkum *tools* & teknologi harian: **Frontend** (`HTML, CSS, JS`), **Backend** (`Firebase, Node.js`), **Data & Analytics** (`Python, Pandas, Matplotlib`), **AI & Automation** (`ML, LLM APIs, n8n`), **Development Tools** (`GitHub, Google Colab, Firebase Hosting`), serta **Cloud & Infrastructure** (`DigitalOcean, Linux Server, VPS`).
3. **Ekosistem Bisnis & Portofolio Proyek AI:**
   - Unit bisnis **PT Digital Pustaka Karya Indonesia** ([pustakakarya-id.web.app](https://pustakakarya-id.web.app/), `buku.pustakakarya.id`, `jurnal.pustakakarya.id`, `dev.pustakakarya.id`, `academy.pustakakarya.id`).
   - Proyek unggulan: **Exam AI System** (`exam.adi-muhamad.my.id`), **ChatBot AI Sontoloyo RAG** (`chat.adi-muhamad.my.id`), **CDL-Guru Adaptive AI**, **Sistem Catering Al-Bahjah (PWA)**, dan **Home AI Lab**.
4. **Filter Tab Publikasi Interaktif:**
   - Memudahkan pengunjung menyaring daftar **Hibah Penelitian (4)**, **Buku & Modul (10)**, **Artikel Jurnal Pilihan**, **HKI / Hak Cipta (10)**, dan **Pengabdian Masyarakat (9)**.
5. **Mode Tema Terang & Gelap (`Light` / `Dark` Mode):**
   - Tombol *switch* di bagian kanan atas header yang mengubah palet warna halaman secara instan dan menyimpan preferensi pengunjung di `localStorage`.
6. **SEO & Google Indexing Ready:**
   - Dilengkapi `<meta name="robots" content="index, follow">`, *Canonical URL*, *Open Graph tags*, **Schema.org `Person` JSON-LD**, dan `robots.txt`.

---

## 4. Panduan Kustomisasi Ukuran Tampilan (Desktop vs HP/Gadget)

Di bagian paling atas tag `<style>` pada `index.html`, terdapat blok variabel CSS terpisah untuk mengatur ukuran font dan tata letak antara layar **Desktop** dan layar **HP/Mobile** (mirip pengaturan *Responsive Typography* di WordPress):

```css
/* 1. Pengaturan Ukuran Tampilan DESKTOP (Layar Laptop/PC) */
:root {
    --fs-hero-name: 1.75rem;      /* Ukuran teks Nama Utama di Desktop */
    --fs-hero-role: 1.05rem;      /* Ukuran teks Jabatan di Desktop */
    --fs-hero-bio: 1rem;          /* Ukuran teks Paragraf Bio di Desktop */
    --fs-section-title: 1.75rem;  /* Ukuran Judul Seksi (H2) di Desktop */
    --fs-card-title: 1.12rem;     /* Ukuran Judul Kartu (H3) di Desktop */
    --fs-body: 0.92rem;           /* Ukuran teks isi kartu / daftar di Desktop */
    --fs-stat-val: 1.65rem;       /* Ukuran angka Statistik di Desktop */
    --avatar-size: 240px;         /* Ukuran Foto Profil di Desktop */
    --section-pad: 1.6rem;        /* Jarak atas-bawah antar seksi di Desktop */
}

/* 2. Pengaturan Ukuran Tampilan HP / GADGET (Layar <= 768px) */
@media (max-width: 768px) {
    :root {
        --fs-hero-name: 1.12rem;      /* Ukuran teks Nama Utama di HP */
        --fs-hero-role: 0.8rem;       /* Ukuran teks Jabatan di HP */
        --fs-hero-bio: 0.78rem;       /* Ukuran teks Paragraf Bio di HP */
        --fs-section-title: 1.12rem;  /* Ukuran Judul Seksi (H2) di HP */
        --fs-card-title: 0.9rem;      /* Ukuran Judul Kartu (H3) di HP */
        --fs-body: 0.76rem;           /* Ukuran teks isi kartu / daftar di HP */
        --fs-stat-val: 1.15rem;       /* Ukuran angka Statistik di HP */
        --avatar-size: 145px;         /* Ukuran Foto Profil di HP */
        --section-pad: 0.95rem;       /* Jarak atas-bawah antar seksi di HP */
    }
}
```
Setiap perubahan yang disimpan pada `index.html` akan **langsung aktif seketika** tanpa perlu me-*restart* container Docker.

---

## 5. Cara Menjalankan di Server / VPS Baru

```bash
# 1. Clone repositori
git clone <url-repo-lp-adi> lp-adi
cd lp-adi

# 2. Jalankan container Nginx Alpine di port 8181
docker compose up -d
```
Halaman langsung dapat diakses melalui `http://localhost:8181` atau dihubungkan ke Cloudflare Tunnel.
