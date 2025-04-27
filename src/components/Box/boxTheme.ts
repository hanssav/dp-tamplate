import React from 'react';

export const boxTheme = {
  col: {
    'col-1': 'grid grid-cols-1',
    'col-2': 'grid grid-cols-1 sm:grid-cols-2',
    'col-3': 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3',
    'col-4': 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
    'col-5': 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    'col-6': 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6',

    // Masonry layout
    'masonry-2': 'columns-1 sm:columns-2',
    'masonry-3': 'columns-1 sm:columns-2 md:columns-3',
    'masonry-4': 'columns-1 sm:columns-2 md:columns-3 lg:columns-4',
    'masonry-5': 'columns-1 sm:columns-2 md:columns-3 lg:columns-5',
    'masonry-6': 'columns-1 sm:columns-2 md:columns-3 lg:columns-6',
  },
};

export type ColKey = keyof typeof boxTheme.col;

export interface GridItem {
  content: React.ReactNode;
  span?: number; // e.g. 2 → col-span-2
  start?: number; // e.g. 2 → col-start-2
}
