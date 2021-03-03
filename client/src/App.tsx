import React from 'react'
import Components from '@/components/'

const App = ({ title }: { title: string }) => (
  <div>
    {title} and then some
    <Components />
  </div>
)

export default App
