import { CodeBlock } from '@components/UI/CodeBlock';

export const FlatHtmlPreview = () => {
  return (
    <CodeBlock
      language="html"
      code={`const FlatButtons = () => {
  return (
    <div class="flex flex-wrap items-center justify-center gap-3 pb-4">
      <button class="rounded bg-primary text-white hover:bg-soft-blue dark:bg-primary dark:text-white dark:hover:bg-soft-blue">Primary</button>
      <button class="rounded bg-secondary text-white hover:bg-soft-secondary dark:bg-secondary dark:text-white dark:hover:bg-soft-secondary">Secondary</button>
      <button class="rounded bg-warning text-white hover:bg-soft-warning dark:bg-warning dark:text-white dark:hover:bg-soft-warning">Warning</button>
      <button class="rounded bg-error text-white hover:bg-soft-error dark:bg-error dark:text-white dark:hover:bg-soft-error">Error</button>
      <button class="rounded bg-success text-white hover:bg-soft-success dark:bg-success dark:text-white dark:hover:bg-soft-success">Success</button>
      <button class="rounded bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700" disabled>Disabled</button>
      <button class="rounded bg-transparent text-primary hover:bg-soft-blue dark:text-primary dark:hover:bg-soft-blue">Link</button>
    </div>
  );
};`}
    />
  );
};

export const FlatTypescriptPreview = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import React from 'react';
  
  const FlatButtons = () => {
    return (
      <div className="flex flex-wrap items-center justify-center gap-3 pb-4">
        <button className="rounded bg-primary text-white hover:bg-soft-blue dark:bg-primary dark:text-white dark:hover:bg-soft-blue">Primary</button>
        <button className="rounded bg-secondary text-white hover:bg-soft-secondary dark:bg-secondary dark:text-white dark:hover:bg-soft-secondary">Secondary</button>
        <button className="rounded bg-warning text-white hover:bg-soft-warning dark:bg-warning dark:text-white dark:hover:bg-soft-warning">Warning</button>
        <button className="rounded bg-error text-white hover:bg-soft-error dark:bg-error dark:text-white dark:hover:bg-soft-error">Error</button>
        <button className="rounded bg-success text-white hover:bg-soft-success dark:bg-success dark:text-white dark:hover:bg-soft-success">Success</button>
        <button className="rounded bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700" disabled>Disabled</button>
        <button className="rounded bg-transparent text-primary hover:bg-soft-blue dark:text-primary dark:hover:bg-soft-blue">Link</button>
      </div>
    );
  };
  
  export default FlatButtons;`}
    />
  );
};
