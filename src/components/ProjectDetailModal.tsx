import React, { useEffect } from 'react';
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

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-2xl shadow-2xl text-slate-900 dark:text-slate-100 overflow-hidden my-auto transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 sticky top-0 z-10 backdrop-blur-xs">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                Project {project.number}
              </span>
              <span className="text-slate-400 dark:text-slate-500 text-xs">•</span>
              <span className="text-xs font-mono text-slate-600 dark:text-slate-300">
                {project.category}
              </span>
              <span className="text-slate-400 dark:text-slate-500 text-xs">•</span>
              <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                {project.badge}
              </span>
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body - Scrollable */}
        <div className="p-5 sm:p-8 space-y-8 overflow-y-auto custom-scrollbar text-slate-700 dark:text-slate-200">
          
          {/* Key Metrics Quick Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 shadow-xs">
                <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{m.label}</div>
                <div className="mt-1 text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white tracking-tight">
                  {m.value}
                </div>
                {m.note && (
                  <div className="mt-0.5 text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold">{m.note}</div>
                )}
              </div>
            ))}
          </div>

          {/* 1. Project Overview & Business Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase font-semibold text-emerald-700 dark:text-emerald-400">
                <FileSpreadsheet className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Project Overview &amp; Objective</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.objective}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase font-semibold text-amber-600 dark:text-amber-400">
                <AlertCircle className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>The Business Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.businessProblem}
              </p>
            </div>
          </div>

          {/* 2. Analytical Approach & Methodology */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
              Analytical Approach &amp; Methodology
            </h3>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.methodology}
            </div>
          </div>

          {/* 3. Financial Model Architecture */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Financial Model Architecture &amp; Data Pipeline</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {project.modelArchitecture.map((step, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-xs"
                >
                  <span className="w-5 h-5 rounded bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Key Financial Assumptions */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
              Key Modeling Assumptions &amp; Rationale
            </h3>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3">Parameter</th>
                    <th className="p-3 text-emerald-700 dark:text-emerald-400 font-bold">Base Case Assumption</th>
                    <th className="p-3 font-sans font-normal text-slate-500 dark:text-slate-400">Economic &amp; Accounting Rationale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80 bg-white dark:bg-slate-900/60">
                  {project.assumptions.map((asmp, aIdx) => (
                    <tr key={aIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="p-3 font-semibold text-slate-900 dark:text-white">{asmp.parameter}</td>
                      <td className="p-3 text-emerald-700 dark:text-emerald-400 font-semibold">{asmp.baseCase}</td>
                      <td className="p-3 font-sans text-slate-600 dark:text-slate-300">{asmp.rationale}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 5. Analysis & Financial Model Extract (Sample Data Table) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
                <Table className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Financial Model Extract &amp; Output Schedule</span>
              </h3>
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">Audit Formatted Figures</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    {project.sampleData.headers.map((h, hIdx) => (
                      <th 
                        key={hIdx} 
                        className={`p-3 ${hIdx === 0 ? 'min-w-[180px] font-semibold text-slate-900 dark:text-white' : 'text-right'}`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/70 bg-white dark:bg-slate-900">
                  {project.sampleData.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      {row.map((cell, cIdx) => (
                        <td 
                          key={cIdx} 
                          className={`p-3 ${cIdx === 0 ? 'font-medium text-slate-800 dark:text-slate-200' : 'text-right text-slate-700 dark:text-slate-300'} ${
                            typeof cell === 'string' && (cell.includes('+') || cell === 'Favorable')
                              ? 'text-emerald-700 dark:text-emerald-400 font-semibold'
                              : typeof cell === 'string' && (cell.includes('-') || cell === 'Unfavorable')
                              ? 'text-rose-600 dark:text-rose-400 font-medium'
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
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Results &amp; Measurable Insights</span>
            </h3>
            <div className="space-y-2">
              {project.results.map((res, rIdx) => (
                <div key={rIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 text-xs sm:text-sm text-emerald-900 dark:text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Tools Used & Financial Concepts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
              <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>Tools Applied</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-xs">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750">
              <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Financial Concepts Applied</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.financialConcepts.map((c, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-emerald-50 dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 8. Key Takeaways & Commercial Leadership Implications */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-xs font-mono uppercase font-semibold text-slate-800 dark:text-slate-300">
              Key Strategic Takeaways for CFO / Executive Leadership
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
              {project.keyTakeaways.map((takeaway, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/95 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:block">
            Project Deliverable: {project.keyOutput}
          </div>
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto px-5 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors ml-auto shadow-xs"
          >
            Close Detail View
          </button>
        </div>

      </div>
    </div>
  );
};
