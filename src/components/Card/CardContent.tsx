import {
  BannersCard,
  BreadcrumbCardContent,
  FollowCardContent,
  FriendCard,
  FriendGiftCard,
  FriendSuggestionCardContent,
  InfoCardContent,
  MusicCardContent,
  PaymentCard,
  PostCardContent,
  ProductCardContent,
} from '@components/Card/variant';
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
import { BannersSectionProps } from '@datas/pages/config';
import { BreadcrumbComponentProps } from 'flowbite-react';

export function getCardContent({
  variant = 'breadcrumb',
  content,
}: RenderCardContentProps) {
  if (!content) return null;

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
        <BannersCard content={content as BannersSectionProps['content']} />
      );
    default:
      return null;
  }
}
