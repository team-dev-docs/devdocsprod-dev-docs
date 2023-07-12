import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from '@tiptap/react';

import Component from "./CalloutBoxes.jsx";

export default Node.create({
  name: "iconItem",

  group: "block",

  content: "block+",

  draggable: true,

  addStorage() {
    return {
      disableDrag: false,
    };
  },
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
        tag: "icon",
      },
    ];
  },
  addAttributes() {
    return {
      type: {
        default: "info",
      },
      style: {
        default: this.options.HTMLAttributes.style,
      },
      class: {
        default: this.options.HTMLAttributes.class || "",
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return ["icon", HTMLAttributes, 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
