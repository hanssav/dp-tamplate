import { BannersCardContent } from '@datas/pages/banners';
import { SectionContent } from '@datas/pages/config/_types';
import { getValidSectionContent } from '@utils/function';

export const banners: SectionContent[] = [
  {
    col: 'col-3',
    variant: 'banners',
    data: getValidSectionContent(BannersCardContent),
  },
];
