'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "1",
    title: "Create profile",
    description: "Tell us about your pet's personality, favorite toys, and what they're looking for."
  },
  {
    number: "2",
    title: "Browse pets",
    description: "Filter by species, breed, location, and intent (Playdates or Breeding)."
  },
  {
    number: "3",
    title: "Connect owners",
    description: "Safe, encrypted chat to organize meetups at local parks or pet-friendly spots."
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-brand-bg py-40 md:py-64 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <motion.div 
          className="text-center mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-noto font-black text-primary tracking-tight leading-tight mb-8 underline decoration-accent/40 decoration-[6px] underline-offset-[16px]">
            How PawMate works
          </h2>
          <p className="text-lg md:text-xl font-jakarta font-medium text-brand-muted max-w-xl mx-auto">
            From first sniff to best friends — we make pet social networking safe and simple.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full max-w-6xl">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              className="bg-surface-low rounded-[3rem] p-12 flex flex-col items-start gap-8 relative transition-transform hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-noto font-black text-2xl shadow-xl shadow-primary/20">
                {step.number}
              </div>
              <div>
                <h3 className="text-2xl font-noto font-black text-primary mb-4 tracking-tight">{step.title}</h3>
                <p className="text-brand-muted font-jakarta font-medium leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
