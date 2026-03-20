'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { joinWaitlist } from '@/app/actions/waitlist';
import { useRouter } from 'next/navigation';

export const FinalCTASection = ({ totalWaitlistCount = 0 }: { totalWaitlistCount?: number }) => {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !city) return;
    setLoading(true);
    try {
      const referredBy = typeof window !== 'undefined' ? localStorage.getItem('referred_by') || undefined : undefined;
      const result = await joinWaitlist({ email, city, referred_by: referredBy });
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
    <section className="bg-[#1A3D2B] relative overflow-hidden py-40 md:py-56 px-6 md:px-12">
      
      {/* Background image subtle */}
      <div className="absolute inset-0 opacity-[0.07]">
        <Image src="/pet_owner_lifestyle.jpg" alt="" fill className="object-cover" sizes="100vw" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1.5 h-1.5 rounded-full bg-[#C8922A]" />
          <p className="font-jakarta text-[10px] font-black uppercase tracking-[0.25em] text-white/25">
            Join the waitlist today
          </p>
        </div>

        {/* Headline */}
        <motion.h2
          className="font-noto font-black text-white text-[52px] md:text-[108px] leading-[0.9] tracking-[-0.04em] mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Start your<br />
          pet&apos;s<br />
          <span className="text-[#C8922A]">social journey.</span>
        </motion.h2>

        <motion.p
          className="font-jakarta font-medium text-white/35 text-lg mb-16 max-w-md leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Join {totalWaitlistCount.toLocaleString()}+ other pet owners already on the list. Free for 1 year for early members.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-full max-w-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
              required
              className="flex-[0.7] bg-white/8 border border-white/10 backdrop-blur-sm rounded-full px-7 py-5 font-jakarta font-medium text-sm text-white placeholder:text-white/25 outline-none focus:border-[#C8922A]/40 focus:ring-4 focus:ring-[#C8922A]/5 transition-all"
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="flex-[1.3] bg-white/8 border border-white/10 backdrop-blur-sm rounded-full px-7 py-5 font-jakarta font-medium text-sm text-white placeholder:text-white/25 outline-none focus:border-[#C8922A]/40 focus:ring-4 focus:ring-[#C8922A]/5 transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#C8922A] text-white px-9 py-5 rounded-full font-jakarta font-bold text-sm flex items-center justify-center gap-2.5 hover:bg-white hover:text-[#1A3D2B] transition-all duration-500 shadow-lg disabled:opacity-60 active:scale-95 whitespace-nowrap group"
          >
            {loading ? 'Joining...' : (
              <>
                Join the Pack
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </motion.form>

        {/* Bottom attribution */}
        <p className="mt-10 font-jakarta text-[9px] font-black uppercase tracking-[0.3em] text-white/15">
          No credit card required &mdash; unsubscribe anytime
        </p>
      </div>
    </section>
  );
};
