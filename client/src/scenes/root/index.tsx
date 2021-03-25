import RootRoutes from '@/common/RootRoutes'
import { RenderRoutes } from '@/common/router'
import ContentContainer from '@/components/ContentContainer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import Logo from '@/assets/images/logo.png'

interface RootProps {
  configuration?: {
    brandName: string
  }
}

const Root = ({ configuration }: RootProps): JSX.Element => {
  console.log(configuration)
  return (
    <>
      <Header brand={Logo} />
      <ContentContainer>
        <RenderRoutes routes={RootRoutes} />
      </ContentContainer>
      <Footer />
    </>
  )
}

export default Root
