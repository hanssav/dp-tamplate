/** @type {import('prettier').Config} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindAttributes: ['theme'],
  tailwindFunctions: ['twMerge', 'createTheme'],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 80, // reduced from 120 to 80 for earlier line breaks
  arrowParens: 'avoid',
  proseWrap: 'always', // wraps markdown and comments nicely
};
