import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Translations, TRANSLATIONS } from '../data/translations';

interface LocalizationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof Translations, fallback?: string) => string;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'portfolio_language';

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedLang = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (savedLang === 'en' || savedLang === 'ar') {
          return savedLang;
        }
      } catch (e) {
        console.warn('Unable to read language from localStorage:', e);
      }
    }
    return 'en';
  });

  const dir: 'ltr' | 'rtl' = language === 'ar' ? 'rtl' : 'ltr';
  const isRTL = language === 'ar';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.setAttribute('lang', language);
      root.setAttribute('dir', dir);
      if (isRTL) {
        root.classList.add('rtl-layout');
      } else {
        root.classList.remove('rtl-layout');
      }

      // Update document title based on language
      if (language === 'ar') {
        document.title = 'جميل أختر | محاسب ومحلل مالي - دبي';
      } else {
        document.title = 'Jameel Akhtar | Accountant & Financial Analyst';
      }
    }

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch (e) {
      console.warn('Unable to persist language to localStorage:', e);
    }
  }, [language, dir, isRTL]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: keyof Translations, fallback?: string): string => {
    const currentDict = TRANSLATIONS[language];
    if (currentDict && currentDict[key]) {
      return currentDict[key];
    }
    // Fallback to English if key missing in current language
    if (TRANSLATIONS.en && TRANSLATIONS.en[key]) {
      return TRANSLATIONS.en[key];
    }
    return fallback || String(key);
  };

  return (
    <LocalizationContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        dir,
        isRTL,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};

// Convenient alias
export const useLanguage = useLocalization;
