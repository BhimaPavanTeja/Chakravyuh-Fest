import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const GallerySection = () => {
  const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Moments from the Chakravyuh '25</h2>
      <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
        Relive the energy, the excitement, and the unforgettable moments from our previous fests.
      </p>
      
      <div className="columns-2 md:columns-3 gap-4 space-y-4">
        {galleryImages.map((image, index) => (
          <div key={image.id} className="break-inside-avoid">
            <Card className="overflow-hidden group shadow-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  data-ai-hint={image.imageHint}
                />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
