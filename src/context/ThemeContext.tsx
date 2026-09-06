import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isTransitioning: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'portfolio_theme';
const TRANSITION_DURATION = 450; // milliseconds

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const transitionTimerRef = useRef<number | null>(null);

  const [theme, setThemeState] = useState<Theme>(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    // Default to dark for financial terminal / executive aesthetic
    return 'dark';
  });

  // Helper to apply classes and CSS properties to DOM
  const applyThemeToDOM = useCallback((targetTheme: Theme) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.style.backgroundColor = '#090614';
    if (targetTheme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'dark';
    }
  }, []);

  // Update theme on mount & persist
  useEffect(() => {
    applyThemeToDOM(theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch (e) {
      console.warn('Unable to persist theme to localStorage:', e);
    }
  }, [theme, applyThemeToDOM]);

  // Smooth cinematic theme change executor
  const changeThemeWithTransition = useCallback((nextTheme: Theme) => {
    if (nextTheme === theme) return;

    if (transitionTimerRef.current) {
      window.clearTimeout(transitionTimerRef.current);
    }

    const root = document.documentElement;
    root.classList.add('theme-transitioning');
    setIsTransitioning(true);

    const prefersReducedMotion = 
      typeof window !== 'undefined' && 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const commitTheme = () => {
      setThemeState(nextTheme);
      applyThemeToDOM(nextTheme);
    };

    // Use native View Transitions API if supported and motion enabled
    if (!prefersReducedMotion && typeof document !== 'undefined' && 'startViewTransition' in document) {
      try {
        (document as any).startViewTransition(() => {
          commitTheme();
        });
      } catch {
        commitTheme();
      }
    } else {
      commitTheme();
    }

    // Clean up transitioning state after cross-fade duration
    transitionTimerRef.current = window.setTimeout(() => {
      root.classList.remove('theme-transitioning');
      setIsTransitioning(false);
      transitionTimerRef.current = null;
    }, TRANSITION_DURATION);
  }, [theme, applyThemeToDOM]);

  // Listen for system theme changes if user hasn't explicitly set a preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const hasSavedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      if (!hasSavedTheme) {
        changeThemeWithTransition(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, [changeThemeWithTransition]);

  const toggleTheme = useCallback(() => {
    changeThemeWithTransition(theme === 'dark' ? 'light' : 'dark');
  }, [theme, changeThemeWithTransition]);

  const setTheme = useCallback((newTheme: Theme) => {
    changeThemeWithTransition(newTheme);
  }, [changeThemeWithTransition]);

  return (
    <ThemeContext.Provider value={{ theme, isTransitioning, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
