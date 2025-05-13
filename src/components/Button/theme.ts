import { themes } from '@assets/themes';
import { createTheme } from 'flowbite-react';
import { ButtonProps as FlowbiteButtonProps } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';

const { button: btnTheme } = themes;
export type ButtonColor = keyof typeof btnTheme.color.bg;
type OutlineColorKey = keyof typeof btnTheme.color.outline;
export type ButtonSize = keyof typeof btnTheme.size;

export interface ButtonProps extends FlowbiteButtonProps {
  color?: ButtonColor;
  size?: ButtonSize;
  rounded?: 'full' | 'md' | 'lg';
  onClick?: () => void;
  children?: React.ReactNode;
  className?: any;
  link?: boolean;
  raised?: boolean;
  outlineColor?: OutlineColorKey;
}

export function buttonTheme({ link, raised, disabled, outlineColor, color, size, rounded }: ButtonProps) {
  const { color: themeColors, shadow, border, size: themeSizes, rounded: themeRounded } = btnTheme;
  const { bg, outlineText, outline, disabled: disabledColor } = themeColors;

  if (!color) return {};

  const backgroundStyle = !outlineColor ? bg[color] : '';
  const outlineStyle =
    outlineColor && color && outlineColor in outline
      ? twMerge(outline[outlineColor], outlineText[outlineColor], border[outlineColor])
      : '';

  const dynamicValue = twMerge(
    link ? outlineText['link'] : '',
    raised ? shadow['md'] : '',
    disabled ? disabledColor['default'] : '',
    outlineColor ? outlineStyle : '',
    rounded ? themeRounded[rounded] : '',
    !outlineColor ? backgroundStyle : ''
  );

  const sizeStyle = size ? { [size]: themeSizes[size] } : { sm: themeSizes.sm };

  const theme = createTheme({
    ...btnTheme,
    color: {
      [color]: dynamicValue,
    },
    size: sizeStyle,
    rounded,
  });

  return theme;
}
