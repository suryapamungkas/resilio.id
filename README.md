<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1e7d949b-f0fb-4489-a8e3-63d416c70aa0" />

# resilio.id — Platform Ketahanan Ekonomi Nasional

[![Next.js](https://img.shields.io/badge/Next.js-14.2.15-0F5132?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-20B2AA?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-0D6E6E?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-D1E7DD?style=for-the-badge&logo=tailwind-css&logoColor=0F5132)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-E8F5E9?style=for-the-badge&logo=open-source-initiative&logoColor=0F5132)](LICENSE)
[![Author](https://img.shields.io/badge/Owner-Nur_Hidayat_Surya_Pamungkas-0F5132?style=for-the-badge)](https://github.com)

> **"Membangun Benteng Finansial Keluarga Indonesia."**  
> Platform company profile & solusi interaktif berstandar enterprise untuk memperkuat ketahanan ekonomi masyarakat (*Economically Insecure & Economic Shock Response*).

---

## 📌 Gambaran Proyek

**resilio.id** adalah infrastruktur perlindungan ekonomi masyarakat Indonesia yang dirancang dengan standar arsitektur kelas enterprise (terinspirasi dari ekosistem Philips & Stripe). Platform ini hadir untuk memitigasi risiko guncangan ekonomi tak terduga—seperti gelombang Pemutusan Hubungan Kerja (PHK), musibah sakit kritis, jeratan pinjol ilegal/rentenir, serta kenaikan harga kebutuhan pokok.

Melalui pendekatan holistik, resilio.id mengintegrasikan penyiapan dana darurat mikro, proteksi pendapatan keluarga, akses pembiayaan sehat etis, dan tata kelola kas gotong royong warga RT/RW berbasis escrow digital transparan.

---

## 🎨 Design System: Palet Emerald & Mint (Modern & Inklusif)

Website ini mengadopsi palet warna modern yang dirancang untuk keterbacaan tinggi dan kenyamanan visual (*low eye-strain*):

- **Warna Utama (Primary):** **Emerald Green** (`#0F5132` / `#0D6E6E`)  
  *Memberikan impresi profesional, mapan, stabil, dan tepercaya.*
- **Warna Sekunder (Secondary Background):** **Mint / Soft Emerald** (`#D1E7DD` / `#E8F5E9`)  
  *Digunakan pada latar kartu fitur, badge pilar, dan matriks data agar mata pengguna tidak cepat lelah saat membaca data finansial.*
- **Warna Aksen & CTA:** **Teal / Cyan Soft** (`#20B2AA`)  
  *Memberikan aksen teknologi modern pada button utama Call-to-Action, step tracker, dan slider interaktif.*

---

## ✨ Fitur-Fitur Utama (Core Architecture)

### 1. Dual Segment Switcher
Navigasi bar bagian atas yang memungkinkan pengguna beralih antara:
- **Untuk Perorangan & Keluarga:** Fokus pada buffer dana darurat rumah tangga, proteksi rawat inap, dan mitigasi PHK.
- **Untuk Komunitas & Mitra B2B:** Fokus pada dana darurat gotong royong RT/RW, kas paguyuban, serta *Corporate Employee Resilience*.

### 2. 6 Pilar Ketahanan Ekonomi (Philips Style Grid)
Card Grid interaktif lengkap dengan ikon visual, nomor pilar, indikator metrik, dan modal dialog pop-up yang merinci tantangan lapangan (*problem statement*), pendekatan Resilio, alur operasional, serta FAQ:
1. **Emergency Financial Planning:** Modul kalkulator cash buffer 3–6 bulan berbasis pengeluaran riil bulanan.
2. **Akses Pembiayaan Sehat (Ethical Micro-Financing):** Kredit mikro berbunga rendah dan transparan tanpa biaya tersembunyi atau jeratan pinjol predator.
3. **Asuransi Mikro & Income Protection:** Santunan harian tunai rawat inap (Rp 250.000/hari) dan tunjangan transisi nafkah pasca-PHK.
4. **Emergency Fund Berbasis Komunitas:** Rekening kas bersama digital untuk RT/RW dan Koperasi dengan verifikasi *multi-approval* transparan.
5. **Akses Pekerjaan & Income Alternatif:** Pelatihan vokasi kilat 14 hari dan jembatan ke ekosistem gig economy / wirausaha mikro.
6. **Sistem Peringatan Dini Risiko Keuangan (Early Warning System):** Algoritma skoring otomatis untuk mendeteksi *financial stress* rumah tangga.

### 3. Early Warning Health Check Form Engine
Formulir diagnosa 4-langkah berbasis **React Hook Form + Zod Validator**:
- **Langkah 1:** Pendapatan Bulanan Bersih & Pola Stabilitas Arus Kas.
- **Langkah 2:** Pengeluaran Wajib Bulanan & Total Dana Darurat Likuid Saat Ini.
- **Langkah 3:** Status Pekerjaan, Jumlah Jiwa Tanggungan, dan Total Cicilan Utang Berjalan.
- **Langkah 4:** Faktor Risiko Tertinggi yang Dikhawatirkan (PHK, Medis, Inflasi, Pinjol).
- **Hasil Diagnosa:**
  - Skor Ketahanan Finansial (0–100): Status *Rentan*, *Sedang*, atau *Kuat*.
  - Indikator: *Emergency Runway (bulan)*, *Debt Service Ratio (DSR)*, dan *Vulnerability Index*.
  - Paket Rekomendasi Terarah yang terhubung langsung ke 6 Pilar Resilio.
  - Action Plan Taktis 30 Hari.
  - Opsi Cetak / Simpan Ringkasan PDF (*print-friendly*).

### 4. Emergency Fund & Micro-Protection Calculator
- Slider interaktif simulasi alokasi mikro harian/bulanan (mulai Rp 5.000/hari).
- Target buffer fleksibel (3 bulan, 6 bulan, atau 12 bulan).
- Proyeksi tabungan 6, 12, dan 24 bulan dengan imbal hasil syariah likuid ~5.5% p.a.
- Manfaat perlindungan otomatis: Santunan Rawat Inap, Santunan Transisi PHK, dan Santunan Duka/Kecelakaan.

### 5. Pusat Tanggap Krisis Finansial (Crisis Rapid Response)
Panduan tindakan darurat 48 jam pertama:
- Prosedur Darurat 48 Jam Pertama Setelah Terkena PHK (pengamanan pesangon & aktivasi JKP).
- Protokol Penyelamatan dari Teror Pinjol Ilegal & Rentenir (lapor Satgas PASTI OJK 157).
- Tanggap Darurat Biaya Sakit Kritis Tanpa Perlindungan Cukup.
- Hotline Darurat Bebas Pulsa 24 Jam: `0800-140-RESILIO`.

### 6. Matriks Komparasi Etis
Tabel komparatif transparan antara **Resilio.id** vs **Pinjol Ilegal/Rentenir** vs **Tabungan Bank Konvensional Tanpa Proteksi**.

### 7. Lead Capture & E-Book Zone
Formulir pendaftaran untuk mengunduh e-book: *"Panduan Selamat Dari Crisis & Shock Ekonomi (Edisi 2026)"* lengkap dengan 3D mockup buku dan pemicu unduh instan.

### 8. Quick Command Search Palette (Ctrl + K)
Modal pencarian global yang dapat diakses melalui keyboard shortcut `Ctrl + K` untuk navigasi kilat ke pilar, alat interaktif, atau artikel krisis.

### 9. Enterprise Compliance Architecture
- Tanda terdaftar / dalam pengawasan **Regulatory Sandbox OJK** (Klaster Inovasi Keuangan Digital Sosial).
- Kepatuhan **Kode Etik AFPI** (Asosiasi Fintech Pendanaan Bersama Indonesia).
- Standar Keamanan Data **ISO/IEC 27001** & Kepatuhan **UU Pelindungan Data Pribadi (UU PDP No. 27/2022)**.
- Opsi Tata Kelola Simpanan Berprinsip Syariah (Akad Tabarru' & Bebas Riba).

---

## 🛠️ Tech Stack & Standar Rekayasa

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static Prerendering, Server-Side Optimization)
- **Library UI:** [React 18](https://reactjs.org/)
- **Bahasa:** [TypeScript 5](https://www.typescriptlang.org/) (Strict Mode)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) + PostCSS + Autoprefixer
- **Form & Validation:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) + `@hookform/resolvers`
- **Ikonografi:** [Lucide React](https://lucide.dev/)
- **Utilitas Styling:** `clsx` + `tailwind-merge`
- **Pedoman Rekayasa Web:** Mematuhi panduan web modern:
  - Accessible Forms (semantic fieldset, label association, `inputmode="numeric"`, `accent-color`)
  - Web Performance (LCP `fetchPriority="high"`, below-the-fold `loading="lazy"`, server Gzip compression, no powered-by header)
  - Responsive & Balanced Typography (`text-wrap: balance`, `text-wrap: pretty`)

---

## 📂 Struktur Direktori Proyek

```
resilio.id/
├── public/
│   └── images/                       # Aset visual AI beresolusi tinggi
│       ├── hero-family.jpg           # Visual hero segmen keluarga
│       ├── community-aid.jpg         # Visual hero segmen komunitas RT/RW
│       ├── ebook-cover.jpg           # 3D mockup cover e-book
│       └── fortress-shield.jpg       # Visual 3D benteng finansial
├── src/
│   ├── app/
│   │   ├── globals.css               # Design tokens, variables, font, scrollbar
│   │   ├── layout.tsx                # Root layout, metadata SEO, OpenGraph, font
│   │   └── page.tsx                  # Main single-page application
│   ├── components/
│   │   ├── ComparisonMatrix.tsx      # Tabel komparasi etis Resilio vs Pinjol
│   │   ├── CrisisRapidResponse.tsx   # Pusat respon krisis & hotline darurat
│   │   ├── EmergencyCalculator.tsx   # Slider alokasi tabungan & kalkulator buffer
│   │   ├── Footer.tsx                # Footer 4 kolom & legal compliance banner
│   │   ├── HealthCheckForm.tsx       # 4-step early warning form engine
│   │   ├── HeroSection.tsx           # Dynamic hero banner adaptif segmen
│   │   ├── LeadCaptureSection.tsx    # E-book capture form & mockup
│   │   ├── Navbar.tsx                # Dual segment switcher, logo, search trigger
│   │   ├── SearchModal.tsx           # Global search command dialog (Ctrl+K)
│   │   ├── SolutionsGrid.tsx         # 6 Pilar Ketahanan Ekonomi & detail modal
│   │   └── TestimonialsSection.tsx   # Kisah nyata dampak sosial keluarga/warga
│   ├── data/
│   │   ├── crisisGuidesData.ts       # Konten panduan tanggap krisis
│   │   ├── pillarsData.ts            # Data spesifikasi 6 pilar ketahanan
│   │   └── testimonialsData.ts       # Data testimoni & studi kasus
│   ├── lib/
│   │   └── utils.ts                  # Helper terpusat: cn() dan formatIDR()
│   └── types/
│       └── index.ts                  # Definisi antarmuka TypeScript
├── .gitignore                        # Git exclusion rules
├── LICENSE                           # Lisensi MIT resmi
├── next.config.mjs                   # Konfigurasi Next.js teroptimasi
├── package.json                      # Metadata, dependensi, dan script npm
├── postcss.config.mjs                # Konfigurasi PostCSS
├── README.md                         # Dokumentasi proyek
├── tailwind.config.ts                # Konfigurasi Tailwind & palet Emerald-Mint
└── tsconfig.json                     # Konfigurasi compiler TypeScript
```

---

## 🚀 Panduan Memulai (Getting Started)

### Prasyarat
- **Node.js** versi 18.17 atau yang lebih baru (disarankan Node.js LTS).
- **npm** versi 9 atau yang lebih baru.

### 1. Kloning Repositori
```bash
git clone https://github.com/<username>/resilio.id.git
cd resilio.id
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan (Development)
```bash
npm run dev
```
Buka browser dan akses [http://localhost:3000](http://localhost:3000).

### 4. Pengecekan Tipe TypeScript (Typecheck)
```bash
npm run typecheck
```

### 5. Kompilasi & Build Produksi
```bash
npm run build
```

### 6. Menjalankan Server Produksi
```bash
npm run start
```

---

## 🚢 Panduan Deployment ke GitHub & Platform Cloud

Proyek ini telah dikonfigurasi dan diverifikasi **100% Ready-to-Deploy**.

### Deployment ke Vercel (Disarankan)
1. Unggah repositori ini ke akun GitHub Anda.
2. Buka dashboard [Vercel](https://vercel.com/) dan pilih **Add New Project**.
3. Hubungkan repositori GitHub `resilio.id`.
4. Vercel akan mendeteksi framework **Next.js** secara otomatis.
5. Klik **Deploy**. Website akan aktif dalam waktu kurang dari 2 menit dengan dukungan CDN global dan sertifikat SSL otomatis.

### Deployment ke Platform Lain (Netlify / Docker / VPS Node.js)
Proyek ini menggunakan standar build Next.js universal:
```bash
npm run build
npm run start
```
Port default server adalah `3000`.

---

## 👤 Owner & Author

Proyek ini dirancang, dikembangkan, dan dimiliki oleh:

**Nur Hidayat Surya Pamungkas**  
*Lead Full-Stack Web Developer & UI/UX Designer*  
Portfolio & GitHub: [GitHub Profile](https://github.com)

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi resmi **[MIT License](LICENSE)**.  
Hak Cipta &copy; 2026 **Nur Hidayat Surya Pamungkas**. Seluruh hak cipta dilindungi undang-undang.
