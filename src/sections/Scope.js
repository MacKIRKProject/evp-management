import React from 'react'
import { Area, Container, Grid, x } from '@components'
import styled from '@xstyled/styled-components'
const data = [
  {
    title: 'Strategie',
    dots: [
      'Définition et mise en place de KPI',
      'Gestion de la performance (EPM)',
      'Etudes stratégiques',
      'Audit',
      'Définission des macro-processus',
    ],
  },
  {
    title: 'Organisation',
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
  },
  {
    title: 'Opérationel',
    dots: [
      'Chefferie de projets / Programmes',
      'Planification',
      'Gestion des coûts',
      'Gestion des risques',
      'Gestion des plans de charge',
    ],
  },
]
export function Scope() {
  return (
    <Container h={1000} id="scope" border="1px solid red">
      <Grid>
        <Area position="relative">
          <Line></Line>
          <x.h2>Notre périmètre</x.h2>
        </Area>
      </Grid>
    </Container>
  )
}

const Line = styled(x.div)`
  position: absolute;
  width: 2px;
  height: 1000px;
  left: 50%;
  background: red;
  margin-top: 50px;
  :before {
    content: '';
    position: absolute;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: vertAntoine;
    border: 1px solid;
    border-color: vertAntoineClair;
    left: 50%;
    margin-left: -0.5em;
  }
`
