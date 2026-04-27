import type { PriceCategory } from '@/lib/constants';

type PriceCategoryProps = {
  category: PriceCategory;
};

export function PriceCategoryBlock({ category }: PriceCategoryProps) {
  return (
    <div>
      <h3 className="font-display text-2xl leading-[1.2] font-normal text-ink mb-6">
        {category.title}
      </h3>
      <dl className="flex flex-col">
        {category.items.map((item, index) => (
          <div
            key={item.service}
            className={`flex justify-between items-baseline gap-4 py-3 ${
              index < category.items.length - 1 ? 'border-b border-dotted border-sand' : ''
            }`}
          >
            <dt className="font-sans text-base text-ink">{item.service}</dt>
            <dd className="font-sans text-base text-ink shrink-0">{item.price}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
