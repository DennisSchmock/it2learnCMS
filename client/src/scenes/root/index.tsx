import React, { useEffect } from 'react'
import RootRoutes from '@/common/RootRoutes'
import { RenderRoutes } from '@/common/router'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Logo from '@/assets/images/logo.png'
import Menu from '@/components/Navbar'
import Helpers from '@/utils/helpers'
import MenuItem from '@/components/Navbar/components/MenuItem'
import { useIsMobile } from '@/utils/hooks'
import Styled from './styled'
import Config from '../../config.json'

interface RootProps {
  configuration?: {
    brandName: string
  }
}

const Root = ({ configuration }: RootProps): JSX.Element => {
  const isMobile = useIsMobile()
  console.log(configuration)
  useEffect(() => {
    console.log(isMobile)
  }, [isMobile])
  return (
    <Styled.Container>
      <Header brand={Logo}>
        <Menu>
          {Config.navigation.map((menuConfig, index) => {
            const position = Helpers.getPosition(
              index,
              Config.navigation.length,
            )
            const menuItem = { position, ...menuConfig }
            return (
              <MenuItem
                key={menuItem.title}
                navigation={menuItem}
                position={menuItem.position}
                anchoredMenu
              />
            )
          })}
        </Menu>
      </Header>
      <RenderRoutes routes={RootRoutes} />
      <Footer />
    </Styled.Container>
  )
}

export default Root
