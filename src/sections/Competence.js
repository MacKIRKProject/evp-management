import React, { useState } from 'react'
import { Area, Container, Grid, Svg, x } from '@components'
import Curve from '@assets/icons/curve.inline.svg'
import styled, { css } from '@xstyled/styled-components'

const data = [
  {
    description:
      "Outil de gestion de projet / portefeuille (EPPM) complet, leader du domaine (d'après Gartner), notamment grâce à sa capacité d'adaptation aux processus des entreprises clientes et l'exhaustivité des domaines abordés.",
    id: 1,
    name: 'Planisware',
  },
  {
    description:
      'Outil spécialiste de la planification, basé sur les normes PMI (Project Management Institute) permettant un paramétrage expert de la planification des projets avec de nombreuses options de calcul des délais, des marges, etc.',
    id: 2,
    name: 'Primavera',
  },
  {
    description:
      'Moins complet et adaptable que Planisware, mais plus réactif et accessible, Sciforma est considéré par Gardner comme un challenger du domaine. Sa fusion avec ONE2Team pourrait apporter son lot de fonctionnalités interessantes.',
    id: 3,
    name: 'Sciforma',
  },
]

export function Competence() {
  const [descri, setDescri] = useState(
    data.find(({ id }) => id === 1).description,
  )
  return (
    <Container h="fit-content" id="competence" mt={8}>
      <Grid as="div">
        <Area position="relative" mt={8}>
          <x.h2
            fontSize={{ _: '32px', lg: '48px', sm: '40px' }}
            color="vertAntoine"
            mb={8}
          >
            Nos Compétences
          </x.h2>
        </Area>
        <Area
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="fit-content"
          bg="white"
          zIndex={1}
        >
          <SubContainer>
            <BezierCurve left="50%" transform="scale(-1,1)" />
            <SubTitle
              onClick={() =>
                setDescri(data.find(({ id }) => id === 1).description)
              }
            >
              Primavera
            </SubTitle>
            <Line>
              <Dot />
            </Line>
          </SubContainer>
          <SubContainer>
            <Line>
              <Dot />
            </Line>
            <SubTitle
              onClick={() =>
                setDescri(data.find(({ id }) => id === 2).description)
              }
            >
              Planisware
            </SubTitle>
            <Line>
              <Dot />
            </Line>
          </SubContainer>
          <SubContainer>
            <BezierCurve left="-50%" />
            <SubTitle
              onClick={() =>
                setDescri(data.find(({ id }) => id === 3).description)
              }
            >
              Sciforma
            </SubTitle>
            <Line>
              <Dot />
            </Line>
          </SubContainer>
        </Area>
        <Area mt={16}>
          <x.p
            bg="vertAntoine"
            color="white"
            lineHeight="relaxed"
            borderRadius="21px"
            fontWeight="500"
          >
            {descri}
          </x.p>
        </Area>
      </Grid>
    </Container>
  )
}

const BezierCurve = ({ ...props }) => (
  <Svg
    asset={Curve}
    viewBox="74 23 410 217"
    width="100%"
    height="fit-content"
    stroke="vertAntoineClair"
    strokeWidth="0.20em"
    fill="transparent"
    position="absolute"
    top="0"
    {...props}
  />
)

const SubContainer = styled(x.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15%;
`
const SubTitle = styled(x.h3)`
  :hover {
    cursor: pointer;
  }
  z-index: 3;
  font-size: 16px;
  @media (min-width: sm) {
    font-size: 24px;
  }
  padding: 12px 16px;
  border-radius: 14px;
  color: white;
  background-color: vertAntoineClair;
`

const Dot = styled(x.div)`
  content: '';
  position: absolute;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: vertAntoine;
  left: 50%;
  margin-left: -8px;
  top: -3px;
  z-index: 1;
`
const Line = styled(x.div)`
  position: absolute;
  width: 0.15em;
  margin-left: -0.075em;
  height: fill-available;
  left: 98%;
  top: 0;
  @media (min-width: sm) {
    left: 50%;
  }
  background-color: vertAntoineClair;
`
