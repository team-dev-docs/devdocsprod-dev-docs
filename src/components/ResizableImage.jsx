import { NodeViewWrapper } from '@tiptap/react'
import React, { useState, useEffect } from 'react'

function replaceImageUrl(cssString) {
    const regex = /url\(['"]?(https:\/\/raw.githubusercontent.com\/.*?)\/img\/(.*?\.png).*?['"]?\)/g;
    return cssString.replace(regex, 'url("img/$2")');
  }
  
  
  function convertStyleString(styleString) {
    const stylesStringCleaned = replaceImageUrl(styleString);
    const declarations = stylesStringCleaned.split(";");
  
    const styles = {};
  
    for (let declaration of declarations) {
      declaration = declaration.trim();
  
      if (!declaration) {
        continue;
      }
  
      const colonIndex = declaration.indexOf(":");
      if (colonIndex === -1) {
        continue;
      }
  
      const property = declaration.substr(0, colonIndex).trim();
      let value = declaration.substr(colonIndex + 1).trim();
  
      if (value.indexOf("url(") !== -1) {
        const urlStart = value.indexOf("url(");
        const urlEnd = value.indexOf(")", urlStart + 4);
        const url = value
          .substr(urlStart + 4, urlEnd - urlStart - 4)
          .replace(/['"]/g, "");
        value =
          value.substr(0, urlStart) + `url(${url})` + value.substr(urlEnd + 1);
      }
  
      styles[property] = value;
    }
  
    return styles;
  }

export default props => {
    const [count, setCount] = useState(0);
    const increase = () => {
        props.updateAttributes({
            count: props.node.attrs.count + 1,
        })
    }
    const otherStyles = props?.node?.attrs?.customStyle || convertStyleString(props?.node?.attrs?.style)
    console.log("this is the custom styles", otherStyles)
    console.log("this is the class", props?.node?.attrs?.class)
    const customClass = props?.node?.attrs?.class
    const otherClass = `${props?.node?.attrs?.class} react-component` || "react-component"
    useEffect(() => {
        console.log(props.node.attrs)
    });

    return (
        <NodeViewWrapper style={{width: "fit-content", display: "flex"}} className={otherClass}>
            <img src={props.node.attrs.externalImagePath || props.node.attrs.src} className={customClass} style={{...otherStyles}} />
        </NodeViewWrapper>
    )
}