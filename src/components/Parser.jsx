import React, { useEffect, useState } from 'react';
import Editor from './MarkdownEditor.jsx'

function Parser({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
        console.log("DO I EXIST")
        const markdownElement = document.getElementsByClassName('language-markdown')[0];
        if (markdownElement) {
          setData(markdownElement.innerText);
          //document.getElementsByClassName('language-markdown')[0].style.display = "none"
        }
   
  
  }, []);

  

  return (
    <div>
      {data ? <Editor data={data} /> : null}
    </div>
  );
}

export default Parser;
