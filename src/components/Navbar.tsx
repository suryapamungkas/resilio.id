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
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-resilio-mint-200 shadow-subtle">
      {/* 1. TOP BAR: Dual Segment Switcher & Enterprise Security Badge */}
      <div className="bg-resilio-emerald-800 text-white text-xs border-b border-resilio-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between py-1.5 gap-2 sm:gap-0">
          
          {/* Dual Segment Switcher */}
          <div className="flex items-center gap-1.5 p-0.5 bg-resilio-emerald-950/80 rounded-lg border border-resilio-emerald-700/60">
            <button
              type="button"
              onClick={() => onSegmentChange('individuals')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium ${
                currentSegment === 'individuals'
                  ? 'bg-resilio-cyanSoft-500 text-white shadow-sm'
                  : 'text-resilio-mint-200 hover:text-white hover:bg-resilio-emerald-900'
              }`}
              aria-pressed={currentSegment === 'individuals'}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Untuk Perorangan &amp; Keluarga</span>
            </button>

            <button
              type="button"
              onClick={() => onSegmentChange('communities')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all font-medium ${
                currentSegment === 'communities'
                  ? 'bg-resilio-cyanSoft-500 text-white shadow-sm'
                  : 'text-resilio-mint-200 hover:text-white hover:bg-resilio-emerald-900'
              }`}
              aria-pressed={currentSegment === 'communities'}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Untuk Komunitas &amp; Mitra B2B</span>
            </button>
          </div>

          {/* Right utility links */}
          <div className="hidden md:flex items-center gap-4 text-resilio-mint-100">
            <div className="flex items-center gap-1 text-[11px] text-resilio-cyanSoft-300">
              <Lock className="w-3 h-3" />
              <span>Enkripsi 256-Bit Bank Grade</span>
            </div>
            <span className="text-resilio-emerald-700">|</span>
            <a
              href="#crisis-center"
              className="flex items-center gap-1 text-[11px] hover:text-resilio-cyanSoft-300 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-resilio-cyanSoft-400" />
              <span>Pusat Bantuan Krisis Finansial</span>
            </a>
            <span className="text-resilio-emerald-700">|</span>
            <span className="text-[11px] text-resilio-mint-200">
              ID <span className="text-resilio-cyanSoft-400">●</span>
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
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-resilio-emerald-800 to-resilio-emerald-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform border border-resilio-cyanSoft-500/40">
                <Shield className="w-5 h-5 text-resilio-cyanSoft-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-resilio-emerald-800 leading-none">
                  resilio<span className="text-resilio-cyanSoft-500">.id</span>
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase text-resilio-emerald-600 mt-1">
                  Ketahanan Finansial Nasional
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navigasi Utama">
            <a
              href="#pillars"
              className="text-sm font-semibold text-resilio-emerald-900 hover:text-resilio-cyanSoft-600 transition-colors"
            >
              6 Pilar Solusi
            </a>
            <a
              href="#health-check"
              className="text-sm font-semibold text-resilio-emerald-900 hover:text-resilio-cyanSoft-600 transition-colors"
            >
              Early Warning Test
            </a>
            <a
              href="#calculator"
              className="text-sm font-semibold text-resilio-emerald-900 hover:text-resilio-cyanSoft-600 transition-colors"
            >
              Kalkulator Buffer
            </a>
            <a
              href="#crisis-center"
              className="text-sm font-semibold text-resilio-emerald-900 hover:text-resilio-cyanSoft-600 transition-colors"
            >
              Panduan Krisis
            </a>
            <a
              href="#comparison"
              className="text-sm font-semibold text-resilio-emerald-900 hover:text-resilio-cyanSoft-600 transition-colors"
            >
              Komparasi Etis
            </a>
            <a
              href="#ebook"
              className="text-sm font-semibold text-resilio-emerald-900 hover:text-resilio-cyanSoft-600 transition-colors"
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
              className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-resilio-emerald-800 bg-resilio-mint-100 hover:bg-resilio-mint-200/80 rounded-xl border border-resilio-mint-300 transition-all"
              aria-label="Buka dialog pencarian (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-resilio-emerald-700" />
              <span className="hidden xl:inline">Cari pilar &amp; panduan...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-white text-resilio-emerald-800 rounded border border-resilio-mint-300 font-mono shadow-2xs">
                Ctrl K
              </kbd>
            </button>

            {/* Primary CTA with Teal / Cyan Soft (#20B2AA) */}
            <button
              type="button"
              onClick={onStartAssessment}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-white bg-resilio-cyanSoft-500 hover:bg-resilio-cyanSoft-600 shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-resilio-mint-100" />
              <span>Tes Peringatan Dini Risk Free</span>
            </button>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenSearch}
              className="p-2 text-resilio-emerald-800 hover:text-resilio-cyanSoft-600 bg-resilio-mint-100 rounded-lg"
              aria-label="Buka pencarian"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-resilio-emerald-900 hover:text-resilio-cyanSoft-600 rounded-lg focus:outline-none"
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
        <div className="lg:hidden border-t border-resilio-mint-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="p-3 bg-resilio-mint-50 rounded-xl mb-2 border border-resilio-mint-200">
            <span className="text-xs font-bold text-resilio-emerald-800 uppercase block mb-1.5">
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
                    ? 'bg-resilio-emerald-800 text-white'
                    : 'bg-white text-resilio-emerald-900 border border-resilio-mint-300'
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
                    ? 'bg-resilio-emerald-800 text-white'
                    : 'bg-white text-resilio-emerald-900 border border-resilio-mint-300'
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
              className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-resilio-emerald-900 hover:bg-resilio-mint-100"
            >
              <span>6 Pilar Ketahanan Ekonomi</span>
              <ChevronRight className="w-4 h-4 text-resilio-mint-400" />
            </a>
            <a
              href="#health-check"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-resilio-emerald-900 hover:bg-resilio-mint-100"
            >
              <span>Early Warning Health Check</span>
              <ChevronRight className="w-4 h-4 text-resilio-mint-400" />
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-resilio-emerald-900 hover:bg-resilio-mint-100"
            >
              <span>Kalkulator Dana Darurat</span>
              <ChevronRight className="w-4 h-4 text-resilio-mint-400" />
            </a>
            <a
              href="#crisis-center"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-resilio-emerald-900 hover:bg-resilio-mint-100"
            >
              <span>Panduan Tanggap Krisis</span>
              <ChevronRight className="w-4 h-4 text-resilio-mint-400" />
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-resilio-emerald-900 hover:bg-resilio-mint-100"
            >
              <span>Komparasi Resilio vs Pinjol</span>
              <ChevronRight className="w-4 h-4 text-resilio-mint-400" />
            </a>
            <a
              href="#ebook"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-2 px-3 rounded-lg text-sm font-semibold text-resilio-emerald-900 hover:bg-resilio-mint-100"
            >
              <span>Download E-Book Gratis</span>
              <ChevronRight className="w-4 h-4 text-resilio-mint-400" />
            </a>
          </nav>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartAssessment();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-resilio-cyanSoft-500 hover:bg-resilio-cyanSoft-600 shadow-md"
            >
              <Sparkles className="w-4 h-4 text-resilio-mint-100" />
              <span>Tes Peringatan Dini Risk Free</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
