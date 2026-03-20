import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

export const FishSVG: React.FC<SVGProps> = ({ 
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
      d="M15 50C15 35 35 25 55 25C75 25 85 40 85 50C85 60 75 75 55 75C35 75 15 65 15 50ZM85 50L95 65V35L85 50ZM30 45C32.7614 45 35 42.7614 35 40C35 37.2386 32.7614 35 30 35C27.2386 35 25 37.2386 25 40C25 42.7614 27.2386 45 30 45Z"
    />
  </svg>
);
