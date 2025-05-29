import { CodeBlock } from '@components/UI/CodeBlock';

export const ExclusiveSelectionHtmlPreview = () => {
  return (
    <CodeBlock
      language="html"
      code={`<div class="flex gap-4">
  <button type="button" class="px-4 py-2 rounded bg-blue-600 text-white" onclick="handleChange('Left')" disabled>
    <i class="icon-left"></i> Left
  </button>
  <button type="button" class="px-4 py-2 rounded bg-gray-200 text-gray-600" onclick="handleChange('Center')" disabled>
    <i class="icon-center"></i> Center
  </button>
  <button type="button" class="px-4 py-2 rounded bg-gray-200 text-gray-600" onclick="handleChange('Right')" disabled>
    <i class="icon-right"></i> Right
  </button>
  <button type="button" class="px-4 py-2 rounded bg-gray-200 text-gray-600" onclick="handleChange('Justify')" disabled>
    <i class="icon-justify"></i> Justify
  </button>
</div>

<div id="selected-value" class="mt-2">
  <strong>Selected Value:</strong> <span id="selected-text">Left</span>
</div>

<script>
  let selected = ['Left'];

  function handleChange(option) {
    selected = [option]; // Updating selected value
    document.getElementById('selected-text').textContent = option; // Display the selected value
  }
</script>`}
    />
  );
};

export const ExclusiveSelectionTypescriptPreview = () => {
  return (
    <CodeBlock
      language="tsx"
      code={`import { useState } from 'react';
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';

const ExclusiveSelection = () => {
  const [selected, setSelected] = useState<string[]>(['Left']);
  const options = ['Left', 'Center', 'Right', 'Justify'];
  const iconOptions = [<AlignLeft />, <AlignCenter />, <AlignRight />, <AlignJustify />];
  const disabled = [false, false, false, true];

  const handleChange = (option: string) => {
    setSelected([option]); // Only allow one option selected
  };

  return (
    <div className="flex gap-4">
      {options.map((option, index) => (
        <button
          key={option}
          type="button"
          onClick={() => handleChange(option)}
          disabled={disabled[index]}
          className={\`px-4 py-2 rounded \${selected.includes(option) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}\`}
        >
          {iconOptions[index]}
          {option}
        </button>
      ))}
    </div>
  );
};

export default ExclusiveSelection;`}
    />
  );
};
