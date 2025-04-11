export function getTitleFromPath(pathname: string): string {
  const lastSegment = pathname.split('/').filter(Boolean).pop() ?? '';
  const withSpaces = lastSegment.replace(/-/g, ' ');
  return withSpaces
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

import { menuItems } from '@datas/components/menuItems';

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
