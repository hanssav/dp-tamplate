export const button = {
  base: 'relative flex items-center justify-center text-center font-medium focus:outline-none active:scale-[0.98] dark:focus:ring-offset-gray-800',
  fullSized: 'w-full',
  color: {
    bg: {
      primary: 'bg-primary hover:bg-hover-primary text-white rounded-lg',
      secondary: 'bg-secondary hover:bg-hover-secondary text-white',
      warning: 'bg-warning hover:bg-hover-warning text-white',
      error: 'bg-error hover:bg-hover-error text-white',
      success: 'bg-success hover:bg-hover-success text-white',
      link: 'hover:opacity-80',
      light:
        'bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-600',
      basic:
        'bg-white hover:bg-soft-blue dark:bg-transparent dark:hover:bg-gray-700',
    },
    outlineText: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      warning: 'text-warning',
      error: 'text-error',
      success: 'text-success',
      link: 'underline text-primary dark:text-blue-400',
    },
    defaultText: 'text-current',
    outline: {
      primary: 'hover:bg-light-primary dark:hover:bg-dark-hover-light-primary',
      secondary:
        'hover:bg-light-secondary dark:hover:bg-dark-hover-light-secondary',
      warning: 'hover:bg-light-warning dark:hover:bg-dark-hover-light-warning',
      error: 'hover:bg-light-error dark:hover:bg-dark-hover-light-error',
      success: 'hover:bg-light-success dark:hover:bg-dark-hover-light-success',
      link: 'hover:bg-light-primary dark:hover:bg-dark-hover-light-primary',
    },
    disabled: {
      default:
        'disabled:shadow-none disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-700 border-none',
    },
  },
  border: {
    primary: 'border border-primary',
    secondary: 'border border-secondary',
    warning: 'border border-warning',
    error: 'border border-error',
    success: 'border border-success',
    link: 'border border-primary',
  },
  shadow: {
    md: 'shadow-md hover:shadow-lg transition-shadow',
  },
  size: {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-4 py-4 text-base',
    icon: 'flex h-10 w-10 items-center justify-center p-0',
    'icon-lg': 'flex h-14 w-14 items-center justify-center p-2',
  },
  rounded: {
    full: 'rounded-full',
    md: 'rounded-md',
    lg: 'rounded-lg',
  },
};
