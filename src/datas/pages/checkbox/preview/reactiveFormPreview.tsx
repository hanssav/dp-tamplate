import { CodeBlock } from '@components/CodeBlock';

export const CheckboxReactiveFormPreviewHtml = () => {
  return (
    <CodeBlock
      language="html"
      code={`<div class="space-y-4">
    <!-- Checkbox Group -->
    <div class="mb-2 font-medium text-gray-900 dark:text-white">Select your toppings:</div>
    <div class="ml-4 space-y-2">
      <label class="flex items-center space-x-2">
        <input type="checkbox" value="pepperoni" />
        <span>Pepperoni</span>
      </label>
      <label class="flex items-center space-x-2">
        <input type="checkbox" value="extraCheese" />
        <span>Extra Cheese</span>
      </label>
      <label class="flex items-center space-x-2">
        <input type="checkbox" value="mushroom" />
        <span>Mushroom</span>
      </label>
    </div>
  
    <!-- Result -->
    <div class="mt-4 text-sm text-gray-600 dark:text-gray-300">
      You Chose: Pepperoni, Extra Cheese
    </div>
  </div>`}
    />
  );
};

export const CheckboxReactiveFormPreviewTsx = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import { useState } from 'react';

const CheckboxReactiveFormPreview = () => {
  const toppings = [
    { label: 'Pepperoni', value: 'pepperoni' },
    { label: 'Extra Cheese', value: 'extraCheese' },
    { label: 'Mushroom', value: 'mushroom' },
  ];

  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  const toggleTopping = (value: string) => {
    setSelectedToppings(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="space-y-4">
      {/* Checkbox Group */}
      <div className="mb-2 font-medium text-gray-900 dark:text-white">Select your toppings:</div>
      <div className="ml-4 space-y-2">
        {toppings.map(topping => (
          <label key={topping.value} className="flex items-center space-x-2">
            <input
              type="checkbox"
              value={topping.value}
              checked={selectedToppings.includes(topping.value)}
              onChange={() => toggleTopping(topping.value)}
              className="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <span className="text-gray-900 dark:text-white">{topping.label}</span>
          </label>
        ))}
      </div>

      {/* Result */}
      <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        You Chose: {selectedToppings.join(', ') || 'None'}
      </div>
    </div>
  );
};`}
    />
  );
};
