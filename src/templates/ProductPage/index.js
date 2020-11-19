import React from 'react'
import { graphql } from 'gatsby'

import SEO from '~/components/seo'
import Navigation from '~/components/Navigation'
import ProductForm from '~/components/ProductForm'
import Footer from '~/components/Footer'
import ProductImages from '~/components/ProductImages'
import { Container, TwoColumnGrid, MainContent } from '~/utils/styles'
import { ProductTitle, ProductDescription } from './styles'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct

  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Navigation />
      <Container>
        <MainContent>
          <TwoColumnGrid>
            <ProductImages product={product} />
            <div>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductForm product={product} />
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </div>
          </TwoColumnGrid>
        </MainContent>
        <Footer />
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 600, maxHeight: 450) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
