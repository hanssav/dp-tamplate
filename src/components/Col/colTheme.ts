import React from 'react';

export const colTheme = {
  col: {
    'col-1': 'grid grid-cols-1 gap-6 mb-6',
    'col-2': 'grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6',
    'col-3': 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6',
    'col-4':
      'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6',
    'col-5':
      'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-6',
    'col-6':
      'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-6',

    // Masonry layout
    'masonry-2': 'columns-1 sm:columns-2 gap-6 mb-6',
    'masonry-3': 'columns-1 sm:columns-2 md:columns-3 gap-6 mb-6',
    'masonry-4': 'columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 mb-6',
    'masonry-5': 'columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-6 mb-6',
    'masonry-6': 'columns-1 sm:columns-2 md:columns-3 lg:columns-6 gap-6 mb-6',
  },
};


export type ColKey = keyof typeof colTheme.col;

export interface GridItem {
  content: React.ReactNode;
  span?: number; // e.g. 2 → col-span-2
  start?: number; // e.g. 2 → col-start-2
}
