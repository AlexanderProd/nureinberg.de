import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { GatsbyImage } from "gatsby-plugin-image";

import SEO from '~/components/seo'
import Navigation from '~/components/Navigation'
import ProductForm from '~/components/ProductForm'
import Footer from '~/components/Footer'
import {
  Container,
  TwoColumnGrid,
  MainContent,
  breakpoints,
} from '../../utils/styles'
import pfeile from '~/images/pfeile.png'

const H2 = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 15px;
  word-wrap: break-word;
  font-family: 'Old Standard TT', serif;
  font-weight: 400;
  margin: 0 0 0.5rem;
  line-height: 1.4;
  color: #9a694f;
`

const Text = styled.p`
  font-family: 'Old Standard TT', serif;
  line-height: 1.6;
  font-size: 1.2rem;
  color: #9a694f;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PfeileWrapper = styled.div`
  text-align: center;
  height: 100vh;

  img {
    height: 400px;
    animation: fadedown 2s;

    @keyframes fadedown {
      from {
        opacity: 0;
        transform: translateY(-100px);
      }
      to {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    @media (min-width: ${breakpoints.l}px) {
      height: 500px;
    }
  }
`

export const ProductTitle = styled.h1`
  color: #9a694f;
  font-size: 2.25rem;
  margin-bottom: 15px;
  word-wrap: break-word;
  font-family: 'Old Standard TT', serif;
  font-weight: 400;
  margin: 0 0 0.5rem;
  line-height: 1.4;
  text-align: center;
`

export const ProductDescription = styled.div`
  color: #9a694f;
  margin-top: 40px;
  font-weight: 300;

  a {
    color: inherit;
  }
`

const FrankaPage = ({ data }) => {
  const product = data.shopifyProduct
  const { frankaModel1, frankaModel2, frankaModel3, frankaCollage } = data

  return (
    <div style={{ backgroundColor: 'black' }}>
      <SEO title={product.title} description={product.description} />
      <Navigation color="#9A694F" />
      <Container>
        <MainContent>
          <PfeileWrapper>
            <img src={pfeile} alt="pfeile" />
          </PfeileWrapper>
          <TwoColumnGrid>
            <GatsbyImage image={frankaModel1.childImageSharp.gatsbyImageData} alt="Franka Model 1" />
            <TextWrapper>
              <H2>Franka - die Franken Jacke</H2>
              <Text>
                Unsere Jeans Jacke "Franka" ist ein Sammlerstück für echte
                Nürnberg Liebhaber. Mit sehr viel Liebe zum Detail wurde die
                Silhouette der Burg auf der Brust aufgestickt.
                <br />
                <br />
                Auch die Farben unseres Frankenlandes sind auf dem rechten Ärmel
                unverkennbar angebracht, um die Identität unserer Heimat und
                Marke widerzuspiegeln. Die Rückseite ist, mit unserem Label
                Namen "NurEinBerg", ebenfalls per Stick veredelt.
                <br />
                <br />
                Mehr als NurEineJacke - denn Heimat trägt man nicht nur im
                Herzen, sondern auch auf der Haut.
              </Text>
            </TextWrapper>
            <GatsbyImage image={frankaModel2.childImageSharp.gatsbyImageData} alt="Franka Model 2" />
            <TextWrapper>
              <H2>Streng Limitiert</H2>
              <Text>
                Um die Besonderheit dieses Produkts zu garantieren, ist unsere
                Jeans Jacke auf 10 Exemplare limitiert. Wir legen Wert auf hohe
                Qualität und perfekte Verbreitung. Nur durch eine geringe
                Auflage kann das gewährleistet werden.
              </Text>
            </TextWrapper>
            <GatsbyImage image={frankaModel3.childImageSharp.gatsbyImageData} alt="Franka Model 3" />
            <TextWrapper>
              <H2>Hergestellt in Franken</H2>
              <Text>
                Für 100% Heimatgefühl werden unsere Jacken in der Region
                hergestellt. Denn NurEinBerg steht, wie der Name schon sagt für
                Nürnberg. So ist es unsere Pflicht von der Produktentwicklung,
                über Shootings, bis hin zur Produktion lokal zu handeln.
                <br />
                <br /> Durch die Herstellung in Franken können wir nicht nur
                Qualität garantieren, sondern auch hachhaltig produzieren, um
                den Konsum umweltgerecht zu gestalten.
              </Text>
            </TextWrapper>
          </TwoColumnGrid>
          <GatsbyImage
            image={frankaCollage.childImageSharp.gatsbyImageData}
            alt="Franka Collage"
            style={{ marginTop: '10rem', marginBottom: '10rem' }} />
          <TwoColumnGrid>
            <GatsbyImage
              image={product.images[0].localFile.childImageSharp.gatsbyImageData}
              alt="Produktfoto Karl" />
            <div>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductForm dark={true} product={product} color="#9A694F" />
              <ProductDescription
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </div>
          </TwoColumnGrid>
        </MainContent>
        <Footer color="#9A694F" />
      </Container>
    </div>
  );
}

export const query = graphql`query ($handle: String!) {
  shopifyProduct(handle: {eq: $handle}) {
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
          gatsbyImageData(maxWidth: 600, placeholder: TRACED_SVG, layout: FLUID)
        }
      }
    }
  }
  frankaModel1: file(relativePath: {eq: "Franka_Model_1.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FLUID)
    }
  }
  frankaModel2: file(relativePath: {eq: "Franka_Model_2.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FLUID)
    }
  }
  frankaModel3: file(relativePath: {eq: "Franka_Model_3.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FLUID)
    }
  }
  frankaCollage: file(relativePath: {eq: "Franka_Collage.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FLUID)
    }
  }
}
`

export default FrankaPage
