'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, ShieldCheck, Coins, Check } from 'lucide-react';
import { formatIDR } from '@/lib/utils';
import { SectionHeader } from '@/components/SectionHeader';

export const EmergencyCalculator: React.FC = () => {
  const [monthlySavings, setMonthlySavings] = useState<number>(300000);
  const [targetMonthsBuffer, setTargetMonthsBuffer] = useState<number>(6);
  const [estimatedMonthlyExpense, setEstimatedMonthlyExpense] = useState<number>(3500000);

  const dailyEquivalent = Math.round(monthlySavings / 30);
  const annualYieldRate = 0.055;

  const { accum6m, accum12m, accum24m } = useMemo(() => {
    const calc = (months: number) => {
      let total = 0;
      const monthlyRate = annualYieldRate / 12;
      for (let i = 0; i < months; i++) {
        total = (total + monthlySavings) * (1 + monthlyRate);
      }
      return Math.round(total);
    };
    return {
      accum6m: calc(6),
      accum12m: calc(12),
      accum24m: calc(24),
    };
  }, [monthlySavings, annualYieldRate]);

  const targetBufferGoal = estimatedMonthlyExpense * targetMonthsBuffer;
  const monthsToReachGoal = Math.ceil(targetBufferGoal / (Math.max(monthlySavings, 1) * 1.025));

  const hospitalCashDaily = monthlySavings >= 500000 ? 250000 : 150000;
  const layoffTransitionCash = monthlySavings >= 500000 ? 3000000 : 1500000;
  const accidentAssistanceCash = monthlySavings >= 500000 ? 5000000 : 2500000;

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-resilio-black border-b border-resilio-forest-800/60 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badgeIcon={Calculator}
          badgeText="Simulasi Mikro Cerdas"
          title="Kalkulator Alokasi Dana Darurat & Proteksi Mikro"
          description="Cukup sisihkan mulai Rp 5.000 hingga Rp 10.000 per hari. Lihat bagaimana akumulasi mikro membangun benteng likuiditas sekaligus mengaktifkan proteksi guncangan ekonomi secara otomatis."
        />

        {/* 2-Column Interactive Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 bg-resilio-black-surface rounded-3xl p-6 sm:p-8 border border-resilio-forest-800/80 shadow-card space-y-8">
            
            {/* Control 1: Monthly / Daily Savings Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="savings-slider" className="text-sm font-bold text-white block">
                    Kemampuan Menyisihkan Tabungan
                  </label>
                  <span className="text-xs text-resilio-charcoal-400">
                    Setara dengan <strong className="text-resilio-forest-300 font-bold">{formatIDR(dailyEquivalent)} / hari</strong>
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-resilio-forest-300">
                    {formatIDR(monthlySavings)}
                  </span>
                  <span className="text-xs text-resilio-charcoal-400 block font-medium">/ bulan</span>
                </div>
              </div>

              <input
                id="savings-slider"
                type="range"
                min={150000}
                max={2000000}
                step={50000}
                value={monthlySavings}
                onChange={(e) => setMonthlySavings(Number(e.target.value))}
                className="w-full h-2.5 bg-resilio-forest-950 rounded-lg appearance-none cursor-pointer accent-resilio-forest-400 border border-resilio-forest-800"
                aria-label="Kemampuan menyisihkan tabungan per bulan"
              />

              <div className="flex justify-between text-[11px] font-bold text-resilio-charcoal-400">
                <span>Rp 150.000 (Rp 5rb/hari)</span>
                <span>Rp 1.000.000</span>
                <span>Rp 2.000.000</span>
              </div>
            </div>

            {/* Control 2: Monthly Living Expenses */}
            <div className="space-y-2 pt-4 border-t border-resilio-forest-900/80">
              <div className="flex items-center justify-between">
                <label htmlFor="expense-input" className="text-sm font-bold text-white">
                  Estimasi Biaya Hidup Pokok Bulanan (Rp)
                </label>
                <span className="text-sm font-black text-resilio-forest-300">
                  {formatIDR(estimatedMonthlyExpense)}
                </span>
              </div>
              <input
                id="expense-input"
                type="range"
                min={2000000}
                max={10000000}
                step={250000}
                value={estimatedMonthlyExpense}
                onChange={(e) => setEstimatedMonthlyExpense(Number(e.target.value))}
                className="w-full h-2.5 bg-resilio-forest-950 rounded-lg appearance-none cursor-pointer accent-resilio-forest-400 border border-resilio-forest-800"
                aria-label="Estimasi biaya hidup bulanan"
              />
              <p className="text-xs text-resilio-charcoal-400">
                Kebutuhan pokok bertahan hidup (makan, kontrakan/listrik, transport primer).
              </p>
            </div>

            {/* Control 3: Target Buffer (3, 6, or 12 months) */}
            <div className="space-y-3 pt-4 border-t border-resilio-forest-900/80">
              <label className="text-sm font-bold text-white block">
                Target Daya Tahan Buffer Finansial
              </label>
              
              <div className="grid grid-cols-3 gap-3">
                {[3, 6, 12].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setTargetMonthsBuffer(m)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      targetMonthsBuffer === m
                        ? 'bg-resilio-forest-700 text-white border-resilio-forest-500/60 shadow-glowForest'
                        : 'bg-resilio-black-card text-resilio-charcoal-300 border-resilio-forest-900 hover:border-resilio-forest-700'
                    }`}
                  >
                    <span>{m} Bulan Buffer</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Goal Target Summary Banner */}
            <div className="p-4 rounded-2xl bg-resilio-black-card border border-resilio-forest-800/80 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-resilio-forest-900/80 border border-resilio-forest-700/60 flex items-center justify-center text-resilio-forest-300">
                  <Coins className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-resilio-charcoal-400 font-medium block">Target Nominal Total Buffer</span>
                  <span className="text-lg font-black text-white">{formatIDR(targetBufferGoal)}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-resilio-charcoal-400 font-medium block">Estimasi Tercapai</span>
                <span className="text-sm font-bold text-resilio-forest-400">~{monthsToReachGoal} Bulan</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Output & Micro Protection Bundling */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Projection Cards with Dark Forest Green */}
            <div className="bg-resilio-black-surface text-white rounded-3xl p-6 sm:p-8 shadow-elevated border border-resilio-forest-700/80">
              <div className="flex items-center justify-between pb-4 border-b border-resilio-forest-800/80 mb-6">
                <div>
                  <span className="text-xs text-resilio-forest-300 font-bold uppercase tracking-wider block">
                    Proyeksi Akumulasi Saldo Likuid
                  </span>
                  <h3 className="text-xl font-black text-white mt-0.5">
                    Dana Darurat Terproteksi
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-resilio-forest-900 text-resilio-forest-200 border border-resilio-forest-700/60 font-semibold">
                  Yield ~5.5% p.a.
                </span>
              </div>

              {/* 3 Time Horizons */}
              <div className="grid grid-cols-3 gap-3 text-center mb-6">
                <div className="p-3.5 rounded-2xl bg-resilio-black-card border border-resilio-forest-800/80">
                  <span className="text-[11px] text-resilio-charcoal-400 block mb-1">6 Bulan</span>
                  <p className="text-base sm:text-lg font-black text-white">
                    {formatIDR(accum6m)}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-resilio-black-card border border-resilio-forest-700">
                  <span className="text-[11px] text-resilio-charcoal-400 block mb-1">12 Bulan</span>
                  <p className="text-base sm:text-lg font-black text-resilio-forest-300">
                    {formatIDR(accum12m)}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-resilio-black-card border border-resilio-forest-800/80">
                  <span className="text-[11px] text-resilio-charcoal-400 block mb-1">24 Bulan</span>
                  <p className="text-base sm:text-lg font-black text-resilio-forest-200">
                    {formatIDR(accum24m)}
                  </p>
                </div>
              </div>

              {/* Visual Progress Bar to Target */}
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className="text-resilio-charcoal-300">Progres Menuju Target 12 Bulan</span>
                  <span className="text-resilio-forest-300 font-bold">
                    {Math.min(100, Math.round((accum12m / targetBufferGoal) * 100))}% dari Target
                  </span>
                </div>
                <div className="w-full h-3 bg-resilio-forest-950 rounded-full overflow-hidden p-0.5 border border-resilio-forest-900">
                  <div
                    className="h-full bg-gradient-to-r from-resilio-forest-600 to-resilio-forest-400 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (accum12m / targetBufferGoal) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Bundled Micro Protection Card */}
            <div className="bg-resilio-black-surface rounded-3xl p-6 sm:p-8 border border-resilio-forest-800/80 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-resilio-forest-900/80 border border-resilio-forest-700/60 flex items-center justify-center text-resilio-forest-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Benefit Proteksi Mikro yang Otomatis Aktif
                  </h4>
                  <p className="text-xs text-resilio-charcoal-400">
                    Termasuk otomatis dalam skema tabungan mikro Resilio tanpa potongan saldo pokok
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-resilio-black-card border border-resilio-forest-900/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-resilio-forest-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Santunan Rawat Inap Harian</p>
                      <p className="text-[11px] text-resilio-charcoal-400">Pengganti nafkah dapur saat opname RS</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-resilio-forest-300">{formatIDR(hospitalCashDaily)} / hari</span>
                </div>

                <div className="p-3.5 rounded-xl bg-resilio-black-card border border-resilio-forest-900/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-resilio-forest-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Santunan Transisi PHK / Kehilangan Kerja</p>
                      <p className="text-[11px] text-resilio-charcoal-400">Bantuan tunai saat pemutusan kontrak mendadak</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-resilio-blood-300">{formatIDR(layoffTransitionCash)}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-resilio-black-card border border-resilio-forest-900/80 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-resilio-forest-400 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-white">Bantuan Kecelakaan &amp; Duka Keluarga</p>
                      <p className="text-[11px] text-resilio-charcoal-400">Bantuan santunan langsung tanpa birokrasi rumit</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-resilio-blood-300">{formatIDR(accidentAssistanceCash)}</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-resilio-forest-900/80 flex items-center justify-between text-xs">
                <span className="text-resilio-charcoal-400 font-medium">Mulai alokasi mikro sekarang</span>
                <a
                  href="#health-check"
                  className="font-bold text-resilio-forest-300 hover:text-white transition-colors"
                >
                  Lakukan Health Check Dulu &rarr;
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
