import styled from 'styled-components'
import responsive, { BreakPoints } from '@/utils/responsive'
import theme from '@/theme'

const Container = styled.div`
  text-align: left;
  margin: 0 auto;
  min-height: 100vh;
  color: white;
  z-index: -1;
  padding: ${theme.sizes.MARGINS};
  ${responsive.xl`background-color: black;`}
  ${BreakPoints('padding', 'px', theme.sizes.MARGINS)}
`

export default { Container }
