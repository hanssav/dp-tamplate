import { twMerge } from 'tailwind-merge';

interface GetCardStyleProps {
  variant?: 'breadcrumb' | 'info' | 'post';
  shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';
  className?: string;
  bgImage?: string;
  type?: string;
}

const bgMap = {
  primary: 'bg-light-primary',
  warning: 'bg-light-warning',
  secondary: 'bg-light-secondary',
  error: 'bg-light-error',
  success: 'bg-light-success',
};

const textMap = {
  primary: 'text-primary',
  warning: 'text-text-light-warning',
  secondary: 'text-text-light-secondary',
  error: 'text-text-light-error',
  success: 'text-text-light-success',
};

export const getCardStyle = ({
  variant = 'breadcrumb',
  shadow = 'none',
  className = '',
  bgImage,
  type = 'primary',
}: GetCardStyleProps) => {
  const customShadowStyle = 'shadow-[0_0_10px_rgba(255,255,255,0.2)]';

  const shadowClass =
    shadow === 'none'
      ? 'shadow-none'
      : shadow === 'custom'
        ? customShadowStyle
        : {
            xs: 'shadow-xs',
            sm: 'shadow-sm',
            md: 'shadow-md',
            lg: 'shadow-lg',
            xl: 'shadow-xl',
            '2xl': 'shadow-2xl',
          }[shadow] || '';

  const bgClass = bgMap[type as keyof typeof bgMap];
  const textClass = textMap[type as keyof typeof textMap];

  const variantClassMap: Record<string, string[]> = {
    breadcrumb: ['rounded-xl', 'bg-light-primary', 'border-none'],
    info: [
      bgClass,
      textClass,
      'flex',
      'items-center',
      'justify-center',
      'border-none',
    ],
    post: [],
  };

  const classes = twMerge(
    'p-1',
    'mb-6',
    ...variantClassMap[variant],
    shadowClass,
    className
  );

  const backgroundImageStyle =
    variant === 'breadcrumb' && bgImage
      ? {
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 3rem bottom -50px',
          backgroundSize: 'auto',
        }
      : undefined;

  return {
    className: classes,
    backgroundImageStyle,
  };
};
