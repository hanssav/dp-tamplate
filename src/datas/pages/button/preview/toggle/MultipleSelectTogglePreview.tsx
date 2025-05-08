import { CodeBlock } from '@components/CodeBlock';

export const MultipleSelectHtmlPreview = () => {
  return (
    <CodeBlock
      language="html"
      code={`<div class="flex overflow-hidden rounded-md border border-gray-300 dark:border-gray-700">
  <button type="button" class="flex items-center border-r px-4 py-2 text-sm font-medium last:border-r-0 dark:border-gray-700 bg-soft-blue text-blue-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700" onclick="handleToggle('Flour')">
    <span class="mr-2 text-lg">✓</span>Flour
  </button>
  <button type="button" class="flex items-center border-r px-4 py-2 text-sm font-medium last:border-r-0 dark:border-gray-700 bg-soft-blue text-blue-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700" onclick="handleToggle('Eggs')">
    <span class="mr-2 text-lg">✓</span>Eggs
  </button>
  <button type="button" class="flex items-center border-r px-4 py-2 text-sm font-medium last:border-r-0 dark:border-gray-700 bg-soft-blue text-blue-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700" onclick="handleToggle('Vegetables')">
    <span class="mr-2 text-lg">✓</span>Vegetables
  </button>
  <button type="button" class="flex items-center border-r px-4 py-2 text-sm font-medium last:border-r-0 dark:border-gray-700 bg-soft-blue text-blue-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700" onclick="handleToggle('Cheese')">
    <span class="mr-2 text-lg">✓</span>Cheese
  </button>
</div>

<script>
  let selected = ['Flour', 'Vegetables'];

  function handleToggle(option) {
    if (selected.includes(option)) {
      selected = selected.filter(item => item !== option);
    } else {
      selected.push(option);
    }

  }
</script>`}
    />
  );
};

export const MultipleSelectTypescriptPreview = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import { useState } from 'react';
  
  const MultipleSelect = () => {
    const [selected, setSelected] = useState<string[]>(['Flour', 'Vegetables']);
    const options = ['Flour', 'Eggs', 'Vegetables', 'Cheese'];
  
    const handleToggle = (option: string) => {
      const updated = selected.includes(option)
        ? selected.filter(item => item !== option)
        : [...selected, option];
  
      setSelected(updated);
    };
  
    return (
      <div className="flex overflow-hidden rounded-md border border-gray-300 dark:border-gray-700">
        {options.map((option, index) => {
          const isActive = selected.includes(option);
  
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleToggle(option)}
              className={\`flex items-center border-r px-4 py-2 text-sm font-medium last:border-r-0 dark:border-gray-700 \${isActive ? 'bg-soft-blue text-blue-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50 dark:bg-primary-dark dark:text-gray-300 dark:hover:bg-gray-700'}\`}
            >
              {isActive && <span className="mr-2 text-lg">✓</span>}
              {option}
            </button>
          );
        })}
      </div>
    );
  };
  
  export default MultipleSelect;`}
    />
  );
};
