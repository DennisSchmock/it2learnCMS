import React from 'react'
import RootRoutes from 'common/RootRoutes'
import { RenderRoutes } from './common/router'

const App = ({ title }: { title: string }): JSX.Element => (
  <div>
    {title} and then some
    <RenderRoutes routes={RootRoutes} />
  </div>
)

export default App
