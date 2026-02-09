"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Countdown from '@/components/countdown';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowDown } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    if(heroRef.current) {
        tl.fromTo('.hero-title', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
          .fromTo('.hero-subtitle', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
          .fromTo('.countdown-container', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8 }, "-=0.5")
          .fromTo('.hero-button', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
    }
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover z-0"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      <div className="relative z-20 flex flex-col items-center gap-8 px-4">
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold font-headline uppercase tracking-wider text-shadow-lg"
          style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
          Chakravyuh '26
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl text-accent/90"
          style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>
          Campus Techno-Cultural symposium
        </p>

        <div className="countdown-container">
          <Countdown />
        </div>
        
        <div className="hero-button">
          <Button size="lg" asChild className="rounded-full">
            <Link href="#about">
              Explore the Maze
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
