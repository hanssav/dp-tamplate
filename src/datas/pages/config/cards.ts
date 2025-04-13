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
import {
  GenericSectionProps,
  SectionContent,
} from '@datas/pages/config/_types';

// Type guard to check if an item is of type SectionContent
const isSectionContent = (item: any): item is SectionContent => {
  return item && typeof item.variant === 'string'; // Check if 'variant' exists and is a string
};

// Function to filter and return valid SectionContent items
const asSectionData = (data: any[]): SectionContent[] => {
  return data.filter((item) => isSectionContent(item)); // Filter only valid items
};

export const cards: GenericSectionProps[] = [
  { col: 'col-6', data: asSectionData(infoCardData), variant: 'info' },
  { col: 'col-3', data: asSectionData(postCardData), variant: 'post' },
  {
    col: 'col-4',
    data: asSectionData(ProductCardData),
    variant: 'product',
  },
  {
    col: 'col-3',
    data: asSectionData(musicCardData),
    variant: 'music',
    horizontal: true,
  },
  {
    col: 'col-3',
    data: asSectionData(followCardData.slice(0, 3)),
    variant: 'follow-card',
  },
  {
    col: 'col-4',
    data: asSectionData(friendSuggestionData),
    variant: 'friend-suggestion',
  },
  { col: 'col-3', data: asSectionData(friendCardData), variant: 'friend' },
  {
    col: 'col-3',
    data: asSectionData(giftCardData),
    variant: 'gift-card',
  },
  {
    col: 'col-3',
    data: asSectionData(paymentData),
    variant: 'payment-card',
  },
];
