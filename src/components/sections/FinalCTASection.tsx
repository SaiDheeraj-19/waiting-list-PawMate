'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { useRouter } from 'next/navigation';
import { joinWaitlist } from '@/app/actions/waitlist';
import { ArrowRight } from 'lucide-react';

export const FinalCTASection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const referredBy = typeof window !== 'undefined' ? localStorage.getItem('referred_by') || undefined : undefined;
      const result = await joinWaitlist({ email, referred_by: referredBy });
      if (result.success || result.error === 'already_exists') {
        router.push(`/joined?code=${result.referral_code || ''}`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-primary py-64 md:py-80 px-4 relative flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
        <PawPrintSVG size={800} color="#FAF8F4" />
      </div>

      <motion.div 
        className="max-w-4xl mx-auto z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-5xl md:text-[110px] font-noto font-black text-[#FAF8F4] leading-[0.9] mb-12 tracking-tight">
           Start your pet&apos;s <br /> <span className="text-accent italic">social journey.</span>
        </h2>
        
        <p className="text-lg md:text-xl font-jakarta font-medium text-[#FAF8F4]/50 max-w-xl mx-auto mb-20">
          Join 42,482+ other pet owners already on the list.
        </p>

        <form 
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row bg-white/10 backdrop-blur-3xl rounded-[3rem] p-2 md:p-3 w-full max-w-3xl mx-auto shadow-2xl shadow-primary/20 border border-white/10 transition-all focus-within:border-accent/40"
        >
          <input 
            type="email" 
            placeholder="Your best email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-transparent px-8 py-4 outline-none font-jakarta text-[#FAF8F4] placeholder:text-[#FAF8F4]/30 font-semibold"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="bg-accent text-primary font-jakarta font-black px-12 py-5 rounded-[2rem] flex items-center justify-center gap-3 hover:scale-105 transition-all group disabled:opacity-70 whitespace-nowrap"
          >
            {loading ? '🐾 Joining...' : (
              <>Join the pack 🐾 <ArrowRight className="group-hover:translate-x-1" size={20} /></>
            )}
          </button>
        </form>

        <div className="mt-8 text-[11px] font-jakarta font-black text-[#FAF8F4]/30 uppercase tracking-[0.2em] animate-pulse">
           Invite only. Secure your spot today.
        </div>
      </motion.div>
    </section>
  );
};
