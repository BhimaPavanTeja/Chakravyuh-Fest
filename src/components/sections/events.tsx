"use client";

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { ArrowRight, Code, Paintbrush, Shield, Presentation, Users, Clock, MapPin, Wrench, Phone, Star } from "lucide-react";
import { eventsData, Event } from '@/lib/events-data';
import { Badge } from '@/components/ui/badge';

const EventCard = ({ event, onLearnMore }: { event: Event, onLearnMore: () => void }) => (
  <Card className="flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-primary/20">
    <CardHeader>
      <CardTitle>{event.title}</CardTitle>
      <CardDescription>{event.description}</CardDescription>
    </CardHeader>
    <div className="flex-grow" />
    <CardFooter className="flex-col items-start gap-2 pt-4">
      <Badge variant="secondary" className='bg-violet-600 text-white'>{event.club}</Badge>
      <Button variant="outline" className="w-full mt-2" onClick={onLearnMore}>
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
);


const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const technicalEvents = eventsData.filter(e => e.category === 'technical');
  const nonTechnicalEvents = eventsData.filter(e => e.category === 'non-technical');
  const sportsEvents = eventsData.filter(e => e.category === 'sports');

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Explore Our Upcoming Events</h2>
      <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
        From intense coding battles to electrifying cultural performances and thrilling sports contests, there's a challenge for everyone in the labyrinth.
      </p>

      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="grid w-full max-w-xl mx-auto grid-cols-2 md:grid-cols-3 mb-8 h-auto">
          <TabsTrigger value="technical" className="py-3 text-base"><Code className="mr-2 h-5 w-5" />Technical</TabsTrigger>
          <TabsTrigger value="non-technical" className="py-3 text-base"><Paintbrush className="mr-2 h-5 w-5" />Non-Technical</TabsTrigger>
          <TabsTrigger value="sports" className="py-3 text-base"><Shield className="mr-2 h-5 w-5" />Sports</TabsTrigger>
        </TabsList>
        <TabsContent value="technical">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalEvents.map((event, i) => <EventCard key={i} event={event} onLearnMore={() => setSelectedEvent(event)} />)}
          </div>
        </TabsContent>
        <TabsContent value="non-technical">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nonTechnicalEvents.map((event, i) => <EventCard key={i} event={event} onLearnMore={() => setSelectedEvent(event)} />)}
          </div>
        </TabsContent>
        <TabsContent value="sports">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsEvents.map((event, i) => <EventCard key={i} event={event} onLearnMore={() => setSelectedEvent(event)} />)}
          </div>
        </TabsContent>
      </Tabs>
      
      <Dialog open={!!selectedEvent} onOpenChange={(isOpen) => !isOpen && setSelectedEvent(null)}>
        {selectedEvent && (
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-headline text-primary">{selectedEvent.title}</DialogTitle>
              <DialogDescription>
                Organized by <span className="font-semibold text-foreground">{selectedEvent.club}</span>
              </DialogDescription>
            </DialogHeader>
            <div className="text-sm text-foreground/80 max-h-[60vh] overflow-y-auto pr-4 space-y-6 py-4">
              <p>{selectedEvent.longDescription}</p>

              <div className="space-y-2">
                <h4 className="font-semibold text-lg border-b pb-1">Event Details</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                  {selectedEvent.eventType && <div className="flex items-start gap-2"><Star className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Event Type:</span> {selectedEvent.eventType}</p></div>}
                  {selectedEvent.targetAudience && <div className="flex items-start gap-2"><Users className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Target Audience:</span> {selectedEvent.targetAudience}</p></div>}
                  {selectedEvent.participants && <div className="flex items-start gap-2"><Users className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Participants:</span> {selectedEvent.participants}</p></div>}
                  {selectedEvent.duration && <div className="flex items-start gap-2"><Clock className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Duration:</span> {selectedEvent.duration}</p></div>}
                  {selectedEvent.venue && <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Venue:</span> {selectedEvent.venue}</p></div>}
                </div>
              </div>

              {selectedEvent.requirements && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg border-b pb-1">Requirements</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {selectedEvent.requirements.technical && (
                      <div>
                          <h5 className="font-semibold mb-1 flex items-center gap-2"><Wrench className="w-4 h-4 text-primary"/>Technical</h5>
                          <ul className="list-disc pl-6 space-y-1">
                            {selectedEvent.requirements.technical.map((req, i) => <li key={i}>{req}</li>)}
                          </ul>
                      </div>
                    )}
                    {selectedEvent.requirements.resources && (
                       <div>
                          <h5 className="font-semibold mb-1 flex items-center gap-2"><Wrench className="w-4 h-4 text-primary"/>Resources</h5>
                          <ul className="list-disc pl-6 space-y-1">
                            {selectedEvent.requirements.resources.map((req, i) => <li key={i}>{req}</li>)}
                          </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
              
              {(selectedEvent.contactName || selectedEvent.facultyCoordinator) && (
                 <div className="space-y-2">
                  <h4 className="font-semibold text-lg border-b pb-1">Contact</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {selectedEvent.contactName && <div className="flex items-start gap-2"><Phone className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Coordinator:</span> {selectedEvent.contactName} {selectedEvent.contactDetails && `(${selectedEvent.contactDetails})`}</p></div>}
                      {selectedEvent.facultyCoordinator && <div className="flex items-start gap-2"><Phone className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Faculty:</span> {selectedEvent.facultyCoordinator} {selectedEvent.facultyContact && `(${selectedEvent.facultyContact})`}</p></div>}
                  </div>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button onClick={() => setSelectedEvent(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default EventsSection;
