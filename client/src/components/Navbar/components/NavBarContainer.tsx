import React from 'react'

interface NavBarConfig {
  isMobile: boolean
}

const NavBarContainer = ({ isMobile }: NavBarConfig): JSX.Element => (
  <div>Container {isMobile}</div>
)

export default NavBarContainer
