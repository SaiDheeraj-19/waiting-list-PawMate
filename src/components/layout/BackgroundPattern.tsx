'use client';

import React from 'react';
import { PawPrintSVG } from '../svg/PawPrintSVG';
import { BoneSVG } from '../svg/BoneSVG';
import { TailWagSVG } from '../svg/TailWagSVG';

export const BackgroundPattern = () => {
  return (
    <div className="bg-pattern-container">
      {/* Manually scatter some SVGs for performance and predictability */}
      <PawPrintSVG 
        className="bg-pattern-item" 
        style={{ top: '5%', left: '10%', transform: 'rotate(15deg) scale(0.4)' }} 
        color="#1A3D2B" 
      />
      <BoneSVG 
        className="bg-pattern-item" 
        style={{ top: '15%', left: '85%', transform: 'rotate(-25deg) scale(0.5)' }} 
        color="#F5A623" 
      />
      <TailWagSVG 
        className="bg-pattern-item" 
        style={{ top: '40%', left: '5%', transform: 'rotate(10deg) scale(0.4)' }} 
        color="#1A3D2B" 
      />
      <PawPrintSVG 
        className="bg-pattern-item" 
        style={{ top: '60%', left: '90%', transform: 'rotate(-45deg) scale(0.6)' }} 
        color="#F5A623" 
      />
      <BoneSVG 
        className="bg-pattern-item" 
        style={{ top: '80%', left: '15%', transform: 'rotate(30deg) scale(0.5)' }} 
        color="#1A3D2B" 
      />
      <PawPrintSVG 
        className="bg-pattern-item" 
        style={{ top: '30%', left: '50%', transform: 'rotate(50deg) scale(0.3)' }} 
        color="#F5A623" 
      />
      <TailWagSVG 
        className="bg-pattern-item" 
        style={{ top: '70%', left: '40%', transform: 'rotate(-10deg) scale(0.4)' }} 
        color="#1A3D2B" 
      />
      <PawPrintSVG 
        className="bg-pattern-item" 
        style={{ top: '10%', left: '40%', transform: 'rotate(20deg) scale(0.3)' }} 
        color="#1A3D2B" 
      />
      <BoneSVG 
        className="bg-pattern-item" 
        style={{ top: '55%', left: '30%', transform: 'rotate(-15deg) scale(0.4)' }} 
        color="#F5A623" 
      />
      <TailWagSVG 
        className="bg-pattern-item" 
        style={{ top: '25%', left: '75%', transform: 'rotate(40deg) scale(0.5)' }} 
        color="#1A3D2B" 
      />
    </div>
  );
};
