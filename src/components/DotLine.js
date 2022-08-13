import styled, { x } from '@xstyled/styled-components'

export function DotLine({ children, ...props }) {
  return (
    <Container bottom={0} display={{ _: 'none', sm: 'block' }} {...props}>
      <Line mx="auto" />
      <Dot />
      {children}
    </Container>
  )
}

const Dot = styled(x.div)`
  z-index: 10;
  width: 0.75em;
  height: 0.75em;
  border-radius: 100%;
  background: white;
  border: 0.15em solid;
  border-color: vertAntoineClair;
  position: fixed;
  top: 48%;
  left: 98%;
  @media (min-width: sm) {
    left: 50%;
  }
  margin-left: -0.375em;
`

const Line = styled(x.div)`
  width: 0.15em;
  height: fill-available;
  background-color: vertAntoineClair;
`

const Container = styled(x.div)`
  clip: rect(0, auto, auto, 0);
  position: absolute;
  width: 1em;
  margin-left: -0.5em;
  @media (min-width: sm) {
    left: 50%;
  }
`
