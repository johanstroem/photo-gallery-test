import React from 'react'
import styled from 'styled-components'
import { Person } from '../../service/photos'
import { FlexColumn } from '../layout'
import PersonCard from './PersonCard'

type PersonListProps = {
  persons: Person[]
}

function PersonList({ persons }: PersonListProps) {
  const Persons = persons.map((p) => <PersonCard key={p.id} person={p} />)

  return <PersonListContainer>{Persons}</PersonListContainer>
}

const PersonListContainer = styled(FlexColumn)`
  text-align: center;
  flex-direction: flex-start;
`

export default PersonList
