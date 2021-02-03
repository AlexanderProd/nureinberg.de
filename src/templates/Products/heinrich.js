import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
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
import heinrichAnimationMP4 from '~/images/heinrich_animation.mp4'
import heinrichAnimationGIF from '~/images/heinrich_animation.gif'

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content; center;
  align-items: center;
  margin-bottom: 10rem;
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
  font-family: 'Old Standard TT', serif;
  font-weight: 400;
  margin: 0 0 0.5rem;
  line-height: 1.4;
`

const Text = styled.p`
  font-family: 'Old Standard TT', serif;
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
  font-family: 'Old Standard TT', serif;
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
  grid-template-columns: 3fr 2.5fr 3fr;
  grid-auto-flow: row dense;
  gap: 2.5rem;

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

const HeinrichPage = ({ data }) => {
  const product = data.shopifyProduct
  const {
    nahaufnahmeBrunnen,
    heinrichBaumwolle3,
    patchDetail,
    labelWeiss,
    brunnenWeiss,
  } = data

  return <>
    <SEO title={product.title} description={product.description} />
    <Navigation />
    <Container>
      <MainContent>
        <HeroWrapper>
          <HeroVideo muted playsInline autoPlay>
            <source src={heinrichAnimationMP4} type="video/mp4" />
            <source src={heinrichAnimationGIF} type="image/gif" />
          </HeroVideo>
          <H2>Wünsch dir was...</H2>
          <Text>
            ... am Ring des Schönen Brunnen. Unser Heinrich Shirt ist von
            einem der wichtigsten Wahrzeichen unserer Stadt inspiriert.
            <br /> Mit sehr viel Liebe zum Detail haben wir ein Produkt
            entwickelt, welches vielleicht den ein oder anderen Wunsch
            erfüllt.
          </Text>
        </HeroWrapper>
        <TwoColumnGrid>
          <ImgWrapper>
            <GatsbyImage
              image={nahaufnahmeBrunnen.childImageSharp.gatsbyImageData}
              alt="Schöner Brunnen" />
          </ImgWrapper>
          <TextWrapper>
            <H2>Heinrich Beheim</H2>
            <Text>
              Der Brunnen im Stil einer gotischen Kirchturmspitze ist von 1385
              bis 1396 von Heinrich Beheim errichtet worden.
              <br />
              <br /> Es existiert sogar eine Legende die besagt, der Brunnen
              sei einst als Spitze für die Frauenkirche gedacht, konnte aber
              aufgrund seines Gewichtes nie angebracht werden.
              <br />
              <br /> Doch die aller schönste Sage ist die des Wunschrings.
              Durch das Drehen am Ring sollen, laut ursprünglicher
              Überlieferung, die Kinderwünsche vieler Menschen in Erfüllung
              gegangen sein.
            </Text>
          </TextWrapper>
          <ImgWrapper>
            <GatsbyImage
              image={heinrichBaumwolle3.childImageSharp.gatsbyImageData}
              alt="Baumwolle" />
          </ImgWrapper>
          <TextWrapper>
            <H2>Nachhaltige Produktion</H2>
            <Text>
              Wir lieben Nürnberg und unsere Erde! Genau deshalb müssen wir
              auf unsere Umwelt achten und unseren Konsum überdenken. Aus
              diesem Grund sind unsere Shirts aus 100% Bio-Baumwolle und unter
              fairen Arbeitsbedingungen entstanden. Auch für den Versand
              verwenden wir Klimaneutrale Verpackungsmaterialien, um rundum
              nachhaltig zu handeln. <br />
              <br />
              Damit wir auch in Zukunft unser Leben in Franken genießen
              können.
            </Text>
          </TextWrapper>
        </TwoColumnGrid>
        <Collage style={{ margin: '10rem 0' }}>
          <GatsbyImage image={patchDetail.childImageSharp.gatsbyImageData} alt="Karl Shooting 1" />
          <GatsbyImage
            image={brunnenWeiss.childImageSharp.gatsbyImageData}
            alt="Schöner Brunnen" />
          <GatsbyImage image={labelWeiss.childImageSharp.gatsbyImageData} alt="Karl Shooting 2" />
        </Collage>
        <TwoColumnGrid style={{ margin: '10rem 0' }}>
          <GatsbyImage
            image={product.images[0].localFile.childImageSharp.gatsbyImageData}
            alt="Produktfoto Karl" />
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
  </>;
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
          gatsbyImageData(width: 910, placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
  patchDetail: file(relativePath: {eq: "Patch_Detail.jpg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
  }
  labelWeiss: file(relativePath: {eq: "Label_weiß.jpg"}) {
    childImageSharp {
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
  }
  brunnenWeiss: file(relativePath: {eq: "Brunnen_weiß.png"}) {
    childImageSharp {
      gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
    }
  }
  heinrichBaumwolle3: file(relativePath: {eq: "Heinrich_Baumwolle_3.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 400, placeholder: TRACED_SVG, layout: FIXED)
    }
  }
  nahaufnahmeBrunnen: file(relativePath: {eq: "Nahaufnahme_Brunnen.jpg"}) {
    childImageSharp {
      gatsbyImageData(height: 400, placeholder: TRACED_SVG, layout: FIXED)
    }
  }
}
`

export default HeinrichPage
