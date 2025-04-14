/**
 * Card Component
 *
 * A customizable card component that can display various content types like breadcrumb, info, post, product, music, etc.
 * Utilizes Flowbite React Card as the base component, with enhanced styling and content rendering.
 *
 * @param {React.ReactNode} children - The content to be displayed inside the card. If no content is passed, the `content` prop will be used instead.
 * @param {CardContentData} [content] - The content data for rendering inside the card. Can vary depending on the card variant (breadcrumb, info, post, etc.).
 * @param {CardVariant} [variant='breadcrumb'] - Defines the type of card, which determines its style and content layout. Available variants include:
 *    - 'breadcrumb'
 *    - 'info'
 *    - 'post'
 *    - 'product'
 *    - 'music'
 *    - 'follow'
 *    - 'friendSuggestion'
 *    - 'friend'
 *    - 'gift'
 *    - 'payment'
 * @param {boolean} [horizontal=false] - Determines if the card layout should be horizontal. For some variants (like music), this will adjust layout to horizontal.
 * @param {string} [className=''] - Optional custom class names to apply additional styling to the card.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Additional HTML div props (e.g., id, style, onClick).
 *
 * @returns {JSX.Element} The rendered card component.
 * *
 * @example
 * // Example of using Card with variant and children
 * <Card variant="product">
 *   <h3>Product Title</h3>
 *   <p>Description of the product.</p>
 * </Card>
 *
 * @example
 * // Example of using Card with a custom layout and children
 * <Card variant="product" horizontal={true} className="custom-class">
 *   <h3>Product Title</h3>
 *   <p>Description of the product.</p>
 * </Card>
 *
 * @see {@link https://flowbite-react.com/docs/cards/} For more info on Flowbite Card usage.
 */

import { forwardRef } from 'react';
import { Card as CardFlowbite } from 'flowbite-react';
import { getCardContent } from './cardContent';
import {
  CardVariant,
  CardContentData,
  BgMapKey,
  validInfoCardTypes,
} from '@components/_types/Card';
import { getCardStyle } from '@components/Card/GetCardStyle';
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
    variant = 'breadcrumb',
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
      {content ? getCardContent({ variant, content }) : children}
    </CardFlowbite>
  );
});

export default Card;