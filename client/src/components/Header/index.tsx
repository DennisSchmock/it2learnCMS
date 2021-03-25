import React, { useEffect, useState } from 'react'
import Brand from '../Brand'
import Styled from './styled'

interface Links {
  name: string
  path: string
}

interface HeaderProps {
  brand?: string
  brandAlignment?: 'left' | 'center' | 'right'
  links?: Links[]
  children?: React.ReactNode
}

const Header = ({
  children,
  brand,
  links,
  brandAlignment = 'left',
}: HeaderProps): JSX.Element => {
  console.log(`scroll offset: ${window.scrollY}`)
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

  console.log(brand, links)
  console.log(toggleNavbarHeight)
  return (
    <Styled.HeaderContainer
      brandAlignment={brandAlignment}
      toggleHeaderHeight={toggleNavbarHeight}
    >
      <Brand image={brand} text="test" />
      {children}
    </Styled.HeaderContainer>
  )
}

export default Header
