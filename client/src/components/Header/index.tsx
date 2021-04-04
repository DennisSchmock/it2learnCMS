import { NavigationLinks } from '@/common/types'
import React, { useEffect, useState } from 'react'

import Brand from '../Brand'
import Styled from './styled'

export interface HeaderProps {
  brand?: string
  brandAlignment?: 'left' | 'center' | 'right'
  links?: NavigationLinks[]
  children?: React.ReactNode
}

const Header = ({
  children,
  brand,
  brandAlignment = 'left',
}: HeaderProps): JSX.Element => {
  // todo: move to global state, when implemented
  const [toggleNavbarHeight, setToggleNavbarHeight] = useState(
    window.pageYOffset < 20,
  )
  const handleScroll = (): void => {
    setToggleNavbarHeight(window.pageYOffset < 20)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <Styled.HeaderContainer
      brandAlignment={brandAlignment}
      toggleHeaderHeight={toggleNavbarHeight}
    >
      <Brand image={brand} text="test" />
      <Styled.NavigationContainer>
        {children}
      </Styled.NavigationContainer>
    </Styled.HeaderContainer>
  )
}

export default Header
