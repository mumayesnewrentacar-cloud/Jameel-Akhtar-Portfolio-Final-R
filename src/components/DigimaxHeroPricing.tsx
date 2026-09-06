import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS, PricingPlan } from '../data/digimaxData';
import { CINEMATIC_EASE } from './AnimatedSection';

interface DigimaxHeroPricingProps {
  onSelectPlan: (plan: PricingPlan, billingCycle: 'monthly' | 'annual') => void;
}

export const DigimaxHeroPricing: React.FC<DigimaxHeroPricingProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#090614]">
      {/* Cinematic Ambient Glow Orbs */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-fuchsia-600/15 via-purple-600/10 to-transparent rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-pink-600/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle Matrix / Dot Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d946ef_0.8px,transparent_0.8px)] [background-size:28px_28px] opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: CINEMATIC_EASE }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          
          {/* Pill Badge: PRICING PLAN */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 shadow-inner">
            <span className="text-[11px] font-bold tracking-widest text-fuchsia-400 uppercase">
              PRICING PLAN
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Predictable Pricing. No Surprises.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-normal">
            Great value at an affordable rate. No hidden costs. No frills.
          </p>

          {/* Interactive Billing Toggle (Monthly / Annual) */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex items-center p-1 rounded-full bg-[#150f2e] border border-purple-900/60 shadow-lg relative">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors z-10 ${
                  billingCycle === 'monthly' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {billingCycle === 'monthly' && (
                  <motion.span
                    layoutId="billingCyclePill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 shadow-md shadow-pink-500/30 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                Monthly Billing
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-colors z-10 flex items-center gap-1.5 ${
                  billingCycle === 'annual' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {billingCycle === 'annual' && (
                  <motion.span
                    layoutId="billingCyclePill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 shadow-md shadow-pink-500/30 -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span>Annual Billing</span>
                <span className="px-1.5 py-0.5 rounded-full bg-pink-500/25 text-pink-200 text-[10px] font-bold border border-pink-500/40">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>

        </motion.div>

        {/* 3-Column Pricing Cards Grid with Cinematic Stagger */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {PRICING_PLANS.map((plan, index) => {
            const isAnnual = billingCycle === 'annual';
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.12, ease: CINEMATIC_EASE }}
                whileHover={{ y: -6 }}
                className={`relative flex flex-col rounded-3xl p-7 sm:p-8 transition-all duration-300 group overflow-hidden ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#1b1238] via-[#140e2b] to-[#100b22] border-2 border-fuchsia-500/60 shadow-2xl shadow-fuchsia-950/60'
                    : 'bg-gradient-to-b from-[#150f2c] via-[#110c24] to-[#0e091e] border border-purple-900/40 hover:border-purple-700/50 shadow-xl shadow-purple-950/30'
                }`}
              >
                {/* 4 Precision Corner Frame Reticles */}
                <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
                  <span className="absolute top-3 left-3 w-2.5 h-2.5 border-t-2 border-l-2 border-purple-400/40 group-hover:border-pink-400/80 transition-colors" />
                  <span className="absolute top-3 right-3 w-2.5 h-2.5 border-t-2 border-r-2 border-purple-400/40 group-hover:border-pink-400/80 transition-colors" />
                  <span className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b-2 border-l-2 border-purple-400/40 group-hover:border-pink-400/80 transition-colors" />
                  <span className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b-2 border-r-2 border-purple-400/40 group-hover:border-pink-400/80 transition-colors" />
                </div>

                {/* Top Subtle Laser Rim */}
                <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent" />

                {/* Most Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase text-white bg-gradient-to-r from-fuchsia-600 to-pink-500 shadow-md shadow-fuchsia-600/40">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Title & Subtitle */}
                <div className="pr-16">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {plan.name}
                  </h3>
                </div>

                <p className="mt-3 text-xs sm:text-[13px] text-slate-400 leading-relaxed min-h-[40px]">
                  {plan.subtitle}
                </p>

                {/* Price Display */}
                <div className="mt-6 pb-6 border-b border-purple-900/40 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    ${price}
                  </span>
                  <span className="text-xs font-bold font-mono tracking-wider text-slate-400 uppercase">
                    {isAnnual ? '/MONTH (ANNUAL)' : '/MONTHLY'}
                  </span>
                </div>

                {/* Includes Features List */}
                <div className="mt-6 flex-1">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
                    {plan.includesLabel}
                  </h4>

                  <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-300">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <span className="mt-0.5 shrink-0 flex items-center justify-center w-4 h-4 rounded-full border border-purple-400/50 text-purple-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Purchase Order CTA Button */}
                <div className="mt-8 pt-4">
                  <motion.button
                    type="button"
                    onClick={() => onSelectPlan(plan, billingCycle)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all cursor-pointer text-center group/btn relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>{plan.ctaLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>

                  {/* Footnote */}
                  <p className="mt-3.5 text-[10px] text-slate-500 dark:text-slate-400 italic text-center leading-normal">
                    {plan.footnote}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
