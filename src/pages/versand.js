import React from 'react'

import Page from '~/templates/Page'

const Versand = () => (
  <Page title="Versand">
    <p>
      <strong>Preise, Versandkosten und Lieferinformationen</strong>
      <span>:</span>
    </p>
    <ul>
      <li>Kostenloser Versand innerhalb Deutschland.</li>
      <li>DHL mit Versandverfolgung 4,99€.</li>
      <li>Nach Österreich und die Schweiz ab 3,70€.</li>
      <li>Außerhalb der EU ab 19,09€.</li>
      <li>Lieferzeit beträgt 2-3 Tage.</li>
    </ul>
    <p> </p>
  </Page>
)

export default Versand
