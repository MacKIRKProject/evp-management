import { Area } from '@components/Area'
import { Container } from '@components/Container'
import { Grid } from '@components/Grid'
import { MainTitle } from '@components/MainTitle'

export function AboutUs() {
  return (
    <Container h="fit-content" id="scope" border="1px solid red">
      <Grid>
        <Area position="relative" mt={8}>
          <MainTitle title="Qui sommes nous ?" />
        </Area>
      </Grid>
    </Container>
  )
}
