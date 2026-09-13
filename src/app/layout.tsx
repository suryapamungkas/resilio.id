import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'resilio.id - Membangun Benteng Finansial Keluarga Indonesia | Ketahanan Ekonomi',
  description: 'Platform terintegrasi ketahanan ekonomi masyarakat Indonesia. Dari perencanaan dana darurat 3-6 bulan, proteksi pendapatan asuransi mikro, hingga respon darurat shock ekonomi.',
  keywords: [
    'dana darurat',
    'ketahanan finansial',
    'asuransi mikro',
    'income protection',
    'early warning system keuangan',
    'anti pinjol ilegal',
    'kas gotong royong rt rw',
    'resilio id'
  ],
  authors: [
    { name: 'Nur Hidayat Surya Pamungkas' },
    { name: 'resilio.id' }
  ],
  creator: 'Nur Hidayat Surya Pamungkas',
  publisher: 'Nur Hidayat Surya Pamungkas',
  openGraph: {
    title: 'resilio.id - Membangun Benteng Finansial Keluarga Indonesia',
    description: 'Pastikan Anda tetap berdiri tegak saat shock ekonomi melanda. Tes tingkat kerentanan finansial keluarga Anda secara gratis & risk-free.',
    url: 'https://resilio.id',
    siteName: 'resilio.id',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-resilio-slate-50 text-resilio-navy-800 antialiased selection:bg-resilio-teal-200 selection:text-resilio-navy-950">
        {children}
      </body>
    </html>
  );
}
