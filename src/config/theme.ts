export const theme = {
  colors: {
    primary:
      'bg-primary text-white focus:outline-none focus:ring-0 enabled:hover:bg-primary/90 dark:bg-primary dark:focus:ring-0 dark:enabled:hover:bg-primary/90',
    secondary:
      'border border-primary bg-transparent text-primary focus:ring-0 enabled:hover:bg-secondary dark:bg-transparent dark:enabled:hover:bg-darkHover',
    light:
      'bg-transparent text-gray-900 focus:ring-0 focus:ring-transparent enabled:hover:bg-secondary dark:bg-transparent dark:text-white dark:enabled:hover:bg-gray-700',
  },
  sizes: {
    xs: 'px-0 py-1 text-sm',
    sm: 'px-0.5 py-1 text-sm',
    md: 'px-4 py-1 text-sm',
    lg: 'px-5 py-1.5 text-base',
    icon: 'w-10 h-10 flex items-center justify-center',
  },
  // https://tailwindcss.com/docs/border-radius#creating-pill-buttons
  rounded: {
    lg: 'rounded-[0.5rem]',
  },
};
