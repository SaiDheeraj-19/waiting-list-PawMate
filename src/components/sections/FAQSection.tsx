'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { ChevronDown } from 'lucide-react';

const faqs: { q: string, a: string }[] = [
  {
    q: "Is PawMate really free?",
    a: "Yes. Everyone who joins the waitlist gets full free access for the first year after launch. No credit card required. No hidden fees. After the first year, core features stay free forever — premium features are optional."
  },
  {
    q: "When does PawMate launch?",
    a: "We are targeting a 2026 launch starting with major Indian cities. Waitlist members are notified first and get early access before the public."
  },
  {
    q: "Which animals can use PawMate?",
    a: "Dogs, cats, rabbits, birds, and more. We are growing the supported species based on what our waitlist community needs most."
  },
  {
    q: "How do you verify owners are 18+?",
    a: "Every owner verifies their phone number via OTP during signup. In India, SIM cards require Aadhaar registration so phone verification is a strong age signal. Optional ID verification is also available for an extra trust badge."
  },
  {
    q: "Is my data and location private?",
    a: "Completely. Your GPS coordinates are never shared. Other users only see your city and distance — never your address. We never sell your data to anyone."
  },
  {
    q: "Can I create profiles for multiple pets?",
    a: "Yes. One owner account, unlimited pet profiles. Each pet gets their own card, photos, and separate matching preferences."
  },
  {
    q: "What cities are launching first?",
    a: "We are launching where our waitlist is strongest. Tell us your city when you sign up and it directly influences where we open first."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="bg-brand-bg py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] opacity-[0.03] pointer-events-none">
        <PawPrintSVG size={600} color="#1A3D2B" />
      </div>

      <div className="max-w-[700px] mx-auto relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-black text-primary mb-6">Questions? We have answers.</h2>
          <p className="text-lg font-dm-sans text-brand-muted max-w-xl mx-auto font-medium">Everything you need to know about the future of pet social networking.</p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              className="bg-white rounded-[24px] overflow-hidden shadow-xl shadow-primary/5"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between transition-colors hover:bg-primary/5"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className={`p-2 rounded-xl transition-colors ${openIndex === i ? 'bg-primary text-white' : 'bg-primary/5 text-primary'}`}>
                    <PawPrintSVG size={20} color="currentColor" />
                  </div>
                  <span className="font-dm-sans font-black text-lg text-primary tracking-tight">{faq.q}</span>
                </div>
                <ChevronDown className={`text-primary transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="px-6 pb-6 pt-2 font-dm-sans text-brand-muted leading-[1.8] text-[15px] font-medium pl-14">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
