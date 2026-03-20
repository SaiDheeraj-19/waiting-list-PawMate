'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FreeOfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({ d: 31, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const target = new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE || '2026-04-20T00:00:00Z').getTime();
    const compute = () => {
      const diff = target - Date.now();
      if (diff <= 0) return;
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    compute();
    const t = setInterval(compute, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="free-offer" className="bg-[#1A3D2B] relative overflow-hidden">
      
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-10">
        <Image src="/pets_playing.jpg" alt="" fill className="object-cover" sizes="100vw" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-36 md:py-56">
        
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-16 md:gap-24">
          
          {/* Left — Headline */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8922A]" />
              <p className="font-jakarta text-[10px] font-black uppercase tracking-[0.25em] text-white/30">
                Limited time offer
              </p>
            </div>
            <h2 className="font-noto font-black text-white text-[52px] md:text-[88px] leading-[0.92] tracking-[-0.03em]">
              PawMate is<br />
              free for<br />
              <span className="text-[#C8922A]">1 year.</span>
            </h2>
            <p className="mt-8 font-jakarta text-white/40 text-base md:text-lg font-medium leading-relaxed max-w-xs">
              Founding members get 1 full year access to every premium feature at zero cost.
            </p>
            
            <a
              href="#waitlist"
              className="mt-12 inline-flex items-center gap-3 bg-[#C8922A] text-white px-9 py-5 rounded-full font-jakarta font-bold text-sm hover:bg-white hover:text-[#1A3D2B] transition-all duration-500 group"
            >
              Claim your free spot
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right — Clock */}
          <motion.div
            className="flex flex-col gap-6 items-start md:items-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-4 gap-3 md:gap-5">
              {[
                { v: timeLeft.d, l: 'Days' },
                { v: timeLeft.h, l: 'Hours' },
                { v: timeLeft.m, l: 'Mins' },
                { v: timeLeft.s, l: 'Secs' },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col items-center">
                  <div className="bg-white/5 border border-white/8 backdrop-blur-sm rounded-3xl w-[74px] md:w-[110px] h-[74px] md:h-[110px] flex items-center justify-center">
                    <span className="font-noto font-black text-white text-3xl md:text-5xl tabular-nums">{String(v).padStart(2, '0')}</span>
                  </div>
                  <span className="mt-3 font-jakarta text-[9px] font-black uppercase tracking-[0.2em] text-white/25">{l}</span>
                </div>
              ))}
            </div>

            <p className="font-jakarta text-[9px] font-black uppercase tracking-[0.25em] text-white/20 pr-1">
              Offer expires at launch
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
