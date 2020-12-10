import React, { useState, useContext, useEffect, useCallback } from 'react'
import find from 'lodash/find'
import isEqual from 'lodash/isEqual'
import PropTypes from 'prop-types'

import StoreContext from '../../context/StoreContext'
import LayoutContext from '../../context/LayoutContext'
import { Button } from '../../utils/styles'
import {
  Wrapper,
  ProductOptions,
  OptionName,
  OptionValues,
  ProductPrice,
  ProductValue,
} from './styles'

const ProductForm = ({ product, dark = false, color }) => {
  const {
    options,
    variants,
    variants: [initialVariant],
    priceRange: { minVariantPrice },
  } = product
  const [variant, setVariant] = useState({ ...initialVariant })
  const [quantity] = useState(1)
  const { client, adding, addVariantToCart } = useContext(StoreContext)
  const { toggleCart } = useContext(LayoutContext)

  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(fetchedProduct => {
        // this checks the currently selected variant for availability
        const result = fetchedProduct.variants.filter(
          variant => variant.id === productVariant.shopifyId
        )
        setAvailable(result[0].available)
      })
    },
    [client.product, productVariant.shopifyId, variants]
  )

  useEffect(() => {
    checkAvailability(product.shopifyId)
  }, [checkAvailability, product.shopifyId])

  const handleClick = (optionIndex, value) => {
    const currentOptions = [...variant.selectedOptions]

    currentOptions[optionIndex] = {
      ...currentOptions[optionIndex],
      value,
    }

    const selectedVariant = find(variants, ({ selectedOptions }) =>
      isEqual(currentOptions, selectedOptions)
    )

    setVariant({ ...selectedVariant })
  }

  const handleAddToCart = async () => {
    await addVariantToCart(productVariant.shopifyId, quantity)
    toggleCart()
  }

  const price = Intl.NumberFormat(undefined, {
    currency: minVariantPrice.currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(variant.price)

  return (
    <Wrapper>
      <ProductPrice color={color}>{price}</ProductPrice>
      {options.map(({ id, name, values }, optionIndex) => (
        <ProductOptions key={id}>
          <OptionName color={color}>{name}</OptionName>
          <OptionValues>
            {values.map(value => (
              <ProductValue
                dark={dark}
                key={`${id}-${value}`}
                active={variant.selectedOptions[optionIndex].value === value}
                onClick={() => handleClick(optionIndex, value)}
              >
                {value}
              </ProductValue>
            ))}
          </OptionValues>
        </ProductOptions>
      ))}
      <Button
        color={dark ? 'black' : 'white'}
        backgroundColor={dark ? 'white' : 'black'}
        type="submit"
        disabled={!available || adding}
        onClick={handleAddToCart}
      >
        {available ? 'In den Einkaufswagen legen' : 'Ausverkauft'}
      </Button>
    </Wrapper>
  )
}

ProductForm.propTypes = {
  product: PropTypes.shape({
    descriptionHtml: PropTypes.string,
    handle: PropTypes.string,
    id: PropTypes.string,
    shopifyId: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        originalSrc: PropTypes.string,
      })
    ),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    productType: PropTypes.string,
    title: PropTypes.string,
    variants: PropTypes.arrayOf(
      PropTypes.shape({
        availableForSale: PropTypes.bool,
        id: PropTypes.string,
        price: PropTypes.string,
        title: PropTypes.string,
        shopifyId: PropTypes.string,
        selectedOptions: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            value: PropTypes.string,
          })
        ),
      })
    ),
  }),
  addVariantToCart: PropTypes.func,
}

export default ProductForm
