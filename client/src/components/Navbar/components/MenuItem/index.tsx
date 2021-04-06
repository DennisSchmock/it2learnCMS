import React from 'react'
import { MenuItemOptions } from '../../types/MenuItemTypes'
import Styled from './styled'

export interface MenuItemProps extends MenuItemOptions {
  enabled?: boolean
}

const MenuItem = ({
  title,
  navigation,
  position,
  selected,
  anchoredMenu,
  enabled,
}: MenuItemProps): JSX.Element => (
  <Styled.MenuItemContainer
    selected={selected}
    anchoredMenu={anchoredMenu}
    position={position}
    enabled={enabled}
  >
    <Styled.MenuItemLink to={navigation.path}>
      <Styled.MenuItemText>{title}</Styled.MenuItemText>
    </Styled.MenuItemLink>
  </Styled.MenuItemContainer>
)

export default MenuItem
