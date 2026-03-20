'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const FreeOfferBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState('00:59:59');

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate real countdown or real deal deal deal deal deal deal
      const now = new Date();
      const h = String(now.getHours() % 2).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      setTimeLeft(`${h}:${m}:${s}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        className="fixed top-0 left-0 w-full bg-accent text-primary z-[100] h-[40px] md:h-[44px] flex items-center justify-center px-4"
      >
        <div className="flex items-center gap-4 text-[10px] md:text-xs font-jakarta font-black uppercase tracking-[0.2em] leading-none">
          <span>Limited time: Get 1 year free!</span>
          <span className="opacity-40 select-none">|</span>
          <span className="flex items-center gap-2">
            ⏳ {timeLeft}
          </span>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 hover:bg-black/10 p-1 rounded-full transition-colors"
        >
          <X size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
