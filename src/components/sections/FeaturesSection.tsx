'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Lock, Calendar, ClipboardCheck, MessageSquareMore } from 'lucide-react';

const features = [
  {
    icon: <Zap size={22} strokeWidth={1.5} />,
    title: 'Smart Matching',
    body: 'AI-powered recommendations based on breed compatibility, energy levels, and location proximity.',
  },
  {
    icon: <ShieldCheck size={22} strokeWidth={1.5} />,
    title: 'Fully Verified',
    body: 'Every pet owner is verified through a multi-step process to ensure a safe environment.',
  },
  {
    icon: <Lock size={22} strokeWidth={1.5} />,
    title: 'Privacy First',
    body: 'Your location and contact details are never shared without your explicit consent.',
  },
  {
    icon: <Calendar size={22} strokeWidth={1.5} />,
    title: 'Event Organizer',
    body: 'Schedule and host local pet meetups and playdates directly inside the app.',
  },
  {
    icon: <ClipboardCheck size={22} strokeWidth={1.5} />,
    title: 'Health Records',
    body: 'Share vaccination status and health certifications securely with prospective matches.',
  },
  {
    icon: <MessageSquareMore size={22} strokeWidth={1.5} />,
    title: 'Safe Messaging',
    body: 'Encrypted, in-app chat that filters spam and keeps every conversation meaningful.',
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="bg-[#F9F7F3] py-40 md:py-56 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header row */}
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-end justify-between mb-24 md:mb-36 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8922A]" />
              <p className="font-jakarta text-[10px] font-black uppercase tracking-[0.25em] text-[#1A1A1A]/35">Built for care</p>
            </div>
            <h2 className="font-noto font-black text-[#1A3D2B] text-[48px] md:text-[80px] leading-[0.92] tracking-[-0.03em]">
              Everything<br />you need.
            </h2>
          </div>
          <p className="font-jakarta text-[#1A1A1A]/40 text-base font-medium leading-relaxed max-w-xs">
            PawMate was designed from the ground up to be the most trustworthy and joyful pet social platform.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              className="group bg-[#F3F1EC] rounded-[32px] p-10 flex flex-col gap-7 hover:bg-[#1A3D2B] transition-all duration-500 cursor-default"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#C8922A] flex items-center justify-center text-[#1A3D2B] group-hover:text-white transition-all duration-500 shadow-ambient">
                {feat.icon}
              </div>
              <div>
                <h3 className="font-noto font-black text-[#1A3D2B] group-hover:text-white text-xl tracking-tight mb-3 transition-colors duration-500">
                  {feat.title}
                </h3>
                <p className="font-jakarta font-medium text-[#1A1A1A]/45 group-hover:text-white/50 text-sm leading-[1.7] transition-colors duration-500">
                  {feat.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
