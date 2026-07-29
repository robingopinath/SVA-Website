import React from 'react';
import { COMPARISON_DATA, COMPANY_INFO } from '../data/companyData';
import { Check, X, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ComparisonSectionProps {
  onOpenEnquiry: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenEnquiry }) => {
  const { language, t } = useLanguage();

  const localizedComparisonData = language === 'kn' ? [
    {
      feature: "ಮಾಸಿಕ ಬಡ್ಡಿದರ",
      otherLenders: "ತಿಂಗಳಿಗೆ 1.5% - 2.5% (ವರ್ಷಕ್ಕೆ 18% - 30%)",
      shreeVarahi: "ತಿಂಗಳಿಗೆ ಶೇ. 0.75% - 0.99% ನಿಂದ ಆರಂಭ (ವರ್ಷಕ್ಕೆ 9% - 12%)",
      isHighlight: true
    },
    {
      feature: "ಮಾಸಿಕ ಬಡ್ಡಿ ವೆಚ್ಚ / ಇಎಮ್‌ಐ",
      otherLenders: "ಹೆಚ್ಚಿನ ಮಾಸಿಕ ಹೊರೆ ಮತ್ತು ಚಕ್ರಬಡ್ಡಿ ದಂಡಗಳು",
      shreeVarahi: "ಮಾಸಿಕ ಬಡ್ಡಿ ಪಾವತಿಯಲ್ಲಿ ಶೇಕಡಾ 40% - 50% ವರೆಗೆ ಉಳಿತಾಯ",
      isHighlight: true
    },
    {
      feature: "ಟಾಪ್-ಅಪ್ (Top-Up) ಹೆಚ್ಚುವರಿ ನಗದು",
      otherLenders: "ಕಟ್ಟುನಿಟ್ಟಿನ ನಿಯಮಗಳು ಅಥವಾ ಹೆಚ್ಚು ಮೌಲ್ಯಮಾಪನ ತೊಂದರೆಗಳು",
      shreeVarahi: "ಪ್ರಸ್ತುತ ಚಿನ್ನದ ಮಾರುಕಟ್ಟೆ ದರದ ಆಧಾರದ ಮೇಲೆ ತಕ್ಷಣದ ಹೆಚ್ಚುವರಿ ನಗದು",
      isHighlight: true
    },
    {
      feature: "ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಇತರೆ ಶುಲ್ಕಗಳು",
      otherLenders: "ರಹಸ್ಯ ಮೌಲ್ಯಮಾಪನ ಶುಲ್ಕಗಳು, ದಂಡಗಳು, ಹೆಚ್ಚಿನ ಆಡಳಿತ ವೆಚ್ಚ",
      shreeVarahi: "ಪಾರದರ್ಶಕ ಕೀ ಫ್ಯಾಕ್ಟ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್ (KFS) - ಯಾವುದೇ ರಹಸ್ಯ ಶುಲ್ಕಗಳಿಲ್ಲ"
    },
    {
      feature: "2026 ರ ಆರ್‌ಬಿಐ ನಿಯಮಗಳ ಪಾಲನೆ",
      otherLenders: "ವ್ಯಕ್ತಿಗತ ಮಾರ್ಗದರ್ಶನವಿಲ್ಲದೆ ಕಠಿಣ ಮಿತಿಗಳು",
      shreeVarahi: "ಶೇಕಡಾ 85% ವರೆಗೆ ಗರಿಷ್ಠ ಸಾಲ ಮೌಲ್ಯ (LTV) ಸೌಲಭ್ಯ"
    },
    {
      feature: "ಚಿನ್ನದ ಆಭರಣಗಳ ಭದ್ರತೆ",
      otherLenders: "ಸಾಧಾರಣ ಶಾಖಾ ಶೇಖರಣೆ ಅಥವಾ ಎನ್‌ಬಿಎಫ್‌ಸಿ ಲಾಕರ್‌ಗಳು",
      shreeVarahi: "100% ವಿಮೆ ಹೊಂದಿರುವ, ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಮೇಲ್ವಿಚಾರಣೆಯ ಬ್ಯಾಂಕ್ ಲಾಕರ್",
      isHighlight: true
    },
    {
      feature: "ಚಿನ್ನ ಹಿಂತಿರುಗಿಸುವ ಭರವಸೆ (ಆರ್‌ಬಿಐ 2026)",
      otherLenders: "ಸಾಲ ತೀರಿದ ನಂತರವೂ ಚಿನ್ನ ಪಡೆಯಲು ವಿಳಂಬ",
      shreeVarahi: "7 ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ ಚಿನ್ನ ಮರುಪಾವತಿ ಖಾತರಿ (ವಿಳಂಬಕ್ಕೆ ದಿನಕ್ಕೆ ₹5,000 ದಂಡ)",
      isHighlight: true
    },
    {
      feature: "ಆದಾಯ / ಸಿಬಿಲ್ (CIBIL) ಸ್ಕೋರ್ ಅಗತ್ಯ",
      otherLenders: "ಸಿಬಿಲ್ ಸ್ಕೋರ್ ಅಥವಾ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ಕೇಳುತ್ತಾರೆ",
      shreeVarahi: "ಯಾವುದೇ ಸಿಬಿಲ್ ಸ್ಕೋರ್ ಅಗತ್ಯವಿಲ್ಲ, ಮೂಲ ಕೆವೈಸಿ (KYC) ಸಾಕು"
    }
  ] : COMPARISON_DATA;

  return (
    <section id="comparison" className="scroll-mt-28 lg:scroll-mt-36 py-16 lg:py-24 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      
      {/* Background Vector SVG & Ambient Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Ambient Gradient Glows */}
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Vector Geometric SVG Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="comparison-vector-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d97706" strokeWidth="1" />
              <circle cx="20" cy="20" r="1.5" fill="#b45309" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#comparison-vector-grid)" />
        </svg>

        {/* Floating Check / Shield Vector Watermark */}
        <svg className="absolute top-10 left-10 w-72 h-72 text-amber-500/5 pointer-events-none hidden lg:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1DB0F0] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-[#1DB0F0]" />
            <span>{t('compareBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t('compareTitle')}{' '}
            <span className="text-[#1DB0F0]">{t('compareTitleHighlight')}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('compareSubtitle')}
          </p>
        </div>

        {/* Operational Schemes & Key Pillars (Matching Reference) */}
        <div className="mt-10 bg-slate-50/80 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
          
          {/* 4 Feature Badges Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-start">
            
            {/* 1. Zero Extra Charges */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-red-600 bg-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-red-500 transition-all duration-300 relative">
                {/* Yellow circle backdrop inside */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-amber-400/90 flex items-center justify-center relative overflow-hidden">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900">₹</span>
                  {/* Diagonal Red Slash line */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-1 bg-red-600 transform -rotate-45 shadow-xs" />
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-base sm:text-lg font-black text-slate-900 leading-snug">
                {language === 'kn' ? 'ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ಶುಲ್ಕಗಳಿಲ್ಲ' : 'Zero extra charges'}
              </h3>
              <p className="mt-1 text-xs text-slate-500 max-w-[180px]">
                {language === 'kn' ? 'ಯಾವುದೇ ರಹಸ್ಯ ಮೌಲ್ಯಮಾಪನ ಅಥವಾ ಪ್ರಕ್ರಿಯೆ ಶುಲ್ಕಗಳಿಲ್ಲ' : '100% transparent with zero hidden administrative costs'}
              </p>
            </div>

            {/* 2. Maximum Loan Amount Per Gram */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-red-600 bg-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-red-500 transition-all duration-300">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-amber-50 flex flex-col items-center justify-center relative">
                  {/* Crown + Ring SVG */}
                  <svg className="w-10 h-10 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {/* Crown */}
                    <path d="M4 10l3-3 5 4 5-4 3 3v2H4v-2z" fill="#f59e0b" stroke="#d97706" />
                    {/* Ring / Coin */}
                    <circle cx="12" cy="16" r="4" fill="#fbbf24" stroke="#b45309" strokeWidth="1.5" />
                    <text x="12" y="17.5" textAnchor="middle" fontSize="4.5" fontWeight="bold" fill="#78350f">₹</text>
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-base sm:text-lg font-black text-slate-900 leading-snug">
                {language === 'kn' ? 'ಪ್ರತಿ ಗ್ರಾಂಗೆ ಗರಿಷ್ಠ ಸಾಲದ ಮೊತ್ತ' : 'Maximum loan amount per gram'}
              </h3>
              <p className="mt-1 text-xs text-slate-500 max-w-[180px]">
                {language === 'kn' ? 'ಆರ್‌ಬಿಐ ನಿಯಮಗಳಂತೆ ಶೇಕಡಾ 85% ವರೆಗೆ ಗರಿಷ್ಠ ಮೌಲ್ಯ' : 'Highest per-gram valuation locked to live market darsan'}
              </p>
            </div>

            {/* 3. Loan Available for 1 Year Duration */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-red-600 bg-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-red-500 transition-all duration-300">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-amber-50 flex flex-col items-center justify-center relative">
                  {/* Calendar with number 1 */}
                  <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="3" fill="#ffffff" stroke="#dc2626" strokeWidth="2" />
                    <path d="M3 9h18" stroke="#dc2626" strokeWidth="2" />
                    <path d="M8 2v4M16 2v4" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
                    <text x="12" y="18" textAnchor="middle" fontSize="8" fontWeight="900" fill="#dc2626" stroke="none">1</text>
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-base sm:text-lg font-black text-slate-900 leading-snug">
                {language === 'kn' ? '1 ವರ್ಷದ ಅವಧಿಗೆ ಸಾಲ ಸೌಲಭ್ಯ' : 'Loan available for 1 year duration'}
              </h3>
              <p className="mt-1 text-xs text-slate-500 max-w-[180px]">
                {language === 'kn' ? 'ಫ್ಲೆಕ್ಸಿಬಲ್ 12 ತಿಂಗಳ ಅವಧಿ ಮತ್ತು ಸುಲಭ ನವೀಕರಣ' : 'Flexible 12-month tenure with easy annual rollover option'}
              </p>
            </div>

            {/* 4. Instant Disbursement */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-red-600 bg-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-red-500 transition-all duration-300">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-amber-50 flex flex-col items-center justify-center relative">
                  {/* Instant Money Transfer SVG */}
                  <svg className="w-10 h-10 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="6" width="14" height="12" rx="2" fill="#ffffff" stroke="#dc2626" strokeWidth="1.5" />
                    <circle cx="9" cy="12" r="2.5" fill="#f59e0b" stroke="#d97706" strokeWidth="1" />
                    <path d="M16 10l4 2-4 2" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 12h7" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <h3 className="mt-4 text-base sm:text-lg font-black text-slate-900 leading-snug">
                {language === 'kn' ? 'ತಕ್ಷಣದ ಹಣ ಪಾವತಿ' : 'Instant Disbursement'}
              </h3>
              <p className="mt-1 text-xs text-slate-500 max-w-[180px]">
                {language === 'kn' ? 'ಚಿನ್ನ ವಿಮೋಚನೆಯಾದ ತಕ್ಷಣವೇ ನೇರ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ' : 'Direct bank transfer or cash payout upon gold release'}
              </p>
            </div>

          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[700px] table-fixed">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-900 text-white text-xs font-extrabold uppercase tracking-wider">
                <th className="py-5 px-6 w-1/3">
                  {language === 'kn' ? 'ವೈಶಿಷ್ಟ್ಯಗಳು / ಮಾನದಂಡಗಳು' : 'Feature / Parameter'}
                </th>
                <th className="py-5 px-6 text-red-400 w-1/3 bg-slate-900">
                  {language === 'kn' ? 'ಇತರ ಫೈನಾನ್ಸ್ / ಎನ್‌ಬಿಎಫ್‌ಸಿಗಳು' : 'Other NBFCs / Lenders'}
                </th>
                <th className="py-5 px-6 text-[#1DB0F0] w-1/3 bg-slate-950 border-l border-slate-800">
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="w-4 h-4 text-[#1DB0F0] flex-shrink-0" />
                    <span>{COMPANY_INFO.name}</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
              {localizedComparisonData.map((row, idx) => (
                <tr 
                  key={idx}
                  className={`hover:bg-slate-50 transition-colors ${
                    row.isHighlight ? 'bg-amber-50/20' : ''
                  }`}
                >
                  <td className="py-4 px-6 font-bold text-slate-900 w-1/3 align-top">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-slate-700 bg-red-50/30 w-1/3 font-medium align-top">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{row.otherLenders}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-emerald-900 font-extrabold bg-amber-50/60 border-l border-amber-200/80 w-1/3 align-top">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{row.shreeVarahi}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Call to Action Bar - Professional Polish Dark Card Accent */}
        <div className="mt-10 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              {language === 'kn' ? 'ಹೆಚ್ಚಿನ ಬಡ್ಡಿ ಪಾವತಿಸುವುದನ್ನು ತಕ್ಷಣವೇ ನಿಲ್ಲಿಸಿ' : 'Ready to Stop Paying Overpriced Interest?'}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              {language === 'kn' ? 'ಇಂದೇ ನಿಮ್ಮ ಸಾಲವನ್ನು ನಮಗೆ ವರ್ಗಾಯಿಸಿ ಮತ್ತು ಬಡ್ಡಿಯನ್ನು ಉಳಿಸಿ.' : 'Transfer your loan today with zero upfront hassle and instant payout.'}
            </p>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-3.5 rounded-full bg-[#1DB0F0]/90 hover:bg-[#1DB0F0] backdrop-blur-md border border-white/30 hover:border-white/60 text-white font-black text-xs sm:text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:brightness-110 transition-all duration-300 cursor-pointer uppercase tracking-wider whitespace-nowrap group active:scale-95"
          >
            <span className="drop-shadow-xs">
              {language === 'kn' ? 'ತಕ್ಷಣವೇ ಸಾಲ ವರ್ಗಾವಣೆ ಮಾಡಿ' : 'Apply For Takeover Now'}
            </span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

