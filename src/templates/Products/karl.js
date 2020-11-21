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
  font-family: 'Old Standard TT', serif;
  font-weight: 400;
  margin: 0 0 0.5rem;
  line-height: 1.4;
  color: #dedede;
`

const Text = styled.p`
  font-family: 'Old Standard TT', serif;
  line-height: 1.6;
  font-size: 1.2rem;
  color: #dedede;
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
  color: #dedede;
  font-size: 2.25rem;
  margin-bottom: 15px;
  word-wrap: break-word;
  font-family: 'Old Standard TT', serif;
  font-weight: 400;
  margin: 0 0 0.5rem;
  line-height: 1.4;
  text-align: center;
`

const ProductDescription = styled.div`
  color: #dedede;
  margin-top: 40px;
  font-weight: 300;

  a {
    color: inherit;
  }
`

const KarlPage = ({ data }) => {
  const product = data.shopifyProduct
  const {
    karlDetail1,
    karlDetail2,
    karlDetail3,
    karlShooting1,
    karlShooting2,
    frauenkirche,
  } = data

  return (
    <div style={{ backgroundColor: 'black' }}>
      <SEO title={product.title} description={product.description} />
      <Navigation color="#DEDEDE" />
      <Container>
        <MainContent>
          <HeroWrapper>
            <HeroImage
              fluid={karlDetail1.childImageSharp.fluid}
              alt="Karl Detail 1"
            />
            <H2>Alltagsfähig - Minimalistisch - Heimatliebe</H2>
            <Text>
              Unser Karl Shirt verkörpert wie kein anderes Produkt die Grundidee
              von NurEinBerg: Alltagsfähige Mode mit Bezug zu unserer geliebten
              Stadt. Die Frauenkirche ist minimalistisch auf Herzhöhe gestickt
              um die Heimatliebe zu symbolisieren.
            </Text>
          </HeroWrapper>
          <TwoColumnGrid>
            <ImgWrapper>
              <Image
                fixed={karlDetail2.childImageSharp.fixed}
                alt="Karl Detail 1"
              />
            </ImgWrapper>
            <TextWrapper>
              <H2>Karl IV</H2>
              <Text>
                Die Frauenkirche wurde von Kaiser Karl IV in Auftrag gegeben und
                1358 fertiggestellt. Sie diente folglich als kaiserliche
                Hofkapelle und Versammlungsstätte der fränkischen
                Rittergesellschaft.
                <br />
                <br />
                Zudem wurden dort in einer feierlichen Veranstaltung die
                kostbaren Reliquien des Reiches präsentiert, welche ebenfalls
                von Kaiser Karl IV gespendet wurden.
              </Text>
            </TextWrapper>
            <ImgWrapper>
              <Image
                fixed={karlDetail3.childImageSharp.fixed}
                alt="Karl Detail 3"
              />
            </ImgWrapper>
            <TextWrapper>
              <H2>Hergestellt in der Region</H2>
              <Text>
                Von der Stickereikunst im Mittelalter inspiriert, haben wir uns
                dazu entschlossen unsere Produkte ebenfalls durch Stick zu
                veredeln.
                <br />
                <br />
                Unsere minimalistische Darstellung der Frauenkirche wurde als
                Patch in Franken hergestellt und wird dann per Hand auf jedes
                Shirt aufgenäht. So garantieren wir höchste Qualität und jedes
                Shirt ist ein handgemachtes Unikat.
                <br />
                <br />
                Außerdem ist die Fertigung nach Bestellungseingang bewusst
                gewählt, um den Verbrauch zu minimieren. So kann ein
                durchdachter Umgang mit den Ressourcen gewährleistet werden.
              </Text>
            </TextWrapper>
          </TwoColumnGrid>
          <ThreeThirdsGrid style={{ margin: '10rem 0' }}>
            <Image
              fluid={karlShooting1.childImageSharp.fluid}
              alt="Karl Shooting 1"
            />
            <Image
              fluid={frauenkirche.childImageSharp.fluid}
              alt="Frauenkirche"
            />
            <Image
              fluid={karlShooting2.childImageSharp.fluid}
              alt="Karl Shooting 2"
            />
          </ThreeThirdsGrid>
          <TwoColumnGrid style={{ margin: '10rem 0' }}>
            <Image
              fluid={product.images[0].localFile.childImageSharp.fluid}
              alt="Produktfoto Karl"
            />
            <div>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductForm color="#DEDEDE" dark={true} product={product} />
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </div>
          </TwoColumnGrid>
        </MainContent>
        <Footer color="#DEDEDE" />
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
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
    karlDetail1: file(relativePath: { eq: "Karl_Detail_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    karlDetail2: file(relativePath: { eq: "Karl_Detail_2.jpg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    karlDetail3: file(relativePath: { eq: "Karl_Detail_3.jpg" }) {
      childImageSharp {
        fixed(height: 500) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    karlShooting1: file(relativePath: { eq: "Karl_Shooting_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    karlShooting2: file(relativePath: { eq: "Karl_Shooting_2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    frauenkirche: file(relativePath: { eq: "Frauenkirche_farbe.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default KarlPage
