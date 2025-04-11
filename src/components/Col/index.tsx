/**
 * Col Component
 *
 * A responsive grid layout wrapper based on Tailwind CSS utilities.
 * Automatically adjusts the number of columns depending on the screen size.
 *
 * @param {keyof typeof colTheme.col} [col='col-1'] - Defines the number of columns (1–6) with responsive breakpoints.
 * @param {string} [className] - Optional Tailwind or custom classes to extend the default layout.
 * @param {React.ReactNode} children - The content to be displayed inside the grid.
 * @param {React.HTMLAttributes<HTMLDivElement>} props - Additional div props (e.g., id, style, onClick).
 *
 * @example
 * <Col col="col-3">
 *   <Card />
 *   <Card />
 *   <Card />
 * </Col>
 *
 * Responsive behavior example for 'col-3':
 * - Mobile: 1 column
 * - Small screens (sm): 2 columns
 * - Medium screens (md): 3 columns
 *
 */
const colTheme = {
  col: {
    'col-1': 'grid grid-cols-1 gap-6',
    'col-2': 'grid grid-cols-1 sm:grid-cols-2 gap-6',
    'col-3': 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6',
    'col-4': 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6',
    'col-5': 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6',
    'col-6': 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6',
  },
};

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  col?: 'col-1' | 'col-2' | 'col-3' | 'col-4' | 'col-5' | 'col-6';
  children?: React.ReactNode;
}

export default function Col({
  col = 'col-1',
  className,
  children,
  ...props
}: ColProps) {
  return (
    <div className={`${colTheme.col[col]} ${className ?? ''}`} {...props}>
      {children}
    </div>
  );
}
