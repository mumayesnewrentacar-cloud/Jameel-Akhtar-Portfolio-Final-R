import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Cpu, Award } from 'lucide-react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { CinematicSpotlightCard } from './CinematicSpotlightCard';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 bg-dot-matrix dark:bg-dot-matrix-dark pointer-events-none opacity-40 dark:opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>02 // CAREER TIMELINE</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            7+ years of verifiable corporate finance and accounting progression, demonstrating 
            reliable execution of core accounting controls and actionable FP&amp;A commercial business advisory.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="mt-14 relative">
          
          {/* Vertical Track Line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-500 via-slate-300 dark:via-slate-700 to-emerald-500/20" />

          <div className="space-y-12">
            {EXPERIENCE_LIST.map((exp, index) => (
              <div key={exp.id} className="relative md:pl-20">
                
                {/* Timeline Node Badge (Desktop) with subtle emerald glow */}
                <div className="hidden md:flex absolute left-4 top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-emerald-500 items-center justify-center font-mono text-xs font-bold text-slate-800 dark:text-white shadow-lg shadow-emerald-500/20 z-10">
                  0{index + 1}
                </div>

                {/* Experience Card */}
                <CinematicSpotlightCard className="bg-white/95 dark:bg-slate-850 rounded-2xl border border-slate-200 dark:border-slate-750 p-6 sm:p-8 hover:border-emerald-500/40 dark:hover:border-slate-650 transition-all shadow-md dark:shadow-xl">
                  
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-700/80">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                          {exp.employmentType}
                        </span>
                      </div>

                      <div className="mt-1.5 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <span className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          {exp.company}
                        </span>
                        <span className="text-slate-400 dark:text-slate-500">•</span>
                        <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-300 shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role Overview */}
                  <p className="mt-4 text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "{exp.summary}"
                  </p>

                  {/* Responsibilities Grid */}
                  <div className="mt-5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3">
                      Core Responsibilities &amp; Operations
                    </h4>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements */}
                  <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-750 shadow-inner">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 mb-2.5">
                      <Award className="w-4 h-4" />
                      <span>Key Measurable Achievements</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      {exp.keyAchievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                          <span className="leading-snug">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Strip: Tools & Business Impact */}
                  <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700/80 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    
                    {/* Tools Tags */}
                    <div className="md:col-span-6">
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-1.5 flex items-center gap-1.5">
                        <Cpu className="w-3 h-3 text-slate-400" />
                        <span>Tools &amp; Frameworks</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Business Impact Note */}
                    <div className="md:col-span-6 md:text-right">
                      <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 mb-1 flex md:justify-end items-center gap-1.5">
                        <TrendingUp className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                        <span>Commercial Business Impact</span>
                      </div>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-snug">
                        {exp.businessImpact}
                      </p>
                    </div>

                  </div>

                </CinematicSpotlightCard>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

