'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { DoublePawSVG } from '../svg/DoublePawSVG';
import { HeartPawSVG } from '../svg/HeartPawSVG';
import { FootprintTrailSVG } from '../svg/FootprintTrailSVG';

export const ReferralSection = () => {
  const tiers = [
    {
      id: 1,
      title: 'Refer 1 friend',
      sub: 'They join, you both win',
      reward: '⏫ Skip 100 spots',
      bg: 'bg-accent',
      text: 'text-primary',
      icon: <PawPrintSVG size={40} color="currentColor" />,
    },
    {
      id: 2,
      popular: true,
      title: 'Refer 3 friends',
      sub: ' Unlock new premium features ',
      reward: '🎁 3 months free premium',
      bg: 'bg-white',
      border: 'border-2 border-primary',
      text: 'text-primary',
      icon: <DoublePawSVG size={48} color="currentColor" />,
    },
    {
      id: 3,
      title: 'Refer 10 friends',
      sub: ' Become a founding member ',
      reward: '👑 Lifetime free premium',
      bg: 'bg-accent',
      text: 'text-primary',
      icon: <HeartPawSVG size={40} color="currentColor" />,
    },
  ];

  return (
    <section className="bg-primary pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute top-10 right-10 rotate-12 opacity-10">
        <DoublePawSVG color="#F5A623" size={300} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-black text-brand-bg leading-tight mb-6">
            Move up the waitlist 🚀
          </h2>
          <p className="text-xl font-dm-sans text-brand-bg/80">
            Share PawMate with your friends and local pet communities to unlock exclusive early member rewards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4">
          {tiers.map((tier) => (
            <motion.div 
              key={tier.id}
              className={`relative p-10 rounded-[40px] flex flex-col items-center gap-6 shadow-2xl transition-all duration-300 overflow-hidden
                ${tier.bg} ${tier.text} ${tier.border || ''} ${tier.popular ? 'scale-105 z-10' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: tier.popular ? 1.08 : 1.03 }}
            >
              {tier.popular && (
                <div className="absolute top-6 bg-accent text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg animate-pulse">
                  ⭐ Most popular
                </div>
              )}

              <div className="opacity-10 absolute inset-0 pointer-events-none flex items-center justify-center translate-y-10">
                <PawPrintSVG size={300} color="currentColor" />
              </div>

              <div className="p-4 bg-white/10 rounded-3xl backdrop-blur-sm shadow-inner mt-4">
                {tier.icon}
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-playfair font-black mb-2">{tier.title}</h3>
                <p className="text-sm opacity-70 mb-8 font-dm-sans font-medium uppercase tracking-widest leading-relaxed">{tier.sub}</p>
                <div className="bg-primary/10 px-6 py-4 rounded-3xl font-black text-lg md:text-xl transform rotate-[-2deg] shadow-lg border border-primary/5">
                  {tier.reward}
                </div>
              </div>

              {tier.popular && (
                <div className="absolute inset-0 border-2 border-accent rounded-[40px] opacity-20 pointer-events-none animate-pulse-slow"></div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center group">
          <motion.a 
            href="#join-form"
            className="inline-flex items-center gap-4 bg-brand-bg text-primary font-dm-sans font-black py-6 px-12 rounded-full text-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:bg-accent hover:translate-y-[-5px] transition-all duration-300 group"
          >
            <span>Join the waitlist to get your link</span>
            <span className="scale-125 group-hover:rotate-12 group-hover:translate-x-1 transition-transform">🐾</span>
          </motion.a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-20 rotate-180">
        <FootprintTrailSVG color="#F5A623" size={300} className="w-full h-20" />
      </div>
    </section>
  );
};
