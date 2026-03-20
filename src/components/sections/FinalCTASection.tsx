'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartPawSVG } from '../svg/HeartPawSVG';
import { MapPin, ArrowRight } from 'lucide-react';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { useRouter } from 'next/navigation';
import { joinWaitlist } from '@/app/actions/waitlist';

export const FinalCTASection = () => {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
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
    <section className="bg-brand-bg py-32 px-4 relative flex flex-col items-center justify-center text-center overflow-hidden">
      <motion.div 
        className="max-w-4xl mx-auto z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-12 flex flex-col items-center">
          <motion.div 
            className="p-8 bg-white rounded-full shadow-2xl mb-8 group cursor-pointer"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HeartPawSVG size={120} color="#1A3D2B" className="group-hover:scale-125 transition-transform" />
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-playfair font-black text-primary leading-tight mb-6">
            Your pet&apos;s best friend <br />
            <span className="text-accent italic tracking-tight">is waiting for you.</span>
          </h2>
          <p className="text-xl font-dm-sans text-brand-muted max-w-2xl mx-auto mb-16 leading-relaxed">
            Join the waitlist. It is free. Be first when we launch in your city.
          </p>
        </div>

        <div className="max-w-2xl mx-auto w-full px-4">
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col md:flex-row bg-white rounded-3xl md:rounded-full border-2 border-primary overflow-hidden shadow-2xl transition-all focus-within:ring-4 focus-within:ring-primary/10">
              <div className="flex-1 flex items-center px-6 py-4">
                <span className="text-xl mr-3 opacity-50">🐾</span>
                <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-transparent outline-none font-dm-sans py-1 text-primary placeholder:text-brand-muted"
                />
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="bg-primary text-white font-dm-sans font-bold px-10 py-5 hover:bg-accent transition-all duration-300 md:rounded-none group disabled:opacity-70"
              >
                {loading ? (
                  <div className="flex items-center gap-2 animate-spin">
                    <PawPrintSVG size={20} color="white" />
                  </div>
                ) : (
                  <span className="flex items-center gap-2">Join Free <ArrowRight size={20} className="group-hover:translate-x-1" /></span>
                )}
              </button>
            </div>

            {/* City input input input city */}
            <div className="relative group max-w-sm mx-auto w-full">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-primary opacity-50"><MapPin size={18} /></div>
              <input 
                type="text" 
                placeholder="Tell us your city (e.g. Bangalore)" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-white border border-black/10 rounded-full px-12 py-3 text-sm font-dm-sans text-primary focus:outline-none focus:border-primary transition-colors hover:shadow-lg hover:shadow-black/5"
              />
              <div className="mt-4 text-xs font-dm-sans text-brand-muted font-medium opacity-70">
                helps us launch there first ✨
              </div>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Scattered scattered scattered scattered */}
      <PawPrintSVG className="absolute top-20 left-[10%] opacity-10 animate-float" size={60} color="#F5A623" />
      <PawPrintSVG className="absolute bottom-20 right-[15%] opacity-10 animate-float" size={100} color="#1A3D2B" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};
