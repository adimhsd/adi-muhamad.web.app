export const projectsSection = {
  eyebrow: '// 04. PORTOFOLIO SISTEM & RISET TERAPAN',
  title: 'Proyek Teknologi & Eksperimen Home AI Lab',
  description:
    'Kumpulan produk perangkat lunak, prototipe hasil riset kompetitif, serta eksperimen infrastruktur mandiri yang saya bangun dan jalankan secara aktif di Home AI Lab. Setiap proyek lahir dari permasalahan riil di lapangan, mulai dari otomatisasi evaluasi akademik, asisten percakapan berbasis RAG, hingga digitalisasi operasional mitra dan UMKM.',
  projects: [
    {
      badge: 'AI EDTECH PLATFORM',
      badgeVariant: 'cyan',
      title: 'Exam AI System',
      description:
        'Platform ujian berbasis web dengan pembuatan soal otomatis berbasis AI, koreksi lembar jawaban OCR, dan analitik performa mahasiswa (Next.js, FastAPI, Celery, PostgreSQL).',
      linkLabel: 'exam.adi-muhamad.my.id',
      href: 'https://exam.adi-muhamad.my.id',
    },
    {
      badge: 'RAG & VECTOR DB',
      badgeVariant: 'indigo',
      title: 'ChatBot AI Sontoloyo',
      description:
        'Asisten percakapan berbasis Retrieval-Augmented Generation (RAG) dengan PostgreSQL pgvector yang menjawab pertanyaan berdasarkan basis pengetahuan pribadi & akademik.',
      linkLabel: 'chat.adi-muhamad.my.id',
      href: 'https://chat.adi-muhamad.my.id',
    },
    {
      badge: 'AI ADAPTIVE LEARNING',
      badgeVariant: 'emerald',
      title: 'CDL-Mahasiswa UNIKU Adaptive AI',
      description:
        'Platform Sistem AI-Based Adaptive Learning untuk Personalisasi Bias Informasi dalam Penguatan Critical Digital Literacy (CDL) Mahasiswa Universitas Kuningan.',
      linkLabel: 'cdl.adi-muhamad.my.id',
      href: 'https://cdl.adi-muhamad.my.id/',
    },
    {
      badge: 'ENTERPRISE WEB / PWA',
      badgeVariant: 'amber',
      title: 'Sistem Catering Al-Bahjah',
      description:
        'Sistem Informasi Pengadaan Bahan Makanan Catering Pondok Pesantren Al-Bahjah untuk digitalisasi nota pembelian, laporan otomatis Excel & PDF berbasis PWA.',
      linkLabel: 'github.com/adimhsd/catering-ab',
      href: 'https://github.com/adimhsd/catering-ab',
    },
    {
      badge: 'DIGITALISASI UMKM',
      badgeVariant: 'cyan',
      title: 'Landing Page & Web UMKM',
      description:
        'Pengembangan Company Profile dan Level Up Digitalisasi UMKM lokal dan lembaga pendidikan.',
      linkLabel: 'Lihat Repositori',
      href: 'https://github.com/adimhsd?tab=repositories&q=landing+page&type=&language=&sort=',
    },
    {
      badge: 'SELF-HOSTED INFRASTRUCTURE',
      badgeVariant: 'indigo',
      title: 'Home AI Lab (Home Server)',
      description:
        'Infrastruktur klaster server pribadi berbasis Linux, Docker, dan Cloudflare Zero Trust Tunnel untuk eksperimen LLM lokal, AI Agent, dan layanan lainya menggunakan Proxmox VE.',
      linkLabel: 'Akses Chetshet',
      href: 'https://community-scripts.org/',
    },
  ],
};
