'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { HeartPawSVG } from '../svg/HeartPawSVG';
import { MapPin } from 'lucide-react';

export const HowItWorksSection = () => {
  const steps = [
    {
      num: '01',
      title: 'Create your pet\'s profile',
      body: 'Add your pet\'s species, breed, age, personality and what you are looking for. Takes under 2 minutes.',
      icon: <PawPrintSVG size={32} color="white" />,
      color: 'bg-primary',
    },
    {
      num: '02',
      title: 'Browse pets near you',
      body: 'Filter by species, breed, size and intent. Find compatible pets nearby. Set your distance from 5km to 100km.',
      icon: <MapPin size={32} color="white" />,
      color: 'bg-accent',
    },
    {
      num: '03',
      title: 'Connect with owners',
      body: 'When both pets match, owners can chat safely and arrange a meetup at a park or public space.',
      icon: <HeartPawSVG size={32} color="white" />,
      color: 'bg-primary',
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#E8F5EE] py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-black text-primary mb-4">How PawMate works</h2>
          <p className="text-lg font-dm-sans text-brand-muted max-w-xl mx-auto">Your pet's social life in 3 simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              className="bg-white rounded-3xl p-8 relative shadow-xl shadow-primary/5 hover:translate-y-[-10px] transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="absolute -top-10 left-8 font-playfair font-black text-7xl text-accent/20 tracking-tighter select-none">{step.num}</div>
              
              <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-black/5`}>
                {step.icon}
              </div>

              <h3 className="text-2xl font-playfair font-bold text-primary mb-4">{step.title}</h3>
              <p className="font-dm-sans text-brand-muted leading-relaxed text-sm md:text-base mb-8">{step.body}</p>

              <div className="flex gap-2">
                {[1, 2, 3].map((p) => (
                  <PawPrintSVG 
                    key={p} 
                    size={16} 
                    color={step.color === 'bg-accent' ? '#F5A623' : '#1A3D2B'} 
                    className="opacity-20 translate-x-[20px] md:translate-x-[40px] animate-pulse" 
                    style={{ animationDelay: `${p * 0.2}s` }}
                  />
                ))}
                {i === 2 && <HeartPawSVG size={18} color="#F5A623" className="ml-2 animate-bounce" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
