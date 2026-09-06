import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Layers, 
  AlertCircle, 
  TrendingUp, 
  Cpu, 
  CheckCircle2, 
  Table, 
  ArrowRight,
  Shield,
  FileSpreadsheet
} from 'lucide-react';
import { FinancialProject } from '../types';

interface ProjectDetailModalProps {
  project: FinancialProject | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open and handle ESC key
  useEffect(() => {
    if (!project) return;
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          key="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          onClick={onClose}
        >
          <motion.div 
            key="project-modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.12 }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#120d26] border border-purple-800/60 rounded-3xl shadow-2xl shadow-purple-950/70 text-slate-100 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 4 Optical Corner Framing Reticles */}
            <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
              <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-pink-500/70" />
              <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-pink-500/70" />
              <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-pink-500/70" />
              <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-pink-500/70" />
            </div>

            {/* Modal Header */}
            <div className="flex items-start justify-between p-5 sm:p-6 border-b border-purple-900/50 bg-[#150f2e] sticky top-0 z-10 backdrop-blur-xs">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-pink-500/15 text-pink-400 border border-pink-500/30">
                    Project {project.number}
                  </span>
                  <span className="text-purple-400/60 text-xs">•</span>
                  <span className="text-xs font-mono text-purple-200">
                    {project.category}
                  </span>
                  <span className="text-purple-400/60 text-xs">•</span>
                  <span className="text-xs font-mono text-fuchsia-300 font-semibold">
                    {project.badge}
                  </span>
                </div>
                <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h2>
              </div>

              <button
                onClick={onClose}
                type="button"
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Body - Scrollable */}
            <div className="p-5 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar text-slate-200">
              
              {/* Key Metrics Quick Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#160f33]/90 border border-purple-800/40 shadow-xs">
                    <div className="text-[11px] font-mono text-purple-300">{m.label}</div>
                    <div className="mt-1 text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
                      {m.value}
                    </div>
                    {m.note && (
                      <div className="mt-0.5 text-[10px] text-pink-400 font-semibold">{m.note}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* 1. Project Overview & Business Problem */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#160f33]/90 border border-purple-800/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase font-semibold text-pink-400">
                    <FileSpreadsheet className="w-4 h-4 text-pink-400" />
                    <span>Project Overview &amp; Objective</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.objective}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#160f33]/90 border border-purple-800/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase font-semibold text-amber-400">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>The Business Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.businessProblem}
                  </p>
                </div>
              </div>

              {/* 2. Analytical Approach & Methodology */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-pink-400 font-semibold">
                  Analytical Approach &amp; Methodology
                </h3>
                <div className="p-4 rounded-xl bg-[#160f33]/90 border border-purple-800/40 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.methodology}
                </div>
              </div>

              {/* 3. Financial Model Architecture */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-pink-400 font-semibold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-pink-400" />
                  <span>Financial Model Architecture &amp; Data Pipeline</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.modelArchitecture.map((step, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[#160f33]/80 border border-purple-800/40 text-slate-300 shadow-xs"
                    >
                      <span className="w-5 h-5 rounded bg-purple-950 border border-purple-700/60 font-mono text-[10px] font-bold text-pink-400 flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="leading-snug">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Key Financial Assumptions */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-pink-400 font-semibold">
                  Key Modeling Assumptions &amp; Rationale
                </h3>
                <div className="overflow-x-auto rounded-xl border border-purple-900/50 shadow-xs">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#191138] text-purple-200 border-b border-purple-800/50">
                      <tr>
                        <th className="p-3">Parameter</th>
                        <th className="p-3 text-pink-400 font-bold">Base Case Assumption</th>
                        <th className="p-3 font-sans font-normal text-slate-400">Economic &amp; Accounting Rationale</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-900/40 bg-[#130d2d]/80">
                      {project.assumptions.map((asmp, aIdx) => (
                        <tr key={aIdx} className="hover:bg-[#1b123d] transition-colors">
                          <td className="p-3 font-semibold text-white">{asmp.parameter}</td>
                          <td className="p-3 text-pink-400 font-semibold">{asmp.baseCase}</td>
                          <td className="p-3 font-sans text-slate-300">{asmp.rationale}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 5. Analysis & Financial Model Extract (Sample Data Table) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-pink-400 font-semibold flex items-center gap-2">
                    <Table className="w-4 h-4 text-pink-400" />
                    <span>Financial Model Extract &amp; Output Schedule</span>
                  </h3>
                  <span className="text-[10px] font-mono text-purple-400">Audit Formatted Figures</span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-purple-900/50 shadow-xs">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#191138] text-purple-200 border-b border-purple-800/50">
                      <tr>
                        {project.sampleData.headers.map((h, hIdx) => (
                          <th 
                            key={hIdx} 
                            className={`p-3 ${hIdx === 0 ? 'min-w-[180px] font-semibold text-white' : 'text-right'}`}
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-purple-900/40 bg-[#130d2d]/80">
                      {project.sampleData.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#1b123d] transition-colors">
                          {row.map((cell, cIdx) => (
                            <td 
                              key={cIdx} 
                              className={`p-3 ${cIdx === 0 ? 'font-medium text-slate-200' : 'text-right text-slate-300'} ${
                                typeof cell === 'string' && (cell.includes('+') || cell === 'Favorable')
                                  ? 'text-pink-400 font-semibold'
                                  : typeof cell === 'string' && (cell.includes('-') || cell === 'Unfavorable')
                                  ? 'text-rose-400 font-medium'
                                  : ''
                              }`}
                            >
                              {typeof cell === 'number' 
                                ? cell.toLocaleString() 
                                : cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 6. Results & Measurable Impact */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-pink-400 font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-pink-400" />
                  <span>Results &amp; Measurable Insights</span>
                </h3>
                <div className="space-y-2">
                  {project.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-purple-950/60 border border-purple-800/50 text-xs sm:text-sm text-purple-200">
                      <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Tools Used & Financial Concepts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#160f33]/90 border border-purple-800/40">
                  <div className="text-xs font-mono uppercase text-purple-300 mb-2 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-pink-400" />
                    <span>Tools Applied</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-purple-950/70 text-slate-200 border border-purple-800/50 shadow-xs">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#160f33]/90 border border-purple-800/40">
                  <div className="text-xs font-mono uppercase text-purple-300 mb-2 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-pink-400" />
                    <span>Financial Concepts Applied</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.financialConcepts.map((c, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-purple-950/70 text-pink-300 border border-purple-800/50">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 8. Key Takeaways & Commercial Leadership Implications */}
              <div className="p-4 rounded-xl bg-[#160f33]/90 border border-purple-800/40 space-y-2">
                <h4 className="text-xs font-mono uppercase font-semibold text-white">
                  Key Strategic Takeaways for CFO / Executive Leadership
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {project.keyTakeaways.map((takeaway, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <span className="text-pink-400 font-bold">•</span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-purple-900/50 bg-[#150f2e] flex items-center justify-between">
              <div className="text-xs font-mono text-purple-300 hidden sm:block">
                Project Deliverable: {project.keyOutput}
              </div>
              <button
                onClick={onClose}
                type="button"
                className="w-full sm:w-auto px-5 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600 transition-colors ml-auto shadow-md shadow-pink-500/25 cursor-pointer"
              >
                Close Detail View
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
