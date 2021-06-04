import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../service/appContext'
import { FlexColumn, Row, Column } from '../layout'

function Gallery() {
  const { state, dispatch } = useAppContext()

  return (
    <GalleryContainer>
      <GalleryHeader>Photos:</GalleryHeader>
      <Row>
        <Column>Hej 1</Column>
        <Column>Hej 2</Column>
        <Column>Hej 3</Column>
        <Column>Hej 4</Column>
      </Row>
    </GalleryContainer>
  )
}

const GalleryContainer = styled(FlexColumn)`
  text-align: center;
  flex-direction: flex-start;
  min-width: 40vw;
`

const GalleryHeader = styled.h1`
  color: LightSeaGreen;
`

const ImageContainer = styled.img`
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
`


export default Gallery
