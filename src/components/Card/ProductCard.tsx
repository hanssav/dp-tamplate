import { HiOutlineShoppingBag, HiStar } from 'react-icons/hi';
import { ProductContentProps } from '../_types/Card';

export function ProductCardContent({ content }: ProductContentProps) {
  return (
    <div>
      {/* Icon keranjang */}
      <div className="flex h-8 w-8 translate-x-[-10px] translate-y-[-10px] items-center justify-center rounded-full bg-primary text-white">
        <HiOutlineShoppingBag className="h-4 w-4" />
      </div>

      {/* Judul */}
      <h2 className="text-md my-2 font-semibold">{content?.title}</h2>

      {/* Harga dan Rating */}
      <div className="flex items-start justify-between">
        {/* Harga */}
        <div className="flex items-start gap-x-2">
          <h2 className="font-semibold">$ {content?.discount_price}</h2>
          <p className="text-sm text-gray-500 line-through">
            $ {content?.normal_price}
          </p>
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
