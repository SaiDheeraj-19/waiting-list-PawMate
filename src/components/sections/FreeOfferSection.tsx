'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const FreeOfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE || '2026-04-20T00:00:00Z').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) return clearInterval(timer);
      setTimeLeft({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="free-offer" className="bg-surface-low py-40 md:py-64 px-4 overflow-hidden text-center relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center z-10 relative">
        <motion.div 
          className="mb-20 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-noto font-black text-primary tracking-tight leading-tight">
            PawMate is free. <span className="text-accent italic">For now.</span>
          </h2>
          <p className="text-lg md:text-xl font-jakarta font-medium text-brand-muted max-w-2xl mx-auto">
            We are opening the doors soon. Early members get lifetime premium features for $0.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20">
          <TimerCard value={timeLeft.d} label="DAYS" />
          <TimerCard value={timeLeft.h} label="HOURS" />
          <TimerCard value={timeLeft.m} label="MINS" />
          <TimerCard value={timeLeft.s} label="SECS" />
        </div>

        <motion.a 
          href="#join-form"
          className="bg-accent text-primary px-10 md:px-16 py-5 md:py-6 rounded-full font-jakarta font-extrabold text-sm md:text-base uppercase tracking-widest shadow-2xl shadow-accent/20 hover:scale-105 active:scale-95 transition-all group flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Claim your free spot</span>
          <span className="group-hover:translate-x-1 transition-transform">🐾</span>
        </motion.a>
      </div>
    </section>
  );
};

const TimerCard = ({ value, label }: { value: number; label: string }) => (
  <motion.div 
    className="w-[120px] md:w-[180px] h-[140px] md:h-[180px] bg-white rounded-[3rem] md:rounded-[4rem] shadow-[0_32px_64px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center border border-black/5"
    whileHover={{ y: -10 }}
  >
    <div className="text-4xl md:text-6xl font-noto font-black text-primary leading-none mb-2 tabular-nums">
      {String(value).padStart(2, '0')}
    </div>
    <div className="text-[9px] md:text-xs font-jakarta font-black text-brand-muted/50 tracking-widest uppercase">
      {label}
    </div>
  </motion.div>
);
