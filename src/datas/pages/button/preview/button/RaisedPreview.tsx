import { CodeBlock } from '@components/CodeBlock';

export const RaisedHtmlPreview = () => {
  return (
    <CodeBlock
      language="html"
      code={`const RaisedButtons = () => {
  return (
    <div class="flex flex-wrap items-center justify-center gap-3 pb-4">
      <button class="rounded bg-gray-200 px-4 py-2 text-gray-800 shadow-md hover:shadow-lg transition-shadow">Basic</button>
      <button class="rounded bg-gray-200 px-4 py-2 text-gray-400 shadow-md hover:shadow-lg transition-shadow" disabled>Disabled</button>
      <button href="#" class="rounded bg-transparent px-4 py-2 text-blue-600 underline shadow-md hover:shadow-lg transition-shadow">Link</button>
    </div>
  );
};`}
    />
  );
};

export const RaisedTypescriptPreview = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import { useState } from 'react';
  
  const RaisedButtons = () => {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3 pb-4">
        <button className="rounded bg-gray-200 px-4 py-2 text-gray-800 shadow-md hover:shadow-lg transition-shadow">Basic</button>
        <button className="rounded bg-gray-200 px-4 py-2 text-gray-400 shadow-md hover:shadow-lg transition-shadow" disabled>Disabled</button>
        <button href="#" className="rounded bg-transparent px-4 py-2 text-blue-600 underline shadow-md hover:shadow-lg transition-shadow">Link</button>
      </div>
    );
  };`}
    />
  );
};
