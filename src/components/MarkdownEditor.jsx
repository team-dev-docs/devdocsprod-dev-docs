import { EditorContent, useEditor } from "@tiptap/react";
import { ColumnExtension } from "@gocapsule/column-extension";
import StarterKit from "@tiptap/starter-kit";
import ResizableImage from "./ResizableImage";
import DraggableItem from "./DraggableItem";
import Document from "@tiptap/extension-document";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import TextAlign from "@tiptap/extension-text-align";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Link from "@tiptap/extension-link";
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import CustomCssMark from "./customCssMark";
import Button from "./button";
import React from "react";
import Paragraph from "@tiptap/extension-paragraph";
import converter from "./ConverterTool";
import CalloutBoxes from "./CalloutBoxes.js";
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
import { lowlight } from 'lowlight'
import Accordion from "./Accordion";
import Tabs from "./Tabs";
import Heading from "@tiptap/extension-heading"

const HeadingWithID = Heading.extend({
  addAttributes() {
    return {
      id: {
        default: null,
        parseHTML: element => {
          return { id: element.getAttribute("id") };
        },
        renderHTML: attributes => {
          if (attributes.id) {
            return attributes.id
          }
        },
      },
    };
  },
});


import { Node } from "@tiptap/core"

export const inputRegex = /https:\/\/www\.youtube\.com\/[a-zA-Z?=\-0-9&_]+|https:\/\/www\.loom\.com\/share\/[a-zA-Z0-9]+/;


const Iframe = Node.create({
	name: "iframe",
	group: "block",
	defaultOptions: {
		allowFullscreen: true,
		HTMLAttributes: {
			class: "iframe-wrapper"
		}
	},
	addAttributes() {
		return {
			src: {
				default: null,
			},
			frameborder: {
				default: 0,
			},
			allowfullscreen: {
				default: this.options.allowFullscreen,
				parseHTML: () => this.options.allowFullscreen,
			},
		}
	},
	parseHTML() {
		return [{
			tag: "iframe",
		}]
	},
	renderHTML({ HTMLAttributes }) {
		return ["div", this.options.HTMLAttributes, ["iframe", HTMLAttributes]]
	},
	addCommands() {
		return {
			setIframe: (options) => ({ tr, dispatch }) => {
				const { selection } = tr
				const node = this.type.create(options)

				if (dispatch) {
					tr.replaceRangeWith(selection.from, selection.to, node)
				}

				return true
			},
		}
	},
})

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)
lowlight.registerLanguage('python', python)

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        code
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </button>
    </>
  );
};

export default ({ data }) => {
  const parserTool = new converter();
  const content = parserTool.convertToHTML(data);
  const editor = useEditor({
    editable: false,
    extensions: [
      CodeBlockLowlight.configure({
        lowlight,
      }),
      StarterKit,
      TaskItem,
      TaskList,
      CustomCssMark,
      Document,
      Accordion,
      Paragraph.extend({
        addOptions() {
          return {
            HTMLAttributes: {
              class: null,
              style: null,
            },
            validate: undefined,
          };
        },
        addAttributes() {
          return {
            customStyleString: {
              default: "",
              renderHTML: (attributes) => {
                // … and return an object with HTML attributes.
                return {
                  style: attributes?.customStyleString || null,
                };
              },
            },
            style: {
              default: "",
              renderHTML: (attributes) => {
                // … and return an object with HTML attributes.
                return {
                  style: `${attributes.style}`,
                };
              },
            },
          };
        },
      }),
      HeadingWithID,
      Link.extend({
        addOptions() {
          return {
            HTMLAttributes: {
              class: null,
              style: null,
            },
            validate: undefined,
          };
        },
        addAttributes() {
          return {
            customStyleString: {
              default: "",
              renderHTML: (attributes) => {
                // … and return an object with HTML attributes.
                return {
                  style: `${attributes.customStyleString}`,
                };
              },
            },
            href: {
              default: "",
            },
            style: {
              default: "",
              renderHTML: (attributes) => {
                // … and return an object with HTML attributes.
                return {
                  style: `${attributes.style}`,
                };
              },
            },
            class: {
              default: "",
            },
          };
        },
      }),
      ColumnExtension,
      ResizableImage,
      Table.configure({
        resizable: true,
      }),
      Button,
      Iframe,
      TableRow,
      TableHeader,
      TableCell,
      Tabs,
      DraggableItem,
      CalloutBoxes,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      TextStyle,
      Color,
    ],
    content: content,
  });


  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};
