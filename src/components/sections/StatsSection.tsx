'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

interface StatsProps {
  initialStats?: {
    total: number;
    cities: number;
    top_pet: string;
  };
}

export const StatsSection = ({ initialStats }: StatsProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const stats = initialStats || { total: 42000, cities: 156, top_pet: 'Golden Retriever' };

  return (
    <section ref={ref} className="bg-[#F9F7F3] py-40 md:py-56 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section label */}
        <div className="flex items-center gap-3 mb-20">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C8922A]" />
          <p className="font-jakarta text-[10px] font-black uppercase tracking-[0.25em] text-[#1A1A1A]/35">By the numbers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Stat 1 — Total pets */}
          <motion.div
            className="relative rounded-[40px] overflow-hidden bg-[#1A3D2B] aspect-[4/5] flex flex-col justify-end p-10"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 opacity-20">
              <Image src="/dog_portrait.jpg" alt="" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative z-10">
              <p className="font-noto font-black text-[72px] md:text-[96px] text-white leading-none tracking-tight tabular-nums">
                {stats.total >= 1000 ? `${Math.floor(stats.total / 1000)}K` : stats.total}+
              </p>
              <p className="mt-2 font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Profiles Created
              </p>
            </div>
          </motion.div>

          {/* Stat 2 — Cities */}
          <motion.div
            className="relative rounded-[40px] overflow-hidden bg-[#F3F1EC] aspect-[4/5] flex flex-col justify-end p-10"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative z-10">
              <p className="font-noto font-black text-[72px] md:text-[96px] text-[#1A3D2B] leading-none tracking-tight tabular-nums">
                {stats.cities}+
              </p>
              <p className="mt-2 font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/30">
                Cities Active
              </p>
            </div>
          </motion.div>

          {/* Stat 3 — Top breed */}
          <motion.div
            className="relative rounded-[40px] overflow-hidden aspect-[4/5] flex flex-col justify-end p-10"
            style={{ backgroundColor: '#C8922A' }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 opacity-30">
              <Image src="/cat_portrait.jpg" alt="" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative z-10">
              <p className="font-noto font-black text-[40px] md:text-[56px] text-white leading-[1] tracking-tight">
                {stats.top_pet}
              </p>
              <p className="mt-2 font-jakarta text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                Most Popular Breed
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
