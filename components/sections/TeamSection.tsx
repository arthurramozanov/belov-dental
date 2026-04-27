import { FadeIn } from '@/components/shared/FadeIn';
import { TeamCard } from '@/components/sections/TeamCard';
import { TEAM } from '@/lib/constants';

export function TeamSection() {
  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="py-20 md:py-24 lg:py-28 bg-cream"
    >
      <div className="mx-auto max-w-container px-6 md:px-8 lg:px-12">
        <FadeIn delay={0}>
          <p className="text-xs font-medium tracking-[0.12em] uppercase text-ink-muted mb-6">
            КОМАНДА
          </p>
        </FadeIn>
        <FadeIn delay={150}>
          <h2
            id="team-heading"
            className="font-display text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1] font-normal text-ink max-w-2xl"
          >
            Четыре врача, которые работают вместе уже больше десяти лет
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 lg:mt-20">
          {TEAM.map((member, index) => (
            <FadeIn key={member.id} delay={index * 100}>
              <TeamCard member={member} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
