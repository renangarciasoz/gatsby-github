const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = function onCreateNode({
  actions: { createNodeField },
  getNode,
  node,
}) {
  if (node.internal.type !== 'MarkdownRemark') {
    return
  }

  const slug = createFilePath({
    node,
    getNode,
    basePath: 'content',
  })

  createNodeField({
    node,
    name: 'slug',
    value: slug,
  })
}

exports.createPages = async function createPages({
  actions: { createPage },
  graphql,
}) {
  const result = await graphql(`
    query GetAllPages {
      markdown: allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => res.data)

  const documentTemplate = path.resolve('src/templates/document.js')

  result.markdown.edges.forEach(({ node }) => {
    const slug = node.fields.slug
    createPage({
      component: documentTemplate,
      path: slug,
      context: {
        slug,
      },
    })
  })
}

exports.onCreatePage = function onCreatePage({
  page,
  actions: { createPage },
}) {
  if (page.path.startsWith(`/repos`)) {
    page.matchPath = `/repos/:login`
    createPage(page)
  }

  if (page.path.startsWith(`/commits`)) {
    page.matchPath = `/commits/:login/:name`
    createPage(page)
  }
}
