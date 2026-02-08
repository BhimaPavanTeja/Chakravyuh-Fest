import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers = [
  { id: 'chairperson', name: 'Rohan Sharma', role: 'Chairperson' },
  { id: 'vice-chair-1', name: 'Priya Singh', role: 'Vice Chairperson' },
  { id: 'vice-chair-2', name: 'Ankit Gupta', role: 'Vice Chairperson' },
  { id: 'event-head-1', name: 'Sneha Patel', role: 'Technical Head' },
  { id: 'event-head-2', name: 'Vikram Rao', role: 'Cultural Head' },
  { id: 'event-head-3', name: 'Aisha Khan', role: 'Sports Head' },
];

const TeamMemberCard = ({ member }: { member: { id: string, name: string, role: string } }) => {
  const image = PlaceHolderImages.find(p => p.id === member.id);
  const fallback = member.name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="text-center group shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
      <CardContent className="flex flex-col items-center pt-6">
        <Avatar className="w-32 h-32 mb-4 border-4 border-transparent group-hover:border-accent transition-all duration-300">
          {image && (
            <AvatarImage 
              src={image.imageUrl} 
              alt={member.name} 
              data-ai-hint={image.imageHint}
            />
          )}
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <h3 className="text-xl font-bold">{member.name}</h3>
        <p className="text-primary font-medium">{member.role}</p>
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Meet the Masterminds</h2>
      <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
        The dedicated team working tirelessly behind the scenes to craft an unforgettable experience.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
