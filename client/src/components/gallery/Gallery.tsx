import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../service/appContext'
import { Person } from '../../service/photos'
import { FlexColumn, Row, Column } from '../layout'
import PersonList from './PersonList'
import { useSlices } from './useSlices'

const NUMBER_OF_COLUMNS = 4

function Gallery() {
  const { loading, persons } = useAppContext()

  const slices = useSlices<Person>(persons, NUMBER_OF_COLUMNS)

  const Columns = slices.map((col, i) => {
    const key = `column-${i}`
    return (
      // eslint-disable-next-line react/no-array-index-key
      <Column key={key}>
        <PersonList persons={col} />
      </Column>
    )
  })

  return (
    <GalleryContainer>
      <GalleryHeader>Photos:</GalleryHeader>
      {loading ? <p>...loading</p> : <Row>{Columns}</Row>}
    </GalleryContainer>
  )
}

const GalleryContainer = styled(FlexColumn)``

const GalleryHeader = styled.h2`
  color: LightSeaGreen;
`

export default Gallery
