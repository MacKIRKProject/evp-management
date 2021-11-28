module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      options: {
        devKey: '4iB2ZEdmuPcP8uVKkhKYzQFudtaRlCov',
        host: 'https://evs.nuage01.scaleway.com',
        prodKey: 'PXtmj6VYeUKkACOU2MxpS8MNRdNMUfXW',
      },
      resolve: `gatsby-plugin-segment-js`,
    },
    {
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: 'blurred',
          quality: 60,
        },
      },
      resolve: `gatsby-plugin-sharp`,
    },
    {
      options: {
        displayName: true,
        namespace: 'swd',
      },
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
      resolve: 'gatsby-plugin-react-svg',
    },
    {
      options: {
        output: '/',
        resolveSiteUrl: () => `https://datacenter.scaleway.com/`,
      },
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      options: {
        aliases: {
          GlobalStyle: `GlobalStyle.js`,
          assets: `./assets`,
          components: `./components`,
          contexts: `./contexts`,
          helpers: `./helpers`,
          layouts: `./layouts`,
          sections: `./sections`,
          theme: `theme.js`,
        },
        root: `./src`,
      },
      resolve: `gatsby-plugin-module-resolver`,
    },
    {
      options: {
        dataLayerName: 'production',
        defaultDataLayer: { platform: 'gatsby' },
        id: 'GTM-N2S6VGL',
      },
      resolve: 'gatsby-plugin-google-tagmanager',
    },
    {
      options: {
        defaultLanguage: `en`,
        languages: [`en`],
        path: `${__dirname}/src/intl`,
      },
      resolve: `gatsby-plugin-intl`,
    },
  ],
  siteMetadata: {
    author: '@Scaleway',
    description: 'Discover the Scaleway Datacenter offers',
    siteUrl: 'https://datacenter.scaleway.com',
    title: 'Scaleway Datacenter',
  },
}
