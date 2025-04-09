export type CardVariant =
  | 'breadcrumb'
  | 'info'
  | 'post'
  | 'product'
  | 'music'
  | 'follow-card'
  | 'friend-suggestion'
  | 'friend'
  | 'gift-card'
  | 'payment-card';

export interface BreadcrumbProps {
  content?: {
    title?: string;
  };
}

export interface InfoCardContentProps {
  content: {
    title?: string;
    img?: string;
    count?: string | number;
  };
}

export interface CardContentData {
  title?: string;
  normal_price?: number;
  discount_price?: number;
  rating?: number;
  bgImg?: string;
  [key: string]: any;
}

export interface RenderCardContentProps {
  variant?: CardVariant;
  content?: CardContentData;
}

export interface FriendSuggestionContent {
  name: string;
  mainImage: string;
  mutualFriends: string[];
  mutualCount: number;
}

export interface FriendSuggestionCardProps {
  content: FriendSuggestionContent;
  variant?: CardVariant;
}

export interface FriendCardContent {
  name: string;
  role: string;
  image: string;
  platforms: ('facebook' | 'twitter' | 'github' | 'instagram')[];
}

export interface FriendCardProps {
  content: FriendCardContent;
  variant?: CardVariant;
}

export interface FriendGiftCardProps {
  content: {
    name?: string;
    image?: string;
  };
}

import { IconType } from 'react-icons';

export interface PaymentItem {
  name: string;
  description: string;
  amount: string;
  icon?: string | IconType;
  bg?: string;
  textColor?: string;
}

export interface TimelineItemType {
  time: string;
  title: string;
  link?: string;
  type: string;
}

export type PaymentCardContent = (PaymentItem | TimelineItemType)[];

export interface PaymentCardProps {
  title: string;
  desc: string;
  content: (PaymentItem | TimelineItemType)[];
}
