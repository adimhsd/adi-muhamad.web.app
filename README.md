# Landing Page & CV Digital — Adi Muhamad Muhsidi, S.SI., M.Kom.

<p align="center">
  <img src="public/avatar.jpg" alt="Adi Muhamad Muhsidi, S.SI., M.Kom." width="150" />
</p>

Repositori ini berisi kode sumber **Landing Page Profesional, CV Digital, dan Portofolio Akademik × Teknologi** milik **Adi Muhamad Muhsidi, S.SI., M.Kom.** ([adi-muhamad.web.app](https://adi-muhamad.web.app/)).

Proyek ini dibangun sebagai aplikasi web modern berbasis **React + Vite + Tailwind CSS** dengan desain **Ubuntu Yaru Theme** (*Light* & *Dark Mode*) dan di-deploy menggunakan **Firebase Hosting**.

---

## 1. Tech Stack

- **Framework UI:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS v3 (`darkMode: 'class'`) + Ubuntu Yaru CSS Variables ([style-ubuntu.md](style-ubuntu.md))
- **Tipografi:** Google Fonts (`Ubuntu` & `Ubuntu Mono`)
- **Hosting:** Firebase Hosting ([adi-muhamad.web.app](https://adi-muhamad.web.app/))

---

## 2. Struktur Proyek

```text
adi-muhamad.web.app/
├── public/
│   ├── avatar.jpg                 # Foto profil resmi, favicon, & Open Graph image
│   └── robots.txt                 # Konfigurasi indexing mesin pencari
├── src/
│   ├── components/
│   │   ├── AboutExpertise.jsx     # Seksi Profil, Keahlian, Mata Kuliah & Kutipan
│   │   ├── Badge.jsx              # Komponen badge kategori Ubuntu Yaru
│   │   ├── BusinessEcosystem.jsx  # Ekosistem PT Digital Pustaka Karya Indonesia
│   │   ├── Footer.jsx             # Kontak, tautan resmi & peta lokasi
│   │   ├── Hero.jsx               # Identitas utama, avatar, CTA & tautan akademik
│   │   ├── Navbar.jsx             # Navigasi sticky + toggle Light/Dark Mode
│   │   ├── Projects.jsx           # Portofolio proyek AI & Home AI Lab
│   │   ├── Publications.jsx       # Filter tab & pencarian karya ilmiah/HKI/PKM
│   │   ├── SectionHeader.jsx      # Header seragam tiap seksi
│   │   ├── StatsBar.jsx           # 6 kartu metrik SINTA, Scholar, Buku, HKI, GitHub
│   │   └── TechStack.jsx          # 6 kartu Tech Stack & daily tools
│   ├── data/
│   │   ├── business.js            # Data unit bisnis PT Digital Pustaka Karya Indonesia
│   │   ├── expertise.js           # Data keahlian, mata kuliah & kutipan inspirasi
│   │   ├── profile.js             # Data identitas, statistik, kontak & tautan resmi
│   │   ├── projects.js            # Data proyek teknologi & Home AI Lab
│   │   ├── publications.js        # Data hibah, buku, jurnal, HKI & pengabdian
│   │   └── techStack.js           # Data tech stack harian
│   ├── App.jsx                    # Root komponen & manajemen tema (localStorage)
│   ├── index.css                  # Direktif Tailwind & token CSS Ubuntu Yaru
│   └── main.jsx                   # Entry point React
├── .firebaserc                    # Mapping Firebase Project ID (adimhsd-28)
├── firebase.json                  # Konfigurasi Firebase Hosting (site, public, rewrites)
├── index.html                     # Entry HTML Vite + SEO meta, Open Graph & JSON-LD
├── PROFIL-LENGKAP-ADI.md          # Catatan lengkap profil, SINTA, Scholar & karya
├── style-ubuntu.md                # Panduan desain sistem Ubuntu Yaru
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

---

## 3. Menjalankan Secara Lokal

```bash
# 1. Install dependensi
npm install

# 2. Jalankan server pengembangan (HMR)
npm run dev

# 3. Build untuk produksi (output ke folder dist/)
npm run build

# 4. Preview hasil build produksi secara lokal
npm run preview
```

---

## 4. Konfigurasi & Deployment Firebase Hosting

Proyek ini di-deploy ke **Firebase Hosting** dengan konfigurasi berikut (tersimpan pada `.firebaserc` dan `firebase.json`):

| Pengaturan | Nilai |
| :--- | :--- |
| **Firebase Project ID** | `adimhsd-28` |
| **Hosting Site** | `adi-muhamad` |
| **Hosting URL** | `https://adi-muhamad.web.app/` |
| **Build command** | `npm run build` |
| **Public directory** | `dist` |
| **SPA Rewrite** | `**` → `/index.html` |

### Langkah Deploy Manual

```bash
# 1. Login ke Firebase CLI (jika belum login)
npx firebase-tools login

# 2. Build aplikasi untuk produksi
npm run build

# 3. Deploy ke Firebase Hosting
npx firebase-tools deploy --only hosting
```
