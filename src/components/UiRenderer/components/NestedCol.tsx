import { NestedContent } from '@datas/pages/config';
import Box from '@components/Box';
import Card from '@components/Card';
import { GridItem } from '@components/Box/boxTheme';
import { isCardContent, isNestedColContent } from '@utils/function';
import { CardVariant } from '@components/_types/Card';

const NestedCol = ({ col, data, horizontal, variant, span }: NestedContent) => {
  const datas = data.map((item) => ({
    ...item,
    variant: variant as CardVariant,
  }));

  const items: GridItem[] = datas.map((item, idx) => {
    if (isCardContent(item)) {
      return {
        content: (
          <Card
            key={idx}
            variant={variant}
            content={item}
            horizontal={horizontal}
          />
        ),
        span: item.span,
      };
    }

    //cover rekursive nested col
    if (isNestedColContent(item)) {
      return {
        content: (
          <NestedCol
            key={idx}
            col={item.col}
            data={item.data}
            horizontal={item.horizontal}
            span={item.span}
            variant={variant}
          />
        ),
        span: item.span,
      };
    }

    return {
      content: <></>,
      span,
      key: idx,
    };
  });

  return <Box col={col} items={items} margin="mb-6" className="gap-6" />;
};

export default NestedCol;
