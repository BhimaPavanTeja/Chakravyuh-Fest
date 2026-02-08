"use client";

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2026-03-07T09:00:00') - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const prevTimeLeft = useRef(timeLeft);

  const refs = {
    days: useRef<HTMLDivElement>(null),
    hours: useRef<HTMLDivElement>(null),
    minutes: useRef<HTMLDivElement>(null),
    seconds: useRef<HTMLDivElement>(null),
  };
  
  const timeUnits = ['days', 'hours', 'minutes', 'seconds'] as const;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    timeUnits.forEach((unit) => {
      if (timeLeft[unit] !== prevTimeLeft.current[unit]) {
        const el = refs[unit].current;
        if (el) {
            gsap.fromTo(el, 
                { scale: 1.2, opacity: 0 }, 
                { scale: 1, opacity: 1, duration: 0.6, ease: 'power3.out' }
            );
        }
      }
    });
    prevTimeLeft.current = timeLeft;
  }, [timeLeft]);

  const timerComponents = timeUnits.map((interval) => {
    const value = timeLeft[interval];
    return (
      <div key={interval} className="flex flex-col items-center text-center w-24 h-28 md:w-32 md:h-36 justify-center bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm shadow-lg">
        <div ref={refs[interval]} className="text-5xl md:text-7xl font-bold font-headline text-white tabular-nums">
            {String(value).padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm uppercase tracking-wider font-medium text-white/70 mt-1">
          {interval}
        </div>
      </div>
    );
  });

  return (
    <div className="flex gap-3 md:gap-6">
      {timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0 
       ? timerComponents 
       : <div className="text-2xl text-white font-headline">The fest is live!</div>
      }
    </div>
  );
};

export default Countdown;
