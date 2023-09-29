import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from '@tiptap/react';

import Component from "./Accordion.jsx";

export default Node.create({
  name: "accordionItem",

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
        tag: "accordion",
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
      title: {
        default: "More Info"
      },
      class: {
        default: this.options.HTMLAttributes.class || "",
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return ["accordion", HTMLAttributes, 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component)
  },
});
