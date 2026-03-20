'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { LogoSVG } from '../svg/LogoSVG';

const links = [
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Free offer', href: '#free-offer' },
  { name: 'Pets', href: '#pet-types' },
  { name: 'FAQ', href: '#faq' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 w-full z-50 transition-all duration-500 top-[40px] md:top-[44px] ${scrolled ? 'py-4 glass border-b border-black/5' : 'py-8 md:py-12 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo left column row */}
        <Link href="/" className="flex items-center group transition-transform hover:scale-105 active:scale-95">
          <LogoSVG size={180} />
        </Link>

        {/* Desktop Links centered row row */}
        <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {links.map(link => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-xs font-jakarta font-black uppercase tracking-[0.2em] text-primary hover:text-accent transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop CTA right column row */}
        <Link 
          href="#join-form" 
          className="hidden md:flex items-center gap-3 bg-primary text-[#FAF8F4] px-8 py-3.5 rounded-full font-jakarta font-black text-xs uppercase tracking-widest shadow-xl shadow-primary/10 hover:bg-accent transition-all duration-300 active:scale-95"
        >
          <span>Join Free 🐾</span>
        </Link>

        {/* Mobile Hamburger menu row row */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-primary hover:bg-black/5 rounded-full"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer row row row row row row */}
      {isOpen && (
        <div className="md:hidden glass h-screen w-full absolute top-0 left-0 flex flex-col items-center justify-center gap-8 py-20 animate-fade-in px-8">
           {links.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-noto font-black text-primary hover:text-accent"
            >
              {link.name}
            </a>
          ))}
          <Link 
            href="#join-form" 
            onClick={() => setIsOpen(false)}
            className="w-full bg-primary text-white py-6 rounded-full font-jakarta font-black text-center shadow-lg"
          >
            JOIN FREE 🐾
          </Link>
        </div>
      )}
    </nav>
  );
};
