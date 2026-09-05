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
import { DATA_ANALYTICS_STAGES } from '../data/portfolioData';

export const DataAnalyticsSection: React.FC = () => {
  const [activeAnalysisView, setActiveAnalysisView] = useState<'revenue' | 'expense' | 'workingCapital'>('revenue');

  return (
    <section id="analytics" className="relative py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* Subtle Dot Matrix */}
      <div className="absolute inset-0 bg-dot-matrix dark:bg-dot-matrix-dark pointer-events-none opacity-40 dark:opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>07 // BUSINESS INTELLIGENCE</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            From Raw Data to Financial Insight
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Structuring chaotic transactional ERP logs into audited, automated analytics pipelines 
            that empower executive decision-makers with clear commercial foresight.
          </p>
        </div>

        {/* 6-Stage Transformation Workflow */}
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {DATA_ANALYTICS_STAGES.map((st, idx) => (
              <div
                key={st.stage}
                className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-emerald-500/50 shadow-sm dark:shadow-none transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-colors">
                      {st.stage}
                    </span>
                    {idx < DATA_ANALYTICS_STAGES.length - 1 && (
                      <span className="text-slate-400 dark:text-slate-600 text-xs hidden lg:inline">→</span>
                    )}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                    {st.name}
                  </h3>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {st.summary}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  Step Verified
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Analytics Workbench & Visual Showcase */}
        <div className="mt-14 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm dark:shadow-md transition-colors duration-200">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                Live Financial Analytics Showcase
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Inspect Real-World Multi-Dimensional Financial Analysis Modules
              </p>
            </div>

            {/* View Selector Tabs */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-850 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setActiveAnalysisView('revenue')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeAnalysisView === 'revenue'
                    ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Revenue &amp; Margin Analysis
              </button>

              <button
                type="button"
                onClick={() => setActiveAnalysisView('expense')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeAnalysisView === 'expense'
                    ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                OpEx &amp; Variance Decomposition
              </button>

              <button
                type="button"
                onClick={() => setActiveAnalysisView('workingCapital')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeAnalysisView === 'workingCapital'
                    ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
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
                
                <div className="lg:col-span-7 p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner">
                  <div className="flex items-center justify-between text-xs mb-3 font-mono">
                    <span className="text-slate-800 dark:text-slate-300 font-bold">YoY Revenue vs Gross Profit Margin</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">+14.8% Top-line Growth</span>
                  </div>

                  {/* Clean SVG Visual Chart */}
                  <div className="h-44 w-full pt-1">
                    <svg className="w-full h-full" viewBox="0 0 400 130">
                      <line x1="0" y1="25" x2="400" y2="25" stroke="#94a3b8" strokeOpacity="0.3" strokeDasharray="3 3" strokeWidth="0.75" />
                      <line x1="0" y1="65" x2="400" y2="65" stroke="#94a3b8" strokeOpacity="0.3" strokeDasharray="3 3" strokeWidth="0.75" />
                      <line x1="0" y1="105" x2="400" y2="105" stroke="#64748b" strokeOpacity="0.4" strokeWidth="1" />

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
                            <rect x={x - 22} y={105 - barH} width="22" height={barH} rx="2" fill="#2563eb" fillOpacity="0.85" />
                            <rect x={x + 2} y={105 - gpH} width="16" height={gpH} rx="2" fill="#059669" />
                            <text x={x - 1} y="120" textAnchor="middle" className="text-[10px] font-mono fill-slate-500 dark:fill-slate-400">
                              {item.yr}
                            </text>
                            <text x={x - 11} y={100 - barH} textAnchor="middle" className="text-[9px] font-mono fill-blue-700 dark:fill-blue-300 font-bold">
                              ${item.rev}M
                            </text>
                            <text x={x + 10} y={100 - gpH} textAnchor="middle" className="text-[9px] font-mono fill-emerald-700 dark:fill-emerald-300 font-bold">
                              ${item.gp}M
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-blue-600" /> Gross Billings</span>
                    <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded bg-emerald-600" /> Gross Profit</span>
                    <span className="text-slate-600 dark:text-slate-400 font-medium">Stable 46.0% Margin Benchmark</span>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                    <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase font-semibold">Key Analytical Finding</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      Revenue expanded by $4.4M in FY24 with 0 margin dilution, confirming that wholesale price increases successfully absorbed raw material inflation.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">Net Operating Margin</div>
                      <div className="text-base font-bold font-mono text-slate-900 dark:text-white mt-0.5">16.6%</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">EBITDA Conversion</div>
                      <div className="text-base font-bold font-mono text-emerald-700 dark:text-emerald-400 mt-0.5">82.4%</div>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* View 2: Expense & Variance Analysis */}
            {activeAnalysisView === 'expense' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                <div className="lg:col-span-7 p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner">
                  <div className="flex items-center justify-between text-xs mb-3 font-mono">
                    <span className="text-slate-800 dark:text-slate-300 font-bold">Operating Expense Variance Distribution</span>
                    <span className="text-rose-600 dark:text-rose-400 font-semibold bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 rounded border border-rose-200 dark:border-rose-800">-$145k Net OpEx Variance</span>
                  </div>

                  <div className="space-y-3 pt-1">
                    {[
                      { cat: 'Sales & Marketing', budget: 3200, actual: 3450, var: -250, pct: '-7.8%', status: 'Unfavorable' },
                      { cat: 'Supply Chain & Freight', budget: 5100, actual: 5020, var: 80, pct: '+1.6%', status: 'Favorable' },
                      { cat: 'Corporate General & Admin', budget: 2330, actual: 2285, var: 45, pct: '+1.9%', status: 'Favorable' },
                      { cat: 'Information Technology', budget: 1200, actual: 1180, var: 20, pct: '+1.7%', status: 'Favorable' }
                    ].map((exp, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs font-mono shadow-xs">
                        <div>
                          <div className="font-semibold text-slate-900 dark:text-white">{exp.cat}</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">Budget: ${exp.budget}k | Actual: ${exp.actual}k</div>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            exp.var >= 0 
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800' 
                              : 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800'
                          }`}>
                            {exp.var >= 0 ? `+$${exp.var}k` : `-$${Math.abs(exp.var)}k`} ({exp.pct})
                          </span>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{exp.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                    <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase font-semibold">Variance Commentary</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      Sales commission payouts ran $250k unfavorable due to an unhedged uncapped acceleration clause. Recommended tying bonuses to minimum gross profit margin thresholds to eliminate uncompensated overhead.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-xs">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">• </span>
                    <span>Action Taken: CFO ratified restructured compensation schedules for FY25.</span>
                  </div>
                </div>

              </div>
            )}

            {/* View 3: Working Capital & Cash Conversion Cycle */}
            {activeAnalysisView === 'workingCapital' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                <div className="lg:col-span-7 p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-inner">
                  <div className="flex items-center justify-between text-xs mb-3 font-mono">
                    <span className="text-slate-800 dark:text-slate-300 font-bold">Cash Conversion Cycle (CCC) Dynamics</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-500/20">Current CCC: 38 Days</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 my-3">
                    <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">DSO (Receivables)</div>
                      <div className="text-lg font-bold font-mono text-slate-900 dark:text-white mt-1">45 Days</div>
                      <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold">Reduced from 59d</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">DIO (Inventory)</div>
                      <div className="text-lg font-bold font-mono text-slate-900 dark:text-white mt-1">32 Days</div>
                      <div className="text-[9px] text-slate-500 dark:text-slate-400">Safety Buffer Target</div>
                    </div>

                    <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-xs">
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">DPO (Payables)</div>
                      <div className="text-lg font-bold font-mono text-emerald-700 dark:text-emerald-400 mt-1">39 Days</div>
                      <div className="text-[9px] text-emerald-600 dark:text-emerald-400 font-semibold">Extended +7 Days</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center font-mono text-xs text-slate-700 dark:text-slate-300 shadow-xs">
                    Formula: <span className="text-slate-900 dark:text-white font-bold">CCC</span> = DSO (45) + DIO (32) - DPO (39) = <span className="text-emerald-700 dark:text-emerald-400 font-bold">38 Days</span>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
                    <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 uppercase font-semibold">Working Capital Optimization</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      Tightened billing cutoff and enforced automated reminder dunning routines. Shaved 14 days off DSO, unlocking $680,000 of liquid cash without external commercial borrowing.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-xs">
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">• </span>
                    <span>Free Cash Flow Improvement: +$680,000 Trapped Liquidity Released.</span>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
