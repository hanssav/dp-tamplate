import Col from '@components/Col';
import { ColKey, GridItem } from '@components/Col/colTheme';
import { MasonrySection } from '@components/UiRenderer/components/MasonrySection';
import {
  renderCard,
  renderChildItem,
} from '@components/UiRenderer/components/RenderHelpers';
import { CardVariant } from '@components/_types/Card';
import {
  SectionContent,
  NestedContent,
  CardContent,
} from '@datas/pages/config';
import { useMasonry } from '@hooks/useMasonry';
import { hasChild, isBaseSection } from '@utils/function';

type UiSectionProps = {
  section: SectionContent;
};

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

  const renderNestedContent = (item: NestedContent, variant: CardVariant, section: SectionContent) => {
    const children = item.data.map((child, i) =>
      renderChildItem(
        child,
        i,
        variant,
        'horizontal' in section ? section.horizontal : false
      )
    );

    return {
      content: (
        <Col
          col={item.col ?? 'col-1'}
          items={children}
        />
      ),
      span: (item as any).span,
    };
  };

  const renderItem = (item: any, index: number, variant: CardVariant, section: SectionContent) => {
    if ('data' in item && Array.isArray(item.data)) {
      return renderNestedContent(item as NestedContent, variant, section);
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

      childrenComponent = (
        <Col col={(item.child.col as ColKey) ?? 'col-3'} items={tempChild} />
      );
    }

    return renderCard(
      item as CardContent,
      index,
      variant,
      (section as any).horizontal ?? false,
      childrenComponent
    );
  };

  const items: GridItem[] | undefined = data.flatMap((item, index) =>
    renderItem(item, index, variant as CardVariant, section)
  );

  return <Col col={col} items={items} />;
};

export default UiSection;