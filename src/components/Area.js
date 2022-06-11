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
        sm: sm || 'auto / 1 / auto / 9',
        lg: lg || 'auto / 1 / auto / 13',
      }}
      {...props}
    >
      {children}
    </x.div>
  )
}

export const Area = forwardRef(AreaWithRef)
