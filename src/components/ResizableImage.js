import Image from '@tiptap/extension-image';
import { ReactNodeViewRenderer } from '@tiptap/react';
import ResizableImageTemplate from './ResizableImage.jsx'

export default Image.extend({
	name: 'ResizableImage',
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
			...this.parent?.(),

			width: {
				default: '100%',
				renderHTML: (attributes) => {
					return {
						width: attributes.width
					};
				}
			},
			style: {
				default: this.options?.HTMLAttributes?.style || "",
			},
			class: {
				default: this.options?.HTMLAttributes?.class || ""
			},
			externalImagePath: {
				default: null
			},
			customStyleString: {
				default: ''
			},
			customStyle: {
				default: null
			},
			height: {
				default: 'auto',
				renderHTML: (attributes) => {
					return {
						height: attributes.height
					};
				}
			},

			isDraggable: {
				default: true,
				renderHTML: (attributes) => {
					return {};
				}
			}
		};
	},
	addNodeView() {
		return ReactNodeViewRenderer(ResizableImageTemplate);
	}
});