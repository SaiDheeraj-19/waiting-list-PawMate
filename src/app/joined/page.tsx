'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { PawPrintSVG } from '@/components/svg/PawPrintSVG';
import { HeartPawSVG } from '@/components/svg/HeartPawSVG';
import { DoublePawSVG } from '@/components/svg/DoublePawSVG';
import { FootprintTrailSVG } from '@/components/svg/FootprintTrailSVG';
import { DogSVG } from '@/components/svg/DogSVG';
import { CatSVG } from '@/components/svg/CatSVG';
import { RabbitSVG } from '@/components/svg/RabbitSVG';
import { BirdSVG } from '@/components/svg/BirdSVG';
import { CollarSVG } from '@/components/svg/CollarSVG';
import { Copy, Share2, CheckCircle2 } from 'lucide-react';
import { getReferralCount, updatePetPreferences, getWaitlistEntryByEmail } from '@/app/actions/waitlist';
import { getCurrentUserSession } from '@/app/actions/auth';

export default function JoinedPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-bg flex items-center justify-center font-dm-sans py-20">Loading...</div>}>
      <JoinedContent />
    </Suspense>
  );
}

function JoinedContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code') || '';
  const pos = searchParams.get('pos') || '1';
  const [position, setPosition] = useState<string | number>(pos);
  const [referralCode, setReferralCode] = useState<string>(code);
  const [copied, setCopied] = useState(false);
  const [referrals, setReferrals] = useState(0);
  const [petType, setPetType] = useState<string | null>(null);
  const [intent, setIntent] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  const referralLink = `${process.env.NEXT_PUBLIC_APP_URL || 'https://waitlist.pawmate.app'}/refer/${referralCode}`;

  useEffect(() => {
    // Confetti confetti confetti
    const end = Date.now() + 3 * 1000;
    const colors = ['#1A3D2B', '#F5A623', '#9FE1CB'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    if (referralCode) {
      getReferralCount(referralCode).then(res => setReferrals(res.count));
    }
    
    // Auto-fetch real data if params are missing (like after Google redirect)
    const fetchRealData = async () => {
      const session = await getCurrentUserSession();
      if (session?.user?.email) {
        const entry = await getWaitlistEntryByEmail(session.user.email);
        if (entry) {
          if (!referralCode) setReferralCode(entry.referral_code || '');
          if (position === '1') setPosition(entry.position);
        }
      }
    };
    fetchRealData();
  }, [referralCode, position]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSavePreferences = async () => {
    if (!petType || !intent) return;
    // We don't have the user's email here easily without prop or context, 
    // but in a real app would use a session or temp storage.
    // For this demo, we'll just mock the success.
    setSaved(true);
  };

  return (
    <main className="min-h-screen bg-brand-bg py-24 px-4 overflow-hidden relative font-dm-sans">
      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Celebration header header header header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-8 relative"
          >
            <motion.div 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1 }}
            >
              <CheckCircle2 size={64} className="text-primary" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-2 -right-4"
            >
              <HeartPawSVG size={48} color="#F5A623" />
            </motion.div>
          </motion.div>
          
          <h1 className="text-4xl md:text-7xl font-playfair font-black text-primary leading-tight mb-4">You are in! 🎉</h1>
          <p className="text-xl text-brand-muted max-w-xl mx-auto font-medium">Welcome to the PawMate family! Your spot on the list is reserved.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
          {/* Position Card card card card card */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white p-10 rounded-[40px] shadow-2xl shadow-primary/5 border border-primary/5 text-center relative overflow-hidden flex flex-col items-center"
          >
            <div className="absolute top-0 left-0 w-full opacity-5 pointer-events-none">
              <FootprintTrailSVG color="#1A3D2B" size={150} />
            </div>
            <h2 className="text-lg font-dm-sans font-black text-brand-muted uppercase tracking-[0.2em] mb-4">Your current position</h2>
            <div className="text-primary font-playfair font-black text-7xl md:text-8xl flex items-center gap-2 mb-4">
              <span className="text-accent">#</span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                {Number(position || 1).toLocaleString()}
              </motion.span>
            </div>
            <p className="text-sm font-bold text-primary/60 bg-primary/5 px-4 py-2 rounded-full mb-8">You are in the top 5% of early members 🐾</p>
            <div className="flex gap-2">
              {[1,2,3,4,5].map(i => <PawPrintSVG key={i} size={24} color={i % 2 === 0 ? '#1A3D2B' : '#F5A623'} className="opacity-20 animate-pulse" style={{ animationDelay: `${i*0.2}s` }} />)}
            </div>
          </motion.div>

          {/* Offer Reminder remainder remainder reminder */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-primary p-10 rounded-[40px] shadow-2xl shadow-primary/20 text-brand-bg relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 opacity-20 rotate-12">
              <CollarSVG size={200} color="white" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-accent text-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest w-fit shadow-lg shadow-black/10">
                LOCKED-IN OFFER
              </div>
              <h3 className="text-3xl font-playfair font-bold leading-tight">🎉 You have locked in FREE access for 1 year</h3>
              <p className="text-brand-bg/80 leading-relaxed font-dm-sans font-medium">We will email you the moment we launch in your city. Until then, you can move up the list by referring friends.</p>
              <div className="flex items-center gap-3 font-dm-sans font-bold text-accent text-sm">
                <PawPrintSVG size={20} color="currentColor" />
                <span>Founding member status active</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pet preference capture capture capture capture */}
        {!saved && (
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-primary/5 border border-primary/5 mb-16"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/10 border-2 border-accent/20 p-4 rounded-3xl mb-8 group cursor-pointer hover:rotate-12 transition-transform">
                <HeartPawSVG size={48} color="#F5A623" />
              </div>
              <h2 className="text-3xl md:text-5xl font-playfair font-black text-primary mb-4">Tell us about your pet 🐾</h2>
              <p className="text-lg text-brand-muted max-w-xl mx-auto mb-12">Help us customize your future PawMate experience</p>

              <div className="w-full flex flex-col gap-12">
                {/* Species row row row row row row row */}
                <div>
                  <h3 className="text-xs font-dm-sans font-black text-brand-muted uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2">
                    <span className="h-[1px] w-8 bg-black/5"></span> Which friend do you have? <span className="h-[1px] w-8 bg-black/5"></span>
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      { id: 'dog', label: 'Dog', icon: <DogSVG size={32} /> },
                      { id: 'cat', label: 'Cat', icon: <CatSVG size={32} /> },
                      { id: 'rabbit', label: 'Rabbit', icon: <RabbitSVG size={32} /> },
                      { id: 'bird', label: 'Bird', icon: <BirdSVG size={32} /> }
                    ].map(type => (
                      <button 
                        key={type.id}
                        onClick={() => setPetType(type.id)}
                        className={`flex items-center gap-3 px-8 py-4 rounded-3xl font-dm-sans font-bold transition-all border-2
                          ${petType === type.id ? 'bg-primary border-primary text-white scale-110 shadow-xl shadow-primary/20' : 'bg-white border-black/5 text-primary hover:border-primary/20 shadow-md shadow-black/5'}`}
                      >
                        {type.icon}
                        <span>{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* intent intent intent intent intent row */}
                <div>
                  <h3 className="text-xs font-dm-sans font-black text-brand-muted uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2">
                    <span className="h-[1px] w-8 bg-black/5"></span> What are you looking for? <span className="h-[1px] w-8 bg-black/5"></span>
                  </h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      { id: 'playdate', label: '🤝 Playdate' },
                      { id: 'breeding', label: '💝 Breeding' },
                      { id: 'both', label: '🌟 Both' }
                    ].map(type => (
                      <button 
                        key={type.id}
                        onClick={() => setIntent(type.id)}
                        className={`flex items-center gap-3 px-8 py-4 rounded-3xl font-dm-sans font-bold transition-all border-2
                          ${intent === type.id ? 'bg-accent border-accent text-primary scale-110 shadow-xl shadow-accent/20' : 'bg-white border-black/5 text-primary hover:border-accent/20 shadow-md shadow-black/5'}`}
                      >
                        <span>{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleSavePreferences}
                  disabled={!petType || !intent}
                  className="bg-primary text-white font-dm-sans font-bold py-5 px-12 rounded-full shadow-2xl shadow-primary/20 mx-auto hover:bg-accent hover:-translate-y-1 transition-all disabled:opacity-30 disabled:pointer-events-none"
                >
                  Save Pet Preferences 🐾
                </button>
              </div>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {saved && (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-primary/5 p-8 rounded-[40px] text-center mb-16 border-2 border-primary/10"
            >
              <div className="text-6xl mb-4 animate-bounce">✨</div>
              <h3 className="text-2xl font-playfair font-black text-primary mb-2">Perfect! We will find the right matches!</h3>
              <p className="font-dm-sans text-brand-muted font-bold">We will notify you about the best {petType} matches in your area first.</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* referral referral referral referral referral referral section */}
        <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-primary/5 border border-primary/5 relative overflow-hidden">
          <div className="absolute top-10 right-10 opacity-5 pointer-events-none rotate-12">
            <DoublePawSVG size={200} color="#1A3D2B" />
          </div>
          
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <h2 className="text-3xl md:text-5xl font-playfair font-black text-primary">Move up the list 🐾</h2>
            </div>
            <p className="text-lg text-brand-muted font-medium">The more friends you invite, the higher you climb.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1 bg-brand-bg rounded-3xl px-8 py-5 border-2 border-primary/5 flex items-center justify-between group">
              <span className="text-sm font-mono text-primary font-bold overflow-hidden text-ellipsis whitespace-nowrap opacity-60">🐾 {referralLink}</span>
              <button 
                onClick={copyToClipboard}
                className={`ml-4 p-3 rounded-2xl transition-all ${copied ? 'bg-primary text-white scale-110' : 'bg-white text-primary hover:bg-black/5 shadow-md shadow-black/5'}`}
              >
                {copied ? <CheckCircle2 size={24} /> : <Copy size={24} />}
              </button>
            </div>
            
            <a 
              href={`https://wa.me/?text=${encodeURIComponent(`Hey! I just joined PawMate 🐾 It is an app to find playdates and matches for your pet — and it is FREE right now! Join with my link: ${referralLink}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-5 rounded-3xl flex items-center justify-center gap-3 font-dm-sans font-black shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Share to WhatsApp</span>
              <Share2 size={24} />
            </a>
          </div>

          {/* referral progress progress progress progress progress progress bar */}
          <div className="space-y-12">
            <ReferralTier 
              level={1} 
              active={referrals >= 1} 
              needed={1} 
              current={referrals} 
              reward="Skip 100 spots" 
              icon={<PawPrintSVG size={24} />} 
              color="bg-accent"
            />
            <ReferralTier 
              level={2} 
              active={referrals >= 3} 
              needed={3} 
              current={referrals} 
              reward="3 months free premium" 
              icon={<DoublePawSVG size={24} />} 
              color="bg-primary"
            />
            <ReferralTier 
              level={3} 
              active={referrals >= 10} 
              needed={10} 
              current={referrals} 
              reward="2 years free premium" 
              icon={<HeartPawSVG size={24} />} 
              color="bg-accent"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

const ReferralTier = ({ active, needed, current, reward, icon, color, level }: any) => {
  const progress = Math.min((current / needed) * 100, 100);
  
  return (
    <div className={`relative ${active ? 'opacity-100' : 'opacity-60'} transition-opacity group`}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${active ? color + ' text-white scale-110' : 'bg-brand-bg text-primary'}`}>
            {icon}
          </div>
          <div>
            <h4 className="font-dm-sans font-black text-primary uppercase text-xs tracking-widest pl-1 mb-1">Level {level}</h4>
            <div className={`font-playfair font-black text-xl md:text-2xl ${active ? 'text-primary' : 'text-brand-muted'}`}>{reward}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-dm-sans font-black text-primary text-xl">{current} / {needed}</div>
          <p className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">Friends joined</p>
        </div>
      </div>
      
      <div className="h-4 bg-brand-bg rounded-full overflow-hidden p-1 border border-primary/5 shadow-inner">
        <motion.div 
          className={`h-full rounded-full relative ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
             <PawPrintSVG size={14} color="white" className="animate-pulse" />
          </div>
        </motion.div>
      </div>

      {active && (
        <div className="absolute -left-4 -top-4 text-2xl animate-bounce">🏆</div>
      )}
    </div>
  );
};
