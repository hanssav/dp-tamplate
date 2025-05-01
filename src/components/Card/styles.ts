import { createTheme } from 'flowbite-react';

interface ColorMap {
  [key: string]: string;
}

export const bgMap: ColorMap = {
  primary: 'bg-light-primary dark:bg-primary-dark',
  warning: 'bg-light-warning dark:bg-warning-dark',
  secondary: 'bg-light-secondary dark:bg-secondary-dark',
  error: 'bg-light-error dark:bg-error-dark',
  success: 'bg-light-success dark:bg-success-dark',
  light: 'bg-white dark:bg-primary-dark',
};

export const textMap: ColorMap = {
  primary: 'text-primary',
  warning: 'text-warning',
  secondary: 'text-secondary',
  error: 'text-error',
  success: 'text-success',
  light: 'text-current',
};

const baseCardConfig = {
  shadow: {
    soft: 'shadow-soft',
    none: 'shadow-none',
  },
  border: 'border-none',
  darkBg: 'dark:bg-primary-dark',
  rounded: 'rounded-lg',
  padding: 'p-6',
  flexChildren: 'flex h-full flex-col justify-center',
};

export const createCardTheme = (
  base: string,
  children: string = '',
  padding: boolean | string = false,
  shadow: string = baseCardConfig.shadow.soft,
  horizontal: { on?: string; off?: string } = {},
  href: string = ''
) => {
  const paddingClass =
    typeof padding === 'string'
      ? padding
      : padding
        ? baseCardConfig.padding
        : '';

  return createTheme({
    card: {
      root: {
        base: `${base} ${paddingClass} ${shadow}`,
        children,
        horizontal,
        href,
      },
    },
  });
};

export const createBreadcrumbTheme = (bgClass: string) =>
  createCardTheme(
    `${baseCardConfig.rounded} ${baseCardConfig.border} ${bgClass} ${baseCardConfig.darkBg}`,
    '',
    true,
    baseCardConfig.shadow.none
  );

export const createInfoTheme = (bgClass: string, textClass: string) =>
  createCardTheme(
    `${baseCardConfig.rounded} flex items-center justify-center ${bgClass} ${textClass}`,
    '',
    true,
    baseCardConfig.shadow.none
  );

export const createPostTheme = () =>
  createCardTheme(
    `${baseCardConfig.rounded} ${baseCardConfig.border} transition-transform duration-200 ease-in-out cursor-pointer hover:scale-[1.02] hover:shadow-lg ${baseCardConfig.darkBg} dark:text-white`,
    'm-0 flex flex-col justify-center gap-4 p-4'
  );

export const createProductTheme = () =>
  createCardTheme(
    `${baseCardConfig.rounded} ${baseCardConfig.border} cursor-pointer ${baseCardConfig.darkBg}`,
    'm-0 flex flex-col justify-center gap-4 p-4'
  );

export const createMusicTheme = () =>
  createCardTheme(
    `flex ${baseCardConfig.rounded} ${baseCardConfig.border} bg-white dark:border-gray-700 dark:bg-gray-800 ${baseCardConfig.darkBg}`,
    'w-full max-w-md justify-center gap-4',
    true,
    baseCardConfig.shadow.soft,
    {
      off: 'flex-col',
      on: 'flex-row md:flex-row-reverse',
    },
    'hover:bg-gray-100 dark:hover:bg-gray-700'
  );

export const createFollowTheme = () =>
  createCardTheme(
    `${baseCardConfig.rounded} ${baseCardConfig.border} ${baseCardConfig.darkBg}`,
    '',
    true
  );

export const createFriendSuggestionTheme = () =>
  createCardTheme(
    `${baseCardConfig.rounded} ${baseCardConfig.border} ${baseCardConfig.darkBg}`,
    '',
    true
  );

export const createFriendTheme = () =>
  createCardTheme(
    `${baseCardConfig.rounded} ${baseCardConfig.border} ${baseCardConfig.darkBg}`,
    baseCardConfig.flexChildren
  );

export const createGiftTheme = () =>
  createCardTheme(
    `${baseCardConfig.rounded} ${baseCardConfig.border} ${baseCardConfig.darkBg}`,
    baseCardConfig.flexChildren
  );

export const createPaymentTheme = () =>
  createCardTheme(
    `${baseCardConfig.rounded} ${baseCardConfig.border} ${baseCardConfig.darkBg}`,
    baseCardConfig.flexChildren
  );

export const createBannersTheme = (bgClass: string) =>
  createCardTheme(
    `${baseCardConfig.rounded} ${baseCardConfig.border} ${bgClass}`,
    baseCardConfig.flexChildren,
    'py-0 px-5'
  );

export const createChartsTheme = () =>
  createCardTheme(
    `${baseCardConfig.rounded} ${baseCardConfig.border} ${baseCardConfig.darkBg}`,
    baseCardConfig.flexChildren
  );

export const createDefaultTheme = () =>
  createCardTheme(
    `${baseCardConfig.rounded} ${baseCardConfig.border} px-0 ${baseCardConfig.darkBg}`,
    baseCardConfig.flexChildren
  );
