export interface SavingsCalculation {
  existingLoanAmount: number;
  currentInterestRate: number; // Annual % (e.g. 18% to 24%)
  newInterestRate: number; // Annual % (e.g. 9% to 11.9%)
  tenureMonths: number;
  goldWeightGrams: number;
  goldPurityKarat: 18 | 20 | 22 | 24;
  currentMarketRatePerGram: number;
  
  // Calculated outputs
  currentMonthlyInterest: number;
  newMonthlyInterest: number;
  monthlySavings: number;
  annualSavings: number;
  totalSavingsOverTenure: number;
  
  // Gold LTV & Top up
  grossGoldValue: number;
  applicableLtvPercent: number; // 85% for <=2.5L, 80% for 2.5L-5L, 75% for >5L
  maxEligibleLoan: number;
  potentialTopUpCash: number;
}

export interface TakeoverStep {
  stepNumber: number;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  requiredDocs?: string[];
  iconName: string;
}

export interface FAQItem {
  id: string;
  category: 'transfer' | 'valuation' | 'rbi_rules' | 'safety' | 'charges';
  question: string;
  answer: string;
  highlightText?: string;
}

export interface EnquiryFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  pincode: string;
  cityArea: string;
  branch: string;
  currentLender: string;
  existingLoanAmount: string;
  goldWeight: string;
  purity: string;
  preferredContactTime: string;
  notes: string;
  acceptedTerms: boolean;
}

export interface ComparisonRow {
  feature: string;
  otherLenders: string;
  shreeVarahi: string;
  isHighlight?: boolean;
}
