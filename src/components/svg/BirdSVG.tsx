import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

export const BirdSVG: React.FC<SVGProps> = ({ 
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
      d="M75 35C75 46.0457 66.0457 55 55 55C43.9543 55 35 46.0457 35 35C35 23.9543 43.9543 15 55 15C66.0457 15 75 23.9543 75 35ZM82 30L85 45H75C75 51.6274 69.6274 57 63 57H37C30.3726 57 25 51.6274 25 45H15L18 30H82ZM55 80C46.7157 80 40 73.2843 40 65H70C70 73.2843 63.2843 80 55 80ZM55 60V55H50V60H55Z"
    />
  </svg>
);
