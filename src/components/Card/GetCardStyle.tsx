import { createTheme } from 'flowbite-react';
import React from 'react';
import { CardVariant } from '../_types/Card';

// Mapping warna
const bgMap = {
  primary: 'bg-light-primary',
  warning: 'bg-light-warning',
  secondary: 'bg-light-secondary',
  error: 'bg-light-error',
  success: 'bg-light-success',
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
  const bgClass = bgMap[type];
  const textClass = textMap[type];

  const themeMap = {
    breadcrumb: createTheme({
      card: {
        root: {
          base: `mb-6 rounded-xl p-1 shadow-none ${bgClass} border-none`,
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
          base: `mb-6 cursor-pointer border-none shadow-md transition-transform duration-200 ease-in-out hover:scale-[1.02] hover:shadow-lg`,
          children: 'm-0 flex flex-col justify-center gap-4 p-4',
        },
      },
    }),
    product: createTheme({
      card: {
        root: {
          base: `mb-6 cursor-pointer border-none shadow-md`,
          children: 'm-0 flex flex-col justify-center gap-4 p-4',
        },
      },
    }),
    music: createTheme({
      card: {
        root: {
          base: '',
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
  let renderImage: (
    theme: {
      img?: {
        base?: string;
        horizontal?: { off?: string; on?: string };
      };
    },
    horizontal: boolean
  ) => JSX.Element = () => <></>;

  if ((variant === 'post' || variant === 'product') && bgImg) {
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
