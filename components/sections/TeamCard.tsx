import Image from 'next/image';

import type { TeamMember } from '@/lib/constants';

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
        <Image
          src={member.photoSrc}
          alt={member.photoAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-6">
        <h3 className="font-display text-[22px] leading-[1.2] font-normal text-ink group-hover:underline underline-offset-4 decoration-1">
          {member.name}
        </h3>
        <p className="text-xs font-medium tracking-[0.12em] uppercase text-ink-muted mt-1">
          {member.specialty}
        </p>
        <p className="text-[15px] leading-[1.6] text-ink-muted mt-3">
          {member.bio}
        </p>
        <p className="mt-4 text-sm font-medium text-ink">
          Опыт:{' '}
          <span className="text-gold font-semibold">{member.experience} лет</span>
        </p>
      </div>
    </article>
  );
}
