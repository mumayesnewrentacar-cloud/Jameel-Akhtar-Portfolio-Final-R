import React, { useState } from 'react';
import { 
  Database, 
  Filter, 
  Calculator, 
  BarChart3, 
  LineChart, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Percent,
  Layers,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { DATA_ANALYTICS_STAGES } from '../data/portfolioData';
import { 
  AnimatedSectionHeader, 
  AnimatedStaggerContainer, 
  AnimatedItem, 
  CinematicScrollReveal 
} from './AnimatedSection';

export const DataAnalyticsSection: React.FC = () => {
  const [activeAnalysisView, setActiveAnalysisView] = useState<'revenue' | 'expense' | 'workingCapital'>('revenue');

  return (
    <section id="analytics" className="relative py-20 bg-[#090614] text-slate-100 border-b border-purple-950/60 overflow-hidden">
      {/* Subtle Dot Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
      <div className="absolute top-1/3 -right-36 w-80 h-80 bg-fuchsia-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Scroll Entrance */}
        <AnimatedSectionHeader
          badge={
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono font-medium text-pink-400 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              <span>07 // BUSINESS INTELLIGENCE</span>
            </div>
          }
          title="From Raw Data to Financial Insight"
          subtitle="Structuring chaotic transactional ERP logs into audited, automated analytics pipelines that empower executive decision-makers with clear commercial foresight."
        />

        {/* 6-Stage Transformation Workflow with Staggered Scroll Animation */}
        <div className="mt-12">
          <AnimatedStaggerContainer staggerDelay={0.06} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {DATA_ANALYTICS_STAGES.map((st, idx) => (
              <AnimatedItem key={st.stage} whileHoverLift className="h-full">
                <div
                  className="p-4 rounded-xl bg-[#130d2b]/90 border border-purple-800/40 flex flex-col justify-between hover:border-pink-500/50 shadow-md transition-all group h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-7 h-7 rounded-lg bg-gradient-to-r from-pink-500 to-fuchsia-500 font-mono text-xs font-bold text-white flex items-center justify-center shadow-xs">
                        {st.stage}
                      </span>
                      {idx < DATA_ANALYTICS_STAGES.length - 1 && (
                        <span className="text-purple-600 text-xs hidden lg:inline">→</span>
                      )}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {st.name}
                    </h3>
                    <p className="mt-1 text-[11px] text-slate-400 leading-snug">
                      {st.summary}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-purple-900/50 text-[10px] font-mono text-pink-400 font-semibold">
                    Step Verified
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStaggerContainer>
        </div>

        {/* Interactive Analytics Workbench & Visual Showcase with Cinematic Reveal */}
        <CinematicScrollReveal direction="up" delay={0.15} className="relative mt-14 bg-[#130d2b]/95 rounded-2xl border border-purple-800/50 p-6 sm:p-8 shadow-2xl shadow-purple-950/60 overflow-hidden">
          {/* Corner Optical Reticles */}
          <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-pink-500/60 pointer-events-none" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-pink-500/60 pointer-events-none" />
          <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-pink-500/60 pointer-events-none" />
          <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-pink-500/60 pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-purple-900/50">
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Live Financial Analytics Showcase
              </h3>
              <p className="text-xs text-purple-300 font-mono">
                Inspect Real-World Multi-Dimensional Financial Analysis Modules
              </p>
            </div>

            {/* View Selector Tabs */}
            <div className="flex items-center bg-[#181135] p-1 rounded-xl border border-purple-800/50">
              <button
                type="button"
                onClick={() => setActiveAnalysisView('revenue')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeAnalysisView === 'revenue'
                    ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Revenue &amp; Margin Analysis
              </button>

              <button
                type="button"
                onClick={() => setActiveAnalysisView('expense')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeAnalysisView === 'expense'
                    ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                OpEx &amp; Variance Decomposition
              </button>

              <button
                type="button"
                onClick={() => setActiveAnalysisView('workingCapital')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeAnalysisView === 'workingCapital'
                    ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Working Capital (CCC)
              </button>
            </div>
          </div>

          {/* Dynamic Content Panel Based on Selected Tab */}
          <div className="mt-6">
            
            {/* View 1: Revenue & Profitability Analysis */}
            {activeAnalysisView === 'revenue' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                <div className="lg:col-span-7 p-4 sm:p-5 rounded-xl bg-[#181135] border border-purple-800/50 shadow-inner">
                  <div className="flex items-center justify-between text-xs mb-3 font-mono">
                    <span className="text-white font-bold">YoY Revenue vs Gross Profit Margin</span>
                    <span className="text-pink-300 font-semibold bg-purple-950/80 px-2 py-0.5 rounded-full border border-purple-800/50">+14.8% Top-line Growth</span>
                  </div>

                  {/* Clean SVG Visual Chart */}
                  <div className="h-44 w-full pt-1">
                    <svg className="w-full h-full" viewBox="0 0 400 130">
                      <line x1="0" y1="25" x2="400" y2="25" stroke="#9333ea" strokeOpacity="0.2" strokeDasharray="3 3" strokeWidth="0.75" />
                      <line x1="0" y1="65" x2="400" y2="65" stroke="#9333ea" strokeOpacity="0.2" strokeDasharray="3 3" strokeWidth="0.75" />
                      <line x1="0" y1="105" x2="400" y2="105" stroke="#a855f7" strokeOpacity="0.3" strokeWidth="1" />

                      {/* Series Bar & Polyline */}
                      {[
                        { yr: 'FY21', rev: 22.4, gp: 10.1, margin: '45.1%' },
                        { yr: 'FY22', rev: 26.4, gp: 12.1, margin: '46.0%' },
                        { yr: 'FY23', rev: 29.8, gp: 13.4, margin: '45.0%' },
                        { yr: 'FY24', rev: 34.2, gp: 15.7, margin: '46.0%' }
                      ].map((item, i) => {
                        const x = 50 + i * 90;
                        const barH = (item.rev / 35) * 80;
                        const gpH = (item.gp / 35) * 80;
                        return (
                          <g key={item.yr}>
                            <rect x={x - 22} y={105 - barH} width="22" height={barH} rx="2" fill="#a855f7" fillOpacity="0.85" />
                            <rect x={x + 2} y={105 - gpH} width="16" height={gpH} rx="2" fill="#ec4899" />
                            <text x={x - 1} y="120" textAnchor="middle" className="text-[10px] font-mono fill-purple-300">
                              {item.yr}
                            </text>
                            <text x={x - 11} y={100 - barH} textAnchor="middle" className="text-[9px] font-mono fill-purple-200 font-bold">
                              ${item.rev}M
                            </text>
                            <text x={x + 10} y={100 - gpH} textAnchor="middle" className="text-[9px] font-mono fill-pink-300 font-bold">
                              ${item.gp}M
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-purple-300 mt-2 pt-2 border-t border-purple-900/50">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-purple-500" /> Gross Billings</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-pink-500" /> Gross Profit</span>
                    <span className="text-slate-400 font-medium">Stable 46.0% Margin Benchmark</span>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#150d2e] border border-purple-800/40">
                    <div className="text-xs font-mono text-pink-400 uppercase font-semibold">Key Analytical Finding</div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Revenue expanded by $4.4M in FY24 with 0 margin dilution, confirming that wholesale price increases successfully absorbed raw material inflation.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 rounded-lg bg-[#181135] border border-purple-800/40 text-center shadow-xs">
                      <div className="text-[10px] font-mono text-purple-300">Net Operating Margin</div>
                      <div className="text-base font-bold font-mono text-white mt-0.5">16.6%</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#181135] border border-purple-800/40 text-center shadow-xs">
                      <div className="text-[10px] font-mono text-purple-300">EBITDA Conversion</div>
                      <div className="text-base font-bold font-mono text-pink-400 mt-0.5">82.4%</div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* View 2: Expense & Variance Analysis */}
            {activeAnalysisView === 'expense' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                <div className="lg:col-span-7 p-4 sm:p-5 rounded-xl bg-[#181135] border border-purple-800/50 shadow-inner">
                  <div className="flex items-center justify-between text-xs mb-3 font-mono">
                    <span className="text-white font-bold">Operating Expense Variance Distribution</span>
                    <span className="text-pink-300 font-semibold bg-purple-950/80 px-2 py-0.5 rounded-full border border-purple-800/50">-$145k Net OpEx Variance</span>
                  </div>

                  <div className="space-y-3 pt-1">
                    {[
                      { cat: 'Sales & Marketing', budget: 3200, actual: 3450, var: -250, pct: '-7.8%', status: 'Unfavorable' },
                      { cat: 'Supply Chain & Freight', budget: 5100, actual: 5020, var: 80, pct: '+1.6%', status: 'Favorable' },
                      { cat: 'Corporate General & Admin', budget: 2330, actual: 2285, var: 45, pct: '+1.9%', status: 'Favorable' },
                      { cat: 'Information Technology', budget: 1200, actual: 1180, var: 20, pct: '+1.7%', status: 'Favorable' }
                    ].map((exp, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-[#130d2b] border border-purple-800/40 flex items-center justify-between text-xs font-mono shadow-xs">
                        <div>
                          <div className="font-semibold text-white">{exp.cat}</div>
                          <div className="text-[10px] text-slate-400">Budget: ${exp.budget}k | Actual: ${exp.actual}k</div>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            exp.var >= 0 
                              ? 'bg-purple-950/80 text-pink-300 border border-purple-800/50' 
                              : 'bg-rose-950/80 text-rose-300 border border-rose-800/50'
                          }`}>
                            {exp.var >= 0 ? `+$${exp.var}k` : `-$${Math.abs(exp.var)}k`} ({exp.pct})
                          </span>
                          <div className="text-[10px] text-slate-400 mt-0.5">{exp.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#150d2e] border border-purple-800/40">
                    <div className="text-xs font-mono text-pink-400 uppercase font-semibold">Variance Commentary</div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Sales commission payouts ran $250k unfavorable due to an unhedged uncapped acceleration clause. Recommended tying bonuses to minimum gross profit margin thresholds to eliminate uncompensated overhead.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#181135] border border-purple-800/40 text-xs font-mono text-slate-300 shadow-xs">
                    <span className="text-pink-400 font-bold">• </span>
                    <span>Action Taken: CFO ratified restructured compensation schedules for FY25.</span>
                  </div>
                </div>

              </div>
            )}

            {/* View 3: Working Capital & Cash Conversion Cycle */}
            {activeAnalysisView === 'workingCapital' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                <div className="lg:col-span-7 p-4 sm:p-5 rounded-xl bg-[#181135] border border-purple-800/50 shadow-inner">
                  <div className="flex items-center justify-between text-xs mb-3 font-mono">
                    <span className="text-white font-bold">Cash Conversion Cycle (CCC) Dynamics</span>
                    <span className="text-pink-300 font-semibold bg-purple-950/80 px-2 py-0.5 rounded-full border border-purple-800/50">Current CCC: 38 Days</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 my-3">
                    <div className="p-3 rounded-xl bg-[#130d2b] border border-purple-800/40 text-center shadow-xs">
                      <div className="text-[10px] font-mono text-slate-400">DSO (Receivables)</div>
                      <div className="text-lg font-bold font-mono text-white mt-1">45 Days</div>
                      <div className="text-[9px] text-pink-400 font-semibold">Reduced from 59d</div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#130d2b] border border-purple-800/40 text-center shadow-xs">
                      <div className="text-[10px] font-mono text-slate-400">DIO (Inventory)</div>
                      <div className="text-lg font-bold font-mono text-white mt-1">32 Days</div>
                      <div className="text-[9px] text-purple-300">Safety Buffer Target</div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#130d2b] border border-purple-800/40 text-center shadow-xs">
                      <div className="text-[10px] font-mono text-slate-400">DPO (Payables)</div>
                      <div className="text-lg font-bold font-mono text-pink-400 mt-1">39 Days</div>
                      <div className="text-[9px] text-pink-400 font-semibold">Extended +7 Days</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#130d2b] border border-purple-800/40 text-center font-mono text-xs text-slate-300 shadow-xs">
                    Formula: <span className="text-white font-bold">CCC</span> = DSO (45) + DIO (32) - DPO (39) = <span className="text-pink-400 font-bold">38 Days</span>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#150d2e] border border-purple-800/40">
                    <div className="text-xs font-mono text-pink-400 uppercase font-semibold">Working Capital Optimization</div>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Tightened billing cutoff and enforced automated reminder dunning routines. Shaved 14 days off DSO, unlocking $680,000 of liquid cash without external commercial borrowing.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#181135] border border-purple-800/40 text-xs font-mono text-slate-300 shadow-xs">
                    <span className="text-pink-400 font-bold">• </span>
                    <span>Free Cash Flow Improvement: +$680,000 Trapped Liquidity Released.</span>
                  </div>
                </div>

              </div>
            )}

          </div>
        </CinematicScrollReveal>

      </div>
    </section>
  );
};
