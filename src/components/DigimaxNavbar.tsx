import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, FileText, ArrowRight } from 'lucide-react';
import { DigimaxBrandLogo } from './DigimaxBrandLogo';
import { NAV_LINKS } from '../data/digimaxData';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { useLocalization } from '../context/LocalizationContext';

interface DigimaxNavbarProps {
  onOpenCVModal: () => void;
  onOpenGetStarted?: () => void;
}

export const DigimaxNavbar: React.FC<DigimaxNavbarProps> = ({ 
  onOpenCVModal,
  onOpenGetStarted 
}) => {
  const { t } = useLocalization();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#090614]/92 backdrop-blur-xl border-b border-purple-900/50 shadow-xl shadow-purple-950/40 py-3' 
          : 'bg-[#090614]/70 backdrop-blur-md border-b border-purple-900/20 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo with Jameel Akhtar signature and dual-pill mark */}
          <DigimaxBrandLogo size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13.5px] font-medium text-slate-300">
            {NAV_LINKS.map((link) => {
              if (link.hasDropdown) {
                const isOpen = activeDropdown === link.label;
                return (
                  <div 
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-1.5 py-2 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{link.label}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-pink-400' : 'text-slate-400'}`} />
                    </a>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isOpen && link.subItems && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-1 w-64 p-2 rounded-xl bg-[#140f2b] border border-purple-800/50 shadow-2xl shadow-purple-950/70 backdrop-blur-2xl z-50"
                        >
                          {link.subItems.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-purple-900/30 transition-colors"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-2 text-slate-300 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Tools & CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language & Theme Controls */}
            <LanguageToggle />
            <ThemeToggle />

            {/* Radiant CTA Button */}
            <motion.button
              type="button"
              onClick={onOpenCVModal}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative group px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 text-white font-semibold text-xs tracking-wider uppercase shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all cursor-pointer overflow-hidden flex items-center gap-2"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <FileText className="w-3.5 h-3.5 text-white" />
              <span className="relative z-10 font-bold tracking-wider">
                DOWNLOAD CV
              </span>
            </motion.button>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-purple-950/40 border border-purple-800/40"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0e0920] border-b border-purple-900/60 px-4 pt-3 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="py-1">
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-pink-300 hover:bg-purple-900/20"
                  >
                    {link.label}
                  </a>
                  {link.subItems && (
                    <div className="pl-4 space-y-1 mt-1 border-l border-purple-900/40 ml-3">
                      {link.subItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-purple-900/40 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="w-full py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-400 text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>DOWNLOAD CV</span>
              </button>

              {onOpenGetStarted && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGetStarted();
                  }}
                  className="w-full py-2.5 rounded-full bg-purple-900/30 border border-purple-700/50 text-slate-200 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
                >
                  <span>SCHEDULE CONSULTATION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
