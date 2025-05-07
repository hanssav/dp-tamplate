import { CodeBlock } from '@components/CodeBlock';

export const MiniFabHtmlPreview = () => {
  return (
    <CodeBlock
      language="html"
      code={`import { Trash2, Bookmark, Home, Heart, Radio, Accessibility } from 'lucide-react';

const MiniFabButtons = () => {
  return (
    <div class="flex flex-wrap items-center justify-center gap-3 pb-4">
      <button class="inline-flex items-center justify-center rounded-full p-2 text-primary hover:bg-gray-100 dark:hover:bg-gray-700">
        <Trash2 />
      </button>
      <button class="inline-flex items-center justify-center rounded-full p-2 text-secondary hover:bg-gray-100 dark:hover:bg-gray-700">
        <Bookmark />
      </button>
      <button class="inline-flex items-center justify-center rounded-full p-2 text-warning hover:bg-gray-100 dark:hover:bg-gray-700">
        <Home />
      </button>
      <button class="inline-flex items-center justify-center rounded-full p-2 text-error hover:bg-gray-100 dark:hover:bg-gray-700">
        <Heart />
      </button>
      <button class="inline-flex items-center justify-center rounded-full p-2 text-success hover:bg-gray-100 dark:hover:bg-gray-700">
        <Radio />
      </button>
      <button class="inline-flex items-center justify-center rounded-full p-2 text-basic opacity-50 cursor-not-allowed" disabled>
        <Accessibility />
      </button>
    </div>
  );
};`}
    />
  );
};

export const MiniFabTypescriptPreview = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import React from 'react';
  import {
    Trash2,
    Bookmark,
    Home,
    Heart,
    Radio,
    Accessibility,
  } from 'lucide-react';
  
  const MiniFabButtons = () => {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3 pb-4">
        <button className="inline-flex items-center justify-center rounded-full p-2 text-primary hover:bg-gray-100 dark:hover:bg-gray-700">
          <Trash2 />
        </button>
        <button className="inline-flex items-center justify-center rounded-full p-2 text-secondary hover:bg-gray-100 dark:hover:bg-gray-700">
          <Bookmark />
        </button>
        <button className="inline-flex items-center justify-center rounded-full p-2 text-warning hover:bg-gray-100 dark:hover:bg-gray-700">
          <Home />
        </button>
        <button className="inline-flex items-center justify-center rounded-full p-2 text-error hover:bg-gray-100 dark:hover:bg-gray-700">
          <Heart />
        </button>
        <button className="inline-flex items-center justify-center rounded-full p-2 text-success hover:bg-gray-100 dark:hover:bg-gray-700">
          <Radio />
        </button>
        <button
          className="inline-flex items-center justify-center rounded-full p-2 text-basic opacity-50 cursor-not-allowed"
          disabled
        >
          <Accessibility />
        </button>
      </div>
    );
  };
  
  export default MiniFabButtons;`}
    />
  );
};
