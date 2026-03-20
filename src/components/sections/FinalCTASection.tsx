'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { joinWaitlist } from '@/app/actions/waitlist';
import { useRouter } from 'next/navigation';
import { signInWithGoogle } from '@/app/actions/auth';

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
        router.push(`/joined?code=${result.referral_code || ''}&pos=${result.position || ''}`);
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

        {/* Divider */}
        <motion.div 
          className="flex items-center gap-4 mt-6 mb-2 w-full max-w-lg opacity-40"
          initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
        >
          <div className="h-px bg-white/20 flex-1"></div>
          <span className="font-jakarta text-[9px] font-bold uppercase tracking-[0.2em] text-white">OR</span>
          <div className="h-px bg-white/20 flex-1"></div>
        </motion.div>

        {/* Google Button */}
        <motion.form 
          action={async () => {
            if (!city) {
              alert("Wait! Please type your City first — so we know where PawMate is needed! 🐾");
              return;
            }
            document.cookie = `waitlist_city=${encodeURIComponent(city)}; path=/; max-age=3600`;
            await signInWithGoogle();
          }}
          className="w-full max-w-lg mb-6"
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
        >
          <button
            type="submit"
            className="w-full bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-jakarta font-bold text-sm flex items-center justify-center gap-3 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm active:scale-95 whitespace-nowrap"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </motion.form>

        {/* Bottom attribution */}
        <p className="mt-4 font-jakarta text-[9px] font-black uppercase tracking-[0.3em] text-white/15">
          No credit card required &mdash; unsubscribe anytime
        </p>
      </div>
    </section>
  );
};
