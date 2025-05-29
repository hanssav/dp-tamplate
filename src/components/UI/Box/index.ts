/**
 * Col Component
 *
 * A responsive grid layout wrapper based on Tailwind CSS utilities.
 * Automatically adjusts the number of columns based on the screen size.
 *
 * This component supports rendering using either direct `children` elements
 * or a structured array of `items` for more reusable and flexible layouts.
 *
 * @param {keyof typeof boxTheme.col} [col='col-1'] - Defines the number of columns with responsive breakpoints:
 *   - 'col-1' → 1 column at all screen sizes
 *   - 'col-2' → 1 column on mobile, 2 on small (sm) and up
 *   - 'col-3' → 1 on mobile, 2 on sm, 3 on medium (md) and up
 *   - continues up to 'col-6'
 *
 * @param {string} [className] - Optional Tailwind or custom classes to extend or override the default layout.
 *
 * @param {GridItem[]} [items] - An optional array of grid items. Each item can contain:
 *   - `content`: `React.ReactNode` — The component or JSX element to render.
 *   - `span` (optional): `number` — Defines how many columns the item should span (e.g., `col-span-2`).
 *   - `start` (optional): `number` — Defines the starting column position (e.g., `col-start-2`).
 *
 * @param {React.ReactNode} [children] - Used when `items` is not provided. Direct children will be rendered inside the grid.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Additional props like `id`, `style`, `onClick`, etc.
 *
 * @example
 * // Using children directly
 * <Col col="col-3">
 *   <Card />
 *   <Card />
 *   <Card />
 * </Box>
 *
 * @example
 * // Using items for reusable, dynamic layout
 * <Col
 *   col="col-3"
 *   items={[
 *     { content: <Card title="Card 1" /> },
 *     { content: <Card title="Card 2" />, span: 2 },        // spans two columns
 *     { content: <Card title="Card 3" />, start: 2 },       // starts on column 2
 *     { content: <Card title="Card 4" />, span: 2, start: 3 }, // spans 2 cols and starts on col 3
 *   ]}
 * />
 *
 * @note
 * If `items` is provided, `children` will be ignored.
 *
 * @responsive
 * Example behavior for `col="col-3"`:
 * - Mobile: 1 column
 * - Small screens (sm): 2 columns
 * - Medium screens (md): 3 columns
 */
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { boxTheme, ColKey, GridItem } from '@components/UI/Box/boxTheme';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  col?: ColKey;
  children?: React.ReactNode;
  items?: GridItem[];
  margin?: string; // e.g. "mb-4 mt-2"
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
}

export default function Box({
  col = 'col-1',
  className,
  children,
  items,
  margin,
  justify,
  align,
  ...rest
}: ColProps) {
  const isMasonry = boxTheme.col[col].includes('columns-');

  const justifyClass = justify ? `justify-${justify}` : '';
  const alignClass = align ? `items-${align}` : '';

  const mergedClass = twMerge(
    boxTheme.col[col],
    margin,
    justifyClass,
    alignClass,
    className
  );

  const childrenToRender = items?.length
    ? items.map((item, index) =>
        React.createElement(
          'div',
          {
            key: index,
            className: twMerge(
              isMasonry
                ? 'mb-6 break-inside-avoid'
                : [
                    item.span ? `col-span-${item.span}` : '',
                    item.start ? `col-start-${item.start}` : '',
                  ].join(' ')
            ),
          },
          item.content
        )
      )
    : children;

  return React.createElement('div', {
    className: mergedClass,
    ...rest,
    children: childrenToRender,
  });
}
