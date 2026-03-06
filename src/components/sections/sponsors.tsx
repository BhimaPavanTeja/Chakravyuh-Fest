import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const SponsorsSection = () => {
  const sponsors = PlaceHolderImages.filter(p => p.id.startsWith('sponsor-'));
  
  const titleSponsor = sponsors.find(s => s.id === 'sponsor-title');
  const coSponsors = sponsors.filter(s => s.id.startsWith('sponsor-co'));
  const partners = sponsors.filter(s => s.id.startsWith('sponsor-partner'));

  return (
    <div className="text-center space-y-20">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Our Valued Sponsors</h2>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          We are grateful for the support of our sponsors who help make Chakravyuh a grand success.
        </p>
      </div>

      {titleSponsor && (
        <div className="space-y-8">
          <h3 className="text-2xl font-bold font-headline text-accent uppercase tracking-widest">Title Sponsor</h3>
          <div className="flex justify-center">
            <Card className="w-full max-w-sm overflow-hidden bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 flex items-center justify-center min-h-[200px]">
                <Image
                  src={titleSponsor.imageUrl}
                  alt={titleSponsor.description}
                  width={300}
                  height={150}
                  className="object-contain"
                  data-ai-hint={titleSponsor.imageHint}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {coSponsors.length > 0 && (
        <div className="space-y-8">
          <h3 className="text-2xl font-bold font-headline text-accent uppercase tracking-widest">Co-Sponsors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {coSponsors.map(sponsor => (
              <Card key={sponsor.id} className="overflow-hidden bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-8 flex items-center justify-center min-h-[160px]">
                  <Image
                    src={sponsor.imageUrl}
                    alt={sponsor.description}
                    width={200}
                    height={100}
                    className="object-contain"
                    data-ai-hint={sponsor.imageHint}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {partners.length > 0 && (
        <div className="space-y-8">
          <h3 className="text-2xl font-bold font-headline text-accent uppercase tracking-widest">Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {partners.map(sponsor => (
              <Card key={sponsor.id} className="overflow-hidden bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 flex items-center justify-center min-h-[120px]">
                  <Image
                    src={sponsor.imageUrl}
                    alt={sponsor.description}
                    width={150}
                    height={75}
                    className="object-contain"
                    data-ai-hint={sponsor.imageHint}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SponsorsSection;
