import { SavingsCalculation } from '../types';

export function calculateSavings(params: {
  existingLoanAmount: number;
  currentInterestRatePPA: number; // e.g. 21% p.a. (1.75% / mo)
  newInterestRatePPA: number; // e.g. 10.2% p.a. (0.85% / mo)
  tenureMonths: number;
  goldWeightGrams: number;
  goldPurityKarat: 18 | 20 | 22 | 24;
  currentMarketRatePerGram: number; // e.g. 7650
}): SavingsCalculation {
  const {
    existingLoanAmount,
    currentInterestRatePPA,
    newInterestRatePPA,
    tenureMonths,
    goldWeightGrams,
    goldPurityKarat,
    currentMarketRatePerGram
  } = params;

  // Monthly interest percentages
  const currentMonthlyRate = currentInterestRatePPA / 12 / 100;
  const newMonthlyRate = newInterestRatePPA / 12 / 100;

  const currentMonthlyInterest = Math.round(existingLoanAmount * currentMonthlyRate);
  const newMonthlyInterest = Math.round(existingLoanAmount * newMonthlyRate);
  
  const monthlySavings = Math.max(0, currentMonthlyInterest - newMonthlyInterest);
  const annualSavings = monthlySavings * 12;
  const totalSavingsOverTenure = monthlySavings * tenureMonths;

  // Purity factors
  const purityMultiplier: Record<number, number> = {
    18: 0.75,
    20: 0.833,
    22: 0.916,
    24: 1.0
  };

  const factor = purityMultiplier[goldPurityKarat] || 0.916;
  const pricePerGramForPurity = currentMarketRatePerGram * factor;
  const grossGoldValue = Math.round(goldWeightGrams * pricePerGramForPurity);

  // Determine Tiered LTV based on estimated value
  // RBI 2026 Rules: <= 2.5L -> 85%, 2.5L to 5L -> 80%, > 5L -> 75%
  let applicableLtvPercent = 85;
  let estimatedMax = grossGoldValue * 0.85;

  if (estimatedMax > 500000) {
    applicableLtvPercent = 75;
    estimatedMax = grossGoldValue * 0.75;
  } else if (estimatedMax > 250000) {
    applicableLtvPercent = 80;
    estimatedMax = grossGoldValue * 0.80;
  }

  const maxEligibleLoan = Math.round(estimatedMax);
  const potentialTopUpCash = Math.max(0, maxEligibleLoan - existingLoanAmount);

  return {
    existingLoanAmount,
    currentInterestRate: currentInterestRatePPA,
    newInterestRate: newInterestRatePPA,
    tenureMonths,
    goldWeightGrams,
    goldPurityKarat,
    currentMarketRatePerGram,

    currentMonthlyInterest,
    newMonthlyInterest,
    monthlySavings,
    annualSavings,
    totalSavingsOverTenure,

    grossGoldValue,
    applicableLtvPercent,
    maxEligibleLoan,
    potentialTopUpCash
  };
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}
