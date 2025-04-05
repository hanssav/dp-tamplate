import { Card as CardFlowbite, CustomFlowbiteTheme } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import FilledCircleIcon from '../../assets/icons/FilledCircleIcon';

interface CardProps {
  title?: string;
  children?: React.ReactNode;
  className?: string;
  shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';
  border?: boolean;
  bgColor?: string;
  bgImage?: string;
}

const customCardTheme: CustomFlowbiteTheme['card'] = {
  root: {
    base: 'rounded-xl p-4',
    children: '',
    horizontal: {
      off: '',
      on: 'flex flex-col md:flex-row',
    },
    href: 'hover:opacity-90',
  },
};

export function Card({
  children,
  title,
  className,
  shadow = 'none',
  border = true,
  bgColor = 'bg-white',
  bgImage,
}: CardProps) {
  const isCustom = shadow === 'custom';

  const customShadowStyle = '';

  const shadowClass =
    shadow !== 'none'
      ? isCustom
        ? customShadowStyle
        : `shadow-${shadow}`
      : '';

  const hoverEffect = '';

  const borderClass = border ? 'border' : '';

  const combinedClass = twMerge(
    borderClass,
    shadowClass,
    hoverEffect,
    bgColor,
    className
  );

  const inlineStyle = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 3rem bottom -50px',
        backgroundSize: 'auto',
      }
    : undefined;

  return (
    <CardFlowbite
      theme={customCardTheme}
      className={combinedClass}
      style={inlineStyle}
    >
      {title && (
        <>
          <h3 className="mb-2 text-lg font-semibold">{title}</h3>
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
            <span>Dashboard</span>
            <FilledCircleIcon />
            <span>{title}</span>
          </div>
        </>
      )}
      {children}
    </CardFlowbite>
  );
}
