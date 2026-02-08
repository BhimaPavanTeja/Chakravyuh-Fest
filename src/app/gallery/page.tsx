import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import GallerySection from '@/components/sections/gallery';
import { AnimatedSection } from '@/components/animated-section';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 py-24 md:py-32">
        <AnimatedSection>
          <GallerySection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
