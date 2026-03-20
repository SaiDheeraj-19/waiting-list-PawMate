'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-[#0e2318] text-white py-20 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-14 border-b border-white/[0.06]">
          
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image src="/logo.png" alt="PawMate" width={140} height={40} className="h-8 w-auto object-contain invert mix-blend-screen group-hover:opacity-80 transition-opacity duration-300" />
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
