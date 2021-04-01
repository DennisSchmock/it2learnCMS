import { Position } from '@/components/Navbar/components/MenuItem/styled'

const getPosition = (
  position: number,
  arrayLength: number,
): Position => {
  console.log(process.env)
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
