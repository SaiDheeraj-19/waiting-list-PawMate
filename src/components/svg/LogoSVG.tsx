import React from 'react';

interface LogoSVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
}

export const LogoSVG: React.FC<LogoSVGProps> = ({ 
  size = 150, 
  className,
  ...props 
}) => (
  <svg 
    viewBox="0 0 320 80" 
    width={size} 
    height={(Number(size) / 4) || 40} 
    className={className}
    {...props}
  >
    {/* Paw print part */}
    <g transform="translate(10, 10) scale(0.6)">
      <circle fill="#1A3D2B" cx="28" cy="38" r="10" />
      <circle fill="#1A3D2B" cx="50" cy="22" r="12" />
      <circle fill="#1A3D2B" cx="72" cy="38" r="10" />
      <path
        fill="#1A3D2B"
        d="M50 82C40 82 30 75 30 62C30 52 40 45 50 45C60 45 70 52 70 62C70 75 60 82 50 82Z"
      />
    </g>
    
    {/* Text part: Playfair-like font rendering in SVG depends on user system, but we can use a text element */}
    <text 
      x="80" 
      y="55" 
      fontFamily="var(--font-playfair)" 
      fontWeight="900" 
      fontSize="48" 
      fill="#1A3D2B"
    >
      PawMate
    </text>
  </svg>
);
