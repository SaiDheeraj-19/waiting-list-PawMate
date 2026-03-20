'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DogSVG } from '../svg/DogSVG';
import { CatSVG } from '../svg/CatSVG';
import { RabbitSVG } from '../svg/RabbitSVG';
import { BirdSVG } from '../svg/BirdSVG';
import { FishSVG } from '../svg/FishSVG';
import { PawPrintSVG } from '../svg/PawPrintSVG';

export const PetTypesSection = ({ perType }: { perType: { pet_type: string, count: number }[] }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const species = [
    { 
      id: 'dog', 
      name: 'Dogs', 
      icon: <DogSVG size={80} color="currentColor" />, 
      color: 'bg-primary' ,
      desc: 'From energetic puppies to calm seniors — find the perfect playdate partner or responsible breeding match in your city.'
    },
    { 
      id: 'cat', 
      name: 'Cats', 
      icon: <CatSVG size={80} color="currentColor" />, 
      color: 'bg-accent',
      desc: 'Indoor cats need friends too. Find compatible cats for supervised playdates and kitten breeding connections.'
    },
    { 
      id: 'rabbit', 
      name: 'Rabbits', 
      icon: <RabbitSVG size={80} color="currentColor" />, 
      color: 'bg-primary',
      desc: 'Rabbits bond deeply with companions. Help yours find a matched friend safely with owners who understand rabbit care.'
    },
    { 
      id: 'bird', 
      name: 'Birds', 
      icon: <BirdSVG size={80} color="currentColor" />, 
      color: 'bg-accent',
      desc: 'Connect with other bird enthusiasts for aviary visits, breeding advice, and species-specific owner communities.'
    },
    { 
      id: 'other', 
      name: 'Other', 
      icon: <div className="flex gap-1 overflow-hidden h-10 items-center justify-center scale-75 group-hover:scale-110 transition-transform"><DogSVG size={20}/><CatSVG size={20}/><RabbitSVG size={20}/><BirdSVG size={20}/></div>, 
      color: 'bg-primary',
      desc: 'Got a hamster, reptile, fish or exotic pet? PawMate welcomes every animal and every owner who loves them.'
    },
  ];

  const getCount = (id: string) => {
    return perType.find(t => t.pet_type === id)?.count || 0;
  };

  return (
    <section id="pets" className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-black text-primary mb-4">For every kind of pet 🐾</h2>
          <p className="text-xl font-dm-sans text-brand-muted max-w-xl mx-auto">Not just dogs — PawMate welcomes all animals</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {species.map((item) => (
            <motion.button 
              key={item.id}
              onClick={() => setSelected(selected === item.id ? null : item.id)}
              className={`p-6 rounded-3xl border-2 transition-all group flex flex-col items-center gap-4 hover:shadow-2xl hover:shadow-primary/10
                ${selected === item.id ? 'border-primary bg-primary/5' : 'border-transparent bg-white shadow-xl shadow-black/5'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-20 h-20 grow rounded-full flex items-center justify-center p-3 text-white shadow-lg ${item.color}`}>
                {item.icon}
              </div>
              <span className="font-dm-sans font-black text-primary tracking-tight">{item.name}</span>
              <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                {getCount(item.id)} owners
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-12 overflow-hidden bg-primary/5 rounded-[40px] px-8 md:px-16"
            >
              <div className="py-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="p-8 bg-white rounded-[40px] shadow-2xl shadow-primary/10 animate-float flex-shrink-0">
                  {selected === 'other' ? (
                    <div className="grid grid-cols-2 gap-4">
                      <DogSVG size={40} className="text-primary"/>
                      <CatSVG size={40} className="text-accent"/>
                      <RabbitSVG size={40} className="text-primary"/>
                      <BirdSVG size={40} className="text-accent"/>
                    </div>
                  ) : (
                    species.find(s => s.id === selected)?.icon
                  )}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-playfair font-black text-primary mb-4 capitalize">{selected} matches</h3>
                  <p className="text-xl font-dm-sans text-brand-muted leading-relaxed max-w-2xl">
                    {species.find(s => s.id === selected)?.desc}
                  </p>
                  <button className="mt-8 bg-primary text-white font-dm-sans font-bold px-8 py-3 rounded-full hover:bg-accent transition-all duration-300 shadow-xl shadow-primary/20">
                    Find {selected} owners →
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
