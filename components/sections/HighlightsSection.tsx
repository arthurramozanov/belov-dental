import { HIGHLIGHTS } from '@/lib/constants';
import { HighlightCard } from './HighlightCard';

export function HighlightsSection() {
  return (
    <section
      id="highlights"
      aria-label="Ключевые направления"
      className="bg-white py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-12">
        <div className="flex flex-col gap-24">
          {HIGHLIGHTS.map((highlight, index) => (
            <HighlightCard
              key={highlight.id}
              highlight={highlight}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
