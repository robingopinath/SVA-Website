import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_LIST, FAQ_LIST_KN } from '../data/companyData';
import { 
  Plus, 
  Minus, 
  Search, 
  HelpCircle, 
  Sparkles, 
  MessageSquare, 
  Phone, 
  ThumbsUp, 
  ThumbsDown, 
  Check, 
  Copy, 
  X, 
  Zap, 
  ShieldCheck, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FaqSectionProps {
  onOpenEnquiry?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenEnquiry }) => {
  const { language, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<string, boolean | null>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentFaqList = language === 'kn' ? FAQ_LIST_KN : FAQ_LIST;

  const categories = [
    { id: 'all', label: language === 'kn' ? 'ಎಲ್ಲಾ ಪ್ರಶ್ನೆಗಳು' : 'All Questions', count: currentFaqList.length },
    { id: 'transfer', label: language === 'kn' ? 'ಸಾಲ ವರ್ಗಾವಣೆ' : 'Loan Takeover', count: currentFaqList.filter(f => f.category === 'transfer').length },
    { id: 'valuation', label: language === 'kn' ? 'ಮೌಲ್ಯಮಾಪನ & LTV' : 'Valuation & LTV', count: currentFaqList.filter(f => f.category === 'valuation').length },
    { id: 'rbi_rules', label: language === 'kn' ? '2026 ಆರ್‌ಬಿಐ ನಿಯಮಗಳು' : '2026 RBI Rules', count: currentFaqList.filter(f => f.category === 'rbi_rules').length },
    { id: 'safety', label: language === 'kn' ? 'ವಾಲ್ಟ್ ಸುರಕ್ಷತೆ' : 'Vault Safety', count: currentFaqList.filter(f => f.category === 'safety').length },
    { id: 'charges', label: language === 'kn' ? 'ಶುಲ್ಕಗಳು & ವೆಚ್ಚಗಳು' : 'Fees & Charges', count: currentFaqList.filter(f => f.category === 'charges').length },
  ];

  const filteredFaqs = currentFaqList.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleCopyAnswer = (id: string, text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFeedback = (id: string, isHelpful: boolean, e: React.MouseEvent) => {
    e.stopPropagation();
    setHelpfulFeedback(prev => ({ ...prev, [id]: isHelpful }));
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'transfer':
        return (
          <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-extrabold uppercase">
            {language === 'kn' ? 'ವರ್ಗಾವಣೆ' : 'Takeover'}
          </span>
        );
      case 'valuation':
        return (
          <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-extrabold uppercase">
            {language === 'kn' ? 'LTV & ಮೌಲ್ಯ' : 'LTV & Value'}
          </span>
        );
      case 'rbi_rules':
        return (
          <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-extrabold uppercase">
            {language === 'kn' ? 'ಆರ್‌ಬಿಐ 2026' : 'RBI 2026'}
          </span>
        );
      case 'safety':
        return (
          <span className="px-2.5 py-0.5 rounded-md bg-cyan-50 text-cyan-800 border border-cyan-200 text-[10px] font-extrabold uppercase">
            {language === 'kn' ? 'ವಾಲ್ಟ್ ಸುರಕ್ಷತೆ' : 'Vault Safety'}
          </span>
        );
      case 'charges':
        return (
          <span className="px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-200 text-[10px] font-extrabold uppercase">
            {language === 'kn' ? 'ಶೂನ್ಯ ಶುಲ್ಕ' : 'Zero Fees'}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="faq" className="scroll-mt-28 lg:scroll-mt-36 py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200/80">
      
      {/* Dynamic Background Mesh & Micro Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 left-1/3 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl" />
        
        <svg className="absolute inset-0 w-full h-full opacity-[0.035]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="faq-modern-mesh" width="36" height="36" patternUnits="userSpaceOnUse">
              <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#0284c7" strokeWidth="0.75" />
              <circle cx="36" cy="36" r="1" fill="#f59e0b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#faq-modern-mesh)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#1DB0F0] text-xs font-bold uppercase tracking-widest shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#1DB0F0]" />
            <span>{t('faqBadge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            {t('faqTitle')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB0F0] via-cyan-600 to-amber-600">
              {t('faqTitleHighlight')}
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            {t('faqSubtitle')}
          </p>
        </div>

        {/* Interactive Search & Filter Controls Bar */}
        <div className="space-y-4">
          
          {/* Light Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
            
            <input
              type="text"
              placeholder={language === 'kn' 
                ? "ಪ್ರಶ್ನೆಗಳನ್ನು ಹುಡುಕಿ (ಉದಾ: ಸಾಲ ವರ್ಗಾವಣೆ, ಬಡ್ಡಿ, ಆರ್‌ಬಿಐ, ಟಾಪ್-ಅಪ್)..." 
                : "Search questions (e.g. transfer, charges, RBI 7 days, top-up, LTV)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-28 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm placeholder-slate-400 focus:outline-none focus:border-[#1DB0F0] focus:ring-1 focus:ring-[#1DB0F0] shadow-sm transition-all"
            />

            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                title={language === 'kn' ? "ಹುಡುಕಾಟ ತೆರವುಗೊಳಿಸಿ" : "Clear Search"}
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <span className="absolute right-4 top-3.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 pointer-events-none">
                {language === 'kn' ? `${filteredFaqs.length} ಪ್ರಶ್ನೋತ್ತರಗಳು` : `${filteredFaqs.length} FAQs`}
              </span>
            )}
          </div>

          {/* Category Filter Tabs with Sliding Motion Pill */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative z-10 px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-colors duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-slate-900 bg-white border border-slate-200 shadow-xs'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFaqCategoryPillLight"
                      className="absolute inset-0 bg-[#1DB0F0] rounded-xl shadow-md"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="z-10 relative">{cat.label}</span>
                  <span className={`z-10 relative px-1.5 py-0.2 rounded text-[10px] ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion FAQ Cards List */}
        <div className="space-y-3 pt-2">
          {filteredFaqs.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-white rounded-3xl border border-slate-200 text-slate-500 space-y-3 shadow-sm"
            >
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-sm font-semibold">
                {language === 'kn' 
                  ? `"${searchQuery}" ಗೆ ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳು ಕಂಡುಬಂದಿಲ್ಲ.` 
                  : `No questions matched "${searchQuery}".`}
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors cursor-pointer"
              >
                {language === 'kn' ? 'ಹುಡುಕಾಟ ಫಿಲ್ಟರ್ ಮರುಹೊಂದಿಸಿ' : 'Reset Search Filters'}
              </button>
            </motion.div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = expandedId === faq.id;
              const feedback = helpfulFeedback[faq.id];
              const isCopied = copiedId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  layout
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#1DB0F0] shadow-xl ring-1 ring-[#1DB0F0]/20'
                      : 'bg-white/90 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs'
                  }`}
                >
                  {/* Card Header Question Toggle */}
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center space-x-3">
                      {getCategoryBadge(faq.category)}
                      <span className="font-extrabold text-sm sm:text-base text-slate-900 hover:text-[#1DB0F0] transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#1DB0F0] text-white rotate-180 shadow-md' 
                        : 'bg-slate-100 text-slate-500 group-hover:text-slate-900'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {/* Expandable Body Content with Smooth Height Transition */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed space-y-4">
                          
                          {/* Answer Paragraph */}
                          <p className="text-slate-700 font-normal leading-relaxed">
                            {faq.answer}
                          </p>

                          {/* Highlight Banner */}
                          {faq.highlightText && (
                            <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200 text-[#1DB0F0] text-xs font-bold flex items-center gap-2.5 shadow-xs">
                              <Sparkles className="w-4 h-4 flex-shrink-0 text-[#1DB0F0]" />
                              <span>{faq.highlightText}</span>
                            </div>
                          )}

                          {/* Footer Micro Action Toolbar */}
                          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                            
                            {/* Copy Answer Button */}
                            <button
                              onClick={(e) => handleCopyAnswer(faq.id, faq.answer, e)}
                              className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer text-[11px] font-semibold"
                            >
                              {isCopied ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                                  <span className="text-emerald-700 font-bold">
                                    {language === 'kn' ? 'ನಕಲಿಸಲಾಗಿದೆ!' : 'Copied to Clipboard!'}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>{language === 'kn' ? 'ಉತ್ತರವನ್ನು ನಕಲಿಸಿ' : 'Copy Answer'}</span>
                                </>
                              )}
                            </button>

                            {/* Helpfulness Feedback Buttons */}
                            <div className="flex items-center space-x-2 text-[11px]">
                              <span>{language === 'kn' ? 'ಈ ಉತ್ತರ ಉಪಯುಕ್ತವಾಗಿದೆಯೇ?' : 'Was this helpful?'}</span>
                              <button
                                onClick={(e) => handleFeedback(faq.id, true, e)}
                                className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                                  feedback === true
                                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-500'
                                }`}
                                title={language === 'kn' ? 'ಹೌದು' : 'Yes'}
                              >
                                <ThumbsUp className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={(e) => handleFeedback(faq.id, false, e)}
                                className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                                  feedback === false
                                    ? 'bg-rose-50 border-rose-300 text-rose-700'
                                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-500'
                                }`}
                                title={language === 'kn' ? 'ಇಲ್ಲ' : 'No'}
                              >
                                <ThumbsDown className="w-3.5 h-3.5" />
                              </button>

                              {feedback !== undefined && (
                                <span className="text-[10px] text-emerald-700 font-bold ml-1">
                                  {language === 'kn' ? 'ನಿಮ್ಮ ಪ್ರತಿಕ್ರಿಯೆಗೆ ಧನ್ಯವಾದಗಳು!' : 'Thanks for feedback!'}
                                </span>
                              )}
                            </div>

                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Trendy Still Have Questions Support Box */}
        <div className="mt-12 bg-gradient-to-r from-sky-50 via-white to-amber-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-1.5 text-center md:text-left z-10">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200 text-[11px] font-extrabold uppercase tracking-wider inline-block">
              {language === 'kn' ? 'ವ್ಯಕ್ತಿಗತ ನೆರವು ಬೇಕೇ?' : 'Need Personal Assistance?'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {language === 'kn' 
                ? 'ನಿಮ್ಮ ಚಿನ್ನದ ಸಾಲದ ಬಗ್ಗೆ ನಿರ್ದಿಷ್ಟ ಪ್ರಶ್ನೆಗಳಿವೆಯೇ?' 
                : 'Have a Specific Question About Your Gold Loan?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {language === 'kn' 
                ? 'ನಮ್ಮ ಸಾಲ ತಜ್ಞರು ಫೋನ್ ಮತ್ತು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ತಕ್ಷಣ ನೆರವಾಗಲು ಲಭ್ಯವಿದ್ದಾರೆ.' 
                : 'Our loan specialists are available on phone & WhatsApp to assist you instantly.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 z-10">
            <a
              href="https://wa.me/919945166614"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center space-x-2 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{language === 'kn' ? 'ವಾಟ್ಸಾಪ್ ಮಾಡಿ' : 'WhatsApp Us'}</span>
            </a>

            {onOpenEnquiry && (
              <button
                onClick={onOpenEnquiry}
                className="px-5 py-3 rounded-2xl bg-[#1DB0F0] hover:bg-sky-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-md flex items-center space-x-2 transition-all cursor-pointer"
              >
                <span>{language === 'kn' ? 'ಕಾಲ್ ಬ್ಯಾಕ್ ಕೋರಿ' : 'Request Call Back'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

