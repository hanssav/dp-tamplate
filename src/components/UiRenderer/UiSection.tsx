import Col from '@components/Col';
import { ColKey, GridItem } from '@components/Col/colTheme';
import { MasonrySection } from '@components/UiRenderer/components/MasonrySection';
import {
  renderCard,
  renderChildItem,
} from '@components/UiRenderer/components/RenderHelpers';
import { CardVariant } from '@components/_types/Card';
import {
  BaseSection,
  SectionContent,
  NestedContent,
  CardContent,
} from '@datas/pages/config';
import { useMasonry } from '@hooks/useMasonry';

type UiSectionProps = {
  section: SectionContent;
};

function isBaseSection(section: SectionContent): section is BaseSection {
  return (
    'data' in section &&
    Array.isArray(section.data) &&
    'masonryConfig' in section
  );
}

function hasChild(item: unknown): item is {
  child: { data: CardContent[]; col?: string };
  variant?: CardVariant;
  horizontal?: boolean;
  span?: number;
} {
  return (
    typeof item === 'object' &&
    item !== null &&
    'child' in item &&
    Array.isArray((item as any).child?.data)
  );
}

const UiSection = ({ section }: UiSectionProps) => {
  if (!('data' in section) || !Array.isArray(section.data)) return null;

  const { data, variant } = section;
  const col = 'col' in section ? section.col : undefined;
  const masonryConfig = isBaseSection(section)
    ? section.masonryConfig
    : undefined;

  if (col?.includes('masonry')) {
    const masonryData = useMasonry(
      data.map((item: any) => ({ ...item, variant: variant as CardVariant })),
      masonryConfig?.columnCount,
      masonryConfig?.columnWidths
    );

    return <MasonrySection data={masonryData} />;
  }

  const items: GridItem[] | undefined = data.flatMap((item, index) => {
    if ('data' in item && Array.isArray(item.data)) {
      const children = item.data.map((child, i) =>
        renderChildItem(
          child,
          i,
          variant as CardVariant,
          'horizontal' in section ? section.horizontal : false
        )
      );

      return [
        {
          content: (
            <Col
              col={(item as NestedContent).col ?? 'col-1'}
              items={children}
            />
          ),
          span: (item as any).span,
        },
      ];
    }

    let childrenComponent: React.ReactNode = null;

    if (hasChild(item)) {
      const tempChild = item.child.data.map((childDatas, index) =>
        renderCard(
          childDatas,
          index,
          item.variant as CardVariant,
          item.horizontal ?? false
        )
      );

      if (tempChild.length > 0) {
        childrenComponent = (
          <Col col={(item.child.col as ColKey) ?? 'col-3'} items={tempChild} />
        );
      }
    }

    return [
      renderCard(
        item as CardContent,
        index,
        variant as CardVariant,
        (section as any).horizontal ?? false,
        childrenComponent
      ),
    ];
  });

  return <Col col={col} items={items} />;
};

export default UiSection;
