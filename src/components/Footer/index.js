import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

import { useSiteMetadata } from '~/utils/hooks'
import { Container } from '~/utils/styles'
import { Wrapper, Links, Item, SocialMediaLinks } from './styles'
import { Instagram, Facebook, Pinterest } from './icons'

const Footer = ({ color = 'black' }) => {
  const { title, secondaryNav, socialLinks } = useSiteMetadata()

  const links = (arr, n) => {
    let chunkLength = Math.max(arr.length / n, 1)
    let chunks = []
    for (let i = 0; i < arr.length; i++) {
      if (chunkLength * (i + 1) <= arr.length)
        chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)))
    }
    return chunks
  }

  const socialMediaIcons = (name, color) => {
    switch (name.toLowerCase()) {
      case 'instagram':
        return <Instagram color={color} height="18px" />

      case 'facebook':
        return <Facebook color={color} height="18px" />

      case 'pinterest':
        return <Pinterest color={color} height="18px" />

      default:
        break
    }
  }

  return (
    <Container>
      <Wrapper>
        <Links>
          {links(secondaryNav, 2)[0].map(({ name, link }) => (
            <Item to={link} key={name} color={color}>
              {name}
            </Item>
          ))}
        </Links>
        <Links>
          {links(secondaryNav, 2)[1].map(({ name, link }) => (
            <Item to={link} key={name} color={color}>
              {name}
            </Item>
          ))}
        </Links>
        <Links>
          <SocialMediaLinks color={color}>
            {socialLinks.map(({ name, link }) => {
              return (
                <li key={name}>
                  {socialMediaIcons(name, color)}
                  <OutboundLink
                    href={link}
                    key={name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </OutboundLink>
                </li>
              )
            })}
          </SocialMediaLinks>
        </Links>
        <Links style={{ color: color }}>
          © {new Date().getFullYear()} {title}
          <br />
          <br />
          Konzept &amp; Entwicklung:
          <a style={{ color: color }} href="https://wertgebung.de">
            WERTGEBUNG
          </a>
        </Links>
      </Wrapper>
    </Container>
  )
}

export default Footer
