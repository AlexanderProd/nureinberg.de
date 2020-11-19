import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from '@emotion/styled'

import Page from '~/templates/Page'
import { Img, breakpoints } from '~/utils/styles'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  position: relative;
`

const Title = styled.span`
  font-family: 'Old Standard TT', serif;
  font-weight: 300;
  font-style: italic;
  font-size: 2rem;
  text-align: center;
  position: absolute;
  margin-top: 1rem;
  margin-left: 1rem;
  color: white;
  z-index: 2;
  text-shadow: 2px 2px 20px black;
`

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

const ImgAbove = styled(Img)`
  z-index: 1;
  transition: opacity ease-in-out 0.2s;

  &:hover {
    opacity: 0;
  }
`

const ImgBelow = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  max-height: 100%;
  z-index: 0;
`

const Klassik = () => {
  const { allShopifyCollection } = useStaticQuery(graphql`
    query {
      allShopifyCollection(filter: { title: { eq: "Klassik" } }) {
        edges {
          node {
            title
            description
            products {
              title
              id
              handle
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 300) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Page title="Klassik">
      <Grid>
        {allShopifyCollection.edges[0].node.products ? (
          allShopifyCollection.edges[0].node.products.map(product => (
            <Link key={product.id} to={`/produkt/${product.handle}/`}>
              <Product>
                <ImgWrapper>
                  <ImgAbove
                    fluid={
                      product.images[product.images.length - 1].localFile
                        .childImageSharp.fluid
                    }
                    alt={product.handle}
                  />
                  <ImgBelow
                    src={product.images[0].localFile.childImageSharp.fluid.src}
                    alt={product.handle}
                  />
                </ImgWrapper>
                <Title>{product.title}</Title>
              </Product>
            </Link>
          ))
        ) : (
          <p>No Products found!</p>
        )}
      </Grid>
    </Page>
  )
}

export default Klassik
