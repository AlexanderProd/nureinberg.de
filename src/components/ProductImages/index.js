import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import { SlideContainer } from './styles'

const ProductImages = ({ product }) => {
  const properties = {
    duration: 5000,
    transitionDuration: 350,
    infinite: true,
    indicators: true,
    arrows: true,
  }

  if (product.images) {
    return (
      <SlideContainer>
        <Slide {...properties}>
          {product.images.map(i => (
            <div className="each-fade" key={i.id}>
              <GatsbyImage
                image={i.localFile.childImageSharp.gatsbyImageData}
                alt={product.title}
                key={i.id}
              />
            </div>
          ))}
        </Slide>
      </SlideContainer>
    )
  }
}

export default ProductImages
