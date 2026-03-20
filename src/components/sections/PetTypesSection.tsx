'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const gallery = [
  { src: '/dog_portrait.jpg', label: 'Dogs', sub: '6.2k profiles' },
  { src: '/cat_portrait.jpg', label: 'Cats', sub: '5.4k profiles' },
  { src: '/rabbit_portrait.jpg', label: 'Rabbits', sub: '1.1k profiles' },
  { src: '/pet_owner_lifestyle.jpg', label: 'Owners', sub: '12k members' },
];

export const PetTypesSection = () => {
  return (
    <section id="gallery" className="bg-[#F3F1EC] py-40 md:py-56 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 md:mb-28 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8922A]" />
              <p className="font-jakarta text-[10px] font-black uppercase tracking-[0.25em] text-[#1A1A1A]/35">Every creature</p>
            </div>
            <h2 className="font-noto font-black text-[#1A3D2B] text-[48px] md:text-[80px] leading-[0.92] tracking-[-0.03em]">
              For every<br />kind of pet.
            </h2>
          </div>
          <p className="font-jakarta text-[#1A1A1A]/40 text-base font-medium leading-relaxed max-w-xs">
            Our community is built for every type of animal companion — from loyal dogs to curious rabbits.
          </p>
        </motion.div>

        {/* Masonry-style photowall */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              className={`relative rounded-[32px] overflow-hidden group cursor-pointer ${i === 3 ? 'col-span-2 md:col-span-1' : ''}`}
              style={{ aspectRatio: i === 1 ? '3/4' : '2/3' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3D2B]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-noto font-black text-white text-xl">{item.label}</p>
                <p className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mt-1">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
