import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  MapPin, 
  Award, 
  Sparkles, 
  Briefcase,
  FileCheck2,
  Cpu
} from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';
import { useLocalization } from '../context/LocalizationContext';

interface ExecutiveProfileFrameProps {
  onOpenCVModal?: () => void;
  className?: string;
}

export const ExecutiveProfileFrame: React.FC<ExecutiveProfileFrameProps> = ({
  onOpenCVModal,
  className = '',
}) => {
  const { t } = useLocalization();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className={`relative rounded-2xl bg-gradient-to-b from-white via-slate-50 to-slate-100/90 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 p-5 sm:p-6 border border-slate-200 dark:border-slate-750 shadow-xl dark:shadow-2xl overflow-hidden group ${className}`}
    >
      {/* 4 Optical Corner Framing Reticles (Executive Terminal Style) */}
      <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
        {/* Top Left */}
        <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-emerald-500/60 dark:border-emerald-400/80 transition-transform group-hover:scale-110 duration-200" />
        {/* Top Right */}
        <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-emerald-500/60 dark:border-emerald-400/80 transition-transform group-hover:scale-110 duration-200" />
        {/* Bottom Left */}
        <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-emerald-500/60 dark:border-emerald-400/80 transition-transform group-hover:scale-110 duration-200" />
        {/* Bottom Right */}
        <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-emerald-500/60 dark:border-emerald-400/80 transition-transform group-hover:scale-110 duration-200" />
      </div>

      {/* Top Precision Laser Highlight */}
      <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

      {/* Subtle Ambient Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10 dark:opacity-15 pointer-events-none" />

      {/* Top Terminal Tag & Verification Strip */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-500/80" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 dark:text-slate-400 pl-1 font-semibold">
            FRAME ID // DXB-FIN-99
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-400 shadow-xs">
          <ShieldCheck className="w-3 h-3 text-emerald-500" />
          <span>IFRS VERIFIED</span>
        </div>
      </div>

      {/* Main Profile Identity Frame Content */}
      <div className="relative z-10 mt-5 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
        {/* Centerpiece Monogram & Orbital Radar Frame */}
        <div className="relative shrink-0 flex items-center justify-center">
          {/* Animated Outer Concentric Orbital Radar Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            className="absolute -inset-2.5 rounded-full border border-dashed border-emerald-500/30 dark:border-emerald-400/40 pointer-events-none"
          />

          {/* Glowing Aura Ring */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-emerald-500/20 via-teal-500/20 to-blue-500/20 blur-sm group-hover:blur-md transition-all duration-300" />

          {/* Insignia Core Frame */}
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border-2 border-emerald-500/70 flex flex-col items-center justify-center shadow-lg shadow-emerald-500/15 group-hover:border-emerald-400 transition-colors">
            <span className="text-2xl font-black font-mono tracking-tighter text-white">
              JA
            </span>
            <span className="text-[9px] font-mono tracking-widest text-emerald-400 uppercase font-semibold">
              EXECUTIVE
            </span>

            {/* Corner Micro-Ticks on Monogram Box */}
            <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-emerald-400/70" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-emerald-400/70" />
            <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-emerald-400/70" />
            <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-emerald-400/70" />
          </div>

          {/* Live Active Beacon on corner */}
          <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-white dark:border-slate-900" />
          </div>
        </div>

        {/* Identity Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              {CANDIDATE_PROFILE.name}
            </h3>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              <Sparkles className="w-3 h-3 text-emerald-500" />
              <span>9+ Yrs Exp</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 mt-0.5">
            {CANDIDATE_PROFILE.title}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{CANDIDATE_PROFILE.location}</span>
            </span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Immediate Deployment</span>
            </span>
          </div>
        </div>
      </div>

      {/* Frame Key Competency Chips */}
      <div className="relative z-10 mt-4 pt-3.5 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs font-mono">
        <div className="p-2 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
          <div className="text-[10px] text-slate-500 dark:text-slate-400">Standard</div>
          <div className="font-bold text-slate-900 dark:text-white mt-0.5">IFRS & US GAAP</div>
        </div>

        <div className="p-2 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs">
          <div className="text-[10px] text-slate-500 dark:text-slate-400">Valuation</div>
          <div className="font-bold text-emerald-700 dark:text-emerald-400 mt-0.5">DCF & 3-Stmt</div>
        </div>

        <div className="p-2 rounded-lg bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-2xs col-span-2 sm:col-span-1">
          <div className="text-[10px] text-slate-500 dark:text-slate-400">Analytics</div>
          <div className="font-bold text-blue-700 dark:text-blue-400 mt-0.5">Power BI & ETL</div>
        </div>
      </div>

      {/* Frame Interactive Footer CTA */}
      {onOpenCVModal && (
        <div className="relative z-10 mt-3 pt-3 flex items-center justify-between text-xs font-mono">
          <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <Cpu className="w-3 h-3 text-emerald-500" />
            <span>Institutional Grade Audit Ready</span>
          </span>

          <button
            type="button"
            onClick={onOpenCVModal}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors group-hover:translate-x-0.5"
          >
            <span>{t('nav.downloadCV')}</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </motion.div>
  );
};
