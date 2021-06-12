import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

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
} from '~/utils/styles'
import logoAnimation from '~/images/nureinberg_logo_animation.gif'
import logoEntwuerfe from '~/images/logo_entwuerfe.gif'

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

const HeroImage = styled.img`
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
  text-align: center;
  max-width: 800px;
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

const NurEinBergShirtPage = ({ data }) => {
  const product = data.shopifyProduct

  return (
    <>
      <Seo title={product.title} description={product.description} />
      <Navigation logoVisible={false} />
      <Container>
        <MainContent>
          <HeroWrapper>
            <HeroImage src={logoAnimation} alt="NurEinBerg logo" />
            <TextWrapper>
              <i>
                Es war einmal im Frankenland, Eine Stadt die sich als
                „NurEinBerg“ benannt.
                <br />
                <br /> Denn selbst von weitem Land, Wurde nur der Berg erkannt.
                <br />
                <br />
                Diese Stadt am Pegnitz Rand,ist nun als „Nürnberg“ weltbekannt.
              </i>
              <Text style={{ marginTop: '2.5rem' }}>
                Das Label NurEinBerg entstand 2017 mit dem Ziel, alltagsfähige
                Kleidung mit Bezug zur Stadt Nürnberg herzustellen. Um die
                Verbundenheit zu unserer Heimat zu zeigen, entstand der Name
                NurEinBerg.
                <br /> Das Wortspiel soll auf den Burgberg anspielen, welchen
                man im Mittelalter von weitem Lande erkennen konnte. Auch die
                Weitsicht, welche man von dort hat, soll eine Verbindung zu
                unserer Kleidung herstellen - wir fertigen nicht nur lokal,
                sondern achten auch auf die Verwendung nachhaltiger Textilien.
                So haben unserer Kunde eine Weitsicht, ähnlich wie beim Ausblick
                von der Kaiserburg.
              </Text>
            </TextWrapper>
          </HeroWrapper>

          <img src={logoEntwuerfe} alt="Logo Entwürfe" />
          <TextWrapper style={{ margin: '5rem auto' }}>
            <H2>Die Entstehung unseres Logos</H2>
            <Text>
              Beim ersten Entwurf des Logos stand unter dem Dreieck der
              Markenname NurEinBerg. Das „Nur“ wurde letztendlich mit dem
              Dreieck verbunden, um einen dreidimensionalen Effekt zu erzeugen.
              Das Dreieck symbolisiert „ein Berg“ - somit ergibt die Mischung
              aus „Nur“ und dem Symbol „ein Berge“, unseren Markennamen.
              <br />
              <br />
              Diese Design steht wie kein anders für eine moderne Interpretation
              Nürnberg. Zur Feier des 4. Geburtstages unseres Labels gibt es das
              Shirt jetzt zu kaufen. Werde Teil der NurEinBerg Familie!
            </Text>
          </TextWrapper>

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

export default NurEinBergShirtPage
