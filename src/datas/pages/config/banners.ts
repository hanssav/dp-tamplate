import IMAGE_CONSTANTS from '@constant/images';
import { BannersSectionProps } from '@datas/pages/config/_types';

export const banners: BannersSectionProps['content'][] = [
  {
    col: 'col-3',
    span: 2,
    data: [
      {
        components: 'cards',
        title: 'Welcome back Mathew!',
        subtitle:
          'You have earned 54% more than last month which is great thing.',
        button: {
          label: 'Check',
          onclick: () => {},
          color: 'primary',
        },
        bgImage: IMAGE_CONSTANTS.IMG_BANNERS_1,
        variant: 'banners',
        imagePosition: 'side', // default
      },
      {
        components: 'cards',
        title: 'Track your every Transaction Easily',
        subtitle:
          'Track and record your every income and expence easily to control your balance',
        button: {
          label: 'Download',
          onclick: () => {},
          color: 'accent',
        },
        bgImage: IMAGE_CONSTANTS.IMG_BANNERS_2,
        bgColor: 'bg-light-secondary',
        variant: 'banners',
        imagePosition: 'side',
      },
      {
        col: 'col-2',
        data: [
          {
            components: 'cards',
            title: 'Oops something went wrong!',
            subtitle: 'Trying again to bypasses these <br> temporary error.',
            button: {
              label: 'Retry',
              onclick: () => {},
              color: 'warn',
            },
            bgImage: '/assets/images/backgrounds/maintenance2.svg',
            variant: 'banners',
            imagePosition: 'top', // ⬅️ disini beda layout
          },
          {
            components: 'cards',
            title: 'Oop, Your cart is empty!',
            subtitle: 'Get back to shopping and get <br> rewards from it.',
            button: {
              label: 'Go for shopping',
              onclick: () => {},
              color: 'primary',
            },
            bgImage: '/assets/images/products/empty-shopping-cart.svg',
            variant: 'banners',
            imagePosition: 'top',
          },
        ],
      },
    ],
  },
];
