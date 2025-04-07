import { twMerge } from 'tailwind-merge';

interface GetCardStyleProps {
  variant?: 'breadcrumb' | 'info' | 'post';
  shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';
  className?: string;
  bgImg?: string;
  type?: BgMapKey;
}

// type-safe key for bgMap
type BgMapKey = keyof typeof bgMap;

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

export const getCardStyle = ({
  variant = 'breadcrumb',
  className = '',
  bgImg,
  type,
}: GetCardStyleProps) => {
  const bgClass = bgMap[type ?? 'primary'];
  const textClass = textMap[type ?? 'primary'];

  const variantClassMap: Record<string, string[]> = {
    breadcrumb: [
      'shadow-none',
      'p-1',
      'mb-6',
      'rounded-xl',
      'bg-light-primary',
      'border-none',
    ],
    info: [
      'shadow-none',
      'p-1',
      'mb-6',
      bgClass,
      textClass,
      'flex',
      'items-center',
      'justify-center',
      'border-none',
    ],
    post: [
      'border-none',
      'shadow-ms',
      'transition-transform',
      'duration-200',
      'ease-in-out',
      'hover:scale-[1.02]',
      'hover:shadow-md',
      'cursor-pointer',
    ],
  };

  const classes = twMerge(...variantClassMap[variant], className);

  let style: React.CSSProperties | undefined = undefined;
  let renderImage: (
    theme: {
      img?: { base?: string; horizontal?: { off?: string; on?: string } };
    },
    horizontal: boolean
  ) => JSX.Element = () => <></>;

  if (variant === 'breadcrumb' && bgImg) {
    style = {
      backgroundImage: `url(${bgImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 3rem bottom -50px',
      backgroundSize: 'auto',
    };
  } else if (variant === 'post' && bgImg) {
    renderImage = (theme, horizontal) => (
      <img
        src={bgImg}
        alt="background-image-post"
        className={`${theme.img?.base ?? ''} ${
          horizontal ? theme.img?.horizontal?.on : theme.img?.horizontal?.off
        }`}
      />
    );
  }

  return {
    className: classes,
    style,
    renderImage,
  };
};
