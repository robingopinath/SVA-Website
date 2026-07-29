import { FAQItem, TakeoverStep, ComparisonRow } from '../types';

export const COMPANY_INFO = {
  name: "SHREE VARAHI ASSOCIATES",
  shortName: "SVA Gold",
  legalName: "NIRMALA K",
  constitution: "Proprietorship",
  gstin: "29JTLPK2430M1Z3",
  phone: "9945166614",
  phoneFormatted: "+91 9945166614",
  email: "svamailservice@gmail.com",
  address: "No. 423, 3rd Floor, Chamaraja Double Road, Near Ramaswamy Circle, Sunnadakeri, Rahmania Mohalla, Mysuru, Karnataka 570004",
  workingHours: "Mon - Sat: 9:30 AM - 7:30 PM | Sunday: Closed",
  city: "Mysuru, Karnataka",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=8J2V%2BWW+Mysuru,+Karnataka",
  partnerBankNetwork: ["RBI Regulated NBFCs", "Leading Nationalized & Scheduled Commercial Banks"]
};

export const TAKEOVER_STEPS: TakeoverStep[] = [
  {
    stepNumber: 1,
    title: "Check Your Eligibility & Savings",
    shortDesc: "Quickly verify loan eligibility and estimate interest savings with our digital calculator.",
    detailedDesc: "Before initiating the Gold Loan transfer, check your eligibility (Age 18+, valid residence proof, government ID, and existing loan pledge receipt). Calculate how much monthly interest you will save by switching to Shree Varahi Associates.",
    requiredDocs: ["Age 18+", "Valid Aadhaar / PAN / Passport", "Existing Loan Statement"],
    iconName: "Calculator"
  },
  {
    stepNumber: 2,
    title: "Choose New Lender & Rate Plan",
    shortDesc: "Compare interest rates, tenure, and Top-Up options tailored to your needs.",
    detailedDesc: "Compare our reduced interest rate options (starting from as low as 0.75% per month / 9% p.a.) against high-cost loans from providers like Muthoot Finance, Manappuram, or local financiers. Select a plan with lower monthly EMIs or bullet repayment.",
    iconName: "Building2"
  },
  {
    stepNumber: 3,
    title: "Gather & Submit Required Documents",
    shortDesc: "Submit basic KYC and current loan account pledge statement for rapid verification.",
    detailedDesc: "Gather identity proof (Aadhaar, PAN Card, Voter ID, or Passport), residential proof, and current loan account pledge statement. Our team assists you with digital or doorstep verification without demanding income or CIBIL proof.",
    requiredDocs: ["Aadhaar Card", "PAN Card", "Current Pawn/Pledge Ticket", "Bank Account Details"],
    iconName: "FileCheck"
  },
  {
    stepNumber: 4,
    title: "Apply for Gold Loan Balance Transfer",
    shortDesc: "Complete our seamless online enquiry or visit our Mysore Chamaraja Double Road branch.",
    detailedDesc: "Fill out the online application form from the comfort of your home or visit our branch near Ramaswamy Circle. Get immediate pre-approval and transparent Key Fact Statement (KFS) with zero hidden fees.",
    iconName: "Smartphone"
  },
  {
    stepNumber: 5,
    title: "Get Gold Re-Valued & LTV Fixed",
    shortDesc: "Transparent appraisal of your gold's weight and purity under 2026 RBI guidelines.",
    detailedDesc: "Our expert appraisers evaluate your gold ornaments for weight and purity (18K to 24K). Under 2026 RBI Tiered LTV rules, receive up to 85% LTV for loans up to ₹2.5 Lakh, 80% LTV for ₹2.5L-₹5L, and 75% for above ₹5 Lakh.",
    iconName: "Coins"
  },
  {
    stepNumber: 6,
    title: "Direct Old Debt Settlement & Payoff",
    shortDesc: "We pay off your remaining balance directly to your old bank/NBFC via NEFT/RTGS.",
    detailedDesc: "Shree Varahi Associates settles your remaining outstanding loan balance directly with your previous lender via NEFT, RTGS, or demand draft. Your old loan account is officially closed with zero hassle.",
    iconName: "ArrowRightLeft"
  },
  {
    stepNumber: 7,
    title: "Shift Collateral & Receive Top-Up Cash",
    shortDesc: "Your gold moves safely to insured bank strong-rooms and extra cash is disbursed.",
    detailedDesc: "Your pledged gold ornaments are securely moved to heavily guarded, 100% insured bank vault strong-rooms. Sign your fresh contract, receive your instant Top-Up cash disbursal, and enjoy reduced monthly EMIs!",
    iconName: "ShieldCheck"
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "Monthly Interest Rate",
    otherLenders: "1.5% - 2.5% per month (18% - 30% p.a.)",
    shreeVarahi: "Starting 0.75% - 0.99% per month (9% - 12% p.a.)",
    isHighlight: true
  },
  {
    feature: "Monthly EMI / Interest Cost",
    otherLenders: "High monthly burden with compound penalties",
    shreeVarahi: "Save up to 40% - 50% on monthly interest payments",
    isHighlight: true
  },
  {
    feature: "Top-Up Cash Facility",
    otherLenders: "Restricted or extra appraisal hassles",
    shreeVarahi: "Instant extra cash on same jewelry based on updated market price",
    isHighlight: true
  },
  {
    feature: "Processing & Extra Charges",
    otherLenders: "Hidden valuation fees, foreclosure penalty, high admin costs",
    shreeVarahi: "Transparent Key Fact Statement (KFS) with Zero Extra Hidden Charges"
  },
  {
    feature: "2026 RBI LTV Norms Compliance",
    otherLenders: "Strict caps without personalized guidance",
    shreeVarahi: "Up to 85% LTV (up to ₹2.5L), 80% LTV (₹2.5L-₹5L), 75% LTV (>₹5L)"
  },
  {
    feature: "Pledged Gold Security",
    otherLenders: "Standard branch storage or NBFC lockers",
    shreeVarahi: "100% Fully Insured, electronically monitored Bank Vault Strong-Rooms",
    isHighlight: true
  },
  {
    feature: "Gold Return Guarantee (RBI 2026)",
    otherLenders: "Delays in retrieving gold post closure",
    shreeVarahi: "Guaranteed gold return within 7 working days or ₹5,000/day delay penalty",
    isHighlight: true
  },
  {
    feature: "Income / CIBIL Requirement",
    otherLenders: "Often demand CIBIL history or income certificates",
    shreeVarahi: "No CIBIL score required, basic KYC documents only"
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "faq-1",
    category: "transfer",
    question: "What is a Gold Loan Takeover (Balance Transfer)?",
    answer: "A gold loan takeover (or balance transfer) allows you to move your existing gold loan from your current bank or NBFC (like Muthoot, Manappuram, ICICI, SBI) to Shree Varahi Associates. This helps you secure significantly lower interest rates, reduced monthly EMIs, longer repayment tenure, and instant Top-Up cash on your pledged jewelry without losing ownership of your valuable asset.",
    highlightText: "Move your debt to get lower interest, top-up cash, and better terms."
  },
  {
    id: "faq-2",
    category: "transfer",
    question: "Is it possible to transfer a gold loan from an NBFC to another bank or partner?",
    answer: "Yes, absolutely! You can transfer your gold loan from any NBFC or bank to Shree Varahi Associates. Our team coordinates directly with your current lender, pays off the total outstanding loan balance via NEFT/RTGS/Cheque, and securely transfers your pledged gold to our RBI-regulated partner bank vaults.",
    highlightText: "Direct settlement via NEFT/RTGS with complete documentation."
  },
  {
    id: "faq-3",
    category: "valuation",
    question: "What is the maximum loan amount I can get through a Gold Loan Takeover?",
    answer: "You can get a gold loan up to ₹5 Crore depending on the net weight, purity (18K to 24K), and current market value of your gold ornaments. Under 2026 RBI guidelines, Loan-to-Value (LTV) limits are tiered: up to 85% LTV for loans up to ₹2.5 Lakh, 80% LTV for ₹2.5 Lakh to ₹5 Lakh, and 75% LTV for loans above ₹5 Lakh.",
    highlightText: "Up to ₹5 Crore loan disbursal with up to 85% LTV under 2026 RBI rules."
  },
  {
    id: "faq-4",
    category: "rbi_rules",
    question: "What are the new RBI Gold Loan rules effective for 2026?",
    answer: "The RBI 2026 guidelines introduce: 1) Tiered Loan-to-Value (LTV) structure (85% ≤₹2.5L, 80% ₹2.5L-₹5L, 75% >₹5L); 2) Mandatory return of pledged gold within 7 working days after full loan closure (with ₹5,000 per day compensation penalty for delays); 3) Mandatory Key Fact Statement (KFS) detailing total costs and charges; 4) 14-day advance public notice before any auction with reserve price set no lower than 90% of market value.",
    highlightText: "Strict 7-day gold return timeline, ₹5,000/day delay compensation, and Key Fact Statement."
  },
  {
    id: "faq-5",
    category: "safety",
    question: "How safe is my pledged gold ornament with Shree Varahi Associates?",
    answer: "Your gold is 100% safe and fully insured against theft or natural disasters. It is stored in heavily guarded, electronically monitored bank strong-room vaults in accordance with Reserve Bank of India regulations. When your loan is repaid, your exact gold ornaments are returned in original condition within 7 days.",
    highlightText: "100% Insured & stored in electronically monitored Bank Strong-Rooms."
  },
  {
    id: "faq-6",
    category: "charges",
    question: "Are there any hidden processing fees or extra charges for loan transfer?",
    answer: "Shree Varahi Associates maintains complete transparency. We provide a clear Key Fact Statement (KFS) detailing all terms upfront. We ensure zero hidden extra charges so that the interest savings go straight to your pocket.",
    highlightText: "Zero hidden charges & transparent Key Fact Statement (KFS)."
  },
  {
    id: "faq-7",
    category: "transfer",
    question: "Can I get extra Top-Up cash during the takeover process?",
    answer: "Yes! If the market price of gold has increased since you originally pledged your jewelry, or if your previous lender offered a low loan per gram, Shree Varahi Associates can re-value your gold at current market rates and disburse extra Top-Up cash directly into your bank account during the takeover.",
    highlightText: "Get extra cash on the same jewelry if gold prices have appreciated."
  },
  {
    id: "faq-8",
    category: "transfer",
    question: "Do I need a CIBIL score or salary proof to apply?",
    answer: "No! Gold loans are secured loans backed by your gold ornaments. First-time borrowers or individuals without formal income proof or CIBIL credit history can easily apply. All you need are basic KYC documents (Aadhaar, PAN) and your gold ornaments.",
    highlightText: "No CIBIL score or income certificate required."
  },
  {
    id: "faq-9",
    category: "charges",
    question: "What is the Gold Overdraft Facility?",
    answer: "If you want to secure your gold without withdrawing immediate cash, you can opt for our Gold Overdraft facility. Your ornaments remain safe in our bank vault, and you only pay interest on the exact cash amount you withdraw as and when needed.",
    highlightText: "Pay interest only on the exact cash withdrawn."
  }
];

export const FAQ_LIST_KN: FAQItem[] = [
  {
    id: "faq-1",
    category: "transfer",
    question: "ಚಿನ್ನದ ಸಾಲದ ಟೇಕ್‌ಓವರ್ (ಸಾಲ ವರ್ಗಾವಣೆ) ಎಂದರೆ ಏನು?",
    answer: "ಚಿನ್ನದ ಸಾಲದ ಟೇಕ್‌ಓವರ್ ಎಂದರೆ ನಿಮ್ಮ ಹಾಲಿ ಚಿನ್ನದ ಸಾಲವನ್ನು ಬ್ಯಾಂಕ್ ಅಥವಾ ಎನ್‌ಬಿಎಫ್‌ಸಿಯಿಂದ (ಮುತ್ತೂಟ್, ಮಣಪ್ಪುರಂ, ಇತ್ಯಾದಿ) ಶ್ರೀ ವರಾಹಿ ಅಸೋಸಿಯೇಟ್ಸ್‌ಗೆ ವರ್ಗಾಯಿಸುವುದು. ಇದರಿಂದ ನಿಮಗೆ ಅತ್ಯಂತ ಕಡಿಮೆ ಬಡ್ಡಿದರ, ಕಡಿಮೆ ಮಾಸಿಕ ಕಂತುಗಳು, ಹೆಚ್ಚಿನ ಅವಧಿ ಮತ್ತು ಅಗತ್ಯವಿದ್ದರೆ ತಕ್ಷಣದ ಹೆಚ್ಚುವರಿ ನಗದು (Top-Up Cash) ದೊರೆಯುತ್ತದೆ.",
    highlightText: "ಕಡಿಮೆ ಬಡ್ಡಿ, ಹೆಚ್ಚುವರಿ ನಗದು ಮತ್ತು ಉತ್ತಮ ಸೌಲಭ್ಯಕ್ಕಾಗಿ ನಿಮ್ಮ ಸಾಲ ವರ್ಗಾಯಿಸಿ."
  },
  {
    id: "faq-2",
    category: "transfer",
    question: "ಎನ್‌ಬಿಎಫ್‌ಸಿ ಅಥವಾ ಬ್ಯಾಂಕಿನಿಂದ ಇನ್ನೊಂದು ಸಂಸ್ಥೆಗೆ ಚಿನ್ನದ ಸಾಲವನ್ನು ವರ್ಗಾಯಿಸಲು ಸಾಧ್ಯವೇ?",
    answer: "ಖಂಡಿತವಾಗಿ ಸಾಧ್ಯ! ನೀವು ಯಾವುದೇ ಎನ್‌ಬಿಎಫ್‌ಸಿ ಅಥವಾ ಬ್ಯಾಂಕಿನಿಂದ ಶ್ರೀ ವರಾಹಿ ಅಸೋಸಿಯೇಟ್ಸ್‌ಗೆ ಸಾಲ ವರ್ಗಾಯಿಸಬಹುದು. ನಮ್ಮ ತಂಡವು ನೇರವಾಗಿ ನಿಮ್ಮ ಹಾಲಿ ಸಂಸ್ಥೆಯೊಂದಿಗೆ ವ್ಯವಹರಿಸಿ, ಪೂರ್ಣ ಸಾಲದ ಮೊತ್ತವನ್ನು NEFT/RTGS/ಚೆಕ್ ಮೂಲಕ ಪಾವತಿಸಿ, ನಿಮ್ಮ ಚಿನ್ನವನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಪಡೆಯುತ್ತದೆ.",
    highlightText: "ನೇರ NEFT/RTGS ಪಾವತಿಯ ಮೂಲಕ ಸುಲಭ ಸಾಲ ವರ್ಗಾವಣೆ ಪ್ರಕ್ರಿಯೆ."
  },
  {
    id: "faq-3",
    category: "valuation",
    question: "ಚಿನ್ನದ ಸಾಲ ವರ್ಗಾವಣೆಯ ಮೂಲಕ ನಾನು ಪಡೆಯಬಹುದಾದ ಗರಿಷ್ಠ ಸಾಲದ ಮೊತ್ತ ಎಷ್ಟು?",
    answer: "ನಿಮ್ಮ ಚಿನ್ನದ ನಿವ್ವಳ ತೂಕ, ಕ್ಯಾರೆಟ್ (18K ನಿಂದ 24K) ಮತ್ತು ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ದರದ ಆಧಾರದ ಮೇಲೆ ನೀವು ₹5 ಕೋಟಿಯವರೆಗೆ ಸಾಲ ಪಡೆಯಬಹುದು. 2026 ರ ಆರ್‌ಬಿಐ ನಿಯಮಗಳ ಪ್ರಕಾರ: ₹2.5 ಲಕ್ಷದವರೆಗೆ ಶೇ. 85% LTV, ₹2.5 - ₹5 ಲಕ್ಷಕ್ಕೆ ಶೇ. 80% LTV ಮತ್ತು ₹5 ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ಸಾಲಕ್ಕೆ ಶೇ. 75% LTV ಸಿಗುತ್ತದೆ.",
    highlightText: "2026 ಆರ್‌ಬಿಐ ನಿಯಮಗಳಡಿ ಶೇ. 85% ವರೆಗೆ LTV ಯೊಂದಿಗೆ ₹5 ಕೋಟಿಯವರೆಗೆ ಸಾಲ."
  },
  {
    id: "faq-4",
    category: "rbi_rules",
    question: "2026 ರ ಹೊಸ ಆರ್‌ಬಿಐ ಚಿನ್ನದ ಸಾಲದ ನಿಯಮಗಳು ಯಾವುವು?",
    answer: "ಆರ್‌ಬಿಐ 2026 ರ ಹೊಸ ನಿಯಮಗಳು: 1) ಹಂತವಾರು ಸಾಲ-ಮೌಲ್ಯ (LTV) ಮಿತಿ (85% ≤₹2.5L, 80% ₹2.5L-₹5L, 75% >₹5L); 2) ಸಾಲ ತೀರಿದ ನಂತರ 7 ಕೆಲಸದ ದಿನಗಳಲ್ಲಿ ಚಿನ್ನವನ್ನು ಕಡ್ಡಾಯವಾಗಿ ಹಿಂತಿರುಗಿಸುವುದು (ವಿಳಂಬವಾದರೆ ದಿನಕ್ಕೆ ₹5,000 ದಂಡ ಪರಿಹಾರ); 3) ಯಾವುದೇ ರಹಸ್ಯ ಶುಲ್ಕವಿಲ್ಲದ ಪಾರದರ್ಶಕ ಕೀ ಫ್ಯಾಕ್ಟ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್ (KFS); 4) ಹರಾಜು ಮಾಡುವ ಮುನ್ನ 14 ದಿನಗಳ ಲಿಖಿತ ಮುನ್ಸೂಚನೆ.",
    highlightText: "ಕಡ್ಡಾಯ 7 ದಿನಗಳ ಚಿನ್ನ ಹಿಂತಿರುಗಿಸುವ ಗಡುವು, ದಿನಕ್ಕೆ ₹5,000 ವಿಳಂಬ ಪರಿಹಾರ ಮತ್ತು KFS ವರದಿ."
  },
  {
    id: "faq-5",
    category: "safety",
    question: "ಶ್ರೀ ವರಾಹಿ ಅಸೋಸಿಯೇಟ್ಸ್‌ನಲ್ಲಿ ನನ್ನ ಚಿನ್ನದ ಆಭರಣಗಳು ಎಷ್ಟು ಸುರಕ್ಷಿತ?",
    answer: "ನಿಮ್ಮ ಚಿನ್ನವು 100% ಸುರಕ್ಷಿತ ಮತ್ತು ಕಳ್ಳತನ ಹಾಗೂ ನೈಸರ್ಗಿಕ ವಿಕೋಪಗಳ ವಿರುದ್ಧ ಸಂಪೂರ್ಣ ವಿಮೆ ಹೊಂದಿದೆ. ಇದನ್ನು ಆರ್‌ಬಿಐ ನಿಯಮಾವಳಿಗಳಂತೆ ಬ್ಯಾಂಕ್ ವಾಲ್ಟ್ / ಗರಿಷ್ಠ ಭದ್ರತೆಯ ಕೊಠಡಿಗಳಲ್ಲಿ ಇಡಲಾಗುತ್ತದೆ. ಸಾಲ ತೀರಿದ ನಂತರ ನಿಮ್ಮ ಆಭರಣಗಳು ಮೂಲ ಸ್ಥಿತಿಯಲ್ಲೇ ಹಿಂತಿರುಗಿಸಲ್ಪಡುತ್ತವೆ.",
    highlightText: "100% ವಿಮೆ ಹೊಂದಿರುವ, ಎಲೆಕ್ಟ್ರಾನಿಕ್ ಮೇಲ್ವಿಚಾರಣೆಯ ಬ್ಯಾಂಕ್ ಲಾಕರ್."
  },
  {
    id: "faq-6",
    category: "charges",
    question: "ಸಾಲ ವರ್ಗಾವಣೆಗೆ ಯಾವುದೇ ರಹಸ್ಯ ಸಂಸ್ಕರಣಾ ಶುಲ್ಕಗಳು ಅಥವಾ ಹೆಚ್ಚುವರಿ ವೆಚ್ಚಗಳಿವೆಯೇ?",
    answer: "ಶ್ರೀ ವರಾಹಿ ಅಸೋಸಿಯೇಟ್ಸ್‌ನಲ್ಲಿ ಯಾವುದೇ ರಹಸ್ಯ ಶುಲ್ಕಗಳಿಲ್ಲ. ನಾವು ಪ್ರತಿಯೊಂದು ವೆಚ್ಚದ ವಿವರವಿರುವ ಕೀ ಫ್ಯಾಕ್ಟ್ ಸ್ಟೇಟ್‌ಮೆಂಟ್ (KFS) ನೀಡುತ್ತೇವೆ. ಯಾವುದೇ ಗುಪ್ತ ಶುಲ್ಕಗಳಿಲ್ಲದೆ ಸಂಪೂರ್ಣ ಪಾರದರ್ಶಕತೆ ಕಾಯ್ದುಕೊಳ್ಳುತ್ತೇವೆ.",
    highlightText: "ಯಾವುದೇ ರಹಸ್ಯ ಶುಲ್ಕಗಳಿಲ್ಲ ಮತ್ತು ಪಾರದರ್ಶಕ KFS ಹೇಳಿಕೆ."
  },
  {
    id: "faq-7",
    category: "transfer",
    question: "ಸಾಲ ವರ್ಗಾವಣೆಯ ಸಮಯದಲ್ಲಿ ನಾನು ಹೆಚ್ಚುವರಿ ನಗದು (Top-Up Cash) ಪಡೆಯಬಹುದೇ?",
    answer: "ಹೌದು! ನೀವು ಮೂಲತಃ ಚಿನ್ನ ಅಡವಿಟ್ಟ ದಿನಕ್ಕಿಂತ ಈಗ ಚಿನ್ನದ ಬೆಲೆ ಹೆಚ್ಚಾಗಿದ್ದರೆ, ಅಥವಾ ಹಳೆಯ ಸಂಸ್ಥೆ ಕಡಿಮೆ ಸಾಲ ನೀಡಿದ್ದರೆ, ನಾವು ಪ್ರಸ್ತುತ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗೆ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ ನಿಮಗೆ ಹೆಚ್ಚುವರಿ ನಗದು (Top-Up) ನೀಡುತ್ತೇವೆ.",
    highlightText: "ಚಿನ್ನದ ಬೆಲೆ ಏರಿಕೆಯಾಗಿದ್ದರೆ ಅದೇ ಆಭರಣಗಳ ಮೇಲೆ ತಕ್ಷಣವೇ ಹೆಚ್ಚುವರಿ ನಗದು ಪಡೆಯಿರಿ."
  },
  {
    id: "faq-8",
    category: "transfer",
    question: "ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಸಿಬಿಲ್ (CIBIL) ಸ್ಕೋರ್ ಅಥವಾ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ ಅಗತ್ಯವಿದೆಯೇ?",
    answer: "ಇಲ್ಲ! ಚಿನ್ನದ ಸಾಲವು ನಿಮ್ಮ ಚಿನ್ನಾಭರಣಗಳ ಭದ್ರತೆಯ ಮೇಲಿರುತ್ತದೆ. ಪ್ರಥಮ ಬಾರಿಗೆ ಸಾಲ ಪಡೆಯುವವರಿಗೆ ಅಥವಾ ಸಿಬಿಲ್ ಸ್ಕೋರ್ ಇಲ್ಲದವರಿಗೂ ಸಾಲ ಸಿಗುತ್ತದೆ. ಕೇವಲ ಮೂಲ ಕೆವೈಸಿ (ಆಧಾರ್, ಪಾನ್ ಕಾರ್ಡ್) ಸಾಕು.",
    highlightText: "ಯಾವುದೇ ಸಿಬಿಲ್ ಸ್ಕೋರ್ ಅಥವಾ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರದ ಅಗತ್ಯವಿಲ್ಲ."
  },
  {
    id: "faq-9",
    category: "charges",
    question: "ಚಿನ್ನದ ಓವರ್‌ಡ್ರಾಫ್ಟ್ (Overdraft) ಸೌಲಭ್ಯ ಎಂದರೇನು?",
    answer: "ತಕ್ಷಣವೇ ಸಂಪೂರ್ಣ ಹಣವನ್ನು ಹಿಂಪಡೆಯದೆ ನಿಮ್ಮ ಚಿನ್ನವನ್ನು ಸುರಕ್ಷಿತವಾಗಿಡಲು ಬಯಸಿದರೆ, ಚಿನ್ನದ ಓವರ್‌ಡ್ರಾಫ್ಟ್ ಸೌಲಭ್ಯ ಬಳಸಬಹುದು. ನಿಮ್ಮ ಆಭರಣಗಳು ಲಾಕರ್‌ನಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿರುತ್ತವೆ ಮತ್ತು ನೀವು ಬಳಸಿದ ಮೊತ್ತಕ್ಕೆ ಮಾತ್ರ ಬಡ್ಡಿ ಪಾವತಿಸುತ್ತೀರಿ.",
    highlightText: "ನೀವು ಹಿಂಪಡೆದ ಮೊತ್ತಕ್ಕೆ ಮಾತ್ರ ಬಡ್ಡಿ ಪಾವತಿಸಿ."
  }
];

export const LTV_TIERS = [
  { maxLoan: 250000, ltv: 85, label: "Up to ₹2.5 Lakh", desc: "Max 85% LTV with simplified KYC & quick approval" },
  { maxLoan: 500000, ltv: 80, label: "₹2.5 Lakh to ₹5 Lakh", desc: "Max 80% LTV with standard KYC requirements" },
  { maxLoan: Infinity, ltv: 75, label: "Above ₹5 Lakh", desc: "Max 75% LTV with priority fast-track disbursal" }
];
