import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import { useWindowDimensions } from '~/utils/hooks'
import { breakpoints, Img } from '~/utils/styles'

const ProductImages = ({ product }) => {
  const { images } = product
  const { width } = useWindowDimensions()

  const properties = {
    duration: 5000,
    transitionDuration: 350,
    infinite: true,
    indicators: true,
    arrows: true,
  }

  if (product.images) {
    return (
      <div>
        {width < breakpoints.l ? (
          <Slide {...properties}>
            {images.map(i => (
              <Img
                fluid={i.localFile.childImageSharp.gatsbyImageData}
                alt={product.title}
                key={i.id}
              />
            ))}
          </Slide>
        ) : (
          images.map(image => (
            <Img
              fluid={image.localFile.childImageSharp.gatsbyImageData}
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
