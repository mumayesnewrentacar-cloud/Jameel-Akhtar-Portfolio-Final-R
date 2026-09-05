import React from 'react';
import { CheckCircle, TrendingUp, Zap, ShieldCheck } from 'lucide-react';
import { useLocalization } from '../context/LocalizationContext';

export const ValuesSection: React.FC = () => {
  const { t } = useLocalization();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
    }
  };

  const valuesData = [
    {
      id: 'accuracy',
      title: t('values.val1Title'),
      tagline: t('values.val1Tagline'),
      description: t('values.val1Desc'),
      icon: 'CheckCircle'
    },
    {
      id: 'analysis',
      title: t('values.val2Title'),
      tagline: t('values.val2Tagline'),
      description: t('values.val2Desc'),
      icon: 'TrendingUp'
    },
    {
      id: 'efficiency',
      title: t('values.val3Title'),
      tagline: t('values.val3Tagline'),
      description: t('values.val3Desc'),
      icon: 'Zap'
    },
    {
      id: 'decision-support',
      title: t('values.val4Title'),
      tagline: t('values.val4Tagline'),
      description: t('values.val4Desc'),
      icon: 'ShieldCheck'
    }
  ];

  return (
    <section className="py-16 bg-slate-100/70 dark:bg-slate-950 text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">
            <span>{t('values.tag')}</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('values.title')}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t('values.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((val) => (
            <div
              key={val.id}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(val.icon)}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  {val.title}
                </h3>
                <div className="mt-1 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-medium">
                  {val.tagline}
                </div>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 rtl:mr-0 rtl:ml-2" />
                <span>{t('values.standard')}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
