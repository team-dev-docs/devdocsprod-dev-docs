import React from "react";
import { unified } from "unified";
import markdown from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehype2react from 'rehype-react';
import ReactMarkdown from 'react-markdown';

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(rehype2react, { createElement: React.createElement });

const Step = ({title, stepNumber, children}) => {
    console.log("Children value", children, stepNumber);
    return (
        <li className="mb-10 ms-6">            
            <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-200 rounded-md -start-4 ring-2 ring-white dark:ring-blue-900 dark:bg-gray-900">
                <p className="w-3.8 h-3.8 text-gray-500 dark:text-gray-400">
                    {stepNumber}
                </p>
            </span>
            <div className='ml-6'>
                <h3 className="font-medium leading-tight text-md">{processor.processSync(title).result}</h3>
                {
                    typeof children === 'string' ? <ReactMarkdown>{children}</ReactMarkdown> : children
                }
                
            </div>
        </li>
    )
}

export default Step;