import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin
} from 'lucide-react';
import { CANDIDATE_PROFILE, EXPERIENCE_LIST, CERTIFICATIONS_LIST, EDUCATION_LIST, LANGUAGES_LIST } from '../data/portfolioData';
import { useLocalization } from '../context/LocalizationContext';

interface ResumeDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeDownloadModal: React.FC<ResumeDownloadModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLocalization();

  useEffect(() => {
    if (!isOpen) return;
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTextCV = () => {
    const cvContent = `
================================================================================
${CANDIDATE_PROFILE.name.toUpperCase()} - ${CANDIDATE_PROFILE.title.toUpperCase()}
Location: ${CANDIDATE_PROFILE.location}
Email: ${CANDIDATE_PROFILE.email} | Phone: ${CANDIDATE_PROFILE.phone}
LinkedIn: ${CANDIDATE_PROFILE.linkedin}
================================================================================

PROFESSIONAL SUMMARY
${CANDIDATE_PROFILE.summary}

--------------------------------------------------------------------------------
CORE EXPERTISE & TECHNICAL COMPETENCIES
- Accounting: General Ledger, Bank Reconciliations, AP/AR, IFRS / US GAAP, Accruals, Closing
- Financial Analysis: DuPont ROE, Working Capital (CCC), Budget vs Actual, Margin Decomposition
- Financial Modeling: Three-Statement Models, DCF Valuations, WACC, Sensitivity & Scenario Analysis
- Spreadsheet Analytics: Advanced Microsoft Excel, Power Query ETL, XLOOKUP, Data Validation
- Systems: SAP ERP, Oracle NetSuite, QuickBooks, Power BI

--------------------------------------------------------------------------------
PROFESSIONAL EXPERIENCE

${EXPERIENCE_LIST.map(exp => `
${exp.role.toUpperCase()}
Company: ${exp.company} (${exp.location}) | Period: ${exp.period}
Summary: ${exp.summary}
Key Responsibilities:
${exp.responsibilities.map(r => `  * ${r}`).join('\n')}
Key Achievements:
${exp.keyAchievements.map(a => `  * ${a}`).join('\n')}
Business Impact: ${exp.businessImpact}
`).join('\n--------------------------------------------------------------------------------\n')}

--------------------------------------------------------------------------------
EDUCATION
${EDUCATION_LIST.map(edu => `
Degree: ${edu.degree}
Institution: ${edu.institution} (${edu.period})
Honors: ${edu.honors || 'N/A'}
Relevant Coursework: ${edu.relevantCoursework.join(', ')}
`).join('\n')}

--------------------------------------------------------------------------------
CERTIFICATIONS & PROFESSIONAL CREDENTIALS
${CERTIFICATIONS_LIST.map(c => `* ${c.title} (${c.issuer}) - Status: ${c.status} [${c.dateOrExpected}]`).join('\n')}

--------------------------------------------------------------------------------
LANGUAGES
${LANGUAGES_LIST.map(l => `* ${l.language}: ${l.proficiency}`).join('\n')}
================================================================================
    `.trim();

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CV_Jameel_Akhtar_Accountant_Financial_Analyst.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          key="cv-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cv-modal-title"
          onClick={onClose}
        >
          <motion.div 
            key="cv-modal-card"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.12 }}
            className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-750 rounded-2xl shadow-2xl text-slate-800 dark:text-slate-100 overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 id="cv-modal-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
              {t('modal.downloadPDF')}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-300 dark:border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t('modal.printView')}</span>
            </button>

            <button
              onClick={handleDownloadTextCV}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t('nav.downloadCV')}</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={t('modal.close')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-slate-700 dark:text-slate-200 custom-scrollbar text-xs sm:text-sm">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {CANDIDATE_PROFILE.name}
                </h1>
                <p className="text-emerald-700 dark:text-emerald-400 font-mono text-sm font-semibold mt-0.5">
                  {CANDIDATE_PROFILE.title}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {CANDIDATE_PROFILE.subheading}
                </p>
              </div>

              <div className="space-y-1 text-xs font-mono text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{CANDIDATE_PROFILE.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{CANDIDATE_PROFILE.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{CANDIDATE_PROFILE.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <a 
                    href={CANDIDATE_PROFILE.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline hover:text-emerald-600 dark:hover:text-emerald-300"
                  >
                    linkedin.com/in/jameel-akhtar-184508431
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase font-bold text-emerald-700 dark:text-emerald-400 tracking-wider">
              {t('modal.executiveSummary')}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {CANDIDATE_PROFILE.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase font-bold text-emerald-700 dark:text-emerald-400 tracking-wider">
              {t('experience.title')}
            </h3>
            
            <div className="space-y-4">
              {EXPERIENCE_LIST.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 space-y-2">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">
                        {exp.role}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {exp.company} • {exp.location}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 pt-1">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <strong className="text-emerald-700 dark:text-emerald-400">Impact: </strong>
                    {exp.businessImpact}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education, Certifications & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 space-y-2">
              <h3 className="text-xs font-mono uppercase font-bold text-emerald-700 dark:text-emerald-400 tracking-wider">
                {t('education.title')}
              </h3>
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="text-xs">
                  <div className="font-bold text-slate-900 dark:text-white">{edu.degree}</div>
                  <div className="text-slate-500 dark:text-slate-400 font-mono mt-0.5">{edu.institution}</div>
                  <div className="text-emerald-600 dark:text-emerald-400 font-mono text-[11px] mt-0.5">{edu.period}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 space-y-2">
              <h3 className="text-xs font-mono uppercase font-bold text-emerald-700 dark:text-emerald-400 tracking-wider">
                Certifications
              </h3>
              <ul className="text-xs space-y-1.5 text-slate-600 dark:text-slate-300">
                {CERTIFICATIONS_LIST.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-slate-900 dark:text-slate-200">{cert.title}</div>
                      <div className="text-[10px] text-slate-400 font-mono">[{cert.dateOrExpected}] • {cert.status}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-750 space-y-2">
              <h3 className="text-xs font-mono uppercase font-bold text-emerald-700 dark:text-emerald-400 tracking-wider">
                Languages
              </h3>
              <ul className="text-xs space-y-1.5 text-slate-600 dark:text-slate-300">
                {LANGUAGES_LIST.map((lang, idx) => (
                  <li key={idx} className="flex items-start justify-between gap-1.5 pb-1 border-b border-slate-200/60 dark:border-slate-750/60 last:border-0">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">{lang.language}</span>
                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">{lang.badge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
            Status: Ready for Review
          </span>
          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 border border-slate-300 dark:border-slate-700"
            >
              {t('modal.close')}
            </button>
            <button
              onClick={handleDownloadTextCV}
              type="button"
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm"
            >
              {t('nav.downloadCV')}
            </button>
          </div>
        </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
