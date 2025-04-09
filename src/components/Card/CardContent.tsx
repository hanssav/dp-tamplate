import {
  FriendCardContent,
  FriendGiftCardProps,
  FriendSuggestionContent,
  PaymentCardProps,
  RenderCardContentProps,
  FollowContentProps,
} from '../_types/Card';

import { BreadcrumbCardContent } from './BreadCrumbCard';
import { InfoCardContent } from './InfoCard';
import { PostCardContent } from './PostCard';
import { ProductCardContent } from './ProductCard';
import { MusicCardContent } from './MusicCard';
import { FollowCardContent } from './FollowCard';
import FriendSuggestionCardContent from './FriendSuggestionCard';
import { FriendCard } from './FriendCard';
import { FriendGiftCard } from './FriendGiftCard';
import PaymentCard from './PaymentCard';

export function getCardContent({
  variant = 'breadcrumb',
  content,
}: RenderCardContentProps) {
  if (!content) return null;

  switch (variant) {
    case 'breadcrumb':
      return <BreadcrumbCardContent content={content} />;
    case 'info':
      return <InfoCardContent content={content} />;
    case 'post':
      return <PostCardContent content={content} />;
    case 'product':
      return <ProductCardContent content={content} />;
    case 'music':
      return <MusicCardContent content={content} />;
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
