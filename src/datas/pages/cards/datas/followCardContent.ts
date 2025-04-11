import IMAGE_CONSTANTS from '@constant/images';

export interface FollowCardContent {
  name: string;
  location: string;
  bgUser: string;
}

export const followCardData: FollowCardContent[] = [
  {
    name: 'Andrew Grant',
    location: 'El Salvador',
    bgUser: IMAGE_CONSTANTS.FOLLOW_USER_1,
  },
  {
    name: 'Emily Parker',
    location: 'Toronto, Canada',
    bgUser: IMAGE_CONSTANTS.FOLLOW_USER_2,
  },
  {
    name: 'Takumi Ito',
    location: 'Osaka, Japan',
    bgUser: IMAGE_CONSTANTS.FOLLOW_USER_3,
  },
  {
    name: 'Fatima Zahra',
    location: 'Casablanca, Morocco',
    bgUser: IMAGE_CONSTANTS.FOLLOW_USER_4,
  },
];
