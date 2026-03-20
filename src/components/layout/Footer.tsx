'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Facebook, Heart } from 'lucide-react';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { FootprintTrailSVG } from '../svg/FootprintTrailSVG';

export const Footer = () => {
  return (
    <footer className="bg-primary text-brand-bg pt-16 pb-8 relative overflow-hidden">
      {/* Decorative trail trail across the top top boundary border top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-30 select-none pointer-events-none">
        <FootprintTrailSVG color="#F5A623" size={300} className="w-full h-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left section: Branding */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <PawPrintSVG size={32} color="#FAF8F4" />
              <span className="font-playfair text-3xl font-bold text-brand-bg">PawMate</span>
            </Link>
            <p className="font-dm-sans text-brand-bg/80 max-w-xs flex items-center gap-2">
              Made with <Heart size={16} fill="#F5A623" color="#F5A623" /> for pet lovers everywhere
            </p>
          </div>

          {/* Center section: Links links links */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-center items-center font-dm-sans text-sm font-medium">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
          </div>

          {/* Right section: Social icons icons icons icons */}
          <div className="flex justify-center md:justify-end gap-6 text-brand-bg/90">
            <Link href="https://instagram.com" className="hover:text-accent transition-colors transform hover:scale-110">
              <Instagram size={24} />
            </Link>
            <Link href="https://twitter.com" className="hover:text-accent transition-colors transform hover:scale-110">
              <Twitter size={24} />
            </Link>
            <Link href="https://facebook.com" className="hover:text-accent transition-colors transform hover:scale-110">
              <Facebook size={24} />
            </Link>
          </div>
        </div>

        {/* Bottom divider line & & & copyright */}
        <div className="mt-16 pt-8 border-t border-brand-bg/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-dm-sans text-brand-bg/50">
          <p>© 2026 PawMate · All rights reserved</p>
          <div className="flex items-center gap-2">
            <span>🐾 Every pet deserves a friend</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
