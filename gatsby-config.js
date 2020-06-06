//const dotenv = require('dotenv');
//dotenv.config();

module.exports = {
  siteMetadata: {
    title: `Full Stack Bootcamp R@i`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `R@i Roshan`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,  //this is a core plugin to process image
    {
        resolve : 'gatsby-transformer-remark',   //to read/parse markdown files
        options: {
          plugins: [
            'gatsby-remark-relative-images',   //this is to bring markdown images to node
            {
              resolve: 'gatsby-remark-images', //this is to edit images in markdown
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            }
          ]
        }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
