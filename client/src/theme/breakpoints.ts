interface BreakpointProps {
  [key: string]: string
}

export const breakpoints: BreakpointProps = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
  xl: '1400px',
}

export default { breakpoints }

// export const breakpoints = new Map([
//   ['xsMobile', '480px'],
//   ['smallMobile', '768px'],
//   ['desktop', '992px'],
//   ['lgDesktop', '1200px'],
// ])
