import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Circle, PartyPopper, Mic, BrainCircuit } from 'lucide-react';

const schedule = {
  day1: [
    { time: '09:00 AM', event: 'Inauguration Ceremony', icon: <PartyPopper/> },
    { time: '10:00 AM', event: 'Hackathon Begins', icon: <BrainCircuit/> },
    { time: '01:00 PM', event: 'RoboWars Qualifiers', icon: <BrainCircuit/> },
    { time: '04:00 PM', event: 'Open Mic Session', icon: <Mic/> },
    { time: '07:00 PM', event: 'Concert Night', icon: <PartyPopper/> },
  ],
  day2: [
    { time: '10:00 AM', event: 'CodeCrush Finals', icon: <BrainCircuit/> },
    { time: '12:00 PM', event: 'Futsal Finals', icon: <PartyPopper/> },
    { time: '02:00 PM', event: 'Rhythm Rumble Finals', icon: <Mic/> },
    { time: '05:00 PM', event: 'Hackathon Judging', icon: <BrainCircuit/> },
    { time: '07:00 PM', event: 'Valedictory & Prize Distribution', icon: <PartyPopper/> },
  ],
};

const ScheduleTimeline = ({ day, events }: { day: string, events: typeof schedule.day1 }) => (
  <div className="flex-1">
    <h3 className="text-2xl font-bold font-headline text-center mb-8 text-primary">{day}</h3>
    <div className="relative">
      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
      {events.map((item, index) => (
        <div key={index} className="relative mb-8 flex justify-center">
           <div className="absolute left-1/2 -translate-x-1/2 mt-1.5 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
          <Card className={`w-full max-w-sm shadow-lg ${index % 2 === 0 ? 'md:-translate-x-8' : 'md:translate-x-8'}`}>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
              <div>
                <CardTitle className="text-lg">{item.time}</CardTitle>
                <CardDescription className="text-base">{item.event}</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  </div>
);

const ScheduleSection = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Fest Schedule</h2>
      <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
        Two days packed with excitement and non-stop action. Plan your time to experience it all.
      </p>
      <div className="flex flex-col md:flex-row gap-16">
        <ScheduleTimeline day="Day 1 - March 7th" events={schedule.day1} />
        <ScheduleTimeline day="Day 2 - March 8th" events={schedule.day2} />
      </div>
    </div>
  );
};

export default ScheduleSection;
