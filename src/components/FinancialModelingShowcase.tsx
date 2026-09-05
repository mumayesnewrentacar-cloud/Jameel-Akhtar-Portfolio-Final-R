import React, { useState } from 'react';
import { 
  GitCommit, 
  ArrowDown, 
  Calculator, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  FileSpreadsheet, 
  Check,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { FINANCIAL_MODELING_WORKFLOW } from '../data/portfolioData';

export const FinancialModelingShowcase: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(7); // Default to Free Cash Flow (Step 8)

  const activeStep = FINANCIAL_MODELING_WORKFLOW[activeStepIndex];

  return (
    <section id="financial-models" className="relative py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800/90 transition-colors duration-200">
      {/* Background glow & subtle matrix */}
      <div className="absolute inset-0 bg-dot-matrix dark:bg-dot-matrix-dark pointer-events-none opacity-40 dark:opacity-20" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-teal-500/10 dark:bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>05 // METHODOLOGICAL RIGOR</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Financial Modeling Architecture
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Financial modeling is not mere spreadsheet formula entry—it is the disciplined translation 
            of historical operations and economic drivers into defensible corporate valuation and capital allocation decisions.
          </p>
        </div>

        {/* The 11-Step Valuation Cascade & Interactive Inspector */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 11-Step Visual Flow Cascade */}
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center justify-between pb-2 text-xs font-mono text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <span>Corporate Valuation Cascade</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Click any node to inspect logic</span>
            </div>

            <div className="space-y-1.5 pt-2">
              {FINANCIAL_MODELING_WORKFLOW.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <div key={step.step} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setActiveStepIndex(idx)}
                      className={`w-full text-left p-3 rounded-xl transition-all border flex items-center justify-between group shadow-sm ${
                        isActive
                          ? 'bg-emerald-50/90 dark:bg-emerald-950/40 border-emerald-500 text-slate-900 dark:text-white shadow-md shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                          : 'bg-white/90 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-emerald-600 text-white font-bold shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'
                        }`}>
                          {step.step < 10 ? `0${step.step}` : step.step}
                        </span>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold tracking-tight">
                            {step.name}
                          </div>
                          <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                            Category: {step.category}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                            Inspecting
                          </span>
                        )}
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-emerald-600 dark:text-emerald-400 translate-x-0.5' : 'text-slate-400 dark:text-slate-600'
                        }`} />
                      </div>
                    </button>

                    {/* Connecting line between nodes (except last) */}
                    {idx < FINANCIAL_MODELING_WORKFLOW.length - 1 && (
                      <div className="w-0.5 h-2 bg-slate-300 dark:bg-slate-800 ml-6.5" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Step Inspector Panel with Glass Glow Card */}
          <div className="lg:col-span-6 sticky top-24">
            <div className="glass-glow-card bg-white/95 dark:bg-slate-900/95 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-2xl space-y-6">
              
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 mb-1 font-semibold">
                    <span>STEP {activeStep.step} OF 11</span>
                    <span>•</span>
                    <span>{activeStep.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {activeStep.name}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Step Description */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 font-semibold">
                  Process &amp; Modeling Execution
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              {/* Mathematical Formula / Accounting Rule */}
              {activeStep.formulaOrRule && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5">
                  <div className="text-xs font-mono uppercase text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Modeling Formula / Logic Rule</span>
                  </div>
                  <code className="text-xs font-mono text-emerald-700 dark:text-emerald-300 block break-words leading-relaxed font-semibold">
                    {activeStep.formulaOrRule}
                  </code>
                </div>
              )}

              {/* Financial & Corporate Significance */}
              <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-slate-900/90 border border-blue-100 dark:border-slate-800 space-y-1.5">
                <div className="text-xs font-mono uppercase text-blue-700 dark:text-blue-400 font-semibold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Corporate Valuation &amp; Executive Significance</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeStep.financialSignificance}
                </p>
              </div>

              {/* FAST Modeling Standard Checklist */}
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400 space-y-2">
                <div className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 uppercase">
                  Modeling Standards Enforced:
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Flexible Inputs
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Appropriate Scenarios
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Structured Layout
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Transparent Formulas
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
