import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Config from 'config.json'
import GlobalFonts from '@/assets/fonts/fonts'
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
    <GlobalFonts />
    <RootTemplate configuration={Config} />
  </>
)

export default App
