// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

// [item, [[], [], []]]
const apiConfig = require("./dev-docs-openapi.js");
const openApiCongfig = apiConfig.config;
const itemsJson = require("./items.json");
const footerItems = require("./footerItems.json");
const logoJson = require("./logo.json");
const aiConfig = require("./ai.json");
const fs = require("fs");

/** @type {import('@docusaurus/types').Config} */
const config = {
  scripts: [
    {
      src: "https://kit.fontawesome.com/c11e540390.js",
      crossorigin: "anonymous",
    },
  ],
  stylesheets: [
    {
      href: "https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css",
      crossorigin: "anonymous",
    },
  ],
  title: "Your Dev-Docs",
  tagline: "Lets Dev-Doc and Roll",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  plugins: [
    "docusaurus-plugin-sass",
    [
      "./extractAndTestCodeBlocksPlugin",
      {
        // Optional plugin config
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      },
    ],
    [
      "./oramaSearchPlugin",
      {
        // Optional plugin config
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "changelog",
        routeBasePath: "changelog",
        path: "./changelog",
      },
    ],
    async function myPlugin(context, options) {
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
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      ...(aiConfig.banner
        ? {
            announcementBar: {
              id: "support_us",
              content:
                'This entire docs site is auto-generated and built using Dev-Docs. This is part of an experiment—read more  <a target="_blank" rel="noopener noreferrer" href="https://docs.dev">here</a>',
              backgroundColor: "#fafbfc",
              textColor: "#091E42",
              isCloseable: false,
            },
          }
        : {}),
      head: [
        {
          tagName: "link",
          attributes: {
            rel: "stylesheet",
            href: "https://use.fontawesome.com/releases/v5.15.4/css/all.css",
            integrity:
              "sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm",
            crossorigin: "anonymous",
          },
        },
      ],
      navbar: {
        title: "Dev-Docs",
        logo: {
          alt: "My Site Logo",
          src: logoJson.logo || "",
        },
        items: [
          ...itemsJson.items,
          {
            type: "search",
            position: "left",
          },
          {
            type: 'custom-github-auth',
            position: 'right',
            className: 'navbar-github-auth',
          },
          {
            type: 'custom-codespaces',
            position: 'right',
            className: 'navbar-codespaces',
          },
        ],
      },
      footer: {
        style: "dark",
        links: [...footerItems.links],
        copyright: `⚡️ by Dev-Docs.io`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "javascript",
        additionalLanguages: [
          "python",
          "java",
          "php",
          "ruby",
          "bash",
          "json",
          "yaml",
          "markdown",
          "scss",
          "jsx",
          "tsx",
          "typescript",
          "css",
        ],
      },
    }),
};

module.exports = config;
