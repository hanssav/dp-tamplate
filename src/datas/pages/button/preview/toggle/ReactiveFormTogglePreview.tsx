import { CodeBlock } from '@components/CodeBlock';

export const ReactiveFormHtmlPreview = () => {
  return (
    <CodeBlock
      language="html"
      code={`<div class="flex space-x-4">
  <button type="button" class="px-4 py-2 text-sm font-medium" onclick="handleChange('bold')" style="background-color: #3490dc; color: white;">
    Bold
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium" onclick="handleChange('italic')" style="background-color: #3490dc; color: white;">
    Italic
  </button>
  <button type="button" class="px-4 py-2 text-sm font-medium" onclick="handleChange('underline')" style="background-color: #3490dc; color: white;">
    Underline
  </button>
</div>

<div id="selected-value" class="mt-2">
  <strong>Selected Value:</strong> <span id="selected-text">bold</span>
</div>

<script>
  let selected = ['bold'];

  function handleChange(option) {
    selected = [option]; // Updating selected value
    document.getElementById('selected-text').textContent = option; // Display the selected value
  }
</script>`}
    />
  );
};

export const ReactiveFormTypescriptPreview = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import { useState } from 'react';
  
  const ReactiveForm = () => {
    const [selected, setSelected] = useState<string[]>(['bold']);
    const options = ['bold', 'italic', 'underline'];
  
    const handleChange = (option: string) => {
      const updated = selected.includes(option)
        ? selected.filter(item => item !== option)
        : [...selected, option];
  
      setSelected(updated);
    };
  
    return (
      <div className="flex gap-4">
        {options.map((option, index) => {
          const isActive = selected.includes(option);
  
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleChange(option)}
              className={\`px-4 py-2 rounded {isActive ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}\`}
            >
              {option}
            </button>
          );
        })}
      </div>
    );
  };
  
  export default ReactiveForm;`}
    />
  );
};
