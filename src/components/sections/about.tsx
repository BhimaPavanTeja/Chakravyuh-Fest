import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-fest');

  const keyInfo = [
    { icon: <Calendar className="w-6 h-6 text-primary" />, title: 'Date', text: 'March 7th-8th, 2026' },
    { icon: <MapPin className="w-6 h-6 text-primary" />, title: 'Venue', text: 'Raghu Engineering College' },
    { icon: <Users className="w-6 h-6 text-primary" />, title: 'Organizers', text: 'Student Council' },
    { icon: <Award className="w-6 h-6 text-primary" />, title: 'Theme', text: 'Campus Techno-Cultural symposium' },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">About Chakravyuh '26 Fest</h2>
        <p className="text-lg text-foreground/80">
          Chakravyuh, our annual techno-cultural and sports festival, is a celebration of talent, innovation, and spirit. It is a Techno-Cultural symposium of challenges and opportunities, where legends are born and memories are forged. 
        </p>
        <p className="text-foreground/70">
          This year, we embrace the theme "Campus Techno-Cultural symposium" inviting you to navigate through a maze of exciting events, workshops, and competitions. Prepare to lose yourself in the energy and find your path to victory.
        </p>
        <div className="grid grid-cols-2 gap-6 pt-4">
          {keyInfo.map(item => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">{item.icon}</div>
              <div>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-foreground/70">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        {aboutImage && (
          <Card className="overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300">
            <CardContent className="p-0">
              <Image
                src="/gallery/d.jpeg"
                alt={aboutImage.description}
                width={600}
                height={400}
                className="object-cover"
                data-ai-hint={aboutImage.imageHint}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AboutSection;
