import { FadeIn } from '@/components/shared/FadeIn';
import { PHILOSOPHY } from '@/lib/constants';

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="py-20 md:py-24 lg:py-28 bg-white"
    >
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-6">
            <FadeIn delay={0}>
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-ink-muted mb-6">
                {PHILOSOPHY.caption}
              </p>
            </FadeIn>
            <FadeIn delay={200}>
              <h2
                id="philosophy-heading"
                className="font-display text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] font-normal text-ink"
              >
                {PHILOSOPHY.h2}
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:mt-[60px] flex flex-col gap-8">
            {PHILOSOPHY.paragraphs.map((paragraph, index) => (
              <FadeIn key={index} delay={400 + index * 200}>
                <p className="text-[17px] lg:text-[19px] leading-[1.6] text-ink-muted">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
