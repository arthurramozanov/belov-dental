import {
  Sparkles,
  Anchor,
  Layers,
  AlignCenter,
  Droplets,
  Heart,
  ArrowRight,
  type LucideProps,
} from 'lucide-react';

import type { Service } from '@/lib/constants';

const ICONS: Record<string, React.ComponentType<LucideProps>> = {
  Sparkles,
  Anchor,
  Layers,
  AlignCenter,
  Droplets,
  Heart,
};

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ICONS[service.icon];

  return (
    <div className="group bg-white border border-sand rounded-2xl p-8 flex flex-col transition-all duration-200 ease-out hover:border-forest hover:-translate-y-0.5">
      <Icon
        size={32}
        strokeWidth={1.5}
        className="text-forest mb-6 shrink-0"
      />
      <h3 className="font-display text-2xl font-medium text-ink mb-3">
        {service.title}
      </h3>
      <p className="font-sans text-base text-ink-muted leading-relaxed mb-6 flex-1">
        {service.description}
      </p>
      <span className="inline-flex items-center gap-1.5 font-sans text-sm text-forest">
        Подробнее
        <ArrowRight size={14} strokeWidth={1.5} />
      </span>
    </div>
  );
}
