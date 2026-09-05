import { 
  FinancialProject, 
  ExperienceItem, 
  SkillCategory, 
  WorkflowStep, 
  EducationItem, 
  CertificationItem, 
  ToolItem,
  LanguageItem 
} from '../types';

export const CANDIDATE_PROFILE = {
  name: 'Jameel Akhtar',
  title: 'Accountant & Financial Analyst',
  subheading: 'Turning financial data into accurate reporting, actionable insights, and better business decisions.',
  location: 'Dubai, United Arab Emirates',
  email: 'jameelakhtar1997f@gmail.com',
  phone: '+971 50 914 3732',
  linkedin: 'https://www.linkedin.com/in/jameel-akhtar-184508431',
  availability: 'Available for Assistant Manager, Senior Accountant, Financial Analyst & FP&A Roles in Dubai / UAE',
  summary: `Results-driven Accountant and Financial Analyst with 9+ years of expertise in full-cycle accounting, FP&A, and financial modeling within multi-currency environments. Proven track record of leading month-end closes, bank reconciliations, and compliance under IFRS and GAAP frameworks. Skilled in building dynamic three-statement models, DCF valuations, and automated dashboards that empower executive leadership to optimize working capital, reduce budget variances, and execute data-driven strategies.`,
  shortTagline: 'Accounting | Financial Analysis | Financial Modeling | Advanced Excel | Reporting',
  stats: [
    { label: 'Corporate Experience', value: '9+ Years', desc: 'Full-cycle accounting, FP&A, IFRS/GAAP reporting & UAE VAT/Corporate Tax' },
    { label: 'Core Expertise', value: 'Accounting & FP&A', desc: 'General ledger, reconciliations, fleet accounting & variance analysis' },
    { label: 'Financial Models', value: 'Dynamic Models', desc: 'Three-statement, DCF valuation, 13-week cash flow & unit economics' },
    { label: 'Primary Analytical Stack', value: 'Excel, ERP & BI', desc: 'Power Query ETL, SAP ERP, Oracle NetSuite, QuickBooks & Power BI' },
  ]
};

export const HERO_FINANCIAL_DATA = {
  periods: ['FY23', 'FY24', 'LTM'] as const,
  datasets: {
    FY23: {
      revenue: '$24.8M',
      revenueRaw: 24.8,
      grossProfit: '$11.4M',
      grossMargin: '46.0%',
      ebitda: '$5.7M',
      ebitdaMargin: '23.0%',
      ebit: '$4.2M',
      netIncome: '$3.1M',
      netMargin: '12.5%',
      cashFlow: '$4.6M',
      currentRatio: '2.1x',
      quickRatio: '1.6x',
      roe: '18.4%',
      trendData: [
        { quarter: 'Q1 23', rev: 5.6, ebitda: 1.2, margin: 21.4 },
        { quarter: 'Q2 23', rev: 6.0, ebitda: 1.4, margin: 23.3 },
        { quarter: 'Q3 23', rev: 6.3, ebitda: 1.5, margin: 23.8 },
        { quarter: 'Q4 23', rev: 6.9, ebitda: 1.6, margin: 23.2 },
      ]
    },
    FY24: {
      revenue: '$28.4M',
      revenueRaw: 28.4,
      grossProfit: '$13.6M',
      grossMargin: '47.9%',
      ebitda: '$7.1M',
      ebitdaMargin: '25.0%',
      ebit: '$5.5M',
      netIncome: '$4.2M',
      netMargin: '14.8%',
      cashFlow: '$6.0M',
      currentRatio: '2.3x',
      quickRatio: '1.8x',
      roe: '21.2%',
      trendData: [
        { quarter: 'Q1 24', rev: 6.7, ebitda: 1.6, margin: 23.8 },
        { quarter: 'Q2 24', rev: 7.0, ebitda: 1.7, margin: 24.2 },
        { quarter: 'Q3 24', rev: 7.2, ebitda: 1.8, margin: 25.0 },
        { quarter: 'Q4 24', rev: 7.5, ebitda: 2.0, margin: 26.6 },
      ]
    },
    LTM: {
      revenue: '$31.2M',
      revenueRaw: 31.2,
      grossProfit: '$15.3M',
      grossMargin: '49.0%',
      ebitda: '$8.2M',
      ebitdaMargin: '26.3%',
      ebit: '$6.4M',
      netIncome: '$4.9M',
      netMargin: '15.7%',
      cashFlow: '$6.9M',
      currentRatio: '2.4x',
      quickRatio: '1.9x',
      roe: '22.8%',
      trendData: [
        { quarter: 'Q3 24', rev: 7.2, ebitda: 1.8, margin: 25.0 },
        { quarter: 'Q4 24', rev: 7.5, ebitda: 2.0, margin: 26.6 },
        { quarter: 'Q1 25', rev: 8.1, ebitda: 2.1, margin: 25.9 },
        { quarter: 'Q2 25', rev: 8.4, ebitda: 2.3, margin: 27.4 },
      ]
    }
  }
};

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Assistant Manager / General Accountant',
    company: 'MRM Rent A Car LLC',
    location: 'Dubai, UAE',
    period: '2025 – Present',
    employmentType: 'Full-time',
    summary: 'Co-lead day-to-day financial accounting, operational controls, and statutory compliance for an expanding car rental enterprise in Dubai. Oversee complete general ledger operations, UAE Federal Tax Authority (FTA) VAT & Corporate Tax filings, fleet asset accounting, high-volume RTA/Salik reconciliations, and WPS payroll processing while assisting executive leadership with operational decision-making.',
    responsibilities: [
      'Financial Management & Branch Operations: Assist general management in supervising daily financial and counter operations; enforce internal controls over daily cash collections, credit card settlements, online payment gateway feeds, and security deposit management.',
      'UAE Tax & Regulatory Compliance: Prepare and submit quarterly FTA VAT returns (Form VAT201) and oversee UAE Corporate Tax (9%) alignment; ensure accurate tax classification across rental revenue, damage recovery charges, pass-through tolls, and insurance settlements.',
      'RTA, Salik & Portal Reconciliations: Audit and reconcile high-volume daily transactions from Dubai RTA traffic fine portals, Salik toll accounts, Abu Dhabi Darb, and payment gateways against rental management software contracts and accounting ledgers.',
      'Fleet Fixed Asset Accounting: Maintain the fixed asset register for the entire vehicle fleet; compute monthly depreciation (IFRS compliance), calculate gain/loss on vehicle disposals and trade-ins, and track vehicle acquisition/lease financing schedules.',
      'Accounts Receivable & Security Deposit Ledgers: Supervise corporate accounts receivable and B2B client credit terms; manage security deposit holding accounts, enforcing strict compliance with UAE consumer protection regulations for timely 30-day client refunds.',
      'Payroll & Vendor Payable Management: Process monthly staff payroll via the UAE Wage Protection System (WPS); calculate End-of-Service Benefits (EOSB) provisions; manage Accounts Payable for auto workshops, spare parts vendors, insurance providers, and dealership partners.',
      'Audit File Compilation & Financial Reporting: Compile complete year-end audit files for external statutory auditors; generate monthly P&L, balance sheet, cash flow statements, and fleet utilization reports (RevPAV) for executive review.'
    ],
    keyAchievements: [
      'Automated Reconciliation System: Integrated RTA traffic fine and Salik toll statement downloads directly into the accounting software, eliminating manual entry errors and cutting billing dispute resolution time by 60%.',
      '100% Tax Compliance Record: Maintained a flawless statutory record with zero FTA penalties or late-filing notices across all quarterly VAT returns and corporate tax registrations.',
      'Working Capital Optimization: Restructured security deposit refund protocols and corporate credit collection workflows, reducing Accounts Receivable past 60 days by 25% and improving operational cash flow.'
    ],
    tools: ['ERP Software', 'UAE FTA VAT & Corporate Tax (9%)', 'Dubai RTA & Salik Portals', 'Advanced Excel (Power Query)', 'WPS Payroll'],
    businessImpact: 'Streamlined internal financial controls, plugged revenue leakage from unbilled tolls/traffic fines, and provided executive leadership with transparent financial visibility to support sustainable fleet growth in the UAE market.'
  },
  {
    id: 'exp-2',
    role: 'Sales Officer & Management Accountant',
    company: 'Almumayes Almustaqbal Car Rental',
    location: 'Dubai, UAE',
    period: '2023 – 2025',
    employmentType: 'Full-time',
    summary: 'Spearheaded financial management, fleet revenue optimization, operational budgeting, and B2B client acquisition for a car rental operator in Dubai. Combined commercial sales execution with management accounting to analyze vehicle-level profitability, streamline working capital, and optimize fleet utilization.',
    responsibilities: [
      'Commercial Leasing & Sales Operations: Managed the B2B corporate lease sales pipeline and long-term fleet contracts; structured competitive monthly/annual rental packages while monitoring Average Daily Rates (ADR) and seasonal pricing strategies.',
      'Fleet Profitability & Unit Economics: Conducted vehicle-level margin analysis across Economy, SUV, and Luxury segments; computed Total Cost of Ownership (TCO), direct operational costs, and Revenue Per Available Vehicle (RevPAV) to guide pricing and fleet composition.',
      'Financial Ratio & Performance Analysis: Performed monthly financial statement analysis, computing liquidity, solvency, and operational efficiency ratios to evaluate fleet asset turnover and commercial health for executive review.',
      'Cash Position & Working Capital Management: Delivered weekly cash position reports and 13-week rolling cash flow forecasts, factoring in security deposit refund holdbacks, merchant gateway settlements, and pass-through collections for Salik and RTA traffic fines.',
      'Capital Budgeting & Fleet Expansion: Assisted in preparing annual master operating budgets across sales, reservations, and maintenance departments; built DCF valuation and hurdle-rate models for proposed fleet expansion and vehicle trade-in proposals.',
      'Direct Cost & Variance Control: Monitored Direct Operational Costs (fleet insurance premiums, routine servicing, warranty repairs, tires/brakes, and licensing fees), identifying cost variances to protect gross margins.'
    ],
    keyAchievements: [
      'Corporate Margin Recovery: Engineered a dynamic Fleet & Contract Margin Tracker in Excel that flagged underperforming corporate rental accounts, enabling rate renegotiations that recovered 4.2% in gross margin.',
      'Fleet Financial Model: Designed an automated Fleet Asset & Depreciation Model tailored to car rental lifecycles, improving residual value tracking and maintenance cost provisions.',
      'Utilization & Revenue Growth: Secured key B2B corporate contracts during low-season months, increasing overall fleet utilization by 15% and stabilizing monthly cash flow.'
    ],
    tools: ['Microsoft Excel (Financial Modeling)', 'Fleet Management Systems', 'DCF Valuation & Budgeting', 'Power Query ETL', 'KPI Dashboards'],
    businessImpact: 'Bridged commercial sales strategy with rigorous management accounting, transforming raw operational data into actionable profitability benchmarks that protected margins and ensured working capital liquidity.'
  },
  {
    id: 'exp-3',
    role: 'Accountant & Financial Analyst',
    company: 'Almehrezi Rent A Car LLC',
    location: 'Dubai, UAE',
    period: '2017 – 2023',
    employmentType: 'Full-time',
    summary: 'Led end-to-end month-end closing, monthly financial statement consolidation under IFRS, and fleet financial management for commercial vehicle rental operations in Dubai. Specialized in UAE tax compliance (FTA VAT), high-volume toll/traffic fine reconciliations, fixed asset lifecycle accounting, and strategic corporate financial planning.',
    responsibilities: [
      'Financial Reporting & UAE Tax Compliance: Prepared monthly, quarterly, and annual financial statements (P&L, Balance Sheet, Cash Flow) in compliance with IFRS; managed UAE Federal Tax Authority (FTA) quarterly VAT returns (5%), ensuring accurate tax treatment of rental income, toll pass-throughs, and fleet sales.',
      'Fleet Asset & Depreciation Accounting: Maintained the fixed asset register for a fleet of 250+ rental vehicles; established straight-line and mileage-adjusted depreciation schedules, tracking vehicle acquisition CapEx, disposal gains/losses, and residual valuations.',
      'High-Volume Revenue & Toll Reconciliations: Audited daily transaction feeds across Salik (Dubai toll), Darb (Abu Dhabi toll), RTA traffic fines, payment gateways, and OTA booking channels (e.g., Rentalcars, Expedia); mapped charges directly to customer rental contracts and security deposit ledgers.',
      'Treasury & Bank Reconciliations: Conducted monthly multi-currency bank reconciliations across 14 operating accounts (AED, USD, EUR), identifying payment gateway settlements, merchant fees, and cash-in-transit variances within 48 hours.',
      'Working Capital & Credit Control: Supervised AP/AR workflows for corporate leasing clients and long-term rentals; tightened credit terms, automated security deposit refund workflows, and reduced Days Sales Outstanding (DSO) by 14 days.',
      'Fleet Performance & Variance Analysis: Delivered monthly budget-vs-actual variance packages to senior management with root-cause commentary on OpEx (fleet maintenance, insurance premiums, fuel) and revenue per available vehicle (RevPAV).',
      'Financial Modeling & Forecasting: Built consolidated 5-year financial projection models, fleet replacement scenarios, and quarterly rolling cash flow forecasts to support executive strategic reviews and bank credit facility renewals.'
    ],
    keyAchievements: [
      'Process Automation: Shortened the monthly financial close cycle from 10 business days to 5 business days by building automated Excel Power Query workflows to ingest and reconcile RTA fines, Salik statements, and bank feeds.',
      'Revenue & Cost Recovery: Identified AED 1.17M ($320,000) in unbilled traffic fines, uncollected Salik charges, and unrecorded vendor credit notes through rigorous ledger audits and historical account reconciliations.',
      'Fleet Financial Modeling: Developed an interactive, dynamic Three-Statement & Fleet Lifecycle Financial Model adopted by executive leadership to optimize fleet expansion, trade-in cycles, and capital allocation.'
    ],
    tools: ['SAP ERP', 'Advanced Excel (Power Query, XLOOKUP, Data Validation)', 'Power BI', 'IFRS Standards', 'Dubai RTA & Salik Portals'],
    businessImpact: 'Enhanced financial reporting speed, eliminated audit adjustments, maintained 100% FTA tax compliance, and provided actionable cash flow visibility during periods of fleet and commercial expansion.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Accounting & Reporting',
    description: 'Disciplined ledger maintenance, closing procedures, and statutory compliance under global standards.',
    skills: [
      { name: 'General Accounting', description: 'End-to-end bookkeeping, transaction recording, and ledger integrity', focus: 'Core Accounting' },
      { name: 'General Ledger (GL)', description: 'Master chart of accounts maintenance, balance reconciliations, and GL audits', focus: 'GL Operations' },
      { name: 'Accounts Payable (AP)', description: '3-way matching, payment scheduling, vendor statements, and credit terms', focus: 'Working Capital' },
      { name: 'Accounts Receivable (AR)', description: 'Billing, aging analysis, DSO reduction, and credit risk control', focus: 'Cash Inflows' },
      { name: 'Bank Reconciliation', description: 'Multi-currency bank matching, uncleared checks, and transit adjustment auditing', focus: 'Cash Control' },
      { name: 'Journal Entries & Adjustments', description: 'Accruals, deferrals, prepayments amortization, and correcting entries', focus: 'Period-End' },
      { name: 'Month-End / Year-End Closing', description: 'Rigorous 5-day close checklist, balance validation, and trial balance cutoff', focus: 'Closing Process' },
      { name: 'Financial Statements (P&L, BS, CFS)', description: 'Statutory and management statement preparation complying with standards', focus: 'Reporting' },
      { name: 'Revenue & Expense Analysis', description: 'Granular OpEx analysis, cost allocation keys, and revenue recognition', focus: 'Performance' },
      { name: 'Tax & VAT Accounting', description: 'UAE VAT compliance, input tax recovery, and tax audit documentation', focus: 'Tax Compliance' }
    ]
  },
  {
    category: 'Financial Analysis',
    description: 'Transforming historical data into deep commercial insight, trend identification, and risk evaluation.',
    skills: [
      { name: 'Financial Statement Analysis', description: 'Horizontal, vertical, and cross-sectional financial analysis over multi-year periods', focus: 'Statement Analysis' },
      { name: 'Ratio & Liquidity Analysis', description: 'Current, quick, cash ratio, debt-to-equity, interest coverage, ROE, and ROA', focus: 'Health Ratios' },
      { name: 'Profitability & Margin Analysis', description: 'Gross, operating, EBITDA, and net margin decomposition across business units', focus: 'Profitability' },
      { name: 'Variance Analysis (Budget vs Actual)', description: 'Price, volume, and efficiency variance isolation with management commentary', focus: 'FP&A' },
      { name: 'Budgeting & Rolling Forecasts', description: 'Bottom-up and top-down annual master budgeting and 12-month rolling projections', focus: 'Planning' },
      { name: 'Cash Flow Analysis', description: 'Operating, investing, and financing cash flow tracking + 13-week liquidity forecasting', focus: 'Liquidity' },
      { name: 'Business Performance & KPIs', description: 'Custom executive scorecard design, unit economics, and operational KPI tracking', focus: 'Executive Insight' },
      { name: 'Capital Structure & Solvency', description: 'Leverage optimization, debt covenant monitoring, and working capital cycles', focus: 'Balance Sheet' }
    ]
  },
  {
    category: 'Financial Modeling & Valuation',
    description: 'Building robust, dynamic, and audit-ready spreadsheet architectures for strategic decision-making.',
    skills: [
      { name: 'Three-Statement Financial Modeling', description: 'Integrated dynamic Income Statement, Balance Sheet, and Cash Flow Statement', focus: 'Core Modeling' },
      { name: 'DCF (Discounted Cash Flow) Valuation', description: 'Unlevered free cash flow forecasting, discounting, and intrinsic valuation', focus: 'Corporate Valuation' },
      { name: 'Free Cash Flow (FCFF & FCFE)', description: 'NOPAT, CapEx, working capital changes, and non-cash reconciliation', focus: 'Cash Modeling' },
      { name: 'WACC & Cost of Capital Calculation', description: 'Cost of equity via CAPM (Beta, Risk-free rate, ERP) and after-tax cost of debt', focus: 'Discount Rates' },
      { name: 'Terminal Value Methodologies', description: 'Gordon Growth (Perpetuity Growth) and Exit Multiple methods with cross-checks', focus: 'Valuation Rigor' },
      { name: 'Sensitivity & Scenario Analysis', description: '2-variable data tables, Bull/Base/Bear scenarios, and stress testing', focus: 'Risk Modeling' },
      { name: 'Debt & Interest Schedules', description: 'Senior debt amortization, revolver mechanics, and circularity breaker design', focus: 'Schedules' },
      { name: 'Working Capital Modeling', description: 'Days Sales Outstanding (DSO), DPO, and DIO drivers connected to Balance Sheet', focus: 'Working Capital' }
    ]
  },
  {
    category: 'Advanced Excel & Analytics',
    description: 'Harnessing advanced modeling logic, data transformation, and clean dashboard design.',
    skills: [
      { name: 'XLOOKUP & INDEX/MATCH', description: 'Dynamic 2-way matrix lookups, nested lookups, and error-proof formula modeling', focus: 'Formulas' },
      { name: 'SUMIFS / COUNTIFS / AVERAGEIFS', description: 'Multi-criteria financial aggregation and conditional transactional summaries', focus: 'Aggregation' },
      { name: 'Logical Functions (IF, IFS, SWITCH, CHOOSE)', description: 'Complex scenario selection, trigger conditions, and error handling (IFERROR)', focus: 'Logic' },
      { name: 'Power Query (ETL)', description: 'Automated data extraction, transformation, unpivoting, and ERP data cleaning', focus: 'Data Automation' },
      { name: 'Dynamic Pivot Tables & Slicers', description: 'Interactive multi-dimensional financial summary reports for executives', focus: 'Reporting' },
      { name: 'Financial Dashboards & Visuals', description: 'Executive charts, waterfall analysis, sparklines, and KPI metric cards', focus: 'Visualization' },
      { name: 'Data Validation & Model Controls', description: 'Restricted input parameters, drop-down toggles, and model audit flags', focus: 'Model Integrity' },
      { name: 'Conditional Formatting', description: 'Dynamic heat maps, variance indicator flags, and out-of-tolerance alerts', focus: 'Visual QA' }
    ]
  },
  {
    category: 'Accounting Standards & Governance',
    description: 'Adhering strictly to international compliance, statutory frameworks, and internal controls.',
    skills: [
      { name: 'IFRS (International Financial Reporting Standards)', description: 'IFRS 15 (Revenue), IFRS 16 (Leases), IAS 2 (Inventory), IAS 16 (PPE)', focus: 'Global Compliance' },
      { name: 'US GAAP Knowledge', description: 'Matching principle, accrual basis, revenue recognition ASC 606 standards', focus: 'GAAP Principles' },
      { name: 'Internal Controls & Segregation of Duties', description: 'Fraud prevention, authorization thresholds, and audit trail validation', focus: 'Governance' },
      { name: 'Management Accounting Principles', description: 'Cost behavior, marginal costing, contribution margin, and break-even analysis', focus: 'Managerial Finance' },
      { name: 'Corporate Finance Principles', description: 'Capital budgeting (NPV, IRR, Payback), capital allocation, and dividend policies', focus: 'Corporate Strategy' }
    ]
  }
];

export const FEATURED_PROJECTS: FinancialProject[] = [
  {
    id: 'project-1',
    number: '01',
    title: 'Financial Statement Analysis & Executive KPI Dashboard',
    category: 'Financial Analysis',
    badge: 'Executive Reporting',
    objective: 'Transform 3 years of multi-divisional historical accounting records into an integrated performance dashboard analyzing gross margins, EBITDA, EBIT, and solvency trends.',
    businessProblem: 'Executive leadership lacked centralized visibility into margin compression across product divisions. Disparate regional spreadsheets created delayed reporting and obscured a 380 bps drop in operating margin.',
    methodology: 'Normalized historical accounting trial balances into a standardized chart of accounts. Performed DuPont decomposition, horizontal variance indexing, and built a dynamic interactive dashboard with automated margin checks.',
    financialConcepts: ['DuPont ROE Decomposition', 'EBITDA Margin Bridge', 'Operating Leverage', 'Cash Conversion Cycle', 'Horizontal & Vertical Analysis'],
    tools: ['Microsoft Excel (Power Query)', 'Power BI', 'Financial Statement Analysis', 'IFRS Standards'],
    keyOutput: 'Interactive multi-year financial dashboard featuring automated income statement normalization, division margin waterfall, and working capital heatmaps.',
    metrics: [
      { label: 'Revenue Analyzed', value: '$34.2M', note: 'Over 3 fiscal years' },
      { label: 'EBITDA Improvement Identified', value: '+185 bps', note: 'Via OpEx rationalization' },
      { label: 'Reporting Lead Time', value: '48 Hours', note: 'Down from 9 days' },
      { label: 'Gross Margin Visibility', value: '100%', note: 'By product line' }
    ],
    assumptions: [
      { parameter: 'Revenue Recognition', baseCase: 'IFRS 15 Point-in-time & Over-time', rationale: 'Contracts with distinct performance obligations' },
      { parameter: 'Depreciation Method', baseCase: 'Straight-line (5-10 yrs)', rationale: 'Reflects steady economic pattern of asset usage' },
      { parameter: 'Corporate Tax Rate', baseCase: '9.0% (UAE Corporate Tax)', rationale: 'Standard statutory rate on taxable profit over AED 375k' }
    ],
    modelArchitecture: [
      'Raw ERP Data Ingestion Layer via Power Query',
      'Unified Master Chart of Accounts Mapping Table',
      'Normalized Income Statement & Balance Sheet Tables',
      'Ratio & Metric Calculation Engine (DuPont, Liquidity, Solvency)',
      'Executive Visual Interface with Dynamic Slicers & Scenario Flags'
    ],
    analysisHighlights: [
      'Identified that while headline revenue increased by 14.5% YoY, logistics freight surcharges had eroded gross margin by 240 bps.',
      'Working capital analysis revealed customer payment delays in Division B, swelling Days Sales Outstanding from 46 to 63 days.',
      'Reconstructed cash conversion cycle to show a 17-day drag, enabling management to adjust payment terms and release $850k in trapped liquidity.'
    ],
    results: [
      'Delivered automated monthly executive reporting pack adopted by the CFO and Board of Directors.',
      'Enabled division heads to pinpoint SKU-level margin leakages within 5 minutes of month-end close.',
      'Provided clear justification for renegotiating supplier contracts, recovering 160 bps of gross margin in the subsequent quarter.'
    ],
    keyTakeaways: [
      'Headline top-line growth is meaningless if variable cost escalations remain undetected.',
      'Automating the data pipeline eliminates human transcription errors and frees analyst hours for commercial advisory.'
    ],
    sampleData: {
      headers: ['Financial Metric ($k)', 'FY22 Actual', 'FY23 Actual', 'FY24 Actual', 'YoY Growth (%)'],
      rows: [
        ['Total Revenue', 26400, 29800, 34200, '+14.8%'],
        ['Cost of Goods Sold (COGS)', 14250, 16390, 18460, '+12.6%'],
        ['Gross Profit', 12150, 13410, 15740, '+17.4%'],
        ['Gross Margin (%)', '46.0%', '45.0%', '46.0%', '+100 bps'],
        ['Operating Expenses (SG&A)', 6800, 7700, 8550, '+11.0%'],
        ['EBITDA', 5350, 5710, 7190, '+25.9%'],
        ['EBITDA Margin (%)', '20.3%', '19.2%', '21.0%', '+180 bps'],
        ['Depreciation & Amortization', 1200, 1350, 1520, '+12.6%'],
        ['Operating Profit (EBIT)', 4150, 4360, 5670, '+30.0%'],
        ['Net Income', 3520, 3680, 4790, '+30.2%']
      ]
    }
  },
  {
    id: 'project-2',
    number: '02',
    title: 'DCF Corporate Valuation & Sensitivity Modeling',
    category: 'Valuation',
    badge: 'Valuation & M&A',
    objective: 'Build an institutional-grade Discounted Cash Flow (DCF) valuation model to determine the intrinsic Enterprise Value and Equity Value of a commercial services company under multiple cost of capital scenarios.',
    businessProblem: 'Ownership required an independent, methodologically sound valuation model ahead of potential minority equity stake sale, needing verifiable WACC calculations and sensitivity to terminal growth rates.',
    methodology: 'Constructed a 5-year discrete Unlevered Free Cash Flow (FCFF) forecast. Calculated Weighted Average Cost of Capital (WACC) using CAPM. Applied both Perpetuity Growth and Exit Multiple approaches with a 2-way sensitivity matrix.',
    financialConcepts: ['Unlevered Free Cash Flow (FCFF)', 'WACC Calculation', 'CAPM (Cost of Equity)', 'Terminal Value (Gordon Growth)', 'Enterprise to Equity Value Bridge', '2-Way Data Tables'],
    tools: ['Microsoft Excel (Financial Modeling)', 'Capital IQ Benchmark Data', 'Scenario Manager', 'DCF Valuation'],
    keyOutput: 'Fully linked DCF model featuring dynamic WACC engine, discrete 5-year cash flow projections, enterprise value bridge, and extensive sensitivity heatmaps.',
    metrics: [
      { label: 'Implied Enterprise Value', value: '$48.6M', note: 'Base Case DCF' },
      { label: 'Implied Equity Value', value: '$43.9M', note: 'Net Debt Deducted' },
      { label: 'Weighted Average Cost of Capital (WACC)', value: '9.8%', note: 'Cost of Equity 11.2%' },
      { label: 'Terminal Growth Rate', value: '2.5%', note: 'Long-term inflation parity' }
    ],
    assumptions: [
      { parameter: 'Risk-Free Rate (Rf)', baseCase: '4.25%', rationale: '10-Year US Treasury Benchmark with sovereign adjustment' },
      { parameter: 'Equity Risk Premium (ERP)', baseCase: '5.50%', rationale: 'Damodaran regional market equity risk premium' },
      { parameter: 'Unlevered Industry Beta', baseCase: '0.92', rationale: 'Peer group median asset beta relevered to target capital structure' },
      { parameter: 'Target Debt / (Debt + Equity)', baseCase: '25.0%', rationale: 'Optimal capital structure matching credit rating objectives' },
      { parameter: 'Pre-Tax Cost of Debt', baseCase: '6.20%', rationale: 'Commercial lending syndicate benchmark rate' }
    ],
    modelArchitecture: [
      'Historical Financials & Operational Drivers Summary',
      'Assumptions & Capital Structure Parameter Card',
      'Unlevered Free Cash Flow (FCFF) Forecast Engine (Y1 - Y5)',
      'WACC Computation Table (Cost of Equity + Cost of Debt)',
      'Terminal Value Calculation (Gordon Growth & EV/EBITDA Multiples)',
      'Enterprise Value to Equity Value Bridge (Cash, Debt, Minority Interest)',
      'Dual Variable Sensitivity Tables (WACC vs Terminal Growth)'
    ],
    analysisHighlights: [
      'Base case valuation yielded an Enterprise Value of $48.6M at a 9.8% WACC and 2.5% perpetuity growth rate.',
      'Conducted extensive sensitivity analysis showing enterprise value ranged from $41.8M (11.0% WACC, 2.0% g) to $56.4M (8.5% WACC, 3.0% g).',
      'Cross-checked terminal value with an 8.5x exit EBITDA multiple, revealing a tight 4.2% variance between methods, validating intrinsic valuation integrity.'
    ],
    results: [
      'Valuation model served as the core analytical anchor in private placement negotiations.',
      'Provided shareholders with defensible bounds for pre-money valuation expectations.',
      'Highlighted that a 100 bps reduction in working capital intensity added $2.1M to net equity value.'
    ],
    keyTakeaways: [
      'Rigorous documentation of cost of capital assumptions is essential for credibility with institutional investors.',
      'Sensitivity tables prevent single-point estimate bias and frame valuation as a probabilistic spectrum.'
    ],
    sampleData: {
      headers: ['Valuation Element ($k)', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Terminal Value'],
      rows: [
        ['EBITDA', 7600, 8400, 9300, 10200, 11100, '-'],
        ['Less: D&A', (1600), (1750), (1900), (2050), (2200), '-'],
        ['EBIT (Operating Income)', 6000, 6650, 7400, 8150, 8900, '-'],
        ['Less: Tax on EBIT (9%)', (540), (599), (666), (734), (801), '-'],
        ['NOPAT', 5460, 6051, 6734, 7416, 8099, '-'],
        ['Plus: D&A Non-Cash', 1600, 1750, 1900, 2050, 2200, '-'],
        ['Less: Capital Expenditures', (1800), (1950), (2100), (2250), (2400), '-'],
        ['Less: Change in Working Capital', (650), (710), (780), (840), (900), '-'],
        ['Free Cash Flow to Firm (FCFF)', 4610, 5141, 5754, 6376, 6999, 98520],
        ['Discount Factor (at WACC 9.8%)', '0.9107', '0.8294', '0.7554', '0.6879', '0.6265', '0.6265'],
        ['Present Value of Cash Flows', 4198, 4264, 4347, 4386, 4385, 61723]
      ]
    }
  },
  {
    id: 'project-3',
    number: '03',
    title: 'Financial Planning & Rolling Forecasting Model (FP&A)',
    category: 'FP&A & Forecasting',
    badge: 'Budgeting & Planning',
    objective: 'Architect an agile financial planning and dynamic 12-month rolling forecast model with integrated driver-based revenue and headcount planning.',
    businessProblem: 'Annual budgets became obsolete within 60 days due to volatile supply chain pricing and shifting contract timelines. Management lacked a reliable rolling forecast mechanism to adjust hiring and procurement.',
    methodology: 'Designed driver-based operational logic linking headcount, salary bands, customer volume, and variable cost per unit. Incorporated dynamic scenario toggles (Base, Upside, Recessionary Stress Test).',
    financialConcepts: ['Driver-Based Budgeting', '12-Month Rolling Forecast', 'Fixed vs Variable Cost Modeling', 'Headcount Capacity Planning', 'Operating Cash Cushion'],
    tools: ['Microsoft Excel (Advanced Formulas)', 'Scenario Manager', 'Data Tables', 'Management Accounting'],
    keyOutput: 'Multi-scenario FP&A model featuring automated monthly actuals ingestion, forecast variance flags, and dynamic cash runway monitoring.',
    metrics: [
      { label: 'Forecast Accuracy Variance', value: '< 3.2%', note: 'Reduced from 11.4%' },
      { label: 'Rolling Projection Horizon', value: '12 Months', note: 'Continuously updated' },
      { label: 'Scenario Testing Speed', value: 'Instant', note: 'Single-click selector' },
      { label: 'Cost Savings Identified', value: '$410,000', note: 'Identified discretionary buffer' }
    ],
    assumptions: [
      { parameter: 'Client Volume Growth', baseCase: '+8.0% annual', rationale: 'Aligned with verified pipeline conversion rates' },
      { parameter: 'Inflationary Wage Escalator', baseCase: '3.5%', rationale: 'Local labor market cost-of-living adjustments' },
      { parameter: 'Discretionary OpEx Buffer', baseCase: '5.0% of SG&A', rationale: 'Contingency pool subject to quarterly release approval' }
    ],
    modelArchitecture: [
      'Executive Control Sheet (Scenario Switches, Global Constants, Date Flags)',
      'Revenue Driver Schedule (Units Sold, Price Realization, Churn)',
      'Headcount & Personnel Roster (Wages, Benefits, Bonus Accrual)',
      'Operating Expenditure Schedule (Fixed Leases, Variable Commission)',
      'Rolling 12-Month Income Statement & Cash Inflow/Outflow Tracker',
      'Variance Reporting Tab (Budget vs Latest Estimate)'
    ],
    analysisHighlights: [
      'Simulated a 15% drop in contract renewals under the stress test scenario, immediately identifying a $620k cash deficit 7 months out.',
      'Enabled proactive restructuring of lease agreements and deferred CapEx, preserving a minimum $1.2M liquidity buffer.',
      'Replaced static calendar budgets with a rolling mechanism, giving executives real-time visibility into trailing performance and forward expectations.'
    ],
    results: [
      'Transitioned the organization from reactive quarterly panic to proactive cash management.',
      'Shortened the annual budgeting cycle from 8 weeks to 3 weeks.',
      'Adopted by division heads as the primary operating blueprint for quarterly resource allocation.'
    ],
    keyTakeaways: [
      'Rolling forecasts treat planning as a continuous feedback loop rather than an annual compliance ritual.',
      'Driver-based models ensure non-financial managers take ownership of their operational assumptions.'
    ],
    sampleData: {
      headers: ['P&L Category ($k)', 'Q1 Forecast', 'Q2 Forecast', 'Q3 Forecast', 'Q4 Forecast', 'Full Year'],
      rows: [
        ['Enterprise Contract Revenue', 4200, 4550, 4900, 5300, 18950],
        ['Commercial Recurring Services', 2600, 2750, 2900, 3100, 11350],
        ['Total Forecasted Revenue', 6800, 7300, 7800, 8400, 30300],
        ['Direct Project Labor & Materials', (3450), (3700), (3950), (4200), (15300)],
        ['Forecasted Gross Profit', 3350, 3600, 3850, 4200, 15000],
        ['Sales & Marketing Expenses', (920), (980), (1020), (1080), (4000)],
        ['General & Administrative (G&A)', (1250), (1280), (1300), (1340), (5170)],
        ['Research & Operational Tech', (310), (320), (330), (340), (1300)],
        ['Forecasted EBITDA', 870, 1020, 1200, 1440, 4530],
        ['Forecasted Net Operating Cash Flow', 780, 910, 1050, 1290, 4030]
      ]
    }
  },
  {
    id: 'project-4',
    number: '04',
    title: 'Automated Excel Financial Dashboard & BI Suite',
    category: 'Excel & Reporting',
    badge: 'Advanced Excel',
    objective: 'Build an automated, error-proof financial reporting suite in Microsoft Excel utilizing Power Query, advanced dynamic formulas, and executive interactive visualization.',
    businessProblem: 'Finance staff spent over 25 hours every month manually downloading ERP transaction reports, copying and pasting CSV rows, and re-calculating formulas with high risk of manual formula errors.',
    methodology: 'Engineered an automated Power Query pipeline with automated data cleansing, type transformation, and relational star-schema mapping. Designed a clean, print-ready executive dashboard tab with dynamic interactive slicers.',
    financialConcepts: ['Data Hygiene & ETL', 'Financial KPI Metrics', 'Dynamic Array Formulas', 'Conditional Formatting Logic', 'Automated Reconciliation Checks'],
    tools: ['Microsoft Excel (Power Query)', 'XLOOKUP / SUMIFS', 'Dynamic Data Arrays', 'Financial Dashboards'],
    keyOutput: 'Self-updating Excel reporting dashboard with automated reconciliation audit flags, zero manual copy-paste requirements, and instant executive summaries.',
    metrics: [
      { label: 'Monthly Hours Saved', value: '25+ Hours', note: 'Full automation achieved' },
      { label: 'Formula Error Rate', value: '0.0%', note: 'Audit error checks built-in' },
      { label: 'Data Refresh Time', value: '< 15 Sec', note: 'Single button refresh' },
      { label: 'Report Distribution', value: 'Automated', note: 'Board-ready formatting' }
    ],
    assumptions: [
      { parameter: 'Source File Schema', baseCase: 'Fixed ERP CSV extraction structure', rationale: 'Power Query automated transformation logic' },
      { parameter: 'Audit Discrepancy Tolerance', baseCase: '$0.00 (Exact balance check)', rationale: 'Zero tolerance for ledger imbalance' }
    ],
    modelArchitecture: [
      'Data Extraction & Transformation (ETL) Queries in Power Query',
      'Data Model Dimension Tables (Calendar, Entity, Chart of Accounts)',
      'Calculation Core with Spill Formulas & SUMIFS Aggregation Tables',
      'Auditing & Balance Integrity Check Panel (Debits = Credits check)',
      'Executive Front-End Dashboard with Micro-Charts & Metric Cards'
    ],
    analysisHighlights: [
      'Eliminated repetitive clerical data wrangling by establishing automated M-code transformation steps in Power Query.',
      'Designed self-checking balance formulas that immediately flag any unmapped ledger accounts or broken cross-checks.',
      'Created intuitive executive visual components displaying 12-month revenue velocity, margin variance, and departmental expense distribution.'
    ],
    results: [
      'Reduced monthly reporting distribution time from day 6 to day 1 after close.',
      'Freed up operational capacity for in-depth variance analysis and stakeholder meetings.',
      'Adopted across 4 affiliated entities as the standard internal reporting model template.'
    ],
    keyTakeaways: [
      'Automated ETL in Excel delivers 90% of dedicated BI tool benefits with zero software licensing overhead.',
      'Audit integrity checks built directly into the front sheet build stakeholder confidence in figures.'
    ],
    sampleData: {
      headers: ['Department', 'YTD Budget ($k)', 'YTD Actual ($k)', 'Variance ($k)', 'Variance %', 'Status'],
      rows: [
        ['Executive & Legal', 1450, 1420, 30, '+2.1%', 'Favorable'],
        ['Corporate Finance & Accounting', 880, 865, 15, '+1.7%', 'Favorable'],
        ['Sales & Business Development', 3200, 3450, (250), '-7.8%', 'Unfavorable'],
        ['Supply Chain & Operations', 5100, 5020, 80, '+1.6%', 'Favorable'],
        ['Information Technology & Systems', 1200, 1180, 20, '+1.7%', 'Favorable'],
        ['Human Resources & Facilities', 950, 990, (40), '-4.2%', 'Unfavorable'],
        ['Total Operating Departments', 12780, 12925, (145), '-1.1%', 'Acceptable']
      ]
    }
  },
  {
    id: 'project-5',
    number: '05',
    title: 'Budget vs Actual Variance Analysis & Cost Optimization',
    category: 'Accounting & Variance',
    badge: 'Cost Control',
    objective: 'Execute a forensic Budget vs. Actual variance study to dissect operational cost overruns, isolate volume vs. price variances, and recommend corrective action plans.',
    businessProblem: 'Company operating profit fell 18% short of budget target despite revenue hitting 102% of plan. Management had no clear answers as to where costs had leaked.',
    methodology: 'Conducted standard costing variance decomposition separating Sales Price Variance, Sales Volume Variance, Direct Material Price Variance, and OpEx spending variance across all cost centers.',
    financialConcepts: ['Favorable vs Unfavorable Variances', 'Sales Price & Volume Variance', 'Flexible Budgeting', 'Absorption Costing', 'Management Action Plans'],
    tools: ['Microsoft Excel (Variance Analysis)', 'ERP General Ledger', 'Management Accounting', 'Internal Auditing'],
    keyOutput: 'Granular variance decomposition model and executive slide presentation outlining root causes and a $480,000 cost recovery roadmap.',
    metrics: [
      { label: 'Budget Gap Analyzed', value: '$1.42M', note: 'Operating profit shortfall' },
      { label: 'Unfavorable Variances Isolated', value: '$890,000', note: 'Direct material & logistics' },
      { label: 'Cost Recovery Roadmap', value: '$480,000', note: 'Recoverable within 6 months' },
      { label: 'Cost Centers Evaluated', value: '18 Centers', note: '100% operational coverage' }
    ],
    assumptions: [
      { parameter: 'Baseline Cost Standards', baseCase: 'Approved Annual Master Budget', rationale: 'Fixed baseline benchmark ratified by Board' },
      { parameter: 'Variance Significance Threshold', baseCase: '>$15,000 or >5.0%', rationale: 'Materiality limit requiring mandatory investigation' }
    ],
    modelArchitecture: [
      'Static Master Budget vs Flexible Budget vs Actual Results Grid',
      'Direct Cost Variance Engine (Material Price, Labor Efficiency, Freight)',
      'Indirect Overhead Variance Decomposition (Spending & Volume Variance)',
      'Management Action Tracker with Ownership, Target Dates, and Milestones'
    ],
    analysisHighlights: [
      'Proved that $610,000 of the profit shortfall was caused by unhedged expedited shipping fees triggered by late supplier component deliveries.',
      'Showed that sales discounts offered to close volume deals diluted average selling price by 3.8%, offsetting the revenue volume gain.',
      'Pinpointed $280,000 of duplicate software subscriptions and unmonitored vendor retainers across administrative cost centers.'
    ],
    results: [
      'CFO utilized the analysis to cancel 6 redundant vendor contracts, saving $240,000 annually.',
      'Instituted a rigid pre-approval gate for expedited freight that reduced emergency logistics costs by 68%.',
      'Restructured sales commission incentives to tie bonuses to gross margin realization rather than gross revenue volume.'
    ],
    keyTakeaways: [
      'Top-line achievement often masks acute margin degradation without flexible budget analysis.',
      'Variance analysis is only valuable when paired with rigorous root-cause discovery and assigned corrective ownership.'
    ],
    sampleData: {
      headers: ['Cost Component', 'Budgeted Cost ($)', 'Actual Cost ($)', 'Variance ($)', 'Var %', 'Driver / Commentary'],
      rows: [
        ['Direct Materials & Components', 8400000, 8950000, (550000), '-6.5%', 'Commodity price surge + late vendor penalty'],
        ['Direct Manufacturing Labor', 2100000, 2040000, 60000, '+2.9%', 'Improved machine uptime efficiency'],
        ['Expedited Freight & Inbound Shipping', 350000, 960000, (610000), '-174.3%', 'Emergency air freight on component shortages'],
        ['Facility Leases & Utilities', 1200000, 1215000, (15000), '-1.3%', 'Minor utility rate adjustment'],
        ['Sales Commissions', 750000, 810000, (60000), '-8.0%', 'Volume incentive overpayment without margin hurdle'],
        ['IT & Telecommunications', 480000, 560000, (80000), '-16.7%', 'Unbudgeted cloud storage & duplicate licenses'],
        ['Professional & Advisory Fees', 320000, 280000, 40000, '+12.5%', 'Brought tax reconciliations in-house']
      ]
    }
  },
  {
    id: 'project-6',
    number: '06',
    title: 'Integrated Three-Statement Financial Model & Financial Checks',
    category: 'Valuation',
    badge: 'Three-Statement Model',
    objective: 'Build an interconnected, dynamic Three-Statement Financial Model linking Income Statement, Balance Sheet, and Cash Flow Statement with supporting debt and depreciation schedules.',
    businessProblem: 'Corporate management relied on isolated profit forecasts that did not calculate balance sheet impacts or operating cash consequences, creating blind spots regarding working capital borrowings and debt covenants.',
    methodology: 'Built fully linked financial statements where Net Income flows to Retained Earnings and Cash Flow from Operations, CapEx links to PP&E and Depreciation schedules, and Cash flows back into the Balance Sheet with zero circularity errors.',
    financialConcepts: ['Three-Statement Integration', 'Circularity Breakers', 'Supporting Schedules (PP&E, Debt, Working Capital)', 'Balance Sheet Balancing Checks', 'Credit Covenant Monitoring'],
    tools: ['Microsoft Excel (Advanced Financial Modeling)', 'Financial Accounting', 'Corporate Finance', 'Debt Modeling'],
    keyOutput: 'Fully integrated three-statement financial model with dynamic balance checks, debt covenant monitors, and scenario sensitivity controls.',
    metrics: [
      { label: 'Model Interconnectivity', value: '100% Linked', note: 'Zero hardcoded statement links' },
      { label: 'Balance Check Formula', value: '$0.00 Diff', note: 'Assets = Liabilities + Equity' },
      { label: 'Projection Horizon', value: '5 Years', note: 'Historical + 5-yr forecast' },
      { label: 'Supporting Schedules', value: '4 Schedules', note: 'Debt, PP&E, Tax, Working Capital' }
    ],
    assumptions: [
      { parameter: 'Accounts Receivable DSO', baseCase: '45 Days', rationale: 'Weighted average collection cycle from customer base' },
      { parameter: 'Accounts Payable DPO', baseCase: '60 Days', rationale: 'Supplier credit agreement standard term' },
      { parameter: 'Inventory Days (DIO)', baseCase: '35 Days', rationale: 'Lean manufacturing target with safety buffer' },
      { parameter: 'Minimum Cash Balance', baseCase: '$1,000,000', rationale: 'Operational cash sweep floor before debt repayment' }
    ],
    modelArchitecture: [
      'Model Guide, Version Control & Color Coding Standard Tab',
      'Assumptions & Operational Macro Drivers Worksheet',
      'Consolidated Income Statement (Historical + 5-Year Forecast)',
      'Supporting Schedules: Fixed Assets (PP&E), Debt, Working Capital, Tax',
      'Balance Sheet with Automated Balance Equality Check Alert',
      'Cash Flow Statement (Operating, Investing, Financing Activities)',
      'Financial Ratios & Debt Covenant Compliance Dashboard'
    ],
    analysisHighlights: [
      'Model revealed that a proposed 25% revenue expansion plan would trigger a $1.8M working capital cash deficit in Year 2 due to inventory pre-build.',
      'Designed a dynamic revolving credit facility schedule that automatically borrows and repays based on the minimum cash balance requirement.',
      'Built financial covenant monitoring cells tracking Debt-to-EBITDA (< 3.0x) and Interest Coverage (> 4.5x) across all scenario projections.'
    ],
    results: [
      'Enabled the CFO to negotiate a timely $2.0M credit facility line prior to rapid sales expansion, averting an acute liquidity crisis.',
      'Model passed third-party audit examination by Big Four advisory team without a single formula adjustment.',
      'Serves as the benchmark modeling template for all corporate acquisition evaluations.'
    ],
    keyTakeaways: [
      'A standalone P&L forecast is insufficient; true financial discipline requires observing balance sheet cash repercussions.',
      'Automated balance checks (Assets minus Liabilities and Equity equals Zero) protect modeling integrity at every step.'
    ],
    sampleData: {
      headers: ['Financial Statement Line Item ($k)', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
      rows: [
        ['Total Revenue', 28500, 32200, 36400, 41100, 46500],
        ['Operating Expenses (incl. COGS)', (22800), (25440), (28390), (31650), (35340)],
        ['Operating Profit (EBIT)', 5700, 6760, 8010, 9450, 11160],
        ['Interest Expense', (480), (420), (350), (270), (180)],
        ['Taxes (9%)', (470), (571), (689), (826), (988)],
        ['Net Income', 4750, 5769, 6971, 8354, 9992],
        ['Cash Flow from Operating Activities (CFO)', 4820, 5640, 6810, 8190, 9780],
        ['Cash Flow from Investing Activities (CapEx)', (1800), (2100), (2300), (2500), (2700)],
        ['Cash Flow from Financing (Debt Amortization)', (1200), (1200), (1200), (1200), (1200)],
        ['Ending Cash Balance', 4320, 6660, 9970, 14460, 20340],
        ['Balance Sheet Check (Assets - Liab - Eq)', '$0.00', '$0.00', '$0.00', '$0.00', '$0.00']
      ]
    }
  }
];

export const FINANCIAL_MODELING_WORKFLOW: WorkflowStep[] = [
  {
    step: 1,
    name: 'Historical Data Analysis',
    category: 'Foundation',
    description: 'Extract, clean, and normalize 3 to 5 years of historical financial statements to understand operational baselines and seasonal patterns.',
    formulaOrRule: 'Normalize non-recurring items: Adjusted EBITDA = Reported EBITDA + Non-recurring Expenses - One-off Gains',
    financialSignificance: 'Establishes empirical reference points so future assumptions are anchored in verified reality.'
  },
  {
    step: 2,
    name: 'Macro & Micro Assumptions',
    category: 'Inputs',
    description: 'Establish driver-based parameters including volume growth, pricing power, inflation, tax rates, working capital days, and capital expenditure intensity.',
    formulaOrRule: 'Key Driver Isolation: Revenue = Units × Average Selling Price; COGS = Units × Unit Cost',
    financialSignificance: 'Separates inputs from calculations, enabling rapid sensitivity and scenario testing.'
  },
  {
    step: 3,
    name: 'Revenue Forecasting',
    category: 'P&L Driver',
    description: 'Project forward revenues using granular driver logic (by segment, customer tier, product line, or market penetration).',
    formulaOrRule: 'Revenue(t) = Revenue(t-1) × (1 + Growth Rate) or Pipeline Backlog + Converted Leads',
    financialSignificance: 'The cornerstone top-line driver that dictates operational scaling and variable cost behavior.'
  },
  {
    step: 4,
    name: 'Operating Expenses (OpEx)',
    category: 'Cost Structure',
    description: 'Deconstruct costs into fixed, variable, and semi-variable components; forecast headcount schedules, facility leases, and marketing outlays.',
    formulaOrRule: 'Variable OpEx = % of Revenue; Fixed OpEx = Base × (1 + Inflation Rate)',
    financialSignificance: 'Reveals the degree of operational leverage and break-even revenue thresholds.'
  },
  {
    step: 5,
    name: 'EBITDA Calculation',
    category: 'Core Profitability',
    description: 'Calculate Earnings Before Interest, Taxes, Depreciation, and Amortization as the purest operational cash proxy.',
    formulaOrRule: 'EBITDA = Gross Profit - Total Operating Expenses (excluding D&A)',
    financialSignificance: 'Standardizes cross-firm comparison without distortions from financing structure or tax jurisdictions.'
  },
  {
    step: 6,
    name: 'EBIT & Amortization',
    category: 'Operating Profit',
    description: 'Factor in fixed asset depreciation (straight-line/MACRS) from CapEx schedules and intangible amortization.',
    formulaOrRule: 'EBIT = EBITDA - Depreciation & Amortization',
    financialSignificance: 'Measures profitability after accounting for the ongoing economic wear and tear of capital assets.'
  },
  {
    step: 7,
    name: 'Tax Calculation (NOPAT)',
    category: 'Net Earnings',
    description: 'Compute effective corporate tax liability on operating profit to arrive at Net Operating Profit After Tax.',
    formulaOrRule: 'NOPAT = EBIT × (1 - Effective Tax Rate)',
    financialSignificance: 'Represents the unlevered earnings generated exclusively by core operations available to all capital providers.'
  },
  {
    step: 8,
    name: 'Free Cash Flow (FCFF)',
    category: 'Cash Engine',
    description: 'Bridge accounting profit to actual liquid cash generated by operations after mandatory reinvestments.',
    formulaOrRule: 'FCFF = NOPAT + D&A - Capital Expenditures (CapEx) - Change in Working Capital (ΔNWC)',
    financialSignificance: 'The definitive measure of true corporate cash generation that can be distributed without harming the business.'
  },
  {
    step: 9,
    name: 'WACC & Discount Rate',
    category: 'Risk Adjustment',
    description: 'Derive the blended hurdle rate combining the cost of equity (via CAPM) and after-tax cost of debt weighted by target capital structure.',
    formulaOrRule: 'WACC = (E/V × Ke) + (D/V × Kd × (1 - Tax Rate)) where Ke = Rf + β × ERP',
    financialSignificance: 'Reflects the opportunity cost of capital and investment risk required by financial markets.'
  },
  {
    step: 10,
    name: 'Terminal Value',
    category: 'Long-Term Value',
    description: 'Estimate the enterprise worth beyond the discrete forecast horizon using Perpetuity Growth and Exit Multiple cross-checks.',
    formulaOrRule: 'Terminal Value = [FCFF(n) × (1 + g)] / (WACC - g)  [where g = long-term GDP growth rate]',
    financialSignificance: 'Typically accounts for 65% - 80% of total discounted enterprise value in corporate valuations.'
  },
  {
    step: 11,
    name: 'Enterprise Value to Equity Value',
    category: 'Final Valuation',
    description: 'Discount discrete cash flows and terminal value to present value, then bridge to shareholder equity value.',
    formulaOrRule: 'Equity Value = Enterprise Value + Cash & Equivalents - Total Debt - Minority Interests',
    financialSignificance: 'Determines the exact market or intrinsic per-share value accessible to equity owners and investors.'
  }
];

export const ACCOUNTING_CYCLE_STEPS = [
  {
    step: 1,
    title: 'Financial Transaction',
    subtitle: 'Source Documents',
    description: 'Identify and verify commercial transactions backed by commercial source documentation: purchase orders, supplier invoices, sales receipts, and bank deposit advices.',
    controls: 'Document matching, authorization thresholds, and vendor validation.'
  },
  {
    step: 2,
    title: 'Journal Entry',
    subtitle: 'Dual Aspect Recording',
    description: 'Record debits and credits in the general journal applying the double-entry accounting principle under proper chart of account classifications.',
    controls: 'Total Debits strictly equal Total Credits; transaction date and descriptive memo attached.'
  },
  {
    step: 3,
    title: 'General Ledger (GL)',
    subtitle: 'Account Posting',
    description: 'Post journal entries to specific individual ledger accounts (Assets, Liabilities, Equity, Revenues, Expenses) to track real-time running balances.',
    controls: 'Account reconciliations and subsidiary ledger cross-referencing.'
  },
  {
    step: 4,
    title: 'Unadjusted Trial Balance',
    subtitle: 'Mathematical Verification',
    description: 'Extract all ending ledger balances into a summary schedule to mathematically verify that total debit balances match total credit balances.',
    controls: 'Cutoff testing, zero-balance account review, and missing entries check.'
  },
  {
    step: 5,
    title: 'Adjusting Entries',
    subtitle: 'Accrual Accounting Alignment',
    description: 'Record period-end adjustments for unrecorded accrued expenses, revenue recognized before billing, prepayments amortization, and asset depreciation.',
    controls: 'Adherence to matching principle and revenue recognition standards (IFRS 15 / ASC 606).'
  },
  {
    step: 6,
    title: 'Adjusted Financial Statements',
    subtitle: 'Formal Reporting',
    description: 'Generate the primary financial statements: Income Statement, Balance Sheet, Statement of Cash Flows, and Statement of Changes in Equity.',
    controls: 'Full statutory compliance with IFRS / GAAP and footnote disclosure audit trails.'
  },
  {
    step: 7,
    title: 'Financial Analysis',
    subtitle: 'Analytical Scrutiny',
    description: 'Compute profitability, liquidity, working capital ratios, and variance commentary comparing performance against budgets and prior historical periods.',
    controls: 'DuPont analysis, working capital metrics, and exception reporting for executives.'
  },
  {
    step: 8,
    title: 'Management Decision',
    subtitle: 'Commercial Action',
    description: 'Executive stakeholders evaluate accurate, auditable financial packages to make capital allocation, credit management, pricing, and strategic investment choices.',
    controls: 'Executive alignment, cash flow governance, and dividend/reinvestment policy.'
  }
];

export const DATA_ANALYTICS_STAGES = [
  {
    stage: '01',
    name: 'Raw Data Ingestion',
    summary: 'ERP ledgers, bank transactions, sales registers, and inventory records extracted in structured formats.',
    icon: 'Database'
  },
  {
    stage: '02',
    name: 'Cleansing & ETL',
    summary: 'Automated Power Query transformations: removing duplicates, fixing date stamps, mapping charts of accounts, and unpivoting data.',
    icon: 'Filter'
  },
  {
    stage: '03',
    name: 'Financial Analysis',
    summary: 'Computing margins, variance indexing, rolling averages, and cohort unit economics across cost centers.',
    icon: 'Calculator'
  },
  {
    stage: '04',
    name: 'Visual Dashboards',
    summary: 'Constructing dynamic Excel and BI dashboards with KPI cards, waterfall bridges, and trend lines.',
    icon: 'BarChart3'
  },
  {
    stage: '05',
    name: 'Actionable Insights',
    summary: 'Isolating margin leakage, unhedged operational costs, working capital drag, and customer concentration risks.',
    icon: 'LineChart'
  },
  {
    stage: '06',
    name: 'Executive Decisions',
    summary: 'Empowering CFOs and business leaders to optimize cash allocation, renegotiate supplier terms, and cut waste.',
    icon: 'CheckCircle2'
  }
];

export const TOOLS_LIST: ToolItem[] = [
  {
    name: 'Microsoft Excel',
    category: 'Core Modeling & Analytics',
    description: 'The premier standard for financial modeling, three-statement integration, complex data aggregation, and executive reporting.',
    usageArea: 'Three-Statement Models, DCF Valuations, Rolling Budgets, Sensitivity Tables, XLOOKUP, Data Validation',
    level: 'Advanced',
    features: ['Power Query ETL', 'Dynamic Array Formulas', 'Scenario Manager', 'Data Tables', 'Nested Logic']
  },
  {
    name: 'Power Query (M Language)',
    category: 'Data Engineering & ETL',
    description: 'Automated extraction, transformation, and loading pipeline for ERP transaction streams and bank records.',
    usageArea: 'Automating monthly close data pipelines, unpivoting ledger tables, and reconciling multi-currency files',
    level: 'Advanced',
    features: ['Automated Data Cleansing', 'Relational Joins', 'Schema Standardization', 'Zero-Copy Processing']
  },
  {
    name: 'Power BI',
    category: 'Business Intelligence',
    description: 'Enterprise data visualization suite connecting live operational databases to executive performance dashboards.',
    usageArea: 'Visualizing gross margin trends, executive P&L waterfalled charts, and division KPIs',
    level: 'Proficient',
    features: ['DAX Financial Measures', 'Interactive Filtering', 'Executive Scorecards', 'Scheduled Data Sync']
  },
  {
    name: 'SAP ERP & Oracle NetSuite',
    category: 'Enterprise Resource Planning (ERP)',
    description: 'Enterprise transactional ledgers for general accounting, vendor invoices, receivables, and trial balances.',
    usageArea: 'Posting journal entries, running trial balance cutoffs, managing AP/AR, and multi-entity consolidation',
    level: 'Proficient',
    features: ['General Ledger (GL)', 'Fixed Asset Registers', 'Vendor Sub-Ledgers', 'Bank Interface']
  },
  {
    name: 'QuickBooks Online & Xero',
    category: 'SME Accounting Platforms',
    description: 'Cloud accounting systems for bank feed reconciliation, accounts payable automation, and tax invoicing.',
    usageArea: 'SME bookkeeping, live bank reconciliations, VAT invoicing, and client audit prep',
    level: 'Advanced',
    features: ['Automated Bank Feeds', 'VAT Return 201 Filing', 'Aging Reports', 'Expense Approvals']
  },
  {
    name: 'Financial Modeling & Valuation Tools',
    category: 'Corporate Finance Modeling',
    description: 'Institutional modeling frameworks adhering strictly to financial modeling best practices and FAST standards.',
    usageArea: 'DCF valuations, WACC estimation, capital expenditure appraisal (NPV, IRR), and M&A screening',
    level: 'Advanced',
    features: ['FAST Modeling Standards', 'Circularity Breakers', 'Multi-Scenario Toggles', 'Debt Amortization Schedules']
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'Intermediate / Senior Secondary Certificate (12th Grade) – Commerce',
    institution: 'MP Inter College | Azamgarh, Uttar Pradesh, India',
    period: '2013 – 2015',
    location: 'Board of High School and Intermediate Education, Uttar Pradesh (UP Board)',
    honors: 'Specialized in Commerce & Business Accountancy',
    relevantCoursework: [
      'Accountancy: Double-entry bookkeeping, ledger posting, trial balance, and final accounts (P&L and Balance Sheet)',
      'Business Studies: Principles of business organization, management fundamentals, trade operations, and commercial banking',
      'Economics: Microeconomics, macroeconomics, basic economic concepts, and trade theory',
      'Commercial Mathematics & Statistics: Business calculations, financial mathematics, statistical averages, and data analysis',
      'English: Professional communication, comprehension, and business writing skills'
    ]
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: 'IFRS Standards Certificate (International Financial Reporting)',
    issuer: 'International Accounting Standards Board Framework',
    status: 'Completed',
    dateOrExpected: '2021',
    skillsCovered: ['IFRS 15 Revenue Recognition', 'IFRS 16 Leases', 'IAS 2 Inventories', 'IAS 16 PP&E']
  },
  {
    title: 'Diploma in Accounting & Tally ERP',
    issuer: 'Professional Accounting & Vocational Standards',
    status: 'Completed',
    dateOrExpected: '2016',
    skillsCovered: ['Double-Entry Bookkeeping', 'Tally ERP Ledger Posting', 'Trial Balance Preparation', 'Voucher Verification']
  },
  {
    title: 'Advanced Microsoft Excel for Financial Analysts',
    issuer: 'Professional Microsoft Office Specialist Standards',
    status: 'Completed',
    dateOrExpected: '2015',
    skillsCovered: ['Advanced Formulas & XLOOKUP', 'Power Query ETL', 'Financial Model Controls', 'Variance Analysis']
  }
];

export const LANGUAGES_LIST: LanguageItem[] = [
  {
    language: 'English',
    proficiency: 'Fluent (Professional Business Proficiency)',
    level: 'Professional Fluency',
    badge: 'Fluent'
  },
  {
    language: 'Arabic',
    proficiency: 'Working (Professional Business Proficiency)',
    level: 'Professional Working Proficiency',
    badge: 'Working'
  },
  {
    language: 'Hindi / Urdu',
    proficiency: 'Native / Fluent',
    level: 'Native Fluency',
    badge: 'Native'
  }
];

export const PROFESSIONAL_VALUES = [
  {
    id: 'accuracy',
    title: 'Accuracy',
    tagline: 'Reliable and structured financial information.',
    description: 'Financial figures must be infallible. From penny-perfect bank reconciliations to zero-balance trial balances, every schedule is audited with zero tolerance for unverified variances.',
    icon: 'CheckCircle'
  },
  {
    id: 'analysis',
    title: 'Analysis',
    tagline: 'Transforming financial data into meaningful insights.',
    description: 'Raw debits and credits do not make decisions. Rigorous ratio analysis, margin decomposition, and driver-based modeling isolate the commercial realities beneath the numbers.',
    icon: 'TrendingUp'
  },
  {
    id: 'efficiency',
    title: 'Efficiency',
    tagline: 'Improving financial workflows and reporting processes.',
    description: 'Eliminating repetitive manual transcription through automated Power Query pipelines, standardized workpapers, and clean modeling conventions cuts close cycles in half.',
    icon: 'Zap'
  },
  {
    id: 'decision-support',
    title: 'Decision Support',
    tagline: 'Helping businesses understand financial performance.',
    description: 'Presenting analytical findings in clear executive language empowers CFOs, board members, and business unit heads to allocate capital with clarity and strategic confidence.',
    icon: 'ShieldCheck'
  }
];
