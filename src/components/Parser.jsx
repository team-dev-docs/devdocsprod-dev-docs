import React, { useEffect, useState } from 'react';
import Editor from './MarkdownEditor.jsx'

function Parser({ children }) {
  const [data, setData] = useState(null);
  const [docs, setDocs] = useState([])
  



  useEffect(() => {
    
  
        const markdownElements = Array.from(document.getElementsByClassName('language-markdown'))
        const markdownElement = markdownElements.find(function(item){ return item?.innerText})
        if (markdownElement) {
          setData(markdownElement.innerText);
          markdownElement.innerText = null
        }
  }, []);

  

  return (

    <div>
      {data ? <Editor data={data} /> : null}
    </div>
  );
}

export default Parser;
