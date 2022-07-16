import React, { useEffect, useState } from 'react'
import { Area, Container, Grid, Svg, MainTitle, x } from '@components'
import Curve from '@assets/icons/curve.inline.svg'
import styled, { css } from '@xstyled/styled-components'

const data = [
  {
    description:
      "Outil de gestion de projet / portefeuille (EPPM) complet, leader du domaine (d'après Gartner), notamment grâce à sa capacité d'adaptation aux processus des entreprises clientes et l'exhaustivité des domaines abordés.",
    id: 0,
    name: 'Planisware',
  },
  {
    description:
      'Outil spécialiste de la planification, basé sur les normes PMI (Project Management Institute) permettant un paramétrage expert de la planification des projets avec de nombreuses options de calcul des délais, des marges, etc.',
    id: 1,
    name: 'Primavera',
  },
  {
    description:
      'Moins complet et adaptable que Planisware, mais plus réactif et accessible, Sciforma est considéré par Gardner comme un challenger du domaine. Sa fusion avec ONE2Team pourrait apporter son lot de fonctionnalités interessantes.',
    id: 2,
    name: 'Sciforma',
  },
]

export function Competence() {
  const [descri, setDescri] = useState(
    data.find(({ id }) => id === 1).description,
  )
  const [active, setActive] = useState(0)
  useEffect(() => {
    setDescri(data.find(({ id }) => id === active).description)
  }, [active])

  return (
    <Container h="750px" id="competence" my={8} bg="white">
      <Grid as="div">
        <Area position="relative" mt={8}>
          <MainTitle title="Nos Compétences" />
        </Area>
        <Area
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          w="100%"
          h="fit-content"
          bg="white"
          zIndex={1}
        >
          <x.div
            display="flex"
            justifyContent="space-between"
            w="100%"
            h="fit-content"
            bg="white"
            zIndex={1}
          >
            <SubContainer>
              <BezierCurve left="49%" transform="scale(-1,1)" />
              <SubTitle onClick={() => setActive(0)}>
                Primavera
                <Branch display={active === 0 ? 'block' : 'none'} />
              </SubTitle>
            </SubContainer>
            <SubContainer>
              <Line bottom={0} h="fill-available">
                <Dot top="-5px" />
              </Line>
              <SubTitle onClick={() => setActive(1)}>
                Planisware
                <Branch display={active === 1 ? 'block' : 'none'} />
              </SubTitle>
            </SubContainer>
            <SubContainer>
              <BezierCurve left="-49%" />
              <SubTitle onClick={() => setActive(2)}>
                Sciforma
                <Branch display={active === 2 ? 'block' : 'none'} />
              </SubTitle>
            </SubContainer>
          </x.div>
          <x.div
            bg="vertAntoine"
            borderRadius="21px"
            px={6}
            mx={-6}
            py={8}
            mt="66px"
            zIndex={0}
          >
            <x.p color="white" lineHeight="relaxed" fontWeight="500">
              {descri}
            </x.p>
          </x.div>
          <x.div
            display="flex"
            justifyContent="space-between"
            w="100%"
            h="fit-content"
            bg="white"
            zIndex={-1}
            mt="-14px"
          >
            <SubContainer>
              <BezierCurve left="49%" transform="scale(-1,-1)" />
            </SubContainer>
            <SubContainer>
              <Line bottom="-19px" h="134px">
                <Dot bottom="-7px" />
              </Line>
            </SubContainer>
            <SubContainer>
              <BezierCurve left="-49%" transform="scale(1,-1)" />
            </SubContainer>
          </x.div>
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
    strokeWidth="0.30em"
    fill="transparent"
    position="absolute"
    top="0"
    {...props}
  />
)

const Branch = props => <BranchStyled {...props} />

const SubContainer = styled(x.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15%;
`
const SubTitle = styled(x.h3)`
  position: relative;
  :hover {
    cursor: pointer;
  }
  z-index: 3;
  font-size: 16px;
  @media (min-width: sm) {
    font-size: 24px;
  }
  padding: 12px 16px;
  border-radius: 7px;
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
  z-index: 1;
`
const Line = styled(x.div)`
  position: absolute;
  width: 0.22em;
  margin-left: -0.11em;
  left: 50%;
  @media (min-width: sm) {
    left: 50%;
  }
  background-color: vertAntoineClair;
`

const BranchStyled = styled(x.div)`
  position: absolute;
  top: 50px;
  left: 50%;
  width: 100%;
  height: 60px;
  &:after {
    content: '';
    position: absolute;
    width: 0.15em;
    margin-left: -0.075em;
    height: fill-available;
    background-color: vertAntoineClair;
  }
  &:before {
    content: '';
    position: absolute;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: vertAntoineClair;
    border: 4px solid white;
    margin-left: -0.5em;
    bottom: -20px;
  }
`
