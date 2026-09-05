import React from 'react';
import { 
  CheckCircle2, 
  Award
} from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';
import { useLocalization } from '../context/LocalizationContext';

export const AboutSection: React.FC = () => {
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
    <section id="about" className="py-20 bg-white dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
            <span>{t('about.tag')}</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('about.title')}
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Narrative & Snapshot Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Detailed Professional Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              {t('about.narrative1')}
            </p>

            <p>
              {t('about.narrative2')}
            </p>

            <p>
              {t('about.narrative3')}
            </p>

            {/* Core Competencies Matrix */}
            <div className="pt-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-3">
                {t('about.competenciesTitle')}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {competenciesList.map((comp, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="truncate">{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Compact Professional Snapshot Panel */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 shadow-md dark:shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">{t('about.snapshotTitle')}</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {t('about.verifiedProfile')}
                </span>
              </div>

              {/* 4 Required Metric Panels */}
              <div className="space-y-3.5">
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/70 shadow-sm">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">{t('about.statExpTitle')}</div>
                  <div className="text-xl font-bold font-mono text-slate-900 dark:text-white mt-0.5">{t('about.statExpValue')}</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {t('about.statExpDesc')}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/70 shadow-sm">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">{t('about.statExpertiseTitle')}</div>
                  <div className="text-xl font-bold font-mono text-emerald-700 dark:text-emerald-400 mt-0.5">{t('about.statExpertiseValue')}</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {t('about.statExpertiseDesc')}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/70 shadow-sm">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">{t('about.statModelsTitle')}</div>
                  <div className="text-xl font-bold font-mono text-blue-700 dark:text-blue-400 mt-0.5">{t('about.statModelsValue')}</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {t('about.statModelsDesc')}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/70 shadow-sm">
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400">{t('about.statAnalyticsTitle')}</div>
                  <div className="text-xl font-bold font-mono text-slate-900 dark:text-white mt-0.5">{t('about.statAnalyticsValue')}</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {t('about.statAnalyticsDesc')}
                  </p>
                </div>
              </div>

              {/* Candidate Location & Contact Notice */}
              <div className="pt-2 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700/70 flex items-center justify-between">
                <span>{t('about.locationNotice')}</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-medium">{t('about.readyDeploy')}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Visual Storytelling Progression Banner */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800">
          <div className="text-center mb-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-emerald-700 dark:text-emerald-400 font-semibold">
              {t('about.valueArcTitle')}
            </h3>
            <p className="text-base font-semibold text-slate-900 dark:text-white mt-1">
              {t('about.valueArcSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {storyProgression.map((item, idx) => (
              <div
                key={idx}
                className="relative p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850/80 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 transition-all text-center group shadow-sm"
              >
                <div className="w-6 h-6 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mx-auto flex items-center justify-center font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-2 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {idx + 1}
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-snug">
                  {item.desc}
                </p>
                {idx < storyProgression.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 rtl:right-auto rtl:-left-2 top-1/2 -translate-y-1/2 z-10 text-slate-300 dark:text-slate-600">
                    {isRTL ? '←' : '→'}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

