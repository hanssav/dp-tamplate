import React from 'react';

interface RouteIconProps {
  size?: number;
  strokeColor?: string;
  className?: string;
}

const RouteIcon: React.FC<RouteIconProps> = ({
  size = 22,
  strokeColor = 'currentColor',
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={strokeColor}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="4" fill="none" />
    </svg>
  );
};

export default RouteIcon;
