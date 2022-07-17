import React from 'react'
import { Area, Container, Grid, MainTitle, x } from '@components'
import styled, { css } from '@xstyled/styled-components'

const data = [
  {
    dots: [
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
    ],
    title: 'Projet',
  },
  {
    dots: [
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
    ],
    title: 'Projet',
  },
  {
    dots: [
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
    ],
    title: 'Projet',
  },
  {
    dots: [
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
    ],
    title: 'Projet',
  },
  {
    dots: [
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
    ],
    title: 'Projet',
  },
  {
    dots: [
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
      'Lorem ipsum lorem ipsum Lorem ipsum',
    ],
    title: 'Projet',
  },
]
export function Reference() {
  return (
    <ContainerStyled
      h="fit-content"
      id="reference"
      pb={{ _: 0, sm: 8 }}
      bg="white"
    >
      <Grid
        borderRadius="20px"
        rowGap={{ sm: '48px' }}
        display={{ _: 'flex', sm: 'grid' }}
        flexDirection="column"
        overflow="hidden"
        pb={8}
      >
        <Area position="relative" mt={8} gridRow="1 !important">
          <MainTitle title="Nos projets" />
        </Area>
        <Area
          gridRow="2 !important"
          mt="-12px"
          display={{ _: 'none', sm: 'block' }}
        >
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
              }}
              px={{ _: 4, lg: 0 }}
              pb={8}
              m="auto"
            >
              <x.h3 fontSize={{ _: '16px', sm: '24px' }} color="dark">
                {title}
              </x.h3>
              <x.ul lineHeight="snug" pt={2}>
                {dots.map(item => (
                  <x.li fontSize="16px">- {item}</x.li>
                ))}
              </x.ul>
            </Content>
            <Img
              src="https://picsum.photos/350/200"
              gridArea={{
                lg: getGrid('lg', index, true),
                sm: getGrid('sm', index, true),
              }}
              w={{ sm: '200px', lg: 'unset' }}
              m="auto"
              borderRadius="5px"
              mb={{ _: 8, sm: 0 }}
            />
            {index !== data.length - 1 && (
              <x.hr
                display={{ sm: 'none' }}
                gridArea={{
                  lg: getGrid('lg', index),
                  sm: getGrid('sm', index),
                }}
                w="27%"
                h="2px"
                bg="vertAntoine"
                mx="auto"
                mb={8}
              />
            )}
          </>
        ))}
      </Grid>
    </ContainerStyled>
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
  return `${(index + 1) * 2 + (image ? 1 : 0)} / 1 / ${
    (index + 1) * 2 + (image ? 1 : 0)
  } / 3`
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
  height: 5000px;
  left: 98%;
  @media (min-width: sm) {
    left: 50%;
  }
  background-color: vertAntoineClair;
`
const Content = styled(x.div)`
  @media (min-width: sm) {
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
      margin-top: -48px;
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
  }
`

const Img = styled(x.img)`
  box-shadow: 0px 0px 20px -15px #10444b;
`

const ContainerStyled = styled(Container)`
  box-shadow: 0 0 32px -32px #10444b;
  border-radius: 20px;
`
