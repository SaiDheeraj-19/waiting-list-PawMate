'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { MapPin, Star } from 'lucide-react';

interface StatsProps {
  initialStats?: {
    total: number;
    cities: number;
    top_pet: string;
  };
}

export const StatsSection = ({ initialStats }: StatsProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = initialStats || { total: 42000, cities: 156, top_pet: 'Golden Retriever' };

  return (
    <section ref={ref} className="bg-brand-bg py-40 md:py-64 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center relative z-10">
        
        {/* Total Profiles Profile Profile Profile Card */}
        <motion.div 
          className="w-full md:w-[400px] h-[320px] bg-primary rounded-[4rem] md:rounded-[5rem] flex flex-col items-center justify-center text-white/90 relative p-12 overflow-hidden shadow-2xl shadow-primary/10 transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute top-10 flex items-center justify-center opacity-20"><PawPrintSVG size={32} color="currentColor" /></div>
          <div className="text-5xl md:text-[80px] font-noto font-black text-white leading-none mb-4 tabular-nums">
            {stats.total.toLocaleString()}+
          </div>
          <p className="text-[11px] md:text-sm font-jakarta font-black uppercase tracking-[0.2em] opacity-40">Profiles Ready</p>
        </motion.div>

        {/* Cities Card Cities Cities Card Card */}
        <motion.div 
          className="w-full md:w-[400px] h-[320px] bg-surface-low rounded-[4rem] md:rounded-[5rem] flex flex-col items-center justify-center text-primary relative p-12 shadow-[0_32px_64px_rgba(0,0,0,0.03)] transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration:0.8, delay: 0.4 }}
        >
          <div className="absolute top-10 flex items-center justify-center opacity-20"><MapPin size={32} color="currentColor" /></div>
          <div className="text-5xl md:text-[80px] font-noto font-black text-primary leading-none mb-4 tabular-nums">
            {stats.cities}+
          </div>
          <p className="text-[11px] md:text-sm font-jakarta font-black uppercase tracking-[0.2em] opacity-40">Cities Live</p>
        </motion.div>

        {/* Top Breed Card Top Breed Top Breed Card */}
        <motion.div 
          className="w-full md:w-[400px] h-[320px] bg-accent rounded-[4rem] md:rounded-[5rem] flex flex-col items-center justify-center text-primary relative p-12 shadow-2xl shadow-accent/10 transition-transform hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration:0.8, delay: 0.6 }}
        >
          <div className="absolute top-10 flex items-center justify-center opacity-20"><Star size={32} color="currentColor" /></div>
          <div className="text-3xl md:text-[52px] font-noto font-black text-primary leading-tight mb-4 text-center">
            {stats.top_pet}
          </div>
          <p className="text-[11px] md:text-sm font-jakarta font-black uppercase tracking-[0.2em] opacity-40">Top Breed This Week</p>
        </motion.div>
      </div>
    </section>
  );
};
