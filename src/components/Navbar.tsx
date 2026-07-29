import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ShieldCheck, Sparkles, Calculator, ArrowRight, Home, Globe } from 'lucide-react';
import { SvaLogo } from './SvaLogo';
import { COMPANY_INFO } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenEnquiry: (prefillData?: any) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, toggleLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerEl = document.querySelector('header');
      const headerOffset = headerEl ? headerEl.offsetHeight + 16 : 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const logoUrl = "https://lh3.googleusercontent.com/d/1r4z2-FK-je8cGpi4fTQgqZgP9S9YBPNO";
  const logoFallbackUrl = "https://drive.google.com/uc?export=view&id=1r4z2-FK-je8cGpi4fTQgqZgP9S9YBPNO";

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-slate-900 text-slate-200 px-4 py-2 text-xs font-medium border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto whitespace-nowrap scrollbar-none">
          <div className="flex items-center space-x-4 flex-shrink-0">
            <span className="flex items-center space-x-1.5 whitespace-nowrap bg-blue-500/20 text-[#1DB0F0] px-2.5 py-0.5 rounded-full font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1DB0F0]" />
              <span>{t('gstin')}: {COMPANY_INFO.gstin}</span>
            </span>
            <span className="hidden sm:inline-flex items-center space-x-1 text-slate-300 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-[#1DB0F0]" />
              <span>{t('addressShort')}</span>
            </span>
            <span className="hidden md:inline-flex items-center space-x-1 text-slate-300 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#1DB0F0]" />
              <span>{t('rbiCompliantShort')}</span>
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs font-semibold flex-shrink-0 whitespace-nowrap">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center space-x-1.5 text-[#1DB0F0] hover:text-blue-300 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 fill-current text-[#1DB0F0]" />
              <span>{COMPANY_INFO.phoneFormatted}</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden lg:inline-flex items-center space-x-1 text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 min-h-[92px] gap-4">
          
          {/* Logo & Brand Name - Logo on Top, Name Below, Tagline on Next Line */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-center justify-center cursor-pointer group flex-shrink-0 text-center py-1"
          >
            {/* Custom Updated Logo Image on Top */}
            <div className="relative flex items-center justify-center h-10 w-auto flex-shrink-0 mb-0.5">
              <SvaLogo 
                src={logoUrl} 
                fallbackSrc={logoFallbackUrl}
                alt="Shree Varahi Associates" 
                className="h-9 sm:h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </div>

            <div className="flex flex-col items-center whitespace-nowrap">
              <h1 className="text-xs sm:text-sm md:text-base font-black font-brand text-slate-900 tracking-tight group-hover:text-[#1DB0F0] transition-colors whitespace-nowrap leading-snug">
                {t('brandName')}
              </h1>
              <p className="text-[8px] sm:text-[9.5px] text-slate-500 font-extrabold font-sans tracking-wider uppercase whitespace-nowrap leading-tight">
                {t('brandTagline')}
              </p>
            </div>
          </div>

          {/* Desktop Right Column: Top Extreme Right Buttons (Language Toggle + Apply) + Bottom Nav Links */}
          <div className="hidden lg:flex flex-col items-end justify-center space-y-1.5 flex-shrink-0">
            
            <div className="flex items-center space-x-2.5">
              {/* Language Toggle Button (Translucent Glassmorphism next to Apply Button) */}
              <div className="inline-flex items-center p-0.5 rounded-full bg-slate-100/90 backdrop-blur-md border border-slate-200/90 shadow-inner">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded-full text-xs font-black transition-all cursor-pointer ${
                    language === 'en'
                      ? 'bg-[#1DB0F0] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('kn')}
                  className={`px-2.5 py-1 rounded-full text-xs font-black transition-all cursor-pointer ${
                    language === 'kn'
                      ? 'bg-[#1DB0F0] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ಕನ್ನಡ
                </button>
              </div>

              {/* Extreme Right Top: APPLY FOR TAKEOVER -> Button */}
              <button
                onClick={() => onOpenEnquiry()}
                className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-[#1DB0F0]/90 hover:bg-[#1DB0F0] backdrop-blur-md border border-white/30 hover:border-white/60 text-white font-black text-xs shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:brightness-110 transition-all duration-300 transform active:scale-95 cursor-pointer uppercase tracking-wider whitespace-nowrap group"
              >
                <span className="whitespace-nowrap drop-shadow-xs">{t('applyTakeover')}</span>
                <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Single Line Nav Links */}
            <nav className="flex items-center space-x-2 xl:space-x-2.5 px-3.5 py-1.5 bg-slate-900 rounded-xl border border-blue-500/40 shadow-md text-xs font-bold text-slate-200 whitespace-nowrap">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center space-x-1 hover:text-[#1DB0F0] transition-colors cursor-pointer whitespace-nowrap ${
                  activeSection === 'home' || activeSection === '' ? 'text-[#1DB0F0] font-extrabold' : 'text-slate-200'
                }`}
              >
                <Home className="w-3.5 h-3.5 text-[#1DB0F0] flex-shrink-0" />
                <span>{t('navHome')}</span>
              </button>

              <span className="text-[#266DD3] font-semibold select-none">|</span>

              <button
                onClick={() => scrollToSection('calculator')}
                className={`flex items-center space-x-1 hover:text-[#1DB0F0] transition-colors cursor-pointer whitespace-nowrap ${
                  activeSection === 'calculator' ? 'text-[#1DB0F0] font-extrabold' : 'text-slate-200'
                }`}
              >
                <Calculator className="w-3.5 h-3.5 text-[#1DB0F0] flex-shrink-0" />
                <span>{t('navCalculator')}</span>
              </button>

              <span className="text-[#266DD3] font-semibold select-none">|</span>

              <button
                onClick={() => scrollToSection('process')}
                className={`hover:text-[#1DB0F0] transition-colors cursor-pointer whitespace-nowrap ${
                  activeSection === 'process' ? 'text-[#1DB0F0] font-extrabold' : 'text-slate-200'
                }`}
              >
                <span>{t('navProcess')}</span>
              </button>

              <span className="text-[#266DD3] font-semibold select-none">|</span>

              <button
                onClick={() => scrollToSection('comparison')}
                className={`hover:text-[#1DB0F0] transition-colors cursor-pointer whitespace-nowrap ${
                  activeSection === 'comparison' ? 'text-[#1DB0F0] font-extrabold' : 'text-slate-200'
                }`}
              >
                <span>{t('navWhyUs')}</span>
              </button>

              <span className="text-[#266DD3] font-semibold select-none">|</span>

              <button
                onClick={() => scrollToSection('benefits')}
                className={`hover:text-[#1DB0F0] transition-colors cursor-pointer whitespace-nowrap ${
                  activeSection === 'benefits' ? 'text-[#1DB0F0] font-extrabold' : 'text-slate-200'
                }`}
              >
                <span>{t('navRbiRules')}</span>
              </button>

              <span className="text-[#266DD3] font-semibold select-none">|</span>

              <button
                onClick={() => scrollToSection('faq')}
                className={`hover:text-[#1DB0F0] transition-colors cursor-pointer whitespace-nowrap ${
                  activeSection === 'faq' ? 'text-[#1DB0F0] font-extrabold' : 'text-slate-200'
                }`}
              >
                <span>{t('navFaqs')}</span>
              </button>

              <span className="text-[#266DD3] font-semibold select-none">|</span>

              <button
                onClick={() => scrollToSection('contact')}
                className={`hover:text-[#1DB0F0] transition-colors cursor-pointer whitespace-nowrap ${
                  activeSection === 'contact' ? 'text-[#1DB0F0] font-extrabold' : 'text-slate-200'
                }`}
              >
                <span>{t('navContact')}</span>
              </button>
            </nav>

          </div>

          {/* Mobile Right Action Buttons & Mobile Toggle */}
          <div className="flex lg:hidden items-center space-x-1.5 flex-shrink-0">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-extrabold text-xs flex items-center space-x-1"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#1DB0F0]" />
              <span>{language === 'en' ? 'ಕನ್ನಡ' : 'EN'}</span>
            </button>

            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center space-x-1.5 px-3 py-2 rounded-full bg-[#1DB0F0]/90 hover:bg-[#1DB0F0] backdrop-blur-md border border-white/30 text-white font-black text-xs shadow-lg shadow-sky-500/20 transition-all cursor-pointer uppercase tracking-wider whitespace-nowrap active:scale-95"
            >
              <span>{t('apply')}</span>
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 transition-colors border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500">Language / ಭಾಷೆ</span>
            <div className="inline-flex items-center p-0.5 rounded-full bg-slate-100 border border-slate-200">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full text-xs font-black ${
                  language === 'en' ? 'bg-[#1DB0F0] text-white' : 'text-slate-600'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('kn')}
                className={`px-3 py-1 rounded-full text-xs font-black ${
                  language === 'kn' ? 'bg-[#1DB0F0] text-white' : 'text-slate-600'
                }`}
              >
                ಕನ್ನಡ
              </button>
            </div>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full text-left flex items-center space-x-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-[#1DB0F0] text-sm font-bold"
          >
            <Home className="w-4 h-4 text-[#1DB0F0]" />
            <span>{t('navHome')}</span>
          </button>
          <button
            onClick={() => scrollToSection('calculator')}
            className="w-full text-left flex items-center space-x-3 px-3 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-[#1DB0F0] text-sm font-bold"
          >
            <Calculator className="w-4 h-4 text-[#1DB0F0]" />
            <span>{t('navCalculator')}</span>
          </button>
          <button
            onClick={() => scrollToSection('process')}
            className="w-full text-left px-3 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-[#1DB0F0] text-sm font-bold"
          >
            {t('navProcess')}
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            className="w-full text-left px-3 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-[#1DB0F0] text-sm font-bold"
          >
            {t('navRbiRules')}
          </button>
          <button
            onClick={() => scrollToSection('comparison')}
            className="w-full text-left px-3 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-[#1DB0F0] text-sm font-bold"
          >
            {t('navWhyUs')}
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="w-full text-left px-3 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-[#1DB0F0] text-sm font-bold"
          >
            {t('navFaqs')}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full text-left px-3 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-[#1DB0F0] text-sm font-bold"
          >
            {t('navContact')}
          </button>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-[#1DB0F0] text-white font-bold text-sm shadow-md uppercase tracking-wider"
            >
              <span>{t('applyTakeover')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

