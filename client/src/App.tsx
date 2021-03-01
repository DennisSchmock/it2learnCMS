import React from 'react'
import PropTypes from 'prop-types'

const App = ({ title }: { title: string }): JSX.Element => (
  <div>{title} and then some</div>
)

App.propTypes = {
  title: PropTypes.string.isRequired,
}
export default App
