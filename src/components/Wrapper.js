import React from 'react'
import { x } from '@xstyled/styled-components'

export function Wrapper({ children, ...props }) {
  if (!children) return null

  return (
    <x.div as={props.as || 'section'} position="relative" {...props}>
      {children}
    </x.div>
  )
}
