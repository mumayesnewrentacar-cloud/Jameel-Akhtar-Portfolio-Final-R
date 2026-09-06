import React from 'react';
import { DigimaxBrandLogo } from './DigimaxBrandLogo';
import { FOOTER_SECTIONS } from '../data/digimaxData';
import { CANDIDATE_PROFILE } from '../data/portfolioData';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Twitter,
  ArrowUp
} from 'lucide-react';

export const DigimaxFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070410] border-t border-purple-950/80 pt-16 pb-12 overflow-hidden text-slate-400 text-xs">
      
      {/* Top Ambient Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-purple-950/60">
          
          {/* Left Column: Brand & Social */}
          <div className="lg:col-span-4 space-y-4">
            <DigimaxBrandLogo size="md" />

            <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed max-w-sm">
              Transforming Ideas into Digital Excellence. Elevate your online presence with our innovative solutions and strategic digital services.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="DigiMax Facebook"
                className="w-8 h-8 rounded-full bg-[#181133] hover:bg-pink-600/80 border border-purple-800/40 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="DigiMax Instagram"
                className="w-8 h-8 rounded-full bg-[#181133] hover:bg-pink-600/80 border border-purple-800/40 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              <a
                href={CANDIDATE_PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${CANDIDATE_PROFILE.name} LinkedIn Profile`}
                className="w-8 h-8 rounded-full bg-[#181133] hover:bg-pink-600/80 border border-purple-800/40 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="DigiMax YouTube"
                className="w-8 h-8 rounded-full bg-[#181133] hover:bg-pink-600/80 border border-purple-800/40 text-slate-300 hover:text-white flex items-center justify-center transition-all"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Column 2: Services */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wide">
              Services
            </h3>
            <ul className="space-y-2.5">
              {(FOOTER_SECTIONS.services || []).map((item, idx) => {
                const label = typeof item === 'string' ? item : item.label;
                const href = typeof item === 'string' ? '#accounting' : item.href;
                return (
                  <li key={label || idx}>
                    <a href={href} className="hover:text-pink-300 transition-colors">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wide">
              Support
            </h3>
            <ul className="space-y-2.5">
              {(FOOTER_SECTIONS.support || []).map((item, idx) => {
                const label = typeof item === 'string' ? item : item.label;
                const href = typeof item === 'string' ? '#faq' : item.href;
                return (
                  <li key={label || idx}>
                    <a href={href} className="hover:text-pink-300 transition-colors">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-bold text-sm tracking-wide">
              Company
            </h3>
            <ul className="space-y-2.5">
              {(FOOTER_SECTIONS.company || []).map((item, idx) => {
                const label = typeof item === 'string' ? item : item.label;
                const href = typeof item === 'string' ? '#about' : item.href;
                return (
                  <li key={label || idx}>
                    <a href={href} className="hover:text-pink-300 transition-colors">
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            Copyright © {new Date().getFullYear()} Jameel Akhtar. All rights reserved. Professional Accountant & Financial Analyst.
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-slate-300 transition-colors">
              Terms & Compliance
            </a>
            <a href="#accounting" className="hover:text-slate-300 transition-colors">
              IFRS / GAAP Standards
            </a>
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              Dubai, UAE (UTC+4)
            </a>

            {/* Back to top mini button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-[#150f2b] border border-purple-900/60 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
