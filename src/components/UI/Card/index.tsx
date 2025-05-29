import { forwardRef } from 'react';
import { Card as CardFlowbite } from 'flowbite-react';
import { getCardStyle } from './getCardStyle';
import {
  CardVariant,
  CardContentData,
  BgMapKey,
  validInfoCardTypes,
} from '@components/_types/Card';

interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  content?: CardContentData;
  children?: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  horizontal?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    children,
    content,
    variant = 'default',
    horizontal = false,
    className = '',
    ...rest
  },
  ref
) {
  const isValidType = validInfoCardTypes.includes(content?.type as BgMapKey);
  const safeType: BgMapKey = isValidType
    ? (content?.type as BgMapKey)
    : 'primary';

  const bgImg = content?.bgImg;

  const {
    theme,
    style: inlineStyle,
    renderImage,
  } = getCardStyle({
    variant,
    type: safeType,
    bgImg,
    content,
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
      {children}
    </CardFlowbite>
  );
});

export default Card;
