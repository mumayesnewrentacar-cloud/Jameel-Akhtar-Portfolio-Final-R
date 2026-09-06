import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Cpu, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { EXPERIENCE_LIST } from '../data/portfolioData';
import { CinematicSpotlightCard } from './CinematicSpotlightCard';
import { AnimatedSectionHeader, CINEMATIC_EASE } from './AnimatedSection';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-20 bg-[#090614] text-slate-100 border-b border-purple-950/60 overflow-hidden">
      {/* Background Dot Matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 -left-36 w-80 h-80 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Scroll Entrance */}
        <AnimatedSectionHeader
          badge={
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono font-medium text-pink-400 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              <span>02 // CAREER TIMELINE</span>
            </div>
          }
          title="Professional Experience"
          subtitle="7+ years of verifiable corporate finance and accounting progression, demonstrating reliable execution of core accounting controls and actionable FP&A commercial business advisory."
        />

        {/* Vertical Timeline */}
        <div className="mt-14 relative">
          
          {/* Vertical Track Line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-pink-500 via-purple-700 to-purple-950/40" />

          <div className="space-y-12">
            {EXPERIENCE_LIST.map((exp, index) => (
              <motion.div 
                key={exp.id} 
                initial={{ opacity: 0, x: -26 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px 0px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: CINEMATIC_EASE }}
                className="relative md:pl-20"
              >
                
                {/* Timeline Node Badge (Desktop) with pink glow */}
                <div className="hidden md:flex absolute left-4 top-1 -translate-x-1/2 w-8 h-8 rounded-full bg-[#130d2b] border-2 border-pink-500 items-center justify-center font-mono text-xs font-bold text-white shadow-lg shadow-pink-500/30 z-10">
                  0{index + 1}
                </div>

                {/* Experience Card */}
                <div className="relative bg-[#130d2b]/95 rounded-2xl border border-purple-800/50 p-6 sm:p-8 hover:border-pink-500/50 transition-all shadow-2xl shadow-purple-950/50 overflow-hidden">
                  {/* Corner Optical Reticles */}
                  <span className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-pink-500/60 pointer-events-none" />
                  <span className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-pink-500/60 pointer-events-none" />
                  <span className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-pink-500/60 pointer-events-none" />
                  <span className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-pink-500/60 pointer-events-none" />
                  
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-purple-900/50">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-purple-950/80 text-pink-300 border border-purple-800/60">
                          {exp.employmentType}
                        </span>
                      </div>

                      <div className="mt-1.5 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-slate-300">
                        <span className="font-semibold text-white flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-pink-400" />
                          {exp.company}
                        </span>
                        <span className="text-purple-600">•</span>
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-purple-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/70 border border-purple-800/50 text-xs font-mono font-medium text-pink-300 shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-pink-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Role Overview */}
                  <p className="mt-4 text-sm text-purple-200/90 leading-relaxed italic">
                    "{exp.summary}"
                  </p>

                  {/* Responsibilities Grid */}
                  <div className="mt-5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                      Core Responsibilities &amp; Operations
                    </h4>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Achievements */}
                  <div className="mt-6 p-4 rounded-xl bg-[#181135] border border-purple-800/50 shadow-inner">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-pink-400 mb-2.5">
                      <Award className="w-4 h-4" />
                      <span>Key Measurable Achievements</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                      {exp.keyAchievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <span className="text-pink-400 font-bold">•</span>
                          <span className="leading-snug">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Strip: Tools & Business Impact */}
                  <div className="mt-6 pt-5 border-t border-purple-900/50 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    
                    {/* Tools Tags */}
                    <div className="md:col-span-6">
                      <div className="text-[11px] font-mono text-purple-300 mb-1.5 flex items-center gap-1.5">
                        <Cpu className="w-3 h-3 text-pink-400" />
                        <span>Tools &amp; Frameworks</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tools.map((tool, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-purple-950/80 text-purple-200 border border-purple-800/50"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Business Impact Note */}
                    <div className="md:col-span-6 md:text-right">
                      <div className="text-[11px] font-mono text-pink-400 mb-1 flex md:justify-end items-center gap-1.5">
                        <TrendingUp className="w-3 h-3 text-pink-400" />
                        <span>Commercial Business Impact</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-snug">
                        {exp.businessImpact}
                      </p>
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

