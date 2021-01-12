import React from 'react'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { CountUp } from 'use-count-up'

import Page from '~/templates/Page'
import { TwoColumnGrid, ThreeThirdsGrid, breakpoints } from '~/utils/styles'
import video from '~/images/subucoola.mp4'
import sewing_machine from '~/images/sewing_machine.svg'
import stecknadel from '~/images/stecknadel.svg'
import sonne from '~/images/sonne.svg'

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content center;
  padding: 5rem;

  @media (max-width: ${breakpoints.l}px) {
    padding: 2.5rem;
  }
`

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
`

const H2 = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 15px;
  word-wrap: break-word;
  font-family: Roboto, sans-serif;
  font-weight: 600;
  margin: 0 0 0.5rem;
  line-height: 1.4;
  text-transform: uppercase;
`

const Text = styled.p`
  font-family: Roboto, sans-serif;
  line-height: 1.6;
  font-size: 1.2rem;
`

const Video = styled.video`
  max-width: 100%;
`

const Transparenz = ({ data }) => {
  const {
    baumwolle,
    fairwearfoundation,
    label,
    karl_zeichnung,
    karl_computer,
    karl_stick,
  } = data

  const alterBerechnen = () => {
    const oneDay = 24 * 60 * 60 * 1000
    const firstDate = new Date(2017, 4, 4)
    const secondDate = new Date()

    return Math.round(Math.abs((firstDate - secondDate) / oneDay))
  }

  return (
    <Page
      title="Transparenz"
      color="#F2F2F2"
      titleFontFamily="'Roboto', sans-serif"
      titleFontSize="2.5rem"
      titleStyles="text-transform: uppercase; font-weight: 600;"
    >
      <TwoColumnGrid backgroundColor="white" gap="0">
        <TextWrapper>
          <H2>Bio Baumwolle</H2>
          <Text>
            Nicht nur aufgrund des Tragekomforts, sondern vor allem der Umwelt
            zu liebe, verwenden wir Textilien aus 100% Bio Baumwolle.
            <br />
            <br />
            Dadurch ist ein geringerer Wasserverbrauch der Baumwollpflanze und
            der Verzicht auf gifitigen Pestiziden gewährleistet.
          </Text>
        </TextWrapper>
        <Image fluid={baumwolle.childImageSharp.fluid} alt="Baumwolle" />
      </TwoColumnGrid>
      <TwoColumnGrid
        backgroundColor="white"
        gap="0"
        style={{ marginTop: '5rem' }}
      >
        <Image
          fluid={fairwearfoundation.childImageSharp.fluid}
          alt="Fair Wear Foundation"
        />
        <TextWrapper>
          <H2>Faire Arbeitsbedingungen</H2>
          <Text>
            Nicht nur aufgrund des Tragekomforts, sondern vor allem der Umwelt
            zu liebe, verwenden wir Textilien aus 100% Bio Baumwolle.
            <br />
            <br />
            Dadurch ist ein geringerer Wasserverbrauch der Baumwollpflanze und
            der Verzicht auf gifitigen Pestiziden gewährleistet.
          </Text>
        </TextWrapper>
      </TwoColumnGrid>
      <H1>Produktion</H1>
      <TwoColumnGrid backgroundColor="white" gap="0">
        <Video loop muted playsInline autoPlay>
          <source src={video} type="video/mp4" />
        </Video>
        <TextWrapper>
          <H2>Regionale Herstellung</H2>
          <Text>
            Wie der Name NurEinBerg schon sagt, sind wir ein Nürnberger
            Unternehmen.
            <br />
            <br />
            Somit ist es für uns selbstverständlich, dass unsere Produkte in der
            Region hergestellt werden.
            <br />
            <br />
            Beispielsweiße bei „Subucoola“ wie links im Video zu sehen.
          </Text>
        </TextWrapper>
      </TwoColumnGrid>
      <TwoColumnGrid
        backgroundColor="white"
        gap="0"
        style={{ marginTop: '5rem' }}
      >
        <TextWrapper>
          <H2>Handgefertigt</H2>
          <Text>
            Mit sehr Liebe zum Detail werden unsere Produkte per Hand veredelt.
            <br />
            <br />
            Durch unsere eigene Druckerei, wird nicht nur das Label Etikett
            handgefertigt. Auch unsere Motive werden von uns einzeln aufgedruckt
            und somit zu Unikaten.
          </Text>
        </TextWrapper>
        <Image
          fluid={label.childImageSharp.fluid}
          alt="Nähmaschine mit NurEinBerg Label"
        />
      </TwoColumnGrid>
      <ThreeThirdsGrid
        style={{
          textAlign: 'center',
          marginTop: '10rem',
          marginBottom: '10rem',
        }}
      >
        <div>
          <img src={sewing_machine} height="120px" alt="Nähmaschine" />
          <H2>43H</H2>
          <Text>In jedem Design stecken 43 Stunden Entwicklungszeit.</Text>
        </div>
        <div>
          <img src={sonne} height="120px" alt="Sonne" />
          <H2>2H</H2>
          <Text>In jedem Instagram Post stecken 2 Stunden Arbeit.</Text>
        </div>
        <div>
          <img src={sewing_machine} height="120px" alt="Nähmaschine" />
          <H2>1,5H</H2>
          <Text>
            In jedem Produkt stecken eineinhalb Stunden Herstellungszeit.
          </Text>
        </div>
      </ThreeThirdsGrid>
      <H1>Designentwicklung</H1>
      <ThreeThirdsGrid
        backgroundColor="white"
        gap="0"
        style={{
          textAlign: 'center',
          marginTop: '5rem',
        }}
      >
        <div>
          <Image
            fluid={karl_zeichnung.childImageSharp.fluid}
            alt="Karl Zeichnung"
          />
          <Text
            style={{
              paddingLeft: '2.5rem',
              paddingRight: '2.5rem',
              paddingBottom: '2.5rem',
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </div>
        <div>
          <Image
            fluid={karl_computer.childImageSharp.fluid}
            alt="Karl Computer"
          />
          <Text
            style={{
              paddingLeft: '2.5rem',
              paddingRight: '2.5rem',
              paddingBottom: '2.5rem',
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </div>
        <div>
          <Image fluid={karl_stick.childImageSharp.fluid} alt="Karl Stick" />
          <Text
            style={{
              paddingLeft: '2.5rem',
              paddingRight: '2.5rem',
              paddingBottom: '2.5rem',
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </div>
      </ThreeThirdsGrid>
      <ThreeThirdsGrid
        style={{
          textAlign: 'center',
          marginTop: '5rem',
        }}
      >
        <div>
          <H2>
            <CountUp isCounting end={alterBerechnen()} duration={3.2} />
          </H2>
          <Text>Tage ist das Label NurEinBerg alt.</Text>
        </div>
        <div>
          <H2>
            <CountUp isCounting end={135} duration={2} />€
          </H2>
          <Text>haben wir für einen wohltätigen Zweck gesammelt.</Text>
        </div>
        <div>
          <H2>
            <CountUp isCounting end={9732} duration={6.4} />
          </H2>
          <Text>Follower haben wir bereits auf lnstagram.</Text>
        </div>
      </ThreeThirdsGrid>
    </Page>
  )
}

export const query = graphql`
  query {
    baumwolle: file(relativePath: { eq: "Transparenz_Baumwolle.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    fairwearfoundation: file(relativePath: { eq: "fairwearfoundation.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    label: file(relativePath: { eq: "Transparenz_Label.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    karl_zeichnung: file(relativePath: { eq: "Karl_Zeichnung.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    karl_computer: file(relativePath: { eq: "Karl_Computer.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    karl_stick: file(relativePath: { eq: "Karl_Stick.png" }) {
      childImageSharp {
        fluid(maxHeight: 400) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default Transparenz
