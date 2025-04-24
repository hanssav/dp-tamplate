import { CardVariant } from '@components/_types/Card';
import { menuItems } from '@datas/components/menuItems';
import {
  BaseSection,
  CardContent,
  NestedContent,
  SectionContent,
} from '@datas/pages/config';

/**
 * Extracts a readable title from a URL path.
 * Converts dashes to spaces and capitalizes the first letter of each word.
 * @param {string} pathname - The URL path.
 * @returns {string} - The formatted title string.
 */
export function getTitleFromPath(pathname: string): string {
  const lastSegment = pathname.split('/').filter(Boolean).pop() ?? '';
  const withSpaces = lastSegment.replace(/-/g, ' ');
  return withSpaces
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Checks if a given path exists in the menuItems.
 * @param {string} pathname - The URL path to check.
 * @returns {true | '404'} - Returns true if the path is valid, or '404' if not.
 */
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

/**
 * Converts a string into camelCase format.
 * @param {string} input - The input string.
 * @returns {string} - The camelCase version of the string.
 */
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

/**
 * Splits a flat array into a number of evenly distributed columns.
 * @template T
 * @param {T[]} data - The input array.
 * @param {number} columnCount - Number of columns to split into.
 * @returns {T[][]} - A 2D array of columns.
 */
export function splitIntoColumns<T>(data: T[], columnCount: number): T[][] {
  const columns: T[][] = Array.from({ length: columnCount }, () => []);
  data.forEach((item, index) => {
    const columnIndex = index % columnCount;
    columns[columnIndex].push(item);
  });
  return columns;
}

/**
 * Generates column widths either from custom values or evenly distributes.
 * @param {number} count - Number of columns.
 * @param {number[]} [customWidths] - Optional array of custom widths.
 * @returns {number[]} - An array of widths in percentages.
 */
export function getColumnWidths(
  count: number,
  customWidths?: number[]
): number[] {
  if (customWidths && customWidths.length === count) return customWidths;
  const evenWidth = 100 / count;
  return Array(count).fill(evenWidth);
}

/**
 * Type guard: Checks if an item is of type CardContent.
 * @param {SectionContent} item - The item to check.
 * @returns {item is CardContent} - True if item is CardContent.
 */
export const isCardContent = (item: SectionContent): item is CardContent => {
  return 'variant' in item;
};

/**
 * Type guard: Checks if an item is of type NestedContent.
 * @param {SectionContent} item - The item to check.
 * @returns {item is NestedContent} - True if item is NestedContent.
 */
export const isNestedColContent = (
  item: SectionContent
): item is NestedContent => {
  return 'col' in item && 'data' in item;
};

/**
 * Filters and returns only valid `SectionContent` items from a given array.
 *
 * This utility helps ensure that only objects matching the `SectionContent` shape
 * are included in the result, preventing unexpected values like `null`, `undefined`,
 * or primitives from being processed further in your application logic.
 *
 * @param {any[]} data - An array that may contain mixed item types.
 * @returns {SectionContent[]} - An array of valid `SectionContent` objects.
 */

export const getValidSectionContent = (data: any[]): SectionContent[] => {
  return data.filter(
    (item): item is SectionContent => typeof item === 'object' && item !== null
  );
};

export const formatNumber = (value: number | string): string => {
  if (typeof value === 'string' && value.includes('$')) {
    return value;
  }

  // Convert ke number
  const number = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(number)) return '';

  return new Intl.NumberFormat('en-US').format(number);
};

export function isBaseSection(section: SectionContent): section is BaseSection {
  return (
    'data' in section &&
    Array.isArray(section.data) &&
    'masonryConfig' in section
  );
}

export function hasChild(item: unknown): item is {
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
