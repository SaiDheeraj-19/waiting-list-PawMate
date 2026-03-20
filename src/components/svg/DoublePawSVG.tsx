import React from 'react';
import { PawPrintSVG } from './PawPrintSVG';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

export const DoublePawSVG: React.FC<SVGProps> = ({ 
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
    <g transform="translate(0, 20) rotate(-15) scale(0.7)">
      <PawPrintSVG color={color} />
    </g>
    <g transform="translate(40, 0) rotate(15) scale(0.8)">
      <PawPrintSVG color={color} />
    </g>
  </svg>
);
