module.exports = {
  base: '/',
  title: 'MinetopiaSDB Wiki',
  theme: 'default-prefers-color-scheme',
  head: [
    ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '194x194', href: '/favicon-194x194.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png'}],
    ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['meta', {name: 'msapplication-TileColor', content: '#25272a'}],
    ['meta', { name: 'msapplication-TileImage', content: 'mstile-150x150.png'}],
    ['meta', {name: 'theme-color', content: '#25272a'}],
    ['link', {rel: 'dns-prefetch', href: 'https://storage.googleapis.com'}]
  ],
  plugins:
  [
  ['@vuepress/last-updated',
  {
    transformer: (timestamp, lang) => {
	const moment = require('moment')
	moment.locale(lang)
	return moment(timestamp).format("LLL")
    }
  }],
  ['@vuepress/pwa',
  {
    serviceWorker: true,
    updatePopup: true
  }]],
  locales: {
    '/': {
      lang: 'nl-NL',
      title: 'MinetopiaSDB',
      description: 'Het Minecraft systeem, opnieuw uitgevonden'
    },
    '/en/': {
      lang: 'en-US',
      title: 'MinetopiaSDB',
      description: 'The Minecraft system, reinvented.',
    }
  },
  themeConfig: {
    logo: '/favicon-194x194.png',
    repo: 'minetopiasdb/wiki',
    repoLabel: 'Contribute',
    editLinks: true,
    nextLinks: true,
    algolia: {
      apiKey: 'bd19a781d521c4f1e342a6b1fab1a6f9',
      indexName: 'minetopiasdb'
    },
    searchPlaceholder: 'Zoeken...',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'Nederlands',
        editLinkText: 'Bewerk deze pagina op GitHub',
        lastUpdated: 'Laatst geüpdatet',
        serviceWorker: {
          updatePopup: {
            message: "Nieuwe content beschikbaar.",
            buttonText: "Ververs"
          }
        },
        sidebar: [
          {
            title: 'SDB',
            collapsable: false,
            children: [
              '/',
              '/setup',
              '/bungeecord',
              '/faq',
              '/permissions',
              '/api'
            ]
          },
          {
            title: 'Commands',
            collapsable: false,
            children: [
              '/commands/player',
              '/commands/admin',
              '/commands/banking'
            ]
          },
          {
            title: 'Placeholders',
            collapsable: false,
            children: [
              '/placeholders/integrated',
              '/placeholders/placeholderapi'
            ]
          },
          {
            title: 'Tutorials',
            collapsable: false,
            children: [
              '/tutorials/detectiongate',
              '/tutorials/levelchecknpc',
              '/tutorials/teleporters',
              '/tutorials/vendingmachine'
            ]
          },
        ]
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: [
          {
            title: 'SDB',
            collapsable: false,
            children: [
              '/en/',
              '/en/setup',
              '/en/bungeecord',
              '/en/faq',
              '/en/permissions',
              '/en/api'
            ]
          },
          {
            title: 'Commands',
            collapsable: false,
            children: [
              '/en/commands/player',
              '/en/commands/admin',
              '/en/commands/banking'
            ]
          },
          {
            title: 'Placeholders',
            collapsable: false,
            children: [
              '/en/placeholders/integrated',
              '/en/placeholders/placeholderapi'
            ]
          },
          {
            title: 'Tutorials',
            collapsable: false,
            children: [
              '/en/tutorials/detectiongate',
              '/en/tutorials/levelchecknpc',
              '/en/tutorials/teleporters',
              '/en/tutorials/vendingmachine'
            ]
          },
        ]
      }
    }
  },
  postcss: {
      plugins: [
        require('css-prefers-color-scheme/postcss'), 
        require('autoprefixer')
      ]
    }
  }
