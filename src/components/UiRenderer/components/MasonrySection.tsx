import Card from '@components/Card';
import NestedCol from '@components/UiRenderer/components/NestedCol';
import { CardVariant } from '@components/_types/Card';
import { SectionContent } from '@datas/pages/config';
import {
  getColumnWidths,
  isCardContent,
  isNestedColContent,
  splitIntoColumns,
} from '@utils/function';

export type MasonryData = {
  columnCount: number;
  columnWidths?: number[];
  items: SectionContent[];
};

export type MasonryProps = {
  data: MasonryData;
};

export const MasonrySection: React.FC<MasonryProps> = ({ data }) => {
  const { columnCount, columnWidths, items } = data;

  const columns = splitIntoColumns(items, columnCount);
  const widths = getColumnWidths(columnCount, columnWidths);

  return (
    <div className="flex w-full gap-4">
      {columns.map((colItems, colIdx) => (
        <div
          key={colIdx}
          className="flex flex-col gap-6"
          style={{ width: `${widths[colIdx]}%` }}
        >
          {colItems.map((item, idx) => {
            const key = `col-${colIdx}-item-${idx}`;
            const content = isNestedColContent(item) ? (
              <NestedCol
                key={key}
                col={item.col}
                data={item.data}
                span={item.span}
                horizontal={item.horizontal}
              />
            ) : isCardContent(item) ? (
              <Card
                key={key}
                variant={item.variant as CardVariant}
                content={item}
                horizontal={item.horizontal}
              />
            ) : null;
            return <div key={key}>{content}</div>;
          })}
        </div>
      ))}
    </div>
  );
};
