import React from 'react'
import Styled from './styled'

// Placeholder for Brand Component
interface BrandProps {
  image?: string
  text?: string
}
const Brand = ({ image, text }: BrandProps): JSX.Element => (
  <Styled.Brand>
    {image ? <Styled.BrandLogo src={image} /> : <div>{text}</div>}
  </Styled.Brand>
)

export default Brand
