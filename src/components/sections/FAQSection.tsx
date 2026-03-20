'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Is PawMate only for dogs?',
    a: 'Absolutely not. PawMate is built for all kinds of pets — dogs, cats, rabbits, birds, and even exotic animals. If it has personality, it belongs here.',
  },
  {
    q: 'How do you verify owners?',
    a: 'We use a multi-step verification process including email validation, social media cross-checks, and optional phone verification to ensure every profile is a real person.',
  },
  {
    q: 'Is my personal data safe?',
    a: 'Yes. We never share your phone number or location without your explicit consent. All initial connections happen through our encrypted in-app messaging.',
  },
  {
    q: 'Can I use it just for playdates, not breeding?',
    a: 'Yes — many members use PawMate solely to find social companions for their pets. You clearly specify your intent in your pet\'s profile and only see relevant matches.',
  },
  {
    q: 'When does PawMate launch?',
    a: 'We are targeting a soft launch in April 2026, beginning with select cities in India. Waitlist members get exclusive early access.',
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="bg-[#F3F1EC] py-40 md:py-56 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="mb-20 md:mb-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8922A]" />
            <p className="font-jakarta text-[10px] font-black uppercase tracking-[0.25em] text-[#1A1A1A]/35">Questions</p>
          </div>
          <h2 className="font-noto font-black text-[#1A3D2B] text-[48px] md:text-[80px] leading-[0.92] tracking-[-0.03em]">
            Common<br />questions.
          </h2>
        </motion.div>

        {/* Accordions */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-[#F9F7F3] rounded-[28px] overflow-hidden cursor-pointer group hover:bg-white transition-colors duration-300"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: index * 0.06 }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between gap-6 px-8 py-7">
        <h3 className="font-noto font-black text-[#1A3D2B] text-lg md:text-xl tracking-tight leading-snug">
          {q}
        </h3>
        <div className={`w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${open ? 'bg-[#1A3D2B] text-white' : 'bg-[#1A3D2B]/6 text-[#1A3D2B]'}`}>
          {open ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
        </div>
      </div>
      
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-jakarta font-medium text-[#1A1A1A]/50 text-base leading-[1.75] px-8 pb-8">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
