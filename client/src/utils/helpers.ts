import { MenuItemPosition } from '@/components/Navbar/types/MenuItemTypes'

const getPosition = (
  arrayLength: number,
  position?: number,
): MenuItemPosition => {
  switch (position) {
    case 0:
      return 'first'
    case arrayLength - 1:
      return 'last'
    default:
      return 'middle'
  }
}

export default { getPosition }
