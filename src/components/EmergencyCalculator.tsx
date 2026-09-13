'use client';

import React, { useState } from 'react';
import { Calculator, ShieldCheck, Coins, Check } from 'lucide-react';
import { cn, formatIDR } from '@/lib/utils';

export const EmergencyCalculator: React.FC = () => {
  const [monthlySavings, setMonthlySavings] = useState<number>(300000);
  const [targetMonthsBuffer, setTargetMonthsBuffer] = useState<number>(6);
  const [estimatedMonthlyExpense, setEstimatedMonthlyExpense] = useState<number>(3500000);

  const dailyEquivalent = Math.round(monthlySavings / 30);
  const annualYieldRate = 0.055;

  const calculateAccumulation = (months: number) => {
    let total = 0;
    const monthlyRate = annualYieldRate / 12;
    for (let i = 0; i < months; i++) {
      total = (total + monthlySavings) * (1 + monthlyRate);
    }
    return Math.round(total);
  };

  const accum6m = calculateAccumulation(6);
  const accum12m = calculateAccumulation(12);
  const accum24m = calculateAccumulation(24);

  const targetBufferGoal = estimatedMonthlyExpense * targetMonthsBuffer;
  const monthsToReachGoal = Math.ceil(targetBufferGoal / (monthlySavings * 1.025));

  const hospitalCashDaily = monthlySavings >= 500000 ? 250000 : 150000;
  const layoffTransitionCash = monthlySavings >= 500000 ? 3000000 : 1500000;
  const accidentAssistanceCash = monthlySavings >= 500000 ? 5000000 : 2500000;


  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white border-b border-resilio-mint-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-resilio-mint-100 border border-resilio-mint-300 text-resilio-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-resilio-cyanSoft-600" />
            <span>Simulasi Mikro Cerdas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-resilio-emerald-800 tracking-tight">
            Kalkulator Alokasi Dana Darurat &amp; Proteksi Mikro
          </h2>

          <p className="text-base text-resilio-emerald-950/80 leading-relaxed font-normal">
            Cukup sisihkan mulai Rp 5.000 hingga Rp 10.000 per hari. Lihat bagaimana akumulasi mikro membangun benteng likuiditas sekaligus mengaktifkan proteksi guncangan ekonomi secara otomatis.
          </p>
        </div>

        {/* 2-Column Interactive Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 bg-resilio-mint-50/50 rounded-3xl p-6 sm:p-8 border border-resilio-mint-200 shadow-subtle space-y-8">
            
            {/* Control 1: Monthly / Daily Savings Slider */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label htmlFor="savings-slider" className="text-sm font-bold text-resilio-emerald-900 block">
                    Kemampuan Menyisihkan Tabungan
                  </label>
                  <span className="text-xs text-resilio-emerald-700">
                    Setara dengan <strong className="text-resilio-cyanSoft-600 font-bold">{formatIDR(dailyEquivalent)} / hari</strong>
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-resilio-emerald-800">
                    {formatIDR(monthlySavings)}
                  </span>
                  <span className="text-xs text-resilio-emerald-700 block font-medium">/ bulan</span>
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
                className="w-full h-2.5 bg-resilio-mint-200 rounded-lg appearance-none cursor-pointer accent-resilio-cyanSoft-500"
                aria-label="Kemampuan menyisihkan tabungan per bulan"
              />

              <div className="flex justify-between text-[11px] font-bold text-resilio-emerald-700/70">
                <span>Rp 150.000 (Rp 5rb/hari)</span>
                <span>Rp 1.000.000</span>
                <span>Rp 2.000.000</span>
              </div>
            </div>

            {/* Control 2: Monthly Living Expenses */}
            <div className="space-y-2 pt-4 border-t border-resilio-mint-200">
              <div className="flex items-center justify-between">
                <label htmlFor="expense-input" className="text-sm font-bold text-resilio-emerald-900">
                  Estimasi Biaya Hidup Pokok Bulanan (Rp)
                </label>
                <span className="text-sm font-black text-resilio-emerald-800">
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
                className="w-full h-2.5 bg-resilio-mint-200 rounded-lg appearance-none cursor-pointer accent-resilio-emerald-800"
                aria-label="Estimasi biaya hidup bulanan"
              />
              <p className="text-xs text-resilio-emerald-700">
                Kebutuhan pokok bertahan hidup (makan, kontrakan/listrik, transport primer).
              </p>
            </div>

            {/* Control 3: Target Buffer (3, 6, or 12 months) */}
            <div className="space-y-3 pt-4 border-t border-resilio-mint-200">
              <label className="text-sm font-bold text-resilio-emerald-900 block">
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
                        ? 'bg-resilio-emerald-800 text-white border-resilio-emerald-800 shadow-sm'
                        : 'bg-white text-resilio-emerald-900 border-resilio-mint-300 hover:border-resilio-mint-400'
                    }`}
                  >
                    <span>{m} Bulan Buffer</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Goal Target Summary Banner */}
            <div className="p-4 rounded-2xl bg-white border border-resilio-mint-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-resilio-mint-100 flex items-center justify-center text-resilio-emerald-800">
                  <Coins className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-resilio-emerald-700 font-medium block">Target Nominal Total Buffer</span>
                  <span className="text-lg font-black text-resilio-emerald-900">{formatIDR(targetBufferGoal)}</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-resilio-emerald-700 font-medium block">Estimasi Tercapai</span>
                <span className="text-sm font-bold text-resilio-cyanSoft-600">~{monthsToReachGoal} Bulan</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Output & Micro Protection Bundling */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Projection Cards with Emerald Green (#0F5132) */}
            <div className="bg-resilio-emerald-800 text-white rounded-3xl p-6 sm:p-8 shadow-elevated border border-resilio-emerald-700">
              <div className="flex items-center justify-between pb-4 border-b border-resilio-emerald-700 mb-6">
                <div>
                  <span className="text-xs text-resilio-mint-200 font-bold uppercase tracking-wider block">
                    Proyeksi Akumulasi Saldo Likuid
                  </span>
                  <h3 className="text-xl font-black text-white mt-0.5">
                    Dana Darurat Terproteksi
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-resilio-emerald-900 text-resilio-mint-200 border border-resilio-mint-300/30 font-semibold">
                  Yield ~5.5% p.a.
                </span>
              </div>

              {/* 3 Time Horizons */}
              <div className="grid grid-cols-3 gap-3 text-center mb-6">
                <div className="p-3.5 rounded-2xl bg-resilio-emerald-900/70 border border-resilio-emerald-700">
                  <span className="text-[11px] text-resilio-mint-200 block mb-1">6 Bulan</span>
                  <p className="text-base sm:text-lg font-black text-white">
                    {formatIDR(accum6m)}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-resilio-emerald-900/70 border border-resilio-emerald-700">
                  <span className="text-[11px] text-resilio-mint-200 block mb-1">12 Bulan</span>
                  <p className="text-base sm:text-lg font-black text-resilio-cyanSoft-300">
                    {formatIDR(accum12m)}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-resilio-emerald-900/70 border border-resilio-emerald-700">
                  <span className="text-[11px] text-resilio-mint-200 block mb-1">24 Bulan</span>
                  <p className="text-base sm:text-lg font-black text-resilio-mint-100">
                    {formatIDR(accum24m)}
                  </p>
                </div>
              </div>

              {/* Visual Progress Bar to Target */}
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span className="text-resilio-mint-100">Progres Menuju Target 12 Bulan</span>
                  <span className="text-resilio-cyanSoft-300 font-bold">
                    {Math.min(100, Math.round((accum12m / targetBufferGoal) * 100))}% dari Target
                  </span>
                </div>
                <div className="w-full h-3 bg-resilio-emerald-950 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-resilio-cyanSoft-400 to-resilio-mint-300 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (accum12m / targetBufferGoal) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Bundled Micro Protection Card */}
            <div className="bg-resilio-mint-50/70 rounded-3xl p-6 sm:p-8 border border-resilio-mint-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-resilio-mint-200 flex items-center justify-center text-resilio-emerald-800">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-resilio-emerald-900">
                    Benefit Proteksi Mikro yang Otomatis Aktif
                  </h4>
                  <p className="text-xs text-resilio-emerald-700">
                    Termasuk otomatis dalam skema tabungan mikro Resilio tanpa potongan saldo pokok
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white border border-resilio-mint-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-resilio-cyanSoft-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-resilio-emerald-900">Santunan Rawat Inap Harian</p>
                      <p className="text-[11px] text-resilio-emerald-700">Pengganti nafkah dapur saat opname RS</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-resilio-emerald-900">{formatIDR(hospitalCashDaily)} / hari</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-resilio-mint-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-resilio-cyanSoft-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-resilio-emerald-900">Santunan Transisi PHK / Kehilangan Kerja</p>
                      <p className="text-[11px] text-resilio-emerald-700">Bantuan tunai saat pemutusan kontrak mendadak</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-resilio-emerald-900">{formatIDR(layoffTransitionCash)}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-resilio-mint-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-resilio-cyanSoft-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-resilio-emerald-900">Bantuan Kecelakaan &amp; Duka Keluarga</p>
                      <p className="text-[11px] text-resilio-emerald-700">Bantuan santunan langsung tanpa birokrasi rumit</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-resilio-emerald-900">{formatIDR(accidentAssistanceCash)}</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-resilio-mint-200 flex items-center justify-between text-xs">
                <span className="text-resilio-emerald-700 font-medium">Mulai alokasi mikro sekarang</span>
                <a
                  href="#health-check"
                  className="font-bold text-resilio-cyanSoft-600 hover:text-resilio-emerald-900 transition-colors"
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
