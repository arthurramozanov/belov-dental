import { NAV_LINKS, PHONE, PHONE_HREF } from '@/lib/constants';

import { HeaderScrollBorder } from './HeaderScrollBorder';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="sticky top-0 z-50 h-20 bg-cream/80 backdrop-blur-md">
      <HeaderScrollBorder />
      <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between h-full">

        {/* Logo */}
        <a
          href="/"
          className="font-display text-base text-ink shrink-0 focus-ring"
        >
          Стоматология им. Белова
        </a>

        {/* Desktop nav — absolutely centered within the container */}
        <nav
          aria-label="Основная навигация"
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="font-sans text-sm text-ink hover:text-forest transition-colors duration-200 focus-ring"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right section: phone + CTA on desktop, burger on mobile/tablet */}
        <div className="flex items-center gap-4">
          <a
            href={PHONE_HREF}
            className="hidden lg:block font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-200 focus-ring"
          >
            {PHONE}
          </a>
          <a
            href="#booking"
            className="hidden lg:inline-flex font-sans text-sm font-medium tracking-[0.01em] text-white bg-forest rounded-full px-8 py-4 hover:bg-forest-dark hover:scale-[1.02] transition-all duration-200 focus-ring"
          >
            Записаться
          </a>
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>

      </div>
    </header>
  );
}
