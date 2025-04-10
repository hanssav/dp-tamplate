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
    default:
      return null;
  }
}
