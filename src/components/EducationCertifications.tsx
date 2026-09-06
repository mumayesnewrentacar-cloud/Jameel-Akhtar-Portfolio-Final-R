import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Globe, 
  Sparkles, 
  FileText, 
  Download, 
  ShieldCheck, 
  Calendar 
} from 'lucide-react';
import { EDUCATION_LIST, CERTIFICATIONS_LIST, LANGUAGES_LIST } from '../data/portfolioData';
import { CINEMATIC_EASE } from './AnimatedSection';

interface EducationCertificationsProps {
  onOpenCVModal?: () => void;
}

export const EducationCertifications: React.FC<EducationCertificationsProps> = ({ onOpenCVModal }) => {
  return (
    <section id="education" className="relative py-20 sm:py-24 bg-[#090614] text-slate-100 overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-purple-900/15 via-fuchsia-600/10 to-transparent rounded-full blur-3xl pointer-events-none"
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
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 shadow-inner">
            <GraduationCap className="w-3.5 h-3.5 text-pink-400" />
            <span className="text-[11px] font-mono tracking-widest text-fuchsia-300 font-bold uppercase">
              05 // VERIFIED CREDENTIALS & ACADEMICS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Education &amp; Professional Certifications
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Rigorous foundational education in commerce &amp; accountancy combined with international IFRS standards accreditation, 
            Tally ERP qualifications, and continuous financial modeling mastery.
          </p>
        </motion.div>

        {/* 2-Column Grid: Education & Professional Certifications */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Academic Education */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: CINEMATIC_EASE }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-purple-900/40">
              <div className="flex items-center gap-2.5 text-sm font-bold text-white tracking-tight">
                <div className="p-1.5 rounded-lg bg-pink-500/20 text-pink-400 border border-pink-500/30">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <span>Academic Education</span>
              </div>
              <span className="text-xs font-mono text-fuchsia-400/80">Commerce &amp; Accountancy</span>
            </div>

            <div className="space-y-6 flex-1 flex flex-col">
              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative rounded-3xl bg-gradient-to-b from-[#1b1238]/90 via-[#140e2b]/95 to-[#0f0a20] border border-purple-800/40 p-6 sm:p-8 shadow-xl shadow-purple-950/40 flex-1 flex flex-col justify-between overflow-hidden group hover:border-pink-500/40 transition-all duration-300"
                >
                  {/* Optical Corner Reticles */}
                  <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
                    <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-pink-500/50" />
                    <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-pink-500/50" />
                    <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-pink-500/50" />
                    <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-pink-500/50" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/30 text-[11px] font-mono font-semibold mb-2">
                          12th Grade Senior Secondary
                        </span>
                        <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                          {edu.degree}
                        </h3>
                        <div className="text-xs sm:text-sm text-fuchsia-200/90 mt-1 font-medium">
                          {edu.institution}
                        </div>
                        <div className="text-xs text-slate-400 font-mono mt-0.5">
                          {edu.location}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-700/50 text-xs font-mono font-semibold text-pink-300">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    {edu.honors && (
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-950/70 border border-purple-800/60 text-xs font-medium text-pink-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                        <span>{edu.honors}</span>
                      </div>
                    )}

                    <div className="mt-6">
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-slate-400 mb-3 font-semibold tracking-wider">
                        <BookOpen className="w-3.5 h-3.5 text-fuchsia-400" />
                        <span>Key Commerce Coursework &amp; Fundamentals:</span>
                      </div>
                      <div className="space-y-2">
                        {edu.relevantCoursework.map((course, cIdx) => (
                          <div 
                            key={cIdx} 
                            className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-purple-900/30 text-xs text-slate-300 hover:border-purple-700/50 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0 mt-1.5" />
                            <span className="leading-relaxed">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-purple-900/40 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5 text-pink-400">
                      <ShieldCheck className="w-4 h-4" /> Formally Verified
                    </span>
                    <span>Board of High School &amp; Intermediate Education</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Professional Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: CINEMATIC_EASE }}
            className="lg:col-span-6 flex flex-col"
          >
            <div className="flex items-center justify-between pb-3 mb-5 border-b border-purple-900/40">
              <div className="flex items-center gap-2.5 text-sm font-bold text-white tracking-tight">
                <div className="p-1.5 rounded-lg bg-fuchsia-500/20 text-fuchsia-400 border border-fuchsia-500/30">
                  <Award className="w-4 h-4" />
                </div>
                <span>Professional Credentials</span>
              </div>
              <span className="text-xs font-mono text-fuchsia-400/80">IFRS, ERP &amp; Excel Modeling</span>
            </div>

            <div className="space-y-4 flex-1 flex flex-col justify-between">
              {CERTIFICATIONS_LIST.map((cert, idx) => {
                const isCompleted = cert.status === 'Completed';

                return (
                  <div
                    key={idx}
                    className="relative rounded-2xl bg-gradient-to-b from-[#1b1238]/90 via-[#140e2b]/95 to-[#0f0a20] border border-purple-800/40 p-5 sm:p-6 shadow-lg shadow-purple-950/30 hover:border-fuchsia-500/40 transition-all duration-300 group overflow-hidden"
                  >
                    {/* Subtle corner reticles */}
                    <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-pink-500/40" />
                    <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-pink-500/40" />

                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-pink-300 transition-colors">
                          {cert.title}
                        </h4>
                        <div className="text-xs text-fuchsia-300/80 font-mono mt-0.5">
                          {cert.issuer} • <span className="text-slate-400">{cert.dateOrExpected}</span>
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold shrink-0 bg-pink-950/60 text-pink-300 border border-pink-700/50 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-pink-400" />
                        {cert.status}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {cert.skillsCovered.map((sk, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-purple-950/60 text-purple-200 border border-purple-800/40"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-purple-900/30 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>Accounting Standards Verified</span>
                      <span className="flex items-center gap-1 text-pink-400 font-medium">
                        <CheckCircle2 className="w-3 h-3" /> Industry Benchmark
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* Multilingual Professional Communication Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: CINEMATIC_EASE }}
          className="mt-10 rounded-3xl bg-gradient-to-b from-[#1b1238]/90 via-[#140e2b]/95 to-[#0f0a20] border border-purple-800/40 p-6 sm:p-8 shadow-xl shadow-purple-950/40"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="flex items-center gap-2 text-pink-400 font-mono text-xs font-semibold">
                <Globe className="w-4 h-4" />
                <span>MULTILINGUAL EXECUTIVE PROFICIENCY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mt-1">
                Languages &amp; Commercial Communication
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Effective trilingual communication across UAE corporate management, statutory auditors, government portals (FTA, RTA), and international banking institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 flex-1 max-w-2xl">
              {LANGUAGES_LIST.map((lang, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-purple-800/40 hover:border-pink-500/40 transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-white">{lang.language}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-pink-500/10 text-pink-300 border border-pink-500/30">
                      {lang.badge}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300 mt-2 font-medium">
                    {lang.proficiency}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Action to view ATS Resume */}
          {onOpenCVModal && (
            <div className="mt-6 pt-5 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-mono">
                Verified against statutory documentation and academic certificates. Available for review.
              </div>
              <button
                type="button"
                onClick={onOpenCVModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>VIEW COMPLETE ATS CV / RESUME</span>
              </button>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
};
