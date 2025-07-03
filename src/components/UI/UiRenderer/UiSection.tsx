import Box from '@components/UI/Box';
import { GridItem } from '@components/UI/Box/boxTheme';
import {
  renderCard,
  renderChildItem,
} from '@components/UI/UiRenderer/components/RenderHelpers';
import { CardVariant } from '@components/types/card';
import {
  SectionContent,
  NestedContent,
  CardContent,
} from '@datas/pages/config';

type UiSectionProps = {
  section: SectionContent;
};

const UiSection = ({ section }: UiSectionProps) => {
  if (!('data' in section) || !Array.isArray(section.data)) return null;

  const { data, variant } = section;
  const col = 'col' in section ? section.col : undefined;

  const renderGroupLayout = (
    index: number,
    item: NestedContent,
    variant: CardVariant,
    section: SectionContent
  ) => {
    const isCollumnGroup = item.type === 'columnGroup';

    const children = item.data.map((child, i) => {
      return renderChildItem(
        child,
        i,
        variant,
        'horizontal' in section ? section.horizontal : false
      );
    });

    const result = {
      content: (
        <Box
          col={item.col ?? 'col-1'}
          items={children}
          className={isCollumnGroup ? 'gap-x-6 py-5' : `gap-y-6`}
        />
      ),
      span: (item as any).span ?? 'span-1',
    };

    if (isCollumnGroup) {
      return renderCard(
        item as CardContent,
        index,
        variant,
        (section as any).horizontal ?? false,
        result.content
      );
    }
    return result;
  };

  const renderItem = (
    item: any,
    index: number,
    variant: CardVariant,
    section: SectionContent
  ) => {
    if ('data' in item && Array.isArray(item.data)) {
      return renderGroupLayout(index, item, variant, section);
    }
    return renderCard(
      item as CardContent,
      index,
      variant,
      (section as any).horizontal ?? false
    );
  };

  const items: GridItem[] | undefined = data.flatMap((item, index) =>
    renderItem(item, index, variant as CardVariant, section)
  );

  return <Box col={col} items={items} margin="mb-6" className="gap-x-6" />;
};

export default UiSection;
