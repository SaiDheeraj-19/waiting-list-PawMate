'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { LogoSVG } from '../svg/LogoSVG';
import { DogSVG } from '../svg/DogSVG';
import { CatSVG } from '../svg/CatSVG';
import { RabbitSVG } from '../svg/RabbitSVG';
import { BirdSVG } from '../svg/BirdSVG';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'How it works', href: '#how-it-works', icon: <DogSVG size={20} /> },
    { title: 'Free offer', href: '#free-offer', icon: <CatSVG size={20} /> },
    { title: 'Pets', href: '#pets', icon: <RabbitSVG size={20} /> },
    { title: 'FAQ', href: '#faq', icon: <BirdSVG size={20} /> },
  ];

  return (
    <nav 
      className={`sticky top-0 z-40 w-full bg-brand-bg transition-shadow duration-300 ${
        scrolled ? 'shadow-sm border-b border-primary/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <LogoSVG size={160} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                href={link.href}
                className="font-dm-sans text-brand-text hover:text-primary transition-colors text-sm font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* desktop Button */}
          <div className="hidden md:block">
            <Link 
              href="#join-form"
              className="bg-primary text-white font-dm-sans font-semibold py-3 px-6 rounded-full flex items-center gap-2 hover:bg-accent transition-all duration-300 group shadow-lg shadow-primary/10"
            >
              <span>🐾 Join Free</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:bg-black/5 p-2 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-brand-bg flex flex-col pt-24 px-6 animate-in slide-in-from-right duration-300">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-primary p-2 rounded-lg"
          >
            <X size={32} />
          </button>
          
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.title} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-3xl font-playfair font-bold text-primary hover:text-accent transition-colors"
              >
                <div className="p-2 bg-primary/5 rounded-2xl">{link.icon}</div>
                {link.title}
              </Link>
            ))}
            
            <Link 
              href="#join-form" 
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-primary text-white w-full py-5 rounded-3xl flex items-center justify-center gap-3 text-xl font-dm-sans font-bold shadow-xl shadow-primary/20 transition-all hover:bg-accent"
            >
              <span>🐾 Join Free</span>
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
