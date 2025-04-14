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

const cardRenderMap: Record<string, (content: any) => JSX.Element | null> = {
  breadcrumb: (content) => (
    <BreadcrumbCardContent content={content as BreadcrumbComponentProps} />
  ),
  info: (content) => (
    <InfoCardContent content={content as InfoCardContentProps['content']} />
  ),
  post: (content) => (
    <PostCardContent content={content as PostCardContentProps['content']} />
  ),
  product: (content) => (
    <ProductCardContent content={content as ProductContentProps['content']} />
  ),
  music: (content) => (
    <MusicCardContent content={content as MusicContentProps['content']} />
  ),
  follow: (content) => (
    <FollowCardContent content={content as FollowContentProps['content']} />
  ),
  friendSuggestion: (content) => (
    <FriendSuggestionCardContent content={content as FriendSuggestionContent} />
  ),
  friend: (content) => <FriendCard content={content as FriendCardContent} />,
  gift: (content) => (
    <FriendGiftCard content={content as FriendGiftCardProps['content']} />
  ),
  payment: (content) => <PaymentCard {...(content as PaymentCardProps)} />,
  banners: (content) => (
    <BannersCard content={content as BannersSectionProps['content']} />
  ),
};

export function getCardContent({
  variant = 'breadcrumb',
  content,
}: RenderCardContentProps) {
  if (!content) return null;

  const renderFn = cardRenderMap[variant];
  return renderFn ? renderFn(content) : null;
}
