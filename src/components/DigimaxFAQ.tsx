import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/digimaxData';
import { CinematicScrollReveal } from './AnimatedSection';

interface DigimaxFAQProps {
  onOpenDiscoverMore: () => void;
}

export const DigimaxFAQ: React.FC<DigimaxFAQProps> = ({ onOpenDiscoverMore }) => {
  // Default first question open matching the screenshot
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-[#090614] overflow-hidden">
      {/* Background Soft Glow */}
      <div 
        className="absolute bottom-10 left-1/3 w-[500px] h-[350px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline, Bio & Discover More Button */}
          <CinematicScrollReveal direction="left" delay={0.1} className="lg:col-span-5 space-y-5">
            
            {/* Tag: COMMON QUESTIONS */}
            <div className="inline-flex items-center gap-1.5">
              <span className="text-[11px] font-bold tracking-widest text-fuchsia-400 uppercase">
                COMMON QUESTIONS
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Most Popular Questions
            </h2>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md font-normal">
              Clear insights on financial modeling methodologies, international accounting standards, audit protocols, and executive advisory engagements.
            </p>

            {/* DISCOVER MORE Button */}
            <div className="pt-2">
              <motion.button
                type="button"
                onClick={onOpenDiscoverMore}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 text-white font-bold text-xs tracking-wider uppercase shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all cursor-pointer"
              >
                <span>DISCOVER MORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>

          </CinematicScrollReveal>

          {/* Right Column: Accordion Questions */}
          <CinematicScrollReveal direction="right" delay={0.2} className="lg:col-span-7 space-y-3.5">
            {FAQ_LIST.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#150f2c] border-purple-800/60 shadow-lg shadow-purple-950/30'
                      : 'bg-[#100b24]/80 hover:bg-[#130d2a] border-purple-950/60 hover:border-purple-800/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 select-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-[15px] font-semibold text-white leading-snug">
                      {item.question}
                    </span>
                    <span className="shrink-0 p-1 rounded-full text-slate-400">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-pink-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-purple-900/30">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </CinematicScrollReveal>

        </div>
      </div>
    </section>
  );
};
