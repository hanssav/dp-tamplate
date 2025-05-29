import { CodeBlock } from '@components/UI/CodeBlock';

export const ExtendedFabHtmlPreview = () => {
  return (
    <CodeBlock
      language="html"
      code={`import { Trash2, Bookmark, Home, Heart } from 'lucide-react';

const ExtendedFabButtons = () => {
  return (
    <div class="flex flex-wrap items-center justify-center gap-3 pb-4">
      <button class="inline-flex items-center gap-2 rounded-xl bg-extended-fab px-4 py-2 text-white hover:bg-opacity-90 dark:bg-extended-fab dark:hover:bg-opacity-80">
        <Trash2 class="h-4 w-4" />
        Delete
      </button>
      <button class="inline-flex items-center gap-2 rounded-xl bg-extended-fab px-4 py-2 text-white hover:bg-opacity-90 dark:bg-extended-fab dark:hover:bg-opacity-80">
        <Bookmark class="h-4 w-4" />
        Bookmark
      </button>
      <button class="inline-flex items-center gap-2 rounded-xl bg-extended-fab px-4 py-2 text-white hover:bg-opacity-90 dark:bg-extended-fab dark:hover:bg-opacity-80">
        <Home class="h-4 w-4" />
        Home
      </button>
      <button class="inline-flex items-center gap-2 rounded-xl bg-gray-400 px-4 py-2 text-white opacity-60 cursor-not-allowed" disabled>
        <Heart class="h-4 w-4" />
        Heart
      </button>
    </div>
  );
};`}
    />
  );
};

export const ExtendedFabTypescriptPreview = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import React from 'react';
import { Trash2, Bookmark, Home, Heart } from 'lucide-react';

const ExtendedFabButtons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 pb-4">
      <button className="inline-flex items-center gap-2 rounded-xl bg-extended-fab px-4 py-2 text-white hover:bg-opacity-90 dark:bg-extended-fab dark:hover:bg-opacity-80">
        <Trash2 className="h-4 w-4" />
        Delete
      </button>
      <button className="inline-flex items-center gap-2 rounded-xl bg-extended-fab px-4 py-2 text-white hover:bg-opacity-90 dark:bg-extended-fab dark:hover:bg-opacity-80">
        <Bookmark className="h-4 w-4" />
        Bookmark
      </button>
      <button className="inline-flex items-center gap-2 rounded-xl bg-extended-fab px-4 py-2 text-white hover:bg-opacity-90 dark:bg-extended-fab dark:hover:bg-opacity-80">
        <Home className="h-4 w-4" />
        Home
      </button>
      <button className="inline-flex items-center gap-2 rounded-xl bg-gray-400 px-4 py-2 text-white opacity-60 cursor-not-allowed" disabled>
        <Heart className="h-4 w-4" />
        Heart
      </button>
    </div>
  );
};

export default ExtendedFabButtons;`}
    />
  );
};
