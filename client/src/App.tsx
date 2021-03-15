import React from 'react'
import RootRoutes from 'common/RootRoutes'
import { RenderRoutes } from './common/router'
import Header from './components/Header'
import Footer from './components/Footer'

const App = (): JSX.Element => (
  <div>
    <Header />
    <RenderRoutes routes={RootRoutes} />
    <Footer />
  </div>
)

export default App
