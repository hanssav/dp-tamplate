import IMAGE_CONSTANTS from '../../../constant/images';

export interface CardContentData {
  title: string;
  artis: string;
  bgImg: string;
}

const musicCardContents: CardContentData[] = [
  {
    title: 'Uptown Funk',
    artis: 'Jon Bon Jovi',
    bgImg: IMAGE_CONSTANTS.MUSIC_IMG_1,
  },
  {
    title: 'Shape of You',
    artis: 'Ed Sheeran',
    bgImg: IMAGE_CONSTANTS.MUSIC_IMG_2,
  },
  {
    title: 'Blinding Lights',
    artis: 'The Weeknd',
    bgImg: IMAGE_CONSTANTS.MUSIC_IMG_3,
  },
];

export default musicCardContents;
