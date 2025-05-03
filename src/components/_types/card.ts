import {
  BannersSectionProps,
  CardContent,
  SectionContent,
} from '@datas/pages/config';
import { LucideIcon } from 'lucide-react'; 

export type CardVariant =
  | 'breadcrumb'
  | 'info'
  | 'post'
  | 'product'
  | 'music'
  | 'follow'
  | 'friendSuggestion'
  | 'friend'
  | 'gift'
  | 'payment'
  | 'banners'
  | 'chart'
  | 'default';

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

export const validInfoCardTypes = [
  'primary',
  'warning',
  'secondary',
  'error',
  'success',
] as const;
export type BgMapKey = (typeof validInfoCardTypes)[number];

export interface PostCardContentProps {
  content: {
    userImg?: string;
    lastView?: string;
    category?: string;
    title?: string;
    views?: number;
    comments?: number;
    date?: string;
  };
}

export interface ProductContentProps {
  content: {
    title?: string;
    discount_price?: number;
    normal_price?: number;
    rating?: number;
  };
}

export interface MusicContentProps {
  content: {
    title?: string;
    artis?: string;
    bgImg?: string;
  };
}

export interface FollowContentProps {
  content: {
    bgUser?: string;
    name?: string;
    location?: string;
  };
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
}

export interface FriendGiftCardProps {
  content: {
    name?: string;
    image?: string;
  };
}

export interface PaymentItem {
  name: string;
  description: string;
  amount: string;
  icon?: string | LucideIcon;
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

export type CardContentData = (
  | CardContent
  | BreadcrumbProps['content']
  | InfoCardContentProps['content']
  | PostCardContentProps['content']
  | ProductContentProps['content']
  | MusicContentProps['content']
  | FollowContentProps['content']
  | FriendSuggestionContent
  | FriendCardContent
  | FriendGiftCardProps['content']
  | PaymentCardProps
  | SectionContent
  | BannersSectionProps['content']
) & {
  bgImg?: string;
  type?: string;
};

export interface RenderCardContentProps {
  variant?: CardVariant;
  content?: CardContentData;
  horizontal?: boolean;
}
