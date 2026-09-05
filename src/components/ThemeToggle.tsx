import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  id?: string;
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  id = 'theme-toggle-btn',
  className = '',
  showLabel = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      id={id}
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 p-2 sm:px-2.5 sm:py-1.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 select-none ${
        isDark
          ? 'bg-slate-800/90 hover:bg-slate-800 border-slate-700/80 text-slate-300 hover:text-white focus:ring-offset-slate-900 shadow-sm'
          : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 focus:ring-offset-white shadow-sm'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : 90,
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center text-amber-300"
        >
          <Moon className="w-4 h-4" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? -90 : 0,
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="absolute inset-0 flex items-center justify-center text-amber-500"
        >
          <Sun className="w-4 h-4" />
        </motion.div>
      </div>

      {showLabel && (
        <span className="text-xs font-medium tracking-tight font-sans">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
};
