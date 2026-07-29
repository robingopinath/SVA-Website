import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  TrendingDown, 
  Coins, 
  Sparkles, 
  ArrowRight, 
  Info, 
  Scale, 
  ShieldCheck, 
  PieChart as PieChartIcon 
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell, Legend } from 'recharts';
import { calculateSavings, formatINR } from '../utils/calculator';
import { LTV_TIERS } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface CalculatorSectionProps {
  onApplyWithCalculation: (calcData: any) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ onApplyWithCalculation }) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'savings' | 'valuation'>('savings');

  // Input states
  const [loanAmount, setLoanAmount] = useState<number>(250000);
  const [currentRatePPA, setCurrentRatePPA] = useState<number>(21); // 21% p.a.
  const [newRatePPA, setNewRatePPA] = useState<number>(9.9); // 9.9% p.a.
  const [tenureMonths, setTenureMonths] = useState<number>(12);
  const [goldWeight, setGoldWeight] = useState<number>(50); // grams
  const [purity, setPurity] = useState<18 | 20 | 22 | 24>(22);
  const [marketRate, setMarketRate] = useState<number>(7650);

  // Computed results
  const results = useMemo(() => {
    return calculateSavings({
      existingLoanAmount: loanAmount,
      currentInterestRatePPA: currentRatePPA,
      newInterestRatePPA: newRatePPA,
      tenureMonths,
      goldWeightGrams: goldWeight,
      goldPurityKarat: purity,
      currentMarketRatePerGram: marketRate
    });
  }, [loanAmount, currentRatePPA, newRatePPA, tenureMonths, goldWeight, purity, marketRate]);

  // Chart data
  const comparisonChartData = [
    {
      name: 'Monthly Interest',
      'Current Lender': results.currentMonthlyInterest,
      'Shree Varahi Associates': results.newMonthlyInterest,
    },
    {
      name: 'Total Annual Interest',
      'Current Lender': results.currentMonthlyInterest * 12,
      'Shree Varahi Associates': results.newMonthlyInterest * 12,
    }
  ];

  return (
    <section id="calculator" className="scroll-mt-28 lg:scroll-mt-36 py-16 lg:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200">
      
      {/* Background Vector SVG & Soft Radial Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Radial Lights */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Vector SVG Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="calc-grid-pattern" width="48" height="48" patternUnits="userSpaceOnUse">
              <circle cx="24" cy="24" r="1.5" fill="#b45309" />
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#d97706" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#calc-grid-pattern)" />
        </svg>

        {/* Floating Coin / Calculator Vector Watermarks */}
        <svg className="absolute bottom-10 left-10 w-72 h-72 text-amber-500/5 pointer-events-none hidden md:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M6 12h12" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1DB0F0] text-xs font-bold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-[#1DB0F0]" />
            <span>{t('calcHeaderBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t('calcTitlePrefix')} <span className="text-[#1DB0F0]">{t('calcTitleHighlight')}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('calcSubtitle')}
          </p>
        </div>

        {/* Tab Switcher with Butter-Smooth Sliding Pill */}
        <div className="flex justify-center mt-8">
          <div className="bg-slate-200/90 p-1.5 rounded-2xl border border-slate-300/80 inline-flex space-x-1.5 shadow-inner relative">
            <button
              onClick={() => setActiveTab('savings')}
              className={`relative z-10 flex items-center space-x-2 px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm cursor-pointer uppercase tracking-wider transition-colors duration-200 ${
                activeTab === 'savings'
                  ? 'text-white'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {activeTab === 'savings' && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-[#1DB0F0] rounded-xl shadow-md"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <TrendingDown className="w-4 h-4 z-10 relative" />
              <span className="z-10 relative">{language === 'kn' ? 'ಬಡ್ಡಿ ಉಳಿತಾಯ ಕ್ಯಾಲ್ಕುಲೇಟರ್' : 'Interest Savings Calculator'}</span>
            </button>

            <button
              onClick={() => setActiveTab('valuation')}
              className={`relative z-10 flex items-center space-x-2 px-5 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm cursor-pointer uppercase tracking-wider transition-colors duration-200 ${
                activeTab === 'valuation'
                  ? 'text-white'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {activeTab === 'valuation' && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-[#1DB0F0] rounded-xl shadow-md"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}
              <Coins className="w-4 h-4 z-10 relative" />
              <span className="z-10 relative">{language === 'kn' ? 'ಚಿನ್ನದ ಕ್ಯಾರೆಟ್ ಮೌಲ್ಯಮಾಪನ' : 'Gold Per Gram LTV Estimator'}</span>
            </button>
          </div>
        </div>

        {/* Tab Content Panels with Smooth AnimatePresence */}
        <AnimatePresence mode="wait">
          {activeTab === 'savings' ? (
            <motion.div
              key="savings"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
            
            {/* Input Controls Panel - Redesigned & Richly Balanced */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-5 shadow-xl flex flex-col justify-between h-full">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#1DB0F0]" />
                  <span>Input Current Loan Details</span>
                </h3>
                <span className="text-[10px] sm:text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-blue-50 text-[#1DB0F0] border border-blue-200 uppercase tracking-wider">
                  Live Calculator
                </span>
              </div>

              {/* 1. Loan Amount Slider & Quick Presets */}
              <div className="space-y-2.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Existing Loan Amount</label>
                  <span className="text-[#1DB0F0] font-black text-base sm:text-lg bg-white px-3 py-0.5 rounded-lg border border-slate-200 shadow-2xs">
                    {formatINR(loanAmount)}
                  </span>
                </div>

                <input
                  type="range"
                  min="20000"
                  max="2500000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1DB0F0]"
                />

                <div className="flex justify-between text-[10px] font-semibold text-slate-400 px-0.5">
                  <span>₹20,000</span>
                  <span>₹10 Lakh</span>
                  <span>₹25 Lakh+</span>
                </div>

                {/* Quick Preset Buttons for Loan Amount */}
                <div className="pt-1">
                  <span className="text-[10px] font-bold text-slate-500 block mb-1.5 uppercase tracking-wider">Quick Amount Presets:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {[100000, 250000, 500000, 1000000, 1500000, 2500000].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setLoanAmount(amt)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          loanAmount === amt
                            ? 'bg-[#1DB0F0] text-white shadow-xs'
                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {amt >= 100000 ? `₹${amt / 100000}L` : `₹${amt / 1000}k`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2. Current Interest Rate (Annual) */}
              <div className="space-y-2.5 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">Current Interest Rate (Annual)</label>
                  <span className="text-red-600 font-extrabold text-xs sm:text-sm bg-red-50 px-2.5 py-1 rounded-lg border border-red-200">
                    {currentRatePPA}% p.a. ({(currentRatePPA / 12).toFixed(2)}%/mo)
                  </span>
                </div>

                <input
                  type="range"
                  min="12"
                  max="30"
                  step="0.5"
                  value={currentRatePPA}
                  onChange={(e) => setCurrentRatePPA(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-500"
                />

                {/* Quick Lender Presets */}
                <div className="pt-1">
                  <span className="text-[10px] font-bold text-slate-500 block mb-1.5 uppercase tracking-wider">Typical Lender Rates:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: 'Bank (18%)', rate: 18 },
                      { label: 'NBFC (21%)', rate: 21 },
                      { label: 'Private (24%)', rate: 24 },
                      { label: 'High (27%)', rate: 27 },
                    ].map((preset) => (
                      <button
                        key={preset.rate}
                        type="button"
                        onClick={() => setCurrentRatePPA(preset.rate)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          currentRatePPA === preset.rate
                            ? 'bg-red-600 text-white shadow-xs'
                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Shree Varahi Proposed Interest Rate */}
              <div className="space-y-2.5 bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/80">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-800">Shree Varahi Reduced Rate</label>
                  <span className="text-emerald-700 font-extrabold text-xs sm:text-sm bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
                    {newRatePPA}% p.a. ({(newRatePPA / 12).toFixed(2)}%/mo)
                  </span>
                </div>

                <input
                  type="range"
                  min="8.5"
                  max="14"
                  step="0.1"
                  value={newRatePPA}
                  onChange={(e) => setNewRatePPA(Number(e.target.value))}
                  className="w-full h-2.5 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />

                {/* Preferred Rate Presets */}
                <div className="pt-1">
                  <span className="text-[10px] font-bold text-emerald-800 block mb-1.5 uppercase tracking-wider">Our Special Rates:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: '0.75%/mo (9% p.a.)', rate: 9.0 },
                      { label: '0.83%/mo (9.9% p.a.)', rate: 9.9 },
                      { label: '0.99%/mo (11.88% p.a.)', rate: 11.88 },
                    ].map((preset) => (
                      <button
                        key={preset.rate}
                        type="button"
                        onClick={() => setNewRatePPA(preset.rate)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          newRatePPA === preset.rate
                            ? 'bg-emerald-600 text-white shadow-xs'
                            : 'bg-white text-emerald-900 border border-emerald-200 hover:bg-emerald-100'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4. Gold Weight & Purity Container */}
              <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
                  Pledged Gold Details
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  <div className="sm:col-span-7 space-y-1.5">
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                      Gold Weight (Grams)
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="number"
                        min="1"
                        max="1000"
                        value={goldWeight}
                        onChange={(e) => setGoldWeight(Math.max(1, Number(e.target.value)))}
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm font-bold focus:outline-none focus:border-[#1DB0F0] shadow-2xs"
                      />
                      <span className="text-xs font-bold text-slate-500 pr-1">grams</span>
                    </div>

                    {/* Weight Quick Select */}
                    <div className="flex gap-1 pt-1">
                      {[10, 25, 50, 100, 250].map((wt) => (
                        <button
                          key={wt}
                          type="button"
                          onClick={() => setGoldWeight(wt)}
                          className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                            goldWeight === wt
                              ? 'bg-slate-800 text-white'
                              : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {wt}g
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-5 space-y-1.5">
                    <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                      Gold Purity
                    </label>
                    <select
                      value={purity}
                      onChange={(e) => setPurity(Number(e.target.value) as any)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs font-bold focus:outline-none focus:border-[#1DB0F0] shadow-2xs"
                    >
                      <option value={22}>22 Karat (91.6% standard)</option>
                      <option value={24}>24 Karat (99.9% pure)</option>
                      <option value={20}>20 Karat</option>
                      <option value={18}>18 Karat</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 5. Compact Monthly Comparison Live Callout Banner */}
              <div className="p-3.5 bg-slate-900 text-white rounded-2xl flex items-center justify-between border border-slate-800 shadow-md">
                <div className="space-y-0.5">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Your Monthly Outflow</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-red-400 line-through font-bold">{formatINR(results.currentMonthlyInterest)}</span>
                    <span className="text-xs font-extrabold text-emerald-400">&rarr; {formatINR(results.newMonthlyInterest)}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider block">Net Monthly Savings</span>
                  <span className="text-sm font-black text-emerald-400">+{formatINR(results.monthlySavings)} / mo</span>
                </div>
              </div>

            </div>

            {/* Results Output Panel & Chart - Professional Polish Dark Card Accent */}
            <div className="lg:col-span-6 h-full">
              
              {/* Highlight Savings Box */}
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-800 text-white shadow-2xl flex flex-col justify-between h-full space-y-5">
                
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1DB0F0] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Your Estimated Benefits</span>
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-[#1DB0F0] text-xs font-bold border border-blue-500/30">
                    Save {Math.round(((results.currentMonthlyInterest - results.newMonthlyInterest) / results.currentMonthlyInterest) * 100)}%
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="bg-slate-800/80 p-3.5 sm:p-4 rounded-2xl border border-slate-700">
                    <span className="text-xs text-slate-400 font-medium block mb-1">Monthly Interest Saved</span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-400">
                      {formatINR(results.monthlySavings)}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-1">/ month reduced cost</span>
                  </div>

                  <div className="bg-slate-800/80 p-3.5 sm:p-4 rounded-2xl border border-slate-700">
                    <span className="text-xs text-slate-400 font-medium block mb-1">Annual Interest Saved</span>
                    <span className="text-xl sm:text-2xl font-black text-[#1DB0F0]">
                      {formatINR(results.annualSavings)}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-1">/ year in your pocket</span>
                  </div>
                </div>

                {/* Top-Up Cash Potential */}
                {results.potentialTopUpCash > 0 && (
                  <div className="bg-emerald-950/50 border border-emerald-500/40 rounded-2xl p-3.5 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-emerald-300 block">
                        Eligible Top-Up Cash Available!
                      </span>
                      <p className="text-xs text-slate-300">
                        Based on {goldWeight}g gold value ({formatINR(results.grossGoldValue)}), you can get extra cash.
                      </p>
                    </div>
                    <span className="text-lg font-black text-emerald-400 pl-2">
                      +{formatINR(results.potentialTopUpCash)}
                    </span>
                  </div>
                )}

                {/* Recharts Visual Comparison Bar Chart */}
                <div className="space-y-1.5 flex-1 min-h-[220px] flex flex-col justify-center">
                  <span className="text-xs font-semibold text-slate-300 block">
                    Interest Cost Visual Comparison
                  </span>
                  <div className="h-48 sm:h-52 w-full bg-slate-950/80 p-2 rounded-2xl border border-slate-800">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={comparisonChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} />
                        <YAxis stroke="#94a3b8" fontSize={10} tickLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                          formatter={(value: any) => [formatINR(value), 'Cost']}
                        />
                        <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '5px' }} />
                        <Bar dataKey="Current Lender" fill="#ef4444" radius={[6, 6, 0, 0]} />
                        <Bar dataKey="Shree Varahi Associates" fill="#10b981" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Trust Highlights Strip */}
                <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-800/80 text-center text-[10px] sm:text-[11px] font-semibold text-slate-300">
                  <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800/80">
                    <span className="text-[#1DB0F0] font-bold block mb-0.5">⚡ 30 Mins</span>
                    <span>Fast Release</span>
                  </div>
                  <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800/80">
                    <span className="text-emerald-400 font-bold block mb-0.5">🛡️ 100% Safe</span>
                    <span>Insured Vault</span>
                  </div>
                  <div className="bg-slate-950/60 p-2 rounded-xl border border-slate-800/80">
                    <span className="text-amber-400 font-bold block mb-0.5">📜 ₹0 Extra</span>
                    <span>Hidden Fees</span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onApplyWithCalculation(results)}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#1DB0F0] hover:bg-sky-500 text-white font-bold text-sm shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer uppercase tracking-wider"
                >
                  <span>Apply to Claim These Savings Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

              </div>

            </div>

          </motion.div>
        ) : (
          <motion.div
            key="valuation"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-4xl mx-auto bg-white text-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-8 shadow-2xl"
          >
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Coins className="w-6 h-6 text-[#1DB0F0]" />
                  <span>Gold Valuation & 2026 RBI LTV Calculator</span>
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Calculates exact maximum loan eligibility based on purity, weight, and official 2026 RBI LTV limits.
                </p>
              </div>

              <div className="bg-blue-50 px-3 py-1.5 rounded-xl text-xs font-bold text-[#1DB0F0] border border-blue-200">
                Market Rate: ₹{marketRate}/g
              </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  Gold Weight (Grams)
                </label>
                <input
                  type="number"
                  min="1"
                  max="2000"
                  value={goldWeight}
                  onChange={(e) => setGoldWeight(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base font-bold focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  Gold Purity (Karat)
                </label>
                <select
                  value={purity}
                  onChange={(e) => setPurity(Number(e.target.value) as any)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base font-bold focus:outline-none focus:border-amber-500"
                >
                  <option value={22}>22 Karat (Standard Jewelry)</option>
                  <option value={24}>24 Karat (Pure Coins/Bars)</option>
                  <option value={20}>20 Karat Jewelry</option>
                  <option value={18}>18 Karat Ornaments</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  Current Market Rate (₹/g)
                </label>
                <input
                  type="number"
                  value={marketRate}
                  onChange={(e) => setMarketRate(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-base font-bold focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Gross Gold Market Value</span>
                <span className="text-2xl font-black text-[#1DB0F0]">
                  {formatINR(results.grossGoldValue)}
                </span>
                <span className="text-[11px] text-slate-500 block mt-1">Total market appraisal</span>
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Applicable 2026 RBI LTV</span>
                <span className="text-2xl font-black text-blue-600">
                  {results.applicableLtvPercent}% LTV
                </span>
                <span className="text-[11px] text-slate-500 block mt-1">Tiered regulatory cap</span>
              </div>

              <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200">
                <span className="text-xs text-emerald-800 block mb-1 font-bold">Maximum Eligible Loan</span>
                <span className="text-2xl font-black text-emerald-600">
                  {formatINR(results.maxEligibleLoan)}
                </span>
                <span className="text-[11px] text-emerald-700 block mt-1">Instant disbursal capacity</span>
              </div>
            </div>

            {/* Tier Explanation Card */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#1DB0F0]" />
                <span>2026 RBI Tiered LTV Rules Breakdown</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {LTV_TIERS.map((tier, idx) => (
                  <div 
                    key={idx}
                    className={`p-3 rounded-xl border ${
                      tier.ltv === results.applicableLtvPercent
                        ? 'bg-[#1DB0F0] text-white border-blue-600 shadow-md'
                        : 'bg-white border-slate-200 text-slate-600'
                    }`}
                  >
                    <div className="font-bold">{tier.label}</div>
                    <div className="text-lg font-black mt-1">{tier.ltv}% LTV</div>
                    <div className="text-[10px] mt-1 opacity-90">{tier.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => onApplyWithCalculation(results)}
              className="w-full py-4 rounded-2xl bg-[#1DB0F0] hover:bg-sky-500 text-white font-bold text-sm shadow-xl flex items-center justify-center space-x-2 cursor-pointer uppercase tracking-wider"
            >
              <span>Get Loan Quote Based on This Valuation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

          </motion.div>
        )}
        </AnimatePresence>

      </div>
    </section>
  );
};
