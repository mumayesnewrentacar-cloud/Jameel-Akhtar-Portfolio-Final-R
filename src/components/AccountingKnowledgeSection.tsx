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
import { motion, AnimatePresence } from 'motion/react';
import { ACCOUNTING_CYCLE_STEPS } from '../data/portfolioData';
import { 
  AnimatedSectionHeader, 
  AnimatedStaggerContainer, 
  AnimatedItem, 
  CinematicScrollReveal 
} from './AnimatedSection';

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
    <section id="accounting" className="relative py-20 bg-[#090614] text-slate-100 border-b border-purple-950/60 overflow-hidden">
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-fuchsia-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Scroll Entrance */}
        <AnimatedSectionHeader
          badge={
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono font-medium text-pink-400 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              <span>06 // CORE DISCIPLINE</span>
            </div>
          }
          title="Accounting &amp; Reporting Expertise"
          subtitle="A bedrock foundation in general accounting, double-entry ledger discipline, statutory compliance, and period-end close governance that guarantees corporate figures are verifiable, auditable, and robust."
        />

        {/* 8-Stage Accounting Cycle Visual Workflow with Motion Entrance */}
        <CinematicScrollReveal direction="up" delay={0.15} className="relative mt-12 bg-[#130d2b]/95 rounded-2xl border border-purple-800/50 p-6 sm:p-8 shadow-2xl shadow-purple-950/50 overflow-hidden">
          {/* Corner Optical Reticles */}
          <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-pink-500/60 pointer-events-none" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-pink-500/60 pointer-events-none" />
          <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-pink-500/60 pointer-events-none" />
          <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-pink-500/60 pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-purple-900/50">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                The End-to-End Accounting Cycle
              </h3>
              <p className="text-xs text-purple-300 font-mono">
                From Raw Source Transaction to Executive Decision
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-pink-300 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-800/50 shadow-xs">
              <Scale className="w-4 h-4 text-pink-400" />
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
                  className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-br from-pink-500/20 via-purple-900/40 to-fuchsia-950/30 border-pink-500 text-white shadow-lg shadow-pink-500/20 ring-1 ring-pink-500/40'
                      : 'bg-[#181135] border-purple-900/50 text-slate-300 hover:border-purple-700/60 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`w-5 h-5 rounded-full font-mono text-[10px] font-bold flex items-center justify-center ${
                        isSelected 
                          ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white' 
                          : 'bg-purple-950/60 text-purple-300 group-hover:text-white'
                      }`}>
                        {step.step}
                      </span>
                      {idx < ACCOUNTING_CYCLE_STEPS.length - 1 && (
                        <span className="text-purple-600 text-xs hidden lg:inline">→</span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-white tracking-tight leading-snug">
                      {step.title}
                    </div>
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-slate-400">
                    {step.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Drawer for Active Selected Cycle Step */}
          {ACCOUNTING_CYCLE_STEPS[activeCycleStep] && (
            <div className="mt-6 p-5 rounded-xl bg-[#1a123a] border border-purple-800/50 grid grid-cols-1 md:grid-cols-12 gap-5 items-center shadow-md">
              <div className="md:col-span-8 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-pink-400 font-semibold">
                  <span>CYCLE STEP 0{ACCOUNTING_CYCLE_STEPS[activeCycleStep].step}</span>
                  <span>•</span>
                  <span>{ACCOUNTING_CYCLE_STEPS[activeCycleStep].title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {ACCOUNTING_CYCLE_STEPS[activeCycleStep].description}
                </p>
              </div>

              <div className="md:col-span-4 p-3.5 rounded-lg bg-[#150d2e] border border-purple-800/40">
                <div className="text-[11px] font-mono uppercase text-pink-400 font-semibold mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
                  <span>Internal Control &amp; QA Check</span>
                </div>
                <p className="text-xs text-slate-300 leading-snug">
                  {ACCOUNTING_CYCLE_STEPS[activeCycleStep].controls}
                </p>
              </div>
            </div>
          )}
        </CinematicScrollReveal>

        {/* 6 Core Accounting Knowledge Modules */}
        <div className="mt-12">
          <CinematicScrollReveal direction="up" delay={0.1} className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Accounting Principles &amp; Governance Areas
            </h3>
            <span className="text-xs font-mono text-purple-300">
              IFRS &amp; US GAAP Frameworks
            </span>
          </CinematicScrollReveal>

          <AnimatedStaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreKnowledgeCards.map((card, idx) => (
              <AnimatedItem key={idx} whileHoverLift>
                <div
                  className="relative p-5 rounded-2xl bg-[#130d2b]/90 border border-purple-800/40 hover:border-pink-500/50 transition-all flex flex-col justify-between shadow-xl group h-full"
                >
                  {/* Micro corner accent */}
                  <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-purple-700/40 group-hover:border-pink-500/60 transition-colors pointer-events-none" />
                  <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-purple-700/40 group-hover:border-pink-500/60 transition-colors pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {card.title}
                      </h4>
                      <span className="text-[11px] font-mono font-bold text-pink-400 bg-purple-950/80 px-2 py-0.5 rounded-full border border-purple-800/50">
                        0{idx + 1}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-purple-300 mb-2 font-medium">
                      {card.subtitle}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-purple-900/50 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span className="truncate">{card.standards}</span>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStaggerContainer>
        </div>

      </div>
    </section>
  );
};
