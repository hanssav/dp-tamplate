import Box from '@components/Box';
import { GridItem } from '@components/Box/boxTheme';
import NestedCol from '@components/UiRenderer/components/NestedCol';
import { CardVariant } from '@components/_types/Card';
import { CardContent, SectionContent } from '@datas/pages/config';
import { isNestedColContent } from '@utils/function';
import React from 'react';
import { DynamicCard } from '@components/Card/CardContent';
import { twMerge } from 'tailwind-merge';

export const renderNestedCol = (
  item: SectionContent,
  index: number
): GridItem | undefined => {
  if (isNestedColContent(item)) {
    return {
      content: (
        <NestedCol
          key={index}
          col={item.col}
          data={item.data}
          span={item.span}
          horizontal={item.horizontal}
          variant={item.variant as CardVariant}
        />
      ),
      span: item.span,
    };
  }
};

export const renderCard = (
  item: CardContent,
  index: number,
  variant: CardVariant,
  horizontal: boolean,
  children?: React.ReactNode
): GridItem => {
  const childContent = React.isValidElement(children)
    ? children
    : ((children as any)?.content ?? null);
  const margin = (item as any).config?.margin ?? 'm-0';

  return {
    content: (
      <DynamicCard
        key={index}
        variant={item.variant || variant}
        content={item}
        horizontal={horizontal}
        className={twMerge(margin)}
      >
        {childContent}
      </DynamicCard>
    ),
    span: item.span,
  };
};

export const renderChildItem = (
  child: any,
  index: number,
  variant: CardVariant,
  horizontal: boolean = false
): GridItem => {
  if (child.multipleRow && Array.isArray(child.data)) {
    const nestedChildren = child.data.map((nestedChild: any, i: number) =>
      renderChildItem(nestedChild, i, variant, horizontal)
    );

    return {
      content: <Box col={child.col ?? 'col-1'} items={nestedChildren} />,
      span: child.span,
    };
  }

  if (child.type === 'nested' && child.data) {
    return renderNestedCol(child, index) as GridItem;
  }

  return renderCard(child, index, variant, horizontal);
};
