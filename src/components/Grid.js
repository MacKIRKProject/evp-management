import { useScreens, x } from '@xstyled/styled-components'

export function Grid({ as = 'section', ...props }) {
  const breakpoints = useScreens()

  return (
    <x.div
      as={as}
      position="relative"
      display="grid"
      columnGap={4}
      w={1}
      maxWidth={breakpoints.grid}
      m="auto"
      gridTemplateColumns={{
        _: 'repeat(2, 1fr)',
        sm: 'repeat(8, 1fr)',
        lg: 'repeat(12, 1fr)',
      }}
      gridTemplateRows={{ sm: '1fr' }}
      {...props}
    />
  )
}
