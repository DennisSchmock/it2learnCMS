import styled from 'styled-components'
import responsive from '@/utils/responsive'

const Container = styled.div`
  padding-top: 200px;
  text-align: left;
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
  background-color: gray;
  ${responsive.xl`
      background-color: aqua;
  `}
`

export default { Container }
