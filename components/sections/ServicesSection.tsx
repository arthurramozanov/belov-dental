import { FadeIn } from '@/components/shared/FadeIn';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { SERVICES } from '@/lib/constants';

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-20 md:py-24 lg:py-28 bg-cream"
    >
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-12">
        <FadeIn delay={0}>
          <p className="text-xs font-medium tracking-[0.12em] uppercase text-ink-muted mb-6">
            УСЛУГИ
          </p>
        </FadeIn>
        <FadeIn delay={150}>
          <h2
            id="services-heading"
            className="font-display text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] font-normal text-ink max-w-2xl"
          >
            Полный цикл стоматологической помощи в одной клинике
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 80}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
