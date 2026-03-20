'use client';

import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { HeartPawSVG } from '@/components/svg/HeartPawSVG';
import { FootprintTrailSVG } from '@/components/svg/FootprintTrailSVG';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ConfirmPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-bg flex items-center justify-center font-dm-sans py-20">Confirming...</div>}>
      <ConfirmContent />
    </Suspense>
  );
}

function ConfirmContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get('code') || '';

  return (
    <main className="min-h-screen bg-brand-bg flex items-center justify-center px-4 overflow-hidden relative font-dm-sans">
      <div className="absolute top-0 left-0 w-full opacity-10 pointer-events-none">
        <FootprintTrailSVG color="#1A3D2B" size={400} className="w-full h-40" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full bg-white p-12 md:p-20 rounded-[40px] shadow-2xl shadow-primary/10 border-2 border-primary/5 flex flex-col items-center text-center relative z-10"
      >
        <motion.div 
          className="relative mb-12"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          <div className="p-10 bg-accent/10 rounded-full">
            <HeartPawSVG size={100} color="#1A3D2B" />
          </div>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute -bottom-4 -right-4 p-4 bg-primary text-white rounded-full shadow-xl border-4 border-white"
          >
            <CheckCircle2 size={40} />
          </motion.div>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-playfair font-black text-primary mb-6 leading-tight">Email confirmed! ✅</h1>
        <p className="text-xl text-brand-muted font-medium mb-12 max-w-sm">You are officially on the PawMate waitlist. Get ready for some pawsome matches!</p>
        
        <button 
          onClick={() => router.push(`/joined?code=${code}`)}
          className="w-full bg-primary text-white font-dm-sans font-black py-6 rounded-3xl flex items-center justify-center gap-4 text-xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all group"
        >
          <span>See your referral link</span>
          <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
        </button>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full opacity-10 rotate-180 pointer-events-none">
        <FootprintTrailSVG color="#F5A623" size={400} className="w-full h-40" />
      </div>
    </main>
  );
}
