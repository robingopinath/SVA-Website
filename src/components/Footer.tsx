import React from 'react';
import { SvaLogo } from './SvaLogo';
import { COMPANY_INFO } from '../data/companyData';
import { ShieldCheck, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <SvaLogo 
                src="https://lh3.googleusercontent.com/d/1r4z2-FK-je8cGpi4fTQgqZgP9S9YBPNO" 
                fallbackSrc="https://drive.google.com/uc?export=view&id=1r4z2-FK-je8cGpi4fTQgqZgP9S9YBPNO"
                alt="Shree Varahi Associates" 
                className="h-10 w-auto object-contain"
              />
              <div>
                <h4 className="font-black font-brand text-white text-base tracking-tight">
                  {COMPANY_INFO.name}
                </h4>
                <p className="text-[11px] text-[#1DB0F0] font-extrabold uppercase tracking-wider">
                  {language === 'kn' ? 'ಚಿನ್ನದ ಸಾಲ ಟೇಕ್‌ಓವರ್ ಸಂಸ್ಥೆ' : 'A Gold Loan Takeover Company'}
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed font-normal">
              {language === 'kn'
                ? 'ಬ್ಯಾಂಕ್‌ಗಳು ಮತ್ತು ಎನ್‌ಬಿಎಫ್‌ಸಿಗಳಿಂದ ನಿಮ್ಮ ಪ್ರಸ್ತುತ ಚಿನ್ನದ ಸಾಲವನ್ನು ನಮಗೆ ವರ್ಗಾಯಿಸಿ ಮತ್ತು ಕಡಿಮೆ ಬಡ್ಡಿ, ಹೆಚ್ಚು ಹಣವನ್ನು ಪಡೆಯಿರಿ.'
                : 'Transfer existing gold loans from banks & NBFCs to us for reduced monthly interest, longer tenure, and instant Top-Up cash in Mysore.'}
            </p>

            <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-[#1DB0F0] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span className="font-bold text-[11px]">GSTIN: {COMPANY_INFO.gstin}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-sm uppercase tracking-wider">
              {language === 'kn' ? 'ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು' : 'Quick Navigation'}
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#calculator" className="hover:text-[#1DB0F0] transition-colors">
                  {t('calcTabName')}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#1DB0F0] transition-colors">
                  {t('navProcess')}
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-[#1DB0F0] transition-colors">
                  {t('navRbiRules')}
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-[#1DB0F0] transition-colors">
                  {t('navWhyUs')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#1DB0F0] transition-colors">
                  {t('navFaqs')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Branch */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-sm uppercase tracking-wider">
              {language === 'kn' ? 'ಮೈಸೂರು ಶಾಖೆ ಸ್ಥಳ' : 'Mysore Branch Location'}
            </h5>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#1DB0F0] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:underline font-bold text-white">
                  {COMPANY_INFO.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline">
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Col 4: Regulatory Note */}
          <div className="space-y-3">
            <h5 className="font-bold text-white text-sm uppercase tracking-wider">
              {language === 'kn' ? 'ವಿಶ್ವಾಸಾರ್ಹತೆ ಮತ್ತು ಪಾರದರ್ಶಕತೆ' : 'Trust & Transparency'}
            </h5>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'kn' ? '2026 ಆರ್‌ಬಿಐ ನಿಯಮಾವಳಿಗಳಿಗೆ ಬದ್ಧವಾಗಿದೆ' : '2026 RBI Guidelines Compliant'}</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                {language === 'kn'
                  ? 'ಎಲ್ಲಾ ಚಿನ್ನದ ಆಭರಣಗಳನ್ನು 100% ವಿಮೆ ಹೊಂದಿರುವ ಸುರಕ್ಷಿತ ಬ್ಯಾಂಕ್ ಲಾಕರ್‌ಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಲಾಗುತ್ತದೆ.'
                  : 'All pledged gold ornaments are stored in electronically monitored, 100% insured bank vault strong-rooms. Mandatory Key Fact Statement (KFS) provided with zero hidden charges.'}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name} ({COMPANY_INFO.legalName}). All rights reserved.</p>
          <p>No. 423, 3rd Floor, Chamaraja Double Road, Near Ramaswamy Circle, Sunnadakeri, Rahmania Mohalla, Mysuru, Karnataka 570004</p>
        </div>

      </div>
    </footer>
  );
};
