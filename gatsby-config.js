let activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

const path = require('path')
const { repository } = require('./package.json')

module.exports = {
  siteMetadata: {
    repository,
    title: 'Gatsby Github',
    unauthenticatedRoutes: [`/privacy-policy/`, `/terms-of-service/`],
    siteUrl: 'https://gatsby-github.netlify.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby Github',
        short_name: 'Gatsby Github',
        start_url: '/',
        background_color: '#442266',
        theme_color: '#442266',
        display: 'minimal-ui',
        icon: 'content/images/gatsby-icon.png',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/util/typography',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'content'),
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`,
        },
      },
    },
  ],
}
