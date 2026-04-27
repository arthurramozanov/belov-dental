import { HeroContent } from './HeroContent';
import { HeroImage } from './HeroImage';

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="bg-cream"
    >
      <div className="max-w-container mx-auto px-6 md:px-8 lg:px-12 min-h-[88vh] grid lg:grid-cols-12 gap-8 items-center py-16">
        <div className="order-1 lg:col-span-7">
          <HeroContent />
        </div>
        <div className="order-2 lg:col-span-5">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
