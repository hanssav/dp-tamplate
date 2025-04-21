export const THEME_MODE_CONSTANT = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type ThemeMode =
  (typeof THEME_MODE_CONSTANT)[keyof typeof THEME_MODE_CONSTANT];
