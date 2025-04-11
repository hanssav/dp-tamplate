import Card from '@components/Card';
import Col from '@components/Col';
import { CardContent, SectionContent, SectionProps } from '@datas/pages/config';
import { GridItem } from '@components/Col/colTheme';
import NestedCol from './NestedCol';
import { CardVariant } from '@components/_types/Card';

type Props = {
  section: SectionProps;
};

const isCardContent = (item: SectionContent): item is CardContent => {
  return 'variant' in item;
};

const UiSection = ({ section }: Props) => {
  const { col, data, variant, horizontal, span } = section;

  const items: GridItem[] | undefined = Array.isArray(data)
    ? data.map((item, index): GridItem => {
        if ('col' in item && 'data' in item) {
          // Nested layout
          return {
            content: (
              <NestedCol
                key={index}
                col={item.col}
                data={item.data}
                span={item.span}
                horizontal={item.horizontal}
              />
            ),
            span,
          };
        }

        // Simple Card layout
        return {
          content: (
            <Card
              key={index}
              variant={(item.variant || variant) as CardVariant}
              content={item}
              horizontal={horizontal}
            />
          ),
          span,
        };
      })
    : undefined;

  return (
    <Col col={col} items={items}>
      {!items &&
        Array.isArray(data) &&
        data.map((item, index) =>
          isCardContent(item) ? (
            <Card
              key={index}
              variant={item.variant}
              content={item}
              horizontal={horizontal}
            />
          ) : null
        )}
    </Col>
  );
};

export default UiSection;
