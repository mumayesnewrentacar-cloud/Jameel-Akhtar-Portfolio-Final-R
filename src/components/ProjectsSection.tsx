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
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { FinancialProject } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { CinematicSpotlightCard } from './CinematicSpotlightCard';

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<FinancialProject | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Financial Analysis', 'Valuation', 'FP&A & Forecasting', 'Excel & Reporting', 'Accounting & Variance'];

  const filteredProjects = filterCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === filterCategory);

  return (
    <section id="projects" className="relative py-20 bg-slate-50 dark:bg-slate-900/95 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800/90 transition-colors duration-200">
      {/* Subtle Dot Matrix & Glow Backdrop */}
      <div className="absolute inset-0 bg-dot-matrix dark:bg-dot-matrix-dark pointer-events-none opacity-40 dark:opacity-20" />
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>04 // CASE STUDIES &amp; MODELS</span>
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Financial Projects
            </h2>
            <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Institutional-grade financial models, automated reporting dashboards, and variance studies 
              built for commercial decision-making, working capital protection, and executive forecasting.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-slate-800/90 px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>6 Complete Production Models</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap gap-2 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filterCategory === cat
                  ? 'bg-emerald-600 text-white font-semibold shadow-md shadow-emerald-600/25'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700/80 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <CinematicSpotlightCard
              key={project.id}
              className="bg-white/95 dark:bg-slate-850 rounded-2xl border border-slate-200/90 dark:border-slate-750/90 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-xl dark:shadow-slate-950/50 transition-all duration-300"
            >
              {/* Card Top / Header */}
              <div className="p-6">
                
                {/* Meta line */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-750 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 font-bold text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[11px]">
                      {project.number}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">{project.category}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 border border-slate-200 dark:border-slate-700">
                    {project.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>

                {/* Objective */}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                  {project.objective}
                </p>

                {/* Live Model Preview Metric Strip */}
                <div className="mt-5 grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx}>
                      <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate">{m.label}</div>
                      <div className="text-sm sm:text-base font-bold font-mono text-emerald-600 dark:text-emerald-400">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Problem Snippet */}
                <div className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  <span className="font-semibold text-slate-800 dark:text-slate-300 font-mono text-[11px] block mb-0.5">
                    Business Problem:
                  </span>
                  <p className="line-clamp-2">
                    {project.businessProblem}
                  </p>
                </div>

                {/* Financial Concepts */}
                <div className="mt-4">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-1.5 uppercase">
                    Financial Concepts
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.financialConcepts.slice(0, 3).map((concept, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {concept}
                      </span>
                    ))}
                    {project.financialConcepts.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-400 dark:text-slate-500">
                        +{project.financialConcepts.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

              </div>

              {/* Card Bottom / Action */}
              <div className="p-4 sm:px-6 sm:pb-6 pt-3 border-t border-slate-100 dark:border-slate-750 bg-slate-50/70 dark:bg-slate-850/90 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400 truncate max-w-[170px]">
                  <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span className="truncate">{project.tools[0]}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-800 dark:bg-slate-800 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:border-emerald-500 border border-slate-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 group-hover:bg-emerald-600"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </CinematicSpotlightCard>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

