const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    PARALLEL_SOURCING: true,
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `NurEinBerg`,
    description: `Mode im Zeichen der Burg`,
    author: `@alexanderhorl`,
    siteUrl: `https://nureinberg.de`,
    socialLinks: [
      {
        name: 'Instagram',
        link: 'https://instagram.com/nureinberg',
      },
      {
        name: 'Pinterest',
        link: 'https://pinterest.com/nureinberg',
      },
      {
        name: 'Facebook',
        link: 'https://facebook.com/nureinberg',
      },
    ],
    primaryNav: [
      {
        name: 'Klassik',
        link: '/klassik',
      },
      {
        name: 'Modern',
        link: '/modern',
      },
    ],
    secondaryNav: [
      {
        name: 'Versand',
        link: '/versand',
      },
      {
        name: 'Kontakt',
        link: '/kontakt',
      },
      {
        name: 'Pflegeanleitung',
        link: '/pflegeanleitung',
      },
      {
        name: 'Größentabelle',
        link: '/groessentabelle',
      },
      {
        name: 'Team',
        link: '/team',
      },
      {
        name: 'Transparenz',
        link: '/transparenz',
      },
      {
        name: 'Retoure',
        link: '/retoure',
      },
      {
        name: 'Impressum',
        link: '/impressum',
      },
      {
        name: 'Datenschutzerklärung',
        link: '/datenschutzerklaerung',
      },
      {
        name: 'Widerrufsbelehrung',
        link: '/widerrufsbelehrung',
      },
      {
        name: 'AGB',
        link: '/agb',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-R3EBXWJ72C', // Google Analytics / GA
          //'AW-CONVERSION_ID', // Google Ads / Adwords / AW
          //'DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true,
        stripMetadata: true,
        defaultQuality: 75,
        defaults: {
          formats: ['auto', 'webp', 'avif'],
          placeholder: 'blurred',
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-shopify`,
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
        verbose: true,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Old Standard TT', 'Roboto'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-97218477-1',
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '644972102797315',
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '~': path.join(__dirname, 'src/'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/collage`,
        name: 'collage', // IMPORTANT: the name of your source instance
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
        // The values for each key in this example are the defaults the plugin uses.
        sourceMap: true,
        autoLabel: 'always',
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
