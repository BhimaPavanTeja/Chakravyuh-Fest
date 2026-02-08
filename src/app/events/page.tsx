import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import EventsSection from '@/components/sections/events';
import { AnimatedSection } from '@/components/animated-section';

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-24 md:py-32">
        <AnimatedSection>
          <EventsSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
