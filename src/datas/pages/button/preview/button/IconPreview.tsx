import { CodeBlock } from '@components/CodeBlock';

export const IconTypescriptPreview = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import { Home, SlidersHorizontal, LayoutGrid, Heart, MessageSquare } from 'lucide-react';

const IconButtons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 pb-4">
      <button type="button" className="inline-flex items-center justify-center rounded-full p-2 text-primary hover:bg-soft-blue dark:hover:bg-gray-700">
        <Home className="h-5 w-5" />
      </button>
      <button type="button" className="inline-flex items-center justify-center rounded-full p-2 text-primary hover:bg-soft-blue dark:hover:bg-gray-700">
        <SlidersHorizontal className="h-5 w-5" />
      </button>
      <button type="button" className="inline-flex items-center justify-center rounded-full p-2 text-primary hover:bg-soft-blue dark:hover:bg-gray-700">
        <LayoutGrid className="h-5 w-5" />
      </button>
      <button type="button" className="inline-flex items-center justify-center rounded-full p-2 text-primary hover:bg-soft-blue dark:hover:bg-gray-700">
        <Heart className="h-5 w-5" />
      </button>
      <button type="button" disabled className="inline-flex items-center justify-center rounded-full p-2 text-primary opacity-50 cursor-not-allowed dark:text-primary">
        <MessageSquare className="h-5 w-5" />
      </button>
    </div>
  );
};

export default IconButtons;`}
    />
  );
};

export const IconHtmlPreview = () => {
  return (
    <CodeBlock
      language="html"
      code={`const IconButtons = () => {
    return (
      <div class="flex flex-wrap items-center justify-center gap-3 pb-4">
        <button type="button" class="inline-flex items-center justify-center rounded-full p-2 text-primary hover:bg-soft-blue dark:hover:bg-gray-700">
          <Home class="h-5 w-5" />
        </button>
        <button type="button" class="inline-flex items-center justify-center rounded-full p-2 text-primary hover:bg-soft-blue dark:hover:bg-gray-700">
          <SlidersHorizontal class="h-5 w-5" />
        </button>
        <button type="button" class="inline-flex items-center justify-center rounded-full p-2 text-primary hover:bg-soft-blue dark:hover:bg-gray-700">
          <LayoutGrid class="h-5 w-5" />
        </button>
        <button type="button" class="inline-flex items-center justify-center rounded-full p-2 text-primary hover:bg-soft-blue dark:hover:bg-gray-700">
          <Heart class="h-5 w-5" />
        </button>
        <button type="button" disabled class="inline-flex items-center justify-center rounded-full p-2 text-primary opacity-50 cursor-not-allowed dark:text-primary">
          <MessageSquare class="h-5 w-5" />
        </button>
      </div>
    );
  };`}
    />
  );
};
