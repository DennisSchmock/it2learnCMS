import React from 'react'
import RootRoutes from 'common/RootRoutes'
import { createGlobalStyle } from 'styled-components'
import { RenderRoutes } from './common/router'
import Header from './components/Brand'
import Footer from './components/Footer'
import ContentContainer from './components/ContentContainer'

const GlobalStyle = createGlobalStyle`
html,body {
  padding: 0;
  margin: 0;
}
`
const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <div>
      <Header />
      <ContentContainer>
        <RenderRoutes routes={RootRoutes} />
      </ContentContainer>
      <Footer />
    </div>
  </>
)

export default App
