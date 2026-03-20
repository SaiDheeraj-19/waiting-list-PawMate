'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { HeartPawSVG } from '../svg/HeartPawSVG';
import { CollarSVG } from '../svg/CollarSVG';
import { BoneSVG } from '../svg/BoneSVG';
import { MapPin, Shield, Lock } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      title: 'Smart pet matching',
      body: 'Filter by species, breed, size, temperament and distance. Our matching shows you truly compatible pets — not just nearby ones.',
      icon: <PawPrintSVG size={24} color="white" />,
    },
    {
      title: 'Find pets nearby',
      body: 'Set your distance radius from 5km to 100km. Every match is someone you could actually meet.',
      icon: <MapPin size={24} color="white" />,
    },
    {
      title: 'Safe and verified',
      body: 'All owners verify their phone number. Everyone on PawMate is confirmed 18+ with a real registered mobile number.',
      icon: <Shield size={24} color="white" />,
    },
    {
      title: 'Match before you chat',
      body: 'Messaging only unlocks after a mutual match. No cold messages. No unwanted contact. Ever.',
      icon: <HeartPawSVG size={24} color="white" />,
    },
    {
      title: 'Health transparency',
      body: 'Share vaccination status and health info before your pets meet. Build trust first, then arrange the meetup.',
      icon: <CollarSVG size={24} color="white" />,
    },
    {
      title: 'Your location is private',
      body: 'We never share your GPS coordinates. Other owners only see your city and approximate distance — never your address.',
      icon: <Lock size={24} color="white" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    },
  };

  return (
    <section className="bg-brand-bg py-24 px-4 relative overflow-hidden">
      <div className="absolute top-10 right-10 rotate-12 opacity-10">
        <BoneSVG color="#F5A623" size={200} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-black text-primary mb-4">Built for pet owners who care</h2>
          <p className="text-lg font-dm-sans text-brand-muted max-w-xl mx-auto">Ensuring the best and safest life for your companion</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-[32px] border-l-[4px] border-primary shadow-xl shadow-primary/5 hover:shadow-primary/10 transition-shadow duration-300"
            >
              <div className="bg-primary px-4 py-2 rounded-2xl w-fit mb-8 shadow-lg shadow-primary/10">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-playfair font-black text-primary mb-4">{feature.title}</h3>
              <p className="font-dm-sans text-brand-muted leading-relaxed font-medium">{feature.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
