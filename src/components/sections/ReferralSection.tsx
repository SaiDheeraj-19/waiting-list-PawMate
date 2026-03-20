'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const tiers = [
  {
    label: '1 referral',
    title: 'Silver Badge',
    perk: 'Skip 100 spots instantly',
  },
  {
    label: '3 referrals',
    title: 'Gold Access',
    perk: '3 months free premium',
    featured: true,
  },
  {
    label: '10 referrals',
    title: 'Founding Member',
    perk: '2 years free premium',
  },
];

export const ReferralSection = () => {
  return (
    <section id="referral" className="bg-[#F9F7F3] py-40 md:py-56 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          
          {/* Left — image + tag */}
          <motion.div
            className="w-full md:w-[45%] relative rounded-[40px] overflow-hidden aspect-[4/5] flex-shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src="/pets_playing.jpg" alt="Dogs playing together" fill className="object-cover" sizes="45vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A3D2B]/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-noto font-black text-white text-3xl leading-tight">
                Bring a friend.<br />Move up the list.
              </p>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            className="w-full md:flex-1 flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C8922A]" />
              <p className="font-jakarta text-[10px] font-black uppercase tracking-[0.25em] text-[#1A1A1A]/35">Referral rewards</p>
            </div>

            <h2 className="font-noto font-black text-[#1A3D2B] text-[44px] md:text-[64px] leading-[0.95] tracking-[-0.03em] mb-8">
              Move up<br />the waitlist.
            </h2>

            <p className="font-jakarta font-medium text-[#1A1A1A]/45 text-base leading-[1.7] max-w-sm mb-14">
              Refer friends and earn exclusive rewards. The more friends you bring, the earlier you get access and the more perks you unlock.
            </p>

            {/* Tier cards */}
            <div className="flex flex-col gap-4">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`rounded-[24px] p-6 flex items-center justify-between gap-6 transition-colors ${
                    tier.featured 
                      ? 'bg-[#1A3D2B] text-white' 
                      : 'bg-[#F3F1EC] text-[#1A3D2B]'
                  }`}
                >
                  <div>
                    <p className={`font-jakarta text-[9px] font-black uppercase tracking-[0.2em] mb-1 ${tier.featured ? 'text-white/40' : 'text-[#1A1A1A]/30'}`}>
                      {tier.label}
                    </p>
                    <p className={`font-noto font-black text-xl tracking-tight ${tier.featured ? 'text-white' : 'text-[#1A3D2B]'}`}>
                      {tier.title}
                    </p>
                    <p className={`font-jakarta text-xs font-medium mt-1 ${tier.featured ? 'text-white/50' : 'text-[#1A1A1A]/40'}`}>
                      {tier.perk}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${tier.featured ? 'bg-[#C8922A]' : 'bg-[#1A3D2B]/8'}`}>
                    <ArrowUpRight size={18} className={tier.featured ? 'text-white' : 'text-[#1A3D2B]'} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
