import React from 'react';
import { motion } from 'motion/react';
import { LogoipsumLogo } from './LogoipsumIcons';
import { CINEMATIC_EASE } from './AnimatedSection';

export const DigimaxLogoCloud: React.FC = () => {
  const logos = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section id="trust-showcase" className="relative py-12 sm:py-16 bg-[#090614] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Luminous Framed Container matching screenshot with cinematic entrance */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px 0px' }}
          transition={{ duration: 0.7, ease: CINEMATIC_EASE }}
          className="relative rounded-3xl bg-gradient-to-b from-[#1b1238]/90 via-[#140e2b]/95 to-[#0f0a20] border border-purple-800/40 p-8 sm:p-12 shadow-2xl shadow-purple-950/40 overflow-hidden"
        >
          {/* 4 Optical Corner Framing Reticles */}
          <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
            <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-purple-400/50" />
            <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-purple-400/50" />
            <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-purple-400/50" />
            <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-purple-400/50" />
          </div>

          {/* Ambient Center Glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: CINEMATIC_EASE }}
            className="relative z-10 text-xl sm:text-2xl md:text-3xl font-bold text-white text-center tracking-tight max-w-2xl mx-auto leading-snug"
          >
            Trusted across UAE &amp; regional enterprises for financial precision and statutory compliance.
          </motion.h2>

          {/* 8 Logoipsum Brand Marks Grid (4x2 on desktop, 2x4 on mobile) with Staggered Entrance */}
          <div className="relative z-10 mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-y-8 sm:gap-y-10 gap-x-6 sm:gap-x-10 items-center justify-items-center">
            {logos.map((variant, idx) => (
              <motion.div 
                key={variant}
                initial={{ opacity: 0, scale: 0.9, y: 12 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + idx * 0.05, ease: CINEMATIC_EASE }}
                whileHover={{ scale: 1.05 }}
                className="w-full flex items-center justify-center p-2 rounded-xl transition-all duration-200 hover:bg-white/[0.03]"
              >
                <LogoipsumLogo variant={variant} className="h-6 sm:h-7" />
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
