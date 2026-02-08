import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import TeamSection from '@/components/sections/team';
import { AnimatedSection } from '@/components/animated-section';

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-24 md:py-32">
        <AnimatedSection>
          <TeamSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
