import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export const CinematicThemeCrossfade: React.FC = () => {
  const { theme, isTransitioning } = useTheme();
  const isInitialMount = useRef(true);
  const [transitionKey, setTransitionKey] = useState<number>(0);
  const [prevTheme, setPrevTheme] = useState<string>(theme);

  useEffect(() => {
    // Avoid triggering cinematic cross-fade on initial page load
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (theme !== prevTheme) {
      setPrevTheme(theme);
      setTransitionKey(prev => prev + 1);
    }
  }, [theme, prevTheme]);

  // Check user motion preferences
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return null;
  }

  const isSwitchingToDark = theme === 'dark';

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" 
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key={`crossfade-${transitionKey}-${theme}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {/* Cinematic Exposure Bloom / Vignette Dissolve */}
            {isSwitchingToDark ? (
              // Transition to Dark: Atmospheric Twilight Vignette & Soft Indigo Shadow Bloom
              <div className="absolute inset-0 bg-gradient-radial from-slate-950/0 via-slate-950/20 to-slate-950/40 backdrop-blur-[1px]" />
            ) : (
              // Transition to Light: Radiant Daylight Dispersion & Soft Fuchsia/Pink Glow
              <div className="absolute inset-0 bg-gradient-radial from-pink-500/10 via-fuchsia-500/5 to-purple-950/20 backdrop-blur-[1px]" />
            )}

            {/* Cinematic Horizontal Anamorphic Laser Flare */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1.2, 1.5], opacity: [0, 0.8, 0] }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent origin-center"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
