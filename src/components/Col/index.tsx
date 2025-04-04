const colTheme = {
  col: {
    'col-1': 'grid grid-cols-1 gap-4',
    'col-2': 'grid grid-cols-1 sm:grid-cols-2 gap-4',
    'col-3': 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4',
    'col-4':
      'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
    'col-5':
      'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4',
    'col-6':
      'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4',
  },
};

interface ColProps {
  col?: keyof typeof colTheme.col;
  children: React.ReactNode;
  className?: string;
}

export default function Col({ children, col = 'col-1', className }: ColProps) {
  return (
    <div className={`${colTheme.col[col]} ${className ?? ''}`}>{children}</div>
  );
}
