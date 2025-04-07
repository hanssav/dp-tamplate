import { forwardRef } from 'react';
import { Card as CardFlowbite } from 'flowbite-react';
import { CardContentData, getCardContent } from './cardContent';
import { getCardStyle } from './getCardStyle';

interface CardProps {
  content?: CardContentData;
  children?: React.ReactNode;
  className?: string;
  variant?: 'breadcrumb' | 'info' | 'post';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, content, className, variant = 'breadcrumb' },
  ref
) {
  const type = content?.type;
  const bgImg = content?.bgImg;

  const {
    className: combinedClass,
    style: inlineStyle,
    renderImage,
  } = getCardStyle({
    variant,
    className,
    bgImg,
    type,
  });

  return (
    <CardFlowbite
      ref={ref}
      className={combinedClass}
      style={inlineStyle}
      renderImage={renderImage}
    >
      {getCardContent({ variant, content })}
      {children}
    </CardFlowbite>
  );
});
