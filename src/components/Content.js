import React from 'react'
import { useScreens, x } from '@xstyled/styled-components'

export function Content({ children, ...props }) {
  const breakpoints = useScreens()
  if (!children) return null

  return (
    <x.div
      maxWidth={breakpoints.lg}
      m="auto"
      px={{ _: 4, lg: 0, md: 10 }}
      {...props}
    >
      {children}
    </x.div>
  )
}
