import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';
import Editor from './MarkdownEditor.jsx'

function Parser({ children }) {
  const [data, setData] = useState(null);
  const [container, setContainer] = useState(null);

  useEffect(() => {
    const markdownElements = Array.from(document.getElementsByClassName('language-markdown'));
    const markdownElement = markdownElements.find(function(item){ return item?.innerText});
    console.log("this is the markdown element", markdownElement.innerText)
    if (markdownElement) {
      setData(markdownElement.innerText);
      setContainer(markdownElement);
    }
  }, []); 

  // If container or data is not ready, render nothing
  if (!container || !data) return null;

  // Create a React Portal that renders the Editor into the markdownElement
  return createPortal(<Editor data={data} />, container);
}

export default Parser;
