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
    <section id="comparison" className="py-16 sm:py-24 bg-resilio-black border-b border-resilio-forest-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-resilio-forest-900/80 border border-resilio-forest-700/60 text-resilio-forest-300 text-xs font-bold uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-resilio-forest-400" />
            <span>Matriks Komparasi Transparan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Mengapa Ekosistem Resilio Berbeda?
          </h2>

          <p className="text-base text-resilio-charcoal-300 leading-relaxed font-normal">
            Bandingkan solusi ketahanan terpadu Resilio dengan jebakan pinjaman predator dan keterbatasan tabungan pasif konvensional.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-resilio-forest-800/80 shadow-elevated bg-resilio-black-surface">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr className="border-b border-resilio-forest-800/80 bg-resilio-black-card">
                <th className="p-5 text-xs font-black uppercase tracking-wider text-resilio-forest-300 w-1/4">
                  Parameter Perlindungan
                </th>
                <th className="p-5 text-sm font-black text-white bg-resilio-forest-900/90 border-x border-resilio-forest-700/80 w-1/3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-resilio-forest-300" />
                    <span>Ekosistem Resilio.id</span>
                  </div>
                  <span className="text-[10px] font-medium text-resilio-forest-300 block mt-0.5">
                    Ketahanan Finansial Berkelanjutan
                  </span>
                </th>
                <th className="p-5 text-xs font-black text-resilio-blood-200 bg-resilio-blood-950/80 border-r border-resilio-blood-900/80 w-1/5">
                  <div className="flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-resilio-blood-400" />
                    <span>Pinjol Ilegal &amp; Rentenir</span>
                  </div>
                  <span className="text-[10px] font-medium text-resilio-blood-300 block mt-0.5">
                    Skema Jebakan Predator
                  </span>
                </th>
                <th className="p-5 text-xs font-black text-resilio-charcoal-300 bg-resilio-black-surface w-1/5">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-resilio-charcoal-400" />
                    <span>Tabungan Biasa</span>
                  </div>
                  <span className="text-[10px] font-medium text-resilio-charcoal-400 block mt-0.5">
                    Tanpa Proteksi Guncangan
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-resilio-forest-900/80 text-xs sm:text-sm">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-resilio-forest-950/30 transition-colors">
                  <td className="p-5 font-bold text-white bg-resilio-black-surface">
                    {row.feature}
                  </td>
                  <td className="p-5 font-semibold text-resilio-forest-100 bg-resilio-forest-950/60 border-x border-resilio-forest-800">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-resilio-forest-400 shrink-0 mt-0.5" />
                      <span>{row.resilio}</span>
                    </div>
                  </td>
                  <td className="p-5 text-resilio-blood-200 bg-resilio-blood-950/40 border-r border-resilio-blood-900/80">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-resilio-blood-400 shrink-0 mt-0.5" />
                      <span>{row.predator}</span>
                    </div>
                  </td>
                  <td className="p-5 text-resilio-charcoal-300 bg-resilio-black-card">
                    <div className="flex items-start gap-2">
                      <Minus className="w-4 h-4 text-resilio-charcoal-500 shrink-0 mt-0.5" />
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
