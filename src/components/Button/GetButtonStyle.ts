import { createTheme } from 'flowbite-react';

export const customButtonTheme = createTheme({
  base: 'relative flex items-center justify-center text-center font-medium focus:outline-none',
  disabled: 'pointer-events-none opacity-50',
  fullSized: 'w-full',
  size: {
    xs: 'px-0 py-1 text-sm',
    sm: 'px-0.5 py-1 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-1.5 text-base',
    icon: 'flex h-10 w-10 items-center justify-center',
  },
  color: {
    primary:
      'bg-primary text-white focus:outline-none focus:ring-0 enabled:hover:bg-primary/90 dark:bg-primary dark:focus:ring-0 dark:enabled:hover:bg-primary/90',
    secondary:
      'border border-primary bg-transparent text-primary focus:ring-0 enabled:hover:bg-soft-blue dark:bg-transparent dark:enabled:hover:bg-dark-hover',
    light:
      'bg-transparent text-gray-900 focus:ring-0 focus:ring-transparent enabled:hover:bg-soft-blue dark:bg-transparent dark:text-white dark:enabled:hover:bg-gray-700',
  },
  rounded: {
    lg: 'rounded-[0.5rem]',
  },
});