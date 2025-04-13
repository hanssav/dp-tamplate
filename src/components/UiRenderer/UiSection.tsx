import Card from '@components/Card';
import Col from '@components/Col';
import { MasonrySection } from '@components/UiRenderer/components/MasonrySection';
import NestedCol from '@components/UiRenderer/NestedCol';
import { CardVariant } from '@components/_types/Card';
import { CardContent, SectionContent, SectionProps } from '@datas/pages/config';
import { useMasonry } from '@hooks/useMasonry';

type Props = {
  section: SectionProps;
};

export const isCardContent = (item: SectionContent): item is CardContent => {
  return 'variant' in item;
};

const UiSection = ({ section }: Props) => {
  const { col, data, variant, horizontal, masonryConfig } = section;

  // custom layout for masonry
  if (Array.isArray(data) && col && col.includes('masonry')) {
    const masonryData = useMasonry(
      data,
      masonryConfig?.columnCount,
      masonryConfig?.columnWidths
    );

    return <MasonrySection data={masonryData} />;
  }

  const items = Array.isArray(data)
    ? data.map((item, index) => {
        if ('col' in item && 'data' in item) {
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
            span: item.span,
          };
        }

        return {
          content: (
            <Card
              key={index}
              variant={(item.variant || variant) as CardVariant}
              content={item}
              horizontal={horizontal}
            />
          ),
          span: item.span,
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
