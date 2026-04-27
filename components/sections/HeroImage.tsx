'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

import { HERO } from '@/lib/constants';

export function HeroImage() {
  const { scrollY } = useScroll();
  // Лёгкий parallax: при скролле 600px изображение смещается на -30px вверх
  const y = useTransform(scrollY, [0, 600], [0, -30]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{ y }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative w-full aspect-[16/10] lg:aspect-[4/5] rounded-3xl overflow-hidden"
    >
      <Image
        src={HERO.imageSrc}
        alt={HERO.imageAlt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 42vw"
        className="object-cover"
      />
    </motion.div>
  );
}
