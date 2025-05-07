import { CodeBlock } from '@components/CodeBlock';

export const BasicHtmlPreview = () => {
  return (
    <CodeBlock
      language="html"
      code={`const BasicButtons = () => {
  return (
    <div class="flex flex-wrap items-center justify-center gap-3 pb-4">
      <button class="rounded bg-gray-200 px-4 py-2 text-gray-800">Basic</button>
      <button class="rounded bg-gray-200 px-4 py-2 text-gray-400" disabled>Disabled</button>
      <button href="#" class="rounded bg-transparent px-4 py-2 text-blue-600 underline">Link</button>
    </div>
  )
}
    `}
    />
  );
};

export const BasicTypescriptPreview = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import { useState } from 'react';

const BasicButtons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 pb-4">
      <button className="rounded bg-gray-200 px-4 py-2 text-gray-800">Basic</button>
      <button className="rounded bg-gray-200 px-4 py-2 text-gray-400" disabled>Disabled</button>
      <button href="#" className="rounded bg-transparent px-4 py-2 text-blue-600 underline">Link</button>
    </div>
  );
};`}
    />
  );
};
