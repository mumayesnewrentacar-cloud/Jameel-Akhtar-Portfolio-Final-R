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
import { motion } from 'motion/react';
import { TOOLS_LIST } from '../data/portfolioData';
import { CinematicSpotlightCard } from './CinematicSpotlightCard';
import { 
  AnimatedSectionHeader, 
  AnimatedStaggerContainer, 
  AnimatedItem 
} from './AnimatedSection';

export const ToolsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#090614] text-slate-100 border-b border-purple-950/60 overflow-hidden">
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-fuchsia-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Scroll Entrance */}
        <AnimatedSectionHeader
          badge={
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono font-medium text-pink-400 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              <span>08 // TECH STACK &amp; SYSTEMS</span>
            </div>
          }
          title="Financial Technology & Analytics Tools"
          subtitle="Enterprise platforms and analytical software leveraged daily to ensure data integrity, automate ETL workflows, and produce institutional-grade financial intelligence."
        />

        {/* Tools Grid with Staggered Scroll Animation */}
        <AnimatedStaggerContainer staggerDelay={0.07} className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS_LIST.map((tool, idx) => (
            <AnimatedItem key={idx} whileHoverLift className="h-full">
              <div
                className="relative p-6 bg-[#130d2b]/95 border border-purple-800/50 hover:border-pink-500/50 rounded-2xl transition-all flex flex-col justify-between shadow-2xl shadow-purple-950/50 group overflow-hidden h-full"
              >
                {/* Corner Optical Reticles */}
                <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-purple-700/40 group-hover:border-pink-500/60 pointer-events-none transition-colors" />
                <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-purple-700/40 group-hover:border-pink-500/60 pointer-events-none transition-colors" />
                <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-purple-700/40 group-hover:border-pink-500/60 pointer-events-none transition-colors" />
                <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-purple-700/40 group-hover:border-pink-500/60 pointer-events-none transition-colors" />

                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-purple-900/50">
                    <span className="text-xs font-mono text-purple-300">
                      {tool.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-purple-950/80 text-pink-300 border border-purple-800/50">
                      {tool.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-pink-300 transition-colors">
                    {tool.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Usage Area */}
                  <div className="mt-4 p-3 rounded-xl bg-[#181135] border border-purple-800/40">
                    <div className="text-[10px] font-mono uppercase text-pink-400 font-semibold mb-1">
                      Primary Usage Area:
                    </div>
                    <p className="text-xs text-slate-300 leading-snug">
                      {tool.usageArea}
                    </p>
                  </div>
                </div>

                {/* Features Chips */}
                <div className="mt-5 pt-3 border-t border-purple-900/50">
                  <div className="flex flex-wrap gap-1">
                    {tool.features.map((feat, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/80 text-purple-200 border border-purple-800/50"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </AnimatedItem>
          ))}
        </AnimatedStaggerContainer>

      </div>
    </section>
  );
};

