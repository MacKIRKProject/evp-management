import React from 'react'
import { x } from '@components'

export function MainTitle({ title, ...props }) {
  return (
    <x.h2
      fontSize={{ _: '32px', lg: '48px', sm: '40px' }}
      color="vertAntoine"
      mb={8}
      textAlign="center"
      {...props}
    >
      {title}
    </x.h2>
  )
}
