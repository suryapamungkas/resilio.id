'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search, X, ShieldAlert, ArrowRight, BookOpen, AlertTriangle, Calculator, FileText } from 'lucide-react';
import { pillarsData } from '@/data/pillarsData';
import { crisisGuidesData } from '@/data/crisisGuidesData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPillar: (pillarId: string) => void;
}

const ALL_TOOLS = [
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
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectPillar }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Keyboard shortcut listener for Ctrl+K and ESC
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

  // Lock body scroll when search modal is open
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const query = searchQuery.toLowerCase().trim();

  const filteredPillars = useMemo(() => {
    if (!query) return pillarsData;
    return pillarsData.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
  }, [query]);

  const filteredGuides = useMemo(() => {
    if (!query) return crisisGuidesData;
    return crisisGuidesData.filter(
      (g) =>
        g.title.toLowerCase().includes(query) ||
        g.summary.toLowerCase().includes(query) ||
        g.category.toLowerCase().includes(query)
    );
  }, [query]);

  const tools = useMemo(() => {
    if (!query) return ALL_TOOLS;
    return ALL_TOOLS.filter((t) => t.title.toLowerCase().includes(query) || t.category.toLowerCase().includes(query));
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-dialog-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-resilio-black-surface rounded-2xl shadow-2xl border border-resilio-black-border overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative border-b border-resilio-black-border flex items-center px-4 py-3 bg-resilio-black-card">
          <Search className="w-5 h-5 text-resilio-forest-400 mr-3 shrink-0" aria-hidden="true" />
          <input
            id="search-dialog-title"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari solusi 6 pilar, panduan krisis PHK, kalkulator, e-book..."
            className="w-full bg-transparent text-white placeholder-slate-500 text-base focus:outline-none font-medium"
            autoFocus
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-slate-400 hover:text-white p-1 mr-2"
              aria-label="Bersihkan pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          ) : null}
          <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-xs text-resilio-forest-300 bg-resilio-forest-950 border border-resilio-forest-800 rounded font-mono">
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5 bg-resilio-black-surface">
          {/* Quick Tools */}
          {tools.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-resilio-forest-400 mb-2 px-2">
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
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-resilio-black-card group transition-colors border border-transparent hover:border-resilio-forest-800/60"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-resilio-forest-900/60 border border-resilio-forest-700/50 flex items-center justify-center text-resilio-forest-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-100 group-hover:text-resilio-forest-300">
                            {tool.title}
                          </p>
                          <span className="text-xs text-slate-400">{tool.category}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-resilio-forest-400 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* 6 Pillars */}
          {filteredPillars.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-resilio-forest-400 mb-2 px-2">
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
                    className="w-full text-left flex items-center justify-between p-2.5 rounded-xl hover:bg-resilio-black-card group transition-colors border border-transparent hover:border-resilio-forest-800/60"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-resilio-forest-900/80 border border-resilio-forest-700/60 flex items-center justify-center text-resilio-forest-300 font-bold text-xs">
                        #{pillar.number}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-100 group-hover:text-resilio-forest-300">
                          {pillar.title}
                        </p>
                        <p className="text-xs text-slate-400 line-clamp-1">{pillar.subtitle}</p>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-resilio-forest-950 text-resilio-forest-300 rounded-md font-bold border border-resilio-forest-800/80">
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
              <p className="text-xs font-bold uppercase tracking-wider text-resilio-blood-400 mb-2 px-2">
                Panduan Tanggap Darurat Finansial
              </p>
              <div className="space-y-1">
                {filteredGuides.map((guide) => (
                  <a
                    key={guide.id}
                    href="#crisis-center"
                    onClick={onClose}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-resilio-blood-950/40 group transition-colors border border-transparent hover:border-resilio-blood-800/60"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-resilio-blood-900/60 border border-resilio-blood-700/60 flex items-center justify-center text-resilio-blood-300">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-100 group-hover:text-resilio-blood-300">
                          {guide.title}
                        </p>
                        <span className="text-xs text-resilio-blood-400 font-semibold">{guide.category}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-resilio-blood-400" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {tools.length === 0 && filteredPillars.length === 0 && filteredGuides.length === 0 && (
            <div className="text-center py-10">
              <FileText className="w-10 h-10 text-slate-600 mx-auto mb-2" />
              <p className="text-sm font-bold text-slate-200">Tidak ada hasil ditemukan</p>
              <p className="text-xs text-slate-400 mt-1">
                Coba kata kunci lain seperti &quot;dana darurat&quot;, &quot;PHK&quot;, &quot;kredit mikro&quot;, atau &quot;arisan&quot;.
              </p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-resilio-black-card border-t border-resilio-black-border flex items-center justify-between text-xs text-slate-400 font-medium">
          <span>Gunakan ESC atau klik di luar untuk menutup</span>
          <span className="hidden sm:inline text-resilio-forest-400">resilio.id - Sistem Ketahanan Finansial</span>
        </div>
      </div>
    </div>
  );
};
