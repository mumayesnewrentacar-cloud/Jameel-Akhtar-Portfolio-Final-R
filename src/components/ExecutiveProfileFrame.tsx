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
      className={`relative rounded-2xl bg-[#130d2b]/95 p-5 sm:p-6 border border-purple-800/50 shadow-2xl shadow-purple-950/50 overflow-hidden group ${className}`}
    >
      {/* 4 Optical Corner Framing Reticles (Cyber-Luxury Style) */}
      <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
        {/* Top Left */}
        <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-pink-500/70 transition-transform group-hover:scale-110 duration-200" />
        {/* Top Right */}
        <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-pink-500/70 transition-transform group-hover:scale-110 duration-200" />
        {/* Bottom Left */}
        <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-pink-500/70 transition-transform group-hover:scale-110 duration-200" />
        {/* Bottom Right */}
        <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-pink-500/70 transition-transform group-hover:scale-110 duration-200" />
      </div>

      {/* Top Precision Laser Highlight */}
      <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />

      {/* Subtle Ambient Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Top Terminal Tag & Verification Strip */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-purple-900/50">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-500/80" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
            <span className="w-2 h-2 rounded-full bg-pink-500/80" />
          </div>
          <span className="text-[10px] font-mono tracking-wider uppercase text-purple-300 pl-1 font-semibold">
            FRAME ID // DXB-FIN-99
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-950/80 border border-purple-700/60 text-[11px] font-mono font-bold text-pink-300 shadow-xs">
          <ShieldCheck className="w-3 h-3 text-pink-400" />
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
            className="absolute -inset-2.5 rounded-full border border-dashed border-pink-500/30 pointer-events-none"
          />

          {/* Glowing Aura Ring */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-pink-500/25 via-fuchsia-500/25 to-purple-500/25 blur-sm group-hover:blur-md transition-all duration-300" />

          {/* Insignia Core Frame */}
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1b1238] via-[#150d2e] to-[#0c071d] border-2 border-pink-500/70 flex flex-col items-center justify-center shadow-lg shadow-pink-500/20 group-hover:border-pink-400 transition-colors">
            <span className="text-2xl font-black font-mono tracking-tighter text-white">
              JA
            </span>
            <span className="text-[9px] font-mono tracking-widest text-pink-400 uppercase font-semibold">
              EXECUTIVE
            </span>

            {/* Corner Micro-Ticks on Monogram Box */}
            <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-pink-400/70" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-pink-400/70" />
            <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-pink-400/70" />
            <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-pink-400/70" />
          </div>

          {/* Live Active Beacon on corner */}
          <div className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-pink-500 to-fuchsia-500 border border-[#090614]" />
          </div>
        </div>

        {/* Identity Details */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {CANDIDATE_PROFILE.name}
            </h3>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium font-mono text-fuchsia-300 bg-purple-950/70 px-2 py-0.5 rounded border border-purple-800/50">
              <Sparkles className="w-3 h-3 text-pink-400" />
              <span>9+ Yrs Exp</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm font-medium text-slate-300 mt-0.5">
            {CANDIDATE_PROFILE.title}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-2 text-xs text-slate-400 font-mono">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-pink-500" />
              <span>{CANDIDATE_PROFILE.location}</span>
            </span>
            <span className="text-purple-900">•</span>
            <span className="flex items-center gap-1 text-fuchsia-300">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Immediate Deployment</span>
            </span>
          </div>
        </div>
      </div>

      {/* Frame Key Competency Chips */}
      <div className="relative z-10 mt-4 pt-3.5 border-t border-purple-900/50 grid grid-cols-2 sm:grid-cols-3 gap-2 text-center text-xs font-mono">
        <div className="p-2 rounded-lg bg-[#181035] border border-purple-800/50 shadow-xs">
          <div className="text-[10px] text-slate-400">Standard</div>
          <div className="font-bold text-white mt-0.5">IFRS & US GAAP</div>
        </div>

        <div className="p-2 rounded-lg bg-[#181035] border border-purple-800/50 shadow-xs">
          <div className="text-[10px] text-slate-400">Valuation</div>
          <div className="font-bold text-pink-400 mt-0.5">DCF & 3-Stmt</div>
        </div>

        <div className="p-2 rounded-lg bg-[#181035] border border-purple-800/50 shadow-xs col-span-2 sm:col-span-1">
          <div className="text-[10px] text-slate-400">Analytics</div>
          <div className="font-bold text-fuchsia-300 mt-0.5">Power BI & ETL</div>
        </div>
      </div>

      {/* Frame Interactive Footer CTA */}
      {onOpenCVModal && (
        <div className="relative z-10 mt-3 pt-3 flex items-center justify-between text-xs font-mono border-t border-purple-900/30">
          <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <Cpu className="w-3 h-3 text-pink-400" />
            <span>Institutional Grade Audit Ready</span>
          </span>

          <button
            type="button"
            onClick={onOpenCVModal}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors group-hover:translate-x-0.5 cursor-pointer"
          >
            <span>{t('nav.downloadCV')}</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </motion.div>
  );
};
