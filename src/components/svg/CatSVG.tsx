import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

export const CatSVG: React.FC<SVGProps> = ({ 
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
      d="M50 20C40.0589 20 32 28.0589 32 38C32 47.9411 40.0589 56 50 56C59.9411 56 68 47.9411 68 38C68 28.0589 59.9411 20 50 20ZM35 15L25 25V35C25 47.7025 35.2975 58 48 58H52C64.7025 58 75 47.7025 75 35V25L65 15C65 15 62 18 50 18C38 18 35 15 35 15ZM75 56C78.3137 56 81 58.6863 81 62V75C81 78.3137 78.3137 81 75 81H35C31.6863 81 29 78.3137 29 75V62C29 58.6863 31.6863 56 35 56H42V54H58V56H75Z"
    />
  </svg>
);
