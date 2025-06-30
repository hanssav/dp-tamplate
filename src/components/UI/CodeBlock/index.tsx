import React from 'react';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark.css';

// Register only needed languages
hljs.registerLanguage('ts', typescript);
hljs.registerLanguage('tsx', typescript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('js', javascript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('html', html);

interface CodeBlockProps {
  language: string;
  code: string;
  customClassName?: string;
  customStyle?: React.CSSProperties;
  showLineNumbers?: boolean;
  wrapLines?: boolean;
  lineNumberStyle?: React.CSSProperties;
  showLanguage?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  language,
  code,
  customClassName = '',
  customStyle = {},
  showLineNumbers = true,
  wrapLines = false,
  lineNumberStyle = {},
  showLanguage = false,
}) => {
  const codeLines = code.trimEnd().split('\n');

  return (
    <div
      className={`relative text-sm ${customClassName}`}
      style={{ fontFamily: 'monospace', ...customStyle }}
    >
      {showLanguage && (
        <div className="mb-2 text-xl font-semibold text-blue-500">
          {language}
        </div>
      )}
      <pre
        className="hljs overflow-x-auto rounded-md p-4"
        style={{
          display: 'grid',
          gridTemplateColumns: showLineNumbers ? '3rem 1fr' : '1fr',
          whiteSpace: wrapLines ? 'pre-wrap' : 'pre',
          lineHeight: '1.5',
        }}
      >
        {codeLines.map((line, i) => (
          <React.Fragment key={i}>
            {showLineNumbers && (
              <div
                style={{
                  color: '#999',
                  textAlign: 'right',
                  paddingRight: '0.5rem',
                  ...lineNumberStyle,
                }}
              >
                {i + 1}
              </div>
            )}
            <code
              dangerouslySetInnerHTML={{
                __html: hljs.highlight(line || ' ', { language }).value,
              }}
              style={{ lineHeight: '1.5' }}
            />
          </React.Fragment>
        ))}
      </pre>
    </div>
  );
};
