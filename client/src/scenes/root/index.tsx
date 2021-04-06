import React, { useEffect } from 'react'
import RootRoutes from '@/common/RootRoutes'
import { RenderRoutes } from '@/common/router'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Logo from '@/assets/images/logo.png'
import { useIsMobile } from '@/utils/hooks'
import NavBar from '@/components/Navbar/components/Navbar'
import { MenuOptions } from '@/components/Navbar/types/MenuTypes'
import Styled from './styled'

export type RootConfiguration = {
  configuration: {
    brand: string
    menu: MenuOptions
  }
}

const Root = ({ configuration }: RootConfiguration): JSX.Element => {
  const isMobile = useIsMobile()
  if (configuration?.brand === 'test') return <div />
  useEffect(() => {
    console.log(isMobile)
  }, [isMobile])
  return (
    <Styled.Container>
      <Header brand={Logo}>
        <NavBar
          isMobile={isMobile}
          menuItems={configuration?.menu.menuItems}
          numberOfItems={3}
        />
      </Header>
      <RenderRoutes routes={RootRoutes} />
      <Footer />
    </Styled.Container>
  )
}

export default Root
