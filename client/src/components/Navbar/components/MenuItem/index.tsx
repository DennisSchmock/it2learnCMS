import React from 'react'
import Styled, { PositionProps } from './styled'

export interface MenuItemProps {
  name: string
  path: string
  icon?: string
  groupedFirst?: boolean
  groupedMiddel?: boolean
  groupedLast?: boolean
}

const MenuItem = ({
  name,
  path,
  icon,
  ...props
}: MenuItemProps): JSX.Element => {
  console.log(icon)
  return (
    <Styled.MenuItemContainer positionProps={props}>
      <Styled.MenuItemLink to={path}>
        <Styled.MenuItemText>{name}</Styled.MenuItemText>
      </Styled.MenuItemLink>
    </Styled.MenuItemContainer>
  )
}

export default MenuItem
