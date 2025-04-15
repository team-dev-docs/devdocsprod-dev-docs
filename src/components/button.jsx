import { NodeViewWrapper, NodeViewContent } from '@tiptap/react'
import React, { useState, useEffect } from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly';

const ButtonContent = (props) => {
    const background = props?.node?.attrs?.background || "white"
    const otherStyles = props?.node?.attrs?.customStyle || {}
    function handleSubmit(e) {
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

export default function Button(props) {
    return (
        <BrowserOnly>
            {() => <ButtonContent {...props} />}
        </BrowserOnly>
    );
}