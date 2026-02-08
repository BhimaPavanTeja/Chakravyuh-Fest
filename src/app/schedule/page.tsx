import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ScheduleSection from '@/components/sections/schedule';
import { AnimatedSection } from '@/components/animated-section';

export default function SchedulePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-24 md:py-32">
        <AnimatedSection>
          <ScheduleSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
