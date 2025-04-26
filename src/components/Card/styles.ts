import { createTheme } from 'flowbite-react';

// Mapping warna
export const bgMap = {
  primary: 'bg-light-primary dark:bg-primary-dark',
  warning: 'bg-light-warning dark:bg-warning-dark',
  secondary: 'bg-light-secondary dark:bg-secondary-dark',
  error: 'bg-light-error dark:bg-error-dark',
  success: 'bg-light-success dark:bg-success-dark',
  light: 'bg-white dark:bg-primary-dark',
};

export const textMap = {
  primary: 'text-primary',
  warning: 'text-warning',
  secondary: 'text-secondary',
  error: 'text-error',
  success: 'text-success',
  light: 'text-current',
};
// Fungsi untuk membuat tema
export const createBreadcrumbTheme = (bgClass: string) =>
  createTheme({
    card: {
      root: {
        base: `rounded-xl p-1 shadow-none ${bgClass} border-none dark:bg-primary-dark`,
      },
    },
  });

export const createInfoTheme = (bgClass: string, textClass: string) =>
  createTheme({
    card: {
      root: {
        base: `rounded-xl shadow-none ${bgClass} ${textClass} flex items-center justify-center border-none`,
      },
    },
  });

export const createPostTheme = () =>
  createTheme({
    card: {
      root: {
        base: `cursor-pointer border-none shadow-soft transition-transform duration-200 ease-in-out hover:scale-[1.02] hover:shadow-hard dark:bg-primary-dark dark:text-white`,
        children: 'm-0 flex flex-col justify-center gap-4 p-4',
      },
    },
  });

export const createProductTheme = () =>
  createTheme({
    card: {
      root: {
        base: `cursor-pointer border-none shadow-soft dark:bg-primary-dark`,
        children: 'm-0 flex flex-col justify-center gap-4 p-4',
      },
    },
  });

export const createMusicTheme = () =>
  createTheme({
    card: {
      root: {
        base: 'flex rounded-lg border-none bg-white shadow-soft dark:border-gray-700 dark:bg-gray-800 dark:bg-primary-dark',
        children: 'w-full max-w-md justify-center gap-4 p-6',
        horizontal: {
          off: 'flex-col',
          on: 'flex-row md:flex-row-reverse',
        },
        href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
      },
      img: {
        base: 'h-48 w-full object-cover md:h-auto md:w-48',
        horizontal: {
          on: 'rounded-r-lg md:rounded-l-lg',
          off: 'rounded-t-lg',
        },
      },
      content: {
        base: 'flex min-w-0 flex-1 flex-col',
      },
    },
  });

export const createFollowTheme = () =>
  createTheme({
    card: {
      root: {
        base: 'rounded-lg border-none shadow-soft dark:bg-primary-dark',
      },
    },
  });

export const createFriendSuggestionTheme = () =>
  createTheme({
    card: {
      root: {
        base: 'rounded-lg border-none shadow-soft dark:bg-primary-dark',
      },
    },
  });

export const createFriendTheme = () =>
  createTheme({
    card: {
      root: {
        base: 'rounded-lg border-none shadow-soft dark:bg-primary-dark',
        children: 'flex h-full flex-col justify-center p-0',
      },
    },
  });

export const createGiftTheme = () =>
  createTheme({
    card: {
      root: {
        base: 'rounded-lg border-none shadow-soft dark:bg-primary-dark',
        children: 'flex h-full flex-col justify-center p-0',
      },
    },
  });

export const createPaymentTheme = () =>
  createTheme({
    card: {
      root: {
        base: 'rounded-lg border-none dark:bg-primary-dark',
        children: 'flex h-full flex-col justify-center p-0',
      },
    },
  });

export const createBannersTheme = (bgClass: string) =>
  createTheme({
    card: {
      root: {
        base: `rounded-lg border-none shadow-soft ${bgClass} px-5`,
        children: 'flex h-full flex-col justify-center py-0',
      },
    },
  });

export const createChartsTheme = () =>
  createTheme({
    card: {
      root: {
        base: 'shadow-soft rounded-lg border-none bg-white dark:bg-primary-dark ',
        children: 'flex h-full flex-col justify-center p-0',
      },
    },
  });

export const createDefaultTheme = () =>
  createTheme({
    card: {
      root: {
        base: 'shadow-soft rounded-lg border-none px-0 dark:bg-primary-dark',
        children: 'flex h-full flex-col justify-center px-0',
      },
    },
  });