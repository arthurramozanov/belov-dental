'use client';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { HERO } from '@/lib/constants';

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

export function HeroContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6 lg:gap-8"
    >
      <motion.p
        variants={itemVariants}
        className="font-sans text-xs font-medium uppercase tracking-[0.14em] text-ink-muted"
      >
        {HERO.caption}
      </motion.p>

      <motion.h1
        id="hero-heading"
        variants={itemVariants}
        className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.08] text-ink"
      >
        {HERO.h1Line1}
        <br />
        <em className="italic">{HERO.h1Line2}</em>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="font-sans text-lg leading-relaxed text-ink-muted max-w-[520px]"
      >
        {HERO.subtitle}
      </motion.p>

      <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
        <a
          href="#booking"
          className={cn(
            'inline-flex items-center justify-center font-sans text-sm font-medium',
            'bg-forest text-white rounded-full px-8 py-4',
            'hover:bg-forest-dark transition-colors duration-200 focus-ring',
          )}
        >
          {HERO.ctaPrimary}
        </a>
        <a
          href="#team"
          className={cn(
            'inline-flex items-center justify-center font-sans text-sm font-medium',
            'border border-ink text-ink rounded-full px-8 py-4',
            'hover:bg-ink hover:text-white transition-colors duration-200 focus-ring',
          )}
        >
          {HERO.ctaSecondary}
        </a>
      </motion.div>

      <motion.p variants={itemVariants} className="font-sans text-sm text-ink-muted">
        {HERO.priceNote}
      </motion.p>
    </motion.div>
  );
}
