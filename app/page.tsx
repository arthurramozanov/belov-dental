import { Header } from '@/components/sections/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { HighlightsSection } from '@/components/sections/HighlightsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { PricesSection } from '@/components/sections/PricesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BookingSection } from '@/components/sections/BookingSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ServicesSection />
        <HighlightsSection />
        <TeamSection />
        <PricesSection />
        <TestimonialsSection />
        <BookingSection />
      </main>
      <Footer />
    </>
  );
}
