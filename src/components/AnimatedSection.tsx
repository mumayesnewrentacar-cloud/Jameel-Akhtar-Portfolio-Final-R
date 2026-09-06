import React from 'react';
import { motion, type Variants } from 'motion/react';

// Cinematic cubic bezier easing curves
export const CINEMATIC_EASE = [0.22, 1, 0.36, 1] as const;
export const SPRING_TRANSITION = { type: 'spring', stiffness: 300, damping: 25 };

// Section Container Props
interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  index?: number;
  viewportMargin?: string;
  viewportAmount?: number | 'some' | 'all';
  variant?: 'fade-up' | 'fade-in' | 'scale-up' | 'none';
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = 'w-full',
  delay,
  index = 0,
  viewportMargin = '-60px 0px',
  viewportAmount = 0.1,
  variant = 'fade-up',
}) => {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const sectionDelay = delay !== undefined ? delay : Math.min(index * 0.05, 0.15);

  if (prefersReduced || variant === 'none') {
    return (
      <section id={id} className={className}>
        {children}
      </section>
    );
  }

  const initialVariant = {
    'fade-up': { opacity: 0, y: 28 },
    'fade-in': { opacity: 0 },
    'scale-up': { opacity: 0, scale: 0.97, y: 20 },
  }[variant];

  const animateVariant = {
    'fade-up': { opacity: 1, y: 0 },
    'fade-in': { opacity: 1 },
    'scale-up': { opacity: 1, scale: 1, y: 0 },
  }[variant];

  return (
    <motion.section
      id={id}
      className={className}
      initial={initialVariant}
      whileInView={animateVariant}
      viewport={{ once: true, margin: viewportMargin, amount: viewportAmount }}
      transition={{
        duration: 0.65,
        delay: sectionDelay,
        ease: CINEMATIC_EASE,
      }}
    >
      {children}
    </motion.section>
  );
};

// Section Header Entrance Component
interface AnimatedSectionHeaderProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  delay?: number;
}

export const AnimatedSectionHeader: React.FC<AnimatedSectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'left',
  className = 'max-w-3xl',
  delay = 0,
}) => {
  const alignClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px 0px' }}
      transition={{ duration: 0.6, delay, ease: CINEMATIC_EASE }}
      className={`${className} ${alignClass}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 8 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: delay + 0.05, ease: CINEMATIC_EASE }}
          className="mb-3 inline-block"
        >
          {badge}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: delay + 0.1, ease: CINEMATIC_EASE }}
        className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: delay + 0.18, ease: CINEMATIC_EASE }}
          className="mt-3 text-base text-slate-400 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

// Staggered Container for Grids and Sequences
interface AnimatedStaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  initialDelay?: number;
}

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerDelay?: number; initialDelay?: number } = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerDelay || 0.08,
      delayChildren: custom.initialDelay || 0.05,
    },
  }),
};

export const AnimatedStaggerContainer: React.FC<AnimatedStaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.08,
  initialDelay = 0.05,
}) => {
  return (
    <motion.div
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px 0px' }}
      custom={{ staggerDelay, initialDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Reusable Motion Item inside a Stagger Container
export const animatedChildVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: CINEMATIC_EASE,
    },
  },
};

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  whileHoverLift?: boolean;
}

export const AnimatedItem: React.FC<AnimatedItemProps> = ({
  children,
  className = '',
  whileHoverLift = false,
}) => {
  return (
    <motion.div
      variants={animatedChildVariants}
      whileHover={whileHoverLift ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Precision Cinematic Element Reveal
interface CinematicScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  scale?: number;
}

export const CinematicScrollReveal: React.FC<CinematicScrollRevealProps> = ({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  scale,
}) => {
  const directionOffset = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { x: 28, y: 0 },
    right: { x: -28, y: 0 },
    none: { x: 0, y: 0 },
  }[direction];

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset,
        ...(scale !== undefined ? { scale } : {}),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        ...(scale !== undefined ? { scale: 1 } : {}),
      }}
      viewport={{ once: true, margin: '-50px 0px' }}
      transition={{
        duration,
        delay,
        ease: CINEMATIC_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

