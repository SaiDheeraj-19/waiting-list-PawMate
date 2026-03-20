'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Lock, Calendar, ClipboardCheck, MessageSquareMore } from 'lucide-react';

const features = [
  {
    icon: <Zap className="text-secondary" size={32} />,
    title: "Smart matching",
    description: "AI-powered algorithm based on breed, energy levels, and social scores."
  },
  {
    icon: <ShieldCheck className="text-secondary" size={32} />,
    title: "Safe & Verified",
    description: "Mandatory verification for all owners to ensure a safe environment for everyone."
  },
  {
    icon: <Lock className="text-secondary" size={32} />,
    title: "Privacy First",
    description: "Your location and phone number are never shared without your explicit consent."
  },
  {
    icon: <Calendar className="text-secondary" size={32} />,
    title: "Event Organizers",
    description: "Host local pet meetups in your neighborhood park directly through the app."
  },
  {
    icon: <ClipboardCheck className="text-secondary" size={32} />,
    title: "Health Logs",
    description: "Share vaccination status and health certifications securely with potential partners."
  },
  {
    icon: <MessageSquareMore className="text-secondary" size={32} />,
    title: "Curated Chats",
    description: "Integrated pet-safe messaging that prevents spam and unwanted solicitations."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="bg-brand-bg py-40 md:py-64 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-8xl font-noto font-black text-primary tracking-tight leading-tight">
             Built for pet owners <br /> <span className="text-accent italic">who care</span>
          </h2>
          <p className="text-lg md:text-xl font-jakarta font-medium text-brand-muted max-w-xl mx-auto">
             Everything you need to manage your pet's social life in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 w-full max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              className="bg-surface-low rounded-[4rem] p-12 transition-all hover:scale-[1.03]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <div className="mb-10 p-4 bg-white rounded-3xl w-fit shadow-md shadow-primary/5">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-noto font-black text-primary mb-4 tracking-tight leading-tight">{feature.title}</h3>
                <p className="text-brand-muted font-jakarta font-medium leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
