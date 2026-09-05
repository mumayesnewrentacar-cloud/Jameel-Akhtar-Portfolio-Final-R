import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  Layers, 
  BookOpen, 
  Scale, 
  ShieldCheck, 
  CalendarCheck, 
  ArrowRight,
  Calculator,
  Building2
} from 'lucide-react';
import { ACCOUNTING_CYCLE_STEPS } from '../data/portfolioData';

export const AccountingKnowledgeSection: React.FC = () => {
  const [activeCycleStep, setActiveCycleStep] = useState<number>(0);

  const coreKnowledgeCards = [
    {
      title: 'Chart of Accounts (COA)',
      subtitle: 'Master Structural Hierarchy',
      desc: 'Systematic numbering structure classifying Assets (1000s), Liabilities (2000s), Equity (3000s), Revenue (4000s), and Operating Expenses (5000s-8000s) for multi-entity consolidation.',
      standards: 'Structured for IFRS & US GAAP mapping'
    },
    {
      title: 'General Ledger & Trial Balance',
      subtitle: 'Integrity Verification',
      desc: 'Executing monthly debit and credit balances cutoff, zero-variance trial balance reconciliation, and resolving unreconciled transit items across cash, inventory, and intercompany clearing accounts.',
      standards: 'Zero-tolerance debit = credit balance check'
    },
    {
      title: 'Accruals & Prepayments',
      subtitle: 'Matching Principle Alignment',
      desc: 'Accruing earned revenues and incurred unbilled supplier expenses while systematically amortizing prepaid insurance, rent, and software licenses over their economic benefit periods.',
      standards: 'Strict adherence to accrual basis accounting'
    },
    {
      title: 'Depreciation & Fixed Assets',
      subtitle: 'Asset Register Governance',
      desc: 'Maintaining fixed asset schedules, applying Straight-Line and accelerated depreciation methods, tracking net book values (NBV), salvage valuations, and impairment test reviews.',
      standards: 'IAS 16 (Property, Plant and Equipment) compliant'
    },
    {
      title: 'Month-End Close Procedures',
      subtitle: '5-Day Close Protocol',
      desc: 'Standardized 5-day close checklist encompassing bank reconciliations, inventory cutoff, AP/AR aging review, intercompany eliminations, recurring journal entries, and management package assembly.',
      standards: 'Reduces close cycles while eliminating audit adjustments'
    },
    {
      title: 'Statutory Statement Assembly',
      subtitle: 'Full Four-Statement Disclosure',
      desc: 'Compiling the Income Statement, Balance Sheet, Statement of Cash Flows (Direct and Indirect methods), and Statement of Shareholders Equity with audit-ready footnote schedules.',
      standards: 'IFRS 15, IFRS 16, and IAS 1 full presentation'
    }
  ];

  return (
    <section id="accounting" className="relative py-20 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* Subtle Dot Matrix */}
      <div className="absolute inset-0 bg-dot-matrix dark:bg-dot-matrix-dark pointer-events-none opacity-40 dark:opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>06 // CORE DISCIPLINE</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Accounting &amp; Reporting Expertise
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A bedrock foundation in general accounting, double-entry ledger discipline, statutory compliance, 
            and period-end close governance that guarantees corporate figures are verifiable, auditable, and robust.
          </p>
        </div>

        {/* 8-Stage Accounting Cycle Visual Workflow */}
        <div className="mt-12 bg-slate-50 dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-750 p-6 sm:p-8 shadow-sm dark:shadow-md transition-colors duration-200">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-200 dark:border-slate-750">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                The End-to-End Accounting Cycle
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                From Raw Source Transaction to Executive Decision
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-white dark:bg-slate-900 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-800 shadow-xs">
              <Scale className="w-4 h-4" />
              <span>Full Audit Trail Preserved</span>
            </div>
          </div>

          {/* Cycle Steps Horizontal / Grid Layout */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {ACCOUNTING_CYCLE_STEPS.map((step, idx) => {
              const isSelected = activeCycleStep === idx;
              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveCycleStep(idx)}
                  className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-emerald-50/90 dark:bg-slate-800 border-emerald-500 shadow-md ring-1 ring-emerald-500/40'
                      : 'bg-white dark:bg-slate-900/90 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-100/60 dark:hover:bg-slate-850'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`w-5 h-5 rounded-full font-mono text-[10px] font-bold flex items-center justify-center ${
                        isSelected 
                          ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'
                      }`}>
                        {step.step}
                      </span>
                      {idx < ACCOUNTING_CYCLE_STEPS.length - 1 && (
                        <span className="text-slate-400 dark:text-slate-600 text-xs hidden lg:inline">→</span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                      {step.title}
                    </div>
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    {step.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Drawer for Active Selected Cycle Step */}
          {ACCOUNTING_CYCLE_STEPS[activeCycleStep] && (
            <div className="mt-6 p-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 grid grid-cols-1 md:grid-cols-12 gap-5 items-center shadow-xs">
              <div className="md:col-span-8 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                  <span>CYCLE STEP 0{ACCOUNTING_CYCLE_STEPS[activeCycleStep].step}</span>
                  <span>•</span>
                  <span>{ACCOUNTING_CYCLE_STEPS[activeCycleStep].title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {ACCOUNTING_CYCLE_STEPS[activeCycleStep].description}
                </p>
              </div>

              <div className="md:col-span-4 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                <div className="text-[11px] font-mono uppercase text-emerald-700 dark:text-emerald-400 font-semibold mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Internal Control &amp; QA Check</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                  {ACCOUNTING_CYCLE_STEPS[activeCycleStep].controls}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 6 Core Accounting Knowledge Modules */}
        <div className="mt-12">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              Accounting Principles &amp; Governance Areas
            </h3>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              IFRS &amp; US GAAP Frameworks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreKnowledgeCards.map((card, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 hover:border-emerald-500/40 dark:hover:border-slate-650 transition-all flex flex-col justify-between shadow-sm dark:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
                      {card.title}
                    </h4>
                    <span className="text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-2 font-medium">
                    {card.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-750 flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="truncate">{card.standards}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
