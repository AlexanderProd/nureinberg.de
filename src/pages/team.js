import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'

import Page from '~/templates/Page'
import { breakpoints } from '~/utils/styles'

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.m}px) {
    display: block;
  }
`

const Item = styled.div`
  flex: 0 0 calc(50% - 2.5rem);
  padding: 2.5rem;
  box-sizing: border-box;
`

const Text = styled.p`
  line-height: 1.6;
  font-size: 1.2rem;
  text-align: center;
`

const Team = () => (
  <Page>
    <div style={{ textAlign: 'center' }}>
      <h1>Team</h1>
    </div>

    <Grid>
      <Item>
        <StaticImage
          src="../images/team/Jens_Portrait.jpg"
          layout="fullWidth"
          alt="Jens Portrait"
        />
        <Text>
          Ich bin Jens und kümmere mich bei NurEinBerg vor allem um die
          Produktentwicklung und das Konzept. Als Geschäftsführer bin ich dafür
          zuständig, dass vom Marketing bis hin zum Versand an den Kunden alles
          glatt läuft.
          <br />
          <br />
          <i>
            „Man kann alles schaffen im Leben, wenn man bereit ist alles dafür
            zu geben.“
          </i>
        </Text>
      </Item>
      <Item>
        <StaticImage
          src="../images/team/Alex_Portrait.jpg"
          layout="fullWidth"
          alt="Alex Portrait"
        />
        <Text>
          Servus, mein Name ist Alexander und ich habe 2017 zusammen mit Jens
          NurEinBerg gegründet. Ich kümmere mich um den Webshop und die IT,
          sowie die Werbeanzeigen und mediale Gestaltung.
          <br />
          <br />
          <i>
            „If somebody offers you an amazing opportunity but you are not sure
            you can do it, say yes – then learn how to do it later!“ - Richard
            Branson
          </i>
        </Text>
      </Item>
      <Item>
        <StaticImage
          src="../images/team/Kai_Portrait.jpg"
          layout="fullWidth"
          alt="Kai Portrait"
        />
        <Text>
          Ich bin Kai und kümmere mich um das Marketing. Von Flyern bis hin zu
          Kooperationen mit anderen Marken bin ich zuständig. Neben meinem BWL
          Studium bin ich bei NurEinBerg, da ich diese Stadt im Herzen trage.
          <br />
          <br />
          <i>
            „Eine Idee ist nur eine Idee. Wann und wie du sie angehst, bestimmt,
            was daraus wird.“
          </i>
        </Text>
      </Item>
      <Item>
        <StaticImage
          src="../images/team/Anvar_Portrait.jpg"
          layout="fullWidth"
          alt="Anvar Portrait"
        />
        <Text>
          Hey, mein Name ist Anvar und ich bin für die Produktion der Shirts und
          die Logistik verantwortlich.
          <br />
          <br />
          <i>
            „Wichtig ist nicht, besser zu sein als alle anderen. Wichtig ist,
            besser zu sein als du gestern warst!“
          </i>
        </Text>
      </Item>
      <Item>
        <StaticImage
          src="../images/team/Anne_Portrait.jpg"
          layout="fullWidth"
          alt="Anne Portrait"
        />
        <Text>
          Hi, ich bin Annemarie und bin bei NurEinBerg zuständig für den Social
          Media Auftritt der Marke. Nürnberg ist meine Heimat, hier bin ich
          aufgewachsen und diese Verbundenheit kann ich durch NurEinBerg zum
          Ausdruck bringen.
          <br />
          <br />
          <i>„All progress takes place outside the comfort zone.“</i>
        </Text>
      </Item>
    </Grid>
  </Page>
)

export default Team
