import { CrisisGuide } from '@/types';

export const crisisGuidesData: CrisisGuide[] = [
  {
    id: 'phk-immediate',
    title: 'Prosedur Darurat 48 Jam Pertama Setelah Terkena PHK',
    category: 'PHK & Income Shock',
    severity: 'Kritis',
    summary: 'Langkah taktis mengamankan arus kas keluarga dan hak pesangon ketika mendadak kehilangan mata pencaharian utama.',
    steps: [
      {
        step: 1,
        title: 'Verifikasi & Amankan Hak Pesangon Sesuai UU',
        action: 'Pastikan menerima Surat Pengakhiran Hubungan Kerja resmi dan periksa rincian hak pesangon, uang penghargaan masa kerja, dan uang penggantian hak sesuai PP No. 35/2021.'
      },
      {
        step: 2,
        title: 'Aktivasi Jaminan Kehilangan Pekerjaan (JKP) BPJS Ketenagakerjaan',
        action: 'Segera klaim hak JKP maksimal dalam 3 bulan sejak PHK untuk mendapatkan manfaat uang tunai hingga 6 bulan (45% gaji 3 bulan pertama, 25% gaji 3 bulan berikutnya) serta akses pelatihan kerja.'
      },
      {
        step: 3,
        title: 'Bekukan Pengeluaran Non-Esensial (Mode Survival)',
        action: 'Segera hapus langganan digital, tunda pembelian pakaian/gadget, dan susun kembali anggaran bulanan khusus untuk kebutuhan dasar (makanan pokok, listrik, sewa tempat tinggal, susu anak).'
      },
      {
        step: 4,
        title: 'Komunikasi Restrukturisasi Cicilan Resmi',
        action: 'Jika memiliki KPR atau cicilan bank, segera datangi bank penerbit dan ajukan permohonan keringanan/restrukturisasi cicilan sebelum terjadi tunggakan yang merusak skor kredit.'
      }
    ],
    hotline: {
      name: 'Posko Pendampingan PHK Resilio',
      contact: '0800-140-RESILIO (Bebas Pulsa)',
      description: 'Konsultasi hak pesangon dan aktivasi santunan income protection mikro.'
    }
  },
  {
    id: 'pinjol-predator',
    title: 'Protokol Penyelamatan dari Teror Pinjol Ilegal & Rentenir',
    category: 'Pinjol & Rentenir',
    severity: 'Kritis',
    summary: 'Panduan hukum dan teknis melepaskan diri dari jeratan bunga liar, sebar data pribadi, dan teror penagih utang tidak berizin.',
    steps: [
      {
        step: 1,
        title: 'Cek Legalitas Entitas di Kontak OJK 157',
        action: 'Pastikan status pinjaman Anda. Jika tidak terdaftar di OJK, platform tersebut adalah ilegal menurut hukum Indonesia dan tidak memiliki kekuatan hukum perdata yang sah atas bunga predatory.'
      },
      {
        step: 2,
        title: 'Dokumentasikan Semua Bukti Teror & Intimidasi',
        action: 'Ambil tangkapan layar (screenshot) ancaman, rekaman suara telepon, bukti transfer pembayaran, serta penyebaran data pribadi ke nomor kontak Anda.'
      },
      {
        step: 3,
        title: 'Laporkan ke Satgas PASTI OJK & Kepolisian',
        action: 'Kirimkan laporan formal melalui portal waspadainvestasi@ojk.go.id dan aduan siber patrolisiber.id untuk pemblokiran rekening bank penampung serta aplikasi pinjol ilegal.'
      },
      {
        step: 4,
        title: 'Konsolidasi Utang Melalui Koperasi Etis Resilio',
        action: 'Ajukan mediasi konsolidasi utang pokok melalui program Akses Pembiayaan Sehat Resilio untuk menutup pinjaman berbunga liar menjadi cicilan terjangkau berbunga adil.'
      }
    ],
    hotline: {
      name: 'Crisis Hotline Bantuan Pinjol OJK & Resilio',
      contact: 'Hotline OJK: 157 | WhatsApp: 081-157-157-157',
      description: 'Layanan terpadu pelaporan intimidasi pinjaman ilegal & pendampingan hukum.'
    }
  },
  {
    id: 'medical-shock',
    title: 'Tanggap Darurat Biaya Sakit Kritis Tanpa Perlindungan Cukup',
    category: 'Krisis Medis',
    severity: 'Tinggi',
    summary: 'Strategi mengatasi tagihan rumah sakit dan biaya hidup saat tulang punggung keluarga mendadak jatuh sakit.',
    steps: [
      {
        step: 1,
        title: 'Aktivasi Instan BPJS Kesehatan PBI / Mandiri',
        action: 'Bagi keluarga yang kepesertaan BPJS-nya non-aktif karena tunggakan, gunakan skema REHAB (Rencana Pembayaran Bertahap) atau ajukan surat keterangan tidak mampu (SKTM) ke Dinas Sosial untuk aktivasi status PBI APBD.'
      },
      {
        step: 2,
        title: 'Cairkan Santunan Harian Rawat Inap Mikro Resilio',
        action: 'Unggah surat pengantar opname atau resume medis ke aplikasi Resilio untuk pencairan dana santunan harian tunai Rp 250.000/hari guna menutup kebutuhan makan keluarga penunggu.'
      },
      {
        step: 3,
        title: 'Akses Dana Darurat Komunitas / Kas RT-RW',
        action: 'Hubungi pengurus RT/RW untuk mengaktifkan pencairan dana gotong royong warga melalui platform simpanan komunitas Resilio yang siap cair dalam hitungan jam.'
      }
    ],
    hotline: {
      name: 'Unit Bantuan Medis Cepat Resilio',
      contact: '0812-9900-8811 (Layanan 24 Jam)',
      description: 'Verifikasi klaim santunan mikro rawat inap & koordinasi ambulans komunitas.'
    }
  }
];
