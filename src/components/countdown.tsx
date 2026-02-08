"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

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

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const value = timeLeft[interval as keyof typeof timeLeft];
    return (
      <div key={interval} className="flex flex-col items-center">
        <div className="text-4xl md:text-6xl font-bold font-headline text-primary-foreground">
          {String(value).padStart(2, '0')}
        </div>
        <div className="text-sm md:text-base uppercase font-medium text-primary-foreground/80">
          {interval}
        </div>
      </div>
    );
  });

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8">
      {timerComponents.length ? timerComponents : <span>Fest has started!</span>}
    </div>
  );
};

export default Countdown;
