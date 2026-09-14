'use client';

import React, { useState } from 'react';
import { AudienceSegment } from '@/types';
import { 
  Shield, 
  Search, 
  PhoneCall, 
  Menu, 
  X, 
  Users, 
  UserCheck, 
  ChevronRight,
  Sparkles,
  Lock
} from 'lucide-react';

interface NavbarProps {
  currentSegment: AudienceSegment;
  onSegmentChange: (segment: AudienceSegment) => void;
  onOpenSearch: () => void;
  onStartAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSegment,
  onSegmentChange,
  onOpenSearch,
  onStartAssessment,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-resilio-black/95 backdrop-blur-md border-b border-resilio-forest-800/50 shadow-card">
      {/* 1. TOP BAR: Dual Segment Switcher & Enterprise Security Badge */}
      <div className="bg-resilio-black-950 text-white text-xs border-b border-resilio-forest-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between py-1.5 gap-2 sm:gap-0">
          
          {/* Dual Segment Switcher */}
          <div className="flex items-center gap-1.5 p-0.5 bg-resilio-black-surface rounded-lg border border-resilio-forest-800/80">
            <button
              type="button"
              onClick={() => onSegmentChange('individuals')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium ${
                currentSegment === 'individuals'
                  ? 'bg-resilio-forest-700 text-white shadow-sm border border-resilio-forest-500/60'
                  : 'text-resilio-charcoal-300 hover:text-white hover:bg-resilio-forest-900/60'
              }`}
              aria-pressed={currentSegment === 'individuals'}
            >
              <UserCheck className="w-3.5 h-3.5 text-resilio-forest-300" />
              <span>Untuk Perorangan &amp; Keluarga</span>
            </button>

            <button
              type="button"
              onClick={() => onSegmentChange('communities')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium ${
                currentSegment === 'communities'
                  ? 'bg-resilio-forest-700 text-white shadow-sm border border-resilio-forest-500/60'
                  : 'text-resilio-charcoal-300 hover:text-white hover:bg-resilio-forest-900/60'
              }`}
              aria-pressed={currentSegment === 'communities'}
            >
              <Users className="w-3.5 h-3.5 text-resilio-forest-300" />
              <span>Untuk Komunitas &amp; Mitra B2B</span>
            </button>
          </div>

          {/* Right utility links */}
          <div className="hidden md:flex items-center gap-4 text-resilio-charcoal-300">
            <div className="flex items-center gap-1 text-[11px] text-resilio-forest-300">
              <Lock className="w-3 h-3" />
              <span>Enkripsi 256-Bit Bank Grade</span>
            </div>
            <span className="text-resilio-forest-800">|</span>
            <a
              href="#crisis-center"
              className="flex items-center gap-1.5 text-[11px] text-resilio-blood-300 hover:text-resilio-blood-200 transition-colors font-semibold"
            >
              <PhoneCall className="w-3 h-3 text-resilio-blood-400" />
              <span>Pusat Bantuan Krisis Finansial</span>
            </a>
            <span className="text-resilio-forest-800">|</span>
            <span className="text-[11px] text-resilio-charcoal-300">
              ID <span className="text-resilio-forest-400">●</span>
            </span>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-resilio-forest-700 to-resilio-forest-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform border border-resilio-forest-500/50">
                <Shield className="w-5 h-5 text-resilio-forest-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white leading-none">
                  resilio<span className="text-resilio-forest-400">.id</span>
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase text-resilio-forest-300/90 mt-1">
                  Ketahanan Finansial Nasional
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navigasi Utama">
            <a
              href="#pillars"
              className="text-sm font-semibold text-resilio-charcoal-200 hover:text-resilio-forest-300 transition-colors"
            >
              6 Pilar Solusi
            </a>
            <a
              href="#health-check"
              className="text-sm font-semibold text-resilio-charcoal-200 hover:text-resilio-forest-300 transition-colors"
            >
              Early Warning Test
            </a>
            <a
              href="#calculator"
              className="text-sm font-semibold text-resilio-charcoal-200 hover:text-resilio-forest-300 transition-colors"
            >
              Kalkulator Buffer
            </a>
            <a
              href="#crisis-center"
              className="text-sm font-semibold text-resilio-charcoal-200 hover:text-resilio-blood-300 transition-colors flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-resilio-blood-500 animate-pulse"></span>
              <span>Panduan Krisis</span>
            </a>
            <a
              href="#comparison"
              className="text-sm font-semibold text-resilio-charcoal-200 hover:text-resilio-forest-300 transition-colors"
            >
              Komparasi Etis
            </a>
            <a
              href="#ebook"
              className="text-sm font-semibold text-resilio-charcoal-200 hover:text-resilio-forest-300 transition-colors"
            >
              E-Book Edukasi
            </a>
          </nav>

          {/* Action Area: Search & Primary CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Button */}
            <button
              type="button"
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-resilio-charcoal-200 bg-resilio-black-surface hover:bg-resilio-black-elevated rounded-xl border border-resilio-forest-800/80 transition-all"
              aria-label="Buka dialog pencarian (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-resilio-forest-400" />
              <span className="hidden xl:inline">Cari pilar &amp; panduan...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-resilio-black text-resilio-forest-300 rounded border border-resilio-forest-800 font-mono shadow-subtle">
                Ctrl K
              </kbd>
            </button>

            {/* Primary CTA with Dark Forest Green & Blood Red touch */}
            <button
              type="button"
              onClick={onStartAssessment}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-resilio-forest-700 via-resilio-forest-600 to-resilio-forest-700 hover:from-resilio-forest-600 hover:to-resilio-forest-500 border border-resilio-forest-500/50 shadow-glowForest transition-all active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-resilio-forest-200" />
              <span>Tes Peringatan Dini</span>
            </button>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-resilio-charcoal-200 hover:text-white bg-resilio-black-surface rounded-lg border border-resilio-forest-800"
              aria-label="Buka pencarian"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-resilio-charcoal-200 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle navigasi menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-resilio-forest-800/80 bg-resilio-black-surface px-4 pt-3 pb-6 space-y-3 shadow-elevated">
          <div className="p-3 bg-resilio-black-card rounded-xl mb-2 border border-resilio-forest-800/80">
            <span className="text-xs font-bold text-resilio-forest-300 uppercase block mb-1.5">
              Pilih Segmen Pengguna:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  onSegmentChange('individuals');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-2 text-xs rounded-lg font-bold text-center ${
                  currentSegment === 'individuals'
                    ? 'bg-resilio-forest-700 text-white border border-resilio-forest-500/50'
                    : 'bg-resilio-black text-resilio-charcoal-300 border border-resilio-forest-900'
                }`}
              >
                Perorangan &amp; Keluarga
              </button>
              <button
                type="button"
                onClick={() => {
                  onSegmentChange('communities');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 px-2 text-xs rounded-lg font-bold text-center ${
                  currentSegment === 'communities'
                    ? 'bg-resilio-forest-700 text-white border border-resilio-forest-500/50'
                    : 'bg-resilio-black text-resilio-charcoal-300 border border-resilio-forest-900'
                }`}
              >
                Komunitas &amp; B2B
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-2">
            <a
              href="#pillars"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-resilio-charcoal-200 hover:bg-resilio-forest-900/60"
            >
              <span>6 Pilar Ketahanan Ekonomi</span>
              <ChevronRight className="w-4 h-4 text-resilio-forest-400" />
            </a>
            <a
              href="#health-check"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-resilio-charcoal-200 hover:bg-resilio-forest-900/60"
            >
              <span>Early Warning Health Check</span>
              <ChevronRight className="w-4 h-4 text-resilio-forest-400" />
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-resilio-charcoal-200 hover:bg-resilio-forest-900/60"
            >
              <span>Kalkulator Dana Darurat</span>
              <ChevronRight className="w-4 h-4 text-resilio-forest-400" />
            </a>
            <a
              href="#crisis-center"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-resilio-blood-300 hover:bg-resilio-blood-950/60"
            >
              <span>Panduan Tanggap Krisis</span>
              <ChevronRight className="w-4 h-4 text-resilio-blood-400" />
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-resilio-charcoal-200 hover:bg-resilio-forest-900/60"
            >
              <span>Komparasi Resilio vs Pinjol</span>
              <ChevronRight className="w-4 h-4 text-resilio-forest-400" />
            </a>
            <a
              href="#ebook"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-resilio-charcoal-200 hover:bg-resilio-forest-900/60"
            >
              <span>Download E-Book Gratis</span>
              <ChevronRight className="w-4 h-4 text-resilio-forest-400" />
            </a>
          </nav>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartAssessment();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-resilio-forest-700 to-resilio-forest-600 hover:from-resilio-forest-600 hover:to-resilio-forest-500 border border-resilio-forest-500/50 shadow-md"
            >
              <Sparkles className="w-4 h-4 text-resilio-forest-200" />
              <span>Tes Peringatan Dini Risk Free</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
