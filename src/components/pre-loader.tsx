"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const PreLoader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const chakraRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline();

    // Make the chakra spin continuously
    tl.to(chakraRef.current, {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: 'linear',
    });

    // Fade in and enlarge the text
    gsap.fromTo(textRef.current, 
        { opacity: 0, scale: 0.8 }, 
        { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
    );
    
    const hidePreloader = () => {
        gsap.to(preloaderRef.current, {
            opacity: 0,
            duration: 1,
            delay: 0.5,
            onComplete: () => {
                if (preloaderRef.current) {
                    preloaderRef.current.style.display = 'none';
                    // Restore scrolling
                    document.body.style.overflow = '';
                }
            }
        });
    };

    // Wait for a fixed time before hiding
    const timer = setTimeout(hidePreloader, 2500);

    return () => {
        clearTimeout(timer);
        // Ensure scrolling is restored if component unmounts prematurely
        document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64">
        <Image
          ref={chakraRef}
          src="/chakra.png"
          alt="Spinning Chakra"
          width={256}
          height={256}
          className="absolute"
          priority
        />
        <Image
          ref={textRef}
          src="/Chakravyuh.png"
          alt="Chakravyuh"
          width={200}
          height={100}
          className="absolute object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default PreLoader;
