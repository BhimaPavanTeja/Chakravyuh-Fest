
"use client";

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { ArrowRight, Code, Paintbrush, Users, Clock, MapPin, Phone, Star, Trophy, DollarSign, Calendar as CalendarIcon } from "lucide-react";
import { eventsData, Event } from '@/lib/events-data';
import { Badge } from '@/components/ui/badge';

const EventCard = ({ event, onLearnMore }: { event: Event, onLearnMore: () => void }) => (
  <Card className="flex flex-col h-full transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-primary/20">
    <CardHeader>
      <div className="flex justify-between items-start mb-2">
        <Badge variant="default">{event.club}</Badge>
        {event.date && (
          <div className="flex items-center gap-1 text-[10px] uppercase tracking-tighter text-muted-foreground font-semibold">
            <CalendarIcon className="w-3 h-3" />
            {event.date}
          </div>
        )}
      </div>
      <CardTitle className="text-xl">{event.title}</CardTitle>
      <CardDescription className="line-clamp-2">{event.description}</CardDescription>
    </CardHeader>
    <div className="px-6 pb-2 text-xs text-muted-foreground">
      {event.timing && (
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {event.timing}
        </div>
      )}
    </div>
    <div className="flex-grow" />
    <CardFooter className="pt-4">
      <Button variant="outline" className="w-full" onClick={onLearnMore}>
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
);


const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const technicalEvents = eventsData.filter(e => e.category === 'technical');
  const nonTechnicalEvents = eventsData.filter(e => e.category === 'non-technical');
  const specialEvents = eventsData.filter(e => e.category === 'special-events');

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Explore Our Upcoming Events</h2>
      <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
        From intense coding battles to electrifying cultural performances and thrilling special events, there's a challenge for everyone in the labyrinth.
      </p>

      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-8 h-auto">
          <TabsTrigger value="technical" className="py-3 text-sm md:text-base"><Code className="mr-2 h-5 w-5" />Technical</TabsTrigger>
          <TabsTrigger value="non-technical" className="py-3 text-sm md:text-base"><Paintbrush className="mr-2 h-5 w-5" />Non-Technical</TabsTrigger>
          <TabsTrigger value="special-events" className="py-3 text-sm md:text-base"><Star className="mr-2 h-5 w-5" />Special Events</TabsTrigger>
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
        <TabsContent value="special-events">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialEvents.map((event, i) => <EventCard key={i} event={event} onLearnMore={() => setSelectedEvent(event)} />)}
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

              <div className="space-y-2">
                <h4 className="font-semibold text-lg border-b pb-1">Event Details</h4>
                <p className="text-base leading-relaxed">{selectedEvent.longDescription}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-4">
                  {selectedEvent.date && <div className="flex items-start gap-2"><CalendarIcon className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Date:</span> {selectedEvent.date}</p></div>}
                  {selectedEvent.timing && <div className="flex items-start gap-2"><Clock className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Timing:</span> {selectedEvent.timing}</p></div>}
                  {selectedEvent.venue && <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Venue:</span> {selectedEvent.venue}</p></div>}
                  {selectedEvent.eventType && <div className="flex items-start gap-2"><Star className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Type:</span> {selectedEvent.eventType}</p></div>}
                  {selectedEvent.participants && <div className="flex items-start gap-2"><Users className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Participation:</span> {selectedEvent.participants}</p></div>}
                </div>
              </div>

              {(selectedEvent.fees || selectedEvent.prizes) && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg border-b pb-1">Registration & Rewards</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                    {selectedEvent.fees && <div className="flex items-start gap-2"><DollarSign className="w-4 h-4 mt-1 shrink-0 text-primary" /><p><span className="font-semibold">Registration Fees:</span> {selectedEvent.fees}</p></div>}
                    {selectedEvent.prizes && <div className="flex items-start gap-2"><Trophy className="w-4 h-4 mt-1 shrink-0 text-primary" /><p><span className="font-semibold">Prizes:</span> {selectedEvent.prizes}</p></div>}
                  </div>
                </div>
              )}
              
              {(selectedEvent.contactName || selectedEvent.facultyCoordinator) && (
                 <div className="space-y-2">
                  <h4 className="font-semibold text-lg border-b pb-1">Contact for Queries</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {selectedEvent.contactName && <div className="flex items-start gap-2"><Phone className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Student Lead:</span> {selectedEvent.contactName} <br/><span className="text-xs text-muted-foreground">{selectedEvent.contactDetails}</span></p></div>}
                      {selectedEvent.facultyCoordinator && <div className="flex items-start gap-2"><Phone className="w-4 h-4 mt-1 shrink-0 text-primary"/><p><span className="font-semibold">Faculty In-charge:</span> {selectedEvent.facultyCoordinator} <br/><span className="text-xs text-muted-foreground">{selectedEvent.facultyContact}</span></p></div>}
                  </div>
                </div>
              )}
            </div>
            <DialogFooter className="flex-col sm:flex-row gap-2">
              {selectedEvent.registrationLink && selectedEvent.registrationLink !== '#' && (
                <Button asChild className="sm:flex-1">
                  <a href={selectedEvent.registrationLink} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              )}
              <Button onClick={() => setSelectedEvent(null)} variant="outline" className={selectedEvent.registrationLink && selectedEvent.registrationLink !== '#' ? "sm:w-auto" : "w-full"}>Close</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default EventsSection;
