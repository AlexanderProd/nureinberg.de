import React, { useEffect, useContext } from 'react'

import Page from '~/templates/Page'
import StoreContext from '~/context/StoreContext'

const Dankeschoen = () => {
  const { client, checkout, removeLineItem } = useContext(StoreContext)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/confetti.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    checkout.lineItems.forEach(({ id }) => {
      removeLineItem(client, checkout.id, id)
    })
  }, [checkout.lineItems, removeLineItem, checkout.id, client])

  return (
    <Page title="">
      <div style={{ textAlign: 'center' }}>
        <h1>Vielen Dank!</h1>
        <h2>Vom gesammten NurEinBerg Team</h2>
        <span role="img" aria-label="Heart">
          ❤️
        </span>
      </div>
    </Page>
  )
}

export default Dankeschoen
