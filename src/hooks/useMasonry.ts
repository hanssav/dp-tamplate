/**
 * Custom hook for preparing data and layout settings for a Masonry layout.
 * @param {SectionContent[]} data - The content items to render in the masonry layout.
 * @param {number} [columnCount=2] - Number of columns to split the data into. Defaults to 2.
 * @param {number[]} [columnWidths] - Optional custom widths for each column.
 * @returns {MasonryData} - The prepared data including column count, widths, and items.
 */

import { MasonryData } from '@components/UiRenderer/components/MasonrySection';
import { CardVariant } from '@components/_types/Card';
import { SectionContent } from '@datas/pages/config';

export const useMasonry = (
  data: SectionContent[],
  columnCount: number = 2,
  columnWidths?: number[],
  variant?: CardVariant
): MasonryData => {
  const autoWidths = Array(columnCount).fill(100 / columnCount);

  return {
    columnCount,
    columnWidths: columnWidths || autoWidths,
    items: data,
    variant: variant as CardVariant,
  };
};
