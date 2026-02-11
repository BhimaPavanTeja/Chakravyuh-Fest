
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const teamMembers: { id: string; name: string; role: string }[] = [
    { id: 'chairperson', name: 'B.Indumathi', role: 'Chairperson' },
    { id: 'vice-chair-1', name: 'V.Abhiram', role: 'Vice Chairperson' },
    { id: 'vice-chair-2', name: 'M.Madhu', role: 'Vice Chairperson' },
    { id: 'event-head-1', name: 'P.G.Raja Praneeth', role: 'Treasurer' },
    { id: 'event-head-2', name: 'B.Yeswanth', role: 'Promotions' },
    { id: 'event-head-4', name: 'Ch.Nikhitha', role: 'Culturals' },
    { id: 'event-head-3', name: 'M.Meghana', role: 'Culturals' },
    { id: 'event-head-5', name: 'D.Eswar', role: 'Security & Discipline' },
    { id: 'event-head-6', name: 'P.Tanmai', role: 'Security & Discipline' },
    { id: 'event-head-7', name: 'P.Anish Kumar', role: 'Transport' },
    { id: 'event-head-8', name: 'B.Sai Tarun', role: 'Non-Technical' },
    { id: 'event-head-9', name: 'M.Kaushik', role: 'Non-Technical' },
    { id: 'event-head-10', name: 'P.M.M.Gokul', role: 'Resource' },
    { id: 'event-head-11', name: 'G.Deekshitha', role: 'Decoration' },
    { id: 'event-head-12', name: 'P.Manohar', role: 'Decoration' },
    { id: 'event-head-13', name: 'S.Siri', role: 'Hospitality' },
    { id: 'event-head-14', name: 'Payala Krishna Vamsi', role: 'Special Events' },
    { id: 'event-head-15', name: 'J.Chalukya Varma', role: 'Special Events' },
    { id: 'event-head-16', name: 'U.Yaswanth Reddy', role: 'Sponsors' },
    { id: 'event-head-17', name: 'B. Karthik Anupam', role: 'Sponsors' },
    { id: 'event-head-18', name: 'M.Varun', role: 'Stalls' },
    { id: 'event-head-19', name: 'M. Sumanth Reddy', role: 'Stalls' },
    { id: 'event-head-20', name: 'CH.Janaki Ram', role: 'Sports' },
    { id: 'event-head-21', name: 'Bhima Pavan Teja (Developer)', role: 'Web Dev Team' },
    { id: 'event-head-22', name: 'P.Chetan Deva', role: 'Technical' },
    { id: 'event-head-22', name: 'P.Chetan Deva', role: 'Web Dev Team' },
    { id: 'event-head-8', name: 'B.Sai Tarun', role: 'Web Dev Team' },
    { id: 'event-head-23', name: 'K.Sandeep', role: 'Technical' },
    { id: 'event-head-24', name: 'C.V.Tanush', role: 'Technical' },
    { id: 'event-head-25', name: 'K.Sasi Kumar (Social Media)', role: 'Digital Media' },
    { id: 'event-head-26', name: 'B.Hemanth Sai Reddy (Content Creator)', role: 'Digital Media' },
    { id: 'event-head-27', name: 'M.D.Sohail (Design Lead)', role: 'Digital Media' },
];

const TeamMemberCard = ({ member }: { member: { id: string, name: string, role: string } }) => {
  const image = PlaceHolderImages.find(p => p.id === member.id);
  const fallback = member.name.split(' ').map(n => n[0]).join('');

  return (
    <Card className="text-center group shadow-lg hover:shadow-primary/20 transition-all duration-300 h-full hover:-translate-y-2">
      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
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
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
    const groupedTeam = teamMembers.reduce((acc, member) => {
        const { role } = member;
        if (!acc[role]) {
        acc[role] = [];
        }
        acc[role].push(member);
        return acc;
    }, {} as Record<string, typeof teamMembers>);
    
    const roleOrder = [
        'Chairperson',
        'Vice Chairperson',
        'Treasurer',
        'Promotions',
        'Technical',
        'Non-Technical',
        'Culturals',
        'Sports',
        'Special Events',
        'Sponsors',
        'Stalls',
        'Hospitality',
        'Decoration',
        'Security & Discipline',
        'Transport',
        'Resource',
        'Digital Media',
        'Web Dev Team',
    ];

    const sortedRoles = roleOrder.filter(role => groupedTeam[role]);

    return (
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Meet the Masterminds</h2>
            <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
                The dedicated team working tirelessly behind the scenes to craft an unforgettable experience.
            </p>
            
            <div className="space-y-16">
                {sortedRoles.map(role => (
                    <div key={role}>
                        <h3 className="text-2xl font-bold font-headline text-accent mb-8">{role}</h3>
                        <div className="flex flex-wrap items-stretch justify-center gap-8">
                        {groupedTeam[role].map(member => (
                            <div key={member.id} className="w-full max-w-xs">
                                <TeamMemberCard member={member} />
                            </div>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamSection;
