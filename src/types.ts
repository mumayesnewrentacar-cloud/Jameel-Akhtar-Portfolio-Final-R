export interface FinancialMetric {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  subtext?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  employmentType: string;
  summary: string;
  responsibilities: string[];
  keyAchievements: string[];
  tools: string[];
  businessImpact: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    description: string;
    focus: string;
  }[];
}

export interface ProjectAssumption {
  parameter: string;
  baseCase: string;
  rationale: string;
}

export interface FinancialProject {
  id: string;
  number: string;
  title: string;
  category: 'Financial Analysis' | 'Valuation' | 'FP&A & Forecasting' | 'Excel & Reporting' | 'Accounting & Variance';
  badge: string;
  objective: string;
  businessProblem: string;
  methodology: string;
  financialConcepts: string[];
  tools: string[];
  keyOutput: string;
  metrics: {
    label: string;
    value: string;
    note?: string;
  }[];
  assumptions: ProjectAssumption[];
  modelArchitecture: string[];
  analysisHighlights: string[];
  results: string[];
  keyTakeaways: string[];
  sampleData: {
    headers: string[];
    rows: (string | number)[][];
  };
}

export interface WorkflowStep {
  step: number;
  name: string;
  category: string;
  description: string;
  formulaOrRule?: string;
  financialSignificance: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  honors?: string;
  relevantCoursework: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  status: 'Completed' | 'Currently Pursuing' | 'Planned';
  dateOrExpected: string;
  skillsCovered: string[];
  credentialId?: string;
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  usageArea: string;
  level: 'Advanced' | 'Proficient';
  features: string[];
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  level: string;
  badge: string;
}
