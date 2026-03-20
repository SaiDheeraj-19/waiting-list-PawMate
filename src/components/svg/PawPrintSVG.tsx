import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

export const PawPrintSVG: React.FC<SVGProps> = ({ 
  color = 'currentColor', 
  size = 100, 
  className,
  ...props 
}) => (
  <svg 
    viewBox="0 0 100 100" 
    width={size} 
    height={size} 
    className={className}
    {...props}
  >
    <circle fill={color} cx="28" cy="38" r="10" />
    <circle fill={color} cx="50" cy="22" r="12" />
    <circle fill={color} cx="72" cy="38" r="10" />
    <path
      fill={color}
      d="M50 82C40 82 30 75 30 62C30 52 40 45 50 45C60 45 70 52 70 62C70 75 60 82 50 82Z"
    />
  </svg>
);
