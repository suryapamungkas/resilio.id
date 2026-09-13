import { Pillar } from '@/types';

export const pillarsData: Pillar[] = [
  {
    id: 'emergency-planning',
    number: 1,
    title: 'Emergency Financial Planning',
    subtitle: 'Perencanaan Dana Darurat Terpadu',
    category: 'Stabilitas Arus Kas',
    iconName: 'ShieldAlert',
    tagline: 'Amankan cash buffer 3–6 bulan sebelum badai ekonomi datang.',
    description: 'Modul kalkulator otomatis berbasis pengeluaran riil untuk membangun buffer likuid keluarga secara bertahap tanpa mengorbankan kebutuhan harian pokok.',
    keyFeatures: [
      'Simulasi kebutuhan cash buffer 3–6 bulan otomatis berbasis rasio pengeluaran riil',
      'Fitur auto-split tabungan harian mulai dari Rp 5.000/hari di instrumen likuid aman',
      'Isolasi rekening darurat dengan proteksi bunga/imbal hasil syariah bebas biaya admin'
    ],
    metricsHighlight: 'Rata-rata 4.2 bulan buffer terbangun dalam 9 bulan pertama',
    targetAudience: 'Keluarga muda, pekerja lepas (freelancer), dan pekerja kontrak',
    badge: 'Pondasi Utama',
    details: {
      problemStatement: 'Lebih dari 68% masyarakat perkotaan Indonesia tidak memiliki tabungan yang cukup untuk bertahan lebih dari 30 hari jika kehilangan penghasilan utama.',
      resilioApproach: 'Kami mengubah penumpukan dana darurat yang terasa berat menjadi alokasi mikro-harian yang teratur dan otomatis, dikunci secara psikologis agar tidak terpakai untuk konsumsi impulsif.',
      operationalWorkflow: [
        'Input pengeluaran wajib bulanan (makan, sewa/kpr, utilitas, susu anak)',
        'Sistem menentukan target rasio buffer realistis (3 bulan untuk pekerja tetap, 6 bulan untuk pekerja informal)',
        'Aktivasi auto-debit mikro harian/mingguan ke rekening terproteksi LPSE & LPS',
        'Notifikasi cerdas milestone resiliensi saat mencapai buffer 1 bulan, 3 bulan, dan 6 bulan'
      ],
      faq: [
        {
          q: 'Berapa minimal nominal untuk mulai menabung dana darurat?',
          a: 'Mulai dari Rp 5.000 per hari atau Rp 150.000 per bulan, tanpa potongan biaya administrasi bulanan.'
        },
        {
          q: 'Apakah dana darurat bisa ditarik sewaktu-waktu?',
          a: 'Bisa ditarik 24/7 instan ke rekening bank atau e-wallet terdaftar saat kondisi darurat terverifikasi.'
        }
      ]
    }
  },
  {
    id: 'ethical-micro-financing',
    number: 2,
    title: 'Akses Pembiayaan Sehat',
    subtitle: 'Ethical Micro-Financing Bebas Predator',
    category: 'Solusi Likuiditas Darurat',
    iconName: 'Coins',
    tagline: 'Solusi likuiditas darurat berbunga adil dan transparan tanpa jeratan pinjol ilegal.',
    description: 'Penyediaan pinjaman darurat berbunga adil (ethical micro-credit) dengan tenor manusiawi dan perlindungan hukum bagi keluarga yang menghadapi kebutuhan mendesak.',
    keyFeatures: [
      'Bunga flat transparan tanpa biaya administrasi terselubung atau denda beranak',
      'Persetujuan berbasis riwayat gotong royong dan kapasitas bayar yang rasional',
      'Klausul proteksi restrukturisasi lunak saat debitur mengalami musibah atau PHK mendadak'
    ],
    metricsHighlight: '0% denda predator, 100% bebas praktik penagihan intimidatif',
    targetAudience: 'Pekerja berpenghasilan rendah, pedagang mikro, dan korban darurat',
    badge: 'Anti-Pinjol Ilegal',
    details: {
      problemStatement: 'Tingginya ketergantungan masyarakat pada pinjaman online ilegal atau rentenir dengan bunga mencekik hingga 300% per tahun yang merusak keutuhan rumah tangga.',
      resilioApproach: 'Resilio berkolaborasi dengan koperasi simpan pinjam binaan dan lembaga keuangan mikro resmi untuk menyediakan skema pembiayaan darurat etis dengan plafon Rp 1 - 5 juta dan tenor fleksibel hingga 12 bulan.',
      operationalWorkflow: [
        'Pengajuan instan dengan verifikasi identitas dan tujuan darurat (medis/pendidikan/perbaikan usaha)',
        'Penilaian skoring etis yang mengutamakan rasio kemampuan bayar (maksimal 30% dari penghasilan)',
        'Pencairan langsung ke rekening penerima dalam hitungan jam',
        'Pendampingan konseling keuangan gratis sepanjang masa cicilan'
      ],
      faq: [
        {
          q: 'Bagaimana jika saya terlambat membayar karena sakit keras?',
          a: 'Resilio memiliki skema Grace Period darurat di mana bunga dibekukan dan tenor dapat diperpanjang tanpa denda penalti.'
        },
        {
          q: 'Apakah ada BI Checking / SLIK yang memberatkan?',
          a: 'Kami menggunakan skoring alternatif berbasis perilaku komunitas dan kapasitas riil, bukan semata-mata riwayat perbankan formal.'
        }
      ]
    }
  },
  {
    id: 'micro-insurance',
    number: 3,
    title: 'Asuransi Mikro & Income Protection',
    subtitle: 'Proteksi Arus Kas Harian Keluarga',
    category: 'Jaring Pengaman Risiko',
    iconName: 'HeartHandshake',
    tagline: 'Lindungi arus kas harian saat musibah PHK, rawat inap, atau kecelakaan kerja melanda.',
    description: 'Polis asuransi mikro terjangkau dengan premi mulai Rp 10.000/bulan yang memberikan santunan tunai harian saat kepala keluarga tidak dapat bekerja.',
    keyFeatures: [
      'Santunan tunai harian rawat inap hingga Rp 250.000/hari sebagai pengganti nafkah',
      'Santunan transisi PHK sebesar 3x penghasilan dasar untuk menopang masa mencari kerja',
      'Klaim kilat paperless melalui WhatsApp dengan pencairan < 24 jam'
    ],
    metricsHighlight: 'Klaim rata-rata dicairkan dalam 18 jam sejak dokumen foto terkirim',
    targetAudience: 'Pekerja sektor informal, mitra driver online, kurir, dan kepala rumah tangga',
    badge: 'Premi Terjangkau',
    details: {
      problemStatement: 'BPJS Kesehatan menanggung biaya rumah sakit, namun kehilangan nafkah harian selama rawat inap seringkali memaksa keluarga berhutang demi makan sehari-hari.',
      resilioApproach: 'Kami menghadirkan jaring pengaman mikro yang berfokus pada "cash replacement" (pengganti uang dapur) sehingga keluarga tetap bisa makan dan membayar kontrakan saat pencari nafkah terbaring sakit.',
      operationalWorkflow: [
        'Pendaftaran digital tanpa cek medis yang rumit',
        'Premi mikro terpotong otomatis dari simpanan harian atau dibayar via e-wallet',
        'Saat sakit, cukup foto surat keterangan rawat inap rumah sakit/puskesmas',
        'Santunan langsung ditransfer ke rekening pribadi debitur'
      ],
      faq: [
        {
          q: 'Apakah bisa digunakan bersamaan dengan BPJS Kesehatan?',
          a: 'Bisa 100%! Asuransi mikro kami berfungsi sebagai santunan tunai nafkah tambahan, bukan pengganti biaya rumah sakit BPJS.'
        },
        {
          q: 'Berapa usia maksimal peserta yang dilindungi?',
          a: 'Melindungi seluruh anggota keluarga usia 18 hingga 60 tahun tanpa batasan pekerjaan berisiko tinggi.'
        }
      ]
    }
  },
  {
    id: 'community-fund',
    number: 4,
    title: 'Emergency Fund Berbasis Komunitas',
    subtitle: 'Dana Gotong Royong & Arisan Digital RT/RW',
    category: 'Resiliensi Kolektif',
    iconName: 'Users',
    tagline: 'Modernisasi tradisi gotong royong warga menjadi dana darurat komunitas yang transparan.',
    description: 'Platform tata kelola simpanan darurat warga tingkat RT, RW, paguyuban pedagang, dan komunitas keagamaan dengan buku kas digital dan verifikasi pencairan transparan.',
    keyFeatures: [
      'Rekening bersama (escrow) digital dengan sistem tanda tangan persetujuan ganda (multi-sig pengurus)',
      'Buku kas kas terbuka yang dapat dipantau oleh setiap anggota secara real-time via smartphone',
      'Pencairan dana santunan duka, kebakaran, atau musibah warga dalam hitungan menit'
    ],
    metricsHighlight: '340+ Komunitas RT/RW aktif dengan tingkat transparansi kas 100%',
    targetAudience: 'Pengurus RT/RW, komunitas warga perumahan, paguyuban pasar tradisional',
    badge: 'Kearifan Lokal',
    details: {
      problemStatement: 'Arisan tradisional dan iuran rukun kematian warga kerap kali rawan penggelapan dana, pencatatan manual yang hilang, atau lambat dicairkan saat warga tertimpa musibah.',
      resilioApproach: 'Kami mendigitalkan tradisi luhur gotong royong Indonesia menggunakan teknologi dompet aman berstandar perbankan yang memberikan rasa aman bagi seluruh warga tanpa menghilangkan kehangatan sosial.',
      operationalWorkflow: [
        'Pengurus mendaftarkan paguyuban/RT dengan verifikasi identitas minimal 2 pejabat lingkungan',
        'Warga menyetor iuran sukarela atau wajib melalui QRIS komunitas',
        'Saldo kas dan mutasi terbit otomatis di dashboard publik warga',
        'Pencairan darurat membutuhkan persetujuan digital minimal 2 dari 3 pengurus sah'
      ],
      faq: [
        {
          q: 'Apakah dana komunitas aman dan tidak bisa dilarikan bendahara?',
          a: 'Sangat aman. Dana tersimpan di bank kustodian resmi dan pencairan mewajibkan multi-faktor approval dari Ketua RT dan Bendahara sekaligus.'
        },
        {
          q: 'Apakah lansia yang tidak memakai smartphone tetap bisa tercatat?',
          a: 'Bisa. Sistem menyediakan laporan cetak fisik mingguan/bulanan yang bisa ditempel di papan pengumuman RT.'
        }
      ]
    }
  },
  {
    id: 'upskilling-income',
    number: 5,
    title: 'Akses Pekerjaan & Income Alternatif',
    subtitle: 'Jembatan Pemulihan Daya Beli Keluarga',
    category: 'Pemulihan Pendapatan',
    iconName: 'Briefcase',
    tagline: 'Bangkit dari shock ekonomi melalui pelatihan kilat dan integrasi pasar kerja mikro.',
    description: 'Akselerator keterampilan kerja praktis 14 hari yang langsung terhubung dengan lowongan kerja paruh waktu, kemitraan logistik, dan program modal usaha mikro tanpa agunan.',
    keyFeatures: [
      'Kurikulum kilat siap kerja (digital admin, barista, teknisi pendingin, customer service remote)',
      'Koneksi langsung ke 45+ mitra perusahaan penyerap tenaga kerja dan platform on-demand',
      'Skema bantuan alat kerja bersubsidi bagi lulusan yang ingin memulai usaha mandiri'
    ],
    metricsHighlight: '82% peserta mendapatkan penghasilan tambahan dalam 30 hari pasca pelatihan',
    targetAudience: 'Korban pemutusan hubungan kerja (PHK), ibu rumah tangga produktif, dan pemuda pra-kerja',
    badge: 'Solusi Pemulihan',
    details: {
      problemStatement: 'Dana darurat dan pinjaman hanyalah penahan sementara. Pemulihan ekonomi sejati membutuhkan pemulihan arus kas masuk keluarga secepat mungkin.',
      resilioApproach: 'Resilio menyediakan jalur pintas peningkatan kapabilitas (upskilling) praktis yang mengajarkan keahlian yang sedang dibutuhkan industri saat ini, disertai mentoring mencari kerja hingga berhasil.',
      operationalWorkflow: [
        'Asesmen minat dan keahlian dasar melalui tes potensi vokasi',
        'Pelatihan intensif 14 hari secara hibrida (video online + praktek lapangan)',
        'Penyusunan portofolio dan profil siap kerja berstandar HRD',
        'Penyaluran ke mitra industri dan monitoring pendapatan selama 3 bulan pertama'
      ],
      faq: [
        {
          q: 'Apakah pelatihan ini berbayar di muka?',
          a: 'Tidak! Kami menggunakan skema Income Share Agreement (ISA) lunak atau beasiswa penuh dari mitra CSR korporasi.'
        },
        {
          q: 'Apakah ada jaminan langsung dapat kerja?',
          a: 'Kami menjamin minimal 3 sesi wawancara dengan mitra penyerap tenaga kerja yang telah bermitra resmi dengan Resilio.'
        }
      ]
    }
  },
  {
    id: 'early-warning-system',
    number: 6,
    title: 'Sistem Peringatan Dini Risiko Keuangan',
    subtitle: 'Early Warning System Kesehatan Finansial',
    category: 'Deteksi Risiko Proaktif',
    iconName: 'Activity',
    tagline: 'Deteksi dini gejala kerapuhan finansial sebelum menjadi krisis hutang yang tak teratasi.',
    description: 'Mesin algoritma diagnosa finansial cerdas yang mengevaluasi rasio beban hutang (DTI), ketahanan cadangan kas, dan volatilitas pendapatan secara real-time.',
    keyFeatures: [
      'Dashboard skoring kesehatan finansial 0–100 dengan indikator warna risiko ramah pengguna',
      'Peringatan otomatis saat rasio beban hutang melewati batas aman 35% penghasilan',
      'Rekomendasi taktis 30 hari yang disesuaikan secara personal dengan kondisi keluarga Anda'
    ],
    metricsHighlight: 'Membantu 8.900+ keluarga terhindar dari default cicilan dan gali lubang tutup lubang',
    targetAudience: 'Semua kepala keluarga yang ingin menjaga stabilitas jangka panjang rumah tangga',
    badge: 'Deteksi Dini',
    details: {
      problemStatement: 'Sebagian besar keluarga baru menyadari bahwa kondisi keuangan mereka kritis saat uang tabungan sudah nol dan tagihan pinjol mulai jatuh tempo.',
      resilioApproach: 'Mirip medical check-up rutin, Early Warning System kami memberikan diagnosa dini yang objektif dan non-judgmental, memandu Anda melakukan tindakan pencegahan sebelum krisis meledak.',
      operationalWorkflow: [
        'Isi 4 pertanyaan sederhana tentang pendapatan, belanja rutin, hutang, dan tabungan',
        'Algoritma menghitung skor ketahanan dan runway likuiditas keluarga dalam hitungan detik',
        'Dapatkan laporan diagnosa grafis yang mudah dipahami orang awam',
        'Akses panduan tindakan korektif darurat yang terintegrasi dengan 5 pilar Resilio lainnya'
      ],
      faq: [
        {
          q: 'Apakah data finansial saya aman dan tidak disebarluaskan?',
          a: 'Sangat aman. Seluruh data dienkripsi dengan standar bank-grade AES 256-bit dan tidak pernah dibagikan kepada pihak ketiga atau platform periklanan.'
        },
        {
          q: 'Apakah tes ini berbayar?',
          a: 'Tes Peringatan Dini Resilio 100% Gratis dan dapat diakses tanpa kewajiban mendaftar akun.'
        }
      ]
    }
  }
];
