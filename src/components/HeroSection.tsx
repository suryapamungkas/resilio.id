'use client';

import React from 'react';
import Image from 'next/image';
import { AudienceSegment } from '@/types';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Coins, 
  Clock, 
  CheckCircle2, 
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
    <section className="relative overflow-hidden bg-gradient-to-b from-resilio-black-950 via-resilio-black to-resilio-black-surface pt-10 pb-16 lg:pt-14 lg:pb-20 border-b border-resilio-forest-800/60">
      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-80 pointer-events-none" />
      
      {/* Decorative Blur Orbs: Forest Green & Blood Red */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-resilio-forest-800/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-resilio-blood-900/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Segment Context Badge */}
        <div className="flex justify-center sm:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-resilio-black-surface text-resilio-charcoal-200 border border-resilio-forest-700/60 text-xs font-medium shadow-card">
            <span className="w-2 h-2 rounded-full bg-resilio-forest-400 animate-pulse" />
            {isIndividual ? (
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-resilio-forest-300" />
                Segmen Solusi: Perlindungan Finansial Keluarga &amp; Pekerja Rentan
              </span>
            ) : (
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-resilio-forest-300" />
                Segmen Solusi: Tata Kelola Kas Komunitas RT/RW &amp; Ketahanan Pekerja B2B
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Storytelling Headline & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center sm:text-left">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
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

            <p className="text-base sm:text-lg text-resilio-charcoal-300 leading-relaxed max-w-xl font-normal">
              {isIndividual
                ? "Dari penyiapan dana darurat hingga asuransi mikro, kami memastikan Anda tetap berdiri tegak saat shock ekonomi melanda."
                : "Solusi simpanan darurat gotong royong terdigitalisasi untuk RT/RW, Koperasi, serta program proteksi guncangan ekonomi bagi tenaga kerja perusahaan Anda."}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onStartAssessment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-resilio-forest-700 via-resilio-forest-600 to-resilio-forest-700 hover:from-resilio-forest-600 hover:to-resilio-forest-500 border border-resilio-forest-500/50 shadow-glowForest transition-all active:scale-[0.98] group"
              >
                <Sparkles className="w-4 h-4 text-resilio-forest-200 group-hover:rotate-12 transition-transform" />
                <span>Cek Tingkat Kerentanan Finansial Anda</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onExplorePillars}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-resilio-charcoal-100 bg-resilio-black-surface hover:bg-resilio-black-elevated border border-resilio-forest-800 shadow-card transition-all"
              >
                <span>Pelajari Program Ketahanan Finansial</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-resilio-forest-900/80 flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-6 text-xs text-resilio-charcoal-300 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-resilio-forest-400" />
                <span>100% Risk Free &amp; Terbuka</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-resilio-forest-400" />
                <span>Standar Perlindungan Data Pribadi UU PDP</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-resilio-forest-400" />
                <span>Prinsip Etis Bebas Bunga Riba</span>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Editorial Visual & Live Resilience Metrics */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg">
              
              {/* Dynamic Image Container (Authentic Documentary Photography) */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border-2 border-resilio-forest-800/80 bg-resilio-black-surface group">
                <Image
                  src={isIndividual ? "/images/hero-family.jpg" : "/images/community-aid.jpg"}
                  alt={isIndividual ? "Dokumenter Ketahanan Finansial Keluarga Indonesia" : "Dokumenter Gotong Royong Komunitas Warga"}
                  width={640}
                  height={480}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 640px"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500 brightness-95"
                />

                {/* Floating Metric Overlay Badge 1 (Forest Green) */}
                <div className="absolute top-4 left-4 bg-resilio-black-surface/90 backdrop-blur-md rounded-2xl p-3 shadow-card border border-resilio-forest-700/70 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-resilio-forest-800 text-white flex items-center justify-center border border-resilio-forest-600/50">
                    <Coins className="w-4 h-4 text-resilio-forest-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-resilio-forest-300 uppercase font-bold tracking-wider">Dana Terproteksi</p>
                    <p className="text-sm font-black text-white">Rp 14.8 Miliar</p>
                  </div>
                </div>

                {/* Floating Metric Overlay Badge 2 (Blood Red Alert Tone) */}
                <div className="absolute bottom-4 right-4 bg-resilio-black-surface/95 backdrop-blur-md rounded-2xl p-3 shadow-card border border-resilio-blood-700/70 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-resilio-blood-800 text-white flex items-center justify-center border border-resilio-blood-600/50">
                    <Clock className="w-4 h-4 text-resilio-blood-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-resilio-blood-300 uppercase font-bold tracking-wider">Klaim Mikro Darurat</p>
                    <p className="text-sm font-black text-white">&lt; 24 Jam Cair</p>
                  </div>
                </div>
              </div>

              {/* Quick interactive strip under image */}
              <div className="mt-4 p-4 rounded-2xl bg-resilio-black-surface border border-resilio-forest-800/80 shadow-card flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-resilio-forest-900/80 border border-resilio-forest-700/60 flex items-center justify-center text-resilio-forest-300">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">
                      {isIndividual ? "12.400+ Keluarga Memiliki Buffer" : "340+ Komunitas RT/RW & Koperasi Aktif"}
                    </p>
                    <p className="text-[11px] text-resilio-charcoal-400 font-medium">Tersebar di 34 kota seluruh Indonesia</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onStartAssessment}
                  className="px-3.5 py-1.5 bg-resilio-forest-700 hover:bg-resilio-forest-600 text-white border border-resilio-forest-500/50 rounded-lg text-xs font-bold transition-colors shadow-sm"
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
