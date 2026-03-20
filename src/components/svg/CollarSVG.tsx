import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

export const CollarSVG: React.FC<SVGProps> = ({ 
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
    <path
      fill={color}
      d="M15 40C15 32 30 25 50 25C70 25 85 32 85 40V45C85 53 70 60 50 60C30 60 15 53 15 45V40ZM50 65C53.3137 65 56 62.3137 56 59C56 55.6863 53.3137 53 50 53C46.6863 53 44 55.6863 44 59C44 62.3137 46.6863 65 50 65ZM50 75L58 65H42L50 75Z"
    />
  </svg>
);
