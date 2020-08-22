module.exports = {
  siteMetadata: {
    title: `Brandon Leung`,
    description: `Portfolio Site`,
    author: `@brandonleung`,
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
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'brandonmichaelleung.com'
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/flaticon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
