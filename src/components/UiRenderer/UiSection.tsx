import Card from '@components/Card';
import Col from '@components/Col';
import { GridItem } from '@components/Col/colTheme';
import { MasonrySection } from '@components/UiRenderer/components/MasonrySection';
import NestedCol from '@components/UiRenderer/components/NestedCol';
import { CardVariant } from '@components/_types/Card';
import { SectionContent, SectionProps } from '@datas/pages/config';
import { useMasonry } from '@hooks/useMasonry';
import { isNestedColContent } from '@utils/function';

type Props = {
  section: SectionProps;
};

// Fungsi untuk merender NestedCol
const renderNestedCol = (item: SectionContent, index: number) => {
  if (isNestedColContent(item)) {
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
  return;
};

// Fungsi untuk merender Card
const renderCard = (
  item: SectionContent,
  index: number,
  variant: CardVariant,
  horizontal: boolean
) => {
  return {
    content: (
      <Card
        key={index}
        variant={variant as CardVariant}
        content={item}
        horizontal={horizontal}
      />
    ),
    span: item.span,
  };
};

const UiSection = ({ section }: Props) => {
  const { col, data, variant, horizontal, masonryConfig } = section;

  // Custom layout for masonry
  if (Array.isArray(data) && col && col.includes('masonry')) {
    const masonryData = useMasonry(
      data.map((item) => ({ ...item, variant: variant as CardVariant })),
      masonryConfig?.columnCount,
      masonryConfig?.columnWidths
    );

    return <MasonrySection data={masonryData} />;
  }

  const items = Array.isArray(data)
    ? (data
        .map((item, index) => {
          if (isNestedColContent(item)) {
            return renderNestedCol(item, index);
          }

          return renderCard(
            item,
            index,
            variant as CardVariant,
            horizontal ?? false
          );
        })
        .filter(Boolean) as GridItem[])
    : undefined;

  return <Col col={col} items={items} />;
};

export default UiSection;
