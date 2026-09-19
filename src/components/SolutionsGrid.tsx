'use client';

import React, { useState, useEffect } from 'react';
import { Pillar } from '@/types';
import { pillarsData } from '@/data/pillarsData';
import { SectionHeader } from '@/components/SectionHeader';
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

  // Sync modal when selectedPillarId changes from external search selection
  useEffect(() => {
    if (selectedPillarId) {
      const found = pillarsData.find((p) => p.id === selectedPillarId);
      if (found) {
        setActiveModalPillar(found);
      }
    }
  }, [selectedPillarId]);

  // Lock background scroll and handle Escape key when modal is open
  useEffect(() => {
    if (!activeModalPillar) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalPillar(null);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalPillar]);

  return (
    <section id="pillars" className="py-16 sm:py-24 bg-resilio-black relative border-b border-resilio-forest-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeIcon={Layers}
          badgeText="Arsitektur Ketahanan Ekonomi Nasional"
          title="6 Pilar Ketahanan Ekonomi Resilio"
          description="Sistem terintegrasi berstandar enterprise yang dirancang khusus untuk melindungi keluarga dan komunitas dari risiko guncangan ekonomi tak terduga."
        />

        {/* 6 Pillars Cards Grid (Dark Enterprise Style Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillarsData.map((pillar) => {
            const IconComponent = iconMap[pillar.iconName] || ShieldAlert;

            return (
              <div
                key={pillar.id}
                className="group relative flex flex-col justify-between bg-resilio-black-surface hover:bg-resilio-black-card rounded-3xl p-7 border border-resilio-forest-800/70 hover:border-resilio-forest-600 shadow-card hover:shadow-glowForest transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Pillar Number Badge & Category */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-resilio-forest-900 text-white flex items-center justify-center shadow-card border border-resilio-forest-700/60 group-hover:border-resilio-forest-500 transition-all">
                      <IconComponent className="w-6 h-6 text-resilio-forest-300" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-resilio-forest-400">
                        Pilar #{pillar.number}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-resilio-black-card text-resilio-forest-200 border border-resilio-forest-700/60 shadow-subtle">
                        {pillar.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-black text-white group-hover:text-resilio-forest-300 transition-colors mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-bold text-resilio-forest-400 mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-resilio-charcoal-300 mb-5 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Key Feature Bullets */}
                  <div className="space-y-2.5 pt-4 border-t border-resilio-forest-900/80 mb-6">
                    {pillar.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-resilio-forest-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-resilio-charcoal-200 font-medium leading-normal">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Footer: Metric & Action */}
                <div className="pt-4 border-t border-resilio-forest-900/80">
                  <p className="text-[11px] text-resilio-forest-300/90 italic mb-4 font-medium">
                    ⚡ {pillar.metricsHighlight}
                  </p>

                  <div className="flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalPillar(pillar)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-resilio-forest-300 hover:text-resilio-forest-200 transition-colors"
                    >
                      <span>Lihat Alur &amp; Rincian</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {pillar.id === 'emergency-planning' && (
                      <button
                        type="button"
                        onClick={onOpenCalculator}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-resilio-forest-700 hover:bg-resilio-forest-600 text-white border border-resilio-forest-500/50 transition-colors shadow-sm"
                      >
                        Buka Kalkulator
                      </button>
                    )}

                    {pillar.id === 'early-warning-system' && (
                      <button
                        type="button"
                        onClick={onOpenAssessment}
                        className="px-3 py-1.5 rounded-lg text-xs font-bold bg-resilio-blood-800 hover:bg-resilio-blood-700 text-white border border-resilio-blood-600/50 transition-colors shadow-sm"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-resilio-black-950/80 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pillar-modal-title"
          onClick={() => setActiveModalPillar(null)}
        >
          <div
            className="w-full max-w-3xl bg-resilio-black-surface rounded-3xl shadow-elevated border border-resilio-forest-700/80 p-6 sm:p-8 my-8 overflow-hidden text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-5 border-b border-resilio-forest-800/80">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-resilio-forest-900 text-white flex items-center justify-center shadow-card border border-resilio-forest-600/50">
                  {React.createElement(iconMap[activeModalPillar.iconName] || ShieldAlert, {
                    className: 'w-6 h-6 text-resilio-forest-300',
                  })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-resilio-forest-400 uppercase">
                      Pilar #{activeModalPillar.number}
                    </span>
                    <span className="px-2.5 py-0.5 text-xs font-bold bg-resilio-forest-900/80 text-resilio-forest-200 border border-resilio-forest-700/60 rounded-md">
                      {activeModalPillar.category}
                    </span>
                  </div>
                  <h3 id="pillar-modal-title" className="text-xl sm:text-2xl font-black text-white">
                    {activeModalPillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-resilio-forest-400 font-bold">
                    {activeModalPillar.subtitle}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModalPillar(null)}
                className="p-2 text-resilio-charcoal-400 hover:text-white rounded-xl hover:bg-resilio-forest-900/60 transition-colors"
                aria-label="Tutup rincian pilar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6 max-h-[65vh] overflow-y-auto pr-1">
              {/* Problem & Approach */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-resilio-blood-950/70 border border-resilio-blood-800/80 shadow-subtle">
                  <span className="text-xs font-bold uppercase tracking-wider text-resilio-blood-300 block mb-1">
                    Tantangan Riil di Lapangan:
                  </span>
                  <p className="text-xs text-resilio-charcoal-100 leading-relaxed font-medium">
                    {activeModalPillar.details.problemStatement}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-resilio-forest-950/70 border border-resilio-forest-800/80 shadow-subtle">
                  <span className="text-xs font-bold uppercase tracking-wider text-resilio-forest-300 block mb-1">
                    Pendekatan Resilio:
                  </span>
                  <p className="text-xs text-resilio-charcoal-100 leading-relaxed font-medium">
                    {activeModalPillar.details.resilioApproach}
                  </p>
                </div>
              </div>

              {/* Operational Workflow Steps */}
              <div>
                <h4 className="text-sm font-bold text-resilio-forest-300 uppercase tracking-wider mb-3">
                  Alur Operasional &amp; Implementasi
                </h4>
                <div className="space-y-2.5">
                  {activeModalPillar.details.operationalWorkflow.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3 p-3 rounded-xl bg-resilio-black-card border border-resilio-forest-900/80">
                      <div className="w-6 h-6 rounded-full bg-resilio-forest-800 text-resilio-forest-200 border border-resilio-forest-600/50 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {sIdx + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-resilio-charcoal-200 font-medium">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* In-depth FAQ */}
              <div>
                <h4 className="text-sm font-bold text-resilio-forest-300 uppercase tracking-wider mb-3">
                  Pertanyaan Sering Diajukan (FAQ)
                </h4>
                <div className="space-y-3">
                  {activeModalPillar.details.faq.map((faqItem, fIdx) => (
                    <div key={fIdx} className="p-3.5 rounded-xl bg-resilio-black-card border border-resilio-forest-900/80">
                      <div className="flex items-start gap-2 mb-1.5">
                        <HelpCircle className="w-4 h-4 text-resilio-forest-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-bold text-white">
                          {faqItem.q}
                        </span>
                      </div>
                      <p className="text-xs text-resilio-charcoal-300 pl-6 leading-relaxed">
                        {faqItem.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-resilio-forest-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-resilio-charcoal-400 font-medium">
                Target Penerima Manfaat: <strong className="text-resilio-forest-300">{activeModalPillar.targetAudience}</strong>
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveModalPillar(null)}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-resilio-charcoal-300 hover:text-white hover:bg-resilio-forest-900/50 rounded-xl transition-colors"
                >
                  Tutup
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalPillar(null);
                    onOpenAssessment();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-resilio-forest-700 to-resilio-forest-600 hover:from-resilio-forest-600 hover:to-resilio-forest-500 border border-resilio-forest-500/50 rounded-xl shadow-glowForest transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-resilio-forest-200" />
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
