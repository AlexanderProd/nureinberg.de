import React from 'react'

import { useSiteMetadata } from '~/utils/hooks'
import { Container } from '~/utils/styles'
import { Wrapper, Links, Item, SocialMediaLinks } from './styles'
import { Instagram } from './icons'

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
                  {name.toLowerCase() === 'instagram' ? (
                    <Instagram height="18px" />
                  ) : null}
                  <a
                    href={link}
                    key={name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {name}
                  </a>
                </li>
              )
            })}
          </SocialMediaLinks>
        </Links>
        <p style={{ color: color }}>
          © {new Date().getFullYear()} {title}
        </p>
      </Wrapper>
    </Container>
  )
}

export default Footer
