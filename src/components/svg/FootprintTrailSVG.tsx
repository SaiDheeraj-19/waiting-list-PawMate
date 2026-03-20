import React from 'react';
import { PawPrintSVG } from './PawPrintSVG';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
}

export const FootprintTrailSVG: React.FC<SVGProps> = ({ 
  color = 'currentColor', 
  size = 100, 
  className,
  ...props 
}) => (
  <svg 
    viewBox="0 0 200 100" 
    width={size} 
    height={size / 2} 
    className={className}
    {...props}
  >
    <g transform="translate(0, 50) scale(0.3)">
      <PawPrintSVG color={color} />
    </g>
    <g transform="translate(40, 20) scale(0.3)">
      <PawPrintSVG color={color} />
    </g>
    <g transform="translate(80, 50) scale(0.3)">
      <PawPrintSVG color={color} />
    </g>
    <g transform="translate(120, 20) scale(0.3)">
      <PawPrintSVG color={color} />
    </g>
    <g transform="translate(160, 50) scale(0.3)">
      <PawPrintSVG color={color} />
    </g>
    <g transform="translate(200, 20) scale(0.3)">
      <PawPrintSVG color={color} />
    </g>
  </svg>
);
