module.exports = {
  siteMetadata: {
    title: `Zion Philippines`,
    description: `Everybody's soothing haven`,
    sub_description: `Bringing you the most affordable, yet highest quality massage
    chairs and furnitures in the market`,
    author: `@bino.third`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zionph-app`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#D19E31`,
        theme_color: `#D19E31`,
        display: `minimal-ui`,
        icon: `src/images/zion-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
  ],
  pathPrefix: "gatsby-starter-basic-bootstrap",
};
