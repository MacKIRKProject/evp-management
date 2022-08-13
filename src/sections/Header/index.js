import React from 'react'
import { Container, Grid, x } from '@components'
import styled, { css } from '@xstyled/styled-components'

import { Menu } from './Menu'
import { Area } from '@components/Area'

export function Header() {
  return (
    <Container
      as="header"
      id="header"
      color="white"
      h="fit-content"
      maxWidth="unset"
    >
      <Menu />
      <Grid pt="58px" bg="none" py={16}>
        <Area lg="auto / 1 / auto / 13">
          <x.h1
            color="vertAntoineClair"
            textAlign="center"
            fontSize={{ _: '40px', sm: '64px', lg: '72px' }}
            m="auto"
            mt={8}
          >
            EVP Management
          </x.h1>
          <x.p
            textAlign="center"
            fontSize={{ _: '16px', lg: '24px' }}
            color="dark"
            m="auto"
            mt={4}
            mb={9}
          >
            Nous vous accompagnons pour vos projets
          </x.p>
        </Area>
      </Grid>
    </Container>
  )
}
const ContainerStyled = styled(Container)`
  background-image: url('https://picsum.photos/2000/600');
`
