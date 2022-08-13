import React from 'react'
import { Area, Container, Grid, MainTitle, Svg, x } from '@components'
import styled, { css } from '@xstyled/styled-components'
import Strategy from '@assets/icons/strategy.inline.svg'
import { useResponsive } from '@hooks/useResponsive'

const card1 = {
  dots: [
    'Définition et mise en place de KPI',
    'Gestion de la performance (EPM)',
    'Etudes stratégiques & Audit',
    'Définission des macro-processus',
  ],
  title: 'Strategie',
}
const card2 = {
  dots: [
    'Définition des processus (investissements, référentiels, gestion ...)',
    'Feuilles de route projet / feuilles de route SI',
    "Déploiement d'outil / PMO / PMP",
    "Accompagnement au choix d'outil / Benshmark / rédaction de cahier des charges",
  ],
  title: 'Organisation',
}
const card3 = {
  dots: [
    'Chefferie de projets / Programmes',
    'Planification',
    'Gestion des coûts / risques',
    'Gestion des risques',
  ],
  title: 'Opérationel',
}

export function Scope() {
  const [isDesktop] = useResponsive()
  const defautlSize = isDesktop ? 175 : 50

  return (
    <ContainerStyled h="fit-content" bg="white" pb={8}>
      <Grid>
        <Area position="relative" mt={8}>
          <MainTitle title="Notre périmètre" id="scope" />
          {/* <x.p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </x.p> */}
        </Area>

        <Area
          position="relative"
          mt={{ _: 0, lg: 8 }}
          p={0}
          sm="auto / 2 / auto / 9"
          lg="auto / 2 / auto / 13"
        >
          <Card key={1} direction="top" size={defautlSize} data={card1} />
          <Card
            key={2}
            id="card"
            direction="left"
            mt={{ _: 8, sm: 8, lg: '-26px' }}
            ml={{
              _: 0,
              sm: `118px`,
              lg: `219px`,
            }}
            size={defautlSize}
            data={card2}
          />
          <Card
            key={3}
            direction="left"
            mt={{ _: 8, sm: 8, lg: '-26px' }}
            ml={{
              _: 0,
              sm: `236px`,
              lg: `422px`,
            }}
            size={defautlSize}
            data={card3}
          />
        </Area>
      </Grid>
    </ContainerStyled>
  )
}
const Card = ({
  direction = 'top',
  size = 150,
  data: { title, dots },
  ...props
}) => {
  return (
    <x.div
      display="flex"
      alignItems={{ _: 'left', sm: 'top', lg: 'unset' }}
      flexDirection={{ _: 'column', sm: 'row' }}
      ml={{ _: 0, lg: 4 }}
      px={{ _: 4, sm: 0 }}
      position="relative"
      justifyContent={{ _: 'center', sm: 'unset' }}
      {...props}
    >
      <SvgContainer
        $direction={direction}
        $size={size}
        mt={{ _: 0, lg: 4 }}
        w={`${size}px`}
        h={`${size}px`}
        borderRadius="50%"
        borderWidth={{ _: 0, lg: `${size / 15}px` }}
        borderColor="vertAntoine"
      >
        <Svg
          asset={Strategy}
          viewBox="0 0 450 511.99"
          stroke="vertAntoineClair"
          strokeWidth="15px"
          fill="transparent"
          size={{ _: 50, lg: 125 }}
          top="0"
        />
      </SvgContainer>
      <x.div pt={{ _: 4, sm: '10px', lg: '21px' }} ml={{ lg: '-44px' }}>
        <x.h3 fontSize="23px" fontWeight="600" color="vertAntoine">
          {title}
        </x.h3>
        <x.ul mt={2} lineHeight="snug">
          {dots.map(text => (
            <x.li fontSize="16px">- {text}</x.li>
          ))}
        </x.ul>
      </x.div>
    </x.div>
  )
}

const SvgContainer = styled(x.div)`
  position: absolute;
  right: 16px;
  top: -5px;
  @media (min-width: sm) {
    position: absolute;
    left: -64px;
    top: 0;
  }
  @media (min-width: lg) {
    position: relative;
    box-shadow: inset 0 0 2px #10444b, 0 0 2px #10444b;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:before {
    content: '';

    position: absolute;
    background-color: vertAntoine;
    top: -999;
    @media (min-width: lg) {
      ${({ $direction, $size }) => css`
        top: ${$direction === 'top' ? `-179px` : '-11px'};
        left: ${$direction === 'top' ? '-11px' : `-126px`};
        width: ${$direction === 'top'
          ? `${Math.trunc($size / 15)}px`
          : `206px`};
        height: ${$direction === 'top' ? `259px` : `10px`};
      `}
    }
  }
`

const ContainerStyled = styled(Container)`
  box-shadow: 0 0 32px -32px #10444b;
  border-radius: 20px;
`
