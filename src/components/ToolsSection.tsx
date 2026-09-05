import React from 'react';
import { 
  FileSpreadsheet, 
  Database, 
  BarChart2, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import { TOOLS_LIST } from '../data/portfolioData';
import { CinematicSpotlightCard } from './CinematicSpotlightCard';

export const ToolsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-dot-matrix dark:bg-dot-matrix-dark pointer-events-none opacity-40 dark:opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>08 // TECH STACK &amp; SYSTEMS</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Financial Technology &amp; Analytics Tools
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Enterprise platforms and analytical software leveraged daily to ensure data integrity, 
            automate ETL workflows, and produce institutional-grade financial intelligence.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS_LIST.map((tool, idx) => (
            <CinematicSpotlightCard
              key={idx}
              className="p-6 bg-white/95 dark:bg-slate-850 border border-slate-200/90 dark:border-slate-750 hover:border-emerald-500/40 dark:hover:border-slate-650 transition-all flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-750">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {tool.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                    {tool.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                  {tool.name}
                </h3>

                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {tool.description}
                </p>

                {/* Usage Area */}
                <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-750/80">
                  <div className="text-[10px] font-mono uppercase text-emerald-700 dark:text-emerald-400 font-semibold mb-1">
                    Primary Usage Area:
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug">
                    {tool.usageArea}
                  </p>
                </div>
              </div>

              {/* Features Chips */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-750">
                <div className="flex flex-wrap gap-1">
                  {tool.features.map((feat, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

            </CinematicSpotlightCard>
          ))}
        </div>

      </div>
    </section>
  );
};

