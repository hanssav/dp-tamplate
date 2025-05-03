import { Input } from '@components/Input';
import { ReactNode, useState } from 'react';

export const previewContent: ReactNode = (() => {
  const PreviewWrapper = () => {
    const [number, setNumber] = useState('');

    return (
      <div className="mb-6">
        <Input
          id="number"
          label="Number"
          type="select"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          options={[
            { label: 'One', value: 'one' },
            { label: 'Two', value: 'two' },
            { label: 'Three', value: 'three' },
          ]}
        />
      </div>
    );
  };

  return <PreviewWrapper />;
})();

export const htmlContent: ReactNode = (
  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-white">
    {`<form class="space-y-4">
    <label for="number" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
      Number
    </label>
    <input
      type="text"
      id="number"
      placeholder="Enter number"
      class="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800"
    />
  </form>`}
  </pre>
);

export const typescriptContent: ReactNode = (
  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-white">
    {`import { useState } from 'react';
  
  const Example = () => {
    const [value, setValue] = useState('');
    return <input value={value} onChange={e => setValue(e.target.value)} />;
  };`}
  </pre>
);
