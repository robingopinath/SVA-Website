import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TAKEOVER_STEPS 
} from '../data/companyData';
import { TakeoverStep } from '../types';
import { 
  Calculator, 
  Building2, 
  FileCheck, 
  Smartphone, 
  Coins, 
  ArrowRightLeft, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Sparkles,
  Play,
  Pause,
  Zap,
  Lock,
  Shield
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ProcessStepsProps {
  onOpenEnquiry: () => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />,
  Smartphone: <Smartphone className="w-5 h-5" />,
  Coins: <Coins className="w-5 h-5" />,
  ArrowRightLeft: <ArrowRightLeft className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />
};

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ onOpenEnquiry }) => {
  const { language, t } = useLanguage();
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  
  const takeoverStepsList: TakeoverStep[] = language === 'kn' ? [
    {
      stepNumber: 1,
      title: "ನಿಮ್ಮ ಅರ್ಹತೆ ಮತ್ತು ಬಡ್ಡಿ ಉಳಿತಾಯ ಪರಿಶೀಲಿಸಿ",
      shortDesc: "ಉಚಿತ ಡಿಜಿಟಲ್ ಕ್ಯಾಲ್ಕುಲೇಟರ್ ಮೂಲಕ ನಿಮ್ಮ ಸಾಲದ ಅರ್ಹತೆ ಮತ್ತು ಮಾಸಿಕ ಬಡ್ಡಿ ಉಳಿತಾಯವನ್ನು ಅಂದಾಜಿಸಿ.",
      detailedDesc: "ಚಿನ್ನದ ಸಾಲ ವರ್ಗಾವಣೆ ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು, ನಿಮ್ಮ ಅರ್ಹತೆ (ವಯಸ್ಸು 18+, ವಾಸಸ್ಥಳದ ಪುರಾವೆ, ಸರ್ಕಾರಿ ಗುರುತಿನ ಚೀಟಿ ಮತ್ತು ಪ್ರಸ್ತುತ ಸಾಲದ ರಶೀದಿ) ಪರಿಶೀಲಿಸಿ. ಶ್ರೀ ವಾರಾಹಿ ಅಸೋಸಿಯೇಟ್ಸ್‌ಗೆ ಬದಲಾಯಿಸುವುದರಿಂದ ನೀವು ಪ್ರತಿ ತಿಂಗಳು ಎಷ್ಟು ಬಡ್ಡಿ ಉಳಿಸಬಹುದು ಎಂಬುದನ್ನು ಲೆಕ್ಕಹಾಕಿ.",
      requiredDocs: ["18+ ವರ್ಷ ವಯಸ್ಸು", "ಆಧಾರ್ / ಪ್ಯಾನ್ / ಪಾಸ್‌ಪೋರ್ಟ್", "ಪ್ರಸ್ತುತ ಸಾಲದ ರಶೀದಿ"],
      iconName: "Calculator"
    },
    {
      stepNumber: 2,
      title: "ಹೊಸ ಸಾಲದ ಯೋಜನೆ ಮತ್ತು ಬಡ್ಡಿದರ ಆಯ್ಕೆಮಾಡಿ",
      shortDesc: "ನಿಮ್ಮ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ಕಡಿಮೆ ಬಡ್ಡಿದರಗಳು ಮತ್ತು ಹೆಚ್ಚುವರಿ ನಗದು (Top-Up) ಆಯ್ಕೆಗಳನ್ನು ಹೋಲಿಸಿ.",
      detailedDesc: "ಮಣಪ್ಪುರಂ, ಮುತ್ತೂಟ್ ಫೈನಾನ್ಸ್ ಅಥವಾ ಸ್ಥಳೀಯ ಸಾಲದಾತರ ಹೆಚ್ಚಿನ ಬಡ್ಡಿದರಗಳಿಗೆ ಹೋಲಿಸಿದರೆ ನಮ್ಮ ಅತ್ಯಂತ ಕಡಿಮೆ ಬಡ್ಡಿದರಗಳ ಯೋಜನೆಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ (ತಿಂಗಳಿಗೆ ಶೇ. 0.75% / ವರ್ಷಕ್ಕೆ 9% ರಿಂದ ಆರಂಭ).",
      iconName: "Building2"
    },
    {
      stepNumber: 3,
      title: "ಅಗತ್ಯ ದಾಖಲೆಗಳನ್ನು ಸಲ್ಲಿಸಿ",
      shortDesc: "ತ್ವರಿತ ಪರಿಶೀಲನೆಗಾಗಿ ಮೂಲ ಕೆವೈಸಿ (KYC) ಮತ್ತು ಪ್ರಸ್ತುತ ಸಾಲದ ರಶೀದಿಯನ್ನು ಸಲ್ಲಿಸಿ.",
      detailedDesc: "ಆಧಾರ್ ಕಾರ್ಡ್, ಪ್ಯಾನ್ ಕಾರ್ಡ್, ಪ್ರಸ್ತುತ ಸಾಲದ ರಶೀದಿ ಮತ್ತು ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರಗಳನ್ನು ಸಲ್ಲಿಸಿ. ಆದಾಯ ದಾಖಲೆ ಅಥವಾ ಸಿಬಿಲ್ (CIBIL) ಸ್ಕೋರ್ ಅಗತ್ಯವಿಲ್ಲದೆ ನಮ್ಮ ತಂಡವು ನಿಮಗಾಗಿ ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
      requiredDocs: ["ಆಧಾರ್ ಕಾರ್ಡ್", "ಪ್ಯಾನ್ ಕಾರ್ಡ್", "ಪ್ರಸ್ತುತ ಸಾಲದ ರಶೀದಿ", "ಬ್ಯಾಂಕ್ ಖಾತೆ ವಿವರ"],
      iconName: "FileCheck"
    },
    {
      stepNumber: 4,
      title: "ಚಿನ್ನದ ಸಾಲ ವರ್ಗಾವಣೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
      shortDesc: "ಆನ್‌ಲೈನ್ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ ಅಥವಾ ಮೈಸೂರಿನ ಚಾಮರಾಜ ಡಬಲ್ ರಸ್ತೆ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ.",
      detailedDesc: "ನಿಮ್ಮ ಮನೆಯಿಂದಲೇ ಆನ್‌ಲೈನ್ ಮೂಲಕ ಅರ್ಜಿ ತುಂಬಿ ಅಥವಾ ರಾಮಸ್ವಾಮಿ ವೃತ್ತದ ಬಳಿ ಇರುವ ನಮ್ಮ ಶಾಖೆಗೆ ಭೇಟಿ ನೀಡಿ. ಯಾವುದೇ ರಹಸ್ಯ ಶುಲ್ಕಗಳಿಲ್ಲದೆ ತಕ್ಷಣವೇ ಅನುಮೋದನೆ ಪಡೆದುಕೊಳ್ಳಿ.",
      iconName: "Smartphone"
    },
    {
      stepNumber: 5,
      title: "ಚಿನ್ನದ ಮರುಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಗರಿಷ್ಠ ಸಾಲ ಪಡೆಯಿರಿ",
      shortDesc: "2026 ರ ಆರ್‌ಬಿಐ ನಿಯಮಾವಳಿಗಳಂತೆ ಪಾರದರ್ಶಕ ಚಿನ್ನದ ತೂಕ ಮತ್ತು ಶುದ್ಧತೆಯ ಮೌಲ್ಯಮಾಪನ.",
      detailedDesc: "ನಮ್ಮ ಅನುಭವಿ ತಜ್ಞರು ನಿಮ್ಮ ಆಭರಣಗಳ ತೂಕ ಮತ್ತು ಶುದ್ಧತೆಯನ್ನು (18K ರಿಂದ 24K) ಪರಿಶೀಲಿಸುತ್ತಾರೆ. 2026 ರ ಆರ್‌ಬಿಐ ನಿಯಮಗಳ ಪ್ರಕಾರ, ಶೇಕಡಾ 85% ವರೆಗೆ ಗರಿಷ್ಠ ಸಾಲದ ಮೌಲ್ಯ (LTV) ಪಡೆಯಿರಿ.",
      iconName: "Coins"
    },
    {
      stepNumber: 6,
      title: "ಹಳೆಯ ಸಾಲದ ನೇರ ಪಾವತಿ ಮತ್ತು ಕ್ಲೋಸರ್",
      shortDesc: "ನಿಮ್ಮ ಹಳೆಯ ಬ್ಯಾಂಕ್/ಫೈನಾನ್ಸ್‌ಗೆ ಬ್ಯಾಂಕ್ NEFT/RTGS ಮೂಲಕ ನೇರವಾಗಿ ಸಾಲ ಪಾವತಿಸಿ ಸಾಲವನ್ನು ಮುಕ್ತಾಯಗೊಳಿಸುತ್ತೇವೆ.",
      detailedDesc: "ಶ್ರೀ ವಾರಾಹಿ ಅಸೋಸಿಯೇಟ್ಸ್ ನಿಮ್ಮ ಹಳೆಯ ಸಾಲದ ಬಾಕಿ ಮೊತ್ತವನ್ನು NEFT ಅಥವಾ RTGS ಮೂಲಕ ನೇರವಾಗಿ ಹಳೆಯ ಸಂಸ್ಥೆಗೆ ಪಾವತಿಸಿ, ನಿಮ್ಮ ಹಳೆಯ ಸಾಲದ ಖಾತೆಯನ್ನು ಸುಲಭವಾಗಿ ಕ್ಲೋಸ್ ಮಾಡುತ್ತದೆ.",
      iconName: "ArrowRightLeft"
    },
    {
      stepNumber: 7,
      title: "ಚಿನ್ನದ ಸುರಕ್ಷಿತ ಹಸ್ತಾಂತರ ಮತ್ತು ಹೆಚ್ಚುವರಿ ನಗದು ಪಡೆಯಿರಿ",
      shortDesc: "ನಿಮ್ಮ ಚಿನ್ನವು ಸುರಕ್ಷಿತ ವಿಮೆ ಹೊಂದಿರುವ ಬ್ಯಾಂಕ್ ಲಾಕರ್‌ಗೆ ವರ್ಗಾವಣೆಯಾಗುತ್ತದೆ ಮತ್ತು ಉಳಿದ ನಗದು ನಿಮಗೆ ಸಿಗುತ್ತದೆ.",
      detailedDesc: "ನಿಮ್ಮ ಚಿನ್ನದ ಆಭರಣಗಳನ್ನು ಸುರಕ್ಷಿತ ಬ್ಯಾಂಕ್ ವಾಲ್ಟ್‌ಗಳಲ್ಲಿ ಇರಿಸಲಾಗುತ್ತದೆ. ನಿಮ್ಮ ಹೊಸ ಒಪ್ಪಂದಕ್ಕೆ ಸಹಿ ಮಾಡಿ, ತಕ್ಷಣವೇ ಹೆಚ್ಚುವರಿ ಟಾಪ್-ಅಪ್ (Top-Up) ನಗದನ್ನು ಪಡೆದುಕೊಳ್ಳಿ ಮತ್ತು ಕಡಿಮೆ ಮಾಸಿಕ ಬಡ್ಡಿಯನ್ನು ಆನಂದಿಸಿ!",
      iconName: "ShieldCheck"
    }
  ] : TAKEOVER_STEPS;

  // Auto-play / Tour feature
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveStepIndex((prev) => (prev + 1) % takeoverStepsList.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, takeoverStepsList.length]);

  const activeStep = takeoverStepsList[activeStepIndex] || takeoverStepsList[0];
  const progressPercent = Math.round(((activeStepIndex + 1) / takeoverStepsList.length) * 100);

  return (
    <section id="process" className="scroll-mt-28 lg:scroll-mt-36 py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      
      {/* Background Vector SVG & Glowing Ambient Radial Meshes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing Ambient Gradient Orbs */}
        <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-[#1DB0F0]/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        {/* Modern Dynamic Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="process-modern-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38bdf8" strokeWidth="0.8" />
              <circle cx="40" cy="40" r="1.5" fill="#f59e0b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-modern-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-[#1DB0F0] text-xs font-bold uppercase tracking-widest shadow-inner">
            <Zap className="w-3.5 h-3.5 text-[#1DB0F0]" />
            <span>{t('processBadge')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {t('processTitlePrefix')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1DB0F0] via-cyan-300 to-amber-300 mt-1 sm:mt-2">
              {t('processTitleHighlight')}
            </span>
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {t('processSubtitle')}
          </p>

          {/* Interactive Auto-Tour & Progress Controls Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                if (!isAutoPlaying) {
                  if (activeStepIndex >= takeoverStepsList.length - 1) {
                    setActiveStepIndex(0);
                  }
                  setIsAutoPlaying(true);
                } else {
                  setIsAutoPlaying(false);
                }
              }}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer border ${
                isAutoPlaying 
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/20' 
                  : 'bg-slate-800/90 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>{language === 'kn' ? 'ಆಟೋ ಟೂರ್ ನಿಲ್ಲಿಸಿ' : 'Pause Auto Tour'}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current text-amber-400" />
                  <span>{language === 'kn' ? 'ಹಂತಗಳ ವಿವರಣೆ ಪ್ರಾರಂಭಿಸಿ' : 'Start Guided Step Tour'}</span>
                </>
              )}
            </button>

            <div className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-bold text-slate-300">
              <span className="text-[#1DB0F0]">
                {language === 'kn' ? `ಹಂತ 7 ರಲ್ಲಿ ${activeStepIndex + 1}` : `Step ${activeStepIndex + 1} of 7`}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400">
                {language === 'kn' ? `${progressPercent}% ಪೂರ್ಣಗೊಂಡಿದೆ` : `${progressPercent}% Completed`}
              </span>
            </div>
          </div>
        </div>

        {/* Trendy Interactive Stepper Bar with Connected Timeline Progress Line */}
        <div className="mt-12 bg-slate-950/80 p-4 sm:p-6 rounded-3xl border border-slate-800/80 shadow-2xl backdrop-blur-md relative">
          
          {/* Track Container */}
          <div className="relative overflow-x-auto pb-2 pt-1 scrollbar-none">
            
            {/* Background Stepper Connected Progress Line */}
            <div className="hidden md:block absolute top-[28px] left-[60px] right-[60px] h-1 bg-slate-800 rounded-full overflow-hidden pointer-events-none">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#1DB0F0] via-cyan-400 to-amber-400 rounded-full"
                animate={{ width: `${(activeStepIndex / (takeoverStepsList.length - 1)) * 100}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>

            <div className="flex items-center justify-between min-w-[720px] relative z-10 px-2">
              {takeoverStepsList.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                const isPassed = idx < activeStepIndex;

                return (
                  <button
                    key={step.stepNumber}
                    onClick={() => {
                      setActiveStepIndex(idx);
                      setIsAutoPlaying(false);
                    }}
                    className="flex flex-col items-center group cursor-pointer relative px-2 focus:outline-none"
                  >
                    {/* Node Circle Button */}
                    <div className="relative">
                      {isActive && (
                        <motion.div 
                          layoutId="activeStepperGlow"
                          className="absolute -inset-2 bg-gradient-to-r from-[#1DB0F0] to-amber-400 rounded-2xl blur-xs opacity-75"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}

                      <div
                        className={`relative w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm transition-all duration-200 border ${
                          isActive
                            ? 'bg-[#1DB0F0] text-white border-cyan-300 shadow-lg shadow-sky-500/30 scale-110'
                            : isPassed
                            ? 'bg-slate-800 text-emerald-400 border-emerald-500/50 hover:bg-slate-700'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                        }`}
                      >
                        {isPassed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          iconMap[step.iconName] || <span>{step.stepNumber}</span>
                        )}
                      </div>
                    </div>

                    {/* Step Title Label */}
                    <span className={`text-[10px] font-black mt-2.5 uppercase tracking-wider transition-colors ${
                      isActive ? 'text-[#1DB0F0]' : isPassed ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-300'
                    }`}>
                      {language === 'kn' ? `ಹಂತ ${step.stepNumber}` : `Step ${step.stepNumber}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Step Detailed Card with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep.stepNumber}
            initial={{ opacity: 0, y: 15, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.99 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800/90 shadow-2xl relative overflow-hidden"
          >
            {/* Top Accent Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1DB0F0] via-cyan-400 to-amber-400" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Step Details */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Header Tag Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-[#1DB0F0]/20 text-[#1DB0F0] text-xs font-extrabold border border-[#1DB0F0]/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      {language === 'kn' ? `ಹಂತ 7 ರಲ್ಲಿ ${activeStep.stepNumber}` : `STEP ${activeStep.stepNumber} OF 7`}
                    </span>
                  </span>

                  <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/30">
                    {activeStep.shortDesc}
                  </span>
                </div>

                {/* Main Step Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                  {activeStep.title}
                </h3>

                {/* Detailed Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeStep.detailedDesc}
                </p>

                {/* Key Requirements Interactive Chips */}
                {activeStep.requiredDocs && activeStep.requiredDocs.length > 0 && (
                  <div className="pt-2 space-y-2.5">
                    <span className="text-xs font-extrabold text-[#1DB0F0] block uppercase tracking-wider flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      <span>{language === 'kn' ? 'ಅಗತ್ಯ ದಾಖಲೆಗಳು ಮತ್ತು ಮಾನದಂಡಗಳು:' : 'Required Documents & Criteria:'}</span>
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {activeStep.requiredDocs.map((doc, dIdx) => (
                        <div 
                          key={dIdx}
                          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-slate-800/90 border border-slate-700/80 text-slate-200 text-xs font-bold shadow-xs hover:border-slate-600 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Interactive Controls Buttons */}
                <div className="pt-4 flex flex-wrap gap-3 items-center">
                  <button
                    onClick={onOpenEnquiry}
                    className="px-6 py-3.5 rounded-2xl bg-[#1DB0F0] hover:bg-sky-500 text-white font-extrabold text-xs sm:text-sm shadow-xl shadow-sky-500/20 transition-all flex items-center space-x-2 cursor-pointer uppercase tracking-wider hover:scale-[1.02]"
                  >
                    <span>
                      {language === 'kn' 
                        ? `ಹಂತ ${activeStep.stepNumber} ರ ಅರ್ಜಿಯನ್ನು ಪ್ರಾರಂಭಿಸಿ` 
                        : `Start Step ${activeStep.stepNumber} Application`}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center space-x-2">
                    <button
                      disabled={activeStepIndex === 0}
                      onClick={() => {
                        setActiveStepIndex((prev) => Math.max(0, prev - 1));
                        setIsAutoPlaying(false);
                      }}
                      className={`p-3 rounded-2xl border text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                        activeStepIndex === 0
                          ? 'bg-slate-900/50 text-slate-600 border-slate-800 cursor-not-allowed'
                          : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                      }`}
                      title={language === 'kn' ? 'ಹಿಂದಿನ ಹಂತ' : 'Previous Step'}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => {
                        setActiveStepIndex((prev) => (prev + 1) % takeoverStepsList.length);
                        setIsAutoPlaying(false);
                      }}
                      className="px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all flex items-center space-x-1.5 cursor-pointer uppercase tracking-wider border border-slate-700"
                    >
                      <span>{language === 'kn' ? 'ಮುಂದಿನ ಹಂತ' : 'Next Step'}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: Dynamic Visual Spotlight & Guarantee Card */}
              <div className="lg:col-span-4 bg-slate-950 rounded-2xl border border-slate-800/90 overflow-hidden shadow-2xl relative group">
                
                {/* Photo Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <img 
                    src={
                      activeStep.stepNumber === 1 ? "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=600&q=80" :
                      activeStep.stepNumber === 2 ? "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" :
                      activeStep.stepNumber === 3 ? "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80" :
                      activeStep.stepNumber === 4 ? "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&q=80" :
                      activeStep.stepNumber === 5 ? "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80" :
                      activeStep.stepNumber === 6 ? "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80" :
                      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80"
                    } 
                    alt={activeStep.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Photo Badges */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-900/90 text-amber-400 border border-amber-500/40 font-extrabold text-[10px] uppercase tracking-wider backdrop-blur-xs flex items-center gap-1">
                      <Shield className="w-3 h-3 text-amber-400" />
                      <span>{language === 'kn' ? 'ಶ್ರೀ ವಾರಾಹಿ ಪ್ರಮಾಣ' : 'Shree Varahi Benchmark'}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-[#1DB0F0] text-white font-extrabold text-[10px] uppercase tracking-wider shadow-md">
                      {language === 'kn' ? `ಹಂತ ${activeStep.stepNumber} ಪ್ರಕ್ರಿಯೆ` : `Step ${activeStep.stepNumber} Workflow`}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-extrabold bg-slate-900/90 px-2 py-0.5 rounded-md border border-emerald-500/40 backdrop-blur-xs">
                      {language === 'kn' ? '✓ 100% ಪ್ರಮಾಣೀಕೃತ' : '✓ 100% Verified'}
                    </span>
                  </div>
                </div>

                {/* Specs Box */}
                <div className="p-5 space-y-3 bg-slate-950">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-300 pb-2 border-b border-slate-800/80">
                    {language === 'kn' ? 'ಸೇವಾ ಮಾನದಂಡಗಳು ಮತ್ತು ಭರವಸೆಗಳು' : 'Service Standards & Guarantees'}
                  </h4>

                  <div className="text-xs space-y-2.5">
                    <div className="flex justify-between items-center py-1 border-b border-slate-900">
                      <span className="text-slate-400 font-medium">{language === 'kn' ? 'ಹಳೆಯ ಸಾಲದ ಪಾವತಿ:' : 'Old Loan Payoff:'}</span>
                      <span className="text-white font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                        {language === 'kn' ? 'ನೇರ ಬ್ಯಾಂಕ್ NEFT / RTGS' : 'Direct Bank NEFT / RTGS'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-900">
                      <span className="text-slate-400 font-medium">{language === 'kn' ? 'ಲಾಕರ್ ಭದ್ರತೆ:' : 'Vault Security:'}</span>
                      <span className="text-emerald-400 font-bold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-500/30">
                        {language === 'kn' ? '100% ವಿಮೆ ಹೊಂದಿರುವ ಬ್ಯಾಂಕ್ ಲಾಕರ್' : '100% Insured Strong-Room'}
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-400 font-medium">{language === 'kn' ? 'ಚಿನ್ನ ಹಿಂತಿರುಗಿಸುವ ಸಮಯ:' : 'Gold Return Time:'}</span>
                      <span className="text-[#1DB0F0] font-bold bg-blue-950/50 px-2 py-0.5 rounded border border-blue-500/30">
                        {language === 'kn' ? '7 ದಿನಗಳು (ಆರ್‌ಬಿಐ 2026)' : '7 Days (RBI 2026)'}
                      </span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

