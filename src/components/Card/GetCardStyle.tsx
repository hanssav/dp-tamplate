import { createTheme } from 'flowbite-react';
import React from 'react';
import { CardVariant } from '../_types/Card';

// Mapping warna
const bgMap = {
  primary: 'bg-light-primary dark:bg-primary-dark',
  warning: 'bg-light-warning dark:bg-warning-dark',
  secondary: 'bg-light-secondary dark:bg-secondary-dark',
  error: 'bg-light-error dark:bg-error-dark',
  success: 'bg-light-success dark:bg-success-dark',
};

const textMap = {
  primary: 'text-primary',
  warning: 'text-warning',
  secondary: 'text-secondary',
  error: 'text-error',
  success: 'text-success',
};

// Key aman untuk theme type
type BgMapKey = keyof typeof bgMap;
type VariantType = CardVariant;

interface GetCardStyleProps {
  variant?: VariantType;
  type?: BgMapKey;
  bgImg?: string;
}

// Main function
export const getCardStyle = ({
  variant = 'breadcrumb',
  type = 'primary',
  bgImg,
}: GetCardStyleProps) => {
  const validTypes = Object.keys(bgMap) as BgMapKey[];
  const isValid = validTypes.includes(type as BgMapKey);
  const safeType: BgMapKey = isValid ? (type as BgMapKey) : 'primary';

  const bgClass = bgMap[safeType];
  const textClass = textMap[safeType];

  const themeMap = {
    breadcrumb: createTheme({
      card: {
        root: {
          base: `mb-6 rounded-xl p-1 shadow-none ${bgClass} border-none dark:bg-primary-dark`,
        },
      },
    }),
    info: createTheme({
      card: {
        root: {
          base: `mb-6 rounded-xl shadow-none ${bgClass} ${textClass} flex items-center justify-center border-none`,
        },
      },
    }),
    post: createTheme({
      card: {
        root: {
          base: `mb-6 cursor-pointer border-none shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:bg-primary-dark dark:text-white`,
          children: 'm-0 flex flex-col justify-center gap-4 p-4',
        },
      },
    }),
    product: createTheme({
      card: {
        root: {
          base: `mb-6 cursor-pointer border-none shadow-md dark:bg-primary-dark`,
          children: 'm-0 flex flex-col justify-center gap-4 p-4',
        },
      },
    }),
    music: createTheme({
      card: {
        root: {
          base: 'mb-6 flex rounded-lg border-none bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 dark:bg-primary-dark',
          children: 'flex h-full flex-col justify-center gap-4 p-6',
          horizontal: {
            off: 'flex-col',
            on: 'flex-row md:max-w-xl md:flex-row-reverse',
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
      },
    }),
    'follow-card': createTheme({
      card: {
        root: {
          base: 'mb-6 rounded-lg border-none shadow-md dark:bg-primary-dark',
        },
      },
    }),
    'friend-suggestion': createTheme({
      card: {
        root: {
          base: 'mb-6 rounded-lg border-none shadow-md dark:bg-primary-dark',
        },
      },
    }),
    friend: createTheme({
      card: {
        root: {
          base: 'mb-6 rounded-lg border-none shadow-md dark:bg-primary-dark',
          children: 'flex h-full flex-col justify-center p-0',
        },
      },
    }),
    'gift-card': createTheme({
      card: {
        root: {
          base: 'mb-6 rounded-lg border-none shadow-md dark:bg-primary-dark',
          children: 'flex h-full flex-col justify-center p-0',
        },
      },
    }),

    'payment-card': createTheme({
      card: {
        root: {
          base: 'mb-6 rounded-lg border-none dark:bg-primary-dark',
          children: 'flex h-full flex-col justify-center p-0',
        },
      },
    }),
  };

  // Optional background style
  let style: React.CSSProperties | undefined = undefined;
  if (variant === 'breadcrumb' && bgImg) {
    style = {
      backgroundImage: `url(${bgImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 3rem bottom -50px',
      backgroundSize: 'auto',
    };
  }

  // Optional image render
  let renderImage:
    | ((theme: any, horizontal: boolean) => JSX.Element)
    | undefined = undefined;

  if (
    (variant === 'post' || variant === 'product' || variant === 'music') &&
    bgImg
  ) {
    renderImage = (theme, horizontal) => (
      <img
        src={bgImg}
        alt={`background-${variant}`}
        className={`${theme.img?.base ?? ''} ${
          horizontal ? theme.img?.horizontal?.on : theme.img?.horizontal?.off
        }`}
      />
    );
  }

  return {
    theme: themeMap[variant].card,
    style,
    renderImage,
  };
};
