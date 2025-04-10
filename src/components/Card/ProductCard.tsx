import { HiOutlineShoppingBag, HiStar } from 'react-icons/hi';
import Typography from '../Typography';
import { ProductContentProps } from '../_types/Card';

export function ProductCardContent({ content }: ProductContentProps) {
  return (
    <div>
      {/* Icon keranjang */}
      <div className="flex h-8 w-8 translate-x-[-10px] translate-y-[-10px] items-center justify-center rounded-full bg-primary text-white">
        <HiOutlineShoppingBag className="h-4 w-4" />
      </div>

      {/* Judul */}
      <Typography as="h2" textStyle="subtitle" className="my-2">
        {content?.title}
      </Typography>

      {/* Harga dan Rating */}
      <div className="flex items-start justify-between">
        {/* Harga */}
        <div className="flex items-start gap-x-2">
          <Typography as="h2" textStyle="body" className="font-semibold">
            $ {content?.discount_price}
          </Typography>
          <Typography as="p" textStyle="desc" className="line-through">
            $ {content?.normal_price}
          </Typography>
        </div>

        {/* Rating */}
        <div className="flex gap-[1px] text-yellow-400">
          {Array.from({ length: content?.rating || 0 }).map((_, index) => (
            <HiStar key={index} className="h-4 w-4" />
          ))}
        </div>
      </div>
    </div>
  );
}
