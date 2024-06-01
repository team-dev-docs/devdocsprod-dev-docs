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
    }
  ],
  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css',
    },
    'src/css/custom.css',
    {
      href: 'https://cdn.tailwindcss.com/2.2.19/tailwind.min.css'
    }
  ],
  title: 'Your Dev-Docs',
  tagline: 'Lets Dev-Doc and Roll',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  plugins: ['docusaurus-plugin-sass', "@orama/plugin-docusaurus",
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "apiDocs",
        docsPluginId: "classic",
        config: openApiCongfig
      },
    ], async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  themes: ["docusaurus-theme-openapi-docs"],
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
          sidebarCollapsed: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 1300}}),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
            feedOptions: {
              createFeedItems: async (params) => {
                const {blogPosts, defaultCreateFeedItems, ...rest} = params;
                console.log("###########")
                console.log(blogPosts)
                return defaultCreateFeedItems({
              
                  // keep only the 10 most recent blog posts in the feed
                  blogPosts: blogPosts.filter((item, index) => index < 10),
                  ...rest,
                });
              },
            },
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
        respectPrefersColorScheme: true,
      },
      head: [
        {
          tagName: 'link',
          attributes: {
            rel: 'stylesheet',
            href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css',
            integrity: 'sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm',
            crossorigin: 'anonymous',
          },
        },
      ],
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: logoJson.logo || "",
        },
        items: [
          ...itemsJson.items, {
            type: 'search',
            position: 'left',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [...footerItems.links],
        copyright: `⚡️ by Dev-Docs.io`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
