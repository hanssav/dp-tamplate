import { createTheme } from 'flowbite-react';

export const customButtonTheme = createTheme({
  base: 'relative flex items-center justify-center text-center font-medium focus:outline-none active:scale-[0.98] dark:focus:ring-offset-gray-800',
  disabled: 'pointer-events-none opacity-50',
  fullSized: 'w-full',
  size: {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2 text-base',
    icon: 'flex h-10 w-10 items-center justify-center p-0',
    'icon-lg': 'flex h-14 w-14 items-center justify-center p-2',
  },
  color: {
    basic:
      'border-gray-300 bg-white text-gray-900 hover:bg-soft-blue dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-500 ',
    primary:
      'bg-primary text-white hover:bg-primary-hover focus:ring-primary dark:bg-primary dark:hover:bg-primary-hover dark:focus:ring-primary',
    secondary:
      'dark:focus:ring-secondarys bg-secondary text-white hover:bg-secondary-hover focus:ring-secondary dark:bg-secondary dark:hover:bg-secondary-hover',
    warning:
      'bg-warning text-white hover:bg-warning-hover focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-warning',
    error:
      'bg-error text-white hover:bg-error-hover focus:ring-red-300 dark:bg-red-600 dark:hover:bg-error-hover dark:focus:ring-error',
    success:
      'bg-success text-white hover:bg-success-hover focus:ring-green-300 dark:bg-green-500 dark:hover:bg-success-hover dark:focus:ring-success',
    outline:
      'border border-primary bg-transparent text-primary hover:bg-soft-blue focus:ring-gray-300 dark:border-primary dark:bg-transparent dark:enabled:hover:bg-gray-700',
    flat: 'bg-transparent text-current hover:bg-gray-100 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-500',
    icon: 'bg-transparent text-gray-600 hover:bg-gray-200 focus:ring-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-500 ',
    fab: 'rounded-full bg-blue-500 p-4 text-white hover:bg-blue-600 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500',
    'extended-fab':
      'rounded-lg bg-blue-100 py-2 text-blue-700 hover:bg-blue-200 focus:ring-blue-300 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-500',
    light:
      'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-500',
  },
  rounded: {
    full: 'rounded-full',
    md: 'rounded-md',
    lg: 'rounded-lg',
  },
});

const buttonTheme = {
  color: customButtonTheme.color,
  size: customButtonTheme.size,
  rounded: customButtonTheme.rounded,
};

export type ButtonColor = keyof typeof buttonTheme.color;
export type ButtonSize = keyof typeof buttonTheme.size;

import { ButtonProps as FlowbiteButtonProps } from 'flowbite-react';

export interface ButtonProps extends FlowbiteButtonProps {
  color?: ButtonColor | string;
  size?: ButtonSize;
  rounded?: 'full' | 'md' | 'lg';
  onClick?: () => void;
  children?: React.ReactNode;
  label?: string;
  className?: any;
  link?: boolean;
  raised?: boolean;
  outlineColor?:
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'warning'
    | 'link';
  customButtonTheme?: Record<string, any>;
}
export function getDynamicButtonTheme({
  link,
  raised,
  disabled,
  outlineColor,
  color,
  customButtonTheme,
  rounded,
}: ButtonProps) {
  const linkStyle =
    'underline hover:opacity-80 text-primary dark:text-blue-400';
  const raisedStyle = 'shadow-md hover:shadow-lg transition-shadow';
  const disabledStyle =
    'disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-200 border-none';

  const outlineStyles: Record<string, string> = {
    secondary:
      'border border-secondary text-secondary hover:bg-light-secondary',
    error: 'border border-error text-error hover:bg-light-error',
    success: 'border border-success text-success hover:bg-light-success',
    warning: 'border border-warning text-warning hover:bg-light-warning',
  };

  const dynamicClasses = [
    link && linkStyle,
    raised && raisedStyle,
    disabled && disabledStyle,
    outlineColor && outlineStyles[outlineColor],
    rounded && buttonTheme.rounded[rounded],
  ]
    .filter(Boolean)
    .join(' ');

  const theme = {
    ...customButtonTheme,
    color: {
      ...customButtonTheme?.color,
    },
  };

  if (color && color in theme.color) {
    theme.color[color] += ` ${dynamicClasses}`;
  }

  return theme;
}
