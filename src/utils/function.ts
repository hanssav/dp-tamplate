import { menuItems } from '@datas/components/menuItems';
import {
  CardContent,
  NestedContent,
  SectionContent,
} from '@datas/pages/config';

export function getTitleFromPath(pathname: string): string {
  const lastSegment = pathname.split('/').filter(Boolean).pop() ?? '';
  const withSpaces = lastSegment.replace(/-/g, ' ');
  return withSpaces
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export const checkValidPath = (pathname: string): true | '404' => {
  for (const category of menuItems) {
    for (const item of category.items) {
      if (item.href === pathname) return true;

      if (item.subItems) {
        for (const sub of item.subItems) {
          if (sub.href === pathname) return true;
        }
      }
    }
  }
  return '404';
};

export function toCamelCase(input: string): string {
  const words = input.trim().split(/\s+/);

  if (words.length === 1) {
    return words[0].toLowerCase();
  }

  return (
    words[0].toLowerCase() +
    words
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('')
  );
}

export function splitIntoColumns<T>(data: T[], columnCount: number): T[][] {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  data.forEach((item, index) => {
    const columnIndex = index % columnCount;
    columns[columnIndex].push(item);
  });
  return columns;
}

export function getColumnWidths(
  count: number,
  customWidths?: number[]
): number[] {
  if (customWidths && customWidths.length === count) return customWidths;
  const evenWidth = 100 / count;
  return Array(count).fill(evenWidth);
}

export const isCardContent = (item: SectionContent): item is CardContent => {
  return 'variant' in item;
};

export const isNestedColContent = (
  item: SectionContent
): item is NestedContent => {
  return 'col' in item && 'data' in item;
};
