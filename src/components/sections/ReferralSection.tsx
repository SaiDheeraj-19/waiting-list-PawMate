'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Trophy, Crown, Gift } from 'lucide-react';

const tiers = [
  {
    icon: <Trophy className="text-accent" size={40} />,
    title: "1 FRIEND",
    reward: "Silver Badge",
    description: "Profile priority in search",
    color: "bg-surface-low/50"
  },
  {
    icon: <Crown className="text-accent" size={48} />,
    title: "5 FRIENDS",
    reward: "Gold Access",
    description: "Early Alpha Access + No Ads",
    color: "bg-accent/5",
    featured: true
  },
  {
    icon: <Gift className="text-accent" size={40} />,
    title: "10 FRIENDS",
    reward: "Founding Member",
    description: "Lifetime Premium Free",
    color: "bg-surface-low/50"
  }
];

export const ReferralSection = () => {
  return (
    <section id="referral" className="bg-brand-bg py-40 md:py-64 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center z-10 relative">
        
        <div className="bg-white rounded-[4rem] md:rounded-[6rem] p-12 md:p-32 w-full max-w-6xl flex flex-col items-center text-center shadow-[0_64px_128px_-24px_rgba(2,39,23,0.06)] relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
             <Rocket size={800} className="rotate-45" />
          </div>

          <motion.div 
            className="mb-24 z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-[90px] font-noto font-black text-primary tracking-tight leading-tight mb-8">
               Move up the waitlist 🚀
            </h2>
            <p className="text-lg md:text-xl font-jakarta font-medium text-brand-muted max-w-xl mx-auto">
               Refer friends and climb the ranks to get early access before everyone else.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full z-10">
            {tiers.map((tier, i) => (
              <motion.div 
                key={i}
                className={`rounded-[4rem] p-12 flex flex-col items-center justify-center transition-all duration-300 ${tier.color} ${tier.featured ? 'scale-110 shadow-xl shadow-accent/5' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 1 }}
              >
                <div className="mb-10 p-6 bg-white rounded-full shadow-lg">
                  {tier.icon}
                </div>
                <div className="text-[10px] font-jakarta font-black text-brand-muted/50 uppercase tracking-[0.2em] mb-4">
                  REFERRED {tier.title}
                </div>
                <h3 className="text-3xl font-noto font-black text-primary leading-tight mb-2 tracking-tight">{tier.reward}</h3>
                <p className="font-jakarta text-xs font-semibold text-brand-muted max-w-[140px] leading-relaxed mx-auto italic">{tier.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
