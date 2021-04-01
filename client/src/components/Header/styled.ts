import styled from 'styled-components'
import theme from '@/theme'

interface HeaderContainerProps {
  toggleHeaderHeight: boolean
  brandAlignment: string
}

const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  margin: 0 auto;
  height: ${theme.sizes.HEADER_FULL_HEIGHT};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border-bottom: solid 1px white;
  z-index: 1000;
  transition: all ${theme.animations.TRANSITION_HEADER};
`
const NavigationContainer = styled.div`
  height: 100%;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
`
export default { HeaderContainer, NavigationContainer }
