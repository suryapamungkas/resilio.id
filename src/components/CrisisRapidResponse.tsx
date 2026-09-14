'use client';

import React, { useState } from 'react';
import { crisisGuidesData } from '@/data/crisisGuidesData';
import { PhoneCall, ChevronRight, FileText, LifeBuoy } from 'lucide-react';
import { cn } from '@/lib/utils';

export const CrisisRapidResponse: React.FC = () => {
  const [activeGuideId, setActiveGuideId] = useState<string>(crisisGuidesData[0].id);
  const activeGuide = crisisGuidesData.find((g) => g.id === activeGuideId) || crisisGuidesData[0];

  return (
    <section id="crisis-center" className="py-16 sm:py-24 bg-resilio-black text-white relative overflow-hidden border-b border-resilio-forest-800/60">
      {/* Background decoration: Blood Red & Forest Green Auras */}
      <div className="absolute inset-0 bg-grid-dark opacity-60 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-resilio-blood-900/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-resilio-forest-800/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-resilio-blood-950/80 border border-resilio-blood-700/80 text-resilio-blood-300 text-xs font-bold uppercase tracking-wider">
            <LifeBuoy className="w-3.5 h-3.5 text-resilio-blood-400" />
            <span>Pusat Tanggap Darurat Finansial 48 Jam</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Protokol Penyelamatan Cepat Saat Krisis Melanda
          </h2>

          <p className="text-base text-resilio-charcoal-300 leading-relaxed font-normal">
            Saat shock ekonomi terjadi, keputusan dalam 48 jam pertama sangat menentukan masa depan keluarga Anda. Ikuti panduan teruji kami untuk meminimalkan dampak buruk.
          </p>
        </div>

        {/* Interactive Crisis Switcher & Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Tab Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {crisisGuidesData.map((guide) => {
              const isSelected = guide.id === activeGuideId;

              return (
                <button
                  key={guide.id}
                  type="button"
                  onClick={() => setActiveGuideId(guide.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-resilio-black-surface border-resilio-blood-600 text-white shadow-glowBlood ring-1 ring-resilio-blood-500/50'
                      : 'bg-resilio-black-surface/50 border-resilio-forest-900/80 text-resilio-charcoal-300 hover:bg-resilio-black-card hover:text-white'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                        guide.severity === 'Kritis'
                          ? 'bg-resilio-blood-900/80 text-resilio-blood-200 border-resilio-blood-700'
                          : 'bg-amber-950/80 text-amber-300 border-amber-800'
                      }`}>
                        Tingkat: {guide.severity}
                      </span>
                      <span className="text-xs text-resilio-charcoal-400 font-medium">{guide.category}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white leading-snug">
                      {guide.title}
                    </h3>
                  </div>

                  <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${
                    isSelected ? 'text-resilio-blood-400 translate-x-1' : 'text-resilio-charcoal-500'
                  }`} />
                </button>
              );
            })}

            {/* General 24/7 Hotline Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-resilio-blood-950 via-resilio-black-surface to-resilio-forest-950 border border-resilio-blood-700/80 shadow-glowBlood space-y-2">
              <div className="flex items-center gap-2 text-resilio-blood-300 text-xs font-bold uppercase">
                <PhoneCall className="w-4 h-4 text-resilio-blood-400 animate-pulse" />
                <span>Hotline Tanggap Darurat Resilio 24 Jam</span>
              </div>
              <p className="text-xs text-resilio-charcoal-200 leading-relaxed">
                Butuh pendampingan langsung terkait teror pinjol, penahanan pesangon, atau darurat rawat inap? Hubungi tim pendamping sosial kami.
              </p>
              <p className="text-base sm:text-lg font-black text-white tracking-wide">
                0800-140-RESILIO <span className="text-xs font-normal text-resilio-forest-300">(Bebas Pulsa)</span>
              </p>
            </div>
          </div>

          {/* Right: Active Guide Step-by-Step Breakdown */}
          <div className="lg:col-span-7 bg-resilio-black-surface rounded-3xl p-6 sm:p-8 border border-resilio-forest-800/80 shadow-elevated">
            
            {/* Guide Header */}
            <div className="pb-5 border-b border-resilio-forest-800/80 mb-6">
              <span className="text-xs font-bold text-resilio-blood-400 uppercase tracking-wider block mb-1">
                Kategori: {activeGuide.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                {activeGuide.title}
              </h3>
              <p className="text-xs sm:text-sm text-resilio-charcoal-300 leading-relaxed font-normal">
                {activeGuide.summary}
              </p>
            </div>

            {/* Steps Timeline */}
            <div className="space-y-4 mb-8">
              {activeGuide.steps.map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-4 rounded-2xl bg-resilio-black-card border border-resilio-forest-900/80">
                  <div className="w-7 h-7 rounded-full bg-resilio-blood-800 text-resilio-blood-200 border border-resilio-blood-600/60 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-resilio-charcoal-300 leading-relaxed font-normal">
                      {item.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Hotline Callout Box */}
            <div className="p-4 rounded-2xl bg-resilio-black-card border border-resilio-forest-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold text-resilio-forest-400 uppercase block">
                  Kontak Rujukan Resmi:
                </span>
                <p className="text-sm font-bold text-white">{activeGuide.hotline.name}</p>
                <p className="text-xs text-resilio-blood-300 font-mono font-bold">{activeGuide.hotline.contact}</p>
                <p className="text-[11px] text-resilio-charcoal-400">{activeGuide.hotline.description}</p>
              </div>

              <a
                href="#ebook"
                className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-resilio-forest-700 to-resilio-forest-600 hover:from-resilio-forest-600 hover:to-resilio-forest-500 text-white border border-resilio-forest-500/50 shadow-glowForest transition-all inline-flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Unduh SOP Lengkap</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
