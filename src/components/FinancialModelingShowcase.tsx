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
import { motion } from 'motion/react';
import { FINANCIAL_MODELING_WORKFLOW } from '../data/portfolioData';
import { 
  AnimatedSectionHeader, 
  CinematicScrollReveal 
} from './AnimatedSection';

export const FinancialModelingShowcase: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(7); // Default to Free Cash Flow (Step 8)

  const activeStep = FINANCIAL_MODELING_WORKFLOW[activeStepIndex];

  return (
    <section id="financial-models" className="relative py-20 bg-[#090614] text-slate-100 border-b border-purple-950/60 overflow-hidden">
      {/* Background glow & subtle matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-fuchsia-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Scroll Entrance */}
        <AnimatedSectionHeader
          badge={
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono font-medium text-pink-400 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              <span>05 // METHODOLOGICAL RIGOR</span>
            </div>
          }
          title="Financial Modeling Architecture"
          subtitle="Financial modeling is not mere spreadsheet formula entry—it is the disciplined translation of historical operations and economic drivers into defensible corporate valuation and capital allocation decisions."
        />

        {/* The 11-Step Valuation Cascade & Interactive Inspector */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 11-Step Visual Flow Cascade */}
          <CinematicScrollReveal direction="up" delay={0.1} className="lg:col-span-6 space-y-2">
            <div className="flex items-center justify-between pb-2 text-xs font-mono text-purple-300 border-b border-purple-900/50">
              <span>Corporate Valuation Cascade</span>
              <span className="text-pink-400 font-semibold">Click any node to inspect logic</span>
            </div>

            <div className="space-y-1.5 pt-2">
              {FINANCIAL_MODELING_WORKFLOW.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <div key={step.step} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setActiveStepIndex(idx)}
                      className={`w-full text-left p-3 rounded-xl transition-all border flex items-center justify-between group shadow-sm cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-pink-500/20 via-purple-900/40 to-fuchsia-950/30 border-pink-500 text-white shadow-lg shadow-pink-500/20 ring-1 ring-pink-500/30'
                          : 'bg-[#130d2b]/90 border-purple-900/50 text-slate-300 hover:bg-[#181135] hover:border-purple-700/60 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-sm'
                            : 'bg-purple-950/80 text-purple-300 group-hover:text-white'
                        }`}>
                          {step.step < 10 ? `0${step.step}` : step.step}
                        </span>
                        <div>
                          <div className="text-xs sm:text-sm font-semibold tracking-tight text-white">
                            {step.name}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">
                            Category: {step.category}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {isActive && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-purple-950/90 text-pink-300 border border-purple-800/60">
                            Inspecting
                          </span>
                        )}
                        <ChevronRight className={`w-4 h-4 transition-transform ${
                          isActive ? 'text-pink-400 translate-x-0.5' : 'text-purple-600'
                        }`} />
                      </div>
                    </button>

                    {/* Connecting line between nodes (except last) */}
                    {idx < FINANCIAL_MODELING_WORKFLOW.length - 1 && (
                      <div className="w-0.5 h-2 bg-purple-900/60 ml-6.5" />
                    )}
                  </div>
                );
              })}
            </div>
          </CinematicScrollReveal>

          {/* Right: Step Inspector Panel with Glass Glow Card */}
          <CinematicScrollReveal direction="up" delay={0.2} className="lg:col-span-6 sticky top-24">
            <div className="relative bg-[#130d2b]/95 rounded-2xl border border-purple-800/50 p-6 sm:p-7 shadow-2xl shadow-purple-950/60 space-y-6 overflow-hidden">
              {/* Corner Optical Reticles */}
              <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-pink-500/60 pointer-events-none" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-pink-500/60 pointer-events-none" />
              <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-pink-500/60 pointer-events-none" />
              <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-pink-500/60 pointer-events-none" />
              
              {/* Header */}
              <div className="flex items-start justify-between pb-4 border-b border-purple-900/50">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-pink-400 mb-1 font-semibold">
                    <span>STEP {activeStep.step} OF 11</span>
                    <span>•</span>
                    <span>{activeStep.category}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {activeStep.name}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-700/60 flex items-center justify-center text-pink-400 shadow-sm">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Step Description */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono uppercase text-purple-300 font-semibold">
                  Process &amp; Modeling Execution
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeStep.description}
                </p>
              </div>

              {/* Mathematical Formula / Accounting Rule */}
              {activeStep.formulaOrRule && (
                <div className="p-4 rounded-xl bg-[#181135] border border-purple-800/50 space-y-1.5">
                  <div className="text-xs font-mono uppercase text-pink-400 font-semibold flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-pink-400" />
                    <span>Modeling Formula / Logic Rule</span>
                  </div>
                  <code className="text-xs font-mono text-pink-300 block break-words leading-relaxed font-semibold">
                    {activeStep.formulaOrRule}
                  </code>
                </div>
              )}

              {/* Financial & Corporate Significance */}
              <div className="p-4 rounded-xl bg-[#150d2e] border border-purple-800/40 space-y-1.5">
                <div className="text-xs font-mono uppercase text-fuchsia-300 font-semibold flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span>Corporate Valuation &amp; Executive Significance</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeStep.financialSignificance}
                </p>
              </div>

              {/* FAST Modeling Standard Checklist */}
              <div className="pt-2 border-t border-purple-900/50 text-xs font-mono text-slate-400 space-y-2">
                <div className="text-[11px] font-semibold text-purple-300 uppercase">
                  Modeling Standards Enforced:
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Check className="w-3.5 h-3.5 text-pink-400" /> Flexible Inputs
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Check className="w-3.5 h-3.5 text-pink-400" /> Appropriate Scenarios
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Check className="w-3.5 h-3.5 text-pink-400" /> Structured Layout
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Check className="w-3.5 h-3.5 text-pink-400" /> Transparent Formulas
                  </span>
                </div>
              </div>

            </div>
          </CinematicScrollReveal>

        </div>

      </div>
    </section>
  );
};
