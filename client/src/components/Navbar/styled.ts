import styled from 'styled-components'
import theme from '@/theme'

interface NavbarContainerProps {
  showNavbar: boolean
}

const NavbarContainer = styled.div<NavbarContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: ${({ showNavbar }) => (showNavbar ? '150px' : '50px')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-weight: bolder;
  background: ${theme.colors.BACKGROUND_PRIMARY};
  z-index: 1000;
  transition: all ${theme.animations.TRANSITION_HEADER};
`

export default { NavbarContainer }
