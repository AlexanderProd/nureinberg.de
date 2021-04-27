import React from 'react'

import Page from '~/templates/Page'

const Versand = () => (
  <Page title="Preise, Versandkosten und Lieferinformationen">
    <h1>Versand</h1>
    <ul>
      <li>Kostenloser Versand innerhalb Deutschland.</li>
      <li>DHL mit Versandverfolgung 4,99€.</li>
      <li>Außerhalb der EU ab 19,09€.</li>
      <li>Lieferzeit beträgt 2-3 Tage.</li>
    </ul>
    <br />
    <h1>Abholung</h1>
    <p>
      Wir bieten für alle unsere Produkte auch die kostenlose Abholung in
      unserem Büro im Complex Gewerbehof Fürth an. Wählen Sie dazu einfach
      Abholung bei der Bestellung aus. Wir werden Sie kontaktieren zu welcher
      Zeit Sie, Ihr Produkt abholen können.
    </p>
  </Page>
)

export default Versand
