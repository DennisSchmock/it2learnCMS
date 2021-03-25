import React from 'react'
import { createGlobalStyle } from 'styled-components'

import RootTemplate from './scenes/root'

const GlobalStyle = createGlobalStyle`
html,body {
  padding: 0;
  margin: 0;
}
`
const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <RootTemplate />
  </>
)

export default App
