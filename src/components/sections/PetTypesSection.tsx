'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { DogSVG } from '../svg/DogSVG';
import { CatSVG } from '../svg/CatSVG';
import { RabbitSVG } from '../svg/RabbitSVG';
import { BirdSVG } from '../svg/BirdSVG';
import { HeartPawSVG } from '../svg/HeartPawSVG';
import { ArrowRight, BadgeCheck } from 'lucide-react';

interface PetTypeProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  tagline: string;
  color: string;
  count: number;
}

const petTypes: Omit<PetTypeProps, 'count'>[] = [
  {
    id: 'dog',
    label: 'Dogs',
    tagline: 'Faithful companions, ready for adventure.',
    icon: <DogSVG size={80} />,
    description: "From morning park runs to quiet café tail-wags, PawMate finds your canine the perfect neighborhood pack. Filter by energy level and size.",
    color: "bg-primary"
  },
  {
    id: 'cat',
    label: 'Cats',
    tagline: 'Elegant souls, seeking quiet friendships.',
    icon: <CatSVG size={80} />,
    description: "Whether it's indoor playdates or safe breeding matches, connect with other feline enthusiasts who understand the unique bonds cats share.",
    color: "bg-accent"
  },
  {
    id: 'rabbit',
    label: 'Rabbits',
    tagline: 'Gentle spirits, social by nature.',
    icon: <RabbitSVG size={80} />,
    description: "Rabbits are deeply social animals. Connect with other 'binky' lovers to give your bun a friend to groom and forage with in safe environments.",
    color: "bg-primary"
  },
  {
    id: 'bird',
    label: 'Birds',
    tagline: 'Bright minds, soaring together.',
    icon: <BirdSVG size={80} />,
    description: "Smart, social, and communicative. Meet fellow bird parents for shared flying sessions or just a morning chirp-along in your local city.",
    color: "bg-accent"
  }
];

export const PetTypesSection = ({ perType }: { perType: { pet_type: string; count: number }[] }) => {
  const [selected, setSelected] = useState<string>('dog');

  const getCount = (id: string) => {
    return perType?.find(p => p.pet_type === id)?.count || 0;
  };

  return (
    <section id="pet-types" className="bg-brand-bg py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 font-dm-sans">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-playfair font-black text-primary leading-tight mb-8"
          >
            Built for 
            <span className="text-accent italic tracking-tight"> every animal </span> 
            you love.
          </motion.h2>
          <p className="text-xl text-brand-muted font-bold leading-relaxed mb-12">Select a species to see how the PawMate ecosystem helps them thrive through social connection.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Selective List list list choice choice choice */}
          <div className="flex flex-col gap-4">
            <LayoutGroup>
              {petTypes.map((type) => (
                <motion.button 
                  key={type.id}
                  onClick={() => setSelected(type.id)}
                  className={`relative p-8 rounded-[40px] text-left transition-all duration-500 overflow-hidden group
                    ${selected === type.id ? 'bg-white shadow-2xl shadow-primary/10' : 'bg-transparent hover:bg-white/40'}`}
                >
                  <div className="flex items-center gap-8 relative z-10">
                    <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center transition-all duration-700
                      ${selected === type.id ? 'bg-primary text-white scale-110 shadow-xl' : 'bg-primary/5 text-primary'}`}>
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair font-black text-primary mb-1">{type.label}</h3>
                      <p className="text-sm font-black text-brand-muted uppercase tracking-[0.2em] opacity-60">{getCount(type.id).toLocaleString()} Active Owners</p>
                    </div>
                    <div className={`ml-auto ${selected === type.id ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                      <BadgeCheck className="text-accent" size={32} />
                    </div>
                  </div>
                  
                  {selected === type.id && (
                    <motion.div 
                      layoutId="active-pill"
                      className="absolute left-0 top-0 bottom-0 w-2 bg-accent rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </LayoutGroup>
          </div>

          {/* Dynamic dynamic dynamic display display display side */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={selected}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white p-12 md:p-20 rounded-[64px] shadow-2xl shadow-primary/5 border-4 border-primary/5 flex flex-col relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 opacity-[0.03] group-hover:rotate-12 transition-transform pointer-events-none">
                 <PawPrintSVG size={400} />
              </div>

              <div className="mb-10">
                <HeartPawSVG size={48} color="#F5A623" className="mb-8" />
                <h4 className="text-3xl md:text-5xl font-playfair font-black text-primary leading-tight mb-6">
                  {petTypes.find(t => t.id === selected)?.tagline}
                </h4>
                <p className="text-xl text-brand-muted leading-[1.8] font-medium opacity-80 mb-10">
                  {petTypes.find(t => t.id === selected)?.description}
                </p>
              </div>

              <div className="mt-auto flex flex-col items-stretch gap-6">
                <div className="flex items-center justify-between p-6 bg-brand-bg rounded-[32px] border border-black/5">
                   <div>
                      <h5 className="text-xs font-dm-sans font-black text-brand-muted uppercase tracking-[0.3em] mb-1">Local Network 🌍</h5>
                      <p className="text-xl font-playfair font-black text-primary">Priority search active in your city</p>
                   </div>
                   <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-2xl shadow-lg">
                      <ArrowRight size={24} />
                   </div>
                </div>

                <a 
                  href="#join-form"
                  className="bg-primary text-white py-6 rounded-full font-black uppercase text-xs tracking-[0.4em] flex items-center justify-center gap-4 hover:bg-accent hover:text-primary transition-all duration-500 shadow-xl shadow-primary/20 group"
                >
                  Join the {selected} waitlist 🐾
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
