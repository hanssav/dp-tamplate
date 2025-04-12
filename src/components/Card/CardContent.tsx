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
import Button from '@components/Button';
import Typography from '@components/Typography';

export function getCardContent({
  variant = 'breadcrumb',
  content,
}: RenderCardContentProps) {
  if (!content) return null;

  const BannersCardContent: React.FC<BannersSectionProps> = ({ content }) => {
    console.log(content.bgImage, content.title);
    return (
      <div
        className={`flex ${
          content.imagePosition === 'top'
            ? 'flex-col items-center'
            : 'flex-col items-center justify-between md:flex-row-reverse'
        } gap-y-6`}
      >
        {content.bgImage && (
          <div
            className={`${
              content.imagePosition === 'top'
                ? ''
                : 'flex h-full items-end justify-end md:w-1/2'
            }`}
          >
            <img
              src={content.bgImage}
              alt="banner"
              className={`${
                content.imagePosition === 'top'
                  ? 'mx-auto w-full max-w-[200px]'
                  : 'w-full max-w-[300px] translate-y-[30px]'
              }`}
            />
          </div>
        )}

        <div
          className={`flex flex-col gap-y-6 p-4 ${
            content.imagePosition === 'top'
              ? 'items-center text-center'
              : 'w-full'
          }`}
        >
          <Typography textStyle="heading-md" as="h2">
            {content.title}
          </Typography>
          <Typography textStyle="body" as="p">
            {content.subtitle}
          </Typography>
          <div
            className={`flex gap-4 ${
              content.imagePosition === 'top'
                ? 'items-center justify-center'
                : 'items-start justify-start'
            }`}
          >
            {content.button && (
              <Button
                onClick={content.button.onclick}
                color={content.button.color}
                size="md"
                className="w-auto"
              >
                {content.button.label}
              </Button>
            )}
          </div>
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
