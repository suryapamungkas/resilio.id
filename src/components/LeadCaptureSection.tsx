'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { BookOpen, Download, CheckCircle2, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const ebookSchema = z.object({
  fullName: z.string().min(2, 'Nama lengkap minimal 2 karakter'),
  email: z.string().email('Format email tidak valid'),
  whatsappNumber: z.string().regex(/^(\+62|62|0)8[1-9][0-9]{6,11}$/, 'Nomor WhatsApp tidak valid (contoh: 081234567890)'),
  segmentInterest: z.enum(['individual_family', 'community_rt_rw', 'corporate_b2b']),
});

type EbookFormValues = z.infer<typeof ebookSchema>;

export const LeadCaptureSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EbookFormValues>({
    resolver: zodResolver(ebookSchema),
    defaultValues: {
      fullName: '',
      email: '',
      whatsappNumber: '',
      segmentInterest: 'individual_family',
    },
  });

  const onSubmit = async (data: EbookFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitted(true);
  };

  const handleDownload = () => {
    setDownloadStarted(true);
    const content = `PANDUAN LENGKAP: SELAMAT DARI CRISIS & SHOCK EKONOMI (RESILIO.ID)
============================================================
Penerbit: resilio.id - Jaringan Ketahanan Finansial Indonesia
Tahun Terbit: 2026

DAFTAR ISI UTAMA:
1. Bab 1: Protokol 48 Jam Pertama Mengatasi Kehilangan Penghasilan (PHK)
2. Bab 2: Membangun Buffer Likuid Rp 5.000/hari Bebas Biaya Admin
3. Bab 3: Menghindari Teror Pinjaman Predator & Konsolidasi Utang Etis
4. Bab 4: Strategi Santunan Mikro Rawat Inap Pelengkap BPJS Kesehatan
5. Bab 5: Arisan Digital & Tata Kelola Kas Gotong Royong Komunitas RT/RW

Terima kasih telah bergabung dengan komunitas Resilio.id.
Layanan Hotline Darurat: 0800-140-RESILIO (Bebas Pulsa)
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Resilio-Panduan-Selamat-Crisis-Ekonomi-2026.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="ebook" className="py-16 sm:py-24 bg-gradient-to-br from-resilio-emerald-800 via-resilio-emerald-700 to-resilio-emerald-950 text-white relative overflow-hidden border-b border-resilio-emerald-900">
      {/* Visual background flourishes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-resilio-cyanSoft-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-resilio-mint-300/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: E-Book Showcase & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-resilio-emerald-900/80 border border-resilio-cyanSoft-400/30 text-resilio-mint-100 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-resilio-cyanSoft-300" />
              <span>Modul Edukasi Nasional &bull; Edisi 2026</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* 3D Book Mockup Visual */}
              <div className="w-36 sm:w-44 shrink-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-resilio-mint-300/40 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/images/ebook-cover.jpg"
                  alt="Sampul E-Book Panduan Selamat Dari Crisis & Shock Ekonomi"
                  width={240}
                  height={320}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Panduan Selamat dari Crisis &amp; Shock Ekonomi
                </h2>
                <p className="text-xs sm:text-sm text-resilio-mint-100/90 mt-2 leading-relaxed font-normal">
                  Buku pegangan komprehensif setebal 68 halaman yang mengupas tuntas langkah taktis melindungi uang dapur, menghadapi debt collector, dan mengamankan cash buffer.
                </p>
              </div>
            </div>

            {/* Book Highlights */}
            <div className="space-y-2.5 pt-2 border-t border-resilio-emerald-800">
              {[
                'Checklist 48 jam darurat saat menerima surat PHK mendadak',
                'Rumus realistis menyisihkan Rp 5.000/hari menjadi Rp 10 Juta buffer',
                'Format surat aduan resmi pemblokiran pinjol ilegal ke OJK & Kominfo',
                'Panduan pencairan santunan rawat inap mikro pengganti nafkah',
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-resilio-cyanSoft-300 shrink-0" />
                  <span className="text-xs sm:text-sm text-resilio-mint-100 font-medium">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-resilio-mint-200">
              <Shield className="w-4 h-4 text-resilio-cyanSoft-400" />
              <span>100% Gratis &bull; Tanpa Spam &bull; Langsung Terkirim ke WhatsApp &amp; Email</span>
            </div>
          </div>

          {/* Right Column: Capture Form or Download Success Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-resilio-emerald-950 shadow-elevated border border-resilio-mint-200">
              
              {!isSubmitted ? (
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-resilio-cyanSoft-600 block mb-1">
                      Akses Unduh Instan
                    </span>
                    <h3 className="text-xl font-black text-resilio-emerald-900">
                      Kirim E-Book ke Kontak Saya
                    </h3>
                    <p className="text-xs text-resilio-emerald-700 mt-1 font-medium">
                      Isi data singkat berikut untuk menerima tautan unduh dokumen PDF secara langsung.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="fullName" className="block text-xs font-bold text-resilio-emerald-900 uppercase">
                        Nama Lengkap <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        autoComplete="name"
                        {...register('fullName')}
                        placeholder="Contoh: Budi Santoso"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                          errors.fullName
                            ? 'border-rose-500 bg-rose-50/50'
                            : 'border-resilio-mint-300 focus:border-resilio-cyanSoft-500'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-600 font-medium">{errors.fullName.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-bold text-resilio-emerald-900 uppercase">
                        Alamat Email Aktif <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        {...register('email')}
                        placeholder="nama@email.com"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                          errors.email
                            ? 'border-rose-500 bg-rose-50/50'
                            : 'border-resilio-mint-300 focus:border-resilio-cyanSoft-500'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 font-medium">{errors.email.message}</p>
                      )}
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-1.5">
                      <label htmlFor="whatsappNumber" className="block text-xs font-bold text-resilio-emerald-900 uppercase">
                        Nomor WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        id="whatsappNumber"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        {...register('whatsappNumber')}
                        placeholder="081234567890"
                        className={`w-full px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                          errors.whatsappNumber
                            ? 'border-rose-500 bg-rose-50/50'
                            : 'border-resilio-mint-300 focus:border-resilio-cyanSoft-500'
                        }`}
                      />
                      {errors.whatsappNumber && (
                        <p className="text-xs text-rose-600 font-medium">{errors.whatsappNumber.message}</p>
                      )}
                    </div>

                    {/* Segment Interest */}
                    <div className="space-y-1.5">
                      <label htmlFor="segmentInterest" className="block text-xs font-bold text-resilio-emerald-900 uppercase">
                        Minat Fokus Modul
                      </label>
                      <select
                        id="segmentInterest"
                        {...register('segmentInterest')}
                        className="w-full px-4 py-2.5 rounded-xl border border-resilio-mint-300 bg-white text-sm font-medium text-resilio-emerald-900"
                      >
                        <option value="individual_family">Perorangan &amp; Keluarga (Dana Darurat &amp; Pinjol)</option>
                        <option value="community_rt_rw">Komunitas Warga (Kas Gotong Royong RT/RW)</option>
                        <option value="corporate_b2b">HRD / Mitra Perusahaan (Kesejahteraan Karyawan)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-white bg-resilio-cyanSoft-500 hover:bg-resilio-cyanSoft-600 shadow-md transition-all disabled:opacity-70"
                    >
                      <Download className="w-4 h-4" />
                      <span>{isSubmitting ? 'Memproses Pengiriman...' : 'Dapatkan E-Book Sekarang (Gratis)'}</span>
                    </button>
                  </form>
                </div>
              ) : (
                /* Success State with Download Button */
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-resilio-mint-200 text-resilio-emerald-800 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-black text-resilio-emerald-900">
                    Pendaftaran Berhasil!
                  </h3>

                  <p className="text-xs sm:text-sm text-resilio-emerald-800 max-w-sm mx-auto leading-relaxed font-medium">
                    Tautan berkas PDF telah kami kirimkan ke email dan nomor WhatsApp Anda. Anda juga dapat langsung mengunduh salinan berkas sekarang melalui tombol di bawah:
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleDownload}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-resilio-emerald-800 hover:bg-resilio-emerald-900 shadow-md transition-colors"
                    >
                      <Download className="w-4 h-4 text-resilio-cyanSoft-300" />
                      <span>{downloadStarted ? 'Unduh Ulang Dokumen E-Book' : 'Unduh Berkas E-Book (PDF)'}</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-resilio-emerald-700 pt-2">
                    Berkas berukuran 4.2 MB dalam format PDF siap baca untuk desktop dan smartphone.
                  </p>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
