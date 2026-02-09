"use client";

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const TARGET_DATE = '2026-03-07T09:00:00';

const Countdown = () => {
  // 1. Initialize with 0 to ensure Server and Client match on first pass
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [isMounted, setIsMounted] = useState(false);
  const prevTimeLeft = useRef(timeLeft);

  // Individual refs for GSAP targeting
  const refs = {
    days: useRef<HTMLDivElement>(null),
    hours: useRef<HTMLDivElement>(null),
    minutes: useRef<HTMLDivElement>(null),
    seconds: useRef<HTMLDivElement>(null),
  };

  const timeUnits = ['days', 'hours', 'minutes', 'seconds'] as const;

  const calculateTimeLeft = () => {
    const difference = +new Date(TARGET_DATE) - +new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    setIsMounted(true);
    // Initial calculation on mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    timeUnits.forEach((unit) => {
      // Only animate if the specific number changed
      if (timeLeft[unit] !== prevTimeLeft.current[unit]) {
        const el = refs[unit].current;
        if (el) {
          gsap.fromTo(el, 
            { y: 10, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.4, ease: 'back.out(2)' }
          );
        }
      }
    });
    prevTimeLeft.current = timeLeft;
  }, [timeLeft, isMounted]);

  // Prevent rendering content that relies on dynamic time until mounted
  if (!isMounted) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 opacity-0">
        {/* Skeleton or empty state to preserve layout space */}
        {timeUnits.map((u) => (
          <div key={u} className="w-24 h-28 md:w-32 md:h-36 bg-white/5 rounded-2xl" />
        ))}
      </div>
    );
  }

  const isLive = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;

  if (isLive) {
    return <div className="text-2xl text-white font-headline">The fest is live!</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
      {timeUnits.map((interval) => (
        <div 
          key={interval} 
          className="flex flex-col items-center text-center w-24 h-28 md:w-32 md:h-36 justify-center bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-lg"
        >
          <div 
            ref={refs[interval]} 
            className="text-5xl md:text-7xl font-bold font-headline text-white tabular-nums"
          >
            {String(timeLeft[interval]).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm uppercase tracking-wider font-medium text-white/70 mt-1">
            {interval}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
