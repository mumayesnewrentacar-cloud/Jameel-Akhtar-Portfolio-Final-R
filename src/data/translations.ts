export type Language = 'en' | 'ar';

export interface Translations {
  // Navigation
  'nav.home': string;
  'nav.about': string;
  'nav.experience': string;
  'nav.skills': string;
  'nav.projects': string;
  'nav.financialModels': string;
  'nav.accounting': string;
  'nav.education': string;
  'nav.contact': string;
  'nav.downloadCV': string;
  'nav.viewProjects': string;
  'nav.verifiedFinance': string;
  'nav.theme': string;
  'nav.language': string;

  // Candidate Profile & Taglines
  'profile.name': string;
  'profile.title': string;
  'profile.subheading': string;
  'profile.location': string;
  'profile.yearsExperience': string;
  'profile.shortTagline': string;

  // Hero Section
  'hero.statusPill': string;
  'hero.headlineMain': string;
  'hero.headlineAccent': string;
  'hero.tagAccounting': string;
  'hero.tagFinancialAnalysis': string;
  'hero.tagFinancialModeling': string;
  'hero.tagExcelBI': string;
  'hero.tagReporting': string;
  'hero.introText': string;
  'hero.btnDownloadCV': string;
  'hero.btnShowcase': string;
  'hero.statYears': string;
  'hero.statYearsLabel': string;
  'hero.statReconciliation': string;
  'hero.statReconciliationLabel': string;
  'hero.statCompliance': string;
  'hero.statComplianceLabel': string;
  'hero.monitorTitle': string;
  'hero.monitorSubtitle': string;
  'hero.revenue': string;
  'hero.revenueSub': string;
  'hero.grossProfit': string;
  'hero.grossProfitSub': string;
  'hero.ebitda': string;
  'hero.ebitdaSub': string;
  'hero.ebit': string;
  'hero.ebitSub': string;
  'hero.netIncome': string;
  'hero.netIncomeSub': string;
  'hero.cashFlow': string;
  'hero.cashFlowSub': string;
  'hero.chartTitle': string;
  'hero.chartUnit': string;
  'hero.currentRatio': string;
  'hero.quickRatio': string;
  'hero.roe': string;
  'hero.benchmarkCurrent': string;
  'hero.benchmarkQuick': string;
  'hero.benchmarkRoe': string;
  'hero.auditCleared': string;
  'hero.ifrsCompliant': string;

  // About Section
  'about.tag': string;
  'about.title': string;
  'about.subtitle': string;
  'about.narrative1': string;
  'about.narrative2': string;
  'about.narrative3': string;
  'about.competenciesTitle': string;
  'about.snapshotTitle': string;
  'about.verifiedProfile': string;
  'about.statExpTitle': string;
  'about.statExpValue': string;
  'about.statExpDesc': string;
  'about.statExpertiseTitle': string;
  'about.statExpertiseValue': string;
  'about.statExpertiseDesc': string;
  'about.statModelsTitle': string;
  'about.statModelsValue': string;
  'about.statModelsDesc': string;
  'about.statAnalyticsTitle': string;
  'about.statAnalyticsValue': string;
  'about.statAnalyticsDesc': string;
  'about.locationNotice': string;
  'about.readyDeploy': string;
  'about.valueArcTitle': string;
  'about.valueArcSubtitle': string;
  'about.arc1Title': string;
  'about.arc1Desc': string;
  'about.arc2Title': string;
  'about.arc2Desc': string;
  'about.arc3Title': string;
  'about.arc3Desc': string;
  'about.arc4Title': string;
  'about.arc4Desc': string;
  'about.arc5Title': string;
  'about.arc5Desc': string;
  'about.arc6Title': string;
  'about.arc6Desc': string;

  // Values Section
  'values.tag': string;
  'values.title': string;
  'values.subtitle': string;
  'values.standard': string;
  'values.val1Title': string;
  'values.val1Tagline': string;
  'values.val1Desc': string;
  'values.val2Title': string;
  'values.val2Tagline': string;
  'values.val2Desc': string;
  'values.val3Title': string;
  'values.val3Tagline': string;
  'values.val3Desc': string;
  'values.val4Title': string;
  'values.val4Tagline': string;
  'values.val4Desc': string;

  // Experience Section
  'experience.tag': string;
  'experience.title': string;
  'experience.subtitle': string;
  'experience.responsibilities': string;
  'experience.keyAchievements': string;
  'experience.toolsFrameworks': string;
  'experience.commercialImpact': string;

  // Skills Section
  'skills.tag': string;
  'skills.title': string;
  'skills.subtitle': string;
  'skills.all': string;
  'skills.productionVerified': string;
  'skills.institutional': string;

  // Projects Section
  'projects.tag': string;
  'projects.title': string;
  'projects.subtitle': string;
  'projects.all': string;
  'projects.viewDetails': string;
  'projects.businessContext': string;
  'projects.analyticalApproach': string;
  'projects.measurableResult': string;
  'projects.keyDeliverables': string;

  // Financial Models Section
  'models.tag': string;
  'models.title': string;
  'models.subtitle': string;
  'models.selectModel': string;
  'models.keyOutputs': string;
  'models.integrityCheck': string;
  'models.integrityPassed': string;

  // Accounting Section
  'accounting.tag': string;
  'accounting.title': string;
  'accounting.subtitle': string;
  'accounting.stageHeader': string;
  'accounting.cycleTitle': string;
  'accounting.standardsTitle': string;
  'accounting.auditChecklist': string;

  // Analytics Section
  'analytics.tag': string;
  'analytics.title': string;
  'analytics.subtitle': string;

  // Tools Section
  'tools.tag': string;
  'tools.title': string;
  'tools.subtitle': string;

  // Education Section
  'education.tag': string;
  'education.title': string;
  'education.subtitle': string;

  // Contact Section
  'contact.tag': string;
  'contact.title': string;
  'contact.subtitle': string;
  'contact.collabTag': string;
  'contact.collabTitle': string;
  'contact.collabDesc': string;
  'contact.formTitle': string;
  'contact.nameLabel': string;
  'contact.namePlaceholder': string;
  'contact.emailLabel': string;
  'contact.emailPlaceholder': string;
  'contact.subjectLabel': string;
  'contact.subjectPlaceholder': string;
  'contact.messageLabel': string;
  'contact.messagePlaceholder': string;
  'contact.sendBtn': string;
  'contact.sendingBtn': string;
  'contact.successTitle': string;
  'contact.successDesc': string;
  'contact.sendAnother': string;
  'contact.directInquiries': string;
  'contact.location': string;
  'contact.availability': string;
  'contact.downloadCV': string;

  // Footer
  'footer.tagline': string;
  'footer.rights': string;
  'footer.theme': string;
  'footer.language': string;
  'footer.scrollTop': string;

  // Modals
  'modal.close': string;
  'modal.downloadPDF': string;
  'modal.printView': string;
  'modal.executiveSummary': string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.financialModels': 'Financial Models',
    'nav.accounting': 'Accounting',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    'nav.downloadCV': 'Download CV',
    'nav.viewProjects': 'View Projects',
    'nav.verifiedFinance': 'Verified Finance',
    'nav.theme': 'Theme',
    'nav.language': 'Language',

    // Candidate Profile
    'profile.name': 'Jameel Akhtar',
    'profile.title': 'Accountant & Financial Analyst',
    'profile.subheading': 'Turning financial data into accurate reporting, actionable insights, and better business decisions.',
    'profile.location': 'Dubai, United Arab Emirates',
    'profile.yearsExperience': '9+ Years Corporate Finance',
    'profile.shortTagline': 'Accounting | Financial Analysis | Financial Modeling | Advanced Excel | Reporting',

    // Hero Section
    'hero.statusPill': 'Jameel Akhtar • 9+ Years Corporate Finance',
    'hero.headlineMain': 'Accountant &',
    'hero.headlineAccent': 'Financial Analyst',
    'hero.tagAccounting': 'Accounting',
    'hero.tagFinancialAnalysis': 'Financial Analysis',
    'hero.tagFinancialModeling': 'Financial Modeling',
    'hero.tagExcelBI': 'Excel & BI',
    'hero.tagReporting': 'Reporting',
    'hero.introText': 'Experienced finance practitioner with proven success bridging daily general accounting, rigorous month-end reconciliation, and statutory financial reporting with advanced corporate financial modeling, 12-month rolling budgeting, and multi-scenario forecast analysis. Specializing in leveraging advanced Excel architectures, Power Query ETL pipelines, and ERP systems to transform complex transaction data into board-ready executive intelligence.',
    'hero.btnDownloadCV': 'Download CV',
    'hero.btnShowcase': 'Financial Modeling Showcase',
    'hero.statYears': '9+ Years',
    'hero.statYearsLabel': 'Accounting & FP&A',
    'hero.statReconciliation': '100%',
    'hero.statReconciliationLabel': 'Statutory Reconciliation',
    'hero.statCompliance': 'IFRS / GAAP',
    'hero.statComplianceLabel': 'Compliance Standards',
    'hero.monitorTitle': 'Financial Performance & Ratio Monitor',
    'hero.monitorSubtitle': 'Consolidated Management Ledger Model',
    'hero.revenue': 'Revenue',
    'hero.revenueSub': 'Gross Billings',
    'hero.grossProfit': 'Gross Profit',
    'hero.grossProfitSub': 'Post Direct COGS',
    'hero.ebitda': 'EBITDA',
    'hero.ebitdaSub': 'Operating Cash Proxy',
    'hero.ebit': 'EBIT',
    'hero.ebitSub': 'Post D&A Expense',
    'hero.netIncome': 'Net Income',
    'hero.netIncomeSub': 'Bottom-Line Return',
    'hero.cashFlow': 'Op. Cash Flow',
    'hero.cashFlowSub': 'CFO from Operations',
    'hero.chartTitle': 'Quarterly Revenue & EBITDA Velocity',
    'hero.chartUnit': 'Values in Millions ($M)',
    'hero.currentRatio': 'Current Ratio',
    'hero.quickRatio': 'Quick Ratio',
    'hero.roe': 'Return on Equity',
    'hero.benchmarkCurrent': 'Benchmark: >2.0x',
    'hero.benchmarkQuick': 'Acid Test: >1.5x',
    'hero.benchmarkRoe': 'DuPont Quality',
    'hero.auditCleared': 'Internal Audit Check: Cleared ($0.00 Imbalance)',
    'hero.ifrsCompliant': 'IFRS Framework Compliant',

    // About Section
    'about.tag': '01 // PROFESSIONAL BACKGROUND',
    'about.title': 'About Me',
    'about.subtitle': 'A disciplined finance professional dedicated to the intersection of rigorous financial accounting, corporate performance analysis, and institutional-grade financial modeling.',
    'about.narrative1': 'I am an experienced Accountant & Financial Analyst with over 9 years of practical execution across corporate accounting, management reporting, financial analysis, and strategic forecasting. My career is defined by a dual-competency approach: anchoring operational stability through meticulous general ledger discipline and statutory IFRS compliance, while accelerating commercial performance through predictive modeling and variance insights.',
    'about.narrative2': 'Having led end-to-end month-end closures, multi-currency consolidations, and complex bank reconciliations, I recognize that dependable strategic decisions start with clean, irreproachable accounting foundations. I specialize in designing and maintaining integrated three-statement financial models that accurately connect balance sheet working capital movements with income statement margins and actual cash generation.',
    'about.narrative3': 'Whether automating manual bookkeeping routines through advanced Excel formulas and Power Query pipelines or preparing variance briefings for executive leadership, my objective is always the same: eliminating reporting delays, surfacing root-cause profit drivers, and delivering reliable financial clarity.',
    'about.competenciesTitle': 'Key Professional Competencies',
    'about.snapshotTitle': 'Professional Snapshot',
    'about.verifiedProfile': 'Verified Profile',
    'about.statExpTitle': 'Accounting Experience',
    'about.statExpValue': '9+ Years',
    'about.statExpDesc': 'Progressive corporate accounting, general ledger stewardship, and statutory close operations.',
    'about.statExpertiseTitle': 'Core Expertise',
    'about.statExpertiseValue': 'Accounting & Finance',
    'about.statExpertiseDesc': 'Financial statement preparation, variance analysis, reconciliations, and managerial reporting.',
    'about.statModelsTitle': 'Financial Models',
    'about.statModelsValue': 'Multiple Practical Models',
    'about.statModelsDesc': 'Integrated three-statement models, DCF corporate valuations, scenario matrices & FP&A budgets.',
    'about.statAnalyticsTitle': 'Tools & Analytics',
    'about.statAnalyticsValue': 'Excel & Financial Analysis',
    'about.statAnalyticsDesc': 'Advanced Power Query ETL, XLOOKUP, dynamic arrays, scenario solvers, and ERP ecosystems.',
    'about.locationNotice': 'Location: Dubai, United Arab Emirates',
    'about.readyDeploy': 'Ready to Deploy',
    'about.valueArcTitle': 'The Value Realization Arc',
    'about.valueArcSubtitle': 'How Analytical Rigor Converts Accounting Data into Strategic Business Value',
    'about.arc1Title': 'Accounting Accuracy',
    'about.arc1Desc': 'Precision in ledgers & transactions',
    'about.arc2Title': 'Financial Understanding',
    'about.arc2Desc': 'Grasping structural dynamics',
    'about.arc3Title': 'Analytical Thinking',
    'about.arc3Desc': 'Uncovering root causes',
    'about.arc4Title': 'Financial Modeling',
    'about.arc4Desc': 'Building dynamic scenarios',
    'about.arc5Title': 'Business Insight',
    'about.arc5Desc': 'Translating numbers into strategy',
    'about.arc6Title': 'Better Decisions',
    'about.arc6Desc': 'Driving sustainable profitability',

    // Values Section
    'values.tag': 'OPERATING PRINCIPLES',
    'values.title': 'How I Add Commercial Value',
    'values.subtitle': 'Every schedule, model, and executive summary is governed by four non-negotiable professional commitments.',
    'values.standard': 'Executive Standard',
    'values.val1Title': 'Accuracy',
    'values.val1Tagline': 'Reliable and structured financial information.',
    'values.val1Desc': 'Financial figures must be infallible. From penny-perfect bank reconciliations to zero-balance trial balances, every schedule is audited with zero tolerance for unverified variances.',
    'values.val2Title': 'Analysis',
    'values.val2Tagline': 'Transforming financial data into meaningful insights.',
    'values.val2Desc': 'Raw debits and credits do not make decisions. Rigorous ratio analysis, margin decomposition, and driver-based modeling isolate the commercial realities beneath the numbers.',
    'values.val3Title': 'Efficiency',
    'values.val3Tagline': 'Improving financial workflows and reporting processes.',
    'values.val3Desc': 'Eliminating repetitive manual transcription through automated Power Query pipelines, standardized workpapers, and clean modeling conventions cuts close cycles in half.',
    'values.val4Title': 'Decision Support',
    'values.val4Tagline': 'Helping businesses understand financial performance.',
    'values.val4Desc': 'Presenting analytical findings in clear executive language empowers CFOs, board members, and business unit heads to allocate capital with clarity and strategic confidence.',

    // Experience Section
    'experience.tag': '02 // CAREER TIMELINE',
    'experience.title': 'Professional Experience',
    'experience.subtitle': '9+ years of verifiable corporate finance and accounting progression, demonstrating reliable execution of core accounting controls and actionable FP&A commercial business advisory.',
    'experience.responsibilities': 'Core Responsibilities & Operations',
    'experience.keyAchievements': 'Key Measurable Achievements',
    'experience.toolsFrameworks': 'Tools & Frameworks',
    'experience.commercialImpact': 'Commercial Business Impact',

    // Skills Section
    'skills.tag': '03 // CORE CAPABILITIES',
    'skills.title': 'Categorized Skills & Technical Competencies',
    'skills.subtitle': 'A comprehensive, verified taxonomy of practical accounting execution, corporate financial analysis, mathematical modeling, and advanced spreadsheet automation—free of arbitrary percentage meters.',
    'skills.all': 'All Capabilities',
    'skills.productionVerified': 'Production Verified',
    'skills.institutional': 'Institutional',

    // Projects Section
    'projects.tag': '04 // CASE STUDIES & IMPLEMENTATIONS',
    'projects.title': 'Featured Financial Projects',
    'projects.subtitle': 'Practical, high-impact financial models, accounting system overhauls, and analytical frameworks built for real corporate scenarios.',
    'projects.all': 'All Projects',
    'projects.viewDetails': 'Explore Model',
    'projects.businessContext': 'Business Context',
    'projects.analyticalApproach': 'Analytical Approach',
    'projects.measurableResult': 'Measurable Result',
    'projects.keyDeliverables': 'Key Deliverables',

    // Financial Models Section
    'models.tag': '05 // DYNAMIC FINANCIAL ARCHITECTURE',
    'models.title': 'Financial Modeling Showcase',
    'models.subtitle': 'Interactive, live-calculating models engineered with strict formula governance, zero plug balancing, and dynamic scenario toggles.',
    'models.selectModel': 'Select Active Model Architecture',
    'models.keyOutputs': 'Model Performance Outputs',
    'models.integrityCheck': 'Model Integrity Check',
    'models.integrityPassed': 'Passed (Zero Variance)',

    // Accounting Section
    'accounting.tag': '06 // ACCOUNTING CONTROLS & IFRS',
    'accounting.title': 'Accounting & Reporting Expertise',
    'accounting.subtitle': 'Deep technical mastery of the 8-stage accounting cycle, statutory compliance, audit preparation, and core financial governance.',
    'accounting.stageHeader': 'Complete Accounting Cycle Stages',
    'accounting.cycleTitle': '8-Stage Accounting Cycle',
    'accounting.standardsTitle': 'Statutory Accounting Frameworks',
    'accounting.auditChecklist': 'Audit Readiness Checklist',

    // Analytics Section
    'analytics.tag': '07 // DATA TRANSFORMATION',
    'analytics.title': 'From Raw Data to Financial Insight',
    'analytics.subtitle': 'Bridging messy transaction tables, multi-currency ledgers, and automated Power Query pipelines into board-ready executive summaries.',

    // Tools Section
    'tools.tag': '08 // TECHNICAL STACK',
    'tools.title': 'Technology & Financial Systems',
    'tools.subtitle': 'Enterprise ERPs, spreadsheet architectures, business intelligence suites, and analytical toolsets used in daily execution.',

    // Education Section
    'education.tag': '09 // CREDENTIALS',
    'education.title': 'Education & Certifications',
    'education.subtitle': 'Academic foundation in accounting and business finance paired with continuous specialized professional development.',

    // Contact Section
    'contact.tag': '10 // GET IN TOUCH',
    'contact.title': 'Work Together',
    'contact.subtitle': "Let's discuss how my accounting rigor and financial modeling capabilities can create clarity and commercial value for your organization.",
    'contact.collabTag': 'EXPLORE COLLABORATION',
    'contact.collabTitle': 'Interested in working together?',
    'contact.collabDesc': 'Explore my experience, financial projects, and analytical capabilities. Available for Senior Accountant, Financial Analyst, and FP&A leadership opportunities.',
    'contact.formTitle': 'Direct Contact & Interview Inquiries',
    'contact.nameLabel': 'Full Name',
    'contact.namePlaceholder': 'e.g. Sarah Jenkins',
    'contact.emailLabel': 'Business Email',
    'contact.emailPlaceholder': 'e.g. s.jenkins@company.ae',
    'contact.subjectLabel': 'Subject',
    'contact.subjectPlaceholder': 'e.g. Senior Accountant Opportunity - Dubai',
    'contact.messageLabel': 'Message / Inquiry Details',
    'contact.messagePlaceholder': 'Describe the role, team objectives, or specific financial modeling project requirements...',
    'contact.sendBtn': 'Send Message',
    'contact.sendingBtn': 'Dispatching Note...',
    'contact.successTitle': 'Message Dispatched Successfully!',
    'contact.successDesc': 'Thank you for reaching out. Jameel Akhtar will review your note and respond within 24 business hours.',
    'contact.sendAnother': 'Send Another Message',
    'contact.directInquiries': 'Direct Inquiries',
    'contact.location': 'Location',
    'contact.availability': 'Availability',
    'contact.downloadCV': 'Download CV (PDF)',

    // Footer
    'footer.tagline': 'Bridging statutory accounting accuracy, dynamic three-statement financial modeling, and commercial business decisions.',
    'footer.rights': 'All Rights Reserved.',
    'footer.theme': 'Theme:',
    'footer.language': 'Language:',
    'footer.scrollTop': 'Top',

    // Modals
    'modal.close': 'Close',
    'modal.downloadPDF': 'Download Official CV (PDF)',
    'modal.printView': 'Print / Save as PDF',
    'modal.executiveSummary': 'Executive Summary',
  },

  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'نبذة عني',
    'nav.experience': 'الخبرة المهنية',
    'nav.skills': 'المهارات والكفاءات',
    'nav.projects': 'المشاريع المالية',
    'nav.financialModels': 'النماذج المالية',
    'nav.accounting': 'المعايير المحاسبية',
    'nav.education': 'المؤهلات والشهادات',
    'nav.contact': 'تواصل معي',
    'nav.downloadCV': 'تحميل السيرة الذاتية',
    'nav.viewProjects': 'استعراض المشاريع',
    'nav.verifiedFinance': 'كفاءة مالية معتمدة',
    'nav.theme': 'المظهر',
    'nav.language': 'اللغة',

    // Candidate Profile
    'profile.name': 'جميل أختر',
    'profile.title': 'محاسب ومحلل مالي',
    'profile.subheading': 'تحويل البيانات المالية إلى تقارير دقيقة ورؤى استراتيجية وقرارات أعمال مدروسة.',
    'profile.location': 'دبي، الإمارات العربية المتحدة',
    'profile.yearsExperience': 'أكثر من 9 سنوات في الإدارة المالية والمحاسبة',
    'profile.shortTagline': 'المحاسبة العامة | التحليل المالي | النمذجة المالية | إكسل المتقدم | التقارير الإدارية',

    // Hero Section
    'hero.statusPill': 'جميل أختر • أكثر من 9 سنوات في الإدارة المالية',
    'hero.headlineMain': 'محاسب و',
    'hero.headlineAccent': 'محلل مالي',
    'hero.tagAccounting': 'المحاسبة',
    'hero.tagFinancialAnalysis': 'التحليل المالي',
    'hero.tagFinancialModeling': 'النمذجة المالية',
    'hero.tagExcelBI': 'إكسل وذكاء الأعمال',
    'hero.tagReporting': 'التقارير المالية',
    'hero.introText': 'خبير مالي متمرس يتمتع بسجل حافل يجمع بين المحاسبة العامة اليومية، والتسويات الشهرية الدقيقة، وإعداد التقارير المالية النظامية، مع بناء النماذج المالية المؤسسية المتقدمة، والميزانيات التقديرية المتجددة، وتحليل السيناريوهات الاستراتيجية. متخصص في تسخير أدوات إكسل المتقدمة ومسارات Power Query وأنظمة الـ ERP لتحويل البيانات المعقدة إلى رؤى تنفيذية تخدم صناع القرار.',
    'hero.btnDownloadCV': 'تحميل السيرة الذاتية',
    'hero.btnShowcase': 'معرض النماذج المالية',
    'hero.statYears': '+9 سنوات',
    'hero.statYearsLabel': 'المحاسبة والتخطيط المالي',
    'hero.statReconciliation': '100%',
    'hero.statReconciliationLabel': 'مطابقة القيود النظامية',
    'hero.statCompliance': 'IFRS / GAAP',
    'hero.statComplianceLabel': 'معايير الامتثال المالي',
    'hero.monitorTitle': 'مؤشرات الأداء والنسب المالية',
    'hero.monitorSubtitle': 'نموذج سجل الأستاذ الإداري الموحد',
    'hero.revenue': 'الإيرادات',
    'hero.revenueSub': 'إجمالي الفواتير',
    'hero.grossProfit': 'إجمالي الربح',
    'hero.grossProfitSub': 'بعد تكلفة المبيعات',
    'hero.ebitda': 'EBITDA',
    'hero.ebitdaSub': 'التدفق التشغيلي النقدي',
    'hero.ebit': 'EBIT',
    'hero.ebitSub': 'الأرباح التشغيلية',
    'hero.netIncome': 'صافي الدخل',
    'hero.netIncomeSub': 'العائد النهائي للشركة',
    'hero.cashFlow': 'التدفق النقدي التشغيلي',
    'hero.cashFlowSub': 'التدفقات من العمليات',
    'hero.chartTitle': 'مسار الإيرادات و EBITDA الفصلي',
    'hero.chartUnit': 'القيم بملايين الدولارات ($M)',
    'hero.currentRatio': 'نسبة التداول',
    'hero.quickRatio': 'نسبة السيولة السريعة',
    'hero.roe': 'العائد على حقوق الملكية',
    'hero.benchmarkCurrent': 'المعيار: >2.0x',
    'hero.benchmarkQuick': 'الاختبار الدقيق: >1.5x',
    'hero.benchmarkRoe': 'معادلة DuPont',
    'hero.auditCleared': 'فحص التدقيق الداخلي: معتمد (فارق $0.00)',
    'hero.ifrsCompliant': 'متوافق مع معايير IFRS الدولية',

    // About Section
    'about.tag': '01 // الخلفية المهنية',
    'about.title': 'نبذة عني',
    'about.subtitle': 'خبير مالي يجمع بين صرامة المحاسبة المالية النظامية، وتحليل أداء الشركات، والنمذجة المالية المؤسسية عالية الدقة.',
    'about.narrative1': 'أنا محاسب ومحلل مالي أمتلك أكثر من 9 سنوات من الخبرة العملية في المحاسبة العامة للشركات، والتقارير الإدارية، والتحليل المالي، والتنبؤ الاستراتيجي. يتميز مساري المهني بكفاءة مزدوجة: ترسيخ الاستقرار التشغيلي من خلال الانضباط المحاسبي الصارم والامتثال لمعايير IFRS، مع دعم النمو التجاري عبر نماذج التنبؤ وتحليل انحرافات الميزانية.',
    'about.narrative2': 'من خلال إشرافي المباشر على إقفال الفترات المالية الشهرية، والتوحيد متعدد العملات، والتسويات البنكية المعقدة، أدرك أن القرارات الاستراتيجية الصائبة تبدأ دائماً بأسس محاسبية نزيهة وخالية من الأخطاء. أتخصص في بناء وصيانة نماذج القوائم المالية الثلاث المتكاملة لربط حركة رأس المال العامل بهوامش الربح والتدفقات النقدية الفعلية.',
    'about.narrative3': 'سواء كان الأمر يتعلق بأتمتة الإجراءات اليدوية عبر صيغ إكسل المعقدة وتقنيات Power Query، أو إعداد عروض الانحرافات المالية للإدارة التنفيذية، فإن هدفي الدائم هو: القضاء على التأخير الزمني، وتحديد المحركات الجذرية للربحية، وتقديم وضوح مالي يوثق به.',
    'about.competenciesTitle': 'الكفاءات المهنية الرئيسية',
    'about.snapshotTitle': 'لمحة مهنية',
    'about.verifiedProfile': 'ملف موثق',
    'about.statExpTitle': 'الخبرة المحاسبية',
    'about.statExpValue': '+9 سنوات',
    'about.statExpDesc': 'خبرة متراكمة في المحاسبة العامة، وإدارة سجلات الأستاذ، وعمليات الإقفال المالي النظامي.',
    'about.statExpertiseTitle': 'الخبرة الأساسية',
    'about.statExpertiseValue': 'المحاسبة والمالية',
    'about.statExpertiseDesc': 'إعداد القوائم المالية، وتحليل التباين، والتسويات المحاسبية، والتقارير الرقابية.',
    'about.statModelsTitle': 'النماذج المالية',
    'about.statModelsValue': 'نماذج عملية متعددة',
    'about.statModelsDesc': 'نماذج القوائم المالية الثلاث، تقييم DCF، ومصفوفات السيناريوهات والتنبؤات الدورية.',
    'about.statAnalyticsTitle': 'الأدوات والتحليلات',
    'about.statAnalyticsValue': 'إكسل والتحليل المالي',
    'about.statAnalyticsDesc': 'استخدام Power Query المتقدم، والدوال المركبة، ونماذج المحاكاة، وأنظمة ERP المؤسسية.',
    'about.locationNotice': 'الموقع: دبي، الإمارات العربية المتحدة',
    'about.readyDeploy': 'جاهز للبدء الفوري',
    'about.valueArcTitle': 'مسار تحقيق القيمة المالية',
    'about.valueArcSubtitle': 'كيف يحول التحليل المالي المحكم البيانات المحاسبية إلى قيمة استراتيجية للشركة',
    'about.arc1Title': 'الدقة المحاسبية',
    'about.arc1Desc': 'ضبط العمليات وسجلات الأستاذ بكل إحكام',
    'about.arc2Title': 'الفهم المالي العميق',
    'about.arc2Desc': 'إدراك الهيكل التشغيلي والمالي',
    'about.arc3Title': 'التفكير التحليلي',
    'about.arc3Desc': 'استكشاف الأسباب الجذرية وراء الأرقام',
    'about.arc4Title': 'النمذجة المالية',
    'about.arc4Desc': 'بناء سيناريوهات ديناميكية متكاملة',
    'about.arc5Title': 'الرؤية التجارية',
    'about.arc5Desc': 'تحويل الأرقام إلى خطط استراتيجية',
    'about.arc6Title': 'قرارات أكثر صواباً',
    'about.arc6Desc': 'دفع عجلة الربحية المستدامة',

    // Values Section
    'values.tag': 'مبادئ العمل الأساسية',
    'values.title': 'كيف أضيف قيمة تجارية ملموسة',
    'values.subtitle': 'كل جدول حسابي ونموذج مالي وعرض تنفيذي يستند إلى أربعة التزامات مهنية صارمة.',
    'values.standard': 'معيار تنفيذي',
    'values.val1Title': 'الدقة المتناهية',
    'values.val1Tagline': 'معلومات مالية موثوقة ومحكمة البناء.',
    'values.val1Desc': 'البيانات المالية يجب ألا تحتمل الخطأ. من التسويات البنكية الدقيقة حتى ميزان المراجعة المتطابق، يتم تدقيق كل جدول دون أي تساهل مع الفروقات غير المبررة.',
    'values.val2Title': 'التحليل الاستراتيجي',
    'values.val2Tagline': 'تحويل البيانات المالية الخام إلى رؤى مجدية.',
    'values.val2Desc': 'القيود اليومية وحدها لا تصنع القرارات. التحليل الدقيق للنسب، وتفكيك هوامش الربح، والنمذجة المبنية على المحركات تعكس الواقع التجاري الحقيقي خلف الأرقام.',
    'values.val3Title': 'الكفاءة والتشغيل الذكي',
    'values.val3Tagline': 'تطوير مسارات العمل وإجراءات التقارير المالية.',
    'values.val3Desc': 'إلغاء الإدخال اليدوي المتكرر عبر تقنيات Power Query، وأوراق العمل القياسية، ومعايير النمذجة المتقدمة يقلص فترات إقفال الحسابات إلى النصف.',
    'values.val4Title': 'دعم اتخاذ القرار',
    'values.val4Tagline': 'مساعدة الإدارة التنفيذية على فهم الأداء المالي.',
    'values.val4Desc': 'تقديم مخرجات التحليل بلغة تنفيذية واضحة ومباشرة يمكن المديرين التنفيذيين ومجلس الإدارة من تخصيص رؤوس الأموال بثقة استراتيجية تامة.',

    // Experience Section
    'experience.tag': '02 // المسار المهني',
    'experience.title': 'الخبرة المهنية',
    'experience.subtitle': 'أكثر من 9 سنوات من التطور المهني الموثق في المحاسبة والمالية، تجمع بين ضوابط المحاسبة الدقيقة واستشارات التخطيط المالي الفعالة.',
    'experience.responsibilities': 'المسؤوليات والعمليات الأساسية',
    'experience.keyAchievements': 'إنجازات قياسية وملموسة',
    'experience.toolsFrameworks': 'الأدوات والأنظمة المستخدمة',
    'experience.commercialImpact': 'الأثر المالي والتجاري للشركة',

    // Skills Section
    'skills.tag': '03 // القدرات الأساسية',
    'skills.title': 'المهارات المصنفة والكفاءات التقنية',
    'skills.subtitle': 'تصنيف شامل وموثق لمهام المحاسبة التطبيقية والتحليل المالي والنمذجة الرياضية وأتمتة جداول البيانات—بعيداً عن المؤشرات النسبية العشوائية.',
    'skills.all': 'جميع الكفاءات',
    'skills.productionVerified': 'معتمد في بيئة العمل',
    'skills.institutional': 'معيار مؤسسي',

    // Projects Section
    'projects.tag': '04 // دراسات الحالة والتطبيقات',
    'projects.title': 'المشاريع المالية البارزة',
    'projects.subtitle': 'نماذج مالية عالية الأثر وتطوير للأنظمة المحاسبية وأطر عمل تحليلية صُممت لبيئات الشركات الواقعية.',
    'projects.all': 'جميع المشاريع',
    'projects.viewDetails': 'استعراض النموذج',
    'projects.businessContext': 'سياق العمل والهدف',
    'projects.analyticalApproach': 'المنهجية التحليلية',
    'projects.measurableResult': 'النتائج المحققة',
    'projects.keyDeliverables': 'المخرجات الأساسية',

    // Financial Models Section
    'models.tag': '05 // الهندسة المالية الديناميكية',
    'models.title': 'معرض النماذج المالية التفاعلية',
    'models.subtitle': 'نماذج تفاعلية حية بحسابات ديناميكية تخضع لقواعد ربط صارمة وبدون فوارق توازن ومع إمكانية تبديل السيناريوهات.',
    'models.selectModel': 'اختر النموذج المالي المعروض',
    'models.keyOutputs': 'مخرجات أداء النموذج',
    'models.integrityCheck': 'فحص سلامة النموذج',
    'models.integrityPassed': 'معتمد (فارق توازن صفري)',

    // Accounting Section
    'accounting.tag': '06 // الضوابط المحاسبية ومعايير IFRS',
    'accounting.title': 'الخبرة المحاسبية وإعداد التقارير',
    'accounting.subtitle': 'إتقان تقني شامل لدورة المحاسبة ذات المراحل الثماني، والامتثال للمعايير الدولية، والجاهزية للتدقيق الخارجي.',
    'accounting.stageHeader': 'مراحل الدورة المحاسبية الكاملة',
    'accounting.cycleTitle': 'دورة المحاسبة المكونة من 8 مراحل',
    'accounting.standardsTitle': 'الأطر المحاسبية النظامية',
    'accounting.auditChecklist': 'قائمة التدقيق وجاهزية المراجعة',

    // Analytics Section
    'analytics.tag': '07 // معالجة وتحويل البيانات',
    'analytics.title': 'من البيانات الخام إلى الرؤى المالية',
    'analytics.subtitle': 'تحويل جداول العمليات غير المهيكلة وقيود العملات المتعددة عبر مسارات Power Query إلى تقارير تنفيذية موثوقة.',

    // Tools Section
    'tools.tag': '08 // الأنظمة والأدوات التقنية',
    'tools.title': 'التكنولوجيا والأنظمة المالية',
    'tools.subtitle': 'أنظمة تخطيط الموارد المؤسسية (ERP)، وهندسة جداول البيانات، وأدوات ذكاء الأعمال المستخدمة يومياً في العمل.',

    // Education Section
    'education.tag': '09 // المؤهلات الأكاديمية',
    'education.title': 'التعليم والشهادات المهنية',
    'education.subtitle': 'أساس أكاديمي راسخ في المحاسبة ومالية الأعمال مقترن بتطوير مهني وتخصصي مستمر.',

    // Contact Section
    'contact.tag': '10 // تواصل مباشر',
    'contact.title': 'لنتعاون معاً',
    'contact.subtitle': 'يسعدني مناقشة كيف يمكن لخبرتي في الضبط المحاسبي والنمذجة المالية تحقيق الوضوح والقيمة لمؤسستكم.',
    'contact.collabTag': 'فرص التعاون المهني',
    'contact.collabTitle': 'مهتم بالعمل معاً أو استكشاف فرصة؟',
    'contact.collabDesc': 'استعرض خبراتي ومشاريعي ونماذجي المالية. متاح لشغل أدوار محاسب أول، محلل مالي، ومناصب التخطيط المالي FP&A.',
    'contact.formTitle': 'التواصل المباشر والاستفسارات المهنية',
    'contact.nameLabel': 'الاسم بالكامل',
    'contact.namePlaceholder': 'مثال: سارة العامري',
    'contact.emailLabel': 'البريد الإلكتروني المهني',
    'contact.emailPlaceholder': 'مثال: s.alameri@company.ae',
    'contact.subjectLabel': 'موضوع الرسالة',
    'contact.subjectPlaceholder': 'مثال: فرصة عمل - محاسب أول في دبي',
    'contact.messageLabel': 'تفاصيل الرسالة أو الفرصة',
    'contact.messagePlaceholder': 'يرجى توضيح متطلبات الدور الوظيفي، أو أهداف الفريق، أو تفاصيل مشروع النمذجة المالية...',
    'contact.sendBtn': 'إرسال الرسالة',
    'contact.sendingBtn': 'جاري الإرسال...',
    'contact.successTitle': 'تم إرسال رسالتك بنجاح!',
    'contact.successDesc': 'شكراً لتواصلك. سيقوم جميل أختر بمراجعة استفسارك والرد خلال 24 ساعة عمل.',
    'contact.sendAnother': 'إرسال رسالة أخرى',
    'contact.directInquiries': 'بيانات الاتصال المباشرة',
    'contact.location': 'المقر',
    'contact.availability': 'الجاهزية',
    'contact.downloadCV': 'تحميل السيرة الذاتية (PDF)',

    // Footer
    'footer.tagline': 'الربط بين دقة المحاسبة النظامية، النمذجة المالية ثلاثية القوائم، والقرارات التجارية الاستراتيجية.',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.theme': 'المظهر:',
    'footer.language': 'اللغة:',
    'footer.scrollTop': 'الأعلى',

    // Modals
    'modal.close': 'إغلاق',
    'modal.downloadPDF': 'تحميل السيرة الذاتية الرسمية (PDF)',
    'modal.printView': 'طباعة / حفظ كـ PDF',
    'modal.executiveSummary': 'الملخص التنفيذي',
  },
};
