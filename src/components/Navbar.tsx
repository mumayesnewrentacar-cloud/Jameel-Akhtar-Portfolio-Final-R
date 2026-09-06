import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Shield } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLocalization } from '../context/LocalizationContext';

interface NavbarProps {
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCVModal }) => {
  const { t } = useLocalization();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { key: 'nav.home' as const, label: t('nav.home'), href: '#home' },
    { key: 'nav.about' as const, label: t('nav.about'), href: '#about' },
    { key: 'nav.experience' as const, label: t('nav.experience'), href: '#experience' },
    { key: 'nav.skills' as const, label: t('nav.skills'), href: '#skills' },
    { key: 'nav.projects' as const, label: t('nav.projects'), href: '#projects' },
    { key: 'nav.financialModels' as const, label: t('nav.financialModels'), href: '#financial-models' },
    { key: 'nav.accounting' as const, label: t('nav.accounting'), href: '#accounting' },
    { key: 'nav.education' as const, label: t('nav.education'), href: '#education' },
    { key: 'nav.contact' as const, label: t('nav.contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-sm py-2.5 sm:py-3'
          : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200/80 dark:border-slate-800/50 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-md p-1"
            aria-label={`${t('profile.name')} - ${t('profile.title')}`}
          >
            <div className="w-9 h-9 rounded-lg bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 font-mono font-bold text-sm tracking-wider group-hover:bg-pink-500/25 transition-colors">
              JA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-slate-900 dark:text-white font-semibold tracking-tight text-sm sm:text-base">
                  {t('profile.name')}
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-pink-500/10 text-pink-400 border border-pink-500/30">
                  <Shield className="w-2.5 h-2.5 mr-1 text-pink-400" />
                  {t('nav.verifiedFinance')}
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-xs tracking-tight">
                {t('profile.title')}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-pink-400 dark:text-white bg-pink-500/15 dark:bg-purple-950/60 border border-pink-500/40 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs, Language Toggle & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="#projects"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all"
            >
              <span>{t('nav.viewProjects')}</span>
            </a>

            <button
              onClick={onOpenCVModal}
              id="navbar-download-cv-btn"
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-600 hover:to-fuchsia-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t('nav.downloadCV')}</span>
            </button>

            {/* Language Selector */}
            <LanguageToggle id="navbar-language-toggle" />

            {/* Theme Toggle Button */}
            <ThemeToggle id="navbar-theme-toggle" />
          </div>

          {/* Mobile Menu Button & Mobile Toggles */}
          <div className="flex items-center gap-1.5 xl:hidden">
            <LanguageToggle id="navbar-mobile-lang-toggle" />
            <ThemeToggle id="navbar-mobile-theme-toggle" />
            <button
              onClick={onOpenCVModal}
              className="sm:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-medium text-white bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:opacity-90"
            >
              <FileText className="w-3 h-3" />
              <span>CV</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-[#1f1542] focus:outline-none focus:ring-2 focus:ring-pink-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden mt-3 pt-3 pb-3 border-t border-purple-900/50 bg-[#120d2b] rounded-b-xl animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-pink-500/15 text-pink-300 font-semibold'
                      : 'text-slate-300 hover:bg-[#1a133d] hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            {/* Mobile Actions, Language & Theme status */}
            <div className="flex flex-col gap-2 pt-2 border-t border-purple-900/50">
              <div className="flex items-center justify-between px-2 py-1.5 bg-[#171038] rounded-lg">
                <span className="text-xs font-medium text-slate-300">{t('nav.language')}</span>
                <LanguageToggle id="mobile-dropdown-lang-toggle" showLabel />
              </div>
              <div className="flex items-center justify-between px-2 py-1.5 bg-[#171038] rounded-lg">
                <span className="text-xs font-medium text-slate-300">{t('nav.theme')}</span>
                <ThemeToggle id="mobile-dropdown-theme-toggle" showLabel />
              </div>
              <div className="flex gap-2">
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center py-2 rounded-md text-xs font-medium text-slate-200 bg-[#1a133d] hover:bg-[#251b54]"
                >
                  {t('nav.viewProjects')}
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCVModal();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-md text-xs font-semibold text-white bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:opacity-95"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{t('nav.downloadCV')}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

