export type AudienceSegment = 'individuals' | 'communities';

export interface FinancialHealthInputs {
  monthlyIncome: number;
  incomeStability: 'stable_salary' | 'variable_freelance' | 'micro_business' | 'gig_worker';
  monthlyMandatoryExpense: number;
  currentEmergencySavings: number;
  employmentStatus: 'permanent_employee' | 'contract_worker' | 'freelancer_gig' | 'small_business_owner' | 'informal';
  dependentsCount: number;
  totalActiveDebts: number;
  biggestRiskConcern: 'layoff_loss_of_income' | 'medical_emergency' | 'inflation_living_costs' | 'debt_predator_trap';
}

export type ResilienceRating = 'vulnerable' | 'moderate' | 'strong';

export interface FinancialHealthResult {
  assessmentId: string;
  score: number; // 0 - 100
  rating: ResilienceRating;
  ratingLabel: string;
  emergencyRunwayMonths: number;
  debtToIncomeRatio: number; // percentage
  vulnerabilityIndex: 'Tinggi' | 'Moderat' | 'Rendah';
  summaryMessage: string;
  recommendations: {
    priority: 'Segera' | 'Penting' | 'Optimalisasi';
    title: string;
    description: string;
    pillarId: string;
  }[];
  monthlyActionPlan: string[];
}

export interface Pillar {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  category: string;
  iconName: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  metricsHighlight: string;
  targetAudience: string;
  badge: string;
  details: {
    problemStatement: string;
    resilioApproach: string;
    operationalWorkflow: string[];
    faq: { q: string; a: string }[];
  };
}

export interface CrisisGuide {
  id: string;
  title: string;
  category: 'PHK & Income Shock' | 'Pinjol & Rentenir' | 'Krisis Medis' | 'Bencana & Musibah';
  summary: string;
  severity: 'Tinggi' | 'Sedang' | 'Kritis';
  steps: {
    step: number;
    title: string;
    action: string;
  }[];
  hotline: {
    name: string;
    contact: string;
    description: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  segment: AudienceSegment;
  avatar: string;
  headline: string;
  story: string;
  metrics: string;
}
