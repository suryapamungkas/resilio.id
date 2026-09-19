'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FinancialHealthResult } from '@/types';
import { calculateFinancialHealth } from '@/lib/financialHealth';
import { SectionHeader } from '@/components/SectionHeader';
import { 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  Printer, 
  RotateCcw 
} from 'lucide-react';

const formSchema = z.object({
  monthlyIncome: z.number({
    required_error: 'Pendapatan bulanan wajib diisi',
    invalid_type_error: 'Masukkan nominal angka yang valid',
  }).min(1000000, 'Minimal pendapatan Rp 1.000.000'),
  incomeStability: z.enum(['stable_salary', 'variable_freelance', 'micro_business', 'gig_worker'], {
    required_error: 'Pilih jenis stabilitas pendapatan Anda',
  }),
  monthlyMandatoryExpense: z.number({
    required_error: 'Pengeluaran wajib bulanan wajib diisi',
    invalid_type_error: 'Masukkan nominal angka yang valid',
  }).min(500000, 'Minimal pengeluaran Rp 500.000'),
  currentEmergencySavings: z.number({
    required_error: 'Total tabungan darurat wajib diisi (isi 0 jika belum ada)',
    invalid_type_error: 'Masukkan nominal angka yang valid',
  }).min(0, 'Nominal tidak boleh minus'),
  employmentStatus: z.enum(['permanent_employee', 'contract_worker', 'freelancer_gig', 'small_business_owner', 'informal'], {
    required_error: 'Pilih status pekerjaan Anda',
  }),
  dependentsCount: z.number({
    required_error: 'Jumlah tanggungan wajib diisi',
    invalid_type_error: 'Masukkan angka tanggungan (0 jika mandiri)',
  }).min(0, 'Minimal 0 tanggungan').max(15, 'Maksimal 15 tanggungan'),
  totalActiveDebts: z.number({
    required_error: 'Total cicilan/hutang bulanan wajib diisi (isi 0 jika tidak ada)',
    invalid_type_error: 'Masukkan nominal angka yang valid',
  }).min(0, 'Nominal tidak boleh minus'),
  biggestRiskConcern: z.enum(['layoff_loss_of_income', 'medical_emergency', 'inflation_living_costs', 'debt_predator_trap'], {
    required_error: 'Pilih faktor kekhawatiran terbesar Anda',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export const HealthCheckForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [assessmentResult, setAssessmentResult] = useState<FinancialHealthResult | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      monthlyIncome: 6500000,
      incomeStability: 'stable_salary',
      monthlyMandatoryExpense: 4200000,
      currentEmergencySavings: 5000000,
      employmentStatus: 'contract_worker',
      dependentsCount: 2,
      totalActiveDebts: 1200000,
      biggestRiskConcern: 'layoff_loss_of_income',
    },
  });

  const handleNextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    if (currentStep === 1) fieldsToValidate = ['monthlyIncome', 'incomeStability'];
    if (currentStep === 2) fieldsToValidate = ['monthlyMandatoryExpense', 'currentEmergencySavings'];
    if (currentStep === 3) fieldsToValidate = ['employmentStatus', 'dependentsCount', 'totalActiveDebts'];
    if (currentStep === 4) fieldsToValidate = ['biggestRiskConcern'];

    const stepValid = await trigger(fieldsToValidate);
    if (stepValid) {
      if (currentStep < 4) {
        setCurrentStep((prev) => prev + 1);
      } else {
        const values = getValues();
        const res = calculateFinancialHealth(values);
        setAssessmentResult(res);
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    reset();
    setCurrentStep(1);
    setAssessmentResult(null);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <section id="health-check" className="py-16 sm:py-24 bg-resilio-black border-b border-resilio-black-border relative overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-resilio-forest-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-resilio-blood-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          badgeIcon={ShieldAlert}
          badgeText="Diagnosa Mandiri Risk-Free"
          title="Early Warning System: Cek Kesehatan Finansial"
          description="Ketahui ketahanan finansial keluarga Anda saat shock ekonomi melanda melalui 4 langkah mudah berbasis algoritma rasio likuiditas riil."
          className="mb-12"
        />

        {/* Card Container */}
        <div className="bg-resilio-black-surface rounded-3xl shadow-2xl border border-resilio-black-border overflow-hidden">
          
          {!assessmentResult ? (
            <div>
              {/* Accessible Step Progress Tracker */}
              <nav aria-label="Progress Tahapan Form" className="bg-resilio-black-card border-b border-resilio-black-border px-6 py-4">
                <ol className="grid grid-cols-4 gap-2 text-center text-xs">
                  {[
                    { step: 1, title: 'Pendapatan' },
                    { step: 2, title: 'Pengeluaran & Kas' },
                    { step: 3, title: 'Status & Tanggungan' },
                    { step: 4, title: 'Faktor Risiko' },
                  ].map((s) => {
                    const isActive = currentStep === s.step;
                    const isCompleted = currentStep > s.step;

                    return (
                      <li
                        key={s.step}
                        aria-current={isActive ? 'step' : undefined}
                        className={`flex flex-col items-center gap-1 font-semibold transition-colors ${
                          isActive
                            ? 'text-resilio-forest-300 font-bold'
                            : isCompleted
                            ? 'text-resilio-forest-400'
                            : 'text-slate-600'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                            isActive
                              ? 'bg-resilio-forest-600 text-white shadow-glowForest ring-2 ring-resilio-forest-500'
                              : isCompleted
                              ? 'bg-resilio-forest-800 text-resilio-forest-200 border border-resilio-forest-600'
                              : 'bg-resilio-black-elevated text-slate-500 border border-resilio-black-border'
                          }`}
                        >
                          {isCompleted ? '✓' : s.step}
                        </div>
                        <span className="hidden sm:inline">{s.title}</span>
                      </li>
                    );
                  })}
                </ol>
              </nav>

              {/* Form Content Area */}
              <form onSubmit={handleSubmit(handleNextStep)} className="p-6 sm:p-10 space-y-6">
                
                {/* STEP 1: Pendapatan & Stabilitas */}
                {currentStep === 1 && (
                  <fieldset className="space-y-6">
                    <legend className="text-lg font-bold text-white mb-2">
                      Langkah 1: Pendapatan Bulanan &amp; Sumber Penghasilan
                    </legend>
                    <p className="text-xs text-slate-400 -mt-2">
                      Masukkan estimasi pendapatan bersih rata-rata per bulan seluruh pencari nafkah di keluarga Anda.
                    </p>

                    <div className="space-y-2">
                      <label htmlFor="monthlyIncome" className="block text-sm font-bold text-slate-200">
                        Total Pendapatan Bulanan Bersih (Rp) <span className="text-resilio-blood-400">*</span>
                      </label>
                      <input
                        id="monthlyIncome"
                        type="number"
                        inputMode="numeric"
                        {...register('monthlyIncome', { valueAsNumber: true })}
                        placeholder="Contoh: 6500000"
                        className={`w-full px-4 py-3 rounded-xl border text-base font-semibold text-white bg-resilio-black-card transition-all focus:outline-none ${
                          errors.monthlyIncome
                            ? 'border-resilio-blood-500 bg-resilio-blood-950/30 focus:ring-1 focus:ring-resilio-blood-500'
                            : 'border-resilio-black-border focus:border-resilio-forest-500 focus:ring-1 focus:ring-resilio-forest-500'
                        }`}
                        aria-describedby={errors.monthlyIncome ? 'monthlyIncome-error' : undefined}
                      />
                      {errors.monthlyIncome && (
                        <p id="monthlyIncome-error" className="text-xs font-semibold text-resilio-blood-400 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          {errors.monthlyIncome.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="incomeStability" className="block text-sm font-bold text-slate-200">
                        Pola Stabilitas Arus Pendapatan <span className="text-resilio-blood-400">*</span>
                      </label>
                      <select
                        id="incomeStability"
                        {...register('incomeStability')}
                        className="w-full px-4 py-3 rounded-xl border border-resilio-black-border bg-resilio-black-card text-sm font-medium text-white focus:outline-none focus:border-resilio-forest-500 focus:ring-1 focus:ring-resilio-forest-500"
                      >
                        <option value="stable_salary">Gaji Tetap Bulanan (PNS / Karyawan Tetap Swasta)</option>
                        <option value="variable_freelance">Pekerja Lepas / Komisi (Penghasilan Naik Turun)</option>
                        <option value="micro_business">Usaha Mikro / Toko / Dagang Harian</option>
                        <option value="gig_worker">Mitra Ojek Online / Kurir Logistik</option>
                      </select>
                    </div>
                  </fieldset>
                )}

                {/* STEP 2: Pengeluaran Wajib & Dana Darurat */}
                {currentStep === 2 && (
                  <fieldset className="space-y-6">
                    <legend className="text-lg font-bold text-white mb-2">
                      Langkah 2: Pengeluaran Wajib &amp; Cadangan Kas Saat Ini
                    </legend>
                    <p className="text-xs text-slate-400 -mt-2">
                      Pengeluaran wajib adalah biaya bertahan hidup dasar: makanan, kontrakan/listrik, susu anak, obat rutin.
                    </p>

                    <div className="space-y-2">
                      <label htmlFor="monthlyMandatoryExpense" className="block text-sm font-bold text-slate-200">
                        Pengeluaran Wajib Bulanan (Rp) <span className="text-resilio-blood-400">*</span>
                      </label>
                      <input
                        id="monthlyMandatoryExpense"
                        type="number"
                        inputMode="numeric"
                        {...register('monthlyMandatoryExpense', { valueAsNumber: true })}
                        placeholder="Contoh: 4200000"
                        className={`w-full px-4 py-3 rounded-xl border text-base font-semibold text-white bg-resilio-black-card transition-all focus:outline-none ${
                          errors.monthlyMandatoryExpense
                            ? 'border-resilio-blood-500 bg-resilio-blood-950/30'
                            : 'border-resilio-black-border focus:border-resilio-forest-500 focus:ring-1 focus:ring-resilio-forest-500'
                        }`}
                        aria-describedby={errors.monthlyMandatoryExpense ? 'expense-error' : undefined}
                      />
                      {errors.monthlyMandatoryExpense && (
                        <p id="expense-error" className="text-xs font-semibold text-resilio-blood-400 flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          {errors.monthlyMandatoryExpense.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="currentEmergencySavings" className="block text-sm font-bold text-slate-200">
                        Total Tabungan / Dana Darurat Likuid Saat Ini (Rp) <span className="text-resilio-blood-400">*</span>
                      </label>
                      <input
                        id="currentEmergencySavings"
                        type="number"
                        inputMode="numeric"
                        {...register('currentEmergencySavings', { valueAsNumber: true })}
                        placeholder="Contoh: 5000000 (Tulis 0 jika belum ada)"
                        className={`w-full px-4 py-3 rounded-xl border text-base font-semibold text-white bg-resilio-black-card transition-all focus:outline-none ${
                          errors.currentEmergencySavings
                            ? 'border-resilio-blood-500 bg-resilio-blood-950/30'
                            : 'border-resilio-black-border focus:border-resilio-forest-500 focus:ring-1 focus:ring-resilio-forest-500'
                        }`}
                      />
                      <p className="text-xs text-slate-400">
                        Hitung uang tunai di rekening bank, dompet digital, atau emas likuid yang bisa dicairkan &lt; 24 jam.
                      </p>
                    </div>
                  </fieldset>
                )}

                {/* STEP 3: Status Pekerjaan, Tanggungan & Hutang */}
                {currentStep === 3 && (
                  <fieldset className="space-y-6">
                    <legend className="text-lg font-bold text-white mb-2">
                      Langkah 3: Status Pekerjaan, Tanggungan &amp; Cicilan Berjalan
                    </legend>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="employmentStatus" className="block text-sm font-bold text-slate-200">
                          Status Kontrak Pekerjaan <span className="text-resilio-blood-400">*</span>
                        </label>
                        <select
                          id="employmentStatus"
                          {...register('employmentStatus')}
                          className="w-full px-4 py-3 rounded-xl border border-resilio-black-border bg-resilio-black-card text-sm font-medium text-white focus:outline-none focus:border-resilio-forest-500"
                        >
                          <option value="permanent_employee">Karyawan Tetap (PKWTT)</option>
                          <option value="contract_worker">Karyawan Kontrak (PKWT / Outsourcing)</option>
                          <option value="freelancer_gig">Pekerja Lepas / Harian Lepas</option>
                          <option value="small_business_owner">Pemilik Usaha Mikro / UMKM</option>
                          <option value="informal">Sektor Informal / Pedagang Keliling</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="dependentsCount" className="block text-sm font-bold text-slate-200">
                          Jumlah Jiwa Tanggungan (Anak / Orang Tua) <span className="text-resilio-blood-400">*</span>
                        </label>
                        <input
                          id="dependentsCount"
                          type="number"
                          inputMode="numeric"
                          {...register('dependentsCount', { valueAsNumber: true })}
                          placeholder="Contoh: 2"
                          className="w-full px-4 py-3 rounded-xl border border-resilio-black-border bg-resilio-black-card text-sm font-semibold text-white focus:outline-none focus:border-resilio-forest-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="totalActiveDebts" className="block text-sm font-bold text-slate-200">
                        Total Cicilan / Angsuran Utang Per Bulan (Rp) <span className="text-resilio-blood-400">*</span>
                      </label>
                      <input
                        id="totalActiveDebts"
                        type="number"
                        inputMode="numeric"
                        {...register('totalActiveDebts', { valueAsNumber: true })}
                        placeholder="Contoh: 1200000 (Tulis 0 jika bebas utang)"
                        className="w-full px-4 py-3 rounded-xl border border-resilio-black-border bg-resilio-black-card text-base font-semibold text-white focus:outline-none focus:border-resilio-forest-500"
                      />
                      <p className="text-xs text-slate-400">
                        Termasuk cicilan motor, KPR, paylater, pinjol resmi/koperasi, atau pinjaman kerabat.
                      </p>
                    </div>
                  </fieldset>
                )}

                {/* STEP 4: Faktor Risiko Terbesar */}
                {currentStep === 4 && (
                  <fieldset className="space-y-6">
                    <legend className="text-lg font-bold text-white mb-2">
                      Langkah 4: Faktor Risiko &amp; Ketakutan Terbesar Saat Ini
                    </legend>
                    <p className="text-xs text-slate-400 -mt-2">
                      Pilih skenario ancaman ekonomi yang paling berpotensi mengguncang stabilitas rumah tangga Anda.
                    </p>

                    <div className="space-y-3">
                      {[
                        {
                          val: 'layoff_loss_of_income',
                          title: 'Kehilangan Pekerjaan / PHK / Proyek Sepi',
                          desc: 'Penghasilan utama berhenti mendadak sementara biaya hidup terus berjalan.',
                        },
                        {
                          val: 'medical_emergency',
                          title: 'Sakit Keras / Rawat Inap Tulang Punggung Keluarga',
                          desc: 'Kehilangan nafkah harian saat opname dan biaya pendukung non-BPJS.',
                        },
                        {
                          val: 'inflation_living_costs',
                          title: 'Lonjakan Harga Kebutuhan Pokok & Sembako',
                          desc: 'Penghasilan stagnan sementara biaya kontrakan, sekolah, dan pangan melonjak.',
                        },
                        {
                          val: 'debt_predator_trap',
                          title: 'Jeratan Cicilan / Bunga Pinjaman yang Membengkak',
                          desc: 'Terjebak gali lubang tutup lubang untuk melunasi angsuran sebelumnya.',
                        },
                      ].map((item) => (
                        <label
                          key={item.val}
                          className="flex items-start gap-3 p-4 rounded-2xl border border-resilio-black-border bg-resilio-black-card hover:border-resilio-forest-600 hover:bg-resilio-black-elevated cursor-pointer transition-all"
                        >
                          <input
                            type="radio"
                            value={item.val}
                            {...register('biggestRiskConcern')}
                            className="mt-1 w-4 h-4 text-resilio-forest-500 focus:ring-resilio-forest-500 bg-resilio-black border-resilio-black-border"
                          />
                          <div>
                            <span className="text-sm font-bold text-white block">
                              {item.title}
                            </span>
                            <span className="text-xs text-slate-400">
                              {item.desc}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                )}

                {/* Navigation Buttons */}
                <div className="pt-6 border-t border-resilio-black-border flex items-center justify-between gap-4">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-slate-300 bg-resilio-black-card hover:bg-resilio-black-elevated border border-resilio-black-border transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Kembali</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-resilio-forest-700 to-resilio-forest-600 hover:from-resilio-forest-600 hover:to-resilio-forest-500 shadow-glowForest transition-all active:scale-[0.98]"
                  >
                    <span>{currentStep === 4 ? 'Analisis & Terbitkan Hasil Skor' : 'Lanjut ke Tahap Berikutnya'}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>

              </form>
            </div>
          ) : (
            /* Output Engine: Comprehensive Assessment Report */
            <div className="p-6 sm:p-10 space-y-8 print:p-0">
              
              {/* Report Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-resilio-black-border gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-resilio-forest-950 text-resilio-forest-300 border border-resilio-forest-800">
                      Hasil Diagnosa Resmi
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      ID: {assessmentResult.assessmentId}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    Laporan Indeks Ketahanan Finansial Keluarga
                  </h3>
                </div>

                <div className="flex items-center gap-2 print:hidden">
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-resilio-black-card hover:bg-resilio-black-elevated text-slate-300 border border-resilio-black-border transition-colors"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Cetak / Simpan PDF</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-resilio-black-card hover:bg-resilio-black-elevated text-slate-300 border border-resilio-black-border transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Tes Ulang</span>
                  </button>
                </div>
              </div>

              {/* Score Gauge & Key Indicator Matrix */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Visual Score Badge with Fortress Shield Visual */}
                <div className="lg:col-span-5 p-6 rounded-3xl bg-resilio-black-card text-white text-center flex flex-col items-center justify-center shadow-lg border border-resilio-forest-800 relative overflow-hidden">
                  <div className="w-24 h-24 mb-2 rounded-2xl overflow-hidden shadow-inner border border-resilio-forest-700/60">
                    <Image
                      src="/images/fortress-shield.jpg"
                      alt="Benteng Perlindungan Finansial Resilio"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider text-resilio-forest-300 mb-1">
                    Skor Ketahanan Finansial
                  </span>
                  
                  <div className="relative my-1">
                    <span className="text-5xl font-black tracking-tight text-white">
                      {assessmentResult.score}
                    </span>
                    <span className="text-resilio-forest-400 font-bold text-lg">/100</span>
                  </div>

                  <div className={`mt-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${
                    assessmentResult.rating === 'vulnerable'
                      ? 'bg-resilio-blood-950/80 text-resilio-blood-300 border border-resilio-blood-700/60 shadow-glowBlood'
                      : assessmentResult.rating === 'moderate'
                      ? 'bg-amber-950/80 text-amber-300 border border-amber-700/60'
                      : 'bg-resilio-forest-950 text-resilio-forest-300 border border-resilio-forest-700/60 shadow-glowForest'
                  }`}>
                    {assessmentResult.ratingLabel}
                  </div>
                </div>

                {/* 3 Core Indicators */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Indicator 1: Runway */}
                  <div className="p-4 rounded-2xl bg-resilio-black-card border border-resilio-black-border">
                    <span className="text-xs text-slate-400 font-bold block mb-1">
                      Emergency Runway
                    </span>
                    <p className="text-2xl font-black text-white">
                      {assessmentResult.emergencyRunwayMonths} <span className="text-xs font-normal text-slate-400">Bulan</span>
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Kapasitas bertahan tanpa pemasukan baru.
                    </p>
                  </div>

                  {/* Indicator 2: Debt Service Ratio */}
                  <div className="p-4 rounded-2xl bg-resilio-black-card border border-resilio-black-border">
                    <span className="text-xs text-slate-400 font-bold block mb-1">
                      Debt Service Ratio (DSR)
                    </span>
                    <p className={`text-2xl font-black ${
                      assessmentResult.debtToIncomeRatio > 35 ? 'text-resilio-blood-400' : 'text-resilio-forest-400'
                    }`}>
                      {assessmentResult.debtToIncomeRatio}%
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {assessmentResult.debtToIncomeRatio > 35 ? '⚠️ Melebihi batas aman 30%' : '✅ Dalam batas rasio sehat'}
                    </p>
                  </div>

                  {/* Indicator 3: Shock Vulnerability */}
                  <div className="p-4 rounded-2xl bg-resilio-black-card border border-resilio-black-border">
                    <span className="text-xs text-slate-400 font-bold block mb-1">
                      Vulnerability Index
                    </span>
                    <p className={`text-2xl font-black ${
                      assessmentResult.vulnerabilityIndex === 'Tinggi' ? 'text-resilio-blood-400' : 'text-resilio-forest-400'
                    }`}>
                      {assessmentResult.vulnerabilityIndex}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Kerentanan terhadap shock ekonomi.
                    </p>
                  </div>
                </div>

              </div>

              {/* Summary Analysis Banner */}
              <div className={`p-4 sm:p-5 rounded-2xl border ${
                assessmentResult.rating === 'vulnerable'
                  ? 'bg-resilio-blood-950/60 border-resilio-blood-800 text-resilio-blood-200'
                  : assessmentResult.rating === 'moderate'
                  ? 'bg-amber-950/40 border-amber-800/80 text-amber-200'
                  : 'bg-resilio-forest-950/60 border-resilio-forest-800 text-resilio-forest-200'
              }`}>
                <p className="text-sm font-semibold leading-relaxed">
                  {assessmentResult.summaryMessage}
                </p>
              </div>

              {/* Recommended Mitigation Packages */}
              <div className="space-y-4">
                <h4 className="text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-resilio-forest-400" />
                  <span>Paket Rekomendasi Perlindungan Finansial</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {assessmentResult.recommendations.map((rec, rIdx) => (
                    <div
                      key={rIdx}
                      className="p-5 rounded-2xl bg-resilio-black-card border border-resilio-black-border shadow-md hover:border-resilio-forest-700/60 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase border ${
                            rec.priority === 'Segera'
                              ? 'bg-resilio-blood-950 text-resilio-blood-300 border-resilio-blood-800'
                              : rec.priority === 'Penting'
                              ? 'bg-amber-950 text-amber-300 border-amber-800'
                              : 'bg-resilio-forest-950 text-resilio-forest-300 border-resilio-forest-800'
                          }`}>
                            Prioritas: {rec.priority}
                          </span>
                        </div>
                        <h5 className="text-sm font-black text-white mb-1">
                          {rec.title}
                        </h5>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {rec.description}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-resilio-black-border flex items-center justify-between">
                        <a
                          href="#pillars"
                          className="text-xs font-bold text-resilio-forest-400 hover:text-resilio-forest-300 inline-flex items-center gap-1"
                        >
                          <span>Aktifkan di 6 Pilar</span>
                          <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Plan 30 Hari */}
              {assessmentResult.monthlyActionPlan.length > 0 && (
                <div className="p-5 rounded-2xl bg-resilio-black-card border border-resilio-black-border">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-resilio-forest-400 mb-3">
                    Langkah Aksi Taktis 30 Hari Ke Depan:
                  </h5>
                  <ul className="space-y-2">
                    {assessmentResult.monthlyActionPlan.map((act, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-resilio-forest-400 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Print Footer */}
              <div className="pt-4 border-t border-resilio-black-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                <span>Hasil asesmen ini dihitung berdasarkan data inputan mandiri untuk tujuan mitigasi risiko &amp; edukasi.</span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 bg-resilio-forest-700 text-white rounded-xl font-bold hover:bg-resilio-forest-600 transition-colors print:hidden shadow-glowForest"
                >
                  Ulangi Asesmen Baru
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
