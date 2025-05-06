import {
  ButtonProps,
  customButtonTheme,
  getDynamicButtonTheme,
} from '@components/Button/buttonTheme';
import { Button as ButtonFlowbite } from 'flowbite-react';

export default function Button({
  color = 'primary',
  size = 'md',
  rounded,
  onClick,
  children,
  label,
  className = '',
  link = false,
  raised = false,
  outlineColor,
  ...props
}: ButtonProps) {
  //dynamic theme
  const theme = getDynamicButtonTheme({
    link,
    raised,
    disabled: props.disabled,
    outlineColor,
    color,
    customButtonTheme,
    rounded,
  });

  return (
    <ButtonFlowbite
      theme={theme}
      color={color}
      size={size}
      className={`${className}`}
      onClick={onClick}
      {...props}
    >
      {label ?? children}
    </ButtonFlowbite>
  );
}
