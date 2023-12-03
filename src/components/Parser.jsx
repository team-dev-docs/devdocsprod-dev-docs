import React, { useEffect, useState } from 'react';
import Editor from './MarkdownEditor.jsx'

function Parser({ children }) {
  const [data, setData] = useState(null);
  const [docs, setDocs] = useState([])

  function extractMarkdownHeaders(input) {
    const headerRegex = /^(#+)\s*(?:\+\+\{.*?\}\s*)?(.*?)\s*$/gm;
    let match;
    const headers = [];

    while ((match = headerRegex.exec(input)) !== null) {
      headers.push(match[2]);
    }

    return headers;
  }

  function createDivWithClasses(...classes) {
    const div = document.createElement("div");
    div.classList.add(...classes);
    return div;
  }

  // Create a generic anchor element
  function createAnchor(href, text, ...classes) {
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.textContent = text;
    anchor.classList.add(...classes);
    return anchor;
  }

  // Create a generic ul element with classes
  function createUlWithClasses(...classes) {
    const ul = document.createElement("ul");
    ul.classList.add(...classes);
    return ul;
  }

  // Append the desired structure to a target element
  function appendStructureToTarget(targetElement, headers) {

    const outerDiv = createDivWithClasses("col", "col--3");

    // Inner div
    const innerDiv = createDivWithClasses("tableOfContents_node_modules-@docusaurus-theme-classic-lib-theme-TOC-styles-module", "thin-scrollbar", "theme-doc-toc-desktop");

    // UL
    const ulElement = createUlWithClasses("table-of-contents", "table-of-contents__left-border");

    // LI and anchor
    for (const header of headers) {

      let liElement = document.createElement("li");
      let anchor = createAnchor(`#${header.trimStart().trimEnd()}`, header, "table-of-contents__link", "toc-highlight");
      if (ulElement && liElement && anchor) {
        liElement.appendChild(anchor);
        ulElement.appendChild(liElement);
      }
    }


    innerDiv.appendChild(ulElement);
    outerDiv.appendChild(innerDiv);
    targetElement.appendChild(outerDiv);
  }


  useEffect(() => {


    const markdownElements = Array.from(document.getElementsByClassName('language-markdown'))
    const markdownElement = markdownElements.find(function (item) { return item?.innerText })
    if (markdownElement) {
      setData(markdownElement.innerText);
      const headers = extractMarkdownHeaders(markdownElement?.innerText)
      markdownElement.innerText = null
      if (window.location.pathname.includes("/docs")) {
        console.log("what is the headers", headers)
        const targetElement = document.querySelector("#__docusaurus_skipToContent_fallback > div > main > div > .row");
        appendStructureToTarget(targetElement, headers);
      }
    }


  }, []);



  return (

    <div>
      {data ? <Editor data={data} /> : null}
    </div>
  );
}

export default Parser;
