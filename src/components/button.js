import { mergeAttributes, Node } from '@tiptap/core'
import { ReactNodeViewRenderer } from '@tiptap/react';

import Component from './button.jsx'

export default Node.create({
  name: 'button',

  group: 'block',
  content: 'inline*',
  draggable: true,


  atom: true,

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
      },
      url: {
        default: null
      }
    }
  },

  parseHTML() {
    return [
      {
        tag: 'button',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['button', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },
})