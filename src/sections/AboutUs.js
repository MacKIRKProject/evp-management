import { Area, Container, Grid, MainTitle, x } from '@components'
import styled, { css } from '@xstyled/styled-components'

import Antoine from '@assets/antoine.jpeg'
export function AboutUs() {
  return (
    <ContainerStyled h="fit-content" id="about" mt={8}>
      <Grid pb={16} borderRadius="20px">
        <Area position="relative" mt={8}>
          <MainTitle title="Qui sommes nous ?" id="about" />
        </Area>
        <Area
          display="flex"
          alignItems="center"
          flexDirection={{ _: 'column', sm: 'row' }}
          sm="auto / 2 / auto / 9"
        >
          <Img src={Antoine} borderRadius="5px" mb={{ _: 8, sm: 0 }} />
          <x.div>
            <x.p lineHeight="snug" ml={6}>
              Après 10 ans d'expérience dans les domaines du conseil et de la
              gestion de projet, j'ai décidé de créer EV+ management pour
              apporter mes compétences et ma vision de la gestion de projet aux
              entreprises désireuses d'atteindre l'excellence.
            </x.p>
            <x.p lineHeight="snug" ml={6} mt={4}>
              J'aurai le plaisir de vous tenir informé de l'évolution de mon
              projet et de garantir toujours le même niveau de qualité dans mes
              interventions.
            </x.p>
          </x.div>
        </Area>
      </Grid>
    </ContainerStyled>
  )
}
const Img = styled(x.img)`
  box-shadow: 0px 0px 20px -15px #10444b;
`
const ContainerStyled = styled(Container)`
  box-shadow: 0 0 32px -32px #10444b;
  border-radius: 20px;
`
