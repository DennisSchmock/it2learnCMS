import styled from 'styled-components'

const Brand = styled.div`
  flex-direction: row;
  display: flex;
  min-height: 50px;
  justify-content: center;
  align-items: center;
`
interface BrandLogoProps {
  brandLogo?: string
}
const BrandLogo = styled.img<BrandLogoProps>`
  src: url(${({ brandLogo }) => brandLogo});
  height: 40px;
`

export default { Brand, BrandLogo }
