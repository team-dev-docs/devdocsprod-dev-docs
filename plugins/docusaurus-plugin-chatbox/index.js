module.exports = function (_context, _options) {
    return {
      name: "docusaurus-plugin-chatbox",
  
      injectHtmlTags() {
        return {
          headTags: [
            {
              tagName: "link",
              attributes: {
                rel: "stylesheet",
                href: "/_docusaurus/plugin-chatbox/chatbox.css",
              },
            },
            {
              tagName: "script",
              attributes: {
                type: "module",
                src: "/_docusaurus/plugin-chatbox/ChatBoxWrapper.js",
              },
            },
          ],
        };
      },
  
      contentLoaded({ content, actions }) {
        actions.createData("chatbox.css", ChatBoxStyles);
      },
    };
  };
  