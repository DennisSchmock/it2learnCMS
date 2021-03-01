import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

const title = 'React here'

ReactDom.render(<App title={title} />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
