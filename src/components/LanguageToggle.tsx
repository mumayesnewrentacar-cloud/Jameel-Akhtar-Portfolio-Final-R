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
      className={`inline-flex items-center rounded-lg p-0.5 bg-[#150f2e] border border-purple-800/60 shadow-xs transition-colors ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <div className="flex items-center pl-1.5 pr-1 text-pink-400">
        <Globe className="w-3.5 h-3.5" aria-hidden="true" />
      </div>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-xs font-medium rounded-md transition-all duration-150 cursor-pointer ${
          language === 'en'
            ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-xs font-semibold'
            : 'text-purple-300 hover:text-white hover:bg-white/5'
        }`}
        aria-pressed={language === 'en'}
        aria-label="English"
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage('ar')}
        className={`px-2 py-1 text-xs font-medium rounded-md transition-all duration-150 font-sans cursor-pointer ${
          language === 'ar'
            ? 'bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white shadow-xs font-semibold'
            : 'text-purple-300 hover:text-white hover:bg-white/5'
        }`}
        aria-pressed={language === 'ar'}
        aria-label="العربية"
      >
        العربية
      </button>

      {showLabel && (
        <span className="text-xs text-purple-300 px-1 font-mono">
          {isRTL ? 'العربية' : 'English'}
        </span>
      )}
    </div>
  );
};
