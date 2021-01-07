import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

import Page from '~/templates/Page'
import { breakpoints } from '~/utils/styles'

const Icons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-auto-flow: row dense;
  gap: 0rem;

  @media (max-width: ${breakpoints.l}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Pflegenaleitung = ({ data }) => {
  const { icons } = data

  return (
    <Page title="Pflegenaleitung">
      <p>
        Alle unsere Produkte bestehen aus 100% Bio Baumwolle. Dadurch findet
        keine chemische Vorbehandlung statt, was dazu führt, dass bei der
        Reinigung etwas vorsichtiger vorgegangen werden muss. Achten sie bitte
        auf folgende Punkte:
        <ul>
          <li>max. 30° C Wassertemperatur</li>
          <li>Vor dem Waschen umkrempeln</li>
          <li>nur mit ähnliche Farben waschen</li>
          <li>Feucht in Form bringen</li>
          <li>Lufttrocknen / keinen Wäschetrockner</li>
          <li>Kein Bleichmittel verwenden</li>
        </ul>
      </p>
      <Icons style={{ margin: '10rem 0' }}>
        {icons.edges.map(({ node }) => (
          <GatsbyImage
            image={node.childImageSharp.gatsbyImageData}
            key={node.id}
            alt={node.name}
          />
        ))}
      </Icons>
    </Page>
  )
}

export default Pflegenaleitung

export const query = graphql`
  {
    icons: allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        name: { regex: "/(waschsymbol)/" }
      }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(
              width: 100
              height: 100
              placeholder: TRACED_SVG
              layout: FIXED
            )
          }
        }
      }
    }
  }
`
