import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../service/appContext'
import { FlexColumn, Row, Column } from '../layout'

function Gallery() {
  const { loading, photos } = useAppContext()

  return (
    <GalleryContainer>
      <GalleryHeader>Photos:</GalleryHeader>
      {loading ? (
        <p>...loading</p>
      ) : (
        <Row>
          <Column>{ photos.length }</Column>
          <Column>Hej 2</Column>
          <Column>Hej 3</Column>
          <Column>Hej 4</Column>
        </Row>
      )}
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

const ListContent = styled(FlexColumn)`
  justify-content: center;
  align-items: center;
`

const ListItem = styled.p<{ isSelected: boolean }>`
  display block;
  border: ${(p) =>
    p.isSelected ? '2px solid LightSeaGreen' : '2px solid LightSlateGrey'};
  border-radius: 12px;
  padding: 6px;
  font-size: 1em;
  line-height: 1.2em;
  min-width: 120px;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow: hidden;     
  white-space: nowrap;
`

const DeleteIcon = styled.img`
  height: 24px;
  margin-left: 12px;
`

export default Gallery
