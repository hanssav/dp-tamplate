export type CardVariant =
  | 'breadcrumb'
  | 'info'
  | 'post'
  | 'product'
  | 'music'
  | 'follow-card'
  | 'friend-suggestion';

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
