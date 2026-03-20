import React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

export const RabbitSVG: React.FC<SVGProps> = ({ 
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
      d="M50 35C41.7157 35 35 41.7157 35 50C35 58.2843 41.7157 65 50 65C58.2843 65 65 58.2843 65 50C65 41.7157 58.2843 35 50 35ZM30 15V45C30 56.0457 38.9543 65 50 65H55V68C55 74.6274 60.3726 80 67 80C73.6274 80 79 74.6274 79 68V45C79 33.9543 70.0457 25 59 25C57.8954 25 57 24.1046 57 23V8C57 5.23858 54.7614 3 52 3C49.2386 3 47 5.23858 47 8V23H43V8C43 5.23858 40.7614 3 38 3C35.2386 3 33 5.23858 33 8V15H30Z"
    />
  </svg>
);
