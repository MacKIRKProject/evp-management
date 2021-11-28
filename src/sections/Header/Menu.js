import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { throttle } from 'throttle-debounce'
import FocusTrap from 'focus-trap-react'
import styled, {
  css,
  down,
  up,
  useUp,
  useViewportWidth,
  x,
} from '@xstyled/styled-components'
import theme from 'theme'

import {
  Content,
  EmailButton,
  Link,
  PhoneButton,
  Svg,
  VisuallyHidden,
} from 'components'

import { useLocale } from 'contexts'
import { slugify } from 'helpers'

import Logo from 'assets/logo-scaleway.inline.svg'

export const hrefs = [
  'anchor.key',
  'anchor.solutions',
  'anchor.documentation',
  'anchor.environmental',
  'anchor.compliance',
]

export function Hrefs({ ...props }) {
  const { gettext } = useLocale()

  return (
    <>
      {hrefs.map((intl, index) => {
        const href = gettext(intl)

        return (
          <x.li key={index} {...props}>
            <Link to={`#${slugify(href)}`} fontSize="default">
              {href}
            </Link>
          </x.li>
        )
      })}
    </>
  )
}

export function Menu() {
  const { gettext } = useLocale()
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
    <Navbar as="nav" $shouldDisplay={shouldDisplay}>
      <Content
        display="flex"
        flex="1"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        px={{ _: 4, lg: 0, md: 10 }}
      >
        <Link to="/" textDecoration="none">
          <Svg
            asset={Logo}
            width={{ _: 40, md: 247 }}
            height={1}
            viewBox="0 0 247 24"
            color="secondary"
            srOnly={false}
            title="Scaleway Datacenter"
          />
        </Link>
        <x.div display="flex" alignItems="center" order={3}>
          <PhoneButton tel={gettext('contact.phone.href')} isIcon mr={1}>
            {gettext('contact.phone.label')}
          </PhoneButton>
          <EmailButton mailto={gettext('contact.email.href')} isIcon>
            {gettext('contact.email.label')}
          </EmailButton>
          <ButtonBurger
            aria-hidden="true"
            aria-expanded={opened}
            aria-controls="mobile-link-list"
            onClick={toggle}
            display={{ _: 'flex', lg: 'none' }}
            alignItems="center"
            justifyContent="center"
            ml={3.5}
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
                  <line x1="0" y1="2" x2="24" y2="2" strokeWidth="2" />
                  <line x1="0" y1="12" x2="24" y2="12" strokeWidth="2" />
                  <line x1="0" y1="22" x2="24" y2="22" strokeWidth="2" />
                </g>

                <g>
                  <line x1="0" y1="12" x2="24" y2="12" strokeWidth="2" />
                  <line x1="0" y1="12" x2="24" y2="12" strokeWidth="2" />
                </g>
              </svg>
            </Burger>
            <VisuallyHidden as="span">
              {opened ? gettext('action.close') : gettext('action.open')}
            </VisuallyHidden>
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
      </Content>
    </Navbar>
  )
}

function MobileModale({ opened, renderModale, close }) {
  const classNames = renderModale ? 'opened' : ''

  return (
    <>
      <Overlay display={opened ? 'block' : 'none'} />
      <MobileMenu className={classNames} top={{ _: '3.5rem', md: '4rem' }}>
        <FocusTrap
          active={opened}
          focusTrapOptions={{ allowOutsideClick: true, preventScroll: true }}
        >
          <MobileContent
            id="mobile-link-list"
            className={classNames}
            mx={{ _: 4, md: 10 }}
          >
            <Hrefs onClick={close} />
          </MobileContent>
        </FocusTrap>
      </MobileMenu>
    </>
  )
}

const Navbar = styled.nav`
  width: full;
  margin-top: ${({ $shouldDisplay }) => ($shouldDisplay ? '0' : '-58px')};
  transition: margin-top 200ms;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  padding: 3 0;
  ${up(
    'lg',
    css`
      padding: 0;
      margin: 0;
    `,
  )}
  background-color: primary-a90;
  backdrop-filter: blur(8px);
`

const ListLinks = styled(x.ul)`
  position: relative;
  display: flex;
  flex-direction: row;
  a {
    height: full;
    display: block;
    padding: 6 2;
    text-decoration: none;
    &:link {
      color: secondary-100;
      text-decoration: none;
    }
    &:visited {
      color: secondary-300;
    }
  }
  li {
    position: relative;
    max-width: 64;
    overflow: hidden;
    display: block;
    ::before,
    ::after {
      content: '';
      bottom: 0;
      left: 0;
      background-color: secondary;
      position: absolute;
      width: full;
      z-index: -1;
      height: 1px;
    }
    ::after {
      background-color: transparent;
      height: 2px;
      transition: transform 0.4s cubic-bezier(0, 0.5, 0, 1),
        background-color 0.4s ease;
      animation: anchor-underline 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;
    }
    :hover,
    :focus-within {
      a {
        color: secondary;
      }
      ::after {
        animation: anchor-underline-hover 0.5s cubic-bezier(0, 0.5, 0, 1)
          forwards;
        background-color: tertiary;
      }
    }
    :first-of-type {
      ::before {
        left: 0.5rem;
      }
    }
    :last-of-type {
      ::before {
        width: calc(100% - 0.5rem);
      }
    }
  }

  @keyframes anchor-underline-hover {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes anchor-underline {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
`

const MobileMenu = styled(x.div)`
  display: flex;
  position: absolute;
  left: 0;
  z-index: 100;
  width: full;
  background: linear-gradient(${theme.colors['primary-a90']}, transparent);
  overflow: hidden;
  height: 0;
  transition: height 0s ease;
  &.opened {
    transition: height 0.6s ease;
    height: 288;
  }
`
const MobileContent = styled(x.ul)`
  display: flex;
  flex-direction: column;
  width: full;
  padding: 0 4;
  background-color: primary;
  border-radius: lg;
  border-width: default;
  border-color: gray-800;
  li {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    border-color: gray-800;
    a {
      width: full;
      margin: 1.2rem 0;
      &:link {
        color: secondary;
        text-decoration: none;
      }
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
    stroke: secondary;
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
