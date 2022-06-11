import React from 'react'
import { Area, Container, Grid, x } from '@components'

export function Competence() {
  return (
    <Container h={100} id="competence" border="1px solid red">
      <Grid>
        <Area>
          <x.h2>Stratégie</x.h2>
        </Area>
      </Grid>
    </Container>
  )
}
