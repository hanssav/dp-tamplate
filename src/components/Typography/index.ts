import * as React from 'react';
import { twMerge } from 'tailwind-merge';

/**
 * Available text style variants used in the Typography component.
 */
type TextStyle =
  | 'heading-lg'
  | 'heading-md'
  | 'title'
  | 'subtitle'
  | 'body'
  | 'desc'
  | 'link';

/**
 * Maps each TextStyle to its corresponding Tailwind CSS classes.
 */
const textStyleClasses: Record<TextStyle, string> = {
  'heading-lg': 'text-2xl font-bold text-gray-900 dark:text-white',
  'heading-md': 'text-xl font-semibold text-gray-900 dark:text-white',
  title: 'text-lg font-semibold text-gray-800 dark:text-white',
  subtitle: 'text-base font-semibold text-gray-800 dark:text-white',
  body: 'text-sm text-gray-800 dark:text-white',
  desc: 'text-sm text-gray-500 dark:text-gray-400',
  link: 'text-sm text-blue-600 dark:text-blue-400 hover:underline',
};

/**
 * Breakpoints for responsive text styles.
 */
type ResponsiveBreakpoints = 'base' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Defines a responsive text style that maps breakpoints to TextStyles.
 */
type ResponsiveTextStyle = Partial<Record<ResponsiveBreakpoints, TextStyle>>;

/**
 * Props for the Typography component.
 *
 * @template T - The HTML element to render as (e.g., 'p', 'h1', 'span', etc.)
 */
type TypographyProps<T extends keyof JSX.IntrinsicElements = 'p'> = {
  /**
   * The HTML tag to render the component as. Default is `'p'`.
   */
  as?: T;

  /**
   * The text style to apply, either a single variant or a responsive object.
   */
  textStyle?: TextStyle | ResponsiveTextStyle;

  /**
   * Text alignment: `left`, `center`, `right`, or `justify`.
   */
  align?: 'left' | 'center' | 'right' | 'justify';

  /**
   * Additional Tailwind or custom class names to apply.
   */
  className?: string;

  /**
   * The content to display inside the typography component.
   */
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, 'className' | 'children'>;

/**
 * Converts a responsive textStyle object into a responsive class string.
 *
 * @param style - The text style or responsive text style object.
 * @returns A string of Tailwind CSS classes.
 */
const getResponsiveClass = (style: TextStyle | ResponsiveTextStyle): string => {
  if (typeof style === 'string') return textStyleClasses[style];

  return Object.entries(style)
    .map(([bp, val]) => {
      const styleClass = textStyleClasses[val];
      return bp === 'base' ? styleClass : `${bp}:${styleClass}`;
    })
    .join(' ');
};

/**
 * Typography component that provides consistent text styles with Tailwind.
 * Supports responsive variants and text alignment.
 *
 * @param props - Props for rendering the typography element.
 * @returns A React element with merged styles.
 */
const Typography = <T extends keyof JSX.IntrinsicElements = 'p'>({
  as,
  textStyle = 'body',
  align,
  className,
  children,
  ...rest
}: TypographyProps<T>) => {
  const Component = (as || 'p') as keyof JSX.IntrinsicElements;

  const textStyleClass = getResponsiveClass(textStyle);
  const alignClass = align ? `text-${align}` : '';

  const mergedClass = twMerge(textStyleClass, alignClass, className);

  return React.createElement(Component as any, {
    className: mergedClass,
    ...rest,
    children,
  });
};

export default Typography;
