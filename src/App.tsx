import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CalculatorSection } from './components/CalculatorSection';
import { ProcessSteps } from './components/ProcessSteps';
import { RbiRulesBanner } from './components/RbiRulesBanner';
import { ComparisonSection } from './components/ComparisonSection';
import { FaqSection } from './components/FaqSection';
import { BranchAndContact } from './components/BranchAndContact';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { COMPANY_INFO } from './data/companyData';
import { Phone, MessageSquare, Calculator } from 'lucide-react';

function AppMain() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPrefill, setModalPrefill] = useState<any>(null);

  const handleOpenModal = (prefillData?: any) => {
    setModalPrefill(prefillData || null);
    setIsModalOpen(true);
  };

  const handleScrollToCalculator = () => {
    const calcEl = document.getElementById('calculator');
    if (calcEl) {
      calcEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/919945166614?text=Hello%20Shree%20Varahi%20Associates,%20I%20would%20like%20to%20enquire%20about%20a%20Gold%20Loan%20Takeover.`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-500 selection:text-white pb-20 sm:pb-0">
      
      {/* Top Navbar */}
      <Navbar 
        onOpenEnquiry={handleOpenModal} 
        activeSection="home" 
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero 
          onOpenEnquiry={handleOpenModal} 
          onScrollToCalculator={handleScrollToCalculator} 
        />

        {/* Interactive Interest Savings Calculator Section */}
        <CalculatorSection 
          onApplyWithCalculation={(calcData) => handleOpenModal(calcData)} 
        />

        {/* 7-Step Takeover Roadmap Section */}
        <ProcessSteps 
          onOpenEnquiry={() => handleOpenModal()} 
        />

        {/* 2026 RBI Regulations & Borrower Protection Banner */}
        <RbiRulesBanner />

        {/* Comparison Section */}
        <ComparisonSection 
          onOpenEnquiry={() => handleOpenModal()} 
        />

        {/* FAQ Accordion Section */}
        <FaqSection 
          onOpenEnquiry={() => handleOpenModal()}
        />

        {/* Branch Location & Direct Contact Section */}
        <BranchAndContact 
          onOpenEnquiry={() => handleOpenModal()} 
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky Mobile Quick Action Bar */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden bg-slate-900/95 backdrop-blur-md p-2.5 rounded-2xl border border-amber-500/40 shadow-2xl flex items-center justify-between gap-2">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-emerald-400 font-extrabold text-xs flex items-center justify-center space-x-1 border border-slate-700"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>{t('callBranch')}</span>
        </a>

        <button
          onClick={() => handleOpenModal()}
          className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-xs flex items-center justify-center space-x-1 shadow-lg"
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>{t('apply')}</span>
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 flex items-center justify-center"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-4 h-4 fill-current" />
        </a>
      </div>

      {/* Digital Loan Application Modal */}
      <EnquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        prefillData={modalPrefill} 
      />

    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AppMain />
    </LanguageProvider>
  );
}

export default App;
