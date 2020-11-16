import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql, navigate } from 'gatsby'

import SEO from '~/components/seo'
import Navigation from '~/components/Navigation'
import Footer from '~/components/Footer'
import {
  Container,
  TwoColumnGrid,
  Button,
  Img,
  breakpoints,
} from '~/utils/styles'
import slide_1 from '~/images/slider_1.jpg'
import video from '~/images/optimized.mp4'

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

const Index = () => {
  const data = useStaticQuery(graphql`
    query IndexPageImages {
      image1: file(relativePath: { eq: "heart.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "DSC_6561_ret.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "label.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide1: file(relativePath: { eq: "slider_1.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide2: file(relativePath: { eq: "slider_2.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const slides = [
    {
      id: 1,
      image: data.slide1.childImageSharp.fluid,
      firstText: 'Mode & Fashion',
      secondText: 'Im Zeichen der Burg',
      buttonLink: '/produkte',
      buttonText: 'Jetzt Shoppen',
      color: 'white',
    },
    {
      id: 2,
      image: data.slide2.childImageSharp.fluid,
      firstText: 'Mode & Fashion',
      secondText: 'Eine Stadt, Eine Marke',
      buttonLink: '/product/nureinberg-pocket/',
      buttonText: 'Zum Pocket Shirt',
      color: 'white',
    },
  ]

  return (
    <>
      <SEO title="Home" keywords={[`nureinberg`, `nürnberg`, `fashion`]} />
      <Navigation color="black" />
      <Caption color="white">
        <Subtitle>MODE &amp; FASHION</Subtitle>
        <Title>Im Zeichen der Burg</Title>
      </Caption>
      <VideoBG loop muted playsInline autoPlay>
        <source src={video} type="video/mp4" />
        <ImageBG src={slide_1} />
      </VideoBG>
      <Wrapper>
        <Container>
          <TwoColumnGrid>
            <Img fluid={data.image1.childImageSharp.fluid} alt="NurEinHerz" />
            <div>
              <h3>NUREINHERZ</h3>
              <p>
                Pro verkauftem NurEinHerz Shirt spenden wir 2€ an die Nürnberger
                Bahnhofsmission. Jetzt kaufen und Gutes tun.
              </p>
              <Button
                onClick={() => navigate('product/nureinherz-charity-shirt/')}
              >
                Zum Shirt
              </Button>
            </div>
            <div>
              <h3>NUREINBERG BLACK SHIRT</h3>
              <p>
                Unser NurEinBerg Black Shirt wurde mit einer Speziellen Technik
                hergestellt, bei welcher der Druck nicht auf das Shirt
                aufgetragen, sondern aus dem Hintergrund geblichen wurde.
                Dadurch schaut der Druck auch nach sehr vielen Waschungen immer
                noch wie am ersten Tag aus.
              </p>
              <Button
                onClick={() =>
                  navigate('product/schwarzes-shirt-mit-gegerbtem-druck/')
                }
              >
                Zum Shirt
              </Button>
            </div>
            <Img fluid={data.image2.childImageSharp.fluid} alt="NurEinHerz" />
            <Img fluid={data.image3.childImageSharp.fluid} alt="NurEinHerz" />
            <div>
              <h3>NUREINBERG LABEL</h3>
              <p>
                Alle unsere Produkte kommen mit dem offiziellen NurEinBerg
                Label. Angenäht mit Hand und{' '}
                <span role="img" aria-label="heart">
                  ❤️
                </span>{' '}
                in Nürnberg.
              </p>
              <Button
                onClick={() => navigate('product/nureinberg-basic-black/')}
              >
                Zum Shirt
              </Button>
            </div>
          </TwoColumnGrid>
          <h3>UNSERE VERANTWORTUNG</h3>
          <p>
            Weil wir finden das Nachhaltigkeit und ein gesunder Lebenstil
            wichtig sind, verwenden wir bei allen unseren Shirts Textilien aus
            nachhaltiger und ökoligscher Produktion.
          </p>
          <Footer />
        </Container>
      </Wrapper>
    </>
  )
}

export default Index
