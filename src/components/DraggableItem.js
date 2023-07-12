import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react';

import Component from './DraggableItem.jsx'

export default Node.create({
  name: 'draggableItem',

  group: 'block',

  content: 'block+',

  draggable: true,

  addStorage() {
    return {
      disableDrag: false,
    }
  },
  addOptions() {
    return {
      HTMLAttributes: {
        class: null,
        style: null,
      },
      validate: undefined,
    }
  },
  parseHTML() {
    return [
      {
        tag: 'div',
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
      style: {
        default: this.options.HTMLAttributes.style,
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
        default: this.options.HTMLAttributes.class || ""
      }
    }
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', HTMLAttributes, 0]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },
})