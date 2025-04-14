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
} from '@datas/pages/cards';
import { GenericSectionProps } from '@datas/pages/config/_types';
import { getValidSectionContent } from '@utils/function';

export const cards: GenericSectionProps[] = [
  { col: 'col-6', data: getValidSectionContent(infoCardData), variant: 'info' },
  { col: 'col-3', data: getValidSectionContent(postCardData), variant: 'post' },
  {
    col: 'col-4',
    data: getValidSectionContent(ProductCardData),
    variant: 'product',
  },
  {
    col: 'col-3',
    data: getValidSectionContent(musicCardData),
    variant: 'music',
    horizontal: true,
  },
  {
    col: 'col-3',
    data: getValidSectionContent(followCardData.slice(0, 3)),
    variant: 'follow',
  },
  {
    col: 'col-4',
    data: getValidSectionContent(friendSuggestionData),
    variant: 'friendSuggestion',
  },
  {
    col: 'col-3',
    data: getValidSectionContent(friendCardData),
    variant: 'friend',
  },
  {
    col: 'col-3',
    data: getValidSectionContent(giftCardData),
    variant: 'gift',
  },
  {
    col: 'col-3',
    data: getValidSectionContent(paymentData),
    variant: 'payment',
  },
];
