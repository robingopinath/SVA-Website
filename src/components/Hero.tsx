import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  TrendingDown, 
  Coins, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  Sparkles,
  Zap,
  Building2
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenEnquiry: (prefillData?: any) => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onScrollToCalculator }) => {
  const { language, t } = useLanguage();
  const [quickAmount, setQuickAmount] = useState('200000');
  const [quickLender, setQuickLender] = useState('Muthoot / Manappuram');
  const [activeSentenceIndex, setActiveSentenceIndex] = useState(0);

  const heroSentences = language === 'kn' ? [
    {
      id: 1,
      content: (
        <>
          ನಿಮ್ಮ <span className="text-[#1DB0F0] font-black">ಚಿನ್ನದ ಸಾಲವನ್ನು</span> ನಮ್ಮಲ್ಲಿ ವರ್ಗಾಯಿಸಿ & ಮಾಸಿಕ <span className="text-[#1DB0F0] font-black">ಬಡ್ಡಿ ಉಳಿಸಿ!</span>
        </>
      )
    },
    {
      id: 2,
      content: (
        <>
          <span className="text-[#1DB0F0] font-black">ಕಡಿಮೆ ಬಡ್ಡಿದರದಲ್ಲಿ</span> ಚಿನ್ನದ ಸಾಲ ಟೇಕ್‌ಓವರ್, <span className="text-[#1DB0F0] font-black">ಉತ್ತಮ ಭವಿಷ್ಯ</span>.
        </>
      )
    },
    {
      id: 3,
      content: (
        <>
          ನಿಮ್ಮ ಚಿನ್ನ, ನಮ್ಮ ಭದ್ರತೆ. <span className="text-[#1DB0F0] font-black">ಉತ್ತಮ ಸಾಲ</span>, <span className="text-[#1DB0F0] font-black">ಹೆಚ್ಚುವರಿ ನಗದು</span>.
        </>
      )
    },
    {
      id: 4,
      content: (
        <>
          ವಿಶ್ವಾಸಾರ್ಹ <span className="text-[#1DB0F0] font-black">ಚಿನ್ನದ ಸಾಲ ಟೇಕ್‌ಓವರ್</span> ಸೇವೆಗಳಿಗಾಗಿ <span className="text-[#1DB0F0] font-black">ಸಂಪರ್ಕಿಸಿ</span>.
        </>
      )
    }
  ] : [
    {
      id: 1,
      content: (
        <>
          Transfer Your Existing <span className="text-[#1DB0F0] font-black">Gold Loan</span> to Us & Save on <span className="text-[#1DB0F0] font-black">Monthly Interest!</span>
        </>
      )
    },
    {
      id: 2,
      content: (
        <>
          Move Your <span className="text-[#1DB0F0] font-black">Gold Loan</span>. Move Towards <span className="text-[#1DB0F0] font-black">Better Benefits</span>.
        </>
      )
    },
    {
      id: 3,
      content: (
        <>
          Your Gold. Our Support. <span className="text-[#1DB0F0] font-black">Better Loan</span>, <span className="text-[#1DB0F0] font-black">Better Future</span>.
        </>
      )
    },
    {
      id: 4,
      content: (
        <>
          Helping You Move Your <span className="text-[#1DB0F0] font-black">Gold Loan</span> with <span className="text-[#1DB0F0] font-black">Confidence</span>.
        </>
      )
    }
  ];

  // Auto rotate sentences every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSentenceIndex((prevIndex) => (prevIndex + 1) % heroSentences.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [heroSentences.length]);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenEnquiry({
      existingLoanAmount: quickAmount,
      currentLender: quickLender
    });
  };

  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-5 pb-10 lg:pt-8 lg:pb-14 border-b border-slate-200">
      {/* Rich Background Gradients & SVG Vector Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Ambient Gradient Glows */}
        <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

        {/* Vector SVG Geometric Grid & Diagonal Lines Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid-pattern" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#b45309" strokeWidth="1" />
              <circle cx="36" cy="36" r="1.5" fill="#d97706" />
            </pattern>
            <pattern id="hero-vector-mesh" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 0 72 L 72 0 M 0 0 L 72 72" fill="none" stroke="#d97706" strokeWidth="0.5" strokeDasharray="3 3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
          <rect width="100%" height="100%" fill="url(#hero-vector-mesh)" />
        </svg>

        {/* Subtle Decorative Vector Shield Emblem in Corner */}
        <svg className="absolute -top-12 -right-12 w-96 h-96 text-amber-500/10 pointer-events-none hidden lg:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Hero Main Messaging */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Top Pill Tag - Exact Metallic Gold Frame & Text */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FFFDF5] via-[#FFF7DB] to-[#FFFDF5] border border-[#D4AF37] text-[#855B00] text-xs font-bold uppercase tracking-widest shadow-xs">
              <Sparkles className="w-4 h-4 text-[#C59B27]" />
              <span className="font-extrabold text-[#785200]">{t('heroBadge')}</span>
            </div>

            {/* Animated Headline Container */}
            <div className="min-h-[110px] sm:min-h-[130px] md:min-h-[145px] lg:min-h-[160px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={heroSentences[activeSentenceIndex].id}
                  initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900"
                >
                  {heroSentences[activeSentenceIndex].content}
                </motion.h1>
              </AnimatePresence>

              {/* Interactive Sentence Indicators */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2.5">
                {heroSentences.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSentenceIndex(index)}
                    aria-label={`Show sentence ${index + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      index === activeSentenceIndex 
                        ? 'w-8 bg-amber-500 shadow-xs' 
                        : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {t('heroSubtitle')}
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-2xl border border-slate-200/80 shadow-xs">
                <TrendingDown className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">{t('heroStat1Title')}</span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-2xl border border-slate-200/80 shadow-xs">
                <Coins className="w-5 h-5 text-[#1DB0F0] flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">{t('heroStat3Title')}</span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-50 p-3 rounded-2xl border border-slate-200/80 shadow-xs col-span-2 sm:col-span-1">
                <ShieldCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">{t('heroStat4Title')}</span>
              </div>
            </div>

            {/* Action Buttons with Glassmorphic Accent */}
            <div className="relative flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-sky-500/15 to-amber-500/10 rounded-2xl blur-xl opacity-70 pointer-events-none" />

              <button
                onClick={onScrollToCalculator}
                className="relative z-10 w-full sm:w-auto px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center space-x-2 cursor-pointer uppercase tracking-wider active:scale-95"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>{t('heroCalcBtn')}</span>
              </button>

              {/* Glassmorphic Call Button */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="relative z-10 w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/10 hover:bg-slate-900/20 backdrop-blur-md border border-slate-900/20 hover:border-slate-900/40 shadow-lg hover:shadow-xl hover:brightness-110 text-slate-900 font-black text-sm transition-all duration-300 flex items-center justify-center space-x-2.5 uppercase tracking-wider cursor-pointer group active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-amber-600 group-hover:scale-110 transition-transform" />
                <span className="text-slate-900 font-black tracking-wider drop-shadow-2xs">{t('heroCallBtn')}: {COMPANY_INFO.phoneFormatted}</span>
              </a>
            </div>

            {/* RBI 2026 Guarantee Badges */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-semibold text-slate-500">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{language === 'kn' ? 'ಯಾವುದೇ ರಹಸ್ಯ ಶುಲ್ಕಗಳಿಲ್ಲ' : 'Zero Hidden Extra Charges'}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{language === 'kn' ? '2026 ಆರ್‌ಬಿಐ ನಿಯಮಾನುಸಾರ (85% LTV)' : '2026 RBI Tiered LTV (Up to 85%)'}</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{language === 'kn' ? '100% ಸುಲಭ ಮತ್ತು ವೇಗದ ಸೇವೆ' : 'Same-Day Fast Processing'}</span>
              </span>
            </div>

          </div>

          {/* Right Hero Interactive Lead Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#1DB0F0]" />
                    <span>{language === 'kn' ? 'ತ್ವರಿತ ಅಂದಾಜು ಲೆಕ್ಕಾಚಾರ' : 'Quick Takeover Estimate'}</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {language === 'kn' ? 'ಬಡ್ಡಿ ಉಳಿತಾಯ ಉಚಿತ ಅಂದಾಜು ಪಡೆಯಿರಿ' : 'Get instant payout & interest rate quotes'}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                  {language === 'kn' ? 'ತ್ವರಿತ ಅಂದಾಜು' : 'Instant Quote'}
                </span>
              </div>

              <form onSubmit={handleQuickSubmit} className="mt-5 space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    {language === 'kn' ? 'ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಬ್ಯಾಂಕ್ / ಫೈನಾನ್ಸ್' : 'Your Current Loan Provider'}
                  </label>
                  <select
                    value={quickLender}
                    onChange={(e) => setQuickLender(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-semibold text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="Muthoot Finance">Muthoot Finance</option>
                    <option value="Manappuram Finance">Manappuram Finance</option>
                    <option value="ICICI Bank / HDFC / SBI">Private / PSU Bank</option>
                    <option value="Local Pawn Broker / Jeweler">Local Pawn Broker / Jeweler</option>
                    <option value="Other Financial Institution">Other NBFC / Financial Company</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    {language === 'kn' ? 'ಪ್ರಸ್ತುತ ಸಾಲದ ಮೊತ್ತ (₹)' : 'Current Outstanding Loan Amount (₹)'}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-slate-400 font-bold text-sm">₹</span>
                    <input
                      type="number"
                      value={quickAmount}
                      onChange={(e) => setQuickAmount(e.target.value)}
                      placeholder="e.g. 200000"
                      className="w-full pl-8 pr-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-bold focus:outline-none focus:border-amber-500"
                      required
                    />
                  </div>
                </div>

                {/* Simulated Quick Benefit Card */}
                <div className="bg-slate-900 text-white rounded-2xl p-4 space-y-2.5 shadow-md">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-medium">
                      {language === 'kn' ? 'ಅಂದಾಜು ಮಾಸಿಕ ಉಳಿತಾಯ:' : 'Estimated Monthly Savings:'}
                    </span>
                    <span className="font-extrabold text-emerald-400 text-sm">
                      ₹{Math.round(Number(quickAmount || 0) * 0.01).toLocaleString('en-IN')}/mo
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300 font-medium">
                      {language === 'kn' ? 'ಅಂದಾಜು ವಾರ್ಷಿಕ ಉಳಿತಾಯ:' : 'Est. Annual Interest Saved:'}
                    </span>
                    <span className="font-extrabold text-[#1DB0F0] text-sm">
                      ₹{Math.round(Number(quickAmount || 0) * 0.12).toLocaleString('en-IN')}/yr
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-400 text-center italic pt-1 border-t border-slate-800">
                    {language === 'kn' ? '*ವರ್ಗಾವಣೆಯ ಮೂಲಕ ಕಡಿಮೆ ಬಡ್ಡಿದರದ ಅಂದಾಜು.' : '*Based on switching to reduced interest rate.'}
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-4 rounded-xl bg-[#1DB0F0] hover:bg-sky-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer uppercase tracking-wider"
                >
                  <span>{language === 'kn' ? 'ಉಚಿತ ಕಾಲ್ ಬ್ಯಾಕ್ ಪಡೆಯಿರಿ' : 'Request Instant Takeover Call'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-slate-500 font-medium text-center flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1DB0F0]" />
                  <span>{language === 'kn' ? '100% ರಹಸ್ಯ ಮತ್ತು ಸುರಕ್ಷಿತ' : '100% Confidential • No CIBIL Impact'}</span>
                </p>

              </form>

            </div>

            {/* Gold Asset Trust Guarantee Banner */}
            <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-r from-blue-50/80 via-blue-100/30 to-blue-50/80 p-5 flex items-center gap-4 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=300&q=80" 
                alt="Gold Ornaments & Bullion" 
                referrerPolicy="no-referrer"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover flex-shrink-0 border border-blue-200 shadow-xs"
              />
              <div className="text-left text-xs">
                <span className="font-extrabold text-[#1DB0F0] block text-xs sm:text-sm uppercase tracking-wider">
                  {language === 'kn' ? 'ಚಿನ್ನದ ಸುರಕ್ಷತೆಯ ಭರವಸೆ' : 'Gold Asset Trust Guarantee'}
                </span>
                <p className="text-slate-700 font-medium leading-relaxed mt-1">
                  {language === 'kn' 
                    ? 'ನಿಮ್ಮ ಆಭರಣಗಳನ್ನು ನಿಮ್ಮ ಕಣ್ಣೆದುರೇ ಪರಿಶೀಲಿಸಿ, ಸುರಕ್ಷಿತ ಸೀಲರ್‌ಗಳಲ್ಲಿ ಇರಿಸಿ ಅತ್ಯುನ್ನತ ಭದ್ರತಾ ವಾಲ್ಟ್‌ನಲ್ಲಿ ಇಡಲಾಗುತ್ತದೆ.'
                    : 'Your jewelry is weighed in precision scales, sealed in tamper-evident security bags, and stored in RBI-certified strong rooms.'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
