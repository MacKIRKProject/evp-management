import React from 'react'
import styled, { useScreens, x } from '@xstyled/styled-components'

export function Footer() {
  const { grid } = useScreens()
  return (
    <x.div
      maxWidth={grid}
      display="flex"
      flexDirection={{ _: 'column', lg: 'row' }}
      py={5}
      m="auto"
    >
      FOOTER
    </x.div>
  )
}
