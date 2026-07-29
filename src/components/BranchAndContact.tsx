import React from 'react';
import { SvaLogo } from './SvaLogo';
import { COMPANY_INFO } from '../data/companyData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Send, 
  ExternalLink, 
  MessageSquare,
  Building 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface BranchAndContactProps {
  onOpenEnquiry: () => void;
}

export const BranchAndContact: React.FC<BranchAndContactProps> = ({ onOpenEnquiry }) => {
  const { language, t } = useLanguage();
  const whatsappUrl = `https://wa.me/919945166614?text=Hello%20Shree%20Varahi%20Associates,%20I%20would%20like%20to%20enquire%20about%20a%20Gold%20Loan%20Takeover.`;
  const logoUrl = "https://lh3.googleusercontent.com/d/1r4z2-FK-je8cGpi4fTQgqZgP9S9YBPNO";
  const logoFallbackUrl = "https://drive.google.com/uc?export=view&id=1r4z2-FK-je8cGpi4fTQgqZgP9S9YBPNO";

  return (
    <section id="contact" className="scroll-mt-28 lg:scroll-mt-36 py-16 lg:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
      
      {/* Background Vector SVG & Ambient Radial Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Radial Glows */}
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Vector SVG Map Coordinate Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d97706" strokeWidth="1" />
              <circle cx="0" cy="0" r="2" fill="#b45309" />
              <circle cx="40" cy="40" r="1.5" fill="#d97706" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-map-grid)" />
        </svg>

        {/* Floating Map Pin Vector Watermark */}
        <svg className="absolute bottom-10 left-10 w-72 h-72 text-amber-500/5 pointer-events-none hidden lg:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1DB0F0] text-xs font-bold uppercase tracking-widest">
            <Building className="w-3.5 h-3.5 text-[#1DB0F0]" />
            <span>{t('contactBadge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t('contactTitle')}{' '}
            <span className="text-[#1DB0F0]">{t('contactTitleHighlight')}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('contactSubtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Branch Details Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Signboard Emblem Banner */}
              <div className="p-4 rounded-2xl border border-slate-800 flex items-center space-x-4" style={{ backgroundColor: '#000000' }}>
                <div className="relative flex items-center justify-center flex-shrink-0">
                  <SvaLogo 
                    src={logoUrl} 
                    fallbackSrc={logoFallbackUrl}
                    alt="Shree Varahi Associates" 
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white tracking-wide">
                    {COMPANY_INFO.name}
                  </h3>
                  <div className="text-xs text-[#1DB0F0] font-semibold flex items-center gap-1 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>GSTIN: {COMPANY_INFO.gstin}</span>
                  </div>
                </div>
              </div>

              {/* Contact Info List */}
              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-5 h-5 text-[#1DB0F0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase text-[#1DB0F0]">
                      Branch Address
                    </span>
                    <p className="text-slate-700 mt-0.5 leading-relaxed font-medium">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase text-emerald-700">
                      Mobile & WhatsApp
                    </span>
                    <a 
                      href={`tel:${COMPANY_INFO.phone}`} 
                      className="text-slate-900 font-extrabold text-base hover:underline block mt-0.5"
                    >
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase text-blue-700">
                      Email Address
                    </span>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`} 
                      className="text-slate-800 hover:underline block mt-0.5 font-medium"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Clock className="w-5 h-5 text-[#1DB0F0] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase text-[#1DB0F0]">
                      Office Timings
                    </span>
                    <p className="text-slate-700 mt-0.5 font-medium">
                      {COMPANY_INFO.workingHours}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all uppercase tracking-wider"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp Enquiry</span>
              </a>

              <button
                onClick={onOpenEnquiry}
                className="py-3 px-4 rounded-xl bg-[#1DB0F0] hover:bg-sky-500 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all cursor-pointer uppercase tracking-wider"
              >
                <Send className="w-4 h-4" />
                <span>Apply Online</span>
              </button>
            </div>

          </div>

            {/* Interactive Map & Directions Card with Embedded Google Maps */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl flex flex-col justify-between space-y-4">
              
              <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center justify-between pb-3 border-b border-slate-200">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#1DB0F0]" />
                    <span>Mysuru Branch Map (8J2V+WW Mysuru)</span>
                  </span>
                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1DB0F0] hover:underline flex items-center gap-1 font-bold"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </h3>
                <p className="text-xs text-slate-600 mt-2 font-medium">
                  Located near Ramaswamy Circle, Sunnadakeri, Rahmania Mohalla, Mysuru.
                </p>
              </div>

              {/* Embedded Google Maps iFrame */}
              <div className="relative w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-300 shadow-lg space-y-0">
                <div className="w-full h-64 sm:h-72">
                  <iframe
                    src="https://maps.google.com/maps?q=8J2V%2BWW%20Mysuru%2C%20Karnataka&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Shree Varahi Associates Mysuru Location Map"
                    className="w-full h-full"
                  />
                </div>

                <div className="p-4 text-center space-y-2 bg-slate-900 text-white border-t border-slate-800">
                  <div>
                    <h4 className="font-extrabold text-white text-sm">{COMPANY_INFO.name}</h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto font-medium leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                  
                  <div className="pt-1 flex flex-wrap justify-center gap-1.5 text-[10px] text-slate-300 font-bold">
                    <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full">📍 Plus Code: 8J2V+WW Mysuru</span>
                    <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full">📍 Ramaswamy Circle</span>
                    <span className="bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-full">📍 Chamaraja Double Rd</span>
                  </div>

                  <a
                    href={COMPANY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex px-5 py-2 rounded-xl bg-[#1DB0F0] hover:bg-sky-500 text-white font-bold text-xs items-center space-x-1.5 shadow-md uppercase tracking-wider transition-all"
                  >
                    <span>Get Driving Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span className="font-medium">Legal Name: {COMPANY_INFO.legalName} ({COMPANY_INFO.constitution})</span>
                <span className="text-emerald-700 font-bold">Verified GSTIN</span>
              </div>

            </div>

        </div>

      </div>
    </section>
  );
};
