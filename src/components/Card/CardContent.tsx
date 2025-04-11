import {
  FriendCardContent,
  FriendGiftCardProps,
  FriendSuggestionContent,
  PaymentCardProps,
  RenderCardContentProps,
  FollowContentProps,
  MusicContentProps,
  InfoCardContentProps,
  PostCardContentProps,
  ProductContentProps,
} from '@components/_types/Card';
import { BreadcrumbCardContent } from '@components/Card/BreadCrumbCard';
import { InfoCardContent } from '@components/Card/InfoCard';
import { PostCardContent } from '@components/Card/PostCard';
import { ProductCardContent } from '@components/Card/ProductCard';
import { MusicCardContent } from '@components/Card/MusicCard';
import { FollowCardContent } from '@components/Card/FollowCard';
import { FriendSuggestionCardContent } from '@components/Card/FriendSuggestionCard';
import { FriendCard } from '@components/Card/FriendCard';
import { FriendGiftCard } from '@components/Card/FriendGiftCard';
import { PaymentCard } from '@components/Card/PaymentCard';
import { BreadcrumbComponentProps } from 'flowbite-react';
import { BannersSectionProps } from '@datas/pages/config';

export function getCardContent({
  variant = 'breadcrumb',
  content,
}: RenderCardContentProps) {
  if (!content) return null;

  const BannersCardContent: React.FC<BannersSectionProps> = ({ content }) => {
    const buttonColor =
      content.button?.color === 'primary'
        ? 'bg-blue-500'
        : content.button?.color === 'accent'
          ? 'bg-pink-500'
          : content.button?.color === 'warn'
            ? 'bg-red-500'
            : 'bg-gray-400';

    return (
      <div className="overflow-hidden rounded-xl bg-blue-50 p-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-900">
              {content.title}
            </h2>
            <p className="mt-4 text-gray-600">{content.subtitle}</p>
            {content.button && (
              <button
                onClick={content.button.onclick}
                className={`mt-6 rounded-md px-6 py-2 text-white ${buttonColor}`}
              >
                {content.button.label}
              </button>
            )}
          </div>
          {content.bgImage && (
            <div className="flex justify-end md:w-1/2">
              <img
                src={content.bgImage}
                alt="banner"
                className="w-full max-w-[300px]"
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  switch (variant) {
    case 'breadcrumb':
      return (
        <BreadcrumbCardContent content={content as BreadcrumbComponentProps} />
      );
    case 'info':
      return (
        <InfoCardContent content={content as InfoCardContentProps['content']} />
      );
    case 'post':
      return (
        <PostCardContent content={content as PostCardContentProps['content']} />
      );
    case 'product':
      return (
        <ProductCardContent
          content={content as ProductContentProps['content']}
        />
      );
    case 'music':
      return (
        <MusicCardContent content={content as MusicContentProps['content']} />
      );
    case 'follow-card':
      return (
        <FollowCardContent content={content as FollowContentProps['content']} />
      );
    case 'friend-suggestion':
      return (
        <FriendSuggestionCardContent
          content={content as FriendSuggestionContent}
        />
      );
    case 'friend':
      return <FriendCard content={content as FriendCardContent} />;
    case 'gift-card':
      return (
        <FriendGiftCard content={content as FriendGiftCardProps['content']} />
      );
    case 'payment-card':
      return <PaymentCard {...(content as PaymentCardProps)} />;
    case 'banners':
      return (
        <BannersCardContent
          content={content as BannersSectionProps['content']}
        />
      );
    default:
      return null;
  }
}
