import React from 'react';

interface LogoipsumProps {
  variant: number;
  className?: string;
}

export const LogoipsumLogo: React.FC<LogoipsumProps> = ({ variant, className = 'h-7 sm:h-8' }) => {
  // Render distinct Logoipsum brand marks matching the screenshot
  const renderIcon = () => {
    switch (variant) {
      case 1:
        // 4 dots block
        return (
          <svg className={className} viewBox="0 0 160 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="8" width="8" height="8" rx="4" fill="currentColor" />
            <rect x="12" y="8" width="8" height="8" rx="4" fill="currentColor" />
            <rect x="0" y="20" width="8" height="8" rx="4" fill="currentColor" />
            <rect x="12" y="20" width="8" height="8" rx="4" fill="currentColor" />
            <text x="32" y="26" fill="currentColor" fontFamily="sans-serif" fontSize="16" fontWeight="bold" letterSpacing="-0.5">logoipsum</text>
          </svg>
        );
      case 2:
        // Isometric folded squares
        return (
          <svg className={className} viewBox="0 0 160 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10L12 3L24 10L12 17L0 10Z" fill="currentColor" fillOpacity="0.8" />
            <path d="M0 24L12 17L24 24L12 31L0 24Z" fill="currentColor" />
            <text x="34" y="26" fill="currentColor" fontFamily="sans-serif" fontSize="16" fontWeight="bold" letterSpacing="-0.5">logoipsum</text>
          </svg>
        );
      case 3:
        // Orbital loop circle
        return (
          <svg className={className} viewBox="0 0 160 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="18" r="10" stroke="currentColor" strokeWidth="3" />
            <path d="M7 13L17 23M17 13L7 23" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <text x="32" y="26" fill="currentColor" fontFamily="sans-serif" fontSize="16" fontWeight="bold" letterSpacing="-0.5">logoipsum</text>
          </svg>
        );
      case 4:
        // Dual rounded brackets / card
        return (
          <svg className={className} viewBox="0 0 160 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="7" width="18" height="22" rx="4" stroke="currentColor" strokeWidth="3" />
            <rect x="8" y="13" width="16" height="16" rx="3" fill="currentColor" />
            <text x="36" y="26" fill="currentColor" fontFamily="sans-serif" fontSize="16" fontWeight="bold" letterSpacing="-0.5">logoipsum*</text>
          </svg>
        );
      case 5:
        // Modern flower/leaves knot
        return (
          <svg className={className} viewBox="0 0 160 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="12" r="5" fill="currentColor" />
            <circle cx="18" cy="12" r="5" fill="currentColor" />
            <circle cx="12" cy="24" r="5" fill="currentColor" />
            <circle cx="20" cy="24" r="4" fill="currentColor" fillOpacity="0.7" />
            <text x="34" y="26" fill="currentColor" fontFamily="sans-serif" fontSize="16" fontWeight="bold" letterSpacing="-0.5">logoipsum*</text>
          </svg>
        );
      case 6:
        // Compass ring / target
        return (
          <svg className={className} viewBox="0 0 160 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="18" r="10" stroke="currentColor" strokeWidth="2.5" />
            <circle cx="12" cy="18" r="4" fill="currentColor" />
            <text x="32" y="26" fill="currentColor" fontFamily="sans-serif" fontSize="16" fontWeight="bold" letterSpacing="-0.5">logoipsum</text>
          </svg>
        );
      case 7:
        // Audio wave / equalizer bars
        return (
          <svg className={className} viewBox="0 0 160 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="14" width="3" height="10" rx="1.5" fill="currentColor" />
            <rect x="5" y="9" width="3" height="20" rx="1.5" fill="currentColor" />
            <rect x="10" y="5" width="3" height="27" rx="1.5" fill="currentColor" />
            <rect x="15" y="11" width="3" height="16" rx="1.5" fill="currentColor" />
            <rect x="20" y="16" width="3" height="7" rx="1.5" fill="currentColor" />
            <text x="32" y="26" fill="currentColor" fontFamily="sans-serif" fontSize="15" fontWeight="bold" letterSpacing="1">LOGOIPSUM</text>
          </svg>
        );
      case 8:
      default:
        // Pin & globe symbol
        return (
          <svg className={className} viewBox="0 0 160 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6C7 6 4 9 4 13C4 18 11 25 11 25C11 25 18 18 18 13C18 9 15 6 11 6Z" stroke="currentColor" strokeWidth="2" />
            <circle cx="11" cy="13" r="2.5" fill="currentColor" />
            <text x="30" y="26" fill="currentColor" fontFamily="sans-serif" fontSize="15" fontWeight="bold" letterSpacing="0.5">LOGOIPSUM</text>
          </svg>
        );
    }
  };

  return (
    <div className="flex items-center text-slate-400 hover:text-slate-100 transition-colors duration-200 opacity-75 hover:opacity-100">
      {renderIcon()}
    </div>
  );
};
