import { useScreens } from '@xstyled/styled-components'
import { x } from '@components'

export function Container({ children, as, ...props }) {
  const breakpoints = useScreens()

  return (
    <x.div
      as={as || 'section'}
      maxWidth={{
        lg: 960,
        lgGap: breakpoints.grid,
        xl: breakpoints.grid,
      }}
      m="auto"
      {...props}
    >
      {children}
    </x.div>
  )
}
