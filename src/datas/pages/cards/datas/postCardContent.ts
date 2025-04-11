import IMAGE_CONSTANTS from '@constant/images';

export interface PostCardItem {
  title: string;
  bgImg: string;
  userImg: string;
  category: string;
  date: string;
  views: number;
  comments: number;
  lastView: string;
}

export const postCardContent: PostCardItem[] = [
  {
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
    bgImg: IMAGE_CONSTANTS.POST_BG_1,
    userImg: IMAGE_CONSTANTS.POST_USER_IMG_1,
    category: 'social',
    date: 'Mon, Dec 23',
    views: 9125,
    comments: 3,
    lastView: '2 mins Read',
  },
  {
    title:
      'Intel loses bid to revive antitrust case against patent foe Fortress',
    bgImg: IMAGE_CONSTANTS.POST_BG_2,
    userImg: IMAGE_CONSTANTS.POST_USER_IMG_2,
    category: 'Gadget',
    date: 'Mon, Dec 23',
    views: 9125,
    comments: 3,
    lastView: '2 mins Read',
  },
  {
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    bgImg: IMAGE_CONSTANTS.POST_BG_3,
    userImg: IMAGE_CONSTANTS.POST_USER_IMG_3,
    category: 'Health',
    date: 'Mon, Dec 23',
    views: 9125,
    comments: 3,
    lastView: '2 mins Read',
  },
];
