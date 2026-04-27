import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

import { FadeIn } from '@/components/shared/FadeIn';
import { BookingForm } from '@/components/booking-form';
import { PHONE, PHONE_HREF, ADDRESS, METRO, HOURS } from '@/lib/constants';

export function BookingSection() {
  return (
    <section
      id="booking"
      aria-labelledby="booking-heading"
      className="py-20 md:py-24 lg:py-28 bg-white"
    >
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column — form */}
          <div className="lg:col-span-7">
            <FadeIn delay={0}>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-ink-muted mb-6">
                ЗАПИСЬ
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2
                id="booking-heading"
                className="font-display text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] font-normal text-ink max-w-xl mb-6"
              >
                Расскажите о задаче — мы свяжемся в течение часа
              </h2>
            </FadeIn>
            <FadeIn delay={180}>
              <p className="text-[17px] leading-[1.6] text-ink-muted mb-10 max-w-lg">
                Заполните форму — администратор перезвонит, уточнит удобное время и подберёт врача
                под вашу ситуацию. Если вы предпочитаете звонить — телефон ниже.
              </p>
            </FadeIn>
            <FadeIn delay={250}>
              <BookingForm />
            </FadeIn>
          </div>

          {/* Right column — contacts + map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeIn delay={200}>
              {/* Contact card */}
              <div className="bg-forest text-white rounded-2xl p-8 md:p-10">
                <h3 className="font-display text-[22px] md:text-[26px] leading-[1.2] font-normal mb-8">
                  Адрес и режим работы
                </h3>

                <ul className="flex flex-col gap-5">
                  <li className="flex gap-3">
                    <MapPin
                      className="mt-0.5 shrink-0 text-white/60"
                      size={18}
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="text-[15px] leading-[1.5]">{ADDRESS}</p>
                      <p className="text-[13px] text-white/60 mt-0.5">{METRO}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Clock
                      className="mt-0.5 shrink-0 text-white/60"
                      size={18}
                      strokeWidth={1.5}
                    />
                    <p className="text-[15px] leading-[1.6]">{HOURS}</p>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Phone className="shrink-0 text-white/60" size={18} strokeWidth={1.5} />
                    <a
                      href={PHONE_HREF}
                      className="font-display text-[26px] md:text-[28px] leading-none font-normal hover:text-white/80 transition-colors"
                    >
                      {PHONE}
                    </a>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <a
                    href="https://wa.me/74951204567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[15px] font-medium text-white/80 hover:text-white transition-colors"
                  >
                    <MessageCircle size={18} strokeWidth={1.5} />
                    Написать в WhatsApp
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* Map placeholder */}
            <FadeIn delay={280}>
              <a
                href="https://yandex.ru/maps/?text=Большой+Козихинский+переулок+22+Москва"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl border border-sand bg-cream h-36 md:h-44 text-ink-muted hover:border-forest hover:text-forest transition-colors duration-200 group"
                aria-label="Открыть адрес в Яндекс.Картах"
              >
                <MapPin
                  size={20}
                  strokeWidth={1.5}
                  className="group-hover:text-forest transition-colors"
                />
                <span className="text-[15px] font-medium">Открыть в Яндекс.Картах</span>
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
