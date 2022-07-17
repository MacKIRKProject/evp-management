import { forwardRef } from 'react'
import { x } from '@xstyled/styled-components'

function AreaWithRef({ children, _, sm, lg, ...props }, ref) {
  return (
    <x.div
      ref={ref}
      position="relative"
      zIndex={1}
      gridArea={{
        _: _ || 'auto / 1 / auto / 3',
        sm: sm || 'auto / 2 / auto / 8',
        lg: lg || 'auto / 2 / auto / 12',
      }}
      px={{ _: 4, lg: 0 }}
      {...props}
    >
      {children}
    </x.div>
  )
}

export const Area = forwardRef(AreaWithRef)
