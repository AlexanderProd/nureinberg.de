import React, { useEffect } from 'react'
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
  MainContent,
  breakpoints,
} from '~/utils/styles'
import '../../../static/horizon-styles.css'
import Rellax from 'rellax'

const Background = styled.div`
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(123, 127, 131, 0.9) 0%,
      rgba(76, 76, 76, 0.9) 100%
    ),
    #898989;
  background-repeat: no-repeat;
  color: white;
  min-height: 100vh;
`

const CollageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 5vw);
  grid-gap: 1.5rem;
  margin: 10rem 0 10rem 0;

  picture img {
    z-index: 20;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: ${breakpoints.l}px) {
    display: block;

    & > * {
      margin-bottom: 2.5rem;
    }

    & > :last-child {
      margin-bottom: 0rem;
    }
  }
`

const GridItemOne = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 6;
`

const GridItemTwo = styled.div`
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 3;
`

const GridItemThree = styled.div`
  grid-column-start: 9;
  grid-column-end: 13;
  grid-row-start: 3;
  grid-row-end: 8;
`

const GridItemFour = styled.div`
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 8;
  grid-row-end: 12;
`
const GridItemSix = styled.div`
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 5;
  grid-row-end: 9;

  picture img {
    z-index: 20;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
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
  const {
    fragment_portrait_bg,
    fragment_portrait_half_copy,
    fragment_portrait_neck,
    fragment_portrait_shirt_left,
    fragment_eye,
    fragment_portrait_shirt,
    fragment_bg_1,
    fragment_bg_2,
    horizon_shooting_1,
    horizon_shooting_2,
    horizon_shooting_3,
    horizon_shooting_4,
    horizon_detail_1,
  } = data

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/rellax.min.js'
    script.async = true
    document.body.appendChild(script)

    new Rellax('.rellax')

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Background style={{ backgroundColor: '#F2F2F2' }}>
      <SEO title={product.title} description={product.description} />
      <Navigation color={'white'} />
      <Container>
        <MainContent>
          <main className="main">
            <div className="container">
              <h1 className="heading rellax" data-rellax-speed="-5">
                <mark>2020</mark>
                <br />
                <mark>Horizon</mark>
                <br />
                <mark>By NurEinBerg</mark>
              </h1>

              <div className="grid-container" aria-hidden="true">
                <div className="grid">
                  <div className="grid__item grid__item--bg">
                    <Image
                      fluid={fragment_portrait_bg.childImageSharp.fluid}
                      alt="fragment_portrait_bg"
                    />
                  </div>
                  <div
                    className="grid__item grid__item--portrait-half rellax"
                    data-rellax-speed="3"
                  >
                    <Image
                      fluid={fragment_portrait_half_copy.childImageSharp.fluid}
                      alt="fragment_portrait_half_copy"
                    />
                  </div>
                  <div
                    className="grid__item grid__item--portrait-neck rellax"
                    data-rellax-speed="-2"
                  >
                    <Image
                      fluid={fragment_portrait_neck.childImageSharp.fluid}
                      alt="fragment_portrait_neck"
                    />
                  </div>
                  <div
                    className="grid__item grid__item--portrait-left rellax"
                    data-rellax-speed="-4"
                  >
                    <Image
                      fluid={fragment_portrait_shirt_left.childImageSharp.fluid}
                      alt="fragment_portrait_shirt_left"
                    />
                  </div>
                  <div
                    className="grid__item grid__item--portrait-eye rellax"
                    data-rellax-speed="1"
                  >
                    <Image
                      fluid={fragment_eye.childImageSharp.fluid}
                      alt="fragment_eye"
                    />
                  </div>
                  <div
                    className="grid__item grid__item--portrait-shirt rellax"
                    data-rellax-speed="4"
                  >
                    <Image
                      fluid={fragment_portrait_shirt.childImageSharp.fluid}
                      alt="fragment_portrait_shirt"
                    />
                  </div>
                  <div
                    className="grid__item grid__item--portrait-bg-1 rellax"
                    data-rellax-speed="-2"
                  >
                    <Image
                      fluid={fragment_bg_1.childImageSharp.fluid}
                      alt="fragment_bg_1"
                    />
                  </div>
                  <div
                    className="grid__item grid__item--portrait-bg-2 rellax"
                    data-rellax-speed="3"
                  >
                    <Image
                      fluid={fragment_bg_2.childImageSharp.fluid}
                      alt="fragment_bg_2"
                    />
                  </div>
                  <div
                    className="grid__item grid__item--portrait-bg-3 rellax"
                    data-rellax-speed="3"
                  >
                    <Image
                      fluid={fragment_bg_1.childImageSharp.fluid}
                      alt="fragment_bg_1"
                    />
                  </div>
                  <div
                    className="grid__item grid__item--portrait-bg-4 rellax"
                    data-rellax-speed="-6"
                  >
                    <Image
                      fluid={fragment_bg_2.childImageSharp.fluid}
                      alt="fragment_bg_2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
          <CollageGrid>
            <GridItemOne>
              <Image
                fluid={horizon_shooting_1.childImageSharp.fluid}
                alt="horizon_shooting_1"
              />
            </GridItemOne>
            <GridItemTwo>
              <Image
                fluid={horizon_shooting_2.childImageSharp.fluid}
                alt="horizon_shooting_2"
              />
            </GridItemTwo>
            <GridItemThree>
              <Image
                fluid={horizon_shooting_3.childImageSharp.fluid}
                alt="horizon_shooting_3"
              />
            </GridItemThree>
            <GridItemFour>
              <Image
                fluid={horizon_shooting_4.childImageSharp.fluid}
                alt="horizon_shooting_4"
              />
            </GridItemFour>
            <GridItemSix>
              <Image
                fluid={horizon_detail_1.childImageSharp.fluid}
                alt="horizon_detail_1"
              />
            </GridItemSix>
          </CollageGrid>
          <TwoColumnGrid>
            <Image
              fluid={product.images[0].localFile.childImageSharp.fluid}
              alt="Produktfoto Karl"
            />
            <div>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductForm product={product} dark={true} color={'white'} />
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </div>
          </TwoColumnGrid>
        </MainContent>
        <Footer color={'white'} />
      </Container>
    </Background>
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
    fragment_portrait_bg: file(
      relativePath: { eq: "horizon_fragments/fragment_portrait_bg.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fragment_eye: file(
      relativePath: { eq: "horizon_fragments/fragment_eye.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fragment_portrait_half_copy: file(
      relativePath: { eq: "horizon_fragments/fragment_portrait_half_copy.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fragment_portrait_neck: file(
      relativePath: { eq: "horizon_fragments/fragment_portrait_neck.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fragment_portrait_shirt_left: file(
      relativePath: { eq: "horizon_fragments/fragment_portrait_shirt_left.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fragment_portrait_shirt: file(
      relativePath: { eq: "horizon_fragments/fragment_portrait_shirt.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fragment_bg_1: file(
      relativePath: { eq: "horizon_fragments/fragment_bg_1.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fragment_bg_2: file(
      relativePath: { eq: "horizon_fragments/fragment_bg_2.jpg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    horizon_shooting_1: file(relativePath: { eq: "horizon_shooting_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    horizon_shooting_2: file(relativePath: { eq: "horizon_shooting_2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    horizon_shooting_3: file(relativePath: { eq: "horizon_shooting_3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    horizon_shooting_4: file(relativePath: { eq: "horizon_shooting_4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    horizon_shooting_5: file(relativePath: { eq: "horizon_shooting_5.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    horizon_detail_1: file(relativePath: { eq: "horizon_detail_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default HorizonPage
