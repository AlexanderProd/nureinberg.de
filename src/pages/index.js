import React from 'react'
import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import SEO from '~/components/seo'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'
import { TwoColumnGrid, Button, breakpoints } from '~/utils/styles'
import slide_1 from '~/images/slider_1.jpg'
import video from '~/images/Website.mp4'

const VideoBG = styled.video`
  max-width: 100vw;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  top: 0;
`

const ImageBG = styled.img`
  max-width: 100vw;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  z-index: 2;
  top: 0;
`

const Wrapper = styled.div`
  margin-top: 100vh;
`

const Caption = styled.div`
  color: ${({ color }) => (color ? color : 'black')};
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;

  animation: fadedown 1s;
  @keyframes fadedown {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

const Title = styled.h1`
  font-family: Old Standard TT, serif;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 4rem;
  line-height: 1.25;
  margin: 0 0 0.5rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: ${breakpoints.l}px) {
    font-size: 3rem;
  }
`

const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.25rem;
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  letter-spacing 0.1rem;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.2);

  @media (max-width: ${breakpoints.l}px){
    font-size: 0.9rem;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const Index = ({ data }) => {
  const { klassik, modern } = data

  return (
    <>
      <SEO title="Home" keywords={[`nureinberg`, `nürnberg`, `fashion`]} />
      <Navigation color="black" />
      <Caption color="white">
        <Subtitle>MODE &amp; FASHION</Subtitle>
        <Title>Eine Stadt - Eine Marke</Title>
      </Caption>
      <VideoBG loop muted playsInline autoPlay>
        <source src={video} type="video/mp4" />
        <ImageBG src={slide_1} />
      </VideoBG>
      <Wrapper>
        <TwoColumnGrid gap={'0'}>
          <Link to={`/klassik/`}>
            <ImageWrapper>
              <Caption>
                <Title style={{ color: 'white' }}>Klassik</Title>
                <Button>Zu den Produkten</Button>
              </Caption>
              <GatsbyImage
                image={klassik.childImageSharp.gatsbyImageData}
                alt="Klassik"
              />
            </ImageWrapper>
          </Link>
          <Link to={`/modern/`}>
            <ImageWrapper>
              <Caption>
                <Title
                  style={{ fontFamily: 'Roboto, sans-serif', color: 'white' }}
                >
                  Modern
                </Title>
                <Button>Zu den Produkten</Button>
              </Caption>
              <GatsbyImage
                image={modern.childImageSharp.gatsbyImageData}
                alt="Modern"
              />
            </ImageWrapper>
          </Link>
        </TwoColumnGrid>
        <Footer />
      </Wrapper>
    </>
  )
}

export const query = graphql`
  {
    klassik: file(relativePath: { eq: "klassik.jpg" }) {
      childImageSharp {
        gatsbyImageData(maxWidth: 600, placeholder: TRACED_SVG, layout: FLUID)
      }
    }
    modern: file(relativePath: { eq: "modern.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          maxWidth: 600
          placeholder: TRACED_SVG
          layout: FLUID
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default Index
