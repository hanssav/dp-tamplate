import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  language: string;
  code: string;
  customClassName?: string;
  customStyle?: React.CSSProperties; // To support custom inline styles
  showLineNumbers?: boolean; // To show line numbers
  wrapLines?: boolean; // To wrap lines of code
  lineNumberStyle?: React.CSSProperties; // To style line numbers
  showLanguage?: boolean; // To optionally show the language name
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  language,
  code,
  customClassName = '',
  customStyle = {},
  showLineNumbers = true,
  wrapLines = true,
  lineNumberStyle = {},
  showLanguage = false,
}) => {
  return (
    <div className={`${customClassName}`}>
      {showLanguage && (
        <div className="mb-2 text-xl font-semibold text-blue-600">
          {language}
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          borderRadius: '0.5rem',
          padding: '1rem',
          overflowX: 'auto',
          scrollbarWidth: 'thin',
          scrollbarColor: '#4B5563 #1F2937',
          ...customStyle,
        }}
        showLineNumbers={showLineNumbers}
        wrapLines={wrapLines}
        lineNumberStyle={lineNumberStyle}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
