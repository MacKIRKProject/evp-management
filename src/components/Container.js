import { useScreens, x } from '@xstyled/styled-components'

export function Container({ children, as, ...props }) {
  return (
    <x.div as={as || 'section'} px={{ sm: 4, xs: 2 }} {...props}>
      {children}
    </x.div>
  )
}

export function UnGridContainer({ children, ...props }) {
  const breakpoints = useScreens()

  return (
    <x.div
      position="relative"
      zIndex={1}
      w={1}
      maxWidth={{
        lg: 960,
        lgGap: breakpoints.grid,
        xl: breakpoints.grid,
      }}
      px={{ sm: 2, lg: 0 }}
      m="auto"
      {...props}
    >
      {children}
    </x.div>
  )
}
