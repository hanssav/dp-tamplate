import {
  infoCardData,
  postCardData,
  ProductCardData,
  musicCardData,
  followCardData,
  friendSuggestionData,
  friendCardData,
  giftCardData,
  paymentData,
} from '@/datas/pages/cards';
import { ColProps } from '@components/Col';
import { CardVariant } from '@components/_types/Card';

type CardSection = {
  col: NonNullable<ColProps['col']>;
  data: any[];
  variant: CardVariant;
  horizontal?: boolean;
};

export const cardSections: CardSection[] = [
  { col: 'col-6', data: infoCardData, variant: 'info' },
  { col: 'col-3', data: postCardData, variant: 'post' },
  { col: 'col-4', data: ProductCardData, variant: 'product' },
  { col: 'col-3', data: musicCardData, variant: 'music', horizontal: true },
  { col: 'col-3', data: followCardData.slice(0, 3), variant: 'follow-card' },
  { col: 'col-4', data: friendSuggestionData, variant: 'friend-suggestion' },
  { col: 'col-3', data: friendCardData, variant: 'friend' },
  { col: 'col-3', data: giftCardData, variant: 'gift-card' },
  { col: 'col-3', data: paymentData, variant: 'payment-card' },
];
