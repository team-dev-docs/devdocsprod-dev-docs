import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react';

import Component from './DraggableItem.jsx'

export default Node.create({
  name: 'draggableItem',

  group: 'block',

  content: 'block+',

  draggable: true,

  parseHTML() {
    return [
      {
        tag: 'div[data-type="draggable-item"]',
      },
    ]
  },
  addAttributes() {
    return {
      background: {
        default: null,
      },
      backgroundPosition: {
        default: null
      },
      customStyle: {
        default: null
      },
      customStyleString: {
        default: null
      },
      style: {
        default: null
      },
      heightString: {
        default: null
      },
      heightFormat: {
        default: null
      },
      height: {
        default: null
      },
      widthString: {
        default: null
      },
      widthFormat: {
        default: null
      },
      width: {
        default: null
      },
      class: {
        default: null
      }
    }
  },
  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 'data-type': 'draggable-item' }), 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },
})