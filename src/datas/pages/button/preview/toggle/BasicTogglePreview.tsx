import { CodeBlock } from '@components/CodeBlock';

export const BasicToggleHtmlPreview = () => {
  return (
    <CodeBlock
      language="html"
      code={`<div class="flex overflow-hidden rounded-md border border-gray-300 dark:border-gray-700">
    <button type="button" class="flex items-center border-r px-4 py-2 text-sm font-medium last:border-r-0 dark:border-gray-700 bg-white text-gray-700 hover:bg-gray-50 dark:bg-primary-dark dark:text-gray-300 dark:hover:bg-gray-700" onclick="handleToggle('bold')">
      <span class="mr-2 text-lg">✓</span>bold
    </button>
    <button type="button" class="flex items-center border-r px-4 py-2 text-sm font-medium last:border-r-0 dark:border-gray-700 bg-white text-gray-700 hover:bg-gray-50 dark:bg-primary-dark dark:text-gray-300 dark:hover:bg-gray-700" onclick="handleToggle('italic')">
      <span class="mr-2 text-lg">✓</span>italic
    </button>
    <button type="button" class="flex items-center border-r px-4 py-2 text-sm font-medium last:border-r-0 dark:border-gray-700 bg-white text-gray-700 hover:bg-gray-50 dark:bg-primary-dark dark:text-gray-300 dark:hover:bg-gray-700" onclick="handleToggle('underline')">
      <span class="mr-2 text-lg">✓</span>underline
    </button>
  </div>
  
  <script>
    let selected = [];
  
    function handleToggle(option) {
      if (selected.includes(option)) {
        selected = selected.filter(item => item !== option);
      } else {
        selected.push(option);
      }
  
      console.log(selected);
    }
  </script>`}
    />
  );
};

export const BasicToggleTypescriptPreview = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import React, { useState } from 'react';
  import { twMerge } from 'tailwind-merge';
  
  const ToggleButtonGroup = ({ options, onChange }: { options: string[], onChange: (selected: string[]) => void }) => {
    const [selected, setSelected] = useState<string[]>([]);
  
    const handleToggle = (option: string) => {
      const updated = selected.includes(option)
        ? selected.filter(item => item !== option)
        : [...selected, option];
      setSelected(updated);
      onChange(updated);
    };
  
    return (
      <div className="flex overflow-hidden rounded-md border border-gray-300 dark:border-gray-700">
        {options.map((option, index) => {
          const isActive = selected.includes(option);
  
          const buttonClass = twMerge(
            \`flex items-center border-r px-4 py-2 text-sm font-medium last:border-r-0 dark:border-gray-700 \${isActive ? 'bg-soft-blue text-blue-700 dark:bg-gray-600 dark:text-white' : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-primary-dark dark:text-gray-300 dark:hover:bg-gray-700'}\`
          );
  
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleToggle(option)}
              className={buttonClass}
            >
              {isActive && <span className="mr-2 text-lg">✓</span>}
              {option}
            </button>
          );
        })}
      </div>
    );
  };
  
  const basic = {
    options: ['bold', 'italic', 'underline'],
    onChange: (selected: string[]) => console.log(selected),
  };
  
  const BasicToggle = () => <ToggleButtonGroup {...basic} />;
  
  export default BasicToggle;`}
    />
  );
};
