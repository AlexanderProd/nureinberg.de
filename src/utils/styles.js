import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

export const colors = {
  whiteSmoke: '#F6F6F6',
}

export const breakpoints = {
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
}

export const typo = {
  xLarge: '40px',
  large: '30px',
  regular: '20px',
  small: '15px',
  lineXLarge: '48px',
  lineLarge: '32px',
  lineRegular: '24px',
  lineSmall: '16px',
}

export const layout = {
  spacing: 8,
}

export const GlobalStyle = () => (
  <Global
    styles={css`
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }

      body {
        margin: 0;
        font-family: 'Roboto', 'HelveticaNeue', 'Helvetica Neue', sans-serif;
      }

      p {
        line-height: 1.4;
      }

      h3 {
        font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        font-style: normal;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-size: 1.125rem;
      }
    `}
  />
)

export const Img = styled(GatsbyImage)`
  max-width: 100 %;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 1.45rem;
`

export const MainContent = styled.main`
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`

export const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ gap }) => (gap ? gap : '2.5rem')};
  grid-auto-flow: row dense;
  ${({ backgroundColor }) =>
    backgroundColor ? `background-color: ${backgroundColor};` : null};

  & > :nth-of-type(4n - 1) {
    grid-column-start: 2;
  }

  @media (max-width: ${breakpoints.l}px) {
    display: block;

    & > * {
      margin-bottom: ${({ gap }) => (gap ? gap : '2.5rem')};
    }

    & > :last-child {
      margin-bottom: 0rem;
    }
  }
`

export const LeftTwoThirds = styled.div`
  display: grid;
  grid-template-columns: 1fr 66%;
  gap: ${({ gap }) => (gap ? gap : '2.5rem')};

  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export const RightTwoThirds = styled.div`
  display: grid;
  grid-template-columns: 66% 1fr;
  gap: ${({ gap }) => (gap ? gap : '2.5rem')};

  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export const AlternatingTwoThirdsGrid = styled.div`
  display: grid;
  grid-template-columns: 66% 1fr;
  grid-auto-flow: row dense;
  gap: ${({ gap }) => (gap ? gap : '2.5rem')};

  & > :nth-child(4n - 1) {
    grid-column-start: 2;
  }

  @media (max-width: ${breakpoints.l}px) {
    display: block;
  }
`

export const ThreeThirdsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: row dense;
  gap: ${({ gap }) => (gap ? gap : '2.5rem')};
  ${({ backgroundColor }) =>
    backgroundColor ? `background-color: ${backgroundColor};` : null};

  @media (max-width: ${breakpoints.l}px) {
    display: block;

    & > * {
      margin-bottom: ${({ gap }) => (gap ? gap : '2.5rem')};
    }

    & > :last-child {
      margin-bottom: 0rem;
    }
  }
`

export const Button = styled.button`
  color: ${({ color }) => (color ? color : 'white')};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : '0px')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : 'black'};
  font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 12px 20px;
  font-size: 0.8125em;
  text-decoration: none;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border: none;
  white-space: normal;
  display: flex;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: #f6f6f6;
    color: #717171;
    cursor: default;

    &:hover {
      opacity: 1;
    }
  }
`

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  display: inline-block;
  box-sizing: border-box;
  padding: 0.8125rem 1rem;
  font-size: 0.8125rem;
  border: 1pt solid black;
  border-radius: 0px;
  font-family: 'Montserrat', 'HelveticaNeue', 'Helvetica Neue', sans-serif;
  text-transform: uppercase;
  background-color: RGBA(255, 255, 255, 0);
`

export const SmallLine = styled.hr`
  margin: 20px auto;
  border-width: 1px 0 0 0;
  width: 50px;
  clear: both;
  border-top: solid #1c1d1d;
`
