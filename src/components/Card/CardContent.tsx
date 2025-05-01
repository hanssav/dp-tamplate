import React from 'react';
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
import ChartCard from '@components/Charts/ChartCard';

import {
  FriendCardContent as FriendCardData,
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
import Card from '@components/Card';

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
  friend: (content) => <FriendCard content={content as FriendCardData} />,
  gift: (content) => (
    <FriendGiftCard content={content as FriendGiftCardProps['content']} />
  ),
  payment: (content) => <PaymentCard {...(content as PaymentCardProps)} />,
  banners: (content) => (
    <BannersCard content={content as BannersSectionProps['content']} />
  ),
  chart: (content) => <ChartCard content={content} />,
  default: (content, children) => (
    <DefaultContent content={content}>{children}</DefaultContent>
  ),
};

export function renderCardContent({
  variant = 'breadcrumb',
  content,
  children,
}: RenderCardContentProps & { children?: React.ReactNode }) {
  if (!content) return null;
  const renderFn = cardRenderMap[variant];
  return renderFn ? renderFn(content, children) : null;
}

export function DynamicCard({
  variant,
  content,
  className,
  children,
  horizontal = false,
  ...rest
}: RenderCardContentProps & {
  className?: string;
  children?: React.ReactNode;
  horizontal?: boolean;
}) {
  const rendered = renderCardContent({
    variant,
    content,
    children,
    horizontal,
  });

  return (
    <Card
      variant={variant}
      content={content}
      horizontal={horizontal}
      className={className}
      {...rest}
    >
      {rendered}
    </Card>
  );
}
