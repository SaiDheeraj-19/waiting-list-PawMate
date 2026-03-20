'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { 
    id: 'dog', 
    q: "Is PawMate only for dogs?", 
    a: "Absolutely not! PawMate is for any pet that could benefit from socialize or a mate — cats, rabbits, birds, even reptiles. If they have a personality, they belong here." 
  },
  { 
    id: 'verify', 
    q: "How do you verify owners?", 
    a: "We use a multi-step verification process including social media cross-checks and email validation to ensure every owner on PawMate is a real person with a real pet." 
  },
  { 
    id: 'data', 
    q: "Is my data safe?", 
    a: "We never share your location or phone number. All initial matches happen in our encrypted chat. You choose when and where to share your details for a meetup." 
  },
  { 
    id: 'breed', 
    q: "Can I use it just for playdates?", 
    a: "Yes! Many users use PawMate solely to find playmates for their pets. You can specify your intent (Playdate, Friendship, or Breeding) in your pet's profile." 
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="bg-brand-bg py-40 md:py-64 px-4 overflow-hidden relative">
      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div 
          className="text-center mb-32"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-noto font-black text-primary tracking-tight leading-tight mb-8">
             Common <span className="text-secondary italic">questions</span>
          </h2>
          <p className="text-lg md:text-xl font-jakarta font-medium text-brand-muted max-w-xl mx-auto leading-relaxed">
             Everything you need to know about joining the pack.
          </p>
        </motion.div>

        <div className="w-full flex flex-col gap-6">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.id} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ q, a, index }: { q: string, a: string, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="bg-surface-low rounded-[3rem] p-8 md:p-12 shadow-[0_32px_64px_-12px_rgba(2,39,23,0.03)] cursor-pointer group transition-all duration-300 hover:scale-[1.01]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between gap-8">
        <h3 className="text-xl md:text-3xl font-noto font-black text-primary leading-tight tracking-tight group-hover:text-accent font-medium">
          {q}
        </h3>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-accent text-primary' : 'bg-primary/5 text-primary'}`}
        >
          <ChevronDown size={24} strokeWidth={3} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: 'auto', opacity: 1, marginTop: 32 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            className="overflow-hidden"
          >
            <p className="font-jakarta text-lg md:text-xl font-medium text-brand-muted leading-relaxed max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
