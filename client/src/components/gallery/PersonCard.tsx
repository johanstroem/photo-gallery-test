import React, { useState, ReactNode } from 'react'
import styled from 'styled-components'
import { Person } from '../../service/photos'
import { FlexColumn } from '../layout'

type PersonCardProps = {
  person: Person
}
const Overlay = ({ children }: {children: ReactNode} ) => (
  <OverlayContainer>
    {children}
  </OverlayContainer>
)

function PersonCard({ person }: PersonCardProps) {

  const [hover, setHover] = useState(false)
  return (
    <PersonCardContainer>
      <PhotoContainer onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <Photo src={person.photo.large}/>
        { hover && (<Overlay> <PersonEmail>{person.email}</PersonEmail> </Overlay>) }
      </PhotoContainer>
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
  width: 90%;
  margin: auto;
  overflow: hidden;
  align-items: center;
`  
  
const Photo = styled.img`
  border-radius: 64px;
`

const PersonInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  letter-spacing: 0.085em;
`

const PersonName = styled.h3``

const PersonAge = styled.p``

const PhotoContainer = styled.div`
  position: relative;
  width: 128px;
`

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  height: 100%;
  width: 100%;
  opacity: 60%;
  border-radius: 64px;
  transition: all 0.4s ease-in-out 0s;
  display: flex;
  align-items: center;
`
const PersonEmail = styled.p`
  color: white;
  font-weight: bold;
  overflow-wrap: break-word;
  max-width: 128px;

`

export default PersonCard
