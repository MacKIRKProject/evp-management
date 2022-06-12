import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { throttle } from 'throttle-debounce'
import FocusTrap from 'focus-trap-react'
import styled, {
  css,
  down,
  up,
  useUp,
  useViewportWidth,
} from '@xstyled/styled-components'
import theme from 'theme'
import { x } from '@components'
import { slugify } from 'helpers'

import Logo from 'assets/logo.png'
import { useScreens } from '../../../node_modules/@xstyled/styled-components/dist/index'

export const hrefs = [
  'Notre Périmètre',
  'Nos Compétences',
  'Nos Projets',
  'Nous Contacter',
]

export function Hrefs({ ...props }) {
  return (
    <>
      {hrefs.map((href, index) => {
        return (
          <x.li key={index} {...props}>
            <x.a
              href={`#${slugify(href)}`}
              fontSize="default"
              fontVariant="all-petite-caps"
              px={8}
              py={2}
              fontWeight={600}
              letterSpacing={{ _: '1px', lg: '0px' }}
              outlineOffset={{ focus: 0 }}
              textDecoration={{
                _: 'none',
                lg: {
                  hoverfocus: 'underline #118796',
                },
              }}
              textDecorationThickness={{
                _: 'none',
                lg: { hoverfocus: '0.5px' },
              }}
              textUnderlineOffset={{ _: 'none', lg: { hoverfocus: '0.5px' } }}
              outlineColor="#cbcbcb"
              color={{ _: 'white', lg: 'vertAntoine' }}
            >
              {href}
            </x.a>
          </x.li>
        )
      })}
    </>
  )
}

export function Menu() {
  const { grid } = useScreens()
  const [scrollPaused, disableScroll] = useState(false)
  const [opened, open] = useState(false)
  const [renderModale, setRenderModale] = useState(false)
  const [shouldDisplay, setShouldDisplay] = useState(true)
  const previousScrollTop = useRef()
  const upLg = useUp('lg')
  const viewportWidth = useViewportWidth()

  const close = useCallback(() => {
    open(false)
    disableScroll(false)
  }, [open])

  const toggle = useCallback(() => {
    disableScroll(!opened)
    open(!opened)
  }, [open, opened])

  const display = useMemo(
    () =>
      throttle(100, ({ target }) => {
        if (upLg) return
        setShouldDisplay(
          target.documentElement.scrollTop < 50 ||
            target.documentElement.scrollTop <= previousScrollTop.current,
        )
        previousScrollTop.current = target.documentElement.scrollTop
      }),
    [setShouldDisplay, upLg],
  )

  const onScroll = useCallback(display, [display])

  useEffect(() => {
    close()
  }, [viewportWidth, close])

  useEffect(() => {
    if (opened) {
      setTimeout(() => setRenderModale(true), 0)
    } else {
      setRenderModale(false)
    }
  }, [opened])

  useEffect(() => {
    if (globalThis)
      globalThis.document.body.style.overflow = scrollPaused
        ? 'hidden'
        : 'initial'
  }, [scrollPaused])

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  useEffect(() => {
    setTimeout(
      () => setShouldDisplay(window.document.scrollingElement.scrollTop < 50),
      500,
    )
  }, [])

  return (
    <Navbar
      as="nav"
      $shouldDisplay={shouldDisplay}
      position="fixed"
      top={0}
      h="58px"
      bg="white"
    >
      <x.div
        display="flex"
        flex="1"
        flexDirection="row"
        justifyContent="right"
        alignItems="center"
        px={{ _: 4, lg: 0, md: 10 }}
        py={{ _: 2, lg: 1 }}
        position="relative"
        maxWidth={grid}
      >
        <x.a
          href="/"
          textDecoration="none"
          display="flex"
          alignItems="center"
          position="absolute"
          left="5px"
        >
          <x.img
            src={Logo}
            height="40px"
            viewBox="0 0 10656 13434"
            color="white"
            srOnly={false}
            title="Scaleway Datacenter"
            objectFit="contain"
            py="1px"
            ml={{ _: '10px', lg: 0 }}
          />
        </x.a>
        <x.div display="flex" alignItems="center" order={3}>
          <ButtonBurger
            aria-hidden="true"
            aria-expanded={opened}
            aria-controls="mobile-link-list"
            onClick={toggle}
            display={{ _: 'flex', lg: 'none' }}
            alignItems="center"
            justifyContent="center"
            bg="transparent"
            border={0}
            borderRadius={0}
            borderStyle="none"
            cursor="pointer"
            p={0}
          >
            <Burger className={opened ? 'open' : ''}>
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <line x1="0" y1="2" x2="24" y2="2" strokeWidth="3" />
                  <line x1="0" y1="12" x2="24" y2="12" strokeWidth="3" />
                  <line x1="0" y1="22" x2="24" y2="22" strokeWidth="3" />
                </g>

                <g>
                  <line x1="0" y1="12" x2="24" y2="12" strokeWidth="3" />
                  <line x1="0" y1="12" x2="24" y2="12" strokeWidth="3" />
                </g>
              </svg>
            </Burger>
          </ButtonBurger>
        </x.div>
        {upLg ? (
          <ListLinks>
            <Hrefs />
          </ListLinks>
        ) : (
          <MobileModale
            opened={opened}
            renderModale={renderModale}
            close={close}
          />
        )}
      </x.div>
    </Navbar>
  )
}

function MobileModale({ opened, renderModale, close }) {
  const classNames = renderModale ? 'opened' : ''

  return (
    <>
      <Overlay display={opened ? 'block' : 'none'} />
      <MobileMenu className={classNames} top="50px">
        <FocusTrap
          active={opened}
          focusTrapOptions={{ allowOutsideClick: true, preventScroll: true }}
        >
          <MobileContent
            id="mobile-link-list"
            className={classNames}
            mx={{ _: 4, md: 10 }}
            mt={4}
          >
            <Hrefs onClick={close} />
          </MobileContent>
        </FocusTrap>
      </MobileMenu>
    </>
  )
}

const Navbar = styled(x.nav)`
  width: full;
  margin-top: ${({ $shouldDisplay }) => ($shouldDisplay ? '0' : '-200px')};
  transition: margin-top 200ms;
  display: flex;
  justify-content: center;

  z-index: 100;
  left: 0;
  right: 0;
  padding: 0;
  ${up(
    'lg',
    css`
      padding: 0;
      margin: 0;
    `,
  )}
`

const ListLinks = styled(x.ul)`
  position: relative;
  display: flex;
  flex-direction: row;
`

const MobileMenu = styled(x.div)`
  display: flex;
  position: absolute;
  left: 0;
  z-index: 100;
  width: full;
  /* background: linear-gradient(${theme.colors[
    'vertAntoine'
  ]}, transparent); */
  overflow: hidden;
  height: 0;
  transition: height 0s ease;
  &.opened {
    transition: height 0.6s ease;
    height: 312;
  }
`
const MobileContent = styled(x.ul)`
  display: flex;
  flex-direction: column;
  width: full;
  padding: 0 4;
  background-color: vertAntoine;
  border-radius: 18px;
  border-width: default;
  border-color: vertAntoineClair;
  li {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    border-color: vertAntoineClair;
    a {
      width: full;
      margin: 1.2rem 0;
    }
    :last-of-type {
      border: none;
    }
  }
`
const Overlay = styled(x.div)`
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    z-index: -1;
  }
`
const ButtonBurger = styled(x.button)`
  ${down(
    'lg',
    css`
      svg {
        transform: scale3d(1, 1, 1);
      }
      &:hover,
      &:focus {
        svg {
          transform: scale3d(1.1, 1.1, 1);
        }
      }
    `,
  )}
`
const Burger = styled.span`
  width: 6;
  height: 6;
  position: relative;
  svg {
    stroke: vertAntoine;
    transition: 0.2s;
    g {
      &:first-child {
        opacity: 1;
        transition: opacity 0s 0.2s;
        line {
          transition: transform 0.2s 0.2s;
          transform: translateY(0px);
        }
      }
      &:last-child {
        opacity: 0;
        transition: opacity 0s 0.2s;
        line {
          transition: transform 0.2s;
          transform: rotate(0deg);
          transform-origin: center;
        }
      }
    }
  }
  &.open svg {
    g {
      &:first-child {
        opacity: 0;
        line {
          transition: transform 0.25s ease-in-out;
          &:first-child {
            transform: translate3d(0, 7px, 0);
          }
          &:last-child {
            transform: translate3d(0, -7px, 0);
          }
        }
      }
      &:last-child {
        opacity: 1;
        line {
          transition: transform 0.25s 0.25s ease-in-out;
          &:first-child {
            transform: rotate3d(0, 0, 1, 45deg);
          }
          &:last-child {
            transform: rotate3d(0, 0, 1, -45deg);
          }
        }
      }
    }
  }
`
