'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Highlight } from '@/lib/constants';

type HighlightCardProps = {
  highlight: Highlight;
  reversed: boolean;
};

export function HighlightCard({ highlight, reversed }: HighlightCardProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <motion.div
        className={cn(
          'relative aspect-[4/3] overflow-hidden rounded-3xl',
          reversed && 'lg:order-last'
        )}
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src={highlight.imageSrc}
          alt={highlight.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        className={cn('flex flex-col justify-center', reversed && 'lg:order-first')}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <h3 className="font-display text-4xl leading-tight text-ink">
          {highlight.title}
        </h3>
        <p className="mt-6 font-sans text-lg leading-relaxed text-ink-muted">
          {highlight.description}
        </p>
        <Link
          href={highlight.linkHref}
          className="mt-8 inline-flex items-center gap-2 font-sans text-sm text-forest transition-all hover:gap-3"
        >
          {highlight.linkLabel}
          <ArrowRight size={16} strokeWidth={1.5} />
        </Link>
      </motion.div>
    </div>
  );
}
