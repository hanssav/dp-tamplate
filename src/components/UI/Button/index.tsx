import { buttonTheme } from '@components/UI/Button/theme';
import { ButtonProps } from '@components/_types/button';
import { Button as ButtonFlowbite } from 'flowbite-react';

export default function Button({
  color = 'primary',
  size = 'md',
  rounded,
  onClick,
  children,
  className = '',
  link = false,
  raised = false,
  outlineColor,
  ...props
}: ButtonProps) {
  return (
    <ButtonFlowbite
      theme={buttonTheme({
        link,
        raised,
        disabled: props.disabled,
        outlineColor,
        color,
        size,
        rounded,
      })}
      color={color}
      size={size}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonFlowbite>
  );
}
