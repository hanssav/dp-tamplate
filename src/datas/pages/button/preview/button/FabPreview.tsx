import { CodeBlock } from '@components/UI/CodeBlock';

export const FabHtmlPreview = () => {
  return (
    <CodeBlock
      language="html"
      code={`const FabButtons = () => {
    return (
      <div class="flex flex-wrap items-center justify-center gap-3 pb-4">
        <button type="button" class="inline-flex items-center justify-center rounded-full p-3 text-primary hover:bg-soft-blue dark:hover:bg-gray-700">
          <Trash2 class="h-6 w-6" />
        </button>
        <button type="button" class="inline-flex items-center justify-center rounded-full p-3 text-secondary hover:bg-light-secondary dark:hover:bg-gray-700">
          <Bookmark class="h-6 w-6" />
        </button>
        <button type="button" class="inline-flex items-center justify-center rounded-full p-3 text-warning hover:bg-light-warning dark:hover:bg-gray-700">
          <Home class="h-6 w-6" />
        </button>
        <button type="button" class="inline-flex items-center justify-center rounded-full p-3 text-error hover:bg-light-error dark:hover:bg-gray-700">
          <Heart class="h-6 w-6" />
        </button>
        <button type="button" class="inline-flex items-center justify-center rounded-full p-3 text-success hover:bg-light-success dark:hover:bg-gray-700">
          <Radio class="h-6 w-6" />
        </button>
        <button type="button" disabled class="inline-flex items-center justify-center rounded-full p-3 text-primary opacity-50 cursor-not-allowed dark:text-primary">
          <Accessibility class="h-6 w-6" />
        </button>
      </div>
    );
  };`}
    />
  );
};

export const FabTypescriptPreview = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import {
  Trash2,
  Bookmark,
  Home,
  Heart,
  Radio,
  Accessibility,
} from 'lucide-react';

const FabButtons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 pb-4">
      <button type="button" className="inline-flex items-center justify-center rounded-full p-3 text-primary hover:bg-soft-blue dark:hover:bg-gray-700">
        <Trash2 className="h-6 w-6" />
      </button>
      <button type="button" className="inline-flex items-center justify-center rounded-full p-3 text-secondary hover:bg-light-secondary dark:hover:bg-gray-700">
        <Bookmark className="h-6 w-6" />
      </button>
      <button type="button" className="inline-flex items-center justify-center rounded-full p-3 text-warning hover:bg-light-warning dark:hover:bg-gray-700">
        <Home className="h-6 w-6" />
      </button>
      <button type="button" className="inline-flex items-center justify-center rounded-full p-3 text-error hover:bg-light-error dark:hover:bg-gray-700">
        <Heart className="h-6 w-6" />
      </button>
      <button type="button" className="inline-flex items-center justify-center rounded-full p-3 text-success hover:bg-light-success dark:hover:bg-gray-700">
        <Radio className="h-6 w-6" />
      </button>
      <button type="button" disabled className="inline-flex items-center justify-center rounded-full p-3 text-primary opacity-50 cursor-not-allowed dark:text-primary">
        <Accessibility className="h-6 w-6" />
      </button>
    </div>
  );
};`}
    />
  );
};
