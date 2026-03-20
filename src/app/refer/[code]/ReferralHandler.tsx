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
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-2xl"
      >
        <div className="bg-primary text-[#FAF8F4] p-4 md:p-6 rounded-[3rem] flex items-center justify-between gap-4 shadow-2xl shadow-primary/30 border border-white/10 glass">
          <div className="flex items-center gap-4">
             <div className="bg-accent p-3 rounded-full shadow-lg animate-bounce">
                <PawPrintSVG size={24} color="#1A3D2B" />
             </div>
             <div className="flex flex-col">
                <p className="font-jakarta font-black text-xs md:text-sm uppercase tracking-widest leading-none mb-1">
                   Special Invitation 🚀
                </p>
                <p className="font-noto font-medium text-[11px] md:text-xs opacity-70">
                   A fellow pet lover invited you. Join free to boost both your ranks!
                </p>
             </div>
          </div>
          
          <button 
            onClick={() => setShowInviteBanner(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
