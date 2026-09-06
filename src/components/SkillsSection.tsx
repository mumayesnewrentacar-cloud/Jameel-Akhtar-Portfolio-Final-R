import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Sparkles, CheckCircle2, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { CINEMATIC_EASE } from './AnimatedSection';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  const displayedCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="relative py-20 sm:py-24 bg-[#090614] text-slate-100 overflow-hidden">
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 right-1/4 w-[600px] h-[350px] bg-purple-900/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: CINEMATIC_EASE }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 shadow-inner">
            <Layers className="w-3.5 h-3.5 text-pink-400" />
            <span className="text-[11px] font-mono tracking-widest text-fuchsia-300 font-bold uppercase">
              06 // TAXONOMY OF EXPERTISE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Categorized Skills &amp; Core Competencies
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A verified taxonomy of practical accounting execution, corporate financial analysis, 
            mathematical modeling, and advanced spreadsheet automation—free of arbitrary percentage meters.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 pb-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 text-white shadow-lg shadow-pink-500/25 border border-pink-400/50'
                    : 'bg-purple-950/40 text-slate-300 hover:text-white hover:bg-purple-900/40 border border-purple-800/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Category Groups */}
        <div className="mt-12 space-y-12">
          <AnimatePresence mode="wait">
            {displayedCategories.map((group) => (
              <motion.div 
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: CINEMATIC_EASE }}
                className="space-y-4"
              >
                
                {/* Category Header */}
                <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-purple-900/50 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>
                  <p className="text-xs text-fuchsia-300/80 font-mono max-w-xl text-right">
                    {group.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: sIdx * 0.03, ease: CINEMATIC_EASE }}
                      whileHover={{ y: -4 }}
                      className="relative p-5 rounded-2xl bg-gradient-to-b from-[#1b1238]/90 via-[#140e2b]/95 to-[#0f0a20] border border-purple-800/40 hover:border-pink-500/40 transition-all flex flex-col justify-between group shadow-lg shadow-purple-950/30 overflow-hidden"
                    >
                      {/* Corner framing micro-reticles */}
                      <span className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-pink-500/30" />
                      <span className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-pink-500/30" />

                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="text-sm sm:text-base font-bold text-white group-hover:text-pink-300 transition-colors leading-snug">
                            {skill.name}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-pink-500/10 text-pink-300 border border-pink-500/30 shrink-0">
                            {skill.focus}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-purple-900/40 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="flex items-center gap-1.5 text-pink-400 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Production Verified
                        </span>
                        <span className="text-fuchsia-400/70">Institutional</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
