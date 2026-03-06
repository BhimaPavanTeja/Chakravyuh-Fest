import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const SponsorsSection = () => {
  const sponsors = PlaceHolderImages.filter(p => p.id.startsWith('sponsor-'));

  return (
    <div className="text-center space-y-12">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Our Valued Sponsors</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          We are grateful for the support of our sponsors who help make Chakravyuh a grand success.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {sponsors.map(sponsor => (
          <Card key={sponsor.id} className="overflow-hidden bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 flex items-center justify-center min-h-[120px] md:min-h-[160px]">
              <Image
                src={sponsor.imageUrl}
                alt={sponsor.description}
                width={200}
                height={100}
                className="object-contain w-full h-auto max-h-[80px] md:max-h-[100px]"
                data-ai-hint={sponsor.imageHint}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
