import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

export const DogSVG: React.FC<SVGProps> = ({ 
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
      d="M50 15C38.9543 15 30 23.9543 30 35C30 40.5228 32.2386 45.5228 35.8579 49.1421C37.4772 50.7614 38.4 52.9289 38.4 55.2V75C38.4 79.4183 41.9817 83 46.4 83H53.6C58.0183 83 61.6 79.4183 61.6 75V55.2C61.6 52.9289 62.5228 50.7614 64.1421 49.1421C67.7614 45.5228 70 40.5228 70 35C70 23.9543 61.0457 15 50 15ZM25 22C21 22 18 25 18 29V35C18 39 21 42 25 42C29 42 32 39 32 35V29C32 25 29 22 25 22ZM75 22C71 22 68 25 68 29V35C68 39 71 42 75 42C79 42 82 39 82 35V29C82 25 79 22 75 22Z"
    />
  </svg>
);
