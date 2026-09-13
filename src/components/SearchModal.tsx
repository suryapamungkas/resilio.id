'use client';

import React, { useState, useEffect } from 'react';
import { Search, X, ShieldAlert, ArrowRight, BookOpen, AlertTriangle, Calculator, FileText } from 'lucide-react';
import { pillarsData } from '@/data/pillarsData';
import { crisisGuidesData } from '@/data/crisisGuidesData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPillar: (pillarId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectPillar }) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const query = searchQuery.toLowerCase().trim();

  const filteredPillars = pillarsData.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.subtitle.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
  );

  const filteredGuides = crisisGuidesData.filter(
    (g) =>
      g.title.toLowerCase().includes(query) ||
      g.summary.toLowerCase().includes(query) ||
      g.category.toLowerCase().includes(query)
  );

  const tools = [
    {
      id: 'health-check',
      title: 'Financial Health Check (Early Warning 4-Langkah)',
      category: 'Alat Interaktif',
      href: '#health-check',
      icon: ShieldAlert,
    },
    {
      id: 'calculator',
      title: 'Kalkulator Simulasi Dana Darurat & Asuransi Mikro',
      category: 'Alat Interaktif',
      href: '#calculator',
      icon: Calculator,
    },
    {
      id: 'ebook',
      title: 'E-Book: Panduan Selamat dari Crisis & Shock Ekonomi (Gratis)',
      category: 'E-Book & Edukasi',
      href: '#ebook',
      icon: BookOpen,
    },
  ].filter((t) => t.title.toLowerCase().includes(query) || t.category.toLowerCase().includes(query));

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-resilio-emerald-950/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-dialog-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-elevated border border-resilio-mint-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-resilio-mint-200 flex items-center px-4 py-3 bg-resilio-mint-50/80">
          <Search className="w-5 h-5 text-resilio-emerald-700 mr-3 shrink-0" aria-hidden="true" />
          <input
            id="search-dialog-title"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari solusi 6 pilar, panduan krisis PHK, kalkulator, e-book..."
            className="w-full bg-transparent text-resilio-emerald-900 placeholder-resilio-emerald-600/70 text-base focus:outline-none font-medium"
            autoFocus
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-resilio-emerald-600 hover:text-resilio-emerald-900 p-1 mr-2"
              aria-label="Bersihkan pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          ) : null}
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs text-resilio-emerald-800 bg-resilio-mint-200 rounded font-mono">
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
          {/* Quick Tools */}
          {tools.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-resilio-emerald-700 mb-2 px-2">
                Alat &amp; Asesmen
              </p>
              <div className="space-y-1">
                {tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <a
                      key={tool.id}
                      href={tool.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-resilio-mint-100 group transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-resilio-mint-200 flex items-center justify-center text-resilio-emerald-800">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-resilio-emerald-900 group-hover:text-resilio-cyanSoft-600">
                            {tool.title}
                          </p>
                          <span className="text-xs text-resilio-emerald-700">{tool.category}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-resilio-emerald-500 group-hover:text-resilio-cyanSoft-600 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* 6 Pillars */}
          {filteredPillars.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-resilio-emerald-700 mb-2 px-2">
                6 Pilar Ketahanan Ekonomi
              </p>
              <div className="space-y-1">
                {filteredPillars.map((pillar) => (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => {
                      onSelectPillar(pillar.id);
                      onClose();
                    }}
                    className="w-full text-left flex items-center justify-between p-2.5 rounded-xl hover:bg-resilio-mint-100 group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-resilio-emerald-800 flex items-center justify-center text-resilio-mint-100 font-bold text-xs">
                        #{pillar.number}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-resilio-emerald-900 group-hover:text-resilio-cyanSoft-600">
                          {pillar.title}
                        </p>
                        <p className="text-xs text-resilio-emerald-700 line-clamp-1">{pillar.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-resilio-mint-100 text-resilio-emerald-800 rounded-md font-bold border border-resilio-mint-200">
                      {pillar.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Crisis Guides */}
          {filteredGuides.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-resilio-emerald-700 mb-2 px-2">
                Panduan Tanggap Darurat Finansial
              </p>
              <div className="space-y-1">
                {filteredGuides.map((guide) => (
                  <a
                    key={guide.id}
                    href="#crisis-center"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50 group transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-resilio-emerald-900 group-hover:text-amber-800">
                          {guide.title}
                        </p>
                        <span className="text-xs text-amber-700 font-semibold">{guide.category}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-resilio-emerald-500 group-hover:text-amber-700" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {tools.length === 0 && filteredPillars.length === 0 && filteredGuides.length === 0 && (
            <div className="text-center py-10">
              <FileText className="w-10 h-10 text-resilio-mint-300 mx-auto mb-2" />
              <p className="text-sm font-bold text-resilio-emerald-900">Tidak ada hasil ditemukan</p>
              <p className="text-xs text-resilio-emerald-700 mt-1">
                Coba kata kunci lain seperti &quot;dana darurat&quot;, &quot;PHK&quot;, &quot;kredit mikro&quot;, atau &quot;arisan&quot;.
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-resilio-mint-50 border-t border-resilio-mint-200 flex items-center justify-between text-xs text-resilio-emerald-800 font-medium">
          <span>Gunakan panah untuk navigasi atau klik item langsung</span>
          <span className="hidden sm:inline">resilio.id - Solusi Ketahanan Ekonomi</span>
        </div>
      </div>
    </div>
  );
};
