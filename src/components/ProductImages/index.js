import React from 'react'
import { Slide } from 'react-slideshow-image'

import { useWindowDimensions } from '~/utils/hooks'
import { breakpoints, Img } from '~/utils/styles'

const ProductImages = ({ product }) => {
  const { width } = useWindowDimensions()

  const properties = {
    duration: 5000,
    transitionDuration: 350,
    infinite: false,
    indicators: true,
    arrows: true,
  }

  if (product.images) {
    return (
      <div>
        {width < breakpoints.l ? (
          <Slide {...properties}>
            {product.images.map(i => (
              <Img
                fluid={i.localFile.childImageSharp.fluid}
                alt={product.title}
                key={i.id}
              />
            ))}
          </Slide>
        ) : (
          product.images.map(image => (
            <Img
              fluid={image.localFile.childImageSharp.fluid}
              alt={product.title}
              key={image.id}
            />
          ))
        )}
      </div>
    )
  }
}

export default ProductImages
