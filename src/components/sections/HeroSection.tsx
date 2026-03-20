'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { HeartPawSVG } from '../svg/HeartPawSVG';
import { DogSVG } from '../svg/DogSVG';
import { CatSVG } from '../svg/CatSVG';
import { RabbitSVG } from '../svg/RabbitSVG';
import { joinWaitlist } from '@/app/actions/waitlist';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-5, 5]), { stiffness: 100, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

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
    <section 
      className="relative min-h-[95vh] flex flex-col md:flex-row items-center justify-center pt-32 pb-20 px-4 md:px-16 overflow-hidden bg-brand-bg"
      onMouseMove={handleMouseMove}
    >
      {/* Left Content column column column */}
      <motion.div 
        className="w-full md:w-1/2 flex flex-col items-start z-20 text-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-2 mb-8 bg-surface-low rounded-full px-4 py-1.5 transition-all text-xs font-bold text-primary tracking-widest uppercase">
          <PawPrintSVG size={14} color="#1A3D2B" />
          <span>Limited time: Get 1st month free! 🐾</span>
        </div>

        <h1 className="text-[52px] md:text-[100px] font-noto font-black text-primary leading-[0.9] mb-10 tracking-tight">
          Your pet <br /> deserves a <br />
          <span className="text-accent italic relative inline-block">
            love life
            <motion.div 
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1, type: 'spring' }}
              className="absolute -top-6 -right-12 hidden md:block"
            >
              <HeartPawSVG size={48} color="#E85D4A" />
            </motion.div>
          </span> too.
        </h1>

        <p className="text-lg md:text-xl font-jakarta text-brand-muted mb-12 max-w-lg leading-relaxed font-medium">
          PawMate connects pet owners for playdates, friendship, and breeding. The premier social club for the furry, feathered, and scaled.
        </p>

        <form 
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row bg-white rounded-3xl md:rounded-full border-2 border-black/5 p-1 w-full max-w-xl shadow-2xl shadow-primary/5 focus-within:border-primary/20 transition-all"
        >
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-transparent px-8 py-4 outline-none font-jakarta text-primary font-semibold"
          />
          <button 
            type="submit" 
            disabled={loading}
            className="bg-primary text-[#FAF8F4] font-jakarta font-bold px-10 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-accent transition-all group disabled:opacity-70"
          >
            {loading ? '🐾 Connecting...' : (
              <>Join Free <ArrowRight className="group-hover:translate-x-1" size={20} /></>
            )}
          </button>
        </form>

        <div className="mt-6 flex flex-wrap gap-8 text-[11px] font-bold text-brand-muted/70 uppercase tracking-widest pl-2">
           <span className="flex items-center gap-2">🛡️ Free forever for early members</span>
           <span className="flex items-center gap-2">🐾 No spam, just paws</span>
        </div>

        {/* Live counter bar row row row row row row */}
        <div className="mt-16 flex items-center gap-4">
          <div className="flex -space-x-3">
             {[1,2,3,4,5].map(i => (
               <div key={i} className={`w-10 h-10 rounded-full border-2 border-brand-bg flex items-center justify-center font-bold text-white text-xs ${i % 2 === 0 ? 'bg-accent' : 'bg-primary'}`}>{['D','C','R','B','H'][i-1]}</div>
             ))}
          </div>
          <div className="font-jakarta text-sm font-black text-primary/80">
            <span className="text-primary">12,482</span> pet owners on waitlist
          </div>
        </div>
      </motion.div>

      {/* Right Content asymmetric cards deck deck deck deck */}
      <div className="w-full md:w-1/2 relative h-[600px] mt-20 md:mt-0 flex items-center justify-center md:items-start md:justify-end">
        
        {/* Under-Right Card Rabbit Thumper */}
        <motion.div 
          className="absolute z-10 md:top-[250px] md:right-[-50px] translate-x-10 rotate-[12deg] md:rotate-[15deg]"
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.8, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <PetCard 
            name="Thumper" 
            breed="English Lop" 
            status="PLAYDATE" 
            bg="bg-primary" 
            icon={<RabbitSVG size={140} color="white" />} 
          />
        </motion.div>

        {/* Under-Left Card Cat Luna */}
        <motion.div 
          className="absolute z-15 md:top-[120px] md:right-[150px] translate-x-[-20px] rotate-[-8deg] md:rotate-[-10deg]"
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <PetCard 
            name="Luna" 
            breed="Persian Cat" 
            status="BREEDING" 
            bg="bg-accent" 
            icon={<CatSVG size={150} color="white" />} 
          />
        </motion.div>

        {/* Top-Center Card Dog Cooper */}
        <motion.div 
          className="absolute z-30 md:top-[0px] md:right-[0px] rotate-[3deg] shadow-2xl scale-110"
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, y: 100, scale: 1.2 }}
          animate={{ opacity: 1, y: 0, scale: 1.1 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <PetCard 
            name="Cooper" 
            breed="Golden Retriever · 2y" 
            status="PLAYDATE" 
            bg="bg-primary/90" 
            icon={<DogSVG size={160} color="white" />} 
            featured 
          />
        </motion.div>

        {/* Scattered Background elements scattered scattered */}
        <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
          <PawPrintSVG size={600} color="#1A3D2B" className="rotate-45" />
        </div>
      </div>
    </section>
  );
};

const PetCard = ({ name, breed, status, bg, icon, featured }: any) => (
  <div className={`w-[240px] md:w-[280px] bg-white rounded-[48px] overflow-hidden tonal-shadow border border-black/5 flex flex-col group p-4 gap-4 transition-transform ${featured ? 'md:w-[320px]' : ''}`}>
    <div className={`aspect-square rounded-[36px] ${bg} flex items-center justify-center p-8 transition-all group-hover:scale-105 duration-500 relative`}>
      <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest transform rotate-[-3deg] shadow-lg">
        {status}
      </div>
      <div className="filter drop-shadow-2xl">
        {icon}
      </div>
    </div>
    <div className="px-2 pb-2">
      <h3 className="font-noto font-black text-2xl text-primary leading-tight mb-1">{name}</h3>
      <p className="font-jakarta text-xs font-bold text-brand-muted/70 uppercase tracking-widest">{breed}</p>
    </div>
  </div>
);
