import { BannersSectionProps } from '@datas/pages/config/_types';
import { ChartsCardContent } from './../charts/datas/banners';

export const charts: BannersSectionProps['content'][] = [
  {
    col: 'col-3',
    variant: 'banners',
    data: ChartsCardContent,
  },
];
