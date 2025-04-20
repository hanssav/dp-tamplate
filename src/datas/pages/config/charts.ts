import { SectionContent } from '@datas/pages/config/_types';
import { chartContentDatas1, chartContentDatas2 } from '@datas/pages/charts';

export const charts: SectionContent[] = [
  {
    col: 'col-4',
    variant: 'chart',
    data: chartContentDatas1,
  },
  {
    col: 'col-1',
    multipleRow: true,
    data: chartContentDatas2,
  },
];
