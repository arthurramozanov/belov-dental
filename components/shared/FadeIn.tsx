'use client';

import { motion } from 'framer-motion';

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  as?: keyof typeof motion;
  className?: string;
};

export function FadeIn({ children, delay = 0, as = 'div', className }: FadeInProps) {
  const Component = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <Component
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: delay / 1000 }}
      className={className}
    >
      {children}
    </Component>
  );
}
