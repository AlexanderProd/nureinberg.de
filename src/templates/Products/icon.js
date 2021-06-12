import React, { useState, useRef } from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

import Seo from '~/components/seo'
import Navigation from '~/components/Navigation'
import ProductForm from '~/components/ProductForm'
import ProductImages from '~/components/ProductImages'
import Footer from '~/components/Footer'
import { useOuterClick } from '~/utils/hooks'
import {
  Container,
  TwoColumnGrid,
  MainContent,
  breakpoints,
} from '~/utils/styles'
import icon_text from '~/images/Icon_Text.json'

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content; center;
  align-items: center;
`

const HeroImage = styled(GatsbyImage)`
  width: 100%;
  border: solid black 0.25rem;

  @media (max-width: ${breakpoints.s}px) {
    border: solid black 0.1rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row dense;
  gap: 5rem;
  margin-top: 0rem;
  margin-bottom: 0rem;

  @media (max-width: ${breakpoints.s}px) {
    gap: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.l}px) {
    margin-bottom: 5rem;
  }
`

const Icon = styled(GatsbyImage)`
  width: 100%;
  height: 100%;
  border: solid black 0.25rem;

  @media (max-width: ${breakpoints.s}px) {
    border: solid black 0.1rem;
  }
`

const TextWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  border: solid black 0.25rem;
  background-color: white;

  @media (max-width: ${breakpoints.s}px) {
    border: solid black 0.1rem;
  }
`

const Text = styled.div`
  padding: 2.5rem;
  text-align: center;
  line-height: 1.4;
  font-size: 1.2rem;
`

const H2 = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 15px;
  word-wrap: break-word;
  font-weight: 400;
  margin: 0 0 0.5rem;
  line-height: 1.4;
  padding: 2.5rem;
  text-align: center;
`

const ProductImageWrpper = styled.div`
  width: 100%;
  height: 100%;
  border: solid black 0.25rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.s}px) {
    border: solid black 0.1rem;
  }
`

const ProductDetails = styled.div`
  width: 100%;
  height: 100%;
  border: solid black 0.25rem;
  background-color: white;

  @media (max-width: ${breakpoints.s}px) {
    border: solid black 0.1rem;
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
  padding-top: 2.5rem;
`

const ProductDescription = styled.div`
  font-weight: 300;
  padding: 2.5rem;

  a {
    color: inherit;
  }
`

const IconPage = ({ data }) => {
  const product = data.shopifyProduct
  const { icons, iconBanner } = data
  const [infoTitle, setInfoTitle] = useState(icon_text['NurEinBerg'].title)
  const [infoText, setInfoText] = useState(icon_text['NurEinBerg'].text)
  const innerRef = useRef(null)
  useOuterClick(() => {
    setInfoTitle(icon_text['NurEinBerg'].title)
    setInfoText(icon_text['NurEinBerg'].text)
  }, innerRef)

  const changeInfoText = ({ target }) => {
    const { alt } = target

    setInfoTitle(icon_text[alt].title)
    setInfoText(icon_text[alt].text)
  }

  return (
    <div style={{ backgroundColor: '#F2F2F2' }}>
      <Seo title={product.title} description={product.description} />
      <Navigation />
      <Container>
        <MainContent>
          <HeroWrapper>
            <HeroImage
              image={iconBanner.childImageSharp.gatsbyImageData}
              alt="Icon Banner"
            />
          </HeroWrapper>

          <TwoColumnGrid style={{ margin: '10rem 0' }} gap="5rem">
            <Grid ref={innerRef}>
              {icons.edges.map(({ node }, i) => (
                <div
                  tabIndex={i}
                  role="button"
                  onClick={changeInfoText}
                  onKeyPress={changeInfoText}
                  key={node.id}
                >
                  <Icon
                    alt={node.name}
                    image={node.childImageSharp.gatsbyImageData}
                  />
                </div>
              ))}
            </Grid>
            <TextWrapper>
              <H2>{infoTitle}</H2>
              <Text dangerouslySetInnerHTML={{ __html: infoText }} />
            </TextWrapper>
          </TwoColumnGrid>

          <TwoColumnGrid style={{ margin: '10rem 0' }} gap="5rem">
            <ProductImageWrpper>
              <ProductImages product={product} />
            </ProductImageWrpper>
            <ProductDetails>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductForm product={product} />
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </ProductDetails>
          </TwoColumnGrid>
        </MainContent>
        <Footer />
      </Container>
    </div>
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
    iconBanner: file(relativePath: { eq: "Icon_Banner.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    icons: allFile(
      filter: {
        dir: { regex: "/(icon_icons)/" }
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
      }
      limit: 9
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: TRACED_SVG
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`

export default IconPage
