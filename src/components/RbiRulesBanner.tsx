import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  Clock, 
  FileText, 
  Gavel, 
  CheckCircle2, 
  Sparkles,
  Award,
  ShieldCheck,
  Lock,
  Scale,
  Info,
  Zap,
  ChevronRight,
  X,
  Building2,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface RuleCard {
  id: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  highlightValue: string;
  highlightUnit: string;
  desc: string;
  tagline: string;
  rbiReference: string;
  fullRuleDetail: string;
  varahiBenefit: string;
}

export const RbiRulesBanner: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedRule, setSelectedRule] = useState<RuleCard | null>(null);
  const [activeTab, setActiveTab] = useState<'grid' | 'comparison'>('grid');

  const rbiRulesData: RuleCard[] = language === 'kn' ? [
    {
      id: '7-day-return',
      badge: 'ಕಟ್ಟುನಿಟ್ಟಾದ ನಿಯಮ',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      iconBg: 'bg-emerald-50 border-emerald-200 text-emerald-600',
      title: '7 ದಿನಗಳಲ್ಲಿ ಚಿನ್ನ ಮರುಹಿಂತಿರುಗಿಸುವ ನಿಯಮ',
      highlightValue: '7 ದಿನಗಳು',
      highlightUnit: 'ಗರಿಷ್ಠ ಕಾಲಮಿತಿ',
      desc: 'ಸಾಲ ಮರುಪಾವತಿ ಪೂರ್ಣಗೊಂಡ 7 ಕೆಲಸದ ದಿನಗಳೊಳಗೆ ಚಿನ್ನದ ಆಭರಣಗಳನ್ನು ಹಿಂತಿರುಗಿಸುವುದು ಕಡ್ಡಾಯವಾಗಿದೆ.',
      tagline: '100% ತ್ವರಿತ ಹಿಂತಿರುಗಿಸುವಿಕೆ',
      rbiReference: 'RBI/2026/FMR-14 - ಆರ್‌ಬಿಐ ನಿಯಮಾವಳಿ',
      fullRuleDetail: 'ಆರ್‌ಬಿಐ 2026 ರ ನಿಯಮಗಳ ಪ್ರಕಾರ, ಸಾಲ ಸಂಪೂರ್ಣವಾಗಿ ತೀರಿದ ನಂತರ ಎಲ್ಲಾ ಚಿನ್ನದ ಆಭರಣಗಳನ್ನು ತಕ್ಷಣವೇ ಹಿಂತಿರುಗಿಸಬೇಕು.',
      varahiBenefit: 'ಶ್ರೀ ವಾರಾಹಿ ಅಸೋಸಿಯೇಟ್ಸ್‌ನಲ್ಲಿ ನಾವು 24 ರಿಂದ 48 ಗಂಟೆಗಳ ಒಳಗೆ ನಿಮ್ಮ ಚಿನ್ನವನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಹಸ್ತಾಂತರಿಸುತ್ತೇವೆ.'
    },
    {
      id: 'delay-penalty',
      badge: 'ವಿಳಂಬ ಪರಿಹಾರ',
      badgeColor: 'text-amber-800 bg-amber-50 border-amber-200',
      icon: <ShieldAlert className="w-6 h-6 text-amber-600" />,
      iconBg: 'bg-amber-50 border-amber-200 text-amber-600',
      title: 'ದಿನಕ್ಕೆ ₹5,000 ವಿಳಂಬ ದಂಡ',
      highlightValue: '₹5,000',
      highlightUnit: 'ದಿನಪ್ರತಿ ಪರಿಹಾರ',
      desc: '7 ದಿನಗಳಿಗಿಂತ ಹೆಚ್ಚು ವಿಳಂಬವಾದರೆ, ಸಂಸ್ಥೆಯು ದಿನಕ್ಕೆ ₹5,000 ಪರಿಹಾರವನ್ನು ನೀಡಬೇಕಾಗುತ್ತದೆ.',
      tagline: 'ಕಾನೂನುಬದ್ಧ ಭದ್ರತೆ',
      rbiReference: 'RBI/2026/BC-92 - ಸಾಲಗಾರರ ಪರಿಹಾರ ನಿಯಮ',
      fullRuleDetail: 'ಸಾಲ ತೀರಿದ ನಂತರವೂ ಚಿನ್ನವನ್ನು ನೀಡಲು ವಿಳಂಬ ಮಾಡಿದರೆ, ದಿನಕ್ಕೆ ₹5,000 ದಂಡ ಪಾವತಿಸಬೇಕಾಗುತ್ತದೆ.',
      varahiBenefit: 'ನಾವು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ 100% ಚಿನ್ನದ ಮರುಪಾವತಿಯನ್ನು ಖಾತರಿಪಡಿಸುತ್ತೇವೆ.'
    },
    {
      id: 'kfs-transparency',
      badge: 'ಪಾರದರ್ಶಕತೆ',
      badgeColor: 'text-sky-800 bg-sky-50 border-sky-200',
      icon: <FileText className="w-6 h-6 text-[#1DB0F0]" />,
      iconBg: 'bg-sky-50 border-sky-200 text-[#1DB0F0]',
      title: 'ಕೀ ಫ್ಯಾಕ್ಟ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್ (KFS)',
      highlightValue: '0 ರಹಸ್ಯ',
      highlightUnit: 'ಶುಲ್ಕಗಳಿಲ್ಲ',
      desc: 'ಸಾಲದ ಎಲ್ಲಾ ಬಡ್ಡಿದರಗಳು ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ಸ್ಪಷ್ಟವಾಗಿ ದಾಖಲಿಸಿದ KFS ನೀಡುವುದು ಕಡ್ಡಾಯ.',
      tagline: 'ಸಂಪೂರ್ಣ ಪಾರದರ್ಶಕತೆ',
      rbiReference: 'RBI/2026/DOR-KFS-08 - ಪಾರದರ್ಶಕತೆ ನಿಯಮ',
      fullRuleDetail: 'KFS ನಲ್ಲಿ ಸಾಲದ ಎಲ್ಲಾ ದರಗಳು, ಒಟ್ಟು ವೆಚ್ಚಗಳು ಸ್ಪಷ್ಟವಾಗಿ ನಮೂದಾಗಿರುತ್ತವೆ.',
      varahiBenefit: 'ನಾವು ಸಾಲ ಪ್ರಕ್ರಿಯೆಗೆ ಮುನ್ನವೇ ಡಿಜಿಟಲ್ ಮತ್ತು ಪೇಪರ್ KFS ನೀಡುತ್ತೇವೆ.'
    },
    {
      id: 'auction-safeguards',
      badge: 'ನ್ಯಾಯಯುತ ಮೌಲ್ಯ',
      badgeColor: 'text-indigo-800 bg-indigo-50 border-indigo-200',
      icon: <Gavel className="w-6 h-6 text-indigo-600" />,
      iconBg: 'bg-indigo-50 border-indigo-200 text-indigo-600',
      title: 'ಹರಾಜು ಸುರಕ್ಷತಾ ನಿಯಮಗಳು',
      highlightValue: '90% ಕನಿಷ್ಠ',
      highlightUnit: 'ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯ',
      desc: 'ಚಿನ್ನದ ಹರಾಜಿಗೆ ಮುನ್ನ 14 ದಿನಗಳ ನೋಟಿಸ್ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯದ ಕನಿಷ್ಠ 90% ದರ ನಿಗದಿಪಡಿಸುವುದು ಕಡ್ಡಾಯ.',
      tagline: 'ಆಸ್ತಿಯ ಮೌಲ್ಯದ ರಕ್ಷಣೆ',
      rbiReference: 'RBI/2026/G-33 - ಹರಾಜು ನಿಯಮಾವಳಿ',
      fullRuleDetail: 'ಸಾಲ ಸುಸ್ತಿದಾರರಾದರೂ ಸಹ ಚಿನ್ನವನ್ನು ಕನಿಷ್ಠ ದರಕ್ಕಿಂತ ಕಡಿಮೆಗೆ ಮಾರಾಟ ಮಾಡುವಂತಿಲ್ಲ.',
      varahiBenefit: 'ನಾವು ಅನುಕೂಲಕರ ಸಮಯ ಮತ್ತು ಪುನರ್ರಚನೆ ಅವಕಾಶ ನೀಡುತ್ತೇವೆ.'
    }
  ] : [
    {
      id: '7-day-return',
      badge: 'Strict Timeline',
      badgeColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      iconBg: 'bg-emerald-50 border-emerald-200 text-emerald-600',
      title: '7-Day Gold Return Window',
      highlightValue: '7 Days',
      highlightUnit: 'Max Release Limit',
      desc: 'Lenders are legally mandated to release and hand over pledged gold ornaments within 7 working days of complete loan closure.',
      tagline: '100% Prompt Custody Release',
      rbiReference: 'RBI/2026/FMR-14 - Collateral Redelivery Mandate',
      fullRuleDetail: 'Under the 2026 RBI Master Direction on Fair Practices Code, non-banking financial companies (NBFCs) and gold loan providers must return all original pledged gold articles immediately upon full repayment of principal and interest, capped strictly at 7 business days.',
      varahiBenefit: 'At Shree Varahi, we complete gold retrieval and hand-over in as fast as 24 to 48 hours directly from our insured strong-room vaults.'
    },
    {
      id: 'delay-penalty',
      badge: 'Delay Protection',
      badgeColor: 'text-amber-800 bg-amber-50 border-amber-200',
      icon: <ShieldAlert className="w-6 h-6 text-amber-600" />,
      iconBg: 'bg-amber-50 border-amber-200 text-amber-600',
      title: '₹5,000 / Day Delay Compensation',
      highlightValue: '₹5,000',
      highlightUnit: 'Per Day Penalty to Lender',
      desc: 'If a lender delays returning your gold beyond 7 working days, they must pay you ₹5,000 per day in mandatory compensation.',
      tagline: 'Legal Financial Protection',
      rbiReference: 'RBI/2026/BC-92 - Borrower Compensation Framework',
      fullRuleDetail: 'To prevent lenders from holding pledged assets hostage post-settlement, the RBI enforces an automatic statutory penalty of ₹5,000 for every single day of unexcused delay beyond the 7-day cutoff.',
      varahiBenefit: 'We guarantee 100% on-time gold return receipts with complete date-stamped audit logs, ensuring zero anxiety for borrowers.'
    },
    {
      id: 'kfs-transparency',
      badge: 'Total Transparency',
      badgeColor: 'text-sky-800 bg-sky-50 border-sky-200',
      icon: <FileText className="w-6 h-6 text-[#1DB0F0]" />,
      iconBg: 'bg-sky-50 border-sky-200 text-[#1DB0F0]',
      title: 'Key Fact Statement (KFS)',
      highlightValue: '0 Extra',
      highlightUnit: 'Hidden Fees or Charges',
      desc: 'Lenders must issue a standardized KFS outlining the Annual Percentage Rate (APR), interest schedule, and zero hidden penal charges.',
      tagline: 'Transparent Fee Disclosure',
      rbiReference: 'RBI/2026/DOR-KFS-08 - Transparency Directive',
      fullRuleDetail: 'The Key Fact Statement (KFS) is a legally binding document that explicitly lists the total cost of credit, processing fees, storage fees, interest rate calculation formula, and repayment schedule in plain, easy-to-understand language.',
      varahiBenefit: 'Shree Varahi issues an instant digital & physical KFS before any takeover or loan transfer, ensuring complete clarity without surprises.'
    },
    {
      id: 'auction-safeguards',
      badge: 'Fair Valuation',
      badgeColor: 'text-indigo-800 bg-indigo-50 border-indigo-200',
      icon: <Gavel className="w-6 h-6 text-indigo-600" />,
      iconBg: 'bg-indigo-50 border-indigo-200 text-indigo-600',
      title: 'Auction Reserve Safeguards',
      highlightValue: '90% Floor',
      highlightUnit: 'Min Reserve Market Value',
      desc: 'Prevents distress sales. Mandates 14-day advance public notice with a minimum auction floor set at 90% of current gold market rate.',
      tagline: 'Protects Asset Equity',
      rbiReference: 'RBI/2026/G-33 - Auction Fair Reserve Norms',
      fullRuleDetail: 'In extreme cases of default, lenders cannot arbitrarily sell gold at throwaway prices. The RBI mandates a strict 14-day prior written notice, public advertisement, and a reserve floor price of at least 90% of the average gold price of the preceding 30 days.',
      varahiBenefit: 'We offer flexible extension terms and proactive interest restructuring so you never face default or asset liquidation.'
    }
  ];

  return (
    <section id="benefits" className="scroll-mt-28 lg:scroll-mt-36 py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative overflow-hidden border-y border-slate-200/80">
      
      {/* Light Theme Dynamic Ambient Vector SVG & Glow Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-3xl" />

        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="rbi-grid-pattern-light" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0284c7" strokeWidth="0.75" />
              <circle cx="48" cy="48" r="1" fill="#059669" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rbi-grid-pattern-light)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold uppercase tracking-widest shadow-xs">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>{t('rbiSectionBadge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            {t('rbiSectionTitle')}<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-[#1DB0F0] to-amber-600">
              {t('rbiSectionTitleHighlight')}
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            {t('rbiSectionSubtitle')}
          </p>

          {/* Interactive Mode Switcher Tabs */}
          <div className="pt-2 flex justify-center">
            <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 inline-flex space-x-1.5 shadow-inner relative">
              <button
                onClick={() => setActiveTab('grid')}
                className={`relative z-10 flex items-center space-x-2 px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm cursor-pointer uppercase tracking-wider transition-colors duration-200 ${
                  activeTab === 'grid' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {activeTab === 'grid' && (
                  <motion.div
                    layoutId="activeRbiTabPillLight"
                    className="absolute inset-0 bg-[#1DB0F0] rounded-xl shadow-md"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <ShieldCheck className="w-4 h-4 z-10 relative" />
                <span className="z-10 relative">{language === 'kn' ? '4 ಪ್ರಮುಖ ಆರ್‌ಬಿಐ ಹಕ್ಕುಗಳು' : '4 Core RBI Rights'}</span>
              </button>

              <button
                onClick={() => setActiveTab('comparison')}
                className={`relative z-10 flex items-center space-x-2 px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm cursor-pointer uppercase tracking-wider transition-colors duration-200 ${
                  activeTab === 'comparison' ? 'text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {activeTab === 'comparison' && (
                  <motion.div
                    layoutId="activeRbiTabPillLight"
                    className="absolute inset-0 bg-[#1DB0F0] rounded-xl shadow-md"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <Scale className="w-4 h-4 z-10 relative" />
                <span className="z-10 relative">{language === 'kn' ? 'ಶ್ರೀ ವಾರಾಹಿ vs ಇತರರು' : 'Shree Varahi vs Others'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Feature Hero Vault Banner for Trust */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white text-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* Visual Vault Image Column */}
            <div className="md:col-span-5 relative h-56 md:h-full min-h-[240px] group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
                alt="Vault & Security" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/10 to-slate-900/30 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent md:hidden" />
              
              {/* Badge overlay */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-lg bg-white/95 border border-emerald-200 text-emerald-800 font-extrabold text-[11px] uppercase tracking-wider flex items-center gap-1.5 shadow-md backdrop-blur-xs">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Dual-Control Strong Room</span>
                </span>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-7 p-6 sm:p-8 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% Safe Collateral Guarantee</span>
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900">
                Bank-Grade Vault Security & Weight Guarantee
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Your ornaments are stored in dual-control electronic strong rooms with comprehensive burglary insurance, 24/7 HD CCTV surveillance, tamper-evident security pouches, and precise weight tracking receipts.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-extrabold">
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-800">24/7 CCTV & Motion Alarm Monitored</span>
                </div>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="text-slate-800">Full Replacement Market Value Insured</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Tab Content 1: 4 Core RBI Rights Cards Grid */}
        <AnimatePresence mode="wait">
          {activeTab === 'grid' ? (
            <motion.div
              key="grid-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {rbiRulesData.map((rule) => (
                <motion.div
                  key={rule.id}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  onClick={() => setSelectedRule(rule)}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 hover:border-[#1DB0F0]/60 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Card Glow Header */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${rule.iconBg} shadow-xs`}>
                        {rule.icon}
                      </div>

                      <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full border uppercase tracking-wider ${rule.badgeColor}`}>
                        {rule.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-[#1DB0F0] transition-colors leading-snug">
                        {rule.title}
                      </h3>
                      
                      <div className="mt-3 bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex items-baseline justify-between">
                        <span className="text-xl font-black text-slate-900">{rule.highlightValue}</span>
                        <span className="text-[10px] text-slate-500 font-bold uppercase">{rule.highlightUnit}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {rule.desc}
                    </p>
                  </div>

                  {/* Card Footer Action Link */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1DB0F0] group-hover:text-sky-600 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5" />
                      <span>{rule.tagline}</span>
                    </span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Tab Content 2: Comparison View Table */
            <motion.div
              key="comparison-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">2026 RBI Compliance Matrix</h3>
                  <p className="text-xs text-slate-500">Comparing Shree Varahi Associates against unorganized local lenders & standard market gold loan providers.</p>
                </div>
                <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                  ✓ 100% RBI Compliant
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                      <th className="py-3 px-4">Feature / Protection</th>
                      <th className="py-3 px-4 text-emerald-800 bg-emerald-50/80 rounded-t-xl">Shree Varahi (RBI Compliant)</th>
                      <th className="py-3 px-4 text-amber-800">Standard NBFC Lenders</th>
                      <th className="py-3 px-4 text-rose-800">Unregulated Pawnbrokers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Gold Return Timeline</td>
                      <td className="py-3.5 px-4 bg-emerald-50/40 text-emerald-800 font-extrabold">24 - 48 Hours (Max 7 Days)</td>
                      <td className="py-3.5 px-4 text-slate-600">7 to 15 Days</td>
                      <td className="py-3.5 px-4 text-rose-600">30+ Days / Uncertain</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Delay Penalty Guarantee</td>
                      <td className="py-3.5 px-4 bg-emerald-50/40 text-emerald-800 font-extrabold">₹5,000 / Day Strict Fine</td>
                      <td className="py-3.5 px-4 text-slate-600">Case-by-Case Appeal</td>
                      <td className="py-3.5 px-4 text-rose-600">No Penalty Payable</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Key Fact Statement (KFS)</td>
                      <td className="py-3.5 px-4 bg-emerald-50/40 text-emerald-800 font-extrabold">Mandatory Full KFS Issued</td>
                      <td className="py-3.5 px-4 text-slate-600">Basic Receipt Provided</td>
                      <td className="py-3.5 px-4 text-rose-600">None / Informal Slip</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Vault Custody & Insurance</td>
                      <td className="py-3.5 px-4 bg-emerald-50/40 text-emerald-800 font-extrabold">Dual-Control Strong Room + 100% Insured</td>
                      <td className="py-3.5 px-4 text-slate-600">Standard Vault Storage</td>
                      <td className="py-3.5 px-4 text-rose-600">Uninsured Safe / Lockers</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 font-bold text-slate-900">Interest Rates</td>
                      <td className="py-3.5 px-4 bg-emerald-50/40 text-emerald-800 font-extrabold">From 0.83% - 1% / Month</td>
                      <td className="py-3.5 px-4 text-slate-600">1.5% - 2% / Month</td>
                      <td className="py-3.5 px-4 text-rose-600">3% - 5% / Month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal Popup for Rule Details */}
        <AnimatePresence>
          {selectedRule && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-xl w-full text-slate-900 shadow-2xl relative space-y-6"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedRule(null)}
                  className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header */}
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${selectedRule.iconBg}`}>
                    {selectedRule.icon}
                  </div>
                  <div>
                    <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${selectedRule.badgeColor}`}>
                      {selectedRule.badge}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-1">{selectedRule.title}</h3>
                  </div>
                </div>

                {/* RBI Reference Banner */}
                <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 flex items-center gap-2.5 text-xs text-amber-900 font-mono">
                  <ShieldCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span>{selectedRule.rbiReference}</span>
                </div>

                {/* Detailed Narrative */}
                <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#1DB0F0]">
                    Official RBI Regulation Detail:
                  </h4>
                  <p className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-700">
                    {selectedRule.fullRuleDetail}
                  </p>

                  <h4 className="font-extrabold text-xs uppercase tracking-wider text-emerald-700 pt-2">
                    Shree Varahi Commitment:
                  </h4>
                  <p className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200 text-emerald-950 font-medium">
                    {selectedRule.varahiBenefit}
                  </p>
                </div>

                {/* Modal Footer CTA */}
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedRule(null)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1DB0F0] hover:bg-sky-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                  >
                    Understood & Close
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

