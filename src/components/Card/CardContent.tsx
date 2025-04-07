import { HiShoppingCart, HiStar } from 'react-icons/hi';
import { Link } from 'react-router';
import FilledCircleIcon from '../../assets/icons/FilledCircleIcon';

export interface CardContentData {
  [key: string]: any;
}

interface RenderCardContentProps {
  variant?: 'breadcrumb' | 'info' | 'post' | 'product';
  content?: CardContentData;
}
// Component: Breadcrumb
function BreadcrumbCardContent({ content }: RenderCardContentProps) {
  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold">{content?.title}</h3>
      <div className="mb-4 flex items-center gap-2 text-sm text-gray-800 dark:text-white">
        <Link to="/" className="hover:text-blue-400">
          Dashboard
        </Link>
        <FilledCircleIcon />
        <span>{content?.title}</span>
      </div>
    </div>
  );
}

// Component: Info
function InfoCardContent({ content }: RenderCardContentProps) {
  return (
    <div className="justify-items-center">
      <img alt="users" src={content?.img} />
      <p className="mt-3 text-sm font-semibold">{content?.title}</p>
      <h6 className="text-xl font-bold">{content?.count}</h6>
    </div>
  );
}

// Component: Post
function PostCardContent({ content }: RenderCardContentProps) {
  return (
    <div>
      <div className="flex items-start justify-between">
        <img
          src={content?.userImg}
          alt="User profile"
          className="h-10 w-10 translate-y-[-45px] rounded-full object-cover"
        />
        <button
          type="button"
          className="translate-y-[-95px] rounded-lg border bg-gray-50 p-2 text-sm text-gray-700 hover:bg-gray-200 focus:outline-none"
        >
          {content?.lastView}
        </button>
      </div>

      <button
        type="button"
        className="translate-y-[-25px] rounded-lg border bg-gray-100 p-2 text-sm text-gray-700 hover:bg-gray-200 focus:outline-none"
      >
        {content?.category}
      </button>

      <h2 className="text-lg font-semibold">{content?.title}</h2>

      <div className="mt-3 flex items-start justify-between text-sm text-gray-500">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1" title="Views">
            <span>👁️</span>
            <span>{content?.views}</span>
          </div>
          <div className="flex items-center gap-1" title="Comments">
            <span>💬</span>
            <span>{content?.comments}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-blue-500">●</span>
          <span>{content?.date}</span>
        </div>
      </div>
    </div>
  );
}

// Component: Product
function ProductCardContent({ content }: RenderCardContentProps) {
  return (
    <div>
      {/* Icon keranjang */}
      <div className="flex h-8 w-8 translate-x-[-15px] translate-y-[-15px] items-center justify-center rounded-full bg-primary text-white">
        <HiShoppingCart className="h-4 w-4" />
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

// Fungsi Utama: getCardContent
export function getCardContent({
  variant = 'breadcrumb',
  content,
}: RenderCardContentProps) {
  switch (variant) {
    case 'breadcrumb':
      return <BreadcrumbCardContent content={content} variant={variant} />;
    case 'info':
      return <InfoCardContent content={content} variant={variant} />;
    case 'post':
      return <PostCardContent content={content} variant={variant} />;
    case 'product':
      return <ProductCardContent content={content} variant={variant} />;
    default:
      return null;
  }
}
