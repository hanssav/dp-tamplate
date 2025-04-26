import { customButtonTheme } from '@components/Button/buttonTheme';
// import { theme } from './GetButtonStyle';

const buttonTheme = {
  color: customButtonTheme.color,
  size: customButtonTheme.size,
  rounded: 'rounded-full',
};

export type ButtonColor = keyof typeof buttonTheme.color;
type ButtonSize = keyof typeof buttonTheme.size;

import {
  Button as ButtonFlowbite,
  ButtonProps as FlowbiteButtonProps,
} from 'flowbite-react';

interface ButtonProps extends FlowbiteButtonProps {
  color?: ButtonColor | string;
  size?: ButtonSize;
  rounded?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  label?: string;
  className?: any;
}

export default function Button({
  color = 'primary',
  size = 'md',
  rounded = false,
  onClick,
  children,
  label,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <ButtonFlowbite
      theme={customButtonTheme}
      color={color}
      size={size}
      className={`${className} ${rounded ? buttonTheme.rounded : ''}`}
      onClick={onClick}
      {...props}
    >
      {label ?? children}
    </ButtonFlowbite>
  );
}
