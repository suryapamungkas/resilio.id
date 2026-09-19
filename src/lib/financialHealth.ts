import { FinancialHealthInputs, FinancialHealthResult, ResilienceRating } from '@/types';

/**
 * Calculates comprehensive financial health score, runway months,
 * debt service ratio, and tailored recommendations based on family input.
 */
export function calculateFinancialHealth(data: FinancialHealthInputs): FinancialHealthResult {
  const expense = data.monthlyMandatoryExpense || 1;
  const runwayMonths = Math.round((data.currentEmergencySavings / expense) * 10) / 10;
  const income = data.monthlyIncome || 1;
  const debtRatio = Math.round((data.totalActiveDebts / income) * 100);

  let score = 50;

  if (runwayMonths < 1) score -= 25;
  else if (runwayMonths < 3) score -= 5;
  else if (runwayMonths >= 6) score += 25;
  else score += 15;

  if (debtRatio > 40) score -= 20;
  else if (debtRatio > 25) score -= 10;
  else if (debtRatio <= 15) score += 10;

  if (data.dependentsCount >= 3 && data.monthlyIncome < 7000000) {
    score -= 10;
  }

  if (data.employmentStatus === 'permanent_employee') score += 10;
  else if (data.employmentStatus === 'informal' || data.employmentStatus === 'freelancer_gig') score -= 8;

  const finalScore = Math.max(12, Math.min(96, score));

  let rating: ResilienceRating = 'vulnerable';
  let ratingLabel = 'Rentan (High Economic Shock Risk)';
  let vulnIndex: 'Tinggi' | 'Moderat' | 'Rendah' = 'Tinggi';

  if (finalScore >= 75) {
    rating = 'strong';
    ratingLabel = 'Kuat (Resilient Fortress)';
    vulnIndex = 'Rendah';
  } else if (finalScore >= 45) {
    rating = 'moderate';
    ratingLabel = 'Sedang (Moderate Resilience)';
    vulnIndex = 'Moderat';
  }

  const recommendations: FinancialHealthResult['recommendations'] = [];
  const actionPlan: string[] = [];

  if (runwayMonths < 3) {
    recommendations.push({
      priority: 'Segera',
      title: 'Bentuk Buffer Likuid 3 Bulan Pertama',
      description: `Cadangan kas Anda saat ini hanya bertahan ${runwayMonths} bulan. Gunakan modul auto-split tabungan harian Rp 15.000/hari di instrumen likuid aman.`,
      pillarId: 'emergency-planning',
    });
    actionPlan.push('Sisihkan otomatis 10% dari pendapatan harian/bulanan ke rekening terpisah sebelum belanja.');
  }

  if (debtRatio > 30) {
    recommendations.push({
      priority: 'Segera',
      title: 'Restrukturisasi Beban Cicilan & Stop Utang Baru',
      description: `Beban hutang Anda mencapai ${debtRatio}% dari pendapatan (batas aman 30%). Lakukan konsolidasi hutang etis tanpa rentenir/pinjol.`,
      pillarId: 'ethical-micro-financing',
    });
    actionPlan.push('Petakan seluruh pokok cicilan dan prioritaskan melunasi bunga tertinggi dengan metode avalanche/snowball.');
  }

  if (data.biggestRiskConcern === 'medical_emergency' || data.biggestRiskConcern === 'layoff_loss_of_income') {
    recommendations.push({
      priority: 'Penting',
      title: 'Aktifkan Proteksi Arus Kas (Asuransi Mikro Resilio)',
      description: 'Amankan santunan rawat inap harian Rp 250.000/hari dan tunjangan transisi nafkah dengan premi mikro terjangkau.',
      pillarId: 'micro-insurance',
    });
    actionPlan.push('Pastikan BPJS Kesehatan aktif dan lengkapi dengan santunan mikro pengganti nafkah dapur harian.');
  }

  if (data.incomeStability === 'variable_freelance' || data.incomeStability === 'micro_business') {
    recommendations.push({
      priority: 'Optimalisasi',
      title: 'Diversifikasi Sumber Nafkah & Upskilling Kilat',
      description: 'Ikuti program upskilling 14 hari Resilio untuk membuka saluran pendapatan alternatif (side-income).',
      pillarId: 'upskilling-income',
    });
    actionPlan.push('Luangkan 4 jam per minggu untuk meningkatkan keahlian digital atau vokasi siap kerja.');
  }

  if (recommendations.length < 2) {
    recommendations.push({
      priority: 'Optimalisasi',
      title: 'Ikut Serta dalam Simpanan Gotong Royong Komunitas',
      description: 'Perkuat jaringan pengaman sosial bersama warga lingkungan RT/RW untuk mitigasi musibah kolektif.',
      pillarId: 'community-fund',
    });
  }

  const summaryMessage =
    rating === 'vulnerable'
      ? 'Peringatan Dini: Posisi keuangan Anda sangat sensitif terhadap shock ekonomi tak terduga (seperti PHK atau biaya medis mendadak). Tindakan pencegahan perlu segera dilakukan dalam 30 hari ke depan.'
      : rating === 'moderate'
      ? 'Kondisi Finansial Cukup Stabil, namun masih memiliki celah resiliensi jika terjadi penurunan pendapatan mendadak. Tingkatkan cash buffer dan proteksi mikro.'
      : 'Selamat! Struktur keuangan keluarga Anda berada di zona aman dan tangguh menghadapi gejolak ekonomi. Terus pertahankan kedisiplinan dan bantu komunitas sekitar Anda.';

  const assessmentId = `RES-${Math.floor(100000 + Math.random() * 900000)}`;

  return {
    assessmentId,
    score: finalScore,
    rating,
    ratingLabel,
    emergencyRunwayMonths: runwayMonths,
    debtToIncomeRatio: debtRatio,
    vulnerabilityIndex: vulnIndex,
    summaryMessage,
    recommendations,
    monthlyActionPlan: actionPlan,
  };
}
