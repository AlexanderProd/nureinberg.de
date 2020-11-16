const path = require('path')
const { existsSync } = require('fs')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
      componentPath = existsSync(`./src/templates/Products/${node.handle}.js`)
        ? `./src/templates/Products/${node.handle}.js`
        : './src/templates/ProductPage/index.js'

      createPage({
        path: `/produkt/${node.handle}/`,
        component: path.resolve(componentPath),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          handle: node.handle,
        },
      })
    })
  })
}
