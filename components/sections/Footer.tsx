import { Send, Camera, Share2, Phone, MapPin, Mail, Clock } from 'lucide-react';

import { SERVICES, PHONE, PHONE_HREF, ADDRESS, EMAIL, HOURS } from '@/lib/constants';

const CLINIC_LINKS = [
  { label: 'О докторе', href: '#philosophy' },
  { label: 'Команда', href: '#team' },
  { label: 'Цены', href: '#prices' },
  { label: 'Отзывы', href: '#testimonials' },
];

const SOCIAL_LINKS = [
  { Icon: Send, label: 'Telegram' },
  { Icon: Camera, label: 'Instagram' },
  { Icon: Share2, label: 'VK' },
];

export function Footer() {
  return (
    <footer className="bg-ink py-20">
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-12">
        {/* Upper grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 — Brand */}
          <div>
            <p className="font-display text-xl text-white leading-snug">
              Стоматология им. Белова
            </p>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Авторская стоматология в Москве. С 2008 года.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {SOCIAL_LINKS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-white/50 hover:text-white transition-colors duration-200"
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-white/50">
              Услуги
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Clinic */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-white/50">
              Клиника
            </h4>
            <ul className="mt-4 flex flex-col gap-2">
              {CLINIC_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contacts */}
          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.1em] text-white/50">
              Контакты
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-start gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Phone size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-2 text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  <Mail size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Clock size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span className="leading-relaxed">{HOURS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-white/50">
            © 2026 Стоматология им. Белова. Лицензия №ЛО-77-01-019384.
          </p>
          <p className="text-xs text-white/50">
            Имеются противопоказания, необходима консультация специалиста.
          </p>
        </div>
      </div>
    </footer>
  );
}
