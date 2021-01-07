import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
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
  ThreeThirdsGrid,
} from '~/utils/styles'
import herzschlagAnimation from '~/images/herzschlag_animation.mp4'
import stecknadel from '~/images/stecknadel.svg'
import sewing_machine from '~/images/sewing_machine.svg'
import sonne from '~/images/sonne.svg'

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content; center;
  align-items: center;
  margin-bottom: 10rem;

  & > * {
    margin-bottom: ${({ gap }) => (gap ? gap : '2.5rem')};
  }

  & > :last-child {
    margin-bottom: 0rem;
  }
`

const HeroVideo = styled.video`
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

const Collage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: row dense;
  gap: 0rem;

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.m}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const HerzschlagPage = ({ data }) => {
  const product = data.shopifyProduct
  const { herzschlagBanner, collagePics } = data

  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Navigation />
      <Container>
        <MainContent>
          <HeroWrapper>
            <HeroVideo muted loop playsInline autoPlay>
              <source src={herzschlagAnimation} type="video/mp4" />
              <GatsbyImage
                image={herzschlagBanner.childImageSharp.gatsbyImageData}
                alt="Herzschlag"
              />
            </HeroVideo>
            <H2>Herzschlag Nürnberg</H2>
            <Text>
              <i>
                „Wir lieben Nürnberg – denn diese Stadt hält zusammen,
                unabhängig von Religion und Hautfarbe.“
              </i>
              <br />
              - NurEinBerg Mitgründer Jens Herga im Nürnberger Nachrichten
              Interview
              <br />
              <br />
              Nürnberg hält zusammen! Mit unserem Herzschlag Nürnberg Shirt
              wollen wir nicht nur die Liebe zu unserer Stadt, sondern auch
              Nächstenlieb zeigen. Denn pro verkauften Herzschlag Shirt gehen 5
              Euro an die Elterninitiative Krebskranker Kinder e.V. Nürnberg.
            </Text>
          </HeroWrapper>
          <ThreeThirdsGrid style={{ textAlign: 'center' }}>
            <div>
              <img src={sewing_machine} height="120px" alt="Nähmaschine" />
              <H2>Handgefertigt</H2>
              <Text>
                Mit Hand und Herz werden nicht nur das Label Etikett angenäht,
                sondern auch das Herzschlag Nürnberg Design auf das Shirt
                gedruckt.
              </Text>
            </div>
            <div>
              <img src={sonne} height="120px" alt="Sonne" />
              <H2>Nachhaltig</H2>
              <Text>
                Unsere Textilien bestehen zu 100% aus Bio Baumwolle. Zudem
                produzieren wir unsere Herzschlag Nürnberg Shirts erst nach
                Eingang einer Bestellung um keine Ressource zu verschwenden.
              </Text>
            </div>
            <div>
              <img src={stecknadel} height="120px" alt="Stecknadel" />
              <H2>Regional</H2>
              <Text>
                NurEinBerg steht für Nürnberg. Somit ist vollkommen klar - wir
                produzieren in der Region. Sowohl mit Partnerfirmen in Nürnberg
                als auch Hausintern werden unsere Produkte hergestellt.
              </Text>
            </div>
          </ThreeThirdsGrid>
          <Collage style={{ margin: '10rem 0' }}>
            {collagePics.edges.map(({ node }) => (
              <GatsbyImage
                image={node.childImageSharp.gatsbyImageData}
                key={node.id}
                alt={node.name}
              />
            ))}
          </Collage>
          <TwoColumnGrid style={{ margin: '10rem 0' }}>
            <GatsbyImage
              image={
                product.images[0].localFile.childImageSharp.gatsbyImageData
              }
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
            gatsbyImageData(
              maxWidth: 910
              placeholder: TRACED_SVG
              layout: FLUID
            )
          }
        }
      }
    }
    herzschlagBanner: file(relativePath: { eq: "Herzschlag_Banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FLUID)
      }
    }
    collagePics: allFile(
      filter: {
        dir: { regex: "/(collage)/" }
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
      }
      limit: 18
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(
              maxWidth: 300
              placeholder: TRACED_SVG
              layout: FLUID
            )
          }
        }
      }
    }
  }
`

export default HerzschlagPage
