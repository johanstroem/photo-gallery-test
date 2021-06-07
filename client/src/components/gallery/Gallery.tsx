import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../../service/appContext'
import { Person } from '../../service/photos'
import { FlexColumn, Row, Column } from '../layout'
import PersonList from './PersonList'
import { useSlices } from './useSlices'

const NUMBER_OF_COLUMNS = 4

function Gallery() {
  const { loading, persons, pagination } = useAppContext()

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
      <GalleryHeader>
        <PaginationNav onClick={() => pagination.setPage(pagination.page-1)}>{'<'}</PaginationNav>
        <GalleryTitle>Page: {pagination.page} </GalleryTitle>
        <PaginationNav onClick={() => pagination.setPage(pagination.page+1)}>{'>'}</PaginationNav>
      </GalleryHeader>
      {loading ? <span>...loading</span> : (
        <Row>
          {Columns}
        </Row>
      )}
    </GalleryContainer>
  )
}

const GalleryContainer = styled(FlexColumn)``

const GalleryHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PaginationNav = styled.button`
  font-size: 2.1em;
  font-weight: bold;
  background: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`

const GalleryTitle = styled.h2`
  color: LightSeaGreen;
  margin: 0 6px;
`

export default Gallery
