import React from 'react'
import { Area, Container, Grid, x } from '@components'
import styled, { css } from '@xstyled/styled-components'
const data = [
  {
    dots: [
      'Définition et mise en place de KPI',
      'Gestion de la performance (EPM)',
      'Etudes stratégiques',
      'Audit',
      'Définission des macro-processus',
    ],
    title: 'Strategie',
  },
  {
    dots: [
      'Définition des processus (pilotage des investissements / gestion des référentiels / gestion de configuration / gestion documentaire...)',
      'Feuilles de route projet / feuilles de route SI',
      'PMP',
      'Paramétrage / admin des outils ',
      "Déploiement d'outil",
      'PMO',
      "Accompagnement au choix d'outil / Benshmark / rédaction de cahier des charges",
      'Rédaction de documents organisationnels (IG...)',
    ],
    title: 'Organisation',
  },
  {
    dots: [
      'Chefferie de projets / Programmes',
      'Planification',
      'Gestion des coûts',
      'Gestion des risques',
      'Gestion des plans de charge',
    ],
    title: 'Opérationel',
  },
]
export function Scope() {
  return (
    <Container h="fit-content" id="scope" pb={8} bg="white">
      <Grid as="div" rowGap="48px" overflow="hidden" pb={8}>
        <Area position="relative" mt={8}>
          <x.h2
            fontSize={{ _: '32px', lg: '48px', sm: '40px' }}
            color="vertAntoine"
            mb={8}
          >
            Notre périmètre
          </x.h2>
        </Area>
        <Area gridRow="2 !important" mt="-12px">
          <Line>
            <Dot />
          </Line>
        </Area>

        {data.map(({ title, dots }, index) => (
          <>
            <Content
              gridArea={{
                lg: getGrid('lg', index),
                sm: getGrid('sm', index),
                _: getGrid('_', index),
              }}
              px={{ _: 4, lg: 0 }}
              pb={8}
            >
              <x.h3 fontSize={{ _: '16px', sm: '24px' }} color="dark">
                {title}
              </x.h3>
              <ul>
                {dots.map(item => (
                  <x.li fontSize="16px">{item}</x.li>
                ))}
              </ul>
            </Content>
            <x.img
              display={{ _: 'none', sm: 'block' }}
              src="https://picsum.photos/200/200"
              gridArea={{
                lg: getGrid('lg', index, true),
                sm: getGrid('sm', index, true),
              }}
              px={{ _: 4, sm: 0 }}
              m="auto"
            />
          </>
        ))}
      </Grid>
    </Container>
  )
}
const getGrid = (breakpoint, index, image = false) => {
  const row = index + 2
  if (breakpoint === 'lg')
    return (index + (image ? 1 : 0)) % 2
      ? `${row} / 8 / ${row} / 12`
      : `${row} / 2 / ${row} / 6`
  if (breakpoint === 'sm')
    return (index + (image ? 1 : 0)) % 2
      ? `${row} / 5 / ${row} / 9`
      : `${row} / 1 / ${row} / 5`
  return `${row} / 1 / ${row} / 3`
}
const Dot = styled(x.div)`
  z-index: 1;
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
  position: absolute;
  width: 0.15em;
  margin-left: -0.075em;
  height: 888px;
  left: 98%;
  @media (min-width: sm) {
    left: 50%;
  }
  background-color: vertAntoineClair;
`
const Content = styled(x.div)`
  :before {
    content: '';
    position: absolute;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: vertAntoine;
    left: 50%;
    margin-left: -8px;
    z-index: 1;
    margin-top: -25px;
  }

  &:last-of-type:after {
    content: '';
    position: absolute;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: vertAntoine;
    left: 50%;
    bottom: 0px;
    margin-left: -8px;
    z-index: 1;
    margin-top: -25px;
  }
`
