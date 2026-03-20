import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

export const TailWagSVG: React.FC<SVGProps> = ({ 
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
      d="M20 50C20 33.4315 33.4315 20 50 20C66.5685 20 80 33.4315 80 50V80H70V50C70 38.9543 61.0457 30 50 30C38.9543 30 30 38.9543 30 50V80H20V50Z"
    />
  </svg>
);
