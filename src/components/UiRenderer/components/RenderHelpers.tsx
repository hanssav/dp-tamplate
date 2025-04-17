import Card from '@components/Card';
import Col from '@components/Col';
import { GridItem } from '@components/Col/colTheme';
import NestedCol from '@components/UiRenderer/components/NestedCol';
import { CardVariant } from '@components/_types/Card';
import { CardContent, SectionContent } from '@datas/pages/config';
import { isNestedColContent } from '@utils/function';
import React from 'react';

/**
 * Function to render a NestedCol component.
 * - The function checks if the item is of type NestedColContent.
 * - If true, it renders a NestedCol with the specified properties.
 *
 * @param item - The content to be rendered, expected to be of type NestedColContent.
 * @param index - The index of the item in the array, used as the key for the NestedCol component.
 * @returns GridItem - An object containing the NestedCol component (JSX) and the column span for the item.
 */

export const renderNestedCol = (item: SectionContent, index: number) => {
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
  return;
};

/**
 * Function to render a Card component.
 * - The function takes a CardContent item and renders it as a Card.
 * - It also applies the specified variant and horizontal orientation to the card.
 *
 * @param item - The card content to be rendered (CardContent).
 * @param index - The index of the item in the array, used as the key for the Card component.
 * @param variant - The variant of the card (CardVariant) for rendering.
 * @param horizontal - Determines if the card should be rendered in a horizontal orientation.
 * @returns GridItem - An object containing the Card component (JSX) and the column span for the item.
 */

export const renderCard = (
  item: CardContent,
  index: number,
  variant: CardVariant,
  horizontal: boolean,
  children?: React.ReactNode
) => {
  const childContent = React.isValidElement(children)
    ? children
    : ((children as any)?.content ?? null);

  return {
    content: (
      <Card
        key={index}
        variant={item.variant || variant}
        content={item}
        horizontal={horizontal}
      >
        {childContent}
      </Card>
    ),
    span: item.span,
  };
};

/**
 * Function to render an item within a column, including handling multipleRow and nested content cases.
 * - If the item has the `multipleRow` property and data, the data will be rendered across separate columns.
 * - If the item has a 'nested' type and data, it will render a NestedCol for that item.
 * - If the item is a regular content, it will render a Card.
 *
 * @param child - The child data to be rendered (which may be an object with a `multipleRow` property or nested content).
 * @param index - The index of the item in the array, used as the key for the element.
 * @param variant - The variant of the card (CardVariant) for rendering.
 * @param horizontal - Determines if the card should be rendered in a horizontal orientation.
 * @returns GridItem - An object containing the content (JSX component) and the column span for the item.
 */

export const renderChildItem = (
  child: any,
  index: number,
  variant: CardVariant,
  horizontal?: boolean
): GridItem => {
  if (child.multipleRow && Array.isArray(child.data)) {
    const nestedChildren = child.data.map((nestedChild: any, i: number) =>
      renderChildItem(nestedChild, i, variant, horizontal)
    );

    return {
      content: <Col col={child.col ?? 'col-1'} items={nestedChildren} />,
      span: child.span,
    };
  }

  if (child.type === 'nested' && child.data) {
    console.log(child, 'child');

    return renderNestedCol(child, index) as GridItem;
  }

  return renderCard(child, index, variant, horizontal ?? false);
};
