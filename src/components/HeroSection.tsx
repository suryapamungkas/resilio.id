'use client';

import React from 'react';
import { AudienceSegment } from '@/types';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Coins, 
  Clock, 
  CheckCircle2, 
  Users, 
  Building2 
} from 'lucide-react';

interface HeroSectionProps {
  currentSegment: AudienceSegment;
  onStartAssessment: () => void;
  onExplorePillars: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentSegment,
  onStartAssessment,
  onExplorePillars,
}) => {
  const isIndividual = currentSegment === 'individuals';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-resilio-mint-50 via-white to-resilio-mint-100/40 pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-resilio-mint-200">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-resilio-mint-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-resilio-cyanSoft-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Segment Context Badge */}
        <div className="flex justify-center sm:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-resilio-emerald-800 text-white text-xs font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-resilio-cyanSoft-400 animate-pulse" />
            {isIndividual ? (
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-resilio-mint-200" />
                Segmen Solusi: Perlindungan Finansial Keluarga &amp; Pekerja Rentan
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-resilio-cyanSoft-300" />
                Segmen Solusi: Tata Kelola Kas Komunitas RT/RW &amp; Ketahanan Pekerja B2B
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Storytelling Headline & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center sm:text-left">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-resilio-emerald-800 tracking-tight leading-[1.15]">
              {isIndividual ? (
                <>
                  Membangun Benteng Finansial{' '}
                  <span className="text-gradient-resilio block sm:inline">
                    Keluarga Indonesia.
                  </span>
                </>
              ) : (
                <>
                  Perkuat Ekosistem Sosial &amp; Ketahanan{' '}
                  <span className="text-gradient-resilio block sm:inline">
                    Warga &amp; Karyawan.
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-resilio-emerald-950/80 leading-relaxed max-w-xl font-normal">
              {isIndividual
                ? "Dari penyiapan dana darurat hingga asuransi mikro, kami memastikan Anda tetap berdiri tegak saat shock ekonomi melanda."
                : "Solusi simpanan darurat gotong royong terdigitalisasi untuk RT/RW, Koperasi, serta program proteksi guncangan ekonomi bagi tenaga kerja perusahaan Anda."}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onStartAssessment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-resilio-cyanSoft-500 hover:bg-resilio-cyanSoft-600 shadow-card hover:shadow-elevated transition-all active:scale-[0.98] group"
              >
                <Sparkles className="w-4 h-4 text-resilio-mint-100 group-hover:rotate-12 transition-transform" />
                <span>Cek Tingkat Kerentanan Finansial Anda</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onExplorePillars}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-resilio-emerald-800 bg-white hover:bg-resilio-mint-100 border border-resilio-mint-300 shadow-subtle transition-all"
              >
                <span>Pelajari Program Ketahanan Finansial</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-resilio-mint-200 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-6 text-xs text-resilio-emerald-800 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-resilio-emerald-600" />
                <span>100% Risk Free &amp; Terbuka</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-resilio-emerald-600" />
                <span>Standar Perlindungan Data Pribadi UU PDP</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-resilio-emerald-600" />
                <span>Prinsip Etis Bebas Bunga Riba</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Artwork & Live Resilience Metrics */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg">
              
              {/* Dynamic Image Container (LCP Hero Image with fetchPriority="high" per modern-web-guidance) */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border-2 border-resilio-mint-200 bg-white group">
                <img
                  src={isIndividual ? "/images/hero-family.jpg" : "/images/community-aid.jpg"}
                  alt={isIndividual ? "Ilustrasi Benteng Finansial Keluarga Indonesia" : "Ilustrasi Gotong Royong Komunitas Finansial"}
                  width={640}
                  height={480}
                  // @ts-ignore fetchPriority support
                  fetchPriority="high"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                />

                {/* Floating Metric Overlay Badge 1 */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-md border border-resilio-mint-300/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-resilio-emerald-800 text-white flex items-center justify-center">
                    <Coins className="w-4 h-4 text-resilio-cyanSoft-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-resilio-emerald-700 uppercase font-bold tracking-wider">Dana Terproteksi</p>
                    <p className="text-sm font-black text-resilio-emerald-950">Rp 14.8 Miliar</p>
                  </div>
                </div>

                {/* Floating Metric Overlay Badge 2 */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-md border border-resilio-mint-300/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-resilio-cyanSoft-500 text-white flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-resilio-emerald-700 uppercase font-bold tracking-wider">Klaim Mikro</p>
                    <p className="text-sm font-black text-resilio-emerald-950">&lt; 24 Jam Cair</p>
                  </div>
                </div>
              </div>

              {/* Quick interactive strip under image */}
              <div className="mt-4 p-4 rounded-2xl bg-white border border-resilio-mint-200 shadow-subtle flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-resilio-mint-100 flex items-center justify-center text-resilio-emerald-800">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-resilio-emerald-900">
                      {isIndividual ? "12.400+ Keluarga Memiliki Buffer" : "340+ Komunitas RT/RW & Koperasi Aktif"}
                    </p>
                    <p className="text-[11px] text-resilio-emerald-700 font-medium">Tersebar di 34 kota seluruh Indonesia</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onStartAssessment}
                  className="px-3.5 py-1.5 bg-resilio-cyanSoft-500 hover:bg-resilio-cyanSoft-600 text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
                >
                  Cek Status Anda
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
