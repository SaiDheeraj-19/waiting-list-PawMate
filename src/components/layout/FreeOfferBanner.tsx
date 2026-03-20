'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { addDays, differenceInSeconds, formatDuration, intervalToDuration } from 'date-fns';

export const FreeOfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number } | null>(null);

  useEffect(() => {
    const bannerHiden = localStorage.getItem('pawmate_banner_hidden');
    if (bannerHiden) {
      setIsVisible(false);
    }

    // Set countdown to 30 days from today (mocking for now, could be dynamic)
    const launchDate = process.env.NEXT_PUBLIC_LAUNCH_DATE 
      ? new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE) 
      : addDays(new Date(), 30);

    const timer = setInterval(() => {
      const now = new Date();
      if (now >= launchDate) {
        setTimeLeft(null);
        return;
      }

      const duration = intervalToDuration({ start: now, end: launchDate });
      setTimeLeft({
        days: duration.days || 0,
        hours: duration.hours || 0,
        minutes: duration.minutes || 0,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    localStorage.setItem('pawmate_banner_hidden', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 bg-accent px-4 py-2 flex flex-col md:flex-row items-center justify-center text-center gap-2 md:gap-4 transition-all duration-300">
      <p className="font-dm-sans font-medium text-sm md:text-base text-brand-text">
        🎉 PawMate is FREE for early members — limited time offer. Join now before prices go up.
      </p>
      
      <div className="flex items-center gap-2 font-mono font-bold text-sm text-brand-text">
        {timeLeft ? (
          <>
            <span>{timeLeft.days}d</span>
            <span>{timeLeft.hours}h</span>
            <span>{timeLeft.minutes}m</span>
          </>
        ) : (
          "Offer ending soon!"
        )}
      </div>

      <button 
        onClick={dismiss}
        className="absolute right-4 p-1 hover:bg-black/10 rounded-full transition-colors"
        aria-label="Dismiss"
      >
        <X size={18} />
      </button>
    </div>
  );
};
