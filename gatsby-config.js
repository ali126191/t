module.exports = {
  pathPrefix: `/svhm2`,
  siteMetadata: {
    title: 'Gatsby Default Starter',
    siteUrl: 'https://ali126191.github.io'
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`, // Begin PWA
      options: {
        name: `Shri Vitthal`, // Used in App install prompt
        short_name: `SVHM`, // Used on users home screen
        start_url: `/svhm2/`,
        background_color: `#000000`, 
        theme_color: `#a00037`, // Mobile bar color
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    'gatsby-plugin-offline', // End PWA

  ],
}