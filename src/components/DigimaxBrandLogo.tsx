import React from 'react';

interface DigimaxBrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const DigimaxBrandLogo: React.FC<DigimaxBrandLogoProps> = ({ 
  className = '',
  size = 'md'
}) => {
  const iconSizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <a 
      href="#home" 
      className={`inline-flex items-center gap-3 group cursor-pointer select-none ${className}`}
      aria-label="Jameel Akhtar - Accountant & Financial Analyst"
    >
      {/* Signature Digimax geometric pill bars icon */}
      <div className={`relative flex items-end gap-1 ${iconSizeClasses[size]}`}>
        {/* Left shorter vertical pill */}
        <div className="w-2.5 h-[62%] rounded-full bg-gradient-to-t from-pink-500 to-rose-400 shadow-sm shadow-pink-500/50 group-hover:scale-105 transition-transform" />
        {/* Right taller vertical pill */}
        <div className="w-2.5 h-[100%] rounded-full bg-gradient-to-t from-fuchsia-600 via-pink-500 to-rose-400 shadow-md shadow-fuchsia-500/50 group-hover:scale-105 transition-transform" />
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <span className={`font-extrabold tracking-tight text-white group-hover:text-pink-100 transition-colors leading-tight ${textClasses[size]}`}>
          Jameel Akhtar
        </span>
        <span className="text-[10px] font-mono tracking-widest text-fuchsia-400/90 uppercase font-semibold leading-tight">
          Accountant & Financial Analyst
        </span>
      </div>
    </a>
  );
};
