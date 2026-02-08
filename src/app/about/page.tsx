import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AboutSection from '@/components/sections/about';
import { AnimatedSection } from '@/components/animated-section';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-24 md:py-32">
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
