import Col from '@components/Col';
import { GridItem } from '@components/Col/colTheme';
import { MasonrySection } from '@components/UiRenderer/components/MasonrySection';
import {
  renderCard,
  renderChildItem,
  renderNestedCol,
} from '@components/UiRenderer/components/RenderHelpers';
import { CardVariant } from '@components/_types/Card';
import { CardContent, NestedContent, SectionProps } from '@datas/pages/config';
import { useMasonry } from '@hooks/useMasonry';
import { isNestedColContent } from '@utils/function';

type UiSectionProps = {
  section: SectionProps;
};

const UiSection = ({ section }: UiSectionProps) => {
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

  const items: GridItem[] | undefined = Array.isArray(data)
    ? (data.flatMap((item, index) => {
        if (isNestedColContent(item)) {
          return [renderNestedCol(item, index)].filter(Boolean);
        }

        if ('data' in item && Array.isArray(item.data)) {
          const children = item.data.map((child, i) =>
            renderChildItem(child, i, variant as CardVariant, horizontal)
          );

          return [
            {
              content: (
                <Col
                  col={(item as NestedContent).col ?? 'col-1'}
                  items={children}
                />
              ),
              span: item.span,
            },
          ].filter(Boolean);
        }

        return [
          renderCard(
            item as CardContent,
            index,
            variant as CardVariant,
            horizontal ?? false
          ),
        ].filter(Boolean);
      }) as GridItem[])
    : undefined;

  return <Col col={col} items={items} />;
};

export default UiSection;
