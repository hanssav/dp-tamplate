export const getChildValues = (item: any) =>
  item.childItem?.map((c: any) => c.value) || [];

export const exclude = (arr: string[], toRemove: string[]) =>
  arr.filter(val => !toRemove.includes(val));
