import { x } from '@xstyled/styled-components'

export function Container({ children, as, ...props }) {
  return (
    <x.div as={as || 'section'} px={{ sm: 4, xs: 2 }} {...props}>
      {children}
    </x.div>
  )
}
