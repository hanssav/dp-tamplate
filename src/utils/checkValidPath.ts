import { menuItems } from '../datas/components/menuItems';

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
