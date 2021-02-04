import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

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
      <div className="slide-container">
        <Slide {...properties}>
          {product.images.map(i => (
            <div className="each-fade" key={i.id}>
              <div className="image-container">
                <GatsbyImage
                  image={i.localFile.childImageSharp.gatsbyImageData}
                  alt={product.title}
                  key={i.id} />
              </div>
            </div>
          ))}
        </Slide>
      </div>
    );
  }
}

export default ProductImages
