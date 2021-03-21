import React from 'react'
import Styled from './styled'

interface ContentContainerProps {
  children?: React.ReactNode
}

const ContentContainer = ({
  children,
}: ContentContainerProps): JSX.Element => (
  <Styled.Container>{children}</Styled.Container>
)

export default ContentContainer
