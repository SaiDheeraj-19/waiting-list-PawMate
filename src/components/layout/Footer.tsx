'use client';

import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#0e2318] text-white py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-14 border-b border-white/[0.06]">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <svg viewBox="0 0 20 20" width="14" height="14" fill="white" opacity="0.7">
                <circle cx="7" cy="15" r="3.5"/>
                <circle cx="14" cy="9" r="2.8"/>
                <circle cx="6" cy="8" r="2.8"/>
                <circle cx="13" cy="15.5" r="2.4"/>
                <circle cx="10" cy="12" r="4"/>
              </svg>
            </div>
            <span className="font-noto font-black text-xl text-white tracking-tight">PawMate</span>
          </Link>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {['Privacy Policy', 'Terms of Service', 'Contact', 'Referral Program'].map(link => (
              <Link key={link} href="#" className="font-jakarta text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 hover:text-white/70 transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10">
          <p className="font-jakarta text-[9px] font-bold uppercase tracking-[0.25em] text-white/15">
            &copy; 2026 PawMate India Pvt. Ltd. &mdash; All rights reserved.
          </p>
          <p className="font-jakarta text-[9px] font-bold uppercase tracking-[0.25em] text-white/15">
            Designed with precision &mdash; Built with purpose
          </p>
        </div>
      </div>
    </footer>
  );
};
