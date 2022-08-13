import React, { useEffect, useRef, useState } from 'react'
import { Area, Container, Grid, Svg, MainTitle, x } from '@components'
import Curve from '@assets/icons/curve.inline.svg'
import styled, { css } from '@xstyled/styled-components'
import PrimaveraLogo from '@assets/oracle-primavera-logo-1.png'
import PlaniswareLogo from '@assets/planisware_logo_new-1.webp'
import SCIFormaLogo from '@assets/Logo_Sciforma.png'

const data = [
  {
    logo: PlaniswareLogo,
    description:
      "Outil de gestion de projet / portefeuille (EPPM) complet, leader du domaine (d'après Gartner), notamment grâce à sa capacité d'adaptation aux processus des entreprises clientes et l'exhaustivité des domaines abordés.",
    id: 0,
    name: 'Planisware',
  },
  {
    logo: PrimaveraLogo,
    description:
      'Outil spécialiste de la planification, basé sur les normes PMI (Project Management Institute) permettant un paramétrage expert de la planification des projets avec de nombreuses options de calcul des délais, des marges, etc.',
    id: 1,
    name: 'Primavera',
  },
  {
    logo: SCIFormaLogo,
    description:
      'Moins complet et adaptable que Planisware, mais plus réactif et accessible, Sciforma est considéré par Gardner comme un challenger du domaine. Sa fusion avec ONE2Team pourrait apporter son lot de fonctionnalités interessantes.',
    id: 2,
    name: 'Sciforma',
  },
]

export function Competence() {
  const [descri, setDescri] = useState(
    data.find(({ id }) => id === 0).description,
  )
  const [active, setActive] = useState(0)
  useEffect(() => {
    setDescri(data.find(({ id }) => id === active).description)
  }, [active])

  return (
    <ContainerStyled
      h="fit-content"
      id="competence"
      my={8}
      bg="white"
      pb={{ _: 0, sm: 16 }}
    >
      <Grid borderRadius="20px">
        <Area position="relative" my={8}>
          <MainTitle title="Nos Compétences" id="skills" />
          <x.p lineHeight="snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </x.p>
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
                Planisware
                <Branch display={active === 0 ? 'block' : 'none'}>
                  <x.img
                    display={{ _: 'none', sm: 'block' }}
                    width="100px"
                    position="absolute"
                    top="16px"
                    left="-115px"
                    src={data.find(({ id }) => id === active).logo}
                  />
                </Branch>
              </SubTitle>
            </SubContainer>
            <SubContainer>
              <Line
                bottom={0}
                h={{ _: 150, lg: 179 }}
                display={{ _: 'none', lg: 'block' }}
              >
                <Dot top="-5px" />
              </Line>
              <SubTitle onClick={() => setActive(1)}>
                Primavera
                <Branch display={active === 1 ? 'block' : 'none'}>
                  <x.img
                    display={{ _: 'none', sm: 'block' }}
                    width="100px"
                    position="absolute"
                    top="16px"
                    left="-115px"
                    src={data.find(({ id }) => id === active).logo}
                  />
                </Branch>
              </SubTitle>
            </SubContainer>
            <SubContainer>
              <BezierCurve left="-49%" />
              <SubTitle onClick={() => setActive(2)}>
                Sciforma
                <Branch display={active === 2 ? 'block' : 'none'}>
                  <x.img
                    display={{ _: 'none', sm: 'block' }}
                    width="100px"
                    position="absolute"
                    top="16px"
                    left="-115px"
                    src={data.find(({ id }) => id === active).logo}
                  />
                </Branch>
              </SubTitle>
            </SubContainer>
          </x.div>
          <x.div
            bg="vertAntoine"
            borderRadius="21px"
            px={{ _: '24px', sm: 6 }}
            mx={{ _: -2, sm: -6 }}
            py={{ _: 4, sm: 8 }}
            mt={{ _: '40px', sm: '66px' }}
            zIndex={0}
            position="relative"
            mb={{ _: 16, sm: 0 }}
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
              <Line
                bottom="-19px"
                h="134px"
                display={{ _: 'none', lg: 'block' }}
              >
                <Dot bottom="-7px" />
              </Line>
            </SubContainer>
            <SubContainer>
              <BezierCurve left="-49%" transform="scale(1,-1)" />
            </SubContainer>
          </x.div>
        </Area>
      </Grid>
    </ContainerStyled>
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
    display={{ _: 'none', lg: 'block' }}
    {...props}
  />
)

const Branch = props => <BranchStyled {...props} />

const SubContainer = styled(x.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: sm) {
    padding-top: 15%;
  }
`
const SubTitle = styled(x.h3)`
  box-shadow: 0 0 2px #118796;
  position: relative;
  :hover {
    cursor: pointer;
  }
  z-index: 3;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 6px;

  @media (min-width: sm) {
    font-size: 20px;
    font-weight: 500;
    padding: 6px 8px;
  }

  @media (min-width: lg) {
    padding: 12px 16px;
  }
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
  width: 0.1em;
  margin-left: -0.05em;
  left: 50%;

  /* @media (min-width: sm) {
    width: 0.1em;
    margin-left: -0.05em;
    left: 50%;
  } */

  @media (min-width: sm) {
    width: 0.22em;
    margin-left: -0.11em;
    left: 50%;
  }
  background-color: vertAntoineClair;
`

const BranchStyled = styled(x.div)`
  position: absolute;

  top: 30px;
  left: 50%;
  width: 100%;
  height: 38px;
  @media (min-width: sm) {
    height: 60px;
    top: 35px;
  }
  @media (min-width: lg) {
    height: 60px;
    top: 46px;
  }
  &:after {
    content: '';
    position: absolute;
    width: 0.15em;
    margin-left: -0.075em;
    height: inherit;
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
    bottom: -11px;
    @media (min-width: sm) {
      bottom: -16px;
    }
    @media (min-width: lg) {
      bottom: -16px;
    }
  }
`
const ContainerStyled = styled(Container)`
  box-shadow: 0 0 32px -32px #10444b;
  border-radius: 20px;
`
