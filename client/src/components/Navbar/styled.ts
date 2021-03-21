import styled from 'styled-components'
import theme from '@/theme'

interface NavbarContainerProps {
  toggleNavbarHeight: boolean
}

const NavbarContainer = styled.div<NavbarContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: ${({ toggleNavbarHeight }) =>
    toggleNavbarHeight
      ? theme.sizes.NAVBAR_FULL_HEIGHT
      : theme.sizes.NAVBAR_FOLDED_HEIGHT};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-weight: bolder;
  border-bottom: solid 1px white;
  background: ${theme.colors.HEADER_BACKGROUND_TRANSPARENT};
  backdrop-filter: blur(2px);

  z-index: 1000;
  transition: all ${theme.animations.TRANSITION_HEADER};
`

export default { NavbarContainer }
