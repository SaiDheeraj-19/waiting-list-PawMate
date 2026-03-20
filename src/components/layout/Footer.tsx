'use client';

import React from 'react';
import Link from 'next/link';
import { LogoSVG } from '../svg/LogoSVG';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-surface-low text-primary py-40 md:py-64 px-4 overflow-hidden relative border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto flex flex-col items-center z-10 relative">
        
        {/* Logo Centered Logo Centered Logo Centered */}
        <Link href="/" className="mb-24 md:mb-32 flex flex-col items-center group transition-transform hover:scale-110 active:scale-95">
          <LogoSVG size={220} />
          <p className="mt-4 font-jakarta text-[11px] font-black text-brand-muted/40 uppercase tracking-[0.3em]">The Premier Pet Matchmaking App</p>
        </Link>

        {/* Links row row row row row row row */}
        <div className="flex flex-wrap justify-center gap-x-12 md:gap-x-16 gap-y-8 mb-24 md:mb-32">
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">Referral Program</FooterLink>
        </div>

        {/* Separator row row row row row row row row */}
        <div className="w-24 h-[1px] bg-primary/10 mb-20 md:mb-24"></div>

        {/* Bottom Bar row row row row row row row row */}
        <div className="flex flex-col items-center gap-12 font-jakarta text-[11px] font-black tracking-widest uppercase text-brand-muted/40 transition-opacity hover:opacity-100">
          <p className="flex items-center gap-4">
            Made with <span className="animate-pulse text-red-500">❤️</span> for pet lovers
          </p>
          <div className="flex items-center gap-10">
            <FooterIcon icon={<Twitter size={20} />} />
            <FooterIcon icon={<Instagram size={20} />} />
            <FooterIcon icon={<PawPrintSVG size={20} color="currentColor" />} />
          </div>
          <p className="mt-4 text-[9px] opacity-60">© 2026 PawMate India · All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="font-jakarta text-[11px] font-black text-primary/60 hover:text-accent uppercase tracking-widest transition-all duration-300 relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all group-hover:w-full"></span>
  </Link>
);

const FooterIcon = ({ icon }: { icon: React.ReactNode }) => (
  <Link 
    href="#" 
    className="text-primary/30 hover:text-accent transition-all duration-300"
  >
    {icon}
  </Link>
);
