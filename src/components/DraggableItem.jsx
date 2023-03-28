// import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
// import React, { useState, useEffect } from 'react'

// export default (props) => {
//     const background = props?.node?.attrs?.background || "white"
//     const otherStyles = props?.node?.attrs?.customStyle || {}
//     const {display, gap, alignContent, alignItems, flexDirection, justifyContent, flexWrap, flexFlow} = otherStyles
//     console.log(props)
//     return (
//       <NodeViewWrapper  style={{background: background, width: props?.node?.attrs?.width, height: props?.node?.attrs?.height, ...otherStyles}} class="draggable-item">
//         <NodeViewContent className={"content"} />
//       </NodeViewWrapper>
//     );
//   };


import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React, { useEffect, useRef } from 'react'

const NodeView = (props) => {
  const nodeRef = useRef(null)

  useEffect(() => {
    const handleDomContent = () => {
      const draggableItems = nodeRef.current.querySelectorAll('.draggable-item')
      draggableItems.forEach(draggableItem => {
        const closestNodeDraggableItem = draggableItem.closest('.node-draggableItem')
        if (closestNodeDraggableItem) {
          const { display, gap, alignContent, alignItems, flexDirection, justifyContent, flexWrap, flexFlow, flex } = draggableItem.style
          console.log("this is the flex", flex)

          closestNodeDraggableItem.style.cssText = `flex: ${flex}; gap: ${gap}; display: ${display}; align-content: ${alignContent}, align-items: ${alignItems}, justify-content: ${justifyContent}, flex-direction: ${flexDirection}; flex-wrap: ${flexWrap}; flex-flow: ${flexFlow}`
        }
      })
    }

    window.addEventListener('load', handleDomContent)
    return () => {
      window.removeEventListener('load', handleDomContent)
    }
  }, [])

  const background = props?.node?.attrs?.background || 'white'
  const otherStyles = props?.node?.attrs?.customStyle || {}
  const { display, gap, alignContent, alignItems, flexDirection, justifyContent, flexWrap, flexFlow } = otherStyles

  return (
    <NodeViewWrapper ref={nodeRef} style={{ background, width: props?.node?.attrs?.width, height: props?.node?.attrs?.height, ...otherStyles }} className="draggable-item">
      <NodeViewContent style={{ display, gap, alignContent, alignItems, flexDirection, justifyContent, flexWrap, flexFlow }} className="content" />
    </NodeViewWrapper>
  )
}

export default NodeView


