import styled from 'styled-components'
import theme from '@/theme'

const Container = styled.div`
  padding-top: ${theme.sizes.NAVBAR_FULL_HEIGHT};
  text-align: left;
  margin: 0 auto;
  min-height: 100vh;
  color: white;
  background: ${theme.colors.BACKGROUND_GRADIANT};
`

export default { Container }
