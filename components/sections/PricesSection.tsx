import { FadeIn } from '@/components/shared/FadeIn';
import { PriceCategoryBlock } from '@/components/sections/PriceCategory';
import { PricesDownloadButton } from '@/components/sections/PricesDownloadButton';
import { PRICES } from '@/lib/constants';

export function PricesSection() {
  return (
    <section
      id="prices"
      aria-labelledby="prices-heading"
      className="py-20 md:py-24 lg:py-28 bg-white"
    >
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-12">
        <FadeIn delay={0}>
          <p className="text-xs font-medium tracking-[0.12em] uppercase text-ink-muted mb-6">
            ЦЕНЫ
          </p>
        </FadeIn>
        <FadeIn delay={150}>
          <h2
            id="prices-heading"
            className="font-display text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] font-normal text-ink max-w-2xl"
          >
            Прозрачно. План лечения и итоговая сумма — до начала работы
          </h2>
        </FadeIn>

        <FadeIn delay={250}>
          <div className="bg-cream rounded-2xl border border-sand p-8 md:p-12 mt-16">
            <div className="flex flex-col gap-10 md:gap-12">
              {PRICES.map((category) => (
                <PriceCategoryBlock key={category.id} category={category} />
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex justify-center mt-12">
            <PricesDownloadButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
