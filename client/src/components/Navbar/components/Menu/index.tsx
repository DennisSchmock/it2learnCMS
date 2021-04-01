import React from 'react'
import Styled from './styled'

export type MenuProps = {
  children: React.ReactNode
}

const Menu = ({ children }: MenuProps): JSX.Element => {
  //  const [activeIndex, setActiveIndex] = useState(-1)
  const items = React.Children.map(children, (child, index) => {
    console.log(index)
    return child
  })
  return <Styled.MenuContainer>{items}</Styled.MenuContainer>
}

export default Menu
