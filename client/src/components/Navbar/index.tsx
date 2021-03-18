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
  const [showNavbar, setShowNavbar] = useState(true)
  const [scrollPos, setScrollPos] = useState(0)
  const handleScroll = (): void => {
    setScrollPos(window.pageYOffset)
    setShowNavbar(window.pageYOffset < 20)
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
    <Styled.NavbarContainer showNavbar={showNavbar}>
      {children}
    </Styled.NavbarContainer>
  )
}

export default Navbar
