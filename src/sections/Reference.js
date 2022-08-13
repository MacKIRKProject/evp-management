import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { Area, Container, DotLine, Grid, MainTitle, x } from '@components'
import styled, { css, useUp } from '@xstyled/styled-components'

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
  const upLg = useUp('lg')
  const dotsRef = useRef([])
  const contentRef = useRef([])
  const imageRef = useRef([])

  useEffect(() => {
    dotsRef.current.forEach((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const index = entry.target.id.split('-')[1]
          if (entry.isIntersecting) {
            contentRef.current[index].classList.add(
              'fadein-animation',
              `fadein-totop`,
            )
            imageRef.current[index].classList.add(
              'fadein-animation',
              `fadein-tobot`,
            )
          }
        },
        {
          threshold: 1,
        },
      )

      observer.observe(ref)
      return () => {
        observer.disconnect()
      }
    })
  }, [])

  useLayoutEffect(() => {
    if (contentRef?.current && upLg) {
      contentRef.current.forEach(ref => (ref.style.opacity = 0))
      imageRef.current.forEach(ref => (ref.style.opacity = 0))
    }
  }, [upLg])

  return (
    <ContainerStyled
      h="fit-content"
      pb={{ _: 0, sm: 8 }}
      bg="white"
      position="relative"
    >
      <Grid
        borderRadius="20px"
        rowGap={{ sm: '48px' }}
        display={{ _: 'flex', sm: 'grid' }}
        flexDirection="column"
        pb={8}
      >
        <Area position="relative" mt={8}>
          <MainTitle title="Nos projets" id="projects" />
        </Area>
        <DotLine h={{ _: '1241px', lg: '1515px' }} mt="120px" />
        {data.map(({ title, dots }, index) => (
          <>
            <x.div
              gridArea={{
                lg: getGrid('lg', index),
                sm: getGrid('sm', index),
              }}
              px={{ _: 4, sm: 0 }}
              pb={8}
              m="auto"
              ref={el => (contentRef.current[index] = el)}
            >
              <x.h3 fontSize={{ _: '16px', sm: '24px' }} color="vertAntoine">
                {title}
              </x.h3>
              <x.ul lineHeight="snug" pt={2}>
                {dots.map(item => (
                  <x.li fontSize="16px">- {item}</x.li>
                ))}
              </x.ul>
            </x.div>
            <x.div
              gridArea={{
                lg: getGrid('lg', index, true),
                sm: getGrid('sm', index, true),
              }}
            >
              {index === 0 && (
                <FirstImageDot display={{ _: 'none', sm: 'block' }} />
              )}
              <ImageDot
                display={{ _: 'none', sm: 'block' }}
                ref={el => (dotsRef.current[index] = el)}
                id={`project-${index}`}
              />
              <Img
                src="https://picsum.photos/350/200"
                w={{ sm: '200px', lg: 'unset' }}
                m="auto"
                borderRadius="5px"
                mb={{ _: 8, sm: 0 }}
                ref={el => (imageRef.current[index] = el)}
              />
            </x.div>
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

const FirstImageDot = styled(x.div)`
  position: absolute;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: vertAntoine;
  z-index: 1;
  margin-top: -48px;
  left: 50%;
  margin-left: -0.5em;
`
const ImageDot = styled(x.div)`
  position: absolute;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: vertAntoine;
  z-index: 1;
  margin-top: 172px;
  left: 50%;
  margin-left: -0.5em;
  @media (min-width: lg) {
    margin-top: 216px;
  }
`

const Img = styled(x.img)`
  box-shadow: 0px 0px 20px -15px #10444b;
`

const ContainerStyled = styled(Container)`
  box-shadow: 0 0 32px -32px #10444b;
  border-radius: 20px;
`
