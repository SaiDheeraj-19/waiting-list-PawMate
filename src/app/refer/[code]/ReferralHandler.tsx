'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { PawPrintSVG } from '@/components/svg/PawPrintSVG';

export const ReferralHandler = ({ code }: { code: string }) => {
  const [showInviteBanner, setShowInviteBanner] = useState(true);

  useEffect(() => {
    if (code) {
      localStorage.setItem('referred_by', code);
    }
  }, [code]);

  if (!showInviteBanner) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="fixed top-[44px] md:top-[40px] left-0 w-full z-40 bg-accent text-primary px-4 py-3 flex items-center justify-center gap-4 md:gap-8 shadow-xl"
      >
        <PawPrintSVG size={32} color="#1A3D2B" className="animate-bounce" />
        <p className="font-dm-sans font-black text-xs md:text-sm lg:text-base leading-tight">
          🐾 A fellow pet lover invited you to PawMate! Sign up free — you both move up the list 🚀
        </p>
        <PawPrintSVG size={32} color="#1A3D2B" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
        
        <button 
          onClick={() => setShowInviteBanner(false)}
          className="p-1 hover:bg-black/10 rounded-full transition-colors ml-4"
        >
          <X size={20} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
