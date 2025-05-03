import { ShoppingBag, Star } from 'lucide-react';
import Typography from '@components/Typography';
import { ProductContentProps } from '@components/_types/Card';
import Box from '@components/Box';

/**
 * ProductCardContent Component
 * Renders the content of a product card, displaying product title, price (with discount),
 * and rating, along with a shopping bag icon.
 *
 * @param {Object} props - The component's props.
 * @param {ProductContentProps} props.content - The content of the product, including title, price, rating, etc.
 *
 * @returns {JSX.Element} The ProductCardContent component displaying the product details.
 */

export function ProductCardContent({ content }: ProductContentProps) {
  return (
    <Box>
      <Box
        align="center"
        justify="center"
        className="flex h-8 w-8 translate-x-[-10px] translate-y-[-10px] rounded-full bg-primary text-white"
      >
        <ShoppingBag className="h-4 w-4" />
      </Box>

      <Typography as="h2" textStyle="subtitle" className="my-2">
        {content?.title}
      </Typography>

      <Box align="start" justify="between" className="flex">
        <Box align="start" className="flex gap-x-2">
          <Typography as="h2" textStyle="body" className="font-semibold">
            $ {content?.discount_price}
          </Typography>
          <Typography as="p" textStyle="desc" className="line-through">
            $ {content?.normal_price}
          </Typography>
        </Box>

        <Box className="flex gap-[1px] text-yellow-400">
          {Array.from({ length: content?.rating || 0 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
