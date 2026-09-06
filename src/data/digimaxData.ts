export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  monthlyPrice: number;
  annualPrice: number;
  monthlyPriceAED: number;
  annualPriceAED: number;
  popular?: boolean;
  includesLabel: string;
  features: string[];
  ctaLabel: string;
  footnote: string;
  deliverables?: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter-accounting',
    name: 'Starter Pack',
    subtitle: 'Full-cycle bookkeeping, bank reconciliations, and UAE VAT compliance for growing businesses.',
    monthlyPrice: 490,
    annualPrice: 390,
    monthlyPriceAED: 1800,
    annualPriceAED: 1430,
    popular: false,
    includesLabel: 'Includes:',
    features: [
      'Full double-entry bookkeeping & general ledger maintenance',
      'Monthly bank, credit card & supplier reconciliations',
      'UAE VAT return preparation & FTA compliance filing',
      'Monthly Profit & Loss, Balance Sheet & Cash Summary',
      'Audit-ready standardized Excel workpapers & schedules'
    ],
    ctaLabel: 'PURCHASE ORDER',
    footnote: '*Ideal for startups and SMEs requiring punctual month-end close and zero VAT penalties.',
    deliverables: [
      'General Ledger Review',
      'Bank Reconciliation Statement',
      'Quarterly UAE VAT Return (Form 201)',
      'Management Accounts Summary'
    ]
  },
  {
    id: 'growth-fpa-analyst',
    name: 'Small Bussines',
    subtitle: 'Comprehensive financial reporting, dynamic three-statement models, and working capital optimization.',
    monthlyPrice: 990,
    annualPrice: 790,
    monthlyPriceAED: 3600,
    annualPriceAED: 2900,
    popular: true,
    includesLabel: 'Includes:',
    features: [
      'All deliverables from the Starter Pack included',
      'Dynamic three-statement financial model & 13-week cash flow',
      'Budget vs. Actual variance analysis & EBITDA bridge',
      'Interactive Power BI executive performance dashboard',
      'Working capital, inventory & receivables turnover tracking'
    ],
    ctaLabel: 'PURCHASE ORDER',
    footnote: '*Recommended for expanding enterprises seeking institutional FP&A and executive clarity.',
    deliverables: [
      'Dynamic 3-Statement Model',
      '13-Week Direct Cash Flow Forecast',
      'Monthly Board Performance Pack',
      'Power BI Executive KPI Dashboard',
      'Variance Analysis & Root-Cause Briefing'
    ]
  },
  {
    id: 'enterprise-cfo-advisory',
    name: 'Enterprise',
    subtitle: 'High-level corporate finance advisory, DCF corporate valuation, M&A due diligence, and board advisory.',
    monthlyPrice: 1990,
    annualPrice: 1590,
    monthlyPriceAED: 7200,
    annualPriceAED: 5800,
    popular: false,
    includesLabel: 'Includes:',
    features: [
      'All deliverables from Small Business included',
      'Advanced DCF valuation & multi-scenario sensitivity modeling',
      'M&A due diligence schedules & post-acquisition integration',
      'Automated Power Query ETL pipelines & ERP integration (SAP/Oracle)',
      'IFRS/GAAP conversion & external statutory audit defense'
    ],
    ctaLabel: 'PURCHASE ORDER',
    footnote: '*Tailored for corporate groups, multi-entity holdings, and firms preparing for capital raise or audit.',
    deliverables: [
      'Multi-Tier DCF Valuation Model',
      'Multi-Entity Consolidation Architecture',
      'Automated Power Query Data Pipeline',
      'IFRS 15 / 16 / 9 Technical Memorandums',
      'Board-Level Strategic Financial Deck'
    ]
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Tax & Compliance',
    question: 'How do you handle UAE Corporate Tax (9%) and VAT compliance for commercial businesses?',
    answer: 'I implement comprehensive tax accounting under Federal Decree-Law No. 47 on the Taxation of Corporations and Businesses. This includes determining taxable income from audited IFRS financial statements, adjusting for exempt income and non-deductible expenses (such as the 50% entertainment limitation and interest capping under General Interest Deduction Limitation Rules), managing Small Business Relief thresholds (AED 3M revenue), and preparing compliant corporate tax filings. For VAT, I handle quarterly reconciliations, reverse charge mechanisms for cross-border transactions, and audit-ready FTA schedules.'
  },
  {
    id: 'faq-2',
    category: 'Financial Modeling',
    question: 'What makes your dynamic three-statement models superior to standard spreadsheets?',
    answer: 'My financial models adhere to rigorous FAST and institutional financial modeling standards. Every model features dynamic bidirectional linkages: net income feeds retained earnings on the Balance Sheet; non-cash items and working capital changes flow into Cash Flow from Operations; debt schedules determine interest expense and closing balances; and an automated circularity breaker manages interest calculations safely. Models include dedicated driver assumption tabs, automated scenario managers (Base, Bull, Bear), and dynamic error-check audits on every sheet.'
  },
  {
    id: 'faq-3',
    category: 'Accounting Standards',
    question: 'How do you bridge and transition financial statements between IFRS and US GAAP?',
    answer: 'With 9+ years of hands-on experience, I systematically reconcile differences between IFRS and US GAAP frameworks. Key areas include lease accounting (IFRS 16 single on-balance sheet model vs. US GAAP ASC 842 dual classification of operating vs. finance leases), revenue recognition timing under IFRS 15 vs. ASC 606, inventory valuation rules (IFRS prohibits LIFO; US GAAP allows it), and impairment testing methodologies (discounted cash flow reversal rules under IFRS vs. two-step undiscounted test under US GAAP).'
  },
  {
    id: 'faq-4',
    category: 'ERP & Systems',
    question: 'Which ERP systems and analytical tools have you worked with across your career?',
    answer: 'I have extensive hands-on experience with major tier-1 and tier-2 enterprise platforms, including SAP ERP (ECC & S/4HANA FI/CO modules), Oracle NetSuite, QuickBooks Enterprise / Online, and Tally Prime. On the analytics front, I build production Power BI dashboards with DAX measures and automated Power Query ETL pipelines that ingest millions of transaction rows, reducing month-end reporting time from days to minutes.'
  },
  {
    id: 'faq-5',
    category: 'Engagement & Location',
    question: 'Are you currently available in Dubai / UAE for immediate full-time or advisory roles?',
    answer: 'Yes. I am currently based in Dubai, United Arab Emirates, and immediately available for Senior Accountant, Financial Analyst, Assistant Finance Manager, or FP&A roles with valid UAE residency status. I am also available for targeted advisory engagements, including financial model construction, audit preparation, and multi-currency consolidation projects.'
  }
];

export const NAV_LINKS = [
  { label: 'Overview', href: '#home' },
  { label: 'About', href: '#about' },
  { 
    label: 'Expertise', 
    href: '#accounting',
    hasDropdown: true,
    subItems: [
      { label: 'Accounting & IFRS Compliance', href: '#accounting' },
      { label: 'Dynamic Financial Models', href: '#financial-models' },
      { label: 'Data Analytics & Power BI', href: '#data-analytics' },
      { label: 'Technical Tools & ERP Stack', href: '#tools' },
      { label: 'Key Skills Matrix', href: '#skills' }
    ]
  },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#projects' },
  { 
    label: 'Credentials', 
    href: '#education',
    hasDropdown: true,
    subItems: [
      { label: 'Education & Certifications', href: '#education' },
      { label: 'Key Skills Matrix', href: '#skills' },
      { label: 'Core Professional Values', href: '#values' },
      { label: 'Enterprise Trust & ERP Stack', href: '#trust-showcase' },
      { label: 'Common Questions & FAQ', href: '#faq' }
    ]
  },
  { label: 'Contact', href: '#contact' }
];

export const FOOTER_SECTIONS = {
  services: [
    { label: 'Full-Cycle Accounting & GL', href: '#accounting' },
    { label: 'Dynamic 3-Statement Modeling', href: '#financial-models' },
    { label: 'DCF & Corporate Valuation', href: '#financial-models' },
    { label: 'UAE VAT & Corporate Tax (9%)', href: '#accounting' },
    { label: 'Power BI Executive Dashboards', href: '#data-analytics' },
    { label: 'Working Capital & Cash Flow', href: '#experience' }
  ],
  support: [
    { label: 'Common Questions & FAQ', href: '#faq' },
    { label: 'Education & Certifications', href: '#education' },
    { label: 'Categorized Skills Matrix', href: '#skills' },
    { label: 'Download ATS Resume / CV', href: '#contact' },
    { label: 'Direct WhatsApp Advisory', href: 'https://wa.me/971509143732' }
  ],
  analytics: [
    { label: '13-Week Cash Flow Forecasts', href: '#financial-models' },
    { label: 'Budget vs. Actual Variance Analysis', href: '#data-analytics' },
    { label: 'Power Query Automated ETL', href: '#data-analytics' },
    { label: 'SAP & Oracle NetSuite Reporting', href: '#tools' },
    { label: 'IFRS & US GAAP Conversion', href: '#accounting' }
  ],
  company: [
    { label: 'About Jameel Akhtar', href: '#about' },
    { label: 'Education & Certifications', href: '#education' },
    { label: '9+ Years Experience Timeline', href: '#experience' },
    { label: 'Featured Corporate Projects', href: '#projects' },
    { label: 'Key Skills Matrix', href: '#skills' },
    { label: 'Contact & Dubai Availability', href: '#contact' }
  ]
};
