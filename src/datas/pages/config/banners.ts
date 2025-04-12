import IMAGE_CONSTANTS from '@constant/images';
import { BannersSectionProps } from '@datas/pages/config/_types';

export const banners: BannersSectionProps['content'][] = [
  {
    col: 'col-3',
    data: [
      {
        span: 2,
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
        imagePosition: 'side',
      },
      {
        components: 'cards',
        title: 'You reach all Notifications',
        subtitle: 'Congratulations, <br>Tap to continue next task.',
        button: {
          label: 'Yes, Got it!',
          onclick: () => {},
          color: 'primary',
        },
        bgImage: IMAGE_CONSTANTS.IMG_BANNERS_5,
        variant: 'banners',
        bgColor: 'light',
        imagePosition: 'top',
        // span: 1,
      },
      // {
      //   span: 2,
      //   components: 'cards',
      //   title: 'Track your every Transaction Easily',
      //   subtitle:
      //     'Track and record your every income and expence easily to control your balance',
      //   button: {
      //     label: 'Download',
      //     onclick: () => {},
      //     color: 'primary',
      //   },
      //   bgImage: IMAGE_CONSTANTS.IMG_BANNERS_2,
      //   bgColor: 'secondary',
      //   variant: 'banners',
      //   imagePosition: 'side',
      // },
      // {
      //   col: 'col-2',
      //   // span: 2,
      //   data: [
      //     {
      //       components: 'cards',
      //       title: 'Oops something went wrong!',
      //       subtitle: 'Trying again to bypasses these <br> temporary error.',
      //       button: {
      //         label: 'Retry',
      //         onclick: () => {},
      //         color: 'primary',
      //       },
      //       bgImage: IMAGE_CONSTANTS.IMG_BANNERS_3,
      //       variant: 'banners',
      //       bgColor: 'light',
      //       imagePosition: 'top',
      //     },
      //     {
      //       components: 'cards',
      //       title: 'Oop, Your cart is empty!',
      //       subtitle: 'Get back to shopping and get <br> rewards from it.',
      //       button: {
      //         label: 'Go for shopping',
      //         onclick: () => {},
      //         color: 'primary',
      //       },
      //       bgImage: IMAGE_CONSTANTS.IMG_BANNERS_4,
      //       variant: 'banners',
      //       bgColor: 'light',
      //       imagePosition: 'top',
      //     },
      //   ],
      // },
    ],
  },
  {
    col: 'col-3',
    data: [
      {
        span: 2,
        components: 'cards',
        title: 'Track your every Transaction Easily',
        subtitle:
          'Track and record your every income and expence easily to control your balance',
        button: {
          label: 'Download',
          onclick: () => {},
          color: 'primary',
        },
        bgImage: IMAGE_CONSTANTS.IMG_BANNERS_2,
        bgColor: 'secondary',
        variant: 'banners',
        imagePosition: 'side',
      },
    ],
  },
];
