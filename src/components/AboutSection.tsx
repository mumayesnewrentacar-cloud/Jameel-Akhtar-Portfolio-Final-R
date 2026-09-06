import React from 'react';
import { 
  CheckCircle2, 
  Award
} from 'lucide-react';
import { motion } from 'motion/react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';
import { useLocalization } from '../context/LocalizationContext';
import { ExecutiveProfileFrame } from './ExecutiveProfileFrame';
import { 
  AnimatedSectionHeader, 
  AnimatedStaggerContainer, 
  AnimatedItem, 
  CinematicScrollReveal 
} from './AnimatedSection';

interface AboutSectionProps {
  onOpenCVModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCVModal }) => {
  const { t, isRTL } = useLocalization();

  const storyProgression = [
    { title: t('about.arc1Title'), desc: t('about.arc1Desc') },
    { title: t('about.arc2Title'), desc: t('about.arc2Desc') },
    { title: t('about.arc3Title'), desc: t('about.arc3Desc') },
    { title: t('about.arc4Title'), desc: t('about.arc4Desc') },
    { title: t('about.arc5Title'), desc: t('about.arc5Desc') },
    { title: t('about.arc6Title'), desc: t('about.arc6Desc') },
  ];

  const competenciesList = [
    'General Ledger & Journal Entries',
    'Month-End Close Procedures',
    'Bank & Ledger Reconciliations',
    'Accounts Payable & Receivable',
    'IFRS / GAAP Compliance',
    'Budgeting & Variance Analysis',
    '12-Month Rolling Forecasts',
    'Three-Statement Financial Models',
    'DCF Corporate Valuation',
    'Power Query Automated ETL',
    'Working Capital & Cash Flow',
    'Tax & Statutory Reporting'
  ];

  return (
    <section id="about" className="relative py-20 bg-[#090614] text-slate-100 border-b border-purple-950/60 overflow-hidden">
      {/* Background Matrix & Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Scroll Entrance */}
        <AnimatedSectionHeader
          badge={
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-xs font-mono font-medium text-pink-400 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              <span>{t('about.tag')}</span>
            </div>
          }
          title={t('about.title')}
          subtitle={t('about.subtitle')}
        />

        {/* Narrative & Snapshot Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Detailed Professional Narrative */}
          <CinematicScrollReveal direction="up" delay={0.1} className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <div className="p-6 rounded-2xl bg-[#130d2b]/90 border border-purple-800/40 shadow-xl relative">
              {/* Corner Optical Reticles */}
              <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-pink-500/60 pointer-events-none" />
              <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-pink-500/60 pointer-events-none" />
              <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-pink-500/60 pointer-events-none" />
              <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-pink-500/60 pointer-events-none" />

              <div className="space-y-4">
                <p>{t('about.narrative1')}</p>
                <p>{t('about.narrative2')}</p>
                <p>{t('about.narrative3')}</p>
              </div>
            </div>

            {/* Core Competencies Matrix */}
            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-pink-400/90 font-semibold mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                {t('about.competenciesTitle')}
              </h3>
              <AnimatedStaggerContainer staggerDelay={0.04} className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {competenciesList.map((comp, idx) => (
                  <AnimatedItem key={idx} whileHoverLift>
                    <div 
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-[#140f2e] border border-purple-800/40 text-slate-200 hover:border-pink-500/50 transition-colors shadow-xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                      <span className="truncate">{comp}</span>
                    </div>
                  </AnimatedItem>
                ))}
              </AnimatedStaggerContainer>
            </div>
          </CinematicScrollReveal>

          {/* Right: Executive Profile Frame & Compact Professional Snapshot */}
          <CinematicScrollReveal direction="up" delay={0.2} className="lg:col-span-5 space-y-5">
            {/* Executive Framed Identity Card */}
            <ExecutiveProfileFrame onOpenCVModal={onOpenCVModal} />

            <div className="relative bg-[#130d2b]/95 rounded-2xl border border-purple-800/50 p-6 shadow-2xl shadow-purple-950/40 space-y-5">
              {/* Corner Optical Reticles */}
              <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-pink-500/60 pointer-events-none" />
              <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-pink-500/60 pointer-events-none" />
              <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-pink-500/60 pointer-events-none" />
              <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-pink-500/60 pointer-events-none" />

              <div className="flex items-center justify-between pb-3 border-b border-purple-900/50">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-pink-400" />
                  <span className="text-sm font-bold text-white tracking-tight">{t('about.snapshotTitle')}</span>
                </div>
                <span className="text-[11px] font-mono text-fuchsia-300 bg-purple-950/80 px-2 py-0.5 rounded-full border border-purple-800/50">
                  {t('about.verifiedProfile')}
                </span>
              </div>

              {/* 4 Metric Panels */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#181135] border border-purple-800/40 shadow-xs hover:border-pink-500/40 transition-colors">
                  <div className="text-xs font-mono text-slate-400">{t('about.statExpTitle')}</div>
                  <div className="text-xl font-bold font-mono text-white mt-0.5">{t('about.statExpValue')}</div>
                  <p className="text-xs text-slate-400 mt-1">
                    {t('about.statExpDesc')}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#181135] border border-purple-800/40 shadow-xs hover:border-pink-500/40 transition-colors">
                  <div className="text-xs font-mono text-slate-400">{t('about.statExpertiseTitle')}</div>
                  <div className="text-xl font-bold font-mono text-pink-400 mt-0.5">{t('about.statExpertiseValue')}</div>
                  <p className="text-xs text-slate-400 mt-1">
                    {t('about.statExpertiseDesc')}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#181135] border border-purple-800/40 shadow-xs hover:border-pink-500/40 transition-colors">
                  <div className="text-xs font-mono text-slate-400">{t('about.statModelsTitle')}</div>
                  <div className="text-xl font-bold font-mono text-fuchsia-300 mt-0.5">{t('about.statModelsValue')}</div>
                  <p className="text-xs text-slate-400 mt-1">
                    {t('about.statModelsDesc')}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#181135] border border-purple-800/40 shadow-xs hover:border-pink-500/40 transition-colors">
                  <div className="text-xs font-mono text-slate-400">{t('about.statAnalyticsTitle')}</div>
                  <div className="text-xl font-bold font-mono text-white mt-0.5">{t('about.statAnalyticsValue')}</div>
                  <p className="text-xs text-slate-400 mt-1">
                    {t('about.statAnalyticsDesc')}
                  </p>
                </div>
              </div>

              {/* Candidate Location & Contact Notice */}
              <div className="pt-2 text-xs text-slate-400 border-t border-purple-900/50 flex items-center justify-between">
                <span>{t('about.locationNotice')}</span>
                <span className="text-pink-400 font-medium">{t('about.readyDeploy')}</span>
              </div>
            </div>
          </CinematicScrollReveal>

        </div>

        {/* Visual Storytelling Progression Banner */}
        <div className="mt-16 pt-10 border-t border-purple-950/60">
          <CinematicScrollReveal direction="up" delay={0.1} className="text-center mb-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-pink-400 font-semibold">
              {t('about.valueArcTitle')}
            </h3>
            <p className="text-base font-semibold text-white mt-1">
              {t('about.valueArcSubtitle')}
            </p>
          </CinematicScrollReveal>

          <AnimatedStaggerContainer staggerDelay={0.07} initialDelay={0.15} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {storyProgression.map((item, idx) => (
              <AnimatedItem key={idx} whileHoverLift>
                <div
                  className="relative p-3.5 rounded-xl bg-[#130d2b]/90 border border-purple-800/40 hover:border-pink-500/60 transition-all text-center group shadow-md h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 mx-auto flex items-center justify-center font-mono text-xs font-bold text-white mb-2 shadow-xs">
                      {idx + 1}
                    </div>
                    <h4 className="text-xs font-bold text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                  {idx < storyProgression.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 rtl:right-auto rtl:-left-2 top-1/2 -translate-y-1/2 z-10 text-purple-600">
                      {isRTL ? '←' : '→'}
                    </div>
                  )}
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStaggerContainer>
        </div>

      </div>
    </section>
  );
};

