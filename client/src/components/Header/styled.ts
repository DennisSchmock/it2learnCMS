import styled from 'styled-components'
import theme from '@/theme'

interface HeaderContainerProps {
  toggleHeaderHeight: boolean
  brandAlignment: string
}

const HeaderContainer = styled.div<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: ${({ toggleHeaderHeight }) =>
    toggleHeaderHeight
      ? theme.sizes.HEADER_FULL_HEIGHT
      : theme.sizes.HEADER_FOLDED_HEIGHT};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border-bottom: solid 1px white;
  background: ${theme.colors.HEADER_BACKGROUND};

  z-index: 1000;
  transition: all ${theme.animations.TRANSITION_HEADER};
`

export default { HeaderContainer }
