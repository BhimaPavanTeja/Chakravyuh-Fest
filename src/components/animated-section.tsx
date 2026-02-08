"use client";

import type { ReactNode } from 'react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      // Animate the container
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section ref={ref} id={id} className={cn("container mx-auto px-4", className)}>
      {children}
    </section>
  );
}
