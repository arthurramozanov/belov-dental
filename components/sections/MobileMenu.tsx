'use client';

import { Menu } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_LINKS, PHONE, PHONE_HREF } from '@/lib/constants';

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Открыть меню"
          className="flex items-center justify-center w-11 h-11 text-ink hover:text-forest transition-colors focus-ring"
        >
          <Menu size={24} strokeWidth={1.5} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-cream border-l border-sand">
        <SheetTitle className="sr-only">Навигация</SheetTitle>
        <nav aria-label="Мобильная навигация" className="mt-12">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <SheetClose asChild>
                  <a
                    href={href}
                    className="block font-display text-2xl text-ink hover:text-forest py-3 transition-colors focus-ring"
                  >
                    {label}
                  </a>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8 pt-8 border-t border-sand flex flex-col gap-4">
          <a
            href={PHONE_HREF}
            className="font-sans text-sm text-ink-muted hover:text-ink transition-colors focus-ring"
          >
            {PHONE}
          </a>
          <SheetClose asChild>
            <a
              href="#booking"
              className="font-sans text-sm font-medium tracking-[0.01em] text-white bg-forest rounded-full px-8 py-4 text-center hover:bg-forest-dark transition-colors duration-200 focus-ring"
            >
              Записаться
            </a>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
