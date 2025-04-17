import { Button as ButtonFlowbite, CustomFlowbiteTheme } from 'flowbite-react';
import { theme } from './GetButtonStyle';

const buttonTheme = {
  color: theme.colors,
  size: theme.sizes,
  rounded: 'rounded-full',
};

export type ButtonColor = keyof typeof buttonTheme.color;
type ButtonSize = keyof typeof buttonTheme.size;

interface ButtonProps {
  color?: ButtonColor;
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
      theme={buttonTheme as CustomFlowbiteTheme['button']}
      className={`${className} ${buttonTheme.color[color]} ${buttonTheme.size[size]} ${rounded ? buttonTheme.rounded : ''}`}
      onClick={onClick}
      {...props}
    >
      {label ?? children}
    </ButtonFlowbite>
  );
}
