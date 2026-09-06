import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Layers, 
  Table, 
  FileSpreadsheet, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  BarChart2, 
  DollarSign, 
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { FinancialProject } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { CinematicSpotlightCard } from './CinematicSpotlightCard';
import { 
  AnimatedSectionHeader, 
  AnimatedStaggerContainer, 
  AnimatedItem, 
  CinematicScrollReveal 
} from './AnimatedSection';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<FinancialProject | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Financial Analysis', 'Valuation', 'FP&A & Forecasting', 'Excel & Reporting', 'Accounting & Variance'];

  const filteredProjects = filterCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === filterCategory);

  return (
    <section id="projects" className="relative py-20 bg-[#090614] text-slate-100 border-b border-purple-950/60 overflow-hidden">
      {/* Subtle Dot Matrix & Glow Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-fuchsia-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Scroll Entrance */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <AnimatedSectionHeader
            badge={
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono font-medium text-pink-400 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                <span>04 // CASE STUDIES &amp; MODELS</span>
              </div>
            }
            title="Featured Financial Projects"
            subtitle="Institutional-grade financial models, automated reporting dashboards, and variance studies built for commercial decision-making, working capital protection, and executive forecasting."
          />

          <CinematicScrollReveal direction="up" delay={0.1} className="flex items-center gap-2 font-mono text-xs text-purple-200 bg-purple-950/80 px-3.5 py-2 rounded-full border border-purple-800/50 shadow-sm shrink-0">
            <ShieldCheck className="w-4 h-4 text-pink-400" />
            <span>6 Complete Production Models</span>
          </CinematicScrollReveal>
        </div>

        {/* Category Filters with Subtle Entrance */}
        <CinematicScrollReveal direction="up" delay={0.15} className="mt-8 flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                filterCategory === cat
                  ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-semibold shadow-lg shadow-pink-500/25'
                  : 'bg-[#130d2b] text-slate-300 hover:text-white hover:bg-[#181135] border border-purple-900/50 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </CinematicScrollReveal>

        {/* Project Cards Grid with Scroll Stagger */}
        <AnimatedStaggerContainer staggerDelay={0.07} className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <AnimatedItem key={project.id} whileHoverLift className="h-full">
              <div
                className="relative bg-[#130d2b]/95 rounded-2xl border border-purple-800/50 flex flex-col justify-between overflow-hidden group shadow-2xl shadow-purple-950/50 hover:border-pink-500/50 transition-all duration-300 h-full"
              >
              {/* Corner Optical Reticles */}
              <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-purple-700/40 group-hover:border-pink-500/60 pointer-events-none transition-colors" />
              <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-purple-700/40 group-hover:border-pink-500/60 pointer-events-none transition-colors" />
              <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-purple-700/40 group-hover:border-pink-500/60 pointer-events-none transition-colors" />
              <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-purple-700/40 group-hover:border-pink-500/60 pointer-events-none transition-colors" />

              {/* Card Top / Header */}
              <div className="p-6">
                
                {/* Meta line */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-purple-900/50 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-purple-950/80 border border-purple-800/60 font-bold text-pink-400 flex items-center justify-center text-[11px]">
                      {project.number}
                    </span>
                    <span className="text-purple-300">{project.category}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] bg-purple-950/80 text-pink-300 border border-purple-800/50">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-pink-300 transition-colors">
                  {project.title}
                </h3>

                {/* Objective */}
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {project.objective}
                </p>

                {/* Live Model Preview Metric Strip */}
                <div className="mt-5 grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#181135] border border-purple-800/40">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx}>
                      <div className="text-[10px] font-mono text-slate-400 truncate">{m.label}</div>
                      <div className="text-sm sm:text-base font-bold font-mono text-pink-400">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Problem Snippet */}
                <div className="mt-4 text-xs text-slate-400 leading-normal">
                  <span className="font-semibold text-purple-300 font-mono text-[11px] block mb-0.5">
                    Business Problem:
                  </span>
                  <p className="line-clamp-2">
                    {project.businessProblem}
                  </p>
                </div>

                {/* Financial Concepts */}
                <div className="mt-4">
                  <div className="text-[10px] font-mono text-purple-300 mb-1.5 uppercase">
                    Financial Concepts
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.financialConcepts.slice(0, 3).map((concept, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/80 text-purple-200 border border-purple-800/50"
                      >
                        {concept}
                      </span>
                    ))}
                    {project.financialConcepts.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-purple-400">
                        +{project.financialConcepts.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* Card Bottom / Action */}
              <div className="p-4 sm:px-6 sm:pb-6 pt-3 border-t border-purple-900/50 bg-[#150d2e]/90 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-purple-300 truncate max-w-[170px]">
                  <Cpu className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span className="truncate">{project.tools[0]}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-pink-600 to-fuchsia-600 hover:from-pink-500 hover:to-fuchsia-500 transition-all shadow-sm shadow-pink-500/20 cursor-pointer"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              </div>
            </AnimatedItem>
          ))}
        </AnimatedStaggerContainer>

      </div>

      {/* Interactive Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

