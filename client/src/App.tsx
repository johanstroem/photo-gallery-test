import React from 'react'
import styled from 'styled-components'
import Gallery from './components/gallery'
import { FlexColumn } from './components/layout'

function App() {
  return (
    <AppContainer>
      <AppHeader>
        <Title>Zington Photo Gallery</Title>
      </AppHeader>
      <AppContent>
        <Gallery />
      </AppContent>
    </AppContainer>
  )
}

const AppContainer = styled.div`
  text-align: center;
  background-color: aliceblue;
`
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`

const AppHeader = styled(FlexColumn)`
  justify-content: center;
  min-height: 10vh;
`

const AppContent = styled(FlexColumn)`
  min-height: 90vh;
`

export default App
