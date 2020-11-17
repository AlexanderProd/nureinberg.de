const path = require('path')
const { existsSync } = require('fs')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const productsQuery = await graphql(`
    {
      allShopifyProduct {
        edges {
          node {
            handle
          }
        }
      }
    }
  `)

  productsQuery.data.data.allShopifyProduct.edges.forEach(({ node }) => {
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
}
