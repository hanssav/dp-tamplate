import IMAGE_CONSTANTS from '@constant/images';
import { SectionContent } from '@datas/pages/config/_types';

export const BannersCardContent: SectionContent[] = [
  {
    variant: 'banners',
    span: 2,
    data: [
      {
        span: 2,
        components: 'cards',
        title: 'Welcome back Mathew!',
        subtitle:
          'You have earned 54% more than last month which is great thing.',
        button: [
          {
            label: 'Check',
            onclick: () => {},
            color: 'primary',
          },
        ],
        bgImage: IMAGE_CONSTANTS.IMG_BANNERS_1,
        imagePosition: 'side',
        variant: 'banners',
      },
      // Second Row
      {
        span: 2,
        components: 'cards',
        title: 'Track your every Transaction Easily',
        subtitle:
          'Track and record your every income and expence easily to control your balance',
        button: [
          {
            label: 'Download',
            onclick: () => {},
            color: 'primary',
          },
        ],
        bgImage: IMAGE_CONSTANTS.IMG_BANNERS_2,
        bgColor: 'secondary',
        imagePosition: 'side',
      },
      {
        col: 'col-2',
        type: 'nested',
        variant: 'banners',
        span: 2,
        data: [
          {
            components: 'cards',
            title: 'Oops something went wrong!',
            subtitle: 'Trying again to bypasses these <br> temporary error.',
            button: [
              {
                label: 'Retry',
                onclick: () => {},
                color: 'primary',
              },
            ],
            bgImage: IMAGE_CONSTANTS.IMG_BANNERS_3,
            bgColor: 'light',
            imagePosition: 'top',
            span: 1,
          },
          {
            components: 'cards',
            title: 'Oop, Your cart is empty!',
            subtitle: 'Get back to shopping and get <br> rewards from it.',
            button: [
              {
                label: 'Go for shopping',
                onclick: () => {},
                color: 'primary',
              },
            ],
            bgImage: IMAGE_CONSTANTS.IMG_BANNERS_4,
            bgColor: 'light',
            imagePosition: 'top',
            span: 1,
          },
        ],
      },
    ],
  },
  {
    // col: 'col-1',
    multipleRow: true,
    variant: 'banners',
    span: 1,
    data: [
      {
        components: 'cards',
        title: 'You reach all Notifications',
        subtitle: 'Congratulations, <br>Tap to continue next task.',
        button: [
          {
            label: 'Yes, Got it!',
            onclick: () => {},
            color: 'primary',
          },
        ],
        bgImage: IMAGE_CONSTANTS.IMG_BANNERS_5,
        bgColor: 'light',
        imagePosition: 'top',
        preTitle: {
          text: 'LEVEL UP',
          style: 'body',
          as: 'h2',
        },
      },
      {
        components: 'cards',
        title: 'Tommoie Henderson',
        subtitle: 'Accept the request and type a message',
        button: [
          {
            label: 'Accept!',
            onclick: () => {},
            color: 'primary',
          },
          {
            label: 'Remove',
            onclick: () => {},
            color: 'secondary',
          },
        ],
        bgImage: IMAGE_CONSTANTS.POST_USER_IMG_1,
        bgColor: 'light',
        imagePosition: 'top',
        preTitle: {
          text: 'Mutual Friend Revealed',
          style: 'heading-md',
          as: 'h2',
        },
      },
    ],
  },
];
