import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  FileText, 
  ChevronRight,
  ShieldCheck,
  Activity,
  Sparkles
} from 'lucide-react';
import { HERO_FINANCIAL_DATA } from '../data/portfolioData';
import { useLocalization } from '../context/LocalizationContext';
import { CinematicSpotlightCard } from './CinematicSpotlightCard';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const { t } = useLocalization();
  const [selectedPeriod, setSelectedPeriod] = useState<'FY23' | 'FY24' | 'LTM'>('FY24');
  const [hoveredQuarter, setHoveredQuarter] = useState<number | null>(null);

  const activeData = HERO_FINANCIAL_DATA.datasets[selectedPeriod];

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-50/50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Subtle fine grid and dot matrix background */}
      <div className="absolute inset-0 bg-grid-pattern dark:bg-grid-pattern-dark pointer-events-none opacity-50 dark:opacity-30" />
      <div className="absolute inset-0 bg-dot-matrix dark:bg-dot-matrix-dark pointer-events-none opacity-40 dark:opacity-25" />
      <div className="absolute top-10 right-10 w-[480px] h-[480px] bg-emerald-500/10 dark:bg-emerald-500/8 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[420px] h-[420px] bg-blue-500/10 dark:bg-blue-500/8 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Professional Status Pill with Cinematic Pulse */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-slate-850/95 backdrop-blur-md border border-slate-200 dark:border-slate-750 text-xs text-slate-700 dark:text-slate-300 shadow-md shadow-emerald-500/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="font-mono text-slate-900 dark:text-white font-bold">{t('profile.name')}</span>
                <span className="text-slate-300 dark:text-slate-600">•</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold font-mono">{t('profile.yearsExperience')}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>IFRS Framework Compliant</span>
              </div>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {t('hero.headlineMain')} <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 dark:from-emerald-400 dark:via-teal-300 dark:to-blue-400 drop-shadow-sm">
                  {t('hero.headlineAccent')}
                </span>
              </h1>
              <p className="mt-4 text-base sm:text-lg font-medium text-slate-700 dark:text-slate-200 leading-relaxed max-w-xl">
                {t('profile.subheading')}
              </p>
            </div>

            {/* Structured Professional Introduction */}
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              {t('hero.introText')}
            </p>

            {/* Compact Professional Information Panel */}
            <div className="p-3.5 rounded-xl bg-white/90 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 shadow-sm max-w-xl">
              <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-3 text-xs font-mono font-medium text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  {t('hero.tagAccounting')}
                </span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  {t('hero.tagFinancialAnalysis')}
                </span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  {t('hero.tagFinancialModeling')}
                </span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  {t('hero.tagExcelBI')}
                </span>
                <span className="text-slate-300 dark:text-slate-600">|</span>
                <span className="flex items-center gap-1.5 text-slate-800 dark:text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  {t('hero.tagReporting')}
                </span>
              </div>
            </div>

            {/* Primary & Secondary Action CTAs with Cinematic Shimmer */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                id="hero-view-work-btn"
                className="relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:from-emerald-700 active:to-teal-700 transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/35 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                {/* Cinematic Light Sweep Ray */}
                <div 
                  className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-cinematic-shimmer pointer-events-none" 
                  aria-hidden="true" 
                />
                <span className="relative z-10">{t('nav.viewProjects')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 relative z-10 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenCVModal}
                id="hero-download-cv-btn"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-750 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500"
              >
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t('hero.btnDownloadCV')}</span>
              </button>

              <a
                href="#financial-models"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
              >
                <span>{t('hero.btnShowcase')}</span>
                <ChevronRight className="w-4 h-4 rtl:rotate-180" />
              </a>
            </div>

            {/* Quick Metrics Ticker */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg text-left">
              <div className="p-2 rounded-lg hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white">{t('hero.statYears')}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('hero.statYearsLabel')}</div>
              </div>
              <div className="p-2 rounded-lg hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">{t('hero.statReconciliation')}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('hero.statReconciliationLabel')}</div>
              </div>
              <div className="p-2 rounded-lg hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="text-xl sm:text-2xl font-bold font-mono text-blue-600 dark:text-blue-400">{t('hero.statCompliance')}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{t('hero.statComplianceLabel')}</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual - Executive Financial Workstation Terminal Frame */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3 }}
              className="glass-glow-card bg-white/95 dark:bg-slate-950/95 rounded-2xl border border-slate-200/90 dark:border-slate-800/90 p-5 sm:p-6 shadow-2xl relative transition-colors duration-200 overflow-hidden group"
            >
              
              {/* 4 Optical Corner Framing Reticles (Executive Terminal Style) */}
              <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
                <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-emerald-500/70 dark:border-emerald-400/80 transition-transform group-hover:scale-110 duration-200" />
                <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-emerald-500/70 dark:border-emerald-400/80 transition-transform group-hover:scale-110 duration-200" />
                <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-emerald-500/70 dark:border-emerald-400/80 transition-transform group-hover:scale-110 duration-200" />
                <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-emerald-500/70 dark:border-emerald-400/80 transition-transform group-hover:scale-110 duration-200" />
              </div>

              {/* Top Laser Highlight Border */}
              <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

              {/* Executive Terminal Chrome Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80 dark:border-slate-800/80 text-[10px] font-mono text-slate-400 dark:text-slate-500">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  <span className="ml-1.5 font-semibold text-slate-700 dark:text-slate-300">TERMINAL // FIN-ANALYTICS-OS v2.4</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">DXB-HQ // LIVE</span>
                </div>
              </div>

              {/* Dashboard Header with Period Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 shadow-sm">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                      <span>{t('hero.monitorTitle')}</span>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </h2>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      {t('hero.monitorSubtitle')}
                    </p>
                  </div>
                </div>

                {/* Period Selector Tabs with Framer Motion layoutId */}
                <div className="flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 relative">
                  {HERO_FINANCIAL_DATA.periods.map((p) => {
                    const isSelected = selectedPeriod === p;
                    return (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setSelectedPeriod(p)}
                        className={`relative px-3 py-1 text-xs font-mono font-medium rounded-lg transition-colors z-10 ${
                          isSelected
                            ? 'text-white'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        {isSelected && (
                          <motion.span
                            layoutId="heroPeriodPill"
                            className="absolute inset-0 bg-emerald-600 rounded-lg shadow-md shadow-emerald-600/30 -z-10"
                            transition={{ type: "spring", stiffness: 500, damping: 35 }}
                          />
                        )}
                        {p}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* KPI Cards Grid with Spotlight */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
                
                {/* Revenue Card */}
                <CinematicSpotlightCard className="p-3 bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span>{t('hero.revenue')}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">+14.5%</span>
                  </div>
                  <div className="mt-1 text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white tracking-tight">
                    {activeData.revenue}
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">{t('hero.revenueSub')}</div>
                </CinematicSpotlightCard>

                {/* Gross Profit Card */}
                <CinematicSpotlightCard className="p-3 bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span>{t('hero.grossProfit')}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{activeData.grossMargin}</span>
                  </div>
                  <div className="mt-1 text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white tracking-tight">
                    {activeData.grossProfit}
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">{t('hero.grossProfitSub')}</div>
                </CinematicSpotlightCard>

                {/* EBITDA Card */}
                <CinematicSpotlightCard className="p-3 bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span>{t('hero.ebitda')}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{activeData.ebitdaMargin}</span>
                  </div>
                  <div className="mt-1 text-lg sm:text-xl font-bold font-mono text-emerald-600 dark:text-emerald-400 tracking-tight">
                    {activeData.ebitda}
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">{t('hero.ebitdaSub')}</div>
                </CinematicSpotlightCard>

                {/* EBIT Card */}
                <CinematicSpotlightCard className="p-3 bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span>{t('hero.ebit')}</span>
                    <span className="text-slate-500 dark:text-slate-400">Operating</span>
                  </div>
                  <div className="mt-1 text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white tracking-tight">
                    {activeData.ebit}
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">{t('hero.ebitSub')}</div>
                </CinematicSpotlightCard>

                {/* Net Income Card */}
                <CinematicSpotlightCard className="p-3 bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span>{t('hero.netIncome')}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{activeData.netMargin}</span>
                  </div>
                  <div className="mt-1 text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white tracking-tight">
                    {activeData.netIncome}
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">{t('hero.netIncomeSub')}</div>
                </CinematicSpotlightCard>

                {/* Cash Flow Card */}
                <CinematicSpotlightCard className="p-3 bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span>{t('hero.cashFlow')}</span>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">Liquid</span>
                  </div>
                  <div className="mt-1 text-lg sm:text-xl font-bold font-mono text-blue-600 dark:text-blue-400 tracking-tight">
                    {activeData.cashFlow}
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">{t('hero.cashFlowSub')}</div>
                </CinematicSpotlightCard>

              </div>

              {/* Interactive Trend Chart: Revenue vs EBITDA by Quarter */}
              <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs mb-2">
                  <div className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <span>{t('hero.chartTitle')}</span>
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-200/70 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                      {t('hero.chartUnit')}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-[10px]">
                    <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                      <span className="w-2 h-2 rounded-sm bg-blue-500" /> Rev
                    </span>
                    <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-sm bg-emerald-500" /> EBITDA
                    </span>
                  </div>
                </div>

                {/* SVG Visual Chart with Gradients */}
                <div className="h-36 w-full pt-1">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 360 120">
                    <defs>
                      <linearGradient id="heroRevGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.6" />
                      </linearGradient>
                      <linearGradient id="heroEbitdaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#047857" stopOpacity="0.7" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Grid lines */}
                    <line x1="0" y1="20" x2="360" y2="20" stroke="currentColor" className="text-slate-200 dark:text-slate-700/60" strokeDasharray="3 3" strokeWidth="0.75" />
                    <line x1="0" y1="60" x2="360" y2="60" stroke="currentColor" className="text-slate-200 dark:text-slate-700/60" strokeDasharray="3 3" strokeWidth="0.75" />
                    <line x1="0" y1="100" x2="360" y2="100" stroke="currentColor" className="text-slate-300 dark:text-slate-800" strokeWidth="1" />

                    {/* Quarter Columns */}
                    {activeData.trendData.map((d, index) => {
                      const x = 35 + index * 85;
                      const maxRev = 10;
                      const revHeight = (d.rev / maxRev) * 80;
                      const ebitdaHeight = (d.ebitda / maxRev) * 80;
                      const isHovered = hoveredQuarter === index;

                      return (
                        <g 
                          key={d.quarter} 
                          className="cursor-pointer"
                          onMouseEnter={() => setHoveredQuarter(index)}
                          onMouseLeave={() => setHoveredQuarter(null)}
                        >
                          {/* Revenue Bar */}
                          <rect
                            x={x}
                            y={100 - revHeight}
                            width="24"
                            height={revHeight}
                            rx="3"
                            fill={isHovered ? '#60A5FA' : 'url(#heroRevGrad)'}
                            className="transition-all duration-200 filter drop-shadow-sm"
                          />

                          {/* EBITDA Sub-bar */}
                          <rect
                            x={x + 28}
                            y={100 - ebitdaHeight}
                            width="16"
                            height={ebitdaHeight}
                            rx="2.5"
                            fill={isHovered ? '#34D399' : 'url(#heroEbitdaGrad)'}
                            className="transition-all duration-200 filter drop-shadow-sm"
                          />

                          {/* Label X-axis */}
                          <text
                            x={x + 22}
                            y="114"
                            textAnchor="middle"
                            className="fill-slate-500 dark:fill-slate-400 text-[10px] font-mono"
                          >
                            {d.quarter}
                          </text>

                          {/* Value label on hover */}
                          {isHovered && (
                            <g>
                              <rect
                                x={x - 10}
                                y={Math.max(5, 100 - revHeight - 24)}
                                width="66"
                                height="20"
                                rx="4"
                                className="fill-slate-900 dark:fill-slate-900 stroke-slate-200 dark:stroke-slate-700"
                                strokeWidth="1"
                              />
                              <text
                                x={x + 23}
                                y={Math.max(18, 100 - revHeight - 10)}
                                textAnchor="middle"
                                className="fill-white text-[9px] font-mono font-medium"
                              >
                                ${d.rev}M | ${d.ebitda}M
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>
              </div>

              {/* Financial Liquidity & Solvency Ratios Bar */}
              <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-2">
                <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">{t('hero.currentRatio')}</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-emerald-700 dark:text-emerald-400">
                    {activeData.currentRatio}
                  </div>
                  <div className="text-[9px] text-slate-400 dark:text-slate-500">{t('hero.benchmarkCurrent')}</div>
                </div>

                <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">{t('hero.quickRatio')}</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-emerald-700 dark:text-emerald-400">
                    {activeData.quickRatio}
                  </div>
                  <div className="text-[9px] text-slate-400 dark:text-slate-500">{t('hero.benchmarkQuick')}</div>
                </div>

                <div className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">{t('hero.roe')}</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-blue-700 dark:text-blue-400">
                    {activeData.roe}
                  </div>
                  <div className="text-[9px] text-slate-400 dark:text-slate-500">{t('hero.benchmarkRoe')}</div>
                </div>
              </div>

              {/* Micro audit stamp */}
              <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  {t('hero.auditCleared')}
                </span>
                <span>{t('hero.ifrsCompliant')}</span>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};


