import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

export const HeartPawSVG: React.FC<SVGProps> = ({ 
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
      d="M50 85C50 85 15 65 15 38C15 22 28 15 40 15C45 15 50 18 50 18C50 18 55 15 60 15C72 15 85 22 85 38C85 65 50 85 50 85Z"
    />
    <circle fill="#F5A623" cx="35" cy="40" r="6" />
    <circle fill="#F5A623" cx="50" cy="30" r="7" />
    <circle fill="#F5A623" cx="65" cy="40" r="6" />
    <path
      fill="#F5A623"
      d="M50 65C45 65 40 60 40 55C40 50 45 45 50 45C55 45 60 50 60 55C60 60 55 65 50 65Z"
    />
  </svg>
);
