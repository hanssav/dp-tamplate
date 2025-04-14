import { BannersCardContent } from '@datas/pages/banners';
import { BannersSectionProps } from '@datas/pages/config/_types';
import { getValidSectionContent } from '@utils/function';

export const banners: BannersSectionProps['content'][] = [
  {
    col: 'masonry-2',
    masonryConfig: {
      columnCount: 2,
      columnWidths: [70, 30],
    },
    variant: 'banners',
    data: getValidSectionContent(BannersCardContent),
  },
];
