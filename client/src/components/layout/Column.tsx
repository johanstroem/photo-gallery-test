import styled from 'styled-components'
import { media } from './media'

const Column = styled.div`
  flex: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  max-width: 100%;

  @media ${media.tablet} {
    flex: 50%;
    max-width: 50%;
  }

  @media ${media.desktop} {
    flex: 25%;
    max-width: 25%;
  }
`

export default Column
