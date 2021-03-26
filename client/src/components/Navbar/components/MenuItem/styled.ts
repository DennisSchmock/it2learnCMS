import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '@/theme'

interface MenuItemContainerProps {
  positionProps: PositionProps
}
export interface PositionProps {
  groupedFirst?: boolean
  groupedMiddel?: boolean
  groupedLast?: boolean
}

const MenuItemContainer = styled.div<MenuItemContainerProps>`
  display: flex;
  width: 200px;
  overflow: hidden;
  ${({ positionProps }) => [
    positionProps?.groupedFirst &&
      css`
        border: solid 1px ${theme.colors.BORDER_COLOR_MENU};
        border-radius: 20px 0 0 0;
      `,
    positionProps?.groupedMiddel &&
      css`
        border-right: solid 1px ${theme.colors.BORDER_COLOR_MENU};
        border-top: solid 1px ${theme.colors.BORDER_COLOR_MENU};
        border-bottom: solid 1px ${theme.colors.BORDER_COLOR_MENU};
      `,
  ]}
`

const MenuItemLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  flex: 1;
  padding: 8px;
  color: ${theme.colors.TEXT_PRIMARY};
  transition: all ease-in 100ms;
  &:hover {
    transform: scale(1.1);
  }
`

const MenuItemText = styled.div`
  flex: 1;
  text-align: center;
`
export default { MenuItemContainer, MenuItemLink, MenuItemText }
