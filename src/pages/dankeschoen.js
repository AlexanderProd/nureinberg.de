import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby'

import Page from '~/templates/Page'

const Dankeschoen = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Helmet>
        <script src={withPrefix('confetti.js')} type="text/javascript" />
      </Helmet>
      <Page title="">
        <h1>Vielen Dank!</h1>
        <h2>Vom gesammten NurEinBerg Team</h2>
        <p>❤️</p>
      </Page>
    </div>
  )
}

export default Dankeschoen
