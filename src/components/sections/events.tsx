import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Paintbrush, Shield } from "lucide-react";

const events = {
  technical: [
    { title: "CodeCrush", description: "The ultimate competitive programming battle." },
    { title: "RoboWars", description: "Build and battle robots in a head-to-head combat." },
    { title: "Hackathon", description: "A 24-hour coding marathon to solve real-world problems." },
    { title: "Circuitrix", description: "Design and debug complex electronic circuits." },
  ],
  nonTechnical: [
    { title: "Rhythm Rumble", description: "Showcase your dance moves in a solo or group competition." },
    { title: "Open Mic", description: "Share your poetry, stories, or stand-up comedy." },
    { title: "Mystic Hunt", description: "A campus-wide treasure hunt with cryptic clues." },
    { title: "Shutterbug", description: "Capture the essence of the fest in this photography contest." },
  ],
  sports: [
    { title: "Futsal Fury", description: "A fast-paced 5-a-side football tournament." },
    { title: "Basket Brawl", description: "3-on-3 basketball challenge for the hoop masters." },
    { title: "Checkmate", description: "A battle of wits over the 64 squares." },
    { title: "Aces High", description: "Badminton tournament for singles and doubles." },
  ],
};

const EventCard = ({ title, description }: { title: string, description: string }) => (
  <Card className="flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-primary/20">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <div className="flex-grow" />
    <CardFooter>
      <Button variant="outline" className="w-full">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
);

const EventsSection = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Explore Our Events</h2>
      <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
        From intense coding battles to electrifying cultural performances and thrilling sports contests, there's a challenge for everyone in the labyrinth.
      </p>

      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 h-auto">
          <TabsTrigger value="technical" className="py-3 text-base"><Code className="mr-2 h-5 w-5"/>Technical</TabsTrigger>
          <TabsTrigger value="non-technical" className="py-3 text-base"><Paintbrush className="mr-2 h-5 w-5"/>Cultural</TabsTrigger>
          <TabsTrigger value="sports" className="py-3 text-base"><Shield className="mr-2 h-5 w-5"/>Sports</TabsTrigger>
        </TabsList>
        <TabsContent value="technical">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.technical.map((event, i) => <EventCard key={i} {...event} />)}
          </div>
        </TabsContent>
        <TabsContent value="non-technical">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.nonTechnical.map((event, i) => <EventCard key={i} {...event} />)}
          </div>
        </TabsContent>
        <TabsContent value="sports">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.sports.map((event, i) => <EventCard key={i} {...event} />)}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EventsSection;
