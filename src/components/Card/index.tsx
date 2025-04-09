import { forwardRef } from 'react';
import { Card as CardFlowbite } from 'flowbite-react';
import { getCardContent } from './cardContent';
import { CardVariant, CardContentData } from '../_types/Card';
import { getCardStyle } from './GetCardStyle';

interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  content?: CardContentData;
  children?: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  horizontal?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    children,
    content,
    variant = 'breadcrumb',
    horizontal = false,
    className = '',
    ...rest
  },
  ref
) {
  const type = content?.type;
  const bgImg = content?.bgImg;

  const {
    theme,
    style: inlineStyle,
    renderImage,
  } = getCardStyle({
    variant,
    type,
    bgImg,
  });

  return (
    <CardFlowbite
      ref={ref}
      theme={theme}
      className={className}
      style={inlineStyle}
      renderImage={renderImage}
      horizontal={horizontal}
      {...rest}
    >
      {content ? getCardContent({ variant, content }) : children}
    </CardFlowbite>
  );
});
