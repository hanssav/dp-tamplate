import { themes } from '@assets/themes';
import { ButtonProps as FlowbiteButtonProps } from 'flowbite-react';

const { button: btnTheme } = themes;

export type ButtonColor = keyof typeof btnTheme.color.bg;
type OutlineColorKey = keyof typeof btnTheme.color.outline;
type ButtonSize = keyof typeof btnTheme.size;

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
