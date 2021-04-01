import React from 'react'
import Styled, { Position } from './styled'

export type MenuItemProps = {
  navigation: Navigation
  icon?: string
  position: Position
  selected?: boolean
  anchoredMenu?: boolean
}

export type Navigation = {
  title: string
  enabled: boolean
  navigation: {
    path: string
  }
}

const MenuItem = ({
  navigation,
  position,
  selected,
  anchoredMenu,
}: MenuItemProps): JSX.Element => {
  console.log(`pos:${position}`)
  return (
    <Styled.MenuItemContainer
      selected={selected}
      anchoredMenu={anchoredMenu}
      position={position}
    >
      <Styled.MenuItemLink to={navigation.navigation.path}>
        <Styled.MenuItemText>{navigation.title}</Styled.MenuItemText>
      </Styled.MenuItemLink>
    </Styled.MenuItemContainer>
  )
}

export default MenuItem
