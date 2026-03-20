'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DogSVG } from '../svg/DogSVG';
import { CatSVG } from '../svg/CatSVG';
import { RabbitSVG } from '../svg/RabbitSVG';
import { BirdSVG } from '../svg/BirdSVG';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { ArrowRight } from 'lucide-react';

const petTypes = [
  { id: 'dog', label: 'Dog', icon: <DogSVG size={120} color="white" />, count: "6.2k registered" },
  { id: 'cat', label: 'Cat', icon: <CatSVG size={120} color="white" />, count: "5.4k registered" },
  { id: 'rabbit', label: 'Rabbit', icon: <RabbitSVG size={120} color="white" />, count: "1.1k registered" },
  { id: 'bird', label: 'Bird', icon: <BirdSVG size={120} color="white" />, count: "800 registered" },
  { id: 'other', label: 'Other', icon: <PawPrintSVG size={120} color="white" />, count: "500 registered" }
];

export const PetTypesSection = ({ perType }: any) => {
  return (
    <section id="pet-types" className="bg-primary py-40 md:py-64 px-4 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <PawPrintSVG size={1000} color="#FAF8F4" />
      </div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 md:mb-32 gap-12">
          <motion.div 
            className="flex-1 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-8xl font-noto font-black text-[#FAF8F4] tracking-tight leading-tight mb-4">
              For every <span className="text-secondary italic">kind of pet</span> <span className="opacity-50">🐾</span>
            </h2>
            <p className="text-lg md:text-xl font-jakarta font-medium text-[#FAF8F4]/60 max-w-xl">
               Our community welcomes all creatures great and small.
            </p>
          </motion.div>
          
          <motion.button 
            className="bg-accent text-primary px-10 py-5 rounded-full font-jakarta font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>View All Categories</span>
            <ArrowRight size={18} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {petTypes.map((type, i) => (
            <motion.div 
              key={type.id}
              className="bg-white/10 backdrop-blur-3xl rounded-[3rem] p-10 flex flex-col items-center justify-center text-center group cursor-pointer border border-white/5 relative overflow-hidden h-[340px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <div className="mb-10 transform scale-125 group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl opacity-80">
                {type.icon}
              </div>
              <div className="z-10">
                <h3 className="text-2xl font-noto font-black text-[#FAF8F4] mb-2">{type.label}</h3>
                <p className="text-[10px] md:text-xs font-jakarta font-bold text-[#FAF8F4]/40 uppercase tracking-widest">{type.count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
