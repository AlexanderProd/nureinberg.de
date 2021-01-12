import styled from '@emotion/styled'

export const Title = styled.h1`
  font-size: ${({ titleFontSize }) =>
    titleFontSize ? titleFontSize : '1.875rem'};
  font-family: ${({ titleFontFamily }) =>
    titleFontFamily ? titleFontFamily : `'Old Standard TT', serif`};
  font-weight: 400;
  margin: 0 0 0.5em;
  line-height: 1.4;
  text-align: center;
  margin-bottom: 50px;
  ${({ titleStyles }) => (titleStyles ? titleStyles : null)}

  :after {
    border-top: solid #1c1d1d;
    border-width: 1px 0 0 0;
    width: 50px;
  }
`
