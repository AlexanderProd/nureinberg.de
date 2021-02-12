import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import CountUp from 'react-countup'

import Page from '~/templates/Page'
import { TwoColumnGrid, ThreeThirdsGrid, breakpoints } from '~/utils/styles'
import { useOnScreen } from '~/utils/hooks'
import video from '~/images/subucoola.mp4'
import sewing_machine from '~/images/sewing_machine.svg'
import stift from '~/images/stift.svg'
import handy from '~/images/handy.svg'

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content center;
  padding: 5rem;

  @media (max-width: ${breakpoints.l}px) {
    padding: 2.5rem;
  }

  @media (max-width: ${breakpoints.s}px) {
    padding: 1rem;
  }
`

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  word-wrap: break-word;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Transparenz = ({ data }) => {
  const ref = useRef()
  const { karl_zeichnung, karl_computer, karl_stick } = data
  const onScreen = useOnScreen(ref)

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
          <H2>Bio-Baumwolle</H2>
          <Text>
            Nicht nur aufgrund des Tragekomforts, sondern vor allem der Umwelt
            zu liebe, verwenden wir Textilien aus 100% Bio Baumwolle.
            <br />
            <br />
            Dadurch ist ein geringerer Wasserverbrauch der Baumwollpflanze und
            der Verzicht auf gifitigen Pestiziden gewährleistet.
          </Text>
        </TextWrapper>
        <StaticImage
          src="../images/Transparenz_Baumwolle.png"
          layout="fullWidth"
          alt="Baumwolle"
        />
      </TwoColumnGrid>
      <TwoColumnGrid
        backgroundColor="white"
        gap="0"
        style={{ marginTop: '5rem' }}
      >
        <StaticImage
          src="../images/fairwearfoundation.png"
          layout="fullWidth"
          alt="Fair Wear Foundation"
        />
        <TextWrapper>
          <H2>Faire Arbeitsbedingungen</H2>
          <Text>
            Unsere Textilien sind Fair Wear Foundation verifiziert. Die
            Organisation setzt sich für den Arbeitsschutz und faire Löhne für
            die Arbeiter in den Fabriken großer Textilhersteller ein
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
            Unternehmen. Somit ist es für uns selbstverständlich, dass unsere
            Produkte in der Region veredelt werden.
            <br />
            <br /> Vor allem bei unseren Siebdruck und Stick Motiven arbeiten
            wir eng mit unseren Partnerbetrieben zusammen.
            <br />
            <br /> Beim Siebdruck werden verschiedene Techniken angewandt. Links
            im Video ist unser Horizon Shirt zu sehen, welches von Subucoola
            randlos am Kragen abwärts veredelt wurde. Das Motiv wurde hierbei
            bewusst mit einer Rasterung gedruckt, um die Feinheiten des Motives
            besser darstellen zu können.
            <br />
            <br /> Auch die Discharge Methode wurde bei einigen unserer Shirts
            verwendet. Hierbei wird nicht Farbe auf das Textil aufgetragen,
            sondern die Färbung der Baumwolle heraus gegerbt. So wird jedes
            Shirt zu einem Unikat da die natürliche Baumwollfarbe des Shirts zum
            Vorschein kommt und das Motiv immer unterschiedlich definiert.
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
            Ein Großteil unserer Produkte wird jedoch von uns selbst veredelt.
            <br />
            <br />
            Nicht nur das Label Etikett wird von uns per Hand aufgenäht, auch
            unsere Patches „<Link to="/produkt/karl/">Karl</Link>“ und „
            <Link to="/produkt/heinrich/">Heinrich</Link>“ bringen wir mit
            größter Sorgfalt auf dem Shirt an.
            <br />
            <br /> Auch unsere „Herzschlag Nürnberg“ Shirts bedrucken wir
            komplett eigenständig. Somit können wir 5€ pro verkauftem Shirt an
            die Elterninitiative krebskranker Kinder e.V. abgeben. Schaut doch
            gerne bei dem Produkt vorbei und Unterstützt unser Projekt.
          </Text>
        </TextWrapper>
        <StaticImage
          src="../images/Transparenz_Label.png"
          layout="fullWidth"
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
          <img src={stift} height="120px" alt="Nähmaschine" />
          <H2>43H</H2>
          <Text>In jedem Design stecken 43 Stunden Entwicklungszeit.</Text>
        </div>
        <div>
          <img src={handy} height="120px" alt="Sonne" />
          <H2>2H</H2>
          <Text>In jedem Instagram Post stecken 2 Stunden Arbeit.</Text>
        </div>
        <div>
          <img src={sewing_machine} height="120px" alt="Nähmaschine" />
          <H2>1,5H</H2>
          <Text>In jedem Produkt stecken 1,5 Stunden Herstellungszeit.</Text>
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
          <GatsbyImage
            image={karl_zeichnung.childImageSharp.gatsbyImageData}
            alt="Karl Zeichnung"
          />
          <H2>Entwurf</H2>
          <Text
            style={{
              paddingLeft: '2.5rem',
              paddingRight: '2.5rem',
              paddingBottom: '2.5rem',
            }}
          >
            Der erste Schritt bei der Produktentwicklung ist sich inspirieren zu
            lassen, um anschließend ein paar Skizzen anfertigen zu können. Bei
            unserem „Karl“ Shirt war von Anfang an das Ziel, eine
            minimalistische Darstellung der Gothischen Kirche zu kreieren.
          </Text>
        </div>
        <div>
          <GatsbyImage
            image={karl_computer.childImageSharp.gatsbyImageData}
            alt="Karl Computer"
          />
          <H2>Zeichnung</H2>
          <Text
            style={{
              paddingLeft: '2.5rem',
              paddingRight: '2.5rem',
              paddingBottom: '2.5rem',
            }}
          >
            Im zweiten Schritt wird der Entwurf auf dem PC nachgezeichnet und
            ausgearbeitet. Dies ist meist der schwierigste Schritt, da hier
            bereits die Details für das endgültige Produkt festgelegt werden.
          </Text>
        </div>
        <div>
          <GatsbyImage
            image={karl_stick.childImageSharp.gatsbyImageData}
            alt="Karl Stick"
          />
          <H2>Stick</H2>
          <Text
            style={{
              paddingLeft: '2.5rem',
              paddingRight: '2.5rem',
              paddingBottom: '2.5rem',
            }}
          >
            Beim letzten Schritt geht es letztendlich um die Umsetzung des
            Designs. Nach der Herstellung eines Musterexemplars wird gemeinsam
            entschieden, ob an dem Produkt noch Abänderungen vorgenommen werden
            müssen.
          </Text>
        </div>
      </ThreeThirdsGrid>
      <div ref={ref}></div>
      {onScreen && (
        <ThreeThirdsGrid
          style={{
            textAlign: 'center',
            marginTop: '5rem',
          }}
        >
          <div>
            <H2>
              <CountUp start={0} end={alterBerechnen()} duration={3.2} />
            </H2>
            <Text>Tage ist das Label NurEinBerg alt.</Text>
          </div>
          <div>
            <H2>
              <CountUp start={0} end={135} duration={2} suffix=" €" delay={1} />
            </H2>
            <Text>haben wir für einen wohltätigen Zweck gesammelt.</Text>
          </div>
          <div>
            <H2>
              <CountUp start={0} end={9732} duration={6.4} delay={2} />
            </H2>
            <Text>Follower haben wir bereits auf lnstagram.</Text>
          </div>
        </ThreeThirdsGrid>
      )}
    </Page>
  )
}

export const query = graphql`
  {
    karl_zeichnung: file(relativePath: { eq: "Karl_Zeichnung.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    karl_computer: file(relativePath: { eq: "Karl_Computer.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
    karl_stick: file(relativePath: { eq: "Karl_Stick.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
      }
    }
  }
`

export default Transparenz
