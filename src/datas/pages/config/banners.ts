import { BannersCardContent } from '@datas/pages/banners';
import { BannersSectionProps } from '@datas/pages/config/_types';
import { getValidSectionContent } from '@utils/function';

export const banners: BannersSectionProps['content'][] = [
  {
    col: 'col-3',
    variant: 'banners',
    data: getValidSectionContent(BannersCardContent),
  },
];
