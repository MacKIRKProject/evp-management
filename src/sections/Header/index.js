import React from 'react'
import { Container, Grid, x } from '@components'

import { Menu } from './Menu'
import { Area } from '@components/Area'

export function Header() {
  return (
    <Container as="header" id="header" bg="white" color="white" h="fit-content">
      <Menu />
      <Grid pt="58px" border="1px solid red">
        <Area>
          <x.h1
            color="vertAntoineClair"
            textAlign="center"
            fontSize={{ _: '32px', sm: '40px', lg: '64px' }}
            m="auto"
            maxWidth="700px"
            mt={8}
          >
            EVP Management
          </x.h1>
          <x.p
            maxWidth="500px"
            fontSize={{ _: '16px', lg: '24px' }}
            color="dark"
            m="auto"
            mt={4}
            mb={9}
          >
            Nous vous accompagnons pour vos projets de la strategie à
            l'opérationnel
          </x.p>
        </Area>
      </Grid>
    </Container>
  )
}
