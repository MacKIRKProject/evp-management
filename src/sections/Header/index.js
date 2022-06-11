import { Container } from '@components/Container'
import React from 'react'

import { Menu } from './Menu'

export function Header() {
  return (
    <Container as="header" id="header" bg="white" color="white" h={1720}>
      <Menu />
    </Container>
  )
}
