import { NavigationLinks } from '@/common/types'
import React from 'react'

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
}: HeaderProps): JSX.Element => (
  // todo: move to global state, when implemented

  <Styled.HeaderContainer brandAlignment={brandAlignment}>
    <Brand image={brand} text="test" />
    <Styled.NavigationContainer>
      {children}
    </Styled.NavigationContainer>
  </Styled.HeaderContainer>
)

export default Header
