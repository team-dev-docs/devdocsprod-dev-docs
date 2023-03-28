import { NodeViewWrapper } from '@tiptap/react'
import React, { useState, useEffect } from 'react'

export default props => {
    const [count, setCount] = useState(0);
    const increase = () => {
        props.updateAttributes({
            count: props.node.attrs.count + 1,
        })
    }
    const otherStyles = props?.node?.attrs?.customStyle || {}
    useEffect(() => {
        console.log(props.node.attrs)
    });

    return (
        <NodeViewWrapper className="react-component">
            <img src={props.node.attrs.externalImagePath || props.node.attrs.src} style={{width: props.node.attrs.width, height: props.node.attrs.height, ...otherStyles}} />
        </NodeViewWrapper>
    )
}