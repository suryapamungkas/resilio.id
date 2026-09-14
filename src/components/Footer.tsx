'use client';

import React from 'react';
import { 
  Shield, 
  Lock, 
  FileCheck, 
  Award, 
  PhoneCall, 
  Mail, 
  MapPin
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-resilio-black text-white border-t border-resilio-black-border">
      
      {/* 1. Compliance & Regulatory Banner */}
      <div className="border-b border-resilio-black-border bg-resilio-black-card/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-resilio-forest-900/60 flex items-center justify-center text-resilio-forest-300 shrink-0 border border-resilio-forest-700/40">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">OJK FinTech Sandbox</p>
                <p className="text-[11px] text-slate-400">Inovasi Keuangan Digital Klaster Sosial</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-resilio-forest-900/60 flex items-center justify-center text-resilio-forest-300 shrink-0 border border-resilio-forest-700/40">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Kode Etik AFPI</p>
                <p className="text-[11px] text-slate-400">Prinsip Perlindungan Konsumen Etis</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-resilio-blood-950/60 flex items-center justify-center text-resilio-blood-300 shrink-0 border border-resilio-blood-800/40">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">ISO/IEC 27001</p>
                <p className="text-[11px] text-slate-400">Sistem Manajemen Keamanan Informasi</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-resilio-forest-900/60 flex items-center justify-center text-resilio-forest-400 shrink-0 border border-resilio-forest-700/40">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Opsi Prinsip Syariah</p>
                <p className="text-[11px] text-slate-400">Akad Tabarru&apos; &amp; Bebas Bunga Riba</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Main 4-Column Navigation Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-resilio-forest-700 to-resilio-forest-500 flex items-center justify-center text-white font-black shadow-glowForest">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                resilio<span className="text-resilio-forest-400">.id</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Infrastruktur perlindungan ekonomi masyarakat Indonesia. Membantu keluarga berpenghasilan rentan membangun benteng finansial dari penyiapan dana darurat, asuransi mikro, hingga respon darurat saat shock ekonomi.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-resilio-blood-400" />
                <span>Hotline Darurat: <strong className="text-resilio-blood-300">0800-140-RESILIO</strong> (Bebas Pulsa)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-resilio-forest-400" />
                <span>Bantuan &amp; Kemitraan: <strong className="text-white">dukungan@resilio.id</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-resilio-forest-400" />
                <span>Gedung Ketahanan Finansial, Kawasan Mega Kuningan, Jakarta Selatan</span>
              </div>
            </div>
          </div>

          {/* Column 1: Solusi Individu */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              Solusi Individu &amp; Keluarga
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#pillars" className="hover:text-resilio-forest-400 transition-colors">
                  Perencanaan Dana Darurat
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-resilio-forest-400 transition-colors">
                  Akses Pembiayaan Sehat
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-resilio-forest-400 transition-colors">
                  Asuransi Mikro Rawat Inap
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-resilio-forest-400 transition-colors">
                  Santunan Transisi PHK
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-resilio-forest-400 transition-colors">
                  Upskilling &amp; Income Alternatif
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Solusi Komunitas / B2B */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              Solusi Komunitas &amp; B2B
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#pillars" className="hover:text-resilio-forest-400 transition-colors">
                  Dana Darurat RT/RW Digital
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-resilio-forest-400 transition-colors">
                  Buku Kas Paguyuban Pasar
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-resilio-forest-400 transition-colors">
                  Corporate Employee Resilience
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-resilio-forest-400 transition-colors">
                  Integrasi Koperasi Karyawan
                </a>
              </li>
              <li>
                <a href="#pillars" className="hover:text-resilio-forest-400 transition-colors">
                  Program CSR Penjaga Gawang Finansial
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Edukasi & Alat */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider">
              Edukasi &amp; Alat Bantu
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#health-check" className="hover:text-resilio-forest-400 transition-colors">
                  Early Warning Health Check
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-resilio-forest-400 transition-colors">
                  Kalkulator Simulasi Buffer
                </a>
              </li>
              <li>
                <a href="#crisis-center" className="hover:text-resilio-forest-400 transition-colors">
                  Panduan Tanggap Darurat PHK
                </a>
              </li>
              <li>
                <a href="#crisis-center" className="hover:text-resilio-forest-400 transition-colors">
                  Prosedur Lapor Pinjol Ilegal
                </a>
              </li>
              <li>
                <a href="#ebook" className="hover:text-resilio-forest-400 transition-colors">
                  Unduh E-Book Krisis Finansial
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Note */}
        <div className="mt-12 pt-8 border-t border-resilio-black-border text-[11px] text-slate-500 leading-relaxed space-y-3">
          <p>
            <strong>Disclaimer Regulasi &amp; Keamanan Data:</strong> PT Resilio Ketahanan Finansial Indonesia (&ldquo;resilio.id&rdquo;) merupakan penyelenggara platform teknologi tata kelola ketahanan finansial dan terdaftar dalam Regulatory Sandbox Otoritas Jasa Keuangan (OJK). Resilio.id bukan lembaga penghimpun dana perbankan publik secara langsung; seluruh penempatan dana darurat dan simpanan gotong royong dikelola melalui rekening penampung kustodian (escrow) pada bank mitra berizin serta dijamin Lembaga Penjamin Simpanan (LPS) sesuai ketentuan yang berlaku.
          </p>
          <p>
            Pengelolaan data pribadi seluruh pengguna tunduk secara ketat pada Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022) dengan standar enkripsi AES-256 dan ISO/IEC 27001. Kami tidak pernah memperjualbelikan data kontak pengguna kepada pihak ketiga mana pun.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-resilio-black-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; 2026 resilio.id. Dikelola &amp; Dikembangkan oleh <strong className="text-resilio-forest-300 font-semibold">Nur Hidayat Surya Pamungkas</strong>. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-resilio-forest-400 transition-colors">Kebijakan Privasi</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-resilio-forest-400 transition-colors">Syarat &amp; Ketentuan</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-resilio-forest-400 transition-colors">Pusat Transparansi Etis</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
