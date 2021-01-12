import React from 'react'

import SEO from '~/components/seo'
import Navigation from '~/components/Navigation'
import { Container, MainContent } from '~/utils/styles'
import Footer from '~/components/Footer'
import { Title } from './styles'

const Page = ({
  title,
  children,
  titleStyles,
  titleFontSize,
  titleFontFamily,
  color = 'transparent',
}) => (
  <div style={{ backgroundColor: color }}>
    <SEO title={title} />
    <Navigation />
    <Container>
      <MainContent>
        <Title
          titleFontFamily={titleFontFamily}
          titleFontSize={titleFontSize}
          titleStyles={titleStyles}
        >
          {title}
        </Title>
        {children}
      </MainContent>
    </Container>
    <Footer />
  </div>
)

export default Page
