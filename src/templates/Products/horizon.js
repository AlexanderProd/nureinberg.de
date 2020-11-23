import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'

import SEO from '~/components/seo'
import Navigation from '~/components/Navigation'
import ProductForm from '~/components/ProductForm'
import Footer from '~/components/Footer'
import {
  Container,
  TwoColumnGrid,
  ThreeThirdsGrid,
  MainContent,
  breakpoints,
} from '~/utils/styles'

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content; center;
  align-items: center;
  margin-bottom: 10rem;

  animation: fadeIn 5s;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const HeroImage = styled(Image)`
  width: 50%;

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
  }
`

const H2 = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 15px;
  word-wrap: break-word;
  font-weight: 400;
  margin: 0 0 0.5rem;
  line-height: 1.4;
`

const Text = styled.p`
  line-height: 1.6;
  font-size: 1.2rem;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content center;
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ProductTitle = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 15px;
  word-wrap: break-word;
  font-weight: 400;
  margin: 0 0 0.5rem;
  line-height: 1.4;
  text-align: center;
`

const ProductDescription = styled.div`
  margin-top: 40px;
  font-weight: 300;

  a {
    color: inherit;
  }
`

const HorizonPage = ({ data }) => {
  const product = data.shopifyProduct

  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Navigation />
      <Container>
        <MainContent>
          <TwoColumnGrid /* style={{ margin: '10rem 0' }} */>
            <Image
              fluid={product.images[0].localFile.childImageSharp.fluid}
              alt="Produktfoto Karl"
            />
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
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default HorizonPage
