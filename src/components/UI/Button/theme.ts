import { themes } from '@assets/themes';
import { ButtonProps } from '@components/_types/button';
import { createTheme } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';

export function buttonTheme({
  link,
  raised,
  disabled,
  outlineColor,
  color,
  size,
  rounded,
}: ButtonProps) {
  const { button: btnTheme } = themes;
  const {
    color: themeColors,
    shadow,
    border,
    size: themeSizes,
    rounded: themeRounded,
  } = btnTheme;
  const { bg, outlineText, outline, disabled: disabledColor } = themeColors;

  if (!color) return {};

  const backgroundStyle = !outlineColor ? bg[color] : '';
  const outlineStyle =
    outlineColor && color && outlineColor in outline
      ? twMerge(
          outline[outlineColor],
          outlineText[outlineColor],
          border[outlineColor]
        )
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
