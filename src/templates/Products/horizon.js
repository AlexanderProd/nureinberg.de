import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
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

const Heading = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  z-index: 10;

  @media screen and (min-width: 650px) {
    position: absolute;
    left: 0;
    top: 6rem;
  }
`

const Mark = styled.mark`
  color: #fff;
  background-color: #000;
  line-height: 1.35;
  padding: 0.325rem;
`

const HeroWrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  margin: 5rem auto;
  max-width: 65rem;
  position: relative;
`

const CollageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 5vw);
  grid-gap: 1.5rem;
  margin: 10rem 0 10rem 0;

  @media (max-width: ${breakpoints.s}px) {
    display: block;

    & > * {
      margin-bottom: 2.5rem;
    }

    & > :last-child {
      margin-bottom: 0rem;
    }
  }
`

const GridImage = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 20;
`

const GridItemOne = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 8;
`

const GridItemTwo = styled.div`
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 6;
`

const GridItemThree = styled.div`
  grid-column-start: 9;
  grid-column-end: 13;
  grid-row-start: 3;
  grid-row-end: 10;
`

const GridItemFour = styled.div`
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 9;
  grid-row-end: 15;
`

const GridItemFive = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 8;
  grid-row-end: 15;
`

const GridItemSix = styled.div`
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 9;
`

const GridItemSeven = styled.div`
  grid-column-start: 9;
  grid-column-end: 13;
  grid-row-start: 10;
  grid-row-end: 14;
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
    horizon_shooting_1,
    horizon_shooting_2,
    horizon_shooting_3,
    horizon_shooting_4,
    horizon_shooting_5,
    horizon_detail_1,
    label_weiss,
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
          <HeroWrapper>
            <Heading className="rellax" data-rellax-speed="-5">
              <Mark>2020</Mark>
              <br />
              <Mark>Horizon</Mark>
              <br />
              <Mark>By NurEinBerg</Mark>
            </Heading>

            <div className="grid-container" aria-hidden="true">
              <div className="grid">
                <div className="grid__item grid__item--bg">
                  <StaticImage
                    src="../../images/horizon_fragments/fragment_portrait_bg.jpg"
                    layout="fullWidth"
                    alt="fragment_portrait_bg"
                  />
                </div>
                <div
                  className="grid__item grid__item--portrait-half rellax"
                  data-rellax-speed="3"
                >
                  <StaticImage
                    src="../../images/horizon_fragments/fragment_portrait_half_3.jpg"
                    layout="fullWidth"
                    alt="fragment_portrait_half_copy"
                  />
                </div>
                <div
                  className="grid__item grid__item--portrait-neck rellax"
                  data-rellax-speed="-2"
                >
                  <StaticImage
                    src="../../images/horizon_fragments/fragment_portrait_neck_alt.jpg"
                    layout="fullWidth"
                    alt="fragment_portrait_neck"
                  />
                </div>
                <div
                  className="grid__item grid__item--portrait-left rellax"
                  data-rellax-speed="-4"
                >
                  <StaticImage
                    src="../../images/horizon_fragments/fragment_portrait_shirt_left.jpg"
                    layout="fullWidth"
                    alt="fragment_portrait_shirt_left"
                  />
                </div>
                <div
                  className="grid__item grid__item--portrait-eye rellax"
                  data-rellax-speed="4"
                >
                  <StaticImage
                    src="../../images/horizon_fragments/fragment_eye.jpg"
                    layout="fullWidth"
                    alt="fragment_eye"
                  />
                </div>
                <div
                  className="grid__item grid__item--portrait-shirt rellax"
                  data-rellax-speed="-6"
                >
                  <StaticImage
                    src="../../images/horizon_fragments/fragment_portrait_shirt.jpg"
                    layout="fullWidth"
                    alt="fragment_portrait_shirt"
                  />
                </div>
                <div
                  className="grid__item grid__item--portrait-bg-1 rellax"
                  data-rellax-speed="-2"
                >
                  <StaticImage
                    src="../../images/horizon_fragments/fragment_bg_1.jpg"
                    layout="fullWidth"
                    alt="fragment_bg_1"
                  />
                </div>
                <div
                  className="grid__item grid__item--portrait-bg-2 rellax"
                  data-rellax-speed="-10"
                >
                  <StaticImage
                    src="../../images/horizon_fragments/fragment_bg_2.jpg"
                    layout="fullWidth"
                    alt="fragment_bg_2"
                  />
                </div>
                <div
                  className="grid__item grid__item--portrait-bg-3 rellax"
                  data-rellax-speed="18"
                >
                  <StaticImage
                    src="../../images/horizon_fragments/fragment_bg_1.jpg"
                    layout="fullWidth"
                    alt="fragment_bg_1"
                  />
                </div>
                <div
                  className="grid__item grid__item--portrait-bg-4 rellax"
                  data-rellax-speed="-6"
                >
                  <StaticImage
                    src="../../images/horizon_fragments/fragment_bg_2.jpg"
                    layout="fullWidth"
                    alt="fragment_bg_2"
                  />
                </div>
              </div>
            </div>
          </HeroWrapper>
          <CollageGrid>
            <GridItemOne>
              <GridImage
                image={horizon_shooting_1.childImageSharp.gatsbyImageData}
                alt="horizon_shooting_1"
              />
            </GridItemOne>
            <GridItemTwo>
              <GridImage
                image={horizon_shooting_2.childImageSharp.gatsbyImageData}
                alt="horizon_shooting_2"
              />
            </GridItemTwo>
            <GridItemThree>
              <GridImage
                image={horizon_shooting_3.childImageSharp.gatsbyImageData}
                alt="horizon_shooting_3"
              />
            </GridItemThree>
            <GridItemFour>
              <GridImage
                image={horizon_shooting_4.childImageSharp.gatsbyImageData}
                alt="horizon_shooting_4"
              />
            </GridItemFour>
            <GridItemFive>
              <GridImage
                image={horizon_shooting_5.childImageSharp.gatsbyImageData}
                alt="horizon_shooting_5"
              />
            </GridItemFive>
            <GridItemSix>
              <GridImage
                image={label_weiss.childImageSharp.gatsbyImageData}
                alt="label"
              />
            </GridItemSix>
            <GridItemSeven>
              <GridImage
                image={horizon_detail_1.childImageSharp.gatsbyImageData}
                alt="horizon_detail_1"
              />
            </GridItemSeven>
          </CollageGrid>
          <TwoColumnGrid>
            <GatsbyImage
              image={
                product.images[0].localFile.childImageSharp.gatsbyImageData
              }
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
            gatsbyImageData(
              width: 910
              placeholder: TRACED_SVG
              layout: CONSTRAINED
            )
          }
        }
      }
    }
    fragment_portrait_bg: file(
      relativePath: { eq: "horizon_fragments/fragment_portrait_bg.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    fragment_eye: file(
      relativePath: { eq: "horizon_fragments/fragment_eye.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    fragment_portrait_half_copy: file(
      relativePath: { eq: "horizon_fragments/fragment_portrait_half_3.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    fragment_portrait_neck: file(
      relativePath: { eq: "horizon_fragments/fragment_portrait_neck_alt.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    fragment_portrait_shirt_left: file(
      relativePath: {
        eq: "horizon_fragments/fragment_portrait_shirt_left_3.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    fragment_portrait_shirt: file(
      relativePath: { eq: "horizon_fragments/fragment_portrait_shirt_3.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    fragment_bg_1: file(
      relativePath: { eq: "horizon_fragments/fragment_bg_1.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    fragment_bg_2: file(
      relativePath: { eq: "horizon_fragments/fragment_bg_2.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    horizon_shooting_1: file(relativePath: { eq: "horizon_shooting_1.jpg" }) {
      childImageSharp {
        original {
          src
        }
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    horizon_shooting_2: file(relativePath: { eq: "horizon_shooting_2.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    horizon_shooting_3: file(relativePath: { eq: "horizon_shooting_3.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    horizon_shooting_4: file(relativePath: { eq: "horizon_shooting_4.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    horizon_shooting_5: file(relativePath: { eq: "horizon_shooting_5.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    horizon_detail_1: file(relativePath: { eq: "horizon_detail_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    label_weiss: file(relativePath: { eq: "Label_weiß.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
  }
`

export default HorizonPage
