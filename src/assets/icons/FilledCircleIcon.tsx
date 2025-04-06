import React from 'react';

interface FilledCircleIconProps {
  size?: number;
  className?: string;
}

const FilledCircleIcon: React.FC<FilledCircleIconProps> = ({
  size = 8,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 8"
      fill="currentColor" // ⬅️ Gunakan currentColor
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="4" cy="4" r="4" />
    </svg>
  );
};

export default FilledCircleIcon;
