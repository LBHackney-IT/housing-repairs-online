// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Housing Repairs Online',
  tagline: 'Repairs Online is a collaborative local authority project, funded by the DLUHC Local Digital Fund',
  url: 'https://playbook.hackney.gov.uk',
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
          editUrl: 'https://github.com/LBHackney-IT/housing-repairs-online/tree/main/',
        },
        blog: false,
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
              {
                label: 'GitHub',
                href: 'https://github.com/LBHackney-IT/housing-repairs-online',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hackney Council`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
