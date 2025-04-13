import {
  CardContent,
  NestedContent,
  SectionContent,
} from '@datas/pages/config';
import Col from '@components/Col';
import Card from '@components/Card';
import { GridItem } from '@components/Col/colTheme';
import { isNestedColContent } from '@utils/function';

const isCardContent = (item: SectionContent): item is CardContent =>
  'variant' in item;

const NestedCol = ({ col, data, horizontal, span }: NestedContent) => {
  const items: GridItem[] = data.map((item, idx) => {
    if (isCardContent(item)) {
      return {
        content: (
          <Card
            key={idx}
            variant={item.variant}
            content={item}
            horizontal={horizontal}
          />
        ),
        span,
      };
    }

    if (isNestedColContent(item)) {
      return {
        content: (
          <NestedCol
            key={idx}
            col={item.col}
            data={item.data}
            horizontal={item.horizontal}
            span={item.span}
          />
        ),
        span,
      };
    }

    return {
      content: <></>,
      span,
      key: idx,
    };
  });

  return <Col col={col} items={items} />;
};

export default NestedCol;
