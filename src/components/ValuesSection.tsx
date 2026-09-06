import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, TrendingUp, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import { useLocalization } from '../context/LocalizationContext';
import { CINEMATIC_EASE } from './AnimatedSection';

export const ValuesSection: React.FC = () => {
  const { t } = useLocalization();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5 text-pink-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-fuchsia-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5 text-pink-400" />;
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
    <section id="values" className="relative py-20 sm:py-24 bg-[#090614] text-slate-100 overflow-hidden">
      {/* Background ambient light */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: CINEMATIC_EASE }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 shadow-inner">
            <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
            <span className="text-[11px] font-mono tracking-widest text-fuchsia-300 font-bold uppercase">
              07 // {t('values.tag')}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            {t('values.title')}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t('values.subtitle')}
          </p>
        </motion.div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesData.map((val, idx) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: CINEMATIC_EASE }}
              whileHover={{ y: -6 }}
              className="relative p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#1b1238]/90 via-[#140e2b]/95 to-[#0f0a20] border border-purple-800/40 hover:border-pink-500/40 transition-all flex flex-col justify-between group shadow-xl shadow-purple-950/40 overflow-hidden"
            >
              {/* Optical Corner Reticles */}
              <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
                <span className="absolute top-2.5 left-2.5 w-2 h-2 border-t-2 border-l-2 border-pink-500/40" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 border-t-2 border-r-2 border-pink-500/40" />
                <span className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b-2 border-l-2 border-pink-500/40" />
                <span className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b-2 border-r-2 border-pink-500/40" />
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-950/80 border border-purple-800/60 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-pink-500/50 transition-all shadow-md">
                  {getIcon(val.icon)}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {val.title}
                </h3>

                <div className="mt-1 text-xs font-mono text-fuchsia-300 font-semibold">
                  {val.tagline}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-purple-900/40 flex items-center text-[11px] font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-pink-500 mr-2 rtl:mr-0 rtl:ml-2 animate-pulse" />
                <span>{t('values.standard')}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
