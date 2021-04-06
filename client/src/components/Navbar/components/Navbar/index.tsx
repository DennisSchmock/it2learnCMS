import * as React from 'react'
import { NavBar } from '../../types/NavBarTypes'
import Menu from '../Menu'

const NavBar = ({ isMobile, menuItems }: NavBar): JSX.Element => (
  <Menu isMobile={isMobile} menuItems={menuItems} />
)

export default NavBar
