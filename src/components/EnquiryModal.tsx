import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  Sparkles, 
  Building2, 
  Coins, 
  Send,
  MessageSquare,
  Lock
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { EnquiryFormData } from '../types';
import { formatINR } from '../utils/calculator';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: any;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, prefillData }) => {
  const [step, setStep] = useState<number>(1);
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [otpCode, setOtpCode] = useState<string>('');
  const [otpVerified, setOtpVerified] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>('');

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    pincode: '570004',
    cityArea: 'Mysuru',
    branch: 'Chamaraja Double Road, Sunnadakeri, Rahmania Mohalla, Mysuru',
    currentLender: 'Muthoot Finance',
    existingLoanAmount: '200000',
    goldWeight: '40',
    purity: '22',
    preferredContactTime: 'Anytime Today',
    notes: '',
    acceptedTerms: true
  });

  // Apply prefill data if present
  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        existingLoanAmount: prefillData.existingLoanAmount ? String(prefillData.existingLoanAmount) : prev.existingLoanAmount,
        goldWeight: prefillData.goldWeightGrams ? String(prefillData.goldWeightGrams) : prev.goldWeight,
        purity: prefillData.goldPurityKarat ? String(prefillData.goldPurityKarat) : prev.purity,
        currentLender: prefillData.currentLender || prev.currentLender
      }));
    }
  }, [prefillData]);

  if (!isOpen) return null;

  const handleSendOtp = () => {
    if (!formData.mobileNumber || formData.mobileNumber.length < 10) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    setOtpSent(true);
    setOtpCode('8942'); // Auto fill simulated OTP
    setTimeout(() => {
      setOtpVerified(true);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `SVA-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setStep(3); // Success step

      // Trigger Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-8 text-slate-900">
        
        {/* Modal Top Header */}
        <div className="bg-slate-900 p-6 border-b border-slate-800 flex justify-between items-center text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-[#1DB0F0] flex items-center justify-center text-white font-bold shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-extrabold text-white">
                Shree Varahi Gold Loan Takeover
              </h3>
              <p className="text-xs text-[#1DB0F0] font-medium">
                {step === 3 ? 'Application Received' : 'Seamless Digital Application • Mysore Chamaraja Double Road Branch'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">

          {/* STEP 1: Details & Loan Info */}
          {step === 1 && (
            <form onSubmit={() => setStep(2)} className="space-y-5">
              
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-[#1DB0F0] uppercase tracking-wider">
                  Step 1 of 2: Contact & Current Loan Details
                </span>
                <span className="text-xs text-slate-500 font-medium">100% Confidential</span>
              </div>

              {/* Full Name & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-2.5 text-slate-500 text-sm font-semibold">+91</span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="9945166614"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full pl-12 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Current Lender & Outstanding Amount */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Current Lender / Bank *
                  </label>
                  <select
                    value={formData.currentLender}
                    onChange={(e) => setFormData({ ...formData, currentLender: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  >
                    <option value="Muthoot Finance">Muthoot Finance</option>
                    <option value="Manappuram Finance">Manappuram Finance</option>
                    <option value="ICICI Bank / HDFC / Bank">Private or PSU Bank</option>
                    <option value="Local Jeweler / Pawn Broker">Local Jeweler / Pawn Broker</option>
                    <option value="Other NBFC">Other Financial Agency</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Existing Loan Amount (₹) *
                  </label>
                  <input
                    type="number"
                    required
                    placeholder="200000"
                    value={formData.existingLoanAmount}
                    onChange={(e) => setFormData({ ...formData, existingLoanAmount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Gold Weight & Purity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Gold Weight (Grams approx)
                  </label>
                  <input
                    type="number"
                    placeholder="40"
                    value={formData.goldWeight}
                    onChange={(e) => setFormData({ ...formData, goldWeight: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / Preferred Area
                  </label>
                  <input
                    type="text"
                    value={formData.cityArea}
                    onChange={(e) => setFormData({ ...formData, cityArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#1DB0F0] hover:bg-sky-500 text-white font-bold text-sm shadow-md flex items-center justify-center space-x-2 cursor-pointer uppercase tracking-wider"
                >
                  <span>Continue to Verification</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

          {/* STEP 2: Phone Verification & Authorization */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-xs font-bold text-[#1DB0F0] uppercase tracking-wider">
                  Step 2 of 2: OTP Verification & Final Submit
                </span>
                <button 
                  type="button" 
                  onClick={() => setStep(1)} 
                  className="text-xs text-[#1DB0F0] font-bold underline"
                >
                  Edit Info
                </button>
              </div>

              {/* Summary pill */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                <div className="flex justify-between text-slate-700 font-medium">
                  <span>Applicant: <strong className="text-slate-900 font-bold">{formData.fullName}</strong></span>
                  <span>Mobile: <strong className="text-slate-900 font-bold">+91 {formData.mobileNumber}</strong></span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Transfer from: {formData.currentLender}</span>
                  <span>Loan Amount: {formatINR(Number(formData.existingLoanAmount || 0))}</span>
                </div>
              </div>

              {/* Phone OTP Block */}
              <div className="space-y-3">
                <label className="block text-xs font-bold text-slate-700">
                  Instant Mobile OTP Verification
                </label>

                {!otpSent ? (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 flex items-center justify-center space-x-2 uppercase tracking-wider"
                  >
                    <Send className="w-4 h-4 text-[#1DB0F0]" />
                    <span>Send 4-Digit OTP to +91 {formData.mobileNumber || 'XXXXXXXXXX'}</span>
                  </button>
                ) : (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        maxLength={4}
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value)}
                        placeholder="Enter OTP (8942)"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#1DB0F0] text-slate-900 text-center font-bold tracking-widest text-lg focus:outline-none focus:ring-1 focus:ring-[#1DB0F0]"
                      />
                      <button
                        type="button"
                        onClick={() => setOtpVerified(true)}
                        className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold whitespace-nowrap uppercase tracking-wider shadow-sm"
                      >
                        Verify OTP
                      </button>
                    </div>

                    {otpVerified && (
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Mobile Number Verified Successfully!</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start space-x-3 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.acceptedTerms}
                  onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                  className="mt-1 w-4 h-4 accent-[#1DB0F0] rounded"
                  required
                />
                <label htmlFor="consent" className="text-[11px] text-slate-600 leading-tight">
                  I authorize Shree Varahi Associates and its official representatives to contact me by telephone / email / SMS / WhatsApp regarding my Gold Loan Takeover enquiry.
                </label>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting || !otpVerified}
                  className={`w-2/3 py-3.5 rounded-xl font-bold text-sm shadow-md flex items-center justify-center space-x-2 transition-all cursor-pointer uppercase tracking-wider ${
                    otpVerified
                      ? 'bg-[#1DB0F0] hover:bg-sky-500 text-white'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <span>Processing Application...</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Submit Loan Takeover Application</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

          {/* STEP 3: Success Confirmation */}
          {step === 3 && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase text-[#1DB0F0] tracking-wider">
                  Application Submitted
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Your Gold Loan Takeover request has been registered with Shree Varahi Associates. Our advisor will reach out shortly.
                </p>
              </div>

              {/* Reference ID Pill */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-center space-y-1">
                <span className="text-[11px] text-slate-500 block uppercase font-bold">
                  Your Reference Number
                </span>
                <span className="text-xl font-extrabold text-[#1DB0F0] tracking-wider">
                  {referenceId}
                </span>
              </div>

              {/* Next Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md uppercase tracking-wider"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Call Us Immediately</span>
                </a>

                <a
                  href={`https://wa.me/919945166614?text=Hi,%20my%20takeover%20ref%20is%20${referenceId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md uppercase tracking-wider"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Send Ref via WhatsApp</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 uppercase tracking-wider"
              >
                Close Window
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
