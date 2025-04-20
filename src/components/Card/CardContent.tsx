import {
  BannersCard,
  BreadcrumbCardContent,
  DefaultContent,
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
import { Chart } from '@components/Charts';

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
import React from 'react';

const cardRenderMap: Record<
  string,
  (content: any, children: React.ReactNode) => JSX.Element | null
> = {
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
  chart: (content) => <Chart content={content} />,
  default: (content, children) => (
    <DefaultContent content={content}>{children}</DefaultContent>
  ),
};

export function getCardContent({
  variant = 'breadcrumb',
  content,
  children,
}: RenderCardContentProps & { children?: React.ReactNode }) {
  if (!content) return null;

  const renderFn = cardRenderMap[variant];

  return renderFn ? renderFn(content, children) : null;
}
