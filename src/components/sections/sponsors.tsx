import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const SponsorCategory = ({ title, images }: { title: string, images: any[] }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-semibold text-center text-primary/80 mb-6">{title}</h3>
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {images.map(image => (
        <a key={image.id} href="#" className="group">
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={200}
            height={100}
            className="object-contain h-16 md:h-20 w-auto transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
            data-ai-hint={image.imageHint}
          />
        </a>
      ))}
    </div>
  </div>
);

const SponsorsSection = () => {
  const titleSponsor = PlaceHolderImages.filter(p => p.id === 'sponsor-title');
  const coSponsors = PlaceHolderImages.filter(p => p.id.startsWith('sponsor-co'));
  const partners = PlaceHolderImages.filter(p => p.id.startsWith('sponsor-partner'));

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Our Valued Sponsors</h2>
      <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-16">
        We are grateful for the support of our sponsors who help make Chakravyuh a grand success.
      </p>
      
      {titleSponsor.length > 0 && <SponsorCategory title="Title Sponsor" images={titleSponsor} />}
      {coSponsors.length > 0 && <SponsorCategory title="Co-Sponsors" images={coSponsors} />}
      {partners.length > 0 && <SponsorCategory title="Partners" images={partners} />}

    </div>
  );
};

export default SponsorsSection;
