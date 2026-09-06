import React, { useRef, useState, useCallback } from 'react';
import { motion } from 'motion/react';

interface CinematicSpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
  hasFrameBrackets?: boolean;
}

export const CinematicSpotlightCard: React.FC<CinematicSpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(16, 185, 129, 0.12)',
  borderColor = 'rgba(16, 185, 129, 0.4)',
  hasFrameBrackets = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePos({ x: -1000, y: -1000 });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`relative rounded-2xl overflow-hidden transition-colors duration-300 ${className}`}
      {...(props as any)}
    >
      {/* Precision Optical Corner Frame Reticles */}
      {hasFrameBrackets && (
        <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
          {/* Top Left */}
          <span className={`absolute top-1.5 left-1.5 w-2 h-2 border-t border-l transition-colors duration-300 ${
            isHovered ? 'border-pink-500 shadow-xs' : 'border-purple-800/40'
          }`} />
          {/* Top Right */}
          <span className={`absolute top-1.5 right-1.5 w-2 h-2 border-t border-r transition-colors duration-300 ${
            isHovered ? 'border-pink-500 shadow-xs' : 'border-purple-800/40'
          }`} />
          {/* Bottom Left */}
          <span className={`absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l transition-colors duration-300 ${
            isHovered ? 'border-pink-500 shadow-xs' : 'border-purple-800/40'
          }`} />
          {/* Bottom Right */}
          <span className={`absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r transition-colors duration-300 ${
            isHovered ? 'border-pink-500 shadow-xs' : 'border-purple-800/40'
          }`} />
        </div>
      )}

      {/* Dynamic Cursor Spotlight Surface Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Dynamic Cursor Spotlight Border Accent */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-20"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, ${borderColor}, transparent 70%)`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
        aria-hidden="true"
      />

      {/* Card Content Layer */}
      <div className="relative z-0 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};
