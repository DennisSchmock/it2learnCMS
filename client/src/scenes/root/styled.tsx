import styled from 'styled-components'
import theme from '@/theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  text-align: left;
  margin: 0 auto;
  height: 100vh;
  color: white;
  background: ${theme.colors.BACKGROUND_GRADIANT};
`

export default { Container }
