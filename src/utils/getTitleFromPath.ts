export function getTitleFromPath(pathname: string): string {
  const lastSegment = pathname.split('/').filter(Boolean).pop() ?? '';
  const withSpaces = lastSegment.replace(/-/g, ' ');
  return withSpaces
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
