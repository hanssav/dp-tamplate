import { SectionContent } from '@datas/pages/config/_types';
import {
  chartContentData3,
  chartContentDatas1,
  chartContentDatas2,
} from '@datas/pages/charts';

export const charts: SectionContent[] = [
  {
    col: 'col-4',
    variant: 'chart',
    data: chartContentDatas1,
  },
  {
    col: 'col-1',
    data: chartContentDatas2,
  },
  { col: 'col-3', data: chartContentData3 },
];
