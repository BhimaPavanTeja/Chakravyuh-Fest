"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { testimonials } from "@/lib/testimonials-data"
import { Quote } from "lucide-react"

const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Words from the Core</h2>
      <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-12">
        Hear what the masterminds behind the scenes have to say about their experience.
      </p>
      
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col justify-between text-left shadow-lg hover:shadow-primary/20 transition-shadow duration-300 rounded-xl overflow-hidden">
                  <CardContent className="p-6 space-y-4 flex-grow">
                    <Quote className="w-8 h-8 text-primary/50" />
                    <p className="text-foreground/80 text-sm italic">"{testimonial.quote}"</p>
                  </CardContent>
                  <div className="flex items-center gap-4 p-6 bg-secondary/30">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden xl:flex" />
        <CarouselNext className="hidden xl:flex" />
      </Carousel>
    </div>
  );
};

export default TestimonialsSection;
