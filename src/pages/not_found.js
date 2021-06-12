import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Seo from '~/components/seo'
import Navigation from '~/components/Navigation'
import { Container, breakpoints } from '~/utils/styles'
import Footer from '~/components/Footer'

import travolta from '~/images/travolta.gif'

const ImageWrapper = styled.div`
  width: 40%;
  margin: auto;

  @media (max-width: ${breakpoints.m}px) {
    width: 50%;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
  }
`

const NotFoundPage = () => (
  <>
    <Seo title="Page two" />
    <Navigation />
    <Container style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Seite nicht gefunden! 🙄</h1>
      <h2>
        <Link to="/">Zurück zur Startseite</Link>
      </h2>
      <ImageWrapper>
        <img src={travolta} />
      </ImageWrapper>
    </Container>
    <Footer />
  </>
)

export default NotFoundPage
