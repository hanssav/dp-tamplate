import IMAGE_CONSTANTS from '@constant/images';

export interface ProductCardItem {
  title: string;
  bgImg: string;
  normal_price: number;
  discount_price: number;
  rating: number;
}

export const ProductCardData: ProductCardItem[] = [
  {
    title: 'Boat Headphone',
    normal_price: 375,
    discount_price: 285,
    rating: 5,
    bgImg: IMAGE_CONSTANTS.PRODUCT_IMG_1,
  },
  {
    title: 'MacBook Air Pro',
    normal_price: 125,
    discount_price: 100,
    rating: 4,
    bgImg: IMAGE_CONSTANTS.PRODUCT_IMG_2,
  },
  {
    title: 'Red Valvet Dress',
    normal_price: 375,
    discount_price: 211,
    rating: 5,
    bgImg: IMAGE_CONSTANTS.PRODUCT_IMG_3,
  },
  {
    title: 'Cute Soft Teddybear',
    normal_price: 1234,
    discount_price: 1111,
    rating: 5,
    bgImg: IMAGE_CONSTANTS.PRODUCT_IMG_4,
  },
];
