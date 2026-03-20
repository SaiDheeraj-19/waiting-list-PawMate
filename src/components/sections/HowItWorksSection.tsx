'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const steps = [
  {
    n: '01',
    title: 'Build your pet\'s profile',
    body: 'Create a rich profile with photos, personality traits, breed details, and what you\'re looking for — playdates, breeding, or just friendship.',
    img: '/dog_portrait.jpg',
  },
  {
    n: '02',
    title: 'Discover nearby matches',
    body: 'Browse pets filtered by species, breed, age, distance, and intent. Our algorithm surfaces the best-fit companions first.',
    img: '/cat_portrait.jpg',
  },
  {
    n: '03',
    title: 'Connect safely',
    body: 'Chat through our encrypted messaging system. You control when and how much to share before arranging a meetup.',
    img: '/pets_playing.jpg',
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-[#F9F7F3] py-40 md:py-56 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section header */}
        <motion.div
          className="mb-24 md:mb-40 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8922A]" />
            <p className="font-jakarta text-[10px] font-black uppercase tracking-[0.25em] text-[#1A1A1A]/35">How it works</p>
          </div>
          <h2 className="font-noto font-black text-[#1A3D2B] text-[48px] md:text-[80px] leading-[0.95] tracking-[-0.03em]">
            Simple.<br />Safe.<br />Social.
          </h2>
        </motion.div>

        {/* Steps row — alternating layout */}
        <div className="flex flex-col gap-8 md:gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-10 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className="w-full md:w-[55%] relative rounded-[40px] overflow-hidden aspect-[16/10]">
                <Image src={step.img} alt={step.title} fill className="object-cover" sizes="55vw" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#1A3D2B]/10" />
              </div>

              {/* Text */}
              <div className="w-full md:w-[45%] flex flex-col px-0 md:px-8">
                <span className="font-noto font-black text-[#1A1A1A]/10 text-[120px] leading-none tracking-tight mb-4 select-none">
                  {step.n}
                </span>
                <h3 className="font-noto font-black text-[#1A3D2B] text-[30px] md:text-[40px] leading-[1.05] tracking-tight mb-6 -mt-8">
                  {step.title}
                </h3>
                <p className="font-jakarta font-medium text-[#1A1A1A]/50 text-base md:text-lg leading-[1.7]">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
