'use client';

import React, { useState } from 'react';
import { Pillar } from '@/types';
import { pillarsData } from '@/data/pillarsData';
import { 
  ShieldAlert, 
  Coins, 
  HeartHandshake, 
  Users, 
  Briefcase, 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  HelpCircle,
  Sparkles,
  Layers
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  Coins,
  HeartHandshake,
  Users,
  Briefcase,
  Activity,
};

interface SolutionsGridProps {
  selectedPillarId?: string | null;
  onOpenAssessment: () => void;
  onOpenCalculator: () => void;
}

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({
  selectedPillarId,
  onOpenAssessment,
  onOpenCalculator,
}) => {
  const [activeModalPillar, setActiveModalPillar] = useState<Pillar | null>(() => {
    if (selectedPillarId) {
      return pillarsData.find((p) => p.id === selectedPillarId) || null;
    }
    return null;
  });

  return (
    <section id="pillars" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-resilio-mint-100 border border-resilio-mint-300 text-resilio-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-resilio-cyanSoft-600" />
            <span>Arsitektur Ketahanan Ekonomi Nasional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-resilio-emerald-800 tracking-tight">
            6 Pilar Ketahanan Ekonomi Resilio
          </h2>

          <p className="text-base sm:text-lg text-resilio-emerald-950/80 leading-relaxed font-normal">
            Sistem terintegrasi berstandar enterprise yang dirancang khusus untuk melindungi keluarga dan komunitas dari risiko guncangan ekonomi tak terduga.
          </p>
        </div>

        {/* 6 Pillars Cards Grid (Philips Style Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillarsData.map((pillar) => {
            const IconComponent = iconMap[pillar.iconName] || ShieldAlert;

            return (
              <div
                key={pillar.id}
                className="group relative flex flex-col justify-between bg-resilio-mint-50/60 hover:bg-white rounded-3xl p-7 border border-resilio-mint-200 hover:border-resilio-cyanSoft-400 shadow-subtle hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Pillar Number Badge & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-resilio-emerald-800 group-hover:bg-gradient-to-br group-hover:from-resilio-emerald-800 group-hover:to-resilio-cyanSoft-600 text-white flex items-center justify-center shadow-sm transition-all">
                      <IconComponent className="w-6 h-6 text-resilio-cyanSoft-300" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-resilio-emerald-700/60">
                        Pilar #{pillar.number}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white text-resilio-emerald-800 border border-resilio-mint-300 shadow-2xs">
                        {pillar.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-black text-resilio-emerald-900 group-hover:text-resilio-cyanSoft-600 transition-colors mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold text-resilio-emerald-700 mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-resilio-emerald-950/80 mb-5 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Key Feature Bullets */}
                  <div className="space-y-2.5 pt-4 border-t border-resilio-mint-200/80 mb-6">
                    {pillar.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-resilio-cyanSoft-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-resilio-emerald-950/90 font-medium leading-normal">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer: Metric & Action */}
                <div className="pt-4 border-t border-resilio-mint-200/80">
                  <p className="text-[11px] text-resilio-emerald-800/80 italic mb-4 font-medium">
                    ⚡ {pillar.metricsHighlight}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalPillar(pillar)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-resilio-emerald-800 hover:text-resilio-cyanSoft-600 transition-colors"
                    >
                      <span>Lihat Alur &amp; Rincian</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {pillar.id === 'emergency-planning' && (
                      <button
                        type="button"
                        onClick={onOpenCalculator}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-resilio-cyanSoft-500 hover:bg-resilio-cyanSoft-600 text-white transition-colors"
                      >
                        Buka Kalkulator
                      </button>
                    )}

                    {pillar.id === 'early-warning-system' && (
                      <button
                        type="button"
                        onClick={onOpenAssessment}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-resilio-emerald-800 hover:bg-resilio-emerald-900 text-white transition-colors"
                      >
                        Cek Skor Anda
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive In-Depth Pillar Detail Modal */}
      {activeModalPillar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-resilio-emerald-950/70 backdrop-blur-sm overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pillar-modal-title"
          onClick={() => setActiveModalPillar(null)}
        >
          <div
            className="w-full max-w-3xl bg-white rounded-3xl shadow-elevated border border-resilio-mint-200 p-6 sm:p-8 my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-5 border-b border-resilio-mint-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-resilio-emerald-800 text-white flex items-center justify-center shadow-md">
                  {React.createElement(iconMap[activeModalPillar.iconName] || ShieldAlert, {
                    className: 'w-6 h-6 text-resilio-cyanSoft-300',
                  })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-resilio-emerald-700/70 uppercase">
                      Pilar #{activeModalPillar.number}
                    </span>
                    <span className="px-2.5 py-0.5 text-xs font-bold bg-resilio-mint-100 text-resilio-emerald-800 rounded-md">
                      {activeModalPillar.category}
                    </span>
                  </div>
                  <h3 id="pillar-modal-title" className="text-xl sm:text-2xl font-black text-resilio-emerald-900">
                    {activeModalPillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-resilio-cyanSoft-600 font-bold">
                    {activeModalPillar.subtitle}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalPillar(null)}
                className="p-2 text-resilio-emerald-700 hover:text-resilio-emerald-900 rounded-xl hover:bg-resilio-mint-100 transition-colors"
                aria-label="Tutup rincian pilar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6 max-h-[65vh] overflow-y-auto pr-1">
              {/* Problem & Approach */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-800 block mb-1">
                    Tantangan Riil di Lapangan:
                  </span>
                  <p className="text-xs text-rose-950 leading-relaxed font-medium">
                    {activeModalPillar.details.problemStatement}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-resilio-mint-100/70 border border-resilio-mint-300">
                  <span className="text-xs font-bold uppercase tracking-wider text-resilio-emerald-800 block mb-1">
                    Pendekatan Resilio:
                  </span>
                  <p className="text-xs text-resilio-emerald-950 leading-relaxed font-medium">
                    {activeModalPillar.details.resilioApproach}
                  </p>
                </div>
              </div>

              {/* Operational Workflow Steps */}
              <div>
                <h4 className="text-sm font-bold text-resilio-emerald-800 uppercase tracking-wider mb-3">
                  Alur Operasional &amp; Implementasi
                </h4>
                <div className="space-y-2.5">
                  {activeModalPillar.details.operationalWorkflow.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3 p-3 rounded-xl bg-resilio-mint-50 border border-resilio-mint-200">
                      <div className="w-6 h-6 rounded-full bg-resilio-emerald-800 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {sIdx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-resilio-emerald-950 font-medium">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* In-depth FAQ */}
              <div>
                <h4 className="text-sm font-bold text-resilio-emerald-800 uppercase tracking-wider mb-3">
                  Pertanyaan Sering Diajukan (FAQ)
                </h4>
                <div className="space-y-3">
                  {activeModalPillar.details.faq.map((faqItem, fIdx) => (
                    <div key={fIdx} className="p-3.5 rounded-xl bg-white border border-resilio-mint-200">
                      <div className="flex items-start gap-2 mb-1.5">
                        <HelpCircle className="w-4 h-4 text-resilio-cyanSoft-600 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-bold text-resilio-emerald-900">
                          {faqItem.q}
                        </span>
                      </div>
                      <p className="text-xs text-resilio-emerald-950/80 pl-6 leading-relaxed">
                        {faqItem.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-resilio-mint-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-resilio-emerald-700 font-medium">
                Target Penerima Manfaat: <strong className="text-resilio-emerald-900">{activeModalPillar.targetAudience}</strong>
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveModalPillar(null)}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-resilio-emerald-800 hover:bg-resilio-mint-100 rounded-xl transition-colors"
                >
                  Tutup
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalPillar(null);
                    onOpenAssessment();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-resilio-cyanSoft-500 hover:bg-resilio-cyanSoft-600 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-resilio-mint-100" />
                  <span>Jalankan Asesmen Terkait</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
