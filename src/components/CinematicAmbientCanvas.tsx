import React from 'react';
import { ShieldCheck, Activity, Database, CheckCircle2 } from 'lucide-react';
import { useLocalization } from '../context/LocalizationContext';

export const CinematicAmbientCanvas: React.FC = () => {
  const { isRTL } = useLocalization();

  const tickerItems = [
    { label: 'DUBAI FINANCIAL HUB', status: 'ACTIVE' },
    { label: 'IFRS & US GAAP', status: 'COMPLIANT' },
    { label: 'TRIAL BALANCE', status: 'ZERO VARIANCE' },
    { label: 'THREE-STATEMENT DCF', status: 'PRODUCTION READY' },
    { label: 'POWER QUERY ETL', status: 'AUTOMATED' },
    { label: 'MONTH-END CLOSE', status: '5-DAY CYCLE' },
    { label: 'CASH FLOW LIQUIDITY', status: 'MONITORED' },
    { label: 'AUDIT ASSURANCE', status: '100% VERIFIED' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Cinematic Luminous Glow Orbs */}
      <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 dark:bg-emerald-500/12 rounded-full blur-[140px] animate-pulse-glow" />
      <div 
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-[150px] animate-pulse-glow" 
        style={{ animationDelay: '2s' }} 
      />
      <div 
        className="absolute -bottom-32 left-1/3 w-[650px] h-[650px] bg-blue-600/8 dark:bg-blue-600/10 rounded-full blur-[160px] animate-pulse-glow" 
        style={{ animationDelay: '4s' }} 
      />

      {/* Radial Vignette Falloff Mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/20 to-slate-50/60 dark:via-slate-900/40 dark:to-slate-900/90" />
    </div>
  );
};

export const CinematicTelemetryBar: React.FC = () => {
  const telemetryFeed = [
    '• DUBAI FINANCIAL DISTRICT (GMT+4)',
    '• IFRS 16 & US GAAP STANDARDS APPLIED',
    '• TRIAL BALANCE: ZERO UNRECONCILED VARIANCE',
    '• DCF & THREE-STATEMENT CAPITAL MODELS ACTIVE',
    '• ADVANCED EXCEL / POWER QUERY AUTOMATION STACK',
    '• CONTINUOUS AUDIT & STATUTORY GOVERNANCE READY',
  ];

  return (
    <div className="w-full bg-slate-100/95 dark:bg-slate-950/95 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800/80 text-[11px] font-mono py-1.5 px-4 overflow-hidden relative z-40 backdrop-blur-md select-none transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Live Status Beacon */}
        <div className="flex items-center gap-2 shrink-0 text-slate-700 dark:text-slate-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500" />
          </span>
          <span className="font-semibold text-emerald-700 dark:text-emerald-400 tracking-wider text-[10px] uppercase">
            Financial Telemetry
          </span>
          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">|</span>
          <span className="text-slate-500 dark:text-slate-400 text-[10px] hidden sm:inline">
            Certified Execution
          </span>
        </div>

        {/* Marquee ticker */}
        <div className="relative flex-1 overflow-hidden whitespace-nowrap mask-radial-edges">
          <div className="inline-flex gap-8 animate-ticker-marquee text-[10px] text-slate-600 dark:text-slate-400 font-mono tracking-wide">
            {telemetryFeed.concat(telemetryFeed).map((item, idx) => (
              <span key={idx} className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Right Audit Check Tag */}
        <div className="hidden md:flex items-center gap-1.5 text-[10px] text-slate-700 dark:text-slate-300 shrink-0 bg-white/90 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700/60 shadow-xs">
          <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
          <span>IFRS Verified</span>
        </div>
      </div>
    </div>
  );
};
