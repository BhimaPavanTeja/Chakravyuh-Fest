import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import EventsSection from '@/components/sections/events';
import SponsorsSection from '@/components/sections/sponsors';
import TestimonialsSection from '@/components/sections/testimonials';
import CtaSection from '@/components/sections/cta';
import { AnimatedSection } from '@/components/animated-section';
import GallerySection from '@/components/sections/gallery';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        
        <div className="space-y-24 md:space-y-32 my-24 md:my-32">
          <AnimatedSection id="about">
            <AboutSection />
          </AnimatedSection>

          <AnimatedSection id="gallery">
            <GallerySection />
          </AnimatedSection>

          <AnimatedSection id="events">
            <EventsSection />
          </AnimatedSection>

          <AnimatedSection id="sponsors">
            <SponsorsSection />
          </AnimatedSection>

          <AnimatedSection id="testimonials">
            <TestimonialsSection />
          </AnimatedSection>
        </div>

        <div className="bg-primary/10">
          <AnimatedSection id="cta" className="py-20 text-center">
            <CtaSection />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
