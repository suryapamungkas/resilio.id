'use client';

import React from 'react';
import { Check, X, Minus, Shield, AlertTriangle, Building2 } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const comparisons = [
    {
      feature: 'Suku Bunga & Biaya Tersembunyi',
      resilio: 'Adil, transparan 0.8% - 1.2% flat/bulan, 0% biaya tersembunyi',
      predator: 'Mencekik 1% - 3% per HARI (300%+ per tahun) + potongan muka besar',
      conventional: 'Bunga tabungan 0.5% p.a., tergerus inflasi & biaya admin bulanan Rp 15rb',
    },
    {
      feature: 'Proteksi Risiko saat Sakit / Musibah',
      resilio: 'Santunan harian tunai aktif & otomatis grace period cicilan tanpa denda',
      predator: 'Tidak peduli, bunga terus beranak bahkan saat di rumah sakit',
      conventional: 'Tidak ada proteksi pendapatan, tabungan terkuras habis seketika',
    },
    {
      feature: 'Perlakuan & Privasi Data Pribadi',
      resilio: 'Enkripsi 256-bit, patuh UU PDP No. 27/2022, tanpa akses kontak/galeri',
      predator: 'Menyadap kontak HP, sebar foto manipulasi, teror ke seluruh rekan',
      conventional: 'Data aman di bank, namun tidak ada mitigasi sosial protektif',
    },
    {
      feature: 'Restrukturisasi saat Terjadi PHK',
      resilio: 'Penyesuaian cicilan lunak + santunan transisi nafkah + program upskilling',
      predator: 'Ancaman debt collector fisik ke rumah dan kantor',
      conventional: 'Penagihan standar perbankan / lelang jaminan sita',
    },
    {
      feature: 'Prinsip Gotong Royong Komunitas',
      resilio: 'Terintegrasi dana kas RT/RW & Koperasi transparan dengan escrow aman',
      predator: 'Individualistik predator murni yang menghancurkan relasi sosial warga',
      conventional: 'Rekening individu tanpa keterikatan sosial saling bantu',
    },
    {
      feature: 'Edukasi & Pendampingan Keuangan',
      resilio: 'Gratis konseling Early Warning System & panduan krisis 30 hari',
      predator: 'Mendorong jebakan gali lubang tutup lubang untuk memeras korban',
      conventional: 'Hanya fasilitas transaksi pasif tanpa pendampingan budgeting',
    },
  ];

  return (
    <section id="comparison" className="py-16 sm:py-24 bg-white border-b border-resilio-mint-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-resilio-emerald-800 text-white text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-resilio-cyanSoft-300" />
            <span>Matriks Komparasi Transparan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-resilio-emerald-800 tracking-tight">
            Mengapa Ekosistem Resilio Berbeda?
          </h2>

          <p className="text-base text-resilio-emerald-950/80 leading-relaxed font-normal">
            Bandingkan solusi ketahanan terpadu Resilio dengan jebakan pinjaman predator dan keterbatasan tabungan pasif konvensional.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-resilio-mint-200 shadow-elevated">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-resilio-mint-200 bg-resilio-mint-50">
                <th className="p-5 text-xs font-black uppercase tracking-wider text-resilio-emerald-800 w-1/4">
                  Parameter Perlindungan
                </th>
                <th className="p-5 text-sm font-black text-white bg-resilio-emerald-800 w-1/3 rounded-t-xl sm:rounded-none">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-resilio-cyanSoft-300" />
                    <span>Ekosistem Resilio.id</span>
                  </div>
                  <span className="text-[10px] font-medium text-resilio-mint-200 block mt-0.5">
                    Ketahanan Finansial Berkelanjutan
                  </span>
                </th>
                <th className="p-5 text-xs font-black text-rose-900 bg-rose-50/70 w-1/5">
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                    <span>Pinjol Ilegal &amp; Rentenir</span>
                  </div>
                  <span className="text-[10px] font-medium text-rose-700 block mt-0.5">
                    Skema Jebakan Predator
                  </span>
                </th>
                <th className="p-5 text-xs font-black text-resilio-slate-700 bg-resilio-slate-100/70 w-1/5">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-resilio-slate-500" />
                    <span>Tabungan Biasa</span>
                  </div>
                  <span className="text-[10px] font-medium text-resilio-slate-500 block mt-0.5">
                    Tanpa Proteksi Guncangan
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-resilio-mint-200 text-xs sm:text-sm">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-resilio-mint-50/40 transition-colors">
                  <td className="p-5 font-bold text-resilio-emerald-900 bg-white">
                    {row.feature}
                  </td>
                  <td className="p-5 font-semibold text-resilio-emerald-950 bg-resilio-mint-100/50 border-x border-resilio-mint-200">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-resilio-cyanSoft-600 shrink-0 mt-0.5" />
                      <span>{row.resilio}</span>
                    </div>
                  </td>
                  <td className="p-5 text-rose-900 bg-rose-50/20">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{row.predator}</span>
                    </div>
                  </td>
                  <td className="p-5 text-resilio-slate-600 bg-resilio-slate-50/40">
                    <div className="flex items-start gap-2">
                      <Minus className="w-4 h-4 text-resilio-slate-400 shrink-0 mt-0.5" />
                      <span>{row.conventional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
