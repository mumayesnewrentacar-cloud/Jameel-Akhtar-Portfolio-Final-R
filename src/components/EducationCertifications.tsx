import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, CheckCircle2, Clock, ShieldCheck, Globe } from 'lucide-react';
import { EDUCATION_LIST, CERTIFICATIONS_LIST, LANGUAGES_LIST } from '../data/portfolioData';
import { CinematicSpotlightCard } from './CinematicSpotlightCard';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="relative py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* Subtle Dot Matrix & Glow Backdrop */}
      <div className="absolute inset-0 bg-dot-matrix dark:bg-dot-matrix-dark pointer-events-none opacity-40 dark:opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>09 // ACADEMIC &amp; CREDENTIALS</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education &amp; Professional Certifications
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Rigorous academic foundation in accounting and finance supplemented with continuous, 
            verifiable professional education in corporate valuation and advanced spreadsheet modeling.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-900 dark:text-white tracking-tight">
              <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>Academic Education</span>
            </div>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <CinematicSpotlightCard
                  key={idx}
                  className="p-6 bg-white/95 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-slate-700 transition-all shadow-md space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                        {edu.degree}
                      </h3>
                      <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-mono font-medium">
                        {edu.institution}
                      </div>
                      <div className="text-xs text-slate-500 font-mono mt-0.5">
                        {edu.location}
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-emerald-50 dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-slate-700">
                      {edu.period}
                    </span>
                  </div>

                  {edu.honors && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40 text-xs font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{edu.honors}</span>
                    </div>
                  )}

                  <div>
                    <div className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 mb-2 font-semibold">
                      Key Relevant Coursework:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 dark:text-slate-300">
                      {edu.relevantCoursework.map((course, cIdx) => (
                        <div key={cIdx} className="flex items-center gap-2 p-2 rounded bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0" />
                          <span className="truncate">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </CinematicSpotlightCard>
              ))}
            </div>
          </div>

          {/* Right: Professional Certifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800 text-sm font-bold text-slate-900 dark:text-white tracking-tight">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <span>Professional Certifications &amp; Credentials</span>
              </div>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">Strictly Verified Status</span>
            </div>

            <div className="space-y-3.5">
              {CERTIFICATIONS_LIST.map((cert, idx) => {
                const isCompleted = cert.status === 'Completed';
                const isPursuing = cert.status === 'Currently Pursuing';

                return (
                  <CinematicSpotlightCard
                    key={idx}
                    className="p-5 bg-white/95 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/40 dark:hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                          {cert.title}
                        </h4>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold shrink-0 ${
                          isCompleted
                            ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30'
                            : isPursuing
                            ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/30'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                        }`}>
                          {cert.status}
                        </span>
                      </div>

                      <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {cert.issuer} • {cert.dateOrExpected}
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {cert.skillsCovered.map((sk, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-750"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>Standards Verified</span>
                      <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                        {isCompleted ? (
                          <>
                            <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> Completed
                          </>
                        ) : (
                          <>
                            <Clock className="w-3 h-3 text-blue-600 dark:text-blue-400" /> Planned / In Progress
                          </>
                        )}
                      </span>
                    </div>
                  </CinematicSpotlightCard>
                );
              })}
            </div>
          </div>

        </div>

        {/* Multilingual Professional Proficiency Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-semibold">
                <Globe className="w-4 h-4" />
                <span>MULTILINGUAL PROFESSIONAL PROFICIENCY</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                Languages &amp; Business Communication
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                Effective trilingual communication across corporate management, statutory auditors, regional business partners, and financial institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1 max-w-2xl">
              {LANGUAGES_LIST.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{lang.language}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                      {lang.badge}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-2 font-medium">
                    {lang.proficiency}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

