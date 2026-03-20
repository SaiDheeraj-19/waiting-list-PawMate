'use client';

import React, { useState, useEffect } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { DoublePawSVG } from '../svg/DoublePawSVG';
import { DogSVG } from '../svg/DogSVG';
import { TailWagSVG } from '../svg/TailWagSVG';
import { FootprintTrailSVG } from '../svg/FootprintTrailSVG';
import { MapPin } from 'lucide-react';

interface StatsProps {
  initialStats?: {
    total: number;
    cities: number;
    top_pet: string;
  };
}

export const StatsSection = ({ initialStats }: StatsProps) => {
  const [stats, setStats] = useState(initialStats || { total: 0, cities: 0, top_pet: 'dog' });

  return (
    <section className="bg-brand-bg py-24 relative">
      <div className="absolute top-0 left-0 w-full rotate-180 opacity-20 overflow-hidden">
        <FootprintTrailSVG color="#1A3D2B" size={400} className="w-full h-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-5 items-center gap-12">
        <StatItem 
          count={stats.total} 
          label="Pet owners waiting" 
          icon={<DoublePawSVG size={40} color="#F5A623" />} 
        />
        
        <TailWagSVG className="hidden md:block mx-auto opacity-10 rotate-90" size={40} color="#1A3D2B" />
        
        <StatItem 
          count={stats.cities} 
          label="Cities represented" 
          icon={<MapPin size={40} className="text-accent" />} 
        />
        
        <TailWagSVG className="hidden md:block mx-auto opacity-10 rotate-90" size={40} color="#1A3D2B" />
        
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="p-4 bg-primary/5 rounded-3xl animate-float">
            <DogSVG size={64} className="text-primary hover:rotate-12 transition-transform" />
          </div>
          <div>
            <span className="font-playfair text-2xl md:text-3xl font-bold text-primary capitalize leading-tight">
              {stats.top_pet}s
            </span>
            <p className="mt-2 font-dm-sans font-bold text-[10px] md:text-xs uppercase tracking-widest text-brand-muted">Most popular pet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ count, label, icon }: { count: number; label: string; icon: React.ReactNode }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (val) => Math.floor(val).toLocaleString());

  useEffect(() => {
    if (isInView) spring.set(count);
  }, [isInView, count, spring]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-4 text-center">
      <div className="p-4 bg-accent/10 rounded-3xl group px-8">
        {icon}
      </div>
      <div>
        <motion.span className="font-playfair text-5xl md:text-6xl font-black text-primary leading-none">
          {display}
        </motion.span>
        <p className="mt-3 font-dm-sans font-bold text-xs uppercase tracking-widest text-brand-muted">{label}</p>
      </div>
    </div>
  );
};
