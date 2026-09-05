import React from 'react';
import { Globe } from 'lucide-react';
import { useLocalization } from '../context/LocalizationContext';

interface LanguageToggleProps {
  id?: string;
  className?: string;
  showLabel?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  id = 'language-toggle',
  className = '',
  showLabel = false,
}) => {
  const { language, setLanguage, isRTL } = useLocalization();

  return (
    <div
      id={id}
      className={`inline-flex items-center rounded-lg p-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <div className="flex items-center pl-1.5 pr-1 text-slate-400 dark:text-slate-500">
        <Globe className="w-3.5 h-3.5" aria-hidden="true" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-xs font-medium rounded-md transition-all duration-150 ${
          language === 'en'
            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-semibold'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        aria-pressed={language === 'en'}
        aria-label="English"
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage('ar')}
        className={`px-2 py-1 text-xs font-medium rounded-md transition-all duration-150 font-sans ${
          language === 'ar'
            ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-semibold'
            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
        aria-pressed={language === 'ar'}
        aria-label="العربية"
      >
        العربية
      </button>

      {showLabel && (
        <span className="text-xs text-slate-500 dark:text-slate-400 px-1 font-sans">
          {isRTL ? 'العربية' : 'English'}
        </span>
      )}
    </div>
  );
};
