import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React, { useState, useEffect } from 'react'

export default (props) => {
    const background = props?.node?.attrs?.background || "white"
    const otherStyles = props?.node?.attrs?.customStyle || {}
    function handleSubmit(e) {
        console.log(props)
        e.preventDefault();
        var url = props?.node.attrs?.url
        var win = window.open(url, '_blank');
        win.focus();
    }

    return (
      <NodeViewWrapper>
        <button style={{background: background, width: props?.node?.attrs?.width, height: props?.node?.attrs?.height, ...otherStyles}}>
        <NodeViewContent />
        </button>
      </NodeViewWrapper>
    );
};