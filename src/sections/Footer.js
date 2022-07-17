import React from 'react'
import styled, { useScreens, x } from '@xstyled/styled-components'

export function Footer() {
  const { grid } = useScreens()
  return (
    <x.div
      maxWidth={grid}
      py={5}
      m="auto"
      color="grey"
      textAlign="center"
      w="100%"
      fontSize="12px"
    >
      © 2022 – EVP Management
    </x.div>
  )
}
