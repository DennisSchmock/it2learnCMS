import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const title = 'React here'

ReactDom.render(
  <BrowserRouter>
    <App title={title} />
  </BrowserRouter>,
  document.getElementById('app'),
)

if (module.hot) {
  module.hot.accept()
}
