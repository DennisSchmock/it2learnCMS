import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import theme from '@/theme'

export type MenuItemContainerProps = {
  position: Position
  selected?: boolean
  anchoredMenu?: boolean
}
export type Position = 'first' | 'middle' | 'last' | 'none'

const MenuItemContainer = styled.div<MenuItemContainerProps>`
  display: flex;
  width: 170px;
  overflow: hidden;
  border: solid 1px ${theme.colors.BORDER_COLOR_MENU};

  ${({ position }) => [
    position === 'first' &&
      css`
        border: solid 1px ${theme.colors.BORDER_COLOR_MENU};
        border-radius: 20px 0 0 0;
      `,
    position === 'middle' &&
      css`
        border: solid 1px ${theme.colors.BORDER_COLOR_MENU};
        border-left: none;
      `,
    position === 'last' &&
      css`
        border: solid 1px ${theme.colors.BORDER_COLOR_MENU};
        border-left: none;
      `,
  ]}
  ${({ anchoredMenu }) =>
    anchoredMenu && [
      css`
        border-bottom: none;
      `,
    ]}

    ${({ selected }) =>
    selected && [
      css`
        border-bottom: solid 3px ${theme.colors.TEXT_SECONDARY};
      `,
    ]}
`

const MenuItemLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  flex: 1;
  padding: 8px;
  color: ${theme.colors.TEXT_PRIMARY};
  transition: all ease-in 200ms;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
    background-color: ${theme.colors.MENU_ITEM_HOOVER};
  }
`

const MenuItemText = styled.div`
  font-family: 'Poppins';
  font-size: 14px;
  flex: 1;
  text-align: center;
`
export default { MenuItemContainer, MenuItemLink, MenuItemText }
