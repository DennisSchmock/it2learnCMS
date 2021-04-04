import React from 'react'
import { MenuItemOptions } from '../../types/MenuItemTypes'
import Styled from './styled'

const MenuItem = ({
  title,
  navigation,
  position,
  selected,
  anchoredMenu,
}: MenuItemOptions): JSX.Element => (
  <Styled.MenuItemContainer
    selected={selected}
    anchoredMenu={anchoredMenu}
    position={position}
  >
    <Styled.MenuItemLink to={navigation.path}>
      <Styled.MenuItemText>{title}</Styled.MenuItemText>
    </Styled.MenuItemLink>
  </Styled.MenuItemContainer>
)

export default MenuItem
