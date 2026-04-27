'use client';

import Image from 'next/image';

import { type Testimonial } from '@/lib/constants';

type Props = { testimonial: Testimonial };

export function TestimonialSlide({ testimonial }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <div className="lg:col-span-7 flex flex-col">
        <svg
          className="w-10 h-7 text-gold mb-6 shrink-0"
          fill="currentColor"
          viewBox="0 0 45 30"
          aria-hidden="true"
        >
          <path d="M0 30V18.75C0 8.4375 6.5625 2.25 19.6875 0L21.5625 3.375C15.375 4.6875 12.0938 7.96875 11.7188 13.125H18.75V30H0ZM23.4375 30V18.75C23.4375 8.4375 30 2.25 43.125 0L45 3.375C38.8125 4.6875 35.5313 7.96875 35.1563 13.125H42.1875V30H23.4375Z" />
        </svg>

        <blockquote className="font-display italic text-2xl md:text-[28px] text-ink leading-[1.4] mb-8">
          {testimonial.quote}
        </blockquote>

        <footer>
          <p className="font-sans text-base font-medium text-ink">{testimonial.name}</p>
          <p className="font-sans text-sm text-ink-muted mt-1 uppercase tracking-[0.02em]">
            {testimonial.meta}
          </p>
        </footer>
      </div>

      <div className="lg:col-span-5">
        <div className="relative aspect-square rounded-2xl overflow-hidden max-w-sm mx-auto lg:max-w-none">
          <Image
            src={testimonial.photoSrc}
            alt={testimonial.photoAlt}
            fill
            sizes="(max-width: 1024px) 384px, 33vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
