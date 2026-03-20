'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { LogoSVG } from '@/components/svg/LogoSVG';

const links = [
  { name: 'How it works', href: '#how-it-works' },
  { name: 'Features', href: '#features' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'FAQ', href: '#faq' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating glass capsule nav */}
      <div className={`fixed top-0 left-0 w-full z-[60] flex justify-center transition-all duration-700 ${
        scrolled ? 'pt-3' : 'pt-6'
      }`}>
        <nav className={`
          transition-all duration-700 w-full
          ${scrolled
            ? 'mx-4 md:mx-8 max-w-6xl rounded-full border border-white/20 bg-white/60 backdrop-blur-2xl shadow-lg shadow-black/[0.07] px-5 py-3'
            : 'max-w-7xl rounded-none border-transparent bg-transparent px-6 md:px-12 py-3'
          }
        `}>
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <LogoSVG size={140} color="#1A3D2B" className="h-8 w-auto group-hover:scale-105 transition-transform duration-300" />
            </Link>

            {/* Center links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-jakarta font-bold uppercase tracking-[0.18em] text-[#1A1A1A]/50 hover:text-[#1A3D2B] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="#waitlist"
              className="hidden md:flex items-center gap-2 bg-[#1A3D2B] text-white px-6 py-2.5 rounded-full font-jakarta font-bold text-sm hover:bg-[#C8922A] transition-all duration-500 shadow-md shadow-[#1A3D2B]/15 active:scale-95"
            >
              Join Waitlist
            </Link>

            {/* Mobile menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-[#1A3D2B]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[55] bg-[#F9F7F3]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <LogoSVG size={160} color="#1A3D2B" className="h-10 w-auto" />
          </Link>
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-jakarta text-2xl font-semibold text-[#1A1A1A]/60 hover:text-[#1A3D2B]"
            >
              {link.name}
            </a>
          ))}
          <Link
            href="#waitlist"
            onClick={() => setIsOpen(false)}
            className="mt-6 bg-[#1A3D2B] text-white px-12 py-5 rounded-full font-jakarta font-bold text-base"
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </>
  );
};
