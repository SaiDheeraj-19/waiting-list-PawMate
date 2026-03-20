'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { joinWaitlist } from '@/app/actions/waitlist';
import { useRouter } from 'next/navigation';

export const HeroSection = ({ totalWaitlistCount = 0 }: { totalWaitlistCount?: number }) => {
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
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F9F7F3]">
      
      {/* FULL-BLEED IMAGE — top right organic shape */}
      <div className="absolute top-0 right-0 w-[52%] h-full hidden md:block">
        <Image
          src="/hero_pets.jpg"
          alt="Golden retriever and Persian cat sitting together"
          fill
          className="object-cover object-center"
          priority
          sizes="52vw"
        />
        {/* Left gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F7F3] via-[#F9F7F3]/50 to-transparent" />
        {/* Bottom gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F7F3]/80 via-transparent to-transparent" />
      </div>

      {/* Mobile full-bleed */}
      <div className="relative w-full h-[55vw] md:hidden">
        <Image src="/hero_pets.jpg" alt="Pets" fill className="object-cover object-center" priority sizes="100vw"/>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F9F7F3]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center min-h-screen pt-40 md:pt-48 pb-20">
        
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#C8922A]" />
          <p className="font-jakarta text-[10px] font-black uppercase tracking-[0.25em] text-[#1A1A1A]/40">
            Now open — limited spots available
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-noto font-black text-[#1A3D2B] text-[52px] md:text-[96px] leading-[0.95] tracking-[-0.03em] max-w-[640px]"
        >
          Find the<br />
          perfect<br />
          <em className="not-italic text-[#C8922A]">match.</em><br />
          For your pet.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 font-jakarta text-[#1A1A1A]/55 text-lg md:text-xl font-medium leading-[1.65] max-w-md"
        >
          PawMate is the premier pet social platform — designed for playdates, breeding connections, and lifelong friendships between animals and their humans.
        </motion.p>

        {/* Waitlist form */}
        <motion.div
          id="waitlist"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col gap-4 max-w-md w-full"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={e => setCity(e.target.value)}
                required
                className="flex-[0.7] bg-white border border-black/[0.06] rounded-full px-7 py-4 font-jakarta font-medium text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 outline-none focus:border-[#1A3D2B]/30 focus:ring-4 focus:ring-[#1A3D2B]/5 transition-all shadow-ambient"
              />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-[1.3] bg-white border border-black/[0.06] rounded-full px-7 py-4 font-jakarta font-medium text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 outline-none focus:border-[#1A3D2B]/30 focus:ring-4 focus:ring-[#1A3D2B]/5 transition-all shadow-ambient"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1A3D2B] text-white px-8 py-4 rounded-full font-jakarta font-bold text-sm flex items-center justify-center gap-2.5 hover:bg-[#C8922A] transition-all duration-500 shadow-lg shadow-[#1A3D2B]/15 disabled:opacity-60 active:scale-95 whitespace-nowrap group"
            >
              {loading ? 'Joining...' : (
                <>
                  Reserve Your Spot
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/25 pl-2">
            Free for 1 year for founding members · No credit card required
          </p>
        </motion.div>

        {/* Live Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          className="mt-16 flex items-center gap-6"
        >
          <div className="flex -space-x-3">
            {['/dog_portrait.jpg', '/cat_portrait.jpg', '/rabbit_portrait.jpg'].map((src, i) => (
              <div key={i} className="w-11 h-11 rounded-full border-2 border-[#F9F7F3] overflow-hidden shadow-md">
                <Image src={src} alt="" width={44} height={44} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
          <div>
            <div className="font-noto font-black text-2xl text-[#1A3D2B]">
              {totalWaitlistCount.toLocaleString()}
            </div>
            <div className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/35">pet owners on the waitlist</div>
          </div>
        </motion.div>

      </div>

      {/* Decorative corner label */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <p className="font-jakarta text-[9px] font-black uppercase tracking-[0.3em] text-[#1A1A1A]/20 rotate-90 origin-bottom-right">
          Est. 2026 &mdash; India
        </p>
      </div>
    </section>
  );
};
