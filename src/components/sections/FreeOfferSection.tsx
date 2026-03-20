'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeartPawSVG } from '../svg/HeartPawSVG';
import { BoneSVG } from '../svg/BoneSVG';
import { intervalToDuration, addDays } from 'date-fns';

export const FreeOfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const launchDate = process.env.NEXT_PUBLIC_LAUNCH_DATE 
      ? new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE) 
      : addDays(new Date(), 30);

    const timer = setInterval(() => {
      const duration = intervalToDuration({ start: new Date(), end: launchDate });
      setTimeLeft({
        days: duration.days || 0,
        hours: duration.hours || 0,
        minutes: duration.minutes || 0,
        seconds: duration.seconds || 0,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const boxes = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <section id="free-offer" className="bg-primary py-24 px-4 overflow-hidden relative">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-6xl font-playfair font-black text-brand-bg leading-tight mb-6">
          PawMate is free. <span className="text-accent italic">For now.</span>
        </h2>
        
        <p className="text-lg md:text-xl font-dm-sans text-brand-bg/80 mb-12 max-w-2xl mx-auto">
          We are building PawMate for pet lovers like you. Everyone who joins the waitlist gets full access to PawMate completely free for the first year when we launch — no credit card, no catch.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['🐾 Free for 1 year', '✅ Full access', '👑 No credit card'].map((pill) => (
            <div key={pill} className="bg-accent text-primary px-6 py-2 rounded-full font-dm-sans font-bold text-sm shadow-lg shadow-accent/20">
              {pill}
            </div>
          ))}
        </div>

        {/* Countdown Timer timer timer timer */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-16">
          {boxes.map((box, i) => (
            <React.Fragment key={box.label}>
              <div className="flex flex-col items-center">
                <motion.div 
                  key={box.value}
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  className="bg-brand-bg text-primary w-16 h-20 md:w-24 md:h-28 rounded-2xl flex items-center justify-center font-playfair font-bold text-3xl md:text-5xl shadow-2xl"
                >
                  {box.value.toString().padStart(2, '0')}
                </motion.div>
                <span className="mt-3 font-dm-sans font-bold text-xs uppercase tracking-widest text-brand-bg/60">{box.label}</span>
              </div>
              {i < 3 && (
                <div className="text-accent text-3xl md:text-5xl font-playfair animate-pulse pt-2">:</div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.a 
          href="#join-form"
          className="inline-flex items-center gap-3 bg-brand-bg text-primary font-dm-sans font-black py-5 px-10 rounded-full text-xl shadow-2xl hover:bg-accent transition-all duration-300 group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Claim your free spot</span>
          <span className="group-hover:translate-x-1 group-hover:rotate-12 transition-transform">🐾</span>
        </motion.a>
      </motion.div>

      {/* Decorative decorations decoration decor */}
      <HeartPawSVG 
        className="absolute -right-20 top-20 opacity-20 hidden lg:block animate-float" 
        size={300} 
        color="#F5A623" 
      />
      <BoneSVG 
        className="absolute -left-10 bottom-20 opacity-20 hidden lg:block animate-float" 
        size={200} 
        color="#9FE1CB" 
        style={{ transform: 'rotate(45deg)' }}
      />
    </section>
  );
};
