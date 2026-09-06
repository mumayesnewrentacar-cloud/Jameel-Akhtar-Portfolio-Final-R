import React from 'react';
import { ArrowUp, Mail, Linkedin } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLocalization } from '../context/LocalizationContext';

interface FooterProps {
  onOpenCVModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCVModal }) => {
  const { t } = useLocalization();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800/80">
          
          {/* Identity */}
          <div className="text-center md:text-left rtl:md:text-right space-y-1">
            <div className="flex items-center justify-center md:justify-start rtl:md:justify-start gap-2">
              <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight">
                {CANDIDATE_PROFILE.name}
              </span>
              <span className="text-slate-400 dark:text-slate-600">|</span>
              <span className="text-pink-400 font-mono font-medium">
                {CANDIDATE_PROFILE.title}
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs max-w-md">
              Bridging statutory accounting accuracy, dynamic three-statement financial modeling, and commercial business decisions.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('nav.about')}</a>
            <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('nav.experience')}</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('nav.skills')}</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('nav.projects')}</a>
            <a href="#financial-models" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('nav.financialModels')}</a>
            <a href="#accounting" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('nav.accounting')}</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t('nav.contact')}</a>
            <button
              onClick={onOpenCVModal}
              className="text-pink-400 hover:text-pink-300 font-semibold transition-colors"
            >
              {t('nav.downloadCV')}
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500 dark:text-slate-400">
          <div>
            © 2026 {CANDIDATE_PROFILE.name}. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <LanguageToggle id="footer-language-toggle" className="py-1 px-2 text-xs" />
            <ThemeToggle id="footer-theme-toggle" className="py-1 px-2" />

            <a
              href={`mailto:${CANDIDATE_PROFILE.email}`}
              className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href={CANDIDATE_PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-pink-400 transition-colors flex items-center gap-1 p-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3 h-3" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

