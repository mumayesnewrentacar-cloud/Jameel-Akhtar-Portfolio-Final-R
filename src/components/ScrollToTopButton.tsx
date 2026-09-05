import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ScrollToTopButtonProps {
  threshold?: number;
}

export const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ threshold = 350 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsVisible(currentScrollY > threshold);

          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight > 0) {
            const progress = Math.min(Math.max((currentScrollY / docHeight) * 100, 0), 100);
            setScrollProgress(progress);
          } else {
            setScrollProgress(0);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  // Circular progress dimensions (radius 18, circumference 2 * PI * 18 = 113.1)
  const radius = 19;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40"
        >
          <button
            id="back-to-top-btn"
            type="button"
            onClick={scrollToTop}
            aria-label="Return to top of page"
            title="Return to top"
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-200 border border-slate-200/90 dark:border-slate-800 backdrop-blur-md shadow-lg shadow-slate-900/10 dark:shadow-black/40 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-emerald-500/15 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-slate-900 transition-all duration-200 cursor-pointer"
          >
            {/* SVG Circular Scroll Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
              viewBox="0 0 44 44"
              aria-hidden="true"
            >
              {/* Background track */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-slate-200/60 dark:stroke-slate-800/80"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Active progress stroke */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-emerald-500 transition-[stroke-dashoffset] duration-150 ease-out"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>

            {/* Upward Arrow Icon */}
            <ArrowUp className="w-5 h-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-active:translate-y-0" />

            {/* Hover Tooltip (Desktop) */}
            <span
              className="absolute right-full mr-3 px-2.5 py-1 rounded-md text-xs font-medium text-white bg-slate-900/95 dark:bg-slate-800 border border-slate-800 dark:border-slate-700 shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 hidden sm:block"
              role="tooltip"
            >
              Back to top
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
