import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Button as ButtonFlowbite } from 'flowbite-react';

const customTheme = {
  color: {
    primary:
      'border border-transparent bg-primary text-white focus:outline-none focus:ring-0 enabled:hover:bg-primary/90 dark:bg-primary dark:focus:ring-0 dark:enabled:hover:bg-primary/90',
    secondary:
      'border border-primary bg-white text-primary focus:ring-0 focus:ring-cyan-300 enabled:hover:bg-secondary dark:border-primary dark:bg-darkBg dark:text-primary dark:focus:ring-gray-700 dark:enabled:hover:border-primary dark:enabled:hover:bg-darkHover',
    light:
      'bg-white text-gray-900 focus:ring-0 focus:ring-transparent enabled:hover:bg-gray-100 dark:bg-transparent dark:text-white dark:focus:ring-gray-700 dark:enabled:hover:bg-gray-700',
  },
  size: {
    sm: 'px-0.5 py-1 text-sm',
    md: 'px-4 py-1 text-sm',
    lg: 'px-5 py-1.5 text-base',
    icon: 'w-10 h-10 flex items-center justify-center',
  },
  rounded: 'rounded-full',
} as const;

type ButtonColor = keyof typeof customTheme.color;
type ButtonSize = keyof typeof customTheme.size;

interface ButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  rounded?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: any;
}

export default function Button({
  color = 'primary',
  size = 'md',
  rounded = false,
  onClick,
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <ButtonFlowbite
      theme={customTheme as CustomFlowbiteTheme['button']}
      className={`${className} ${customTheme.color[color]} ${customTheme.size[size]} ${rounded ? customTheme.rounded : ''} transition-colors duration-300`}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonFlowbite>
  );
}
