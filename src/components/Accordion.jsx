
import React, { useState, useEffect } from 'react';
import chroma from 'chroma-js';
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';



function Details({ node }) {
    const [styleObject, setStyleObject] = useState({});
    const styles = {
        warning: {
          color: '#FFCC19',
          class: 'fa-solid fa-triangle-exclamation',
        },
        note: {
          color: '#14A38B',
          class: 'fa-solid fa-circle-exclamation',
        },
        info: {
          color: '#232429',
          class: 'fa-solid fa-circle-info',
        },
        check: {
          color: '#14A38B',
          class: 'fa-solid fa-square-check',
        },
      };
      useEffect(() => {
        console.log("this is the node", node)
        const type = node?.attrs?.type || "note"
        const color = styles[type]?.color;
        if (!color) return;
    
        const darkerColor = chroma(color).darken().hex();
        setStyleObject({
          border: `1px solid ${darkerColor}`, 
          background: `linear-gradient(30.17deg, rgba(255, 204, 25, 0) -4.93%, ${color} -4.91%, rgba(255, 204, 25, 0) 105.13%)`, 
          padding: '0em'
        });

    }, [node])
    
  return (
    <NodeViewWrapper>
    <details style={styleObject}>
      <summary
        style={{ display: 'flex', alignItems: 'center', paddingTop: "1em" }}
      >
        <i style={{ marginLeft: '1em', paddingBottom: "1em"}} className={node?.attrs?.icon || "fa-solid fa-down"}></i>
        <h2 style={{ marginLeft: '1em', color: "white !important" }}>{node?.attrs?.title || "yeah"}</h2>
      </summary>
      
      <NodeViewContent style={{ marginLeft: '1em', color: "white !important", textAlign: "center" }} />
    </details>
    </NodeViewWrapper>
  );
}



export default Details