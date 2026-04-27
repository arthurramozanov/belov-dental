'use client';

import { useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { FadeIn } from '@/components/shared/FadeIn';
import { TestimonialSlide } from '@/components/sections/TestimonialSlide';
import { TESTIMONIALS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      id="testimonials"
      className="py-20 md:py-24 lg:py-28 bg-cream"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12">
        <FadeIn delay={0}>
          <p className="text-xs font-medium tracking-[0.12em] uppercase text-ink-muted mb-6">
            ОТЗЫВЫ
          </p>
        </FadeIn>
        <FadeIn delay={150}>
          <h2
            id="testimonials-heading"
            className="font-display text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] font-normal text-ink max-w-2xl"
          >
            Нас выбирают по рекомендации
          </h2>
        </FadeIn>

        <div className="mt-16 md:mt-20">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              Autoplay({ delay: 6000, stopOnInteraction: false }),
              Fade(),
            ]}
            setApi={setApi}
            aria-label="Отзывы пациентов"
          >
            <CarouselContent className="-ml-0">
              {TESTIMONIALS.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-0">
                  <TestimonialSlide testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div
            className="flex items-center justify-center gap-2 mt-10"
            role="tablist"
            aria-label="Навигация по отзывам"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <button
                key={testimonial.id}
                role="tab"
                aria-selected={current === index}
                aria-label={`Отзыв ${index + 1}: ${testimonial.name}`}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-forest',
                  current === index ? 'w-8 bg-forest' : 'w-1.5 bg-sand hover:bg-ink-muted'
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
