import { HiLocationMarker, HiOutlineShoppingBag, HiStar } from 'react-icons/hi';
import { Link } from 'react-router';
import FilledCircleIcon from '../../assets/icons/FilledCircleIcon';
import {
  FriendSuggestionCardProps,
  FriendSuggestionContent,
  RenderCardContentProps,
} from '../_types/Card';
import { SkipBack, Play, SkipForward } from 'lucide-react';
import Button from '../Button';

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

      <div className="mt-3 flex items-start justify-between text-sm text-gray-500 dark:text-white">
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

const MusicCardContent: React.FC<RenderCardContentProps> = ({ content }) => {
  return (
    <>
      <div className="gap-1">
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {content?.title}
        </h5>
        <p className="text-gray-600 dark:text-gray-300">{content?.artis}</p>
      </div>

      <div className="mt-2 flex items-center gap-4">
        <SkipBack className="h-4 w-4 text-black dark:text-white" />
        <Play className="h-4 w-4 text-black dark:text-white" />
        <SkipForward className="h-4 w-4 text-black dark:text-white" />
      </div>
    </>
  );
};

// Component: Mini Follow Card/ Profile Mini
const FollowCardContent: React.FC<RenderCardContentProps> = ({ content }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      {/* Avatar + Name + Location */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <img
          src={content?.bgUser}
          alt={content?.name}
          className="h-10 w-10 rounded-full object-cover"
        />

        {/* Name & Location */}
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold leading-tight text-gray-900 dark:text-white">
            {content?.name}
          </h4>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <HiLocationMarker className="mr-1 h-3.5 w-3.5" />
            <span>{content?.location}</span>
          </div>
        </div>
      </div>

      {/* Follow Button */}
      <Button color="primary" size="md">
        Follow
      </Button>
    </div>
  );
};

const FriendSuggestionCardContent: React.FC<FriendSuggestionCardProps> = ({
  content,
}) => {
  return (
    <div className="flex flex-col py-5">
      <img
        src={content.mainImage}
        alt={content.name}
        width={80}
        height={80}
        className="mb-4 rounded-full"
      />
      <h5 className="text-base font-semibold">{content.name}</h5>
      <div className="mt-2 flex items-center gap-2">
        <div className="flex -space-x-2">
          {content.mutualFriends.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="mutual"
              width={28}
              height={28}
              className="rounded-full border-2 border-white dark:border-gray-800"
            />
          ))}
        </div>
        <span className="text-sm">{content.mutualCount} mutual friends</span>
      </div>
      <Button className="mt-6 w-full">Add Friend</Button>
      <Button
        color="light"
        className="mt-2 w-full border-red-300 text-red-500 hover:bg-red-50"
      >
        Remove
      </Button>
    </div>
  );
};

// Fungsi Utama: getCardContent
export function getCardContent({
  variant = 'breadcrumb',
  content,
}: RenderCardContentProps) {
  if (!content) return null;

  switch (variant) {
    case 'breadcrumb':
      return <BreadcrumbCardContent content={content} variant={variant} />;
    case 'info':
      return <InfoCardContent content={content} variant={variant} />;
    case 'post':
      return <PostCardContent content={content} variant={variant} />;
    case 'product':
      return <ProductCardContent content={content} variant={variant} />;
    case 'music':
      return <MusicCardContent content={content} variant={variant} />;
    case 'follow-card':
      return <FollowCardContent content={content} variant={variant} />;
    case 'friend-suggestion':
      return (
        <FriendSuggestionCardContent
          content={content as FriendSuggestionContent}
          variant={variant}
        />
      );
    default:
      return null;
  }
}
