// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bitlayer',
  tagline: 'The first Bitcoin security-equivalent Layer 2 based on BitVM',
  url: 'https://docs.bitlayer.org',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/bitlayer.ico',
  organizationName: 'bitlayer-org', // Usually your GitHub org/user name.
  projectName: 'bitlayer-org.github.io', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-PQ6ML9HQ38', // Replace with your GA4 measurement ID
        anonymizeIP: true, // Optional, anonymize the IP addresses
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      initialColorMode: 'dark',
      navbar: {
        title: 'Bitlayer',
        logo: {
          alt: 'Bitlayer Logo',
          src: 'img/Bitlayer_docs.svg',
        },
        items: [
          {
            to: '/docs/Learn/Introduction', // Link to a document, not a top-level directory
            position: 'left',
            label: 'Learn',
            activeBaseRegex: `/docs/Learn`,
          },
          {
            to: '/docs/Build/GettingStarted/QuickStart', // Link to a document, not a top-level directory
            position: 'left',
            label: 'Build',
            activeBaseRegex: `/docs/Build`,
          },
          {
            to: '/docs/Finality/GettingStarted', // Link to a document, not a top-level directory
            position: 'left',
            label: 'Finality Bridge',
            activeBaseRegex: `/docs/Finality`,
          },
          {
            href: 'https://blog.bitlayer.org/',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://www.bitlayer.org/',
            label: 'Bitlayer',
            position: 'right',
          },
          {
            href: 'https://github.com/bitlayer-org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Learn',
                to: '/docs/Learn/Introduction',
              },
              {
                label: 'Build',
                to: '/docs/Build/GettingStarted/QuickStart',
              },
              {
                label: 'Finality Bridge',
                to: '/docs/Finality/Introduction',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/bitlayerofficial',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/GGSjNyD8nj',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/BitLayerLabs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/@Bitlayer',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/bitlayer-org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bitlayer`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
