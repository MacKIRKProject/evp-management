import React from 'react'
import styled, { css, up, useDown, useUp, x } from '@xstyled/styled-components'

import { StaticImage } from 'gatsby-plugin-image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import theme from 'theme'

import {
  Content,
  Heading,
  ShapesContainer,
  Text,
  Wrapper,
  shapesGradient,
} from 'components'
import { useLocale } from 'contexts'
import { Menu } from './Menu'

const clipPaths = [
  css`
    background-color: ${theme.colors.secondary};
    clip-path: polygon(38% 58%, 0 52%, 0 65%);
  `,
  css`
    ${shapesGradient}
    animation: lava;
    clip-path: polygon(38% 58%, 100% 68%, 100% 100%, 0 100%, 0 64%);
  `,
]

export function Header() {
  const { gettext } = useLocale()

  return (
    <ParallaxProvider>
      <Wrapper as="header" id="header" bg="primary" color="secondary" h={1720}>
        <Keyvisual />
        <ShapesContainer
          pt={0}
          clipPaths={clipPaths}
          shapesHeight={1720}
          position="unset"
        >
          <Menu />
          <HeaderShape>
            <Content
              as="div"
              position="relative"
              pt={{ _: 28, lg: 44, md: 36 }}
            >
              <Heading
                isDark
                as="h1"
                size="large"
                dangerouslySetInnerHTML={{
                  __html: gettext('header.title'),
                }}
              />
              <Heading
                as="p"
                isDark
                size="tiny"
                maxWidth={776}
                pt={{ _: 8, lg: 12, md: 8 }}
                dangerouslySetInnerHTML={{
                  __html: gettext('header.subtitle'),
                }}
              />
            </Content>
          </HeaderShape>
          <Content position="relative">
            <x.div pt={{ _: 28, lg: 44, md: 36 }} position="relative">
              <Text
                color="secondary"
                maxWidth={{ _: 1, md: 760, sm: 420 }}
                position="absolute"
                bottom={{ _: -1410, lg: -1076, md: -1176, sm: -1360 }}
                dangerouslySetInnerHTML={{
                  __html: gettext('header.description'),
                }}
              />
            </x.div>
          </Content>
        </ShapesContainer>
      </Wrapper>
    </ParallaxProvider>
  )
}

function Keyvisual() {
  const downSm = useDown('sm')
  const downLg = useDown('lg')
  const upSm = useUp('sm')
  const upLg = useUp('lg')

  return (
    <Images>
      {downSm && (
        <StaticImage
          src="./images/kv-mobile.jpg"
          alt=""
          width={640}
          layout="fixed"
        />
      )}
      {upSm && downLg && (
        <StaticImage
          src="./images/kv-tablet.jpg"
          alt=""
          width={1024}
          layout="fixed"
        />
      )}
      {upLg && (
        <ParallaxContainer>
          <Servers>
            <Parallax y={[-50, 50]}>
              <StaticImage
                src="./images/kv.jpg"
                alt=""
                width={1440}
                layout="fixed"
              />
            </Parallax>
          </Servers>
          <Dots>
            <Parallax y={[20, -20]}>
              <StaticImage
                src="./images/dots.png"
                alt=""
                width={1440}
                layout="fixed"
              />
            </Parallax>
          </Dots>
        </ParallaxContainer>
      )}
    </Images>
  )
}

const commonShapeContainer = css`
  overflow: hidden;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 100% 0%, 100% 68%, 0 51.9%);
  height: 1720px;
  ${up('md', `height: 1720px;`)}
  ${up('lg', `height: 1720px;`)}
`

const HeaderShape = styled(x.div)`
  ${commonShapeContainer}
  > div {
    position: fixed;
    top: 0;
    z-index: 0;
    width: 100%;
    height: inherit;
    left: 0;
    right: 0;
  }
`

const ParallaxContainer = styled.div`
  position: relative;
`
const Servers = styled.div`
  position: absolute;
`
const Dots = styled.div`
  position: absolute;
`

const Images = styled.div`
  ${commonShapeContainer}
  > div {
    display: flex;
    justify-content: center;
    z-index: 0;
    width: 100%;
    height: inherit;
    position: absolute;
    left: 0;
    top: -256px;
    ${up('sm', `top: -180px;`)}
    ${up('lg', `top: 0;`)}
  }
`
