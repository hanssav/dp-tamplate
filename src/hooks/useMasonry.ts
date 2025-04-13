import { MasonryData } from '@components/UiRenderer/components/MasonrySection';
import { SectionContent } from '@datas/pages/config';

export const useMasonry = (
  data: SectionContent[],
  columnCount: number = 2,
  columnWidths?: number[]
): MasonryData => {
  const autoWidths = Array(columnCount).fill(100 / columnCount);

  return {
    columnCount,
    columnWidths: columnWidths || autoWidths,
    items: data,
  };
};
