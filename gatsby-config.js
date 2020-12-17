const path = require('path')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: {
    PARALLEL_SOURCING: true,
  },
  siteMetadata: {
    title: `NurEinBerg`,
    description: `Mode im Zeichen der Burg`,
    author: `@alexanderhorl`,
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
      },
    },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
