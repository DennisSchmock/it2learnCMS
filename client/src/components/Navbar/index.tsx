import React, { useEffect, useState } from 'react'
import Styled from './styled'

interface Links {
  name: string
  path: string
}

interface NavbarProps {
  brand?: string
  links?: Links[]
  children?: React.ReactNode
}

const Navbar = ({
  children,
  brand,
  links,
}: NavbarProps): JSX.Element => {
  const [toggleNavbarHeight, setToggleNavbarHeight] = useState(true)
  const [scrollPos, setScrollPos] = useState(0)
  const handleScroll = (): void => {
    setScrollPos(window.pageYOffset)
    setToggleNavbarHeight(window.pageYOffset < 20)
    console.log(scrollPos)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  console.log(brand, links)
  return (
    <Styled.NavbarContainer toggleNavbarHeight={toggleNavbarHeight}>
      {children}
    </Styled.NavbarContainer>
  )
}

export default Navbar
