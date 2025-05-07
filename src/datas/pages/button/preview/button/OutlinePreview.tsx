import { CodeBlock } from '@components/CodeBlock';

export const OutlineHtmlPreview = () => {
  return (
    <CodeBlock
      language="html"
      code={`const OutlineButtons = () => {
  return (
    <div class="flex flex-wrap items-center justify-center gap-3 pb-4">
      <button class="rounded border border-primary bg-transparent text-primary hover:bg-soft-blue focus:ring-gray-300 dark:border-primary dark:bg-transparent dark:enabled:hover:bg-gray-700">Primary</button>
      <button class="rounded border border-secondary text-secondary hover:bg-light-secondary dark:border-secondary dark:text-secondary">Secondary</button>
      <button class="rounded border border-warning text-warning hover:bg-light-warning dark:border-warning dark:text-warning">Warning</button>
      <button class="rounded border border-error text-error hover:bg-light-error dark:border-error dark:text-error">Error</button>
      <button class="rounded border border-success text-success hover:bg-light-success dark:border-success dark:text-success">Success</button>
      <button class="rounded border border-primary bg-transparent text-primary hover:bg-soft-blue focus:ring-gray-300 dark:border-primary dark:bg-transparent dark:enabled:hover:bg-gray-700" disabled>Disabled</button>
      <button class="rounded border border-link text-link hover:bg-light-link dark:border-link dark:text-link">Link</button>
    </div>
  );
};`}
    />
  );
};

export const OutlineTypescriptPreview = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import React from 'react';
  
  const OutlineButtons = () => {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3 pb-4">
        <button className="rounded border border-primary bg-transparent text-primary hover:bg-soft-blue focus:ring-gray-300 dark:border-primary dark:bg-transparent dark:enabled:hover:bg-gray-700">Primary</button>
        <button className="rounded border border-secondary text-secondary hover:bg-light-secondary dark:border-secondary dark:text-secondary">Secondary</button>
        <button className="rounded border border-warning text-warning hover:bg-light-warning dark:border-warning dark:text-warning">Warning</button>
        <button className="rounded border border-error text-error hover:bg-light-error dark:border-error dark:text-error">Error</button>
        <button className="rounded border border-success text-success hover:bg-light-success dark:border-success dark:text-success">Success</button>
        <button className="rounded border border-primary bg-transparent text-primary hover:bg-soft-blue focus:ring-gray-300 dark:border-primary dark:bg-transparent dark:enabled:hover:bg-gray-700" disabled>Disabled</button>
        <button className="rounded border border-link text-link hover:bg-light-link dark:border-link dark:text-link">Link</button>
      </div>
    );
  };
  export default OutlineButtons;
`}
    />
  );
};
