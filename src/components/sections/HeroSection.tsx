'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { HeartPawSVG } from '../svg/HeartPawSVG';
import { DogSVG } from '../svg/DogSVG';
import { CatSVG } from '../svg/CatSVG';
import { RabbitSVG } from '../svg/RabbitSVG';
import { CollarSVG } from '../svg/CollarSVG';
import { TailWagSVG } from '../svg/TailWagSVG';
import { FootprintTrailSVG } from '../svg/FootprintTrailSVG';
import { joinWaitlist } from '@/app/actions/waitlist';
import { useRouter } from 'next/navigation';

export const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [count] = useState(1234); 
  const router = useRouter();

  // Mouse tilt effect for pet cards
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), { stiffness: 100, damping: 30 });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section 
      className="relative min-h-[100vh] flex flex-col items-center justify-center pt-24 pb-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div 
        className="max-w-[700px] w-full px-4 text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Badge badge badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-5 py-2 mb-8 animate-pulse-slow">
          <PawPrintSVG size={16} color="#1A3D2B" />
          <span className="font-dm-sans font-bold text-sm text-primary uppercase tracking-wider">Free for early members · Limited time 🐾</span>
          <PawPrintSVG size={16} color="#1A3D2B" />
        </motion.div>

        {/* Headline Headline Headline */}
        <motion.h1 variants={itemVariants} className="text-[38px] md:text-[72px] font-playfair font-black text-primary leading-[1.1] mb-6">
          Your pet deserves{' '}
          <span className="text-accent relative inline-block">
            a love life
            <HeartPawSVG 
              size={48} 
              className="absolute -top-6 -right-10 hidden md:block animate-float hover:scale-125 transition-transform" 
            />
          </span> too.
        </motion.h1>

        {/* Sub-headline Sub-headline Sub-headline */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl font-dm-sans text-brand-muted mb-12 max-w-xl mx-auto leading-relaxed">
          PawMate connects pet owners for playdates, breeding, and friendships — safely, locally, and joyfully. And right now, it is completely free.
        </motion.p>

        {/* Pet profiling cards deck deck deck */}
        <motion.div 
          className="relative h-[400px] w-full flex justify-center items-center mb-16 px-8"
          variants={itemVariants}
        >
          {/* Card left card left card left */}
          <motion.div 
            className="absolute z-10 md:translate-x-[-120px] md:translate-y-[20px] md:rotate-[-8deg] pointer-events-none md:pointer-events-auto"
            style={{ 
              rotateX: rotateX, rotateY: rotateY, 
              translateX: '-100px', translateY: '40px', rotate: '-12deg' 
            }}
            whileHover={{ scale: 1.05, zIndex: 30 }}
          >
            <PetCard 
              name="Luna" 
              breed="Siamese" 
              age="3 yrs" 
              intent="Playdate" 
              owner="Sarah" 
              distance="1.2" 
              bg="bg-accent" 
              icon={<CatSVG size={100} color="white" />} 
            />
          </motion.div>

          {/* Card center card center card center */}
          <motion.div 
            className="absolute z-20 translate-y-0 rotate-0 scale-110 shadow-2xl"
            style={{ rotateX: rotateX, rotateY: rotateY }}
            whileHover={{ scale: 1.05 }}
          >
            <PetCard 
              name="Cooper" 
              breed="Golden Retriever" 
              age="2.5 yrs" 
              intent="Playdate" 
              owner="James" 
              distance="2.4" 
              bg="bg-primary" 
              icon={<DogSVG size={100} color="white" />} 
            />
          </motion.div>

          {/* Card right card right card right */}
          <motion.div 
            className="absolute z-10 md:translate-x-[120px] md:translate-y-[20px] md:rotate-[8deg] pointer-events-none md:pointer-events-auto"
            style={{ 
              rotateX: rotateX, rotateY: rotateY, 
              translateX: '100px', translateY: '40px', rotate: '12deg' 
            }}
            whileHover={{ scale: 1.05, zIndex: 30 }}
          >
            <PetCard 
              name="Thumper" 
              breed="English Lop" 
              age="1 yr" 
              intent="Breeding" 
              owner="Mia" 
              distance="0.8" 
              bg="bg-primary" 
              icon={<RabbitSVG size={100} color="white" />} 
            />
          </motion.div>

          {/* Decorative decorative decorative decorative */}
          <PawPrintSVG className="absolute top-10 left-[20%] opacity-20 hidden md:block animate-float" size={40} color="#1A3D2B" />
          <TailWagSVG className="absolute bottom-10 right-[25%] opacity-20 hidden md:block animate-float" size={50} color="#F5A623" />
        </motion.div>

        {/* Form Form Form Form */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto w-full px-4" id="join-form">
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row bg-white rounded-3xl md:rounded-full border-2 border-primary overflow-hidden shadow-2xl transition-all focus-within:ring-4 focus-within:ring-primary/10"
          >
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
                <span className="flex items-center gap-2">Join Free <ArrowRightIcon /></span>
              )}
            </button>
          </form>
          
          {/* Trust trust trust row row row */}
          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-dm-sans text-brand-muted/80">
            <span className="flex items-center gap-1">🔒 Free forever for early members</span>
            <span className="flex items-center gap-1">🐾 No spam</span>
            <span className="flex items-center gap-1">↩ Unsubscribe anytime</span>
          </div>

          {/* Live Counter row row row */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {['D', 'C', 'R', 'B', 'H'].map((initial, i) => (
                <div 
                  key={initial} 
                  className={`w-10 h-10 rounded-full border-2 border-brand-bg flex items-center justify-center text-white font-bold text-sm shadow-sm
                    ${i % 2 === 0 ? 'bg-primary' : 'bg-accent'}`}
                >
                  {initial}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 font-dm-sans text-sm font-semibold text-primary/80">
              <span>+ {count.toLocaleString()} pet owners on the waitlist</span>
              <FootprintTrailSVG size={40} color="#F5A623" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const PetCard = ({ name, breed, age, intent, owner, distance, bg, icon }: any) => (
  <div className="w-[220px] h-[300px] bg-white rounded-[25px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] flex flex-col group transition-transform duration-500">
    {/* top head header header */}
    <div className={`relative h-[55%] ${bg} flex items-center justify-center p-6 transition-colors duration-500`}>
      <CollarSVG size={24} className="absolute top-4 right-4 text-white/40" />
      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
        🐾 {intent}
      </div>
      <div className="transform group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
    </div>
    {/* bottom body body body */}
    <div className="p-5 flex flex-col flex-1 bg-white">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-playfair font-bold text-xl text-primary">{name}</h3>
        <PawPrintSVG size={14} color="#1A3D2B" className="opacity-50" />
      </div>
      <p className="text-xs font-dm-sans text-brand-muted/80 font-medium">{breed} · {age}</p>
      
      <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-3">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-full ${bg} grow flex items-center justify-center text-[10px] text-white font-bold`}>
            {owner[0]}
          </div>
          <span className="text-[10px] font-bold text-brand-text">{owner} · {distance}km</span>
        </div>
        <div className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center">
          <PawPrintSVG size={8} color="#F5A623" />
        </div>
      </div>
    </div>
  </div>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
    <path d="M10.875 3.375L16.5 9L10.875 14.625" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1.5 9H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
