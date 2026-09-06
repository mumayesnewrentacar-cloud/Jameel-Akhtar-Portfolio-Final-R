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
            className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-[#120d26]/90 text-slate-200 border border-purple-800/60 backdrop-blur-md shadow-lg shadow-purple-950/40 hover:text-pink-400 hover:border-pink-500/50 hover:shadow-pink-500/20 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-200 cursor-pointer"
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
                className="stroke-purple-950/80"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Active progress stroke */}
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-pink-500 transition-[stroke-dashoffset] duration-150 ease-out"
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
              className="absolute right-full mr-3 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-purple-200 bg-[#150f2e] border border-purple-800/60 shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 hidden sm:block"
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
