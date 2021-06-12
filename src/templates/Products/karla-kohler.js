import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'

import Seo from '~/components/seo'
import Navigation from '~/components/Navigation'
import ProductForm from '~/components/ProductForm'
import ProductImages from '~/components/ProductImages'

import Footer from '~/components/Footer'
import {
  Container,
  TwoColumnGrid,
  MainContent,
  breakpoints,
} from '../../utils/styles'
import kkAnimation from '~/images/kk_animation.mp4'

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
  width: 60%;

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
  }
`

const H2 = styled.h2`
  font-family: 'Old Standard TT', serif;
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

const KarlaKöhlerShirtPage = ({ data }) => {
  const product = data.shopifyProduct

  return (
    <>
      <Seo title={product.title} description={product.description} />
      <Navigation />
      <Container>
        <MainContent>
          <HeroWrapper>
            <HeroVideo muted playsInline autoPlay>
              <source src={kkAnimation} type="video/mp4" />
            </HeroVideo>
            <H2>Karla Köhler X NurEinBerg</H2>
            <Text>
              Für NurEinBerg ist Mode ein Teil der Kunst. So war es schon immer
              der Anspruch der Marke, zeitgenössische Kunst für den Alltag der
              Menschen zugänglich zu machen. Unsere Motive sind minimalistisch
              Interpretationen der Stadt Nürnberg, wie auch bei den Kunstwerken
              der Künstlerin Karla Köhler.
              <br />
              <br />
              So ergab sich eine Zusammenarbeit die nicht nur aufgrund gleicher
              Stilrichtungen entstand. Wie auch NurEinBerg stammt Karla Köhler
              aus Nürnberg, weshalb viele Ihrer Kunstwerke einen regionalen
              Bezug haben.
            </Text>
          </HeroWrapper>

          <TwoColumnGrid>
            <Text>
              <H2>Über die Künstlerin</H2>
              Karla Köhler studierte Malerei und Bildhauerei, was auch in Ihren
              Arbeiten zu erkennen ist. Als Grundlage dient meist eine
              konturierte Leinwand, welche mit einem Dreidimensionalen Objekt
              aus verschiedensten Materialien veredelt wird. So werden
              beispielsweise Holz, Plastik oder Metal mit modernsten Techniken
              wie Laserschneiden und 3D Druck zum Einsatzgebracht um Ihre Werke
              zu vollenden.
              <br />
              <br /> Ihre aktuelle Themenreihe sind die Urbanen Welten, bei
              denen Stadtansichten minimalistisch wiedergegeben werden. Durch
              einfache Handzeichnungen in den einzelnen Städten kommt es zur
              Entwicklung des Bildes, welches dann als Vektorgrafik
              weiterverarbeitet wird. Ihre Arbeiten sind zu sehen in ihrem
              Atelier KUNSTKELLER hier im Defethaus (Termine können per Mail
              vereinbart werden) sowie im raum für zeitgenössische kunst von
              Laurentiu Feller.
            </Text>
            <StaticImage
              src="../../images/kk_portrait.jpg"
              layout="fullWidth"
              alt="Karla Köhler Portrait"
            />
          </TwoColumnGrid>

          <TwoColumnGrid style={{ margin: '10rem 0' }}>
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
            gatsbyImageData(
              width: 910
              placeholder: TRACED_SVG
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
`

export default KarlaKöhlerShirtPage
