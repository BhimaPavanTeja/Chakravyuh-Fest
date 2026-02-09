import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import BusRoutesSection from '@/components/sections/bus-routes';
import { AnimatedSection } from '@/components/animated-section';

export default function BusRoutesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-24 md:py-32">
        <AnimatedSection>
          <BusRoutesSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
