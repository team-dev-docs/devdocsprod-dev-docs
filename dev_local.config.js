// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// [item, [[], [], []]]
const apiConfig = require('./dev-docs-openapi.js');
const openApiCongfig = apiConfig.config
const itemsJson = require("./items.json")
const footerItems = require("./footerItems.json")
const logoJson = require('./logo.json')

/** @type {import('@docusaurus/types').Config} */
const config = {
  scripts: [
    {
      src: 'https://kit.fontawesome.com/c11e540390.js',
      crossorigin: 'anonymous',
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js',
      crossorigin: 'anonymous',
    },
  ],
  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css',
    },
  ],
  title: 'Your Dev-Docs',
  tagline: 'Lets Dev-Doc and Roll',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  staticDirectories: ['dev-docs-assets', 'static'],
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass',
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: openApiCongfig
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs", '@docusaurus/theme-live-codeblock'],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          docItemComponent: "@theme/ApiItem",
          docLayoutComponent: "@theme/DocPage",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: logoJson.logo || "",
        },
        items: [
          ...itemsJson.items
        ],
      },
      footer: {
        style: 'dark',
        links: [...footerItems.links],
        copyright: `${new Date().getFullYear()} Dev-Docs`,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
