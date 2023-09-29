import { Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import TabsComponent from './Tabs.jsx'; // Import your Tabs component

export default Node.create({
  name: 'tabs',

  group: 'block',

  content: 'block+',

  draggable: true,

  addOptions() {
    return {
      HTMLAttributes: {
        class: null,
        style: null,
      },
      validate: undefined,
    };
  },

  parseHTML() {
    return [
      {
        tag: 'tabs',
      },
    ];
  },

  addAttributes() {
    return {
      items: {
        default: '[]', // The default items value
      },
      class: {
        default: this.options.HTMLAttributes.class || '',
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return ['tabs', HTMLAttributes, 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(TabsComponent);
  },
});
