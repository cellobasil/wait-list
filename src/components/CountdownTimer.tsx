
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set target date to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold text-white">{timeLeft.days.toString().padStart(2, '0')}</div>
          <div className="text-xs text-emerald-100 uppercase">Days</div>
        </div>
      </div>
      <div className="text-white text-2xl">:</div>
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold text-white">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs text-emerald-100 uppercase">Hours</div>
        </div>
      </div>
      <div className="text-white text-2xl">:</div>
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-xs text-emerald-100 uppercase">Min</div>
        </div>
      </div>
      <div className="text-white text-2xl">:</div>
      <div className="text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[60px]">
          <div className="text-2xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-xs text-emerald-100 uppercase">Sec</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
