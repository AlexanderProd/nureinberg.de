import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

import Seo from '~/components/seo'
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
      <Seo title={product.title} description={product.description} />
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
              Nürnberg ist Bunt! Um diese Vielfältigkeit zu zeigen, haben wir
              die verschiedensten Menschen aus Nürnberg mit unserem Herzschlag
              Shirt abgelichtet. Denn wir sind alle gleich und sollten auch so
              behandelt werden.
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

          <TwoColumnGrid>
            <StaticImage
              src="../../images/Patavinus_Porduktfoto.jpg"
              layout="fullWidth"
              alt="Patavinus Produktfoto"
            />
            <div>
              <H2>Mit Sicherheit Gutes tun</H2>
              <Text>
                Patavinus und NurEinBerg haben eine Kooperation gestartet um
                eine klare Message zu senden. Als Nürnberger Start-Ups wollen
                wir gemeinsam unsere Stärken nutzen und unserer Stadt etwas
                zurückgeben. Durch den Patavinus Anhänger bekommt Ihr nicht nur
                eine Sicherheit für eure wertvollen Gegenstände, sondern tut
                auch etwas Gutes für ein soziales Projekt. Denn 10% der
                Einnahmen gehen an die Eltern Initiative Krebskranker Kinder
                Nürnberg e.V. 
              </Text>
            </div>
          </TwoColumnGrid>

          <TwoColumnGrid style={{ margin: '10rem 0' }}>
            <div>
              <H2>Patavinus - Das schnellste Fundbüro der Welt </H2>
              <Text>
                Egal ob ein verlorener Schlüssel oder Telefon, es ist immer
                besorgniserregend seine Wertsache zu verlieren. Doch Patavinus
                hat einen Lösung entwickelt. Die Idee hinter dem Produkt setzt
                auf die Hilfsbreitschaft der Menschen. Jeder Anhänger ist mit
                einen QR-Code versehen, über den der Finder anonym Kontakt zum
                Besitzer aufnehmen kann. Gerade zur heutigen Zeit ist
                Datenschutz ein wichtiges Thema - Patavinus funktioniert ohne
                Angabe von persönlichen Daten oder Tracking des Smartphones. So
                gelangen 70% der verloren gegangenen Gegenstände sicher zurück
                zum Besitzer und das nur aufgrund Menschlicher Mithilfe. Sei
                dabei und unterstütze unser Herzschlag Projekt!
                <br />
                <br /> Den Patavinus X NurEinBerg Anhänger und viele andere
                Modelle gibts es{' '}
                <a
                  href="https://www.home.patavinus.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  hier
                </a>{' '}
                einzeln zu erwerben.
              </Text>
            </div>
            <StaticImage
              src="../../images/P_5_B.jpg"
              layout="fullWidth"
              alt="Patavinus Produktfoto"
            />
          </TwoColumnGrid>

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
              width: 910
              placeholder: TRACED_SVG
              layout: CONSTRAINED
            )
          }
        }
      }
    }
    herzschlagBanner: file(relativePath: { eq: "Herzschlag_Banner.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
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

export default HerzschlagPage
