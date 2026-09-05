import React from 'react';
import { motion, type Variants } from 'motion/react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
  threshold?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = 'w-full',
  delay,
  index = 0,
}) => {
  // Respect user preference for reduced motion
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Staggered reveal based on index
  const sectionDelay = delay !== undefined ? delay : Math.min(index * 0.06, 0.2);

  if (prefersReduced) {
    return <section className={className}>{children}</section>;
  }

  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px 0px' }}
      transition={{
        duration: 0.55,
        delay: sectionDelay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.section>
  );
};

// Reusable child item variant helper for staggered child elements inside sections
export const animatedChildVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
