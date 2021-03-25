import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import Styled from './styled'

const HomePage: FC = () => {
  const params = useParams()
  console.log('params')
  console.log(params)

  return <Styled.Container>Main is rendering</Styled.Container>
}

export default HomePage
