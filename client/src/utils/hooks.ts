import { useEffect, useLayoutEffect, useState } from 'react'

const useViewport = (): { width: number } => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return { width }
}

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false)
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth <= 900)
    }
    window.addEventListener('resize', updateSize)
    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])
  return isMobile
}
// eslint-disable-next-line import/prefer-default-export

export const MyComponent = (): boolean => {
  const { width } = useViewport()
  const breakpoint = 620
  console.log(width)
  return width < breakpoint
}

export { useViewport, useIsMobile }
