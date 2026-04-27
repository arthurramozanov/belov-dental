'use client';

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

export function HeaderScrollBorder() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        'absolute bottom-0 left-0 right-0 h-px bg-sand transition-opacity duration-300',
        isScrolled ? 'opacity-100' : 'opacity-0'
      )}
    />
  );
}
