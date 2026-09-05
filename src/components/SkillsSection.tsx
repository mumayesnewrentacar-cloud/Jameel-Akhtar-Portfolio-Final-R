import React, { useState } from 'react';
import { CheckCircle, Layers, Sparkles, SlidersHorizontal, BookOpen } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.category)];

  const displayedCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-slate-100/70 dark:bg-slate-950 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 shadow-sm">
            <span>03 // CORE CAPABILITIES</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Categorized Skills &amp; Technical Competencies
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A comprehensive, verified taxonomy of practical accounting execution, corporate financial analysis, 
            mathematical modeling, and advanced spreadsheet automation—free of arbitrary percentage meters.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Category Groups */}
        <div className="mt-10 space-y-12">
          {displayedCategories.map((group) => (
            <div key={group.category} className="space-y-4">
              
              {/* Category Header */}
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-sm bg-emerald-600 dark:bg-emerald-400" />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {group.category}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {group.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm dark:shadow-none"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                          {skill.name}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0">
                          {skill.focus}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                        <CheckCircle className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        Production Verified
                      </span>
                      <span className="text-slate-400 dark:text-slate-500">Institutional</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
