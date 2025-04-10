import IMAGE_CONSTANTS from '@constant/images';

export interface InfoCardItem {
  title: string;
  img: string;
  count: string;
  type: 'primary' | 'warning' | 'secondary' | 'error' | 'success';
}

export const infoCardContent: InfoCardItem[] = [
  {
    title: 'Profile',
    img: IMAGE_CONSTANTS.INFO_USER_IMG,
    count: '3,685',
    type: 'primary',
  },
  {
    title: 'Blog',
    img: IMAGE_CONSTANTS.INFO_BLOG_IMG,
    count: '256',
    type: 'warning',
  },
  {
    title: 'Calendar',
    img: IMAGE_CONSTANTS.INFO_CALENDAR_IMG,
    count: '932',
    type: 'secondary',
  },
  {
    title: 'Email',
    img: IMAGE_CONSTANTS.INFO_EMAIL_IMG,
    count: '$384K',
    type: 'error',
  },
  {
    title: 'Chats',
    img: IMAGE_CONSTANTS.INFO_CHAT_IMG,
    count: '96',
    type: 'success',
  },
  {
    title: 'Contacts',
    img: IMAGE_CONSTANTS.INFO_CONTACT_IMG,
    count: '48',
    type: 'secondary',
  },
];
