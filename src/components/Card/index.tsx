import { forwardRef } from 'react';
import { Card as CardFlowbite } from 'flowbite-react';
import { CardContentData, renderCardContent } from './cardContent';
import { getCardStyle } from './getCardStyle';

interface CardProps {
  content?: CardContentData;
  children?: React.ReactNode;
  className?: string;
  shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'custom';
  variant?: 'breadcrumb' | 'info' | 'post';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { children, content, className, shadow = 'none', variant = 'breadcrumb' },
  ref
) {
  const bgImage = content?.bgImage;
  const type = content?.type;
  const { className: combinedClass, backgroundImageStyle: inlineStyle } =
    getCardStyle({
      variant,
      shadow,
      className,
      bgImage,
      type,
    });

  console.log(content, 'content');

  return (
    <CardFlowbite ref={ref} className={combinedClass} style={inlineStyle}>
      {renderCardContent({ variant, content })}
      {children}
    </CardFlowbite>
  );
});
