// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Housing Repairs Online',
  tagline: 'Repairs Online is a collaborative local authority project, funded by the DLUHC Local Digital Fund',
  url: 'https://LBHackney-IT.github.io/',
  baseUrl: '/housing-repairs-online/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'LBHackney-IT', // Usually your GitHub org/user name.
  projectName: 'housing-repairs-online', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Housing Repairs Online',
        logo: {
          alt: 'Housing Repairs Online Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: 'https://repairsonlinedigitalfund.com/blog/', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/LBHackney-IT/housing-repairs-online',
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
                label: 'Documentation',
                to: '/',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Our Approach',
                href: 'https://repairsonlinedigitalfund.com/about/',
              },
              {
                label: 'Project background',
                href: 'https://repairsonlinedigitalfund.com/project-background/',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://repairsonlinedigitalfund.com/blog/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LBHackney-IT/housing-repairs-online',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
