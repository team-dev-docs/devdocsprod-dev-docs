import { Mark, mergeAttributes, markPasteRule } from '@tiptap/core'

export default Mark.create({
    name: 'customCssMark',
    addOptions() {
        return {
            HTMLAttributes: {
                class: null,
                style: null,
            },
            validate: undefined,
        }
    },
    addAttributes() {
        return {
            style: {
                default: this.options.HTMLAttributes.style,
            },
            class: {
                default: this.options.HTMLAttributes.class,
            },
        }
    },
    renderHTML({ HTMLAttributes }) {
        return [
            'span',
            mergeAttributes(HTMLAttributes, { 'data-inline-custom-css-mark': 'true' }),
            0,
        ]
    },
    parseHTML() {
        return [
          { tag: 'span[data-inline-reference="true"]' },
        ]
      },

    // Add commands so that we can call them from the editor
    addCommands() {
        return {
            setCustomCssMark: (attributes) => ({ commands }) => {
                return commands.setMark(this.name, attributes)
            },
            toggleCustomCssMark: (attributes) => ({ commands }) => {
                return commands.toggleMark(this.name, attributes)
            },
            unsetCustomCssMark: () => ({ commands }) => {
                return commands.unsetMark(this.name)
            },
        }
    }

    // Your code goes here.
})