import React, { useEffect } from 'react'

import Page from '~/templates/Page'

const Dankeschoen = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/confetti.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div style={{ textAlign: 'center' }}>
      <Page title="">
        <h1>Vielen Dank!</h1>
        <h2>Vom gesammten NurEinBerg Team</h2>
        <p>❤️</p>
      </Page>
    </div>
  )
}

export default Dankeschoen
