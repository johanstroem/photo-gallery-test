import React from 'react'
import styled from 'styled-components'
import { Person } from '../../service/photos'
import { FlexColumn } from '../layout'

type PersonCardProps = {
  person: Person
}

function PersonCard({ person }: PersonCardProps) {
  return (
    <PersonCardContainer>
      <Photo src={person.photo.large} />
      <PersonInfo>
        <PersonName>
          {person.name}
        </PersonName>
        { ', ' }
        <PersonAge>{person.age}</PersonAge>
      </PersonInfo>
    </PersonCardContainer>
  )
}

const PersonCardContainer = styled(FlexColumn)`
  padding: 12px;
  max-width: 256px;
`  
  
const Photo = styled.img`
  border-radius: 128px;
`

const PersonInfo = styled.div`
  display: flex;1.1
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.085em;
`

const PersonName = styled.h3``

const PersonAge = styled.p``

export default PersonCard
