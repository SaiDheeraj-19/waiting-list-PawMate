'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#FAF8F4]">
      {/* Texture grain row row row row */}
      <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-150 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")' }}></div>
      
      {/* Tonal BLOBS tonal blobs tonal blobs tonal blobs */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px]"
      />

      <motion.div 
        animate={{ 
          x: [0, -50, 0],
          y: [0, -100, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[200px]"
      />

      {/* Grid subtle dots dots dots dots */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#1A3D2B 1px, transparent 1px)', backgroundSize: '64px 64px' }}></div>
    </div>
  );
};
