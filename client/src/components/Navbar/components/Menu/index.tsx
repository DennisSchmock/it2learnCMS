import React from 'react'
import helpers from '@/utils/helpers'
import MenuItem from '../MenuItem'
import Styled from './styled'
import Config from '../../../../config.json'
import { MenuItemOptions } from '../../types/MenuItemTypes'

export interface MenuProps {
  isMobile?: boolean
  menuItems: MenuItemOptions[]
  anchored?: boolean
}

const Menu = ({
  menuItems,
  anchored = true,
}: MenuProps): JSX.Element => (
  <Styled.MenuContainer>
    {menuItems.map((menuConfig) => {
      const position = helpers.getPosition(
        Config.menu.menuItems.length,
        menuConfig.menuPosition,
      )
      const menuItem = { ...menuConfig, position }
      return (
        <MenuItem
          key={menuItem.title}
          navigation={menuItem.navigation}
          position={menuItem.position}
          anchoredMenu={anchored}
          enabled
          title={menuItem.title}
        />
      )
    })}
  </Styled.MenuContainer>
)

export default Menu
