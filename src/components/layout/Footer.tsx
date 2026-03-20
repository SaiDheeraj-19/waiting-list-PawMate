'use client';

import React from 'react';
import Link from 'next/link';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { LogoSVG } from '../svg/LogoSVG';
import { FootprintTrailSVG } from '../svg/FootprintTrailSVG';
import { Twitter, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-brand-bg py-20 px-4 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full opacity-5 pointer-events-none transform scale-y-[-1]">
        <FootprintTrailSVG color="#FAF8F4" size={400} className="w-full h-32" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <LogoSVG size={180} />
          </Link>
          <p className="text-brand-bg/60 font-dm-sans leading-relaxed text-sm max-w-xs">
            Finding the perfect match for your pet shouldn't be hard. Join the PawMate family today and let's make it happen.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={<Twitter size={20} />} href="#" />
            <SocialIcon icon={<Instagram size={20} />} href="#" />
            <SocialIcon icon={<Facebook size={20} />} href="#" />
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-2">
          <h4 className="font-playfair text-xl font-bold">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            <FooterLink href="#how-it-works">How it Works</FooterLink>
            <FooterLink href="#pet-types">Species</FooterLink>
            <FooterLink href="#features">Features</FooterLink>
            <FooterLink href="#faq">FAQ</FooterLink>
          </nav>
        </div>

        <div className="flex flex-col gap-6 pt-2">
          <h4 className="font-playfair text-xl font-bold">Community</h4>
          <nav className="flex flex-col gap-3">
            <FooterLink href="#">Waitlist Rules</FooterLink>
            <FooterLink href="#">Referral Program</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </nav>
        </div>

        <div className="flex flex-col gap-6 pt-2">
          <h4 className="font-playfair text-xl font-bold">Stay Updated</h4>
          <p className="text-brand-bg/60 text-sm font-dm-sans">Join our newsletter for the latest pet tips and launch updates.</p>
          <div className="flex bg-white/10 rounded-full p-1 border border-white/20">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent border-none outline-none py-2 px-4 flex-1 text-sm text-brand-bg placeholder:text-brand-bg/30 font-dm-sans"
            />
            <button className="bg-accent text-primary p-2 px-4 rounded-full font-dm-sans font-bold text-xs hover:bg-white transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <p className="font-dm-sans text-xs text-brand-bg/40 font-medium uppercase tracking-widest">
          © 2026 PawMate India · Made with ❤️ for animals
        </p>
        <div className="flex items-center gap-2">
          <PawPrintSVG size={16} color="#F5A623" className="animate-pulse" />
          <span className="font-dm-sans text-brand-bg text-[10px] font-black uppercase tracking-[0.2em] opacity-30">Matched by PawMate</span>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-brand-bg/60 hover:text-accent font-dm-sans text-sm transition-colors font-medium"
  >
    {children}
  </Link>
);

const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <Link 
    href={href} 
    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-bg hover:bg-accent hover:text-primary transition-all duration-300"
  >
    {icon}
  </Link>
);
