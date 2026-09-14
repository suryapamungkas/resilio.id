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
        <meta name="color-scheme" content="dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-resilio-black text-resilio-charcoal-100 antialiased selection:bg-resilio-forest-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
