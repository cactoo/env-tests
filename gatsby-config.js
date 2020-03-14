// console.log("ENV", process.env)
require("dotenv")

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    NETLIFY: process.env.NETLIFY || "-",
    BUILD_ID: process.env.BUILD_ID || "-",
    CONTEXT: process.env.CONTEXT || "-",
    // GIT METADATA
    REPOSITORY_URL: process.env.REPOSITORY_URL || "-",
    BRANCH: process.env.BRANCH || "-",
    HEAD: process.env.HEAD || "-",
    COMMIT_REF: process.env.COMMIT_REF || "-",
    CACHED_COMMIT_REF: process.env.CACHED_COMMIT_REF || "-",
    PULL_REQUEST: process.env.PULL_REQUEST || "-",
    REVIEW_ID: process.env.REVIEW_ID || "-",
    // DEPLOY URLS
    URL: process.env.URL || "-",
    DEPLOY_URL: process.env.DEPLOY_URL || "-",
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL || "-",
    DEPLOY_ID: process.env.DEPLOY_ID || "-",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: [
          // BUILD METADATA
          "NETLIFY",
          "BUILD_ID",
          "CONTEXT",

          // GIT METADATA
          "REPOSITORY_URL",
          "BRANCH",
          "HEAD",
          "COMMIT_REF",
          "CACHED_COMMIT_REF",
          "PULL_REQUEST",
          "REVIEW_ID",

          // DEPLOY URLS
          "URL",
          "DEPLOY_URL",
          "DEPLOY_PRIME_URL",
          "DEPLOY_ID",
        ],
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
